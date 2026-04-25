<!-- GitHub Trending: Python | 5,748 stars | +62 today -->

# tile-ai/tilelang

>  Domain-specific language designed to streamline the development of high-performance GPU/CPU/Accelerators kernels

## Repository Info
- **URL**: https://github.com/tile-ai/tilelang
- **Stars**: 5,748
- **Forks**: 523
- **Language**: Python
- **License**: Other
- **Created**: 2024-10-03
- **Updated**: 2026-04-25
- **Topics**: N/A
- **Open Issues**: 88

## README (excerpt)
<img src=./images/logo-row.svg />

<div align="center">

# Tile Language
[![PyPI version](https://badge.fury.io/py/tilelang.svg)](https://badge.fury.io/py/tilelang)
[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/tile-ai/tilelang)
[![Discord](https://img.shields.io/badge/Discord-%235865F2.svg?logo=discord&logoColor=white)](https://discord.gg/TUrHyJnKPG)
[![Puzzles](https://img.shields.io/badge/🧩_Learn-TileLang_Puzzles-blueviolet)](https://github.com/tile-ai/tilelang-puzzles)
</div>

Tile Language (**tile-lang**) is a concise domain-specific language designed to streamline the development of high-performance GPU/CPU kernels (e.g., GEMM, Dequant GEMM, FlashAttention, LinearAttention). By employing a Pythonic syntax with an underlying compiler infrastructure on top of [TVM](https://tvm.apache.org/), tile-lang allows developers to focus on productivity without sacrificing the low-level optimizations necessary for state-of-the-art performance.

<img src=./images/MatmulExample.png />

## Latest News
- 02/02/2026 🧩: Check out [TileLang Puzzles](https://github.com/tile-ai/tilelang-puzzles), a fun and interactive way to learn TileLang programming with 10 progressively harder puzzles!
- 12/18/2025 🚀: Added [CuTeDSL backend](https://github.com/tile-ai/tilelang/pull/1421) support, enabling compilation to NVIDIA CUTLASS CuTe DSL! Join us in building and optimizing this exciting new backend: [Issue #1454](https://github.com/tile-ai/tilelang/issues/1454).
- 12/17/2025 🔬: Integrated [Z3 theorem prover](https://github.com/tile-ai/tilelang/pull/1367) into TVM Arith Analyzer, bringing SMT-based symbolic reasoning for enhanced optimizations and automatic correctness verification!
- 10/31/2025 🔧: Migrated to [apache-tvm-ffi](https://github.com/tile-ai/tilelang/pull/1108), significantly reducing CPU overhead!
- 10/30/2025 📦: We have released v0.1.6.post2, which is the last version compatible with Python 3.8.
- 10/07/2025 🍎: Added Apple Metal Device support, check out [Pull Request #799](https://github.com/tile-ai/tilelang/pull/799) for details.
- 09/29/2025  🎉: Thrilled to announce that ​​AscendC​​ and ​Ascend​NPU IR​​ backends targeting Huawei Ascend chips are now supported!
Check out the preview here:
🔗 [link](https://github.com/tile-ai/tilelang-ascend).
This includes implementations across two branches:
[ascendc_pto](https://github.com/tile-ai/tilelang-ascend) and
[npuir](https://github.com/tile-ai/tilelang-ascend/tree/npuir).
Feel free to explore and share your feedback!
- 07/04/2025 🚀: Introduced `T.gemm_sp` for 2:4 sparse tensor core support, check out [Pull Request #526](https://github.com/tile-ai/tilelang/pull/526) for details.
- 06/05/2025 ✨: Added [NVRTC Backend](https://github.com/tile-ai/tilelang/pull/461) to significantly reduce compilation time for cute templates!
- 04/14/2025 🚀: Added high-performance FlashMLA implementation for AMD MI300X, achieving performance parity with hand-optimized assembly kernels of Aiter! See [example_mla_amd](./examples/deepseek_mla/amd/README.md) for details.
- 03/03/2025 🚀: Added high-performance MLA Decoding support using only 80 lines of Python code, achieving performance on par with FlashMLA on H100 (see [example_mla_decode.py](./examples/deepseek_mla/example_mla_decode.py))! We also provide [documentation](./examples/deepseek_mla/README.md) explaining how TileLang achieves this.
- 02/15/2025 ✨: Added WebGPU Codegen support, see [Pull Request #86](https://github.com/tile-ai/tilelang/pull/86)!
- 02/12/2025 ✨: Excited to announce the release of [v0.1.0](https://github.com/tile-ai/tilelang/releases/tag/v0.1.0)!
- 02/10/2025 🚀: Added debug tools for TileLang—`T.print` for printing variables/buffers ([docs](https://tilelang.com/tutorials/debug_tools_for_tilelang.html)) and a memory layout plotter ([examples/plot_layout](./examples/plot_layout)).
- 01/20/2025 ✨: We are excited to announce that tile-lang, a dsl for high performance AI workloads, is now open source and avai