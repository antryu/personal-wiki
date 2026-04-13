<!-- GitHub Trending: Rust | 6,292 stars | +33 today -->

# katanemo/plano

> Plano is an AI-native proxy and data plane for agentic apps — with built-in orchestration, safety, observability, and smart LLM routing so you stay focused on your agents core logic.

## Repository Info
- **URL**: https://github.com/katanemo/plano
- **Stars**: 6,292
- **Forks**: 398
- **Language**: Rust
- **License**: Apache License 2.0
- **Created**: 2024-07-09
- **Updated**: 2026-04-13
- **Topics**: ai-gateway, ai-gateway-support, envoy, envoyproxy, gateway, generative-ai, llm-gateway, llm-inference, llm-proxy, llm-routing, llmops, llms, openai, prompt, proxy, proxy-server, routing
- **Open Issues**: 123

## README (excerpt)
<div align="center">
  <img src="docs/source/_static/img/PlanoTagline.svg" alt="Plano Logo" width="75%" height=auto>
</div>
<div align="center">

 _The AI-native proxy server and data plane for agentic apps._<br><br>
 Plano pulls out the rote plumbing work and decouples you from brittle framework abstractions, centralizing what shouldn’t be bespoke in every codebase - like agent routing and orchestration, rich agentic signals and traces for continuous improvement, guardrail filters for safety and moderation, and smart LLM routing APIs for model agility. Use any language or AI framework, and deliver agents faster to production.


[Quickstart Guide](https://docs.planoai.dev/get_started/quickstart.html) •
[Build Agentic Apps with Plano](#Build-Agentic-Apps-with-Plano) •
[Documentation](https://docs.planoai.dev) •
[Contact](#Contact)

[![CI](https://github.com/katanemo/plano/actions/workflows/ci.yml/badge.svg)](https://github.com/katanemo/plano/actions/workflows/ci.yml)
[![Docker Image](https://github.com/katanemo/plano/actions/workflows/docker-push-main.yml/badge.svg)](https://github.com/katanemo/plano/actions/workflows/docker-push-main.yml)
[![Build and Deploy Documentation](https://github.com/katanemo/plano/actions/workflows/static.yml/badge.svg)](https://github.com/katanemo/plano/actions/workflows/static.yml)

Star ⭐️ the repo if you found Plano useful — new releases and updates land here first.
</div>

# Overview
Building agentic demos is easy. Shipping agentic applications safely, reliably, and repeatably to production is hard. After the thrill of a quick hack, you end up building the “hidden middleware” to reach production: routing logic to reach the right agent, guardrail hooks for safety and moderation, evaluation and observability glue for continuous learning, and model/provider quirks scattered across frameworks and application code.

Plano solves this by moving core delivery concerns into a unified, out-of-process dataplane.

- **🚦 Orchestration:** Low-latency orchestration between agents; add new agents without modifying app code.
- **🔗 Model Agility:** Route [by model name, alias (semantic names) or automatically via preferences](#use-plano-as-a-llm-router).
- **🕵 Agentic Signals&trade;:** Zero-code capture of [Signals](https://docs.planoai.dev/concepts/signals.html) plus OTEL traces/metrics across every agent.
- **🛡️ Moderation & Memory Hooks:** Build jailbreak protection, add moderation policies and memory consistently via [Filter Chains](https://docs.planoai.dev/concepts/filter_chain.html).

Plano pulls rote plumbing out of your framework so you can stay focused on what matters most: the core product logic of your agentic applications. Plano is backed by [industry-leading LLM research](https://planoai.dev/research) and built on [Envoy](https://envoyproxy.io) by its core contributors, who built critical infrastructure at scale for modern worklaods.

**High-Level Network Sequence Diagram**:
![high-level network plano arcitecture for Plano](docs/source/_static/img/plano_network_diagram_high_level.png)

**Jump to our [docs](https://docs.planoai.dev)** to learn how you can use Plano to improve the speed, safety and obervability of your agentic applications.

> [!IMPORTANT]
> Plano and the Arch family of LLMs (like Plano-Orchestrator-4B, Arch-Router, etc) are hosted free of charge in the US-central region to give you a great first-run developer experience of Plano. To scale and run in production, you can either run these LLMs locally or contact us on [Discord](https://discord.gg/pGZf2gcwEc) for API keys.

---

## Build Agentic Apps with Plano

Plano handles **orchestration, model management, and observability** as modular building blocks - letting you configure only what you need (edge proxying for agentic orchestration and guardrails, or LLM routing from your services, or both together) to fit cleanly into existing architectures. Below is a simple multi-agent travel agent built with Plano that showcases all three c