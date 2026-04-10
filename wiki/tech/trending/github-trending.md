# GitHub Trending AI 프로젝트 트래킹

> Discord #github-trending 채널에서 주 2회(월/목) GitHub Trending AI 프로젝트를 스캔하고, _y Holdings 에이전트 시스템과의 적용성을 분석하는 활동 기록. 스캔 주기 조정, 경쟁 분석, 오픈소스 전략 수립까지 진행됨.
> Last updated: 2026-04-05

## Overview

2026년 3월~4월 초까지 약 한 달간 GitHub Trending AI 프로젝트를 주기적으로 스캔하며, 각 프로젝트의 _y Holdings 30개 에이전트 시스템과의 관련도를 평가했다. 초기에는 매일 스캔했으나, 트렌드 변화 주기를 고려해 **주 2회(월/목 09:00 KST)**로 조정했다. 이후 _y Holdings를 트렌딩 프로젝트들과 직접 비교 분석하고, 오픈소스 공개 + HuggingFace 론칭 전략까지 수립했다.

## Key Topics

### 반복 등장 고관련도 프로젝트 (관련도 9/10)

여러 차례 트렌딩에 등장하며 지속적으로 높은 관련도를 보인 프로젝트들:

- **obra/superpowers** — 에이전트 기반 기술 프레임워크 + SW 개발 방법론. 3/11~3/30까지 5회 연속 등장. 에이전트 간 기술 공유/협업 표준화에 참고 (raw/discord/github-trending/2026-03-11.md ~ 2026-03-30.md)
- **NousResearch/hermes-agent** — 사용자와 함께 성장하는 에이전트 프레임워크(Python). 장기 기억 + 의사결정 향상. 4회 등장 (raw/discord/github-trending/2026-03-11.md ~ 2026-04-02.md)
- **promptfoo/promptfoo** — 프롬프트/에이전트/RAG 테스트 + LLM 취약점 분석 + 레드팀. 3회 등장 (raw/discord/github-trending/2026-03-11.md ~ 2026-03-14.md)
- **msitarzewski/agency-agents** — 전문화된 역할 분담 AI 에이전시. 에이전트 설계 원칙 참고. 3회 등장 (raw/discord/github-trending/2026-03-11.md ~ 2026-03-14.md)
- **AstrBotDevs/AstrBot** — 다중 IM 플랫폼 통합 에이전트 챗봇 인프라. 2회 등장 (raw/discord/github-trending/2026-03-11.md, 2026-03-14.md)

### 주요 카테고리별 프로젝트

**에이전트 오케스트레이션/프레임워크:**
- **bytedance/deer-flow** — 슈퍼 에이전트 프레임워크 (샌드박스, 메모리, 도구, 하위 에이전트). +3,787⭐/day (2026-03-26)
- **ruvnet/ruflo** — Claude 기반 다중 에이전트 스웜 배포 + 자율 워크플로우. +1,174⭐/day (2026-03-26)
- **1Panel-dev/MaxKB** — 기업용 에이전트 구축 오픈소스 플랫폼 (2026-03-19)

**메모리/지식 엔진:**
- **supermemoryai/supermemory** — AI용 메모리 API 엔진. +810⭐/day (2026-03-26)
- **vectorize-io/hindsight** — 에이전트 장기 기억 학습 라이브러리 (2026-03-14)
- **topoteretes/cognee** — AI 에이전트 기억용 지식 엔진 (6줄 코드). (2026-03-16)
- **volcengine/OpenViking** — 파일 시스템 패러다임 기반 컨텍스트 DB. +1,870⭐/day (2026-03-16)
- **thedotmack/claude-mem** — Claude 세션 활동 자동 캡처 + 컨텍스트 주입 (2026-03-30)
- **letta-ai/claude-subconscious** — Claude Code에 잠재의식(장기 기억) 부여 (2026-03-26)

**브라우저/GUI 자동화:**
- **alibaba/page-agent** — 자연어로 웹 UI 제어하는 인페이지 GUI 에이전트. 3회 등장 (2026-03-11 ~ 2026-03-16)
- **lightpanda-io/browser** — AI/자동화용 헤드리스 브라우저. +2,093⭐/day (2026-03-14)
- **browser-use/browser-use** — AI 에이전트 웹 자동화 라이브러리 (2026-03-23)

