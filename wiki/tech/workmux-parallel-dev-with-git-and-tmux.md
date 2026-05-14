# workmux: Parallel Dev with Git and tmux

> workmux is a powerful, opinionated tool for parallel development that combines git worktrees and tmux (or alternatives like kitty, WezTerm, or Zellij) into isolated development environments. It allows developers to work on multiple features simultaneously, each with its own AI agent, without the need for stashing, branch switching, or context bloat.  
> Last updated: 2026-05-14

## Overview

workmux simplifies parallel development by leveraging git worktrees and terminal window managers to create isolated, self-contained environments for each task or feature. It abstracts the complexity of managing multiple branches, environments, and AI agents into a streamlined, zero-friction workflow.

Each worktree is paired with a dedicated tmux window (or alternative terminal), which includes a terminal setup, editor session, dev server, and optionally an AI agent. This approach allows for natural, task-based context switching and reduces cognitive load when managing multiple development workflows.

workmux supports automation at every stage, from setting up new worktrees with config files and dependencies to cleaning up merged branches with a single command. It also integrates with tools like consult-llm, enabling AI agents to consult other models for architecture planning, code reviews, and debugging without leaving the environment.

## Key Points
- Create and manage multiple development environments using git worktrees and tmux (or alternative backends).
- Run parallel AI agent workflows with isolated worktrees and terminal sessions.
- Simplified setup and cleanup with automated commands for dependency installation and merge handling.
- Optional integrations with AI models and tools like consult-llm for enhanced development assistance.

## Sources
- [GitHub](https://github.com/raine/workmux)
- [원본](raw/ingest/tech/2026-05-14-workmux-parallel-dev-with-git-and-tmux.md)