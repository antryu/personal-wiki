# S&P500 MES Trading Summary — 2026 Q1 (Feb~Apr)

> Created: 2026-04-16
> Strategy: BB(40,2) + Regime Filter + Trailing Stop
> Contract: MES (Micro E-mini S&P500), 1 contract
> Broker: Kiwoom Securities (CME via VBA/Excel)
> Related: [[현재파라미터]], [[변경이력]], [[거래로직_상세]]

---

## Executive Summary

| Metric | Value |
|--------|-------|
| Period | 2026-02-10 ~ 2026-04-15 |
| Strategy Version | V21 → V22 → V23 (current) |
| Total Live Trades | **40** (34 from 2/14) |
| Total PnL (2/14~) | **+42.75pt (+$213.75)** |
| Win Rate (2/14~) | **61.8%** (21W / 13L) |
| Best Trade | +49.00pt (+$245.00) on 04/14 |
| Worst Trade | -21.50pt (-$107.50) on 04/07 |
| Current Status | V23 live, Long-only, 1 contract |
| Monthly Cost | CME signal fee $201/mo |
| Maintenance Margin | $2,442/contract |

---

## Timeline

### Phase 1: Initial Launch (2026-02-10 ~ 02-14)
- **Version**: V21 (BB40/2 + Regime + Trail 30/5~50/7)
- **Mode**: Unlimited daily trades
- **Result**: 6 trades, -3.50pt
- **Key Finding**: Overtrading reduces edge

### Phase 2: Daily Limit Applied (2026-02-14 ~ 02-23)
- **Change**: MAX_DAILY_TRADES = 1
- **Result**: 5 trades, -12.75pt
- **Key Finding**: Short trades = 100% of losses (0W 3L, -16.00pt)

### Phase 3: Long-Only Transition (2026-02-23)
- **Decision**: Disable Short entries in DOWN_LOW/DOWN_HIGH regimes
- **Rationale**: Short PF 0.60 in 146 backtest trades, 0W 3L live
- **Backtest support**: Short contributes 98% of total losses

### Phase 4: Trail Optimization (2026-02-28)
- **Change**: TrailStart 30~50 → 15pt, TrailStep 5~7 → 5pt
- **Backtest**: 24 strategy combinations on 70K 30-min candles (6 years)
- **Result**: PnL +12,980 → +18,757pt, WR 73.9% → 84.6%, PF 2.56 → 4.95

### Phase 5: SL Failure Incident (2026-03-18)
- **Event**: LONG trade, entry 6813.75, exit 6798.50, **-15.25pt ($-76.25)**
- **Root Cause**: No server-side STOP order, testloop=35 delay, flagCut dependency
- **Impact**: Largest single loss, exposed critical system vulnerability
- **Analysis**: [[2026-03-19_SL미작동분석]]

### Phase 6: V22 JEPA Research (2026-03-23 ~ 03-25)
- **Concept**: JEPA World Model prediction error → VBA proxy rules
- **Proxy**: `range_ratio = (H-L)/ATR14 <= 1.8` (volatility filter)
- **Result**: PF 1.97 → 1.99, maxDD -98 → -66 (33% improvement)
- **Decision**: Keep V21 for profit maximization, V22 for 2-contract phase
- **Analysis**: [[2026-03-25_V22_JEPA변환_비교]]

### Phase 7: V23 Hardening (2026-04-06)
- **Changes**:
  - TrailStart 15 → **10 ticks**, TrailStep 5 → **3 ticks** (aggressive profit capture)
  - RSI filter 35 → **33** (relaxed entry)
  - testloop 35 → **25** (40% faster SL check)
  - **Hard Stop: -48 ticks (-12pt)** unconditional (prevents SL failure repeat)
  - SL: Fixed → **ATR(20)_AVG x 12 dynamic** (min 10, max 60 ticks)
  - Range Ratio > 1.8 filter (from V22 JEPA research)
  - Y Dashboard integration (POST trade records)
- **Status**: Currently live

