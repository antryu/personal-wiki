---
date: 2026-04-29
source: https://github.com/deepentropy/tvscreener
type: oss-analysis
tags: [trading, screening, multi-asset, tradingview, python, asset, ai-tools, mcp]
relevance: asset (멀티자산 포트폴리오)
license: Apache-2.0
stars: 974
forks: 137
last_release: v0.3.0 (2026-03-28)
---

# tvscreener — TradingView Screener API (Python)

> TradingView 스크리너 데이터를 Python으로 조회하는 비공식 라이브러리

## 무엇인가

TradingView 웹의 스크리닝 기능 = 코드로. 조건 걸어서 종목 발굴 자동화.

```python
from tvscreener import StockScreener, StockField

ss = StockScreener()
ss.select(StockField.NAME, StockField.RSI, StockField.MARKET_CAPITALIZATION)
ss.where(StockField.RSI < 30, StockField.MARKET_CAPITALIZATION > 1e12)
df = ss.get()  # pandas DataFrame
```

## 주요 기능

- **6 자산군 스크리너**: 주식·암호화폐·forex·채권·선물·코인
- **13,000+ 필드**: RSI·MACD·EPS·배당수익률·시총·거래량 등
- **체이닝 쿼리**: `select().where()` 패턴
- **시간프레임**: 1m ~ 1M (월봉)
- **실시간 스트리밍**: 지정 간격 연속 업데이트
- **MCP 지원** (`pip install tvscreener[mcp]`) — AI 에이전트 직접 호출 가능

## 라이선스 + 통계
- Apache-2.0 (상업 사용 OK)
- 974★ / 137 fork
- v0.3.0 / 2026-03-28 (활발)

## Asset 관점 활용 가치 ★★★

**Asset 멀티자산 mandate (주식·상품·암호화폐·부동산·채권·ETF)와 정확히 매치**:

| 사용 케이스 | 예시 쿼리 |
|---|---|
| **저평가 매수 후보 발굴** | RSI < 30 + PER < 15 + 시총 > 1조 |
| **자산군 모멘텀 비교** | 한국주식·미국주식·코인 1주 수익률 분포 |
| **리밸런싱 시그널** | 보유 종목 vs 동종 섹터 평균 |
| **위험 종목 회피** | 변동성·거래량 급변 자동 감지 |
| **배당주 발굴** | 배당수익률 > 5% + 5년 dividend growth > 0 |

## 기존 Asset 도구와 보완 관계

| 도구 | 역할 | 보완 |
|---|---|---|
| **stocksearch.sh** | 단일 한국주식 시세 | tvscreener = 다종목 스크리닝 |
| **usstocksearch.sh** | 단일 미국주식 시세 | tvscreener = 다종목 발굴 |
| **cryptosearch.sh** | 단일 암호화폐 시세 | tvscreener = 시장 전체 스캔 |
| **ohlc.sh / tasearch.sh** | 단일 ticker 깊이 분석 | tvscreener = 후보 발굴 → 그 다음 ohlc/tasearch로 deep dive |

→ **단일 깊이 (ohlc/tasearch) ↔ 시장 폭 (tvscreener)** 두 축 보완

## 워크플로우 예시

```
1. tvscreener로 "코스피 RSI<30 + 거래량급증" 50종목 발굴
2. 각 종목에 ohlc.sh 또는 tasearch.sh 돌려 깊이 분석
3. Asset 페르소나가 추천 매수 후보 3개 압축 → 의장 결재
```

## MCP 통합 가능성

`pip install tvscreener[mcp]` — Vita 아키텍처에서 논의된 MCP 패턴과 일치. y-Tower의 Asset 페르소나가 MCP로 직접 호출 가능 (Phase 2 채팅 자동 호출 통합 시점에 활용).

## Confidence: High

- Apache-2.0 라이선스 = 안전
- v0.3.0 + 활발한 commit = 유지 보수 OK
- pandas + MCP 지원 = Andrew 기존 stack 친화

## 권고 (Asset 관점)

- **Phase 1 (즉시)**: `pip install tvscreener` + 1개 시범 스크립트 (예: `screener.sh "RSI<30 + market_cap>1e12"` → 후보 종목 list)
- **Phase 2 (Asset 채팅 통합 시)**: MCP 서버로 노출 → 페르소나가 직접 호출
- **Phase 3 (월간 리포트)**: 자산군별 자동 스크리닝 결과를 Obsidian markdown으로 자동 생성

## Cross-references

- 메모리: `oss_link_obsidian_save.md` (자동 저장 룰 적용)
- Asset 도구 5개: `~/.claude/scripts/{stocksearch,usstocksearch,cryptosearch,ohlc,tasearch}.sh`
- 비교 (이전 분석): `2026-04-28-atlas-gic.md` (자가진화 트레이딩 vs 단순 스크리닝)

## Verdict

**🟢 추천 — Phase 1 즉시 시작 가치 큼**. Asset 도구 셋업의 마지막 piece. 단일 종목 분석은 이미 5개 도구로 충분, 시장 폭 스캔이 비어있던 영역. tvscreener가 그 자리.
