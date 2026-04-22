# Y-Tower Agent Capabilities

> Y-Tower 오케스트레이션 레이어가 제공하는 30-agent roster, 7개 실행 모드, 템플릿 라이브러리, 공통 자원(shared experts) 의 전체 카탈로그.
> 마지막 업데이트: 2026-04-22
> 스킬 경로: `~/.claude/skills/ytower/SKILL.md`

## Overview

Y-Tower 는 Claude Code subagent 위에 얹은 조직형 오케스트레이션 레이어. 회장(Andrew) 1인 — 참모실장(Counsely/Buddy) 1인 — 9개 본부/실 — 30명의 전문 에이전트 구조. 각 실행 요청은 `/ytower <mode> ...` 로 들어와서 persona injection 패턴으로 Task tool 을 통해 분산된다.

핵심 설계 원칙 3가지:
1. **Shared vs Routed 분리** — 모든 세션에 상시 로드되는 공통 자원(project memory, task files, core tools, Discord MCP, render pipeline, local LLM endpoint) 과 과제별 gated 전문가를 구분한다.
2. **모드 = 딜리버레이션 깊이** — lookup (chat) 부터 RDT-style 재귀(deep) 까지 7단계. 과제 난이도에 맞는 비용·시간 envelope 를 미리 합의.
3. **No vendor lock-in** — LangChain/LangGraph 의존 없음. 모든 호출이 Task tool + Anthropic SDK 로 가며, 자동화 대부분은 M4 llama.cpp 로컬 엔드포인트를 우선 사용한다.

## Shared Experts (always-on infrastructure)

RDT 용어로 "모든 토큰에서 실행되는 shared expert" 에 해당. 세션 시작 시 자동 로드되며, `/ytower chat` 으로 호출할 수 없다. 새 에이전트 추가 시 "이게 모든 과제에 쓰이나?" 를 먼저 물어야 하는 자원.

| Resource | 위치 | 역할 |
|---|---|---|
| Project memory | `~/.claude/projects/-Users-andrew-y-tower-test/memory/*.md` (via `MEMORY.md` index) | durable facts, rules, feedback |
| Persona task files | `~/y-tower/tasks/<persona>.md` | in-flight work, cross-session continuity |
| Core tools | Read, Grep, Glob, Edit, Write, Bash, WebFetch, WebSearch | filesystem + web |
| Discord MCP | `plugin:discord:discord.*` | reply / fetch_messages / download_attachment / react / edit_message |
| Cross-domain skills | `external-context`, `customer-research`, `trace`, `document-specialist` | 페르소나 간 공유, floor-free |
| Render pipeline | `ytower-render` skill + Hyperframes CLI | HTML/GSAP → MP4, Andrew 결재 gate |
| Local LLM endpoint | M4 llama.cpp `http://100.105.53.37:8080/v1` (Qwen3-32B-Q4_K_M) | 자동화 기본 (Anthropic API 는 결재 필요) |

**룰**: 제거 시 *모든* 과제가 나빠지면 shared, 특정 도메인에만 영향이면 routed.

## Routed Experts (30-agent roster)

persona injection 패턴으로 과제별 소환. 모드 2·4·5 의 auto-select 는 이 roster 에서만 고른다.

활동성 라벨 (2026-04-22):
- 🟢 frequent — 최근 30일 내 여러 번
- 🟡 occasional — 특정 상황
- ⚪ dormant — 지난달 0회, 재활성 후보

### 10F — 회장실·참모실

