<!-- GitHub Trending: Python | 1,318 stars | +82 today -->

# jwadow/kiro-gateway

> 👻 Proxy API gateway for Kiro IDE & CLI (Amazon Q Developer / AWS CodeWhisperer). Use free Claude models with any client.

## Repository Info
- **URL**: https://github.com/jwadow/kiro-gateway
- **Stars**: 1,318
- **Forks**: 315
- **Language**: Python
- **License**: GNU Affero General Public License v3.0
- **Created**: 2025-12-13
- **Updated**: 2026-05-11
- **Topics**: ai, anthropic, api-gateway, aws, claude, codewhisperer, fastapi, free, kiro, kiro-cli, llm, openai, openclaw, opencode, opus, proxy, python, sonnet, sso, streaming
- **Open Issues**: 17

## README (excerpt)
<div align="center">

# 👻 Kiro Gateway

**Proxy gateway for Kiro API (Amazon Q Developer / AWS CodeWhisperer)**

🇬🇧 English • [🇷🇺 Русский](docs/ru/README.md) • [🇨🇳 中文](docs/zh/README.md) • [🇪🇸 Español](docs/es/README.md) • [🇮🇩 Indonesia](docs/id/README.md) • [🇧🇷 Português](docs/pt/README.md) • [🇯🇵 日本語](docs/ja/README.md) • [🇰🇷 한국어](docs/ko/README.md)

Made with ❤️ by [@Jwadow](https://github.com/jwadow)

[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
[![Python 3.10+](https://img.shields.io/badge/python-3.10+-blue.svg)](https://www.python.org/downloads/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.100+-green.svg)](https://fastapi.tiangolo.com/)
[![Sponsor](https://img.shields.io/badge/💖_Sponsor-Support_Development-ff69b4)](#-support-the-project)

*Use Claude models from Kiro with Claude Code, OpenCode, OpenClaw, Claw Code, Codex app, Cursor, Cline, Roo Code, Kilo Code, Obsidian, OpenAI SDK, LangChain, Continue and other OpenAI or Anthropic compatible tools*

[Models](#-supported-models) • [Features](#-features) • [Quick Start](#-quick-start) • [Configuration](#%EF%B8%8F-configuration) • [💖 Sponsor](#-support-the-project)

</div>

---

## 🤖 Available Models (Free List)

> ⚠️ **Important:** Model availability depends on your Kiro tier (free/paid). The gateway provides access to whatever models are available in your IDE or CLI based on your subscription. The list below shows models commonly available on the **free tier**.

> 🔒 **Claude Opus 4.5** was removed from the free tier on January 17, 2026. It may be available on paid tiers — check your IDE/CLI model list.

🚀 **Claude Sonnet 4.5** — Balanced performance. Great for coding, writing, and general-purpose tasks.

⚡ **Claude Haiku 4.5** — Lightning fast. Perfect for quick responses, simple tasks, and chat.

📦 **Claude Sonnet 4** — Previous generation. Still powerful and reliable for most use cases.

📦 **Claude 3.7 Sonnet** — Legacy model. Available for backward compatibility.

💤 **GLM-5** — Open MoE model (744B params, 40B active). Advanced model for complex systems engineering and long-horizon agentic tasks.

🐋 **DeepSeek-V3.2** — Open MoE model (685B params, 37B active). Balanced performance for coding, reasoning, and general tasks.

🧩 **MiniMax M2.5** — Open MoE model (230B params, 10B active). Enhanced version with improved reasoning and task handling.

🧩 **MiniMax M2.1** — Open MoE model (230B params, 10B active). Great for complex tasks, planning, and multi-step workflows.

🤖 **Qwen3-Coder-Next** — Open MoE model (80B params, 3B active). Coding-focused. Excellent for development and large projects.

> 💡 **Smart Model Resolution:** Use any model name format — `claude-sonnet-4-5`, `claude-sonnet-4.5`, or even versioned names like `claude-sonnet-4-5-20250929`. The gateway normalizes them automatically.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🔌 **OpenAI-compatible API** | Works with any OpenAI-compatible tool |
| 🔌 **Anthropic-compatible API** | Native `/v1/messages` endpoint |
| 🔀 **Multi-Account Support** | Intelligent failover between multiple accounts |
| 🌐 **VPN/Proxy Support** | HTTP/SOCKS5 proxy for restricted networks |
| 🧠 **Extended Thinking** | Reasoning is exclusive to our project |
| 👁️ **Vision Support** | Send images to model |
| 🔍 **Web Search** | Search the web for current information |
| 🛠️ **Tool Calling** | Supports function calling |
| 💬 **Full message history** | Passes complete conversation context |
| 📡 **Streaming** | Full SSE streaming support |
| 🔄 **Retry Logic** | Automatic retries on errors (403, 429, 5xx) |
| 📋 **Extended model list** | Including versioned models |
| 🔐 **Smart token management** | Automatic refresh before expiration |

---

## 🚀 Quick Start

**Choose your deployment method:**
- 🐍 **Native Python** - Full control, easy debugging
- 🐳 **Docker** - Isolated environment, easy dep