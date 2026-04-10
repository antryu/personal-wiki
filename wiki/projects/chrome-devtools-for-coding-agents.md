# Chrome DevTools for Coding Agents

> Chrome DevTools for coding agents enables AI-powered tools (e.g., Gemini, Claude) to control and debug Chrome browsers via a Model-Context-Protocol (MCP) server. It combines Puppeteer automation with DevTools performance analysis for reliable browser interaction.  
> Last updated: 2026-04-10

## Overview
The `chrome-devtools-mcp` repository provides an MCP server that bridges coding agents and Chrome DevTools. It supports performance tracing, network debugging, and automation while prioritizing security and transparency. Key components include:

- **Repository Info**
  - **Stars**: 33,979 | **Forks**: 2,033 | **Language**: TypeScript
  - **License**: Apache 2.0 | **Created**: 2025-09-11
  - **Topics**: `browser`, `chrome`, `debugging`, `puppeteer`

- **Core Functionality**
  - Integrates with [Puppeteer](https://github.com/puppeteer/puppeteer) for automation.
  - Uses Chrome DevTools to capture performance traces and network data.
  - Supports [Chrome for Testing](https://developer.chrome.com/blog/chrome-for-testing/) only.

- **Security & Compliance**
  - Avoids collecting sensitive browser content unless explicitly opted in.
  - Requires opt-in for [CrUX API](https://developer.chrome.com/docs/crux) field data collection.

- **Usage & Requirements**
  - Requires Node.js v20.19+ and Chrome stable.
  - Usage statistics are collected by default but can be disabled with `--no-usage-statistics`.
  - Update checks for npm versions are configurable via environment variables.

## Key Points
- Enables AI agents to automate, debug, and analyze Chrome browser sessions.
- Supports performance insights via lab and real-user (CrUX) data.
- Requires explicit opt-in for data collection and update notifications.
- Officially supports Google Chrome and Chrome for Testing only.

## Sources
- [GitHub](https://github.com/ChromeDevTools/chrome-devtools-mcp)
- [원본](raw/ingest/projects/2026-04-10-chrome-devtools-for-coding-agents.md)