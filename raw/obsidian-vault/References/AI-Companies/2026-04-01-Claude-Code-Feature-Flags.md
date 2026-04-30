# Claude Code Feature Flags (ccleaks.com)

**Date:** 2026-04-01
**Source:** https://www.ccleaks.com/
**Type:** Internal feature flag list (29 features)
**Tags:** #claude-code #feature-flags #multi-agent #context-management

## Overview

ccleaks.com = Claude Code 내부 기능 목록 (Feature Flags)

**29개 기능 발견** — 공개 문서에 없는 내부 실험/프로덕션 기능

**핵심 발견:**
1. Multi-agent orchestration = 표준 기능
2. Context management = 6개 전용 기능 (self-healing memory 검증)
3. Background processing = 내장
4. Planning system = first-class feature
5. Tool ecosystem = MCP (Model Context Protocol) 기반

---

## Feature List (29개)

### 1. Agent System (6개)

**COORDINATOR_MODE** — multi-agent orchestration
- 여러 agent 동시 실행
- 결과 집계
- _y의 30 agents 조정과 동일 개념

**FORK_SUBAGENT** — agent forking
- 동적 agent 생성
- Task에 따라 agent 복제
- 필요시 추가 agent 소환

**PROACTIVE** — background sleeping agents
- 백그라운드 대기 agent
- 필요시 자동 활성화
- _y heartbeat 개념과 유사

**DAEMON** — session supervisor
- Session 감독자 agent
- 상위 레벨 orchestration
- Meta-agent (agents를 관리하는 agent)

**BG_SESSIONS** — background sessions
- 메인 대화 외 백그라운드 작업
- 비동기 task 처리
- Long-running task 분리

**KAIROS** — persistent assistant
- 영구 assistant (세션 간 지속)
- 그리스 신화 "기회의 신" (Kairos)
- 시간 개념을 넘어선 assistant

**_y Application:**
- COORDINATOR_MODE → DirectiveCoordinator
- FORK_SUBAGENT → Dynamic agent spawning
- PROACTIVE → Heartbeat + wake events
- DAEMON → Counsely (meta-agent)
- BG_SESSIONS → Isolated sessions for long analysis
- KAIROS → Cross-session memory (MEMORY.md)

---

### 2. Context Management (6개)

**REACTIVE_COMPACT** — realtime compaction
- 실시간 context 압축
- 긴 대화 중 자동 정리
- Turn-by-turn 압축

**CONTEXT_COLLAPSE** — smart collapse
- 중요도 기반 context 축소
- 핵심만 남기고 나머지 요약
- Importance scoring + selective retention

**HISTORY_SNIP** — snippet compression
- 과거 대화 스니펫으로 압축
- 전체 이력 대신 요약본 사용
- Summary-based history

**CACHED_MICROCOMPACT** — cached compaction
- 압축 결과 캐싱
- 반복 압축 방지
- 성능 향상 (중복 작업 제거)

**TOKEN_BUDGET** — per-turn budgets
- Turn별 토큰 예산 관리
- 초과 시 자동 압축
- Cost control + quality balance

**EXTRACT_MEMORIES** — background memory extraction
- 백그라운드 메모리 추출
- 중요 정보 자동 저장
- Long-term memory 형성

**→ 이게 Self-Healing Memory!** (Claude Code Leak 분석에서 나온 개념)

**_y Application:**
- REACTIVE_COMPACT → Daily memory cleanup cron
- CONTEXT_COLLAPSE → Importance-based archival
- HISTORY_SNIP → Summarize old directives
- CACHED_MICROCOMPACT → Cache summaries in DB
- TOKEN_BUDGET → Per-agent token tracking
- EXTRACT_MEMORIES → Auto-update MEMORY.md

**Priority:** P0 (필수) — Context entropy = _y의 생존 문제

---

### 3. Planning & Workflow (3개)

**ULTRAPLAN** — 30-minute planning
- 30분 단위 계획 수립
- 긴 task를 단계별 분해
- Multi-step task orchestration

**WORKFLOW_SCRIPTS** — workflow automation
- 반복 작업 스크립트화
- Template 기반 실행
- Reusable workflow definitions

