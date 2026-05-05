---
asset_id: coin            # matches snapshot holdings.id
asset_name: Coinbase Global
ticker: COIN
thesis_date: 2026-05-02
thesis_type: long         # long | short | hold | reduce
entry_price_kw: 305612
position_size_kw: 4584179
horizon_days: 90          # days until evaluation
expected_outcome:
  metric: price_pct       # price_pct | pnl_kw | sharpe_3mo
  target: '+15%'
  direction: up           # up | down | neutral
thesis_grounds:
  - bull_thesis_1
  - macro_factor_1
  - technical_setup_1
risk_factors:
  - main_risk_1
status: open              # open | hit | missed | invalidated
---

## 상세 근거
(이 포지션을 보유하는 구체적인 이유 — 카탈리스트, 밸류에이션, 매크로 맥락)

## 무효화 조건
(이 thesis가 틀렸다는 걸 확인하는 조건 — 구체적 가격 또는 이벤트)

## 결과 (horizon 도달 시 기입)
- 예측: ...
- 실제: ...
- 결과: 적중 / 미스
- 미스 사유: ...
- 룰 업데이트: ...
