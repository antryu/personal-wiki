# Chaos Mesh: Chaos Engineering for Kubernetes

> Chaos Mesh is an open source cloud-native Chaos Engineering platform that offers fault simulation and orchestration capabilities for testing system reliability in Kubernetes environments. It allows users to simulate real-world failures and detect potential issues in their systems.
> Last updated: 2026-05-11

## Overview
Chaos Mesh enables users to simulate various types of faults that may occur in real-world Kubernetes environments during development, testing, and production phases. It provides a web-based UI for managing, designing, and monitoring chaos experiments. As an incubating project under the Cloud Native Computing Foundation (CNCF), Chaos Mesh aims to simplify the practice of Chaos Engineering by providing an easy-to-use, visual platform.

The platform includes **Chaos Operator**, the core component for chaos orchestration, and **Chaos Dashboard**, a web interface for managing chaos experiments. Chaos Operator injects faults into Kubernetes applications and infrastructure in a controlled manner, using Custom Resource Definitions (CRDs) and a DaemonSet with privileged access.

Chaos Mesh is written in Go and is distributed under the Apache License 2.0. It has gained popularity with over 7,686 stars and 970 forks on GitHub. The repository is actively maintained and includes extensive documentation and test coverage.

## Key Points
- Chaos Mesh is an open source Chaos Engineering platform for Kubernetes.
- It is an incubating project under the CNCF, designed for cloud-native environments.
- Supports fault injection, network chaos, file system failures, and more.
- Provides a visual dashboard for orchestrating and monitoring chaos experiments.
- Offers a high level of customization through CRDs.

## Sources
- [GitHub](https://github.com/chaos-mesh/chaos-mesh)
- [원본](raw/ingest/tech/2026-05-11-chaos-mesh-chaos-engineering-for-kubernetes.md)