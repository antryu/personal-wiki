# Open Agent Skills CLI

> The Open Agent Skills CLI is a command-line interface that enables developers to easily install and manage skills for various AI agents, supporting platforms like OpenCode, Claude Code, Codex, and 41 more. Notable for its flexibility and integration capabilities, it allows seamless skill deployment across multiple agents with options for both local and global installations.  
> Last updated: 2026-04-14

## Overview

### Repository Info
- **URL**: https://github.com/vercel-labs/skills
- **Stars**: 14,123
- **Forks**: 1,166
- **Language**: TypeScript
- **License**: N/A
- **Created**: 2026-01-14
- **Updated**: 2026-04-14
- **Open Issues**: 460

### Core Functionality
The CLI streamlines skill installation and management for AI agents, enabling developers to integrate skills into platforms like OpenCode, Claude Code, Codex, Cursor, and 41+ others.

#### Install a Skill
Use `npx skills add` to install skills from various sources:
```bash
npx skills add vercel-labs/agent-skills
```

##### Source Formats
Supports installation from:
- GitHub shorthand: `vercel-labs/agent-skills`
- Full GitHub URL: `https://github.com/vercel-labs/agent-skills`
- Direct path in a repo: `https://github.com/vercel-labs/agent-skills/tree/main/skills/web-design-guidelines`
- GitLab URL: `https://gitlab.com/org/repo`
- Any Git URL: `git@github.com:vercel-labs/agent-skills.git`
- Local path: `./my-local-skills`

##### Options
| Option                    | Description                                                                 |
|--------------------------|-----------------------------------------------------------------------------|
| `-g, --global`           | Install to user directory instead of project                              |
| `-a, --agent <agents...>`| Target specific agents (e.g., `claude-code`, `codex`)                     |
| `-s, --skill <skills...>`| Install specific skills (use `'*'` for all)                               |
| `-l, --list`             | List available skills without installing                                  |
| `--copy`                 | Copy files instead of symlinking                                          |
| `-y, --yes`              | Skip confirmation prompts                                                 |
| `--all`                  | Install all skills to all agents                                          |

##### Examples
```bash
# List skills in a repository
npx skills add vercel-labs/agent-skills --list

# Install specific skills
npx skills add vercel-labs/agent-skills --skill frontend-design --skill skill-creator

# Install a skill with spaces in the name
npx skills add owner/repo --skill "Convex Best Practices"

# Install to specific agents
npx skills add vercel-labs/agent-skills -a claude-code -a opencode

# Non-interactive installation (CI/CD)
npx skills add vercel-labs/agent-skills --skill frontend-design -g -a claude-code -y
```

#### Installation Scope
| Scope       | Flag | Location            | Use Case                                      |
|-------------|------|---------------------|-----------------------------------------------|
| **Project** | -    | `./<agent>/skills/` | Committed with your project, shared with team |
| **Global**  | `-g` | `~/<agent>/skills/` | Available across all projects                 |

#### Installation Methods
Interactive installation supports:
- **Symlinking** (default): Creates links to agent directories.
- **Copying**: Duplicates files directly (use `--copy`).

## Key Points
- Supports **OpenCode**, **Claude Code**, **Codex**, **Cursor**, and 41+ AI agents.
- Offers **flexible installation** (local/global, specific skills, CI/CD compatibility).
- Simplifies **cross-agent skill deployment** with options for targeted or bulk installation.

## Sources
- [GitHub](https://github.com/vercel-labs/skills)
- [원본](raw/ingest/tech/2026-04-14-open-agent-skills-cli.md)