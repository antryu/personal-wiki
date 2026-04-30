# pm-skills Integration Master Plan
**Date:** 2026-04-03
**Status:** Complete (Phase 1)
**Goal:** _y Holdings에 pm-skills 65개 + commands 36개 통합

---

## Executive Summary

**결과:**
- ✅ **65 PM skills** (MIT 라이선스) → `~/y-company-oss/.claude/skills/`
- ✅ **36 chained workflows** → `~/y-company-oss/.claude/commands/`
- ✅ **3-tier architecture** 확정 (Tools → Skills → Harnesses)
- ✅ **Agent-skill 매핑** 완료 (30명 에이전트별 추천)
- ✅ **문서화** 완료 (README, AGENT_MAPPING, 옵시디언)

**임팩트:**
- _y Holdings가 PM 도메인 전문성 확보 (65개 검증된 프레임워크)
- 131개 재사용 가능 모듈 (15 tools + 65 skills + 36 commands + 15 harnesses)
- PM-OS (41 skills) 능가, pm-skills (9k ⭐) 흡수
- 완전 무료 오픈소스 (MIT) — 법적 문제 없음

---

## Background

### 발견 경로
1. **PM-OS Starter 발견** (10:34)
   - LinkedIn 링크 → Railway 배포 → GitHub
   - aakashg/pm-claude-code-setup (~100 ⭐)
   - 6개 OSS skills, 41+ 유료 skills
   - Opensurvey (한국 리서치 플랫폼) 사용 중

2. **pm-skills 발견** (15:46)
   - phuryn/pm-skills (**9,000 ⭐**, 880 forks)
   - PM-OS보다 10배 큰 커뮤니티
   - 완전 오픈소스 (MIT)
   - 65 skills + 36 commands

3. **통합 결정** (18:49)
   - Andrew: "이건 _y에 녹일필요가있을듯"
   - 3-tier architecture 설계
   - 즉시 통합 진행

---

## PM-OS vs pm-skills 비교

| Aspect | PM-OS (aakashg) | pm-skills (phuryn) | Winner |
|--------|-----------------|---------------------|--------|
| **Stars** | ~100 | **9,000** | pm-skills |
| **Forks** | ~20 | **880** | pm-skills |
| **Skills (OSS)** | 6 | **65** | pm-skills |
| **Skills (Total)** | 41+ (유료) | 65 (무료) | pm-skills |
| **Commands** | 없음 | **36** | pm-skills |
| **License** | 불명확 | **MIT** | pm-skills |
| **Frameworks** | PM 실무 | **Teresa Torres, Marty Cagan** | pm-skills |
| **교육적 깊이** | ⭐⭐⭐⭐⭐ (500+ PRD 분석) | ⭐⭐⭐⭐ (프레임워크 중심) | PM-OS |
| **CLAUDE.md 제약** | **60줄** (핵심 통찰!) | 없음 | PM-OS |
| **Anti-patterns** | ⭐⭐⭐⭐⭐ (구체적) | ⭐⭐⭐ (일반적) | PM-OS |

**결론:**
- **pm-skills 통합** (65 skills, 9k 커뮤니티, MIT)
- **PM-OS 패턴 학습** (60줄 제약, anti-patterns, Good vs Bad examples)

---

## 통합 아키텍처 (3-Tier)

### Before (2-Tier)
```
Tools (functions)      → agent-tools.ts (15개)
  ↓
Harnesses (workflows)  → .claude-legal/ etc. (15개)
```

### After (3-Tier) ⭐
```
Tools (functions)      → agent-tools.ts (15개)
  ↓ 우선순위 1: 함수 실행
Skills (knowledge)     → .claude/skills/ (65개)
  ↓ 우선순위 2: 도메인 지식 참조
Harnesses (workflows)  → .claude-legal/ etc. (15개 + 100개)
  ↓ 우선순위 3: Multi-agent workflow
```

### Agent 사용 플로우
```
Directive 수신
   ↓
1. Tools 체크 → 있으면 함수 실행 (law_search, backtest)
   ↓
2. Skills 체크 → 있으면 SKILL.md 로드 (OST, PRD template)
   ↓
3. Harness 체크 → 있으면 5-agent workflow 실행
```

