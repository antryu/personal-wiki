<!-- GitHub Trending: TypeScript | 17,227 stars | +401 today -->

# heygen-com/hyperframes

> Write HTML. Render video. Built for agents.

## Repository Info
- **URL**: https://github.com/heygen-com/hyperframes
- **Stars**: 17,227
- **Forks**: 1,601
- **Language**: TypeScript
- **License**: Apache License 2.0
- **Created**: 2026-03-10
- **Updated**: 2026-05-11
- **Topics**: ai, animation, ffmpeg, framework, gsap, html, mcp, puppeteer, rendering, typescript, video
- **Open Issues**: 45

## README (excerpt)
<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="docs/logo/dark.svg">
    <source media="(prefers-color-scheme: light)" srcset="docs/logo/light.svg">
    <img alt="HyperFrames" src="docs/logo/light.svg" width="300">
  </picture>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/hyperframes"><img src="https://img.shields.io/npm/v/hyperframes.svg?style=flat" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/hyperframes"><img src="https://img.shields.io/npm/dm/hyperframes.svg?style=flat" alt="npm downloads"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-blue.svg" alt="License"></a>
  <a href="https://nodejs.org"><img src="https://img.shields.io/badge/node-%3E%3D22-brightgreen" alt="Node.js"></a>
  <a href="https://discord.gg/EbK98HBPdk"><img src="https://img.shields.io/badge/Discord-Join-5865F2?logo=discord&logoColor=white" alt="Discord"></a>
</p>

<p align="center"><b>Write HTML. Render video. Built for agents.</b></p>

<p align="center">
  <img src="https://static.heygen.ai/hyperframes-oss/docs/images/hfgif-1280.webp" alt="HyperFrames demo — HTML code on the left transforms into a rendered video on the right" width="800">
</p>

Hyperframes is an open-source video rendering framework that lets you create, preview, and render HTML-based video compositions — with first-class support for AI agents.

## Quick Start

### Option 1: With an AI coding agent (recommended)

Install the HyperFrames skills, then describe the video you want:

```bash
npx skills add heygen-com/hyperframes
```

This teaches your agent (Claude Code, Cursor, Gemini CLI, Codex) how to write correct compositions, GSAP timelines, Tailwind v4 browser-runtime styles, and first-party adapter animations. In Claude Code, the skills register as slash commands — invoke `/hyperframes` to author compositions, `/hyperframes-cli` for the dev-loop commands (init, lint, preview, render), `/hyperframes-media` for asset preprocessing (TTS, transcription, background removal), `/tailwind` for `init --tailwind` projects, `/gsap` for timeline animation help, or the adapter skills (`/animejs`, `/css-animations`, `/lottie`, `/three`, `/waapi`) when a composition uses those runtimes.

For Claude Design, open [`docs/guides/claude-design-hyperframes.md`](https://github.com/heygen-com/hyperframes/blob/main/docs/guides/claude-design-hyperframes.md) on GitHub and click the download button (↓) to save it, then attach the file to your Claude Design chat. It produces a valid first draft; refine in any AI coding agent. See the [Claude Design guide](https://hyperframes.heygen.com/guides/claude-design).

For Codex specifically, the same skills are also exposed as an [OpenAI Codex plugin](./.codex-plugin/plugin.json) — sparse-install just the plugin surface:

```bash
codex plugin marketplace add heygen-com/hyperframes --sparse .codex-plugin --sparse skills --sparse assets
```

For Claude Code, the repo also ships a [Claude Code plugin manifest](./.claude-plugin/plugin.json): test it locally with `claude --plugin-dir .`. The manifest intentionally omits `skills` because Claude Code auto-discovers the root `skills/` directory by convention, and for marketplace submission use the title `HyperFrames by HeyGen` plus the black/white icon assets at [`assets/claude-code-icon-dark.svg`](./assets/claude-code-icon-dark.svg) and [`assets/claude-code-icon-light.svg`](./assets/claude-code-icon-light.svg) for the two theme slots.
For Cursor, the same skills are packaged as a [Cursor plugin](./.cursor-plugin/plugin.json) — install from the Cursor Marketplace, or sideload by cloning this repo and pointing **Settings → Plugins → Load unpacked** at the repo root.

#### Try it: example prompts

Copy any of these into your agent to get started. The `/hyperframes` prefix loads the skill context explicitly so you get correct output the first time.

**Cold start — describe what you want:**

> Using `/hyperframes`, cr