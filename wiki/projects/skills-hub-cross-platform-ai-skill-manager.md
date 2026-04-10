# Skills Hub: Cross-Platform AI Skill Manager

> Skills Hub is a cross-platform desktop application that centralizes management of AI coding agent skills, enabling synchronization across multiple tools with a "Install once, sync everywhere" philosophy. It leverages symbolic links and fallback copying to streamline skill distribution.  
> Last updated: 2026-04-10

## Overview
**Skills Hub** is a Tauri/React desktop application for managing AI coding agent skills. It provides a unified interface to discover, install, and sync skills across 35+ AI coding tools (e.g., Cursor, Claude Code, GitHub Copilot) by linking to their global skill directories. Key features include:

- **Skill Management**: Import skills via local folders or Git repositories, with support for multi-skill repositories and `.claude/skills/` directory compatibility.
- **Synchronization**: Automatically detects installed tools and propagates skill updates to all configured tools.
- **Discovery**: Explores skills from ClawHub and skills.sh with one-click installation.
- **Visualization**: Renders skill files with Markdown and syntax highlighting for 40+ languages.
- **Onboarding**: Migrates existing skills from installed tools into a centralized repository.

The project is written in Rust under the MIT License, with 683 stars and 88 forks on GitHub. It addresses the fragmented skill management challenge across the rapidly growing AI coding tools ecosystem.

## Key Points
- Supports 35+ AI coding tools (e.g., Cursor, Qwen Code, GitHub Copilot) with auto-detection of skill directories
- Implements symlink-based synchronization with fallback to file copying
- Provides centralized skill repository and migration tools for existing skills
- Integrates online skill discovery (ClawHub, skills.sh) with local management
- Handles multi-skill Git repositories and language-specific directory structures

## Sources
- [GitHub](https://github.com/qufei1993/skills-hub)
- [원본](raw/ingest/projects/2026-04-10-skills-hub-cross-platform-ai-skill-manager.md)