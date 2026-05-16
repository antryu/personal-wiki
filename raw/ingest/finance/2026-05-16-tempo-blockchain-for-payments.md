<!-- GitHub Trending: Rust | 938 stars | +0 today -->

# tempoxyz/tempo

> the blockchain for payments

## Repository Info
- **URL**: https://github.com/tempoxyz/tempo
- **Stars**: 938
- **Forks**: 283
- **Language**: Rust
- **License**: Apache License 2.0
- **Created**: 2025-06-02
- **Updated**: 2026-05-16
- **Topics**: N/A
- **Open Issues**: 120

## README (excerpt)
<br>
<br>

<p align="center">
  <a href="https://tempo.xyz">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/tempoxyz/.github/refs/heads/main/assets/combomark-dark.svg">
      <img alt="tempo combomark" src="https://raw.githubusercontent.com/tempoxyz/.github/refs/heads/main/assets/combomark-bright.svg" width="auto" height="120">
    </picture>
  </a>
</p>

<br>
<br>

# Tempo

The blockchain for payments at scale.

[Tempo](https://docs.tempo.xyz/) is a blockchain designed specifically for stablecoin payments. Its architecture focuses on high throughput, low cost, and features that financial institutions, payment service providers, and fintech platforms expect from modern payment infrastructure.

You can get started today by integrating with the [Tempo testnet](https://docs.tempo.xyz/quickstart/integrate-tempo), [building on Tempo](https://docs.tempo.xyz/guide/use-accounts), [running a Tempo node](https://docs.tempo.xyz/guide/node), reading the [Tempo protocol specs](https://docs.tempo.xyz/protocol) or by [building with Tempo SDKs](https://docs.tempo.xyz/sdk).

## What makes Tempo different

- [TIP‑20 token standard](https://docs.tempo.xyz/protocol/tip20/overview) (enshrined ERC‑20 extensions)

  - Predictable payment throughput via dedicated payment lanes reserved for TIP‑20 transfers (eliminates noisy‑neighbor contention).
  - Native reconciliation with on‑transfer memos and commitment patterns (hash/locator) for off‑chain PII and large data.
  - Built‑in compliance through [TIP‑403 Policy Registry](https://docs.tempo.xyz/protocol/tip403/overview): single policy shared across multiple tokens, updated once and enforced everywhere.

- Low, predictable fees in [stablecoins](https://docs.tempo.xyz/learn/stablecoins)

  - Users pay gas directly in USD-stablecoins at launch; the [Fee AMM](https://docs.tempo.xyz/protocol/fees/fee-amm#fee-amm-overview) automatically converts to the validator’s preferred stablecoin.
  - TIP‑20 transfers target sub‑millidollar costs (<$0.001).

- [Tempo Transactions](https://docs.tempo.xyz/guide/tempo-transaction) (native “smart accounts”)

  - Batched payments: atomic multi‑operation payouts (payroll, settlements, refunds).
  - Fee sponsorship: apps can pay users' gas to streamline onboarding and flows.
  - Scheduled payments: protocol‑level time windows for recurring and timed disbursements.
  - Modern authentication: passkeys via WebAuthn/P256 (biometric sign‑in, secure enclave, cross‑device sync).

- Performance and finality

  - Built on the [Reth SDK](https://github.com/paradigmxyz/reth), the most performant and flexible EVM (Ethereum Virtual Machine) execution client.
  - Simplex Consensus (via [Commonware](https://commonware.xyz/)): fast, sub‑second finality in normal conditions; graceful degradation under adverse networks.

- Coming soon

  - On‑chain FX and non‑USD stablecoin support for direct on‑chain liquidity; pay fees in more currencies.
  - Native private token standard: opt‑in privacy for balances/transfers coexisting with issuer compliance and auditability.

## What makes Tempo familiar

- Fully compatible with the Ethereum Virtual Machine (EVM), targeting the Osaka hardfork.
- Deploy and interact with smart contracts using the same tools, languages, and frameworks used on Ethereum, such as Solidity, Foundry, and Hardhat.
- All Ethereum JSON-RPC methods work out of the box.

While the execution environment mirrors Ethereum's, Tempo introduces some differences optimized for payments, described [here](https://docs.tempo.xyz/quickstart/evm-compatibility).

## Getting Started

### As a user

You can connect to Tempo's public testnet using the following details:

| Property           | Value                              |
| ------------------ | ---------------------------------- |
| **Network Name**   | Tempo Testnet (Moderato)           |
| **Currency**       | `USD`                              |
| **Chain ID**       | `42431`    