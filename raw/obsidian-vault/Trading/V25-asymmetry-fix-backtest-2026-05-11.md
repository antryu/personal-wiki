---
date: 2026-05-11
type: backtest_report
strategy: V25 BB_ATR
sample: 53 trades (2026-02-10 ~ 2026-05-08)
prepared_by: Quanty (alpha machine, on behalf of Cap)
chairman_directive: O2-b 2026-05-11
status: backtest_only — V25 stays LIVE per O2-b
---

# V25 Asymmetry Fix Backtest — 2026-05-11

## 0. 핵심 결론 (TL;DR — Andrew용)

53 trade 표본 (작음 — over-fit 위험). 그래도 신호는 일관:

- **V25 가 V23 대비 회귀한 근본 원인은 "loss 가 win 보다 1.3× 큰 비대칭"** — avg win $44.72 vs avg loss -$57.90, W/L ratio **0.77** (V23 의 1.13 대비 32% 악화 추정).
- **싱글 모드 1순위: Mod 1 (tight stop loss -$30)**. PF 1.09 → **2.37**, total PnL +$112 → **+$802**, MDD -$439 → **-$151**. 12개 손실 trade 캡.
- Mod 2 (trailing win 1.5x): 시너지는 있지만 단독으로는 PF 1.16 정도, win/loss asymmetry 해결 안 됨.
- Mod 3 (R:R gate, $50 미만 filter): **역효과**. 표본의 70% 가 작은 trade — 이걸 다 잘라내면 net 마이너스 (-$166).
- Mod 4 (time stop 6h): **거의 무영향** — 해당 trade 1건뿐 (entry_time 누락 15건 제외).
- **Combo 결과 inf PF**: 의미 없음. Mod 3 가 캡 이후 손실까지 다 잘라내서 0 loss 상태. **flag: data-fit artifact**.

**의장 결정 필요**:
1. Mod 1 단독으로 paper trade 2주 진행할지?
2. -$30 vs -$60 (qty=2 인식) vs -$15 (더 타이트) 중 어떤 SL?
3. V25 live 유지 + Mod 1-fix V25.1 paper 병행 (O2-b 직접 지시) → 확인?

---

## 1. Baseline (현 V25, 변경 없음)

| metric | value |
|---|---|
| Trades | 53 |
| Win rate | 58.5% (31W / 22L / 0 zero) |
| Avg win | $44.72 |
| Avg loss | -$57.90 |
| Win/Loss ratio | **0.77** (비대칭 wrong direction) |
| Total PnL | +$112.45 |
| Gross win | $1,386.20 |
| Gross loss | $1,273.75 |
| Profit Factor | **1.09** ← canonical (gross_win / gross_loss) |
| Max drawdown | -$438.80 |

**Note on PF discrepancy**: 작업 brief 에는 "PF 1.32" 명기였지만, 실데이터로 계산한 canonical PF (gross win / gross loss) = **1.09**. 1.32 는 (avg_win / avg_loss) × (win_rate / loss_rate) 같은 변형 공식 또는 별도 sample 인 듯. 본 backtest 는 53건 actual data 기준 PF 1.09 로 진행.

### Pre/Post 4/20 split (비대칭의 발원지 확인)

| period | trades | WR | avg win | avg loss | W/L | total | PF |
|---|---:|---:|---:|---:|---:|---:|---:|
| pre-4/20 | 42 | 59.5% | $48.50 | -$40.81 | 1.19 | +$518.75 | 1.75 |
| post-4/20 | 11 | 54.5% | $28.95 | -$116.00 | 0.25 | **-$406.30** | 0.30 |

**결정적 관찰**: post-4/20 는 100% qty=2 trade. avg loss -$116 = qty=2 × -11.6pts × $5/pt. 즉 **자본을 2배로 올린 시점부터 (또는 별도 logic 변화) loss 가 폭발**. 11 trades 만으로 -$406 손실, 직전 42 trades 의 +$519 흑자를 80% 까먹음.

**Cap 관점 downside-first**: V25 의 진짜 위험은 "loss 가 점점 커진다" 가 아니라 "qty 가 올라간 환경에서 stop logic 이 적응하지 못한다". Mod 1 이 효과적인 이유는 이 cluster 를 정확히 자르기 때문.

---

## 2. V23 baseline reference (Obsidian 2026-W17 캡처)

