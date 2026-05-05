<!-- GitHub Trending: Rust | 11,318 stars | +8 today -->

# tensorzero/tensorzero

> TensorZero is an open-source LLMOps platform that unifies an LLM gateway, observability, evaluation, optimization, and experimentation.

## Repository Info
- **URL**: https://github.com/tensorzero/tensorzero
- **Stars**: 11,318
- **Forks**: 822
- **Language**: Rust
- **License**: Apache License 2.0
- **Created**: 2024-07-16
- **Updated**: 2026-05-05
- **Topics**: ai, ai-engineering, anthropic, artificial-intelligence, deep-learning, genai, generative-ai, gpt, large-language-models, llama, llm, llmops, llms, machine-learning, ml, ml-engineering, mlops, openai, python, rust
- **Open Issues**: 381

## README (excerpt)
<p><picture><img src="https://github.com/user-attachments/assets/9d0a93c6-7685-4e57-9737-7cbeb338a218" alt="TensorZero Logo" width="128" height="128"></picture></p>

# TensorZero

<p><picture><img src="https://www.tensorzero.com/github-trending-badge.svg" alt="GitHub Trending - #1 Repository Of The Day"></picture></p>

**TensorZero is an open-source LLMOps platform that unifies:**

- **Gateway:** access every LLM provider through a unified API, built for performance (<1ms p99 latency)
- **Observability:** store inferences and feedback in your database, available programmatically or in the UI
- **Evaluation:** benchmark individual inferences or end-to-end workflows using heuristics, LLM judges, etc.
- **Optimization:** collect metrics and human feedback to optimize prompts, models, and inference strategies
- **Experimentation:** ship with confidence with built-in A/B testing, routing, fallbacks, retries, etc.

You can take what you need, adopt incrementally, and complement with other tools.
It plays nicely with the **OpenAI SDK**, **OpenTelemetry**, and **every major LLM provider**.

TensorZero is used by companies ranging from frontier AI startups to the Fortune 10 and fuels ~1% of global LLM API spend today.

<br>

<p align="center">
  <b><a href="https://www.tensorzero.com/" target="_blank">Website</a></b>
  ·
  <b><a href="https://www.tensorzero.com/docs" target="_blank">Docs</a></b>
  ·
  <b><a href="https://www.x.com/tensorzero" target="_blank">Twitter</a></b>
  ·
  <b><a href="https://www.tensorzero.com/slack" target="_blank">Slack</a></b>
  ·
  <b><a href="https://www.tensorzero.com/discord" target="_blank">Discord</a></b>
  <br>
  <br>
  <b><a href="https://www.tensorzero.com/docs/quickstart" target="_blank">Quick Start (5min)</a></b>
  ·
  <b><a href="https://www.tensorzero.com/docs/deployment/tensorzero-gateway" target="_blank">Deployment Guide</a></b>
  ·
  <b><a href="https://www.tensorzero.com/docs/gateway/api-reference" target="_blank">API Reference</a></b>
  ·
  <b><a href="https://www.tensorzero.com/docs/gateway/configuration-reference" target="_blank">Configuration Reference</a></b>
</p>

## Demo

<video src="https://github.com/user-attachments/assets/04a8466e-27d8-4189-b305-e7cecb6881ee"></video>

## Features

> [!NOTE]
>
> ### 🆕 TensorZero Autopilot
>
> TensorZero Autopilot is an **automated AI engineer** powered by TensorZero that analyzes LLM observability data, sets up evals, optimizes prompts and models, and runs A/B tests.
>
> It **dramatically improves the performance of LLM agents** across diverse tasks:
>
> <img width="600" alt="Bar chart showing baseline vs. optimized scores across diverse LLM tasks" src="https://github.com/user-attachments/assets/aa474fe3-b55a-48aa-9f0d-e7c2f8e32ccd" />
> <br>
>
> **[Learn more →](https://www.tensorzero.com/blog/automated-ai-engineer/)**&emsp;&emsp;**[Schedule a demo →](https://www.tensorzero.com/schedule-demo)**

### 🌐 LLM Gateway

> **Integrate with TensorZero once and access every major LLM provider.**

- [x] **[Call any LLM](https://www.tensorzero.com/docs/gateway/call-any-llm)** (API or self-hosted) through a single unified API
- [x] Infer with **[tool use](https://www.tensorzero.com/docs/gateway/guides/tool-use)**, **[structured outputs (JSON)](https://www.tensorzero.com/docs/gateway/generate-structured-outputs)**, **[batch](https://www.tensorzero.com/docs/gateway/guides/batch-inference)**, **[embeddings](https://www.tensorzero.com/docs/gateway/generate-embeddings)**, **[multimodal (images, files)](https://www.tensorzero.com/docs/gateway/call-llms-with-image-and-file-inputs)**, **[caching](https://www.tensorzero.com/docs/gateway/guides/inference-caching)**, etc.
- [x] **[Create prompt templates and schemas](https://www.tensorzero.com/docs/gateway/create-a-prompt-template)** to enforce a structured interface between your application and the LLMs
- [x] Satisfy extreme throughput and latency needs, thanks to 🦀 Rust: **[<1ms p99 latency overhead at 10k+ QPS](h