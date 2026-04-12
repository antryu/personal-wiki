<!-- GitHub Trending: TypeScript | 15,319 stars | +408 today -->

# jamiepine/voicebox

> The open-source voice synthesis studio

## Repository Info
- **URL**: https://github.com/jamiepine/voicebox
- **Stars**: 15,320
- **Forks**: 1,833
- **Language**: TypeScript
- **License**: MIT License
- **Created**: 2026-01-25
- **Updated**: 2026-04-12
- **Topics**: ai, cuda, mlx, qwen3-tts, qwen3-tts-ui, voice-ai, voice-clone, whisper
- **Open Issues**: 204

## README (excerpt)
<p align="center">
  <img src=".github/assets/icon-dark.webp" alt="Voicebox" width="120" height="120" />
</p>

<h1 align="center">Voicebox</h1>

<p align="center">
  <strong>The open-source voice synthesis studio.</strong><br/>
  Clone voices. Generate speech. Apply effects. Build voice-powered apps.<br/>
  All running locally on your machine.
</p>

<p align="center">
  <a href="https://github.com/jamiepine/voicebox/releases">
    <img src="https://img.shields.io/github/downloads/jamiepine/voicebox/total?style=flat&color=blue" alt="Downloads" />
  </a>
  <a href="https://github.com/jamiepine/voicebox/releases/latest">
    <img src="https://img.shields.io/github/v/release/jamiepine/voicebox?style=flat" alt="Release" />
  </a>
  <a href="https://github.com/jamiepine/voicebox/stargazers">
    <img src="https://img.shields.io/github/stars/jamiepine/voicebox?style=flat" alt="Stars" />
  </a>
  <a href="https://github.com/jamiepine/voicebox/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/jamiepine/voicebox?style=flat" alt="License" />
  </a>
</p>

<p align="center">
  <a href="https://voicebox.sh">voicebox.sh</a> •
  <a href="https://docs.voicebox.sh">Docs</a> •
  <a href="#download">Download</a> •
  <a href="#features">Features</a> •
  <a href="#api">API</a>
</p>

<br/>

<p align="center">
  <a href="https://voicebox.sh">
    <img src="landing/public/assets/app-screenshot-1.webp" alt="Voicebox App Screenshot" width="800" />
  </a>
</p>

<p align="center">
  <em>Click the image above to watch the demo video on <a href="https://voicebox.sh">voicebox.sh</a></em>
</p>

<br/>

<p align="center">
  <img src="landing/public/assets/app-screenshot-2.webp" alt="Voicebox Screenshot 2" width="800" />
</p>

<p align="center">
  <img src="landing/public/assets/app-screenshot-3.webp" alt="Voicebox Screenshot 3" width="800" />
</p>

<br/>

## What is Voicebox?

Voicebox is a **local-first voice cloning studio** — a free and open-source alternative to ElevenLabs. Clone voices from a few seconds of audio, generate speech in 23 languages across 5 TTS engines, apply post-processing effects, and compose multi-voice projects with a timeline editor.

- **Complete privacy** — models and voice data stay on your machine
- **5 TTS engines** — Qwen3-TTS, LuxTTS, Chatterbox Multilingual, Chatterbox Turbo, and HumeAI TADA
- **23 languages** — from English to Arabic, Japanese, Hindi, Swahili, and more
- **Post-processing effects** — pitch shift, reverb, delay, chorus, compression, and filters
- **Expressive speech** — paralinguistic tags like `[laugh]`, `[sigh]`, `[gasp]` via Chatterbox Turbo
- **Unlimited length** — auto-chunking with crossfade for scripts, articles, and chapters
- **Stories editor** — multi-track timeline for conversations, podcasts, and narratives
- **API-first** — REST API for integrating voice synthesis into your own projects
- **Native performance** — built with Tauri (Rust), not Electron
- **Runs everywhere** — macOS (MLX/Metal), Windows (CUDA), Linux, AMD ROCm, Intel Arc, Docker

---

## Download

| Platform              | Download                                               |
| --------------------- | ------------------------------------------------------ |
| macOS (Apple Silicon) | [Download DMG](https://voicebox.sh/download/mac-arm)   |
| macOS (Intel)         | [Download DMG](https://voicebox.sh/download/mac-intel) |
| Windows               | [Download MSI](https://voicebox.sh/download/windows)   |
| Docker                | `docker compose up`                                    |

> **[View all binaries →](https://github.com/jamiepine/voicebox/releases/latest)**

> **Linux** — Pre-built binaries are not yet available. See [voicebox.sh/linux-install](https://voicebox.sh/linux-install) for build-from-source instructions.

---

## Features

### Multi-Engine Voice Cloning

Five TTS engines with different strengths, switchable per-generation:

| Engine                      | Languages | Strengths                 