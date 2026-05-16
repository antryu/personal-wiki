<!-- GitHub Trending: TypeScript | 2,542 stars | +18 today -->

# tech-leads-club/agent-skills

> The secure, validated skill registry for professional AI coding agents. Extend Antigravity, Claude Code, Cursor, Copilot and more with absolute confidence.

## Repository Info
- **URL**: https://github.com/tech-leads-club/agent-skills
- **Stars**: 2,545
- **Forks**: 288
- **Language**: TypeScript
- **License**: Other
- **Created**: 2026-01-19
- **Updated**: 2026-05-16
- **Topics**: agent, ai, antigravity, claude-code, copilot, cursor, skills
- **Open Issues**: 5

## README (excerpt)
<p align="center">
  <img src=".github/assets/logo.png" alt="Tech Leads Club" width="400" />
</p>

<p align="center">
  <img src="https://img.shields.io/npm/v/@tech-leads-club/agent-skills?style=flat-square&color=blue" alt="npm version" />
  <img src="https://img.shields.io/npm/dt/@tech-leads-club/agent-skills?style=flat-square&color=blue" alt="total downloads" />
  <img src="https://img.shields.io/npm/dm/@tech-leads-club/agent-skills?style=flat-square&color=blue" alt="monthly downloads" />
  <img src="https://img.shields.io/github/license/tech-leads-club/agent-skills?style=flat-square" alt="license" />
  <img src="https://img.shields.io/github/actions/workflow/status/tech-leads-club/agent-skills/release.yml?style=flat-square" alt="build status" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/node-%3E%3D22-brightgreen?style=flat-square&logo=node.js" alt="node version" />
  <img src="https://img.shields.io/badge/TypeScript-100%25-blue?style=flat-square&logo=typescript" alt="typescript" />
  <img src="https://img.shields.io/badge/Nx%20Cloud-Enabled-blue?style=flat-square&logo=nx" alt="nx cloud" />
  <img src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square" alt="semantic-release" />
</p>

<p align="center">
  <img src="https://img.shields.io/github/stars/tech-leads-club/agent-skills?style=flat-square&color=yellow" alt="github stars" />
  <img src="https://img.shields.io/github/contributors/tech-leads-club/agent-skills?style=flat-square&color=orange" alt="contributors" />
  <img src="https://img.shields.io/github/last-commit/tech-leads-club/agent-skills?style=flat-square" alt="last commit" />
  <img src="https://img.shields.io/badge/AI-Powered%20Skills-purple?style=flat-square&logo=openai" alt="ai powered" />
</p>

<h1 align="center">🧠 Agent Skills</h1>

<p align="center">
  <strong>The secure, validated skill registry for professional AI coding agents</strong>
</p>

<p align="center">
  In an ecosystem where <a href="https://github.com/snyk/agent-scan/blob/main/.github/reports/skills-report.pdf">over 13% of marketplace skills contain critical vulnerabilities</a>,
  <b>Agent Skills</b> stands apart as a hardened library of <b>verified</b>, <b>tested</b>, and <b>safe</b> capabilities.
  Extend <b>Antigravity</b>, <b>Claude Code</b>, <b>Cursor</b>, and more with absolute confidence.
</p>

<p align="center">
  <a href="https://tech-leads-club.github.io/agent-skills/" target="_blank">https://tech-leads-club.github.io/agent-skills/</a>
</p>

## 📖 Table of Contents

- [✨ What are Skills?](#-what-are-skills)
- [🛡️ Security & Trust](#️-security--trust)
- [🤖 Supported Agents](#-supported-agents)
- [🌟 Featured Skills](#-featured-skills)
- [🚀 Quick Start](#-quick-start)
- [⚡ How It Works](#-how-it-works)
- [🔌 MCP Server](#-mcp-server)
- [🤝 Contributing](#-contributing)
- [🛡️ Content & Authorship](#️-content--authorship)
- [📄 License and Attribution](#-license-and-attribution)

## ✨ What are Skills?

Skills are packaged instructions and resources that extend AI agent capabilities. Think of them as **plugins for your AI assistant** — they teach your agent new workflows, patterns, and specialized knowledge.

```
packages/skills-catalog/skills/
  (category-name)/
    skill/
      SKILL.md          ← Main instructions
      templates/        ← File templates
      references/       ← On-demand documentation
```

## 🛡️ Security & Trust

Your environment's safety is our top priority. Unlike open marketplaces where **13.4% of skills contain critical issues**, `agent-skills` is a managed, hardened library: 100% open source (no binaries), static analysis in CI/CD, immutable integrity via lockfiles and content hashing, and human-curated prompts. The CLI uses defense-in-depth (sanitization, path isolation, symlink guards, atomic lockfile, audit trail); every skill is scanned with [Snyk Agent Scan](https://github.com/snyk/agent-scan) (formerly mcp-scan) before pub