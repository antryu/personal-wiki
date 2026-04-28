<!-- GitHub Trending: Rust | 15,270 stars | +120 today -->

# memvid/memvid

> Memory layer for AI Agents. Replace complex RAG pipelines with a serverless, single-file memory layer. Give your agents instant retrieval and long-term memory.

## Repository Info
- **URL**: https://github.com/memvid/memvid
- **Stars**: 15,270
- **Forks**: 1,311
- **Language**: Rust
- **License**: Apache License 2.0
- **Created**: 2025-05-27
- **Updated**: 2026-04-28
- **Topics**: ai, context, embedded, faiss, knowledge-base, knowledge-graph, llm, machine-learning, memory, memvid, mv2, nlp, offline-first, opencv, python, rag, retrieval-augmented-generation, semantic-search, vector-database, video-processing
- **Open Issues**: 20

## README (excerpt)
<!-- HEADER:START -->
<img width="2000" height="524" alt="Social Cover (9)"
     src="https://github.com/user-attachments/assets/cf66f045-c8be-494b-b696-b8d7e4fb709c" />
<!-- HEADER:END -->

<div style="height: 16px;"></div>

<p align="center">
    <a href="https://trendshift.io/repositories/17293" target="_blank"><img src="https://trendshift.io/api/badge/repositories/17293" alt="memvid%2Fmemvid | Trendshift" style="width: 250px; height: 55px;" width="250" height="55"/></a>
</p>
<!-- BADGES:END -->

<p align="center">
  <strong>Memvid is a single-file memory layer for AI agents with instant retrieval and long-term memory.</strong><br/>
  Persistent, versioned, and portable memory, without databases.
</p>

<!-- NAV:START -->
<p align="center">
  <a href="https://www.memvid.com">Website</a>
  ·
  <a href="https://sandbox.memvid.com">Try Sandbox</a>
  ·
  <a href="https://docs.memvid.com">Docs</a>
  ·
  <a href="https://github.com/memvid/memvid/discussions">Discussions</a>
</p>
<!-- NAV:END -->

<!-- BADGES:START -->
<p align="center">
  <a href="https://crates.io/crates/memvid-core"><img src="https://img.shields.io/crates/v/memvid-core?style=flat-square&logo=rust" alt="Crates.io" /></a>
  <a href="https://docs.rs/memvid-core"><img src="https://img.shields.io/docsrs/memvid-core?style=flat-square&logo=docs.rs" alt="docs.rs" /></a>
  <a href="https://github.com/memvid/memvid/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-blue?style=flat-square" alt="License" /></a>
</p>

<p align="center">
  <a href="https://github.com/memvid/memvid/stargazers"><img src="https://img.shields.io/github/stars/memvid/memvid?style=flat-square&logo=github" alt="Stars" /></a>
  <a href="https://github.com/memvid/memvid/network/members"><img src="https://img.shields.io/github/forks/memvid/memvid?style=flat-square&logo=github" alt="Forks" /></a>
  <a href="https://github.com/memvid/memvid/issues"><img src="https://img.shields.io/github/issues/memvid/memvid?style=flat-square&logo=github" alt="Issues" /></a>
  <a href="https://discord.gg/2mynS7fcK7"><img src="https://img.shields.io/discord/1442910055233224745?style=flat-square&logo=discord&label=discord" alt="Discord" /></a>
</p>




## Benchmark Highlights

**🚀 Higher accuracy than any other memory system :** +35% SOTA on LoCoMo, best-in-class long-horizon conversational recall & reasoning

**🧠 Superior multi-hop & temporal reasoning:**  +76% multi-hop, +56% temporal vs. the industry average

**⚡ Ultra-low latency at scale** 0.025ms P50 and 0.075ms P99, with 1,372× higher throughput than standard

**🔬 Fully reproducible benchmarks:** LoCoMo (10 × ~26K-token conversations), open-source eval, LLM-as-Judge


## What is Memvid?

Memvid is a portable AI memory system that packages your data, embeddings, search structure, and metadata into a single file.

Instead of running complex RAG pipelines or server-based vector databases, Memvid enables fast retrieval directly from the file.

The result is a model-agnostic, infrastructure-free memory layer that gives AI agents persistent, long-term memory they can carry anywhere.

    
## What are Smart Frames?

Memvid draws inspiration from video encoding, not to store video, but to **organize AI memory as an append-only, ultra-efficient sequence of Smart Frames.**

A Smart Frame is an immutable unit that stores content along with timestamps, checksums and basic metadata.
Frames are grouped in a way that allows efficient compression, indexing, and parallel reads.

This frame-based design enables:

-   Append-only writes without modifying or corrupting existing data
-   Queries over past memory states
-   Timeline-style inspection of how knowledge evolves
-   Crash safety through committed, immutable frames
-   Efficient compression using techniques adapted from video encoding

The result is a single file that behaves like a rewindable memory timeline for AI systems.


## Core Concepts

-   **Living Memory Engine**
    Continuously append,