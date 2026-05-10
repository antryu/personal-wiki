<!-- GitHub Trending: TypeScript | 17,715 stars | +9 today -->

# alibaba/page-agent

> JavaScript in-page GUI agent. Control web interfaces with natural language.

## Repository Info
- **URL**: https://github.com/alibaba/page-agent
- **Stars**: 17,715
- **Forks**: 1,485
- **Language**: TypeScript
- **License**: MIT License
- **Created**: 2025-09-23
- **Updated**: 2026-05-10
- **Topics**: agent, ai, ai-agents, browser-automation, javascript, mcp, typescript, web
- **Open Issues**: 53

## README (excerpt)
# Page Agent

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://img.alicdn.com/imgextra/i4/O1CN01qKig1P1FnhpFKNdi6_!!6000000000532-2-tps-1280-256.png">
  <img alt="Page Agent Banner" src="https://img.alicdn.com/imgextra/i1/O1CN01NCMKXj1Gn4tkFTsxf_!!6000000000666-2-tps-1280-256.png">
</picture>

[![License: MIT](https://img.shields.io/badge/License-MIT-auto.svg)](https://opensource.org/licenses/MIT) [![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/) [![Bundle Size](https://img.shields.io/bundlephobia/minzip/page-agent)](https://bundlephobia.com/package/page-agent) [![Downloads](https://img.shields.io/npm/dt/page-agent.svg)](https://www.npmjs.com/package/page-agent) [![GitHub stars](https://img.shields.io/github/stars/alibaba/page-agent.svg)](https://github.com/alibaba/page-agent)

The GUI Agent Living in Your Webpage. Control web interfaces with natural language.

🌐 **English** | [中文](./docs/README-zh.md)

<a href="https://alibaba.github.io/page-agent/" target="_blank"><b>🚀 Demo</b></a> | <a href="https://alibaba.github.io/page-agent/docs/introduction/overview" target="_blank"><b>📖 Docs</b></a> | <a href="https://news.ycombinator.com/item?id=47264138" target="_blank"><b>📢 HN Discussion</b></a> | <a href="https://x.com/simonluvramen" target="_blank"><b>𝕏 Follow on X</b></a>

<video id="demo-video" src="https://github.com/user-attachments/assets/a1f2eae2-13fb-4aae-98cf-a3fc1620a6c2" controls crossorigin muted></video>

---

## ✨ Features

- **🎯 Easy integration**
    - No need for `browser extension` / `python` / `headless browser`.
    - Just in-page javascript. Everything happens in your web page.
- **📖 Text-based DOM manipulation**
    - No screenshots. No multi-modal LLMs or special permissions needed.
- **🧠 Bring your own LLMs**
- **🐙 Optional [chrome extension](https://alibaba.github.io/page-agent/docs/features/chrome-extension) for multi-page tasks.**
    - And an [MCP Server (Beta)](https://alibaba.github.io/page-agent/docs/features/mcp-server) to control it from outside

## 💡 Use Cases

- **SaaS AI Copilot** — Ship an AI copilot in your product in lines of code. No backend rewrite.
- **Smart Form Filling** — Turn 20-click workflows into one sentence. Perfect for ERP, CRM, and admin systems.
- **Accessibility** — Make any web app accessible through natural language. Voice commands, screen readers, zero barrier.
- **Multi-page Agent** — Extend your own web agent's reach across browser tabs [chrome extension](https://alibaba.github.io/page-agent/docs/features/chrome-extension).
- **MCP** - Allow your agent clients to control your browser.

## 🚀 Quick Start

### One-line integration

Fastest way to try PageAgent with our free Demo LLM:

```html
<script src="{URL}" crossorigin="true"></script>
```

> **⚠️ For technical evaluation only.** This demo CDN uses our free [testing LLM API](https://alibaba.github.io/page-agent/docs/features/models#free-testing-api). By using it, you agree to its [terms](https://github.com/alibaba/page-agent/blob/main/docs/terms-and-privacy.md).

| Mirrors | URL                                                                                |
| ------- | ---------------------------------------------------------------------------------- |
| Global  | https://cdn.jsdelivr.net/npm/page-agent@1.8.1/dist/iife/page-agent.demo.js         |
| China   | https://registry.npmmirror.com/page-agent/1.8.1/files/dist/iife/page-agent.demo.js |

### NPM Installation

```bash
npm install page-agent
```

```javascript
import { PageAgent } from 'page-agent'

const agent = new PageAgent({
    model: 'qwen3.5-plus',
    baseURL: 'https://dashscope.aliyuncs.com/compatible-mode/v1',
    apiKey: 'YOUR_API_KEY',
    language: 'en-US',
})

await agent.execute('Click the login button')
```

For more programmatic usage, see [📖 Documentations](https://alibaba.github.io/page-agent/docs/introduction/overview).

## 🌟 Awesome Page Agent

B