---

## Live Trade Log (Source: Kiwoom VBA + Discord notifications)

### Week 1 (02/10 ~ 02/13) — Unlimited Trades

| # | Date | Dir | Entry | Exit | PnL(pt) | PnL($) | Result |
|---|------|-----|-------|------|---------|--------|--------|
| 1 | 02/10 | LONG | 6984.00 | 6995.00 | +11.00 | +$55.00 | WIN |
| 2 | 02/10 | LONG | 6999.25 | 6995.00 | -4.25 | -$21.25 | LOSS |
| 3 | 02/11 | LONG | 6998.25 | 6994.50 | -3.75 | -$18.75 | LOSS |
| 4 | 02/11 | LONG | 6960.75 | 6964.00 | +3.25 | +$16.25 | WIN |
| 5 | 02/11 | LONG | 6961.00 | 6957.25 | -3.75 | -$18.75 | LOSS |
| 6 | 02/11 | LONG | 7005.00 | 6999.00 | -6.00 | -$30.00 | LOSS |

**Week 1 Total: -3.50pt (-$17.50)** — 2W / 4L

### Week 2 (02/14 ~ 02/20) — 1 Trade/Day Limit

| # | Date | Dir | Entry | Exit | PnL(pt) | PnL($) | Result |
|---|------|-----|-------|------|---------|--------|--------|
| 7 | 02/14 | SHORT | 6882.25 | 6888.50 | -6.25 | -$31.25 | LOSS |
| 8 | 02/17 | SHORT | 6844.00 | 6847.75 | -3.75 | -$18.75 | LOSS |
| 9 | 02/19 | SHORT | 6913.00 | 6919.00 | -6.00 | -$30.00 | LOSS |
| 10 | 02/19 | LONG | 6869.50 | 6876.50 | +7.00 | +$35.00 | WIN |
| 11 | 02/20 | LONG | 6897.75 | 6894.00 | -3.75 | -$18.75 | LOSS |

**Week 2 Total: -12.75pt (-$63.75)** — 1W / 4L

### Week 3 (02/25 ~ 02/27) — Post Short-Disable

| # | Date | Dir | Entry | Exit | PnL(pt) | PnL($) | Result |
|---|------|-----|-------|------|---------|--------|--------|
| 12 | 02/25 | SHORT | 6892.50 | 6884.25 | +8.25 | +$41.25 | WIN |
| 13 | 02/25 | LONG | 6925.00 | 6935.00 | +10.00 | +$50.00 | WIN |
| 14 | 02/26 | LONG | 6966.75 | 6963.00 | -3.75 | -$18.75 | LOSS |
| 15 | 02/27 | LONG | 6877.75 | 6874.00 | -3.75 | -$18.75 | LOSS |

**Week 3 Total: +10.75pt (+$53.75)** — 2W / 2L

### March — Trail Optimized (V21 T15/5)

| # | Date | Dir | Entry | Exit | PnL(pt) | PnL($) | Result |
|---|------|-----|-------|------|---------|--------|--------|
| 16 | 03/02 | SHORT | 6798.50 | 6794.00 | +4.50 | +$22.50 | WIN |
| 17 | 03/03 | SHORT | 6791.75 | 6789.50 | +2.25 | +$11.25 | WIN |
| 18 | 03/05 | SHORT | 6885.00 | 6883.00 | +2.00 | +$10.00 | WIN |
| 19 | 03/05 | LONG | 6845.50 | 6848.25 | +2.75 | +$13.75 | WIN |
| 20 | 03/06 | LONG | 6743.25 | 6747.75 | +4.50 | +$22.50 | WIN |
| 21 | 03/11 | SHORT | 6830.25 | 6827.50 | +2.75 | +$13.75 | WIN |
| 22 | 03/11 | LONG | 6772.25 | 6775.25 | +3.00 | +$15.00 | WIN |
| 23 | 03/12 | SHORT | 6717.75 | 6714.50 | +3.25 | +$16.25 | WIN |
| 24 | 03/12 | SHORT | 6696.00 | 6702.00 | -6.00 | -$30.00 | LOSS |
| 25 | 03/13 | LONG | 6697.25 | 6701.00 | +3.75 | +$18.75 | WIN |
| 26 | 03/13 | SHORT | 6660.00 | 6657.00 | +3.00 | +$15.00 | WIN |
| 27 | 03/16 | SHORT | 6696.00 | 6692.75 | +3.25 | +$16.25 | WIN |
| 28 | 03/17 | LONG | 6766.00 | 6772.00 | +6.00 | +$30.00 | WIN |
| 29 | 03/18 | LONG | 6813.75 | 6798.50 | -15.25 | -$76.25 | **SL FAIL** |
| 30 | 03/23 | SHORT | 6675.50 | 6690.75 | -15.25 | -$76.25 | LOSS |
| 31 | 03/26 | LONG | 6620.00 | 6624.00 | +4.00 | +$20.00 | WIN |
| 32 | 03/31 | LONG | 6491.00 | 6493.75 | +2.75 | +$13.75 | WIN |

