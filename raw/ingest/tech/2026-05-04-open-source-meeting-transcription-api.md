<!-- GitHub Trending: TypeScript | 1,975 stars | +12 today -->

# Vexa-ai/vexa

> Open-source meeting transcription API for Google Meet, Microsoft Teams & Zoom. Auto-join bots, real-time WebSocket transcripts, MCP server for AI agents. Self-host or use hosted SaaS.

## Repository Info
- **URL**: https://github.com/Vexa-ai/vexa
- **Stars**: 1,975
- **Forks**: 265
- **Language**: TypeScript
- **License**: Apache License 2.0
- **Created**: 2025-02-07
- **Updated**: 2026-05-04
- **Topics**: google-meet, meeting-assistant, meeting-minutes, meeting-notes, ms-teams, ms-teams-app, notetaker, zoom
- **Open Issues**: 102

## README (excerpt)
<p align="center" style="margin-bottom: 0.75em;">
  <img src="assets/logodark.svg" alt="Vexa Logo" width="56"/>
</p>

<h1 align="center" style="margin-top: 0.25em; margin-bottom: 0.5em; font-size: 2.5em; font-weight: 700; letter-spacing: -0.02em;">Vexa</h1>

<p align="center" style="font-size: 1.75em; margin-top: 0.5em; margin-bottom: 0.75em; font-weight: 700; line-height: 1.3; letter-spacing: -0.01em;">
  <strong>Open-source meeting bot API & transcription API</strong>
</p>

<p align="center" style="font-size: 1em; color: #a0a0a0; margin-top: 0.5em; margin-bottom: 1.5em; letter-spacing: 0.01em;">
  meeting bots • real-time transcription • interactive bots • MCP server • self-hosted
</p>

<p align="center" style="margin: 1.5em 0; font-size: 1em;">
  <img height="24" src="assets/google-meet.svg" alt="Google Meet" style="vertical-align: middle; margin-right: 10px;"/> <strong style="font-size: 1em; font-weight: 600;">Google Meet</strong>
  &nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;
  <img height="24" src="assets/microsoft-teams.svg" alt="Microsoft Teams" style="vertical-align: middle; margin-right: 10px;"/> <strong style="font-size: 1em; font-weight: 600;">Microsoft Teams</strong>
  &nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;
  <img height="24" src="assets/icons8-zoom.svg" alt="Zoom" style="vertical-align: middle; margin-right: 10px;"/> <strong style="font-size: 1em; font-weight: 600;">Zoom</strong>
</p>

<p align="center" style="margin: 1.75em 0 1.25em 0;">
  <a href="https://github.com/Vexa-ai/vexa/stargazers"><img src="https://img.shields.io/github/stars/Vexa-ai/vexa?style=flat-square&color=yellow" alt="Stars"/></a>
  &nbsp;&nbsp;&nbsp;
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache--2.0-blue?style=flat-square" alt="License"/></a>
  &nbsp;&nbsp;&nbsp;
  <a href="https://discord.gg/Ga9duGkVz9"><img src="https://img.shields.io/badge/Discord-join-5865F2?style=flat-square&logo=discord&logoColor=white" alt="Discord"/></a>
</p>

<p align="center">
  <a href="#whats-new">What's new</a> •
  <a href="#quickstart">Quickstart</a> •
  <a href="#meeting-api--send-bots-get-transcripts">API</a> •
  <a href="https://docs.vexa.ai">Docs</a> •
  <a href="#roadmap">Roadmap</a> •
  <a href="https://discord.gg/Ga9duGkVz9">Discord</a>
</p>

---

**Vexa** is an open-source, self-hostable meeting bot API and meeting transcription API for Google Meet, Microsoft Teams, and Zoom. Alternative to Recall.ai, Otter.ai, and Fireflies.ai — self-host so meeting data never leaves your infrastructure, or use [vexa.ai](https://vexa.ai) hosted.

---

**Data sovereignty** — self-host so meeting data never leaves your infrastructure

**Cost** — replace $20/seat SaaS with your own infrastructure

**Embed in your product** — multi-tenant meeting bot API with scoped tokens

**AI agents** — MCP server with 17 tools

---

### Capabilities


| | |
| --- | --- |
| **Meeting bot API** | Send a bot to any meeting: auto-join, record, speak, chat, share screen. Open-source alternative to [Recall.ai](https://recall.ai). |
| **Meeting transcription API** | Real-time transcripts via REST API and WebSocket. Self-hosted alternative to Otter.ai and Fireflies.ai. |
| **Real-time transcription** | Sub-second per-speaker transcripts during the call. 100+ languages via Whisper. WebSocket streaming. |
| **Interactive bots** | Make bots speak, send/read chat, share screen content, and set avatar in live meetings. |
| **Browser bots** | CDP + Playwright browser automation with persistent authenticated sessions via S3. |
| **MCP server** | 17 meeting tools for Claude, Cursor, Windsurf. AI agents join calls, read transcripts, speak in meetings. |
| **Multi-tenant** | Users, scoped API tokens, isolated containers. Deploy once, serve your team. |
| **Dashboard** | Open-source Next.js web UI — meetings, transcripts, agent chat, browser sessions. Ready to use out of the box. |
| **Self-hostable** | Run on your infra. Meeting data never leaves your infrastru