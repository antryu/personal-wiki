# HelixDB: Open-source graph-vector database in Rust

> HelixDB is an open-source graph-vector database built from scratch in Rust. It simplifies the development of AI applications by providing a unified platform with built-in vector and graph support, eliminating the need for multiple database systems.
> Last updated: 2026-05-09

## Overview

HelixDB is a modern database built to streamline the development of AI and RAG (Retrieval Augmented Generation) applications. It supports a graph + vector data model and can also work with key-value (KV), document, and relational data types. Designed for low latency and performance, HelixDB is built in Rust and leverages LMDB for storage.

The project is open-source and released under the GNU Affero General Public License v3.0. It aims to unify the backend requirements of AI applications by integrating vector search, graph traversal, and embedding functions into a single platform. 

HelixDB provides built-in tools for RAG, secure-by-default access, ultra-low latency, and type-safe querying using HelixQL. It has been recognized by Y Combinator and is actively maintained with community contributions.

## Key Points

- **Unifies data models**: Combines graph and vector capabilities with support for KV, documents, and relational data.
- **Built-in RAG tools**: Includes vector search, keyword search, and graph traversal for AI applications.
- **Embedding support**: Offers an `Embed` function to vectorize text directly within the database.
- **Ultra-low latency**: Built in Rust with LMDB storage engine, enabling fast and efficient operations.
- **Secure by design**: Access is restricted to compiled HelixQL queries, ensuring data privacy by default.
- **Type-safe queries**: HelixQL ensures type safety, reducing runtime errors during development.

## Sources

- [GitHub](https://github.com/HelixDB/helix-db)
- [원본](raw/ingest/tech/2026-05-09-helixdb-open-source-graph-vector-database-in-rust.md)