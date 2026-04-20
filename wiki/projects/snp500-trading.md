# SnP500 Trading

> MES (Micro E-mini S&P500) auto-trading system. Webhook-driven pipeline that logs every trade from Discord to wiki with zero manual input.
> Last updated: 2026-04-20

## Overview

Trading engine publishes bell/check_mark events to `#snp500-trading` Discord channel. y-bot (PM2 on M4) parses each message and writes structured records to `trading/snp500/`. Wiki is git-synced so y-tower's Quanty agent queries the same data.

## Pipeline

```
Trading engine (M1)
  ↓ webhook
#snp500-trading Discord channel
  ↓ y-bot listener (M4 PM2)
  ↓ parse + write
wiki/trading/snp500/
  ↓ git push (auto)
Quanty (y-tower) wiki_search
```

## Key Points

- **Data location:** `wiki/trading/snp500/` — see [[README]] in that folder
- **Monthly table:** `trades/YYYY-MM.md` (date, direction, entry, exit, PnL, regime)
- **Daily events:** `daily/YYYY-MM-DD.md` (🔔 entries + ✅ exits)
- **Monthly summary:** `monthly/YYYY-MM-summary.md` (auto-regenerated daily at 08:00 KST)
- **Strategy:** BB_ATR_V21 (Bollinger 40/2 + ATR trailing + RSI > 33 + regime filter)
- **Exit types:** `휴장전청산_S` (session close), `ATR_S` (trailing), `SL` (stop loss)
- **Regimes:** UP_HIGH / UP_LOW / DOWN_HIGH / DOWN_LOW

## Current Performance (Mar–Apr 2026)

| Metric | Value |
|--------|-------|
| Trades | 8 |
| Win rate | 100% |
| Total PnL | +162 pt (~$810) |
| Direction | all LONG |
| Regime | all UP_HIGH |
| Best | +61.25 pt (휴장전청산_S) |
| Worst | +1.50 pt (ATR_S) |

## Quanty Integration

y-tower `Quanty` agent uses `wiki_search` to read these files. Sample queries:
- "최근 SnP500 매매 성과는?" → `monthly/2026-04-summary.md`
- "휴장전청산 전략 성과" → trades table filtered by `exitType`
- "이번 달 매매 내역" → `trades/2026-04.md`

## Related

- [[snp500-regime-strategy]]
- [[trading-strategy]]
- [[s-p500-performance-summary-march-16-april-15]]
- [[y-tower-system]]

## Sources

- Live data: `trading/snp500/` folder
- Original Discord: `#snp500-trading` channel (guild `R.Andrew님의 서버`)
- Parser: `~/PRJs/y-bot/snp-logger.js`
- Summary generator: `~/PRJs/y-bot/snp-summary.js`