`vba_logic_backtest_2026-03-01.csv` "D. ATR SL + Trail, Long+Short" (V23 라이브 모드, 8년 backtest):

| metric | V23 |
|---|---|
| Trades | 830 |
| Win rate | 78.6% |
| Total PnL | +1,542.2 pt |
| PF | **1.68** |
| MDD | -119.0 pt |

**V23 → V25 회귀의 수치적 격차**:
- WR: 78.6% → 58.5% (**-20.1%p**)
- PF: 1.68 → 1.09 (**-35%**)
- W/L ratio (추정): V23 ~1.13 → V25 0.77

**Caveat**: V23 metrics 는 830 trade 8년 backtest, V25 는 53 trade 3개월 live — 두 sample 비교는 reference 용이지 like-for-like 아님.

---

## 3. Mod 1 — Tighter Stop Loss

**Rule**: 각 trade pnl 이 -$30 미만이면 -$30 로 cap (loss only).  
**Affected**: 12 trades capped.

| metric | V25 baseline | Mod 1 | delta |
|---|---:|---:|---:|
| Trades | 53 | 53 | 0 |
| Win rate | 58.5% | 58.5% | 0 |
| Avg win | $44.72 | $44.72 | 0 |
| Avg loss | -$57.90 | **-$26.53** | +$31.37 |
| W/L ratio | 0.77 | **1.69** | +0.92 |
| Total PnL | +$112.45 | **+$802.45** | +$690 |
| PF | 1.09 | **2.37** | +1.28 |
| MDD | -$438.80 | **-$151.25** | +$287.55 |

**Verdict**: 단일 mod 중 압도적 1위. W/L ratio 가 0.77 → 1.69 로 비대칭 방향 자체가 반전. MDD 66% 축소.

### Sensitivity — qty-aware variants

작업 brief 의 -$30 cap 은 qty=1 가정 (-6pts × 2 × $5 = -$60 가 brief 의 계산식이지만, 결과 값 -$30 로 명기 → -3pts × 2 × $5 또는 -6pts × $5 단일 contract). 본 backtest 는 절대 -$30 cap (qty 무시) 으로 진행 — qty=2 trade 도 -$30 까지만 인정.

| variant | rule | total PnL | PF | capped |
|---|---|---:|---:|---:|
| Mod 1 (brief) | abs cap -$30 | +$802.45 | 2.37 | 12 |
| Mod 1b | -$30 × qty (qty-aware) | +$652.45 | 1.89 | 12 |
| Mod 1c | -$15 × qty (더 타이트) | +$981.20 | 3.42 | 22 |

세 변형 모두 baseline 보다 좋음. **운영 권장**: Mod 1b (qty-aware -$30/contract = -6pts per contract) — abs $30 cap 은 qty=2 환경에서 너무 빨리 잘려 win runner 까지 못 가게 만들 위험. **Andrew 결재 필요**.

---

## 4. Mod 2 — Trailing Stop + Target Loosen (winners run)

**Rule**: 모든 winning trade pnl × 1.5 (heuristic). Loss 변경 없음.  
바-바 trailing 시뮬은 데이터에 OHLC 없어 불가 → 1.5x heuristic 으로 대체.

| metric | V25 baseline | Mod 2 | delta |
|---|---:|---:|---:|
| Trades | 53 | 53 | 0 |
| Win rate | 58.5% | 58.5% | 0 |
| Avg win | $44.72 | **$67.07** | +$22.35 |
| Avg loss | -$57.90 | -$57.90 | 0 |
| W/L ratio | 0.77 | 1.16 | +0.39 |
| Total PnL | +$112.45 | **+$805.55** | +$693 |
| PF | 1.09 | **1.63** | +0.54 |
| MDD | -$438.80 | -$420.00 | +$18.80 |

**Verdict**: total PnL 만 보면 Mod 1 과 거의 동급이지만, **PF 1.63 < Mod 1 의 2.37**. 이유: loss 분포가 그대로라 MDD 도 거의 안 변함 (-$439 → -$420). 즉 "wins 가 더 커지지만 losses 가 그대로 큰" 구조 — V25 가 가진 비대칭은 해결 안 됨.

