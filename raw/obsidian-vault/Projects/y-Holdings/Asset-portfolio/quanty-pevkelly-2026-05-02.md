---
report_type: quanty_pev_kelly
report_date: 2026-05-02
operator: Andrew (의장 / Chairman of _y Asset)
source_snapshot: /Users/andrew/Thairon/obsidian-vault/Projects/y-Holdings/Asset/portfolio/2026-05-02-snapshot.md
source_thesis: /Users/andrew/Thairon/obsidian-vault/Projects/y-Holdings/Asset/thesis-full-coverage-2026-05-02.md
status: generated_read_only_inputs_no_trade_commands
simulations: 10000
---

# Quanty P/EV/Kelly Re-evaluation — Andrew Portfolio 20 Holdings

> 교육·참고용 정량 리포트. 실거래 명령 없음. Snapshot/thesis/rules files were read-only inputs.

## Method Notes

- Scenario order: **목표도달 / 손절 / 시간초과 / 극단꼬리**.
- Standard payoff: **+20% / -10% / 0% / -30%**.
- 2x ETF payoff adjusts for decay/risk: **+14% / -16% / -6% / -36%**. This applies to BITX, AGQ, ETHU, PLTU, UGL, NVDX, 122630.
- 30-day realized volatility: Yahoo Finance daily adjusted close via `yfinance`, annualized as `std(daily returns) * sqrt(252)`.
- KR stocks: **데이터 한계**. Yahoo/KRX data was used where available; probability priors remain lower-confidence.
- Kelly: numeric maximization of expected log growth over the four scenario returns. Recommended sizing uses **1/4 Kelly** and is still bounded by Rule #1/#11 caps.
- Monte Carlo: 10,000 one-year multivariate normal simulations using scenario EV as drift, 30-day vol as sigma, and 60-day Yahoo return correlations. Gaussian tails understate crisis risk.

## 1. Per-asset P/EV/Sharpe/Kelly Table

P columns are `%` in the order **Target/Stop/Time-out/Tail**. Payoff columns use the same order.

