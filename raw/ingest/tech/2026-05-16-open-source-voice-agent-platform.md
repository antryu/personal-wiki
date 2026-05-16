<!-- GitHub Trending: Python | 1,312 stars | +297 today -->

# dograh-hq/dograh

> Open Source Voice Agent Platform

## Repository Info
- **URL**: https://github.com/dograh-hq/dograh
- **Stars**: 1,312
- **Forks**: 311
- **Language**: Python
- **License**: BSD 2-Clause "Simplified" License
- **Created**: 2025-09-09
- **Updated**: 2026-05-16
- **Topics**: ai, ai-agents, conversational-ai, fastapi, llm, nextjs, open-source, outbound-calls, pipecat, python, self-hosted, speech-to-text, telephony, text-to-speech, voice, voice-agents, voice-ai, voice-assistant, voip, webrtc
- **Open Issues**: 10

## README (excerpt)
# Dograh AI

**The open-source, self-hostable alternative to Vapi & Retell** — build production voice agents with a drag-and-drop workflow builder. From zero to a working bot in under 2 minutes.

<p align="center">
  <a href="https://app.dograh.com">
    <img src="https://img.shields.io/badge/▶_Try_the_Cloud-app.dograh.com-2563eb?style=for-the-badge" alt="Try the Cloud">
  </a>
  &nbsp;
  <a href="#-get-started">
    <img src="https://img.shields.io/badge/⚡_Self--host_in_60s-One_command-111827?style=for-the-badge" alt="Self-host in 60s">
  </a>
  &nbsp;
  <a href="https://join.slack.com/t/dograh-community/shared_invite/zt-3czr47sw5-MSg1J0kJ7IMPOCHF~03auQ">
    <img src="https://img.shields.io/badge/💬_Join_Slack-Community-4A154B?style=for-the-badge&logo=slack" alt="Join Slack">
  </a>
</p>

<p align="center">
  <a href="https://docs.dograh.com">📖 Docs</a> &nbsp;·&nbsp;
  <a href="LICENSE">📜 BSD 2-Clause</a>
</p>

<p align="center">
  <img src="docs/images/hero.gif" alt="Dograh in action — build a workflow, launch a voice agent, talk to it" width="80%">
</p>

- **100% open source**, self-hostable — no vendor lock-in, unlike Vapi or Retell
- **Full control & transparency** — every line of code is open, with flexible LLM / TTS / STT integration
- **Maintained by YC alumni and exit founders**, committed to keeping voice AI open

## 🎥 Featured

<div align="center">
  <a href="https://www.youtube.com/watch?v=xD9JEvfCH9k">
    <img src="https://img.youtube.com/vi/xD9JEvfCH9k/maxresdefault.jpg" alt="Dograh featured by Better Stack" width="80%" style="border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
  </a>
  <br>
  <em>Featured by <strong>Better Stack</strong> — a hands-on look at Dograh</em>
</div>

<details>
<summary>📺 Prefer a 2-minute product walkthrough? Click here.</summary>

<div align="center">
  <a href="https://youtu.be/9gPneyf9M9w">
    <img src="docs/images/video_thumbnail_1.png" alt="Watch Dograh AI Demo Video" width="70%" style="border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
  </a>
</div>

</details>

## ⚖️ Dograh vs Vapi vs Retell

An honest comparison on the axes that matter most to teams evaluating voice AI platforms.

|  | **Dograh** | **Vapi** | **Retell** |
|---|---|---|---|
| **License** | BSD 2-Clause (open source) | Proprietary | Proprietary |
| **Self-hostable** | ✅ Yes — one Docker command | ❌ SaaS only | ❌ SaaS only |
| **Pricing** | Free (self-host) · usage-based (cloud) | Per-minute SaaS | Per-minute SaaS |
| **Bring your own LLM / STT / TTS** | ✅ Any provider, or use Dograh's stack | Configurable within their integrations | Configurable within their integrations |
| **Source-level customization** | ✅ Every line is yours to modify | ❌ Closed source | ❌ Closed source |
| **Data residency** | Your infra, your rules | Their cloud | Their cloud |
| **Vendor lock-in** | None | Full | Full |


## 🚀 Get Started

##### Download and setup Dograh on your Local Machine

> **Note**
> We collect anonymous usage data to improve the product. You can opt out by setting the `ENABLE_TELEMETRY` to `false` in the below command.

> **Note**
> If you wish to run the platform on a remote server instead, checkout our [Documentation](https://docs.dograh.com/deployment/docker#option-2:-remote-server-deployment)

```bash
curl -o docker-compose.yaml https://raw.githubusercontent.com/dograh-hq/dograh/main/docker-compose.yaml && REGISTRY=ghcr.io/dograh-hq ENABLE_TELEMETRY=true docker compose up --pull always
```

> **Note**
> First startup may take 2-3 minutes to download all images. Once running, open http://localhost:3010 to create your first AI voice assistant!
> For common issues and solutions, see 🔧 **[Troubleshooting](docs/troubleshooting.md)**.

### 🎙️ Your First Voice Bot

1. Open [http://localhost:3010](http://localhost:3010) in your browser.
2. Pick **Inbound** or **Outbound**, name your bot (e.g. _Lead Qualification_), and describe the use case in 5–10 words (e.g. _Screen insurance form s