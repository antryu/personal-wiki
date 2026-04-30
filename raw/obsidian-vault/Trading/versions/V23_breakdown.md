---
title: V23 로직 Component Breakdown
tags: [trading, snp500, v23, logic, baseline]
created: 2026-04-21
status: LIVE
deployed: 2026-04-06 (1계약), 2026-04-20 (2계약)
file: (SnP500) AT_V23_6월물_SummerY_TrailingS_260420.xlsm
related: [[변경이력]], [[현재파라미터]], [[V21_breakdown]], [[V22_breakdown]]
---

# V23 — 실전 라이브 로직 (Canonical Reference)

> 모든 백테스트 비교의 기준점. 신규 제안을 평가할 때 **반드시** 이 문서의 component 단위로 diff를 명시.

## 📌 요약

V21 → V23 주요 변화: 진입 완화(RSI 35→33) + 공격적 수익 확보(Trail 15/5→10/3) + 하드 안전장치(-48틱 Hard Stop) + 동적 SL(ATR×12) + 외부 프록시 필터(Range Ratio>1.8) + Y Dashboard 거래 POST.

**실전 결과 (2026-04-06 ~ 04-17, 1계약)**: 9건 +95.25pt / +$476.25 / WR 55.6%.
**누적 (2/10~4/17, 42건)**: +103.75pt / +$518.75 / WR 59.5%.

---

## 🔧 Component 분해

### C1. 레짐 판단 (`CalculateRegime`)
- **역할**: 시장 방향(MA20 vs MA200) + 변동성(ATR_14 vs ATR_AVG×1.3) 조합으로 4레짐 분류
- **매 30분봉 완성 시** 재계산, 초기화 시 1회
- **출력 4가지**:
  | 레짐 | 조건 | 코드 | 허용 방향 |
  |---|---|---|---|
  | UP_LOW | MA20>MA200 & ATR<AVG×1.3 | 1 | LONG 양쪽 |
  | UP_HIGH | MA20>MA200 & ATR≥AVG×1.3 | 2 | LONG 양쪽 |
  | DOWN_LOW | MA20≤MA200 & ATR<AVG×1.3 | 3 | SHORT 양쪽 (VBA), Python은 Long-only 가드 |
  | DOWN_HIGH | MA20≤MA200 & ATR≥AVG×1.3 | 4 | LONG 하단 + SHORT 상단 (VBA) |
- **V21 대비**: 변경 없음
- **이슈**: VBA `SetRegimeParameters`에서 DOWN_LOW/HIGH의 Short 플래그가 True로 켜져있음 (Obsidian 방침 "Long-only since 2026-02-23"와 충돌). Q1 2026이 UP 우세여서 실전 미발동. Python `regime_strategy.py`는 `long_only=True`로 명시적 가드.
- **평가**: VBA side short flag를 False로 정리할지, DeepSeek R1 A/B 결과(2026-04-20)처럼 Short 재활성할지 결정 pending.

### C2. 볼린저 밴드 진입 (`BB 이탈 감지`)
- **파라미터**: BB(**40**, 2σ) — 40봉 기준 ±2σ
- **LONG 진입**: close < BB_LOWER (하단 이탈)
- **SHORT 진입**: close > BB_UPPER (상단 이탈)
- **V21 대비**: 변경 없음 (V20부터 동일)

### C3. RSI 진입 필터 (LONG 전용)
- **파라미터**: **RSI(14) > 33**
- **적용**: LONG 에만. SHORT 에는 RSI 필터 없음.
- **V21 대비**: **35 → 33** (완화). 진입 기회 확대.
- **근거**: V21 백테 "RSI>35만" (432건 WR 75% PnL +1556pt) vs "레짐+RSI>35" (374건 WR 75% +1425pt) — RSI 단독이 약간 낫지만 레짐 조합 유지 선택. 33으로 완화한 건 진입 기회 +~15% 기대.

### C4. Range Ratio 필터 (진입 차단) **[V23 신규]**
- **파라미터**: **range_ratio = (high - low) / ATR_14 ≤ 1.8** 일 때만 진입 허용. **> 1.8 이면 진입 차단**.
- **역할**: BB 하단이탈 시 과도한 변동성 스파이크 배제.
- **근거**: JEPA World Model의 "prediction error 상위 20% = 혼란 → 진입 금지" 를 VBA 프록시로 변환 (2026-03-25 V22 실험). PF 2.61 → 1.99 (정보 손실 있음) / MaxDD -98 → -66 (33% 개선).
- **V21 대비**: **신규 추가**.

