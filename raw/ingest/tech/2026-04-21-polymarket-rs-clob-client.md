<!-- GitHub Trending: Rust | 679 stars | +5 today -->

# Polymarket/rs-clob-client

> Polymarket Rust CLOB Client

## Repository Info
- **URL**: https://github.com/Polymarket/rs-clob-client
- **Stars**: 679
- **Forks**: 209
- **Language**: Rust
- **License**: MIT License
- **Created**: 2025-12-08
- **Updated**: 2026-04-21
- **Topics**: N/A
- **Open Issues**: 60

## README (excerpt)
![Polymarket](assets/logo.png)

# Polymarket Rust Client

[![Crates.io](https://img.shields.io/crates/v/polymarket-client-sdk.svg)](https://crates.io/crates/polymarket-client-sdk)
[![CI](https://github.com/Polymarket/rs-clob-client/actions/workflows/ci.yml/badge.svg)](https://github.com/Polymarket/rs-clob-client/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/Polymarket/rs-clob-client/graph/badge.svg?token=FW1BYWWFJ2)](https://codecov.io/gh/Polymarket/rs-clob-client)

An ergonomic Rust client for interacting with Polymarket services, primarily the Central Limit Order Book (CLOB).
This crate provides strongly typed request builders, authenticated endpoints, `alloy` support and more.

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
- [Feature Flags](#feature-flags)
- [Re-exported Types](#re-exported-types)
- [Examples](#examples)
  - [CLOB Client](#clob-client)
  - [WebSocket Streaming](#websocket-streaming)
  - [Optional APIs](#optional-apis)
- [Additional CLOB Capabilities](#additional-clob-capabilities)
- [Setting Token Allowances](#token-allowances)
- [Minimum Supported Rust Version (MSRV)](#minimum-supported-rust-version-msrv)
- [Contributing](#contributing)
- [About Polymarket](#about-polymarket)

## Overview

- **Typed CLOB requests** (orders, trades, markets, balances, and more)
- **Dual authentication flows**
    - Normal authenticated flow
    - [Builder](https://docs.polymarket.com/developers/builders/builder-intro) authentication flow
- **Type-level state machine**
    - Prevents using authenticated endpoints before authenticating
    - Compile-time enforcement of correct transitions
- **Signer support** via `alloy::signers::Signer`
    - Including remote signers, e.g. AWS KMS
- **Zero-cost abstractions** — no dynamic dispatch in hot paths
- **Order builders** for easy construction & signing
- **Full `serde` support**
- **Async-first design** with `reqwest`


## Getting started

Add the crate to your `Cargo.toml`:

```toml
[dependencies]
polymarket-client-sdk = "0.3"
```

or

```bash
cargo add polymarket-client-sdk
```

Then run any of the examples
```bash
cargo run --example unauthenticated
```

## Feature Flags

The crate is modular with optional features for different Polymarket APIs:

| Feature      | Description                                                                                                                                    |
|--------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| `clob`       | Core CLOB client for order placement, market data, and authentication                                                                          |
| `tracing`    | Structured logging via [`tracing`](https://docs.rs/tracing) for HTTP requests, auth flows, and caching                                         |
| `ws`         | WebSocket client for real-time orderbook, price, and user event streaming                                                                      |
| `rtds`       | Real-time data streams for crypto prices (Binance, Chainlink) and comments                                                                     |
| `data`       | Data API client for positions, trades, leaderboards, and analytics                                                                             |
| `gamma`      | Gamma API client for market/event discovery, search, and metadata                                                                              |
| `bridge`     | Bridge API client for cross-chain deposits (EVM, Solana, Bitcoin)                                                                              |
| `rfq`        | RFQ API (within CLOB) for submitting and querying quotes                                                                                       |
| `heartbeats` | Clob feature that automatically sends heartbeat messages to the Polymarket se