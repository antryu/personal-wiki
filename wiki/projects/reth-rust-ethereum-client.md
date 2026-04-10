# Reth: Rust Ethereum Client

> Reth is a modular, contributor-friendly, and high-performance Ethereum execution layer client written in Rust. It emphasizes client diversity, configurability, and support for multiple EVM chains while maintaining Apache/MIT licensing for unrestricted use.  
> Last updated: 2026-04-10

## Overview
The **paradigmxyz/reth** repository provides a production-ready Ethereum client focused on modularity, speed, and developer experience. Hosted on GitHub with 5,512 stars and 2,372 forks, it uses Rust for performance and safety. Key features include compatibility with all Ethereum Consensus Layer implementations via the Engine API, a modular architecture for flexible component reuse, and profiles tailored for diverse use cases—from high-performance RPC services to hobbyist nodes.  

Reth 2.0 was released in April 2026, with version 1.0 declared production-ready in June 2024. The client has undergone third-party audits by Sigma Prime and Guido Vranken, ensuring robustness and security. Performance benchmarks (via [ethPandaOps Lab Dashboard](https://lab.ethpandaops.io/ethereum/execution/timings)) demonstrate competitive sync and execution speeds compared to other Ethereum clients.  

Notable components include integration with [Alloy](https://github.com/alloy-rs/alloy/), [revm](https://github.com/bluealloy/revm/), and [Foundry](https://github.com/foundry-rs/foundry/), along with tools like `reth-bench` for performance testing. The project supports Ethereum and other EVM-compatible chains, with active development and 291 open issues as of 2026-04-10.  

For documentation, visit [User Docs](https://reth.rs) or [Developer Docs](./docs). The OP-Reth fork has been moved to [ethereum-optimism/optimism](https://github.com/ethereum-optimism/optimism).

## Key Points
- **Modular Architecture**: Components are reusable libraries with extensive documentation and benchmarks.  
- **High Performance**: Optimized Rust-based codebase with third-party-verified speed advantages.  
- **Open Licensing**: Dual Apache 2.0/MIT license ensures unrestricted use in any context.  
- **Client Diversity**: Promotes Ethereum's antifragility by expanding the ecosystem of implementations.  
- **EVM Chain Support**: Syncs Ethereum and other EVM-compatible chains, with extensibility for new networks.  
- **Configurability**: Profiles for RPC operators, MEV, indexing, and hobbyist use cases.  

## Sources
- [GitHub](https://github.com/paradigmxyz/reth)
- [원본](raw/ingest/projects/2026-04-10-reth-rust-ethereum-client.md)