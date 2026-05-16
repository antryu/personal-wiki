<!-- GitHub Trending: Rust | 742 stars | +46 today -->

# octos-org/octos

> Octos - Agentic Operating Systems

## Repository Info
- **URL**: https://github.com/octos-org/octos
- **Stars**: 742
- **Forks**: 61
- **Language**: Rust
- **License**: Apache License 2.0
- **Created**: 2026-03-15
- **Updated**: 2026-05-16
- **Topics**: N/A
- **Open Issues**: 251

## README (excerpt)
# Octos 🐙

> Like an octopus — 9 brains (1 central + 8 in the arms, one per arm). Every arm thinks independently, but they share one brain.

**Open Cognitive Tasks Orchestration System** — a Rust-native, API-first Agentic OS.

31MB static binary. ~140 REST endpoints. 15 LLM providers. 14 messaging channels. Multi-tenant. Zero external runtime services.

## What is Octos?

Octos is an open-source AI agent platform that lets you run your own AI system on a single machine or across a cloud-and-device pair. You deploy one Rust binary, connect your LLM provider and channels, and Octos handles routing, sessions, tools, memory, and multi-user isolation through a web dashboard and REST API.

You can think of it as the **backend operating system for AI agents**. Instead of building a new chatbot stack for every use case, you configure Octos profiles with their own prompts, models, tools, and channels, then manage them from one control plane.

The important part for new users is that Octos can be used in three distinct ways:

1. **Octos Cloud signup** — the easiest path; create an account, choose a node name, and run the generated setup command on your device.
2. **Self-hosted local** — run Octos only on your own machine or local network.
3. **Self-hosted cloud + tenant pair** — run your own public VPS plus your own tenant device for internet-accessible remote use.

## Why Octos

Most agentic systems are single-tenant chat assistants — one user, one model, one conversation at a time. Octos is different:

- **API-first Agentic OS**: ~140 REST endpoints (chat, sessions, admin, profiles, skills, swarm, pipeline, metrics, webhooks, SSE). Any frontend — web, mobile, CLI, CI/CD — can be built on top.
- **Multi-tenant by design**: One 31MB binary serves 200+ profiles on a 16GB machine. Each profile is a separate OS process with isolated memory, sessions, and data. Family Plan sub-accounts.
- **Multi-LLM DOT pipelines**: Define workflows as DOT graphs. Per-node model selection. Dynamic parallel fan-out spawns N concurrent workers at runtime, with bounded concurrency for fleet stability.
- **Swarm dispatcher**: Fan contracts to N sub-agents, aggregate artifacts, gate through validator, roll up cost — wired into `/api/swarm/dispatch`.
- **3-layer provider failover**: RetryProvider → ProviderChain → AdaptiveRouter. Hedge racing, lane scoring, circuit breakers.
- **LRU tool deferral**: ~15 active tools for fast LLM reasoning, ~50 on demand. Idle tools auto-evict. `spawn_only` tools auto-redirect to background execution.
- **5 queue modes per session**: Followup, Collect, Steer, Interrupt, Speculative — users control agent concurrency via `/queue`.
- **Session control in any channel**: `/new`, `/s <name>`, `/sessions`, `/back` — works in Telegram, Discord, Slack, WhatsApp, Matrix, Feishu.
- **Sticky thread_id + committed_seq**: Every SSE event is bound to a thread; replay is deterministic by committed sequence number (M8.10).
- **3-layer memory**: Long-term (entity bank, auto-injected), episodic (task outcomes in redb), session (JSONL + LLM compaction, three-tier).
- **Native office suite**: PPTX/DOCX/XLSX via pure Rust (zip + quick-xml).
- **Sandbox isolation**: bwrap + sandbox-exec + Docker + Windows AppContainer. `deny(unsafe_code)` workspace-wide. 67 prompt injection tests.

## Choose a setup path

All three paths are valid. The easiest is Octos Cloud signup, but the self-hosted modes are first-class as well.

| Option | Machines involved | Public internet access | Who manages the infrastructure | Best fit |
| --- | --- | --- | --- | --- |
| **1. Octos Cloud signup** | Your device + Octos Cloud | Yes | Octos Cloud + you | Fastest path |
| **2. Self-hosted local-only** | One machine | No | You | Local/private use |
| **3. Self-hosted cloud + tenant pair** | Your VPS + your device | Yes | You | Full self-hosting with remote access |

Visual overview:

<img src="images/octos-options.jpg" alt="Three ways to run Octos: Octos Cloud signup, self-hoste