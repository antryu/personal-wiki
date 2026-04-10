# Lance: Open Lakehouse Format for Multimodal AI

> Lance is an open lakehouse format designed for multimodal AI workflows, offering 100x faster random access, vector indexing, and data versioning. It unifies storage and querying of images, videos, text, and embeddings while integrating with tools like Pandas, DuckDB, and PyTorch.  
> Last updated: 2026-04-10

## Overview
Lance enables high-performance data management for AI applications by combining a file/table format with a catalog specification. It supports hybrid search (vector + full-text + SQL), multimodal data storage, and seamless integration with data ecosystems. Key features include:

- **Repository Metrics**  
  - **Stars**: 6,299 | **Forks**: 625  
  - **Language**: Rust | **License**: Apache 2.0  
  - **Created**: 2022-07-07 | **Last Update**: 2026-04-10  
  - **Topics**: `data-science`, `llms`, `embeddings`, `duckdb`, `rust`, and more  

- **Core Use Cases**  
  1. Building search engines and feature stores with hybrid query capabilities.  
  2. Large-scale ML training requiring fast random access and efficient I/O.  
  3. Managing multimodal data (images, videos, audio, text, embeddings) in a unified format.  

- **Technical Highlights**  
  - **Hybrid Search**: Combines vector similarity, BM25 text search, and SQL analytics.  
  - **Performance**: 100x faster random access than Parquet/Iceberg.  
  - **Multimodal Support**: Native storage with lazy-loading blobs for images/videos.  
  - **Data Evolution**: Column additions with backfilled values without full rewrites.  
  - **Versioning**: Zero-copy ACID transactions, time travel, and branching.  
  - **Ecosystem**: Integrates with Apache Arrow, Pandas, Polars, DuckDB, Spark, Ray, and open catalogs.  

## Key Points
- Offers **100x faster random access** than Parquet or Iceberg without compromising scan performance.  
- Supports **multimodal data** (images, videos, embeddings) in a single unified format.  

## Sources
- [GitHub](https://github.com/lance-format/lance)  
- [원본](raw/ingest/tech/2026-04-10-lance-open-lakehouse-format-for-multimodal-ai.md)