# _y Holdings 디렉티브 — 에이전트 시스템 구축 과정

> _y Holdings의 AI 에이전트 독립 운영을 위한 인프라 점검, 설계, 실행 과정을 기록한 디렉티브 채널. Karpathy AutoResearch 패턴 분석부터 M4 Max 기반 에이전트 워커 가동까지의 여정.
> Last updated: 2026-04-05

## Overview

_y-directive 채널은 _y Holdings의 업무 지시 및 실행 결과를 기록하는 핵심 채널이다. 2026년 3월 22일부터 운영되며, Jarvis(Andrew의 개인 AI 비서)가 지시를 받아 실행하고 결과를 보고하는 구조로 시작했다. 주요 흐름은 (1) Karpathy AutoResearch 패턴 학습 → (2) S&P500 트레이딩 적용 설계 → (3) M4 Max 에이전트 인프라 점검 → (4) chat-worker 가동 및 테스트로 이어진다.

## Key Topics

### Karpathy AutoResearch 분석 및 적용
(2026-03-22)

Karpathy가 공개한 AutoResearch 프로젝트를 상세 분석. AI 에이전트가 자율적으로 ML 실험을 반복하는 시스템으로, 핵심 구조는 3개 파일:

- **prepare.py** (수정 불가) — 데이터 준비 + 평가 함수(BPB). Goodhart's Law 방지를 위해 잠금
- **train.py** (에이전트 수정) — 모델, 옵티마이저, 학습 루프
- **program.md** (사람만 수정) — 에이전트 지시서

핵심 원칙: **"에이전트에게 자유를 주되, 채점표는 건들지 마라"**

BPB(Bits Per Byte) 자체는 Andrew의 현재 프로젝트들에 직접 적용 불필요하나, **"잠긴 메트릭 + 자율 실험 루프"** 패턴은 전 프로젝트에 적용 가능.

### S&P500 Trading AutoResearch 설계
(2026-03-22)

AutoResearch 패턴을 S&P500 트레이딩에 매핑한 설계:

| AutoResearch | SnP500 Trading |
|---|---|
| prepare.py (잠금) | evaluate.py (고정 평가 함수) |
| train.py (수정 가능) | strategy_params.py (에이전트 수정) |
| program.md | research.md (에이전트 지시서) |

**Composite Score 공식:**
```
score = (sharpe × 0.4) + (min(PF, 5) × 0.2) + (WR/100 × 0.15) 
      - (MDD%/100 × 0.15) - (연속손실/10 × 0.1)
```

백테스트 1회 ~30초 → 시간당 ~120회 → 하룻밤 ~1000회 실험 가능. 코드 작성만 하면 바로 실행 가능한 상태까지 설계 완료.

### 저커버그 AI CEO 에이전트 뉴스
(2026-03-24)

저커버그가 자기 전용 AI 비서(CEO 에이전트)를 개발 중이라는 WSJ 보도. 내부 도구 **My Claw**, **Second Brain** 사용. _y Holdings 구조와 본질적으로 같은 방향이나, Meta는 기존 인력 위에 AI를 얹는 것이고, _y는 AI-native로 처음부터 설계한 차이점이 있음. Meta AI 인프라 투자 2026년 $115B~$135B 예상.

### Jarvis의 역할 정의
(2026-03-27)

- **Jarvis** = Andrew의 개인 비서, _y 30명 에이전트와 별개
- **_y 에이전트 30명** = 회사 직원 (company.yml에 정의)
- Jarvis는 조직 바깥에서 회장을 보좌하는 존재 (저커버그의 CEO 에이전트와 동일 포지션)
- 이상적 구조: `Andrew → Jarvis (지시 전달) → M4 Max (에이전트 실행) → 결과 리턴`

### _y Holdings 역량 점검
(2026-03-27)