**장점:**
- Skills = 단순 도메인 지식 (1 SKILL.md)
- Harnesses = 복잡 multi-agent workflow (5 agents × 3 skills)
- 충돌 없음, 병행 가능
- 확장성 (미래 legal-skills, finance-skills 추가 가능)

---

## 65 Skills 분류 (8 Domains)

### 1. Product Discovery (13 skills)
**핵심:** Teresa Torres Continuous Discovery Habits
- `opportunity-solution-tree` ⭐ — OST 4-level (Outcome → Opportunities → Solutions → Experiments)
- `brainstorm-ideas-existing/new` — Multi-perspective ideation
- `identify-assumptions-existing/new` — Assumption mapping (Value, Usability, Feasibility, Viability)
- `prioritize-assumptions` — Impact × Risk matrix
- `brainstorm-experiments-existing/new` — A/B tests, prototypes, user tests, XYZ hypotheses
- `analyze-feature-requests` — Feature request triage
- `prioritize-features` — Backlog prioritization (9 frameworks)
- `interview-script` — Customer interview script
- `summarize-interview` — Transcript → insights
- `metrics-dashboard` — Product metrics dashboard

**_y Mapping:** Searchy (05) — 시장조사 본부장

---

### 2. Product Strategy (12 skills)
**핵심:** Marty Cagan INSPIRED
- `product-strategy` ⭐ — 9-section Product Strategy Canvas
- `product-vision` — Inspiring vision statement
- `value-proposition` — JTBD 6-part value prop
- `business-model` — Business Model Canvas
- `lean-canvas` — Lean Canvas (startups)
- `startup-canvas` — Product Strategy + Business Model
- `monetization-strategy` — Monetization brainstorming
- `pricing-strategy` — Pricing models + competitive analysis
- `swot-analysis` — SWOT with actionable recommendations
- `pestle-analysis` — Macro environment (Political, Economic, Social, Tech, Legal, Environmental)
- `porters-five-forces` — Competitive forces
- `ansoff-matrix` — Growth strategy (Market Penetration, Development, Product Development, Diversification)

**_y Mapping:** Counsely (30) — 참모실장

---

