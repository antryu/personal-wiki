# PM-OS Starter — Analysis

**Date:** 2026-04-03
**Source:** https://github.com/aakashg/pm-claude-code-setup
**Author:** Aakash Gupta (Product Growth Newsletter)
**Tags:** #pm-os #claude-code #skills #context-engineering #product-management

---

## Overview

PM-OS Starter는 Claude Code 기반 Product Manager 운영체제. 60줄 CLAUDE.md + 6 skills (오픈소스) + templates로 구성. Full 버전은 41+ skills (유료).

**핵심 철학:**
- Modularity: CLAUDE.md (범용 행동) + Skills (도메인 지식) 분리
- Evidence-based: Never fabricate → `[NEED: data from X]` placeholder
- Clarify → Draft → Review 순서 강제
- Self-improving: AI가 correction을 rule로 축적

**비교:**
- PM-OS: 개인 생산성 (PM 1명)
- _y Holdings: 조직 시뮬레이션 (30 agents)

---

## File Structure

```
pm-claude-code-setup/
├── CLAUDE.md                          # 마스터 설정 (60줄 제한)
├── README.md
├── QUICKSTART.md
├── templates/
│   ├── prd-template.md
│   ├── launch-plan.md
│   ├── okr-template.md
│   └── sprint-review.md
└── .claude/
    └── skills/
        ├── prd-writer/                # PRD 작성
        │   ├── SKILL.md
        │   └── examples/sample-prd.md
        ├── competitive-analysis/      # 경쟁사 분석
        ├── launch-checklist/          # 론치 체크리스트
        ├── metrics-definer/           # 메트릭 정의
        ├── sprint-planner/
        └── user-research/
```

---

## 5 Key Discoveries

### 1. CLAUDE.md = 60줄 제한 (Intentional Design)

**Why 60 lines?**
- Claude ignores instructions beyond ~150 lines
- Short + specific = higher accuracy

**Structure:**
```markdown
# PM Context (9줄)
  Role, Company, Product, Metrics, OKRs, Terminology

## Writing Rules (6줄)
  Direct, concise, active voice
  Banned words: delve, landscape, synergy, leverage...
  Never fabricate → [NEED: data from X]

## Sub-Agent Roles (7줄 table)
  Engineer, Designer, Executive, Skeptic, Customer, Data Analyst

## Verification Sequence (4 steps)
  Clarify → Draft → Self-review → Flag gaps

## Self-Improvement Protocol (3줄)
  Propose rules when corrected
  Modular rules → .claude/rules/
  Every rule must earn its place

## Context Management (5줄)
  /clear between tasks
  HANDOFF.md after 40 exchanges
  @ references (not paste)
  Plan Mode (Shift+Tab)

## Memory Architecture (file hierarchy)
  ~/.claude/CLAUDE.md        # Personal defaults
  ./CLAUDE.md                # Project-level
  .claude/rules/*.md         # Scoped rules
  .claude/skills/*/SKILL.md  # Task workflows

## MCP Connections
  Notion, Jira, Slack
```

**Key Principle:**
- Domain knowledge → Skills (separate)
- Universal behavior → CLAUDE.md (only)
- Rule inflation prevention (self-improvement protocol)

---

### 2. SKILL.md Pattern (Standardized Structure)

**Every skill follows this:**
```markdown
# [Skill Name]

## Trigger
"write a PRD", "analyze competitor", "launch checklist"

## Context (optional)
Philosophy, background, core principles

## Behavior

### Step 1: Get Context (Ask first!)
- Which feature?
- Launch date?
- Risk level?

### Step 2: Generate
- Specific output structure
- Section explanations

### Step 3: Review (optional)
- Checklist
- Validation steps

## Examples

### Good vs Bad (Contrast)
- Bad: vague, no evidence
- Good: specific, actionable

## Anti-Patterns

## Rules
- Specific directives
- Measurable criteria
```

**Discoveries:**
- prd-writer: Analyzed 500+ PRDs
- competitive-analysis: SMART/WEAK/IMPLICATIONS framework
- metrics-definer: Anti-metrics mandatory (prevent perverse incentives)

---

### 3. Clarify → Draft → Review (Mandatory Flow)

**All skills enforce this:**

```
Step 1: Clarify (3-5 questions)
  PRD: Who has the problem? Data? Scope? Tech constraints? Timeline?
  Competitive: Which competitor? Which feature? Our product?
  Launch: What? Date? Users affected? Risk?

Step 2: Draft
  Start short (2 pages max)
  Ask before writing long

Step 3: Review
  "Review as engineer/designer/skeptic?"
  Multi-perspective validation
```

