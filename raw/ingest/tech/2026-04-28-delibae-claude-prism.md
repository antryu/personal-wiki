<!-- GitHub Trending: TypeScript | 1,290 stars | +77 today -->

# delibae/claude-prism

> An offline-first scientific writing workspace powered by Claude. LaTeX + Python + 100+ scientific skills all running locally.

## Repository Info
- **URL**: https://github.com/delibae/claude-prism
- **Stars**: 1,290
- **Forks**: 116
- **Language**: TypeScript
- **License**: MIT License
- **Created**: 2026-02-20
- **Updated**: 2026-04-28
- **Topics**: academic, ai, claude, claude-code, desktop-app, editor, latex, llm, offline, open-source, privacy, python, research, rust, scientific-writing, tauri, tectonic, zotero
- **Open Issues**: 19

## README (excerpt)
<p align="center">
  <img src="./apps/desktop/src-tauri/icons/icon.png" width="120" height="120" alt="ClaudePrism" />
</p>

<h1 align="center">ClaudePrism</h1>

<p align="center">
  An offline-first scientific writing workspace powered by Claude.<br/>
  LaTeX + Python + 100+ scientific skills — runs on your desktop.
</p>

<p align="center">
  <a href="./README.md">English</a> ·
  <a href="./README.ko.md">한국어</a> ·
  <a href="./README.ja.md">日本語</a> ·
  <a href="./README.zh-CN.md">简体中文</a>
</p>

<p align="center">
  <img src="./assets/demo/main.webp" alt="ClaudePrism Demo" width="800" />
</p>

<p align="center">
  <a href="https://claudeprism.delibae.dev?utm_source=github&utm_medium=readme&utm_campaign=launch_v054">
    <img src="https://img.shields.io/badge/Website-claudeprism.dev-blue?style=flat-square&logo=googlechrome&logoColor=white" alt="Website" />
  </a>&nbsp;
  <a href="https://github.com/delibae/claude-prism/releases/latest/download/ClaudePrism-macOS.dmg">
    <img src="https://img.shields.io/badge/Download-macOS_(Apple_Silicon)-black?style=for-the-badge&logo=apple&logoColor=white" alt="Download for macOS (Apple Silicon)" />
  </a>&nbsp;
  <a href="https://github.com/delibae/claude-prism/releases/latest/download/ClaudePrism-macOS-Intel.dmg">
    <img src="https://img.shields.io/badge/Download-macOS_(Intel)-555555?style=for-the-badge&logo=apple&logoColor=white" alt="Download for macOS (Intel)" />
  </a>&nbsp;
  <a href="https://github.com/delibae/claude-prism/releases/latest/download/ClaudePrism-Windows-setup.exe">
    <img src="https://img.shields.io/badge/Download-Windows-0078D4?style=for-the-badge&logo=windows&logoColor=white" alt="Download for Windows" />
  </a>&nbsp;
  <a href="https://github.com/delibae/claude-prism/releases/latest/download/ClaudePrism-Linux.AppImage">
    <img src="https://img.shields.io/badge/Download-Linux_(AppImage)-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Download for Linux" />
  </a>
</p>
<p align="center">
  <a href="https://github.com/delibae/claude-prism/releases">
    <img src="https://img.shields.io/github/v/release/delibae/claude-prism?style=flat-square&label=Latest%20Release&color=green" alt="Latest Release" />
  </a>
</p>

---

## Why ClaudePrism?

[OpenAI Prism](https://openai.com/prism/) is a cloud-based LaTeX workspace — all your files and data must be uploaded to OpenAI's servers to use it.

ClaudePrism is a **local-first** alternative — your files are stored on your disk, compiled offline, and edited locally. AI features require sending content to Anthropic's API for inference (see [data usage](https://code.claude.com/docs/en/data-usage)).

| | OpenAI Prism | ClaudePrism |
|---|:---:|:---:|
| AI Model | GPT-5.2 | **Claude Opus / Sonnet / Haiku** |
| Runtime | Browser (cloud) | **Native desktop (Tauri 2 + Rust)** |
| LaTeX | Cloud compilation | **Tectonic (embedded, offline)** |
| Python Environment | — | **Built-in uv + venv — one-click scientific Python setup** |
| Scientific Skills | — | **100+ domain skills (bioinformatics, cheminformatics, ML, ...)** |
| Getting Started | Account setup required | **Install and go — template gallery + project wizard** |
| Version Control | — | **Git-based history with labels & diff** |
| Source Code | Proprietary | **Open source (MIT)** |

### Data & Privacy

ClaudePrism stores and compiles your documents locally — nothing is uploaded to a remote server for storage. However, when you use AI features, **prompts and file contents that Claude reads are sent to Anthropic's API for inference**, just like any cloud-based LLM tool. See [Claude Code data usage](https://code.claude.com/docs/en/data-usage) for retention policies and opt-out options.

---

## Features

### Python Environment (uv)
ClaudePrism integrates [uv](https://docs.astral.sh/uv/) — the fast Python package manager — directly into the app. One click to install uv, one click to create a project-level virtual environment. Claude Code automatically uses the `.venv` w