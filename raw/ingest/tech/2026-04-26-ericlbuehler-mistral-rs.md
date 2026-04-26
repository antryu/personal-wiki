<!-- GitHub Trending: Rust | 7,057 stars | +5 today -->

# EricLBuehler/mistral.rs

> Fast, flexible LLM inference

## Repository Info
- **URL**: https://github.com/EricLBuehler/mistral.rs
- **Stars**: 7,057
- **Forks**: 586
- **Language**: Rust
- **License**: MIT License
- **Created**: 2024-02-26
- **Updated**: 2026-04-26
- **Topics**: llm, rust, uqff
- **Open Issues**: 348

## README (excerpt)
<a name="top"></a>
<!--
<h1 align="center">
  mistral.rs
</h1>
-->

<div align="center">
  <img src="https://raw.githubusercontent.com/EricLBuehler/mistral.rs/master/res/banner.png" alt="mistral.rs" width="100%" style="max-width: 800px;">
</div>

<h3 align="center">
Fast, flexible LLM inference.
</h3>

<p align="center">
  | <a href="https://ericlbuehler.github.io/mistral.rs/"><b>Documentation</b></a> | <a href="https://crates.io/crates/mistralrs"><b>Rust SDK</b></a> | <a href="https://ericlbuehler.github.io/mistral.rs/PYTHON_SDK.html"><b>Python SDK</b></a> | <a href="https://discord.gg/SZrecqK8qw"><b>Discord</b></a> |
</p>

<p align="center">
  <a href="https://github.com/EricLBuehler/mistral.rs/stargazers">
    <img src="https://img.shields.io/github/stars/EricLBuehler/mistral.rs?style=social&label=Star" alt="GitHub stars">
  </a>
</p>

## Latest

- **Gemma 4**: Full multimodal: text, image, video, and audio input. [Guide](https://ericlbuehler.github.io/mistral.rs/GEMMA4.html) | [Video setup](https://ericlbuehler.github.io/mistral.rs/VIDEO.html)
- **MXFP4 ISQ quantization**: MXFP4 with optimized decode kernels for faster, smaller models. [Quantization docs](https://ericlbuehler.github.io/mistral.rs/QUANTS.html)
- **Qwen 3.5 model family**: Support for the Qwen 3.5 series including vision. [Guide](https://ericlbuehler.github.io/mistral.rs/QWEN3_5.html)

## Why mistral.rs?

- **Any Hugging Face model, zero config**: Just `mistralrs run -m user/model`.
- **True multimodality**: Text, vision, video, and audio, speech generation, image generation, and embeddings in one engine.
- **Full quantization control**: Choose the precise quantization you want to use, or make your own UQFF with `mistralrs quantize`.
- **Built-in web UI**: `mistralrs serve --ui` gives you a web interface instantly.
- **Hardware-aware**: `mistralrs tune` benchmarks your system and picks optimal quantization + device mapping.
- **Flexible SDKs**: Python package and Rust crate to build your projects.
- **[Agentic features](https://ericlbuehler.github.io/mistral.rs/AGENTS.html)** — server-side tool loop, web search, MCP client, and HTTP tool dispatch

## Quick Start

### Install

**Linux/macOS:**
```bash
curl --proto '=https' --tlsv1.2 -sSf https://raw.githubusercontent.com/EricLBuehler/mistral.rs/master/install.sh | sh
```

**Windows (PowerShell):**
```powershell
irm https://raw.githubusercontent.com/EricLBuehler/mistral.rs/master/install.ps1 | iex
```

[Manual installation & other platforms](https://ericlbuehler.github.io/mistral.rs/INSTALLATION.html)

### Run Your First Model

```bash
# Interactive chat
mistralrs run -m Qwen/Qwen3-4B

# One-shot prompt (no interactive session)
mistralrs run -m Qwen/Qwen3-4B -i "What is the capital of France?"

# One-shot with an image
mistralrs run -m google/gemma-4-E4B-it --image photo.jpg -i "Describe this image"

# Or start a server with web UI
mistralrs serve --ui -m google/gemma-4-E4B-it
```

Then visit `http://localhost:1234/ui` for the web chat interface.

### The `mistralrs` CLI

The CLI is designed to be **zero-config**: just point it at a model and go.

- **Auto-detection**: Automatically detects model architecture, quantization format, and chat template
- **All-in-one**: Single binary for chat, server, benchmarks, and web UI (`run`, `serve`, `bench`)
- **Hardware tuning**: Run `mistralrs tune` to automatically benchmark and configure optimal settings for your hardware
- **Format-agnostic**: Works with Hugging Face models, GGUF files, and [UQFF quantizations](https://ericlbuehler.github.io/mistral.rs/UQFF.html) seamlessly

```bash
# Auto-tune for your hardware and emit a config file
mistralrs tune -m Qwen/Qwen3-4B --emit-config config.toml

# Run using the generated config
mistralrs from-config -f config.toml

# Diagnose system issues (CUDA, Metal, HuggingFace connectivity)
mistralrs doctor
```

[Full CLI documentation](https://ericlbuehler.github.io/mistral.rs/CLI.html)

<details open>
  <summary><b>Web Chat Demo</