# DFlash: Block Diffusion for Speculative Decoding

> DFlash is a lightweight block diffusion model designed for speculative decoding in large language models (LLMs). It enables efficient and high-quality parallel drafting, significantly accelerating inference while maintaining accuracy.  
> Last updated: 2026-04-16

## Overview
DFlash introduces a novel **block diffusion architecture** to optimize speculative decoding for LLMs. The project provides pre-trained draft models for popular frameworks (e.g., Qwen, Llama, GPT) and supports integration with inference backends like vLLM, SGLang, and Transformers. Key features include:

- **Efficient Parallel Drafting**: Reduces token generation latency by speculatively generating multiple tokens in parallel.
- **Model Agnosticism**: Compatible with a wide range of LLMs, including Kimi-K2.5, Qwen3.5 variants, and Llama-3.1.
- **Flexible Deployment**: Supports multiple backends (vLLM, SGLang, Transformers) with tailored installation instructions.
- **Open Ecosystem**: MIT-licensed with open-source training recipes planned for future release.

**Repository Highlights**:
- **Stars**: 1,576 | **Forks**: 108 | **Language**: Python
- **Paper**: [arXiv:2602.06036](https://arxiv.org/abs/2602.06036)
- **Models**: [Hugging Face Collection](https://huggingface.co/collections/z-lab/dflash)
- **Blog**: [Z-Lab Project Page](https://z-lab.ai/projects/dflash/)

**Supported Models** (partial list):
- Qwen3.5-4B/9B/27B/35B-A3B
- Kimi-K2.5 (Preview)
- Llama-3.1-8B-Instruct
- gpt-oss-20b/120b
- Qwen3-Coder variants
- Upcoming: Qwen3.5-122B-A10B, Qwen3.5-397B-A17B, GLM-5.1

**Installation**:
```bash
# Example: vLLM backend
uv pip install -e ".[vllm]"
uv pip install -U vllm --torch-backend=auto --extra-index-url https://wheels.vllm.ai/nightly
```

**Quick Start** (vLLM example):
```bash
vllm serve Qwen/Qwen3.5-27B \
  --speculative-config '{"method": "dflash", "model": "z-lab/Qwen3.5-27B-DFlash", "num_speculative_tokens": 15}' \
  --attention-backend flash_attn \
  --max-num-batched-tokens 32768
```

## Key Points
- Achieves **high-quality speculative decoding** with minimal computational overhead.
- Provides **pre-trained draft models** for 12+ LLM variants (including 35B+ parameter models).
- Supports **backend-agnostic deployment** via vLLM, SGLang, Transformers, and MLX (Apple Silicon).
- Open-source training recipes will enable custom model adaptation for new LLMs.

## Sources
- [GitHub](https://github.com/z-lab/dflash)
- [원본](raw/ingest/research/2026-04-16-dflash-block-diffusion-for-speculative-decoding.md)