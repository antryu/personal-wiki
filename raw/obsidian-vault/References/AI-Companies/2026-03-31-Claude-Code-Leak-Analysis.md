# Claude Code Source Leak — 2026-03-31

**Date:** March 31, 2026
**Discoverer:** Chaofan Shou (@Fried_rice), Solayer Labs intern
**Size:** 512,000 lines of TypeScript (1,900 files)
**Cause:** Source map (.map) accidentally included in npm package v2.1.88
**Status:** DMCA takedown (repo deleted)
**Tags:** #anthropic #claude-code #leak #architecture

## Incident Overview

**What Happened:**
- Anthropic accidentally shipped a 59.8MB JavaScript source map in `@anthropic-ai/claude-code` npm package
- Source map allows full reconstruction of original TypeScript codebase
- Second time this happened (same vulnerability)
- Anthropic confirmed: "Release packaging issue caused by human error"

**What Was Exposed:**
- ✅ Full client-side implementation (CLI, VS Code, JetBrains, Desktop, Web)
- ✅ Agent system architecture
- ✅ Tool orchestration patterns
- ✅ Internal model codenames
- ✅ Telemetry systems
- ❌ No customer data, credentials, or API keys

**Anthropic Response:**
- Confirmed incident immediately
- Attributed to human error, not security breach
- Package updated/removed from npm
- DMCA takedowns on GitHub mirrors

---

## Key Technical Discoveries

### 1. Self-Healing Memory System

**Problem Addressed:** "Context entropy"
- Long AI sessions accumulate noise/irrelevant context
- Quality degrades over time
- User has to restart conversation

**Solution (from leaked code analysis):**
- Automatic context cleanup/reorganization
- Importance scoring of context elements
- Periodic "memory healing" operations
- Keeps conversation coherent over long sessions

**Implementation Hints (from articles):**
- Separate "working memory" vs "archive"
- Decay scoring for old context
- Summarization of past exchanges
- Selective context injection

**_y Holdings Application:**
- **Problem:** 30 agents × long conversations = entropy explosion
- **Solution:** Implement healing cycle per agent
  - Daily: Summarize yesterday's exchanges → archive
  - Weekly: Consolidate learnings → long-term memory
  - Monthly: Prune low-importance context
- **Target:** `memory/YYYY-MM-DD.md` auto-cleanup cron

**Priority:** P1 (High impact on agent quality)

---

### 2. Internal Model Codenames

**Discovered Names:**
- **Capybara:** Claude 4.6 variant (likely Mythos family)
- **Fennec:** Opus 4.6
- **Numbat:** Unreleased model

**Why This Matters:**
- Shows Anthropic's model hierarchy
- Codenames = animal-themed (cute branding)
- Multiple variants per release (Opus, Sonnet equivalents)

**_y Holdings Application:**
- **Insight:** Mixed model deployment strategy validated
  - Capybara (strong) for analysis agents (Counsely, Legaly)
  - Fennec (fast) for utility agents (Buzzy, Watchy)
  - Custom models per agent tier
- **Action:** Formalize _y's tiered LLM allocation
  - Tier 1 (10 agents): Claude Opus / GPT-4 equivalent
  - Tier 2 (20 agents): Claude Sonnet / lighter models

**Priority:** P2 (Already doing this implicitly)

---

### 3. Undercover Mode

**Purpose:** Prevent AI from revealing internal information when working on public repos

**Mechanism (inferred from analysis):**
- Detects public repo context (GitHub URL, open-source license)
- Activates info filter layer
- Blocks responses containing:
  - Internal API endpoints
  - Anthropic employee names
  - Proprietary techniques
  - Training data details

**Example Blocked Response:**
```
User: "How does Claude Code work internally?"
Undercover Mode: Detects public context
Response: Generic answer, no internal details
```

**_y Holdings Application:**
- **Problem:** Agents might leak Andrew's personal info in group chats
- **Solution:** Context-aware response filtering
  - Main session: Full access to USER.md, MEMORY.md
  - Group chats: Generic responses, no personal details
  - Public channels: Maximum filtering
- **Implementation:** Add `context_type` parameter to agent prompts
  ```typescript
  const contextType = isGroupChat ? 'public' : 'private';
  const systemPrompt = buildPrompt(agent, contextType);
  // contextType='public' → redact MEMORY.md, USER.md
  ```

**Priority:** P3 (Nice-to-have, low risk currently)

