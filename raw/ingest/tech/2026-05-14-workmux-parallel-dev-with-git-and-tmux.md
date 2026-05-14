<!-- GitHub Trending: Rust | 1,473 stars | +7 today -->

# raine/workmux

> git worktrees + tmux windows for zero-friction parallel dev

## Repository Info
- **URL**: https://github.com/raine/workmux
- **Stars**: 1,473
- **Forks**: 103
- **Language**: Rust
- **License**: MIT License
- **Created**: 2025-11-04
- **Updated**: 2026-05-14
- **Topics**: N/A
- **Open Issues**: 17

## README (excerpt)
<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="meta/logo-dark.svg">
    <img src="meta/logo.svg" alt="workmux icon" width="300">
  </picture>
</p>

<p align="center">
  <strong>Parallel development in tmux* with git worktrees</strong>
</p>

<p align="center">
  <a href="https://workmux.raine.dev/"><strong>📖 Documentation</strong></a> ·
  <a href="#installation">Install</a> ·
  <a href="#quick-start">Quick start</a> ·
  <a href="#commands">Commands</a> ·
  <a href="CHANGELOG.md">Changelog</a>
</p>

---

Giga opinionated zero-friction workflow tool for managing
[git worktrees](https://git-scm.com/docs/git-worktree) and tmux windows as
isolated development environments. Perfect for running multiple AI agents in
parallel without conflict.

**Philosophy**: Build on tools you already use. tmux/zellij/kitty/etc. for
windowing, git for worktrees, your agent for coding - workmux ties them together.

<sup><sub>\* Also supports
<a href="https://workmux.raine.dev/guide/kitty">kitty</a>,
<a href="https://workmux.raine.dev/guide/wezterm">WezTerm</a>, and
<a href="https://workmux.raine.dev/guide/zellij">Zellij</a> as alternative
backends.</sub></sup>

📖 **New to workmux?** Read the
[introduction blog post](https://raine.dev/blog/introduction-to-workmux/) for a
quick overview.

![workmux screenshot](https://raw.githubusercontent.com/raine/workmux/refs/heads/main/meta/screenshot_20260329_165534.webp)

> [!TIP]
> [consult-llm](https://github.com/raine/consult-llm) pairs naturally with
> workmux: let your agents consult another AI model to plan architecture,
> review changes, debate approaches, or get unstuck on tricky bugs without
> leaving the worktree.
>
> See [How to orchestrate large coding tasks without context bloat](https://raine.dev/blog/phased-implement-workflow/)
> for a workflow that combines workmux and consult-llm.

## Why workmux?

**Parallel workflows.** Work on multiple features the same time, each with its
own AI agent. No stashing, no branch switching, no conflicts.

**One window per task.** A natural mental model. Each has its own terminal
state, editor session, dev server, and AI agent. Context switching is switching
tabs.

**Automated setup.** New worktrees start broken (no `.env`, no `node_modules`,
no dev server). workmux can copy config files, symlink dependencies, and run
install commands on creation.

**One-command cleanup.** `workmux merge` handles the full lifecycle: merge the
branch, delete the worktree, close the tmux window, remove the local branch.

**Terminal workflow.** Build on your terminal setup instead of yet another
agentic GUI that won't exist next year. If you don't have one yet, tmux might be
worth picking up.

New to worktrees? See [Why git worktrees?](#why-git-worktrees)

## Features

- Create git worktrees with matching tmux windows in a single command (`add`)
- Merge branches and clean up everything (worktree, tmux window, branches) in
  one command (`merge`)
- [Dashboard](#workmux-dashboard) for monitoring agents, reviewing changes, and
  sending commands
- [Sidebar](https://workmux.raine.dev/guide/sidebar/) for a persistent,
  at-a-glance view of all agents across tmux windows
- [Delegate tasks to worktree agents](#delegating-tasks-with-worktree) with the
  `/worktree` skill
- [Display agent status in tmux window names](#agent-status-tracking)
- Automatically set up your preferred tmux pane layout (editor, shell, watchers,
  etc.)
- Run post-creation hooks (install dependencies, setup database, etc.)
- Copy or symlink configuration files (`.env`, `node_modules`) into new
  worktrees
- [Sandbox agents](#sandbox) in containers or VMs for enhanced security
- [Automatic branch name generation](#automatic-branch-name-generation) from
  prompts using LLM
- Shell completions

## Hype

> "I've been using (and loving) workmux which brings together tmux, git
> worktrees, and CLI agents into an opinionated workflow."  
> — @Coolin96 [🔗](https://news.ycombinator.com