# GR00T Whole-Body Control for Humanoid Robots

> GR00T Whole-Body Control (WBC) is a unified platform for developing and deploying advanced humanoid controllers, supporting decoupled WBC models (used in NVIDIA Isaac-Gr00t, Gr00t N1.5/N1.6) and the GEAR-SONIC series of generalist whole-body controllers. It provides training code, deployment frameworks, and tools for VR teleoperation and motion tracking.  
> Last updated: 2026-04-17

## Overview

### Key Features
- **Decoupled WBC**: Combines reinforcement learning (RL) for lower-body control and inverse kinematics (IK) for upper-body control, used in NVIDIA GR00t N1.5 and N1.6.
- **GEAR-SONIC Series**: Generalist humanoid whole-body controllers trained on large-scale human motion data, enabling natural, whole-body movement for diverse tasks.
- **VR Teleoperation**: Supports immersive whole-body teleoperation for data collection and real-time control.
- **Training Resources**: Includes training code, model checkpoints, and datasets like BONES-SEED (142K+ human motions) for reproducibility and fine-tuning.
- **Deployment Framework**: C++ inference stack with motor error monitoring, TTS alerts, and ZMQ protocol updates for robust real-world deployment.

### Recent Updates
- **2026-04-14**: Launched a **live web demo** for GEAR-SONIC, featuring Kimodo text-to-motion generation.
- **2026-04-10**: Released **SONIC training code and checkpoints** on HuggingFace, with support for fine-tuning and VLA data collection.
- **2026-03-24**: C++ inference stack updated with motor error monitoring, TTS alerts, and ZMQ protocol v4.
- **2026-03-16**: Open-sourced **BONES-SEED dataset** (142K+ human motions) for motion tracking and training.
- **2026-02-19**: Released GEAR-SONIC with pretrained checkpoints, C++ inference, VR teleoperation, and full documentation.

### Technical Highlights
- **Languages/Tools**: Python (primary), C++ (inference stack), IsaacLab 2.3.2, HuggingFace for model hosting.
- **License**: Apache 2.0 (see [LICENSE](https://github.com/NVlabs/GR00T-WholeBodyControl/blob/main/LICENSE)).
- **Community**: 1,502 stars, 187 forks, 26 open issues as of 2026-04-17.

## Key Points
- Unifies decoupled and end-to-end whole-body control for humanoid robots.
- Enables scalable motor skill learning via motion tracking and large human motion datasets.
- Provides browser-based demos and VR teleoperation for interactive development.
- Open-sources training pipelines and datasets to foster reproducibility.

## Sources
- [GitHub](https://github.com/NVlabs/GR00T-WholeBodyControl)
- [원본](raw/ingest/projects/2026-04-17-gr00t-whole-body-control-for-humanoid-robots.md)