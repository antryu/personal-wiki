# AI Coding Workflow Engine

> Archon is an open-source workflow engine designed to make AI coding deterministic and repeatable by structuring development processes into YAML-based workflows. It is notable for enabling consistent, structured AI-assisted coding across projects and platforms.
> Last updated: 2026-04-10

## Overview
Archon is a workflow engine for AI coding agents. It allows developers to define their development processes in YAML workflows, covering stages like planning, implementation, validation, code review, and PR creation. These workflows can be reliably executed across all projects, making AI-assisted coding more structured and deterministic.

Inspired by tools like Dockerfiles and GitHub Actions, Archon brings similar benefits to AI coding workflows. It supports the integration of deterministic nodes (e.g., bash scripts, tests) with AI nodes (e.g., planning, code generation, review), allowing the AI to contribute where it adds the most value. Workflows are portable and can be triggered from the CLI, Web UI, Slack, Telegram, or GitHub.

Key features include:
- **Isolation**: Each workflow run operates in its own git worktree, enabling parallel execution without conflicts.
- **Composability**: Mix AI and deterministic steps for flexible, tailored workflows.
- **Portability**: Workflows are defined in `.archon/workflows/` and work consistently across platforms.
- **Human-in-the-loop**: Incorporates interactive steps for approval and feedback.

## Key Points
- Archon ensures deterministic and repeatable AI coding workflows by enforcing structured development processes.
- It supports a mix of AI-driven and deterministic steps, allowing developers to control when and where AI is used.
- Workflows are portable and can be executed from multiple interfaces, including CLI, Web UI, and chat platforms.

## Sources
- [GitHub](https://github.com/coleam00/Archon)
- [원본](raw/ingest/tech/2026-04-10-ai-coding-workflow-engine.md)