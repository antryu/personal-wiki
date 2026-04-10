# Stakpak Agent

> The Stakpak Agent is an open-source autonomous DevOps agent built in Rust that runs continuously on your machines to manage and maintain applications. It provides a secure, self-sufficient runtime environment that eliminates the need for manual intervention, offering the benefits of a PaaS without vendor lock-in.
> Last updated: 2026-04-10

## Overview

The Stakpak Agent is designed to operate 24/7 on local or remote machines, monitoring and managing applications autonomously. It leverages AI capabilities while enforcing strict security and control mechanisms to prevent unauthorized or destructive actions. The agent is open-source and licensed under the Apache License 2.0, making it a flexible and secure alternative to traditional PaaS solutions.

Key features include:
- **Secret Substitution**: Securely handles credentials without exposing them to the LLM.
- **Warden Guardrails**: Prevents destructive operations through network-level policies.
- **DevOps Playbooks**: Built-in DevOps knowledge in the form of curated "Rulebooks."
- **Autonomous Runtime (Autopilot)**: Enables 24/7 continuous operation with lifecycle management via simple commands like `stakpak up` and `stakpak down`.

The Stakpak Agent is built using Rust and integrates with Docker for containerized execution. It supports cross-platform deployment and offers a unified configuration system for managing profiles and runtime settings.

## Key Points

- Open-source and Apache 2.0 licensed
- Rust-based for performance and safety
- Autonomous 24/7 DevOps agent with AI capabilities
- Secure credential handling and destructive operation prevention
- One-command lifecycle management via `stakpak up`/`stakpak down`
- Pre-flight checks and deployment readiness tools
- Unified configuration using TOML profiles

## Sources

- [GitHub](https://github.com/stakpak/agent)
- [원본](raw/ingest/infra/2026-04-10-stakpak-agent.md)