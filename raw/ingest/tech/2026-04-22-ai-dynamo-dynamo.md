<!-- GitHub Trending: Rust | 6,620 stars | +14 today -->

# ai-dynamo/dynamo

> A Datacenter Scale Distributed Inference Serving Framework

## Repository Info
- **URL**: https://github.com/ai-dynamo/dynamo
- **Stars**: 6,620
- **Forks**: 1,045
- **Language**: Rust
- **License**: Other
- **Created**: 2025-03-03
- **Updated**: 2026-04-22
- **Topics**: N/A
- **Open Issues**: 663

## README (excerpt)
<!--
SPDX-FileCopyrightText: Copyright (c) 2024-2026 NVIDIA CORPORATION & AFFILIATES. All rights reserved.
SPDX-License-Identifier: Apache-2.0

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
-->

![Dynamo banner](./docs/assets/img/dynamo-frontpage-banner.png)

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![GitHub Release](https://img.shields.io/github/v/release/ai-dynamo/dynamo)](https://github.com/ai-dynamo/dynamo/releases/latest)
[![PyPI](https://img.shields.io/pypi/v/ai-dynamo)](https://pypi.org/project/ai-dynamo/)
[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/ai-dynamo/dynamo)
[![Discord](https://dcbadge.limes.pink/api/server/D92uqZRjCZ?style=flat)](https://discord.gg/D92uqZRjCZ)
![Community Contributors](https://img.shields.io/badge/community_contributors-70%2B-brightgreen)

| **[Docs](https://docs.nvidia.com/dynamo/)** | **[Roadmap](https://github.com/ai-dynamo/dynamo/issues/5506)** | **[Recipes](https://github.com/ai-dynamo/dynamo/tree/main/recipes)** | **[Examples](https://github.com/ai-dynamo/dynamo/tree/main/examples)** | **[Prebuilt Containers](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/ai-dynamo/collections/ai-dynamo)** | **[Blog](https://developer.nvidia.com/blog/nvidia-dynamo-1-production-ready/)** | **[Design Proposals](https://github.com/ai-dynamo/enhancements)** | **[How to Contribute](#community-and-contributing)** |

# Dynamo

**The open-source, datacenter-scale inference stack.** Dynamo is the orchestration layer above inference engines — it doesn't replace SGLang, TensorRT-LLM, or vLLM, it turns them into a coordinated multi-node inference system. Disaggregated serving, intelligent routing, multi-tier KV caching, and automatic scaling work together to maximize throughput and minimize latency for LLM, reasoning, multimodal, and video generation workloads.

Built in Rust for performance, Python for extensibility.

## When to use Dynamo

- You're serving LLMs across **multiple GPUs or nodes** and need to coordinate them
- You want **KV-aware routing** to avoid redundant prefill computation
- You need to **independently scale prefill and decode** (disaggregated serving)
- You want **automatic scaling** that meets latency SLAs at minimum total cost of ownership (TCO)
- You need **fast cold-starts** when spinning up new replicas

If you're running a single model on a single GPU, your inference engine alone is probably sufficient.

**Feature support at a glance:**

| | [SGLang](https://docs.nvidia.com/dynamo/backends/sg-lang) | [TensorRT-LLM](https://docs.nvidia.com/dynamo/backends/tensor-rt-llm) | [vLLM](https://docs.nvidia.com/dynamo/backends/v-llm) |
|---|:----:|:----------:|:--:|
| [**Disaggregated Serving**](https://docs.nvidia.com/dynamo/design-docs/disaggregated-serving) | ✅ | ✅ | ✅ |
| [**KV-Aware Routing**](https://docs.nvidia.com/dynamo/components/router) | ✅ | ✅ | ✅ |
| [**SLA-Based Planner**](https://docs.nvidia.com/dynamo/components/planner/planner-guide) | ✅ | ✅ | ✅ |
| [**KVBM**](https://docs.nvidia.com/dynamo/components/kvbm) | 🚧 | ✅ | ✅ |
| [**Multimodal**](https://docs.nvidia.com/dynamo/user-guides/multimodal) | ✅ | ✅ | ✅ |
| [**Tool Calling**](https://docs.nvidia.com/dynamo/user-guides/tool-calling) | ✅ | ✅ | ✅ |

> **[Full Feature Matrix →](https://docs.nvidia.com/dynamo/resources/feature-matrix)** — LoRA, request migration, speculative decoding, and feature interactions.

## Key Results

| Result | Context |
|--------|---------