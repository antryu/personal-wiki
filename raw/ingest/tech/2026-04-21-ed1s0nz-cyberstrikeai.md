<!-- GitHub Trending: Go | 3,412 stars | +34 today -->

# Ed1s0nZ/CyberStrikeAI

> CyberStrikeAI is an AI-native security testing platform built in Go. It integrates 100+ security tools, an intelligent orchestration engine, role-based testing with predefined security roles, a skills system with specialized testing skills, and comprehensive lifecycle management capabilities.

## Repository Info
- **URL**: https://github.com/Ed1s0nZ/CyberStrikeAI
- **Stars**: 3,412
- **Forks**: 572
- **Language**: Go
- **License**: Apache License 2.0
- **Created**: 2025-11-08
- **Updated**: 2026-04-21
- **Topics**: ai, ai-agents, ai-cybersecurity, ai-hacking, ai-penetration-testing, ai-security-tool, ctf-tools, mcp, pentesting-tools
- **Open Issues**: 16

## README (excerpt)
<div align="center">
  <img src="web/static/logo.png" alt="CyberStrikeAI Logo" width="200">
</div>

# CyberStrikeAI


[中文](README_CN.md) | [English](README.md)

**Community**: [Join us on Discord](https://discord.gg/8PjVCMu8Zw)

<details>
<summary><strong>WeChat group</strong> (click to reveal QR code)</summary>

<img src="./images/wechat-group-cyberstrikeai-qr.jpg" alt="CyberStrikeAI WeChat group QR code" width="280">

</details>

<details>
<summary><strong>Sponsorship</strong> (click to expand)</summary>

If CyberStrikeAI helps you, you can support the project via **WeChat Pay** or **Alipay**:

<div align="center">
  <img src="./images/sponsor-wechat-alipay-qr.jpg" alt="WeChat Pay and Alipay sponsorship QR codes" width="480">
</div>

</details>

CyberStrikeAI is an **AI-native security testing platform** built in Go. It integrates 100+ security tools, an intelligent orchestration engine, role-based testing with predefined security roles, a skills system with specialized testing skills, and comprehensive lifecycle management capabilities. Through native MCP protocol and AI agents, it enables end-to-end automation from conversational commands to vulnerability discovery, attack-chain analysis, knowledge retrieval, and result visualization—delivering an auditable, traceable, and collaborative testing environment for security teams.


## Interface & Integration Preview

<div align="center">

### System Dashboard Overview

<img src="./images/dashboard.png" alt="System Dashboard" width="100%">

*The dashboard provides a comprehensive overview of system runtime status, security vulnerabilities, tool usage, and knowledge base, helping users quickly understand the platform's core features and current state.*

### Core Features Overview

<table>
<tr>
<td width="33.33%" align="center">
<strong>Web Console</strong><br/>
<img src="./images/web-console.png" alt="Web Console" width="100%">
</td>
<td width="33.33%" align="center">
<strong>Task Management</strong><br/>
<img src="./images/task-management.png" alt="Task Management" width="100%">
</td>
<td width="33.33%" align="center">
<strong>Vulnerability Management</strong><br/>
<img src="./images/vulnerability-management.png" alt="Vulnerability Management" width="100%">
</td>
</tr>
<tr>
<td width="33.33%" align="center">
<strong>WebShell Management</strong><br/>
<img src="./images/webshell-management.png" alt="WebShell Management" width="100%">
</td>
<td width="33.33%" align="center">
<strong>MCP Management</strong><br/>
<img src="./images/mcp-management.png" alt="MCP management" width="100%">
</td>
<td width="33.33%" align="center">
<strong>Knowledge Base</strong><br/>
<img src="./images/knowledge-base.png" alt="Knowledge Base" width="100%">
</td>
</tr>
<tr>
<td width="33.33%" align="center">
<strong>Skills Management</strong><br/>
<img src="./images/skills.png" alt="Skills Management" width="100%">
</td>
<td width="33.33%" align="center">
<strong>Agent Management</strong><br/>
<img src="./images/agent-management.png" alt="Agent Management" width="100%">
</td>
<td width="33.33%" align="center">
<strong>Role Management</strong><br/>
<img src="./images/role-management.png" alt="Role Management" width="100%">
</td>
</tr>
<tr>
<td width="33.33%" align="center">
<strong>System Settings</strong><br/>
<img src="./images/settings.png" alt="System settings" width="100%">
</td>
<td width="33.33%" align="center">
<strong>MCP stdio Mode</strong><br/>
<img src="./images/mcp-stdio2.png" alt="MCP stdio mode" width="100%">
</td>
<td width="33.33%" align="center">
<strong>Burp Suite Plugin</strong><br/>
<img src="./images/plugins.png" alt="Burp Suite plugin" width="100%">
</td>
</tr>
</table>

</div>

## Highlights

- 🤖 AI decision engine with OpenAI-compatible models (GPT, Claude, DeepSeek, etc.)
- 🔌 Native MCP implementation with HTTP/stdio/SSE transports and external MCP federation
- 🧰 100+ prebuilt tool recipes + YAML-based extension system
- 📄 Large-result pagination, compression, and searchable a