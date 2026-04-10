# Knowledge Dump - Batch 9 (2026-02-21)

## AI 에이전트 실전 사례

### qjc.ai - Claude Code로 10개 AI 팀 구축 (코딩 없이)
- **출처**: @qjc.ai (X 스레드 10/10)
- 8주 만에 10개 AI 에이전트 팀: CEO 전략기획실, 마케팅, 콘텐츠, 비주얼, 이커머스, 재무, 경영지원, 교육, 사업개발, 브레인스토밍
- CEO 전략기획실 = 22명 에이전트 (낙관론자, 비관론자, 혁신가 등 다양한 페르소나)
- **비용 혁신**: 월 인건비 1,500만원 → Claude Max 월 30만원
- **개발비**: 외주 1.7억~2.7억 → $200(약 30만원)으로 구축
- ROI: 3,000%~5,000%, 생산성 32~50배 향상
- 사업계획서: 2주 → 1시간, 강의 준비: 하루 → 2시간, 마케팅 콘텐츠: 하루 → 30분
- 마케팅팀: 유튜브 링크 하나 → 블로그, 뉴스레터, 트위터, 쓰레드, 인스타 콘텐츠 한 번에
- 70기능 풀스택 SaaS 2주 만에 (보통 7~11개월)
- Claude Code 92개 스킬 활용, 최대 12개 병렬
- **특이점 빌더스 1기** (AI 에이전트 교육, 얼리버드 마감 2/2): <https://qjc.app/singularity-builders>

### builder.inkeun - 옵시디언 + 온톨로지 + 오픈클로
- 지식 쌓기(옵시디언) + 할루시네이션 없는 지식 베이스(온톨로지) + 모바일 비서(오픈클로)
- 슬랙봇 대비 오픈클로의 확장성과 맥락 유지 = 넘사벽
- **GitHub**: `kubony/claude-knowledge-graph` (★3)
  - 마크다운 노트를 RDF/TTL 지식 그래프로 변환
  - SPARQL 질의로 시맨틱 검색

### 염기웅 (GPU Poor) - 테스트 무한루프 전략 & 도구들
- **출처**: LinkedIn
- Ralph 같은 건 따로 구현 안 해도 됨
- Gemini/Claude에게 개발 명세서 + 테스트 케이스 명확히 주고 "테스트 성공할 때까지 무한루프" → 결국 해냄
- 방향 잘못될 때 한 번만 잡아주면 됨
- 플러그인 대부분 곧 사라질 것 → **LLM을 효율적으로 쓰는 게 핵심**
- **Liquid AI LFM2.5-1.2B-Instruct**: 노트북, 핸드폰, 라즈베리파이에서도 동작
- **Tiny MoA**: <https://lnkd.in/gmY8afKq>
- **oh my opencode**: <https://lnkd.in/g9AQjv5v>
  - GPT 5.2로 설계, Gemini 3 Pro 프론트엔드, Claude Opus 4.5 백엔드
  - "당신의 에이전트는 이제 개발팀 리드. 당신은 AI Manager."
- **clarify 스킬**: "clarify"만 입력 → AskUserQuestion으로 3단계 질문 → 모호함 제거
- **video-subtitle 스킬**: 영상 하나 → 3개 서브에이전트 순차 처리
  - subtitle-generator (STT) → subtitle-cleaner (중복 정리) → subtitle-corrector (오류 교정)

## 투자 & 자산배분

### @WomenLeisure - 화폐 붕괴 대비 4가지 자산
1. **10-15%**: 실물금, 은
2. **30-35%**: 주식, ETF
   - Utilities: NextEra Energy, Duke Energy
   - 생활재품: P&G, Coca Cola, Colgate Palmolive
   - Healthcare: J&J, Abbott Lab
3. **20-25%**: Short-term US Treasury (4-5% 이자) or 현금
4. 농사하는 땅, 부동산 ETF
- "몇 개 잘못돼도 나머지는 괜찮으니까"

## 팔로우할 AI X 계정 리스트

### 황현태 (SpaceY CEO) - AI 관련 해외 X 계정 20개
- @karpathy = ex-Tesla AI, teaches LLMs
- @steipete = built Clawdbot
- @gregisenberg = startup ideas daily
- @rileybrown = vibecode god
- @corbin_braun = Cursor + Ares
- @jackfriks = solo apps, real numbers
- @EXM7777 = AI ops + systems
- @eptwts = prompts + algo hacks
- @levelsio = ships games, no VC
- @AlexFinn = Claude Code maxi
- @BrettFromDJ = design + AI
- @godofprompt = prompt guides
- @AmirMushich = AI ads + video
- @gizakdag = viral AI art styles
- @MengTo = landing pages via AI
- @KingBootoshi = vibecoding king
- @meta_alchemist = Claude vibing
- @kloss_xyz = systems architecture

## AI 철학

### unclejobs.ai - "I Ship Code I Don't Read"
- Peter Steinberger (Moltbot/Clawd 만든 사람)
- "기술은 사라지고 '경험'만 남습니다"
- 소프트웨어 본질 = 문제 해결 + 마법 같은 경험
- 장인 정신 = 코드 한 줄이 아니라 에이전트가 완벽하게 돌아가게 만드는 '설계 역량'
- "기계처럼 코딩하지 마십시오. 시스템을 설계하는 아키텍트가 되십시오."

## 기타
- **녹트(Noct)**: 천장이 별하늘인 레스토랑, 재즈 공연, 예약 어려움 (♥600, 공유124)

---
**태그**: #ai-agent #qjc #claude-code #knowledge-graph #investment #x-accounts #ai-philosophy #noct
