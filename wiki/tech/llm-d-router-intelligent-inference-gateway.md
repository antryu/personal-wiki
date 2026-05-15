# llm-d Router: Intelligent Inference Gateway

> The llm-d Router serves as an intelligent entry point for inference requests, optimizing traffic distribution with load-aware routing, prioritization, and flow control. It integrates with Kubernetes and supports diverse deployment models, making it a powerful tool for scalable AI serving.  
> Last updated: 2026-05-15

## Overview

The **llm-d Router** is an intelligent gateway designed to route large language model (LLM) inference traffic with advanced scheduling and optimization capabilities. It acts as a central control plane for inference requests, ensuring efficient distribution based on real-time system state, including KV-cache locality, load, and priority. It can be deployed in two modes: **Standalone Mode** (using a self-managed Envoy proxy) or **Gateway Mode**, where it integrates with the Kubernetes Gateway API.

The router's intelligence comes from the **Endpoint Picker (EPP)**, which dynamically selects the best endpoints using signals such as current load and request priority. It supports real-time communication with production-grade proxies (e.g., Envoy) via the `ext-proc` protocol, allowing for seamless optimization of request placement.

The project supports advanced deployment patterns and integrates with both self-managed and cloud-managed L7 load balancers. It also includes Request Management APIs like `InferenceObjective` and `InferenceModelRewrite`, enabling detailed control over request scheduling and traffic routing. The **Disaggregation Sidecar** extends the router's capabilities by managing complex multi-stage inference workflows like Prefill/Decode or Encode/Prefill/Decode.

## Key Points

- **Intelligent routing**: Uses the Endpoint Picker (EPP) to dynamically select the best endpoints for inference requests based on real-time system state.
- **Deployment flexibility**: Operates in either Standalone Mode (with a self-managed Envoy) or Gateway Mode (via Kubernetes Gateway API).
- **API integration**: Hosts APIs like `InferenceObjective` and `InferenceModelRewrite` for configuring scheduling goals and enabling traffic management strategies.
- **Disaggregation support**: Manages multi-stage inference workflows using a coordination sidecar that communicates with specialized workers.
- **Production-grade compatibility**: Integrates with Envoy and supports both open-source and cloud-managed L7 load balancers.
- **Kubernetes-native**: Built with the Kubernetes Gateway API in mind, enabling advanced traffic control and multi-cluster load balancing.

## Sources

- [GitHub](https://github.com/llm-d/llm-d-router)
- [원본](raw/ingest/tech/2026-05-15-llm-d-router-intelligent-inference-gateway.md)