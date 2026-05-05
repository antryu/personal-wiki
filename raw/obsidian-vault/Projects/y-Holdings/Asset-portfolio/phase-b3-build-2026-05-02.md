# Phase B3 Build Report — 2026-05-02

## Files Created

| Path | LOC | Description |
|---|---|---|
| `~/y-asset/scripts/sync-obsidian-to-sqlite.py` | +60 lines | Added bridge_holding_history function and call in process_file |
| `~/Thairon/y-company/src/app/api/asset/correlation/route.ts` | 120 | Rolling correlation API |
| `~/Thairon/y-company/src/app/api/asset/leadlag/route.ts` | 110 | Lead/Lag matrix API |
| `~/Thairon/y-company/src/app/api/asset/granger/route.ts` | 230 | Granger causality API (OLS F-test, pure TS) |
| `~/Thairon/y-company/src/components/AssetRollingCorrelation.tsx` | 120 | Rolling correlation timeline (recharts LineChart, multiple series) |
| `~/Thairon/y-company/src/components/AssetLeadLag.tsx` | 100 | Lead/Lag heatmap table |
| `~/Thairon/y-company/src/components/AssetGrangerCausality.tsx` | 110 | Granger results table with p-values and verdict labels |
| `~/Thairon/y-company/src/app/asset/dashboard/page.tsx` | +15 lines | Added Phase B3 section header and 3 component mounts |

## Schema Addition (DDL)

Applied to ytower.db (unencrypted, dashboard-accessible):

```sql
CREATE TABLE IF NOT EXISTS holding_history (
    date TEXT NOT NULL,
    asset_id TEXT NOT NULL,
    market_value_kw INTEGER NOT NULL DEFAULT 0,
    unrealized_pnl_kw INTEGER NOT NULL DEFAULT 0,
    PRIMARY KEY(date, asset_id)
);
CREATE INDEX IF NOT EXISTS idx_hh_date ON holding_history(date DESC);
CREATE INDEX IF NOT EXISTS idx_hh_asset ON holding_history(asset_id);
```

## Backfill Verification

```
SELECT COUNT(*), COUNT(DISTINCT date), COUNT(DISTINCT asset_id) FROM holding_history;
Result: 60 rows | 3 dates | 26 asset_ids
Dates: 2026-04-29, 2026-05-01, 2026-05-02
```

## Empty State Design

All 3 components display when current_days < 30:
- Korean: "30일 이상 데이터 누적 후 표시 (현재 N일)"
- English: "Requires 30+ days of data (current: N days)"
- API response: { status: "insufficient_data", required_days: 30, current_days: N }

## Ancillary Fix

Pre-existing SSR crash fixed: AssetCorrelationNetwork.tsx used static import of react-force-graph-2d which accessed window at module-eval time. Fixed with next/dynamic + ssr: false.

## 30-Day Milestone — Auto-populate Verification Plan

When holding_history reaches 30+ distinct dates (no code change needed):
1. GET /api/asset/correlation returns { status: "ok", rows: [{ a, b, series }...] }
2. GET /api/asset/leadlag returns { status: "ok", rows: [{ asset_id, lags }...] }
3. GET /api/asset/granger returns { status: "ok", rows: [{ a, b, p_a_to_b, p_b_to_a, verdict, confidence }...] }

Verification command when milestone reached:
```bash
sqlite3 ~/Thairon/y-company/data/ytower.db "SELECT COUNT(DISTINCT date) FROM holding_history;"
```

## Build Status

npm run build: PASS — 55/55 pages, 0 TypeScript errors, 0 component errors.
