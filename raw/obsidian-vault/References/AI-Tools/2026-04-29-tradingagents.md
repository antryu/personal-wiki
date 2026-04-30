---
date: 2026-04-29
source: https://github.com/TauricResearch/TradingAgents
type: oss-analysis
tags: [trading, multi-agent, llm, langgraph, finance, ai-tools, asset]
relevance: asset, cap (보조), macro thesis 형성
license: Apache-2.0
stars: 54500
forks: 9900
last_release: v0.2.4 (2026-04)
language: Python (99.8%)
---

# TradingAgents — Multi-Agent LLM Financial Trading Framework

> 7+ 전문 에이전트가 협력하여 시장 분석·거래 결정 수행하는 LangGraph 기반 오픈소스 프레임워크

## 한 줄 요약

`종목 + 날짜` 입력 → 4 분석가(기본·심리·뉴스·기술) → 강세/약세 연구원 토론 → 거래 에이전트 → 리스크 관리 → **포트폴리오 매니저 최종 승인** → 시뮬레이션.

## 통계
- **54.5k★ / 9.9k fork** (매우 활발)
- v0.2.4 (2026-04, LangGraph + 다중 LLM 통합)
- Apache-2.0

## 아키텍처 — 7+ 에이전트

```
분석가 팀 (4)
  ├─ 기본가치 분석가 (재무·내재가치)
  ├─ 심리 분석가 (소셜 감정)
  ├─ 뉴스 분석가 (거시·이벤트)
  └─ 기술 분석가 (MACD·RSI)
       ↓
연구 팀
  ├─ 강세 연구원
  └─ 약세 연구원 ← 구조화된 토론 (debate)
       ↓
거래 에이전트 (decision)
       ↓
리스크 관리 팀
       ↓
포트폴리오 매니저 (최종 승인/거부)
       ↓
시뮬레이션 거래소 (실행 X — 모의)
```

## 주요 기능

- **다중 LLM 제공자**: OpenAI, Google, Anthropic, xAI, DeepSeek
- **의사결정 로그 + 메모리** (LangGraph 체크포인트)
- **체크포인트 복구** — 중단된 실행 재개
- **구조화된 출력 에이전트** (v0.2.4 신규)
- **Alpha Vantage 데이터** (주식)

## 사용 예시

```python
from tradingagents.graph.trading_graph import TradingAgentsGraph
from tradingagents.default_config import DEFAULT_CONFIG

config = DEFAULT_CONFIG.copy()
config["llm_provider"] = "openai"
config["deep_think_llm"] = "gpt-5.4"

ta = TradingAgentsGraph(debug=True, config=config)
_, decision = ta.propagate("NVDA", "2026-01-15")
print(decision)  # buy/hold/sell + 근거
```

CLI:
```bash
pip install .
tradingagents  # 대화형 모드
```

## Asset 관점 활용 가치 ★★★

### 직접 fit
1. **screener.sh로 후보 발굴 → TradingAgents로 깊이 분석**
   ```
   ~/.claude/scripts/screener.sh oversold-us
     → 후보 10종목
   for t in 후보:
     tradingagents.propagate(t, today)
     → 각 종목 buy/hold/sell + reasoning
   ```

2. **Asset 페르소나 시스템 프롬프트에 통합** — Andrew 채팅에서 "AAPL 분석해줘" → TradingAgents 호출 → multi-agent debate 결과 응답

3. **의장 thesis 형성 가이드**
   - 의장 "투자 철학 없음" 상태에서, TradingAgents가 종목별 강세/약세 토론 보여줌 → thesis 후보 형성에 도움
   - 매월 정기 미팅 시 portfolio 종목별 자동 분석

### 한계 + 보완

🔴 **코인 데이터 미지원** — Alpha Vantage 주식 중심 → CoinGecko/Binance 어댑터 추가 필요 (Asset 우선순위 ↑인 코인 영역)

🔴 **한국 주식 미지원** — KRX 데이터 통합 필요 (TIGER·KODEX·팜스빌 등)

🔴 **양자컴퓨팅 같은 niche 영역** — 일반 stock framework로 다룸, 산업 특화 분석 X

🟡 **LLM API 비용** — 7+ 에이전트 × 토론 = 종목당 $0.5~$2 API call. 무료 티어 한정적