### C5. 일일 거래 제한
- **파라미터**: `MAX_DAILY_TRADES = 1` (하루 1회)
- **V21 대비**: 변경 없음 (2/14 적용, 2주차부터)
- **근거**: 오버트레이딩 방지, 1주차 무제한 실험 후 도입.

### C6. SL (손절) — 동적 ATR 기반 **[V23 변경]**
- **공식**: `atrSL = ATR_20_AVG × 12` (단위: 틱)
- **Range**: min **10틱 (2.5pt)**, max **60틱 (15pt)**
- **셀 참조**: DF25 (VBA)
- **V21 대비**: **레짐별 고정값 → 전 레짐 공통 동적 ATR 기반**
  - V21: UP_LOW 15 / UP_HIGH 25 / DOWN_LOW 15 / DOWN_HIGH 25 틱 (고정)
  - V23: 전부 `ATR_20_AVG × 12` (변동성에 따라 적응)
- **의도**: 저변동성 장에선 타이트, 고변동성 장에선 여유 — 자연스러운 리스크 조절.

### C7. Hard Stop **[V23 신규]**
- **파라미터**: **-48틱 (-12pt)** 초과 손실 시 **무조건 즉시 청산**
- **적용**: `flagCut` / `flagTrend` 플래그와 무관. ATR SL과 별개로 absolute floor.
- **V21 대비**: **신규 추가**.
- **근거**: 2026-03-18 SL 미작동 사고 (Trail 갱신 이후 절대 stop 부재로 -15pt 초과 손실) 대응. Recreatable scenarios에 대한 catastrophic loss 방지.
- **청산 우선순위 1순위**.

### C8. TP (익절) — 레짐별 고정
- **파라미터 (틱)**:
  | 레짐 | TP |
  |---|---|
  | UP_LOW | 25 |
  | UP_HIGH | 30 |
  | DOWN_LOW | 20 |
  | DOWN_HIGH | 25 |
- **V21 대비**: 변경 없음

### C9. Trailing Stop — 공격적 파라미터 **[V23 변경]**
- **공식**: `CalcAdaptiveTrailingStop(entryPrice, currentPrice, isBuy)`
- **파라미터**:
  - **TrailStart = 10틱 (2.5pt)** — 수익이 이 정도 쌓이면 트레일링 활성
  - **TrailStep = 3틱 (0.75pt)** — 수익 이후 매 3틱마다 stop 갱신
- **활성 조건**: `profitPt ≥ TrailStart`
- **갱신**: `trailingLevel = entryPrice - (actualSL / 4)` 에서 시작, 매 틱 업데이트
- **V21 대비**: **15/5 → 10/3**. 더 빨리 활성, 더 촘촘히 갱신.
- **근거**: 2/28 백테 비교 (현재 30/5 PF 2.56 → 변경 15/5 PF 4.95 +총 18,757pt vs 기존 12,980pt). "10/3 추가 공격 검토" 후속으로 V23에 반영.

### C10. BB 회귀 청산
- **조건**: 30봉 이후, 종가가 10MA 또는 BB 반대편 도달 시 청산
- **V21 대비**: 변경 없음

### C11. testloop 체크 빈도 **[V23 변경]**
- **파라미터**: **25틱** 마다 SL 체크 (V21은 35틱)
- **V21 대비**: **35 → 25** (약 40% 더 자주 체크)
- **의도**: Hard Stop과 Trail 반응 속도 향상. 지연 SL 위험 감소.

### C12. 조기 종료 (휴장 전) **[V23 변경]**
- **조건**: **SPTHM > 520 AND SPTHM < 700** 일 때 청산
- **V21 대비**: **SPTHM > 2200 AND < 700 → > 520 AND < 700** (2026-04-20 변경, 사용자 의도 재확인 필요 — 변경이력 주석 참조)

### C13. 계약 수
- **파라미터**: `nQty = 2` (2026-04-20 이후, 그 전엔 1)
- **종목**: MESM26 (CME Micro E-mini S&P500, 2026년 6월물)
- **V21 대비**: 동일 종목, 1계약 → 2계약 확대
- **근거**: 4/6 ~ 4/17 1계약 실전 9건 +95.25pt 검증 후 확대