| Ticker | 종목 | 평가액 | 투자비중 | P(%) | Payoff(%) | EV | Variance | 30D Vol | Sharpe est. | Full Kelly | 1/4 Kelly | Action | 비고 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| COIN | Coinbase Global | ₩4,187,048 | 14.3% | 34/25/28/13 | +20/-10/+0/-30 | +0.40% | 277.8 | 65.1% | 0.01 | 14.3% | 3.6% | HOLD |  |
| BITX | 2x Bitcoin Strategy ETF | ₩3,577,427 | 12.3% | 30/26/26/18 | +14/-16/-6/-36 | -8.00% | 304.0 | 62.0% | -0.13 | 0.0% | 0.0% | TRIM |  |
| OIH | VanEck Oil Services ETF | ₩3,301,832 | 11.3% | 32/28/30/10 | +20/-10/+0/-30 | +0.60% | 245.6 | 23.4% | 0.03 | 24.2% | 6.1% | TRIM |  |
| XLE | Energy Select Sector SPDR | ₩2,641,057 | 9.0% | 24/35/28/13 | +20/-10/+0/-30 | -2.60% | 241.2 | 27.2% | -0.10 | 0.0% | 0.0% | EXIT |  |
| SIL | Global X Silver Miners ETF | ₩2,622,100 | 9.0% | 45/18/27/10 | +20/-10/+0/-30 | +4.20% | 270.4 | 46.0% | 0.09 | 134.1% | 33.5% | ADD |  |
| AGQ | ProShares Ultra Silver | ₩2,476,650 | 8.5% | 38/22/25/15 | +14/-16/-6/-36 | -5.10% | 308.2 | 87.7% | -0.06 | 0.0% | 0.0% | EXIT |  |
| ETHU | 2x Ether ETF | ₩1,494,208 | 5.1% | 33/24/28/15 | +14/-16/-6/-36 | -6.30% | 290.9 | 76.7% | -0.08 | 0.0% | 0.0% | EXIT |  |
| PLTU | T-Rex 2x Long Palantir | ₩1,170,145 | 4.0% | 35/28/17/20 | +14/-16/-6/-36 | -7.80% | 344.8 | 122.6% | -0.06 | 0.0% | 0.0% | EXIT |  |
| IONQ | IonQ Inc | ₩993,929 | 3.4% | 43/20/24/13 | +20/-10/+0/-30 | +2.70% | 301.7 | 126.2% | 0.02 | 83.0% | 20.8% | HOLD |  |
| UGL | ProShares Ultra Gold | ₩603,949 | 2.1% | 45/18/27/10 | +14/-16/-6/-36 | -1.80% | 270.4 | 42.4% | -0.04 | 0.0% | 0.0% | EXIT |  |
| RGTI | Rigetti Computing | ₩511,446 | 1.8% | 25/35/20/20 | +20/-10/+0/-30 | -4.50% | 294.8 | 95.1% | -0.05 | 0.0% | 0.0% | EXIT |  |
| NVDX | T-Rex 2x Long NVIDIA | ₩264,314 | 0.9% | 42/20/25/13 | +14/-16/-6/-36 | -3.50% | 298.8 | 73.1% | -0.05 | 0.0% | 0.0% | EXIT |  |
| NTR | Nutrien Ltd | ₩112,550 | 0.4% | 24/25/41/10 | +20/-10/+0/-30 | -0.70% | 210.5 | 33.8% | -0.02 | 0.0% | 0.0% | EXIT |  |
| 122630 | KODEX 레버리지 | ₩115,450 | 0.4% | 32/24/32/12 | +14/-16/-6/-36 | -5.60% | 259.8 | 70.5% | -0.08 | 0.0% | 0.0% | EXIT | 데이터 한계 |
| 318010 | 팜스빌 | ₩73,852 | 0.3% | 18/38/30/14 | +20/-10/+0/-30 | -4.40% | 216.6 | 24.3% | -0.18 | 0.0% | 0.0% | EXIT | 데이터 한계 |
| 329200 | TIGER 리츠부동산인프라 | ₩18,660 | 0.1% | 34/16/42/8 | +20/-10/+0/-30 | +2.80% | 216.2 | 23.1% | 0.12 | 117.0% | 29.3% | ADD | 데이터 한계 |
| 352560 | KODEX 한국부동산리츠인프라 | ₩14,565 | 0.0% | 30/17/45/8 | +20/-10/+0/-30 | +1.90% | 205.4 | 20.3% | 0.09 | 87.1% | 21.8% | HOLD | 데이터 한계 |
| ETH | Ethereum | ₩2,974,572 | 10.2% | 46/18/26/10 | +20/-10/+0/-30 | +4.40% | 272.6 | 42.5% | 0.10 | 138.1% | 34.5% | HOLD |  |
| XRP | Ripple | ₩1,942,617 | 6.7% | 40/20/28/12 | +20/-10/+0/-30 | +2.40% | 282.2 | 30.7% | 0.08 | 79.6% | 19.9% | HOLD |  |
| BTC | Bitcoin | ₩99,661 | 0.3% | 48/16/26/10 | +20/-10/+0/-30 | +5.00% | 273.0 | 30.4% | 0.16 | 151.1% | 37.8% | EXIT |  |

## 2. Action Ranking — Kelly x EV Product

Positive score means mathematically attractive, but action still respects theme caps, token-position rules, and 2x ETF rules.

| Ticker | Action | EV | Sharpe | 1/4 Kelly | Kelly x EV | Reason |
| --- | --- | --- | --- | --- | --- | --- |
| BTC | EXIT | +5.00% | 0.16 | 37.8% | 1.889 | Positive BTC prior but dust size; either size meaningfully later or remove noise. |
| ETH | HOLD | +4.40% | 0.10 | 34.5% | 1.519 | Spot ETH is efficient exposure; theme cap blocks ADD. |
| SIL | ADD | +4.20% | 0.09 | 33.5% | 1.408 | Silver miner thesis remains positive after removing AGQ duplicate. |
| 329200 | ADD | +2.80% | 0.12 | 29.3% | 0.819 | KR REIT income sleeve; 데이터 한계 but favorable income prior. |
| IONQ | HOLD | +2.70% | 0.02 | 20.8% | 0.561 | Higher-quality quantum exposure; earnings catalyst, runway intact. |
| XRP | HOLD | +2.40% | 0.08 | 19.9% | 0.477 | Payments-rail optionality, but crypto aggregate is high. |
| 352560 | HOLD | +1.90% | 0.09 | 21.8% | 0.413 | KR REIT duplicate; 데이터 한계, consolidate with 329200 if scaling. |
| OIH | TRIM | +0.60% | 0.03 | 6.1% | 0.036 | Winner near 52w high; positive EV but energy theme over cap. |
| COIN | HOLD | +0.40% | 0.01 | 3.6% | 0.014 | BTC beta + 5/7 earnings catalyst; positive but thin EV. |
| UGL | EXIT | -1.80% | -0.04 | 0.0% | -0.000 | Gold thesis valid, but 2x tool should rotate to IAU/GLD. |
| BITX | TRIM | -8.00% | -0.13 | 0.0% | -0.000 | 2x BTC daily reset; Rule #5/#11 violation, trim 70%. |
| NVDX | EXIT | -3.50% | -0.05 | 0.0% | -0.000 | Positive NVDA thesis but 2x tool and token sizing are wrong. |
| NTR | EXIT | -0.70% | -0.02 | 0.0% | -0.000 | Consensus upside absent and position is token-sized. |
| 122630 | EXIT | -5.60% | -0.08 | 0.0% | -0.000 | KR beta 2x token position; 데이터 한계. |
| 318010 | EXIT | -4.40% | -0.18 | 0.0% | -0.000 | Revenue decline/OP loss; 데이터 한계. |
| PLTU | EXIT | -7.80% | -0.06 | 0.0% | -0.000 | 2x single-name into binary earnings event. |
| ETHU | EXIT | -6.30% | -0.08 | 0.0% | -0.000 | 2x ETH inferior to spot ETH already held. |
| AGQ | EXIT | -5.10% | -0.06 | 0.0% | -0.000 | 2x silver vol drag; same thesis as SIL. |
| XLE | EXIT | -2.60% | -0.10 | 0.0% | -0.000 | Oil spike not translating to producer ETF; OIH is cleaner energy exposure. |
| RGTI | EXIT | -4.50% | -0.05 | 0.0% | -0.000 | Rule #7 triggered; weaker quantum duplicate versus IONQ. |

