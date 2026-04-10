<!-- GitHub Trending: TypeScript | 2,503 stars | +42 today -->

# zhukunpenglinyutong/jetbrains-cc-gui

> Jetbrains Claude Code and Codex GUI Plugin

## Repository Info
- **URL**: https://github.com/zhukunpenglinyutong/jetbrains-cc-gui
- **Stars**: 2,503
- **Forks**: 312
- **Language**: TypeScript
- **License**: MIT License
- **Created**: 2025-11-20
- **Updated**: 2026-04-10
- **Topics**: N/A
- **Open Issues**: 285

## README (excerpt)
<div align="center">

# CC GUI（Claude or Codex）

> Originally Claude Code GUI

<img width="120" alt="Image" src="./docs/images/idea-claude-code-gui-logo.png" />

**English** · [简体中文](./README.zh-CN.md)

<a href="https://trendshift.io/repositories/19332" target="_blank"><img src="https://trendshift.io/api/badge/repositories/19332" alt="zhukunpenglinyutong%2Fidea-claude-code-gui | Trendshift" style="width: 250px; height: 55px;" width="250" height="55"/></a>

![][github-contributors-shield] ![][github-forks-shield] ![][github-stars-shield] ![][github-issues-shield] ![][github-mit]

</div>

> To mitigate Claude trademark risks, this project has been renamed to CC GUI (originally Claude Code GUI). The logo has also been updated to reduce Chinese-specific elements. Regarding security, a        
  /security-review audit will be conducted before each minor version release, and a comprehensive claude-code-security audit will be performed every 10 minor versions. 

A powerful IntelliJ IDEA plugin that provides a visual interface for **Claude Code** and **OpenAI Codex** dual AI tools, making AI-assisted programming more efficient and intuitive.

<img width="850" alt="Image" src="/docs/img/banner.png" />

---

## Installation

[IDEA Claude Code GUI Installation](https://plugins.jetbrains.com/plugin/30666-cc-gui)

---

## Key Features

### Dual AI Engine Support
- **Claude Code** - Anthropic's official AI programming assistant, supporting Opus 4.5 and other models
- **OpenAI Codex** - OpenAI's powerful code generation engine

### Intelligent Conversation
- Context-aware AI coding assistant
- @file reference support for precise code context
- Image sending support for visual requirement description
- Conversation rewind feature for flexible history adjustment
- Enhanced prompts for better AI understanding

### Agent System
- Built-in Agent system for automated complex tasks
- Skills slash command system (/init, /review, etc.)
- MCP server support to extend AI capabilities

### Developer Experience
- Comprehensive permission management and security controls
- Code DIFF comparison feature
- File navigation and code jumping
- Dark/Light theme switching
- Font scaling and IDE font synchronization
- Internationalization support (auto-switch between Chinese/English)

### Session Management
- History session records and search
- Session favorites
- Message export support
- Provider management (cc-switch compatible)
- Usage statistics analysis

---

## Project Status

The project is under active development with continuous updates. For version history and iteration progress, please read [CHANGELOG.md](CHANGELOG.md)

---

### Collaborative Contributing

For contributing guidelines, please read [CONTRIBUTING.md](CONTRIBUTING.md)

---


## Local Development and Debugging

### 1. Install Frontend Dependencies

```bash
cd webview
npm install
```

### 2. Install ai-bridge Dependencies

```bash
cd ai-bridge
npm install
```

### 3. Debug Plugin

Run in IDEA:
```bash
./gradlew clean runIde
```

### 4. Build Plugin

```sh
./gradlew clean buildPlugin

# The generated plugin package will be in the build/distributions/ directory (package size approximately 40MB)
```

---

## License

MIT

---

## Contributing

Thanks to all contributors who help make IDEA-Claude-Code-GUI better!

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/zhukunpenglinyutong">
        <img src="https://avatars.githubusercontent.com/u/31264015?size=100" width="100" height="100" alt="zhukunpenglinyutong" style="border-radius: 50%; border: 3px solid #ff6b35; box-shadow: 0 0 15px rgba(255, 107, 53, 0.6);" />
      </a>
      <div>⭐️⭐️⭐️</div>
    </td>
    <td align="center">
      <a href="https://github.com/M1sury">
        <img src="https://avatars.githubusercontent.com/u/64764195?size=100" width="100" height="100" alt="M1sury" style="border-radius: 50%;" />
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/gadfly3173">
        <img src=