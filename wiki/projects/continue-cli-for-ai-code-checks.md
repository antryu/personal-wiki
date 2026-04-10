# Continue CLI for AI Code Checks

> Continue CLI enables source-controlled AI code checks that integrate with CI/CD pipelines, allowing teams to enforce coding standards and security reviews via customizable, markdown-based agents. Notable for its open-source design and seamless developer tooling integration.  
> Last updated: 2026-04-10

## Overview

### Repository Info
- **URL**: [https://github.com/continuedev/continue](https://github.com/continuedev/continue)
- **Stars**: 32,469
- **Forks**: 4,363
- **Language**: TypeScript
- **License**: Apache License 2.0
- **Created**: 2023-05-24
- **Updated**: 2026-04-10
- **Topics**: `agent`, `ai`, `cli`, `developer-tools`, `jetbrains-plugin`, `llm`, `open-source`, `vs-code-extenstion`
- **Open Issues**: 541

---

### Key Features
- **Source-controlled AI agents**: Define checks as markdown files in `.continue/checks/`, versioned with your codebase.
- **CI/CD integration**: Runs automatically on pull requests as GitHub status checks, reporting pass/fail with suggested diffs.
- **Customizable rules**: Example security review agent checks for hardcoded secrets, API validation, and error formatting.
- **Open-source CLI**: Installable via `curl`, PowerShell, or npm, with cross-platform support (macOS, Linux, Windows).

---

### How It Works
Continue executes AI agents on every pull request. Each agent is a markdown file defining tasks (e.g., security reviews, style checks). Results appear as GitHub status checks:
- ✅ **Green**: Code meets criteria.
- ❌ **Red**: Fails with a suggested diff for fixes.

**Example Security Review Agent**:
```yaml
---
name: Security Review
description: Review PR for basic security vulnerabilities
---
Review this PR and check that:
  - No secrets or API keys are hardcoded
  - All new API endpoints have input validation
  - Error responses use the standard error format
```

---

### Installation
AI checks are powered by the open-source `cn` CLI.

**macOS / Linux**:
```bash
curl -fsSL https://raw.githubusercontent.com/continuedev/continue/main/extensions/cli/scripts/install.sh | bash
```

**Windows (PowerShell)**:
```powershell
irm https://raw.githubusercontent.com/continuedev/continue/main/extensions/cli/scripts/install.ps1 | iex
```

**npm (Node.js 20+)**:
```bash
npm i -g @continuedev/cli
```

Run the CLI with:
```bash
cn
```

---

![Banner](media/github-readme.png)

## Key Points
- Enables enforceable AI code reviews in CI/CD pipelines.
- Uses markdown files for version-controlled, auditable checks.
- Supports major platforms and developer workflows (VS Code, JetBrains, CLI).

## Sources
- [GitHub](https://github.com/continuedev/continue)
- [원본](raw/ingest/projects/2026-04-10-continue-cli-for-ai-code-checks.md)