| Agent | Type | Model | Activity | Role |
|---|---|---|---|---|
| **counsely** (≡ #buddy) | `planner` | opus | 🟢 | 참모실장, 전략 종합 (Mode 7 deep Coda) |

### 9F — 기획·재무·법무

| Agent | Type | Model | Activity | Role |
|---|---|---|---|---|
| **tasky** | `planner` | sonnet | 🟢 | 작업 분해 (Mode 7 deep Prelude) |
| **finy** | `analyst` | sonnet | 🟡 | 예산·수익 분석 (Vita L4 template 참여) |
| **legaly** | `analyst` | sonnet | 🟡 | 계약·라이선스·SHA |

### 8F — 리스크·감사

| Agent | Type | Model | Activity | Role |
|---|---|---|---|---|
| **skepty** | `critic` | opus | 🟢 | 반론·premortem (Cap·Vita template Decision) |
| **audity** | `code-reviewer` | opus | 🟡 | 내부 통제·감사 |

### 7F — 개발·QA·디자인

| Agent | Type | Model | Activity | Role |
|---|---|---|---|---|
| **buildy** (≡ #buildy) | `architect` | opus | 🟢 | 풀스택 아키텍처·구현 |
| **testy** | `test-engineer` | sonnet | 🟡 | QA 자동화 |
| **pixely** | `designer` | sonnet | 🟡 | UI/UX 디자인 |

### 6F — 콘텐츠·리서치·성장

| Agent | Type | Model | Activity | Role |
|---|---|---|---|---|
| **searchy** | `explore` | haiku | 🟢 | 리서치·발견 (Mode 7 deep Explore, Cap Pattern 백업) |
| **wordy** | `writer` | haiku | 🟡 | 카피·문서 (Mode 7 deep Report) |
| **buzzy** | `executor` | sonnet | ⚪ | 소셜 미디어 |
| **edity** | `executor` | sonnet | ⚪ | 콘텐츠 가공 |
| **growthy** (≡ #marketing) | `analyst` | sonnet | 🟢 | Growth 실험 설계 |
| **logoy** | `designer` | haiku | ⚪ | 브랜드 디자인 |

### 5F — CS·광고·세일즈

| Agent | Type | Model | Activity | Role |
|---|---|---|---|---|
| **helpy** | `writer` | haiku | ⚪ | 고객 지원 |
| **clicky** | `analyst` | haiku | ⚪ | 광고·퍼포먼스 |
| **selly** | `executor` | sonnet | ⚪ | 세일즈·BD |

### 4F — 인프라·보안

| Agent | Type | Model | Activity | Role |
|---|---|---|---|---|
| **stacky** | `executor` | sonnet | 🟡 | 인프라·DevOps |
| **watchy** | `explore` | haiku | ⚪ | 모니터링 |
| **guardy** | `security-reviewer` | sonnet | 🟡 | 보안 |

### 3F — HR·성과

| Agent | Type | Model | Activity | Role |
|---|---|---|---|---|
| **hiry** | `executor` | haiku | ⚪ | 운영 지원 |
| **evaly** | `analyst` | sonnet | ⚪ | 성과·KPI |

### 2F — Capital 전속

| Agent | Type | Model | Activity | Role |
|---|---|---|---|---|
| **quanty** | `analyst` | opus | 🟢 | 퀀트 분석 (Cap 파일럿 Indicator) |
| **tradey** | `executor` | sonnet | ⚪ | 트레이딩 (**Layer A — LLM 실행 영구 금지**) |
| **globy** | `analyst` | sonnet | ⚪ | 글로벌 시장 |
| **fieldy** | `explore` | haiku | 🟡 | 현장 조사 (Cap 파일럿 Pattern, 2026-04-22 활성) |
| **hedgy** | `critic` | sonnet | 🟡 | 헤지·리스크 (Cap 파일럿 Trend/Regime, 2026-04-22 활성) |
| **valuey** | `analyst` | sonnet | ⚪ | 밸류에이션 |

### 1F — SaaS 전속

| Agent | Type | Model | Activity | Role |
|---|---|---|---|---|
| **opsy** | `executor` | sonnet | ⚪ | SaaS 운영 |

**Roster 룰**: ⚪ dormant 는 제거하지 않는다(재활성 후보). 새 역할이 기존 에이전트로 커버되면 추가하지 않는다 — 2026-04-22 "Nerdy" 제안이 Quanty + Searchy 로 이미 커버되어 기각된 사례.

## Execution Modes (7개)

| Mode | 명령 | 용도 | 호출 수(대략) | 비용 envelope |
|---|---|---|---|---|
| 1. Chat | `/ytower chat <agent> <q>` | 1:1 대화 | 1 | $0.01-0.05 |
| 2. Directive | `/ytower directive [--agents=…] <task>` | 병렬 다중 실행 | 3-5 + synthesis | $0.10-0.50 |
| 3. Meeting | `/ytower meeting [--attendees=…] <agenda>` | 2-round 이사회 시뮬 | N×2 + minutes | $0.30-1.00 |
| 4. Decision | `/ytower decision [--voters=…] <question>` | tier-weighted 투표 | evidence + N votes | $0.20-0.80 |
| 5. Fork | `/ytower fork --variants=[…] <agenda>` | N개 평행 시나리오 | N × Mode 3/4 | $1-3 |
| 6. Crowd | `/ytower crowd --size=N <question>` | M4 llama.cpp 군중 시뮬 | $0 (로컬) | N/4 × 3s |
| 7. Deep | `/ytower deep [--max-n=5] [--difficulty=…] <task>` | Prelude → Recurrent(N) → Coda, adaptive depth | 7-27 | $0.05-3.00 |

Mode 7 (deep) 구조 — RDT 패턴 이식:

```
Prelude (Tasky)  →  Recurrent Block × N (EPARE: Explore·Plan·Act·Report·Evaluate)  →  Coda (Counsely)
   ↓                         ↓                                                             ↓
difficulty 측정         각 loop 에서 sub-question 1개 진전                          Chairman memo
sub-questions            Skepty 가 수렴 판정 (continue·stop·escalate)              Proposal / Downside
specialists 선정         Wordy 가 loop 저널 기록                                    Confidence / Decisions
G1·G2 가드 (데이터·도메인 키워드)                                                   C1·C2 가드 (blocked·advisory)
                                                                                    post-Coda regex validator
```

### Adaptive Depth 룰

| Difficulty | N | Model tier | 예시 |
|---|---|---|---|
| easy | 1 | haiku | "커밋 메시지 작성" |
| medium | 3 | sonnet | "경쟁사 매트릭스" |
| hard | 5+ | opus | "L4 플랫폼 진입 조건 설계" |
| open | 2→5 (escalate) | mixed | "Y-Tower 개선 방향" |

N 수렴 조건: Skepty 가 2 loop 연속 `degrading` → rollback + 강제 stop. `escalate` + `current_n < max-n` → N += 1. `current_n == N` 에서도 미해결 → `unresolved_after_N` flag 포함해 Coda 로 넘김.

## Template Library (Phase 4)

`~/.claude/skills/ytower/templates/` — 자주 쓰이는 deep-mode 파이프라인을 JSON Schema + spec 으로 고정. 목표: **체계성·일관성·신뢰성**.

현재 등록된 템플릿:

| ID | Version | Owner | 구조 | 산출물 |
|---|---|---|---|---|
| `cap-weekly` | 1.0.0 | cap | Quanty / Fieldy / Hedgy / Skepty 4-role (단일 pass) | `## 6. Cap Commentary — TL;DR` + 4-section agents callout |
| `vita-l4-entry` | 1.0.0 | vita | Legaly / Finy / Skepty / Counsely 3+1 (3-loop default, 5-loop for negotiation playbook) | Chairman 결재 메모 (Proposal / Downside / Confidence / Decisions / Open Threads / Validation Meta-Note) |

각 템플릿은 5개 필수 구성요소로 구성:
1. `prelude` — difficulty / suggested_n / specialists / sub_questions / success_criteria
2. `input_schema` — 필수 입력 (JSON Schema draft-7)
3. `agent_output_schemas` — 역할별 output 형식·필수 요소
4. `coda_output` — 최종 산출물 구조 + final_validator 지정
5. `validators` — regex_blocks (도메인별 firewall)

**Validator**: `cap_layer_a_firewall` 은 Cap 의 거래 명령·진입가·한국어 강제 명령어를 차단, `vita_firewall` 은 의료 효능·수익 보장·투자권유 문구를 차단.

**Registry**: `_registry.json` 에 id · version · last_tested · last_prod_run · fixtures · status 를 기록. `status: stable` 는 fixture 기반 golden test 통과 + 최소 1회 프로덕션 실행 완료.

향후 추가 후보: `bid-user-contact`, `growthy-experiment-brief`, `deep-failure-unresolved`.

## Hard Rules (전 모드 공통)

1. **No fabrication** — 라이브러리·법규·수치 모르면 "unknown, needs verification".
2. **No trade execution** — 어느 모드도 실행 가능한 거래 명령 생성 금지. Cap 은 Layer A firewall (regex) 로 이중 차단.
3. **No medical/legal/regulatory commitments** — flag + route. Vita 는 약사법·의료기기법 기반 regex block.
4. **Anthropic approval gate** — 유료 API 자동 호출은 Andrew 의 explicit per-task 승인 필요. 기본은 M4 llama.cpp 로컬.
5. **No vendor lock-in** — LangChain/LangGraph 등 orchestration framework 의존 금지. 순정 Task tool + Anthropic SDK.
6. **Downside first** — CEO persona (Cap/Bid/Vita) 는 제안 전에 failure mode 부터 명시.
7. **Advisory only in deep** — Coda 는 결재 메모. 실행은 Andrew sign-off → systematic code. subagent 는 실행자가 아니다.
8. **Rollback-safe artifacts** — `.omc/state/sessions/<id>/ytower-deep-<ts>/` 에 prelude.json / loop-*.md / coda.md 전부 보존.

## 최근 변경 이력

- **2026-04-22** Phase 4 Template Library 추가 (cap-weekly, vita-l4-entry 2종, registry + schema + spec + fixture 구조).
- **2026-04-22** Mode 7 DEEP 실제 프로덕션 적용 (VITA L4 진입 결정 메모 3-loop + 5-loop 두 버전 생성).
- **2026-04-22** Hardening patch G1/G2/C1/C2 도입 — Prelude 데이터 충분성 / 도메인 키워드 가드 / Coda blocked 시 선결 조건 목록 / advisory-only 규칙 명시.
- **2026-04-22** Cap 4-role 파일럿 — Fieldy · Hedgy 재활성 (⚪ → 🟡). Nerdy 추가 제안은 Quanty + Searchy 로 커버되어 기각.
- **2026-04-22** Shared vs Routed 구조 분리 문서화 (RDT MoE 용어 채택).
- **2026-04-21** Vita (VITA CEO) persona 신설, vital → vita rename.

## Related

- [[business/tower/y-tower]] — 조직 설계 원본 (2026-03-04)
- [[business/y-tower-development]] — 코드베이스 개발 현황 (antryu/y-company)
- [[business/tower/marketing-skills]] — Growthy 연동 OMC 마케팅 스킬
- [[tech/openclaw-architecture]] — 하부 harness 구조
- [[insights/karpathy-inspired-code-guidelines]] — Buildy simplify-pass 근거

## Sources

- `~/.claude/skills/ytower/SKILL.md` (595 lines, v4)
- `~/.claude/skills/ytower/templates/_registry.json`
- `~/.claude/projects/-Users-andrew-y-tower-test/memory/MEMORY.md` (project memory index)
- 2026-04-22 세션: Phase 1-4 구현 + VITA L4 deep-mode 프로덕션 실행