**TEMPLATES** — job templates
- 작업 템플릿 시스템
- 자주 쓰는 패턴 재사용
- Parameterized task templates

**_y Application:**
- ULTRAPLAN → Counsely strategic planning
- WORKFLOW_SCRIPTS → Playbook system
- TEMPLATES → Directive templates (e.g., "weekly report", "bug triage")

**Priority:** P1 (중요) — 계획 = agent 성능의 핵심

---

### 4. Tools & Integration (5개)

**VOICE_MODE** — voice interface
- 음성 입출력
- `/voice` 명령어
- Speech-to-text + text-to-speech

**CHICAGO_MCP** — computer use (Model Context Protocol)
- 컴퓨터 제어 프로토콜
- Max/Pro 유저에게 live
- MCP = 표준 tool protocol 부상

**TERMINAL_PANEL** — terminal capture
- 터미널 출력 캡처
- 실행 결과 자동 통합
- Shell command feedback loop

**WEB_BROWSER** — browser automation
- 웹 브라우저 자동화
- Playwright/Puppeteer 스타일
- Headless browser control

**MONITOR_TOOL** — monitoring
- 시스템 모니터링 도구
- Performance/health metrics
- Telemetry collection

**_y Application:**
- VOICE_MODE → TTS integration (ElevenLabs)
- CHICAGO_MCP → MCP tool protocol (future)
- TERMINAL_PANEL → Exec result capture
- WEB_BROWSER → Browser tool (already planned)
- MONITOR_TOOL → Agent performance dashboard

**Priority:** P2 (나중에) — 기본 기능 완성 후

---

### 5. Communication & IPC (2개)

**UDS_INBOX** — Unix Domain Socket IPC
- Unix socket 통신
- 로컬 프로세스 간 메시지
- Fast local IPC

**BRIDGE_MODE** — remote control
- 원격 제어 모드
- 다른 시스템과 연결
- Remote agent invocation

**_y Application:**
- UDS_INBOX → Local tool communication (optional)
- BRIDGE_MODE → External system integration (API endpoints)

**Priority:** P2 (나중에) — 고급 통합 기능

---

### 6. Infrastructure (4개)

**SELF_HOSTED** — self-hosted mode
- 자체 호스팅 지원
- 클라우드 독립
- On-premise deployment

**BYOC_RUNNER** — Bring Your Own Cloud
- 사용자 클라우드 연결
- AWS/GCP/Azure 통합
- Custom infrastructure

**CCR_AUTO** — automatic cloud
- 자동 클라우드 배포
- Managed infrastructure
- Zero-config cloud

**MEM_SHAPE_TEL** — memory analytics telemetry
- 메모리 사용 분석
- Context shape tracking
- Telemetry collection for optimization