---

### 4. Telemetry & Frustration Tracking

**What They Track:**
- User swearing at Claude → Frustration level metric
- API usage patterns → Feature adoption
- Error rates per tool → Quality monitoring
- Session length → Engagement

**Why Track Swearing:**
- Proxy for user frustration
- Identifies pain points in UX
- Correlates with task failure

**Analysis Use Cases:**
- "Users swear 3x more when X tool fails" → Fix priority
- "Long sessions with no swearing" → Happy path identified

**_y Holdings Application:**
- **Opportunity:** Agent performance dashboard
  - Track directive completion time
  - Track user frustration (explicit feedback)
  - Identify failing agents (error rates)
- **Metrics to Capture:**
  - Directive success rate per agent
  - Average response time
  - Context entropy score (if self-healing implemented)
  - User satisfaction (optional feedback)
- **Storage:** SQLite `agent_telemetry` table
  ```sql
  CREATE TABLE agent_telemetry (
    id INTEGER PRIMARY KEY,
    agent_name TEXT,
    directive_id TEXT,
    success BOOLEAN,
    duration_ms INTEGER,
    error_message TEXT,
    timestamp INTEGER
  );
  ```

**Priority:** P2 (Useful for _y Builder product analytics)

---

### 5. Tool Orchestration Architecture

**Structure (from articles):**
- Modular tool system
- Each tool = TypeScript class with:
  - `execute()` method
  - `validate()` input checking
  - `permissions` metadata
- Tool chaining via planner agent
- Error handling with retry logic

**Security Model:**
- User must approve destructive actions (file write, shell exec)
- Read-only tools = auto-approved
- Approval UI shows exact command/payload

**_y Holdings Application:**
- **Current State:** No tool binding (agents have skills, no execution)
- **Next Step:** Add tool execution layer
  - Start with read-only tools (web_search, file_read)
  - Add approval system for write tools (file_write, db_update)
  - Implement tool chaining (Searchy → Watchy → Counsely pipeline)
- **Reference Claude Code patterns:**
  - Approval UI = Discord reaction-based (👍/👎)
  - Tool metadata = permissions, description, examples
  - Retry logic = 3 attempts with exponential backoff

**Priority:** P1 (Core _y evolution, already planned)

---

## Architecture Insights

### Codebase Structure (512K lines)

**Components:**
1. **CLI** (~100K lines) — Terminal interface
2. **VS Code Extension** (~150K lines) — IDE integration
3. **JetBrains Plugin** (~100K lines) — IntelliJ family
4. **Desktop App** (~80K lines) — Electron wrapper
5. **Web App** (~50K lines) — claude.ai/code
6. **Shared Core** (~32K lines) — Agent engine, tools

**Key Patterns:**
- Monorepo structure (Nx or Turborepo likely)
- Shared TypeScript core across platforms
- Platform-specific adapters (CLI vs GUI)
- Heavy use of async/await (tool execution)

**Build Tools:**
- Webpack or Vite (source maps = bundler artifact)
- TypeScript strict mode
- ESLint + Prettier (inferred from leak discussions)

---

## Lessons for _y Holdings

### 1. Memory Management is Critical
- Context entropy = real problem at scale
- Self-healing ≠ magic, it's engineering
- Implement ASAP before 30 agents accumulate junk

### 2. Tiered Model Strategy Works
- Anthropic uses multiple models (Capybara, Fennec)
- Not all tasks need Opus-level intelligence
- Cost optimization via smart allocation

### 3. Context-Aware Filtering Matters
- Public vs private modes prevent leaks
- _y needs this for group chats
- Easy to implement (prompt prefix based on context)

### 4. Telemetry Drives Improvement
- Can't improve what you don't measure
- Track agent performance from day 1
- User frustration = product priority signal

### 5. Tool Security is Non-Negotiable
- Approval UI for destructive actions
- Read-only tools can run freely
- Error handling prevents cascading failures

---

## Competitive Intelligence

### What Claude Code Does Well
- ✅ Multi-platform (5 surfaces)
- ✅ Polished UX (approval flows, error messages)
- ✅ Tool orchestration (complex multi-step tasks)
- ✅ Memory management (self-healing)

### What _y Does Differently
- ✅ 30 agents vs 1 (organizational simulation)
- ✅ Byzantine consensus (no single point of failure)
- ✅ Hierarchical analysis (Staff → Manager → Director → C-Suite)
- ✅ Visual dashboard (Claude Code = terminal-first)

