# NVIDIA Infra Controller Core

> NVIDIA Infra Controller (NICo) automates the lifecycle management of bare-metal systems with zero-touch deployment, enabling secure and scalable infrastructure for AI cloud environments. Last updated: 2026-05-15

## Overview

The **NVIDIA Infra Controller Core** (NICo) is an API-driven microservice designed for managing the lifecycle of bare-metal systems in datacenters. It ensures secure and automated provisioning, deployment, and maintenance of infrastructure, leveraging DPU-enforced isolation and zero-trust architecture. This project serves as the foundational component of the NVIDIA Infra Controller stack and is written in Rust.

The repository includes tools for deploying and configuring the necessary services for running NICo in a Kubernetes environment. It uses Helm charts to manage the installation of components like MetalLB, cert-manager, Vault, PostgreSQL, and more. The deployment is structured in three key layers: common services, Carbide Core, and Carbide REST. It is currently labeled as *experimental*, with the caveat that it may not be suitable for production environments without thorough testing.

## Key Points

- Zero-touch automation of bare-metal system lifecycle management.
- DPU-enforced isolation and zero-trust security model.
- API-based microservices architecture for scalable infrastructure management.
- Experimental status with potential for future changes in features and APIs.
- Requires a Kubernetes environment for deployment.

## Sources

- [GitHub](https://github.com/NVIDIA/infra-controller-core)
- [원본](raw/ingest/infra/2026-05-15-nvidia-infra-controller-core.md)