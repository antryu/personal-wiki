# Tempo: Blockchain for Payments

> Tempo is a blockchain optimized for stablecoin payments, offering high throughput, low costs, and features tailored for financial institutions. It is built with Rust and designed for predictable, secure, and scalable payments infrastructure.  
> Last updated: 2026-05-16

## Overview

Tempo is a blockchain built specifically for stablecoin payments at scale. Unlike generalized blockchains, Tempo is architected for high performance, with a focus on throughput, low transaction costs, and compliance features crucial for institutional and fintech use cases. The platform is EVM-compatible, allowing developers to use familiar Ethereum tooling like Solidity, Hardhat, and Foundry.

Key differentiators include the TIP-20 token standard, fee AMM, and Tempo Transactions, which provide native smart account capabilities like batching, fee sponsorship, and scheduled payments. Tempo also features predictable, sub-millidollar fees and a compliance-focused design that supports modern authentication and privacy features.

Developers and institutions can connect to the Tempo testnet using standard Ethereum tools and APIs, with the network ID `42431` and currency symbol `USD`.

## Key Points

- **TIP-20 Token Standard**: Dedicated lanes for stablecoin payments reduce contention and ensure predictable throughput.
- **Low, Predictable Fees**: Users pay gas in USD-stablecoins with automatic conversion via the Fee AMM.
- **Tempo Transactions**: Native smart account capabilities for batching, fee sponsorship, and scheduled payments.
- **Modern Authentication**: Passkey-based login via WebAuthn/P256 for secure and seamless user experiences.
- **Performance**: Built on Reth SDK with Simplex Consensus for fast finality and scalability.
- **EVM Compatibility**: Full Ethereum RPC and tooling compatibility for seamless developer onboarding.

## Sources

- [GitHub](https://github.com/tempoxyz/tempo)
- [원본](raw/ingest/finance/2026-05-16-tempo-blockchain-for-payments.md)