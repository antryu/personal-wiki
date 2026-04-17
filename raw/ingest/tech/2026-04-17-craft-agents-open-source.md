<!-- GitHub Trending: TypeScript | 4,278 stars | +107 today -->

# lukilabs/craft-agents-oss

> No description

## Repository Info
- **URL**: https://github.com/lukilabs/craft-agents-oss
- **Stars**: 4,278
- **Forks**: 633
- **Language**: TypeScript
- **License**: Apache License 2.0
- **Created**: 2026-01-19
- **Updated**: 2026-04-17
- **Topics**: N/A
- **Open Issues**: 259

## README (excerpt)
# Craft Agents

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](CODE_OF_CONDUCT.md)

## How it Works (Video)
To understand what Craft Agents does and how it works watch this video.

[![Demo Video](https://img.youtube.com/vi/xQouiAIilvU/hqdefault.jpg)](https://www.youtube.com/watch?v=xQouiAIilvU)

[Click Here (or on the image above) to watch the video on YouTube →](https://www.youtube.com/watch?v=xQouiAIilvU)


## Why Craft Agents was built
Craft Agents is a tool we built so that we (at craft.do) can work effectively with agents. It enables intuitive multitasking, no-fluff connection to any API or Service, sharing sessions, and a more document (vs code) centric workflow - in a beautiful and fluid UI.

It uses the Claude Agent SDK and the Pi SDK side by side—building on what we found great and improving areas where we've desired improvements.

It's built with Agent Native software principles in mind, and is highly customisable out of the box. One of the first of its kind.

Craft Agents is open source under the Apache 2.0 license - so you are free to remix, change anything. And that's actually possible. We ourselves are building Craft Agents with Craft Agents only - no code editors - so really, any customisation is just a prompt away.

We built Craft Agents because we wanted a better, more opinionated (and preferably non-CLI way) of working with the most powerful agents in the world. We'll continue to improve it, based on our experiences and intuition.

<img width="1578" height="894" alt="image" src="https://github.com/user-attachments/assets/3f1f2fe8-7cf6-4487-99ff-76f6c8c0a3fb" />

## Things that are hard to believe "just work"

**How do I connect to Linear, Gmail, Slack...?**
Tell the agent "add Linear as a source." It finds public APIs and MCP servers, reads their docs, sets up credentials, and configures everything. No config files, no setup wizards.

[Check out how I just connected to Slack →](https://agents.craft.do/s/DRNQEiy8w2e1v5LPgKl8b)

**I already have my MCP config JSON.**
Paste it. The agent handles the rest.

**What about local MCPs?**
Fully supported. Stdio-based MCP servers run as local subprocesses on your machine. Point it at an npx command, a Python script, or any local binary. It just works.

**Can it handle custom APIs?**
Yes. Paste an OpenAPI spec, some endpoint URLs, screenshots of docs, whatever you have. It figures it out and guides you through the rest.

**APIs too? Not just MCPs?**
Craft Agents connects to anything. We have it hooked up to a direct Postgres DB behind a jumpbox. Skills + Sources = magic.

**How do I import my Claude Code skills and MCPs?**
Tell the agent you want to import your skills from Claude Code. It handles the migration.

[Here I imported all my skills in one go →](https://agents.craft.do/s/gWCFqwhObFWaNJIEJmd6j)

**How do I create a new skill?**
Describe what the skill should do, give it context. The agent takes care of the rest.

**Do I need to restart after changes?**
No. Everything is instant. Mention new skills or sources with `@`, even mid-conversation.

**So I can just ask it anything?**
Yes. That's the core idea behind agent-native software. You describe what you want, and it figures out how. That's a good use of tokens.


## Installation

### One-Line Install (Recommended)

**macOS / Linux:**
```bash
curl -fsSL https://agents.craft.do/install-app.sh | bash
```

**Windows (PowerShell):**
```powershell
irm https://agents.craft.do/install-app.ps1 | iex
```

### Build from Source

```bash
git clone https://github.com/lukilabs/craft-agents-oss.git
cd craft-agents-oss
bun install
bun run electron:start
```

## Features

- **Multi-Session Inbox**: Desktop app with session management, status workflow, and flagging
- **Claude Code Experience**: Streaming responses, tool visualization, real-time updates
- **Multiple LLM Connections**: Add multiple AI pro