**Honest caveat**: 1.5x 는 실제 trailing 알고리즘이 아니라 휴리스틱. 실데이터에 bar-by-bar 정보 없음. 진짜 trailing stop 시뮬은 별도 backtester (V23 VBA 또는 ~/PRJs/SnP500-trading/v25_vs_v23_backtest.py) 로 별도 task 필요.

---

## 5. Mod 3 — R:R Gate (1:2 entry filter)

**Rule**: abs(pnl) < $50 인 trade 제외 (low-conviction proxy).  
**Skipped**: 37 trades. **Kept**: 16 trades.

| metric | V25 baseline | Mod 3 | delta |
|---|---:|---:|---:|
| Trades | 53 | **16** | -37 |
| Win rate | 58.5% | **31.2%** | -27.3%p |
| Avg win | $44.72 | $170.50 | +$125.78 |
| Avg loss | -$57.90 | -$92.61 | -$34.71 |
| W/L ratio | 0.77 | 1.84 | +1.07 |
| Total PnL | +$112.45 | **-$166.25** | **-$278.70** |
| PF | 1.09 | 0.84 | -0.25 |
| MDD | -$438.80 | -$580.00 | -$141.20 |

**Verdict**: **실패한 mod**. W/L ratio 와 PF 둘 다 표면적으로는 개선되어 보이는 항목이 있지만, **net PnL 이 마이너스** + **MDD 가 악화** + **표본이 16건으로 over-fit 위험 증가**.

해석: V25 의 작은 trade (abs<$50) 들 중 wins 가 더 많다 — 즉 작은 trade 가 net 흑자 기여. R:R gate 가 큰 trade 만 남겨도, 큰 trade 풀 자체가 net 적자 (큰 wins 보다 큰 losses 더 많음).

**Andrew 의 brief 가정 "abs(pnl) < $50 = low conviction" 이 V25 데이터에서는 틀림**. 작은 trade = quick scalp = 안정적 흑자. 큰 trade = trend trade = 실패시 큰 loss.

**Recommendation**: Mod 3 폐기 또는 재설계 (실제 risk-per-trade plan 데이터 있어야 정확한 R:R gate 가능).

---

## 6. Mod 4 — Time Stop (6h cap)

**Rule**: duration > 6h 인 trade 의 pnl × 0.5 (조기 exit heuristic).  
**Affected**: 알려진 duration 중 1 trade > 6h.  
**Data gap**: 53건 중 15건 entry_time = null → duration 산출 불가. 보수적으로 unchanged 처리.

| metric | V25 baseline | Mod 4 | delta |
|---|---:|---:|---:|
| Trades | 53 | 53 | 0 |
| Win rate | 58.5% | 58.5% | 0 |
| Avg win | $44.72 | $44.41 | -$0.31 |
| Avg loss | -$57.90 | -$57.90 | 0 |
| Total PnL | +$112.45 | $103.08 | -$9.37 |
| PF | 1.09 | 1.08 | -0.01 |
| MDD | -$438.80 | -$438.80 | 0 |

**Verdict**: **무영향**. 알려진 trade 중 6h 초과 단 1건. V25 가 이미 사실상 time-stop 적용 중이거나, intraday strategy 라 6h cap 이 binding constraint 가 아님.

**Caveat**: 15건 entry_time 누락 → 실제로 6h 초과 trade 가 더 있을 수 있음. Buildy 에게 entry_time 백필 task 위임 권장.

---

## 7. Combo (1+2+3+4) — **artifact warning**

**Order applied per trade**:
1. Cap loss -$30
2. Multiply win × 1.5
3. Time stop: halve if >6h
4. Filter: skip if abs(pnl) < $50

| metric | V25 baseline | Combo | delta |
|---|---:|---:|---:|
| Trades | 53 | **9** | -44 |
| Win rate | 58.5% | **100%** | +41.5%p |
| Avg win | $44.72 | $167.07 | +$122 |
| Avg loss | -$57.90 | **$0.00** | n/a |
| W/L ratio | 0.77 | inf | inf |
| Total PnL | +$112.45 | +$1,503.67 | +$1,391 |
| PF | 1.09 | **inf** | inf |
| MDD | -$438.80 | $0.00 | inf |

🚨 **이 결과는 data-fit artifact 입니다. 신뢰 X**.

