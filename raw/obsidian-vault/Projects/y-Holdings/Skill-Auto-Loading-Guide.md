# Skill Auto-Loading 사용 가이드

**Date:** 2026-04-03
**Status:** Active ✅
**Commit:** 63974bb

---

## 개요

**chat-worker.ts가 이제 자동으로 skill을 로드합니다!**

사용자가 메시지를 보내면:
1. 키워드 감지 (PRD, OST, A/B 테스트 등)
2. Agent ID 매칭 (Searchy, Tasky, Quanty 등)
3. 관련 skill 자동 로드
4. System prompt에 주입
5. LLM이 skill 참고해서 응답

**수동 작업 불필요!** 🎉

---

## 사용 방법 (3가지 예시)

### 1. PRD 작성 (Tasky)

**입력:**
```
Tasky에게 PRD 작성 지시 - 신규 AI 챗봇 기능
```

**자동 처리:**
- `create-prd` skill 로드 (3.5KB)
- 8-section PRD 템플릿 주입
- LLM이 템플릿 따라서 PRD 생성

**출력:**
```
## PRD: AI 챗봇 기능

### 1. Summary
...

### 2. Contacts
...

(8개 섹션 전부)
```

---

### 2. Discovery (Searchy)

**입력:**
```
Searchy에게 발견 지시 - 새로운 SaaS 제품 아이디어
```

**자동 처리:**
- `opportunity-solution-tree` skill 로드 (4.3KB)
- Teresa Torres OST 프레임워크 주입
- LLM이 4-level 구조로 분석

**출력:**
```
## Opportunity Solution Tree

### Desired Outcome (1개)
→ 7-day activation 40%

### Opportunities (3-7개)
→ "비개발자가 API 연동에 어려움을 겪음"
→ "데이터 시각화 도구가 복잡함"

### Solutions (3+개 per opportunity)
...

### Experiments (가설 검증)
...
```

---

### 3. A/B 테스트 분석 (Quanty)

**입력:**
```
Quanty에게 A/B 테스트 분석 지시 - 버튼 색상 테스트
```

**자동 처리:**
- `ab-test-analysis` skill 로드 (3.6KB)
- 통계적 유의성 체크리스트 주입
- LLM이 significance, sample size, recommendation 제공

**출력:**
```
## A/B Test Analysis

### Statistical Significance
- p-value: 0.032 (< 0.05) ✅
- Confidence: 95%
- Effect size: +12% conversion

### Sample Size
- Control: 5,000 users
- Treatment: 5,000 users
- Adequate ✅

### Recommendation
🚀 Ship it! Statistically significant improvement.
```

---

## 지원하는 Skills (65개)

### Discovery (13)
- opportunity-solution-tree ⭐
- brainstorm-ideas-existing/new
- identify-assumptions-existing/new
- prioritize-assumptions
- brainstorm-experiments-existing/new

### Execution (15)
- create-prd ⭐
- sprint-plan
- retro
- brainstorm-okrs
- pre-mortem

### Analytics (3)
- sql-queries ⭐
- ab-test-analysis ⭐
- cohort-analysis

### GTM (6)
- gtm-strategy ⭐
- beachhead-segment
- growth-loops

### Strategy (12)
- product-strategy ⭐
- business-model
- value-proposition

### Research (7)
- user-personas
- competitor-analysis
- market-sizing

### Marketing (5)
- marketing-ideas
- positioning-ideas
- north-star-metric

### Toolkit (4)
- review-resume
- draft-nda
- privacy-policy

---

## 키워드 매핑 (한글 + 영어)

| Skill | 한글 키워드 | 영어 키워드 |
|-------|-------------|-------------|
| create-prd | PRD, 기획서, 요구사항 | prd, product requirements |
| opportunity-solution-tree | OST, 기회, 발견 | ost, opportunity, discovery |
| ab-test-analysis | A/B 테스트, 테스트 분석 | a/b test, ab test |
| gtm-strategy | GTM, 출시, 런치 | gtm, go-to-market, launch |
| product-strategy | 제품 전략, 전략 | product strategy, strategy |
| sql-queries | SQL, 쿼리 | sql, query |
| brainstorm-okrs | OKR, 목표 | okr, objectives |

