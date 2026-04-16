# Secure AI Agent Sandbox

> nono is a capability-based, multiplexing sandbox tool designed specifically for AI agents and developer workflows. It enables secure execution of agents without requiring additional infrastructure, offering zero setup latency and built-in security features like kernel sandboxing and credential injection. Notable for its integration with Sigstore and support for multiple platforms, it aims to streamline secure AI agent deployment.
> Last updated: 2026-04-16

## Overview

**nono** (https://github.com/always-further/nono) is a Rust-based sandboxing tool optimized for AI agents, offering seamless development-to-production workflows. It leverages kernel-level security (Landlock on Linux, Seatbelt on macOS) to enforce capabilities, allowing developers to define precise permissions for agents. Key capabilities include agent multiplexing, snapshot isolation, and out-of-the-box supply chain security. The tool supports macOS, Linux, and WSL2, with bindings available for Python, TypeScript, and Go.

**Key features** include:
- **Kernel-enforced sandboxing**: Irreversible, inherited by child processes.
- **Credential injection**: API keys remain external to the sandbox via proxy mode.
- **Cross-platform support**: macOS, Linux, and WSL2 with ~84% feature coverage.
- **Extensibility**: Embeddable Rust core and language bindings for integration into applications.

The project is in early alpha and not yet security-audited for production use. It is actively developed with features like a skill/policy registry (planned) and WSL2 auto-detection (implemented). The repository has 1,964 stars and 131 forks, with 101 open issues.

## Key Points
- Built for AI agents with capabilities like snapshots, credential injection, and supply chain security.
- Uses kernel-level sandboxing (Landlock/Seatbelt) for irreversible, inherited security enforcement.
- Supports zero-setup deployment across CI pipelines, Kubernetes, cloud VMs, and microVMs.

## Sources
- [GitHub](https://github.com/always-further/nono)
- [원본](raw/ingest/tech/2026-04-16-secure-ai-agent-sandbox.md)