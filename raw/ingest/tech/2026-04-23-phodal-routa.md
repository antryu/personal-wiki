<!-- GitHub Trending: TypeScript | 771 stars | +19 today -->

# phodal/routa

> Workspace-first multi-agent coordination platform for AI development, with shared Specs, Kanban orchestration, and MCP/ACP/   A2A support across web and desktop.

## Repository Info
- **URL**: https://github.com/phodal/routa
- **Stars**: 771
- **Forks**: 135
- **Language**: TypeScript
- **License**: MIT License
- **Created**: 2026-02-16
- **Updated**: 2026-04-23
- **Topics**: N/A
- **Open Issues**: 8

## README (excerpt)
<div align="center">

<img src="public/logo-animated.svg" alt="Routa" width="360" />

# Routa

**Workspace-first multi-agent coordination platform for software delivery**

[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue.svg)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-16.2-black.svg)](https://nextjs.org/)
[![Rust](https://img.shields.io/badge/Rust-Axum-orange.svg)](https://github.com/tokio-rs/axum)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Join Slack](https://img.shields.io/badge/Slack-Join%20Community-4A154B?logo=slack&logoColor=white)](https://join.slack.com/t/routa-group/shared_invite/zt-3txzzfxm8-tnRFwNpPvdfjAVoSD6MTJg)
[![npm version](https://img.shields.io/npm/v/routa-cli)](https://www.npmjs.com/package/routa-cli)
[![crates.io](https://img.shields.io/crates/v/routa-cli)](https://crates.io/crates/routa-cli)

[Demo](#demo) • [Architecture](#architecture) • [How It Works](#how-it-works) • [Why Routa](#why-routa) • [Quick Start](#quick-start) • [Docs](#docs) • [中文](README.zh-CN.md)

</div>

---

Routa is a workspace-first multi-agent coordination platform for software delivery. It keeps goals, tasks, sessions, traces, evidence, and review state visible on a board instead of burying them inside a single chat thread.

[Releases](https://github.com/phodal/routa/releases) · [Architecture](docs/ARCHITECTURE.md) · [Feature Tree](docs/product-specs/FEATURE_TREE.md) · [Quick Start](docs/quick-start.md) · [Docs Site](https://phodal.github.io/routa/) · [Slack](https://join.slack.com/t/routa-group/shared_invite/zt-3txzzfxm8-tnRFwNpPvdfjAVoSD6MTJg) · [Contributing](CONTRIBUTING.md)

## Demo

- [Bilibili walkthrough](https://www.bilibili.com/video/BV16CwyzUED5/)
- [YouTube walkthrough](https://www.youtube.com/watch?v=spjmr_1AQLM)

![Routa Kanban Overview](https://github.com/user-attachments/assets/8fdf7934-f8ba-469f-a8b8-70e215637a45)

## Community

- [Docs Site](https://phodal.github.io/routa/)
- [Slack Community](https://join.slack.com/t/routa-group/shared_invite/zt-3txzzfxm8-tnRFwNpPvdfjAVoSD6MTJg)
- [Releases](https://github.com/phodal/routa/releases)
- [Issues](https://github.com/phodal/routa/issues)

### WeChat Group

<img src="https://github.com/user-attachments/assets/78270d2e-e512-4e6a-8116-a88b13b80fa0" alt="Routa WeChat Group QR Code" width="480" />

## Architecture

### System Architecture

![Routa architecture](docs/architecture.svg)

The current implementation is intentionally dual-backend, not two separate products.

- Web: Next.js pages and route handlers in `src/`
- Desktop: Tauri shell in `apps/desktop/` backed by the Axum server in `crates/routa-server/`
- Shared boundary: both runtimes preserve the same workspace, session, task, trace, codebase, worktree, and review semantics defined by `api-contract.yaml`
- Integration surfaces: ACP, MCP, A2A, AG-UI, A2UI, REST, and SSE

### Review Gate Architecture

![Routa review gate](docs/review-gate.svg)

The delivery gate is a stacked decision path, not a single reviewer persona.

- Harness Monitor answers what happened by surfacing traces, changed files, commands, git state, and attribution
- Entrix Fitness answers what should be true by enforcing hard gates, evidence requirements, and file budget or policy checks
- Gate Specialist answers whether the card can move by verifying acceptance criteria and routing to Done, Dev, or human escalation

## How It Works

```text
You: "Build a user auth system with login, registration, and password reset"
                                                            ↓
                                    Workspace + Kanban Board
                                                            ↓
 Backlog              Todo              Dev               Review            Done
 Backlog Refiner  ->  Todo Orchestrator -> Dev Crafter -> Review Guard -> Done Reporter
                                                            ↘
                                     