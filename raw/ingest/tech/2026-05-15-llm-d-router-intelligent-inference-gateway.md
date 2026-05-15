<!-- GitHub Trending: Go | 188 stars | +1 today -->

# llm-d/llm-d-router

> llm-d Router: The intelligent entry point for inference requests

## Repository Info
- **URL**: https://github.com/llm-d/llm-d-router
- **Stars**: 188
- **Forks**: 201
- **Language**: Go
- **License**: Apache License 2.0
- **Created**: 2025-05-05
- **Updated**: 2026-05-15
- **Topics**: ai, gateway-api, inference, kubernetes, networking
- **Open Issues**: 221

## README (excerpt)
[![Go Report Card](https://goreportcard.com/badge/github.com/llm-d/llm-d-inference-scheduler)](https://goreportcard.com/report/github.com/llm-d/llm-d-inference-scheduler)
[![Go Reference](https://pkg.go.dev/badge/github.com/llm-d/llm-d-inference-scheduler.svg)](https://pkg.go.dev/github.com/llm-d/llm-d-inference-scheduler)
[![License](https://img.shields.io/github/license/llm-d/llm-d-inference-scheduler)](/LICENSE)
[![Join Slack](https://img.shields.io/badge/Join_Slack-blue?logo=slack)](https://llm-d.slack.com/archives/C08SBNRRSBD)

# llm-d Router

> [!IMPORTANT]
> **Terminology Change**: The *Inference Scheduler* has been renamed to **llm-d Router**; see [Terminology](README.md#terminology).

> [!IMPORTANT]
> **API & Code Consolidation**: Core Endpoint Picker (EPP) code and the `InferenceObjective` and `InferenceModelRewrite` APIs have been merged into this repository from [Gateway API Inference Extension (GIE)]. The GIE repository now exclusively hosts the `InferencePool` API—an extension of the [Kubernetes Gateway API]—and defines the Endpoint Picker Protocol.

The **llm-d Router** is the intelligent entry point for inference traffic, delivering LLM load and prefix-cache aware routing, request prioritization, and advanced flow control across diverse request formats to fulfill complex serving objectives. It supports a flexible deployment model: it can run in **Standalone Mode** (where a self-managed Envoy proxy runs alongside the EPP in the same pod) or integrate with L7 load balancers—including self-managed instances (e.g., Istio, AgentGateway) and cloud-managed services (e.g., Google Cloud's Application Load Balancer)—via the Kubernetes Gateway API. 

The router achieves its intelligence through an **Endpoint Picker (EPP)** that integrates with production-grade proxies (such as [Envoy]) via the [ext-proc] protocol, injecting real-time signals into the data plane to optimize request placement.

<p align="center">
  <img src="docs/images/llm-d-router.svg" width="800" alt="llm-d Router Architecture">
</p>

## Core Components and APIs

This repository hosts the following core components:

- **Endpoint Picker (EPP)**: The intelligent routing engine that serves as the "brain" of the router. It evaluates incoming requests against the current state of the [InferencePool], considering factors like KV-cache locality, current load, and priority to make optimal placement decisions. It integrates with L7 proxies via the `ext-proc` protocol.
- **Request Management APIs**: These resources directly influence the EPP's request handling behavior:
    - **InferenceObjective**: Configures the EPP's scheduling goals for specific requests, including priority levels and performance targets.
    - **InferenceModelRewrite**: Directs the EPP to perform model name rewriting, enabling flexible traffic management for A/B testing and canary rollouts.
- **Disaggregation Sidecar**: A coordination component deployed alongside model servers (typically as a sidecar to the decode worker). It orchestrates complex multi-stage inference lifecycles, such as **P/D (Prefill/Decode)** and **E/P/D (Encode/Prefill/Decode)**, by communicating with specialized encode and prefill workers to manage KV-cache and embedding transfers. For more details, see the [Disaggregation Documentation].

## Modes of Operation

The llm-d Router supports two primary deployment modes as specified in the [Kubernetes Gateway API Inference Extensions]:

### 1. Standalone Mode
A lightweight deployment where a self-managed Envoy proxy runs alongside the EPP in the same pod. This mode is ideal for clusters without Gateway API infrastructure or for basic testing and local evaluations.

### 2. Gateway Mode (Inference Gateway)
The recommended mode for production environments, leveraging the official [Gateway API]. In this mode, the EPP acts as a backend for an `InferencePool`, which is referenced by an `HTTPRoute` on a shared `Gateway`. This enables advanced traffic management, multi-cluster load 