### Top 3 Active Fixes Used In Post-action Simulation

These are selected by **negative-EV removal + portfolio risk impact**, not by passive HOLD ranking:

| # | 실행 가정 | Portfolio effect |
|---|---|---|
| 1 | BITX 70% TRIM | Removes largest 2x crypto drag while retaining small BTC tactical exposure |
| 2 | PLTU EXIT | Removes binary 2x single-name earnings risk |
| 3 | AGQ EXIT | Removes 2x silver duplicate; SIL remains as 1x miner exposure |

## 3. Monte Carlo — Current Portfolio 1Y Distribution

Total portfolio denominator: **₩62,231,875** including cash. Invested assets carry simulated risk; cash return assumed 0%.

| Metric | Value |
|---|---:|
| Mean expected return | -0.55% |
| Volatility | 17.58% |
| P(loss) | 51.2% |
| 1% MDD proxy / VaR | -41.38% |
| P5 / P25 / P50 / P75 / P95 | -29.88% / -12.17% / -0.46% / 11.27% / 28.30% |

```text
 -41.4% to  -37.5% | ███
 -37.5% to  -33.6% | ████
 -33.6% to  -29.7% | ██████
 -29.7% to  -25.8% | ██████████
 -25.8% to  -22.0% | ████████████
 -22.0% to  -18.1% | ████████████████
 -18.1% to  -14.2% | █████████████████████
 -14.2% to  -10.3% | ██████████████████████████
 -10.3% to   -6.4% | █████████████████████████████
  -6.4% to   -2.5% | █████████████████████████████████
  -2.5% to    1.3% | ██████████████████████████████████
   1.3% to    5.2% | ████████████████████████████████
   5.2% to    9.1% | █████████████████████████████
   9.1% to   13.0% | ██████████████████████████
  13.0% to   16.9% | █████████████████████
  16.9% to   20.8% | ██████████████████
  20.8% to   24.7% | █████████████
  24.7% to   28.5% | ██████████
  28.5% to   32.4% | ██████
  32.4% to   36.3% | ████
  36.3% to   40.2% | ██
```

## 4. Monte Carlo — Post-action Portfolio 1Y Distribution

Assumption: BITX 70% trim, PLTU exit, AGQ exit; proceeds remain cash. No new trade command implied.

| Metric | Value |
|---|---:|
| Mean expected return | 0.13% |
| Volatility | 11.74% |
| P(loss) | 49.4% |
| 1% MDD proxy / VaR | -27.07% |
| P5 / P25 / P50 / P75 / P95 | -19.56% / -7.79% / 0.16% / 8.20% / 19.13% |

