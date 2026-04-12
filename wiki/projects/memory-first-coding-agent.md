# Memory-First Coding Agent

> A coding agent that persists across sessions, learns over time, and supports multiple LLM models. Notable for its agent-based architecture that mirrors human-like collaboration.  
> Last updated: 2026-04-12

## Overview
The **Letta Code** repository implements a memory-first coding harness that shifts from traditional session-based workflows to persistent agent-based interactions. Built on the Letta API, it allows developers to work with an agent that retains knowledge across sessions and adapts to new tasks. Key features include:

### Repository Info
- **URL**: [https://github.com/letta-ai/letta-code](https://github.com/letta-ai/letta-code)
- **Stars**: 2,199
- **Forks**: 225
- **Language**: TypeScript
- **License**: Apache License 2.0
- **Created**: 2025-10-25
- **Updated**: 2026-04-12
- **Open Issues**: 89

### Installation & Usage
Install via npm:
```bash
npm install -g @letta-ai/letta-code
```
Run in a project directory with:
```bash
letta
```
Use `/connect` to configure LLM API keys (OpenAI, Anthropic, etc.) and `/model` to switch models. For local use, set `LETTA_BASE_URL` to connect to a Docker server.

### Agent-Based Philosophy
Unlike traditional CLI tools that treat each session as isolated, Letta Code uses **persistent agents** that:
- Retain memory across sessions
- Learn from interactions over time
- Support reusable skills via `.skills` directories
- Allow `/clear` to reset a conversation while preserving memory

### Memory & Learning System
- Initialize agent memory with `/init`
- Guide memory updates with `/remember [instructions]`
- Enable skill learning with `/skill [instructions]`
- Supports community-maintained packages via [Arch Linux AUR](https://aur.archlinux.org/packages/letta-code)

## Key Points
- **Persistent Agents**: Agents retain knowledge and improve over time, mimicking a human coworker.
- **Cross-Model Compatibility**: Works with Claude, GPT, Gemini, and other LLMs via API keys.
- **Skill Learning**: Modular skill system allows agents to learn and adapt to new capabilities.
- **Community Integration**: Arch Linux users can install via AUR for release or nightly builds.

## Sources
- [GitHub](https://github.com/letta-ai/letta-code)
- [원본](raw/ingest/projects/2026-04-12-memory-first-coding-agent.md)