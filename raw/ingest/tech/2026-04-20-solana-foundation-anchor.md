<!-- GitHub Trending: Rust | 5,032 stars | +1 today -->

# solana-foundation/anchor

> ⚓ Solana Program Framework

## Repository Info
- **URL**: https://github.com/solana-foundation/anchor
- **Stars**: 5,032
- **Forks**: 1,906
- **Language**: Rust
- **License**: Apache License 2.0
- **Created**: 2021-01-01
- **Updated**: 2026-04-20
- **Topics**: blockchain, coral, rust, smart-contracts, solana
- **Open Issues**: 236

## README (excerpt)
<div align="center">
  <img height="170x" src="https://pbs.twimg.com/media/FVUVaO9XEAAulvK?format=png&name=small" />

  <h1>Anchor</h1>

  <p>
    <strong>Solana Program Framework</strong>
  </p>

  <p>
    <a href="https://github.com/solana-foundation/anchor/actions"><img alt="Build Status" src="https://github.com/solana-foundation/anchor/actions/workflows/tests.yaml/badge.svg" /></a>
    <a href="https://anchor-lang.com"><img alt="Tutorials" src="https://img.shields.io/badge/docs-tutorials-blueviolet" /></a>
    <a href="https://discord.gg/NHHGSXAnXk"><img alt="Discord Chat" src="https://img.shields.io/discord/889577356681945098?color=blueviolet" /></a>
    <a href="https://opensource.org/licenses/Apache-2.0"><img alt="License" src="https://img.shields.io/github/license/solana-foundation/anchor?color=blueviolet" /></a>
  </p>
</div>

[Anchor](https://www.anchor-lang.com/) is a framework providing several convenient developer tools for writing Solana programs (sometimes called 'smart contracts').

- Rust eDSL for writing Solana programs
- [IDL](https://en.wikipedia.org/wiki/Interface_description_language) specification
- TypeScript package for generating clients from IDL
- CLI and workspace management for developing complete applications

Anchor is the most popular framework for Solana programs.

> [!NOTE]
> If you're familiar with developing in Ethereum's [Solidity](https://docs.soliditylang.org/en/), [Truffle](https://www.trufflesuite.com/), [web3.js](https://github.com/ethereum/web3.js), then using Anchor will be familiar. Although the DSL syntax and semantics are targeted at Solana, the high level flow of writing RPC request handlers, emitting an IDL, and generating clients from IDL is the same.

## Getting Started

For a quickstart guide and in depth tutorials, see the [Anchor book](https://book.anchor-lang.com) and the [Anchor documentation](https://anchor-lang.com).

To jump straight to examples, go [here](https://github.com/solana-foundation/anchor/tree/master/examples). For the latest Rust and TypeScript API documentation, see [docs.rs](https://docs.rs/anchor-lang) and the [typedoc](https://www.anchor-lang.com/docs/clients/typescript).

## Packages

| Package                 | Description                                              | Version                                                                                                                          | Docs                                                                                                            |
| :---------------------- | :------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------- |
| `anchor-lang`           | Rust primitives for writing programs on Solana           | [![Crates.io](https://img.shields.io/crates/v/anchor-lang?color=blue)](https://crates.io/crates/anchor-lang)                     | [![Docs.rs](https://docs.rs/anchor-lang/badge.svg)](https://docs.rs/anchor-lang)                                |
| `anchor-spl`            | CPI clients for SPL programs on Solana                   | [![crates](https://img.shields.io/crates/v/anchor-spl?color=blue)](https://crates.io/crates/anchor-spl)                          | [![Docs.rs](https://docs.rs/anchor-spl/badge.svg)](https://docs.rs/anchor-spl)                                  |
| `anchor-client`         | Rust client for Anchor programs                          | [![crates](https://img.shields.io/crates/v/anchor-client?color=blue)](https://crates.io/crates/anchor-client)                    | [![Docs.rs](https://docs.rs/anchor-client/badge.svg)](https://docs.rs/anchor-client)                            |
| `@anchor-lang/core`     | TypeScript client for Anchor programs                    | [![npm](https://img.shields.io/npm/v/@anchor-lang/core.