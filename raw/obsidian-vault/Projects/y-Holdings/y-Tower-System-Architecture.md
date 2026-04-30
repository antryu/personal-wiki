# y-Tower System Architecture

> Last updated: 2026-04-15

## Overview

y-Tower는 29명의 AI 에이전트가 10층 가상 빌딩에서 운영하는 AI 회사 시스템.
핵심 아키텍처: **EPARE 하네스 기반 실행 + 위계 품질 게이트 + 자기진화.**

---

## 1. 실행 아키텍처

### 트리거 → EPARE → 위계 → 보고

```
트리거 (대화/지시/스케줄/자동감지)
  ↓
EPARE ���네스 (100개 워크플로우)
  ├── 1. Explore — 데이터 수집
  ├── 2. Plan — 계획 + SDART 체크리스트 생성
  ├── 3. Act — 실행 + Autoresearch 자가점검 (max 3회)
  ├── 4. Report — 결과 종합
  └── 5. Evaluate — 독립 평가 (15/20 기준, max 2 재시도)
  ↓
위계 품질 게이트
  ├── Supervisor (Director) — 부서 내부 전문 검증
  ├── C-Suite — 교차 부서 관점 검증
  └── Counsely — 회장 보고서 편성 (🔴/🟡/🟢)
  ↓
Self-Evolution
  ├── Layer 1: XP/레벨업 (매 실행)
  ├── Layer 2: 프롬프트 자동 진화 (실패 3회+)
  ├── Layer 3: 백그라운드 리뷰 (5회마다)
  └── Layer 4: 턴 기반 메모리/스킬 저장
```

---

## 2. 에이전트 위계

| Tier | Weight | 역할 | 에이전트 |
|------|--------|------|---------|
| C-Suite | 4 | 전략/종합 | Counsely, Tasky, Finy |
| Director | 3 | 부서장/견제 | Skepty, Audity, Buildy, Buzzy, Growthy, Stacky, Quanty, Opsy |
| Manager | 2 | 실무 분석 | Legaly, Pixely, Testy, Wordy, Edity, Searchy, Watchy, Guardy, Hiry, Evaly, Tradey, Globy, Hedgy, Valuey |
| Staff | 1 | 데이터/실행 | Logoy, Helpy, Clicky, Selly, Fieldy |

### 위계 체인 예시 (콘텐츠본부)

```
Wordy (Manager) → Buzzy (Director) → Tasky (C-Suite) → Counsely → Chairman
  하위 LLM 실행     팀장 전문 리뷰     교차부서 검증       보고서 편성    최종
```

---

## 3. 품질 시스템 (3중)

### Inner: Karpathy Autoresearch
- Act 단계에서 자가 채점 (qualityChecklist)
- 95% 미만 → 가장 약한 항목 1개 수정 → 재채점 (max 3회)
- 체크리스트 = 에이전트 기본(skills.ts) + Plan 동적 생성 → 합산 max 10개

### Middle: EPARE Evaluate
- 독립 평가자 (Skepty/Pixely/Counsely)가 2개 기준 × 10점 채점
- 15/20 미만 → Act부터 재시도 (max 2회)

### Outer: 위계 리뷰
- Supervisor: 부서 전문 기준 (APPROVED/REVISION NEEDED, max 2 revision)
- C-Suite: 교차 부서 관점 (APPROVED/REVISION NEEDED, max 2 revision)

---

## 4. SDART 체크리스트 표준

체크리스트 설계 규칙:
1. **Verifiable** — 출력물만 보고 YES/NO 판단 가능
2. **Binary** — 모호한 단어 없음
3. **Specific** — 숫자, 위치, 타겟 포함
4. **Actionable** — NO일 때 뭘 고칠지 명확

5개 카테고리 (SDART):
- **[S]** Structure — 포맷, 위계, 길이
- **[D]** Data — 출처, 숫자, 증거
- **[A]** Action — CTA, 담당자, 기한
- **[R]** Risk — 제한사항, 대안
- **[T]** Target — 독자 수준, 톤

---

## 5. 부서별 리뷰 기준

### Supervisor (부서 내부)

| 부서 | 검증 기준 |
|------|----------|
| SW개발 | 코드 품질, OWASP, 성능, 기술 부채, 문서화 |
| 콘텐츠 | SEO 1-2%, 브랜드 보이스, CTA, AI 패턴, 팩트체크 |
| 마케팅 | 타겟 정합, ROAS/CPA, A/B 설계, 데이터 근거 |
| Capital | 백테스트 3년+, 과적합, VaR/MDD, 샤프>1.5 |
| 기획 | OKR 정합, 일정, 리소스, 이해관계자 |
| 리스크 | 근거 분석, 편향 탐지, 대안, 확률/영향도 |
| ICT | SLA 99.5%, 보안, 비용 효율 |

### C-Suite (교차 부서)

