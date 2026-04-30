# pm-skills → _y Integration

**Date:** 2026-04-03
**Source:** https://github.com/phuryn/pm-skills (9k ⭐, MIT)
**Integration:** 3-Tier Skill Layer Architecture

---

## Overview

pm-skills = 65 PM skills + 36 chained workflows across 8 plugins
- Based on Teresa Torres, Marty Cagan, Alberto Savoia frameworks
- Claude Code + Cowork native
- Open-source (MIT License)

**vs PM-OS (aakashg):**
- PM-OS: 41+ skills (유료), 100 stars
- pm-skills: 65 skills (무료), **9,000 stars**

---

## Integration Complete (2026-04-03 18:55)

### Files Copied
```bash
# M4
/tmp/pm-skills → ~/y-company-oss/.claude/skills/
Total: 65 skills
```

### Structure
```
~/y-company-oss/.claude/skills/
├── README.md               # Overview + 3-tier architecture
├── AGENT_MAPPING.md        # Agent-to-skill recommendations
├── opportunity-solution-tree/
│   └── SKILL.md
├── create-prd/
│   └── SKILL.md
├── ab-test-analysis/
│   └── SKILL.md
└── ... (65 total)
```

---

## 3-Tier Architecture

```
Tools (functions)      → agent-tools.ts (15개)
  ↓
Skills (knowledge)     → .claude/skills/ (65개)  ← pm-skills
  ↓
Harnesses (workflows)  → .claude-legal/ etc. (15개 + 100개)
```

**Agent Usage Priority:**
1. **Tool first** — If function exists (law_search, backtest)
2. **Skill second** — If knowledge module exists (PRD, OST)
3. **Harness third** — If multi-agent workflow needed (Contract Analyzer)

---

## 8 Domains (65 Skills)

### 1. Product Discovery (13 skills)
- `opportunity-solution-tree` — Teresa Torres OST (4 levels)
- `brainstorm-ideas-existing/new` — Multi-perspective ideation
- `identify-assumptions-existing/new` — Assumption mapping
- `prioritize-assumptions` — Impact × Risk matrix
- `brainstorm-experiments-existing/new` — Experiment design
- `analyze-feature-requests` — Feature request analysis
- `prioritize-features` — Backlog prioritization
- `interview-script` — Customer interview script
- `summarize-interview` — Interview transcript → insights
- `metrics-dashboard` — Product metrics dashboard

### 2. Product Strategy (12 skills)
- `product-strategy` — 9-section Product Strategy Canvas
- `product-vision` — Inspiring product vision
- `value-proposition` — 6-part JTBD value prop
- `business-model` — Business Model Canvas
- `lean-canvas` — Lean Canvas (startups)
- `startup-canvas` — Product Strategy + Business Model
- `monetization-strategy` — Monetization brainstorming
- `pricing-strategy` — Pricing models + competitive analysis
- `swot-analysis` — SWOT with actionable recommendations
- `pestle-analysis` — Macro environment (Political, Economic...)
- `porters-five-forces` — Competitive forces
- `ansoff-matrix` — Growth strategy mapping

