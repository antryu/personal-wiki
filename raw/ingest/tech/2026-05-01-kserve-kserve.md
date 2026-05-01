<!-- GitHub Trending: Go | 5,407 stars | +6 today -->

# kserve/kserve

> Standardized Distributed Generative and Predictive AI Inference Platform for Scalable, Multi-Framework Deployment on Kubernetes

## Repository Info
- **URL**: https://github.com/kserve/kserve
- **Stars**: 5,407
- **Forks**: 1,457
- **Language**: Go
- **License**: Apache License 2.0
- **Created**: 2019-03-27
- **Updated**: 2026-05-01
- **Topics**: artificial-intelligence, cncf, genai, hacktoberfest, istio, k8s, knative, kserve, kubeflow, kubernetes, llm-inference, machine-learning, mlops, model-interpretability, model-serving, pytorch, service-mesh, tensorflow, vllm, xgboost
- **Open Issues**: 714

## README (excerpt)
# KServe
[![go.dev reference](https://img.shields.io/badge/go.dev-reference-007d9c?logo=go&logoColor=white)](https://pkg.go.dev/github.com/kserve/kserve)
[![Go Report Card](https://goreportcard.com/badge/github.com/kserve/kserve)](https://goreportcard.com/report/github.com/kserve/kserve)
[![OpenSSF Best Practices](https://bestpractices.coreinfrastructure.org/projects/6643/badge)](https://bestpractices.coreinfrastructure.org/projects/6643)
[![Releases](https://img.shields.io/github/release-pre/kserve/kserve.svg?sort=semver)](https://github.com/kserve/kserve/releases)
[![LICENSE](https://img.shields.io/github/license/kserve/kserve.svg)](https://github.com/kserve/kserve/blob/master/LICENSE)
[![Slack Status](https://img.shields.io/badge/slack-join_chat-white.svg?logo=slack&style=social)](https://github.com/kserve/community/blob/main/README.md#questions-and-issues)
[![Gurubase](https://img.shields.io/badge/Gurubase-Ask%20KServe%20Guru-006BFF)](https://gurubase.io/g/kserve)

KServe is a standardized distributed generative and predictive AI inference platform for scalable, multi-framework deployment on Kubernetes.

KServe is being [used by many organizations](https://kserve.github.io/website/docs/community/adopters) and is a [Cloud Native Computing Foundation (CNCF)](https://www.cncf.io/) incubating project.

For more details, visit the [KServe website](https://kserve.github.io/website/).

![KServe](/docs/diagrams/kserve_new.png)

### Why KServe?

Single platform that unifies Generative and Predictive AI inference on Kubernetes. Simple enough for quick deployments, yet powerful enough to handle enterprise-scale AI workloads with advanced features.

### Features

**Generative AI**
  * 🧮 **Optimized Backends**: Support for vLLM and llm-d for optimized performance for serving LLMs
  * 📌 **Standardization**: OpenAI-compatible inference protocol for seamless integration with LLMs
  * 🚅 **GPU Acceleration**: High-performance serving with GPU support and optimized memory management for large models
  * 💾 **Model Caching**: Intelligent model caching to reduce loading times and improve response latency for frequently used models
  * 🗂️ **KV Cache Offloading**: Advanced memory management with KV cache offloading to CPU/disk for handling longer sequences efficiently
  * 📈 **Autoscaling**: Request-based autoscaling capabilities optimized for generative workload patterns
  * 🔧 **Hugging Face Ready**: Native support for Hugging Face models with streamlined deployment workflows

**Predictive AI**
  * 🧮 **Multi-Framework**: Support for TensorFlow, PyTorch, scikit-learn, XGBoost, ONNX, and more
  * 🔀 **Intelligent Routing**: Seamless request routing between predictor, transformer, and explainer components with automatic traffic management
  * 🔄 **Advanced Deployments**: Canary rollouts, inference pipelines, and ensembles with InferenceGraph
  * ⚡ **Autoscaling**: Request-based autoscaling with scale-to-zero for predictive workloads
  * 🔍 **Model Explainability**: Built-in support for model explanations and feature attribution to understand prediction reasoning
  * 📊 **Advanced Monitoring**: Enables payload logging, outlier detection, adversarial detection, and drift detection
  * 💰 **Cost Efficient**: Scale-to-zero on expensive resources when not in use, reducing infrastructure costs

### Learn More
To learn more about KServe, how to use various supported features, and how to participate in the KServe community, 
please follow the [KServe website documentation](https://kserve.github.io/website). 
Additionally, we have compiled a list of [presentations and demos](https://kserve.github.io/website/docs/community/presentations) to dive through various details.

### :hammer_and_wrench: Installation

#### Standalone Installation
- **[Standard Kubernetes Installation](https://kserve.github.io/website/docs/admin-guide/overview#raw-kubernetes-deployment)**: Compared to Serverless Installation, this is a more **lightweight** installation. However,