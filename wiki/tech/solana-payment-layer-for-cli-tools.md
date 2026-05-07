# Solana Payment Layer for CLI Tools

> This repository provides a payment layer for command-line tools, enabling seamless integration with Solana-based payment protocols like MPP and x402. By automatically handling 402 payment challenges and utilizing user-authorized stablecoin transactions, it allows developers and AI agents to interact with paid APIs without manual intervention. The project is notable for its AI-native design, local security features, and open catalog of APIs.
> Last updated: 2026-05-07

## Overview

The `pay` tool wraps command-line interfaces (CLI) such as `curl`, `claude`, and `codex`, enabling transparent payments for APIs that require stablecoin-based authentication. When a 402 response is encountered, `pay` automatically detects the payment protocol, prepares the necessary transaction, requests wallet approval, signs the transaction, and retries the API request with the payment proof.

`pay` supports both the Machine Payments Protocol (MPP) and x402 standards on Solana, enabling seamless and secure transactions. It also includes features such as a built-in Model Context Protocol (MCP) server, a local payment debugger, and a biometric-based security layer for local wallet approvals.

Developers can install `pay` via prebuilt binaries or from source, and the tool offers an open-source catalog for paid APIs, making it easy to discover and integrate with new services.

## Key Points
- Transparently handles 402 payment challenges for Solana-based APIs.
- Supports both MPP and x402 standards.
- Integrates with AI agents via MCP for automated paid API usage.
- Includes a local payment debugger for visualizing payment flows.
- Uses biometric authentication (Touch ID, Windows Hello, etc.) for local wallet approvals.
- Offers an open-source API catalog for developers to contribute and use.

## Sources
- [GitHub](https://github.com/solana-foundation/pay)
- [원본](raw/ingest/tech/2026-05-07-solana-payment-layer-for-cli-tools.md)