# _y Holdings X/SNS 런칭 전략

> _y Holdings의 X(Twitter) 계정 세팅부터 포스팅 전략, 경쟁자 분석, 브랜딩 방향까지를 다룬 종합 런칭 전략 기록. 2026년 3월 21일 AI 모임 라이브 데모를 D-Day로 설정하고, 매일 포스트를 쌓아가며 빌더 브랜딩을 구축하는 과정.
> Last updated: 2026-04-05

## Overview

_y Holdings는 30개 AI 에이전트가 10개 층(부서)으로 구성된 가상 AI 기업 프로젝트다. 2026년 3월 10일부터 X(Twitter) 계정을 본격 세팅하고, 3월 21일 AI 모임 라이브 데모를 목표로 런칭 캠페인을 시작했다. 핵심 전략은 "Building in Public" 톤으로 매일 1~2개 포스트를 올리며, GitHub 리포 공개와 동시에 바이럴을 노리는 것이었다.

오픈소스 전략으로는 대시보드 UI + 에이전트 샘플을 미끼로 공개하고, 유료 콘텐츠(30명 페르소나, Playbook, 병법 프레임워크)로 수익화하는 구조를 설계했다.

## Key Topics

### X 계정 세팅 및 브랜딩 (3/10~3/11)

- 기존 개인 계정 @SeongpilRyu 사용 결정. X가 2024년부터 좋아요를 비공개 처리했으므로 팔로잉 목록만 정리하면 충분 (raw/discord/_y-strategy/2026-03-10.md)
- 팔로잉 정리 완료 후 바이오 세팅: `Building _y Holdings — 30 AI agents, 10 floors, $0/month`
- 본명 노출 우려로 핸들 변경: @SeongpilRyu → @_yholdings (3/11)
- Display name은 "R. Andrew" 유지 — 핸들이 브랜드를 커버하므로 이름은 실명이 신뢰감 있음
- 프로필 사진: 캐릭터 → 실사진(AI 보정)으로 최종 변경 결정. "Building in public"은 사람이 보여야 진정성 있음
- 헤더: _y Tower 디오라마 이미지
- Moltbook에 AI 에이전트 "jarvis_y" 등록 (raw/discord/_y-strategy/2026-03-10.md)

### 킬러 카피 및 포스팅 전략 (3/10~3/15)

핵심 차별화 메시지 4가지 확립:
1. **"30 agents, 10 floors, $0/month"** — 규모와 비용의 임팩트
2. **"No consensus, just counsel"** — 비잔틴 장군 문제 기반, 합의 대신 자문 구조
3. **"6 LLMs, 5 companies"** — 멀티모델 아키텍처 (Claude, Gemini, DeepSeek, MiniMax, Qwen)
4. **"기획조정실 출신이 설계한 AI 회사"** — 개발자가 아닌 경영 전문가의 조직 설계

포스팅 리듬: 오전=포지셔닝/철학, 저녁=빌드로그/증거. 하루 1~2개 유지.

주요 포스트 히스토리:
- 3/10: Moltbook 클레임 + 첫 티저 ("I'm building an AI company with 30 agents")
- 3/11: "30 agents. 6 different LLMs. Zero consensus — by design."
- 3/12: agency-agents 바이럴 편승 포스트 + 타워 영상
- 3/12: "No consensus, just counsel — by design" (비잔틴 장군 앵글)
- 3/13: 타워 블루 펄스 영상 + "This is what an AI company looks like"
- 3/14: 기조실 앵글 ("shaped corporate strategy at a major enterprise")
- 3/14: 멀티에이전트 파이프라인 실제 동작 증거 포스트

매일 21:00 KST 크론으로 X 포스트 초안이 #_y-strategy 채널에 자동 전달되는 구조 설정. (raw/discord/_y-strategy/2026-03-11.md)

### 경쟁자 분석 및 대응 (3/12~3/13)