### 3. Execution (15 skills)
- `create-prd` — 8-section PRD template
- `brainstorm-okrs` — Team-level OKRs
- `outcome-roadmap` — Feature → outcome roadmap
- `sprint-plan` — Sprint planning + capacity
- `retro` — Sprint retrospective
- `release-notes` — User-facing release notes
- `pre-mortem` — Risk analysis (Tigers/Paper Tigers/Elephants)
- `stakeholder-map` — Power × Interest grid
- `summarize-meeting` — Meeting transcript → structured notes
- `user-stories` — User stories (3 C's + INVEST)
- `job-stories` — Job stories format
- `wwas` — Why-What-Acceptance format
- `test-scenarios` — Test scenario generation
- `dummy-dataset` — Realistic dummy data
- `prioritization-frameworks` — Reference to 9 frameworks

### 4. Market Research (7 skills)
- `user-personas` — Refined user personas
- `market-segments` — 3-5 customer segments
- `user-segmentation` — Segment users by behavior/JTBD
- `customer-journey-map` — End-to-end journey map
- `market-sizing` — TAM/SAM/SOM estimation
- `competitor-analysis` — Competitor strengths/weaknesses
- `sentiment-analysis` — Sentiment + theme extraction

### 5. Data Analytics (3 skills)
- `sql-queries` — SQL generation (BigQuery/PostgreSQL/MySQL)
- `cohort-analysis` — Retention curves + engagement trends
- `ab-test-analysis` — Statistical significance + sample size

### 6. Go-to-Market (6 skills)
- `gtm-strategy` — Full GTM strategy
- `beachhead-segment` — First beachhead market
- `ideal-customer-profile` — ICP with JTBD
- `growth-loops` — Sustainable growth loops
- `gtm-motions` — Evaluate GTM motions
- `competitive-battlecard` — Sales-ready battlecard

### 7. Marketing & Growth (5 skills)
- `marketing-ideas` — Marketing ideas + channels
- `positioning-ideas` — Product positioning
- `value-prop-statements` — Value prop for sales/marketing
- `product-name` — Product naming brainstorming
- `north-star-metric` — NSM + input metrics

### 8. Toolkit (4 skills)
- `review-resume` — PM resume review
- `draft-nda` — NDA drafting
- `privacy-policy` — GDPR/CCPA compliance
- `grammar-check` — Grammar/logic/flow checking

---

## Agent Mapping (Top 5)

### Searchy (05) — Market Research (14 skills) ⭐
- `opportunity-solution-tree` — Teresa Torres OST
- `brainstorm-ideas-existing/new`
- `identify-assumptions-existing/new`
- `prioritize-assumptions`
- `brainstorm-experiments-existing/new`
- `user-personas`, `competitor-analysis`, `market-sizing`
- `customer-journey-map`, `user-segmentation`, `sentiment-analysis`

### Tasky (01) — Task Management (7 skills)
- `create-prd`, `sprint-plan`, `retro`, `release-notes`
- `outcome-roadmap`, `user-stories`, `job-stories`

### Quanty (17) — Data Analysis (5 skills) ⭐
- `sql-queries`, `cohort-analysis`, `ab-test-analysis`
- `metrics-dashboard`, `north-star-metric`

### Marchy (22) — Marketing (11 skills) ⭐
- `gtm-strategy`, `beachhead-segment`, `ideal-customer-profile`
- `growth-loops`, `gtm-motions`, `competitive-battlecard`
- `marketing-ideas`, `positioning-ideas`, `value-prop-statements`
- `product-name`, `north-star-metric`

### Counsely (30) — Chief of Staff (5 skills)
- `product-strategy`, `brainstorm-okrs`, `pre-mortem`
- `stakeholder-map`, `summarize-meeting`

---

## Key Skills (Top 10)

### 1. Opportunity Solution Tree (Teresa Torres)
**4 Levels:**
1. Desired Outcome (1개) — Measurable metric
2. Opportunities (3-7개) — Customer needs/pains
3. Solutions (3+개 per opportunity) — Product Trio ideation
4. Experiments (가설 검증) — Fast, cheap, skin-in-the-game

**Opportunity Score:**
```
Score = Importance × (1 − Satisfaction)
```

**Principles:**
- One outcome at a time
- Opportunities, not features
- Compare 3+ solutions before choosing
- Discovery is continuous

---

### 2. Create PRD (8-Section Template)
**Sections:**
1. Summary (2-3 sentences)
2. Contacts
3. Background (context, why now)
4. Objective (SMART OKR)
5. Market Segment(s) (JTBD, not demographics)
6. Value Proposition(s) (jobs, gains, pains)
7. Solution (UX, Features, Tech, Assumptions)
8. Release (timeframes, versions)

**vs PM-OS PRD:**
- PM-OS: 6 stages, 2-3 pages, anti-patterns focus
- pm-skills: 8 sections, JTBD + Value Curve, framework focus

---

### 3. Product Strategy (9-Section Canvas)
Comprehensive strategic framework covering:
- Vision, Mission, Values
- Market, Customers, Value Proposition
- Differentiation, Defensibility, Metrics

---

### 4. A/B Test Analysis
- Statistical significance calculation
- Sample size validation
- Ship/extend/stop recommendations
- Guardrail metrics check

---

### 5. GTM Strategy
Full go-to-market plan:
- Beachhead segment
- Channels + messaging
- Success metrics
- Launch plan

---

### 6. Growth Loops
Design sustainable flywheels:
- Loop identification
- Input → Output mapping
- Activation points

---

### 7. SQL Queries (Natural Language → SQL)
Generate SQL from natural language:
- BigQuery, PostgreSQL, MySQL support
- Query validation
- Performance hints

---

### 8. User Personas
Refined personas from research:
- Demographics, JTBD, behaviors
- Pain points, motivations
- Product fit assessment

---

### 9. Sprint Plan
Sprint planning with:
- Capacity estimation
- Story selection
- Risk identification
- Success criteria

---

### 10. Pre-Mortem
Risk analysis framework:
- Tigers (real risks)
- Paper Tigers (false alarms)
- Elephants (avoided topics)

---

## Commands (36 Chained Workflows)

**Note:** Commands (`/slash`) are Claude Code-specific. _y uses Directive system instead.

**Example: `/discover` command (5-step workflow)**
```
Step 1: Understand context (existing vs new)
   ↓
Step 2: Brainstorm ideas (brainstorm-ideas-existing/new)
   ↓
Step 3: Identify assumptions (identify-assumptions-existing/new)
   ↓
Step 4: Prioritize assumptions (prioritize-assumptions)
   ↓
Step 5: Design experiments (brainstorm-experiments-existing/new)
   ↓
Output: Discovery plan markdown
```

**_y Equivalent:**
```
Counsely directive: "Searchy에게 discovery 지시 - 새 AI 제품 아이디어"
   ↓
Searchy executes 5 skills sequentially
   ↓
Output: Discovery plan in chat
```

---

## Comparison: _y Harness vs pm-skills

| Aspect | _y Harness | pm-skills |
|--------|-----------|-----------|
| **Structure** | Multi-agent workflow | Single-file knowledge |
| **Agents** | 5 agents (orchestrator + 4) | 1 agent (user + Claude) |
| **Execution** | 5-step sequential | LLM reads SKILL.md on-demand |
| **Workflow** | Explicit (CLAUDE.md) | Implicit (commands chain skills) |
| **Complexity** | High (5 agents × 3 skills) | Low (1 SKILL.md) |
| **Use Case** | Complex multi-perspective | Single-domain knowledge |

**Example:**

**_y harness (Contract Analyzer):**
```
Step 1: clause-analyst → 조항 분석
Step 2: risk-assessor → 리스크 평가
Step 3: clause-drafter → 수정안 작성
Step 4: comparison-reviewer → 비교 검토
Step 5: contract-coordinator → 최종 통합
```

**pm-skills (OST):**
```
Single SKILL.md with instructions:
1. Define outcome
2. Map opportunities
3. Prioritize
4. Generate solutions
5. Design experiments
```

---

## Integration Strategy

### Why Option 2 (3-Tier Skill Layer)?

**Reasons:**
1. **pm-skills 그대로 활용** — 65개 변환 불필요
2. **_y harness와 충돌 없음** — 병행 가능
3. **확장성** — 미래 다른 skill 추가 쉬움
4. **자연스러운 계층** — Tools < Skills < Harnesses

**Agent Usage Flow:**
```
Directive received
   ↓
1. Check Tools (agent-tools.ts) → function exists? → execute
   ↓
2. Check Skills (.claude/skills/) → SKILL.md exists? → load & follow
   ↓
3. Check Harness (.claude-legal/ etc.) → workflow exists? → 5-step execution
```

---

## Usage Examples

### Example 1: Searchy + OST
```
Counsely directive: "Searchy에게 discovery 지시 - 새 AI 글쓰기 도구"

Searchy:
1. Loads .claude/skills/opportunity-solution-tree/SKILL.md
2. Follows 4-level OST structure:
   - Outcome: "7-day activation 40%"
   - Opportunities: "Non-native speakers struggle with grammar"
   - Solutions: "Real-time suggestions, voice mode, templates"
   - Experiments: "Landing page test, fake door test"
3. Outputs OST markdown
```

### Example 2: Tasky + PRD
```
Counsely directive: "Tasky에게 PRD 작성 지시 - 신규 feature X"

Tasky:
1. Loads .claude/skills/create-prd/SKILL.md
2. Generates 8-section PRD:
   - Summary, Contacts, Background, Objective
   - Market Segments, Value Propositions, Solution, Release
3. Saves as PRD-feature-x.md
```

### Example 3: Quanty + A/B Test
```
Counsely directive: "Quanty에게 A/B 테스트 분석 지시 [CSV 첨부]"

Quanty:
1. Loads .claude/skills/ab-test-analysis/SKILL.md
2. Analyzes:
   - Statistical significance (p-value)
   - Sample size validation
   - Guardrail metrics check
3. Recommendation: Ship / Extend / Stop
```

---

## Implementation Status

### Completed (2026-04-03)
- [x] pm-skills clone to M4 (/tmp/pm-skills)
- [x] 65 skills copied to ~/y-company-oss/.claude/skills/
- [x] README.md created (3-tier architecture)
- [x] AGENT_MAPPING.md created (agent-to-skill recommendations)

### Pending
- [ ] Agent system prompts update (reference skills)
- [ ] Chat worker skill loading mechanism
- [ ] OST skill test (Searchy)
- [ ] PRD skill test (Tasky)
- [ ] A/B test skill test (Quanty)
- [ ] Git commit + push to _y OSS repo

---

## Next Steps

### Option A: Test Single Skill (Quick)
1. Update Searchy system prompt to reference OST skill
2. Test directive: "OST 만들어줘 - 신규 제품"
3. Verify SKILL.md loading + output

### Option B: Implement Skill Loader (Proper)
1. Create `src/lib/skill-loader.ts`
2. Modify chat-worker to check .claude/skills/ before LLM call
3. Inject SKILL.md into system prompt when matched
4. Test with 3 skills (OST, PRD, A/B)

### Option C: Documentation Only (Safe)
1. Keep skills as reference documentation
2. Agents manually reference when needed
3. No code changes required

**Recommended:** Option B (Proper implementation)

---

## References

**GitHub:** https://github.com/phuryn/pm-skills (9k ⭐)
**Author:** Paweł Huryn (Product Compass Newsletter)
**License:** MIT
**Clone Location:** M4 `/tmp/pm-skills`
**Integration Date:** 2026-04-03
**_y Location:** M4 `~/y-company-oss/.claude/skills/` (65 skills)

**Related:**
- PM-OS (aakashg): 41+ skills, 100 stars
- pm-skills (phuryn): 65 skills, 9,000 stars (10x larger community)
- _y harness-100: 100 harnesses (complex workflows)

**Frameworks:**
- Teresa Torres — *Continuous Discovery Habits* (OST)
- Marty Cagan — *INSPIRED* (Product Strategy)
- Alberto Savoia — *The Right It* (Pretotyping)
- Dan Olsen — *Lean Product Playbook* (Opportunity Score)
- Ash Maurya — *Running Lean* (Lean Canvas)
- Strategyzer — *Business Model Generation*, *Value Proposition Design*

---

**Status:** Skills integrated, agent mapping documented, implementation pending.
