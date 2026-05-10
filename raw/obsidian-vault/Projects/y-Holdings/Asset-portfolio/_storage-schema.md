---
doc_type: storage_schema
version: 1.0
created: 2026-05-11
author: Buildy (executor)
status: active
---

# Asset 2-Tier Storage — Schema Design

## Architecture Overview

```
Obsidian (Primary)              SQLite/SQLCipher (Backup)
─────────────────────           ──────────────────────────
holdings/<date>-<ticker>.md  ←→  holdings table
thesis/<date>-<ticker>.md    ←→  theses table
correlations/                ←→  correlations table
cleanup-log-*.md             ←→  cleanup_log table
                             →   alpha_signals table
                             →   alerts table
                             →   notes table
                             →   transactions table
```

**Flow rule**: every write goes to SQLite first, then mirrors to Obsidian markdown.
If Obsidian is lost, full restore from SQLite is possible.

---

## Table Definitions

### 1. `holdings`

Current portfolio positions.

| Column | Type | Notes |
|--------|------|-------|
| `id` | INTEGER PRIMARY KEY AUTOINCREMENT | |
| `ticker` | TEXT NOT NULL | e.g. `005930.KS`, `COIN`, `BTC-USD` |
| `qty` | REAL NOT NULL | quantity (shares / units) |
| `avg_cost` | REAL NOT NULL | average cost per unit (in `currency`) |
| `currency` | TEXT NOT NULL DEFAULT 'KRW' | `KRW`, `USD`, `BTC` |
| `account` | TEXT NOT NULL | `Toss`, `Upbit`, `KIS`, `Kiwoom`, `IB` |
| `asset_class` | TEXT NOT NULL | `equity`, `crypto`, `etf`, `bond`, `commodity`, `real_estate`, `cash` |
| `market` | TEXT | `KR`, `US`, `CRYPTO` |
| `entry_date` | TEXT NOT NULL | ISO 8601 `YYYY-MM-DD` |
| `notes` | TEXT | free text |
| `created_at` | TEXT DEFAULT (datetime('now')) | |
| `updated_at` | TEXT DEFAULT (datetime('now')) | |

**Indexes**:
- `idx_holdings_ticker` ON `(ticker)`
- `idx_holdings_account` ON `(account)`
- `idx_holdings_entry_date` ON `(entry_date)`

**Primary key uniqueness note**: (ticker, account, entry_date) combination treated as logical unique to prevent duplicate inserts.

**Retention**: active positions only — zero out `qty` on exit, do not delete rows (history preserved).

---

### 2. `transactions`

Individual buy/sell events. Append-only audit trail.

| Column | Type | Notes |
|--------|------|-------|
| `id` | INTEGER PRIMARY KEY AUTOINCREMENT | |
| `ticker` | TEXT NOT NULL | |
| `tx_type` | TEXT NOT NULL | `BUY`, `SELL`, `TRANSFER_IN`, `TRANSFER_OUT`, `DIVIDEND` |
| `qty` | REAL NOT NULL | units transacted |
| `price` | REAL NOT NULL | price per unit |
| `currency` | TEXT NOT NULL DEFAULT 'KRW' | |
| `account` | TEXT NOT NULL | |
| `tx_date` | TEXT NOT NULL | ISO 8601 `YYYY-MM-DD` |
| `fee` | REAL DEFAULT 0 | brokerage fee |
| `notes` | TEXT | |
| `created_at` | TEXT DEFAULT (datetime('now')) | |

**Indexes**:
- `idx_transactions_ticker` ON `(ticker)`
- `idx_transactions_tx_date` ON `(tx_date)`
- `idx_transactions_account` ON `(account)`

**Retention**: permanent — never delete.

---

### 3. `theses`

Investment thesis per ticker. One active thesis per ticker at a time.

| Column | Type | Notes |
|--------|------|-------|
| `id` | INTEGER PRIMARY KEY AUTOINCREMENT | |
| `ticker` | TEXT NOT NULL | |
| `thesis_date` | TEXT NOT NULL | `YYYY-MM-DD` |
| `status` | TEXT NOT NULL DEFAULT 'active' | `active`, `invalidated`, `closed` |
| `conviction` | TEXT | `low`, `medium`, `high` |
| `bull_case` | TEXT | |
| `bear_case` | TEXT | |
| `invalidation_triggers` | TEXT | pipe-separated, e.g. `EPS miss|BTC<75k` |
| `target_price` | REAL | |
| `target_currency` | TEXT DEFAULT 'USD' | |
| `horizon_weeks` | INTEGER | expected hold duration |
| `action_on_trigger` | TEXT | what to do if invalidated |
| `source_doc` | TEXT | path to source Obsidian note |
| `created_at` | TEXT DEFAULT (datetime('now')) | |
| `updated_at` | TEXT DEFAULT (datetime('now')) | |

**Indexes**:
- `idx_theses_ticker_status` ON `(ticker, status)`
- `idx_theses_thesis_date` ON `(thesis_date)`

**Retention**: permanent — archive old theses with `status='invalidated'`.

---

### 4. `correlations`

Pairwise correlation snapshots between assets.

| Column | Type | Notes |
|--------|------|-------|
| `id` | INTEGER PRIMARY KEY AUTOINCREMENT | |
| `ticker_a` | TEXT NOT NULL | alphabetically first |
| `ticker_b` | TEXT NOT NULL | alphabetically second |
| `period_days` | INTEGER NOT NULL | e.g. `30`, `60`, `252` |
| `correlation` | REAL NOT NULL | -1.0 to 1.0 |
| `computed_date` | TEXT NOT NULL | `YYYY-MM-DD` |
| `data_source` | TEXT | e.g. `yahoo_finance`, `manual` |
| `notes` | TEXT | |
| `created_at` | TEXT DEFAULT (datetime('now')) | |

