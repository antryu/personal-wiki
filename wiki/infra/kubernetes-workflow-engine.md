# Kubernetes Workflow Engine

> Argo Workflows is an open-source container-native workflow engine for orchestrating parallel jobs on Kubernetes. It is a CNCF graduated project, widely used for machine learning, data processing, and automation.  
> Last updated: 2026-04-14

## Overview
### Repository Info
- **URL**: [GitHub](https://github.com/argoproj/argo-workflows)
- **Stars**: 16,614
- **Forks**: 3,494
- **Language**: Go
- **License**: Apache License 2.0
- **Created**: 2017-08-21
- **Updated**: 2026-04-14
- **Topics**: airflow, argo, kubernetes, machine-learning, pipelines, workflow-engine (and more)
- **Open Issues**: 1,388

### What is Argo Workflows?
Argo Workflows is a **Kubernetes Custom Resource Definition (CRD)** that allows defining workflows where each step is a container. It supports modeling workflows as sequences or directed acyclic graphs (DAGs), enabling efficient execution of compute-intensive tasks like machine learning and data processing.

### Use Cases
- Machine Learning pipelines
- Data and batch processing
- Infrastructure automation
- CI/CD
- Other automation workflows

### Why Argo Workflows?
- **Cloud-agnostic**: Runs on any Kubernetes cluster.
- **Lightweight and scalable**: Designed for container-native environments without legacy overhead.
- **Popular ecosystem**: Backed by CNCF and integrated with tools like Argo Events and Hera (Python SDK).
- **Active community**: Over 200 organizations use it, with extensive documentation and community support.

## Key Points
- Orchestrates parallel jobs on Kubernetes as containerized workflows.
- Supports DAG-based task dependencies and sequence workflows.
- CNCF graduated project with Apache 2.0 licensing.
- Cloud-agnostic and compatible with any Kubernetes environment.

## Sources
- [GitHub](https://github.com/argoproj/argo-workflows)
- [원본](raw/ingest/infra/2026-04-14-kubernetes-workflow-engine.md)