# 2026-03-23 World Model 분석

## 개요
- BB(40,2) LONG 전략에 ML(XGBoost/GradientBoosting) 적용 가능성 검토
- 30개 feature, Walk-Forward 5-fold OOS 검증
- DeepSeek R1 70B 분석

## Phase 1: Feature 추출 (14개 → 30개 확장)
- 1,365건 거래에서 feature 벡터 추출
- 추가 feature: RSI(2), StochRSI, 시간/요일/월, 연속하락캔들, 전일수익률, 캔들패턴(prev_body, body_sum3) 등

## Phase 2: XGBoost 학습
- Walk-Forward AUC: 0.541, 0.558, 0.554, 0.529, 0.604 **(평균 0.557)**
- Feature 중요도 TOP 5: range_ratio, bb_width_ratio, macd_hist, lower_wick, mom3

## OOS 비교
| 전략 | 거래수 | PnL | WR | PF |
|------|--------|-----|-----|-----|
| 필터없음 | 1365 | +3233 | 73% | 1.62 |
| RSI>33+레짐 (현재) | 513 | +1726 | 75% | 2.08 |
| ML단독 prob>0.65 | 905 | +2249 | 74% | 1.67 |
| RSI33+레짐+ML>0.65 | 360 | +1285 | 76% | 2.11 |

## 결론
- **AUC 0.557 = ML 예측력 미약** (0.5=랜덤 대비 약간 나은 수준)
- ML 추가 시 PF 미세 개선(2.08→2.11) but 거래수/PnL 감소
- **RSI>33 + 레짐이 이미 최적** — ML 추가 가치 부족
- Autolearning은 데이터 6개월+ 축적 후 재검토
- **규칙이 간단할수록 강하다**

## Feature 인사이트
- `range_ratio` (캔들범위/ATR): 가장 중요 — 변동성 대비 캔들 크기
- `lower_wick`: 하단 꼬리 = 매수 압력
- `body`: 양봉일수록 승률 높음
- RSI 자체보다 캔들 패턴이 더 강한 예측자
