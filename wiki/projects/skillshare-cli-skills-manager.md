# SkillShare CLI Skills Manager

> Sync skills across all AI CLI tools with one command and simplify team sharing. Notable for its unified management of skills, agents, and rules across platforms like Codex, Claude Code, and OpenClaw, with built-in security audits and cross-machine synchronization.  
> Last updated: 2026-04-16

## Overview  
**SkillShare** centralizes AI CLI skills, agents, and configurations into a single source of truth, eliminating fragmentation across tools. It supports 50+ AI CLI platforms (Codex, Claude Code, OpenClaw, etc.) and offers team collaboration features like `.skillshare/` project directories and organization-wide skill tracking.  

Key components include:  
- **Repository Info**:  
  - **URL**: [https://github.com/runkids/skillshare](https://github.com/runkids/skillshare)  
  - **Stars**: 1,502 | **Forks**: 84 | **Language**: Go | **License**: MIT  
  - **Created**: 2026-01-14 | **Updated**: 2026-04-16  
  - **Topics**: `skills-management`, `ai`, `cli`, `team-management`, `go` (and 18+ others)  
  - **Open Issues**: 7  

- **Core Functionality**:  
  - Syncs skills, agents, and rules across tools via `skillshare sync`.  
  - Uses local directories (e.g., `~/.config/skillshare/`) for storage, with support for `.skillignore` and SKILL.md metadata.  
  - Features a GUI and CLI for managing resources, with filtering rules to control target destinations.  

- **Notable Features**:  
  - Agent management for agent-capable targets.  
  - Security audits for prompt injection and data exfiltration risks.  
  - Cross-platform compatibility (macOS, Linux, Windows).  

## Key Points  
- **Unified Sync**: Consolidates skills, agents, and rules for 50+ AI CLI tools into one interface.  
- **Team Collaboration**: Supports project-specific and organization-wide skill sharing via tracked repositories.  
- **Security**: Built-in audits for malicious patterns in skills and agents.  
- **Flexibility**: Installs skills from GitHub, GitLab, and self-hosted Git platforms.  
- **Lightweight**: Single binary with no telemetry or cloud dependencies.  

## Sources  
- [GitHub](https://github.com/runkids/skillshare)  
- [원본](raw/ingest/projects/2026-04-16-skillshare-cli-skills-manager.md)