**Anti-patterns:**
- ❌ "Never generate blind" (no questions → straight to output)
- ❌ "Never assume" (ask, don't guess)

---

### 4. Good vs Bad Examples (In Every Skill)

#### PRD Hypothesis

**Bad (vague, untestable):**
```
We believe improving the onboarding experience 
will lead to better user engagement.
```
→ No action, no user, no metric, no number

**Good (specific, testable):**
```
We believe replacing the 7-step wizard with a 
single-screen setup for mid-market teams (50-200)
will increase 7-day activation from 23% to 35%, 
because 67% of users abandon at step 4 (June cohort).
```
→ Action, user segment, baseline, target, evidence

---

#### Competitive Analysis

**Bad:**
```
What's Smart:
- Good product
- Nice onboarding
- Growing fast

What's Weak:
- Some features missing
- Could be cheaper
```
→ Adjectives, no specifics, no data

**Good:**
```
What's Smart:
1. Freemium trigger at week 3 (when switching cost highest)
   → 8% conversion (industry avg: 3-5%)
2. API-first: 400+ integrations = lock-in beyond UX
3. AI in daily workflow (auto-summary after meetings)
   vs. standalone feature

What's Weak:
1. Opaque pricing >50 seats → mid-market buyers hate this
   Opportunity: transparent pricing up to 200 seats
2. Read-only mobile → MAU/DAU 0.3 (desktop: 0.6)
   34% App Store reviews mention this
3. No audit trail → loses fintech/healthcare entirely
```
→ Numbers, context, opportunities

---

#### Metrics

**Bad:**
```
Success Metrics:
- Engagement: improve
- User satisfaction: increase
- Performance: maintain
```
→ Vague, unmeasurable

**Good:**
```
Primary Metric:
- Name: 7-day feature activation rate
- Definition: % of users who complete ≥1 [action] 
  within 7 days of first exposure
- Measurement: Mixpanel event "feature_action_completed"
- Baseline: N/A (new feature)
- Target: 30% within 90 days
- Timeframe: Weekly measurement, 90-day evaluation

Guardrail Metrics:
- Page load time <2s (p95). Current: 1.4s. Max: 2.0s.
  Beyond 2.0s = pause rollout
- Support tickets <50/week for this feature

Anti-Metric:
- DAU going UP could be bad if users retry failed actions
  Cross-reference: high DAU + low completion = friction
```
→ Precise definitions, baselines, thresholds, instrumentation

---

**Pattern:**
- Bad = Adjectives (good, nice, better)
- Good = Numbers + Context (67% abandon, 8% conversion, 400+ integrations)

---

### 5. Context Management (Productivity Core)

#### @ References (Not Paste)
```bash
Read @templates/prd-template.md
Summarize @meeting-notes/standup-03-04.md
Compare @competitor-notes/notion.md against @monday.md
```
→ Keeps context window lean

#### HANDOFF.md (After 40 Exchanges)
```markdown
# Handoff — 2026-04-03

## State
- Working on: Feature X PRD
- Stage: Solution Review (Stage 4)

## Decisions
1. Single-screen setup over wizard
2. Mid-market focus (50-200 teams)
3. MVP excludes Outlook sync

## Open Questions
- [NEED: activation baseline from analytics]
- [NEED: designer review on mobile flow]

## Next Steps
1. Get activation data → update metrics
2. Review as engineer → fix edge cases
3. Share with VP for prioritization
```

**Rules:**
- `/clear` between unrelated tasks
- Max ~50 exchanges (quality degrades)
- Plan Mode (Shift+Tab) for multi-step tasks
- Parallelize with subagents when possible

---

## Core Insights

### 1. Modularity Maximization
- **CLAUDE.md:** Universal behavior (60-line limit)
- **Skills:** Domain knowledge (individual SKILL.md)
- **Rules:** Scoped rules (glob patterns)

### 2. Self-Improving Mechanism
```
Correction → Propose rule → Approve → Edit CLAUDE.md
```
- AI accumulates mistakes as rules
- 100+ iterations validated

### 3. Evidence-Based Enforcement
- "Never fabricate data" (core principle)
- `[NEED: data from X]` placeholder mandatory
- Customer quotes, support tickets, numbers required

### 4. Multi-Perspective Review
- 7 sub-agents (Engineer, Designer, Executive, Skeptic, Customer, Data Analyst, Legal)
- Each has unique lens + key questions
- "Review as [role]" → instant perspective shift

### 5. Stage-Appropriate Output
- **PRD:** 6 stages (Team Kickoff → Impact Review)
- **Launch Checklist:** Risk-scaled (Low/Medium/High)
- **Metrics:** Anti-metrics mandatory

---

## PRD Stage Evolution

| Stage | When | What the PRD Looks Like |
|-------|------|------------------------|
| **1. Team Kickoff** | Exploring with design + eng | Speclet: title, problem hypothesis, 2-3 questions |
| **2. Planning Review** | Presenting to leadership | 1-pager: problem, strategic fit, data, approach |
| **3. XFN Kickoff** | Sales, support, marketing, legal | Expanded doc with cross-functional input |
| **4. Solution Review** | Staking position on solution | Full PRD: solution details, flows, edge cases |
| **5. Launch Readiness** | Engineering handoff | Concrete specs, edge cases, metrics, user flows |
| **6. Impact Review** | Post-launch | Results link, what worked, what didn't, rollback notes |

**Default:** Stage 4 (most common)

---

## Anti-Patterns (From 500+ PRDs)

1. **Fancy structure, empty content**
   - Every section filled, nothing said
   - "Ensuring alignment with legal standards" instead of naming the risk

2. **Delegating your thinking**
   - "Design will explore the optimal layout" instead of describing user flow
   - Designer should challenge, not receive blank canvas

3. **No customer evidence** (biggest red flag)
   - Zero user quotes, zero support tickets, zero data = vibes
   - 3 customer quotes transform spec from opinion to evidence

4. **Hiding controversial decisions**
   - Close call between A and B? Say so. Explain why.
   - Burying controversy guarantees it resurfaces as blocker

5. **Metrics without baselines**
   - "Increase conversion" meaningless without current rate, target, deadline
   - Metric without baseline = wish, not measurement

6. **Ending at launch**
   - Add Stage 6 results link after launch
   - 50-92% of features miss expectations — learning > spec

7. **Over-specifying the "how"**
   - Obsess over "why" and "what," not pixel-level details
   - Specify user outcome, not implementation

8. **Writing for every audience**
   - Founders find PRDs overwrought, designers find them prescriptive, engineers want detail
   - Fix: stage-appropriate. Bare-bones early, detailed later, always decision-focused

---

## Launch Checklist Risk Scaling

| Risk Level | When | Checklist |
|-----------|------|-----------|
| **Low** | Config change, copy update, small UI tweak | Deploy → monitor 30 min → done |
| **Medium** | New feature behind flag, migration with rollback | Full checklist, 2-hour monitoring |
| **High** | Pricing change, auth flow, data migration, public API | Staged rollout (1% → 10% → 50% → 100%), war room, exec notification, 24h monitoring |

**Example — Good Checklist Item:**
```
Verify signup flow in staging: email → verification → dashboard load
Test: Gmail, Outlook, corporate SSO
```

**Bad:**
```
Make sure everything works
```

---

## Competitive Analysis Framework

**Structure:**
1. **What They Built** — Core functionality, target user, differentiator
2. **What's Smart** — 3 decisions they nailed and why
3. **What's Weak** — 3 gaps or missed opportunities
4. **Implications for Us** — Copy, avoid, differentiate

**Rules:**
- Be specific. "Great UX" is useless. Name the interaction that works.
- Flag unknowns: `[NEED: more info on X]`
- Analyze product decisions, not visual design
- Include numbers: pricing, conversion, market share, review counts

---

## Metrics Definer Framework

**Components:**
1. **Primary Metric** — Name, definition, measurement, target, timeframe
2. **Secondary Metrics (2-3)** — Supporting indicators
3. **Guardrail Metrics (2-3)** — What should NOT get worse (baseline + range)
4. **Leading Indicators** — Week 1 metrics that predict long-term success
5. **Anti-Metrics** — Metric going UP that's actually bad

**Anti-Metrics Example:**
```
DAU going UP could be bad if users retry failed actions.
Cross-reference: high DAU + low completion = friction.
```
→ Prevents perverse incentives

---

## Sub-Agent Roles (7 Perspectives)

| Role | Lens | Key Questions |
|------|------|---------------|
| **Engineer** | Feasibility | Missing from spec? Edge cases? Technical risks? |
| **Designer** | Usability | Flow clear? Where do users drop off? |
| **Executive** | Strategy | Aligned with OKRs? ROI case? |
| **Skeptic** | Risk | What could go wrong? Untested assumptions? |
| **Customer** | Value | Would I use this? Would I pay? |
| **Data Analyst** | Measurement | Metrics precise? Baselines? Instrumentation? |

**Usage:**
```
"Review this PRD as an engineer"
→ Claude fully adopts engineer perspective + key questions
```

---

## Writing Rules (Enforced)

1. **Direct, concise, active voice. No filler.**
2. **Lead with recommendation, then context.**
3. **Audience-match:** Casual for Slack, structured for docs, precise for specs
4. **Banned words:** delve, landscape, synergy, leverage, robust, streamline, cutting-edge
5. **Never fabricate data, quotes, or metrics.** Use `[NEED: data from X]` for gaps.

---

## Self-Improvement Protocol

**When corrected:**
1. Immediately propose a rule for CLAUDE.md
2. Wait for approval before editing
3. If rule causes recurring issues, propose `.claude/rules/` file instead (avoid bloat)

**Rule retention criteria:**
- Every rule must earn its place
- If removing it wouldn't cause mistakes, it doesn't belong

**Result:** 100+ iterations refined (validated through real use)

---

## Memory Architecture (File Hierarchy)

```
~/.claude/CLAUDE.md          # Personal defaults (all projects)
./CLAUDE.md                  # Project-level (shared via git)
.claude/rules/*.md           # Scoped rules (glob patterns)
.claude/skills/*/SKILL.md    # Task workflows (on-demand)
```

**Principle:**
- Domain knowledge → skills
- Scoped rules → `.claude/rules/`
- Universal behavior → CLAUDE.md

---

## Comparison: PM-OS vs _y Holdings

| Aspect | PM-OS Starter | _y Holdings |
|--------|---------------|-------------|
| **Concept** | PM operating system | AI company simulator |
| **Target** | Individual PM | Organization (30 agents) |
| **Foundation** | Claude Code | Ollama + Claude |
| **Skills** | 6 (open) / 41+ (full) | 100 harnesses |
| **Agents** | 1 (user) + 7 sub-agents | 30 permanent agents |
| **Execution** | CLI (`/command`) | Web UI + Directive |
| **Context** | @ references | agent_memory DB |
| **Memory** | CLAUDE.md + HANDOFF.md | PostgreSQL + pgvector |
| **Integration** | MCP (Slack/Jira) | Discord/Telegram |
| **Deployment** | Railway | Vercel + M4 |
| **License** | Starter (OSS) + Full (paid) | Private |

---

## Potential _y Applications (Future Consideration)

**Ideas (not implemented yet):**

1. **COUNSELY.md** (Counsely용 마스터 설정)
   - PM-OS의 CLAUDE.md 패턴
   - 60줄 제한 적용
   - Sub-agents → 30 agents

2. **7 Perspectives → 30 Agents**
   - Engineer → Techy, Devy
   - Designer → Uxy
   - Executive → Counsely (already exists)
   - Skeptic → Risky
   - Customer → Marchy (market research)
   - Data Analyst → Quanty

3. **@ References → agent_memory Queries**
   - `Read @briefings/2026-04-03.md` → DB query
   - Retrieval formula (recency × importance × relevance)

4. **Harness = Skill Pattern**
   - 100 harnesses → SKILL.md 구조
   - Trigger, Behavior, Examples, Anti-Patterns, Rules

5. **Self-Improvement**
   - Agent corrections → MEMORY.md rule proposals
   - Daily reflection (23:00 KST) → rule refinement

**Note:** Andrew said "좀더 생각하고" — hold off on implementation.

---

## Key Takeaways

1. **60-line limit = strategic constraint**
   - Forces modularity
   - Prevents instruction bloat
   - Improves accuracy

2. **Clarify → Draft → Review = mandatory flow**
   - Never generate blind
   - Multi-perspective validation
   - Evidence-based outputs

3. **Good vs Bad examples = teaching mechanism**
   - Every skill includes contrasts
   - Specific > vague
   - Numbers > adjectives

4. **Self-improvement = evolution mechanism**
   - AI proposes rules from corrections
   - 100+ iterations validated
   - Every rule must earn its place

5. **Stage-appropriate = context-aware**
   - PRD evolves through 6 stages
   - Launch checklist scales to risk
   - Metrics include anti-metrics

---

## References

**GitHub:** https://github.com/aakashg/pm-claude-code-setup
**Author:** Aakash Gupta
**Newsletter:** https://www.news.aakashg.com/p/pm-os
**Clone Location:** `/tmp/pm-claude-code-setup`
**Analysis Date:** 2026-04-03

**Related:**
- PM-OS Landing Page: https://pm-os-starter-production.up.railway.app
- Opensurvey: Korean research platform (Seoul, founded 2011)
- _y Holdings: AI company simulator (30 agents, 100 harnesses)

**Files Analyzed:**
- CLAUDE.md (60 lines)
- .claude/skills/prd-writer/SKILL.md
- .claude/skills/competitive-analysis/SKILL.md
- .claude/skills/launch-checklist/SKILL.md
- .claude/skills/metrics-definer/SKILL.md
- templates/prd-template.md

---

**Status:** Analysis complete, implementation on hold per Andrew's request.
