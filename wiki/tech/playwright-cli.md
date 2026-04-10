# Playwright CLI

> A CLI tool for automating Playwright tasks with token-efficient workflows optimized for coding agents. Notable for its SKILLs-based architecture and comparison against Playwright MCP.  
> Last updated: 2026-04-10

## Overview

### Repository Info
- **Stars**: 7,251  
- **Forks**: 334  
- **Language**: TypeScript  
- **License**: Apache License 2.0  
- **Created**: 2020-06-19  
- **Updated**: 2026-04-10  
- **Topics**: playwright  
- **Open Issues**: 17  

---

### CLI vs MCP Comparison

**CLI (SKILLs-based)**:  
- Preferred by modern coding agents (e.g., Claude Code, GitHub Copilot) for **token efficiency**.  
- Avoids loading large tool schemas and verbose page data into LLM context.  
- Enables concise, purpose-built commands for high-throughput automation tasks.  

**MCP (Microsoft Playwright MCP)**:  
- Suitable for workflows requiring persistent browser state, self-healing tests, or iterative reasoning.  
- Maintains continuous context at the cost of higher token usage.  

---

### Key Features
- **Token-efficient automation**  
- SKILLs integration for coding agents  
- Session management (headless/default, persistent)  
- Visual monitoring dashboard (`playwright-cli show`)  

---

### Installation
```bash
npm install -g @playwright/cli@latest
playwright-cli --help
```

Install skills for agent compatibility:
```bash
playwright-cli install --skills
```

---

### Usage Examples

**Headed Mode**:
```bash
playwright-cli open https://playwright.dev --headed
```

**Session Management**:
```bash
playwright-cli -s=todo-app open https://example.com --persistent
PLAYWRIGHT_CLI_SESSION=todo-app claude .
```

**Dashboard Monitoring**:
```bash
playwright-cli show
```
![Dashboard](https://github.com/user-attachments/assets/99df739d-106a-4520-b004-bb315db41da7)

---

### Demo Workflow
```bash
playwright-cli open https://demo.playwright.dev/todomvc/
playwright-cli type "Buy groceries"
playwright-cli press Enter
playwright-cli screenshot
```

---

### Requirements
- Node.js 18+  
- Coding agents (e.g., Claude Code, GitHub Copilot)  

---

## Key Points
- Designed for **token-efficient workflows** in coding agents  
- Uses **SKILLs** for modular, reusable automation tasks  
- Supports **headed mode**, **persistent sessions**, and **browser monitoring**  

## Sources
- [GitHub](https://github.com/microsoft/playwright-cli)
- [원본](raw/ingest/tech/2026-04-10-playwright-cli.md)