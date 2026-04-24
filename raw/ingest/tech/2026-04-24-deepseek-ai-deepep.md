<!-- GitHub Trending: Cuda | 9,312 stars | +29 today -->

# deepseek-ai/DeepEP

> DeepEP: an efficient expert-parallel communication library

## Repository Info
- **URL**: https://github.com/deepseek-ai/DeepEP
- **Stars**: 9,312
- **Forks**: 1,181
- **Language**: Cuda
- **License**: MIT License
- **Created**: 2025-02-17
- **Updated**: 2026-04-24
- **Topics**: N/A
- **Open Issues**: 239

## README (excerpt)
# DeepEP

DeepEP is a communication library tailored for Mixture-of-Experts (MoE) and expert parallelism (EP). It provides high-throughput and low-latency all-to-all GPU kernels, which are also known as MoE dispatch and combine. The library also supports low-precision operations, including FP8.

To align with the group-limited gating algorithm proposed in the [DeepSeek-V3](https://github.com/deepseek-ai/DeepSeek-V3) paper, DeepEP offers a set of kernels optimized for asymmetric-domain bandwidth forwarding, such as forwarding data from NVLink domain to RDMA domain. These kernels deliver high throughput, making them suitable for both training and inference prefilling tasks. Additionally, they support SM (Streaming Multiprocessors) number control.

For latency-sensitive inference decoding, DeepEP includes a set of low-latency kernels with pure RDMA to minimize delays. The library also introduces a hook-based communication-computation overlapping method that does not occupy any SM resource.

Notice: the implementation in this library may have some slight differences from the [DeepSeek-V3](https://github.com/deepseek-ai/DeepSeek-V3) paper.

## Performance

### Normal kernels with NVLink and RDMA forwarding

We test normal kernels on H800 (~160 GB/s NVLink maximum bandwidth), with each connected to a CX7 InfiniBand 400 Gb/s RDMA network card (~50 GB/s maximum bandwidth). And we follow the DeepSeek-V3/R1 pretraining setting (4096 tokens per batch, 7168 hidden, top-4 groups, top-8 experts, FP8 dispatching and BF16 combining).

|   Type    | Dispatch #EP | Bottleneck bandwidth | Combine #EP | Bottleneck bandwidth |
|:---------:|:------------:|:--------------------:|:-----------:|:--------------------:|
| Intranode |      8       |  153 GB/s (NVLink)   |      8      |  158 GB/s (NVLink)   |
| Internode |      16      |    43 GB/s (RDMA)    |     16      |    43 GB/s (RDMA)    |
| Internode |      32      |    58 GB/s (RDMA)    |     32      |    57 GB/s (RDMA)    |
| Internode |      64      |    51 GB/s (RDMA)    |     64      |    50 GB/s (RDMA)    |

**News (2025.04.22)**: with optimizations from Tencent Network Platform Department, performance was enhanced by up to 30%, see [#130](https://github.com/deepseek-ai/DeepEP/pull/130) for more details. Thanks for the contribution!

### Low-latency kernels with pure RDMA

We test low-latency kernels on H800 with each connected to a CX7 InfiniBand 400 Gb/s RDMA network card (~50 GB/s maximum bandwidth). And we follow a typical DeepSeek-V3/R1 production setting (128 tokens per batch, 7168 hidden, top-8 experts, FP8 dispatching and BF16 combining).

| Dispatch #EP | Latency | RDMA bandwidth | Combine #EP | Latency | RDMA bandwidth |
|:------------:|:-------:|:--------------:|:-----------:|:-------:|:--------------:|
|      8       |  77 us  |    98 GB/s     |      8      | 114 us  |    127 GB/s    |
|      16      | 118 us  |    63 GB/s     |     16      | 195 us  |    74 GB/s     |
|      32      | 155 us  |    48 GB/s     |     32      | 273 us  |    53 GB/s     |
|      64      | 173 us  |    43 GB/s     |     64      | 314 us  |    46 GB/s     |
|     128      | 192 us  |    39 GB/s     |     128     | 369 us  |    39 GB/s     |
|     256      | 194 us  |    39 GB/s     |     256     | 360 us  |    40 GB/s     |

**News (2025.06.05)**: low-latency kernels now leverage NVLink as much as possible, see [#173](https://github.com/deepseek-ai/DeepEP/pull/173) for more details. Thanks for the contribution!

## Quick start

### Requirements

- Ampere (SM80), Hopper (SM90) GPUs, or other architectures with SM90 PTX ISA support
- Python 3.8 and above
- CUDA version
  - CUDA 11.0 and above for SM80 GPUs
  - CUDA 12.3 and above for SM90 GPUs
- PyTorch 2.1 and above
- NVLink for intranode communication
- RDMA network for internode communication

### Download and install NVSHMEM dependency

DeepEP also depends on NVSHMEM. Please refer to our [NVSHMEM Installation Guide](third-party/README.md) for instru