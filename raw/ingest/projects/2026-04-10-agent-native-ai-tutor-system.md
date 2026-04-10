<!-- GitHub Trending: Python | 15,389 stars | +1,310 today -->

# HKUDS/DeepTutor

> "DeepTutor: Agent-Native Personalized Learning Assistant"

## Repository Info
- **URL**: https://github.com/HKUDS/DeepTutor
- **Stars**: 15,392
- **Forks**: 2,040
- **Language**: Python
- **License**: Apache License 2.0
- **Created**: 2025-12-28
- **Updated**: 2026-04-10
- **Topics**: ai-agents, ai-tutor, clawdbot, cli-tool, deepresearch, interactive-learning, large-language-models, multi-agent-systems, rag
- **Open Issues**: 17

## README (excerpt)
<div align="center">

<img src="assets/logo-ver2.png" alt="DeepTutor" width="140" style="border-radius: 15px;">

# DeepTutor: Agent-Native Personalized Tutoring

<a href="https://trendshift.io/repositories/17099" target="_blank"><img src="https://trendshift.io/api/badge/repositories/17099" alt="HKUDS%2FDeepTutor | Trendshift" style="width: 250px; height: 55px;" width="250" height="55"/></a>

[![Python 3.11+](https://img.shields.io/badge/Python-3.11%2B-3776AB?style=flat-square&logo=python&logoColor=white)](https://www.python.org/downloads/)
[![Next.js 16](https://img.shields.io/badge/Next.js-16-000000?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org/)
[![License](https://img.shields.io/badge/License-Apache_2.0-blue?style=flat-square)](LICENSE)
[![GitHub release](https://img.shields.io/github/v/release/HKUDS/DeepTutor?style=flat-square&color=brightgreen)](https://github.com/HKUDS/DeepTutor/releases)
[![arXiv](https://img.shields.io/badge/arXiv-Coming_Soon-b31b1b?style=flat-square&logo=arxiv&logoColor=white)](#)

[![Discord](https://img.shields.io/badge/Discord-Community-5865F2?style=flat-square&logo=discord&logoColor=white)](https://discord.gg/eRsjPgMU4t)
[![Feishu](https://img.shields.io/badge/Feishu-Group-00D4AA?style=flat-square&logo=feishu&logoColor=white)](./Communication.md)
[![WeChat](https://img.shields.io/badge/WeChat-Group-07C160?style=flat-square&logo=wechat&logoColor=white)](https://github.com/HKUDS/DeepTutor/issues/78)

[Features](#-key-features) · [Get Started](#-get-started) · [Explore](#-explore-deeptutor) · [TutorBot](#-tutorbot--persistent-autonomous-ai-tutors) · [CLI](#%EF%B8%8F-deeptutor-cli--agent-native-interface) · [Community](#-community--ecosystem)

[🇨🇳 中文](assets/README/README_CN.md) · [🇯🇵 日本語](assets/README/README_JA.md) · [🇪🇸 Español](assets/README/README_ES.md) · [🇫🇷 Français](assets/README/README_FR.md) · [🇸🇦 العربية](assets/README/README_AR.md) · [🇷🇺 Русский](assets/README/README_RU.md) · [🇮🇳 हिन्दी](assets/README/README_HI.md) · [🇵🇹 Português](assets/README/README_PT.md)

</div>

---
### 📰 News

> **[2026.4.4]** Long time no see! ✨ DeepTutor v1.0.0 is finally here — an agent-native evolution featuring a ground-up architecture rewrite, TutorBot, and flexible mode switching under the Apache-2.0 license. A new chapter begins, and our story continues! 

> **[2026.2.6]** 🚀 We've reached 10k stars in just 39 days! A huge thank you to our incredible community for the support! 

> **[2026.1.1]** Happy New Year! Join our [Discord](https://discord.gg/eRsjPgMU4t), [WeChat](https://github.com/HKUDS/DeepTutor/issues/78), or [Discussions](https://github.com/HKUDS/DeepTutor/discussions) — let's shape the future of DeepTutor together!

> **[2025.12.29]** DeepTutor is officially released!

### 📦 Releases

> **[2026.4.10]** [v1.0.0-beta.4](https://github.com/HKUDS/DeepTutor/releases/tag/v1.0.0-beta.4) — Embedding progress tracking with HTTP 429 rate limit retry, cross-platform start tour dependency management, and case-insensitive MIME validation fix.

> **[2026.4.8]** [v1.0.0-beta.3](https://github.com/HKUDS/DeepTutor/releases/tag/v1.0.0-beta.3) — Remove litellm dependency with native OpenAI/Anthropic SDK providers, Windows Math Animator compatibility, robust JSON parsing for LLM outputs, Guided Learning KaTeX & navigation fixes, and full i18n coverage for Chinses.

> **[2026.4.7]** [v1.0.0-beta.2](https://github.com/HKUDS/DeepTutor/releases/tag/v1.0.0-beta.2) — Runtime cache invalidation for hot settings reload, MinerU nested output support, mimic WebSocket fix, Python 3.11+ minimum, and CI improvements.

> **[2026.4.4]** [v1.0.0-beta.1](https://github.com/HKUDS/DeepTutor/releases/tag/v1.0.0-beta.1) — Agent-native architecture rewrite (DeepTutor 2.0) with two-layer plugin model (Tools + Capabilities), CLI & SDK entry points, TutorBot multi-channel bot agent, Co-Writer, Guided Learning, and persistent memory.

<details>
<summary><b>Past releases</b></summary>

> **[2026.1.23]*