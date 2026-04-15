<!-- GitHub Trending: TypeScript | 1,449 stars | +127 today -->

# zhukunpenglinyutong/desktop-cc-gui

> CC GUI 客户端（专为开发者打造的VibeCoding平台）

## Repository Info
- **URL**: https://github.com/zhukunpenglinyutong/desktop-cc-gui
- **Stars**: 1,449
- **Forks**: 116
- **Language**: TypeScript
- **License**: MIT License
- **Created**: 2026-02-03
- **Updated**: 2026-04-15
- **Topics**: N/A
- **Open Issues**: 113

## README (excerpt)
<div align="center">

# ccgui

<img width="120" alt="Image" src="./icon.png" />

**English** · [简体中文](./README.zh-CN.md)

![][github-contributors-shield] ![][github-forks-shield] ![][github-stars-shield] ![][github-issues-shield]

</div>

**ccgui** is built for professional developers as an alternative to Cursor. Focused on developer experience, our ultimate goal is to build a 100% open-source and transparent **next-generation VibeCoding editor (powered by Claude Code, Codex, and more)**.

> This is a project built upon [CodexMonitor](https://github.com/Dimillian/CodexMonitor)

<img src="./docs/banner.png" alt="ccgui Banner" width="800" />

---

### Core Features

#### Multi-Engine

Manage multiple AI coding engines in a single interface and switch freely between them:

- **Claude Code** — Deep integration with the full Anthropic model family (Haiku / Sonnet / Opus)
- **Codex CLI** — Full lifecycle management with custom model and parameter support
- **OpenCode CLI** — Built-in control panel with visual configuration for Providers / MCP / Sessions
- **Gemini CLI** — Supported (under active development)
- **Custom Providers** — Configurable channels including official, regional, aggregator, and third-party services

#### Professional Development Panels

More than a chat window — a complete development workbench:

- **Chat Canvas** — Rich-text input with file/image/code snippet attachments, `@` file references, `/` command triggers
- **Built-in Terminal** — Full shell terminal powered by xterm.js with pseudo-TTY support
- **Git Panel** — Commit history visualization, branch management, worktree support, diff review
- **Kanban Board** — Drag-and-drop task management (Todo → In Progress → Testing → Done)
- **Plan Panel** — Task decomposition and planning visualization
- **Parallel Execution** — Run multiple agents simultaneously with real-time status tracking

#### AI Memory System

- **Project Memory** — Persistent memory storage with semantic classification (8+ memory types)
- **Skills System** — Reusable skill/agent management with import and export support
- **Prompt Library** — Custom prompt management and quick execution

#### MCP Protocol Support

Built-in Model Context Protocol support for configuring and managing MCP Servers, extending AI tool-calling capabilities.

#### Cross-Platform Native Experience

- **macOS** — Frameless window with native title bar integration (Intel / Apple Silicon / Universal)
- **Windows** — Frameless window with custom drag regions
- **Linux** — AppImage packaging, ready to use out of the box

#### More Capabilities

- Voice dictation (Whisper model, macOS/Linux)
- Global search (files, conversations, kanban, skills, commands, and more — 8 result types)
- Syntax highlighting (CodeMirror 6 + Prism.js, 10+ languages)
- Mermaid diagram rendering
- Multi-language UI (English / Chinese)
- Auto-update

---

### Local Development and Debugging

#### 1. Prerequisites

Make sure the following tools are installed:

- [Node.js](https://nodejs.org/) (>= 18)
- [Rust](https://rustup.rs/) (stable)
- [Tauri CLI](https://tauri.app/) (`npm install -g @tauri-apps/cli`)
- cmake

Run the environment check:

```bash
npm run doctor
```

#### 2. Install Frontend Dependencies

```bash
npm install
```

#### 3. Start Development Mode

```bash
npm run tauri:dev
```

> The first launch will compile the Rust backend, which takes longer. Subsequent launches use incremental compilation.

#### 4. Frontend-Only Development (without Tauri)

```bash
npm run dev
```

#### 5. Build for Production

```bash
# macOS (Apple Silicon)
npm run build:mac-arm64

# macOS (Universal)
npm run build:mac-universal

# Windows
npm run build:win-x64

# Linux
npm run build:linux-x64
```

#### 6. Linting and Testing

```bash
npm run lint          # ESLint check
npm run typecheck     # TypeScript type check
npm run test          # Run frontend tests
```

---

### Download

Download link: https://github.com/zhukunpenglinyutong/desktop-cc-gui/releases
