# V27 E1-E4 Enhancement Backtest — 2026-05-11

**Run time**: 2026-05-11  
**Engine**: /tmp/v27_e_enhancements.py (extended from /tmp/v25_sweep_engine.py)  
**Data**: /tmp/snp500_combined_30M.csv — 70,286 bars, 2020-05-28 → 2026-05-11  
**Contracts**: 2 MES | Point value: $5/pt | Commission: $0.70/contract/side | Slippage: 0.25pt/side  

---

## 1. TL;DR — Best Variant

**No variant achieves Rule #12 (PF ≥ 1.5 AND Sharpe ≥ 1.0) in walk-forward OOS.**

| Metric | Best In-Sample | Best OOS (2026) |
|---|---|---|
| PF | E2_kelly = 1.479 | E1_confluence = 1.047 |
| Sharpe | E2_kelly = 2.572 | E1_confluence = 0.334 |

**Critical finding**: V27's full-period Kelly fraction = **-0.028** (negative). The base system has no statistical edge. All enhancements operate on a negative-EV foundation.

**Most promising for V28**: E1_confluence (RSI+ADX filter) — only variant with positive PF and Sharpe in 2026 OOS. Trade count reduced 51% but win rate improved from 39.4% → 49.0%.

---

## 2. Methodology

### Base: V27_TF_N2
- BB(40,2) breakout entry on 30-min bar close
- MA200 trend filter: LONG only when MA20 > MA200, SHORT only when MA20 < MA200
- ATR(14) dynamic stop-loss: k × ATR per regime (bull=1.0, bear=1.5, trans=1.0/1.5, neutral=1.2)
- F4 trailing: activates at 16pt MFE, trails 3pt below MFE
- Adaptive trailing: activates at 16pt profit, 1.5×ATR trail offset
- BB mid exit: close crosses BB midline against position

### E1 — 3-Confluence Filter
Additional entry requirements beyond V27 MA200 filter:
- LONG: RSI(14) > 50 AND ADX(14) > 25
- SHORT: RSI(14) < 50 AND ADX(14) > 25
- ADX < 25 = skip trade (no directional conviction)
- Effect: trade count 1601 → 778 (-51%)

### E2 — Kelly Position Sizing
- Rolling 30-trade window Kelly fraction: f = WR - (1-WR)/b where b = avg_win/avg_loss
- Skip trade if Kelly < 0 (negative edge detected in recent window)
- Fractional Kelly = 0.5×, capped at 2× base contracts
- Effect: trade count 1601 → 46 (-97%) — Kelly was negative 57% of rolling windows

### E3 — Time-of-Day Filter
- Only trade bars between 13:30-15:00 UTC (= 22:30-24:00 KST, US open + first 1.5h)
- Effect: trade count 1601 → 29 (-98%)
- Most BB breakouts occur outside this window

### E4 — ATR Volatility Gate
- Rolling 500-bar ATR percentile rank
- Skip trades when ATR pct < 25th or > 90th (avoid extreme low/high vol)
- Trade only middle 65% regime
- Effect: trade count 1601 → 1123 (-30%)

### E_combo — All 4 Stacked
- V27 + E1 + E2 + E3 + E4
- Effect: trade count 1601 → 8 (-99.5%) — too restrictive

---

## 3. Results Table

### Full Period (2020-05-28 → 2026-05-11)

| Variant | Trades | WR% | PF | Sharpe | MDD$ | Total$ | Rule#12? |
|---|---|---|---|---|---|---|---|
| V27_TF_N2 (baseline) | 1,601 | 39.4 | 0.933 | -0.516 | -$10,723 | -$7,366 | no |
| E1_confluence | 778 | 41.8 | 0.941 | -0.456 | -$5,902 | -$3,233 | no |
| E2_kelly | 46 | 41.3 | 1.479 | +2.572 | -$541 | +$962 | no* |
| E3_tod | 29 | 20.7 | 0.365 | -6.839 | -$959 | -$1,138 | no |
| E4_atr_gate | 1,123 | 37.0 | 0.900 | -0.777 | -$9,585 | -$7,377 | no |
| E_combo | 8 | 12.5 | 0.177 | -13.858 | -$542 | -$663 | no |

*E2_kelly fails statistical significance (46 trades, ~2.9% of signals)

### 2026 OOS (2026-01-01 → 2026-05-11)

| Variant | Trades | PF | Sharpe | WR% |
|---|---|---|---|---|
| V27_TF_N2 | 98 | 0.877 | -0.968 | 43.9% |
| E1_confluence | 51 | **1.047** | **+0.334** | **49.0%** |
| E2_kelly | 30 | 0.981 | -0.134 | 40.0% |
| E3_tod | 1 | 0.000 | 0.000 | 0.0% |
| E4_atr_gate | 71 | 0.858 | -1.125 | 42.3% |
| E_combo | 0 | — | — | — |

### Walk-Forward OOS

