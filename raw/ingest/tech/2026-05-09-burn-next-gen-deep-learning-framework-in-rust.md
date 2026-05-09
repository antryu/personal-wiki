<!-- GitHub Trending: Rust | 15,058 stars | +13 today -->

# tracel-ai/burn

> Burn is a next generation tensor library and Deep Learning Framework that doesn't compromise on flexibility, efficiency and portability.

## Repository Info
- **URL**: https://github.com/tracel-ai/burn
- **Stars**: 15,058
- **Forks**: 899
- **Language**: Rust
- **License**: Apache License 2.0
- **Created**: 2022-07-18
- **Updated**: 2026-05-09
- **Topics**: autodiff, cross-platform, cuda, deep-learning, kernel-fusion, machine-learning, metal, ndarray, neural-network, onnx, pytorch, rocm, rust, scientific-computing, tensor, vulkan, wasm, webgpu
- **Open Issues**: 265

## README (excerpt)
<div align="center">
<img src="https://raw.githubusercontent.com/tracel-ai/burn/main/assets/logo-burn-neutral.webp" width="350px"/>

[![Discord](https://img.shields.io/discord/1038839012602941528.svg?color=7289da&&logo=discord)](https://discord.gg/uPEBbYYDB6)
[![Current Crates.io Version](https://img.shields.io/crates/v/burn.svg)](https://crates.io/crates/burn)
[![Minimum Supported Rust Version](https://img.shields.io/crates/msrv/burn)](https://crates.io/crates/burn)
[![Documentation](https://img.shields.io/badge/docs-latest-blue)](https://burn.dev/docs/burn)
[![Test Status](https://github.com/tracel-ai/burn/actions/workflows/test.yml/badge.svg)](https://github.com/tracel-ai/burn/actions/workflows/test.yml)
[![license](https://shields.io/badge/license-MIT%2FApache--2.0-blue)](#license)
[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/tracel-ai/burn)

[<img src="https://www.runblaze.dev/ci-blaze-powered.png" width="125px"/>](https://www.runblaze.dev)

---

**Burn is a next generation Tensor Library and Deep Learning Framework that doesn't compromise on
<br /> flexibility, efficiency and portability.**

<br/>
</div>

<div align="left">

Burn is both a tensor library and a deep learning framework optimized for numerical computing, model
inference and model training. Burn leverages Rust to perform optimizations normally only available
in static-graph frameworks, offering optimal speed without impacting flexibility.

## Backend

<div align="left">
<img align="right" src="https://raw.githubusercontent.com/tracel-ai/burn/main/assets/backend-chip.png" height="96px"/>

Burn strives to be as fast as possible on as many hardwares as possible, with robust
implementations. We believe this flexibility is crucial for modern needs where you may train your
models in the cloud, then deploy on customer hardwares, which vary from user to user.

</div>

### Supported Backends

Most backends support all operating systems, so we don't mention them in the tables below.

**GPU Backends:**

|         | CUDA | ROCm | Metal | Vulkan | WebGPU | LibTorch |
| ------- | ---- | ---- | ----- | ------ | ------ | -------- |
| Nvidia  | ☑️   | -    | -     | ☑️     | ☑️     | ☑️       |
| AMD     | -    | ☑️   | -     | ☑️     | ☑️     | ☑️       |
| Apple   | -    | -    | ☑️    | -      | ☑️     | ☑️       |
| Intel   | -    | -    | -     | ☑️     | ☑️     | -        |
| Qualcom | -    | -    | -     | ☑️     | ☑️     | -        |
| Wasm    | -    | -    | -     | -      | ☑️     | -        |

**CPU Backends:**

|        | Cpu (CubeCL) | Flex | LibTorch |
| ------ | ------------ | ---- | -------- |
| X86    | ☑️           | ☑️   | ☑️       |
| Arm    | ☑️           | ☑️   | ☑️       |
| Wasm   | -            | ☑️   | -        |
| no-std | -            | ☑️   | -        |

<br />

Compared to other frameworks, Burn has a very different approach to supporting many backends. By
design, most code is generic over the Backend trait, which allows us to build Burn with swappable
backends. This makes composing backend possible, augmenting them with additional functionalities
such as autodifferentiation and automatic kernel fusion.

<details>
<summary>
Autodiff: Backend decorator that brings backpropagation to any backend 🔄
</summary>
<br />

Contrary to the aforementioned backends, Autodiff is actually a backend _decorator_. This means that
it cannot exist by itself; it must encapsulate another backend.

The simple act of wrapping a base backend with Autodiff transparently equips it with
autodifferentiation support, making it possible to call backward on your model.

```rust
use burn::backend::{Autodiff, Wgpu};
use burn::tensor::{Distribution, Tensor};

fn main() {
    type Backend = Autodiff<Wgpu>;

    let device = Default::default();

    let x: Tensor<Backend, 2> = Tensor::random([32, 32], Distribution::Default, &device);
    let y: Tensor<Backend, 2> = Tensor::random([32, 32], Distribution::Default, &device).require_grad();

    let tmp = x.