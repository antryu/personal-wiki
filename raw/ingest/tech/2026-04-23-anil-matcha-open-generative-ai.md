<!-- GitHub Trending: JavaScript | 6,839 stars | +384 today -->

# Anil-matcha/Open-Generative-AI

> Uncensored, open-source alternative to Higgsfield AI, Freepik, Krea, Openart AI — Free, unrestricted AI image & video generation studio with 200+ models (Flux, Midjourney, Kling, Sora, Veo). No content filters. Self-hosted, MIT licensed.

## Repository Info
- **URL**: https://github.com/Anil-matcha/Open-Generative-AI
- **Stars**: 6,839
- **Forks**: 1,328
- **Language**: JavaScript
- **License**: N/A
- **Created**: 2023-05-09
- **Updated**: 2026-04-23
- **Topics**: ai-art-generator, ai-image-generation, ai-video-generation, creative-tools, flux-1, generative-ai, higgsfield, higgsfield-ai, higgsfield-alternative, image-to-video, javascript, kling-ai, midjourney-alternative, muapi, open-source, sora-alternative, text-to-video, uncensored, unrestricted, wan-video
- **Open Issues**: 5

## README (excerpt)
# Open Generative AI — Uncensored Open-Source Alternative to Higgsfield AI, Freepik, Krea, Openart AI

> **The free, open-source, unrestricted alternative to Higgsfield AI, Freepik, Krea, Openart AI.** Generate AI images and videos using 200+ state-of-the-art models — no content filters, no closed ecosystem, no subscription fees.

> 💡 **Looking for GPT-Image-2 prompts?** Check out [Awesome GPT-Image-2 API Prompts](https://github.com/Anil-matcha/Awesome-GPT-Image-2-API-Prompts) — a curated collection of 40+ ready-to-use prompts for the OpenAI `gpt-image-2` API covering portraits, posters, UI mockups, game screenshots, and more.

> 🤖 **Automate Higgsfield, Freepik, Krea, Openart & more with AI coding agents:** [Generative-Media-Skills](https://github.com/SamurAIGPT/Generative-Media-Skills) — a library of skills that let agents like **Claude Code**, **Codex**, and other coding assistants drive 200+ image/video models end-to-end (prompt → generate → edit → stitch) directly from your terminal. Perfect for building automated media pipelines without touching a UI.

## 🌐 Try it Online — No Install Required

**Hosted version:** [https://dev.muapi.ai/open-generative-ai](https://dev.muapi.ai/open-generative-ai)

Use all four studios (Image, Video, Lip Sync, Cinema) directly in your browser — no Node.js, no setup. Sign up for a free account to start generating. The hosted version is always up to date with the latest models.

**Community:** Join [Discord](https://discord.gg/sqFYv8ugND) for discussions and support

**Follow** the [creator](https://x.com/matchaman11) for updates

**Happy Horse top video model coming soon:** Follow [Happy Horse AI](https://github.com/Anil-matcha/HappyHorse-1.0-API) for updates   

---

## ⬇️ Download Desktop App

One-click installers — no Node.js or terminal required.

| Platform | Download |
|---|---|
| macOS Apple Silicon (M1/M2/M3/M4) | [Open Generative AI-1.0.2-arm64.dmg](https://github.com/Anil-matcha/Open-Generative-AI/releases/download/v1.0.2/Open.Generative.AI-1.0.2-arm64.dmg) |
| macOS Intel (x64) | [Open Generative AI-1.0.2.dmg](https://github.com/Anil-matcha/Open-Generative-AI/releases/download/v1.0.2/Open.Generative.AI-1.0.2.dmg) |
| Windows (x64 + ARM64) | [Open Generative AI Setup 1.0.2.exe](https://github.com/Anil-matcha/Open-Generative-AI/releases/download/v1.0.2/Open.Generative.AI.Setup.1.0.2.exe) |
| Linux (Ubuntu x64) | Build locally with `npm run electron:build:linux` |

All releases: [github.com/Anil-matcha/Open-Generative-AI/releases](https://github.com/Anil-matcha/Open-Generative-AI/releases)

### macOS Installation Guide

Because the app is not notarized by Apple, macOS Gatekeeper will block it on first launch. Follow these steps:

**Step 1** — Mount the DMG and drag the app to `/Applications`

**Step 2** — Open Terminal and run:
```bash
xattr -cr "/Applications/Open Generative AI.app"
```

**Step 3** — Right-click the app in `/Applications` → click **Open** → click **Open** again on the dialog

> You only need to do this once. After that, the app opens normally.

**Alternative (no Terminal):**
1. Try to open the app — macOS will block it
2. Go to **System Settings → Privacy & Security**
3. Scroll down to find _"Open Generative AI was blocked"_
4. Click **Open Anyway** → **Open**

### Windows Installation — SmartScreen warning fix

Windows SmartScreen may show a warning because the installer is not code-signed:

1. Click **More info** on the SmartScreen dialog
2. Click **Run anyway**

The app will install silently to `%LocalAppData%` with a Start Menu shortcut.

### Ubuntu / Linux Installation

Linux artifacts are available when building with Electron Builder:

```bash
# Build Linux installers (AppImage + .deb)
npm run electron:build:linux
```

Generated files are written to the `release/` folder:
- **AppImage** — portable, run directly after making executable:
  ```bash
  chmod +x "release/Open Generative AI-*.AppImage"
  ./release/Open\ Generative\ AI-*.AppImage
  ```
- **.deb** —