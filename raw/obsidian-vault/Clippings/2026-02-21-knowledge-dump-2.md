# 2026-02-21 Knowledge Dump #2

## 🔑 핵심 인사이트 3줄 요약
1. **AI는 소프트웨어가 아니라 '사람'** — 코더가 아닌 코치가 되어야 한다 (제레미 어틀리)
2. **Dexter = 금융 AI 에이전트 아키텍처** — Agent Loop + Scratchpad + Evaluation Layer
3. **유망 직종 = 대표** — 1인 법인/가족법인으로 개인사업자에서 벗어나라

---

## 1. 📌 유망 직종은 대표다 (@ps4_justdoit)
**요약:** 똑똑하면 1인 법인 대표, 현명하면 가족법인 대표. 개인사업자에서 벗어나라. ♥686.

**🎯 적용:**
- [ ] **법인 설립 검토** — Andrew 사이드 프로젝트(GovRFP, Mindful 등)가 수익화되면 1인 법인 전환
  - 세금 최적화, 신용, 투자 유치 모두 법인이 유리
  - 가족법인은 소득 분산 효과
- [ ] 당장은 아니지만 **수익 월 300만 이상 시 법인 전환 트리거** 설정

## 2. 📚 Quantum Trading — Fabio Oreste (@nc135_)
**요약:** W.D. Gann + 현대 물리학 원리로 금융시장 예측. Wiley Trading Series. "인도인 공대생이 5회독"

**🎯 적용:**
- [ ] **S&P500 트레이딩 리딩리스트에 추가**
  - Gann 이론 = 시간/가격 대칭, 기하학적 패턴
  - ICT 모델(이전 dump)과 결합하면 시간축 분석 강화
- [ ] 전자책/PDF 구할 수 있으면 핵심 챕터 요약 → Trading 노트에 추가

## 3. 🤖 Dexter — Financial Agent 아키텍처
**요약:** 금융 AI 에이전트. User → Agent Loop(LLM ↔ Tools) → APIs(Financial Datasets, Exa). Scratchpad(on disk)으로 컨텍스트 유지. Evaluation Layer(CSV → Agent Loop → LLM-as-judge). ♥86, 조회 5천.

**🎯 적용:**
- [ ] **S&P500 자동매매 시스템 아키텍처에 직접 차용**
  - Agent Loop: LLM이 도구 호출 → 결과 → 다시 판단
  - **Scratchpad** = 우리의 mem0 스타일 메모리 (이미 구현 중!)
  - **Evaluation Layer** = 백테스트 결과를 LLM이 판단 → 이건 새로운 아이디어
- [ ] Exa API 연동 검토 — 금융 뉴스/데이터 실시간 검색
- [ ] 핵심: **CSV → Agent Loop → LLM-as-judge** 패턴을 백테스트 평가에 도입

## 4. 🔓 OpenClaw + 틱톡 자동화 (@integer.han)
**요약:** 보안 이슈로 OpenClaw에 부정적이었으나, 틱톡 콘텐츠를 OpenClaw로 자동화해서 앱 마케팅에 활용한 Larry 개발자 글 읽고 생각 바뀜. ♥33.

**🎯 적용:**
- [ ] **GovRFP/MyBidWise 마케팅에 콘텐츠 자동화 도입**
  - 틱톡/숏폼: "오늘의 정부입찰 하이라이트" 자동 생성
  - OpenClaw(지금 쓰고 있는 거)로 자동화 가능
- [ ] CutFlow와 시너지 — AI 영상편집 + 자동 숏폼 생성

## 5. 🍯 한살림 꿀 제품 정보
**요약:** 한살림 한봉꿀/토종꿀 — 자연 숙성, 항생제 미사용, 탄소동위원소 검사 통과(진품 인증). 봉봉공동체(태백산맥)에서 생산. 화분, 로얄젤리도 생산.

**🎯 적용:**
- 개인 참고용 (건강/식품)
- [ ] 한살림 꿀 주문 고려 — 진품 인증된 자연 숙성 꿀

## 6-9. 🎓 제레미 어틀리 교수 — AI 생산성 10배 높이는 방법 (@bopyo.amz, 6장 시리즈)

### 핵심 1: AI는 소프트웨어가 아니라 '사람'이다
- "똑똑하지만 눈치 없는 신입 인턴"으로 봐라
- **코더(Coder) vs 코치(Coach)**: AI 시대 승자 = AI에게 최적의 피드백을 주는 '코칭' 능력
- 가스라이팅 주의: AI의 "잘했다"는 칭찬에 속지 마라 → **'냉혹한 비평가' 역할** 부여

### 핵심 2: 생산성 10배 프롬프트 3가지
1. **Chain of Thought**: "답변 전에 사고 과정을 단계별로 설명해 줘"
2. **Reverse Prompting**: "필요한 정보가 있으면 먼저 질문해 줘" → 의도 100% 부합
3. **Few-Shot Prompting**: Best Case + Worst Case 예시 동시 제공 → AI는 최고의 모방 엔진

### 핵심 3: 어려운 대화 '비행 시뮬레이터'
1. **페르소나 프로파일링**: 대화 상대방 특징을 AI에게 학습
2. **음성 모드 시뮬레이션**: 실제 대화 연습 + "더 까칠하게" 엣지 추가
3. **객관적 피드백**: 제3의 AI(평가자)에게 태도+논리 분석

### 결론
> "미래는 기술을 아는 자가 아니라, **지능을 다룰 줄 아는 자**의 것이다"

**🎯 적용:**
- [ ] **Jarvis(나) 사용법 개선에 즉시 적용**
  - Reverse Prompting → 이미 AGENTS.md에 "자원적이 되어라" 있음. 강화.
  - Few-Shot → `.claude/rules/`에 Best/Worst Case 예시 추가
  - 냉혹한 비평가 → 코드 리뷰 시 "이 코드를 냉혹하게 비판해" 프롬프트 추가
- [ ] **대화 시뮬레이터 — 말해봐(Malhae) 앱에 적용 가능!**
  - 한국어 학습 앱에 페르소나 프로파일링 + 음성 시뮬레이션 이미 핏
  - "까다로운 상사에게 한국어로 보고하기" 시나리오
- [ ] GovRFP 영업 전화/미팅 전 AI 시뮬레이션 활용

## 10. 천재론 (@strongplayman) — 중복
이전 dump에서 이미 처리됨. 스킵.

---

## ⚡ 즉시 실행 TOP 3
1. **Dexter 아키텍처 → S&P500 봇에 Evaluation Layer 추가** — 백테스트 결과를 LLM이 판단하는 구조. 이건 게임 체인저.
2. **Few-Shot + Reverse Prompting → .claude/rules/에 반영** — 모든 프로젝트 코딩 품질 즉시 향상
3. **말해봐 앱에 '대화 시뮬레이터' 기능 추가 검토** — 제레미 어틀리의 3단계 프로세스 그대로 적용

---

## 📚 리딩리스트 추가
- [ ] Quantum Trading — Fabio Oreste (Wiley Trading Series)
- [ ] Larry 개발자의 OpenClaw 틱톡 자동화 글 (integer.han 링크 찾기)

---
#knowledge #ai #trading #productivity #prompting