**March Total: +11.25pt (+$56.25)** — 14W / 3L (82.4% WR)

### April — V23 Hardened

| # | Date | Dir | Entry | Exit | PnL(pt) | PnL($) | Result |
|---|------|-----|-------|------|---------|--------|--------|
| 33 | 04/02 | LONG | 6633.50 | 6635.00 | +1.50 | +$7.50 | WIN |
| 34 | 04/06 | LONG | 6634.25 | 6622.25 | -12.00 | -$60.00 | LOSS |
| 35 | 04/07 | LONG | 6664.25 | 6642.75 | -21.50 | -$107.50 | LOSS |
| 36 | 04/10 | LONG | 6822.50 | 6824.00 | +1.50 | +$7.50 | WIN |
| 37 | 04/10 | LONG | 6874.50 | 6862.50 | -12.00 | -$60.00 | LOSS |
| 38 | 04/14 | LONG | 6866.75 | 6854.75 | -12.00 | -$60.00 | LOSS |
| 39 | 04/14 | LONG | 6956.25 | 7005.00 | +49.00 | +$245.00 | **BEST** |
| 40 | 04/15 | LONG | 7018.25 | 7057.50 | +39.25 | +$196.25 | WIN |

**April Total: +33.75pt (+$168.75)** — 4W / 4L (50% WR, but big wins)

---

## Cumulative Statistics (40 trades total, 34 from 2/14)

### By Month

| Month | Trades | Wins | WR | PnL(pt) | PnL($) |
|-------|--------|------|----|---------|--------|
| Feb (all) | 15 | 5 | 33% | -5.50 | -$27.50 |
| Feb (2/14~) | 9 | 3 | 33% | -2.00 | -$10.00 |
| March | 17 | 14 | 82% | +11.25 | +$56.25 |
| April | 8 | 4 | 50% | +33.75 | +$168.75 |
| **Total (2/14~)** | **34** | **21** | **62%** | **+42.75** | **+$213.75** |

### By Direction

| Metric | Long | Short | Total |
|--------|------|-------|-------|
| Trades | 26 | 14 | 40 |
| Wins | 13 | 8 | 21 |
| Losses | 13 | 6 | 19 |
| Win Rate | 50% | 57% | 53% |

### Profit & Loss

| Item | Amount |
|------|--------|
| Gross PnL (2/14~4/15) | +$213.75 |
| CME Signal Fee (2 months) | -$402.00 |
| Commission (~34 x $1.94 RT) | -$66.00 |
| **Net P&L** | **-$254.25** |

> User confirmed: 34 trades, 21 profitable, $213.75 gross, -$468 costs

---

## Backtest Validation (6-Year OOS)

### Best Strategies (70K 30-min candles, 2019-2025)

