# 2026-02-21 Knowledge Dump #4

## 🔑 핵심 인사이트 3줄 요약
1. **"모든 앱은 사라지거나 API화 될 것"** — YC 예측. Personal AI가 워크플로우 대체. OpenClaw가 정확히 이 흐름.
2. **월 4~5억 자동 수익** — leosofts2016, AI 토큰 3억개/월 사용, 거의 100% 자동화
3. **Meeting → Product 1시간** — 녹음 → 전사 → PRD → bkit 디자인 → AI 코딩 → 완성

---

## 1. 🌐 sub-agents.directory — Claude Code 서브에이전트 허브 (@aicoffeechat)
**요약:** 100여 개 Claude Code 서브에이전트 프롬프트 + MCP 서버 모음. ♥193, 공유86.
- MCP Servers: Upstash, SettleMint, PostgreSQL, Supabase, Prisma, Figma, Convex
- Language Specialists: Angular, C++, C#, Django, .NET 등
- 사이트: <https://sub-agents.directory>
- GitHub: github.com/ayush...

**🎯 적용:**
- [ ] **sub-agents.directory 탐색** → GovRFP에 맞는 서브에이전트 가져오기
  - Supabase MCP → GovRFP 백엔드 연동
  - 이전 dump의 6개 에이전트(PM/FE/BE/QA/UX/PROMENG)와 결합
- [ ] 남들이 검증한 프롬프트 가져와서 커스터마이징 → 처음부터 짤 필요 없음

## 2. ⚙️ Claude Code 커스터마이징 팁 (boris_cherny, Anthropic)
**요약:** Claude Code가 사랑받는 이유 = 커스터마이징. ♥519, 조회 16,873. 13장 시리즈.
1. **터미널 설정**: /config → 테마, 알림, Shift+Enter 줄바꿈, Vim 모드
- Claude Code v2.1.38

**🎯 적용:**
- [ ] `/terminal-setup` 실행 — Shift+Enter로 줄바꿈 (IDE 터미널에서)
- [ ] iTerm2 알림 설정 — 긴 작업 완료 시 알림
- [ ] boris_cherny 13장 전체 확인 → 나머지 팁 추출

## 3. 🚀 Meeting → Product 1시간 (@joshproductletter)
**요약:** ♥119, 댓글23.
1. 노션/플라우드 노트 녹음 켜고 회의 입장
2. 회의 끝나면 자동 전사 → AI 전송
3. 자동으로 PRD 생성 → Claude Code 열고
4. bkit으로 디자인 → 30분 AI 코딩
5. 백엔드 환경 변수 연동 → 1차 제품 끝
6. **전체 1시간. 나머지는 튜닝.**

**🎯 적용:**
- [ ] **GovRFP/Mindful 새 기능 개발에 이 워크플로우 도입**
  - 녹음 → 전사: OpenClaw + Whisper (CutFlow에 이미 있음!)
  - PRD 자동생성: PM 에이전트에게 시키기
  - bkit 대신 v0.dev 또는 직접 프롬프트
- [ ] Meeting Notes App 아이디어와 직결 — 이 워크플로우를 앱으로 만드는 게 그 프로젝트

## 4. 💼 Josh Kim — AX(AI Transformation) 사업 성공기
**요약:** ex-SKT 프로덕트 디자이너. AX 프로젝트 5개 병렬 진행. 대기업+투자사와 작업. 영업 한 적 없이 이메일로 프로젝트 요청 → PoC → 계약. 월매출 2배 성장. joshua.site

**🎯 적용:**
- [ ] **AX 비즈니스 모델 참고** — Andrew도 비슷한 포지션 가능
  - 회사 프로젝트(hydrogen-law-rag) = 이미 AX 하고 있음
  - 포트폴리오 사이트 만들어서 AX 컨설팅 제안 가능
- [ ] joshua.site 구조 참고 → MyBidWise 랜딩페이지 개선

## 5. 🧠 Dimitri Bertsekas — "RL 포기하고 모델 예측 통제를 선택하라"
**요약:** Fulton Professor (ASU). 안 르쿤의 비디오 강의가 주장 확장. 정책 공간 강화학습(시스템1) 한계 지적. MPC 유사 프레임워크(시스템2) 강조 — 현재 상태에서 비용/미래 예측 최적화.
- 영상: <https://lnkd.in/eFJW8kRz>
- 슬라이드: <https://lnkd.in/eC8vDHF3>
- RL 교재 2.3.7~2.3.8절: <https://lnkd.in/dKVPdDrz>

**🎯 적용:**
- [ ] S&P500 봇에 **MPC(Model Predictive Control) 개념 도입** 검토
  - 현재: 단순 규칙 기반(BB) → 목표: 비용함수 최적화 기반 의사결정
  - 시스템2 접근 = 미래 N스텝 예측 후 최적 행동 선택
- [ ] 학술적이지만 핵심 아이디어는 트레이딩에 직접 적용 가능

