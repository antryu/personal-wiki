---
# 날짜: YYYY-MM-DD 형식 (파일명과 일치시킬 것)
date: YYYY-MM-DD

# 전체 포트폴리오 평가액 (원화 기준)
total_kw: 0

# 자산군별 분류 (원화, S&P500/MES는 Cap 관할이므로 여기서 제외)
breakdown:
  stock: 0          # 국내외 주식
  crypto: 0         # 암호화폐
  real_estate: 0    # 부동산 (공시가 또는 시세)
  bond: 0           # 채권·예금·CMA
  etf: 0            # ETF (S&P500 ETF 제외)
  commodity: 0      # 상품 (금·원유·원자재)
  cash: 0           # 현금 및 현금성 자산

# 보유 자산 목록 — 각 항목은 DB upsert key = id
# id: 고유 식별자 (영문소문자 + 하이픈, 한 번 정하면 변경 금지)
# type: stock | crypto | real_estate | bond | etf | commodity | cash
# quantity: 수량 (주식=주수, 코인=개수, 부동산=1, 채권=액면가)
# avg_price_kw: 평균 매입단가 (원화)
# currency: KRW | USD | JPY | ...
# custodian: 증권사·거래소·은행 등 보관처
holdings:
  # === 주식 예시 ===
  - id: "samsung-electronics"
    type: stock
    name: "삼성전자"
    ticker: "005930"
    quantity: 100
    avg_price_kw: 70000
    currency: KRW
    custodian: kiwoom
    notes: "보통주"

  # === 암호화폐 예시 ===
  - id: "btc-upbit"
    type: crypto
    name: "Bitcoin"
    ticker: "BTC"
    quantity: 0.5
    avg_price_kw: 95000000
    currency: KRW
    custodian: upbit
    notes: ""

  # === 부동산 예시 ===
  - id: "apt-mapo-2bedroom"
    type: real_estate
    name: "마포구 2인용 아파트"
    ticker:
    quantity: 1
    avg_price_kw: 850000000
    currency: KRW
    custodian: direct
    notes: "KB 시세 기준"

  # === 채권·예금 예시 ===
  - id: "keb-deposit-2026"
    type: bond
    name: "KEB하나 정기예금 2026"
    ticker:
    quantity: 50000000
    avg_price_kw: 1
    currency: KRW
    custodian: kebhana
    notes: "만기 2026-10-01, 연 4.2%"

notes: "스냅샷 메모"
---

# 포트폴리오 스냅샷 — YYYY-MM-DD

> 이 파일 아래에 자유 형식 메모를 추가해도 됩니다.
> sync 스크립트는 frontmatter(---) 블록만 파싱합니다.

## 변경 이력

- YYYY-MM-DD: 최초 작성
