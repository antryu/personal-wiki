# Agent Package Manager for AI Agents

> Agent Package Manager (APM) is an open-source, community-driven dependency manager for AI agents, addressing the lack of standardized configuration and dependency management in AI development. By using a manifest file (`apm.yml`), APM enables reproducible and portable agent setups, similar to `npm` or `pip`, making it easier for developers to share and manage AI agent configurations, plugins, and skills. Last updated: 2026-04-17

## Overview

### Repository Info
- **URL**: [https://github.com/microsoft/apm](https://github.com/microsoft/apm)
- **Stars**: 1,802
- **Forks**: 113
- **Language**: Python
- **License**: MIT License
- **Created**: 2025-09-18
- **Updated**: 2026-04-17
- **Topics**: ai-agents, claude-code, codex-cli, context-engineering, github-copilot, package-manager, prompt-engineering
- **Open Issues**: 118

### Why APM
AI coding agents require context (e.g., prompts, skills, plugins) to be effective, but current workflows rely on manual setup, leading to non-portable and non-reproducible configurations. APM solves this by allowing developers to declare dependencies in a `apm.yml` manifest file. When a project is cloned, `apm install` automatically configures the agent environment with transitive dependency resolution, ensuring consistent setups across teams and projects.

Example `apm.yml`:
```yaml
# apm.yml — ships with your project
name: your-project
version: 1.0.0
dependencies:
  apm:
    # Skills from any repository
    - anthropics/skills/skills/frontend-design
    # Plugins
    - github/awesome-copilot/plugins/context-engineering
    # Specific agent primitives from any repository
    - github/awesome-copilot/agents/api-architect.agent.md
    # A full APM package with instructions, skills, prompts, hooks...
    - microsoft/apm-sample-package#v1.0.0
```

### Highlights
- **Unified manifest**: One file for managing instructions, skills, prompts, agents, hooks, and plugins.
- **Flexible dependency sources**: Install from GitHub, GitLab, Bitbucket, Azure DevOps, or any Git host.
- **Transitive dependency resolution**: Packages can depend on other packages, with APM resolving the full dependency tree.
- **Security features**: `apm audit` scans for hidden Unicode, and `apm install` blocks compromised packages.
- **Plugin authoring**: Create plugins for Copilot, Claude, and Cursor with dependency management and security scanning.
- **Marketplaces**: Install plugins from curated registries with governance via `apm-policy.yaml`.
- **Packaging & distribution**: Use `apm pack` to bundle configurations as zipped packages or standalone plugins.
- **CI/CD integration**: GitHub Action for automated workflows.

### Get Started
#### Installation
**Linux / macOS**:
```bash
curl -sSL https://aka.ms/apm-unix | sh
```
**Windows**:
```powershell
irm https://aka.ms/apm-windows | iex
```
Other methods include [Homebrew](https://brew.sh/), [Scoop](https://scoop.sh/), or `pip`:
```bash
brew install microsoft/apm/apm
pip install apm-cli
```

#### Usage
Install a package:
```bash
apm install microsoft/apm-sample-package#v1.0.0
```
Or from a marketplace:
```bash
apm marketplace add github/awesome-copilot
apm install azure-cloud-development@awesome-copilot
```

## Key Points
- Centralized dependency management for AI agents via `apm.yml`.
- Supports transitive dependencies and secure content scanning.
- Enables plugin authoring and distribution through standardized `plugin.json` packages.
- Integrates with CI/CD pipelines and enterprise governance policies.

## Sources
- [GitHub](https://github.com/microsoft/apm)
- [원본](raw/ingest/tech/2026-04-17-agent-package-manager-for-ai-agents.md)