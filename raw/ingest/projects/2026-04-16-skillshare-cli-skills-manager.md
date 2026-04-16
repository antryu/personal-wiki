<!-- GitHub Trending: Go | 1,500 stars | +14 today -->

# runkids/skillshare

> 📚 Sync skills across all AI CLI tools with one command and simplify team sharing. Supporting Codex, Claude Code, OpenClaw & more

## Repository Info
- **URL**: https://github.com/runkids/skillshare
- **Stars**: 1,502
- **Forks**: 84
- **Language**: Go
- **License**: MIT License
- **Created**: 2026-01-14
- **Updated**: 2026-04-16
- **Topics**: agenthub, ai, claude-code, cli, codex, codex-skills, copilot, cross-machine-sync, cursor, gemini, go, gui, openclaw, skills, skills-audit, skills-management, skills-manager, skills-ui, skillshare, team-management
- **Open Issues**: 7

## README (excerpt)
<p align="center" style="margin-bottom: 0;">
  <img src=".github/assets/logo.png" alt="skillshare" width="280">
</p>

<h1 align="center" style="margin-top: 0.5rem; margin-bottom: 0.5rem;">skillshare</h1>

<p align="center">
  <a href="https://skillshare.runkids.cc"><img src="https://img.shields.io/badge/Website-skillshare.runkids.cc-blue?logo=docusaurus" alt="Website"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT"></a>
  <a href="https://github.com/runkids/skillshare/releases"><img src="https://img.shields.io/github/v/release/runkids/skillshare" alt="Release"></a>
  <img src="https://img.shields.io/badge/platform-macOS%20%7C%20Linux%20%7C%20Windows-blue" alt="Platform">
  <a href="https://goreportcard.com/report/github.com/runkids/skillshare"><img src="https://goreportcard.com/badge/github.com/runkids/skillshare" alt="Go Report Card"></a>
  <a href="https://deepwiki.com/runkids/skillshare"><img src="https://deepwiki.com/badge.svg" alt="Ask DeepWiki"></a>
</p>

<p align="center">
  <a href="https://github.com/runkids/skillshare/stargazers"><img src="https://img.shields.io/github/stars/runkids/skillshare?style=social" alt="Star on GitHub"></a>
</p>

<p align="center">
  <a href="https://trendshift.io/repositories/21835" target="_blank"><img src="https://trendshift.io/api/badge/repositories/21835" alt="runkids%2Fskillshare | Trendshift" style="width: 250px; height: 55px;" width="250" height="55"/></a>
</p>

<p align="center">
  <strong>One source of truth for AI CLI skills, agents, rules, commands & more. Sync everywhere with one command — from personal to organization-wide.</strong><br>
  Codex, Claude Code, OpenClaw, OpenCode & 50+ more.
</p>

<p align="center">
  <img src=".github/assets/demo.gif" alt="skillshare demo" width="960">
</p>

<p align="center">
  <a href="https://skillshare.runkids.cc">Website</a> •
  <a href="#installation">Install</a> •
  <a href="#quick-start">Quick Start</a> •
  <a href="#highlights">Highlights</a> •
  <a href="#cli-and-ui-preview">Screenshots</a> •
  <a href="https://skillshare.runkids.cc/docs">Docs</a>
</p>

> [!NOTE]
> **Latest**: [v0.19.0](https://github.com/runkids/skillshare/releases/tag/v0.19.0) — agent management, filter studio, unified resources UI. [All releases →](https://github.com/runkids/skillshare/releases)

## Why skillshare

Every AI CLI has its own skills directory.
You edit in one, forget to copy to another, and lose track of what's where.

skillshare fixes this:

- **One source, every agent** — sync to Claude, Cursor, Codex & 50+ more with `skillshare sync`
- **Agent management** — sync custom agents alongside skills to agent-capable targets
- **More than skills** — manage rules, commands, prompts & any file-based resource with [extras](https://skillshare.runkids.cc/docs/reference/targets/configuration#extras)
- **Install from anywhere** — GitHub, GitLab, Bitbucket, Azure DevOps, or any self-hosted Git
- **Built-in security** — audit skills for prompt injection and data exfiltration before use
- **Team-ready** — project skills in `.skillshare/`, org-wide skills via tracked repos
- **Local & lightweight** — single binary, no registry, no telemetry, fully offline-capable
- **Fine-grained filtering** — control which skills reach which targets with [`.skillignore`](https://skillshare.runkids.cc/docs/how-to/daily-tasks/filtering-skills), SKILL.md `targets`, and per-target include/exclude

> Coming from another tool? [Migration Guide](https://skillshare.runkids.cc/docs/how-to/advanced/migration) · [Comparison](https://skillshare.runkids.cc/docs/understand/philosophy/comparison)

## How It Works

- macOS / Linux: `~/.config/skillshare/`
- Windows: `%AppData%\skillshare\`

```
┌─────────────────────────────────────────────────────────────┐
│                    Source Directory                         │
│   ~/.config/skillshare/skills/    ← skills (SKILL.md)       │
│   ~/.config/skillshare/agents/    ← agents               