**Indexes**:
- `idx_correlations_pair` ON `(ticker_a, ticker_b, period_days)`
- `idx_correlations_computed_date` ON `(computed_date)`

**Retention**: keep all snapshots (correlation drift is meaningful signal). Purge snapshots older than 2 years.

---

### 5. `cleanup_log`

Record of position exits and rebalancing actions.

| Column | Type | Notes |
|--------|------|-------|
| `id` | INTEGER PRIMARY KEY AUTOINCREMENT | |
| `ticker` | TEXT NOT NULL | |
| `action_type` | TEXT NOT NULL | `FULL_EXIT`, `PARTIAL_EXIT`, `REBALANCE`, `STOP_LOSS` |
| `qty_sold` | REAL NOT NULL | |
| `exit_price` | REAL NOT NULL | |
| `currency` | TEXT NOT NULL DEFAULT 'KRW' | |
| `account` | TEXT NOT NULL | |
| `action_date` | TEXT NOT NULL | `YYYY-MM-DD` |
| `pnl_realized` | REAL | realized P&L in currency |
| `rule_triggered` | TEXT | which Asset rule triggered (e.g. `Rule#5`, `Rule#8`) |
| `rationale` | TEXT | brief rationale |
| `created_at` | TEXT DEFAULT (datetime('now')) | |

**Indexes**:
- `idx_cleanup_log_ticker` ON `(ticker)`
- `idx_cleanup_log_action_date` ON `(action_date)`

**Retention**: permanent.

---

### 6. `alpha_signals`

Trading signals and pattern observations. Research log.

| Column | Type | Notes |
|--------|------|-------|
| `id` | INTEGER PRIMARY KEY AUTOINCREMENT | |
| `signal_date` | TEXT NOT NULL | `YYYY-MM-DD` |
| `ticker` | TEXT | null = market-wide signal |
| `signal_type` | TEXT NOT NULL | `BREAKOUT`, `REVERSAL`, `DIVERGENCE`, `CATALYST`, `PATTERN` |
| `direction` | TEXT | `LONG`, `SHORT`, `NEUTRAL` |
| `confidence` | TEXT | `low`, `medium`, `high` |
| `description` | TEXT NOT NULL | |
| `source` | TEXT | where signal originated |
| `acted_on` | INTEGER DEFAULT 0 | 0=observed only, 1=acted |
| `outcome` | TEXT | filled in after resolution |
| `created_at` | TEXT DEFAULT (datetime('now')) | |

**Indexes**:
- `idx_alpha_signals_ticker` ON `(ticker)`
- `idx_alpha_signals_signal_date` ON `(signal_date)`

**Retention**: permanent — used for personal moat / confirmation-bias audit.

---

### 7. `alerts`

Price and event alert definitions.

| Column | Type | Notes |
|--------|------|-------|
| `id` | INTEGER PRIMARY KEY AUTOINCREMENT | |
| `ticker` | TEXT NOT NULL | |
| `alert_type` | TEXT NOT NULL | `PRICE_ABOVE`, `PRICE_BELOW`, `EARNINGS_DATE`, `CUSTOM` |
| `threshold` | REAL | price level (null for CUSTOM/date alerts) |
| `currency` | TEXT DEFAULT 'USD' | |
| `event_date` | TEXT | for EARNINGS_DATE type |
| `message` | TEXT NOT NULL | human-readable alert description |
| `status` | TEXT DEFAULT 'active' | `active`, `triggered`, `cancelled` |
| `triggered_at` | TEXT | when it fired |
| `created_at` | TEXT DEFAULT (datetime('now')) | |

**Indexes**:
- `idx_alerts_ticker_status` ON `(ticker, status)`

**Retention**: purge `triggered` + `cancelled` alerts older than 90 days.

---

### 8. `notes`

Free-form research notes and observations.

| Column | Type | Notes |
|--------|------|-------|
| `id` | INTEGER PRIMARY KEY AUTOINCREMENT | |
| `note_date` | TEXT NOT NULL | `YYYY-MM-DD` |
| `ticker` | TEXT | null = general market note |
| `category` | TEXT | `macro`, `position`, `rule`, `meeting`, `research` |
| `title` | TEXT NOT NULL | |
| `body` | TEXT NOT NULL | markdown content |
| `tags` | TEXT | comma-separated |
| `created_at` | TEXT DEFAULT (datetime('now')) | |
| `updated_at` | TEXT DEFAULT (datetime('now')) | |

**Indexes**:
- `idx_notes_ticker` ON `(ticker)`
- `idx_notes_note_date` ON `(note_date)`
- `idx_notes_category` ON `(category)`

**Retention**: permanent.

---

## Retention Policy Summary

| Table | Retention |
|-------|-----------|
| holdings | Permanent (zero qty on exit, no delete) |
| transactions | Permanent |
| theses | Permanent (status change on close) |
| correlations | 2 years rolling |
| cleanup_log | Permanent |
| alpha_signals | Permanent |
| alerts | 90 days after trigger/cancel |
| notes | Permanent |

---

## Obsidian Mirror Structure

```
Asset-portfolio/
├── holdings/
│   └── YYYY-MM-DD-TICKER.md      ← one file per holding entry
├── thesis/
│   └── YYYY-MM-DD-TICKER.md      ← one file per thesis
├── correlations/
│   └── YYYY-MM-DD-correlation-snapshot.md
├── cleanup-log-YYYY-MM.md        ← monthly cleanup log (append)
└── _storage-schema.md            ← this file
```

---

## Keychain Namespace

Password stored in macOS keychain under:
- **Service**: `y-tower-asset`
- **Account**: `sqlcipher`
- **Access**: read via `security find-generic-password -s y-tower-asset -a sqlcipher -w`
