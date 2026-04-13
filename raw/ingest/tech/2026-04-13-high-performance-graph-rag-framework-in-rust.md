<!-- GitHub Trending: Rust | 1,668 stars | +22 today -->

# raphaelmansuy/edgequake

> EdegQuake 🌋 High-performance GraphRAG inspired from LightRag written in Rust; Transform documents into intelligent knowledge graphs for superior retrieval and generation

## Repository Info
- **URL**: https://github.com/raphaelmansuy/edgequake
- **Stars**: 1,668
- **Forks**: 180
- **Language**: Rust
- **License**: Apache License 2.0
- **Created**: 2025-12-21
- **Updated**: 2026-04-13
- **Topics**: graphrag, knowledge-graph, lightrag, rag
- **Open Issues**: 20

## README (excerpt)
# EdgeQuake

<a href="https://trendshift.io/repositories/20893" target="_blank"><img src="https://trendshift.io/api/badge/repositories/20893" alt="raphaelmansuy%2Fedgequake | Trendshift" style="width: 250px; height: 55px;" width="250" height="55"/></a>

> **High-Performance Graph-RAG Framework in Rust**  
> Transform documents into intelligent knowledge graphs for superior retrieval and generation

[![Version](https://img.shields.io/badge/version-0.10.1-blue.svg?style=flat)](CHANGELOG.md)
[![Rust](https://img.shields.io/badge/rust-1.78+-orange.svg?style=flat&logo=rust)](https://www.rust-lang.org)
[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg?style=flat)](LICENSE)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg?style=flat)](https://github.com/raphaelmansuy/edgequake)
[![Documentation](https://img.shields.io/badge/docs-available-blue.svg?style=flat)](docs/README.md)

> **v0.10.1** — Sigma graph-viewer performance hardening, safer embedding limits for dense PDFs, and a fully green publication pass for `curl | sh` and GHCR installs. See [CHANGELOG](CHANGELOG.md) for full details.

---

![Screenshot of EdgeQuake Frontend](docs/assets/01-screenshot.png)

## Why EdgeQuake?

Traditional RAG systems retrieve document chunks using vector similarity alone. This works for simple lookups but fails on multi-hop reasoning ("How does X relate to Y through Z?"), thematic questions ("What are the major themes?"), and relationship queries. The core problem: **vectors capture semantic similarity but lose structural relationships between concepts**.

**EdgeQuake** solves this by implementing the [LightRAG algorithm](https://arxiv.org/abs/2410.05779) in Rust: documents are not just chunked and embedded — they are decomposed into a **knowledge graph** of entities and relationships. At query time, the system traverses both the vector space and the graph structure, combining the speed of vector search with the reasoning power of graph traversal.

### What Sets EdgeQuake Apart

- **Knowledge Graphs**: LLM-powered entity extraction and relationship mapping create a structured understanding of your documents — not just keyword matching
- **6 Query Modes**: From fast naive vector search to graph-traversing hybrid queries, each mode optimizes for different question types
- **Rust Performance**: Async-first Tokio architecture with zero-copy operations — handles thousands of concurrent requests
- **PDF LLM Vision Pipeline ✅ NEW in 0.4.0**: Multimodal LLMs (GPT-4o, Claude, Gemini) read PDF pages as images — handles scanned documents, complex tables, and multi-column layouts out of the box
- **Production Ready**: OpenAPI 3.0 REST API, SSE streaming, health checks, multi-tenant workspace isolation
- **Modern Frontend**: React 19 with interactive Sigma.js graph visualizations

### Performance Benchmarks

| Metric                 | EdgeQuake        | Traditional RAG | Improvement |
| ---------------------- | ---------------- | --------------- | ----------- |
| Entity Extraction      | ~2-3x more       | Baseline        | 3x          |
| Query Latency (hybrid) | < 200ms          | ~1000ms         | 5x faster   |
| Document Processing    | 25s (10k tokens) | ~60s            | 2.4x faster |
| Concurrent Users       | 1000+            | ~100            | 10x         |
| Memory Usage (per doc) | 2MB              | ~8MB            | 4x better   |

> **v0.4.0 — PDF is now Production Ready**: The PDF pipeline ships with embedded pdfium (zero-config) and an opt-in LLM vision mode. Text-mode extraction works for all standard PDFs; enable `use_vision_llm = true` (or send `X-Use-Vision: true`) to route pages through your vision-capable LLM for scanned documents and complex layouts.

> **v0.4.0 Update**: PDF processing is now **production-ready** with embedded pdfium via `edgequake-pdf2md v0.4.1`. No external library setup required — just upload your PDFs!

---

## Features

### 🚀 High Performance

- **Async-First**: Tokio