```text
 -27.1% to  -24.5% | ███
 -24.5% to  -21.9% | █████
 -21.9% to  -19.3% | ███████
 -19.3% to  -16.7% | █████████
 -16.7% to  -14.2% | █████████████
 -14.2% to  -11.6% | █████████████████
 -11.6% to   -9.0% | █████████████████████
  -9.0% to   -6.4% | █████████████████████████
  -6.4% to   -3.8% | ████████████████████████████
  -3.8% to   -1.2% | █████████████████████████████████
  -1.2% to    1.3% | ██████████████████████████████████
   1.3% to    3.9% | ████████████████████████████████
   3.9% to    6.5% | ███████████████████████████
   6.5% to    9.1% | ███████████████████████████
   9.1% to   11.7% | ██████████████████████
  11.7% to   14.2% | ███████████████████
  14.2% to   16.8% | ██████████████
  16.8% to   19.4% | ███████████
  19.4% to   22.0% | ██████
  22.0% to   24.6% | ████
  24.6% to   27.2% | ██
```

## 5. Comparison — Current vs Post Top3 Action

| Metric | Current | Post-action | Improvement |
|---|---:|---:|---:|
| Portfolio EV / mean return | -0.55% | 0.13% | +0.67pp |
| Volatility | 17.58% | 11.74% | -5.84pp |
| 1% MDD proxy / VaR | -41.38% | -27.07% | +14.31pp |
| Sharpe proxy | -0.03 | 0.01 | +0.04 |
| P(loss) | 51.2% | 49.4% | -1.9pp |

Interpretation: executing the Top3 active fixes cuts negative-drift leveraged exposure. The expected return improves because BITX/PLTU/AGQ have negative modeled EV after decay, and the left-tail proxy improves because total risk exposure falls into cash.

## 6. Code — Reproduction Script

```python
from pathlib import Path
import yaml, math
import numpy as np
import pandas as pd
import yfinance as yf

snapshot = Path.home() / "Thairon/obsidian-vault/Projects/y-Holdings/Asset/portfolio/2026-05-02-snapshot.md"
front = snapshot.read_text().split('---', 2)[1]
snap = yaml.safe_load(front)
holdings = snap['holdings']
total_kw = snap['total_kw']

sym_map = {
    'COIN':'COIN','BITX':'BITX','OIH':'OIH','XLE':'XLE','SIL':'SIL','AGQ':'AGQ','ETHU':'ETHU','PLTU':'PLTU',
    'IONQ':'IONQ','UGL':'UGL','RGTI':'RGTI','NVDX':'NVDX','NTR':'NTR','122630':'122630.KS','318010':'318010.KQ',
    '329200':'329200.KS','352560':'352560.KS','ETH':'ETH-USD','XRP':'XRP-USD','BTC':'BTC-USD'
}
px = yf.download(list(sym_map.values()), period='90d', interval='1d', auto_adjust=True, progress=False)['Close']
rets = px.pct_change(fill_method=None).dropna(how='all')
vol30 = rets.tail(30).std() * np.sqrt(252)

# Fill `scenarios` with probability/payoff assumptions from this report.
# EV = sum(P * payoff); Kelly = argmax_f sum(P * log(1 + f * payoff)).
# Monte Carlo = rng.multivariate_normal(mu=scenario_EV, cov=diag(vol) @ corr @ diag(vol), size=10000).
```

## Sources / Data References

- Yahoo Finance historical prices accessed through `yfinance` for realized volatility and correlations.
- Existing qualitative base rates from `thesis-full-coverage-2026-05-02.md`.
- Leveraged ETF decay framework: Morningstar/ETF education sources cited in the thesis; 2x instruments modeled with payoff haircut.
- Rule constraints: `asset_trader_rules_8_to_11.md` and `asset_rule_12_probabilistic.md`.

## Quanty Bottom Line

1. Highest-quality positive EV exposures: **BTC/ETH/SIL/329200/IONQ**, but theme caps stop automatic ADD for crypto.
2. Strongest active fixes: **trim BITX, exit PLTU, exit AGQ**.
3. Current book is not mathematically terrible because cash is 53%, but invested sleeve remains over-concentrated in crypto, 2x ETF, and same-theme risk.
4. Post-action portfolio lowers modeled 1% tail loss from **-41.38%** to **-27.07%** of total assets.
5. Next Quanty upgrade should replace Gaussian MC with bootstrap/t-distribution fat-tail simulation.

## 시각 해석 (4-panel)

![Asset Quanty 정량 권고 시각](charts/asset-quanty-visual-2026-05-02.png)

- ① 액션별 종목 수 (EXIT 11 / TRIM 2 / HOLD 5 / ADD 2)
- ② 포트폴리오 구성 (현재 vs post-action)
- ③ 1년 후 수익률 분포 (Monte Carlo 10K)
- ④ 종목별 EV 순위 (Rule #12)

