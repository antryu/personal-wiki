# 2026-02-21 Knowledge Dump #5

## 🔑 핵심 인사이트 3줄 요약
1. **OpenClaw + Claude Code 병렬 개발** — Git Issue → Worktree 분리 → 병렬 PR → 자동 Merge. 이게 진짜 워크플로우.
2. **NotebookLM + Gemini Gems** — 지식 기반을 AI 어시스턴트로 전환. 새 자료 넣으면 자동 업데이트.
3. **AI가 팀을 대체** — 온리팬스급 사이트를 혼자 만들되, 기획/분석/설계/구현/테스트팀을 AI가 자체 조직.

---

## 1. 🤖 AI가 팀 전체를 자체 조직 (@keke_appa)
**요약:** "온리팬스 같은 사이트 만들라고 던짐" → AI가 기획팀-분석팀-설계팀-구현팀-테스팀으로 나눔. QA-개발-PM-문서팀 자체 조직. 밤새 거의 다 만듦. 어드민까지 완벽. 보안테스트 50가지. "원래 혼자만 개발하셨나봅니다 ㅜㅜ"

**🎯 적용:**
- [ ] **이전 dump의 멀티 에이전트 6개 세팅과 직결**
  - 차이점: 이건 AI가 "스스로" 팀 구조를 만든 케이스
  - PM 에이전트에게 "팀 구성부터 해" 라고 시키면 됨
- [ ] GovRFP 대규모 기능 추가 시 이 방식 적용
  - "결제 시스템 구현해" → AI가 알아서 팀 나누고 병렬 진행

## 2-4. 🏥 RUS-PAT: 새로운 의료 영상 기술 (@becoming.emmett, 7장 시리즈)
**요약:** Caltech + USC 공동연구. CT/MRI 대체. ♥109, 조회 9,069.
- **RUS** = Rotational UltraSound tomography (구조 정보)
- **PAT** = PhotoAcoustic Tomography (혈관/혈류 정보)
- 두 가지 합쳐서 구조 + 혈관 기능 동시 촬영
- 핵심 트릭: 아치(arc) 모양 초음파 검출기를 원주 방향 회전 → 반구형 데이터 수집
- 방사선 0, 조영제 불필요, MRI보다 훨씬 저렴, 시간 짧음

**🎯 적용:**
- 직접 적용 없음 (의료 기술)
- 일반 교양/투자 관점에서 기억: 의료 영상 스타트업 트렌드

## 5-6. 📚 NotebookLM + Gemini Gems 활용법 (Minjung Kim)
**요약:** NotebookLM에 자료 업로드 → Gemini Gems에 연결 → 지식 기반 AI 어시스턴트 자동 생성.
- Gems 설정: 새 gems → 요청사항 → 기본도구 → 가이드 학습 → NotebookLM 선택
- 자료 넣으면 Gem이 학습해서 질의응답, 아이디어 생성, 분석, 콘텐츠 제작
- 업무 스타일/포맷 규칙 기억 → 새 소스 들어와도 같은 방식으로 처리
- 활용: 리서치/보고서/교육자료 생성, 업무 매뉴얼, 전략 분석, 회의 기록

**🎯 적용:**
- [ ] **hydrogen-law-rag의 대안/보완으로 검토**
  - 수소법 PDF 3개를 NotebookLM에 올리면 즉시 RAG 없이도 질의응답 가능
  - 회사 사람들에게 빠르게 데모 보여주기 좋음
- [ ] **AI 지식 파이프라인과 비교**
  - NotebookLM+Gems = Google 생태계 내 솔루션
  - 우리 = 옵시디언+Jarvis 로컬 솔루션 (더 커스터마이징 가능)
  - 둘 다 쓰는 하이브리드도 가능

## 7. 🇯🇵 사가미 쥰사쿠 — 일본 M&A 시장의 젊은 억만장자 (@yes_sini)
**요약:** 34세(1991년생). 일본 SME 인수합병 시장에서 AI 알고리즘으로 매칭 효율화. 인맥 중심 영업 X, 효율경영+성과주의. 최소 49일 내 딜클로징. 석달간 426개 회사 합침. 플리파/어콰이어닷컴과 유사. ♥103, 조회 15,684.

**🎯 적용:**
- [ ] **GovRFP/MyBidWise와 유사한 비즈니스 모델**
  - 사가미: M&A 매칭 AI → 우리: 정부입찰 매칭 AI
  - 핵심 차이: 인맥 영업 X, AI 매칭 + 효율경영
  - "49일 딜클로징" → MyBidWise도 "입찰 공고 → 제안서 제출"까지 시간 단축이 핵심

## 8-10. 🔧 OpenClaw + Claude Code 병렬 개발 워크플로우

### 1번 — 구현할 바가 명확할 때:
1. 바로 코딩 X → 먼저 **OpenClaw에게 Git Issue 생성** 요청
2. Git Issue에 반드시 포함: 현재 코드 상태(문제점) + 결과적으로 어떻게 작동해야 하는지
3. 꿀팁: **Issue를 병렬 처리 가능한 구조로 나눠서 생성하라고 명령**
4. Issue 생성 후 → 요구사항 점검 → 불일치 시 반복
5. Issue 확정 → Claude Code **병렬 실행** → 각각 **Worktree 생성 + 브랜치 분리 + PR**
6. OpenClaw는 Claude Code에 **'동의 없이 진행' arg** 전달 → TDD 권장

### 장점:
1. 코드가 Git Issue 기준으로 명확히 분리 → 충돌 ↓
2. 병렬 처리 → 개발 속도 ↑↑
3. '결과적으로 어떻게 되어야 한다'가 명확 → 문제 시 OpenClaw가 후속 조치
4. PR Merge 순서도 OpenClaw가 판단 + 충돌 해결

### 2번 — 명확하지 않을 때:
- 조금씩 티키타카하면서 구체화
- 예시를 통해 선택지를 좁혀나가는 방식

**🎯 적용:**
- [ ] **GovRFP 개발에 즉시 도입** 🔥🔥🔥
  - 현재: 단일 세션에서 순차 개발
  - 목표: Issue 분리 → 병렬 Claude Code → Worktree → PR → Merge
  - OpenClaw(Jarvis)가 PM 역할 + 병렬 서브에이전트 오케스트레이션
- [ ] **모든 프로젝트 표준 워크플로우로 채택**
  - PROJECT_WORKFLOW.md 업데이트 필요

---

## ⚡ 즉시 실행 TOP 3
1. **🔥 OpenClaw 병렬 개발 워크플로우 도입** — GovRFP에서 첫 테스트. Issue 생성 → 병렬 Worktree → PR. 이게 게임체인저.
2. **NotebookLM + Gems로 수소법 데모** — hydrogen-law-rag 완성 전에 빠른 데모용
3. **PROJECT_WORKFLOW.md 업데이트** — 병렬 개발 패턴을 표준 워크플로우에 반영

---
#knowledge #ai #openclaw #parallel-dev #notebooklm #medical #business
