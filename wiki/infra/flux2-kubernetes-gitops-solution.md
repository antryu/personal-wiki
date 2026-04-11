# Flux2: Kubernetes GitOps Solution

> Flux2 is an open, extensible continuous delivery solution for Kubernetes, powered by the GitOps Toolkit. It automates cluster synchronization with configuration sources like Git repositories and OCI artifacts, supporting multi-tenancy and integration with Prometheus. As a CNCF graduated project, it is widely adopted by organizations and cloud providers.  
> Last updated: 2026-04-11

## Overview
Flux2 enables GitOps workflows for Kubernetes by ensuring clusters align with external configuration sources. Built on Kubernetes' API extension system, it leverages the **GitOps Toolkit**—a set of composable APIs and controllers—for scalable and flexible automation. Key features include:
- **Multi-tenancy** and support for syncing multiple Git/OCI repositories.
- Automated updates for configuration and image versions.
- Integration with Helm, Kustomize, and Prometheus.
- Extensibility via custom controllers and APIs.

The project is hosted at [GitHub](https://github.com/fluxcd/flux2) with 8,030 stars and 728 forks. It uses Go and Apache License 2.0, and has 244 open issues. Flux2 is maintained by the Cloud Native Computing Foundation (CNCF) and adopted by major cloud providers.

### Components
- **Source Controllers**: Manage configuration sources (Git, OCI, Helm, buckets, etc.).
- **Kustomize Controller**: Applies Kustomize manifests to clusters.
- **Helm Controller**: Automates Helm chart deployments.
- **GitOps Toolkit**: Provides reusable APIs for custom CD systems.

Documentation includes guides for [repository structure](https://fluxcd.io/flux/guides/repository-structure/), [Helm releases](https://fluxcd.io/flux/guides/helmreleases/), and [secret management](https://fluxcd.io/flux/guides/mozilla-sops/).

## Key Points
- Built on Kubernetes APIs for native integration and scalability.
- Extensible via the GitOps Toolkit, enabling custom automation.
- Supports multi-source configuration (Git, OCI, Helm, S3-compatible buckets).
- Automates image updates and secret management with tools like SOPS.
- CNCF graduated project with production adoption by enterprises and cloud providers.

## Sources
- [GitHub](https://github.com/fluxcd/flux2)
- [원본](raw/ingest/infra/2026-04-11-flux2-kubernetes-gitops-solution.md)