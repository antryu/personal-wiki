# Best of Hermes + OpenClaw for Y-Tower: 3 Integration Options

> Created: 2026-04-16
> Related: [[2026-04-16-Hermes-vs-OpenClaw]]
> Purpose: Concrete implementation proposals for y-tower enhancement

---

## Current State (What Y-Tower Already Has)

### From Hermes (Self-Evolution)
| Feature | Status | File |
|---|---|---|
| Skill XP growth per agent | DONE | `self-evolution.ts:83-160` |
| Prompt evolution on failure | DONE | `self-evolution.ts:200-290` |
| Background meta-review (every 5 runs) | DONE | `self-evolution.ts:330-430` |
| Memory nudge (every 5 chat turns) | DONE | `self-evolution.ts:643-655` |
| Skill nudge (every 10 chat turns) | DONE | `self-evolution.ts:658-670` |
| Skill extraction from reply | DONE | `self-evolution.ts:673-705` |
| Skill injection to context | DONE | `self-evolution.ts:708-723` |
| SDART quality checklist | DONE | `skills.ts:1-53` |

### From OpenClaw (Gateway)
| Feature | Status | File |
|---|---|---|
| Discord/Telegram gateway | DONE | M4 OpenClaw instance |
| Multi-model routing | DONE | `llm-router.ts`, `model-router.ts` |
| Tool system (40+ tools) | DONE | `agent-tools.ts` (1,430L) |
| Session management | DONE | SQLite + Supabase |

### What's MISSING
| Feature | Source | Impact |
|---|---|---|
| GEPA constraint gates | Hermes | Prompt evolution is unchecked |
| Autonomous skill from chat | Hermes | Skills only from EPARE, not chat |
| Cross-session memory search | Hermes | No FTS, just recent-N lookup |
| Model failover | OpenClaw | Single model, no retry |
| Trajectory logging | Hermes | No training data pipeline |
| Honcho user modeling | Hermes | No user preference learning |

---

## Option 1: GEPA Constraint Gates + Chat Skill Auto-Creation

**Source**: Hermes self-evolution repo
**Impact**: HIGH (prevents bad prompt evolution + enables chat-based learning)
**Effort**: ~150 lines across 2 files

### What It Does

1. **5 Constraint Gates** for `evolveHarnessPrompts()`:
   - Gate 1: Evolved prompt must be < 2000 tokens (size limit)
   - Gate 2: Must contain all required EPARE phase keywords
   - Gate 3: Quality score delta > 0 (improvement check via LLM)
   - Gate 4: Semantic similarity > 0.7 to original (no drift)
   - Gate 5: Log + review (no silent evolution)

2. **Chat Skill Auto-Creation**: When a chat conversation involves 3+ turns on the same topic with actionable steps, auto-create a skill without waiting for EPARE

### Changes

```
self-evolution.ts  — Add constraintGates() function (5 checks)
                   — Modify evolveHarnessPrompts() to use gates
                   — Add chatSkillDetector() for auto-creation
chat/route.ts      — Call chatSkillDetector() in post-reply hook
```

### Why This Is Valuable

Currently `evolveHarnessPrompts()` (line 200-290) rewrites prompts with zero validation. A bad LLM output could degrade all future runs. GEPA's gates prevent this.

Chat skill auto-creation means agents learn from daily conversations, not just formal EPARE workflows. Hermes's biggest strength is that EVERY interaction makes it smarter.

---

## Option 2: Model Failover + Trajectory Logging

**Source**: OpenClaw (failover) + Hermes (trajectories)
**Impact**: MEDIUM-HIGH (reliability + future training data)
**Effort**: ~100 lines across 2 files

### What It Does

1. **Model Failover Chain** in `llm-router.ts`:
   ```
   Primary (Anthropic Sonnet/Haiku)
     -> Fallback 1 (Ollama qwen3:32b on M4)
     -> Fallback 2 (Gemini Flash)
     -> Error response
   ```
   - Auto-retry on timeout (30s) or 5xx error
   - Log failover events to perf_logs
   - Configurable per agent (counsely gets longer retry chain)

2. **Trajectory Logging** for future fine-tuning:
   - Save full (system_prompt, user_msg, agent_reply, score) to `trajectories` table
   - Only log quality conversations (non-trivial, successful)
   - Export script for DSPy/MLX training pipeline
   - Already have `extract-training-data.ts` — extend it

### Changes

