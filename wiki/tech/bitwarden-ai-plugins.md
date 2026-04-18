# Bitwarden AI Plugins

> Bitwarden AI Plugins is an AI plugin marketplace that enables AI-assisted development workflows through quality-controlled plugins for Claude Code. It provides a curated collection of tools for software architecture, code review, DevOps, security, and more within Bitwarden's engineering ecosystem.  
> Last updated: 2026-04-18

## Overview

### Repository Info
- **URL**: [https://github.com/bitwarden/ai-plugins](https://github.com/bitwarden/ai-plugins)
- **Stars**: 70
- **Forks**: 7
- **Language**: TypeScript
- **License**: Other
- **Created**: 2025-10-21
- **Updated**: 2026-04-18
- **Open Issues**: 8

### Available Plugins
| Plugin | Version | Description |
|--------|---------|-------------|
| [bitwarden-architect](plugins/bitwarden-architect/) | 1.0.0 | Software architect for technical planning, architecture reviews, and implementation phasing |
| [bitwarden-atlassian-tools](plugins/bitwarden-atlassian-tools/) | 2.2.3 | Read-only Atlassian access via MCP server with deep Jira issue research |
| [bitwarden-code-review](plugins/bitwarden-code-review/) | 1.9.0 | Autonomous code review agent following Bitwarden engineering standards |
| [bitwarden-devops-engineer](plugins/bitwarden-devops-engineer/) | 0.1.1 | DevOps engineering assistant for workflow compliance, security auditing, and CI/CD remediation |
| [bitwarden-init](plugins/bitwarden-init/) | 1.1.0 | Initializes and enhances CLAUDE.md files with Bitwarden's standardized templates |
| [bitwarden-product-analyst](plugins/bitwarden-product-analyst/) | 0.1.5 | Product analyst agent for creating Bitwarden requirements documents |
| [bitwarden-security-engineer](plugins/bitwarden-security-engineer/) | 1.0.0 | Application security engineering for vulnerability triage and secure code analysis |
| [bitwarden-software-engineer](plugins/bitwarden-software-engineer/) | 0.3.3 | Full-stack engineering assistant for Bitwarden development patterns |
| [claude-config-validator](plugins/claude-config-validator/) | 1.1.1 | Validates Claude Code configuration files for security and quality |
| [claude-retrospective](plugins/claude-retrospective/) | 1.1.1 | Analyzes Claude Code sessions to identify improvement opportunities |

### Usage
**Adding to Claude Code**:
```bash
/plugin marketplace add bitwarden/ai-plugins
```

**Installing plugins**:
```bash
/plugin install plugin-name@bitwarden-marketplace
```

**Updating plugins**:
```bash
/plugin marketplace update bitwarden-marketplace
```

Plugins are installed to `~/.claude/plugins/` by default. Restart Claude Code after installation or updates.

## Key Points
- Provides 10+ specialized AI plugins for software development, DevOps, security, and product analysis
- Integrates with Claude Code for AI-assisted workflows in Bitwarden's engineering ecosystem
- Includes tools for configuration validation, code review automation, and session analysis
- Supports manual and automatic plugin updates via marketplace management interface
- Open contribution model with documented guidelines for plugin development and review

## Sources
- [GitHub](https://github.com/bitwarden/ai-plugins)
- [원본](raw/ingest/tech/2026-04-18-bitwarden-ai-plugins.md)