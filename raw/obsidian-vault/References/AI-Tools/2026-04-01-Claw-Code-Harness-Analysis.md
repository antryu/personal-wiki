# Claw Code (instructkr) — Clean-Room Agent Harness

**Date:** 2026-04-01
**GitHub:** https://github.com/instructkr/claw-code
**Size:** 13MB (66 Python files)
**Stars:** 50K (fastest repo to 50K in 2 hours!)
**Author:** Sigrid Jin (@instructkr)
**Tags:** #agent-harness #claude-code #clean-room #orchestration #rust

## Overview

**Claw Code = Clean-room Python rewrite of Claude Code's agent harness**

**NOT a leak archive — architectural patterns reimplemented from scratch**

**Key Differentiators:**
- ✅ Legal (clean-room, no copied code)
- ✅ Python (readable, hackable)
- ✅ Active development (Rust port in progress)
- ✅ Harness engineering focus (tools, orchestration, context)
- ✅ Community-driven (50K stars, active PRs)

---

## Backstory

**March 31, 2026, 4 AM:**
- Claude Code source leaked via npm source map
- Sigrid Jin woke up to notifications
- Built clean-room Python rewrite in hours using oh-my-codex (OmX)
- Published before sunrise
- Hit 50K stars in 2 hours (GitHub record)

**oh-my-codex (OmX) Workflow:**
- `$team` mode: Parallel code review
- `$ralph` mode: Persistent execution + architect verification
- End-to-end orchestration by @bellman_ych
- No TypeScript source copied

**Wall Street Journal Feature (March 21, 2026):**
> "AI startup worker Sigrid Jin, who attended the Seoul dinner, single-handedly used 25 billion of Claude Code tokens last year."
>
> "Jin flew to San Francisco in February for Claude Code's first birthday party, where attendees waited in line to compare notes with Cherny."

---

## Repository Structure

```
claw-code/
├── src/                      # Python harness (66 files)
│   ├── Tool.py               # Tool definitions
│   ├── context.py            # Context management
│   ├── models.py             # Data models
│   ├── task.py               # Task abstraction
│   ├── coordinator/          # Agent coordination
│   ├── assistant/            # Assistant logic
│   ├── tools/                # Built-in tools
│   ├── plugins/              # Plugin system
│   ├── hooks/                # Hook system
│   ├── skills/               # Skills registry
│   ├── services/             # Service layer
│   ├── cli/                  # CLI interface
│   ├── server/               # Server runtime
│   ├── bridge/               # Tool bridge
│   ├── voice/                # Voice integration
│   └── ...
├── rust/                     # Rust port (in progress)
│   ├── crates/
│   ├── Cargo.toml
│   └── README.md
├── tests/                    # Test suite
├── assets/                   # Images, docs
├── PARITY.md                 # Feature parity analysis
└── README.md
```

---

## Core Architecture

### 1. Tool System

**Tool Definition:**
```python
# src/Tool.py
from dataclasses import dataclass

@dataclass(frozen=True)
class ToolDefinition:
    name: str
    purpose: str

DEFAULT_TOOLS = (
    ToolDefinition('port_manifest', 'Summarize the active Python workspace'),
    ToolDefinition('query_engine', 'Render a Python-first porting summary'),
)
```

**Pattern:**
- Immutable tool definitions
- Name + purpose (no implementation in definition)
- Execution registry separate (dependency injection)

---

### 2. Context Management

**Context Model:**
```python
# src/context.py
from dataclasses import dataclass
from pathlib import Path

@dataclass(frozen=True)
class PortContext:
    source_root: Path
    tests_root: Path
    assets_root: Path
    archive_root: Path
    python_file_count: int
    test_file_count: int
    asset_file_count: int
    archive_available: bool

def build_port_context(base: Path | None = None) -> PortContext:
    root = base or Path(__file__).resolve().parent.parent
    source_root = root / 'src'
    # ... (path resolution)
    return PortContext(
        source_root=source_root,
        python_file_count=sum(1 for path in source_root.rglob('*.py') if path.is_file()),
        # ...
    )
```

**Pattern:**
- Immutable context snapshots
- Path-based workspace structure
- Lazy evaluation (builder pattern)
- File counting for stats

**_y Application:**
- Agent context = workspace state + memory + recent directives
- Immutable snapshots for reproducibility
- Stats tracking (file counts → agent metrics)

---

### 3. Agent Models

