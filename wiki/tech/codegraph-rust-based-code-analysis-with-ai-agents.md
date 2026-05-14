# CodeGraph: Rust-based Code Analysis with AI Agents

> CodeGraph is a 100% Rust implementation for code graphRAG with blazing fast AST+FastML parsing, surrealDB backend, and advanced agentic code analysis tools using MCP for efficient code agent context management. It transforms codebases into semantically searchable knowledge graphs that AI agents can reason about, not just grep through.
> Last updated: 2026-05-14

## Overview

The CodeGraph project addresses a critical challenge in AI-assisted coding: the lack of context when AI assistants analyze code files individually. CodeGraph creates a **knowledge graph** of the entire codebase, enabling AI agents to understand relationships, architecture, and context within the codebase.

CodeGraph is built with Rust and includes a number of advanced features such as AST parsing, FastML integration, and support for LSP (Language Server Protocol) for languages like Rust, TypeScript, Python, Go, Java, and C/C++. It utilizes a tiered indexing approach that allows developers to choose between speed and richness, with options for fast, balanced, or full indexing.

Key capabilities include:
- Building a real knowledge graph with semantic embeddings and relationships
- Semantic search that considers code structure and context
- Dataflow and impact analysis using type-aware linking
- Integration with documentation and architecture signals

CodeGraph is suitable for developers and organizations looking to improve codebase navigation, AI assistant integration, and semantic search capabilities using a high-performance, Rust-based system.

## Key Points
- CodeGraph transforms codebases into semantically searchable knowledge graphs for AI agents.
- It supports multiple languages and leverages AST+FastML parsing and LSP for rich context.
- Tiered indexing options (fast, balanced, full) allow flexibility between speed and graph richness.
- Semantic search returns code with relationships intact, including dependencies and architecture signals.
- Optional architecture boundary rules and document linking enhance context and navigation.

## Sources
- [GitHub](https://github.com/Jakedismo/codegraph-rust)
- [원본](raw/ingest/tech/2026-05-14-codegraph-rust-based-code-analysis-with-ai-agents.md)