**_y Application:**
- SELF_HOSTED → Already implemented (M4 Max local)
- BYOC_RUNNER → User's own Ollama/API keys
- CCR_AUTO → N/A (we're self-hosted first)
- MEM_SHAPE_TEL → Memory usage analytics (telemetry dashboard)

**Priority:** P1 (MEM_SHAPE_TEL), P3 (others)

---

### 7. Experimental (3개)

**BUDDY** — AI companion pet
- AI 펫 (감성적 동반자)
- 실용성보다 재미/유대감
- Emotional AI experiment

**TORCH** — ??? opaque
- 불명 (문서 없음)
- 내부 코드명?
- Possibly research project

**SKILL_SEARCH** — experimental skill search
- 스킬 검색 기능
- Skill registry exploration
- Experimental feature

**_y Application:**
- BUDDY → Not applicable (business focus)
- TORCH → Unknown
- SKILL_SEARCH → Agent skill registry search (maybe)

**Priority:** P3 (낮음) — 실험적 기능

---

### 8. Debug & Research (3개)

**DUMP_SYS_PROMPT** — print system prompt
- 시스템 프롬프트 출력
- 디버깅 도구
- Prompt inspection

**ABLATION_BASE** — research mode
- Ablation study 모드
- 기능 ON/OFF 실험
- Research experiments

**OVERFLOW_TEST** — overflow testing
- Context overflow 테스트
- 한계 시험
- Stress testing

**_y Application:**
- DUMP_SYS_PROMPT → Debug mode (show agent prompts)
- ABLATION_BASE → Feature flag system
- OVERFLOW_TEST → Context limit testing

**Priority:** P2 (개발 도구) — 디버깅/연구 시 유용

---

## Feature Category Summary

| Category | Features | _y Priority |
|----------|---------|-------------|
| **Agent System** | 6 | P0-P1 |
| **Context Management** | 6 | P0 |
| **Planning & Workflow** | 3 | P1 |
| **Tools & Integration** | 5 | P2 |
| **Communication & IPC** | 2 | P2 |
| **Infrastructure** | 4 | P1-P3 |
| **Experimental** | 3 | P3 |
| **Debug & Research** | 3 | P2 |

**Total:** 29 features

---

## _y Holdings Priority Matrix

### P0 (필수 구현 — 이번 주)

**Context Management (생존 필수):**
- [ ] REACTIVE_COMPACT — Daily cleanup cron
- [ ] CONTEXT_COLLAPSE — Importance-based archival
- [ ] TOKEN_BUDGET — Per-agent token tracking
- [ ] EXTRACT_MEMORIES — Auto-update MEMORY.md

**Agent Orchestration (핵심 기능):**
- [ ] COORDINATOR_MODE — DirectiveCoordinator implementation

**Rationale:**
- Context entropy = 30 agents × long sessions = 치명적
- Self-healing memory 없으면 품질 급락
- Token budget 없으면 비용 폭발

---

### P1 (중요 구현 — 다음 주)

**Agent System:**
- [ ] FORK_SUBAGENT — Dynamic agent spawning
- [ ] BG_SESSIONS — Background task processing
- [ ] PROACTIVE — Heartbeat + wake events (이미 부분 구현)
- [ ] DAEMON — Counsely as meta-agent

**Planning & Workflow:**
- [ ] ULTRAPLAN — 30-min strategic planning
- [ ] WORKFLOW_SCRIPTS — Playbook system
- [ ] TEMPLATES — Directive templates

**Infrastructure:**
- [ ] MEM_SHAPE_TEL — Memory analytics

**Rationale:**
- Agent 동적 생성 = 복잡한 task 처리
- Planning = agent 품질 향상
- Workflow = 반복 작업 자동화

---

### P2 (나중에 구현 — 다음 달)

**Tools:**
- [ ] VOICE_MODE — TTS integration
- [ ] CHICAGO_MCP — MCP protocol
- [ ] TERMINAL_PANEL — Exec capture (이미 부분 구현)
- [ ] WEB_BROWSER — Browser automation
- [ ] MONITOR_TOOL — Performance dashboard

**Communication:**
- [ ] UDS_INBOX — Local IPC
- [ ] BRIDGE_MODE — Remote control

**Debug:**
- [ ] DUMP_SYS_PROMPT — Debug mode
- [ ] ABLATION_BASE — Feature flags
- [ ] OVERFLOW_TEST — Stress testing

**Rationale:**
- 기본 기능 완성 후 고급 도구
- 디버깅 도구 = 개발 안정화 후

---

### P3 (보류/무시)

**Experimental:**
- [ ] BUDDY — AI companion (business focus 아님)
- [ ] TORCH — Unknown (문서 없음)
- [ ] SKILL_SEARCH — Maybe later

**Infrastructure (이미 구현/불필요):**
- [x] SELF_HOSTED — Already done (M4 Max)
- [ ] BYOC_RUNNER — User cloud (나중에)
- [ ] CCR_AUTO — N/A (self-hosted first)

---

## Key Insights

### 1. Multi-Agent = Standard, Not Experimental

**Claude Code has 6 agent features:**
- COORDINATOR_MODE
- FORK_SUBAGENT
- PROACTIVE
- DAEMON
- BG_SESSIONS
- KAIROS

**Implication:** Multi-agent orchestration is production-grade, not research

**_y Validation:** 30 agents = industry-validated direction

---

### 2. Context Management = Survival Issue

**6 features dedicated to context:**
- REACTIVE_COMPACT
- CONTEXT_COLLAPSE
- HISTORY_SNIP
- CACHED_MICROCOMPACT
- TOKEN_BUDGET
- EXTRACT_MEMORIES

**Implication:** Long sessions require active memory management

**_y Gap:** Currently manual (memory/YYYY-MM-DD.md) → must automate

**Risk:** Without self-healing, 30 agents × long sessions = context explosion

---

### 3. Planning = First-Class Feature

**ULTRAPLAN (30-minute planning) is a dedicated feature**

**Implication:** Planning ≠ nice-to-have, it's core functionality

**_y Application:**
- Counsely strategic planning
- Task decomposition
- Multi-step orchestration

---

### 4. Background Processing = Built-in

**BG_SESSIONS, PROACTIVE, EXTRACT_MEMORIES**

**Implication:** Async work is standard, not advanced

**_y Current:** Heartbeat (manual check) → should be background agents

---

### 5. Tool Ecosystem = MCP Protocol

**CHICAGO_MCP (Model Context Protocol)**

**Implication:** MCP is emerging standard for tool integration

**Industry Trend:**
- Anthropic pushing MCP
- OpenAI has similar (function calling)
- Standardization happening

**_y Strategy:** Adopt MCP early for ecosystem compatibility

---

## Competitive Analysis

### _y vs Claude Code Feature Parity

| Feature Category | Claude Code | _y Status | Gap |
|-----------------|-------------|-----------|-----|
| **Multi-agent** | ✅ 6 features | 🟡 설계 중 | Medium |
| **Context mgmt** | ✅ 6 features | ❌ 수동 | **High** |
| **Planning** | ✅ ULTRAPLAN | ❌ 없음 | Medium |
| **Workflow** | ✅ Scripts+Templates | 🟡 Playbook | Small |
| **Tools** | ✅ 5 features | 🟡 Basic | Medium |
| **Background** | ✅ BG_SESSIONS | 🟡 Heartbeat | Small |
| **Infrastructure** | ✅ 4 features | ✅ Self-hosted | **Equal** |

**Biggest Gap:** Context management (6 features vs 0)

**Biggest Strength:** Self-hosted (already done, Claude Code experimental)

**Strategic Priority:** Close context management gap ASAP

---

## Implementation Roadmap

### Week 1 (Apr 1-7): Context Management

**Goal:** Implement self-healing memory

**Tasks:**
1. REACTIVE_COMPACT
   - Daily cleanup cron (4 AM)
   - Summarize yesterday → archive
   - Delete redundant context

2. CONTEXT_COLLAPSE
   - Importance scoring (keyword-based)
   - Keep high-importance, summarize low
   - Store in memory/archive/

3. TOKEN_BUDGET
   - Track tokens per agent
   - Alert when approaching limit
   - Auto-compress if exceeded

4. EXTRACT_MEMORIES
   - Background extraction (nightly)
   - Parse memory/YYYY-MM-DD.md
   - Update MEMORY.md with key insights

**Deliverable:** Self-healing memory system operational

---

### Week 2 (Apr 8-14): Agent Orchestration

**Goal:** DirectiveCoordinator + dynamic agents

**Tasks:**
1. COORDINATOR_MODE
   - Parse directive intent
   - Select agents (hierarchy-based)
   - Distribute tasks
   - Aggregate results (Byzantine consensus)

2. FORK_SUBAGENT
   - Spawn agent dynamically
   - Task-specific agent creation
   - Auto-cleanup after completion

3. DAEMON
   - Counsely as meta-agent
   - Supervise other agents
   - Final review + approval

**Deliverable:** Directive → multi-agent → result pipeline

---

### Week 3 (Apr 15-21): Planning & Workflow

**Goal:** Strategic planning + automation

**Tasks:**
1. ULTRAPLAN
   - 30-min planning phase
   - Task decomposition
   - Step-by-step execution plan

2. WORKFLOW_SCRIPTS
   - Playbook execution engine
   - Parameterized workflows
   - Reusable patterns

3. TEMPLATES
   - Directive templates
   - Common task patterns
   - User-customizable

**Deliverable:** Planning-first execution system

---

### Week 4 (Apr 22-28): Background Processing

**Goal:** Async work + proactive agents

**Tasks:**
1. BG_SESSIONS
   - Long-running analysis tasks
   - Separated from main session
   - Progress notifications

2. PROACTIVE
   - Background sleeping agents
   - Auto-wake on triggers
   - Heartbeat evolution

3. MEM_SHAPE_TEL
   - Memory usage analytics
   - Token distribution per agent
   - Context shape tracking

**Deliverable:** Background processing infrastructure

---

## Success Metrics

### Technical Metrics

**Context Management:**
- Average session length before quality degradation: 100+ messages (vs current ~30)
- Memory extraction accuracy: 95%+ key insights captured
- Token budget compliance: 100% (never exceed)

**Agent Orchestration:**
- Directive success rate: 90%+
- Average task completion time: <5 minutes
- Byzantine consensus agreement rate: 80%+

**Background Processing:**
- Background task completion rate: 95%+
- Proactive agent wake accuracy: 90%+
- Memory analytics coverage: 100% of sessions

---

### Business Metrics

**Cost:**
- Token usage per directive: 50% reduction (via context compression)
- Average cost per agent: <$5/month (Tier 2 agents on Ollama)
- Total infrastructure cost: <$100/month (10 Tier 1 agents)

**Quality:**
- User satisfaction: 9/10+ (survey)
- Task success rate: 90%+
- Error rate: <5%

**Performance:**
- Response time: <30 seconds (first response)
- Task completion time: <5 minutes (average)
- Uptime: 99%+ (self-hosted)

---

## Risks & Mitigations

### Risk 1: Context Compression Quality

**Risk:** Aggressive compression loses important context

**Mitigation:**
- Importance scoring (keyword + recency)
- User feedback loop (mark important messages)
- Gradual compression (don't drop immediately)
- Retrieval system (search old context)

---

### Risk 2: Agent Coordination Overhead

**Risk:** 30 agents × coordination = slow/expensive

**Mitigation:**
- Hierarchical execution (bottom-up)
- Parallel execution where possible
- Lazy agent activation (don't wake all)
- Caching (reuse previous results)

---

### Risk 3: Background Task Failures

**Risk:** Background sessions fail silently

**Mitigation:**
- Retry logic (3 attempts)
- Error notifications (Discord alerts)
- Graceful degradation (fallback to sync)
- Health checks (periodic validation)

---

### Risk 4: Token Budget Conflicts

**Risk:** Budget limits hurt quality

**Mitigation:**
- Dynamic budgets (adjust based on task)
- Priority system (critical tasks get more)
- User override (manual budget increase)
- Cost transparency (show budget usage)

---

## Related

- [[Claude Code Leak Analysis]] — Self-healing memory concept origin
- [[Claw Code Harness Analysis]] — Orchestration patterns
- [[Claw Dev Analysis]] — Multi-provider proxy
- [[_y Holdings Operating System]] — Agent architecture
- [[Google Agentic AI Paper]] — Social intelligence theory

---

## Meta: Why This Matters

**For _y Holdings:**
- Feature flag list = production roadmap validation
- Context management = survival priority confirmed
- Multi-agent = industry standard, not experiment
- Planning = first-class feature, must implement

**For Andrew:**
- Context management gap = biggest risk
- Self-healing memory = P0 priority
- Claude Code architecture = proven patterns
- MCP protocol = future-proof strategy

**Best Practice:**
> "Ship context management first. Everything else depends on it."

**Validation:**
- 6/29 features (21%) = context management
- More than any other category
- Anthropic's #1 engineering priority

**Action:**
> Implement REACTIVE_COMPACT + CONTEXT_COLLAPSE + TOKEN_BUDGET + EXTRACT_MEMORIES this week. No excuses.

---

*Source: https://www.ccleaks.com/*
*Discovered: 2026-04-01*
*Purpose: Claude Code feature flags → _y Holdings roadmap validation*
*Impact: High — validates multi-agent, reveals context management gap*
