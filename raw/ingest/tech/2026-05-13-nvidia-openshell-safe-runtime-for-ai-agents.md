<!-- GitHub Trending: Rust | 5,894 stars | +46 today -->

# NVIDIA/OpenShell

> OpenShell is the safe, private runtime for autonomous AI agents.

## Repository Info
- **URL**: https://github.com/NVIDIA/OpenShell
- **Stars**: 5,894
- **Forks**: 681
- **Language**: Rust
- **License**: Apache License 2.0
- **Created**: 2026-02-24
- **Updated**: 2026-05-13
- **Topics**: N/A
- **Open Issues**: 177

## README (excerpt)
# NVIDIA OpenShell

[![License](https://img.shields.io/badge/License-Apache_2.0-blue)](https://github.com/NVIDIA/OpenShell/blob/main/LICENSE)
[![PyPI](https://img.shields.io/badge/PyPI-openshell-orange?logo=pypi)](https://pypi.org/project/openshell/)
[![Security Policy](https://img.shields.io/badge/Security-Report%20a%20Vulnerability-red)](SECURITY.md)
[![Documentation](https://img.shields.io/badge/docs-latest-brightgreen)](https://docs.nvidia.com/openshell/latest/index.html)
[![Project Status](https://img.shields.io/badge/status-alpha-orange)](https://docs.nvidia.com/openshell/latest/about/release-notes.html)

OpenShell is the safe, private runtime for autonomous AI agents. It provides sandboxed execution environments that protect your data, credentials, and infrastructure — governed by declarative YAML policies that prevent unauthorized file access, data exfiltration, and uncontrolled network activity.

OpenShell is built agent-first. The project ships with agent skills for everything from gateway troubleshooting to policy generation, and we expect contributors to use them.

> **Alpha software — single-player mode.** OpenShell is proof-of-life: one developer, one environment, one gateway. We are building toward multi-tenant enterprise deployments, but the starting point is getting your own environment up and running. Expect rough edges. Bring your agent.

## Quickstart

### Prerequisites

- **A supported host** — macOS, Windows with WSL 2, or Linux.
- **A local runtime** — Docker, Podman, or host virtualization enabled for MicroVM-backed sandboxes.

### Install

**Binary (recommended):**

```bash
curl -LsSf https://raw.githubusercontent.com/NVIDIA/OpenShell/main/install.sh | sh
```

**From PyPI (requires [uv](https://docs.astral.sh/uv/)):**

```bash
uv tool install -U openshell
```

Both methods install the latest stable release by default. To install a specific version, set `OPENSHELL_VERSION` (binary) or pin the version with `uv tool install openshell==<version>`. A [`dev` release](https://github.com/NVIDIA/OpenShell/releases/tag/dev) is also available that tracks the latest commit on `main`.

**Helm chart:**

> **Experimental** — the Kubernetes deployment path is under active development. Expect rough edges and breaking changes.

Deploy the OpenShell gateway into a Kubernetes cluster from the OCI chart published to GHCR:

```bash
helm install openshell oci://ghcr.io/nvidia/openshell/helm-chart
```

See [`deploy/helm/openshell/README.md`](deploy/helm/openshell/README.md) for available versions, dev tag conventions, and configuration.

For deploying OpenShell on OpenShift, see [`deploy/helm/openshell/README.md#install-on-openshift`](deploy/helm/openshell/README.md#install-on-openshift).

### Create a sandbox

```bash
openshell sandbox create -- claude  # or opencode, codex, copilot
```

The sandbox container includes the following tools by default:

| Category   | Tools                                                    |
| ---------- | -------------------------------------------------------- |
| Agent      | `claude`, `opencode`, `codex`, `copilot`                 |
| Language   | `python` (3.13), `node` (22)                             |
| Developer  | `gh`, `git`, `vim`, `nano`                               |
| Networking | `ping`, `dig`, `nslookup`, `nc`, `traceroute`, `netstat` |

For more details see https://github.com/NVIDIA/OpenShell-Community/tree/main/sandboxes/base.

### See network policy in action

Every sandbox starts with **minimal outbound access**. You open additional access with a short YAML policy that the proxy enforces at the HTTP method and path level, without restarting anything.

```bash
# 1. Create a sandbox (starts with minimal outbound access)
openshell sandbox create

# 2. Inside the sandbox — blocked
sandbox$ curl -sS https://api.github.com/zen
curl: (56) Received HTTP code 403 from proxy after CONNECT

# 3. Back on the host — apply a read-only GitHub API policy
sandbox$ exit
openshell policy se