# 2026-02-21 Knowledge Dump

## 🔑 핵심 인사이트 3줄 요약
1. **AI CLI 도구 + 자동화** — 반복 작업은 AI로 CLI 만들어서 자동화하는 게 대세. 프롬프트 품질이 핵심.
2. **옵시디언 = 허브** — 이메일, 트렌드 수집, 노트 전부 옵시디언 안에서 처리하는 워크플로우가 생산성 극대화.
3. **트레이딩 모델 체계화** — ICT 4개 모델 체크리스트화 → 감이 아닌 시스템으로 매매.

---

## 1. AI로 CLI 도구 자동화 (@seapy/dartcli)
**요약:** 금감원 DART 공시를 터미널에서 조회하는 CLI. AI에게 시켜서 제작.

**🎯 적용:**
- [ ] **GovRFP에 CLI 모드 추가** — 나라장터 공고를 터미널에서 빠르게 조회/필터링
  - `mybidwise search "수소" --days 7 --min-budget 1억` 같은 형태
  - 웹 안 켜도 공고 확인 가능 → 테스터들 편의성 ↑
- [ ] Claude Code에 "CLI 도구 생성" 프롬프트 템플릿 만들기
  - seapy는 한번에 되는 사람들 프롬프트가 궁금하다 했음 → 좋은 프롬프트 = `.claude/rules/` 규칙 파일

## 2. OctoBot — 오픈소스 크립토 트레이딩 봇
**요약:** AI + TradingView 연동 자동매매. Docker pulls 1.4M. Custom DCA 등 다양한 모드.

**🎯 적용:**
- [ ] OctoBot 아키텍처 분석 → **S&P500 자동매매 시스템 참고**
  - 특히 전략 모듈화 방식, 백테스트 구조
  - GitHub: `Drakkar-Software/OctoBot`
- [ ] 키움증권 CME 봇에 전략 플러그인 구조 도입 검토
  - 현재: 단일 BB 전략 → 목표: 전략 교체 가능한 모듈 구조

## 3. AICC HUB — AI 콘텐츠 자동 수집
**요약:** Reddit/Newsletter/유튜브에서 AI 콘텐츠 자동 수집+분류. 283개 콘텐츠, 카테고리별 필터.

**🎯 적용:**
- [ ] **AI 지식 파이프라인과 동일 컨셉** — 우리 거 빨리 완성하자
  - AICC HUB = 웹앱, 우리 = 옵시디언+Jarvis 로컬 파이프라인
  - 차별점: 링크 던지면 → 요약+분류+옵시디언 자동 저장 (이미 설계됨)
  - `projects/knowledge-pipeline/DESIGN.md` 기반으로 구현 시작
- [ ] 소스 추가 고려: Reddit AI 서브레딧, Hacker News, arXiv daily

## 4. 옵시디언 이메일 워크플로우 (@aicoffeechat)
**요약:** 옵시디언 안에서 Gmail 확인 + 즉시 답장. 앱 전환 없이 모든 것을 한 곳에서.

**🎯 적용:**
- [ ] 옵시디언 Gmail 플러그인 설치 테스트
  - 현재 Andrew 워크플로우: 브라우저 → Gmail → 메모앱 → 왔다갔다
  - 목표: 옵시디언 열면 이메일+일정+노트 한 화면
- [ ] 당장은 **Jarvis가 이메일 체크 → 요약 → 옵시디언 daily note에 기록** 으로 대체 가능
  - HEARTBEAT.md에 이메일 체크 추가하면 됨

## 5. CIA급 정찰 시스템 (Gemini + Claude Opus)
**요약:** 한 개발자가 실시간 항공기/위성/교통/CCTV를 통합한 지리공간 정보 시스템 구축. ♥217.

**🎯 적용:**
- 직접 적용보다는 **영감** — AI 멀티소스 통합의 가능성
- [ ] GovRFP에 비슷한 발상: 7개 기관 데이터를 **실시간 대시보드**로 통합 시각화
  - 현재는 리스트형 → 지도/타임라인 뷰 추가하면 차별화

## 6. 옵시디언 PARA 구조 (모바일)
**요약:** PARA(Projects/Areas/Resources/Archives) + daily-notes + Trading 폴더. 모바일에서 84파일/31폴더.