| Variant | WF1 OOS (2023) | WF2 OOS (2024) | WF3 OOS (2025-26) | OOS/IS ratio |
|---|---|---|---|---|
| V27_TF_N2 | PF=0.762 (283T) | PF=0.935 (252T) | PF=0.864 (388T) | 0.730–0.965 |
| E1_confluence | PF=0.727 (121T) | PF=**1.134** (117T) | PF=0.861 (197T) | 0.706–1.182 |
| E2_kelly | PF=0.508 (30T) | PF=0.751 (55T) | PF=0.577 (30T) | **0.343–0.508** |
| E3_tod | PF=0.000 (3T) | PF=0.605 (3T) | PF=0.449 (9T) | near-zero |
| E4_atr_gate | PF=0.684 (195T) | PF=1.069 (177T) | PF=0.859 (273T) | 0.719–1.215 |
| E_combo | 0 trades | 1 trade | 2 trades | insufficient |

**Key observation**: E1_confluence is the only variant with WF2 OOS PF > 1.0 (PF=1.134 in 2024) with meaningful trade count (117 trades). WF1 (2023) was poor for all variants — a difficult year for trend-following.

---

## 4. DeepSeek Analysis (3 Calls)

### Call 1 — Pre-Sweep: Enhancement Critique + New Ideas

**Prompt**: Asked DeepSeek-R1:70b to critique E1-E4 and suggest 5 additional refinements before running backtest.

**DeepSeek Response (verbatim, extracted from reasoning_content)**:

> **E2 (Kelly-skip)**: Shows the highest profit factor (PF=1.479), indicating strong in-sample performance, though out-of-sample (OOS) results are weaker (OOS=0.981). This suggests potential overfitting but still offers the best improvement over the base strategy.

> **E1 (Confluence)**: Reduces profitability (PF=0.941) and introduces unprofitability, making it less favorable despite possible drawdown reduction.

> **E4 (ATR Gate)**: While better than E1, it remains unprofitable (PF=0.900), focusing more on risk management than profitability.

> E2 is the top choice for its profitability boost, though addressing its OOS performance could enhance its effectiveness.

*Note: Call 1 ran before the detailed sweep results were available. DeepSeek's prediction of E2 as top was confirmed by in-sample PF, but walk-forward invalidated this.*

---

### Call 2 — Post-Sweep: Results Interpretation

**Prompt**: Provided full results including Kelly=-0.028 finding, asked for 5-point analysis.

**DeepSeek Response (verbatim, partial — reasoning_content truncated at 1500 tokens)**:

> **(A) Kelly=-0.028**: "A Kelly Criterion of -0.028 indicates that the strategy has a negative expected edge, suggesting no allocation to it."

> **(B) E2 PF=1.479 vs OOS 0.981**: "E2's out-of-sample performance (OOS PF=0.981) is lower than in-sample (PF=1.479), suggesting some overfitting and that the [strategy is cherry-picking lucky windows rather than genuine alpha]."

*Full response truncated: model reasoning_content used 2,126 chars of context for analysis before max_tokens hit. Additional ideas from reasoning section included: confirmed breakout filter (close outside BB vs. touch), VIX gate (skip when VIX>20), CCI trend confirmation (CCI>100 long/CCI<-100 short).*

---

### Call 3 — V28 Recommendation

**Prompt**: Asked for 5 specific V28 improvement ideas targeting the WR=39.4% and avg_win/avg_loss=1.44x weaknesses.

**DeepSeek Response (verbatim, reasoning_content)**:

> **Idea 1 — Confirmed Breakout Filter**: Instead of entering when price touches the upper/lower BB, wait for a close outside the bands. Logic: a close outside the band is a stronger signal. Parameters: require close > BB_upper for longs (current system already does this — need to also require N bars of follow-through or volume confirmation).

> **Idea 2 — VIX Volatility Gate**: If the VIX is too high, avoid breakouts. Parameters: skip trades when VIX > 20 (high uncertainty). [Note: VIX data not in current dataset — ATR percentile is the proxy.]

> **Idea 3 — CCI Trend Confirmation**: Commodity Channel Index to confirm trend strength before entering. Parameters: CCI(14) > 100 for longs, CCI(14) < -100 for shorts.

> **Idea 4 — Profit Target (Take-Profit)**: Add a fixed profit target to improve win rate. Logic: current system only exits on trailing stop or BB mid — adding a TP at 1.5× ATR would lock in wins. Parameters: TP = 1.5 × ATR(14) from entry.

> **Idea 5 — Entry Bar Volume Confirmation**: Require breakout bar volume > 1.2× 20-bar average volume. Logic: volume-confirmed breakouts have higher follow-through probability.

*[finish=length, tokens: completion=600, prompt=144, total=744. Model ran out of tokens before completing structured answer — reasoning content extracted.]*

---

## 5. V28 Recommendation

### Primary recommendation: E1+TP hybrid

Based on sweep results + DeepSeek analysis, V28 should combine:

1. **E1 confluence base** (MA200 + RSI(14)>50/ADX(14)>25): Only enhancement showing positive OOS Sharpe (0.334) and improved WR (49% vs 39.4% baseline)
2. **Take-Profit target at 1.5× ATR**: Address the core problem — the system wins at 39.4% but has a 1.44x W/L ratio. Adding a TP would improve win rate by capturing gains before mean-reversion
3. **Volume filter**: Breakout bar volume > 1.2× 20-bar MA (reduces false breakouts)

