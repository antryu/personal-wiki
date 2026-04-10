# 🏢 _y Knowledge Base — Dashboard

> AI가 관리하는 개인 위키. 모든 대화, 프로젝트, 인사이트가 축적됩니다.
> Last updated: 2026-04-06

---

## 🗂️ 전체 구조

```
personal-wiki/
├── raw/          ← 원본 (Discord 채널, Obsidian) — 절대 수정 금지
└── wiki/         ← AI가 작성/유지하는 지식베이스
    ├── business/ ← _y Holdings, 전략, 조직
    ├── projects/ ← MyBidWise, Hydrogen-Law, Moltbook 등
    ├── finance/  ← S&P500 자동매매, 투자, Ultra Trader
    ├── research/ ← AI 논문, World Model
    ├── tech/     ← GitHub Trending, 도구
    ├── insights/ ← 인사이트, 교훈
    ├── infra/    ← M1/M4 인프라, OpenClaw
    └── daily/    ← 일간 트래커
```

---

## 🏢 _y Holdings

- **[[business/tower/y-tower]]** — AI 회사 조직 설계 (9개 본부, 37채널)
  - 현대차·기아 + Bridgewater + Midjourney 벤치마킹
  - 3-Tier 모델 전략 + 듀얼머신(M4/M1) 인프라
- **[[business/strategy/y-strategy]]** — 런칭 전략, X 포스트, 오픈소스
- **[[business/directive/y-directive]]** — 업무 지시 로그

---

## 💼 프로젝트

- **[[projects/mybidwise/mybidwise]]** — 정부입찰 AI 플랫폼
  - 구독자 51명, 활성유저 17명 | mybidwise.com
- **[[projects/mybidwise/mybidwise-marketing]]** — SEO, 마케팅 전략
- **[[projects/hydrogen-law/hydrogen-law]]** — 수소법률 지능형 검색
  - 법망 API 전환 완료 (5,573개 법령)
- **[[projects/moltbook/moltbook]]** — Moltbook 모니터링
- **[[projects/y-holdings/y-holdings-index]]** — _y Holdings 전체

---

## 💰 투자·금융

- **[[finance/trading/snp500-trading]]** — S&P500 자동매매 (키움 CME MES)
- **[[finance/ultra-trader/ultra-trader]]** — 크립토 선물 자동매매
- **[[finance/investing/investing]]** — 투자 메모, 포트폴리오

---

## 🔬 리서치

- **[[research/papers/ai-papers]]** — AI 논문 일일 스캔 아카이브
- **[[research/world-model/world-model]]** — World Models (JEPA, Physical AI)
- **[[tech/trending/github-trending]]** — GitHub Trending AI 레포

---

## 💡 인사이트·지식

- **[[insights/knowledge]]** — 아이디어, 인사이트, 초안
- **[[infra/m116gmac]]** — M1 Pro 16G 설정
- **[[infra/m4max128g]]** — M4 Max 128G 설정
- **[[daily/daily-tracker]]** — 일간 행동 트래커

---

## 📊 데이터 현황

| 항목 | 수치 |
|------|------|
| Discord 채널 | 19개 |
| wiki 아티클 | 27개 |
| raw 파일 | 357개+ |
| 데이터 시작 | 2024-11-19 |
| 마지막 업데이트 | 2026-04-06 |

---

## 🔄 운영 워크플로우

**Ingest** → 새 소스 추가 시 LLM이 wiki 자동 업데이트
**Query** → `/wiki-query {질문}` → wiki 검색 후 답변
**Lint** → 주기적 헬스체크 (모순/고아페이지/stale 클레임)

```
[Discord 채팅] → raw/discord/ → wiki/ 컴파일 → Obsidian 동기화
[AI 논문] → raw/references/ → research/ 업데이트
[좋은 질의응답] → insights/ 에 새 페이지로 보존
```

---

*Powered by Jarvis × Karpathy llm-wiki pattern*