**🎯 적용:**
- [ ] 현재 옵시디언 Vault (`/Users/andrew/thairon/obsidian-vault/`) 구조 PARA로 정비
  - 현재: inbox 위주 → PARA 구조로 마이그레이션
  - `para/projects/` — GovRFP, Mindful, CutFlow, S&P500
  - `para/resources/ai-learning/` — AI 학습자료, 논문
  - `Trading/` — ICT 모델, 백테스트 기록

## 7. .claude/ 프로젝트 규칙 구조
**요약:** Claude Code 프로젝트에 `.claude/rules/`로 디자인시스템, 테마, 컴포넌트, 코드컨벤션 등 규칙 파일 관리.

**🎯 적용:**
- [ ] **GovRFP, Mindful 등 주요 프로젝트에 `.claude/rules/` 도입**
  - `design-system.md` — UI 일관성
  - `code-convention.md` — 코드 스타일
  - `project-summary.md` — 프로젝트 개요 (새 세션마다 컨텍스트 제공)
- [ ] 이렇게 하면 Claude Code 세션 시작할 때 자동으로 규칙 로드 → 품질 일정
- [ ] `.claude/skills/component-work/` 패턴도 참고 — 반복 작업을 레시피화

## 8. ICT 트레이딩 모델 4종 (Smart Money Concepts)
**요약:**
- **Model 1:** HTF POI + MSS(shift) + FVG → 기본형
- **Model 2:** + IDM(내부 유동성) → 더 정밀한 진입
- **Model 3:** + OTE(0.62~0.79% 할인구간) → 최적 진입가
- **Model 4:** BOX SETUP — 횡보 구간 → 리테스트 후 진입

**🎯 적용:**
- [ ] **S&P500 자동매매에 ICT 모델 통합 검토**
  - 현재: BB 하단 이탈 전략 (단순)
  - 추가: FVG + Liquidity Grab 감지 → 진입 신호 보강
- [ ] 4개 모델을 체크리스트로 만들어 수동 매매 시에도 사용
  - `Trading/ict-models-checklist.md` 생성
- [ ] Model 1부터 백테스트 — S&P500 15분봉 기준

## 9. AI 세일즈 툴 트렌드 (@ai_hamzzi.mirra)
**요약:** B2B 세일즈 AI 혁신. HubSpot(4.8), Apollo.io(4.1), Markopolo AI(5.0 — 유저행동 벡터화로 디지털트윈). Clay, lemlist = 데이터 농축+초개인화.

**🎯 적용:**
- [ ] **GovRFP/MyBidWise 영업에 적용 가능**
  - Apollo.io 무료 티어로 잠재 고객(정부입찰 관심 기업) 리스트 구축
  - 멀티채널 아웃리치: 이메일 + LinkedIn 자동화
- [ ] Markopolo AI 컨셉 참고 — 유저 행동 분석으로 맞춤 공고 추천
  - MyBidWise에 "이 사용자가 관심 가질 공고" 추천 기능

## 10. 천재론 — 행위자(Actor) vs 관찰자 (@strongplayman)
**요약:** 천재 = Input을 Output으로 전환하는 사람. 학습은 원재료, 기록이 증거. "남긴 자"만 역사에 남는다.

**🎯 적용:**
- 이건 **마인드셋** — Andrew 지금 하는 게 정확히 이거임
  - 5시간/일 투자, 수익화 우선, AI 모임 → 즉시 적용
  - 핵심: **배운 거 정리만 하지 말고 결과물로 만들어라**
  - 이 knowledge dump도 "저장"이 아니라 "적용"까지 가야 의미 있음 ← 바로 지금

## 11. 레버리지 ETP Guide 수료 🎓
- 한국금융투자협회 (kifin.or.kr)
- 과정: 국내외 레버리지 ETP Guide (2026-02-19, 1일)
- **🎯 적용:** S&P500 트레이딩에 레버리지 ETP 활용 전략 정리
  - [ ] 레버리지 ETF 리밸런싱 효과, 변동성 드래그 정리 → Trading 노트에 추가

---

## ⚡ 즉시 실행 TOP 3
1. **`.claude/rules/` 구조 → GovRFP에 적용** (30분) — 코딩 품질 즉시 향상
2. **ICT 모델 체크리스트 생성** → `Trading/ict-models-checklist.md` (20분)
3. **AI 지식 파이프라인 구현 시작** — AICC HUB 보고 자극받았으면 지금이 타이밍

---
#knowledge #ai #trading #obsidian #tools #actionable
