<!-- GitHub Trending: Swift | 4,890 stars | +163 today -->

# osaurus-ai/osaurus

> Own your AI. The native macOS harness for AI agents -- any model, persistent memory, autonomous execution, cryptographic identity. Built in Swift. Fully offline. Open source.

## Repository Info
- **URL**: https://github.com/osaurus-ai/osaurus
- **Stars**: 4,890
- **Forks**: 235
- **Language**: Swift
- **License**: MIT License
- **Created**: 2025-08-17
- **Updated**: 2026-04-10
- **Topics**: anthropic, apple-foundation-models, apple-intelligence, apple-neural-engine, llm, mcp, mcp-server, mlx, openai, swift
- **Open Issues**: 41

## README (excerpt)
<p align="center">
<img width="865" height="677" alt="Screenshot 2026-03-19 at 3 42 04 PM" src="https://github.com/user-attachments/assets/c16ee8bb-7f31-4659-9c2c-6eaaf8441c26" />
</p>

<h1 align="center">Osaurus</h1>

<p align="center">
  <strong>Own your AI.</strong><br>
  Agents, memory, tools, and identity that live on your Mac. Built purely in Swift. Fully offline. Open source.
</p>

<p align="center">
  <a href="https://github.com/osaurus-ai/osaurus/releases/latest"><img src="https://img.shields.io/github/v/release/osaurus-ai/osaurus?sort=semver" alt="Release"></a>
  <a href="https://github.com/osaurus-ai/osaurus/releases"><img src="https://img.shields.io/github/downloads/osaurus-ai/osaurus/total" alt="Downloads"></a>
  <a href="https://github.com/osaurus-ai/osaurus/blob/main/LICENSE"><img src="https://img.shields.io/github/license/osaurus-ai/osaurus" alt="License"></a>
  <a href="https://github.com/osaurus-ai/osaurus/stargazers"><img src="https://img.shields.io/github/stars/osaurus-ai/osaurus?style=social" alt="Stars"></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Platform-macOS%20(Apple%20Silicon)-black?logo=apple" alt="Platform">
  <img src="https://img.shields.io/badge/OpenAI%20API-compatible-0A7CFF" alt="OpenAI API">
  <img src="https://img.shields.io/badge/Anthropic%20API-compatible-0A7CFF" alt="Anthropic API">
  <img src="https://img.shields.io/badge/Ollama%20API-compatible-0A7CFF" alt="Ollama API">
  <img src="https://img.shields.io/badge/MCP-server-0A7CFF" alt="MCP Server">
  <img src="https://img.shields.io/badge/Apple%20Foundation%20Models-supported-0A7CFF" alt="Foundation Models">
  <a href="https://huggingface.co/OsaurusAI"><img src="https://img.shields.io/badge/%F0%9F%A4%97%20Hugging%20Face-OsaurusAI-FFD21E" alt="Hugging Face"></a>
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen" alt="PRs Welcome">
</p>

<p align="center">
  <a href="https://github.com/osaurus-ai/osaurus/releases/latest/download/Osaurus.dmg">Download for Mac</a> ·
  <a href="https://docs.osaurus.ai">Docs</a> ·
  <a href="https://huggingface.co/OsaurusAI">Models</a> ·
  <a href="https://discord.com/invite/dinoki">Discord</a> ·
  <a href="https://x.com/OsaurusAI">Twitter</a> ·
  <a href="https://github.com/osaurus-ai/osaurus-tools">Plugin Registry</a>
</p>

---

## Inference is all you need. Everything else can be owned by you.

Models are getting cheaper and more interchangeable by the day. What's irreplaceable is the layer around them -- your context, your memory, your tools, your identity. Others keep that layer on their servers. Osaurus keeps it on your machine.

Osaurus is the AI harness for macOS. It sits between you and any model -- local or cloud -- and provides the continuity that makes AI personal: agents that remember, execute autonomously, run real code, and stay reachable from anywhere. The models are interchangeable. The harness is what compounds.

Works fully offline with local models. Connect to any cloud provider when you want more power. Nothing leaves your Mac unless you choose.

Native Swift on Apple Silicon. No Electron. No compromises. MIT licensed.

## Install

```bash
brew install --cask osaurus
```

Or download the latest `.dmg` from [Releases](https://github.com/osaurus-ai/osaurus/releases/latest). After installing, launch from Spotlight (`⌘ Space` → "Osaurus") or the CLI:

```bash
osaurus ui       # Open the chat UI
osaurus serve    # Start the server
osaurus status   # Check status
```

> Requires macOS 15.5+ and Apple Silicon.

## Agents

Agents are the core of Osaurus. Each one gets its own prompts, memory, and visual theme -- a research assistant, a coding partner, a file organizer, whatever you need. Tools and skills are automatically selected via RAG search based on the task at hand -- no manual configuration needed. Everything else in the harness exists to make agents smarter, faster, and more capable over time.

### Work Mode

Give an agent an objective. It breaks the