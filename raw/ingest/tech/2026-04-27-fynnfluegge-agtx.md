<!-- GitHub Trending: Rust | 971 stars | +43 today -->

# fynnfluegge/agtx

> 🏄🏼‍♂️ The blackboard for coding agents - from idea to merge, hands-free 

## Repository Info
- **URL**: https://github.com/fynnfluegge/agtx
- **Stars**: 971
- **Forks**: 90
- **Language**: Rust
- **License**: Apache License 2.0
- **Created**: 2026-02-08
- **Updated**: 2026-04-27
- **Topics**: claude, claude-code, codex, cursor, gemini, opencode, spec-driven-development, vibe-coding
- **Open Issues**: 16

## README (excerpt)
<div align="center">

[//]: <img src="https://github.com/user-attachments/assets/54ac039b-085e-490b-aacc-36c8e244e313" width="428" />

# agtx

<div align="left">
    
> **An AI agent that manages other coding agents in a terminal kanban board** - Add tasks. Press one key. An orchestrator agent picks it up, plans, and delegates to multiple coding agents running in parallel. Come back to changes ready to merge.
>
> **Let different AI coding agents collaborate** autonomously on the same task with automatic session switching and context awareness - e.g. **Gemini** → research | **Claude** → implement | **Codex** → review
>
> **Capture ideas without leaving your agent session** — `/agtx:brainstorm` to explore freely, `/agtx:sweep` to push the conversation to the board as tasks in one step.

</div>

[![CI](https://github.com/fynnfluegge/agtx/actions/workflows/ci.yml/badge.svg)](https://github.com/fynnfluegge/agtx/actions/workflows/ci.yml)
[![Release](https://img.shields.io/github/v/release/fynnfluegge/agtx)](https://github.com/fynnfluegge/agtx/releases)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![License: Apache-2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

<p align="center">
  <a href="#quick-start">Quick Start</a> •
  <a href="#features">Features</a> •
  <a href="#usage">Usage</a> •
  <a href="#brainstorm--sweep-skills">Brainstorm & Sweep Skills</a> •
  <a href="#mcp-server">MCP Server</a> •
  <a href="#plugins">Plugins</a> •
  <a href="#orchestrator-agent-experimental">Orchestrator</a> •
  <a href="#configuration">Configuration</a>
</p>

---

<img width="840" src="https://github.com/user-attachments/assets/45858e09-ab61-422b-b708-db060c73a900" />

[//]:  <img width="840" src="https://github.com/user-attachments/assets/42f71a6c-424c-4cc4-80fc-dc9bb8ba1467" />

<br/>

[//]: <img width="1486" height="680" src="https://github.com/user-attachments/assets/45858e09-ab61-422b-b708-db060c73a900" />

[//]: <![Xnapper-2026-02-14-09 36 33 (1)](https://github.com/user-attachments/assets/fce21a9c-2fe1-4b14-8f24-55e058531370)>

</div>

## Why agtx?

AI coding tools give you one agent, one task, one terminal. agtx gives you a **kanban board where multiple coding agents work in parallel** — each in its own git worktree, each in its own tmux window, running autonomously through a spec-driven workflow managed by an orchestrator agent.

When ideas come up mid-session, `/agtx:brainstorm` keeps your agent in exploration mode — then `/agtx:sweep` turns the conversation into board tasks with a single confirmation step. **No context switching, no copy-pasting — ideas flow directly into work.**

With the orchestrator, you don't even manage the board yourself. **An AI agent picks up tasks, delegates work, and ensures getting things done** through planning, implementation, review and resolving conflicts — while you focus on what matters: research, defining tasks, and merging changes.

> [!TIP]
> Check out the [Contributing](#contributing) section or have a look at [`good first issues`](https://github.com/fynnfluegge/agtx/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) to get involved and become a contributor ⭐️ 

## Features

- **Orchestrator agent**: A dedicated AI agent that autonomously manages your kanban board via [MCP](https://modelcontextprotocol.io) — delegates to coding agents, advances phases, checks for merge conflicts ([experimental](#orchestrator-agent-experimental))
- **Brainstorm & Sweep skills**: Capture ideas and push them to the board from any coding agent session — `/agtx:brainstorm` to explore freely, `/agtx:sweep` to decompose and create tasks with one confirmation step ([details](#brainstorm--sweep-skills))
- **Multi-agent task lifecycle**: Configure different agents per workflow phase — e.g. Gemini for research, Claude for implementation, Codex for review — with automatic agent switching
- **Parallel execution