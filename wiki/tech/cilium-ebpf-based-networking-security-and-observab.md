# Cilium: eBPF-based Networking, Security, and Observability

> Cilium is a networking, observability, and security solution built on eBPF, designed for containerized environments and Kubernetes. It offers scalable and high-performance capabilities, including identity-based policies, distributed load balancing, and deep visibility.
> Last updated: 2026-05-08

## Overview

Cilium is an open-source project that provides networking, security, and observability solutions for containerized environments using eBPF (extended Berkeley Packet Filter). It offers a flat Layer 3 network across multiple clusters and supports routing and overlay modes. Cilium enforces network policies from Layer 3 to Layer 7 using an identity-based security model, enabling fine-grained access control and visibility.

Cilium replaces traditional tools like `kube-proxy` with a more efficient implementation based on eBPF. It supports advanced features such as ingress/egress gateway, bandwidth management, and service mesh capabilities. Additionally, it provides deep observability for network and security operations through real-time visibility and monitoring.

The project is actively maintained, backed by the Cloud Native Computing Foundation (CNCF) as a graduated project, and written in Go. It supports a wide range of topics, including Kubernetes, networking, security, and eBPF technologies.

## Key Points
- Built on eBPF, providing high-performance, scalable, and flexible networking solutions.
- Offers identity-based security policies across L3-L7 for Kubernetes environments.
- Replaces `kube-proxy` using eBPF-based distributed load balancing for efficient traffic management.
- Supports advanced features such as service mesh, ingress/egress gateways, and bandwidth management.

## Sources
- [GitHub](https://github.com/cilium/cilium)
- [원본](raw/ingest/tech/2026-05-08-cilium-ebpf-based-networking-security-and-observab.md)