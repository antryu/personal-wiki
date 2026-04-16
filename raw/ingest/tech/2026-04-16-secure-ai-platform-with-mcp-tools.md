<!-- GitHub Trending: TypeScript | 3,578 stars | +8 today -->

# archestra-ai/archestra

> Enterprise AI Platform with guardrails, MCP registry, gateway & orchestrator

## Repository Info
- **URL**: https://github.com/archestra-ai/archestra
- **Stars**: 3,578
- **Forks**: 445
- **Language**: TypeScript
- **License**: GNU Affero General Public License v3.0
- **Created**: 2025-07-15
- **Updated**: 2026-04-16
- **Topics**: a2a, a2a-mcp, acp, agent, ai, chatgpt, chatgpt-api, claude, deepseek, gemini, k8s, mcp, mcp-client, mcp-gateway, mcp-host, mcp-server, mcp-servers, mcp-tools, openai, runtime
- **Open Issues**: 71

## README (excerpt)
# MCP-native Secure AI Platform

Simplify AI usage in your company, providing user-friendly MCP toolbox, observability and control built on a strong security foundation.

<div align="center">

[![License](https://img.shields.io/github/license/archestra-ai/archestra)](LICENSE)
<img alt="GitHub commit activity" src="https://img.shields.io/github/commit-activity/m/archestra-ai/archestra"/>
<img alt="Github Last Commit" src="https://img.shields.io/github/last-commit/archestra-ai/archestra"/>
[![Contributors](https://img.shields.io/github/contributors/archestra-ai/archestra)](https://github.com/archestra-ai/archestra/graphs/contributors)

<p align="center">
  <a href="https://www.archestra.ai/docs/platform-quickstart">Getting Started</a>
  - <a href="https://github.com/archestra-ai/archestra/releases">Releases</a>
  - <a href="https://archestra.ai/join-slack">Slack Community</a>
</p>
</div>

_For Platform teams:_

- Mitigate MCP chaos, move MCP servers from individual machines to a centralized orchestrator
- Manage how MCP access data and credentials usage
- Mitigate data exfiltration risks
- Manage AI costs
- AI Observability

_For Developers:_

- Deploy your MCP servers org-wide
- Build and deploy agents without worrying about security

_For Management:_

- Bring 1-click MCP adoption to the whole organization for technical and non-technical users
- Reduce AI costs up to 96%
- Get full visibility on AI adoption, usage and data access

## 🚀 Quickstart with docker

```
docker pull archestra/platform:latest;
docker run -p 9000:9000 -p 3000:3000 \
  -e ARCHESTRA_QUICKSTART=true \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v archestra-postgres-data:/var/lib/postgresql/data \
  -v archestra-app-data:/app/data \
  archestra/platform;
```

[Full Quickstart Guide →](https://archestra.ai/docs/platform-quickstart)

## 👩‍💻 ChatGPT-like chat with MCPs

🎁 with private company-wide prompt registry!

<div align="center">
<img src="docs/assets/chat.webp" alt="ChatGPT-like chat" />
</div>

## 📋 Private MCP registry with governance

Add MCPs to your private registry to share them with your team: self-hosted and remote, self-built and third-party.

[Learn more about Private MCP Registry →](https://archestra.ai/docs/platform-private-registry)

<div align="center">
<img src="docs/assets/mcp-registry.webp" alt="MCP Registry" />
</div>

## ☁️ Kubernetes-native MCP orchestrator

Run MCP servers in kubernetes, managing their state, API keys, OAuth.

[Learn more about MCP Orchestrator →](https://archestra.ai/docs/platform-orchestrator)

<div align="center">
<img src="docs/assets/orchestrator.webp" alt="MCP Orchestrator" />
</div>

## 🤖 Security sub-agents

Isolating dangerous tool responses from the main agent to prevent prompt injections.

[Learn more about Dual LLM →](https://archestra.ai/docs/platform-dual-llm)

<div align="center">
<img src="docs/assets/dual-llm.webp" alt="Dual-LLM sub-agent" />
</div>

## 🚫 Non-probabalistic security to prevent data exfiltration

Models could consume prompt injections via MCP uncontrollably (read your inbox, read your GitHub issues, read your customer's inquiries) and follow them resulting in data exfiltration.

[Learn more about Tool Guardrails →](https://archestra.ai/docs/platform-ai-tool-guardrails) | [The Lethal Trifecta →](https://archestra.ai/docs/platform-lethal-trifecta)

Live demo of archestra security engine preventing data leak from the private GitHub repo to the public repo:
[![Archestra Demo](https://img.youtube.com/vi/SkmluS-xzmM/0.jpg)](https://www.youtube.com/watch?v=SkmluS-xzmM&t=2155s)

Read more: [Simon Willison](https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/), [The Economist](https://www.economist.com/leaders/2025/09/25/how-to-stop-ais-lethal-trifecta)

Examples of hacks:
[ChatGPT](https://simonwillison.net/2023/Apr/14/new-prompt-injection-attack-on-chatgpt-web-version-markdown-imag/) (April 2023), [ChatGPT Plugins](https://simonwillison.net/2023/May/19/chatgpt-prompt-inj