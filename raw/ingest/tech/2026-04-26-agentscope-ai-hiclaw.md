<!-- GitHub Trending: Go | 4,295 stars | +22 today -->

# agentscope-ai/HiClaw

> An open-source Collaborative Multi-Agent OS for transparent, human-in-the-loop task coordination via Matrix rooms.

## Repository Info
- **URL**: https://github.com/agentscope-ai/HiClaw
- **Stars**: 4,295
- **Forks**: 495
- **Language**: Go
- **License**: Apache License 2.0
- **Created**: 2026-02-21
- **Updated**: 2026-04-26
- **Topics**: agent-teams, openclaw
- **Open Issues**: 261

## README (excerpt)
<h1 align="center">
    <img src="https://img.alicdn.com/imgextra/i2/O1CN01hTYQMO28B3H9qP7RV_!!6000000007893-2-tps-1490-392.png" alt="HiClaw"  width="290" height="72.5">
  <br>
</h1>

[English](./README.md) | [中文](./README.zh-CN.md) | [日本語](./README.ja-JP.md)

<p align="center">
  <a href="https://deepwiki.com/higress-group/hiclaw"><img src="https://img.shields.io/badge/DeepWiki-Ask_AI-navy.svg?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAyCAYAAAAnWDnqAAAAAXNSR0IArs4c6QAAA05JREFUaEPtmUtyEzEQhtWTQyQLHNak2AB7ZnyXZMEjXMGeK/AIi+QuHrMnbChYY7MIh8g01fJoopFb0uhhEqqcbWTp06/uv1saEDv4O3n3dV60RfP947Mm9/SQc0ICFQgzfc4CYZoTPAswgSJCCUJUnAAoRHOAUOcATwbmVLWdGoH//PB8mnKqScAhsD0kYP3j/Yt5LPQe2KvcXmGvRHcDnpxfL2zOYJ1mFwrryWTz0advv1Ut4CJgf5uhDuDj5eUcAUoahrdY/56ebRWeraTjMt/00Sh3UDtjgHtQNHwcRGOC98BJEAEymycmYcWwOprTgcB6VZ5JK5TAJ+fXGLBm3FDAmn6oPPjR4rKCAoJCal2eAiQp2x0vxTPB3ALO2CRkwmDy5WohzBDwSEFKRwPbknEggCPB/imwrycgxX2NzoMCHhPkDwqYMr9tRcP5qNrMZHkVnOjRMWwLCcr8ohBVb1OMjxLwGCvjTikrsBOiA6fNyCrm8V1rP93iVPpwaE+gO0SsWmPiXB+jikdf6SizrT5qKasx5j8ABbHpFTx+vFXp9EnYQmLx02h1QTTrl6eDqxLnGjporxl3NL3agEvXdT0WmEost648sQOYAeJS9Q7bfUVoMGnjo4AZdUMQku50McDcMWcBPvr0SzbTAFDfvJqwLzgxwATnCgnp4wDl6Aa+Ax283gghmj+vj7feE2KBBRMW3FzOpLOADl0Isb5587h/U4gGvkt5v60Z1VLG8BhYjbzRwyQZemwAd6cCR5/XFWLYZRIMpX39AR0tjaGGiGzLVyhse5C9RKC6ai42ppWPKiBagOvaYk8lO7DajerabOZP46Lby5wKjw1HCRx7p9sVMOWGzb/vA1hwiWc6jm3MvQDTogQkiqIhJV0nBQBTU+3okKCFDy9WwferkHjtxib7t3xIUQtHxnIwtx4mpg26/HfwVNVDb4oI9RHmx5WGelRVlrtiw43zboCLaxv46AZeB3IlTkwouebTr1y2NjSpHz68WNFjHvupy3q8TFn3Hos2IAk4Ju5dCo8B3wP7VPr/FGaKiG+T+v+TQqIrOqMTL1VdWV1DdmcbO8KXBz6esmYWYKPwDL5b5FA1a0hwapHiom0r/cKaoqr+27/XcrS5UwSMbQAAAABJRU5ErkJggg==" alt="DeepWiki"></a>
  <a href="https://discord.com/invite/NVjNA4BAVw"><img src="https://img.shields.io/badge/Discord-Join_Us-blueviolet.svg?logo=discord" alt="Discord"></a>
</p>

**HiClaw is an open-source collaborative multi-agent runtime platform. It enables multiple Agents to collaborate in a controlled and auditable room, with full human visibility and intervention capabilities throughout the process..**

Built on a **Manager-Workers architecture**, HiClaw features a Manager that centrally orchestrates multiple Workers, focusing on collaboration scenarios between humans and Agents, as well as among Agents within enterprise environments.

HiClaw does not compete with other xxClaw projects. Instead of implementing Agent logic itself, it orchestrates and manages multiple Agent containers (including the Manager and numerous Workers).

## Key Features

- 🧬 **Manager-Workers Architecture**: Eliminates the need for human oversight of individual Worker Claws by enabling Agents to manage other Agents.

- 🤝 **Multi-Runtime Collaboration**: OpenClaw, QwenPaw, and Hermes Workers coexist in the same IM room. Use deterministic agents (OpenClaw/QwenPaw) as Leaders to orchestrate tasks, and Hermes Workers for autonomous code execution — each runtime does what it's best at.

- 📦 **MinIO Shared File System**: Introduces a shared file system for inter-Agent information exchange, significantly reducing token consumption in multi-Agent collaboration scenarios.

- 🔐 **Higress AI Gateway**: Centralizes traffic management and mitigates credential-related risks, alleviating user concerns about security vulnerabilities in the native Lobster framework.

- ☎️ **Element IM Client + Tuwunel IM Server (both Matrix protocol-based)**: Eliminating DingTalk/Lark integration overhead and enterprise approval workflows. Enables rapid user onboarding to experience the "delight" of model services within an IM environment, while maintaining compatibility with native OpenClaw IM integration.

## News

- **2026-04-24**: [English](blog/hiclaw-1.1.0-release.md) | [中文](blog/zh-cn/hiclaw-1.1.0-release.md) — HiClaw v1.1.0: Kubernetes-native control plane, Hermes autonomous coding agent runtime, 1.7 GB image shrink, hiclaw CLI replaces shell scripts.
- **2026-04-14**: [English](blog/hiclaw-k8s-native-multi-agent-collaboration.md) | [中文](blog/zh-cn/