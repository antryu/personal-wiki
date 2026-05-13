# GitHub Agentic Workflows

> GitHub Agentic Workflows is a tool that allows users to write agentic workflows in natural language markdown and run them in GitHub Actions. It is notable for its integration of AI agents with workflow automation, emphasizing security and safety through guardrails and sandboxed execution.  
> Last updated: 2026-05-13

## Overview

GitHub Agentic Workflows (GAW) enables users to define and execute AI-powered workflows using natural language markdown, which are then run as part of GitHub Actions. The tool is designed with a strong focus on security, implementing multiple layers of protection, including sandboxed execution, input sanitization, and write operations restricted to sanitized outputs.

The repository was created on August 12, 2025, and is actively maintained, with the latest update as of May 13, 2026. It's written in Go and released under the MIT License. The project has gained significant attention with over 4,465 stars and 385 forks, and has over 210 open issues.

GitHub Agentic Workflows aims to simplify the automation of repository tasks using AI by allowing users to define workflows in markdown, while ensuring safe and secure execution. The system enforces read-only permissions by default and limits write operations to sanitized `safe-outputs`. It also allows access to be restricted to specific team members and includes approval gates for critical operations.

## Key Points
- Write agentic workflows in natural language markdown and run them in GitHub Actions.
- Enforces strong security with sandboxed execution, input sanitization, and read-only permissions by default.
- Implements guardrails, including write operation restrictions, human approval gates, and supply chain security.
- Actively maintained, with over 4,465 stars and 385 forks on GitHub.

## Sources
- [GitHub](https://github.com/github/gh-aw)
- [원본](raw/ingest/tech/2026-05-13-github-agentic-workflows.md)