| Strategy | Trades | WR | PnL(pt) | PF | MDD | Sharpe |
|----------|--------|-----|---------|-----|------|--------|
| BB+ATR3x20+T10/3 (V23) | 1,411 | 90.8% | 21,797 | 8.88 | -82 | 90.78 |
| BB+ATR3x20+T15/5 (V21) | 1,306 | 84.6% | 18,757 | 4.95 | -151 | 72.24 |
| Conservative T15/10 | 480 | 87.9% | 6,152 | 6.52 | -87 | 81.08 |

### Walk-Forward (60 Monthly Folds)
- **OOS Profitable Folds**: 51/60 (85%)
- **OOS Total PnL**: 2,643pt
- **Holdout (last 30 days)**: 51 trades, 88.2% WR, +257.7pt (+$1,289), Sharpe 3.74

---

## Current Parameters (V23)

| Regime | SL | TP | TrailStart | TrailStep |
|--------|-----|-----|------------|-----------|
| UP_LOW | ATR dyn | 25 | 10 | 3 |
| UP_HIGH | ATR dyn | 30 | 10 | 3 |
| DOWN_LOW | ATR dyn | 20 | 10 | 3 |
| DOWN_HIGH | ATR dyn | 25 | 10 | 3 |

- SL: `ATR(20)_AVG x 12` (min 10 ticks, max 60 ticks)
- Hard Stop: -48 ticks (-12pt) unconditional
- RSI(14) > 33 entry filter (Long only)
- MAX_DAILY_TRADES = 1
- testloop = 25 ticks

---

## Key Learnings

1. **Short Not Always Death**: Feb Short 0W 3L, but March Short 8W 2L (80%). Strategy tuning matters more than blanket disabling.
2. **SL Must Be Server-Side**: 3/18 SL failure (-15.25pt) exposed critical VBA-only SL vulnerability. Hard Stop added in V23.
3. **Overtrading Destroys Edge**: Week 1 unlimited (33% WR) vs later 1/day (improved).
4. **Trailing Stop is THE Edge**: T10/3 (V23) captures more profit than T30/5 (original).
5. **Live vs Backtest Gap**: 62% WR live vs 85-90% backtest. Slippage, timing, BB squeeze explain gap.
6. **BB Squeeze = Loss Zone**: 4/6 and 4/7 losses caused by narrow BB width → user noted "BB squeeze" pattern.
7. **Big Wins Cover Many Losses**: 4/14 (+49pt) and 4/15 (+39.25pt) = $441 covers 8+ small losses.
8. **Break-even needs scale**: $213.75 gross profit < $468 costs. Need 2+ contracts or higher win rate.

---

## Next Steps

- [ ] Implement server-side STOP orders (Kiwoom nHogaGb="3")
- [ ] Add BB width filter (skip entry when BB squeeze detected)
- [ ] Scale to 2 contracts once V23 proves consistent with 50+ trades
- [ ] Consider V22 (JEPA proxy) for risk-managed scaling
- [x] Update Y Dashboard with all historical trades (done: 40 trades in Supabase)
- [x] Document complete trade log (done: this note)

---

## Cost Structure

| Item | Monthly | Annual |
|------|---------|--------|
| CME Signal Fee | $201 | $2,412 |
| Slippage (est. 20 trades) | $50 | $600 |
| Commission (est. 20 trades) | $250 | $3,000 |
| **Total Operating Cost** | **~$501** | **~$6,012** |
| Break-even PnL needed | ~100pt/mo | ~1,202pt/yr |

---

## Files & References

- Strategy code: `/Users/andrew/Thairon/SnP500-trading/src/strategy.py`
- VBA Excel: `(SnP500) AT_V23_6월물_SummerY_TrailingS_260406.xlsm`
- Backtest reports: `/Users/andrew/Thairon/SnP500-trading/reports/`
- DuckDB (6yr data): `/Users/andrew/Thairon/SnP500-trading/data/sp500_multi_timeframe.duckdb`
- World Model: `/Users/andrew/Thairon/SnP500-trading/world-model/`
- Y Dashboard API: `POST /api/trades` (y-tower)
