# Qwen Code Agent

> Qwen Code is an open-source AI agent that lives in your terminal, optimized for Qwen series models. It helps developers understand large codebases, automate repetitive tasks, and streamline workflows. It supports multi-protocol APIs, offers a feature-rich agentic workflow, and integrates with popular IDEs.  
> Last updated: 2026-04-11

## Overview

Qwen Code is an open-source AI agent for the terminal, developed by QwenLM, that provides a powerful and flexible environment for developers. It supports OpenAI, Anthropic, and Gemini-compatible APIs, and offers an OAuth-free tier with 1,000 free requests per day. The framework and the Qwen3-Coder model are open-source and evolve together, ensuring continuous improvements and adaptability. With rich built-in tools and optional IDE integrations, Qwen Code is ideal for developers who prefer working in the command line while still having access to a full agentic workflow.

### Repository Info

- **URL**: [https://github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)
- **Stars**: 22,712
- **Forks**: 2,105
- **Language**: TypeScript
- **License**: Apache License 2.0
- **Created**: 2025-06-26
- **Updated**: 2026-04-11
- **Open Issues**: 790

### News

- **2026-04-02**: Qwen3.6-Plus is now live! Sign in via Qwen OAuth to use it directly, or get an API key from [Alibaba Cloud ModelStudio](https://modelstudio.console.alibabacloud.com/ap-southeast-1?tab=doc#/doc/?type=model&url=2840914_2&modelId=qwen3.6-plus) to access it through the OpenAI-compatible API.
- **2026-02-16**: Qwen3.5-Plus is now live!

### Features

- **Multi-protocol, OAuth free tier**: Use OpenAI / Anthropic / Gemini-compatible APIs, or sign in with Qwen OAuth for 1,000 free requests/day.
- **Open-source, co-evolving**: Both the framework and the Qwen3-Coder model are open-source and evolve together.
- **Agentic workflow, feature-rich**: Rich built-in tools (Skills, SubAgents) for a full agentic workflow and a Claude Code-like experience.
- **Terminal-first, IDE-friendly**: Built for developers who live in the command line, with optional integration for VS Code, Zed, and JetBrains IDEs.

### Installation

#### Quick Install (Recommended)

##### Linux / macOS

```bash
bash -c "$(curl -fsSL https://qwen-code-assets.oss-cn-hangzhou.aliyuncs.com/installation/install-qwen.sh)"
```

##### Windows (Run as Administrator CMD)

```cmd
curl -fsSL -o %TEMP%\install-qwen.bat https://qwen-code-assets.oss-cn-hangzhou.aliyuncs.com/installation/install-qwen.bat && %TEMP%\install-qwen.bat
```

> **Note**: It's recommended to restart your terminal after installation to ensure environment variables take effect.

#### Manual Installation

##### Prerequisites

Make sure you have Node.js 20 or later installed. Download it from [nodejs.org](https://nodejs.org/en/download).

##### NPM

```bash
npm install -g @qwen-code/qwen-code@latest
```

##### Homebrew (macOS, Linux)

```bash
brew install qwen-code
```

### Quick Start

```bash
# Start Qwen Code (interactive)
qwen

# Then, in the session:
/help
/auth
```

On first use, you'll be prompted to sign in. You can run `/auth` anytime to switch authentication methods.

Example prompts:

```text
What does this project do?
Explain the codebase structure.
Help me refactor this function.
Generate unit tests for this module.
```

<details>
<summary>Click to watch a demo video</summary>

<video src="https://cloud.video.taobao.com/vod/HLfyppnCHplRV9Qhz2xSqeazHeRzYtG-EYJnHAqtzkQ.mp4" controls>
Your browser does not support the video tag.
</video>

</details>

### Use Qwen Code for Coding Tasks in Claw

Copy the prompt below and paste it into your agent:

```
Use Qwen Code as a /think
```

## Key Points

- Qwen Code is an open-source AI agent designed for developers to work efficiently in the terminal.
- It supports multiple protocols and provides an OAuth-free tier with 1,000 free requests per day.
- The framework and Qwen3-Coder model are open-source and evolve together.
- It offers a feature-rich agentic workflow and integrates with popular IDEs.

## Sources

- [GitHub](https://github.com/QwenLM/qwen-code)
- [원본](raw/ingest/projects/2026-04-11-qwen-code-agent.md)