**Full list:** `~/y-company-oss/src/lib/skill-loader.ts` (SKILL_KEYWORDS)

---

## Agent-Skill 매핑

| Agent | Skills (개수) | 자동 로드 예시 |
|-------|---------------|----------------|
| **Searchy (05)** | 14 | "발견", "OST", "경쟁사" |
| **Tasky (01)** | 7 | "PRD", "스프린트", "회고" |
| **Quanty (17)** | 5 | "SQL", "A/B 테스트", "코호트" |
| **Marchy (22)** | 11 | "GTM", "출시", "성장 루프" |
| **Counsely (30)** | 5 | "전략", "OKR", "리스크" |

---

## 작동 원리 (Technical)

### chat-worker.ts 플로우

```typescript
async function processQueueItem(item: QueueItem) {
  // 1. Memory 회상
  const memoryContext = await recallMemories(agent_id);
  
  // 2. Skill 로딩 (NEW! ⭐)
  const skillContext = await loadRelevantSkills(message, agent_id);
  
  // 3. System prompt 합성
  const enrichedPrompt = system_prompt + memoryContext + skillContext;
  
  // 4. LLM 호출
  const response = await callLLM(enrichedPrompt, message, history);
  
  // 5. 응답 저장
  await dbUpdate('chat_queue', id, { status: 'done', response });
}
```

### skill-loader.ts 로직

```typescript
export async function loadRelevantSkills(
  directive: string,
  agentId?: string,
  maxSkills: number = 2
): Promise<string> {
  // 1. Agent-specific skills 체크
  if (agentId) {
    const agentSkills = AGENT_SKILLS[agentId.toLowerCase()];
    for (const skillName of agentSkills) {
      const keywords = SKILL_KEYWORDS[skillName];
      if (keywords.some(kw => directive.includes(kw))) {
        // Confidence 0.9 (high)
        return formatSkill(skillName);
      }
    }
  }
  
  // 2. Global keyword 체크
  for (const [skillName, keywords] of SKILL_KEYWORDS) {
    if (keywords.some(kw => directive.includes(kw))) {
      // Confidence 0.7 (medium)
      return formatSkill(skillName);
    }
  }
  
  // 3. No match
  return '';
}
```

---

## 로그 확인

**chat-worker 실행 시 로그:**

```bash
🔄 Processing queue item abc123 for agent searchy
💭 Recalled 8 memories for searchy
📚 Loaded skill context for searchy  # ← Skill 로드됨!
📡 Calling gemini (gemini-2.5-flash) for searchy
✅ Completed queue item abc123 for agent searchy
```

**skill 로드 안 될 때:**
```bash
🔄 Processing queue item abc123 for agent tasky
💭 Recalled 5 memories for tasky
📡 Calling ollama (llama3.3:70b) for tasky  # ← 📚 로그 없음 = skill 안 쓰임
✅ Completed queue item abc123 for agent tasky
```

---

## 테스트 방법

### 1. 유닛 테스트
```bash
# M4
cd ~/y-company-oss
npx tsx scripts/test-skill-integration.ts
```

**출력:**
```
🧪 Testing Skill Integration...
✅ Test 1: Searchy + discovery → opportunity-solution-tree (4.3KB)
✅ Test 2: Tasky + PRD → create-prd (3.6KB)
✅ Test 3: Quanty + A/B test → ab-test-analysis (3.6KB)
```

