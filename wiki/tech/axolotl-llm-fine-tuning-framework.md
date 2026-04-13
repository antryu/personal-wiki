# Axolotl LLM Fine-tuning Framework

> A free and open-source framework for fine-tuning large language models (LLMs), notable for its support of multiple model architectures, quantization techniques, and advanced training methods.  
> Last updated: 2026-04-13

## Overview
- **Repository URL**: [https://github.com/axolotl-ai-cloud/axolotl](https://github.com/axolotl-ai-cloud/axolotl)  
- **Stars**: 11,677  
- **Forks**: 1,305  
- **Language**: Python  
- **License**: [Apache License 2.0](https://github.com/axolotl-ai-cloud/axolotl/blob/main/LICENSE)  
- **Created**: 2023-04-14  
- **Updated**: 2026-04-13  
- **Topics**: fine-tuning, llm  
- **Open Issues**: 218  
- **Key Features**:  
  - Support for models like Mistral Small 4, Qwen3.5, GLM-4 variants, and more.  
  - Advanced training techniques (e.g., MoE expert quantization, ScatterMoE LoRA, SageAttention).  
  - Tools for reducing VRAM usage and improving long-context attention.  

## Key Points
- **New Model Support (2026/03)**: Added examples for [Mistral Small 4](https://github.com/axolotl-ai-cloud/axolotl/tree/main/examples/mistral4), [Qwen3.5](https://github.com/axolotl-ai-cloud/axolotl/tree/main/examples/qwen3.5), and GLM series models.  
- **MoE Expert Quantization**: Reduces VRAM usage during MoE model training via `quantize_moe_experts: true`.  
- **ScatterMoE LoRA**: Enables LoRA fine-tuning on MoE expert weights using Triton kernels.  
- **Advanced Techniques**: Includes [SageAttention](https://github.com/axolotl-ai-cloud/axolotl/pull/2823) for attention efficiency and [EAFT](https://github.com/axolotl-ai-cloud/axolotl/pull/3366) for entropy-aware training.  

## Sources
- [GitHub](https://github.com/axolotl-ai-cloud/axolotl)  
- [원본](raw/ingest/tech/2026-04-13-axolotl-llm-fine-tuning-framework.md)