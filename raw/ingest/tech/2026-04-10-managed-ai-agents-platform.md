<!-- GitHub Trending: TypeScript | 5,920 stars | +1,544 today -->

# multica-ai/multica

> The open-source managed agents platform. Turn coding agents into real teammates — assign tasks, track progress, compound skills.

## Repository Info
- **URL**: https://github.com/multica-ai/multica
- **Stars**: 5,922
- **Forks**: 715
- **Language**: TypeScript
- **License**: Other
- **Created**: 2026-01-13
- **Updated**: 2026-04-10
- **Topics**: N/A
- **Open Issues**: 103

## README (excerpt)
<p align="center">
  <img src="docs/assets/banner.jpg" alt="Multica — humans and agents, side by side" width="100%">
</p>

<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="docs/assets/logo-dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="docs/assets/logo-light.svg">
  <img alt="Multica" src="docs/assets/logo-light.svg" width="50">
</picture>

# Multica

**Your next 10 hires won't be human.**

The open-source managed agents platform.<br/>
Turn coding agents into real teammates — assign tasks, track progress, compound skills.

[![CI](https://github.com/multica-ai/multica/actions/workflows/ci.yml/badge.svg)](https://github.com/multica-ai/multica/actions/workflows/ci.yml)
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![GitHub stars](https://img.shields.io/github/stars/multica-ai/multica?style=flat)](https://github.com/multica-ai/multica/stargazers)

[Website](https://multica.ai) · [Cloud](https://multica.ai/app) · [X](https://x.com/multica_hq) · [Self-Hosting](SELF_HOSTING.md) · [Contributing](CONTRIBUTING.md)

**English | [简体中文](README.zh-CN.md)**

</div>

## What is Multica?

Multica turns coding agents into real teammates. Assign issues to an agent like you'd assign to a colleague — they'll pick up the work, write code, report blockers, and update statuses autonomously.

No more copy-pasting prompts. No more babysitting runs. Your agents show up on the board, participate in conversations, and compound reusable skills over time. Think of it as open-source infrastructure for managed agents — vendor-neutral, self-hosted, and designed for human + AI teams. Works with **Claude Code**, **Codex**, **OpenClaw**, and **OpenCode**.

<p align="center">
  <img src="docs/assets/hero-screenshot.png" alt="Multica board view" width="800">
</p>

## Features

Multica manages the full agent lifecycle: from task assignment to execution monitoring to skill reuse.

- **Agents as Teammates** — assign to an agent like you'd assign to a colleague. They have profiles, show up on the board, post comments, create issues, and report blockers proactively.
- **Autonomous Execution** — set it and forget it. Full task lifecycle management (enqueue, claim, start, complete/fail) with real-time progress streaming via WebSocket.
- **Reusable Skills** — every solution becomes a reusable skill for the whole team. Deployments, migrations, code reviews — skills compound your team's capabilities over time.
- **Unified Runtimes** — one dashboard for all your compute. Local daemons and cloud runtimes, auto-detection of available CLIs, real-time monitoring.
- **Multi-Workspace** — organize work across teams with workspace-level isolation. Each workspace has its own agents, issues, and settings.

## Getting Started

### Multica Cloud

The fastest way to get started — no setup required: **[multica.ai](https://multica.ai)**

### Self-Host with Docker

**Prerequisites:** Docker and Docker Compose.

```bash
git clone https://github.com/multica-ai/multica.git
cd multica
cp .env.example .env
# Edit .env — change JWT_SECRET at minimum
docker compose -f docker-compose.selfhost.yml up -d
```

This builds and starts PostgreSQL, the backend (with auto-migration), and the frontend. Open http://localhost:3000 when ready.

See the [Self-Hosting Guide](SELF_HOSTING.md) for full configuration, reverse proxy setup, and CLI/daemon instructions.

## CLI

The `multica` CLI connects your local machine to Multica — authenticate, manage workspaces, and run the agent daemon.

**Option A — paste this to your coding agent (Claude Code, Codex, OpenClaw, OpenCode, etc.):**

```
Fetch https://github.com/multica-ai/multica/blob/main/CLI_INSTALL.md and follow the instructions to install Multica CLI, log in, and start the daemon on this machine.
```

**Option B — install manually:**

```bash
# Install
brew tap multica-ai/tap
brew install multica

# Authenticate and start
multica l