<!-- GitHub Trending: Go | 8,458 stars | +8 today -->

# cloudnative-pg/cloudnative-pg

> CloudNativePG is a comprehensive platform designed to seamlessly manage PostgreSQL databases within Kubernetes environments, covering the entire operational lifecycle from initial deployment to ongoing maintenance

## Repository Info
- **URL**: https://github.com/cloudnative-pg/cloudnative-pg
- **Stars**: 8,458
- **Forks**: 651
- **Language**: Go
- **License**: Apache License 2.0
- **Created**: 2022-03-10
- **Updated**: 2026-04-17
- **Topics**: automated-failover, business-continuity, database, database-management, devops, disaster-recovery, failover, high-availability, json-logging, k8s, kubectl-plugin, kubernetes, operator, postgres, postgresql, prometheus-exporter, replication, self-healing, sql, switchover
- **Open Issues**: 337

## README (excerpt)
[![CNCF Landscape](https://img.shields.io/badge/CNCF%20Landscape-5699C6)][cncf-landscape]
[![Latest Release](https://img.shields.io/github/v/release/cloudnative-pg/cloudnative-pg.svg)][latest-release]
[![GitHub License](https://img.shields.io/github/license/cloudnative-pg/cloudnative-pg)][license]
[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9933/badge)][openssf]
[![OpenSSF Baseline](https://www.bestpractices.dev/projects/9933/baseline)][openssf]
[![OpenSSF Scorecard Badge][openssf-scorecard-badge]][openssf-socrecard-view]
[![Documentation][documentation-badge]][documentation]
[![Stack Overflow](https://img.shields.io/badge/stackoverflow-cloudnative--pg-blue?logo=stackoverflow&logoColor=%23F48024&link=https%3A%2F%2Fstackoverflow.com%2Fquestions%2Ftagged%2Fcloudnative-pg)][stackoverflow]
[![FOSSA Status][fossa-badge]][fossa]
[![CLOMonitor](https://img.shields.io/endpoint?url=https://clomonitor.io/api/projects/cncf/cloudnative-pg/badge)](https://clomonitor.io/projects/cncf/cloudnative-pg)
[![Artifact Hub](https://img.shields.io/endpoint?url=https://artifacthub.io/badge/repository/cloudnative-pg)](https://artifacthub.io/packages/search?repo=cloudnative-pg)

# Welcome to the CloudNativePG Project!

**CloudNativePG (CNPG)** is an open-source platform designed to seamlessly
manage [PostgreSQL](https://www.postgresql.org/) databases in Kubernetes
environments. It covers the entire operational lifecycle—from deployment to
ongoing maintenance—through its core component, the CloudNativePG operator.

## Table of Contents

- [Code of Conduct](CODE_OF_CONDUCT.md)
- [Governance Policies](https://github.com/cloudnative-pg/governance/blob/main/GOVERNANCE.md)
- [Contributing](CONTRIBUTING.md)
- [Adopters](ADOPTERS.md)
- [Commercial Support](https://cloudnative-pg.io/support/)
- [License](LICENSE)

## Getting Started

The best way to get started is the [Quickstart Guide](https://cloudnative-pg.io/docs/devel/quickstart/).

## Scope

### Mission

CloudNativePG aims to increase PostgreSQL adoption within Kubernetes by making
it an integral part of the development process and GitOps-driven CI/CD
automation.

### Core Principles & Features

Designed by PostgreSQL experts for Kubernetes administrators, CloudNativePG
follows a Kubernetes-native approach to PostgreSQL primary/standby cluster
management. Instead of relying on external high-availability tools (like
Patroni, repmgr, or Stolon), it integrates directly with the Kubernetes API to
automate database operations that a skilled DBA would perform manually.

Key design decisions include:

- Direct integration with Kubernetes API: The PostgreSQL cluster’s status is
  available directly in the `Cluster` resource, allowing users to inspect it
  via the Kubernetes API.
- Operator pattern: The operator ensures that the desired PostgreSQL state is
  reconciled automatically, following Kubernetes best practices.
- Immutable application containers: Updates follow an immutable infrastructure
  model, as explained in
  ["Why EDB Chose Immutable Application Containers"](https://www.enterprisedb.com/blog/why-edb-chose-immutable-application-containers).

### How CloudNativePG Works

The operator continuously monitors and updates the PostgreSQL cluster state.
Examples of automated actions include:

- Failover management: If the primary instance fails, the operator elects a new
  primary, updates the cluster status, and orchestrates the transition.
- Scaling read replicas: When the number of desired replicas changes, the
  operator provisions or removes resources such as persistent volumes, secrets,
  and config maps while managing streaming replication.
- Service updates: Kubernetes remains the single source of truth, ensuring
  that PostgreSQL service endpoints are always up to date.
- Rolling updates: When an image is updated, the operator follows a rolling
  strategy—first updating replica pods before performing a controlled
  switchover for the primary.

CloudNativePG manages additional 