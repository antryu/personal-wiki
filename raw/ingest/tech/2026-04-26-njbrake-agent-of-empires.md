<!-- GitHub Trending: Rust | 1,693 stars | +7 today -->

# njbrake/agent-of-empires

> Manage multiple Claude Code, OpenCode agents from either TUI or Web for easy access on mobile. Also supports Mistral Vibe, Codex CLI, Gemini CLI, Pi.dev, Copilot CLI, Factory Droid Coding. Uses tmux and git worktrees.

## Repository Info
- **URL**: https://github.com/njbrake/agent-of-empires
- **Stars**: 1,693
- **Forks**: 134
- **Language**: Rust
- **License**: MIT License
- **Created**: 2026-01-09
- **Updated**: 2026-04-26
- **Topics**: ai-coding, claude, claude-code, cli, codex, cursor, factory-droid-cli, gemini, gemini-cli, github-copilot-cli, llm, mistral-vibe, opencode, orchestrator, pi, rust, terminal, tmux, vibe, vibe-coding
- **Open Issues**: 20

## README (excerpt)
<p align="center">
  <img src="assets/logo.png" alt="Agent of Empires" width="128">
  <h1 align="center">Agent of Empires (AoE)</h1>
  <p align="center">
    <a href="https://github.com/njbrake/agent-of-empires/actions/workflows/ci.yml"><img src="https://github.com/njbrake/agent-of-empires/actions/workflows/ci.yml/badge.svg" alt="CI"></a>
    <a href="https://github.com/njbrake/agent-of-empires/releases"><img src="https://img.shields.io/github/v/release/njbrake/agent-of-empires" alt="GitHub release"></a>
    <a href="https://formulae.brew.sh/formula/aoe"><img src="https://img.shields.io/homebrew/v/aoe" alt="Homebrew"></a>
    <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT"></a>
    <a href="https://clawhub.ai/njbrake/aoe"><img src="https://img.shields.io/badge/ClawHub-aoe-blue" alt="ClawHub"></a>
    <br>
    <a href="https://www.youtube.com/@agent-of-empires"><img src="https://img.shields.io/badge/YouTube-channel-red?logo=youtube" alt="YouTube"></a>
    <a href="https://x.com/natebrake"><img src="https://img.shields.io/badge/follow-%40natebrake-black?logo=x&logoColor=white" alt="Follow @natebrake"></a>
  </p>
</p>

A session manager for AI coding agents on Linux and macOS. Use it from the terminal (TUI) or from any browser ([web dashboard](docs/guides/web-dashboard.md)).

Run multiple AI agents in parallel across different branches of your codebase, each in its own isolated session with optional Docker sandboxing. Access your agents from your laptop, phone, or tablet.

## Why AoE?

Running one AI agent is easy. Running five of them across different branches, keeping track of which is stuck, which is waiting on input, and which just made a mess of your working tree, becomes a part-time job. AoE makes it a glance: one dashboard, one status column, git worktrees and Docker sandboxes set up for you, and sessions that outlive your terminal.

> If you find this project useful, please consider giving it a star on GitHub: it helps others discover the project!

<p align="center">
  <img src="docs/assets/demo.gif" alt="Agent of Empires Demo" width="800">
  <br>
  <a href="https://www.youtube.com/watch?v=Kk8dX_F-P4E">Watch the getting started video</a>
</p>

## Features

- **Multi-agent support**: Claude Code, OpenCode, Mistral Vibe, Codex CLI, Gemini CLI, Cursor CLI, Copilot CLI, Pi.dev, and Factory Droid
- **TUI app**: visual interface to create, monitor, and manage sessions
- **Web app** (Beta, stabilization in progress): create, monitor, and control your agents from any browser, installable as a PWA ([guide](docs/guides/web-dashboard.md))
- **CLI app**: create, monitor, and control agents from the command line (integrates with tools like OpenClaw)
- **Remote access from your phone**: press `R` in the TUI to expose the web dashboard over HTTPS with QR + passphrase auth. Uses Tailscale Funnel when available (stable URL, installable PWAs keep working across restarts) or Cloudflare Tunnel as a fallback ([guide](docs/guides/remote-phone-access.md))
- **Status detection**: see which agents are running, waiting for input, or idle
- **Git worktrees**: run parallel agents on different branches of the same repo
- **Docker sandboxing**: isolate agents in containers with shared auth volumes
- **Diff view**: review git changes and edit files without leaving the TUI
- **Profiles**: separate workspaces for different projects or clients

## Web Dashboard (Beta, stabilization in progress)

Access your agents from any browser. The real agent terminal renders in the page; switch sessions, type into the terminal, and review diffs without leaving the tab. Press `R` in the TUI to start the server, or see the [web dashboard guide](docs/guides/web-dashboard.md) for details.

<p align="center">
  <img src="docs/assets/web-desktop.gif" alt="Web dashboard" width="800">
</p>

## How It Works

Each agent runs in its own [tmux](https://github.com/tmux/tmux/wiki) session, so your agents keep running when you clo