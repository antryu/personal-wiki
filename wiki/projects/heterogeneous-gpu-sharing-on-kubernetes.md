# Heterogeneous GPU Sharing on Kubernetes

> This repository provides HAMi, a Kubernetes middleware for managing and sharing heterogeneous computing resources like GPUs and NPUs. Notable for its CNCF sandbox status, HAMi enables efficient resource utilization through device virtualization, allowing partial allocation and isolation without modifying applications, and is widely adopted across multiple industries.  
> Last updated: 2026-04-11

## Overview
The **Project-HAMi/HAMi** repository implements a heterogeneous device management solution for Kubernetes, enabling efficient scheduling and sharing of GPU, NPU, and other accelerators. As a CNCF sandbox project, HAMi abstracts hardware-specific complexities, offering a unified interface for resource allocation. Key features include:

- **Device Virtualization**: Supports partial allocation of GPU cores, memory, and streaming multiprocessors, with hard limits to ensure resource isolation.
- **Dynamic MIG Support**: Enables flexible GPU partitioning for NVIDIA devices via dynamic Multi-Instance GPU (MIG) configurations.
- **Cross-Industry Adoption**: Deployed in internet, cloud, finance, energy, and manufacturing sectors, with contributions from over 50 organizations.
- **Extensible Architecture**: Compatible with multiple hardware vendors (NVIDIA, Ascend, Cambricon, etc.) and Kubernetes-native scheduling policies.

HAMi requires no application modifications, making it a seamless upgrade for existing Kubernetes workflows. It includes tools for resource isolation, topology-aware scheduling, and integration with CNCF ecosystems.

## Key Points
- CNCF sandbox project with broad industry adoption (finance, cloud, manufacturing, etc.).
- Enables partial GPU/NPU allocation by core, memory, or streaming multiprocessors.
- Supports dynamic MIG for NVIDIA GPUs and device resource isolation without application changes.
- Hosted on GitHub with 3,263 stars, 506 forks, and active development since 2021.
- Open-source (Apache 2.0) with Go-based implementation and Docker container distribution.

## Sources
- [GitHub](https://github.com/Project-HAMi/HAMi)
- [원본](raw/ingest/projects/2026-04-11-heterogeneous-gpu-sharing-on-kubernetes.md)