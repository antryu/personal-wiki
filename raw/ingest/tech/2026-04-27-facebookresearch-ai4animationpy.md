<!-- GitHub Trending: Python | 1,571 stars | +117 today -->

# facebookresearch/ai4animationpy

> A Python framework for AI-driven character animation using neural networks.

## Repository Info
- **URL**: https://github.com/facebookresearch/ai4animationpy
- **Stars**: 1,571
- **Forks**: 191
- **Language**: Python
- **License**: Other
- **Created**: 2026-02-03
- **Updated**: 2026-04-27
- **Topics**: N/A
- **Open Issues**: 7

## README (excerpt)
<div align="center">

# AI4AnimationPy

**A Python framework for AI-driven character animation using neural networks.**

Developed by [Paul Starke](https://github.com/paulstarke) and [Sebastian Starke](https://github.com/sebastianstarke)

[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg)](LICENSE)
[![Python 3.12](https://img.shields.io/badge/Python-3.12-blue.svg)](https://www.python.org/downloads/release/python-3120/)
[![Documentation](https://img.shields.io/badge/Docs-GitHub%20Pages-blue?logo=github)](https://facebookresearch.github.io/ai4animationpy/)

<a href="https://youtu.be/LKl7MzFENUs">
<img src="Media/Thumbnail.png" width="100%" alt="AI4AnimationPy Demo Video">
</a>

</div>

AI4AnimationPy enables character animation through neural networks and provides useful tools for motion capture processing, training & inference, and animation engineering. The framework brings [AI4Animation](https://github.com/sebastianstarke/AI4Animation) to Python — removing the Unity dependency for data-processing, feature-extraction, inference, and post-processing while keeping similar game-engine-style architecture (ECS, update loops, rendering pipeline). Everything runs on **NumPy** or **PyTorch**, so training, inference, and visualization happen in one unified environment.

## Getting Started

Please see the full documentation for installation instructions, and other practical tips for working with AI4AnimationPy:

[**Full Documentation**](https://facebookresearch.github.io/ai4animationpy/)

- [Installation Instructions](https://facebookresearch.github.io/ai4animationpy/getting-started/installation/)
- [Quick Start Guide](https://facebookresearch.github.io/ai4animationpy/getting-started/quickstart/)
- [Architecture Overview](https://facebookresearch.github.io/ai4animationpy/architecture/overview/)
- [Demo Programs](https://facebookresearch.github.io/ai4animationpy/tutorials/demos/)
- [API Reference](https://facebookresearch.github.io/ai4animationpy/api/actor/)

## Architecture
The framework can be executed via 1) using in-built rendering pipeline ("Standalone"), 2) headless mode ("Headless") or 3) manual execution ("Manual") which enables running code locally or remotely on server-side.
While both Standalone and Headless mode invoke automatic update callbacks, the Manual mode allows to manually control how often and at which time intervals the update loop is invoked.

<img src ="Media/Architecture.png" width="100%">

## Interactive Demos
| | |
|---|---|
| ![Locomotion Demo](Media/Biped_Locomotion.gif) | ![Quadruped Demo](Media/Quadruped_Locomotion.gif) |
| **Stylized Biped Locomotion Controller** trained on style100 | **Quadruped Locomotion Controller** — Interactive dog locomotion with gait transitions and action poses |
| ![Training Demo](Media/Training.gif) | ![ECS Demo](Media/ECS.gif) |
| **Future Motion Anticipation** with Interactive model training visualization | **ECS** — Entity hierarchy and component system |
| ![IK Demo](Media/IK.gif) | ![MocapImport Demo](Media/MocapImport.gif) |
| **Inverse Kinematics** — Real-time IK solving | **Motion Capture Import** — GLB/FBX/BVH/NPZ loading |
| ![MotionEditor Demo](Media/MotionEditor.gif) | <div align="center"><br/><a href="https://facebookresearch.github.io/ai4animationpy/tutorials/demos/"><strong>View all demos →</strong></a></div> |
| **Motion Editor** — animation browsing and feature visualization| |

<div align="center"><a href="https://paulstarke-ai4animationpy.hf.space/" style="display: inline-block; padding: 12px 24px; background-color: #0366d6; color: white; text-decoration: none; border-radius: 6px; font-weight: 600; margin-top: 20px;">Play Web Demos</a> <br> <br>

<a href="https://youtu.be/qifmLpNzVzI?si=DmKrpsNhBO3vsCbW">
<img src="Media/WebDemos.png" width="75%" alt="AI4AnimationPy Demo Video">
</a>

</div>

## Why AI4AnimationPy?

Research on AI-driven character animation has required juggling multiple disconnected tools — model r