| 부서 | 타 부서 관점 |
|------|------------|
| SW개발 | 인프라(Stacky) + 보안(Guardy) + 법적(Legaly) + UX(Pixely) |
| 콘텐츠 | 법적(Legaly) + 브랜드(Logoy) + 마케팅(Growthy) + 기술(Buildy) |
| 마케팅 | 법적(Legaly) + 콘텐츠(Buzzy) + 기술(Buildy) + 재무(Finy) |
| Capital | 리스크(Skepty) + 법적(Legaly) + 재무(Finy) + 매크로(Globy) |

---

## 6. 에이전트 도구

### 핵심 도구

| 도구 | 설명 | 사용 에이전트 |
|------|------|-------------|
| jina_read | URL → 마크다운 변환 (r.jina.ai) | Searchy, Wordy, Buzzy, Growthy, Quanty |
| jina_search | 웹 검색 (s.jina.ai) | Searchy |
| social_search | Twitter/Reddit/YouTube 검색 | Searchy, Buzzy, Edity |
| last30days | 30일 멀티소스 리서치 | Searchy, Buzzy, Growthy, Quanty |
| web_search | DuckDuckGo + SearXNG | 대부분 에이전트 |
| deep_read | URL 전체 내용 추출 | Searchy, Wordy, Buildy, Quanty |
| knowledge_search | 통합 검색 (Wiki+Obsidian+Memory) | 주요 에이전트 |
| run_harness | EPARE 하네스 실행 | Counsely |

### 전문 도구

| 도구 | 설명 | 사용 에이전트 |
|------|------|-------------|
| market_data | 주가/지수 데이터 | Quanty, Tradey, Finy |
| law_search | 법률 검색 | Legaly |
| health_check | 서비스 상태 확인 | Stacky, Watchy |
| dependency_audit | npm 취약점 감사 | Guardy, Testy |
| color_palette | 컬러 팔레트 생성 | Pixely, Logoy |

---

## 7. 자기진화 시스템

### Layer 1: XP/레벨업
- EPARE 완료 → 참여 에이전트 XP 누적
- 레벨 1~10 (XP 0~25600)
- 높은 레벨 = 자동 배정 우선순위 상승

### Layer 2: 프롬프트 자동 진화
- 같은 하네스 평가 실패 3회+ → Counsely가 Act/Report 프롬프트 개선
- 진화 이력 Supabase 저장

### Layer 3: 백그라운드 리뷰
- 5회 실행마다 Counsely 메타분석
- 에이전트 트렌드, 하네스 병목, 시스템 이슈 식별

### Layer 4: 턴 기반 Nudge
- 대화 모드에서 5턴마다 메모리 저장 확인
- 10턴마다 스킬 생성 확인 (Hermes 방식)

---

## 8. 기술 스택

- **프레임워크**: Next.js 16 + React 19 + TypeScript
- **DB**: SQLite (primary) + Supabase (backup)
- **LLM**: Ollama (로컬, $0) + Gemini Flash + Anthropic (프리미엄)
- **프론트엔드**: Tailwind CSS + shadcn + Glassmorphism
- **배포**: M1 Pro (y-tower 서버) + Tailscale VPN
- **연동**: Discord (webhook), Obsidian (git sync), seomachine, design-farmer

---

## 9. 하네스 카테고리 (102개)

| 카테고리 | ID | 개수 |
|---------|-----|------|
| dev | H-001~H-010 | 10 |
| strategy | H-011~H-015 | 5 |
| content | H-016~H-020b | 7 |
| marketing | H-021~H-025 | 5 |
| legal | H-026~H-040 | 15 |
| finance | H-041~H-045 | 5 |
| capital | H-046~H-055 | 10 |
| infra | H-056~H-065 | 10 |
| security | H-066~H-071 | 6 |
| hr | H-072~H-074 | 3 |
| research | H-075~H-082 | 8 |
| pm | H-083~H-100 | 18 |

---

## 10. 외부 스킬 통합

| 소스 | 통합 대상 | 적용 에이전트 |
|------|----------|-------------|
| seomachine (22 commands, 10 agents, 26 skills) | SEO/콘텐츠 | Wordy, Searchy, Buzzy, Growthy, Clicky, Selly |
| design-farmer (16 phases) | 디자인 시스템 | Pixely, Logoy |
| awesome-design-systems | 디자인 레퍼런스 | Pixely, Logoy |
| Hermes Agent | 자기진화 메커니즘 | 전 에이전트 |
| Karpathy Autoresearch | 자가 점검 루프 | 전 에이전트 |
| Agent-Reach / web-access / last30days | 웹 인텔리전스 | Searchy, Buzzy, Growthy, Quanty |

---

## 접속 방법

- **웹**: http://100.119.97.60:3000 (Tailscale)
- **가이드**: /guide
- **능력 대시���드**: /capabilities
- **API**: /api/harness, /api/evolution, /api/capabilities
