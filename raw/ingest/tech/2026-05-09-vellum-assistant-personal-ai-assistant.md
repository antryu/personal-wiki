<!-- GitHub Trending: TypeScript | 328 stars | +70 today -->

# vellum-ai/vellum-assistant

> A personal AI assistant that evolves with you. Memory, personality, proactive reach-outs — across macOS, Telegram, and Slack.

## Repository Info
- **URL**: https://github.com/vellum-ai/vellum-assistant
- **Stars**: 328
- **Forks**: 40
- **Language**: TypeScript
- **License**: MIT License
- **Created**: 2026-02-07
- **Updated**: 2026-05-09
- **Topics**: ai-assistant, anthropic, llm, macos, open-source, openai, personal-ai, slack-bot, telegram-bot, typescript
- **Open Issues**: 117

## README (excerpt)
<p align="center">
  <img src="assets/banner.png" alt="Vellum Assistant" width="100%">
</p>

<p align="center">
  <a href="https://vellum.ai/docs"><img src="https://img.shields.io/badge/Docs-vellum.ai%2Fdocs-FFD700?style=for-the-badge" alt="Documentation"></a>
  <a href="https://vellum.ai/community"><img src="https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="Discord"></a>
  <a href="https://github.com/vellum-ai/vellum-assistant/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License: MIT"></a>
  <a href="https://vellum.ai"><img src="https://img.shields.io/badge/Built%20by-Vellum-blueviolet?style=for-the-badge" alt="Built by Vellum"></a>
</p>

<p align="center"><b>A personal AI assistant that evolves with you.</b><br>
It learns how you work, remembers what matters, and acts before you ask. Yours to name, shape, and extend.</p>

---

## What it does

| Area | Summary |
|------|---------|
| **Memory** | **Learns what matters and forgets what doesn't.** Structured memory items — identity, preferences, projects, events — extracted with source attribution and deduplication. Hybrid retrieval (dense + sparse) ranks results semantically and lexically, with staleness windows per memory type. Per-user and per-channel isolation. Embeddings run locally by default. |
| **Identity** | **Becomes its own.** Behavior lives in SOUL.md, and during onboarding the assistant observes how you communicate and writes its own personality files. A per-user journal captures its reflections on past interactions. NOW.md acts as an ephemeral scratchpad for current focus and active threads. |
| **Proactivity** | **Reaches out when something matters, without being asked.** Every hour it checks in with itself: re-reads its notes, notices what's unfinished or due soon, and sends a message if needed. Notifications are routed to the right channel and won't interrupt you if you're already talking. |
| **Security** | **Fail-closed by design.** Actor identity is resolved once (guardian, trusted, or unknown) and enforced everywhere. Untrusted actors cannot read or write memory, trigger tools, or escalate. Credentials live in a separate process and never reach the model. Every tool runs in a sandbox. |

<p align="center">
  <img src="assets/what-it-does.png" alt="Memory, identity, proactivity, and security in the Vellum Assistant" width="100%">
</p>

---

## Get started

**1. [Download the latest release](https://vellum.ai/download)**

**2. Open the app and pick your mode**
  - **Managed** — sign in via Vellum Cloud, no local runtime required
  - **Local** — everything runs on your machine

**3. Hatch your assistant**
  - Give it a name, a personality, and the keys to your work

<sub>Prefer the terminal? See <a href="#cli">CLI install</a> below.</sub>

---

## Quick demo

https://github.com/user-attachments/assets/009bd0ae-95ac-4cf3-81bc-d54cd8631583

---

## CLI

<details open>
<summary>Install and common commands</summary>

<br>

The CLI works but the desktop app is our primary focus. Available for advanced users, contributors, and non-macOS environments.

**Install**

```bash
bun install -g vellum
vellum hatch
```

**Install from source**

```bash
git clone https://github.com/vellum-ai/vellum-assistant.git
cd vellum-assistant
./setup.sh
vellum hatch
```

**Common commands**

```bash
vellum wake        # start services
vellum sleep       # stop services, keep data
vellum client      # interact through the terminal
vellum ps          # view running assistants
vellum terminal    # open a shell into a managed assistant container
vellum upgrade     # upgrade to latest version
```

All commands target the default assistant. If you have multiple, pass the assistant ID as the second argument.

</details>

---

## Infra and security

| Area | Summary |
|------|---------|
| **Trust engine** | **Decides who can do what, and defaults to no.** Fail-closed trust system that reso