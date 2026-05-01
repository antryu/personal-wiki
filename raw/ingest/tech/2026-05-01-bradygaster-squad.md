<!-- GitHub Trending: TypeScript | 2,451 stars | +29 today -->

# bradygaster/squad

> Squad: AI agent teams for any project

## Repository Info
- **URL**: https://github.com/bradygaster/squad
- **Stars**: 2,451
- **Forks**: 348
- **Language**: TypeScript
- **License**: MIT License
- **Created**: 2026-02-06
- **Updated**: 2026-05-01
- **Topics**: N/A
- **Open Issues**: 67

## README (excerpt)
# Squad

[English](README.md) | [中文](README.zh.md)

**Human-led AI agent teams for any project.** One command. A team that helps you move faster with your code.

[![Status](https://img.shields.io/badge/status-alpha-blueviolet)](#status)
[![Platform](https://img.shields.io/badge/platform-GitHub%20Copilot-blue)](#what-is-squad)

> ⚠️ **Alpha Software** — Squad is experimental. APIs and CLI commands may change between releases. We'll document breaking changes in [CHANGELOG.md](CHANGELOG.md).

---

## What is Squad?

Squad gives you a human-directed AI development team through GitHub Copilot. Describe what you're building. Get a team of specialists — frontend, backend, tester, lead — that live in your repo as files. They persist across sessions, learn your codebase, share decisions, and help you move faster without giving up oversight.

Squad is a productivity tool for humans, not a replacement for engineers, reviewers, or decision-makers. People stay accountable for priorities, approvals, and final changes; Squad helps with coordination, repetition, and parallel execution.

It's not a chatbot wearing hats. Each team member runs in its own context, reads only its own knowledge, and writes back what it learned so the work stays inspectable.

> **Responsible AI stance** — Squad is built to amplify a human operator with GitHub Copilot, not to remove humans from the loop. Use it to delegate faster, review better, and keep governance close to the code.

---

## Quick Start

### 1. Create your project

```bash
mkdir my-project && cd my-project
git init
```

**✓ Validate:** Run `git status` — you should see "No commits yet".

### 2. Install Squad

```bash
npm install -g @bradygaster/squad-cli
squad init
```

**✓ Validate:** Check that `.squad/team.md` was created in your project.

### 3. Authenticate with GitHub (for Issues, PRs, and Ralph)

```bash
gh auth login
```

**✓ Validate:** Run `gh auth status` — you should see "Logged in to github.com".

### 4. Open Copilot and go

```
copilot --agent squad --yolo
```

> **Why `--yolo`?** Squad makes many tool calls in a typical session. Without it, Copilot will prompt you to approve each one.

**In VS Code**, open Copilot Chat and select the **Squad** agent.

Then:

```
I'm starting a new project. Set up the team.
Here's what I'm building: a recipe sharing app with React and Node.
```

**✓ Validate:** Squad responds with team member proposals. Type `yes` to confirm — they're ready to work.

Squad proposes a team — each member named from a persistent thematic cast. You say **yes**. They're ready.

---

## Upgrading

Upgrading Squad is a two-step process.

**Step 1: Update the CLI binary**

```bash
npm install -g @bradygaster/squad-cli@latest
```

**Step 2: Update Squad-owned files in your project**

```bash
squad upgrade
```

`squad upgrade` updates `squad.agent.md`, templates, and GitHub workflows to the latest versions. It never touches your `.squad/` team state — your agents, decisions, and history are always preserved.

Use `--force` to re-apply updates even when your installed version already matches the latest.

---

## All Commands (17 commands)

| Command | What it does |
|---------|-------------|
| `squad init` | **Init** — scaffold Squad in the current directory (idempotent — safe to run multiple times); alias: `hire`; use `--global` to init in personal squad directory, `--mode remote <path>` for dual-root mode |
| `squad upgrade` | Update Squad-owned files to latest; never touches your team state; use `--global` to upgrade personal squad, `--migrate-directory` to rename `.ai-team/` → `.squad/` |
| `squad upgrade --self` | Update the Squad CLI package itself; add `--insider` for prerelease builds |
| `squad status` | Show which squad is active and why |
| `squad triage` | **Watch mode** — poll for issues and auto-triage to team (aliases: `watch`, `loop`); use `--interval <minutes>` to set polling frequency (default: 10); with `--execute` dispatch Copilot agents; use `--agent-cmd`, `-