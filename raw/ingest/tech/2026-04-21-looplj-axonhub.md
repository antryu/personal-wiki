<!-- GitHub Trending: Go | 3,230 stars | +55 today -->

# looplj/axonhub

> ⚡️ Open-source AI Gateway — Use any SDK to call 100+ LLMs. Built-in failover, load balancing, cost control & end-to-end tracing.

## Repository Info
- **URL**: https://github.com/looplj/axonhub
- **Stars**: 3,230
- **Forks**: 365
- **Language**: Go
- **License**: Other
- **Created**: 2025-09-09
- **Updated**: 2026-04-21
- **Topics**: agent, agents, ai, anthropic, anthropic-api, api-gateway, claude, claude-code, codex, cost-management, deepseek, gemini-api, llm, openai, opencode
- **Open Issues**: 29

## README (excerpt)
<div align="center">

# AxonHub - All-in-one AI Development Platform
### Use any SDK. Access any model. Zero code changes.

<a href="https://trendshift.io/repositories/16225" target="_blank"><img src="https://trendshift.io/api/badge/repositories/16225" alt="looplj%2Faxonhub | Trendshift" style="width: 250px; height: 55px;" width="250" height="55"/></a>

</div>

<div align="center">

[![Test Status](https://github.com/looplj/axonhub/actions/workflows/test.yml/badge.svg)](https://github.com/looplj/axonhub/actions/workflows/test.yml)
[![Lint Status](https://github.com/looplj/axonhub/actions/workflows/lint.yml/badge.svg)](https://github.com/looplj/axonhub/actions/workflows/lint.yml)
[![Go Version](https://img.shields.io/github/go-mod/go-version/looplj/axonhub?logo=go&logoColor=white)](https://golang.org/)
[![Docker Ready](https://img.shields.io/badge/docker-ready-2496ED?logo=docker&logoColor=white)](https://docker.com)

[English](README.md) | [中文](README.zh-CN.md) | [日本語](README.ja-JP.md)

</div>

---

> NOTE
>
> 1. This project is maintained by an individual. The author makes no warranties and assumes no liability for risks arising from its use. Please evaluate carefully.
> 2. The core scope of this project does not include 2api (subscription-to-API conversion). If you need that, consider other open-source projects focused on 2api.

---

## 📖 Project Introduction

### All-in-one AI Development Platform

**AxonHub is the AI gateway that lets you switch between model providers without changing a single line of code.**

Whether you're using OpenAI SDK, Anthropic SDK, or any AI SDK, AxonHub transparently translates your requests to work with any supported model provider. No refactoring, no SDK swaps—just change a configuration and you're done.

**What it solves:**
- 🔒 **Vendor lock-in** - Switch from GPT-4 to Claude or Gemini instantly
- 🔧 **Integration complexity** - One API format for 10+ providers
- 📊 **Observability gap** - Complete request tracing out of the box
- 💸 **Cost control** - Real-time usage tracking and budget management

<div align="center">
  <img src="docs/axonhub-architecture-light.svg" alt="AxonHub Architecture" width="700"/>
</div>

### Core Features

| Feature | What You Get |
|---------|-------------|
| 🔄 [**Any SDK → Any Model**](docs/en/api-reference/openai-api.md) | Use OpenAI SDK to call Claude, or Anthropic SDK to call GPT. Zero code changes. |
| 🔍 [**Full Request Tracing**](docs/en/guides/tracing.md) | Complete request timelines with thread-aware observability. Debug faster. |
| 🔐 [**Enterprise RBAC**](docs/en/guides/permissions.md) | Fine-grained access control, usage quotas, and data isolation. |
| ⚡ [**Smart Load Balancing**](docs/en/guides/load-balance.md) | Auto failover in <100ms. Always route to the healthiest channel. |
| 💰 [**Real-time Cost Tracking**](docs/en/guides/cost-tracking.md) | Per-request cost breakdown. Input, output, cache tokens—all tracked. |

---

## 📚 Documentation

For detailed technical documentation, API references, architecture design, and more:

- 📑 **[Documentation Index](docs/en/index.md)** - Complete documentation navigation
- [![DeepWiki](https://img.shields.io/badge/DeepWiki-looplj%2Faxonhub-blue.svg?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAyCAYAAAAnWDnqAAAAAXNSR0IArs4c6QAAA05JREFUaEPtmUtyEzEQhtWTQyQLHNak2AB7ZnyXZMEjXMGeK/AIi+QuHrMnbChYY7MIh8g01fJoopFb0uhhEqqcbWTp06/uv1saEDv4O3n3dV60RfP947Mm9/SQc0ICFQgzfc4CYZoTPAswgSJCCUJUnAAoRHOAUOcATwbmVLWdGoH//PB8mnKqScAhsD0kYP3j/Yt5LPQe2KvcXmGvRHcDnpxfL2zOYJ1mFwrryWTz0advv1Ut4CJgf5uhDuDj5eUcAUoahrdY/56ebRWeraTjMt/00Sh3UDtjgHtQNHwcRGOC98BJEAEymycmYcWwOprTgcB6VZ5JK5TAJ+fXGLBm3FDAmn6oPPjR4rKCAoJCal2eAiQp2x0vxTPB3ALO2CRkwmDy5WohzBDwSEFKRwPbknEggCPB/imwrycgxX2NzoMCHhPkDwqYMr9tRcP5qNrMZHkVnOjRMWwLCcr8ohBVb1OMjxLwGCvjTikrsBOiA6fNyCrm8V1rP93iVPpwaE+gO0SsWmPiXB+jikdf6SizrT5qKasx5j8ABbHpFTx+vFXp9EnYQmLx02h1QTTrl6eDqxLnGjporxl3NL3agEvXdT0WmEost648sQOYAeJS9Q7bfUVoMGnjo4AZdUMQku50McDcMWcBPvr0SzbTAFDfvJqwLzgxwATnCgnp4wD