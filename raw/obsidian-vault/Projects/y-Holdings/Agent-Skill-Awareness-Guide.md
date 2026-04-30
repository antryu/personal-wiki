# Agent Skill Awareness 사용 가이드

**Date:** 2026-04-03 20:25
**Status:** Active ✅
**Commit:** c6ef077

---

## 개요

**Agent가 이제 자신의 skill을 알고 스스로 사용합니다!**

### Before (수동)
```
User: "PRD 작성해줘"
→ 사용자가 "PRD" 키워드 입력
→ Skill 로드
```

### After (자동) ⭐
```
User: "Tasky에게 일 시켜줘"
→ Tasky가 자신의 Available Skills 확인
→ Tasky: "I'll use create-prd skill"
→ Skill 자동 로드
```

**차이점:** Agent가 스스로 skill 선택!

---

## 작동 원리 (3단계)

### 1. Agent가 Skill 리스트를 받음
**System Prompt에 자동 주입:**
```
## Your Available Skills

You have access to these specialized skills:

**Execution & Planning:**
- create-prd — 8-section PRD template
- sprint-plan — Sprint planning with capacity estimation
- retro — Structured sprint retrospective
- brainstorm-okrs — Team-level OKRs
- user-stories — User stories (3 C's + INVEST)

**Usage:** When asked for PRD, sprint planning, or OKRs, 
mention the skill name (e.g., "I'll use the create-prd skill"). 
The skill will auto-load with templates and best practices.
```

### 2. Agent가 작업 시작 시 Skill 언급
**Agent 응답:**
```
"I'll create a PRD using the create-prd skill. 
Let me structure this with the 8-section template..."
```

### 3. Skill 자동 로드
**chat-worker 감지:**
- "create-prd" 키워드 감지
- `create-prd/SKILL.md` 자동 로드 (3.6KB)
- System prompt에 주입
- Agent가 템플릿 따라서 PRD 생성

---

## Agent별 Skills (5명)

### Searchy (05) — Market Research ⭐⭐⭐
**8 skills:**
- opportunity-solution-tree (OST 프레임워크)
- brainstorm-ideas-existing/new
- identify-assumptions-existing/new
- prioritize-assumptions
- brainstorm-experiments
- user-personas
- competitor-analysis
- market-sizing

**용도:** Discovery, 시장 조사, 경쟁 분석

---

### Tasky (01) — PM ⭐⭐
**5 skills:**
- create-prd (8-section PRD)
- sprint-plan (Sprint 계획)
- retro (회고)
- brainstorm-okrs (OKR 수립)
- user-stories (사용자 스토리)

**용도:** 기획, 실행, 스프린트 관리

---

### Quanty (17) — Analytics ⭐⭐
**5 skills:**
- sql-queries (SQL 생성)
- ab-test-analysis (A/B 테스트)
- cohort-analysis (코호트 분석)
- metrics-dashboard (지표 대시보드)
- north-star-metric (NSM 정의)

**용도:** 데이터 분석, SQL, A/B 테스트

---

### Marchy (22) — Marketing ⭐⭐
**7 skills:**
- gtm-strategy (GTM 전략)
- beachhead-segment (초기 시장)
- ideal-customer-profile (ICP)
- growth-loops (그로스 루프)
- positioning-ideas (포지셔닝)
- value-prop-statements (가치 제안)
- north-star-metric (NSM)

**용도:** GTM, 마케팅, 성장 전략

---

### Counsely (30) — Strategy ⭐
**5 skills:**
- product-strategy (제품 전략)
- brainstorm-okrs (OKR)
- pre-mortem (리스크 분석)
- stakeholder-map (이해관계자 맵)
- business-model (비즈니스 모델)

**용도:** 전략, OKR, 리스크 관리

---

## 사용 시나리오 (3가지)

### 시나리오 1: PRD 작성 (Tasky)

**User → Counsely:**
```
"Tasky에게 신규 AI 챗봇 PRD 작성 지시"
```

**Counsely → Tasky:**
```
Directive: "신규 AI 챗봇 기능 PRD 작성"
```

**Tasky 내부:**
```
[System Prompt에서 Available Skills 확인]
- create-prd — 8-section PRD template ✅
- sprint-plan
- retro
...

[응답 생성]
"I'll create a PRD using the create-prd skill.

## PRD: AI 챗봇 기능

### 1. Summary
...
(8개 섹션 전부)
```

**결과:**
- Tasky가 스스로 create-prd skill 선택
- "create-prd" 키워드로 skill 자동 로드
- 8-section 템플릿으로 PRD 생성

---

### 시나리오 2: Discovery (Searchy)

**User → Counsely:**
```
"Searchy에게 새 SaaS 제품 아이디어 발굴 요청"
```

