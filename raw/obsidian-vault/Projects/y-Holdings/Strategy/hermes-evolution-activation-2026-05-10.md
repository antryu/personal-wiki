# Hermes Evolution Layers 1-3 Activation — 2026-05-10

**Status**: DONE  
**Implementor**: Buildy (executor agent)  
**Approved by**: Chairman Andrew, 2026-05-10

---

## Summary

Activated dormant evolution layers 1 (Skill XP), 2 (Prompt Evolution), and 3 (Meta Review) in y-Tower :3000. Layer 4 (memory accumulation) was already live. The change makes the EPARE harness trigger automatically from chat and adds a Counsely Track C auto-evaluation after every non-trivial response.

---

## 4 Changes Implemented

### Change 1 — Auto-trigger harness from chat

**File**: `src/app/api/chat/route.ts`

After rate/dupe checks and before `directLLMCall`, the POST handler now:
1. Calls `findHarnessByTrigger(message)` on any message > 20 chars that lacks `[HARNESS_REQUEST]`
2. If matched, fire-and-forgets a `POST /api/directive` with `{ task, agentId, harnessId }`
3. Returns `auto_harness: { id, name }` in the JSON response for client visibility

**Acceptance**: Server logs confirm `[LLM Router] claude_code_cli/haiku (harness)` fires on "code review" keywords before the chat LLM response.

### Change 2 — Lower evolution thresholds

**File**: `src/engine/self-evolution.ts`

```
REVIEW_INTERVAL: 5 → 3   (background meta-review triggers faster)
FEEDBACK_PATTERN_THRESHOLD: 3 → 2  (prompt evolution triggers on 2 patterns vs 3)
```

Layers 2 and 3 now activate with less data, accelerating the learning loop.

### Change 3 — Track C auto-evaluation post-chat

**File**: `src/app/api/chat/route.ts`

After `displayReply` is produced, a fire-and-forget async block:
1. Calls Counsely LLM with a 2-criterion evaluation prompt (Substance + Decision-Readiness, 1-10 each)
2. Parses JSON response
3. POSTs to Supabase `chat_evaluations` table (total score, per-criterion, feedback text, agent_id)

**Acceptance**: Server logs show `[LLM Router] anthropic/claude-haiku-4-5-20251001 (memory-extract)` twice after each non-trivial chat — this is the Track C evaluation firing. Currently failing with auth error (pre-existing: no valid Anthropic API key per `no_anthropic_api_key.md`). Rows will populate once the LLM backend is operational.

### Change 4 — Evolution dashboard: evaluations_7d

**Files**: 
- `src/app/api/agents/evolution/route.ts` — added `fetchEvals7d()` function, `evaluations_7d` field per agent
- `src/app/agents/evolution/page.tsx` — added `evaluations_7d` to `AgentEvolution` type, renders in agent card ("평가 N건/주") and modal stats grid (3-col → 4-col)

---

## SQL — Andrew must run once in Supabase SQL editor

```sql
CREATE TABLE IF NOT EXISTS chat_evaluations (
  id BIGSERIAL PRIMARY KEY,
  agent_id TEXT NOT NULL,
  user_id TEXT,
  user_message TEXT,
  agent_reply TEXT,
  substance INT,
  readiness INT,
  total INT,
  feedback TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_chat_eval_agent ON chat_evaluations(agent_id, created_at DESC);
```

Until this table exists, Track C eval rows fail silently (best-effort, non-blocking).

---

## Verification

| Check | Result |
|---|---|
| `npm run build` on M1 | PASS — 02:29 build, all pages compiled |
| TypeScript errors in modified files | 0 new errors (pre-existing errors in AssetDashboard/GlassPanel unrelated) |
| Server restart on M1 `:3000` | PASS — healthy at startup |
| Auto-harness fires in logs | PASS — `[LLM Router] claude_code_cli/haiku (harness)` appears for code review keyword |
| Track C eval fires in logs | PASS — `memory-extract` calls appear post-chat |
| `:4000` / `:5001` untouched | PASS — only `:3000` restarted |

---

## Pre-existing LLM Issues (Not caused by this change)

- Claude CLI times out with code 143 on M1 (stdin pipe issue)
- Anthropic API key invalid (`authentication_error`) — consistent with `no_anthropic_api_key.md` policy

Both issues affect Track C eval persistence. Auto-harness correctly fires the directive endpoint regardless.

---

## Commit

Branch: `feat/8law-4engine-bench`  
Commit: `60f7eaf` — "feat: activate Hermes evolution layers 1-3 in y-Tower"  
4 files, 239 insertions, 15 deletions