### 3. Execution (15 skills)
**핵심:** Agile + PM best practices
- `create-prd` ⭐ — 8-section PRD (Summary, Contacts, Background, Objective, Segments, Value Props, Solution, Release)
- `brainstorm-okrs` — Team-level OKRs
- `outcome-roadmap` — Feature → outcome roadmap
- `sprint-plan` — Sprint planning + capacity estimation
- `retro` — Sprint retrospective (What went well, What to improve, Actions)
- `release-notes` — User-facing release notes
- `pre-mortem` ⭐ — Risk analysis (Tigers, Paper Tigers, Elephants)
- `stakeholder-map` — Power × Interest grid
- `summarize-meeting` — Meeting transcript → structured notes
- `user-stories` — User stories (3 C's: Card, Conversation, Confirmation + INVEST)
- `job-stories` — Job stories (Context, Motivation, Outcome)
- `wwas` — Why-What-Acceptance format
- `test-scenarios` — Test scenario generation
- `dummy-dataset` — Realistic dummy data generation
- `prioritization-frameworks` — Reference to 9 frameworks (RICE, ICE, Kano, MoSCoW, etc.)

**_y Mapping:** Tasky (01) — PM 본부장

---

### 4. Market Research (7 skills)
**핵심:** User research + competitive analysis
- `user-personas` — Refined personas (demographics, JTBD, behaviors, pains, motivations)
- `market-segments` — 3-5 customer segments
- `user-segmentation` — Segment by behavior/JTBD
- `customer-journey-map` — End-to-end journey map
- `market-sizing` — TAM/SAM/SOM estimation
- `competitor-analysis` ⭐ — Strengths, weaknesses, differentiation opportunities
- `sentiment-analysis` — Sentiment + theme extraction from feedback

**_y Mapping:** Searchy (05) + Buzzy (06)

---

### 5. Data Analytics (3 skills)
**핵심:** Data-driven decision making
- `sql-queries` ⭐ — Natural language → SQL (BigQuery, PostgreSQL, MySQL)
- `cohort-analysis` — Retention curves + engagement trends
- `ab-test-analysis` ⭐ — Statistical significance, sample size, ship/extend/stop recommendation

**_y Mapping:** Quanty (17) — 데이터 분석 본부장

---

### 6. Go-to-Market (6 skills)
**핵심:** GTM strategy + beachhead
- `gtm-strategy` ⭐ — Full GTM strategy (Beachhead, Channels, Messaging, Metrics, Launch Plan)
- `beachhead-segment` — First beachhead market (Geoffrey Moore Crossing the Chasm)
- `ideal-customer-profile` — ICP with JTBD
- `growth-loops` ⭐ — Sustainable flywheels (Input → Output → Trigger → Amplify)
- `gtm-motions` — Evaluate GTM motions (PLG, Sales-Led, Hybrid)
- `competitive-battlecard` — Sales-ready battlecard

**_y Mapping:** Marchy (22) — 마케팅 본부장

---

### 7. Marketing & Growth (5 skills)
**핵심:** Positioning + growth
- `marketing-ideas` — Marketing ideas + channels
- `positioning-ideas` — Product positioning
- `value-prop-statements` — Value prop for sales/marketing
- `product-name` — Product naming brainstorming
- `north-star-metric` ⭐ — NSM + input metrics (leading indicators)

**_y Mapping:** Marchy (22)

---

### 8. Toolkit (4 skills)
**핵심:** Utility skills
- `review-resume` — PM resume review
- `draft-nda` — NDA with jurisdiction clauses
- `privacy-policy` — GDPR/CCPA compliance
- `grammar-check` — Grammar, logic, flow checking

**_y Mapping:** All agents (utility)

---

## 36 Commands (Chained Workflows)

### Commands = Multi-Skill Workflows

**Claude Code 원본:**
```bash
/discover AI writing assistant for non-native speakers
```

**_y Directive 변환:**
```
Counsely directive: "Searchy에게 discovery 지시 - AI 글쓰기 도구 (non-native speakers)"
```

**Workflow (5 steps):**
1. Understand context (existing vs new product)
2. Brainstorm ideas (brainstorm-ideas-new skill)
3. Identify assumptions (identify-assumptions-new skill)
4. Prioritize assumptions (prioritize-assumptions skill)
5. Design experiments (brainstorm-experiments-new skill)
6. Create discovery plan (markdown output)
7. Offer next steps (/write-prd, /interview, /setup-metrics)

---

### Commands by Domain (36)

| Domain | Count | Commands | _y Agent |
|--------|-------|----------|----------|
| **Discovery** | 5 | discover, brainstorm, triage-requests, interview, setup-metrics | Searchy |
| **Strategy** | 5 | strategy, business-model, value-proposition, market-scan, pricing | Counsely |
| **Execution** | 10 | write-prd, plan-okrs, transform-roadmap, sprint, pre-mortem, meeting-notes, stakeholder-map, write-stories, test-scenarios, generate-data | Tasky |
| **Research** | 3 | research-users, competitive-analysis, analyze-feedback | Searchy |
| **Analytics** | 3 | write-query, analyze-cohorts, analyze-test | Quanty |
| **GTM** | 3 | plan-launch, growth-strategy, battlecard | Marchy |
| **Marketing** | 2 | market-product, north-star | Marchy |
| **Toolkit** | 5 | review-resume, tailor-resume, draft-nda, privacy-policy, proofread | All |

---

## Agent-Skill 매핑 (30 Agents)

### Top 5 Agents (Skills 개수 기준)

#### 1. Searchy (05) — 시장조사 본부장 ⭐⭐⭐
**Skills (14개):**
- Discovery: OST, brainstorm-ideas, identify-assumptions, prioritize-assumptions, brainstorm-experiments
- Research: user-personas, competitor-analysis, market-sizing, customer-journey-map, user-segmentation, sentiment-analysis
- Analysis: analyze-feature-requests, triage-requests, interview-script, summarize-interview

**Commands (8개):**
- /discover, /brainstorm, /triage-requests, /interview, /research-users, /competitive-analysis, /analyze-feedback, /market-scan

**Why:** Searchy = _y의 눈 (Hook Agent) → Discovery + Research 핵심

---

#### 2. Marchy (22) — 마케팅 본부장 ⭐⭐⭐
**Skills (11개):**
- GTM: gtm-strategy, beachhead-segment, ideal-customer-profile, growth-loops, gtm-motions, competitive-battlecard
- Marketing: marketing-ideas, positioning-ideas, value-prop-statements, product-name, north-star-metric

**Commands (5개):**
- /plan-launch, /growth-strategy, /battlecard, /market-product, /north-star

**Why:** Marchy = GTM + Growth 전문가

---

#### 3. Tasky (01) — PM 본부장 ⭐⭐
**Skills (7개):**
- Execution: create-prd, sprint-plan, retro, release-notes, outcome-roadmap
- Stories: user-stories, job-stories

**Commands (10개):**
- /write-prd, /plan-okrs, /transform-roadmap, /sprint, /pre-mortem, /meeting-notes, /stakeholder-map, /write-stories, /test-scenarios, /generate-data

**Why:** Tasky = Execution 중심 (PM 워크플로우)

---

#### 4. Quanty (17) — 데이터 분석 본부장 ⭐⭐
**Skills (5개):**
- Analytics: sql-queries, cohort-analysis, ab-test-analysis, metrics-dashboard, north-star-metric

**Commands (3개):**
- /write-query, /analyze-cohorts, /analyze-test

**Why:** Quanty = 데이터 기반 의사결정

---

#### 5. Counsely (30) — 참모실장 ⭐
**Skills (5개):**
- Strategy: product-strategy, brainstorm-okrs, pre-mortem, stakeholder-map, summarize-meeting

**Commands (5개):**
- /strategy, /business-model, /value-proposition, /market-scan, /pricing

**Why:** Counsely = 전략 + 종합 판단

---

### Full Agent Mapping (30 Agents)

| Floor | Agent | Skills | Commands | 비고 |
|-------|-------|--------|----------|------|
| **10F** | Counsely (30) | 5 | 5 | 참모실장 |
| **9F** | Tasky (01) | 7 | 10 | PM 본부장 |
| **9F** | Finy (02) | 4 | 2 | 재무 |
| **9F** | Legaly (03) | 2 | 2 | 법무 |
| **8F** | Skepty (04) | 3 | 1 | 리스크 견제 |
| **7F** | Searchy (05) | 14 | 8 | 시장조사 ⭐⭐⭐ |
| **7F** | Buzzy (06) | 2 | 1 | 트렌드 모니터링 |
| **6F** | Buildy (07) | 4 | 2 | 개발 관리 |
| **5F** | Quanty (17) | 5 | 3 | 데이터 분석 ⭐⭐ |
| **4F** | Marchy (22) | 11 | 5 | 마케팅 ⭐⭐⭐ |
| **3F** | Testy (24) | 2 | 1 | QA |
| **All** | Utility | 4 | 5 | 전 에이전트 공통 |

---

## 핵심 Insights from PM-OS

### 1. CLAUDE.md 60줄 제약 ⭐
**발견:** PM-OS는 CLAUDE.md를 **60줄로 제한**
**이유:** Claude가 150줄 이상 무시 → 짧고 명확한 지시가 효과적
**적용:** _y CLAUDE.md도 60줄 이내 유지

### 2. Clarify → Draft → Review (Mandatory 3-Step)
**발견:** PM-OS PRD skill은 3단계 강제
1. Clarify (5-10 질문)
2. Draft (초안 작성)
3. Review (Good vs Bad 예시로 검토)

**적용:** _y harness에도 3-step 패턴 적용

### 3. Good vs Bad Examples (구체적!)
**발견:** PM-OS는 모든 skill에 Good/Bad 예시
**예시 (PRD):**
- ❌ Bad: "Improve user experience"
- ✅ Good: "Reduce signup friction by 30% (baseline: 60% drop-off at step 2) by replacing 5-field form with OAuth + 2 fields, measured by signup completion rate in 2 weeks"

**적용:** _y skill에도 Good/Bad 추가

### 4. Anti-patterns (500+ PRD 분석)
**발견:** PM-OS는 500+ PRD 분석 후 anti-patterns 도출
**8가지 Anti-patterns:**
1. Solution먼저, Problem나중
2. Vague success metrics
3. No user quotes/data
4. Feature laundry list
5. No "why now"
6. No alternatives considered
7. No risks/dependencies
8. 10+ page PRD

**적용:** _y PRD harness에 anti-pattern 체크 추가

### 5. @ References (파일 참조, not paste)
**발견:** PM-OS는 파일 직접 붙여넣기 금지 → @ reference 사용
**이유:** Context 절약, 업데이트 자동 반영
**적용:** _y도 agent_memory semantic query로 @ 방식 구현

---

## 프레임워크 (pm-skills 기반)

### Teresa Torres — Continuous Discovery Habits
**OST (Opportunity Solution Tree):**
```
Desired Outcome (1개)
   ↓
Opportunities (3-7개) — Customer needs/pains
   ↓
Solutions (3+개 per opportunity) — Product Trio ideation
   ↓
Experiments (가설 검증) — Fast, cheap, skin-in-the-game
```

**Opportunity Score:**
```
Score = Importance × (1 − Satisfaction)
```

**Principles:**
- One outcome at a time
- Opportunities, not features
- Compare 3+ solutions before choosing
- Discovery is continuous, not linear

---

### Marty Cagan — INSPIRED
**Product Strategy Canvas (9 sections):**
1. Vision — Where we're going
2. Mission — What we do
3. Values — How we operate
4. Market — Who we serve
5. Customers — Specific segments
6. Value Proposition — Why they choose us
7. Differentiation — What makes us unique
8. Defensibility — How we protect our position
9. Metrics — How we measure success

---

### Alberto Savoia — The Right It (Pretotyping)
**XYZ Hypothesis:**
```
At least X% of Y will Z
```

**Example:**
- At least **10%** of **non-native English speakers** will **sign up for AI writing tool** after seeing landing page

**Pretotypes:**
- Fake door test
- Landing page
- Concierge MVP
- Wizard of Oz

---

### Dan Olsen — Lean Product Playbook
**Product-Market Fit Pyramid:**
1. Target Customer
2. Underserved Needs
3. Value Proposition
4. Feature Set
5. UX

---

### Ash Maurya — Running Lean
**Lean Canvas (9 boxes):**
1. Problem
2. Customer Segments
3. Unique Value Proposition
4. Solution
5. Channels
6. Revenue Streams
7. Cost Structure
8. Key Metrics
9. Unfair Advantage

---

## Implementation Plan

### Phase 1: Integration (완료 ✅)
- [x] pm-skills clone to M4
- [x] 65 skills → ~/y-company-oss/.claude/skills/
- [x] 36 commands → ~/y-company-oss/.claude/commands/
- [x] README.md (3-tier architecture)
- [x] AGENT_MAPPING.md (agent-to-skill 매핑)
- [x] 옵시디언 문서 (PM-OS + pm-skills 분석)

### Phase 2: Skill Loader (다음 단계)
**Goal:** Chat worker가 자동으로 skill 로드

**구현:**
1. `src/lib/skill-loader.ts` 생성
2. chat-worker.ts 수정:
   ```ts
   // Before LLM call
   const relevantSkill = await loadSkillIfMatched(directive);
   if (relevantSkill) {
     systemPrompt += `\n\n## Skill Reference\n${relevantSkill}`;
   }
   ```
3. Skill matching logic:
   - Directive 키워드 매칭 ("PRD" → create-prd)
   - Agent ID 매칭 (Searchy → discovery skills)

**Test:**
- Searchy + OST
- Tasky + PRD
- Quanty + A/B test

---

### Phase 3: Directive Templates (UI)
**Goal:** 사용자가 command를 directive로 쉽게 변환

**UI Mockup:**
```
[Discovery 🔍] [Strategy 🎯] [PRD ✍️] [GTM 🚀] [Analytics 📊]

