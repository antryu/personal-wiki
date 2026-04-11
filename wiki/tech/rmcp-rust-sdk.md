# RMCP Rust SDK

> The official Rust SDK for the Model Context Protocol (RMCP), enabling async client/server implementations with tool macros and JSON schema integration. Notable for its adoption (3.2k stars) and active development since 2025.  
> Last updated: 2026-04-11

## Overview
**Repository Info**  
- **URL**: https://github.com/modelcontextprotocol/rust-sdk  
- **Stars**: 3,284 | **Forks**: 497  
- **Language**: Rust | **License**: Other  
- **Created**: 2025-02-18 | **Updated**: 2026-04-11  
- **Open Issues**: 26  

**Core Features**  
- Implements RMCP protocol with `tokio` async runtime  
- Two primary crates:  
  - `rmcp`: Core protocol implementation  
  - `rmcp-macros`: Procedural macros for tool generation  
- Supports client/server architectures with transport abstractions  
- Integrates JSON schema (2020-12) for parameter validation  

**Usage Workflow**  
1. Add dependency via Cargo.toml  
2. Use macros to define tools/server handlers  
3. Implement transports (e.g., child processes, stdin/stdout)  
4. Manage service lifecycle with `serve()`/`wait()` APIs  

## Key Points
- **Tool System**: Enables RPC-style function exposure with auto-generated schemas  
- **Migration Guide**: Available for 1.x updates (Discussion #716)  
- **Key Dependencies**:  
  - `tokio` for async runtime  
  - `serde` for serialization  
  - `schemars` for JSON schema generation  
- **Bilingual Support**: English and Chinese documentation  

## Sources
- [GitHub](https://github.com/modelcontextprotocol/rust-sdk)
- [원본](raw/ingest/tech/2026-04-11-rmcp-rust-sdk.md)