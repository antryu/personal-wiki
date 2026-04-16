<!-- GitHub Trending: TypeScript | 14,511 stars | +128 today -->

# EveryInc/compound-engineering-plugin

> Official Compound Engineering plugin for Claude Code, Codex, Cursor, and more

## Repository Info
- **URL**: https://github.com/EveryInc/compound-engineering-plugin
- **Stars**: 14,511
- **Forks**: 1,089
- **Language**: TypeScript
- **License**: MIT License
- **Created**: 2025-10-09
- **Updated**: 2026-04-16
- **Topics**: compound, engineering
- **Open Issues**: 64

## README (excerpt)
# Compound Engineering

[![Build Status](https://github.com/EveryInc/compound-engineering-plugin/actions/workflows/ci.yml/badge.svg)](https://github.com/EveryInc/compound-engineering-plugin/actions/workflows/ci.yml)
[![npm](https://img.shields.io/npm/v/@every-env/compound-plugin)](https://www.npmjs.com/package/@every-env/compound-plugin)

A plugin marketplace featuring the [Compound Engineering plugin](plugins/compound-engineering/README.md) — AI skills and agents that make each unit of engineering work easier than the last.

## Philosophy

**Each unit of engineering work should make subsequent units easier—not harder.**

Traditional development accumulates technical debt. Every feature adds complexity. The codebase becomes harder to work with over time.

Compound engineering inverts this. 80% is in planning and review, 20% is in execution:
- Plan thoroughly before writing code
- Review to catch issues and capture learnings
- Codify knowledge so it's reusable
- Keep quality high so future changes are easy

**Learn more**

- [Full component reference](plugins/compound-engineering/README.md) - all agents, commands, skills
- [Compound engineering: how Every codes with agents](https://every.to/chain-of-thought/compound-engineering-how-every-codes-with-agents)
- [The story behind compounding engineering](https://every.to/source-code/my-ai-had-already-fixed-the-code-before-i-saw-it)

## Workflow

```
Brainstorm -> Plan -> Work -> Review -> Compound -> Repeat
    ^
  Ideate (optional -- when you need ideas)
```

| Command | Purpose |
|---------|---------|
| `/ce:ideate` | Discover high-impact project improvements through divergent ideation and adversarial filtering |
| `/ce:brainstorm` | Explore requirements and approaches before planning |
| `/ce:plan` | Turn feature ideas into detailed implementation plans |
| `/ce:work` | Execute plans with worktrees and task tracking |
| `/ce:review` | Multi-agent code review before merging |
| `/ce:compound` | Document learnings to make future work easier |

`/ce:brainstorm` is the main entry point -- it refines ideas into a requirements plan through interactive Q&A, and short-circuits automatically when ceremony isn't needed. `/ce:plan` takes either a requirements doc from brainstorming or a detailed idea and distills it into a technical plan that agents (or humans) can work from.

`/ce:ideate` is used less often but can be a force multiplier -- it proactively surfaces strong improvement ideas based on your codebase, with optional steering from you.

Each cycle compounds: brainstorms sharpen plans, plans inform future plans, reviews catch more issues, patterns get documented.

### Getting started

After installing, run `/ce-setup` in any project. It checks your environment, installs missing tools (agent-browser, gh, jq, vhs, silicon, ffmpeg), and bootstraps project config.

---

## Install

### Claude Code

```bash
/plugin marketplace add EveryInc/compound-engineering-plugin
/plugin install compound-engineering
```

### Cursor

```text
/add-plugin compound-engineering
```

### OpenCode, Codex, Droid, Pi, Gemini, Copilot, Kiro, Windsurf, OpenClaw & Qwen (experimental)

This repo includes a Bun/TypeScript CLI that converts Claude Code plugins to OpenCode, Codex, Factory Droid, Pi, Gemini CLI, GitHub Copilot, Kiro CLI, Windsurf, OpenClaw, and Qwen Code.

```bash
# convert the compound-engineering plugin into OpenCode format
bunx @every-env/compound-plugin install compound-engineering --to opencode

# convert to Codex format
bunx @every-env/compound-plugin install compound-engineering --to codex

# convert to Factory Droid format
bunx @every-env/compound-plugin install compound-engineering --to droid

# convert to Pi format
bunx @every-env/compound-plugin install compound-engineering --to pi

# convert to Gemini CLI format
bunx @every-env/compound-plugin install compound-engineering --to gemini

# convert to GitHub Copilot format
bunx @every-env/compound-plugin install compound-engineering --to cop