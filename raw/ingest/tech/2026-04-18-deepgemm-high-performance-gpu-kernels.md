<!-- GitHub Trending: Cuda | 6,515 stars | +31 today -->

# deepseek-ai/DeepGEMM

> DeepGEMM: clean and efficient FP8 GEMM kernels with fine-grained scaling

## Repository Info
- **URL**: https://github.com/deepseek-ai/DeepGEMM
- **Stars**: 6,515
- **Forks**: 876
- **Language**: Cuda
- **License**: MIT License
- **Created**: 2025-02-13
- **Updated**: 2026-04-18
- **Topics**: N/A
- **Open Issues**: 63

## README (excerpt)
# DeepGEMM

DeepGEMM is a unified, high-performance tensor core kernel library that brings together the key computation primitives of modern large language models — GEMMs (FP8, FP4, BF16), fused MoE with overlapped communication (Mega MoE), MQA scoring for the lightning indexer, HyperConnection (HC), and more — into a single, cohesive CUDA codebase. All kernels are compiled at runtime via a lightweight Just-In-Time (JIT) module, requiring no CUDA compilation during installation.

DeepGEMM leverages some concepts from [CUTLASS](https://github.com/nvidia/cutlass) and [CuTe](https://github.com/NVIDIA/cutlass/tree/main/include/cute), but avoids heavy reliance on their templates or algebras. The library is designed for simplicity, with only a limited number of core kernel functions, making it a clean and accessible resource for learning NVIDIA GPU kernel optimization techniques.

Despite its lightweight design, DeepGEMM's performance matches or exceeds expert-tuned libraries across various matrix shapes.

## News

- 2026.04.16: Mega MoE, FP8xFP4 GEMM, FP4 Indexer, PDL, faster JIT compilation and more.
  - Performance comparison will be posted later.
  - Please see [#304](https://github.com/deepseek-ai/DeepGEMM/pull/304) for more details.
- 2025.09.28: DeepGEMM now supports scoring kernels (weighted ReLU MQA logits) for the lightning indexer for DeepSeek v3.2.
  - Please see [#200](https://github.com/deepseek-ai/DeepGEMM/pull/200) for more details.
- 2025.07.20: DeepGEMM now supports both SM90/SM100, and has a full refactor with a low-CPU-overhead JIT CPP module.
  - NVRTC and post-compilation SASS optimization are all disabled.
  - NVRTC will be supported later.
  - As NVCC 12.9 will automatically do the FFMA interleaving, all post optimizations will be no longer supported.
  - Please see [#112](https://github.com/deepseek-ai/DeepGEMM/pull/112) for more details.
- 2025.05.14: DeepGEMM now offers weight gradient kernels for dense and MoE backward! See [#95](https://github.com/deepseek-ai/DeepGEMM/pull/95) for details.
- 2025.05.07: DeepGEMM now supports NVRTC with up to 10x compilation speedup! See [#94](https://github.com/deepseek-ai/DeepGEMM/pull/94) for details. Please use `DG_JIT_USE_NVRTC=1` to enable it (may have performance loss with some cases).
- 2025.04.18: DeepGEMM now achieves up to **1550 TFLOPS** on H800! See [#74](https://github.com/deepseek-ai/DeepGEMM/pull/74), [#78](https://github.com/deepseek-ai/DeepGEMM/pull/78), [#81](https://github.com/deepseek-ai/DeepGEMM/pull/81), [#86](https://github.com/deepseek-ai/DeepGEMM/pull/86) and [340d988](https://github.com/deepseek-ai/DeepGEMM/commit/340d9880f4a418d943d34260d20a79f41f4c0526) for details.

## Quick start

### Requirements

- NVIDIA SM90 or SM100 architecture GPU
- Python 3.8 or higher
- Compilers with C++20 support
- CUDA Toolkit:
  - CUDA 12.3 or higher for SM90
    - **We highly recommend 12.9 or higher for the best performance**
  - CUDA 12.9 or higher for SM100
- PyTorch 2.1 or higher
- CUTLASS 4.0 or higher (could be cloned by Git submodule)
- `{fmt}` library (could be cloned by Git submodule)

### Development

```bash
# Submodule must be cloned
git clone --recursive git@github.com:deepseek-ai/DeepGEMM.git
cd DeepGEMM

# Link some essential includes and build the CPP JIT module
cat develop.sh
./develop.sh
```

### Installation

```bash
cat install.sh
./install.sh
```

Then, import `deep_gemm` in your Python project, and enjoy!

## Interfaces

#### Notices

This library provides optimized GEMM kernels for NVIDIA GPUs with a naming convention: `D = C + A @ B`. The input shape layout is NT (non-transposed A, transposed B). While the SM90 implementation supports only the NT memory layout (row-major, col-major), the SM100 implementation supports all memory layouts (NT, TN, NN, TT). For example, `fp8_gemm_nt` will do a `D = C + A @ B.T`

For both architectures, the LHS scaling factor is required to have a TMA-aligned and transposed layout. And the data format for the