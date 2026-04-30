# Hermes Agent vs OpenClaw: Architecture Comparison

> Created: 2026-04-16
> Purpose: y-tower self-evolution engine design reference
> Sources: [Hermes Agent](https://github.com/NousResearch/hermes-agent), [Hermes Self-Evolution](https://github.com/NousResearch/hermes-agent-self-evolution), [OpenClaw](https://github.com/openclaw/openclaw)

---

## 1. Overview

| | Hermes Agent | OpenClaw |
|---|---|---|
| **Creator** | Nous Research | Otto Steinberger (now OpenAI) |
| **Purpose** | Self-improving AI agent | Local-first AI gateway |
| **Core Idea** | Agent that learns and grows with every task | Multi-channel orchestration hub |
| **License** | MIT | MIT |
| **GitHub Stars** | ~15K+ | ~196K+ |
| **Version** | v0.1.0 ~ v0.8.0 (Feb-Apr 2026) | v2026.4.6 |
| **Key Strength** | Self-evolution + Skill auto-creation | Multi-platform routing + Tool ecosystem |

---

## 2. Architecture

### Hermes Agent
```
User/Platform
    |
  Gateway (Telegram, Discord, Slack, WhatsApp, Signal)
    |
  Agent Core (reasoning loop)
    |
  +-- Skills (procedural memory, auto-created)
  +-- Tools (40+ built-in + MCP)
  +-- Memory (FTS5 search, user modeling via Honcho)
  +-- Terminal Backends (local, Docker, SSH, Daytona, Modal)
  +-- Self-Evolution (DSPy + GEPA, separate repo)
```

### OpenClaw
```
User/Platform
    |
  Gateway (port 18789, always-on control plane)
    |
  +-- Channels (20+ platforms: WhatsApp, Telegram, Discord, Slack...)
  +-- Nodes (macOS, iOS, Android clients via WebSocket)
  +-- Sessions (multi-agent routing, per-session sandboxing)
  +-- Skills (ClawHub registry, workspace skills)
  +-- Tools (browser, canvas, cron, shell, file...)
  +-- LLM Router (model failover, profile rotation)
```

### Key Difference
- **Hermes**: Agent-centric. The agent IS the product. Gateway is just an I/O layer.
- **OpenClaw**: Gateway-centric. The gateway IS the product. Agents are session configurations.

---

## 3. Self-Evolution (Hermes's Core Advantage)

### 3.1 Runtime Learning Loop
1. Agent completes a complex multi-step task
2. Autonomously creates a **skill** (procedural memory)
3. Skill stored in `~/.hermes/skills/` (agentskills.io standard)
4. Next time similar task appears, skill is reused
5. During reuse, skill self-improves via feedback

### 3.2 GEPA (Offline Evolution)
- **Genetic-Pareto Prompt Evolution**
- Reads execution traces to understand WHY things fail
- Proposes targeted mutations (not blind random changes)
- Uses DSPy for composable optimization
- Cost: ~$2-10 per optimization run (API calls only, no GPU)
- 5 constraint gates: test suite, size limits, caching, semantics, human PR review

### 3.3 Evolution Pipeline
```
Current Skill/Prompt
  -> Generate evaluation dataset
  -> GEPA produces candidate variants
  -> Execute & collect traces
  -> Evaluate against constraints
  -> Select best performer
  -> Submit as PR (human review required)
```

### OpenClaw's Approach: No Self-Evolution
- Skills are static (written by humans, shared via ClawHub)
- No skill auto-creation from task completion
- No prompt optimization loop
- No memory-driven learning
- Relies on LLM capability, not agent learning

---

## 4. Memory System

### Hermes (Multi-layer)
| Layer | Description |
|---|---|
| Conversation | Session-based with `/compress` command |
| Agent-curated | Selective persistence of important interactions |
| User profile | Honcho dialectic modeling (behavioral understanding) |
| Cross-session | FTS5 full-text search + LLM summarization |
| Skill memory | Procedural knowledge auto-extracted from tasks |

### OpenClaw (Session-based)
| Layer | Description |
|---|---|
| Session | Per-channel conversation state |
| Model cache | sessions.json caches model per channel |
| File-based | Skills/workspace persist as files |
| No learning | No memory extraction or accumulation |

### Key Difference
- **Hermes**: Memory IS the learning mechanism. Every conversation enriches future performance.
- **OpenClaw**: Memory is just session state. No cross-session intelligence growth.

---

## 5. Skill System

### Hermes Skills
- **Auto-created** after complex tasks (no human intervention)
- **Self-improving** during use (feedback loop)
- **Stored**: `~/.hermes/skills/` (portable standard)
- **Invoked**: Slash commands (`/<skill-name>`)
- **Evolved**: GEPA optimizes offline

### OpenClaw Skills
- **Human-authored** or downloaded from ClawHub
- **Static** (no self-improvement)
- **Stored**: `~/.openclaw/workspace/skills/`
- **Invoked**: Slash commands
- **Managed**: ClawHub registry (bundled/managed/workspace tiers)
- **Security risk**: 12-20% of ClawHub skills found malicious

### Key Difference
- **Hermes**: Skills are a LIVING library that grows automatically.
- **OpenClaw**: Skills are a STATIC catalog you manually curate.

---

## 6. Tool & Platform Integration

### Hermes
- 40+ built-in tools
- MCP (Model Context Protocol) support
- 6 terminal backends (local, Docker, SSH, Daytona, Singularity, Modal)
- 5 platform gateways (Telegram, Discord, Slack, WhatsApp, Signal)

### OpenClaw
- Extensive tool system (browser, canvas, cron, shell, file, email...)
- MCP support (SKILL.md + tool-catalog)
- 20+ channel integrations (more platforms)
- Canvas + A2UI (visual workspace)
- Voice activation (macOS/iOS/Android)
- Docker sandboxing for group sessions

### Key Difference
- **Hermes**: Deeper tool integration (serverless backends, trajectory generation)
- **OpenClaw**: Wider platform coverage (20+ channels, voice, mobile nodes)

---

## 7. LLM Integration

### Hermes
- 200+ models via OpenRouter
- Switch via `hermes model` (no code changes)
- Model-agnostic design
- Built-in trajectory generation for RL training

### OpenClaw
- `agent.model: "provider/model-id"` config pattern
- Model failover + profile rotation
- timeoutSeconds configurable per model
- Session-level model override (sessions.json)

### Key Difference
- **Hermes**: Model as a component to optimize (trajectories for training)
- **OpenClaw**: Model as a configurable service (failover for reliability)

---

## 8. Summary: Strengths & Weaknesses

### Hermes Agent
| Strengths | Weaknesses |
|---|---|
| Self-evolution (GEPA + DSPy) | Fewer platform integrations |
| Auto skill creation | Newer project (v0.8.0) |
| Multi-layer memory | No mobile nodes |
| Trajectory generation for RL | No visual workspace (Canvas) |
| Serverless backends (Modal) | Smaller ecosystem |

### OpenClaw
| Strengths | Weaknesses |
|---|---|
| 20+ channel integrations | No self-evolution |
| Mobile nodes (iOS/Android) | Static skills only |
| Canvas + voice activation | No memory learning |
| Massive community (196K stars) | ClawHub security risks |
| Docker sandboxing | No skill auto-creation |

---

## 9. y-tower Integration Analysis

y-tower already implements a **Hermes-inspired** self-evolution engine (`self-evolution.ts`, 728 lines) with 4 layers:

| Layer | Source | y-tower Implementation |
|---|---|---|
| 1. Skill XP Growth | Hermes skill system | `updateAgentSkills()` via Supabase |
| 2. Prompt Evolution | Hermes GEPA (simplified) | `evolveHarnessPrompts()` via LLM |
| 3. Background Review | Hermes trajectory analysis | `backgroundReview()` every 5 runs |
| 4. Chat Nudges | Smallville generative agents | `getMemoryNudge()` / `getSkillNudge()` |

y-tower also uses OpenClaw on M4 as a **gateway** for Discord/Telegram access.

### What y-tower could adopt further:

**From Hermes:**
- GEPA-style constraint gates (5 gates before accepting evolved prompts)
- Autonomous skill creation from chat interactions (not just EPARE)
- FTS5 cross-session search with LLM summarization
- Trajectory generation for fine-tuning data

**From OpenClaw:**
- Canvas/A2UI for visual agent workspace
- Docker sandboxing for risky tool execution
- Voice activation for mobile access
- Model failover with automatic retry

---

## 10. References

- [Hermes Agent GitHub](https://github.com/NousResearch/hermes-agent)
- [Hermes Self-Evolution](https://github.com/NousResearch/hermes-agent-self-evolution)
- [OpenClaw GitHub](https://github.com/openclaw/openclaw)
- [GEPA Paper (ICLR 2026 Oral)](https://github.com/NousResearch/hermes-agent-self-evolution)
- [Hermes Guide (ai.cc)](https://www.ai.cc/blogs/hermes-agent-2026-self-improving-open-source-ai-agent-vs-openclaw-guide/)
- [OpenClaw Guide (DigitalOcean)](https://www.digitalocean.com/resources/articles/what-is-openclaw)
