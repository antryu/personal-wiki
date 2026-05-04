<!-- GitHub Trending: Python | 1,049 stars | +161 today -->

# raullenchai/Rapid-MLX

> The fastest local AI engine for Apple Silicon. 4.2x faster than Ollama, 0.08s cached TTFT, 100% tool calling. 17 tool parsers, prompt cache, reasoning separation, cloud routing. Drop-in OpenAI replacement. Works with Claude Code, Cursor, Aider.

## Repository Info
- **URL**: https://github.com/raullenchai/Rapid-MLX
- **Stars**: 1,049
- **Forks**: 99
- **Language**: Python
- **License**: Apache License 2.0
- **Created**: 2026-02-25
- **Updated**: 2026-05-04
- **Topics**: apple-silicon, fastapi, hacktoberfest, inference, llm, local-llm, macos, mlx, openai-api, python, tool-calling
- **Open Issues**: 35

## README (excerpt)
<p align="center">
  <img src="https://raw.githubusercontent.com/raullenchai/Rapid-MLX/main/docs/assets/logo.png" alt="Rapid-MLX" width="200">
</p>

<h1 align="center">Rapid-MLX</h1>

<p align="center">
  <strong>Run AI on your Mac. Faster than anything else.</strong>
</p>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-Apache_2.0-blue.svg" alt="License"></a>
  <a href="https://www.python.org/downloads/"><img src="https://img.shields.io/badge/python-3.10+-blue.svg" alt="Python 3.10+"></a>
  <a href="tests/"><img src="https://img.shields.io/badge/tests-2100%2B-brightgreen.svg" alt="Tests"></a>
  <a href="https://support.apple.com/en-us/HT211814"><img src="https://img.shields.io/badge/Apple_Silicon-M1%20|%20M2%20|%20M3%20|%20M4-black.svg?logo=apple" alt="Apple Silicon"></a>
</p>

<p align="center">
  Run local AI models on your Mac — no cloud, no API costs. Works with Cursor, Claude Code, and any OpenAI-compatible app.
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/raullenchai/Rapid-MLX/main/docs/assets/demo.gif" alt="Rapid-MLX demo — install, serve Gemma 4, chat, tool calling" width="700">
  <br>
  <em>pip install → serve Gemma 4 26B → chat + tool calling → works with PydanticAI, LangChain, Aider, and more.</em>
</p>

| | Your Mac | Model | Speed (tok/s = words/sec) | What works |
|:---|:---:|:---:|:---:|:---:|
| **16 GB** MacBook Air | Qwen3.5-4B | 160 tok/s | Chat, coding, tools |
| **32+ GB** Mac Mini / Studio | Nemotron-Nano 30B | 141 tok/s | 🆕 Fastest 30B, 100% tools |
| **32+ GB** Mac Mini / Studio | Qwen3.6-35B | 95 tok/s | 256 experts, 262K context |
| **64 GB** Mac Mini / Studio | Qwen3.5-35B | 83 tok/s | Best balance of smart + fast |
| **96+ GB** Mac Studio / Pro | Qwen3.5-122B | 57 tok/s | Frontier-level intelligence |
| **128+ GB** Mac Studio Ultra | 🆕 DeepSeek V4 Flash 158B-A13B | 31-56 tok/s | Day-0 frontier MoE, 1M context |

<details>
<summary><b>New to local AI? Quick glossary</b></summary>

- **tok/s** (tokens per second) — roughly how many words the AI generates per second. Higher = faster.
- **4bit / 8bit** — compression levels for models. 4bit uses less memory (recommended); 8bit is higher quality.
- **TTFT** (Time To First Token) — how long before the AI starts responding.
- **Tool calling** — the AI can call functions in your code. Used by Cursor, Claude Code, and coding assistants.
- **OpenAI API compatible** — Rapid-MLX speaks the same language as ChatGPT's API, so any app that works with ChatGPT can work with Rapid-MLX by just changing the server address.
- **Ollama / llama.cpp** — other popular tools for running local AI. Rapid-MLX is 2-4x faster on Apple Silicon.

</details>

---

## Quick Start

**Step 1 — Install** (pick one):

```bash
# Homebrew (recommended — just works, no Python version issues)
brew install raullenchai/rapid-mlx/rapid-mlx

# pip (requires Python 3.10+ — macOS ships 3.9, so install Python first if needed)
pip install rapid-mlx

# Or one-liner with auto-setup (installs Python if needed)
curl -fsSL https://raullenchai.github.io/Rapid-MLX/install.sh | bash
```

> **"No matching distribution" error?** Your Python is too old. Run `python3 --version` — if it says 3.9, install a newer Python: `brew install python@3.12` then `python3.12 -m pip install rapid-mlx`

**Step 2 — Serve a model:**
```bash
rapid-mlx serve gemma-4-26b
```
First run downloads the model (~14 GB) — you'll see a progress bar. Wait for `Ready: http://localhost:8000/v1`.

**Step 3 — Chat** (open a **second** terminal tab):
```bash
curl http://localhost:8000/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{"model":"default","messages":[{"role":"user","content":"Say hello"}]}'
```

That's it — you now have an OpenAI-compatible AI server on `localhost:8000`. Point any app at `http://localhost:8000/v1` and it just works.

> **Tip:** Run `rapid-mlx models` to see all available model aliases. For a smaller/faster model, try `rapid-mlx serv