## 6. 💰 월 4~5억 자동 수익 비결 (@leosofts2016)
**요약:** 연매출 50억, 사옥까지 올린 법인기업 대표. 출근 안 하고 방구석에서 운영. "유명하지 않고 돈많은 사람"이 꿈. 월 4~5억 거의 100% 자동. AI 사용량:
- Total tokens in: **304,955,248** (3억!)
- Total tokens out: 6,091,815
- Total web searches: 3

**🎯 적용:**
- [ ] **자동화 레벨 벤치마크** — Andrew 목표 모델
  - 핵심: 사람이 직접 하는 건 아예 없음. 시스템이 돌아감.
  - GovRFP 자동화 목표: 데이터 수집 → 분류 → 알림 → 결제 전부 자동
- [ ] AI 토큰 3억개/월 = Anthropic API 비용 상당할 텐데 ROI가 되는 구조
- [ ] "유명하지 않고 돈많은 사람" — Andrew 지향점과 일치

## 7-8. 📈 TradingView Screener API (@tom_doerr)
**요약:** TradingView Screener 데이터를 Python으로 가져오는 라이브러리. 285 stars, 52 forks, 13k downloads. Apache-2.0.
- GitHub: [deepentropy/tvscreener](https://github.com/deepentropy/tvscreener)
- Stock, Crypto, Forex, Bond, Futures, Coin 지원

**🎯 적용:**
- [ ] **S&P500 봇에 TradingView 스크리너 데이터 연동** 🔥
  - 현재: 키움증권 데이터만 사용
  - 추가: TradingView 기술적 지표 스크리닝 → 진입 신호 보강
  - `pip install tvscreener` → Futures 데이터 바로 사용 가능

## 9. 🦾 OpenClaw YC 발표 — "모든 앱은 API화 될 것" (Seolmin Jeong)
**요약:** Snovium CEO. YC 스타트업 최전방 이야기. 핵심 5가지:
1. 모든 앱 → API가 되거나 사라진다
2. 남는 건 게임/센서 앱 뿐
3. AI 에이전트가 소프트웨어의 소비자
4. Personal AI가 워크플로우 대체
5. "개인 에이전트의 해" 도래

OpenClaw 미친 사례:
- API 키 필요 → 브라우저 열고 → GCP → OAuth → 토큰 발급까지 혼자
- Sora2 영상 → 워터마크 제거법 알아내고 → API 설정 → 워크플로우 재설정

OpenClaw vs Claude/Codex/Gemini:
1. 코딩만이 아닌 실제 생활 전체
2. 새 앱 설치 불필요
3. 내 컴퓨터에서 실행
4. 스스로 기능 확장

**🎯 적용:**
- [ ] **우리가 이미 OpenClaw 쓰고 있다** — 이 knowledge pipeline이 정확히 그 사례
- [ ] GovRFP를 API-first로 설계 → 에이전트가 소비할 수 있는 API
- [ ] "앱 → API" 트렌드에 맞춰 MyBidWise API 레이어 추가

## 10. 🌙 7시간 자동 개선 루프 (@choisungh)
**요약:** 클로드봇에게 "7시간 동안 thesis driven fund management system 개선해라. 30분마다 Google Doc 확인 → 갭 분석 → 개선 → 반복. 7:30 AM KST까지" 시키고 잠.

AI 응답: 14개 갭 분석. Critical → Important 순서로 공략:
- 🔴 Critical: 실시간 가격 → Mock P/L, 논문 버전관리, 논문↔포지션 연결, 논문 무효화 트리거
- 🟡 Important: 진입/청산 프레임워크...

**🎯 적용:**
- [ ] **S&P500 봇에 동일 패턴 적용** 🔥🔥🔥
  - 잠자기 전: "7시간 동안 백테스트 결과 분석 → 전략 개선 → 코드 수정 → 반복"
  - Google Doc 대신 옵시디언 노트 or GitHub repo
  - OpenClaw cron job으로 30분마다 트리거 가능
- [ ] 이건 **Dexter 아키텍처(Batch 2) + Evaluation Layer**와 결합하면 완전체

---

## ⚡ 즉시 실행 TOP 3
1. **🔥 tvscreener 설치 + S&P500 봇 연동** — `pip install tvscreener` 한 줄. Futures 스크리닝 데이터 즉시 활용.
2. **sub-agents.directory 탐색** — Supabase MCP + 검증된 프롬프트 가져와서 GovRFP에 적용
3. **야간 자동 개선 루프 설정** — S&P500 봇 전략을 AI가 밤새 개선하게 cron 설정

---

## 📚 리소스 추가
- <https://sub-agents.directory> — Claude Code 서브에이전트/MCP 허브
- <https://github.com/deepentropy/tvscreener> — TradingView Screener API
- <https://joshua.site> — AX 비즈니스 포트폴리오 레퍼런스
- Bertsekas RL → MPC 강의/슬라이드 (링크 위 참고)

---
#knowledge #ai #trading #openclaw #automation #business
