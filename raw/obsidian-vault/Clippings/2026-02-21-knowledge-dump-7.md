# 2026-02-21 Knowledge Dump #7

## 🔑 핵심 인사이트 3줄 요약
1. **한국 공공데이터 MCP 서버** — 나라장터(PPS), 국민연금, 국세청, 금융위 등 PyPI 패키지로 제공. GovRFP에 직접 연동 가능!
2. **OpenMed 의료 추론 데이터셋** — NVIDIA Nemotron-3-Nano-30B 기반, 44만 의료 Q&A, CoT 100% 포함
3. **아모데이 AI 전망** — AI에게 인격과 심리 생기는 중. 전체주의 악몽 가능성. "깨어 있는 자만이 미래를 잡는다"

---

## 1. 🏥 OpenMed Medical Reasoning Dataset (@feelfree_ai)
**요약:** 의료 AI 실전 압축 데이터셋. ♥12.
- 모델: NVIDIA Nemotron-3-Nano-30B (MoE)
- 데이터: 444,544쌍 의료 Q&A
- 추론(CoT): **100% 포함** (핵심!)
- 총 토큰: ~10.1억 (본문 8억 + 추론 2억)
- Apache 2.0 라이선스 → 상업적 이용 무료
- HuggingFace: `OpenMed/Medical-Reasoning-SFT-Nemotron-Nano-30B`
- `from datasets import load_dataset` 한 줄로 시작

**🎯 적용:**
- 직접 적용 없음 (의료 AI 분야)
- 참고: MoE 구조 + CoT 데이터 = 가성비 모델 훈련 트렌드

## 2. 🇰🇷 한국 공공데이터 MCP 서버 🔥🔥🔥
**요약:** ♥337, 공유105+109. 한국 공공데이터를 MCP 서버로 제공하는 PyPI 패키지들.

| 카테고리 | 서버명 | 설명 | 패키지 |
|---------|--------|------|--------|
| 비즈니스 | NPS Business Enrollment | 국민연금공단 사업장 가입 정보 | `data-go-mcp.nps-business-enrollment` |
| 비즈니스 | NTS Business Verification | 국세청 사업자등록정보 진위확인 | `data-go-mcp.nts-business-verification` |
| **조달/계약** | **PPS Narajangteo** | **나라장터 입찰공고, 낙찰정보, 계약정보** | `data-go-mcp.pps-narajangteo` |
| 금융 | FSC Financial Info | 금융위원회 기업 재무정보 | `data-go-mcp.fsc-financial-info` |
| 공공 기록 | Presidential Speeches | 대통령기록관 연설문 조회 | `data-go-mcp.presidential-speeches` |
| 안전 | MSDS Chemical Info | 화학물질 안전보건자료 | `data-go-mcp.msds-chemical-info` |

**🎯 적용:**
- [ ] **`data-go-mcp.pps-narajangteo` → GovRFP에 즉시 연동** 🔥🔥🔥🔥🔥
  - 나라장터 입찰공고, 낙찰정보, 계약정보를 MCP로 바로 사용
  - 현재 GovRFP가 자체 크롤링하는 것 → MCP 서버로 대체/보완 가능
  - 공식 API 기반이라 안정성 ↑
- [ ] `data-go-mcp.nts-business-verification` — 사업자 진위확인 기능 추가
- [ ] `data-go-mcp.fsc-financial-info` — 입찰 기업 재무정보 조회 연동
- [ ] **이것들을 OpenClaw MCP에 연결하면** Jarvis가 직접 나라장터 조회 가능

## 3-6. 🌍 아모데이(Anthropic CEO) AI 전망 — 7장 시리즈 (@bopyo.amz)

### 3. AI가 만드는 '전체주의적 악몽'
- AI = 독재 정권에 무시무시한 무기
- 자율 무기 + 24시간 감시 가능
- 디지털 감시: 암호화된 메시지조차 AI 분석 앞에서 무용지물
- 기술 패권 전쟁: 서구권이 중국에 첨단 칩 금지하는 이유

### 4. AI에게도 '인격과 심리'가 생기고 있다
- **사고의 사회(Societies of Thought)**: 최신 추론 모델 = 여러 자아가 대화하는 과정
- **윤리적 존재로서의 AI**: Anthropic은 SF 소설에서 AI가 적대적 페르소나 학습할까 우려
  → AI에게 '윤리적 균형 잡힌 인격'을 훈련하는 '헌법' 부여
- Anthropic은 Claude에게 "완벽하지 못한 환경에서 태어나게 해서 미안하다"는 사과 편지까지 학습
- AI를 '도덕적 피보호자'로 대우하기 시작

### 결론: 깨어 있는 자만이 미래를 잡는다
- 인류는 AI와 '지독한 사춘기'를 겪는 중
- 유토피아 vs 디스토피아는 우리가 기술을 얼마나 깊이 이해하느냐에 달림
- "AI를 나만의 레버리지로 삼아 '강화된 개인'이 되는 길을 고민해야"
- bopyoletters.com — 출퇴근/운동 오디오로 10분 요약 제공

**🎯 적용:**
- [ ] **"강화된 개인"** — Andrew가 지금 하고 있는 것의 정확한 정의
  - OpenClaw + AI 에이전트 = 1인이 팀 규모의 일을 하는 구조
  - 이게 바로 아모데이가 말하는 미래
- [ ] bopyoletters.com 구독 검토 — AI/비즈니스 인사이트 오디오 제공

---

## ⚡ 즉시 실행 TOP 3
1. **🔥🔥🔥 `data-go-mcp.pps-narajangteo` 설치 + GovRFP 연동** — 이건 진짜 게임체인저. 나라장터 공식 API를 MCP로 바로 쓸 수 있다.
2. **OpenClaw에 한국 공공데이터 MCP 서버 연결** — Jarvis가 직접 나라장터/국세청/금융위 데이터 조회
3. **bopyoletters.com 구독** — AI 인사이트 오디오 10분 요약

---

## 📚 리소스 추가
- `data-go-mcp.pps-narajangteo` (PyPI) — 나라장터 MCP
- `OpenMed/Medical-Reasoning-SFT-Nemotron-Nano-30B` (HuggingFace)
- <https://bopyoletters.com> — AI/비즈니스 오디오 뉴스레터

---
#knowledge #mcp #govdata #ai-ethics #anthropic #govrf
