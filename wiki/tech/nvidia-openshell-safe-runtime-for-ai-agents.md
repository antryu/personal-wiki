# NVIDIA OpenShell: Safe Runtime for AI Agents

> OpenShell is the safe, private runtime for autonomous AI agents, providing sandboxed execution environments governed by declarative policies. It helps prevent unauthorized access and data breaches, making it a crucial tool for deploying AI safely.  
> Last updated: 2026-05-13

## Overview
NVIDIA OpenShell is an open-source runtime environment designed to securely execute autonomous AI agents. It is built with agent-first principles and aims to protect user data, credentials, and infrastructure by enforcing strict policies around file access, data exfiltration, and network activity. The project is currently in the alpha phase and is being developed for eventual multi-tenant enterprise deployment.

### Repository Info
- **URL**: https://github.com/NVIDIA/OpenShell
- **Stars**: 5,894
- **Forks**: 681
- **Language**: Rust
- **License**: Apache License 2.0
- **Created**: 2026-02-24
- **Updated**: 2026-05-13
- **Open Issues**: 177

### Key Features
- **Sandboxed execution** for AI agents, ensuring isolation and security.
- **Declarative YAML policies** to manage and enforce access controls.
- **Agent skills** for troubleshooting, policy generation, and other tasks.
- **Support for multiple platforms**, including macOS, Windows (with WSL 2), and Linux.
- **Tooling** for developers and network troubleshooting within the sandbox.
- **Experimental Kubernetes support** for deploying OpenShell in enterprise environments.

### Installation and Quickstart
Users can install OpenShell via a binary installer, PyPI, or Helm chart. A sandbox environment can be quickly created using the command line, and network policies can be applied dynamically without restarting the sandbox.

## Key Points
- OpenShell is an agent-first runtime environment that provides secure execution for autonomous AI agents.
- It uses YAML-based policies to control access to files, networks, and external APIs.
- The project is currently in alpha and supports single-user environments, with plans for enterprise multi-tenant support in the future.
- It includes preconfigured agent tools and development utilities in the sandbox.
- Installation options include binary, PyPI, and Helm for Kubernetes deployment.

## Sources
- [GitHub](https://github.com/NVIDIA/OpenShell)
- [원본](raw/ingest/tech/2026-05-13-nvidia-openshell-safe-runtime-for-ai-agents.md)