### C14. 거래 기록 POST (Y Dashboard) **[V23 신규]**
- **엔드포인트**: `y-company /api/trades`
- **데이터**: symbol, contract, direction, entry/exit price, pnl_points, pnl_dollars, exit_time 등
- **V21 대비**: **신규 추가**. 실전 거래가 Supabase `trades` 테이블에 자동 축적.
- **중요**: **Canonical source**. Obsidian 변경이력의 거래 로그는 스냅샷일 뿐, 실시간은 /api/trades.

### C15. Discord 웹훅 알림
- **Entry/Exit 알림**: 방향, 가격, PnL
- **V21 대비**: 변경 없음 (V21부터 도입)

---

## 🗂 청산 우선순위 (V23)

실시간으로 아래 순서대로 체크, 먼저 만나는 조건으로 청산:

1. **Hard Stop** (-48틱, -12pt) — 무조건 최우선
2. **조기 종료** (휴장 전 SPTHM 조건)
3. **레짐 SL** (ATR 동적, `-regimeSL` 도달)
4. **Trailing Stop** (수익 ≥ 10틱 후 활성, Step 3틱)
5. **BB 회귀** (30봉 이후 10MA/BB반대편 복귀)

---

## 📊 실전 성과 (V23 기간)

**2026-04-06 ~ 2026-04-17 (1계약 시기, 9건)**:
| # | 날짜 | 방향 | PnL |
|---|---|---|---|
| 34 | 04/06 | L | -12.00 🔴 |
| 35 | 04/07 | L | -21.50 🔴 |
| 36 | 04/09 | L | +1.50 |
| 37 | 04/10 | L | -12.00 🔴 |
| 38 | 04/13 | L | -12.00 🔴 |
| 39 | 04/14 | L | +49.00 ✅ |
| 40 | 04/15 | L | +39.25 ✅ |
| 41 | 04/16 | L | +1.75 |
| 42 | 04/17 | L | +61.25 ✅ |

- **총 PnL**: **+95.25pt ($+476.25)**
- **WR**: 5승 4패 (55.6%)
- **초반 4건 연속 -57.5pt 드로우다운** → 4/14~4/17 4연승 +151.25pt 회복
- **모두 LONG** (DOWN 레짐 미발동)

**2026-04-20 이후**: 2계약 실전 데이터 축적 중.

---

## ⚠️ 알려진 이슈 / Open Questions

1. **Short 재활성 결정 (pending)**
   - VBA: DOWN_LOW/HIGH에서 Short 플래그 True
   - DeepSeek R1 A/B 백테(2026-04-20): Long-only 대비 +24% PnL, Sharpe +5.6%, MDD -37% 악화
   - 권고: Option B (Short 활성) 채택 후 페이퍼트레이드 → 실전
   - 현재: 미결정
2. **조기 종료 SPTHM 조건 변경** (4/20): `> 2200 → > 520` 사용자 의도 재확인 필요
3. **이벤트 캘린더 H19~J19 2025년 날짜** 잔존 → 2026년 업데이트 요
4. **2계약 전환 후 충분한 샘플 아직 없음** (4/20 ~ 현재)

---

## 🔄 과거 백테스트 성과 (참고)

| 전략 | 거래 | 승률 | PnL(pt) | PF | MaxDD |
|---|---|---|---|---|---|
| V21 (레짐+RSI>35) | 374 | 75% | +1,425 | 2.08 | -135 |
| V23 Baseline (L+S, 2026-04-20 BT) | 830 | 78.6% | +1,542 | 1.68 | -119 |
| V23 제안2: Hard Stop=ATR×2 | 829 | 85.4% | +2,381 | 2.33 | -150 |
| V22 (V21+RangeRatio, 2026-03-25) | 323 | 73.4% | +1,013 | 1.99 | -66 |

---

## 🔗 소스 파일

- **VBA**: `(SnP500) AT_V23_6월물_SummerY_TrailingS_260420.xlsm`
- **Python mirror**: `~/Thairon/SnP500-trading/src/regime_strategy.py` (long_only=True)
- **파라미터 문서**: `[[현재파라미터]]`
- **변경 이력**: `[[변경이력]]`
- **4/20 DeepSeek A/B**: `[[분석리포트/2026-04-20_V23_AB_Short_Comparison]]`
- **2/28 Trail 변경**: `memory/snp500-analysis-2026-02-28.md`
