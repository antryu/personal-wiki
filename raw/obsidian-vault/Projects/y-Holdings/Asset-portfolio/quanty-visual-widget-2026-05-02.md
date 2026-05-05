# Quanty Visual Widget — Build Report (2026-05-02)

## Files Created / Modified

| File | LOC | Role |
|---|---|---|
| `~/Thairon/y-company/src/app/api/asset/quanty-visual/route.ts` | 418 | GET endpoint — parses Quanty report, returns structured JSON |
| `~/Thairon/y-company/src/components/AssetQuantyVisual.tsx` | 444 | 4-panel recharts widget |
| `~/Thairon/y-company/src/app/asset/dashboard/page.tsx` | 554 | Added import + `<AssetQuantyVisual />` after `<AssetRiskPanel />` |
| `~/Thairon/y-company/src/app/asset/dashboard/page.tsx.bak-quanty-visual` | 551 | Backup before modification |

**Total new LOC: 862** (418 API + 444 component)

## API Response Shape (`/api/asset/quanty-visual`)

```json
{
  "reportDate": "2026-05-02",
  "reportFile": "quanty-pevkelly-2026-05-02.md",
  "totalKw": 62231875,
  "cashKw": 0,
  "actionBreakdown": {
    "EXIT": { "count": 11, "value": 9360000 },
    "TRIM": { "count": 2, "value": 0 },
    "HOLD": { "count": 5, "value": 0 },
    "ADD":  { "count": 2, "value": 0 }
  },
  "composition": {
    "current": [
      { "theme": "crypto", "label": "크립토", "value_kw": ..., "pct": ... },
      ...
    ],
    "postAction": [...]
  },
  "monteCarlo": {
    "bins": [
      { "midpoint": -41.0, "current": 12, "postAction": 3 },
      ...
    ],
    "currentMu": -0.55,
    "currentSigma": 17.58,
    "postActionMu": 0.13,
    "postActionSigma": 11.74,
    "currentVaR1pct": -41.38,
    "postActionVaR1pct": -27.07,
    "currentP50": -0.46,
    "postActionP50": 0.16
  },
  "evRanking": [
    { "ticker": "BTC", "name": "Bitcoin", "ev": 5.0, "action": "EXIT" },
    ...
  ],
  "_source": "quanty-pevkelly-2026-05-02.md"
}
```

## Data Source

- Primary: `~/Thairon/obsidian-vault/Projects/y-Holdings/Asset/quanty-*.md` (latest file, auto-detected by filename sort)
- Portfolio total: `Asset/portfolio/*-snapshot.md` YAML frontmatter (`total_kw`, `cash_kw`)
- Monte Carlo bins: seeded pseudo-random (mulberry32) using parsed μ/σ from report sections `## 3. Monte Carlo` / `## 4. Monte Carlo` — falls back to hardcoded report values if parsing misses

## Build Verification

- `npx tsc --noEmit`: zero new errors (5 pre-existing test file errors unchanged)
- `npx next build`: PASS — `/api/asset/quanty-visual` compiled as dynamic route (ƒ)
- Dashboard `/asset/dashboard` compiled as static (○)

## Visualizes Dynamically

YES — data fetched from `/api/asset/quanty-visual` at component mount and on manual refresh. No hardcoded chart values; all driven from Obsidian markdown report.

## Dashboard Integration

Widget inserted between `<AssetRiskPanel />` and the Phase B3 section in `page.tsx`. Section header: "Quanty 정량 권고" (via `Panel` component from `AssetDashboardB1Utils`).

## Phase 2 Enhancement Ideas

1. **Auto-refresh on snapshot update**: poll `reportDate` field and re-fetch when new Quanty report is generated (file watcher or 30-min interval)
2. **Fat-tail MC**: replace Gaussian with bootstrap/t-distribution as noted in the Quanty bottom line; requires server-side Python subprocess or pre-computed bins stored in Obsidian
3. **Drill-down modal**: click EV bar → expand to full thesis for that ticker from `AssetThesisLedger`
4. **Post-action simulation toggle**: wire Panel 2 toggle state to Panel 3 so switching "현재/권고 후" syncs both composition and MC
5. **Historical EV trend**: overlay EV values across multiple Quanty report dates (when > 1 report exists)
