---
title: V23 A/B Short Comparison Backtest
tags: [trading, snp500, v23, short, backtest, deepseek]
created: 2026-04-20
related: [[V21_거래로직]], [[현재파라미터]], [[변경이력]], [[2026-Q1-Trading-Summary]]
---

# V23 A/B 백테스트: Short 활성화 의사결정

> **배경**: V23 VBA 코드 상 DOWN 레짐에서 Short 활성 상태이나, Obsidian 방침은 "Long-only since 2026-02-23".
> **목적**: 백테스트 증거로 Short 재활성화 여부 결정.
> **실행일**: 2026-04-20
> **도구**: DeepSeek R1 70B (via LiteLLM on M4) + Python regime_strategy.py

---

## 📊 백테스트 결과

**데이터**: 2020-05 ~ 2025-12 (65,535 bars, 30분봉 5.5년)

| 지표 | A: Long-only | B: Long+Short | B-A 차이 |
|------|-------------|--------------|---------|
| 거래수 | 633 | 830 | **+197 (+31%)** |
| Long 거래 | 633 | 618 | -15 |
| Short 거래 | 0 | **212** | +212 |
| 승률 | 79.8% | 78.6% | -1.2%p |
| 총 PnL (pt) | +1,246.25 | **+1,542.20** | **+295.95 (+24%)** |
| 총 PnL ($) | +$6,231 | **+$7,711** | **+$1,480 (+24%)** |
| PF | 1.76 | 1.68 | -0.08 |
| Sharpe | 5.35 | **5.65** | **+0.30 (+5.6%)** |
| MDD (pt) | -86.95 | -119.00 | **-32.05 (-37%)** |

**Short 단독 성과 (B 시나리오 내)**:
- 212건, WR **74.1%**, +491.75pt

---

## 🧠 DeepSeek R1 분석 (70B reasoning)

### 1. 실전 vs 백테스트 불일치 원인
- **샘플 사이즈 격차**: 실전 3건 vs 백테 212건 (70× 차이) — 실전 3건 0W3L은 통계적 의미 없음
- **시장 국면**: 2026 Q1은 UP 레짐 위주, 백테 5.5년은 다양한 국면 포함
- **V23 필터 효과**: Range Ratio >1.8, RSI >33, ATR 동적 SL, Hard Stop -12pt — 이전 V21/V98에 없던 보호 장치가 Short 승률 74.1% 달성에 기여

### 2. A vs B 리스크-수익 프로파일
- **수익**: +24% PnL, Sharpe +5.6% → 수익성 확실히 향상
- **리스크**: MDD -37% 악화 (-$535 더 큰 최대 손실)
- **Sharpe 개선**: MDD 악화에도 Sharpe가 개선되었다는 건 **리스크 대비 수익 비율이 더 좋다**는 의미

### 3. 2026-02-23 Long-only 결정 재검토
- **V23 신규 필터가 게임 체인저**: Hard Stop, Range Ratio, ATR 동적 SL 모두 당시(V21)에 없던 요소
- **통계적 판단**: 실전 3건(0W3L)은 통계적 불운 가능성 농후. 백테 212건(74.1%)이 실제 분포에 더 가까움

### 4. 권고안 → **Option B 채택**
> Obsidian을 VBA에 맞춤, Short 유지, 백테스트 증거 활용, +$1,480/5.5년 추가 수익 기대.

### 5. 실전 검증 플랜
- **1단계 (페이퍼 트레이딩)**: 1개월, 20~30건 Short 시뮬
- **2단계 (실전)**: 10건 Short with 임계값
  - WR ≥ 60%
  - Net PnL ≥ +10pt
  - 미달 시 재검토

---

## 🎯 최종 결정 (사용자 승인 대기)

### 추천: Option B — Short 재활성화 + 단계적 검증

**근거**:
1. 백테 212건 WR 74.1%, +491.75pt → 통계적으로 유의
2. V23의 신규 방어 장치(Hard Stop, Range Ratio) 존재
3. Sharpe +5.6% → 리스크 조정 수익 개선
4. VBA 코드와 방침 일치 (코드 수정 불필요)

**리스크 완화**:
- MDD 악화 -37% → 페이퍼 트레이딩 1개월로 실시간 검증
- 조기 중단 임계값 설정: 10건 중 WR < 50% 시 Short 재차단

### 대안: Option A — Long-only 유지

**근거**:
1. 보수적: MDD 악화 없음
2. 2026-02-23 결정 존중 (실전 근거)
3. VBA 수정 필요 (`RegimeUpperShort=False` 등 4곳)

**트레이드오프**: 5.5년에 $1,480 기회비용

---

## 📁 관련 파일

- Python: [run_v23_ab_comparison.py](../../SnP500-trading/run_v23_ab_comparison.py)
- CSV: [reports/v23_ab_comparison.csv](../../SnP500-trading/reports/v23_ab_comparison.csv)
- VBA V23 xlsm: `~/Downloads/(SnP500) AT_V23_6월물_SummerY_TrailingS_260420.xlsm`
- DeepSeek 원본 분석: `/tmp/ab-analysis-result.md`

---

## 다음 액션

사용자 결정 대기 중:
- [ ] Option A (Long-only 유지, VBA 수정)
- [ ] Option B (Short 재활성, 페이퍼 트레이딩 시작)
- [ ] Hybrid (DOWN_LOW만 Short, DOWN_HIGH Long-only)
