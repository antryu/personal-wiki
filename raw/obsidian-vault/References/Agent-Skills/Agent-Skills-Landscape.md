# 🛠️ Agent Skills 생태계 정리

> 작성일: 2026-03-07
> 목적: AI 에이전트 스킬 마켓플레이스, 리포지토리, 가이드 총정리

---

## 1. Agent Skill이란?

`SKILL.md` 포맷의 모듈러 패키지. AI 에이전트에게 특정 태스크/워크플로우를 가르치는 마크다운 파일 + 스크립트 + 레퍼런스 묶음.

**핵심 원칙 3가지** (Anthropic 공식 가이드):
1. **Progressive Disclosure** — 프론트매터(항상 로드) → SKILL.md 본문(필요시) → 링크된 파일(심화시)
2. **Composability** — 다른 스킬과 함께 작동
3. **Portability** — Claude.ai, Claude Code, API 어디서든 동일 작동

**MCP vs Skills:**
- MCP = 주방 (도구, 재료, 장비) → *무엇을 할 수 있는가*
- Skills = 레시피 (단계별 지침) → *어떻게 해야 하는가*

---

## 2. 스킬 마켓플레이스 & 디렉토리

| 이름 | URL | 특징 |
|---|---|---|
| **SkillsMP** | https://skillsmp.com | 40만+ 스킬, Claude Code/Codex/ChatGPT 호환 |
| **ClawHub** | https://clawhub.ai | OpenClaw 전용, CLI 설치 (`clawhub install`) |
| **Agensi** | - | 품질 검증된 SKILL.md 마켓 |
| **agentskill.sh** | https://agentskill.sh | 44K+ 스킬, 2중 보안 스캔 |
| **Skillstore** | https://skillstore.io | 큐레이션 마켓 |
| **SkillsDirectory** | https://skillsdirectory.org | 인기 스킬 디렉토리 |
| **skills.sh** | https://skills.sh | 디렉토리 + 리더보드 |

---

## 3. 공식 스킬 카탈로그 (기업별)

### Anthropic (Claude)
- `anthropics/skills` — docx, pptx, xlsx, pdf, frontend-design, mcp-builder, skill-creator 등 17개
- https://github.com/anthropics/skills

### Google
- `google-gemini/gemini-skills` — Gemini API/SDK 스킬
- `google-labs-code/stitch-skills` — design-md, react-components, shadcn-ui, stitch-loop
- `googleworkspace/cli` — Gmail, Drive, Sheets, Calendar, Docs, Slides 등 14개

### OpenAI
- `openai/skills` — 공식 Codex 스킬

### Microsoft
- `microsoft/skills` — Azure SDK, AI Foundry

### Vercel
- react-best-practices, web-design-guidelines, next-best-practices, next-upgrade 등 8개
- https://github.com/vercel-labs/agent-skills

### Supabase
- postgres-best-practices
- https://github.com/supabase/agent-skills

### Stripe
- stripe-best-practices, upgrade-stripe
- https://github.com/stripe/ai

### Cloudflare
- agents-sdk, durable-objects, wrangler, web-perf 등 7개
- https://github.com/cloudflare/skills

### Netlify
- functions, edge-functions, blobs, db, image-cdn, forms, caching, ai-gateway 등 11개
- https://github.com/netlify/context-and-tools

### HashiCorp (Terraform)
- code-generation, module-generation, provider-development
- https://github.com/hashicorp/agent-skills

### Expo
- expo-app-design, expo-deployment, upgrading-expo

### 기타 공식
- **Hugging Face** — `huggingface/skills` 커뮤니티 카탈로그
- **Replicate** — AI 모델 실행 스킬
- **Remotion** — React 기반 비디오 생성
- **Typefully** — X/LinkedIn/Threads 소셜 콘텐츠
- **Sanity** — CMS best practices, SEO/AEO, 콘텐츠 실험
- **Tinybird** — 데이터 파이프라인
- **ClickHouse** — DB best practices
- **Neon** — Serverless Postgres
- **Better Auth** — 인증 설정
- **Firecrawl** — 웹 스크래핑/크롤링
- **Binance** — 크립토 트레이딩