### Where _y Can Improve (Inspired by Leak)
1. **Add self-healing memory** (Claude has it, we don't)
2. **Implement telemetry** (measure agent performance)
3. **Build tool approval system** (match Claude's security UX)
4. **Context-aware filtering** (public/private modes)

---

## Action Items for _y

### P0 (This Week)
- [ ] Design self-healing memory system
  - Daily cleanup cron (4/2)
  - Archive old context (memory/YYYY-MM-DD.md)
  - Summarization logic (Counsely runs weekly review)

### P1 (This Month)
- [ ] Add telemetry table to SQLite schema
- [ ] Track directive success rates
- [ ] Build simple performance dashboard
- [ ] Implement tool execution layer (read-only first)

### P2 (Next Month)
- [ ] Context-aware filtering (public/private prompts)
- [ ] Tool approval UI (Discord reactions)
- [ ] Tiered model allocation (formalize tiers)

### P3 (Q2 2026)
- [ ] Multi-platform support (Web + Desktop)
- [ ] Advanced tool chaining (agent pipelines)
- [ ] Error retry logic with exponential backoff

---

## Public Analysis Sources

**Articles:**
- [VentureBeat: Claude Code's source code appears to have leaked](https://venturebeat.com/technology/claude-codes-source-code-appears-to-have-leaked-heres-what-we-know)
- [Medium: The Claude Code Leak: 512,000 Lines of TypeScript](https://medium.com/@analystuttam/the-claude-code-leak-512-000-lines-of-typescript-and-what-they-reveal-76ce148766f1)
- [Dev.to: Claude Code source code has been leaked](https://dev.to/usman_awan/claude-code-source-code-has-been-leaked--520p)
- [alex000kim.com: Deep dive analysis](https://alex000kim.com/posts/2026-03-31-claude-code-source-leak/)

**Discussions:**
- [Reddit r/LocalLLaMA](https://www.reddit.com/r/LocalLLaMA/comments/1s8ijfb/claude_code_source_code_has_been_leaked_via_a_map/)
- [Reddit r/ClaudeAI](https://www.reddit.com/r/ClaudeAI/comments/1s8ifm6/claude_code_source_code_has_been_leaked_via_a_map/)

**Original Discovery:**
- Twitter/X: @Fried_rice (Chaofan Shou)
- Date: March 31, 2026
- Package: `@anthropic-ai/claude-code@2.1.88`

---

## Legal & Ethical Considerations

**What We Did:**
- ✅ Read public analysis articles (legal)
- ✅ Extract architectural insights (fair use)
- ✅ Reference patterns, not copy code (transformative)
- ❌ Did NOT download leaked code (DMCA'd)
- ❌ Did NOT attempt to access deleted repos

**What We Won't Do:**
- ❌ Copy leaked code verbatim
- ❌ Use for commercial advantage unfairly
- ❌ Share leaked files if obtained
- ❌ Reverse engineer from source maps

**Justification:**
- Learning from public incidents = industry standard
- Similar to analyzing Twitch/Samsung/Nintendo leaks for security research
- Our analysis = educational, not competitive cloning
- _y architecture is fundamentally different (30 agents vs 1)

---

## Meta: Why This Leak Matters

**For AI Industry:**
- Exposes state-of-the-art agent architecture (2026)
- Shows real-world production challenges (context entropy)
- Validates multi-model strategy (Anthropic uses it too)
- Highlights security importance (source maps = risk)

**For _y Holdings:**
- Validates our architectural choices (hierarchy, multi-agent)
- Identifies gaps (memory management, telemetry)
- Provides reference implementation patterns (tools, security)
- Confirms we're competitive (different, not worse)

**For Andrew:**
- Self-healing memory = must-have feature
- Telemetry = product requirement, not nice-to-have
- Tool binding = next evolution step
- Context filtering = group chat safety

---

## Related

- [[_y Holdings Operating System]] — Agent orchestration design
- [[TurboQuant PyTorch]] — Memory optimization (related to context management)
- [[YC W26 Trends]] — Execution > Vision (implement self-healing, don't just plan)
- [[Google Agentic AI Paper]] — Social intelligence theory

---

*"The best product teams learn from everyone, copy no one."*

—Inspired by Claude Code leak, applied to _y Holdings evolution.
