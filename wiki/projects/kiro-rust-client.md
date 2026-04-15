# Kiro Rust Client

> A Kiro Client in Rust that acts as an Anthropic Claude API-compatible proxy, translating requests to Kiro API requests. This project is notable for its Rust-based implementation and its support for various features such as token management, load balancing, and web search tools.  
> Last updated: 2026-04-15

## Overview

The **Kiro Rust Client** is an open-source project that provides an API-compatible proxy between Anthropic Claude and Kiro. It is implemented in Rust and designed to allow developers to integrate Kiro services into applications that expect an Anthropic Claude API. The project supports a variety of features, including token auto-refresh, stream responses, multi-credential support, and an optional admin panel.

The project is hosted on GitHub, where it has gained a notable following with over 900 stars and 250 forks. It was created in December 2025 and is actively maintained.

### Key Features

- **Anthropic API compatibility**: Full support for Anthropic Claude API format
- **Token auto-refresh**: Automatic management and refreshing of OAuth tokens
- **Multi-credential support**: Configurable with multiple credentials for redundancy
- **Admin panel**: Optional web interface and API for managing credentials and settings
- **Load balancing**: Supports `priority` and `balanced` distribution modes
- **TLS backend flexibility**: Supports switching between `rustls` and `native-tls`
- **WebSearch tool integration**: Built-in support for web search logic
- **Model support**: Compatible with Sonnet, Opus, and Haiku models

## Key Points

- The project is actively maintained with the latest update in April 2026.
- It supports multiple authentication methods, including social and ID-based authentication.
- It includes a Docker configuration for easy deployment.
- The project includes a disclaimer that it is for research use only and is not affiliated with Kiro, AWS, Anthropic, or Claude.
- The project is open-source and licensed under an unspecified license.

## Sources

- [GitHub](https://github.com/hank9999/kiro.rs)
- [원본](raw/ingest/projects/2026-04-15-kiro-rust-client.md)