🟡 **시뮬레이션만** — 실거래 X (의장 broker 자동 매매 X, framing tool로 사용)

### 의장 시간 fit

15분/일 framework에 **딱 맞음**:
- 1주에 1~2종목 분석 = 30~60분
- 매일 routine = 자동 dailybrief에 TradingAgents 의견 1줄 포함
- 월 1회 정기 미팅 = portfolio 5~7종목 종합 분석

## ATLAS GIC vs TradingAgents 비교

| 항목 | TradingAgents | ATLAS GIC |
|---|---|---|
| 라이선스 | ✅ Apache-2.0 | ❌ 상용 |
| 에이전트 | 7+ (분석·토론·거래·리스크) | 정보 제한 |
| 프레임워크 | LangGraph (표준) | 독자 |
| 학습/메모리 | 체크포인트, 의사결정 로그 | 미확인 |
| 커뮤니티 | 54.5k★ | 엔터프라이즈 |
| 진입 비용 | 즉시 (오픈소스) | 사업 협상 필요 |

→ **TradingAgents가 의장 단계에 명확히 우위**. ATLAS는 향후 매출 ₩수십억 단계 가능.

## 권고 (Asset 관점)

### Phase 1 — 즉시 시도 (1주)
```bash
# 설치
pip install --break-system-packages git+https://github.com/TauricResearch/TradingAgents.git

# OpenAI key (또는 Anthropic — 의장 OAuth 가능)
export ANTHROPIC_API_KEY=...

# 1종목 시범
python -c "
from tradingagents.graph.trading_graph import TradingAgentsGraph
from tradingagents.default_config import DEFAULT_CONFIG
config = DEFAULT_CONFIG.copy()
config['llm_provider'] = 'anthropic'
ta = TradingAgentsGraph(config=config)
_, dec = ta.propagate('OIH', '2026-04-29')
print(dec)
"
```

→ 의장 portfolio 흑자 종목 OIH로 검증. 결과가 의미 있으면 다음 단계.

### Phase 2 — Asset 통합 (의장 결정 후)
- `~/.claude/scripts/agents_analyze.sh <ticker>` 래퍼
- `screener.sh oversold-us | xargs agents_analyze.sh`
- 일일 자동 보고서에 OIH·BITX 등 핵심 종목 의견 포함

### Phase 3 — 코인 어댑터 추가 (선택)
- TradingAgents의 데이터 레이어를 fork
- Alpha Vantage → CoinGecko 어댑터 추가
- BTC/ETH/XRP 분석 가능

## License + 비용

- ✅ Apache-2.0 (상업 사용 OK)
- 🟡 LLM API 비용: 종목당 $0.5~$2
  - 의장 Anthropic OAuth = 무료 (Claude Pro 구독으로 처리 가능)
  - 단 sonnet 1회 호출 ≠ free tier (subscription 사용량 차감)

## Confidence: High

- 54.5k★, 활발한 메인테이넌스
- Apache-2.0 = 자유 사용
- LangGraph = 표준 프레임워크 (장기 안정성)
- 의장 multi-agent 시스템(y-Tower)과 cognitive 유사

## Verdict

🟢 **추천 — Phase 1 즉시 시도 가치 큼**.

Asset의 빈자리 = "macro view 형성 + thesis 점검" — TradingAgents가 정확히 이 영역. 의장 "투자 철학 없음" 상태에서 종목별 자동 강세/약세 토론 보고서 = thesis 형성 가이드 역할 가능.

코인·한국주식 통합은 후행. 미국주식부터 시작.

## Cross-references

- 메모리: `oss_link_obsidian_save.md`
- Asset 도구 7개: `~/.claude/scripts/{stocksearch,usstocksearch,cryptosearch,ohlc,tasearch,screener,refresh_portfolio}.sh|.py`
- 비교: `2026-04-28-atlas-gic.md` (자가진화 + autoresearch — 더 advanced이지만 상용)
- 관련: `2026-04-29-tvscreener.md` (스크리너 — 후보 발굴)
- 의장 portfolio: `~/Thairon/obsidian-vault/Projects/y-Holdings/Asset/portfolio/2026-04-29-snapshot.md`