**금융/트레이딩:**
- **TauricResearch/TradingAgents** — 금융 거래용 다중 에이전트 LLM 프레임워크. 2회 등장 (2026-03-19, 2026-03-23)
- **hsliuping/TradingAgents-CN** — 중국어 금융 거래 에이전트 프레임워크. 2회 등장 (2026-03-23, 2026-03-26)
- **OpenBB-finance/OpenBB** — 금융 데이터 플랫폼 (2026-03-30)

**스웜 인텔리전스:**
- **666ghj/MiroFish** — 범용 스웜 인텔리전스 예측 엔진. +4,504⭐/day. 3회 등장 (2026-03-11 ~ 2026-03-16)

**개발 도구/Claude 생태계:**
- **anthropics/claude-code** — 에이전트 기반 터미널 코딩 도구. +10,749⭐/day (2026-04-02)
- **jarrodwatts/claude-hud** — Claude Code 모니터링 플러그인. 2회 등장 (2026-03-19, 2026-03-23)
- **luongnv89/claude-howto** — Claude Code 가이드/템플릿. +3,301⭐/day. 2회 등장 (2026-03-30, 2026-04-02)
- **shareAI-lab/learn-claude-code** — Bash로 나노 에이전트 구축 가이드. 2회 등장 (2026-03-16, 2026-03-30)
- **affaan-m/everything-claude-code** — 에이전트 하네스 성능 최적화. +3,724⭐/day (2026-03-23)
- **openai/codex** — 터미널 경량 코딩 에이전트. +2,390⭐/day (2026-04-02)

**RAG:**
- **langflow-ai/openrag** — Langflow+Docling+Opensearch 기반 RAG 플랫폼. 2회 등장 (2026-03-11, 2026-03-14)
- **HKUDS/LightRAG** — 간단하고 빠른 RAG 시스템 (2026-03-23)

**기타 주목:**
- **microsoft/BitNet** — 1비트 LLM 추론 프레임워크. +2,227⭐/day (2026-03-14)
- **microsoft/VibeVoice** — 오픈소스 음성 AI. 2회 등장 (2026-03-30, 2026-04-02)
- **mvanhorn/last30days-skill** — Reddit/X/YouTube/HN 조사 에이전트 스킬. 2회 등장 (2026-03-26, 2026-03-30)
- **anthropics/claude-plugins-official** — Claude 공식 플러그인 디렉토리 (2026-03-14)

### 스캔 주기 조정

- 2026-03-12: 매일 스캔에서 **주 2회(월/목 09:00 KST)**로 변경
- 이유: 상위 레포가 2~3일 유지되어 매일은 중복, 토큰 낭비
- 크론 변경 완료 (raw/discord/github-trending/2026-03-12.md)

### LangFlow 분석

- 2026-03-12: 사용자 질문으로 LangFlow 상세 분석 진행
- 드래그앤드롭 AI 에이전트/워크플로우 비주얼 빌더
- _y 적용성 7/10 — Playbook 프로토타이핑/RAG 실험용으로는 유용하나, _y 위계 기반 시스템 대체 불가
- "No Consensus" 원칙과 민주적 오케스트레이션 구조가 맞지 않음 (raw/discord/github-trending/2026-03-12.md)

### _y Holdings vs GitHub Trending 경쟁 분석

2026-03-31에 대규모 비교 분석 진행: (raw/discord/github-trending/2026-03-31.md)

**_y의 고유 경쟁 우위:**
- **조직 위계 구조** (CEO→Director→Manager→Staff 4계층) — 트렌딩 프로젝트 중 유일
- **"No Consensus, Just Counsel"** — 비잔틴 장군 문제 해결, 위계 기반 의사결정
- **실제 비즈니스 운영** — MyBidWise(45명 유료), S&P500 실전 트레이딩
- **company.yml PnP** — 설정 파일 하나로 AI 회사 생성

