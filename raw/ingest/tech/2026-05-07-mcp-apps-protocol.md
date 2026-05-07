<!-- GitHub Trending: TypeScript | 2,202 stars | +33 today -->

# modelcontextprotocol/ext-apps

> Official repo for spec & SDK of MCP Apps protocol - standard for UIs embedded AI chatbots, served by MCP servers

## Repository Info
- **URL**: https://github.com/modelcontextprotocol/ext-apps
- **Stars**: 2,203
- **Forks**: 275
- **Language**: TypeScript
- **License**: Other
- **Created**: 2025-11-21
- **Updated**: 2026-05-07
- **Topics**: ai, apps, mcp, mcp-apps, modelcontextprotocol, ui
- **Open Issues**: 142

## README (excerpt)
<!-- LOGO -->
<div align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="media/mcp-white.svg">
    <source media="(prefers-color-scheme: light)" srcset="media/mcp.svg">
    <img src="media/mcp.svg" alt="MCP Apps" width="128">
  </picture>
  <h1>MCP Apps</h1>
  <p>
    Build interactive UIs for MCP tools — charts, forms, dashboards — that render inline in Claude, ChatGPT and any other compliant chat client.
    <br /><br />
    <a href="#why-mcp-apps">Why</a>
    ·
    <a href="https://apps.extensions.modelcontextprotocol.io/api/documents/Quickstart.html">Quickstart</a>
    ·
    <a href="https://apps.extensions.modelcontextprotocol.io/api/">API Docs</a>
    ·
    <a href="https://github.com/modelcontextprotocol/ext-apps/blob/main/specification/2026-01-26/apps.mdx">Spec</a>
    ·
    <a href="CONTRIBUTING.md">Contributing</a>
  </p>
</div>

<p align="center">
  <a href="https://github.com/modelcontextprotocol/ext-apps/actions/workflows/ci.yml"><img src="https://github.com/modelcontextprotocol/ext-apps/actions/workflows/ci.yml/badge.svg" alt="CI"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-blue" alt="License: Apache 2.0"></a>
  <a href="https://www.npmjs.com/package/@modelcontextprotocol/ext-apps"><img src="https://img.shields.io/npm/v/@modelcontextprotocol/ext-apps.svg" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/@modelcontextprotocol/ext-apps"><img src="https://img.shields.io/npm/dm/@modelcontextprotocol/ext-apps.svg" alt="npm downloads"></a>
  <a href="https://github.com/modelcontextprotocol/ext-apps"><img src="https://img.shields.io/github/stars/modelcontextprotocol/ext-apps" alt="GitHub stars"></a>
  <a href="https://apps.extensions.modelcontextprotocol.io/api/"><img src="https://img.shields.io/badge/docs-API%20Reference-blue" alt="API Documentation"></a>
</p>

<p align="center">
  <img src="media/excalidraw.gif" alt="MCP Apps demo" width="600">
  <br><em>Excalidraw built with MCP Apps, running in Claude</em>
</p>

## Table of Contents

- [Build with Agent Skills](#build-with-agent-skills)
- [Supported Clients](#supported-clients)
- [Why MCP Apps?](#why-mcp-apps)
- [How It Works](#how-it-works)
- [Getting Started](#getting-started)
- [Using the SDK](#using-the-sdk)
- [Examples](#examples)
- [Specification](#specification)
- [Resources](#resources)
- [Contributing](#contributing)

## Build with Agent Skills

The fastest way to build an MCP App is to let your AI coding agent do it. This
repo ships four [Agent Skills](https://agentskills.io/) — install them once,
then just ask:

| Skill                                                                       | What it does                                                | Try it                                |
| --------------------------------------------------------------------------- | ----------------------------------------------------------- | ------------------------------------- |
| [`create-mcp-app`](./plugins/mcp-apps/skills/create-mcp-app/SKILL.md)       | Scaffolds a new MCP App with an interactive UI from scratch | _"Create an MCP App"_                 |
| [`migrate-oai-app`](./plugins/mcp-apps/skills/migrate-oai-app/SKILL.md)     | Converts an existing OpenAI App to use MCP Apps             | _"Migrate from OpenAI Apps SDK"_      |
| [`add-app-to-server`](./plugins/mcp-apps/skills/add-app-to-server/SKILL.md) | Adds interactive UI to an existing MCP server's tools       | _"Add UI to my MCP server"_           |
| [`convert-web-app`](./plugins/mcp-apps/skills/convert-web-app/SKILL.md)     | Turns an existing web app into a hybrid web + MCP App       | _"Add MCP App support to my web app"_ |

### Install the Skills

**Claude Code** — install via the plugin marketplace:

```
/plugin marketplace add modelcontextprotocol/ext-apps
/plugin install mcp-apps@modelcontextprotocol-ext-apps
```

**Other agents** — any AI coding agent that supports
[Agent Skills](https://agentskills.io/) c