클릭 시:
→ "Searchy에게 discovery 지시 - [여기에 입력]"
```

**구현:**
- Dashboard에 버튼 추가
- 클릭 시 chat input pre-fill

---

### Phase 4: Command Parser (선택)
**Goal:** `/discover AI tool` 직접 지원

**구현:**
```ts
if (message.startsWith('/')) {
  const [cmd, ...args] = message.slice(1).split(' ');
  const directive = convertCommandToDirective(cmd, args.join(' '));
  // Execute directive
}
```

**Note:** Phase 2, 3가 우선 — Command parser는 나중에

---

## 파일 위치 (M4)

### y-company-oss
```
~/y-company-oss/
├── .claude/
│   ├── skills/                      ✅ 65 skills
│   │   ├── README.md
│   │   ├── AGENT_MAPPING.md
│   │   ├── opportunity-solution-tree/
│   │   ├── create-prd/
│   │   ├── ab-test-analysis/
│   │   └── ... (62 more)
│   └── commands/                    ✅ 36 commands
│       ├── README.md
│       ├── discover.md
│       ├── write-prd.md
│       ├── strategy.md
│       └── ... (33 more)
├── .claude-legal/                   ✅ 7 harnesses
├── .claude-docs/                    ✅ 8 harnesses
├── src/
│   ├── data/agent-config.ts         (30 agents)
│   └── lib/agent-tools.ts           (15 tools)
└── docs/
    └── MEMORY-SKILLS-DESIGN.md      (기존)
