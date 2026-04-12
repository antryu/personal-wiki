# DORA Robotics Framework

> DORA (Dataflow-Oriented Robotic Architecture) is a high-performance middleware designed to simplify AI-based robotic application development through low-latency, composable, and distributed dataflow capabilities. Notably, it achieves **10-17x faster performance** than ROS2 and supports hybrid Rust/Python workflows for robotics pipelines.  
> Last updated: 2026-04-12

## Overview
DORA enables robotic applications to be modeled as directed graphs (pipelines), combining hardware, algorithms, and AI models with pre-packaged nodes for rapid prototyping. The framework emphasizes real-time execution, with 100% Rust internals for speed and safety. Recent updates include Pythonic API enhancements, AV1 video encoding/decoding, and support for advanced models like Meta SAM2 and Qwen2.5.  

Key features include:
- **Performance**: Benchmarked at 10-17x lower latency than ROS2.
- **Language support**: Dual Rust/Python APIs for flexibility.
- **Pre-packaged nodes**: Includes tools for computer vision (e.g., Sobel filters), robotics kinematics, and multi-camera depth estimation.
- **Distributed dataflow**: Zenoh integration for scalable, cross-node communication.

## Key Points
- Achieves **realtime multi-AI/hardware orchestration** via directed graph pipelines.
- 100% Rust core ensures **low-latency execution** and memory safety.
- Supports **171 active open issues** and 3.4k stars on GitHub, reflecting active community engagement.
- 2025 updates added async Python, AV1 video codecs, and Microsoft Phi4/Magma model integrations.

## Sources
- [GitHub](https://github.com/dora-rs/dora)
- [원본](raw/ingest/tech/2026-04-12-dora-robotics-framework.md)