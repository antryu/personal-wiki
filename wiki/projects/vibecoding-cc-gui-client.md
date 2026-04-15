# VibeCoding CC GUI Client

> A next-generation open-source VibeCoding platform for professional developers, offering multi-engine AI coding capabilities and comprehensive development tools. Built as an alternative to Cursor with full transparency and extensibility.  
> Last updated: 2026-04-15

## Overview

### Repository Info
- **URL**: [https://github.com/zhukunpenglinyutong/desktop-cc-gui](https://github.com/zhukunpenglinyutong/desktop-cc-gui)
- **Stars**: 1,449 ⭐
- **Forks**: 116 🍴
- **Language**: TypeScript
- **License**: MIT License
- **Created**: 2026-02-03
- **Updated**: 2026-04-15
- **Open Issues**: 113

### Core Features

#### Multi-Engine Support
- **Claude Code**: Full integration with Anthropic's Haiku/Sonnet/Opus models
- **Codex CLI**: Custom model/parameter management
- **OpenCode CLI**: Visual MCP (Model Context Protocol) configuration
- **Gemini CLI**: In active development
- **Custom Providers**: Configurable regional/third-party services

#### Professional Development Tools
- **Chat Canvas**: Rich-text input with file/image/code attachments
- **Built-in Terminal**: xterm.js-powered shell with TTY support
- **Git Panel**: Branch/worktree management and diff review
- **Kanban Board**: Drag-and-drop task tracking (Todo → Done)
- **Plan Panel**: Task decomposition visualization
- **Parallel Execution**: Real-time status tracking for multiple agents

#### AI Memory & Skills
- **Project Memory**: 8+ semantic memory types
- **Skills System**: Import/export reusable agents
- **Prompt Library**: Custom prompt management

#### Cross-Platform Native Experience
- **macOS**: Frameless window with native title bar (Intel/Apple Silicon/Universal)
- **Windows**: Custom drag regions
- **Linux**: AppImage packaging

### Local Development Workflow

#### Prerequisites
- Node.js (>= 18)
- Rust (stable)
- Tauri CLI (`npm install -g @tauri-apps/cli`)
- cmake

#### Development Commands
```bash
npm run doctor        # Environment check
npm install           # Frontend dependencies
npm run tauri:dev     # Full dev mode (includes Rust backend build)
npm run dev           # Frontend-only dev
npm run build:mac-*   # macOS builds
npm run build:win-x64 # Windows build
npm run build:linux-x64 # Linux build
```

### Distribution
- **Download**: [GitHub Releases](https://github.com/zhukunpenglinyutong/desktop-cc-gui/releases)

---

## Key Points
- Open-source alternative to Cursor with multi-engine AI integration
- Comprehensive development environment with Git, terminal, and task management
- Built-in MCP protocol for AI tool configuration
- Cross-platform native support (macOS/Windows/Linux)
- Extensible architecture with custom providers and skills system

## Sources
- [GitHub](https://github.com/zhukunpenglinyutong/desktop-cc-gui)
- [원본](raw/ingest/projects/2026-04-15-vibecoding-cc-gui-client.md)