---

## 4. 도메인별 스킬 컬렉션

### 📋 PM (Product Management) — phuryn/pm-skills
- **65 스킬 + 36 체인 워크플로우**, 8개 플러그인
- https://github.com/phuryn/pm-skills
- Claude Code + Cowork 설계, 다른 에이전트도 호환

| 플러그인 | 스킬 수 | 커맨드 수 | 핵심 |
|---|---|---|---|
| Product Discovery | 13 | 5 | 아이디어, 가정 검증, OST, 인터뷰 |
| Product Strategy | 12 | 5 | 비전, 비즈니스 모델, 가격 전략 |
| Execution | 15 | 10 | PRD, OKR, 로드맵, 스프린트, 회고 |
| Market Research | 7 | 3 | 페르소나, 세그먼트, 여정 맵 |
| Data Analytics | 3 | 3 | SQL, 코호트, A/B 테스트 |
| GTM | 6 | 3 | 비치헤드, ICP, 메시징, 배틀카드 |
| Marketing Growth | - | - | 그로스 루프, 성장 전략 |
| Toolkit | - | - | 공통 프레임워크 |

**주요 커맨드:** `/discover`, `/strategy`, `/write-prd`, `/plan-launch`, `/north-star`

### 📈 Marketing — coreyhaines31/marketingskills
- **32개 스킬**, 7개 카테고리
- https://github.com/coreyhaines31/marketingskills
- 만든 사람: Corey Haines (Swipe Files, Conversion Factory)

| 카테고리 | 스킬 |
|---|---|
| **SEO & Content** | seo-audit, ai-seo, site-architecture, programmatic-seo, schema-markup, content-strategy |
| **CRO** | page-cro, signup-flow-cro, onboarding-cro, form-cro, popup-cro, paywall-upgrade-cro |
| **Content & Copy** | copywriting, copy-editing, cold-email, email-sequence, social-content |
| **Paid & Measurement** | paid-ads, ad-creative, ab-test-setup, analytics-tracking |
| **Growth & Retention** | referral-program, free-tool-strategy, churn-prevention |
| **Sales & GTM** | revops, sales-enablement, launch-strategy, pricing-strategy, competitor-alternatives |
| **Strategy** | marketing-ideas (140개!), marketing-psychology |

**핵심:** `product-marketing-context` 스킬이 기반 → 모든 스킬이 이걸 먼저 참조

### 🔒 Security — Trail of Bits
- 보안 코드 리뷰, 취약점 분석

---

## 5. Awesome Lists (큐레이션 리포)

| 리포 | 특징 |
|---|---|
| **VoltAgent/awesome-agent-skills** | 500+ 스킬, 공식팀 위주, 가장 활발 |
| **skillmatic-ai/awesome-agent-skills** | 체계적 학습 로드맵 (Phase 1~4) |
| **heilcheng/awesome-agent-skills** | 튜토리얼 포함 |
| **CommandCodeAI/agent-skills** | 코딩 워크플로우 중심 |

---

## 6. 스킬 빌딩 가이드

### Anthropic 공식 가이드 (PDF)
- https://resources.anthropic.com/hubfs/The-Complete-Guide-to-Building-Skill-for-Claude.pdf

**스킬 구조:**
```
my-skill/
├── SKILL.md          # 필수 (YAML frontmatter + 본문)
├── scripts/          # 선택 (Python, Bash 등)
├── references/       # 선택 (문서, 레퍼런스)
└── assets/           # 선택 (템플릿, 아이콘)
```

**YAML 프론트매터 (가장 중요):**
```yaml
---
name: my-skill-name
description: >
  무엇을 하는지 + 언제 사용하는지 (트리거 조건).
  Use when user mentions 'sprint', 'project planning'.
---
```

**3가지 스킬 유형:**
1. **Document & Asset Creation** — 일관된 문서/디자인/코드 생성
2. **Workflow Automation** — 멀티스텝 프로세스 자동화
3. **MCP Enhancement** — MCP 도구 위에 워크플로우 가이드 레이어

