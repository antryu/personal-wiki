# WiFi-based Human Pose and Vital Monitoring System

> This project, RuView, transforms ordinary WiFi signals into real-time human pose estimation, vital sign monitoring, and presence detection, all without using video or cameras. It leverages WiFi's Channel State Information (CSI) to sense and interpret human activity through walls and in the dark, making it a powerful tool for privacy-preserving, non-intrusive monitoring.  
> Last updated: 2026-04-19

## Overview

RuView is a WiFi-based sensing platform developed by the ruvnet team. It utilizes low-cost ESP32 hardware to capture and analyze WiFi Channel State Information (CSI), converting it into spatial and physiological data such as human pose, breathing, heart rate, and activity recognition. The system operates without the need for cameras or wearable devices, making it suitable for applications in healthcare, home security, and smart environments.

The platform is built on RuVector and integrates with Cognitum Seed for secure, edge-based AI processing. It employs spiking neural networks for rapid environmental adaptation and includes cryptographic attestation for secure data handling. RuView supports real-time pose estimation using 17 COCO keypoints and is trained entirely without video input, drawing inspiration from the *DensePose From WiFi* research at Carnegie Mellon University.

RuView is actively developed and has support for ESP32-S3 hardware, with plans to expand to multi-node setups for enhanced spatial resolution. It is open source, licensed under the MIT License, and is written primarily in Rust.

## Key Points
- **Non-invasive monitoring**: Detects human presence, pose, and vital signs without cameras or wearables.
- **Privacy-preserving**: Uses WiFi signals and CSI data, which do not capture visual images.
- **Edge-based AI**: Runs on low-cost ESP32 hardware and integrates with Cognitum Seed for AI and secure processing.
- **Adaptive and fast**: Learns and adapts to environments in under 30 seconds using spiking neural networks.
- **Multi-functional**: Supports presence detection, vital sign monitoring, activity recognition, sleep tracking, and environment mapping.
- **Open source**: Available on GitHub under the MIT License, with active community and developer support.

## Sources
- [GitHub](https://github.com/ruvnet/RuView)
- [원본](raw/ingest/projects/2026-04-19-wifi-based-human-pose-and-vital-monitoring-system.md)