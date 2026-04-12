# Secure Personal AI Assistant

> IronClaw is a privacy-focused, open-source AI assistant implemented in Rust, designed to prioritize user control and security. It ensures data remains local, encrypted, and never leaves the user's device, offering a transparent and auditable alternative to corporate AI systems.  
> Last updated: 2026-04-12

## Overview
IronClaw is an open-source personal AI assistant inspired by OpenClaw, built in Rust for performance and safety. It emphasizes **user sovereignty** by storing all data locally, encrypting sensitive information, and preventing unauthorized data exfiltration. The project combines a modular architecture with a focus on security, featuring a WebAssembly (WASM) sandbox for isolating untrusted tools, credential protection mechanisms, and robust defenses against prompt injection attacks. 

Key components include:
- **Multi-channel interface**: REPL, HTTP webhooks, WASM integrations (Telegram, Slack), and a web gateway.
- **Persistent memory system**: Hybrid search (full-text + vector), workspace filesystem, and identity files for consistent user experience.
- **Self-expanding capabilities**: Dynamic tool generation, MCP protocol for extended functionality, and a plugin architecture for WASM-based extensions.

The project is hosted on GitHub with an Apache 2.0 license, attracting 11.6k stars and 1.3k forks since its February 2026 launch. It maintains active community engagement through Telegram, Reddit, and multilingual documentation.

## Key Points
- **Security-first design**: Isolated WASM execution, credential masking, and endpoint allowlisting ensure data remains protected.
- **User-centric philosophy**: Prioritizes transparency, local storage, and defense-in-depth to counter corporate AI privacy risks.
- **Modular architecture**: Supports dynamic tool creation, plugin expansion, and integration with Model Context Protocol (MCP) servers.
- **Persistent context**: Hybrid search and workspace filesystem enable long-term knowledge retention across sessions.

## Sources
- [GitHub](https://github.com/nearai/ironclaw)
- [원본](raw/ingest/projects/2026-04-12-secure-personal-ai-assistant.md)