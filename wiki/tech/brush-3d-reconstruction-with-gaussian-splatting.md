# Brush: 3D Reconstruction with Gaussian Splatting

> Brush is a cross-platform 3D reconstruction engine using Gaussian splatting that works on macOS, Windows, Linux, Android, and in browsers. It leverages WebGPU and the Burn ML framework for real-time rendering and is designed to be lightweight and accessible across all devices.
> Last updated: 2026-05-13

## Overview
Brush is an open-source 3D reconstruction engine based on [Gaussian splatting](https://repo-sam.inria.fr/fungraph/3d-gaussian-splatting/). It is designed to be accessible across a wide range of devices and platforms by using WebGPU-compatible technology and the [Burn](https://github.com/tracel-ai/burn) machine learning framework. The project's goal is to provide real-time rendering with minimal setup, making it easy to use in a browser or on mobile.

Brush supports training and visualization, and it can load various file formats like .ply and .zip for static and animated scenes. It is highly versatile, working on desktops, mobile, and in web applications without requiring complex dependencies. Brush is also compatible with the [Rerun](https://rerun.io/) visualization tool for enhanced debugging and training insights.

Brush is written in Rust and released under the Apache License 2.0. It supports multiple platforms and devices, and its source code is actively maintained and updated.

## Key Points
- Cross-platform support including macOS, Windows, Linux, Android, and browsers.
- Uses WebGPU and Burn for real-time rendering without heavy dependencies.
- Supports COLMAP and Nerfstudio datasets for 3D reconstruction.
- Includes viewer, CLI, and Rerun visualization support.
- Can be compiled to WASM for web use, and also runs on mobile devices.

## Sources
- [GitHub](https://github.com/ArthurBrussee/brush)
- [원본](raw/ingest/tech/2026-05-13-brush-3d-reconstruction-with-gaussian-splatting.md)