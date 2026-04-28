<!-- GitHub Trending: TypeScript | 10,961 stars | +43 today -->

# bytebot-ai/bytebot

> Bytebot is a self-hosted AI desktop agent that automates computer tasks through natural language commands, operating within a containerized Linux desktop environment.

## Repository Info
- **URL**: https://github.com/bytebot-ai/bytebot
- **Stars**: 10,961
- **Forks**: 1,460
- **Language**: TypeScript
- **License**: Apache License 2.0
- **Created**: 2025-02-03
- **Updated**: 2026-04-28
- **Topics**: agent, agentic-ai, agents, ai, ai-agents, ai-tools, anthropic, automation, bytebot, computer-use, computer-use-agent, cua, desktop, desktop-automation, docker, gemini, llm, mcp, openai
- **Open Issues**: 72

## README (excerpt)
<div align="center">

<img src="docs/images/bytebot-logo.png" width="500" alt="Bytebot Logo">

# Bytebot: Open-Source AI Desktop Agent

<a href="https://trendshift.io/repositories/14624" target="_blank"><img src="https://trendshift.io/api/badge/repositories/14624" alt="bytebot-ai%2Fbytebot | Trendshift" style="width: 250px; height: 55px;" width="250" height="55"/></a>

**An AI that has its own computer to complete tasks for you**

[![Deploy on Railway](https://railway.com/button.svg)](https://railway.com/deploy/bytebot?referralCode=L9lKXQ)

[![Docker](https://img.shields.io/badge/docker-ready-blue.svg)](https://github.com/bytebot-ai/bytebot/tree/main/docker)
[![License](https://img.shields.io/badge/license-Apache%202.0-green.svg)](LICENSE)
[![Discord](https://img.shields.io/discord/1232768900274585720?color=7289da&label=discord)](https://discord.com/invite/d9ewZkWPTP)

[🌐 Website](https://bytebot.ai) • [📚 Documentation](https://docs.bytebot.ai) • [💬 Discord](https://discord.com/invite/d9ewZkWPTP) • [𝕏 Twitter](https://x.com/bytebot_ai)

<!-- Keep these links. Translations will automatically update with the README. -->
[Deutsch](https://zdoc.app/de/bytebot-ai/bytebot) | 
[Español](https://zdoc.app/es/bytebot-ai/bytebot) | 
[français](https://zdoc.app/fr/bytebot-ai/bytebot) | 
[日本語](https://zdoc.app/ja/bytebot-ai/bytebot) | 
[한국어](https://zdoc.app/ko/bytebot-ai/bytebot) | 
[Português](https://zdoc.app/pt/bytebot-ai/bytebot) | 
[Русский](https://zdoc.app/ru/bytebot-ai/bytebot) | 
[中文](https://zdoc.app/zh/bytebot-ai/bytebot)
</div>

---

https://github.com/user-attachments/assets/f271282a-27a3-43f3-9b99-b34007fdd169

https://github.com/user-attachments/assets/72a43cf2-bd87-44c5-a582-e7cbe176f37f

## What is a Desktop Agent?

A desktop agent is an AI that has its own computer. Unlike browser-only agents or traditional RPA tools, Bytebot comes with a full virtual desktop where it can:

- Use any application (browsers, email clients, office tools, IDEs)
- Download and organize files with its own file system
- Log into websites and applications using password managers
- Read and process documents, PDFs, and spreadsheets
- Complete complex multi-step workflows across different programs

Think of it as a virtual employee with their own computer who can see the screen, move the mouse, type on the keyboard, and complete tasks just like a human would.

## Why Give AI Its Own Computer?

When AI has access to a complete desktop environment, it unlocks capabilities that aren't possible with browser-only agents or API integrations:

### Complete Task Autonomy

Give Bytebot a task like "Download all invoices from our vendor portals and organize them into a folder" and it will:

- Open the browser
- Navigate to each portal
- Handle authentication (including 2FA via password managers)
- Download the files to its local file system
- Organize them into a folder

### Process Documents

Upload files directly to Bytebot's desktop and it can:

- Read entire PDFs into its context
- Extract data from complex documents
- Cross-reference information across multiple files
- Create new documents based on analysis
- Handle formats that APIs can't access

### Use Real Applications

Bytebot isn't limited to web interfaces. It can:

- Use desktop applications like text editors, VS Code, or email clients
- Run scripts and command-line tools
- Install new software as needed
- Configure applications for specific workflows

## Quick Start

### Deploy in 2 Minutes

**Option 1: Railway (Easiest)**
[![Deploy on Railway](https://railway.com/button.svg)](https://railway.com/deploy/bytebot?referralCode=L9lKXQ)

Just click and add your AI provider API key.

**Option 2: Docker Compose**

```bash
git clone https://github.com/bytebot-ai/bytebot.git
cd bytebot

# Add your AI provider key (choose one)
echo "ANTHROPIC_API_KEY=sk-ant-..." > docker/.env
# Or: echo "OPENAI_API_KEY=sk-..." > docker/.env
# Or: echo "GEMINI_API_KEY=..." > docker/.env

docker-compose -f docker/dock