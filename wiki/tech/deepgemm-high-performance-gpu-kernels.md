# DeepGEMM: High-Performance GPU Kernels

> DeepGEMM is a unified, high-performance CUDA library for GPU-accelerated GEMM operations and LLM primitives, offering runtime-compiled kernels with performance rivaling expert-tuned libraries. It simplifies NVIDIA GPU kernel optimization while supporting advanced features like FP8/FP4 GEMMs, fused MoE, and HyperConnection.  
> Last updated: 2026-04-18

## Overview

**DeepGEMM** is a lightweight CUDA-based library optimized for modern large language model (LLM) computations. It provides high-performance GEMM (General Matrix Multiply) kernels for FP8, FP4, BF16, and specialized operations like fused MoE (Mega MoE), MQA scoring, and HyperConnection. Key features include:

- **Runtime-compiled JIT module**: Kernels are compiled at runtime via a lightweight Just-In-Time (JIT) system, eliminating the need for CUDA compilation during installation.
- **Cross-architecture support**: Works on NVIDIA SM90 (A100/H100) and SM100 (H800/H200) GPUs with unified codebases.
- **Performance benchmarks**: Achieves up to **1550 TFLOPS** on H800 GPUs and matches/exceeds expert-tuned libraries for diverse matrix shapes.
- **Simplified design**: Avoids heavy reliance on CUTLASS/CuTe templates, focusing on minimal core functions for accessibility and maintainability.

### Repository Info

- **URL**: [GitHub](https://github.com/deepseek-ai/DeepGEMM)
- **Stars**: 6,515
- **Forks**: 876
- **Language**: Cuda
- **License**: MIT License
- **Created**: 2025-02-13
- **Updated**: 2026-04-18
- **Open Issues**: 63

### Key Updates (2026.04.16)
- **Mega MoE** and **FP8xFP4 GEMM** support.
- **FP4 Indexer** and **PDL** (Parallel Data Layout) optimizations.
- Faster JIT compilation via NVRTC (10x speedup).
- Performance comparisons pending release.

### Requirements
- **GPU**: SM90/SM100 architecture.
- **CUDA**: 12.3+ (SM90), 12.9+ (SM100) recommended.
- **Python**: 3.8+.
- **Dependencies**: PyTorch 2.1+, CUTLASS 4.0+, `{fmt}` library.

### Installation
```bash
# Clone with submodules
git clone --recursive git@github.com:deepseek-ai/DeepGEMM.git
cd DeepGEMM

# Development setup
./develop.sh

# Install
./install.sh
```

### Supported Operations
- **GEMMs**: FP8, FP4, BF16, INT8.
- **Fused MoE**: Overlapped communication (Mega MoE).
- **LLM Primitives**: MQA scoring, HyperConnection (HC), weight gradient kernels.
- **Memory Layouts**: NT/TT/NN/TT (SM100).

## Key Points
- Runtime JIT compilation eliminates CUDA build dependencies.
- Performance matches expert-tuned libraries across matrix shapes.
- Lightweight design with minimal core kernel functions.
- Full support for SM90 and SM100 architectures.
- Open-source under MIT License for research and commercial use.

## Sources
- [GitHub](https://github.com/deepseek-ai/DeepGEMM)
- [원본](raw/ingest/tech/2026-04-18-deepgemm-high-performance-gpu-kernels.md)