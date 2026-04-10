# JetBrains CC GUI Plugin

> A powerful IntelliJ IDEA plugin that provides a visual interface for **Claude Code** and **OpenAI Codex**, making AI-assisted programming more efficient and intuitive. The project is notable for its dual AI engine support and comprehensive features for developers.
> Last updated: 2026-04-10

## Overview

**JetBrains CC GUI Plugin** is an open-source plugin designed for JetBrains IDEs, such as IntelliJ IDEA. It serves as a visual interface for developers to interact with **Claude Code** and **OpenAI Codex**, two AI-powered coding assistants. The plugin enhances developer productivity by providing a streamlined and intuitive way to work with AI-generated code, context-aware suggestions, and intelligent conversation features.

### Repository Info

- **URL**: [https://github.com/zhukunpenglinyutong/jetbrains-cc-gui](https://github.com/zhukunpenglinyutong/jetbrains-cc-gui)
- **Stars**: 2,503
- **Forks**: 312
- **Language**: TypeScript
- **License**: MIT License
- **Created**: 2025-11-20
- **Updated**: 2026-04-10
- **Open Issues**: 285

The project was originally named **Claude Code GUI**, but due to trademark concerns, it was renamed to **CC GUI**. The logo has also been updated to remove any Chinese-specific branding.

### Key Features

- **Dual AI Engine Support**: Works with both **Claude Code** and **OpenAI Codex** for enhanced coding capabilities.
- **Intelligent Conversation**: Offers context-aware coding assistance, file referencing, image support, and conversation rewind.
- **Agent System**: Built-in automation for complex tasks and slash command-based skills.
- **Developer Experience**: Includes permission management, code diff, file navigation, and theme switching.
- **Session Management**: Provides history tracking, favorites, message export, and usage analytics.

### Installation

The plugin is available for installation via the JetBrains Plugin Marketplace:
- [IDEA CC GUI Installation](https://plugins.jetbrains.com/plugin/30666-cc-gui)

### Development and Debugging

For local development and debugging, the following steps are required:

1. **Install Frontend Dependencies**:
   ```bash
   cd webview
   npm install
   ```

2. **Install ai-bridge Dependencies**:
   ```bash
   cd ai-bridge
   npm install
   ```

3. **Debug Plugin**:
   ```bash
   ./gradlew clean runIde
   ```

4. **Build Plugin**:
   ```bash
   ./gradlew clean buildPlugin
   ```
   The generated plugin file will be in the `build/distributions/` directory.

### License

The plugin is released under the **MIT License**, which allows for free use, modification, and distribution, subject to the license terms.

## Key Points

- Supports both **Claude Code** and **OpenAI Codex** AI engines.
- Offers an intuitive and intelligent conversation interface for developers.
- Provides an agent system for automating complex tasks.
- Includes robust security and permission controls.
- Has active development and a growing contributor community.

## Sources

- [GitHub](https://github.com/zhukunpenglinyutong/jetbrains-cc-gui)
- [원본](raw/ingest/tech/2026-04-10-jetbrains-cc-gui-plugin.md)