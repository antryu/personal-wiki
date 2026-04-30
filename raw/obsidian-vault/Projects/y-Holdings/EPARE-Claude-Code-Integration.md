# EPARE + Claude Code Integration

*Created: 2026-04-16*
*Skill: `/epare-dev` (Claude Code native skill)*

---

## Overview

y-tower의 EPARE 5-phase 워크플로우를 Claude Code 네이티브 서브에이전트 시스템으로 실행.
y-tower HTTP API 없이, 에이전트 페르소나를 Claude Code Task tool에 주입하여 동작.

```
Explore → Plan → Act → Report → Evaluate
                  ↑                    ↓
                  └── retry (max 3) ──┘
```

---

## Skill Usage

```bash
# Dev-Only Mode (14 agents, default)
/epare-dev <task description>

# Full Roster Mode (30 agents, business context included)
/epare-dev --full <task description>
```

**Skill file**: `~/.claude/skills/epare-dev/SKILL.md`

---

## Agent Mapping: Y-Tower → Claude Code

### Core Mapping Principle

y-tower 에이전트의 역할(role)과 전문성(persona)을 Claude Code 서브에이전트 타입에 매핑.
비즈니스 도메인 에이전트는 범용 타입(analyst/executor)에 페르소나 주입으로 구현.

### Persona Injection Pattern

```
Task(subagent_type="<type>", model="<model>", prompt="
  [PERSONA] You are <Name> (<number>), <department> — <desc>.
  Tier: <tier>, Reports to: <reportTo>.
  Analyze from this professional perspective.
  [TASK] <actual task>
")
```

### Dev-Only Mode — 17 Entries (14 Agents)

| Phase | Y-Tower Agent | Claude Code Type | Model | Role |
|-------|--------------|-----------------|-------|------|
| Explore | Searchy | `explore` | haiku | Codebase search |
| Explore | Skepty | `analyst` | opus | Risk identification |
| Explore | Watchy | `explore` | haiku | Dependency check |
| Explore | Pixely | `designer` | sonnet | UI pattern audit, component inventory |
| Plan | Counsely | `planner` | opus | Strategic synthesis |
| Plan | Buildy | `architect` | opus | Technical architecture |
| Plan | Guardy | `security-reviewer` | sonnet | Security planning |
| Plan | Pixely | `designer` | sonnet | UI/UX spec, layout, component design |
| Act | Buildy | `executor` | sonnet | Implementation |
| Act | Pixely | `designer` | sonnet | UI implementation |
| Act | Testy | `test-engineer` | sonnet | Test writing |
| Report | Audity | `code-reviewer` | opus | Code quality |
| Report | Guardy | `security-reviewer` | sonnet | Security audit |
| Report | Skepty | `critic` | opus | Risk challenge |
| Report | Pixely | `designer` | sonnet | UI/UX review, accessibility |
| Evaluate | Testy | `verifier` | sonnet | Test/build verification |
| Evaluate | Counsely | `architect` | opus | Final acceptance |

### Full Roster Mode — 30 Agents

`--full` 플래그 사용 시 16개 비즈니스 에이전트 추가:

| # | Agent | Department | Type | Model | Persona |
|---|-------|-----------|------|-------|---------|
| 30 | Counsely | 비서실 | `planner` | opus | 비서실장 — 정보 필터링, 전략 종합 |
| 01 | Tasky | 기획조정실 | `planner` | sonnet | 업무 관리 — 전사 조율 |
| 02 | Finy | 기획조정실 | `analyst` | sonnet | 재무 기획 — 예산, 수익 분석 |
| 03 | Legaly | 기획조정실 | `analyst` | sonnet | 법무 — 계약, 라이선스 |
| 04 | Skepty | 리스크 | `critic` | opus | 리스크 — 반론, 오탐 방지 |
| 05 | Audity | 감사실 | `code-reviewer` | opus | 감사 — 내부 통제 |
| 06 | Pixely | SW개발 | `designer` | sonnet | UI/UX 디자인 |
| 07 | Buildy | SW개발 | `architect` | opus | 풀스택 — 아키텍처, 구현 |
| 08 | Testy | SW개발 | `test-engineer` | sonnet | QA — 자동화, 품질 |
| 09 | Buzzy | 콘텐츠 | `executor` | sonnet | 소셜 미디어 |
| 10 | Wordy | 콘텐츠 | `writer` | haiku | 카피라이팅, 문서 |
| 11 | Edity | 콘텐츠 | `executor` | sonnet | 콘텐츠 가공 |
| 12 | Searchy | 콘텐츠 | `explore` | haiku | SEO/리서치 |
| 13 | Growthy | 마케팅 | `analyst` | sonnet | 그로스 해킹 |
| 14 | Logoy | 마케팅 | `designer` | haiku | 브랜드 디자인 |
| 15 | Helpy | 마케팅 | `writer` | haiku | 고객 지원 |
| 16 | Clicky | 마케팅 | `analyst` | haiku | 광고/퍼포먼스 |
| 17 | Selly | 마케팅 | `executor` | sonnet | 세일즈/BD |
| 18 | Stacky | ICT | `executor` | sonnet | 인프라/DevOps |
| 19 | Watchy | ICT | `explore` | haiku | 모니터링 |
| 20 | Guardy | ICT | `security-reviewer` | sonnet | 보안 |
| 21 | Hiry | 인사 | `executor` | haiku | 운영 지원 |
| 22 | Evaly | 인사 | `analyst` | sonnet | 성과/KPI |
| 23 | Quanty | Capital | `analyst` | opus | 퀀트 분석 |
| 24 | Tradey | Capital | `executor` | sonnet | 트레이딩 |
| 25 | Globy | Capital | `analyst` | sonnet | 글로벌 시장 |
| 26 | Fieldy | Capital | `explore` | haiku | 현장 조사 |
| 27 | Hedgy | Capital | `critic` | sonnet | 헤지/리스크 |
| 28 | Valuey | Capital | `analyst` | sonnet | 밸류에이션 |
| 29 | Opsy | SaaS | `executor` | sonnet | SaaS 운영 |

