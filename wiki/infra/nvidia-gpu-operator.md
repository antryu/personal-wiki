# NVIDIA GPU Operator

> The NVIDIA GPU Operator automates the configuration and management of NVIDIA GPUs in Kubernetes environments, simplifying deployment of drivers, runtime components, and monitoring tools. It streamlines GPU node provisioning, enabling administrators to manage GPU resources as seamlessly as CPU nodes.  
> Last updated: 2026-04-11

## Overview
The NVIDIA GPU Operator addresses the complexity of configuring NVIDIA GPUs in Kubernetes by automating the deployment of all required software components. Traditional GPU setup in Kubernetes involves manually installing drivers, container runtimes, and device plugins, which is error-prone and time-consuming. The operator eliminates these challenges by leveraging the Kubernetes Operator Framework to manage NVIDIA drivers (enabling CUDA), device plugins, container runtimes, node labeling, and DCGM-based monitoring as part of a unified workflow. This allows administrators to use standard OS images for both CPU and GPU nodes, simplifying cluster scalability and lifecycle management.  

Key components managed by the operator include:
- NVIDIA Data Center Drivers
- Kubernetes GPU Device Plugin
- NVIDIA Container Runtime
- DCGM (Data Center GPU Manager) for monitoring
- Automatic node labeling for GPU resources

The operator is particularly valuable in cloud or on-premises environments requiring rapid scaling, as it containerizes all components, enabling easy swapping or updates via container orchestration. It supports major Kubernetes platforms and is actively maintained under the Apache License 2.0.  

**Roadmap highlights** (as of 2026-04-11):
- Support for RHEL 10 and KubeVirt with Ubuntu 24.04
- General Availability (GA) status for the NVIDIADriver Custom Resource Definition (CRD)
- Integration with NVIDIA’s Dynamic Resource Allocation (DRA) driver for GPUs

## Key Points
- Automates deployment of NVIDIA GPU software stack (drivers, runtimes, plugins) in Kubernetes
- Enables scalable GPU node management with standard OS images, reducing configuration complexity
- Supports containerized component updates and swaps, enhancing flexibility and maintainability

## Sources
- [GitHub](https://github.com/NVIDIA/gpu-operator)
- [원본](raw/ingest/infra/2026-04-11-nvidia-gpu-operator.md)