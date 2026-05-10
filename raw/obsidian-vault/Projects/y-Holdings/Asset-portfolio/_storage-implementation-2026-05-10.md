---
doc_type: implementation_report
created: 2026-05-11
author: Buildy (executor)
status: ready_for_first_input
---

# Asset 2-Tier Storage — Implementation Report

## What Was Built

### Files Created

| Path | Purpose |
|------|---------|
| `~/y-tower/asset-storage/init.sh` | One-time DB initializer (idempotent) |
| `~/y-tower/asset-storage/insert-holding.py` | CLI to add holdings to both tiers |
| `~/y-tower/asset-storage/README.md` | Quick-start guide + backup/recovery |
| `~/Thairon/obsidian-vault/Projects/y-Holdings/Asset-portfolio/_storage-schema.md` | Full 8-table schema with retention policies |
| `~/y-tower/asset-storage/asset.db` | Encrypted SQLCipher DB (live, created) |
| `~/Thairon/obsidian-vault/Projects/y-Holdings/Asset-portfolio/holdings/` | Obsidian mirror directory (created) |

### Architecture

```
Chairman enters: insert-holding.py --ticker ... --qty ... --account ...
                         │
              ┌──────────┴──────────┐
              ▼                     ▼
   SQLCipher asset.db          Obsidian .md mirror
   (encrypted, AES-256)        (plaintext, browsable)
   PRIMARY BACKUP              PRIMARY BROWSE
```

### Database

- Engine: SQLCipher 4.15.0 (community)
- Encryption: AES-256-CBC
- Password: macOS keychain (`y-tower-asset` / `sqlcipher`)
- Tables: holdings, transactions, theses, correlations, cleanup_log, alpha_signals, alerts, notes

## How to Use — One Example

```bash
python3 ~/y-tower/asset-storage/insert-holding.py \
  --ticker 005930.KS \
  --qty 5 \
  --avg-cost 73000 \
  --currency KRW \
  --date 2026-05-10 \
  --account Toss \
  --asset-class equity \
  --market KR \
  --notes "Samsung Electronics"
```

Output:
```
Inserting: 005930.KS | 5.0 units | 73000.0 KRW | Toss | 2026-05-10
  SQLCipher row inserted: id=1
  Obsidian mirror written: .../holdings/2026-05-10-005930.KS.md
Done.
```

The Obsidian file appears immediately in Andrew's vault under `Asset-portfolio/holdings/`.

## Verification Evidence

Sanity test (Samsung 005930.KS) was successfully inserted:
- DB row confirmed: `1|005930.KS|5.0|73000.0|KRW|Toss|2026-05-10`
- Obsidian file written: `holdings/2026-05-10-005930.KS.md` (shows table with total cost ₩365,000)
- Duplicate detection tested: second insert returned `SKIPPED` with UPDATE instructions
- Idempotency of `init.sh` tested: re-run skips DB creation cleanly

## Outstanding Issues / Next Steps

### Immediate

1. **The Samsung test row is live** — row id=1 in `holdings`. If this was just a test, delete it:
   ```bash
   PW=$(security find-generic-password -s y-tower-asset -a sqlcipher -w)
   printf "PRAGMA key='%s';\nDELETE FROM holdings WHERE id=1;" "$PW" \
     | sqlcipher ~/y-tower/asset-storage/asset.db
   rm ~/Thairon/obsidian-vault/Projects/y-Holdings/Asset-portfolio/holdings/2026-05-10-005930.KS.md
   ```

2. **Keychain ACL dialog** — when `init.sh` first created the keychain entry, macOS showed a GUI dialog. This is normal one-time behavior. Future reads are silent.

### Next Steps (when ready)

- **Backfill existing positions** from `thesis-full-coverage-2026-05-02.md` — run `insert-holding.py` for each of the 20 holdings
- **`insert-transaction.py`** — same pattern for buy/sell events into `transactions` table
- **`insert-thesis.py`** — for `theses` table entries
- **Periodic backup cron** — `cp asset.db asset-backup-$(date +%Y%m%d).db` weekly
- **Correlation loader** — Python script to pull pairwise correlations from Yahoo Finance and insert into `correlations` table

## Recommendation: Ready for First Chairman Input?

**Yes.** Both tiers are live and verified:
- SQLCipher DB initialized with all 8 tables
- `insert-holding.py` writes to both DB and Obsidian atomically
- Idempotency prevents accidental duplicates
- Password is in macOS keychain (no manual entry required)

Start entering real positions using `insert-holding.py`. The test Samsung row can be kept as a reference or deleted.
