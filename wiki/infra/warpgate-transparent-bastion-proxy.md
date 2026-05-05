# Warpgate: Transparent Bastion Proxy

> Warpgate is a fully transparent SSH, HTTPS, Kubernetes, MySQL, and Postgres bastion proxy built in Rust. It eliminates the need for client-side software, offering secure access and session recording with no additional configuration on the user side. Notable for its 1:1 user-service assignment, 2FA, SSO support, and session-level security.

> Last updated: 2026-05-05

## Overview

Warpgate is a smart and transparent bastion host designed to manage access to internal systems over protocols like SSH, HTTPS, Kubernetes, MySQL, and PostgreSQL. Unlike traditional jump hosts or VPNs, Warpgate forwards connections directly to the target while maintaining complete visibility and security. It operates as a single binary with no external dependencies, and it supports secure authentication methods such as TOTP and OpenID Connect.

Key features include:

- Transparent forwarding that doesn't require client-side wrappers or custom tools.
- Full session recording for live viewing and replay.
- Fine-grained user-to-service access control.
- Audit logs at the command and session level.
- Native support for 2FA and SSO.
- Written in 100% safe Rust with a minimal footprint.

Warpgate is ideal for organizations needing secure access to internal resources without compromising control or visibility. It is particularly suited for environments where auditability and session transparency are critical.

## Key Points

- Transparent connection forwarding eliminates the need for custom client software.
- Supports advanced authentication (2FA, SSO) and access control policies.
- Full session recording and command-level auditing for compliance and security monitoring.
- Self-hosted, secure, and lightweight.

## Sources

- [GitHub](https://github.com/warp-tech/warpgate)
- [원본](raw/ingest/infra/2026-05-05-warpgate-transparent-bastion-proxy.md)