**즉시 가능:** 웹 검색, 코딩, 크론 잡, Discord 관리, Supabase DB, 이미지 생성, 콘텐츠 작성
**제한적:** 에이전트 시뮬레이션(역할극), 실시간 트레이딩(백테스트만), 브라우저 자동화
**불가능:** 에이전트 독립 운영, 에이전트 간 자율 통신, 키움증권 실매매, _y Mart 판매

### M4 Max 인프라 점검 및 블로커 해결
(2026-03-27 ~ 2026-04-03)

**M4 Max 인프라:**
- 30명 에이전트 LLM 배정 완료 (Claude Opus/Sonnet, DeepSeek R1 70B, Qwen3 32B, Gemini Flash/Pro, MiniMax M2.5)
- Supabase DB 9개 테이블 (agent_memory, agent_skills, chat_queue, conversations 등)
- Ollama v0.18.2 — 14개 모델 설치
- 에이전트 스크립트 다수 존재 (searchy-news, chat-worker, quanty-backtest 등)

**발견된 블로커 (3/27):**
1. chat-worker 미실행
2. Ollama 자동시작 미설정
3. M4에 Gemini/Anthropic API 키 없음
4. Node.js 미설치

**해결 과정:**
- 3/28: Andrew가 "M4는 Claude OAuth 적용해" 지시 → Claude CLI `--print` 방식으로 호출하는 구조 확인
- 4/2: Node.js 미설치 확인 → Python 워커 또는 Node.js 설치 옵션 제시
- 4/3: Node.js v25.2.1 설치 완료, **chat-worker 2개 실행 확인** 🎉

### 에이전트 최초 테스트
(2026-04-03)

Skepty(#04, DeepSeek R1 70B)에게 테스트 지시 투입:
- chat_queue에 insert → status: pending → processing 전환 확인
- 그러나 2분 이상 processing 상태로 응답 없음
- 이후 API rate limit 발생으로 추가 확인 불가
- 4/4에도 rate limit 지속

## Key Decisions

- **2026-03-22**: AutoResearch "잠긴 메트릭 + 자율 실험 루프" 패턴을 _y 전 프로젝트에 적용하기로 결정
- **2026-03-22**: S&P500 Trading에 Composite Score (Sharpe 40% + PF 20% + WR 15% - MDD 15% - 연속손실 10%) 공식 확정
- **2026-03-27**: Jarvis는 지시 전달만, M4에서 모든 에이전트 실행하는 구조로 가기로 결정
- **2026-03-28**: M4 Claude 연동은 반드시 OAuth 방식 사용 (API 키 아님). Andrew는 $200 Max 플랜
- **2026-04-02**: Python 워커 우선 추진 권고 (Node.js 미설치 시점)

## Results & Outcomes

- AutoResearch 패턴 → S&P500 적용 설계 완료 (코드 작성 대기)
- M4 Max 인프라: Ollama + Node.js + chat-worker 가동 확인 (4/3 기준)
- Counsely(#30) 5건 처리 이력 확인 (4/1)
- Skepty 테스트: 워커 픽업은 성공, 추론 완료는 미확인 (rate limit)
- **미해결**: Ollama 자동시작, Gemini API 키, chat-worker 안정성, rate limit 문제

## Related

- [[project/y-holdings-simulator]]
- [[project/snp500-trading]]
- [[project/mybidwise]]
- [[tech/karpathy-autoresearch]]
- [[tech/agent-orchestration]]
- [[infra/m4-max-server]]

## Sources

- [2026-03-22](raw/discord/_y-directive/2026-03-22.md)
- [2026-03-24](raw/discord/_y-directive/2026-03-24.md)
- [2026-03-27](raw/discord/_y-directive/2026-03-27.md)
- [2026-03-28](raw/discord/_y-directive/2026-03-28.md)
- [2026-04-02](raw/discord/_y-directive/2026-04-02.md)
- [2026-04-03](raw/discord/_y-directive/2026-04-03.md)
- [2026-04-04](raw/discord/_y-directive/2026-04-04.md)
