# Istio Service Mesh

> An open-source service mesh for connecting, securing, controlling, and observing microservices. Notable for its adoption by CNCF, integration with Kubernetes, and use of Envoy proxies to manage traffic, enforce policies, and collect telemetry.  
> Last updated: 2026-04-15

## Overview
- **Repository**: [istio/istio](https://github.com/istio/istio)  
- **Stars**: 38,120 | **Forks**: 8,286 | **Language**: Go | **License**: Apache 2.0  
- **Created**: 2016-11-18 | **Updated**: 2026-04-15 | **Open Issues**: 496  
- **Topics**: `api-management`, `kubernetes`, `microservices`, `service-mesh`, `envoy`, and more  

### Core Components
1. **Envoy**  
   - Sidecar proxies for handling ingress/egress traffic between services.  
   - Provides discovery, Layer-7 routing, circuit breakers, policy enforcement, and telemetry.  
2. **Ztunnel**  
   - Lightweight Rust-based proxy for Ambient mesh mode, enabling secure connectivity without sidecars.  
3. **Istiod**  
   - Central control plane for service discovery, configuration, and certificate management.  

### Ecosystem
- **Documentation**: [istio.io](https://istio.io)  
- **Community**: [GitHub Discussions](https://github.com/istio/istio/discussions)  
- **Repositories**:  
  - [istio/api](https://github.com/istio/api) (API definitions)  
  - [istio/community](https://github.com/istio/community) (community guidelines)  

## Key Points
- Abstracts service mesh operations from underlying cluster platforms (e.g., Kubernetes).  
- Enables traffic management, security (mTLS), and observability with minimal code changes.  
- Actively maintained with 496 open issues and contributions guided by [Istio's Developer's Guide](https://github.com/istio/istio/wiki/Preparing-for-Development).  

## Sources
- [GitHub](https://github.com/istio/istio)
- [원본](raw/ingest/tech/2026-04-15-istio-service-mesh.md)