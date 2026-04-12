<!-- GitHub Trending: Go | 5,398 stars | +10 today -->

# karmada-io/karmada

> Open, Multi-Cloud, Multi-Cluster Kubernetes Orchestration

## Repository Info
- **URL**: https://github.com/karmada-io/karmada
- **Stars**: 5,398
- **Forks**: 1,089
- **Language**: Go
- **License**: Apache License 2.0
- **Created**: 2020-11-10
- **Updated**: 2026-04-12
- **Topics**: cloud-computing, cloud-native, containers, k8s, kubernetes, multi-cluster, multicloud
- **Open Issues**: 710

## README (excerpt)
# Karmada

![Karmada-logo](docs/images/Karmada-logo-horizontal-color.png)


[![LICENSE](https://img.shields.io/github/license/karmada-io/karmada.svg)](/LICENSE)
[![Releases](https://img.shields.io/github/v/release/karmada-io/karmada)](https://github.com/karmada-io/karmada/releases/latest)
[![Slack](https://img.shields.io/badge/slack-join-brightgreen)](https://slack.cncf.io)
[![CII Best Practices](https://bestpractices.coreinfrastructure.org/projects/5301/badge)](https://bestpractices.coreinfrastructure.org/projects/5301)
[![OpenSSF Scorecard](https://api.securityscorecards.dev/projects/github.com/karmada-io/karmada/badge)](https://securityscorecards.dev/viewer/?uri=github.com/karmada-io/karmada)
![build](https://github.com/karmada-io/karmada/actions/workflows/ci.yml/badge.svg)
[![Go Report Card](https://goreportcard.com/badge/github.com/karmada-io/karmada)](https://goreportcard.com/report/github.com/karmada-io/karmada)
[![codecov](https://codecov.io/gh/karmada-io/karmada/branch/master/graph/badge.svg?token=ROM8CMPXZ6)](https://codecov.io/gh/karmada-io/karmada)
[![FOSSA Status](https://app.fossa.com/api/projects/custom%2B28176%2Fgithub.com%2Fkarmada-io%2Fkarmada.svg?type=shield)](https://app.fossa.com/projects/custom%2B28176%2Fgithub.com%2Fkarmada-io%2Fkarmada?ref=badge_shield)
[![Artifact HUB](https://img.shields.io/endpoint?url=https://artifacthub.io/badge/repository/karmada)](https://artifacthub.io/packages/krew/krew-index/karmada)
[![CLOMonitor](https://img.shields.io/endpoint?url=https://clomonitor.io/api/projects/cncf/karmada/badge)](https://clomonitor.io/projects/cncf/karmada)

## Karmada: Open, Multi-Cloud, Multi-Cluster Kubernetes Orchestration

Karmada (Kubernetes Armada) is a Kubernetes management system that enables you to run your cloud-native applications across multiple Kubernetes clusters and clouds, with no changes to your applications. By speaking Kubernetes-native APIs and providing advanced scheduling capabilities, Karmada enables truly open, multi-cloud Kubernetes.

Karmada aims to provide turnkey automation for multi-cluster application management in multi-cloud and hybrid cloud scenarios,
with key features such as centralized multi-cloud management, high availability, failure recovery, and traffic scheduling.

![cncf_logo](docs/images/cncf-logo.png)

Karmada is an incubation project of the [Cloud Native Computing Foundation](https://cncf.io/) (CNCF).

## Why Karmada:
- __K8s Native API Compatible__
    - Zero change upgrade, from single-cluster to multi-cluster
    - Seamless integration of existing K8s tool chain

- __Out of the Box__
    - Built-in policy sets for scenarios, including: Active-active, Remote DR, Geo Redundant, etc.
    - Cross-cluster applications auto-scaling, failover and load-balancing on multi-cluster.

- __Avoid Vendor Lock-in__
    - Integration with mainstream cloud providers
    - Automatic allocation, migration across clusters
    - Not tied to proprietary vendor orchestration

- __Centralized Management__
    - Location agnostic cluster management
    - Support clusters in Public cloud, on-prem or edge

- __Fruitful Multi-Cluster Scheduling Policies__
    - Cluster Affinity, Multi Cluster Splitting/Rebalancing
    - Multi-Dimension HA: Region/AZ/Cluster/Provider

- __Open and Neutral__
    - Jointly initiated by Internet, finance, manufacturing, teleco, cloud providers, etc.
    - Target for open governance with CNCF



**Notice: This project is developed in continuation of Kubernetes [Federation v1](https://github.com/kubernetes-retired/federation) and [v2](https://github.com/kubernetes-sigs/kubefed). Some basic concepts are inherited from these two versions.**


## Architecture

![Architecture](docs/images/architecture.png)

The Karmada Control Plane consists of the following components:

- Karmada API Server
- Karmada Controller Manager
- Karmada Scheduler

ETCD stores the Karmada API objects, the API Server is the REST endpoint all other components talk to, and the Karmada 