---

## Phase Detail

### Phase 1: EXPLORE (탐색)

| Mode | Agents | Focus |
|------|--------|-------|
| Dev-Only | Searchy, Skepty, Watchy, Pixely | 코드 탐색, 리스크, 의존성, UI 패턴 감사 |
| Full | + Finy, Legaly, Fieldy | + 비용, 법무, 실사 |

### Phase 2: PLAN (설계)

| Mode | Agents | Focus |
|------|--------|-------|
| Dev-Only | Counsely, Buildy, Guardy, Pixely | 전략, 아키텍처, 보안, UI/UX 설계 |
| Full | + Tasky, Growthy, Quanty | + 조율, 성장, 수치 |

### Phase 3: ACT (실행)

| Mode | Agents | Focus |
|------|--------|-------|
| Dev-Only | Buildy, Pixely, Testy | 구현, UI, 테스트 |
| Full | + Stacky, Wordy, Buzzy, Opsy | + 인프라, 문서, 홍보, 운영 |

### Phase 4: REPORT (검증)

| Mode | Agents | Focus |
|------|--------|-------|
| Dev-Only | Audity, Guardy, Skepty, Pixely | 품질, 보안, 리스크, UI/UX 리뷰 |
| Full | + Evaly, Hedgy, Globy | + KPI, 하방리스크, 글로벌 |

### Phase 5: EVALUATE (평가)

| Mode | Agents | Focus |
|------|--------|-------|
| Dev-Only | Testy, Counsely | 검증, 합격판정 |
| Full | + Valuey | + ROI/가치평가 |

---

## Feedback Loops

### AutoResearch (Act phase)

Karpathy self-grade 패턴:
1. Plan에서 추출한 quality checklist 기준으로 self-grade
2. passRate < 80% → tweak + re-grade (max 3 iterations)
3. passRate >= 80% → Report phase로 진행

### Hermes (Phase 6)

완료 후 자동 학습:
1. MEMORY.md에 발견한 패턴/교훈 기록
2. 반복 패턴 감지 시 `/learner` 스킬 생성 제안
3. session.json에 최종 결과 기록

### Act → Report → Evaluate Retry Loop

```
Act → self-grade → Report (3 parallel) → Evaluate (tests+build)
 ↑                                              ↓
 └──────── retry if REJECT or FAIL ────────────┘
                  (max 3 cycles)
```

---

## Dev-Only vs Full Roster 비교

| | Dev-Only | Full Roster |
|---|---------|-------------|
| 에이전트 수 | 14 | 30 |
| API 비용 | ~$0.05/run | ~$0.12/run |
| 관점 | 기술 중심 | 비즈니스 + 기술 |
| 적합한 태스크 | 버그 수정, 리팩토링, 기능 추가 | 신규 서비스, 전략적 변경, 제품 출시 |
| 비용 분석 | 없음 | Finy가 API 비용 영향 분석 |
| 법무 검토 | 없음 | Legaly가 라이선스 확인 |
| 성장 관점 | 없음 | Growthy가 유저 영향 평가 |

---

## Related Documents

- [[Harness-100-Workflow-System]] — y-tower EPARE harness 상세
- [[AI-Agent-Platform-Comparison]] — 경쟁사 비교
- [[DECISION-INTELLIGENCE]] — 의사결정 프레임워크
- [[운영방식-Operating-System]] — y-tower 운영 원칙
- [[COMPANY-DNA]] — 핵심 가치

---

*Maintained by: Claude Code EPARE skill system*
