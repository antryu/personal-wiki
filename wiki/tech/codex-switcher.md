# Codex Switcher

> A desktop application for managing multiple OpenAI Codex CLI accounts with features like quick switching, usage monitoring, and dual authentication modes. Notable for its Tauri-based cross-platform design and focus on personal account management compliance.  
> Last updated: 2026-04-14

## Overview
Codex Switcher is a Tauri-powered desktop application designed to streamline the management of multiple OpenAI Codex CLI accounts. It addresses the need for developers and power users who maintain several Codex accounts by offering centralized control through features like real-time usage tracking, OAuth or `auth.json` login options, and seamless account switching.  

The app requires Node.js 18+, pnpm, and Rust for development. It provides both a native GUI and a web-accessible dashboard via HTTP, enabling LAN or remote access when configured securely. A key emphasis is placed on ethical use, with explicit disclaimers against account sharing or violating OpenAI's terms of service. Version management tools ensure consistency across frontend, backend, and Tauri configurations.

## Key Points
- **Multi-account interface** for centralized Codex CLI management  
- **Real-time quota monitoring** for 5-hour and weekly usage limits  
- **Dual authentication modes**: OAuth2 and legacy `auth.json` file import  
- **Ethical compliance focus**: Explicitly prohibits account sharing or pooling  

## Sources
- [GitHub](https://github.com/Lampese/codex-switcher)
- [원본](raw/ingest/tech/2026-04-14-codex-switcher.md)