# Microsandbox for AI Agents

> Microsandbox is a secure, cross-platform framework for creating lightweight, isolated virtual machines (VMs) to run AI agents locally. It enables instant VM boot times (<100ms), hardware-level isolation, and seamless integration with containerized workloads. Notable for its embeddable SDKs and rootless architecture, it simplifies sandbox orchestration without requiring servers or daemons.
> Last updated: 2026-04-14

## Overview

**Microsandbox** provides a Rust-based toolkit for spawning microVMs tailored for AI agents. Key features include:

- **Repository Info**:
  - **URL**: [https://github.com/superradcompany/microsandbox](https://github.com/superradcompany/microsandbox)
  - **Stars**: 5,362
  - **Language**: Rust
  - **License**: Apache License 2.0
  - **Platform Support**: Linux (KVM), macOS (Apple Silicon), Windows
  - **Topics**: agents, ai, container, docker, sandboxing, virtualization

- **Core Capabilities**:
  - **SDK Integration**: Embed VM creation in applications via Rust, Python, or TypeScript.
  - **OCI Compatibility**: Executes standard container images from Docker Hub, GHCR, or OCI registries.
  - **Security Model**: Secrets remain outside VMs, leveraging hardware isolation to prevent leaks.
  - **Agent Skills**: Integrates with [MCP server](https://github.com/superradcompany/microsandbox-mcp) for autonomous sandbox creation by AI agents.

- **Requirements**:
  - Linux with KVM enabled or macOS with Apple Silicon.
  - Beta software: Expect breaking changes and incomplete features.

- **Installation**:
  ```sh
  cargo add microsandbox    # Rust
  uv add microsandbox       # Python
  npm i microsandbox        # TypeScript
  ```
  *(Optional CLI: `curl -fsSL https://install.microsandbox.dev | sh`)*

## Key Points

- **Hardware Isolation**: Uses microVM technology for secure, low-level separation.
- **Instant Startup**: Achieves sub-100ms boot times for rapid agent execution.
- **Rootless Architecture**: No server setup or long-running daemons required.
- **Detached Mode**: Supports long-running sandboxes for persistent sessions.
- **Cross-Platform**: Works on Linux, macOS (Apple Silicon), and Windows.

## Sources

- [GitHub](https://github.com/superradcompany/microsandbox)
- [원본](raw/ingest/tech/2026-04-14-microsandbox-for-ai-agents.md)