**왜 PF inf 인가**:
- Mod 1 이 12개 loss 를 -$30 로 cap
- Mod 3 가 abs<$50 trade 제거 → -$30 capped loss 들이 모두 abs<$50 → **filter 가 손실을 전부 제거**
- 결과: 9개 trade 만 남고 전부 win

**현실에서는 발생 불가**: Mod 3 의 filter 는 trade 진입 *전* 의사결정이지, 사후 결과 보고 거르는 거 아님. 본 backtest 에서는 데이터에 risk-plan-per-trade 가 없어 사후 abs(pnl) 으로 근사 → 이 근사가 Combo 에서 Mod 1 과 결합하며 perfect-hindsight 으로 변질.

**Action**: Combo 결과 사용 금지. 진짜 R:R gate 평가는 별도 분석 (실시간 risk-per-trade 데이터 필요).

---

## 8. Comparison table

| version | trades | WR | avg win | avg loss | W/L | total PnL | PF | MDD |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| V25 baseline | 53 | 58.5% | $44.72 | -$57.90 | 0.77 | +$112.45 | 1.09 | -$438.80 |
| **Mod 1** (SL -$30) | 53 | 58.5% | $44.72 | -$26.53 | **1.69** | **+$802.45** | **2.37** | **-$151.25** |
| Mod 1b (qty-aware -$30/ct) | 53 | 58.5% | $44.72 | — | — | +$652.45 | 1.89 | — |
| Mod 1c (qty-aware -$15/ct) | 53 | 58.5% | $44.72 | — | — | +$981.20 | 3.42 | — |
| Mod 2 (trail 1.5x win) | 53 | 58.5% | $67.07 | -$57.90 | 1.16 | +$805.55 | 1.63 | -$420.00 |
| Mod 3 (R:R ≥1:2) | **16** | 31.2% | $170.50 | -$92.61 | 1.84 | **-$166.25** | 0.84 | -$580.00 |
| Mod 4 (time 6h) | 53 | 58.5% | $44.41 | -$57.90 | 0.77 | $103.08 | 1.08 | -$438.80 |
| Combo (1+2+3+4) — *artifact* | 9 | 100% | $167.07 | $0.00 | inf | +$1,503.67 | inf | $0.00 |
| V23 ref (8yr 830 trades) | 830 | 78.6% | — | — | — | +1,542.2 pt | 1.68 | -119 pt |

---

## 9. Recommendation

### Single mod for V25.1 forward-test

**Mod 1 (qty-aware variant 1b: -$30 per contract = -6pts per contract)**.

이유:
1. W/L ratio 0.77 → 1.69 — V25 의 핵심 결함 (loss > win) 을 정확히 타격.
2. MDD 66% 축소 — capital preservation 우선 (Cap mandate 1순위).
3. 단일 rule, 구현 trivial (entry order 에 hard stop 추가).
4. qty-aware 가 abs cap 보다 자연스러움 — 자본 scaling 시에도 일관.

### Multi-mod combination

**Mod 1 + Mod 2 only (Combo 3, 4 제외)**. 단, sample 너무 작아 backtest 만으로는 verdict 못 함. Paper test 가 필요.

Mod 3 폐기: 데이터에서 역효과 확인.  
Mod 4 보류: data gap (entry_time 누락) 해소 후 재평가.

### Forward test plan

**Step 1 — Paper trade 2주 (2026-05-12 ~ 2026-05-26)**:
- V25.1 = V25 + Mod 1b (qty-aware -$30/contract hard stop).
- V25 (현 라이브) 는 그대로 운영 (O2-b 직접 지시).
- 매 trade 동시 기록: V25 actual exit + V25.1 hypothetical exit.
- 목표 sample: 10~20 paper trades.

**Step 2 — Promotion criteria (2주 후 결재)**:
- V25.1 paper PF ≥ 1.5 (baseline 1.09 대비 우위 확인)
- V25.1 paper W/L ratio ≥ 1.0 (asymmetry 방향 반전)
- V25.1 paper MDD ≤ -$200 (현 V25 의 -$439 대비 절반 미만)
- 위 3개 충족 → V25.1 live 승격, V25 demote.
- 1개 이상 미충족 → paper test 1주 연장 + 재평가.

**Step 3 — Live transition**:
- V25.1 live 첫 1주는 qty=1 only (자본 축소).
- 1주 통과 시 qty=2 복귀.
- 의장 직접 결재 필수.

