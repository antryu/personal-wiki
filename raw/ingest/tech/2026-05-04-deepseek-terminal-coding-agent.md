<!-- GitHub Trending: Rust | 3,822 stars | +1,277 today -->

# Hmbown/DeepSeek-TUI

> Coding agent for DeepSeek models that runs in your terminal

## Repository Info
- **URL**: https://github.com/Hmbown/DeepSeek-TUI
- **Stars**: 3,823
- **Forks**: 258
- **Language**: Rust
- **License**: MIT License
- **Created**: 2026-01-19
- **Updated**: 2026-05-04
- **Topics**: cli, deepseek, llm, rust, terminal, tui
- **Open Issues**: 131

## README (excerpt)
# DeepSeek TUI

> **A terminal-native coding agent built around DeepSeek V4's 1M-token context and prefix cache. Single binary, no Node/Python runtime required — ships an MCP client, sandbox, and durable task queue out of the box.**

[简体中文 README](README.zh-CN.md)

```bash
npm i -g deepseek-tui
```

[![CI](https://github.com/Hmbown/DeepSeek-TUI/actions/workflows/ci.yml/badge.svg)](https://github.com/Hmbown/DeepSeek-TUI/actions/workflows/ci.yml)
[![npm](https://img.shields.io/npm/v/deepseek-tui)](https://www.npmjs.com/package/deepseek-tui)
[![crates.io](https://img.shields.io/crates/v/deepseek-tui-cli?label=crates.io)](https://crates.io/crates/deepseek-tui-cli)

<a href="https://www.buymeacoffee.com/hmbown" target="_blank"><img src="https://img.shields.io/badge/Buy%20me%20a%20coffee-5F7FFF?style=for-the-badge&logo=buymeacoffee&logoColor=white" alt="Buy me a coffee" /></a>

![DeepSeek TUI screenshot](assets/screenshot.png)

---

## What is it?

DeepSeek TUI is a coding agent that runs entirely in your terminal. It gives DeepSeek's frontier models direct access to your workspace — reading and editing files, running shell commands, searching the web, managing git, and orchestrating sub-agents — all through a fast, keyboard-driven TUI.

**Built for DeepSeek V4** (`deepseek-v4-pro` / `deepseek-v4-flash`) with 1M-token context windows and native thinking-mode (chain-of-thought) streaming.

### Key Features

- **Native RLM** (`rlm_query`) — fans out 1–16 cheap `deepseek-v4-flash` children in parallel for batched analysis and parallel reasoning, all against the existing API client
- **Thinking-mode streaming** — watch the model's chain-of-thought unfold in real time as it works through your tasks
- **Full tool suite** — file ops, shell execution, git, web search/browse, apply-patch, sub-agents, MCP servers
- **1M-token context** — automatic intelligent compaction when context fills up; prefix-cache aware for cost efficiency
- **Three modes** — Plan (read-only explore), Agent (interactive with approval), YOLO (auto-approved)
- **Reasoning-effort tiers** — cycle through `off → high → max` with `Shift+Tab`
- **Session save/resume** — checkpoint and resume long-running sessions
- **Workspace rollback** — side-git pre/post-turn snapshots with `/restore` and `revert_turn`, without touching your repo's `.git`
- **Durable task queue** — background tasks survive restarts; think scheduled automation, long-running reviews
- **HTTP/SSE runtime API** — `deepseek serve --http` for headless agent workflows
- **MCP protocol** — connect to Model Context Protocol servers for extended tooling; see [docs/MCP.md](docs/MCP.md)
- **LSP diagnostics** — inline error/warning surfacing after every edit via rust-analyzer, pyright, typescript-language-server, gopls, clangd
- **User memory** — optional persistent note file injected into the system prompt for cross-session preferences
- **Localized UI** — `en`, `ja`, `zh-Hans`, `pt-BR` with auto-detection
- **Live cost tracking** — per-turn and session-level token usage and cost estimates; cache hit/miss breakdown
- **Skills system** — composable, installable instruction packs from GitHub with no backend service required

---

## How it's wired

`deepseek` (dispatcher CLI) → `deepseek-tui` (companion binary) → ratatui interface ↔ async engine ↔ OpenAI-compatible streaming client. Tool calls route through a typed registry (shell, file ops, git, web, sub-agents, MCP, RLM) and results stream back into the transcript. The engine manages session state, turn tracking, the durable task queue, and an LSP subsystem that feeds post-edit diagnostics into the model's context before the next reasoning step.

See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for the full walkthrough.

---

## Quickstart

```bash
npm install -g deepseek-tui
deepseek
```

Prebuilt binaries are published for **Linux x64**, **Linux ARM64** (v0.8.8+), **macOS x64**, **macOS ARM64**, and **Windows x64**. For other targets (musl, riscv64, FreeBSD, etc.),