# High-Performance Graph-RAG Framework in Rust

> EdgeQuake is a high-performance GraphRAG framework written in Rust, designed to transform documents into intelligent knowledge graphs for superior retrieval and generation. It outperforms traditional RAG systems by combining vector similarity with graph traversal for more accurate and context-aware results.  
> Last updated: 2026-04-13

## Overview

EdgeQuake is a Rust-based implementation of the LightRAG algorithm, enabling advanced document processing through knowledge graph construction. Unlike traditional RAG systems, which rely solely on vector similarity for retrieval, EdgeQuake decomposes documents into structured entities and relationships, allowing for multi-hop reasoning and relationship-based queries. The framework uses an async-first architecture with Tokio, ensuring high performance and scalability. EdgeQuake supports multiple query modes and includes a modern frontend with interactive graph visualizations, making it suitable for production use.

Key features include:
- **Entity and relationship extraction** using LLMs
- **Six query modes** optimized for different question types
- **Rust-based performance** with zero-copy operations and Tokio
- **PDF processing** via a multimodal pipeline, handling both text and scanned documents
- **Production-ready API** with OpenAPI 3.0, SSE streaming, and health checks
- **Interactive frontend** built with React 19 and Sigma.js

## Key Points

- EdgeQuake transforms documents into knowledge graphs, enabling superior reasoning and retrieval.
- It outperforms traditional RAG systems in query latency, document processing speed, and memory efficiency.
- The PDF pipeline is production-ready, with support for both text-based and vision-based extraction.
- The framework includes a modern REST API and frontend, making it suitable for deployment in real-world applications.

## Sources

- [GitHub](https://github.com/raphaelmansuy/edgequake)
- [원본](raw/ingest/tech/2026-04-13-high-performance-graph-rag-framework-in-rust.md)