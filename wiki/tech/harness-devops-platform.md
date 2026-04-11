# Harness DevOps Platform

> Harness Open Source is an end-to-end developer platform integrating Source Control Management, CI/CD Pipelines, Hosted Developer Environments (Gitspaces), and Artifact Registries. It serves as the next-generation evolution of Drone, offering a unified open-source DevOps solution.  
> Last updated: 2026-04-11

## Overview
**Harness** is an open-source DevOps platform built with Go, offering a comprehensive suite for modern software development. Key features include:
- **Code Hosting & SCM**: Manages source code repositories and integrates with Git.
- **Automated CI/CD Pipelines**: Executes build, test, and deployment workflows.
- **Hosted Developer Environments (Gitspaces)**: Provides ephemeral development environments.
- **Artifact Registries**: Stores and manages software artifacts.

### Repository Info
- **URL**: [GitHub](https://github.com/harness/harness)
- **Stars**: 34,536
- **Forks**: 2,971
- **License**: Apache License 2.0
- **Created**: 2014-02-07
- **Topics**: `ci-cd`, `docker`, `go`, `git`, `continuous-integration`, `build-pipelines`, and more
- **Open Issues**: 88

### Local Deployment
Harness can be run locally via Docker with the command:
```bash
docker run -d \
  -p 3000:3000 \
  -p 3022:3022 \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v /tmp/harness:/data \
  --name harness \
  --restart always \
  harness/harness
```
Access it at [http://localhost:3000](http://localhost:3000).

### Development Workflow
- **Prerequisites**: Node.js, Go 1.20+, Protobuf v3.21.11, and Go plugins (`protoc-gen-go`, `protoc-gen-go-grpc`).
- **Build Process**:
  1. Build UI artifacts: `yarn install && yarn build` (in `web/` directory).
  2. Compile binary: `make build`.
  3. Run server: `./gitness server .local.env`.

### Relation to Drone
Harness evolved from Drone, retaining its CI/CD capabilities while expanding to include:
- Source code hosting
- Gitspaces
- Artifact registries  
A [Drone-compatible branch](https://github.com/harness/harness/tree/drone) exists for migration support.

## Key Points
- Unified DevOps platform combining SCM, CI/CD, and developer environments.
- Open-source under Apache 2.0 license with active community engagement (34k+ stars).
- Designed as Drone's successor, offering expanded pipeline capabilities and integration.
- Supports Docker-based pipelines and cross-platform development (Windows, macOS, Linux).

## Sources
- [GitHub](https://github.com/harness/harness)
- [원본](raw/ingest/tech/2026-04-11-harness-devops-platform.md)