**Counsely → Searchy:**
```
Directive: "새로운 SaaS 제품 아이디어 discovery"
```

**Searchy 내부:**
```
[Available Skills 확인]
- opportunity-solution-tree — Teresa Torres OST ✅
- brainstorm-ideas-new
- user-personas
...

[응답]
"I'll use the opportunity-solution-tree skill to structure this discovery.

## Opportunity Solution Tree

### Desired Outcome (1개)
→ 7-day activation 40%

### Opportunities (3-7개)
→ 비개발자 API 연동 어려움
→ 데이터 시각화 도구 복잡
...
```

**결과:**
- Searchy가 OST skill 자동 선택
- Teresa Torres 4-level 프레임워크 적용
- 구조화된 discovery 결과

---

### 시나리오 3: A/B Test (Quanty)

**User → Counsely:**
```
"Quanty에게 버튼 색상 A/B 테스트 결과 분석 요청"
```

**Counsely → Quanty:**
```
Directive: "버튼 색상 A/B 테스트 분석"
```

**Quanty 내부:**
```
[Available Skills 확인]
- ab-test-analysis — Statistical significance ✅
- sql-queries
- cohort-analysis
...

[응답]
"I'll analyze this A/B test using the ab-test-analysis skill.

## A/B Test Analysis

### Statistical Significance
- p-value: 0.032 (< 0.05) ✅
- Confidence: 95%
- Effect size: +12% conversion

### Recommendation
🚀 Ship it!
```

**결과:**
- Quanty가 ab-test-analysis skill 자동 선택
- 통계적 유의성 체크리스트 적용
- Ship/Extend/Stop 추천

---

## Counsely의 역할 (중요!)

**Counsely는 이제 "어떤 agent + 어떤 skill" 조합을 추천합니다.**

### Before
```
User: "PRD 작성해줘"
Counsely: "Tasky에게 PRD 작성 지시"
```

### After ⭐
```
User: "신규 기능 기획서 필요해"
Counsely: "Tasky에게 지시: create-prd skill로 PRD 작성"
→ Tasky가 자동으로 create-prd skill 사용
```

**Counsely Directive 예시:**
```
Tasky에게 지시:
신규 AI 챗봇 기능 PRD 작성

[Skill: create-prd 사용 권장]
```

**결과:**
- Tasky가 directive 읽고 "create-prd" 키워드 감지
- Skill 자동 로드
- PRD 생성

---

## Agent-Skill 매칭 (Quick Reference)

| 요청 유형 | Agent | Skill | 자동 언급 |
|-----------|-------|-------|-----------|
| PRD | Tasky | create-prd | "I'll use create-prd skill" |
| Discovery | Searchy | opportunity-solution-tree | "OST framework" |
| A/B Test | Quanty | ab-test-analysis | "ab-test-analysis skill" |
| GTM | Marchy | gtm-strategy | "gtm-strategy skill" |
| Strategy | Counsely | product-strategy | "product-strategy skill" |
| Sprint | Tasky | sprint-plan | "sprint-plan skill" |
| SQL | Quanty | sql-queries | "sql-queries skill" |
| Persona | Searchy | user-personas | "user-personas skill" |

---

## 로그 확인

**chat-worker 로그 (skill 사용 시):**
```bash
🔄 Processing queue item abc123 for agent tasky
💭 Recalled 5 memories for tasky
📚 Loaded skill context for tasky      # ← Skill hint 주입됨
📚 Loaded skill context for tasky      # ← Skill 자동 로드됨 (agent 응답 후)
📡 Calling ollama (llama3.3:70b) for tasky
✅ Completed queue item abc123 for agent tasky
```

**Agent 응답에서 확인:**
```
"I'll create a PRD using the create-prd skill..."
→ "create-prd" 키워드 감지
→ Skill 로드
→ 템플릿 적용
```

---

## 테스트 방법

### 1. Skill Hint 테스트
```bash
# M4
cd ~/y-company-oss
npx tsx scripts/test-agent-skill-awareness.ts
```

**출력:**
```
🧠 Testing Agent Skill Awareness...
🤖 SEARCHY ✅ Has skill hint (8 skills)
🤖 TASKY ✅ Has skill hint (5 skills)
🤖 QUANTY ✅ Has skill hint (5 skills)
🤖 MARCHY ✅ Has skill hint (7 skills)
🤖 COUNSELY ✅ Has skill hint (5 skills)
```

### 2. 실전 테스트
```
1. Dashboard에서 "Tasky에게 PRD 작성 요청"
2. chat_queue 확인: Tasky directive 생성
3. chat-worker 로그: 📚 Loaded skill context (2번)
4. Tasky 응답: "I'll use create-prd skill..." 포함
5. 결과: 8-section PRD 생성됨
```