**테스트 3단계:**
1. Manual (Claude.ai에서 빠른 반복)
2. Scripted (Claude Code에서 반복 검증)
3. Programmatic (Skills API로 체계적 평가)

**5가지 설계 패턴:**
1. Sequential Workflow Orchestration (순차 워크플로우)
2. Multi-MCP Coordination (여러 MCP 서비스 연동)
3. Iterative Refinement (초안→품질검증→개선 루프)
4. Context-Aware Tool Selection (상황별 도구 선택 트리)
5. Domain-Specific Intelligence (도메인 전문 지식 내장)

### 기타 가이드
- DeepLearning.AI 코스: https://learn.deeplearning.ai/courses/agent-skills-with-anthropic/
- HuggingFace Upskill: 스킬 생성 + 평가 라이브러리
- SkillsBench: 86개 태스크, 11개 도메인 벤치마크

---

## 7. 호환 플랫폼

| 플랫폼 | 스킬 경로 |
|---|---|
| Claude Code | `.claude/skills/` 또는 플러그인 |
| Gemini CLI | `.gemini/skills/` |
| Cursor | `.cursor/skills/` |
| Codex CLI | `.codex/skills/` |
| VS Code / Copilot | `.github/skills/` |
| OpenCode | 내장 지원 |
| Amp | 내장 지원 |
| Roo Code | 내장 지원 |
| Mistral Vibe | 내장 지원 |
| Manus | 내장 지원 |
| **OpenClaw** | ClawHub 통해 설치 |

---

## 8. 설치 방법

```bash
# npx skills (Vercel)
npx skills add coreyhaines31/marketingskills

# Claude Code 플러그인
claude plugin marketplace add phuryn/pm-skills

# SkillKit (범용)
npx skillkit install coreyhaines31/marketingskills

# ClawHub (OpenClaw)
clawhub install <skill-name>

# 수동 복사
git clone https://github.com/xxx/skills.git
cp -r skills/* .agents/skills/
```

---

## 9. 보안 주의사항

- 스킬은 프롬프트 인젝션, 툴 포이즈닝, 악성 페이로드 포함 가능
- 설치 전 반드시 코드 리뷰
- 추천 스캐너:
  - Snyk Agent Scan: https://github.com/snyk/agent-scan
  - Agent Trust Hub: https://ai.gendigital.com/agent-trust-hub
  - SkillCheck: https://github.com/agentigy/skillcheck

---

## 10. _y Holdings 적용 포인트

| 영역 | 추천 스킬 | 이유 |
|---|---|---|
| **MyBidWise 마케팅** | marketingskills (page-cro, seo-audit, ai-seo, email-sequence) | SEO/CRO 즉시 적용 가능 |
| **제품 전략** | pm-skills (strategy, discover, write-prd) | 신제품 기획 프레임워크 |
| **인프라** | supabase, vercel, cloudflare 공식 스킬 | 이미 쓰는 스택과 일치 |
| **보안** | Trail of Bits 스킬 | 코드 리뷰 자동화 |
| **소셜** | Typefully 스킬 | X/LinkedIn 콘텐츠 자동화 |
| **커스텀 스킬 제작** | Anthropic skill-creator + 가이드 PDF | _y 에이전트 전용 스킬 패키지 |

---

## 참고 링크 모음

- Agent Skills 스펙: https://agentskills.io
- Anthropic 공식 가이드 PDF: https://resources.anthropic.com/hubfs/The-Complete-Guide-to-Building-Skill-for-Claude.pdf
- VoltAgent Awesome List: https://github.com/VoltAgent/awesome-agent-skills
- Skillmatic Awesome List: https://github.com/skillmatic-ai/awesome-agent-skills
- PM Skills: https://github.com/phuryn/pm-skills
- Marketing Skills: https://github.com/coreyhaines31/marketingskills
- SkillsMP: https://skillsmp.com
- ClawHub: https://clawhub.ai
