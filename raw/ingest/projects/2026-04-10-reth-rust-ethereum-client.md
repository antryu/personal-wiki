<!-- GitHub Trending: Rust | 5,512 stars | +6 today -->

# paradigmxyz/reth

> Modular, contributor-friendly and blazing-fast implementation of the Ethereum protocol, in Rust

## Repository Info
- **URL**: https://github.com/paradigmxyz/reth
- **Stars**: 5,512
- **Forks**: 2,372
- **Language**: Rust
- **License**: Apache License 2.0
- **Created**: 2022-09-15
- **Updated**: 2026-04-10
- **Topics**: blockchain, contributor-friendly, distributed-systems, ethereum, execution-layer, modular, p2p, rust
- **Open Issues**: 291

## README (excerpt)
# reth

[![bench status](https://github.com/paradigmxyz/reth/actions/workflows/bench.yml/badge.svg)](https://github.com/paradigmxyz/reth/actions/workflows/bench.yml)
[![CI status](https://github.com/paradigmxyz/reth/workflows/unit/badge.svg)][gh-ci]
[![cargo-lint status](https://github.com/paradigmxyz/reth/actions/workflows/lint.yml/badge.svg)][gh-lint]
[![Telegram Chat][tg-badge]][tg-url]

**Modular, contributor-friendly and blazing-fast implementation of the Ethereum protocol**

![](./assets/reth-2.png)

**[Install](https://reth.rs/installation/installation)**
| [User Docs](https://reth.rs)
| [Developer Docs](./docs)
| [Crate Docs](https://reth.rs/docs)

[gh-ci]: https://github.com/paradigmxyz/reth/actions/workflows/unit.yml
[gh-lint]: https://github.com/paradigmxyz/reth/actions/workflows/lint.yml
[tg-badge]: https://img.shields.io/endpoint?color=neon&logo=telegram&label=chat&url=https%3A%2F%2Ftg.sumanjay.workers.dev%2Fparadigm%5Freth

## What is Reth?

Reth (short for Rust Ethereum, [pronunciation](https://x.com/kelvinfichter/status/1597653609411268608)) is a production-ready Ethereum execution layer client focused on modularity, performance, and user-friendliness. Reth is compatible with all Ethereum Consensus Layer (CL) implementations that support the [Engine API](https://github.com/ethereum/execution-apis/tree/a0d03086564ab1838b462befbc083f873dcf0c0f/src/engine). It is built and driven forward by [Paradigm](https://paradigm.xyz/), and is licensed under the Apache and MIT licenses.

> **Note:** OP-Reth has moved to [ethereum-optimism/optimism](https://github.com/ethereum-optimism/optimism). Git history has been preserved.

## Goals

1. **Modularity**: Every component is built to be used as a library: well-tested, documented and benchmarked. Import crates, mix and match, and innovate on top of them. Learn more about the project's components [here](./docs/repo/layout.md).
2. **Performance**: Built with Rust, [Alloy](https://github.com/alloy-rs/alloy/), [revm](https://github.com/bluealloy/revm/), and [Foundry](https://github.com/foundry-rs/foundry/) — battle-tested and optimized for speed. Check the [ethPandaOps Lab Dashboard](https://lab.ethpandaops.io/ethereum/execution/timings) for a third-party comparison against other Ethereum clients.
Here's what that looks like in practice, measured with [reth-bench](https://github.com/paradigmxyz/reth/tree/main/bin/reth-bench) on Ethereum Mainnet:

![](./assets/reth-perf.png)

3. **Free for anyone to use any way they want**: Apache/MIT licensed, no business license restrictions.
4. **Client Diversity**: More client implementations make Ethereum more antifragile.
5. **Support as many EVM chains as possible**: Reth can sync Ethereum and other EVM chains. If you're building one, reach out.
6. **Configurability**: Profiles for different use cases — from high-performance RPC operators to hobbyists on consumer hardware.

## Status

Reth is production ready, and suitable for usage in mission-critical environments such as staking or high-uptime services. We also actively recommend professional node operators to switch to Reth in production for performance and cost reasons in use cases where high performance with great margins is required such as RPC, MEV, Indexing, Simulations, and P2P activities.

- We released **Reth 2.0** in April 2026. See the [release notes](https://github.com/paradigmxyz/reth/releases/tag/v2.0.0) and [blog post](https://www.paradigm.xyz/2026/04/releasing-reth-2-0).
- We released 1.0 "production-ready" stable Reth in June 2024.
  - Reth completed an audit with [Sigma Prime](https://sigmaprime.io/), the developers of [Lighthouse](https://github.com/sigp/lighthouse), the Rust Consensus Layer implementation. Find it [here](./audit/sigma_prime_audit_v2.pdf).
  - Revm (the EVM used in Reth) underwent an audit with [Guido Vranken](https://x.com/guidovranken) (#1 [Ethereum Bug Bounty](https://ethereum.org/en/bug-bounty)).
- We released multiple iterative beta versions, up to 