<!-- GitHub Trending: Rust | 3,433 stars | +32 today -->

# dora-rs/dora

> DORA (Dataflow-Oriented Robotic Architecture) is middleware designed to streamline and simplify the creation of AI-based robotic applications. It offers low latency, composable, and distributed dataflow capabilities. Applications are modeled as directed graphs, also referred to as pipelines.

## Repository Info
- **URL**: https://github.com/dora-rs/dora
- **Stars**: 3,433
- **Forks**: 365
- **Language**: Rust
- **License**: Apache License 2.0
- **Created**: 2022-02-17
- **Updated**: 2026-04-12
- **Topics**: dataflow, embodied-ai, low-latency, robotics, rust
- **Open Issues**: 171

## README (excerpt)
#

<p align="center">
    <img src="https://raw.githubusercontent.com/dora-rs/dora/main/docs/src/logo.svg" width="400"/>
</p>

<h2 align="center">
  <a href="https://www.dora-rs.ai">Website</a>
  |
  <a href="https://dora-rs.ai/docs/guides/getting-started/conversation_py/">Python API</a>
  |
  <a href="https://docs.rs/dora-node-api/latest/dora_node_api/">Rust API</a>
  |
  <a href="https://www.dora-rs.ai/docs/guides/">Guide</a>
  |
  <a href="https://discord.gg/6eMGGutkfE">Discord</a>
</h2>

<div align="center">
  <a href="https://github.com/dora-rs/dora/actions">
    <img src="https://github.com/dora-rs/dora/workflows/CI/badge.svg" alt="Build and test"/>
  </a>
  <a href="https://crates.io/crates/dora-rs">
    <img src="https://img.shields.io/crates/v/dora_node_api.svg"/>
  </a>
  <a href="https://docs.rs/dora-node-api/latest/dora_node_api/">
    <img src="https://docs.rs/dora-node-api/badge.svg" alt="rust docs"/>
  </a>
  <a href="https://pypi.org/project/dora-rs/">
    <img src="https://img.shields.io/pypi/v/dora-rs.svg" alt="PyPi Latest Release"/>
  </a>
    <a href="https://github.com/dora-rs/dora/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/dora-rs/dora" alt="PyPi Latest Release"/>
  </a>      
</div>
<div align="center">
<a href="https://trendshift.io/repositories/9190" target="_blank"><img src="https://trendshift.io/api/badge/repositories/9190" alt="dora-rs%2Fdora | Trendshift" style="width: 250px; height: 55px;" width="250" height="55"/></a>
</div>

## Highlights

- 🚀 dora-rs is a framework to run realtime multi-AI and multi-hardware applications.
- 🦀 dora-rs internals are 100% Rust making it extremely fast compared to alternative such as being ⚡️ [10-17x faster](https://github.com/dora-rs/dora-benchmark) than `ros2`.
- ❇️ Includes a large set of pre-packaged nodes for fast prototyping which simplifies integration of hardware, algorithms, and AI models.

<p align="center">
  <picture align="center">
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/dora-rs/dora/main/docs/src/bar_chart_dark.svg">
    <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/dora-rs/dora/main/docs/src/bar_chart_light.svg">
    <img src="https://raw.githubusercontent.com/dora-rs/dora/main/docs/src/bar_chart_light.svg">
  </picture>
</p>

<p align="center">
 <a href="https://github.com/dora-rs/dora-benchmark/" >
  <i>Latency benchmark with Python API for both framework, sending 40M of random bytes.</i>
  </a>
</p>

## Latest News 🎉

<details open>
<summary><b>2025</b></summary>

- \[08/25\] Introduced `dora.builder`, a new Pythonic API for imperatively defining `dora` dataflows.
- \[07/25\] Added Kornia rust nodes in the hub for V4L / Gstreamer cameras and Sobel image processing.
- \[06/25\] Add support for git based node, dora-vggt for multi-camera depth estimation, and adding robot_descriptions_py as a default way to get urdfs within dora.
- \[05/25\] Add support for dora-pytorch-kinematics for fk and ik, dora-mediapipe for pose estimation, dora-rustypot for rust serialport read/write, points2d and points3d visualization in rerun.
- \[04/25\] Add support for dora-cotracker to track any point on a frame, dora-rav1e AV1 encoding up to 12bit and dora-dav1d AV1 decoding,
- \[03/25\] Add support for dora async Python.
- \[03/25\] Add support for Microsoft Phi4, Microsoft Magma.
- \[03/25\] dora-rs has been accepted to [**GSoC 2025 🎉**](https://summerofcode.withgoogle.com/programs/2025/organizations/dora-rs-tb), with the following [**idea list**](https://github.com/dora-rs/dora/wiki/GSoC_2025).
- \[03/25\] Add support for Zenoh for distributed dataflow.
- \[03/25\] Add support for Meta SAM2, Kokoro(TTS), Improved Qwen2.5 Performance using `llama.cpp`.
- \[02/25\] Add support for Qwen2.5(LLM), Qwen2.5-VL(VLM), outetts(TTS)
</details>

## Support Matrix

|                                   | dora-rs                                              