---

## 트러블슈팅

### Skill이 로드 안 될 때

**증상:** Agent가 skill 언급 안 함

**원인 1: Agent가 skill 목록 안 봄**
```bash
# 확인
grep "skillHint" ~/y-company-oss/scripts/chat-worker.ts

# 있어야 함:
const skillHint = getAgentSkillHint(agent_id);
const enrichedPrompt = system_prompt + skillHint + ...
```

**원인 2: Agent가 skill 언급 안 함**
```
Agent 응답: "I'll create a PRD..." (skill 이름 없음)
해결: System prompt에 "mention skill name" 지시 추가됨
```

**원인 3: 키워드 매칭 실패**
```
Agent: "I'll use the PRD template"  (create-prd 아닌 PRD)
해결: "create-prd" 정확히 언급하도록 hint 수정
```

---

### Agent가 잘못된 Skill 선택

**증상:** Tasky가 OST skill 언급

**원인:** Agent가 available skills 밖의 skill 언급

**해결:**
```typescript
// agent-skill-hints.ts에서 Tasky skills 확인
'tasky': [
  'create-prd',    // ✅
  'sprint-plan',   // ✅
  'opportunity-solution-tree',  // ❌ Searchy 것
]
```

**수정:** Tasky skills에서 OST 제거

---

### Skill이 두 번 로드됨

**증상:** 📚 로그 2번 출력

**원인:** 
1. 첫 번째: skillHint 주입 (agent가 skill 목록 봄)
2. 두 번째: agent 응답에서 skill 키워드 감지

**해결:** 정상 동작! 두 번째만 실제 skill 내용 로드

---

## 성능

### Skill Hint 오버헤드

| 항목 | 시간 | 비고 |
|------|------|------|
| Skill hint 생성 | <1ms | In-memory lookup |
| Hint 주입 (1KB) | <1ms | String concatenation |
| Agent 응답 파싱 | <1ms | Keyword matching |
| Skill 로드 (3-4KB) | ~1ms | File read (cached) |
| **Total** | **~3ms** | 무시 가능 |

**LLM 호출 (3-10초)에 비해 무시 가능**

---

## 향후 개선 (Phase 4)

### Counsely Skill Recommendation
**목표:** Counsely가 더 똑똑하게 skill 추천

```
User: "경쟁사 분석해줘"
Counsely: "Searchy에게 지시: competitor-analysis skill 사용"
→ Searchy가 자동으로 competitor-analysis 적용
```

**구현:** Counsely system prompt에 skill mapping 추가

---

### Skill Chaining
**목표:** 여러 skill 연속 사용

```
User: "Discovery부터 PRD까지 전부"
Counsely → Searchy: OST skill
         → Tasky: create-prd skill (Searchy 결과 참조)
```

---

### Skill Usage Analytics
**목표:** 어떤 skill이 자주 쓰이는지 추적

```sql
SELECT skill_name, COUNT(*) as usage_count
FROM skill_usage_log
GROUP BY skill_name
ORDER BY usage_count DESC;
```

---

## 참고 파일

### M4 (y-company-oss)
```
~/y-company-oss/
├── src/lib/
│   ├── skill-loader.ts          # Skill 로딩
│   └── agent-skill-hints.ts     # Agent별 skill 리스트 ⭐
├── scripts/
│   ├── chat-worker.ts           # Skill hint 통합 ✅
│   └── test-agent-skill-awareness.ts
└── docs/
    └── counsely-skill-usage.md
```

### M1 (옵시디언)
```
~/thairon/obsidian-vault/Projects/y-Holdings/
├── 2026-04-03-pm-skills-Integration-Master.md  # 마스터
├── Skill-Auto-Loading-Guide.md                  # 자동 로딩
└── Agent-Skill-Awareness-Guide.md               # 이 문서 ⭐
```

---

## Git Commits (3개)

**Commit 1:** `3d070e3` — Skills + Commands 통합
**Commit 2:** `63974bb` — Chat Worker 자동 로드
**Commit 3:** `c6ef077` — Agent Skill Awareness ⭐

---

**상태:** Production Ready ✅  
**마지막 업데이트:** 2026-04-03 20:25 KST  
**문제 발생 시:** GitHub Issues or Discord #y-strategy

---

## Summary

**Before:** 사용자가 skill 키워드 입력 → Skill 로드  
**After:** Agent가 스스로 skill 선택 → 자동 로드 ⭐

**핵심:**
1. Agent가 Available Skills 목록 받음
2. Agent가 작업 시 skill 이름 언급
3. Skill 자동 로드 + 템플릿 적용
4. 고품질 결과 생성

**결과:** 완전 자동화된 skill 사용! 🎉
