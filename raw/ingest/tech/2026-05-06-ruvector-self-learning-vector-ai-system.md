<!-- GitHub Trending: Rust | 3,970 stars | +37 today -->

# ruvnet/RuVector

> RuVector is a High Performance, Real-Time, Self-Learning Ai, Vector GNN, Memory DB built in Rust.

## Repository Info
- **URL**: https://github.com/ruvnet/RuVector
- **Stars**: 3,970
- **Forks**: 490
- **Language**: Rust
- **License**: MIT License
- **Created**: 2025-11-19
- **Updated**: 2026-05-06
- **Topics**: ai, ai-ocr, attention-mechanism, gnn, gnn-model, gnns, graph, graph-neural-networks, llm-inference, low-latency, mincut, neo4j, ocr, onnx, rust, vector, wasm
- **Open Issues**: 110

## README (excerpt)
# RuVector — A Self-Learning, Vector Memory & Agentic Operating System
[![CES 2026 Innovation Award](https://img.shields.io/badge/🏅_CES_2026-Innovation_Award-gold.svg)](https://cognitum.one)
[![GitHub Trending](https://img.shields.io/badge/🔥_GitHub-Trending-orange.svg)](https://github.com/ruvnet/ruvector)

[![Crates.io](https://img.shields.io/crates/v/ruvector-core.svg)](https://crates.io/crates/ruvector-core)
[![npm](https://img.shields.io/npm/v/ruvector.svg)](https://www.npmjs.com/package/ruvector)
[![Downloads](https://img.shields.io/npm/dt/ruvector.svg?label=Downloads)](https://www.npmjs.com/package/ruvector)
[![Monthly Downloads](https://img.shields.io/npm/dm/ruvector.svg?label=Monthly%20Downloads)](https://www.npmjs.com/package/ruvector)
[![ruv.io](https://img.shields.io/badge/ruv.io-website-purple.svg)](https://ruv.io)
[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

### **The self-learning, self-optimizing vector database — with graph intelligence, local AI, and PostgreSQL built in.**

> Created by [rUv](https://ruv.io) and powering [Cognitum](https://cognitum.one), a 🏅 **CES 2026 Innovation Awards Honoree** — the world's first Agentic Chip designed to be always running for AI agents. Tens of thousands of agents, near-zero power, learns from every signal. [Learn more →](https://cognitum.one)


```bash
npx ruvector
```

####  Most vector databases store your data and search it — the same way, every time. 

#### **RuVector** is fundamentally different. It watches how you use it and gets smarter: search results improve automatically, the system tunes itself to your workload, and it runs AI models right on your hardware — no cloud APIs, no per-query bills, GPUs optional, CPUs preferred. It drops into PostgreSQL, runs in browsers, and ships as a single file. 

Open source. ❤️ Free forever.

```
User Query → [SONA Engine] → Model Response → User Feedback
                  ↑                                 │
                  └─────── Learning Signal ─────────┘
                         (< 1ms adaptation)
```

<details>
<summary>🔍 RuVector vs Typical Vector Databases (25 differences)</summary>

| | RuVector | Typical Vector DB |
|---|---|---|
| **Self-Learning & Optimization** | | |
| [Search quality](./crates/ruvector-gnn) | 🧠 GNN learns from every query — results improve over time | Static — same results every time |
| [Self-optimizing](./crates/sona) | ⚡ SONA auto-tunes routing, ranking, and compression to your workload | Manual tuning required |
| [50+ attention mechanisms](./crates/ruvector-attention) | 🎯 FlashAttention-3, MLA, Mamba SSM, linear, graph, hyperbolic, [mincut-gated](./crates/ruvector-attn-mincut) | Basic similarity only |
| [Transfer learning](./crates/ruvector-domain-expansion) | 🔄 Knowledge transfers across domains — new tasks bootstrap from past learning | Start from scratch each time |
| **Search & Retrieval** | | |
| [Hybrid search](./crates/ruvector-core) | 🔍 Sparse vectors + dense vectors with RRF fusion — 20-49% better retrieval | Keyword OR vector, not both |
| [Graph RAG](./crates/ruvector-core) | 📊 Knowledge graph + community detection for multi-hop queries — 30-60% improvement | Naive chunk-based RAG |
| [DiskANN](./crates/ruvector-core) | 💾 Billion-scale SSD-backed ANN with <10ms latency via Vamana graph | Memory-only indexes |
| [TurboQuant](./crates/ruvllm) | ⚡ 2-4 bit KV-cache quantization — 6-8x memory savings with <0.5% quality loss | No quantization or 8-bit only |
| [ColBERT multi-vector](./crates/ruvector-core) | 🎯 Per-token late interaction retrieval (MaxSim) for fine-grained matching | Single-vector only |
| [Matryoshka embeddings](./crates/ruvector-core) | 🪆 Adaptive-dimension search — coarse-to-fine funnel for speed with minimal recall loss | Fixed dimensions only |
| **Graph & Relationships** | | |
| [Graph queries](./crates/ruvector-graph) | 🔗 Full Cypher engine — `MATCH (a)-[:KNOWS]->(b)` like Neo4j | Flat list 