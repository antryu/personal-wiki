# CloudNativePG

> CloudNativePG is an open-source platform for managing PostgreSQL databases in Kubernetes environments, providing automated operations such as failover, scaling, and rolling updates. It is notable for its Kubernetes-native approach, integrating directly with the API to simplify database lifecycle management in cloud-native infrastructures.  
> Last updated: 2026-04-17

## Overview

**CloudNativePG (CNPG)** is a PostgreSQL operator for Kubernetes that streamlines database deployment, maintenance, and scalability. Key repository details include:

- **URL**: [GitHub](https://github.com/cloudnative-pg/cloudnative-pg)  
- **Stars**: 8,458  
- **Forks**: 651  
- **Language**: Go  
- **License**: [Apache License 2.0](https://github.com/cloudnative-pg/cloudnative-pg/blob/main/LICENSE)  
- **Created**: 2022-03-10  
- **Topics**: automated-failover, high-availability, Kubernetes operator, PostgreSQL, disaster-recovery, GitOps  

### Mission & Design  
CloudNativePG aims to make PostgreSQL a first-class citizen in Kubernetes by enabling GitOps-driven CI/CD workflows. It replaces external HA tools (e.g., Patroni, repmgr) with direct Kubernetes API integration, ensuring the operator acts as a "control loop" to reconcile desired database states.

### Core Functionality  
The operator automates:  
- **Failover management**: Elects a new primary instance if the current one fails.  
- **Read replica scaling**: Dynamically provisions/removes replicas with streaming replication.  
- **Service updates**: Syncs PostgreSQL endpoints with Kubernetes services.  
- **Rolling updates**: Updates containers using an immutable infrastructure model, prioritizing replica pods before primary switchover.  

### Architecture  
- **Operator pattern**: Follows Kubernetes best practices to manage PostgreSQL clusters as declarative resources.  
- **Immutable containers**: Ensures stability by avoiding in-place configuration changes.  
- **Single source of truth**: Kubernetes API tracks cluster status, eliminating external state dependencies.  

## Key Points
- Provides automated high availability, disaster recovery, and self-healing for PostgreSQL on Kubernetes.  
- Integrates with Prometheus for monitoring and offers a `kubectl` plugin for cluster management.  
- Backed by the Cloud Native Computing Foundation (CNCF) and adheres to OpenSSF security best practices.  

## Sources
- [GitHub](https://github.com/cloudnative-pg/cloudnative-pg)
- [원본](raw/ingest/infra/2026-04-17-cloudnativepg.md)