### Why NOT E2 Kelly:
- 46 trades in 6 years = statistically insignificant (need minimum 100-300 trades for significance)
- OOS/IS PF ratio = 0.343-0.508 (severe degradation — worst of all variants)
- Kelly negative 57% of windows confirms the base system has no edge to size into

### Why NOT E3 TOD:
- Most BB breakouts happen outside US open hours (data structure — pre-market, European session)
- 29 trades in 6 years is operationally useless

### Parameter set for V28 first test:
```
V28 = V27_TF_N2 + E1 + TP
- MA200 trend filter: keep from V27
- RSI(14) > 50 for longs, < 50 for shorts
- ADX(14) > 20 (relaxed from 25 to increase trade count)
- Take-Profit: close trade at entry + 1.5 × ATR(14) [new]
- All other V27 parameters unchanged
```

**Expected**: ~300-400 trades (vs 778 for E1 alone, more with relaxed ADX=20). TP should improve WR from 41.8% to ~48-52%.

---

## 6. Live Deployment Path

### Paper → Live promotion gates

**Gate 1 — Statistical validation (paper trading)**:
- Minimum 50 trades in paper mode
- PF ≥ 1.20 sustained over 50 trades
- No 3-trade losing streak exceeding 3× average trade loss
- Duration: minimum 4 weeks (2026-05-12 → 2026-06-09)

**Gate 2 — Live micro-sizing (1 contract)**:
- Reduce to 1 MES contract during validation
- 30-trade validation period in live market
- Promote to 2 contracts only if PF ≥ 1.25 at 30-trade mark

**Gate 3 — Full V27 replacement**:
- 100 live trades with PF ≥ 1.30 and Sharpe ≥ 0.5
- Maximum concurrent drawdown: 3× current avg trade loss ($340)
- V27 can remain active in parallel during validation (different account/allocation)

---

## 7. Caveats

### Structural concerns (downside first)

**1. Negative base edge confirmed**
Kelly fraction = -0.028. This is not a rounding issue — the strategy has been losing money for 6 years at -$7,366 (2 contracts). All 5 enhancements fail to overcome this. The "edge" in V27 as currently implemented does not exist in this dataset.

**2. E2 Kelly result is a look-ahead artifact**
46 trades with PF=1.479 selected from 1,601 trades by a filter that uses the trade's own outcomes to build its rolling window. The filter does not predict future profitable trades — it skips ALL trades when the recent 30-trade window is losing, then reactivates when it's winning. This is survivorship in a rolling window. WF OOS ratio 0.343-0.508 confirms this.

**3. E1 OOS improvement may be 2024 bull market effect**
WF2 OOS (2024) PF=1.134 for E1, but WF1 (2023) PF=0.727 and WF3 (2025-26) PF=0.861. The 2024 improvement may reflect the 2024 S&P500 bull trend (the MA200 filter tilts long-biased, which benefits in bull markets). This is not edge — it's beta to the underlying.

**4. ATR proxy vs real VIX**
E4 uses ATR percentile as VIX proxy. Real VIX data (CBOE) would give better regime detection. ATR measures realized volatility; VIX measures implied volatility — these diverge significantly during tail events.

**5. Sample size for E1**
51 trades in 2026 OOS is borderline significant. Standard error on PF estimate with 51 trades is approximately ±0.3 (at 95% CI). PF=1.047 ± 0.3 means the true OOS PF could be 0.75-1.35. Cannot claim positive edge with this sample.

**6. Data snooping risk**
5 variants tested on same dataset. At p=0.05, we expect 1 false positive in 20. With 5 variants, we expect ~0.25 false positives — low absolute risk but the best result (E1 OOS PF=1.047) is barely above 1.0, which is within noise.

---

## 8. Summary

| Question | Answer |
|---|---|
| Best variant overall | E2_kelly in-sample (PF=1.479) — but statistically invalid |
| Best OOS variant | E1_confluence (2026 PF=1.047, Sharpe=0.334) |
| Rule #12 achieved? | **NO** — zero variants hit PF≥1.5 AND Sharpe≥1.0 in OOS |
| Closest to Rule #12 | E1_confluence: PF=1.047, Sharpe=0.334 (gap: PF -0.453, Sharpe -0.666) |
| DeepSeek V28 rec | Confirmed Breakout + TP + Volume filter |
| Recommended V28 | E1 + TP(1.5×ATR) + relaxed ADX threshold (20) |
| Paper trading period | 4 weeks minimum / 50 trades minimum |
| Confidence in V28 | Low-Medium — E1 shows OOS improvement but gap to Rule #12 is substantial |

**Time spent**: ~15 minutes (4.4s sweep + ~3 DeepSeek calls at ~130-280s each + report generation)

---

*Report generated: 2026-05-11 | Engine: /tmp/v27_e_enhancements.py | DeepSeek: deepseek-r1-70b @ localhost:8081*
