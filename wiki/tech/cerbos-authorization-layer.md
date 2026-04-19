# Cerbos Authorization Layer

> Cerbos is an open-core, language-agnostic authorization solution that simplifies implementing and managing user permissions through context-aware access control policies. It is notable for its scalability, GitOps integration, and support for diverse deployment environments.  
> Last updated: 2026-04-19

## Overview
Cerbos is an authorization layer designed to evolve with applications by defining context-aware access control rules in YAML policies. This repository contains the core implementation of the Cerbos Policy Decision Point (PDP), a stateless service for evaluating policies and making dynamic access decisions. Key features include:

- **Deployment Flexibility**: Run as a Kubernetes service, systemd service, AWS Lambda function, or sidecar container.
- **Policy Management**: Store policies on disk, in cloud object stores, Git repositories, or databases like SQLite.
- **APIs for Access Control**: Provides `CheckResources` (authorization check) and `PlanResources` (resource discovery) APIs.
- **Integration Tools**: SDKs for multiple languages and query plan adapters for database compatibility.

The repository includes a README with badges for release version, build status, and code quality. It emphasizes collaboration via Cerbos Hub for policy authoring, distribution, and client-side authorization workflows.

## Key Points
- **Open Core & Scalable**: Apache 2.0 licensed, with support for high-availability deployments.
- **Context-Aware Policies**: Define access rules using YAML, evaluated based on principal, action, and resource context.
- **Multi-Environment Support**: Works in Kubernetes, serverless (AWS Lambda), and edge deployments.
- **GitOps Integration**: Policies can be version-controlled and deployed via Git repositories.
- **Extensible SDKs**: Client libraries for programmatic access to authorization APIs.

## Sources
- [GitHub](https://github.com/cerbos/cerbos)
- [원본](raw/ingest/tech/2026-04-19-cerbos-authorization-layer.md)