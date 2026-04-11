# Autonomous AI Coding Agent

> Ralph is an autonomous AI agent loop that iteratively uses AI coding tools (Amp or Claude Code) to complete all Product Requirements Document (PRD) items. It persists progress via git history, `progress.txt`, and `prd.json`, making it notable for its structured, self-improving approach to autonomous software development.  
> Last updated: 2026-04-11

## Overview
The **snarktank/ralph** repository implements "Ralph," an AI agent inspired by Geoffrey Huntley's Ralph pattern. It automates feature development by converting PRDs into executable tasks and iteratively implementing, testing, and committing code until all requirements are met. Key features include integration with AI coding tools like [Amp](https://ampcode.com) or [Claude Code](https://docs.anthropic.com/en/docs/claude-code), memory persistence through version control, and a modular workflow for PRD generation, conversion, and execution. The tool is designed for developers seeking to offload repetitive coding tasks to autonomous systems while maintaining control over quality and progress tracking.

## Key Points
- **Autonomous Loop**: Repeatedly executes AI coding tools until all PRD items are marked as completed (`passes: true`).
- **AI Integration**: Supports [Amp CLI](https://ampcode.com) (default) or [Claude Code](https://docs.anthropic.com/en/docs/claude-code) for code generation and execution.
- **Memory Persistence**: Uses git history, `progress.txt` (learnings/progress log), and `prd.json` (task list) to maintain state between iterations.
- **Workflow**: PRD creation → PRD-to-JSON conversion → iterative implementation, testing, and commit → repeat until completion.
- **Key Files**: `ralph.sh` (core loop), `prompt.md`/`CLAUDE.md` (prompt templates), `prd.json` (task tracking), and `progress.txt` (progress log).

## Sources
- [GitHub](https://github.com/snarktank/ralph)
- [원본](raw/ingest/tech/2026-04-11-autonomous-ai-coding-agent.md)