### Live deployment criteria (concrete)

| gate | threshold | rationale |
|---|---|---|
| paper PF | ≥ 1.5 | V25.1 over baseline |
| paper W/L ratio | ≥ 1.0 | symmetry 반전 확인 |
| paper MDD | ≤ -$200 | capital preservation |
| sample size | ≥ 15 trades | over-fit 위험 완화 |
| max DD streak | ≤ 4 consecutive losses | live 전 risk 확인 |

---

## 10. Hard caveats & confidence

### Sample size

53 trades = **너무 작음**. 통계적 신뢰 95% CI 가 매우 넓음. 본 backtest 의 모든 PF / W/L delta 는 ± 0.3~0.5 노이즈 가능. **결정용 단일 근거로 쓰지 말 것**.

### Heuristic substitutions

- Mod 2 trailing = "× 1.5 휴리스틱" (bar-by-bar 데이터 없음).
- Mod 3 R:R gate = "abs<$50 filter" (실제 risk-plan 데이터 없음).
- Mod 4 time stop = ">6h 면 halve" (intra-trade equity curve 없음).
- → 세 mod 다 simulation rigor 떨어짐. Mod 1 만 정밀 (사후 cap 은 logic 동일).

### Data quality

- 53건 중 15건 entry_time = null → duration 산출 누락.
- post-4/20 11건이 sample 의 21% — 최근 regime 의 weight 가 낮음.
- qty=1 (42건, +$519) 과 qty=2 (11건, -$406) 가 사실상 두 다른 strategy population — pooled analysis 한계.

### Confidence levels

| claim | confidence | reasoning |
|---|---|---|
| V25 has loss>win asymmetry | **HIGH** | 데이터에서 직접 관찰, V23 reference 비교 일관 |
| post-4/20 regime shift | **HIGH** | pre/post split 통계 명확 |
| Mod 1 SL cap improves PF | **MEDIUM-HIGH** | 53건에서 일관, 단 paper validation 필요 |
| Mod 1b -$30/contract is optimal cap level | **LOW-MEDIUM** | 세 variant 다 baseline 우위지만 어느 게 최적은 paper test 로만 답함 |
| Mod 2 alone is sufficient | **LOW** | heuristic 의존, MDD 미해결 |
| Mod 3 폐기 권장 | **MEDIUM** | net loss 결과 명확하지만 R:R gate 의 진짜 정의로는 미실험 |
| Mod 4 무영향 | **MEDIUM** | data gap 으로 진짜 결론 미루는 게 안전 |
| Combo PF inf | **artifact** | data-fit, 의사결정에 사용 금지 |

---

## 11. Process notes

- m4max `~/y-trading/data/trades_archive.jsonl` 가 canonical. (53 trades 확인)
- V23_breakdown.md 파일 자체는 없지만, 2026-W17 weekly review 에 V23 backtest metrics 캡처되어 reference 가능.
- backtest script: `/tmp/v25_backtest.py` (m4max). reproducible.
- No origin push, no executable trade commands.
- Cap downside-first 원칙 준수: 모든 mod 평가에서 MDD 와 worst-case behavior 우선 보고.

## 12. 다음 단계 (의장 결재)

1. **Mod 1b qty-aware -$30/contract 로 V25.1 paper trade 시작 OK?** (Y/N)
2. **Paper test 기간 2주, sample ≥ 15 trades, 약속한 3 gate 통과 시 V25.1 live 승격 — 이 promotion rule 승인?** (Y/N)
3. Buildy 위임 task 후보: entry_time null 15건 백필 (가능하면 broker log 에서) — 우선순위? (낮음/중간/높음)
4. Quanty 후속 task 후보: bar-by-bar 데이터 확보 후 진짜 trailing stop 시뮬 (Mod 2 정밀 재평가) — 우선순위? (낮음/중간/높음)

---

**Prepared by**: Quanty (Cap 산하 quant arm)  
**Source data**: `/Users/andrew/y-trading/data/trades_archive.jsonl` (53 trades, 2026-02-10 ~ 2026-05-08)  
**V23 reference**: `/Users/andrew/Thairon/obsidian-vault/Trading/주간리뷰/2026-W17.md`  
**Backtest script**: `/tmp/v25_backtest.py`  
**Status**: backtest_only — V25 LIVE 유지 per O2-b
