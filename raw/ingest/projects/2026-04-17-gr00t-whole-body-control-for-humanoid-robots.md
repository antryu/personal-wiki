<!-- GitHub Trending: Python | 1,502 stars | +31 today -->

# NVlabs/GR00T-WholeBodyControl

> Welcome to GR00T Whole-Body Control (WBC)! This is a unified platform for developing and deploying advanced humanoid controllers. This includes: Decoupled WBC models used in NVIDIA Isaac-Gr00t, Gr00t N1.5 and N1.6 and GEAR-SONIC 

## Repository Info
- **URL**: https://github.com/NVlabs/GR00T-WholeBodyControl
- **Stars**: 1,502
- **Forks**: 187
- **Language**: Python
- **License**: Other
- **Created**: 2025-11-05
- **Updated**: 2026-04-17
- **Topics**: N/A
- **Open Issues**: 26

## README (excerpt)
<div align="center">

  <img src="media/groot_wbc.png" width="800" alt="GEAR SONIC Header">

  <!-- --- -->
  
  
</div>

<div align="center">

[![License](https://img.shields.io/badge/License-Apache%202.0-76B900.svg)](LICENSE)
[![IsaacLab](https://img.shields.io/badge/IsaacLab-2.3.2-orange.svg)](https://github.com/isaac-sim/IsaacLab/releases/tag/v2.3.2)
[![Documentation](https://img.shields.io/badge/docs-GitHub%20Pages-76B900.svg)](https://nvlabs.github.io/GR00T-WholeBodyControl/)
[![Demo](https://img.shields.io/badge/Live%20Demo-GEAR--SONIC-blue.svg)](https://nvlabs.github.io/GEAR-SONIC/demo.html)

</div>

---




# GR00T-WholeBodyControl

This is the codebase for the **GR00T Whole-Body Control (WBC)** projects. It hosts model checkpoints and scripts for training, evaluating, and deploying advanced whole-body controllers for humanoid robots. We currently support:

- **Decoupled WBC**: the decoupled controller (RL for lower body, and IK for upper body) used in NVIDIA GR00T [N1.5](https://research.nvidia.com/labs/gear/gr00t-n1_5/) and [N1.6](https://research.nvidia.com/labs/gear/gr00t-n1_6/) models;
- **GEAR-SONIC Series**: our latest iteration of generalist humanoid whole-body controllers (see our [whitepaper](https://nvlabs.github.io/GEAR-SONIC/)).

## News

- **[2026-04-14]** 🌐 **[Live web demo](https://nvlabs.github.io/GEAR-SONIC/demo.html)** — try SONIC interactively in your browser. Features [Kimodo](https://github.com/nv-tlabs/kimodo) text-to-motion generation.
- **[2026-04-10]** 🚀 Released **SONIC training code and checkpoint** on [HuggingFace](https://huggingface.co/nvidia/GEAR-SONIC). Train from scratch or finetune. **Additional embodiment support** and **VLA data collection pipeline**. See [Training Guide](https://nvlabs.github.io/GR00T-WholeBodyControl/user_guide/training.html).
- **[2026-03-24]** 🔧 C++ inference stack update: motor error monitoring, TTS alerts, ZMQ protocol v4, idle-mode readaptation. **ZMQ header size changed to 1280 bytes.**
- **[2026-03-16]** 📦 [BONES-SEED](https://huggingface.co/datasets/bones-studio/seed) open-sourced — 142K+ human motions (~288 hours) with G1 MuJoCo trajectories.
- **[2026-02-19]** 🎉 Released GEAR-SONIC: pretrained checkpoints, C++ inference, VR teleoperation, and documentation.
- **[2025-11-12]** 🏁 Initial release with Decoupled WBC for GR00T N1.5 and N1.6.

## Table of Contents

- [News](#news)
- [GEAR-SONIC](#gear-sonic)
- [VR Whole-Body Teleoperation](#vr-whole-body-teleoperation)
- [Kinematic Planner](#kinematic-planner)
- [SONIC Training](#sonic-training)
- [TODOs](#todos)
- [What's Included](#whats-included)
  - [Setup](#setup)
- [Documentation](#documentation)
- [Citation](#citation)
- [License](#license)
- [Support](#support)
- [Decoupled WBC](#decoupled-wbc)


## GEAR-SONIC 

<p style="font-size: 1.2em;">
    <a href="https://nvlabs.github.io/GEAR-SONIC/"><strong>Website</strong></a> | 
    <a href="https://huggingface.co/nvidia/GEAR-SONIC"><strong>Model</strong></a> | 
    <a href="https://arxiv.org/abs/2511.07820"><strong>Paper</strong></a> | 
    <a href="https://nvlabs.github.io/GR00T-WholeBodyControl/"><strong>Docs</strong></a>
  </p>

<div align="center">
  <img src="docs/source/_static/sonic-preview-gif-480P.gif" width="800" >
  
</div>

SONIC is a humanoid behavior foundation model that gives robots a core set of motor skills learned from large-scale human motion data. Rather than building separate controllers for predefined motions, SONIC uses motion tracking as a scalable training task, enabling a single unified policy to produce natural, whole-body movement and support a wide range of behaviors — from walking and crawling to teleoperation and multi-modal control. It is designed to generalize beyond the motions it has seen during training and to serve as a foundation for higher-level planning and interaction.

In this repo, we release SONIC's training code, deployment framework, model checkpoints, and teleoperation stack for data collection.


## VR