**Data Models:**
```python
# src/models.py
from dataclasses import dataclass, field

@dataclass(frozen=True)
class Subsystem:
    name: str
    path: str
    file_count: int
    notes: str

@dataclass(frozen=True)
class PortingModule:
    name: str
    responsibility: str
    source_hint: str
    status: str = 'planned'

@dataclass
class PortingBacklog:
    title: str
    modules: list[PortingModule] = field(default_factory=list)
    
    def summary_lines(self) -> list[str]:
        return [
            f'- {module.name} [{module.status}] — {module.responsibility}'
            for module in self.modules
        ]
```

**Pattern:**
- Domain models as dataclasses
- Frozen (immutable) for core types
- Mutable for aggregates (PortingBacklog)
- Rich behavior (summary_lines)

**_y Application:**
```typescript
// Claw Code pattern → _y implementation
interface AgentTask {
  name: string;
  responsibility: string;
  priority: 'P0' | 'P1' | 'P2';
  status: 'planned' | 'in-progress' | 'completed';
  assignedAgent: string;
}

interface DirectiveBacklog {
  title: string;
  tasks: AgentTask[];
  summaryLines(): string[];
}
```

---

### 4. Usage Tracking

**Token Counting:**
```python
@dataclass(frozen=True)
class UsageSummary:
    input_tokens: int = 0
    output_tokens: int = 0
    
    def add_turn(self, prompt: str, output: str) -> 'UsageSummary':
        return UsageSummary(
            input_tokens=self.input_tokens + len(prompt.split()),
            output_tokens=self.output_tokens + len(output.split()),
        )
```

**Pattern:**
- Immutable usage tracking
- Functional updates (returns new instance)
- Simple word-based token estimation