### 2. 실전 테스트 (Dashboard)
1. _y Dashboard 접속 (http://localhost:3000)
2. Chat 입력: "Tasky에게 PRD 작성 지시"
3. chat_queue 확인: status=processing
4. chat-worker 로그 확인: 📚 Loaded skill context
5. 응답 확인: 8-section PRD 생성됨

---

## 트러블슈팅

### Skill이 로드 안 될 때

**증상:** 📚 로그 없음, LLM이 skill 내용 모름

**원인 1: 키워드 매칭 실패**
```
입력: "기획서 좀 만들어줘"
해결: "PRD 작성해줘" (명확한 키워드 사용)
```

**원인 2: Agent 매칭 실패**
```
입력: "Buildy에게 PRD 작성 지시"  (Buildy는 PRD skill 없음)
해결: "Tasky에게 PRD 작성 지시"   (Tasky는 PRD skill 있음)
```

**원인 3: 파일 경로 문제**
```bash
# 확인
ls ~/y-company-oss/.claude/skills/create-prd/SKILL.md

# 없으면
cd ~/y-company-oss
git pull  # 최신 skills 받기
```

---

### Skill 내용이 이상할 때

**증상:** LLM이 skill 무시하거나 잘못 해석

**원인 1: Skill 파일 손상**
```bash
# 확인
cat ~/y-company-oss/.claude/skills/create-prd/SKILL.md | head -20

# 이상하면
cd ~/y-company-oss
git checkout .claude/skills/create-prd/SKILL.md
```

**원인 2: System prompt 너무 김**
```
Memory (3KB) + Skill (4KB) = 7KB prompt
→ LLM이 뒷부분 무시 가능

해결: maxSkills=1로 제한 (skill-loader.ts)
```

---

### 새 Skill 추가하고 싶을 때

**방법 1: pm-skills에서 복사**
```bash
# M4
cd /tmp/pm-skills
ls pm-*/skills/  # 원하는 skill 찾기
cp -r pm-execution/skills/new-skill ~/y-company-oss/.claude/skills/
```

**방법 2: 직접 작성**
```bash
mkdir ~/y-company-oss/.claude/skills/my-custom-skill
cat > ~/y-company-oss/.claude/skills/my-custom-skill/SKILL.md << 'EOF'
---
name: my-custom-skill
description: "Custom skill for X"
---

## Purpose
...

## Instructions
1. Step 1
2. Step 2
...
EOF
```

**방법 3: skill-loader.ts에 키워드 추가**
```typescript
const SKILL_KEYWORDS: Record<string, string[]> = {
  // 기존...
  'my-custom-skill': ['커스텀', '특수', 'custom'],  // ← 추가
};

const AGENT_SKILLS: Record<string, string[]> = {
  'tasky': [
    'create-prd',
    'my-custom-skill',  // ← Tasky에 추가
  ],
};
```

---

## 성능

### Skill 로딩 오버헤드

| 항목 | 시간 | 비고 |
|------|------|------|
| Skill 파일 읽기 | ~1ms | 파일 시스템 캐시됨 |
| 키워드 매칭 | <1ms | In-memory 검색 |
| Prompt 합성 | <1ms | String concatenation |
| **Total** | **~2ms** | 거의 무시 가능 |

**LLM 호출 시간 (3-10초)에 비해 무시 가능한 수준**

---

## 향후 계획 (Phase 3)

### Directive Templates (UI)
```
Dashboard 상단 버튼:
[Discovery 🔍] [Strategy 🎯] [PRD ✍️] [GTM 🚀] [Analytics 📊]

클릭 시:
→ Chat input에 "Searchy에게 discovery 지시 - " 자동 입력
→ 사용자가 나머지만 입력
```

### Command Parser
```typescript
// /discover AI tool 직접 지원
if (message.startsWith('/')) {
  const [cmd, ...args] = message.slice(1).split(' ');
  const directive = convertCommandToDirective(cmd, args.join(' '));
  // Execute...
}
```

---

## 참고 파일

### M4 (y-company-oss)
```
~/y-company-oss/
├── .claude/skills/          # 65 skills
├── src/lib/
│   ├── skill-loader.ts     # Auto-loader
│   └── test-skill-loader.ts
├── scripts/
│   ├── chat-worker.ts      # 통합 완료 ✅
│   └── test-skill-integration.ts
└── docs/
    └── pm-skills-integration.md
```

### M1 (옵시디언)
```
~/thairon/obsidian-vault/Projects/y-Holdings/
├── 2026-04-03-pm-skills-Integration-Master.md  # 마스터 문서
└── Skill-Auto-Loading-Guide.md                 # 이 문서
```

---

## Git Commits

**Commit 1 (Skills):** `3d070e3`
- 65 skills + 36 commands 통합
- skill-loader.ts 구현
- 테스트 4/4 통과

**Commit 2 (Chat Worker):** `63974bb`
- chat-worker.ts에 skill-loader 통합
- 자동 로드 활성화
- 테스트 3/3 통과

---

**상태:** Production Ready ✅  
**문제 발생 시:** GitHub Issues or Discord #y-strategy
