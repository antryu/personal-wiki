# AI-Native Proxy for Agentic Apps

> Plano is an AI-native proxy and data plane for agentic apps, centralizing orchestration, safety, observability, and LLM routing to streamline agent development and deployment. It decouples developers from brittle framework abstractions, enabling focus on core application logic.  
> Last updated: 2026-04-13

## Overview
Plano addresses the challenges of deploying agentic applications at scale by abstracting "hidden middleware" tasks like agent routing, guardrail enforcement, and model management into a unified, out-of-process data plane. Built on [Envoy](https://envoyproxy.io) by its core contributors, it offers low-latency orchestration between agents, semantic LLM routing, zero-code signal capture for observability, and customizable filter chains for safety. The platform supports multi-language and multi-framework workflows, with features like Agentic Signals™ and OTEL integration for traceability. A free developer tier hosts key models (e.g., Plano-Orchestrator-4B) in the US-central region, with options to scale via local deployment or API keys.

## Key Points
- **Orchestration**: Enables low-latency agent coordination and dynamic agent addition without modifying application code.
- **Model Agility**: Routes LLM requests by name, alias, or automated preferences, simplifying model switching and management.
- **Agentic Signals & Observability**: Captures runtime signals and integrates with OTEL for traces/metrics across all agents.
- **Safety & Moderation**: Implements guardrails via filter chains for jailbreak protection, policy enforcement, and memory management.

## Sources
- [GitHub](https://github.com/katanemo/plano)
- [원본](raw/ingest/infra/2026-04-13-ai-native-proxy-for-agentic-apps.md)