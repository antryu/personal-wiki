<!-- GitHub Trending: HTML | 711 stars | +143 today -->

# tractorjuice/arc-kit

> Enterprise Architecture Governance & Vendor Procurement Toolkit

## Repository Info
- **URL**: https://github.com/tractorjuice/arc-kit
- **Stars**: 712
- **Forks**: 99
- **Language**: HTML
- **License**: MIT License
- **Created**: 2025-10-14
- **Updated**: 2026-04-18
- **Topics**: N/A
- **Open Issues**: 24

## README (excerpt)
# ArcKit - Enterprise Architecture Governance Toolkit

[![GitHub Stars](https://img.shields.io/github/stars/tractorjuice/arc-kit?style=flat&logo=github)](https://github.com/tractorjuice/arc-kit/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/tractorjuice/arc-kit?style=flat&logo=github)](https://github.com/tractorjuice/arc-kit/network/members)
[![License: MIT](https://img.shields.io/github/license/tractorjuice/arc-kit)](LICENSE)
[![Latest Release](https://img.shields.io/github/v/release/tractorjuice/arc-kit)](https://github.com/tractorjuice/arc-kit/releases)
[![GitHub Issues](https://img.shields.io/github/issues/tractorjuice/arc-kit)](https://github.com/tractorjuice/arc-kit/issues)
[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/tractorjuice/arc-kit)

![ArcKit - Enterprise Architecture Governance Toolkit](docs/assets/arckit-banner-light.svg)

**Build better enterprise architecture through structured governance, vendor procurement, and design review workflows.**

ArcKit is a toolkit for enterprise architects that transforms architecture governance from scattered documents into a systematic, AI-assisted workflow for:

- 🏛️ Establishing and enforcing architecture principles
- 👥 Analyzing stakeholder drivers, goals, and outcomes
- 🛡️ Risk management (HM Treasury Orange Book)
- 💼 Business case justification (HM Treasury Green Book SOBC)
- 📋 Creating comprehensive requirements documents
- 🗄️ Data modeling with ERD, GDPR compliance, and data governance
- 🔬 Technology research with build vs buy analysis (web search powered)
- ☁️ Azure-specific research using Microsoft Learn MCP for authoritative documentation
- 🗺️ Strategic planning with Wardley Mapping
- 📊 Generating visual architecture diagrams (Mermaid)
- 🤝 Managing vendor RFP and selection processes
- ✅ Conducting formal design reviews (HLD/DLD)
- 🔧 ServiceNow service management design
- 🔗 Maintaining requirements traceability
- 📎 Citation traceability for external documents (inline `[DOC-CN]` markers with source quotes)

---

## Quick Start

### Installation

**Claude Code** (premier experience) — install the ArcKit plugin (requires **v2.1.112+**):

```text
/plugin marketplace add tractorjuice/arc-kit
```

Then install from the Discover tab. Claude Code is the **primary development platform** for ArcKit and provides the most complete experience: all 68 commands, 10 autonomous research agents, 5 automation hooks (session init, project context injection, filename enforcement, output validation, impact scan), bundled MCP servers (AWS Knowledge, Microsoft Learn, Google Developer Knowledge, govreposcrape), and automatic updates via the marketplace. See [Why Claude Code?](#why-claude-code) below.

> **Why v2.1.112?** This version unlocks the `xhigh` effort tier on Claude Opus 4.7 (used by ArcKit's deep-research agents and synthesis commands), enables Auto mode without `--enable-auto-mode`, restores Opus 4.7 availability for Auto mode, and ships read-only bash glob patterns without permission prompts (reduces friction for ArcKit helper scripts). It also carries forward the v2.1.97 fixes: `claude plugin update` correctly detects new commits for git-based plugins (critical for ArcKit distribution), MCP HTTP/SSE memory leak fix (~50 MB/hr, affects ArcKit's 5 bundled servers), proper 429 exponential backoff (benefits 10 research agents), Stop/SubagentStop hooks no longer fail on long sessions (affects session-learner), and subagent working directory leak fix.

**Gemini CLI** — install the ArcKit extension:

```bash
gemini extensions install https://github.com/tractorjuice/arckit-gemini
```

Zero-config: all 68 commands, templates, scripts, and bundled MCP servers (AWS Knowledge, Microsoft Learn). Updates via `gemini extensions update arckit`.

**GitHub Copilot** (VS Code) — install the ArcKit CLI and scaffold prompt files:

```bash
# Install with pip
pip install git+https://github.com/tractorjuice/arc-kit.git

# Scaffold a project with Cop