**주요 경쟁 비교:**
| 비교 대상 | 그들의 포지션 | _y 차별점 |
|---|---|---|
| oh-my-claudecode | 팀 협업 도구 | 회사 전체 운영 시스템 |
| Hermes Agent | 1명이 성장 | 30명이 협력+위계 |
| Dify/Langflow | AI 앱 만드는 플랫폼 | AI 회사 운영하는 플랫폼 |
| OpenBB | 데이터 제공 | 실전 운용 조직 |
| OpenClaw (210K⭐) | 개인 AI 비서 | AI 조직 시뮬레이터 |

**최대 약점:** 오픈소스 미공개 → Stars 0, 아무도 모름

### 오픈소스 공개 + HuggingFace 전략

2026-03-31~04-03에 걸쳐 오픈소스 전략 수립: (raw/discord/github-trending/2026-03-31.md, 2026-04-03.md)

**GitHub 공개 계획:**
- `_yholdings/y-company-framework` 퍼블릭 레포
- 공개 범위: company.yml, agent-config.ts, hierarchy pipeline, Timeline View, Meeting Room UI
- 비공개: MyBidWise 연동, 트레이딩 로직
- 목표: 3개월 내 10K stars

**HuggingFace 전략 (2026-04-03 추가):**
- HF Spaces: Gradio 기반 인터랙티브 데모 (company.yml 에디터 + 실시간 조직도)
- HF Dataset: 10개 산업별 company.yml 템플릿 갤러리
- 이중 론칭: GitHub(개발자) + HuggingFace(ML 커뮤니티) → 2배 노출

**론칭 각도 3가지:**
1. "Anti-Consensus" — 기술적 차별화 (HN 타겟)
2. "Running Real Businesses" — 실전 증거 (B2B 타겟)
3. "5-minute Setup" — DX (개발자 타겟)

## Key Decisions

- 2026-03-12: 스캔 주기를 매일 → **주 2회(월/목 09:00 KST)**로 변경
- 2026-03-11: 관련도 9점 프로젝트 3개를 #_y-tower 채널에 전달하여 검토
- 2026-03-31: _y Holdings **오픈소스 공개** 결정
- 2026-04-03: **HuggingFace Spaces + Dataset** 동시 론칭 전략 추가

## Results & Outcomes

- 약 한 달간 총 8회 스캔 수행, 누적 70개+ 고유 프로젝트 분석
- 에이전트 메모리/지식 엔진 카테고리가 가장 활발 (OpenViking, supermemory, cognee, hindsight, claude-mem, claude-subconscious 등)
- Claude 생태계 프로젝트 급증세 (claude-code +10,749⭐/day, claude-howto, claude-hud, claude-mem 등)
- 금융 트레이딩 에이전트 프레임워크 2개 반복 등장 (TradingAgents, TradingAgents-CN)
- _y Holdings의 핵심 포지셔닝 확인: "AI 조직 시뮬레이터" — 트렌딩 프로젝트 중 유일한 조직 위계 구조 접근
- 오픈소스 공개 + HuggingFace 론칭 전략 수립 완료, 실행 대기 중

## Related

- [[wiki/business/y-holdings]]
- [[wiki/business/mybidwise]]
- [[wiki/research/ai-agents]]
- [[wiki/research/agent-memory]]
- [[wiki/research/rag]]

## Sources

- [2026-03-11](raw/discord/github-trending/2026-03-11.md)
- [2026-03-12](raw/discord/github-trending/2026-03-12.md)
- [2026-03-14](raw/discord/github-trending/2026-03-14.md)
- [2026-03-16](raw/discord/github-trending/2026-03-16.md)
- [2026-03-19](raw/discord/github-trending/2026-03-19.md)
- [2026-03-23](raw/discord/github-trending/2026-03-23.md)
- [2026-03-26](raw/discord/github-trending/2026-03-26.md)
- [2026-03-30](raw/discord/github-trending/2026-03-30.md)
- [2026-03-31](raw/discord/github-trending/2026-03-31.md)
- [2026-04-02](raw/discord/github-trending/2026-04-02.md)
- [2026-04-03](raw/discord/github-trending/2026-04-03.md)