```
llm-router.ts      — Add failover logic to routeFull()
                   — Add trajectory logging (non-blocking)
model-router.ts    — Add fallback model config per agent
Supabase           — CREATE TABLE trajectories (agent_id, system_prompt, user_msg, reply, score, model, created_at)
```

### Why This Is Valuable

OpenClaw's #1 production lesson: LLM calls fail. Anthropic has rate limits, Ollama has OOM crashes. Without failover, y-tower goes silent.

Hermes's trajectory approach means every good conversation becomes future training data. Combined with the existing DSPy/MLX pipeline (`dspy-optimize.py`, `autoresearch-finetune.py`), this creates a continuous improvement flywheel:

```
Chat -> Trajectories -> DSPy Optimize -> Better Prompts -> Better Chat -> ...
```

---

## Option 3: Cross-Session Memory Search (FTS5)

**Source**: Hermes memory system
**Impact**: HIGH (transforms memory from recent-N to full-history searchable)
**Effort**: ~120 lines across 3 files

### What It Does

1. **Full-Text Search** on local SQLite (`ytower.db`):
   - FTS5 virtual table indexing all conversations + agent_memory
   - BM25 ranking (relevance scoring)
   - Agent-scoped search (each agent searches own history)

2. **LLM Summarization** for context injection:
   - When relevant past conversations found, LLM summarizes them
   - Injected as "## Past Context" in buildSystemPrompt
   - Only triggered for complex queries (length > 50 chars)

3. **Cross-Agent Knowledge**:
   - C-Suite agents can search ALL agents' memories
   - "Org learnings" block becomes actually searchable, not just recent top-10

### Changes

```
local-db.ts        — Add FTS5 table creation + search function
chat/route.ts      — Add memory search in buildSystemPrompt()
                   — Inject "Past Context" block for relevant hits
self-evolution.ts  — Index skills/memories into FTS5 on save
```

### Why This Is Valuable

Currently y-tower memory = "top 10 most recent memories from Supabase". This means an agent forgets everything beyond the last 10 interactions. Hermes's FTS5 approach means an agent with 1000 conversations can still recall relevant information from conversation #3.

Example: If counsely discussed a partnership strategy 3 months ago, and the user asks about it today, current system returns nothing. With FTS5, the relevant conversation surfaces automatically.

---

## Comparison Matrix

| Criteria | Option 1 (GEPA Gates) | Option 2 (Failover) | Option 3 (FTS5 Memory) |
|---|---|---|---|
| **Impact** | HIGH | MEDIUM-HIGH | HIGH |
| **Effort** | ~150 lines | ~100 lines | ~120 lines |
| **Risk** | LOW | LOW | MEDIUM |
| **Dependency** | None | Supabase table | SQLite FTS5 |
| **Immediate Value** | Prevents prompt degradation | Prevents downtime | Better conversations |
| **Long-term Value** | Reliable self-evolution | Training data pipeline | Institutional memory |
| **y-tower Unique** | Extends existing Layer 2 | Extends existing router | Extends existing memory |

---

## Recommended Priority

### Phase 1 (This Week): Option 1 — GEPA Gates + Chat Skills
- Highest impact on self-evolution quality
- Prevents potential prompt degradation (safety-first)
- Enables learning from daily chat (biggest untapped data source)

### Phase 2 (Next Week): Option 2 — Failover + Trajectories
- Production reliability
- Training data pipeline for continuous improvement

### Phase 3 (Week After): Option 3 — FTS5 Memory
- Transforms agent intelligence
- Requires more testing (FTS5 performance with large datasets)

---

## Combined Architecture (All 3 Options Implemented)

```
User Message
  |
  +-> Rate Limiter -> Dupe Blocker -> Junk Filter
  |
  +-> FTS5 Memory Search (Option 3)
  |     -> Relevant past conversations injected
  |
  +-> buildSystemPrompt (11 blocks + past context)
  |
  +-> LLM Router with Failover (Option 2)
  |     Primary -> Fallback 1 -> Fallback 2
  |
  +-> Agent Response
  |
  +-> Post-Processing:
        +-> Memory Extraction
        +-> Skill Detection (Option 1: auto from chat)
        +-> Trajectory Logging (Option 2)
        +-> Self-Evolution Nudges
        +-> GEPA Gates on prompt changes (Option 1)
```

This architecture combines Hermes's **learning depth** with OpenClaw's **production reliability**, applied to y-tower's existing **30-agent organizational structure**.
