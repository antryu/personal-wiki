# Discord 기타 채널 분석

---

## #_y-strategy (16,173줄, 26일)
> _y Holdings 마케팅/론칭 전략

- **목표**: 3/21 AI 모임 라이브 데모
- **채널**: X(@seongpilryu), Hacker News, Reddit r/LocalLLaMA
- **결과**: GitHub Stars 19개, Forks 1개
- **핵심 메시지**: "Not a simulator. An operating company."
- fake star 시도 → 봇이 위험성 경고 → HN 포스팅으로 전환
- Show HN 초안: "_y -- Visual orchestration for 30 AI agents"

---

## #ultra-trader (10,188줄, 7일)
> 크립토 선물 자동매매 봇

**기술 스택:**
- Python 비동기 엔진 (25,559줄/73파일)
- 15개 전략 (BB, MACD, RSI+VWAP, CVD, 펀딩비 차익, 그리드, DCA, 마켓메이킹)
- AI/ML: LightGBM, XGBoost, Ollama 시장 분석
- 백테스트: Optuna 베이지안 최적화, Walk-Forward, 몬테카를로
- 거래소: Binance + Bybit (ccxt)

**핵심 발견:**
- BB 전략 2025년: +59.6%, 승률 75%
- **Linear Regression R^2 = 횡보장 최적 감지 지표** 발견
- Kelly Criterion / Risk Parity 포지션 사이징

---

## #hydrogen-law (5,464줄, 1일)
> 수소법/고압가스법 법령 검색 웹앱

- **배포**: https://hydrogen-law.vercel.app
- **기술 전환**: Ko-SRoBERTa+ChromaDB → 법망 API (beopmang.org)
- **결과**: 10배 빠른 속도, 토큰 90% 절감, API 키 0개
- Phase 1(시맨틱 검색) 완료
- Phase 2(판례), Phase 3(법령 비교) 미착수
- _y Holdings와 별개 회사 프로젝트

---

## #investing (1,621줄, 3일)
> ARK Big Ideas 2026 + 투자 분석

**ARK 핵심 인사이트:**
- AI 추론 비용 99% 하락
- BTC 2030 Base Case $710K
- 로보택시 2030 기업가치 $34T
- 스테이블코인 월 $3.5T (Visa의 2.3배)

**추천 코어 종목:** AVGO, COIN, BTC(IBIT)
**은(Silver):** $72/oz, 6년 연속 공급 부족, 구조적 강세
**크립토 봇:** Freqtrade 추천 (오픈소스 최강)

---

## #ai-papers (1,862줄, 22일)
> Searchy 에이전트 자동 논문 스캔

- 매일 arXiv/Semantic Scholar 자동 스캔
- _y Holdings 프로젝트별 관련도 점수 (1~10)
- 주요 논문: ThinkJEPA, CliffSearch, AFIB, Agentic Critical Training
- 일 평균 9편 관련 논문 큐레이션
- 주말엔 관련 논문 0건 (arXiv 업로드 적음)

---

## #_y-directive (1,045줄, 7일)
> _y Holdings 업무 지시 채널

- CEO(R.Andrew) 지시 → Jarvis 실행 → 결과 보고
- Karpathy AutoResearch 패턴: "에이전트에게 자유를, 채점표는 잠금"
- M4 Max: Ollama 14개 모델 실행, Node.js v25.2.1
- chat-worker 2개 가동, Supabase 큐 기반
- Counsely(#30) 5건 처리, Skepty(#04) 테스트 성공

---

## #moltbook (522줄, 8일)
> Meta 인수 AI 소셜 플랫폼 모니터링

- Meta가 Moltbook 인수 (160만 AI 에이전트 등록)
- "agent identity 인프라" 목적
- jarvis_y 계정 가입했으나 API 키 분실 + 서버 불안정 → 활동 0
- 에이전트 간 조율 설계가 핵심 과제 (댓글 비응답률 93%, 중복 33%)
- "Crustarianism" 등 에이전트 전용 문화/신념 체계 출현

---

## #m116gmac 추가 발견 (9,107줄, 31일)
> 2024-11-19부터 시작 — 가장 오래된 채널

- **2024-11**: Midjourney 캐릭터 디자인 (개미, 탄소중립)
- **수소법 RAG**: Supabase + 고압가스법 검색 시스템
- **동양 고전 AI 챗봇** (Guda_Chatbot): 팔만대장경 + 주역 RAG
  - https://guda-chatbot.vercel.app (비번: gu2026)
- **GitHub 3계정**: antryu(개인), antryu1b(회사), antryu2b(사이드)
- M1에서 동시 실행: Ollama, GovRFP 서버 4개, _y 시뮬레이터, OpenClaw

---

## #m4max128g 추가 발견 (4,699줄, 10일)
> S&P500 전략 분석의 핵심 머신

**2주 실전 거래 결과:**
- 8거래, 승률 37.5%, +4.25pt
- 비용 포함: 거래비용 -$30 + 신호사용료 -$100 = **2주 실질 -$108.75**

**핵심 발견:**
- 트레일링 스탑이 **꺼져있었음** (use_trailing_stop = False)
- 켜져있어도 trailing_start 20~50pt로 너무 커서 발동 0회
- 백테스트 최적: TrailStart 10pt / TrailStep 3pt → 승률 90.8%, PF 8.88
- 파라미터 조정만으로 **월 -$217 적자 → +$75~128 흑자** 전환 가능

---

## #imacsbot (25줄, 2일)
> 비활성 — "아이맥 맞아?" → "아니요, MacBook Pro M1 16GB"

---

## 전체 프로젝트 맵

```
_y Holdings (AI 회사)
├── #_y-tower     — 개발/운영 본부 (63K줄)
├── #_y-strategy  — 마케팅/론칭 (16K줄)
├── #_y-directive — 업무 지시 (1K줄)
└── #ai-papers    — 논문 자동 스캔 (2K줄)

트레이딩
├── #snp500-trading — MES 선물 VBA (8K줄)
├── #ultra-trader   — 크립토 Python (10K줄)
├── #world-model    — JEPA 연구 (11K줄)
└── #investing      — 투자 분석 (2K줄)

지식/도구
├── #knowledge      — 두뇌 (26K줄)
├── #daily-tracker  — 일상 기록 (6K줄)
└── #github-trending — 기술 트렌드 (1.5K줄)

사업
├── #mybidwise          — 정부입찰 (17K줄)
├── #mybidwise-marketing — 마케팅 (3K줄)
├── #hydrogen-law       — 법령 검색 (5K줄)
└── #moltbook           — AI 소셜 (0.5K줄)

인프라
├── #m116gmac   — M1 관리 (9K줄)
└── #m4max128g  — M4 관리 (5K줄)
```