**_y Application:**
- Track per-agent token usage
- Cost attribution (Counsely vs Buzzy)
- Telemetry dashboard (Claude Code Leak insight #4)

---

### 5. Permission System

**Permission Denial:**
```python
@dataclass(frozen=True)
class PermissionDenial:
    tool_name: str
    reason: str
```

**Pattern:**
- Explicit permission model
- Tool-level authorization
- Reason tracking for audit

**_y Application:**
- Agent permission tiers (Counsely can approve, Buzzy can't)
- Tool whitelist per agent
- Audit log (who tried what)

---

## Directory Deep Dive

### Core Modules

**1. `src/coordinator/`**
- Agent task coordination
- Multi-agent orchestration
- Task distribution logic

**2. `src/assistant/`**
- Assistant runtime
- Message loop
- Response generation

**3. `src/tools/`**
- Built-in tool implementations
- Tool execution registry
- Tool result handling

**4. `src/plugins/`**
- Plugin discovery
- Plugin loading
- Plugin lifecycle

**5. `src/hooks/`**
- Event hooks
- Pre/post execution hooks
- Hook chaining

**6. `src/skills/`**
- Skill definitions
- Skill registry
- Skill execution

**7. `src/services/`**
- External service integrations
- API clients
- Service lifecycle

**8. `src/bridge/`**
- Tool bridge layer
- Protocol translation
- IPC mechanisms

**9. `src/cli/`**
- Command-line interface
- Argument parsing
- Interactive REPL

**10. `src/server/`**
- Server runtime
- HTTP/WebSocket handlers
- Long-running process management

---

## Rust Port (In Progress)

**Status:** `dev/rust` branch, merge to main imminent

**Goals:**
- Faster performance
- Memory safety
- Production-grade runtime

**Current State (PARITY.md):**

**✅ Implemented:**
- Anthropic API/OAuth basics
- Local conversation/session state
- Core tool loop
- MCP stdio/bootstrap support
- CLAUDE.md discovery
- Small built-in tool set

**❌ Missing:**
- Plugins (effectively absent)
- Hooks (parsed but not executed)
- CLI breadth (much narrower)
- Skills (local-file only, no registry)
- Assistant orchestration (lacks hook-aware logic)
- Most services beyond API/OAuth/MCP

**Timeline:** Expected main merge today (2026-04-01)

---

## Comparison: Claw Code vs Claw Dev

| Feature | Claw Code (instructkr) | Claw Dev (Leonxlnx) |
|---------|----------------------|---------------------|
| **Focus** | Agent harness architecture | Provider proxy |
| **Language** | Python → Rust | TypeScript |
| **Stars** | 50K (2 hours) | ~hundreds |
| **Legal** | Clean-room ✅ | Wraps leaked npm ⚠️ |
| **Scope** | Full orchestration | Provider abstraction |
| **Use Case** | Agent engine core | Multi-LLM switching |
| **_y Relevance** | Architecture patterns | Provider integration |

**Conclusion:** Both are useful, different layers
- Claw Code = orchestration layer (30 agents coordination)
- Claw Dev = provider layer (Ollama + Anthropic)

---

## _y Holdings Application

### 1. Agent Orchestration Patterns

**Claw Code Pattern:**
```python
# Coordinator distributes tasks
coordinator.assign_task(
    task=PortingModule(
        name='tool-binding',
        responsibility='Implement web_search tool',
        source_hint='src/tools/search.py'
    ),
    agent='Searchy'
)

# Agent executes with context
context = build_port_context()
result = agent.execute(task, context)
```

**_y Implementation:**
```typescript
// src/lib/coordinator.ts
export class DirectiveCoordinator {
  async distributeDirective(directive: string) {
    // 1. Parse directive intent
    const intent = await this.parseIntent(directive);
    
    // 2. Select agents (hierarchy-based)
    const agents = this.selectAgents(intent);
    
    // 3. Assign tasks
    const tasks = agents.map(agent => ({
      agent: agent.name,
      task: this.buildTask(intent, agent),
      context: this.buildContext(agent)
    }));
    
    // 4. Execute in parallel or sequence
    const results = await this.executeTasks(tasks);
    
    // 5. Aggregate results (Byzantine consensus)
    return this.aggregateResults(results);
  }
}
```

---

### 2. Context Management

**Claw Code Pattern:**
```python
@dataclass(frozen=True)
class PortContext:
    source_root: Path
    python_file_count: int
    # ... immutable snapshot

context = build_port_context()
agent.execute(task, context)  # Pure function
```

**_y Implementation:**
```typescript
// src/lib/agent-context.ts
export interface AgentContext {
  readonly workspaceRoot: string;
  readonly memoryFiles: string[];
  readonly recentDirectives: Directive[];
  readonly agentSkills: Skill[];
  readonly availableTools: Tool[];
  readonly timestamp: number;
}

export function buildAgentContext(agent: Agent): AgentContext {
  return {
    workspaceRoot: process.cwd(),
    memoryFiles: listMemoryFiles(),
    recentDirectives: getRecentDirectives(agent, 10),
    agentSkills: agentSkills[agent.name],
    availableTools: filterToolsByPermission(agent),
    timestamp: Date.now()
  };
}
```

**Benefits:**
- Immutable snapshots → reproducible execution
- Context injection → testable agents
- Stats tracking → telemetry

---

### 3. Permission System

**Claw Code Pattern:**
```python
@dataclass(frozen=True)
class PermissionDenial:
    tool_name: str
    reason: str

def check_permission(agent, tool):
    if not agent.has_permission(tool):
        return PermissionDenial(
            tool_name=tool.name,
            reason='Agent tier insufficient'
        )
    return None
```

**_y Implementation:**
```typescript
// src/lib/permissions.ts
export interface PermissionCheck {
  allowed: boolean;
  reason?: string;
}

export function checkToolPermission(
  agent: Agent,
  tool: Tool
): PermissionCheck {
  // Tier-based permissions
  const tier = getAgentTier(agent.name);
  const requiredTier = tool.requiredTier;
  
  if (tier.level < requiredTier.level) {
    return {
      allowed: false,
      reason: `${agent.name} (${tier.name}) cannot use ${tool.name} (requires ${requiredTier.name})`
    };
  }
  
  // Whitelist check
  if (tool.whitelist && !tool.whitelist.includes(agent.name)) {
    return {
      allowed: false,
      reason: `${tool.name} not in ${agent.name} whitelist`
    };
  }
  
  return { allowed: true };
}
```

**Use Cases:**
- Counsely: All tools ✅
- Legaly: Law search tools only ✅
- Buzzy: Read-only tools ✅
- Watchy: Web fetch + RSS ✅

---

### 4. Task Backlog

**Claw Code Pattern:**
```python
@dataclass
class PortingBacklog:
    title: str
    modules: list[PortingModule] = field(default_factory=list)
    
    def summary_lines(self) -> list[str]:
        return [
            f'- {m.name} [{m.status}] — {m.responsibility}'
            for m in self.modules
        ]
```

**_y Implementation:**
```typescript
// src/lib/backlog.ts
export class DirectiveBacklog {
  constructor(
    public title: string,
    public tasks: AgentTask[] = []
  ) {}
  
  summaryLines(): string[] {
    return this.tasks.map(t =>
      `- ${t.name} [${t.status}] — ${t.responsibility} (@${t.assignedAgent})`
    );
  }
  
  progressReport(): string {
    const completed = this.tasks.filter(t => t.status === 'completed').length;
    const total = this.tasks.length;
    return `Progress: ${completed}/${total} (${Math.round(completed/total*100)}%)`;
  }
}
```

**Use Cases:**
- User directive → parsed into tasks
- Tasks assigned to agents
- Progress tracking in dashboard
- Completion notification

---

### 5. Usage Tracking

**Claw Code Pattern:**
```python
@dataclass(frozen=True)
class UsageSummary:
    input_tokens: int = 0
    output_tokens: int = 0
    
    def add_turn(self, prompt: str, output: str) -> 'UsageSummary':
        return UsageSummary(
            input_tokens=self.input_tokens + len(prompt.split()),
            output_tokens=self.output_tokens + len(output.split()),
        )
```

**_y Implementation:**
```typescript
// src/lib/telemetry.ts
export interface AgentUsage {
  readonly agentName: string;
  readonly inputTokens: number;
  readonly outputTokens: number;
  readonly provider: 'anthropic' | 'ollama' | 'openai';
  readonly cost: number;
}

export class UsageTracker {
  private usage: Map<string, AgentUsage> = new Map();
  
  recordTurn(
    agent: string,
    prompt: string,
    output: string,
    provider: string
  ): void {
    const current = this.usage.get(agent) || {
      agentName: agent,
      inputTokens: 0,
      outputTokens: 0,
      provider,
      cost: 0
    };
    
    const inputTokens = estimateTokens(prompt);
    const outputTokens = estimateTokens(output);
    const cost = calculateCost(provider, inputTokens, outputTokens);
    
    this.usage.set(agent, {
      ...current,
      inputTokens: current.inputTokens + inputTokens,
      outputTokens: current.outputTokens + outputTokens,
      cost: current.cost + cost
    });
  }
  
  getAgentUsage(agent: string): AgentUsage | undefined {
    return this.usage.get(agent);
  }
  
  getTotalCost(): number {
    return Array.from(this.usage.values())
      .reduce((sum, u) => sum + u.cost, 0);
  }
}
```

**Dashboard Display:**
```
Agent Usage (Last 24h):
- Counsely: 10K in, 5K out, $0.15 (Anthropic)
- Legaly: 8K in, 4K out, $0.12 (Anthropic)
- Buzzy: 50K in, 30K out, $0.00 (Ollama)
Total: $0.27
```

---

## Implementation Plan for _y

### Phase 1: Core Harness (This Week)

**Goal:** Implement coordinator + context + permissions

**Files to Create:**
```
src/lib/
├── coordinator.ts           # DirectiveCoordinator
├── agent-context.ts         # AgentContext builder
├── permissions.ts           # Permission checks
├── backlog.ts              # DirectiveBacklog
└── telemetry.ts            # UsageTracker
```

**Tasks:**
- [ ] DirectiveCoordinator.distributeDirective()
- [ ] buildAgentContext() with memory injection
- [ ] checkToolPermission() tier-based
- [ ] DirectiveBacklog task tracking
- [ ] UsageTracker per-agent telemetry

---

### Phase 2: Tool System (Next Week)

**Goal:** Tool definitions + execution registry

**Pattern:**
```typescript
// src/lib/tools/definitions.ts
export interface ToolDefinition {
  name: string;
  purpose: string;
  requiredTier: AgentTier;
  execute: (params: unknown) => Promise<unknown>;
}

export const tools: ToolDefinition[] = [
  {
    name: 'web_search',
    purpose: 'Search the web via Brave API',
    requiredTier: { name: 'tier2', level: 2 },
    execute: async (params: { query: string }) => {
      return brave_search(params.query);
    }
  },
  // ...
];
```

**Tasks:**
- [ ] Define 10 core tools (web_search, file_read, db_query, etc.)
- [ ] Tool execution registry
- [ ] Permission checks before execution
- [ ] Result handling + error recovery

---

### Phase 3: Multi-Agent Orchestration (Month 2)

**Goal:** Hierarchical execution + Byzantine consensus

**Pattern:**
```typescript
// src/lib/execution.ts
export class HierarchicalExecutor {
  async executeDirective(directive: string): Promise<Result> {
    // 1. Staff tier (bottom-up)
    const staffResults = await this.executeStaffTier(directive);
    
    // 2. Manager tier (aggregate staff)
    const managerResults = await this.executeManagerTier(
      directive,
      staffResults
    );
    
    // 3. Director tier (challenge managers)
    const directorResults = await this.executeDirectorTier(
      directive,
      managerResults
    );
    
    // 4. C-Suite tier (final decision)
    return await this.executeCsuiteTier(
      directive,
      directorResults
    );
  }
}
```

**Tasks:**
- [ ] Hierarchical execution pipeline
- [ ] Byzantine consensus algorithm
- [ ] Result aggregation
- [ ] Counsely final review

---

## Key Learnings

### 1. Clean-Room Works
- No copied code, pure architectural patterns
- Legal safety (Anthropic can't sue)
- Community trust (50K stars validate approach)

### 2. Immutable Data Structures
- Frozen dataclasses = reproducible execution
- Functional updates = no side effects
- Easier debugging (snapshot state)

### 3. Separation of Concerns
- Tool definitions vs execution registry
- Context building vs agent logic
- Permission checks vs tool calls

### 4. Rich Domain Models
- Not just data bags, behavior included
- summary_lines(), progressReport() methods
- Encapsulation + cohesion

### 5. Telemetry from Day 1
- Usage tracking built-in (UsageSummary)
- Cost attribution (Claude Code Leak insight)
- Performance metrics (token counts)

---

## Risks & Considerations

### Legal
- ✅ Clean-room = safe to study/adapt
- ✅ No TypeScript code copied
- ✅ Architectural patterns = not copyrightable
- ⚠️ Watch for Anthropic's reaction (unlikely action)

### Technical
- ⚠️ Python version is WIP (not feature-complete)
- ✅ Rust port coming (production-grade)
- ⚠️ Rapid evolution (main branch changes daily)
- ✅ Active community (PRs, issues)

### _y Specific
- ✅ Patterns applicable to TypeScript
- ✅ Coordinator pattern = hierarchy-ready
- ✅ Permission model = tier allocation
- ⚠️ Need to adapt (not copy-paste)

---

## Action Items

### P0 (Today/Tomorrow)
- [ ] Study `src/coordinator/` code (agent distribution)
- [ ] Study `src/tools/` code (execution registry)
- [ ] Study `src/hooks/` code (event system)
- [ ] Map Claw Code patterns → _y architecture

### P1 (This Week)
- [ ] Implement DirectiveCoordinator
- [ ] Implement AgentContext builder
- [ ] Implement Permission system
- [ ] Implement UsageTracker

### P2 (Next Week)
- [ ] Tool definition system
- [ ] Tool execution registry
- [ ] Hierarchical executor
- [ ] Byzantine consensus

### P3 (Month 2)
- [ ] Monitor Rust port release
- [ ] Re-analyze Rust codebase
- [ ] Compare Python vs Rust patterns
- [ ] Adopt Rust learnings if applicable

---

## Files to Study (Priority Order)

**P0 (Core Architecture):**
1. `src/coordinator/__init__.py` — Agent task distribution
2. `src/tools/` — Tool execution patterns
3. `src/models.py` — Domain model design
4. `src/context.py` — Context management

**P1 (Orchestration):**
5. `src/assistant/` — Assistant runtime
6. `src/hooks/` — Event hook system
7. `src/plugins/` — Plugin architecture
8. `src/bridge/` — Tool bridge layer

**P2 (Services):**
9. `src/services/` — External integrations
10. `src/cli/` — CLI interface patterns
11. `src/server/` — Server runtime
12. `rust/crates/` — Rust port (when released)

---

## Related

- [[Claw Dev Analysis]] — Provider proxy layer (complementary)
- [[Claude Code Leak Analysis]] — Original leak insights
- [[_y Holdings Operating System]] — Agent orchestration design
- [[TurboQuant PyTorch]] — Memory optimization (orthogonal)

---

## Meta: Why This Matters

**For _y Holdings:**
- Coordinator pattern = 30-agent orchestration blueprint
- Permission system = tier-based tool access
- Context management = self-healing memory foundation
- Telemetry = agent performance dashboard

**For Andrew:**
- Clean-room = legal reference implementation
- Python = readable, hackable patterns
- Active community = ongoing improvements
- Rust port = production-grade evolution

**Best Practice:**
> "Study the architecture. Adapt the patterns. Build our version. Never copy code."

**Community Validation:**
- 50K stars in 2 hours = unprecedented
- WSJ feature = credibility
- Clean-room approach = industry standard

---

*Downloaded: 2026-04-01, M4 Max `~/Thairon/claw-code/`*
*License: Check repo (likely MIT or similar)*
*Purpose: Agent orchestration patterns for _y Holdings architecture*
*Next: Study coordinator + tools, implement _y DirectiveCoordinator*