```

### 옵시디언 (M1)
```
~/thairon/obsidian-vault/
├── Projects/y-Holdings/
│   ├── 2026-04-03-pm-skills-Integration-Master.md  ✅ 이 문서
│   └── 운영방식-Operating-System.md
└── References/AI-Tools/
    ├── 2026-04-03-PM-OS-Analysis.md         ✅ PM-OS 분석
    └── 2026-04-03-pm-skills-Analysis.md     ✅ pm-skills 분석
```

---

## Git Commit (준비)

### Commit Message (Draft)
```
feat(skills): integrate pm-skills 65 skills + 36 commands

- Add .claude/skills/ (65 PM knowledge modules from phuryn/pm-skills)
- Add .claude/commands/ (36 chained workflows)
- Implement 3-tier architecture (Tools → Skills → Harnesses)
- Add README.md + AGENT_MAPPING.md documentation
- Map skills to 30 agents (Searchy: 14, Marchy: 11, Tasky: 7, Quanty: 5, Counsely: 5)

Source: phuryn/pm-skills (MIT License, 9k stars)
Frameworks: Teresa Torres (OST), Marty Cagan (INSPIRED), Alberto Savoia (Pretotyping)

Total assets: 131 reusable modules (15 tools + 65 skills + 36 commands + 15 harnesses)
```

### Files to Commit
```bash
git add .claude/skills/
git add .claude/commands/
git commit -m "feat(skills): integrate pm-skills 65 skills + 36 commands"
```

---

## Success Metrics

### Integration Metrics (완료)
- ✅ 65 skills copied
- ✅ 36 commands copied
- ✅ 3 documentation files created
- ✅ 30 agents mapped to skills
- ✅ 0 license issues (MIT)

### Usage Metrics (미래)
- [ ] Skill 로딩 횟수 (top 10 skills)
- [ ] Agent별 skill 사용 빈도
- [ ] Directive → Skill 자동 매칭 정확도
- [ ] 사용자 피드백 (skill 유용성)

---

## Lessons Learned

### What Went Well ✅
1. **오픈소스 발견 능력** — PM-OS → pm-skills 연쇄 발견
2. **빠른 통합** — 발견 → 통합 완료 8시간 (10:34-19:09)
3. **3-tier 설계** — Skills vs Harnesses 충돌 없이 병행
4. **문서화** — README, AGENT_MAPPING, 옵시디언 즉시 작성
5. **라이선스 확인** — MIT 확인 후 통합 (법적 안전)

### What to Improve 🔧
1. **Skill loader 미구현** — 수동 참조만 가능 (자동화 필요)
2. **테스트 부족** — 실제 skill 로드 테스트 안 함
3. **PM-OS 60줄 제약 미적용** — _y CLAUDE.md 아직 긴 상태
4. **Good vs Bad 예시 부족** — pm-skills에는 있지만 _y harness엔 없음

### Next Time 💡
1. **통합 전 1개 스킬 PoC** — 전체 통합 전 검증
2. **자동화 우선** — Skill loader 먼저, 문서는 나중
3. **PM-OS 패턴 즉시 적용** — 60줄, Good/Bad, anti-patterns

---

## References

### GitHub
- **pm-skills**: https://github.com/phuryn/pm-skills (9k ⭐, MIT)
- **PM-OS**: https://github.com/aakashg/pm-claude-code-setup (~100 ⭐)
- **_y Holdings**: ~/y-company-oss (M4)

### Books
- Teresa Torres — *Continuous Discovery Habits*
- Marty Cagan — *INSPIRED*, *EMPOWERED*
- Alberto Savoia — *The Right It*
- Dan Olsen — *Lean Product Playbook*
- Ash Maurya — *Running Lean*
- Geoffrey Moore — *Crossing the Chasm*
- Eric Ries — *The Lean Startup*

### Articles
- PM-OS Starter: https://pm-os-starter-production.up.railway.app
- Opensurvey: https://www.opensurvey.co.kr
- Opportunity Solution Tree: https://www.producttalk.org/opportunity-solution-tree/

---

## Appendix: Full Skill List (65)

### Product Discovery (13)
1. opportunity-solution-tree
2. brainstorm-ideas-existing
3. brainstorm-ideas-new
4. identify-assumptions-existing
5. identify-assumptions-new
6. prioritize-assumptions
7. brainstorm-experiments-existing
8. brainstorm-experiments-new
9. analyze-feature-requests
10. prioritize-features
11. interview-script
12. summarize-interview
13. metrics-dashboard

### Product Strategy (12)
14. product-strategy
15. product-vision
16. value-proposition
17. business-model
18. lean-canvas
19. startup-canvas
20. monetization-strategy
21. pricing-strategy
22. swot-analysis
23. pestle-analysis
24. porters-five-forces
25. ansoff-matrix

### Execution (15)
26. create-prd
27. brainstorm-okrs
28. outcome-roadmap
29. sprint-plan
30. retro
31. release-notes
32. pre-mortem
33. stakeholder-map
34. summarize-meeting
35. user-stories
36. job-stories
37. wwas
38. test-scenarios
39. dummy-dataset
40. prioritization-frameworks

### Market Research (7)
41. user-personas
42. market-segments
43. user-segmentation
44. customer-journey-map
45. market-sizing
46. competitor-analysis
47. sentiment-analysis

### Data Analytics (3)
48. sql-queries
49. cohort-analysis
50. ab-test-analysis

### Go-to-Market (6)
51. gtm-strategy
52. beachhead-segment
53. ideal-customer-profile
54. growth-loops
55. gtm-motions
56. competitive-battlecard

### Marketing & Growth (5)
57. marketing-ideas
58. positioning-ideas
59. value-prop-statements
60. product-name
61. north-star-metric

### Toolkit (4)
62. review-resume
63. draft-nda
64. privacy-policy
65. grammar-check

---

## Appendix: Full Command List (36)

### Product Discovery (5)
1. discover.md
2. brainstorm.md
3. triage-requests.md
4. interview.md
5. setup-metrics.md

### Product Strategy (5)
6. strategy.md
7. business-model.md
8. value-proposition.md
9. market-scan.md
10. pricing.md

### Execution (10)
11. write-prd.md
12. plan-okrs.md
13. transform-roadmap.md
14. sprint.md
15. pre-mortem.md
16. meeting-notes.md
17. stakeholder-map.md
18. write-stories.md
19. test-scenarios.md
20. generate-data.md

### Market Research (3)
21. research-users.md
22. competitive-analysis.md
23. analyze-feedback.md

### Data Analytics (3)
24. write-query.md
25. analyze-cohorts.md
26. analyze-test.md

### Go-to-Market (3)
27. plan-launch.md
28. growth-strategy.md
29. battlecard.md

### Marketing & Growth (2)
30. market-product.md
31. north-star.md

### Toolkit (5)
32. review-resume.md
33. tailor-resume.md
34. draft-nda.md
35. privacy-policy.md
36. proofread.md

---

**Status:** Phase 1 Complete ✅
**Next:** Phase 2 (Skill Loader) or Phase 3 (Directive Templates)
**Owner:** Jarvis + Andrew
**Last Updated:** 2026-04-03 19:09 KST
