<!-- GitHub Trending: Rust | 6,404 stars | +73 today -->

# antinomyhq/forgecode

> AI enabled pair programmer for Claude, GPT, O Series, Grok, Deepseek, Gemini and 300+ models

## Repository Info
- **URL**: https://github.com/antinomyhq/forgecode
- **Stars**: 6,404
- **Forks**: 1,327
- **Language**: Rust
- **License**: Apache License 2.0
- **Created**: 2024-12-08
- **Updated**: 2026-04-10
- **Topics**: ai-pair-programming, ai-workflows, artifical-intelligense, claude-3-7-sonnet, claude-4, claude-4-sonnet, cli-assistant, command-line, grok, llm, multi-agent-reinforcement-learning, open-router, open-source-claude-code, openai, qwen, shell
- **Open Issues**: 113

## README (excerpt)
<h1 align="center">⚒️ Forge: AI-Enhanced Terminal Development Environment</h1>
<p align="center">A comprehensive coding agent that integrates AI capabilities with your development environment</p>

<p align="center"><code>curl -fsSL https://forgecode.dev/cli | sh</code></p>

[![CI Status](https://img.shields.io/github/actions/workflow/status/antinomyhq/forge/ci.yml?style=for-the-badge)](https://github.com/antinomyhq/forge/actions)
[![GitHub Release](https://img.shields.io/github/v/release/antinomyhq/forge?style=for-the-badge)](https://github.com/antinomyhq/forge/releases)
[![Discord](https://img.shields.io/discord/1044859667798568962?style=for-the-badge&cacheSeconds=120&logo=discord)](https://discord.gg/kRZBPpkgwq)
[![CLA assistant](https://cla-assistant.io/readme/badge/antinomyhq/forge?style=for-the-badge)](https://cla-assistant.io/antinomyhq/forge)

![Code-Forge Demo](https://assets.antinomy.ai/images/forge_demo_2x.gif)

---

<details>
<summary><strong>Table&nbsp;of&nbsp;Contents</strong></summary>

- [Quickstart](#quickstart)
- [Usage Examples](#usage-examples)
- [Why Forge?](#why-forge)
- [How Forge Works: Three Modes](#how-forge-works-three-modes)
  - [Interactive Mode (TUI)](#interactive-mode-tui)
  - [One-Shot CLI Mode](#one-shot-cli-mode)
  - [ZSH Plugin Mode (`:` prefix)](#zsh-plugin-mode--prefix)
- [ZSH Plugin: The `:` Prefix System](#zsh-plugin-the--prefix-system)
  - [Agents](#agents)
  - [Sending Prompts](#sending-prompts)
  - [Attaching Files](#attaching-files)
  - [Conversation Management](#conversation-management)
  - [Git Integration](#git-integration)
  - [Shell Command Tools](#shell-command-tools)
  - [Session & Configuration](#session--configuration)
  - [Skills](#skills)
  - [Customizing Agent Behavior](#customizing-agent-behavior)
  - [Semantic Search (Workspace)](#semantic-search-workspace)
  - [Quick Reference: All `:` Commands](#quick-reference-all--commands)
- [Command-Line Options](#command-line-options)
- [Advanced Configuration](#advanced-configuration)
  - [Provider Configuration](#provider-configuration)
    - [Managing Provider Credentials](#managing-provider-credentials)
    - [Deprecated: Environment Variables](#deprecated-environment-variables)
  - [forge.yaml Configuration Options](#forgeyaml-configuration-options)
  - [Environment Variables](#environment-variables)
  - [MCP Configuration](#mcp-configuration)
  - [Example Use Cases](#example-use-cases)
  - [Usage in Multi-Agent Workflows](#usage-in-multi-agent-workflows)
- [Documentation](#documentation)
- [Community](#community)
- [Support Us](#support-us)

</details>

---

## Quickstart

To get started with Forge, run the command below:

```bash
curl -fsSL https://forgecode.dev/cli | sh
```

On first run, Forge will guide you through setting up your AI provider credentials using the interactive login flow. Alternatively, you can configure providers beforehand:

```bash
# Configure your provider credentials interactively
forge provider login

# Then start Forge
forge
```
That's it! Forge is now ready to assist you with your development tasks.

## Usage Examples

Forge can be used in different ways depending on your needs. Here are some common usage patterns:

<details>
<summary><strong>Code Understanding</strong></summary>

```
> Can you explain how the authentication system works in this codebase?
```

Forge will analyze your project's structure, identify authentication-related files, and provide a detailed explanation of the authentication flow, including the relationships between different components.

</details>

<details>
<summary><strong>Implementing New Features</strong></summary>

```
> I need to add a dark mode toggle to our React application. How should I approach this?
```

Forge will suggest the best approach based on your current codebase, explain the steps needed, and even scaffold the necessary components and styles for you.

</details>

<details>
<summary><strong>Debugging Assistance</strong></summary>

```
> I'm getting this