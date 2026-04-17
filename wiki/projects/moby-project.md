# Moby Project

> The Moby Project is an open-source initiative by Docker that provides a modular toolkit for building and customizing container-based systems. It serves as a foundation for the container ecosystem, enabling developers and organizations to assemble, experiment, and innovate with container technologies. Last updated: 2026-04-17

## Overview

### Repository Info
- **URL**: [https://github.com/moby/moby](https://github.com/moby/moby)
- **Stars**: 71,507
- **Forks**: 18,919
- **Language**: Go
- **License**: Apache License 2.0
- **Created**: 2013-01-18
- **Updated**: 2026-04-17
- **Topics**: containers, docker, go, golang
- **Open Issues**: 3,797

---

### Principles
Moby is guided by four core principles:
- **Modular**: Components have well-defined APIs and functions, enabling flexible integration.
- **Batteries included but swappable**: Provides a complete toolkit while allowing components to be replaced with alternatives.
- **Usable security**: Prioritizes secure defaults without compromising usability.
- **Developer-focused**: APIs are designed for developers to build tools, not end-user interfaces.

---

### Audience
Targeted at engineers, integrators, and enthusiasts who want to:
- Modify or extend container systems
- Experiment with open-source containerization
- Build custom solutions using modular components

Not intended for users seeking commercially supported systems (e.g., Docker Desktop or Mirantis Container Runtime).

---

### Relationship with Docker
- Moby originated from Docker's open-source components for the Docker Project.
- Docker uses Moby as the upstream for its products, but the project welcomes external contributions and reuse.
- Moby is **not** a support channel for Docker products; it focuses on open-source development and community collaboration.

---

### Go Modules
- **Important**: The `github.com/docker/docker` module is deprecated as of Docker v29 (November 2025).
- **Supported modules**:
  | Module | Description |
  |---|---|
  | [`github.com/moby/moby/client`](client/) | Go client for the Docker Engine API |
  | [`github.com/moby/moby/api`](api/) | Shared API types for client/server |

The root module `github.com/moby/moby/v2` contains the codebase for building container engines.

## Key Points
- Modular toolkit for assembling container-based systems.
- Community-driven development with flexible, swappable components.
- Serves as Docker's upstream but is open to external contributions.
- Deprecation of legacy `docker/docker` Go module in favor of `moby/moby` modules.

## Sources
- [GitHub](https://github.com/moby/moby)
- [원본](raw/ingest/projects/2026-04-17-moby-project.md)