**agency-agents (3/12):**
- 61명 에이전트, 9개 부서, 12K GitHub 스타
- 실체는 프롬프트 파일 모음 (Claude Code 전용, 에이전트 간 상호작용 없음)
- _y 차별점: 6종 LLM, 위계 구조, promptfoo 품질 테스트, 대시보드 시각화
- 바이럴 파도에 편승하는 독립 포스트 전략 채택 (댓글 달기 X, 독립 포스트로)

**Paperclip (3/13):**
- 21,109 스타 (11일 만에), AI 에이전트로 회사 운영하는 프레임워크
- 조직도, 예산 관리, 목표 정렬, 거버넌스, 감사 로그, ClipMart(마켓플레이스)
- _y와 거의 동일한 비전이나 레이어가 다름: Paperclip=인프라(WordPress), _y=콘텐츠+노하우(테마+플러그인)
- 대응 전략: 적이 아니라 호환 플랫폼으로 활용

**ATLAS by General Intelligence Capital (3/12):**
- Karpathy autoresearch 패턴을 트레이딩에 적용. 25개 에이전트, 다윈식 진화
- 프롬프트 자체가 "가중치", Sharpe ratio가 loss function
- 378일 최적화, +22% 수익
- _y Capital(Quanty)에 다윈식 가중치 패턴 적용 가능성 확인

(raw/discord/_y-strategy/2026-03-12.md, raw/discord/_y-strategy/2026-03-13.md)

### _y Builder 오픈소스 전략 확정 (3/11~3/14)

**시나리오 C 채택: 독립 제품 + OpenClaw/Paperclip 호환**

- X 바이럴: `_y Builder` 단독 브랜딩 (OpenClaw 언급 X)
- GitHub README: "Ollama-first. OpenClaw compatible. Paperclip compatible."
- 설치: `git clone → npm install → ollama pull → config.yml → npm run dev` (5분)
- 포지셔닝: CrewAI/AutoGen = Python + API 키 필수(개발자 전용), _y Builder = Ollama만 있으면 무료(비개발자도 OK)
- OpenClaw 디스코드에도 공유하여 양쪽 트래픽 확보
- README 초안 작성 완료 (`workspace/_y-builder-README.md`)

(raw/discord/_y-strategy/2026-03-11.md)

### 에이전트 LLM 매핑 (3/11)

6종 LLM, 5개 회사, 30개 에이전트 역할별 배치 확정:

| LLM | 역할 | 에이전트 |
|-----|------|---------|
| Gemini Pro | 전략/종합 | Counsely, Tasky |
| DeepSeek R1 | 수학/논리 | Finy, Quanty, Hedgy, Valuey, Skepty, Audity, Guardy |
| MiniMax M2.5 | 코딩/개발 | Buildy, Testy, Stacky |
| Claude Haiku | 글쓰기/창의 | Buzzy, Wordy, Watchy, Evaly |
| Qwen3 32B | 올라운더 | Legaly, Growthy, Hiry, Tradey, Opsy |
| Gemini Flash | 실무/경량 | Pixely, Edity, Searchy 외 6명 |

실제 가동 에이전트 5명: Searchy, Quanty, Skepty, Counsely, Tasky. 나머지는 대기(dormant).

(raw/discord/_y-strategy/2026-03-11.md)

### Autoresearch / 다윈식 에이전트 최적화 설계 (3/12)

ATLAS 레퍼런스 기반 자동 최적화 설계:
- 프롬프트 = 가중치, 비즈니스 성과 = 손실함수
- 매일 밤: 에이전트별 성과 스코어링 → 최하위 프롬프트 수정 → 5일 운영 후 평가 → 개선시 git commit / 악화시 revert
- 다위니안 가중치: 에이전트 신뢰도 0.3~2.5, 상위 25% ×1.05, 하위 25% ×0.95
- 구현 우선순위: agent_performance 테이블 → 가중치 시스템 → 야간 크론 루프 → promptfoo 연동

