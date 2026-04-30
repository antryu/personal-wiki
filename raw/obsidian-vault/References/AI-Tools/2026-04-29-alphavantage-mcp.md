---
date: 2026-04-29
source: https://mcp.alphavantage.co/
type: mcp-server
tags: [mcp, market-data, alpha-vantage, asset, ai-tools, finance]
relevance: asset (멀티자산), cap (보조)
license: API-based (free tier + paid)
---

# Alpha Vantage MCP Server

> Official MCP server — LLM/AI agents가 Alpha Vantage 금융 데이터에 직접 접근

## 무엇인가

Alpha Vantage(미국 금융 데이터 제공자)가 **공식 MCP 서버 운영**. Claude / Claude Code / VS Code / Cursor / ChatGPT / OpenAI Agent Builder 모두 직접 연결 가능.

## 8 카테고리 데이터

| 카테고리 | 주요 도구 |
|---|---|
| 주식 기본 | TIME_SERIES_DAILY, GLOBAL_QUOTE, SYMBOL_SEARCH |
| 옵션 | REALTIME_OPTIONS, HISTORICAL_OPTIONS |
| **알파 인텔리전스** | **NEWS_SENTIMENT**, EARNINGS_CALL_TRANSCRIPT, INSIDER_TRANSACTIONS |
| 기본 재무 | COMPANY_OVERVIEW, INCOME_STATEMENT, EARNINGS |
| 외환 | FX_INTRADAY, FX_DAILY, FX_MONTHLY |
| 암호화폐 | DIGITAL_CURRENCY_DAILY, CURRENCY_EXCHANGE_RATE |
| **상품** | GOLD_SILVER_SPOT, WTI, COPPER, WHEAT |
| **경제 지표** | REAL_GDP, TREASURY_YIELD, UNEMPLOYMENT, INFLATION |
| 기술 지표 | RSI, MACD, BOLLINGER, ATR 외 50+ |

## 설치

```bash
# Claude Code
claude mcp add --url "https://mcp.alphavantage.co/?apikey=YOUR_API_KEY"

# Cursor / VS Code: mcp.json 편집
{"mcpServers":{"alphavantage":{"url":"https://mcp.alphavantage.co/?apikey=YOUR_API_KEY"}}}
```

API key: https://www.alphavantage.co/support/#api-key (무료 발급)

## 의장 portfolio fit

### Direct fit ★★★

| 의장 thesis pillar | Alpha Vantage MCP 매칭 |
|---|---|
| 인플레 헤지 (귀금속) | **GOLD_SILVER_SPOT, WHEAT, COPPER** ← 직접 데이터 |
| 인플레 헤지 (에너지) | **WTI, BRENT** ← OIH·XLE thesis 검증 |
| 거시 (달러 약세 thesis) | **REAL_GDP, INFLATION, TREASURY_YIELD** ← thesis 검증 |
| 코인 베팅 | **DIGITAL_CURRENCY_DAILY** ← BTC·ETH 보조 |
| 미국 주식 (NTR·OIH·XLE 등) | **EARNINGS, INCOME_STATEMENT** ← 재무 |
| 시장 분위기 | **NEWS_SENTIMENT** ← 뉴스 톤 정량화 |

### 한계

🔴 **한국 시장 X** — 코스피·코스닥 미지원 (의장 자체 stocksearch 보유로 보완)
🟡 **무료 티어 한도 불명** — 일반적으로 분당 5 calls / 일 500 calls (이전 정보)
🟡 **MCP 서버 외부 의존** — 자체 API key 필요, vendor lock-in 일부

## 의장 시스템 통합 옵션

### Option A: Claude Code에 직접 MCP 추가
- 의장이 Claude Code에서 직접 호출 가능
- y-Tower와 무관, 의장 개인 도구
- 설치 5분

### Option B: y-Tower chat에 MCP 통합
- y-Tower (Asset 페르소나)가 Alpha Vantage MCP 서버 호출
- 기존 Asset 도구 6개에 더해 macro·재무 데이터 보조
- 작업: 1~2시간 (chat/route.ts에 MCP client 추가)

### Option C: 의장 Mac CLI 도구로
- `alphasearch.sh "REAL_GDP"` 같은 셸 래퍼
- 기존 6 도구와 동일 패턴
- 작업: 30~60분

## 추천 — 단계별

**Phase 1 (즉시, 무료)**: Option C — 셸 래퍼 1~2개부터
- `alphasearch_macro.sh` (GDP·인플레·국채)
- `alphasearch_news.sh` (NEWS_SENTIMENT)
- 의장 thesis 검증 (인플레 헤지 thesis가 데이터로 작동하나)

**Phase 2 (Phase 1 가치 검증 후)**: Option B — y-Tower 통합
- Asset 페르소나가 자동 호출
- "오늘 매크로 어때?" → REAL_GDP + TREASURY_YIELD + INFLATION 종합 응답

**Phase 3 (선택)**: Option A
- Claude Code 직접 MCP

## TradingAgents 흡수 vs Alpha Vantage MCP

이전에 TradingAgents 코드 흡수 검토했는데, Alpha Vantage MCP가 **직접 더 좋은 답**:

| 측면 | TradingAgents 흡수 | Alpha Vantage MCP |
|---|---|---|
| 데이터 | Alpha Vantage + Yahoo (간접) | **Alpha Vantage 직접** ★ |
| 코드 의존 | Python TradingAgents 코드 | MCP 표준 (코드 X) |
| 유지보수 | TradingAgents 업데이트 | Alpha Vantage 책임 |
| 확장성 | 페르소나 1개 흡수만 | 모든 페르소나가 활용 |
| 한국 시장 | X | X (둘 다) |
| 코인 데이터 | X | ✅ (LIMITED) |
| 매크로 지표 | X | ✅ ★ |

→ **Alpha Vantage MCP가 더 fit**. TradingAgents 흡수는 dropping.

## License + 가격

- 무료 API key 발급 가능
- Premium 유료 티어 있음 (75 calls/min, $49.99~$249.99/월)
- 의장 무료 티어로 시작 검증 후 결정

## 권고

🟢 **Phase 1 즉시 시도 가치 큼**.

특히 의장 macro thesis (인플레·통화 평가절하)에 **REAL_GDP + INFLATION + TREASURY_YIELD** 데이터가 직접 thesis 검증 도구. "지금 thesis 작동 중인가?" 데이터로 답 가능.

## Cross-references

- 메모리: `oss_link_obsidian_save.md`
- Asset 도구 7개: `~/.claude/scripts/{stocksearch,usstocksearch,cryptosearch,ohlc,tasearch,screener,refresh_portfolio}.sh|.py`
- 비교: `2026-04-29-tradingagents.md` (코드 흡수 — dropping)
- 비교: `2026-04-29-tvscreener.md` (스크리너)
- 의장 portfolio: `~/Thairon/obsidian-vault/Projects/y-Holdings/Asset/portfolio/2026-04-29-snapshot.md`
