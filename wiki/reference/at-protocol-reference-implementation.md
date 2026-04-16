# AT Protocol Reference Implementation

> The AT Protocol Reference Implementation provides a modular and extensible TypeScript framework for building social networking services using the AT Protocol, developed by Bluesky. It's notable for enabling decentralized, interoperable social platforms and serving as the foundation for Bluesky's own services.
> Last updated: 2026-04-16

## Overview

The **AT Protocol Reference Implementation** is a TypeScript-based open-source project hosted by the Bluesky team. It is designed to support the AT Protocol, a decentralized social networking protocol. This implementation offers a modular structure, with individual packages for core functionalities like authentication, cryptographic operations, and data storage, making it a versatile foundation for building social platforms.

The repository includes a range of **TypeScript packages**, each addressing a specific part of the protocol stack, such as identity resolution, data storage using Merkle trees, and client-server API handling. It also features **TypeScript services**, such as the Personal Data Server (`pds`) and the AppView service (`bsky`), which implement key components of the AT Protocol and are used in production on the Bluesky network.

Lexicons — the schema definitions for the AT Protocol — are also maintained in this repository, ensuring compatibility and version control across all implementations. Additionally, interoperability test files are included to help verify and validate implementations across different platforms.

## Key Points

- Provides a **reference implementation** of the AT Protocol in TypeScript.
- Modular architecture with **10+ specialized packages** for identity, crypto, data storage, and API handling.
- Includes **services** for hosting data (`pds`) and serving app-specific views (`bsky`).
- Maintains **Lexicon schema definitions**, the language used to define AT Protocol APIs.
- Designed to support **decentralized, interoperable social platforms**.

## Sources

- [GitHub](https://github.com/bluesky-social/atproto)
- [원본](raw/ingest/reference/2026-04-16-at-protocol-reference-implementation.md)