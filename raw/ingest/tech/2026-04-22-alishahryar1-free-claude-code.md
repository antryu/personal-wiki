<!-- GitHub Trending: Python | 2,602 stars | +51 today -->

# Alishahryar1/free-claude-code

> Use claude-code for free in the terminal, VSCode extension or via discord like openclaw

## Repository Info
- **URL**: https://github.com/Alishahryar1/free-claude-code
- **Stars**: 2,603
- **Forks**: 489
- **Language**: Python
- **License**: MIT License
- **Created**: 2026-01-28
- **Updated**: 2026-04-22
- **Topics**: N/A
- **Open Issues**: 21

## README (excerpt)
<div align="center">

# 🤖 Free Claude Code

### Use Claude Code CLI & VSCode for free. No Anthropic API key required.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Python 3.14](https://img.shields.io/badge/python-3.14-3776ab.svg?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/downloads/)
[![uv](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/astral-sh/uv/main/assets/badge/v0.json&style=for-the-badge)](https://github.com/astral-sh/uv)
[![Tested with Pytest](https://img.shields.io/badge/testing-Pytest-00c0ff.svg?style=for-the-badge)](https://github.com/Alishahryar1/free-claude-code/actions/workflows/tests.yml)
[![Type checking: Ty](https://img.shields.io/badge/type%20checking-ty-ffcc00.svg?style=for-the-badge)](https://pypi.org/project/ty/)
[![Code style: Ruff](https://img.shields.io/badge/code%20formatting-ruff-f5a623.svg?style=for-the-badge)](https://github.com/astral-sh/ruff)
[![Logging: Loguru](https://img.shields.io/badge/logging-loguru-4ecdc4.svg?style=for-the-badge)](https://github.com/Delgan/loguru)

A lightweight proxy that routes Claude Code's Anthropic API calls to **NVIDIA NIM** (40 req/min free), **OpenRouter** (hundreds of models), **LM Studio** (fully local), or **llama.cpp** (local with Anthropic endpoints).

[Quick Start](#quick-start) · [Providers](#providers) · [Discord Bot](#discord-bot) · [Configuration](#configuration) · [Development](#development) · [Contributing](#contributing)

---

</div>

<div align="center">
  <img src="pic.png" alt="Free Claude Code in action" width="700">
  <p><em>Claude Code running via NVIDIA NIM, completely free</em></p>
</div>

## Features

| Feature                    | Description                                                                                     |
| -------------------------- | ----------------------------------------------------------------------------------------------- |
| **Zero Cost**              | 40 req/min free on NVIDIA NIM. Free models on OpenRouter. Fully local with LM Studio            |
| **Drop-in Replacement**    | Set 2 env vars. No modifications to Claude Code CLI or VSCode extension needed                  |
| **4 Providers**            | NVIDIA NIM, OpenRouter (hundreds of models), LM Studio (local), llama.cpp (`llama-server`)      |
| **Per-Model Mapping**      | Route Opus / Sonnet / Haiku to different models and providers. Mix providers freely             |
| **Thinking Token Support** | Parses `<think>` tags and `reasoning_content` into native Claude thinking blocks                |
| **Heuristic Tool Parser**  | Models outputting tool calls as text are auto-parsed into structured tool use                   |
| **Request Optimization**   | 5 categories of trivial API calls intercepted locally, saving quota and latency                 |
| **Smart Rate Limiting**    | Proactive rolling-window throttle + reactive 429 exponential backoff + optional concurrency cap |
| **Discord / Telegram Bot** | Remote autonomous coding with tree-based threading, session persistence, and live progress      |
| **Subagent Control**       | Task tool interception forces `run_in_background=False`. No runaway subagents                   |
| **Extensible**             | Clean `BaseProvider` and `MessagingPlatform` ABCs. Add new providers or platforms easily        |

## Quick Start

### Prerequisites

1. Get an API key (or use LM Studio / llama.cpp locally):
   - **NVIDIA NIM**: [build.nvidia.com/settings/api-keys](https://build.nvidia.com/settings/api-keys)
   - **OpenRouter**: [openrouter.ai/keys](https://openrouter.ai/keys)
   - **LM Studio**: No API key needed. Run locally with [LM Studio](https://lmstudio.ai)
   - **llama.cpp**: No API key needed. Run `llama-server` locally.
2. Install [Claude Code](https://github.com/anthropics/claude-code)

### Install `uv`
```bash
# Install uv (required to run the project)
pip install uv