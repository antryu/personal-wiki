# Kubernetes Operator for GitHub Actions Runners

> A Kubernetes operator that automates the orchestration and scaling of self-hosted GitHub Actions runners, enabling dynamic resource allocation based on workflow demand. Notable for its integration with GitHub's native autoscaling features and robust community support.  
> Last updated: 2026-04-18

## Overview

### Repository Details
- **URL**: https://github.com/actions/actions-runner-controller  
- **Stars**: 6,175  
- **Forks**: 1,404  
- **Language**: Go  
- **License**: Apache License 2.0  
- **Created**: 2020-01-28  
- **Updated**: 2026-04-18  
- **Topics**: `github-actions`, `kubernetes`, `operator`  
- **Open Issues**: 377  

### Description
The **Actions Runner Controller (ARC)** is a Kubernetes operator designed to manage and scale self-hosted runners for GitHub Actions. It allows users to create *runner scale sets* that automatically adjust capacity based on the number of active workflows in repositories, organizations, or enterprises. Runners are ephemeral and container-based, enabling rapid and efficient scaling.  

### Features
- **Autoscaling**: Dynamically scales runners in response to workflow load, leveraging GitHub's [autoscaling documentation](https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/autoscaling-with-self-hosted-runners).  
- **Helm Deployment**: Simplifies setup on Kubernetes clusters via Helm charts.  
- **Integration**: Seamlessly works with GitHub's native tools for runner scale sets.  
- **Community & GitHub Collaboration**: Maintained jointly by the GitHub Actions team, external contributors, and the open-source community.  

### Community & Maintenance
ARC is developed and maintained by the GitHub Actions team in collaboration with external maintainers (@mumoshu, @toast-gear) and contributors. Community support is encouraged, with sponsorship opportunities for maintainers via GitHub Sponsors.  

### Documentation
- **Official**: [docs.github.com](https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners-with-actions-runner-controller/quickstart-for-actions-runner-controller)  
- **Legacy Guides**: [Quickstart](/docs/quickstart.md), [Installation](/docs/installing-arc.md), and [Autoscaling Modes](./docs/automatically-scaling-runners.md) (community-maintained).  

---

## Key Points
- Automates scaling of self-hosted GitHub Actions runners on Kubernetes.  
- Supports ephemeral, container-based runners for rapid deployment and cleanup.  
- Uses Helm for easy Kubernetes integration.  
- Combines GitHub-maintained features with community-driven legacy modes.  

## Sources
- [GitHub](https://github.com/actions/actions-runner-controller)  
- [원본](raw/ingest/infra/2026-04-18-kubernetes-operator-for-github-actions-runners.md)