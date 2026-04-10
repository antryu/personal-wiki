# Hermes AI Agent

> A self-improving AI agent with a built-in learning loop, enabling autonomous skill development and cross-platform adaptability. Notable for its ability to operate on low-cost infrastructure and integrate with multiple models and communication channels.
> Last updated: 2026-04-10

## Overview
**Repository**: [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)  
**Stars**: 47,906 | **Forks**: 6,152 | **License**: MIT  
**Created**: 2025-07-22 | **Last Updated**: 2026-04-10  

### Features
- **Self-improving architecture**: Creates and refines skills from experience, builds knowledge models, and autonomously optimizes workflows.
- **Cross-platform accessibility**: Operates via Telegram, Discord, Slack, WhatsApp, Signal, and CLI, with voice memo support and session continuity.
- **Model flexibility**: Supports OpenAI, Anthropic, Claude, OpenRouter, and custom endpoints with zero-code switching.
- **Adaptive deployment**: Runs on $5 VPS, GPU clusters, or serverless platforms (Daytona/Modal) with hibernation for cost efficiency.
- **Advanced automation**: Cron-based scheduled tasks, parallel subagent delegation, and natural language pipeline execution.
- **Research integration**: Includes RL environments, trajectory compression, and batch training tools for tool-calling model development.

### Installation
```bash
curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash
```
*Supported platforms*: Linux, macOS, WSL2, Android (Termux).  
*Android note*: Installs a curated `[termux]` extra to avoid incompatible dependencies.

### Core Capabilities
| Feature | Description |
|---------|-------------|
| **Terminal Interface (TUI)** | Multiline editing, autocomplete, conversation history, and real-time tool streaming. |
| **Closed Learning Loop** | Agent-managed memory, skill self-improvement, and FTS5 session search with LLM summarization. |
| **Honcho User Modeling** | Tracks user preferences and behavior patterns across sessions. |
| **Agentskills Compatibility** | Adheres to the [agentskills.io](https://agentskills.io) open standard for skill sharing. |

---

## Key Points
- Autonomous skill creation and iterative improvement through task experience.
- Serverless deployment options reduce infrastructure costs for idle sessions.
- Unified gateway process for multi-platform communication (CLI, messaging apps).
- Open architecture allows integration with 200+ models via OpenRouter and custom endpoints.

## Sources
- [GitHub](https://github.com/NousResearch/hermes-agent)
- [원본](raw/ingest/tech/2026-04-10-hermes-ai-agent.md)