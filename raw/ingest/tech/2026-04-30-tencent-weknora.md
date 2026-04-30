<!-- GitHub Trending: Go | 14,119 stars | +29 today -->

# Tencent/WeKnora

> Open-source LLM knowledge platform: turn raw documents into a queryable RAG, an autonomous reasoning agent, and a self-maintaining Wiki.

## Repository Info
- **URL**: https://github.com/Tencent/WeKnora
- **Stars**: 14,119
- **Forks**: 1,708
- **Language**: Go
- **License**: Other
- **Created**: 2025-07-22
- **Updated**: 2026-04-30
- **Topics**: agent, agentic, ai, chatbot, embeddings, evaluation, generative-ai, golang, knowledge-base, llm, multi-tenant, multimodel, ollama, openai, question-answering, rag, reranking, semantic-search, vector-search, wiki
- **Open Issues**: 157

## README (excerpt)
<p align="center">
  <picture>
    <img src="./docs/images/logo.png" alt="WeKnora Logo" height="120"/>
  </picture>
</p>

<p align="center">
  <picture>
    <a href="https://trendshift.io/repositories/15289" target="_blank">
      <img src="https://trendshift.io/api/badge/repositories/15289" alt="Tencent%2FWeKnora | Trendshift" style="width: 250px; height: 55px;" width="250" height="55"/>
    </a>
  </picture>
</p>
<p align="center">
    <a href="https://weknora.weixin.qq.com" target="_blank">
        <img alt="Official Website" src="https://img.shields.io/badge/Official Website-WeKnora-4e6b99">
    </a>
    <a href="https://chatbot.weixin.qq.com" target="_blank">
        <img alt="WeChat Dialog Open Platform" src="https://img.shields.io/badge/WeChat Dialog Open Platform-5ac725">
    </a>
    <a href="https://chromewebstore.google.com/detail/jpemjbopikggjlmikmclgbmkhhopjdgd" target="_blank">
        <img alt="Chrome Extension" src="https://img.shields.io/badge/Chrome Extension-WeKnora-4285F4">
    </a>
    <a href="https://clawhub.ai/lyingbug/weknora" target="_blank">
        <img alt="ClawHub Skill" src="https://img.shields.io/badge/ClawHub Skill-WeKnora-ff6b35">
    </a>
    <a href="https://github.com/Tencent/WeKnora/blob/main/LICENSE">
        <img src="https://img.shields.io/badge/License-MIT-ffffff?labelColor=d4eaf7&color=2e6cc4" alt="License">
    </a>
    <a href="./CHANGELOG.md">
        <img alt="Version" src="https://img.shields.io/badge/version-0.5.1-2e6cc4?labelColor=d4eaf7">
    </a>
</p>

<p align="center">
| <b>English</b> | <a href="./README_CN.md"><b>简体中文</b></a> | <a href="./README_JA.md"><b>日本語</b></a> | <a href="./README_KO.md"><b>한국어</b></a> |
</p>

<p align="center">
  <h4 align="center">

  [Overview](#-overview) • [Architecture](#-architecture) • [Key Features](#-key-features) • [Getting Started](#-getting-started) • [API Reference](#-api-reference) • [Developer Guide](#-developer-guide)
  
  </h4>
</p>

# 💡 WeKnora — Turn Documents into Living Knowledge with RAG, Agents and Auto-Wiki

## 📌 Overview

[**WeKnora**](https://weknora.weixin.qq.com) is an open-source, LLM-powered knowledge framework built for enterprise-grade document understanding, semantic retrieval, and autonomous reasoning.

It is organized around three core capabilities: **RAG-based Quick Q&A** for everyday lookups, a **ReAct Agent** that autonomously orchestrates retrieval, MCP tools and web search to handle complex multi-step tasks, and a brand-new **Wiki Mode** in which agents distill raw documents into a self-maintaining, interlinked markdown knowledge base with an interactive knowledge graph. Combined with multi-source ingestion (Feishu / Notion / Yuque, and growing), 20+ LLM provider integrations, full Langfuse observability, and a fully self-hostable modular architecture, WeKnora turns scattered documents into a queryable, reasoning-capable, continuously evolving knowledge asset.

The framework supports auto-syncing knowledge from Feishu, Notion, and Yuque (more data sources coming soon), handles 10+ document formats including PDF, Word, images, and Excel, and can serve Q&A directly through IM channels like WeCom, Feishu, Slack, and Telegram. It is compatible with major LLM providers including OpenAI, DeepSeek, Qwen (Alibaba Cloud), Zhipu, Hunyuan, Gemini, MiniMax, NVIDIA, and Ollama. Its fully modular design allows swapping LLMs, vector databases, and storage backends, with support for local and private cloud deployment ensuring complete data sovereignty. WeKnora also integrates with **Langfuse** for comprehensive observability into agent reasoning, token usage, and pipeline tracing.


## ✨ Latest Updates

**v0.5.1 Highlights:**

- **Wiki Mode**: A brand-new agent-driven Wiki knowledge system that automatically distills raw documents into interlinked markdown pages. It ships with a dedicated WikiBrowser and an interactive knowledge graph that visualizes references and relationships between pages, helping teams grow a structur