(raw/discord/_y-strategy/2026-03-12.md)

### MCP/A2A 연동 (3/14)

- MCP (Model Context Protocol) 연동 성공: Claude Desktop ↔ _y Holdings MCP 서버 연결
- `initialize` + `tools/list` → 6개 도구 전달 확인
- A2A (Agent-to-Agent): 에이전트 간 직접 소통 프로토콜 (Google 주도)
- MCP = 회장 → 에이전트 지시, A2A = 에이전트끼리 자율 소통

(raw/discord/_y-strategy/2026-03-14.md)

### 에이전트 지속 개선 방식 비교 (3/14)

| 방식 | 설명 | 현재 _y 적용 |
|------|------|-------------|
| 메모리 주입 | 대화→요약→DB→프롬프트 주입 | ✅ 설계됨 (agent_memory 테이블) |
| 프롬프트 진화 | 성과 측정→리라이트→keep/revert | 계획 중 (ATLAS 참고) |
| Fine-tuning/LoRA | 소형 모델 실데이터 학습 | 미적용 |
| Tool-augmented | 에이전트가 노트/위키 자체 관리 + RAG | 추천됨 (1+4 조합) |

(raw/discord/_y-strategy/2026-03-14.md)

## Key Decisions

- **3/10**: 기존 X 계정 사용 결정 (새 계정 대신 팔로잉 정리 후 활용)
- **3/11**: 핸들 @SeongpilRyu → @_yholdings 변경
- **3/11**: 매일 21:00 KST X 포스트 초안 자동 전달 크론 설정
- **3/11**: _y Builder 오픈소스 전략 확정 — 독립 제품 + OpenClaw 호환 (시나리오 C)
- **3/12**: agency-agents 바이럴 편승 전략 — 독립 포스트로 차별화 (댓글 X)
- **3/12**: Karpathy autoresearch 패턴 _y Capital 적용 결정
- **3/12**: 프로필 사진 캐릭터 → 실사진 최종 결정
- **3/13**: Paperclip 호환 추가 — "Works standalone. OpenClaw compatible. Paperclip compatible."
- **3/13**: 경쟁자 대응 원칙 — 따라가지 말고 자기 레인 유지, Ship > Plan
- **3/14**: X 포스트에서 "Korean" 언급 제거 (신원 노출 방지 + 글로벌 타겟)
- **3/14**: "shaped corporate strategy" 표현 채택 (ran → shaped, 실장급에 적합)

## Results & Outcomes

- X 팔로워: 34 → 38명 (5일간 +4)
- 5일간 포스트 7개 게시 (꾸준한 빌딩 로그 축적)
- 킬러 카피 4개 확립 (30 agents, No consensus, 6 LLMs, 기조실 앵글)
- GitHub README 초안 완성
- MCP 연동 성공 (Claude Desktop ↔ _y Holdings)
- 경쟁자 3개 프로젝트 분석 완료 (agency-agents, Paperclip, ATLAS)
- 멀티에이전트 파이프라인 실제 가동 확인 (Opsy→Searchy→Buzzy→Counsely)
- 대시보드 UI v12 배포 (Vercel)

## Related

- [[wiki/business/y-holdings-overview]]
- [[wiki/business/y-tower-development]]
- [[wiki/business/x-posts-content]]
- [[wiki/research/multi-agent-frameworks]]
- [[wiki/research/byzantine-generals-problem]]

## Sources

- [2026-03-10](raw/discord/_y-strategy/2026-03-10.md)
- [2026-03-11](raw/discord/_y-strategy/2026-03-11.md)
- [2026-03-12](raw/discord/_y-strategy/2026-03-12.md)
- [2026-03-13](raw/discord/_y-strategy/2026-03-13.md)
- [2026-03-14](raw/discord/_y-strategy/2026-03-14.md)
- [2026-03-15](raw/discord/_y-strategy/2026-03-15.md)
