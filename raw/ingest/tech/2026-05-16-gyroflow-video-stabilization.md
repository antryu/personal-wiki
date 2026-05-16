<!-- GitHub Trending: Rust | 8,740 stars | +116 today -->

# gyroflow/gyroflow

> Video stabilization using gyroscope data

## Repository Info
- **URL**: https://github.com/gyroflow/gyroflow
- **Stars**: 8,740
- **Forks**: 422
- **Language**: Rust
- **License**: GNU General Public License v3.0
- **Created**: 2021-11-11
- **Updated**: 2026-05-16
- **Topics**: fpv, gopro, gpu, gpu-computing, gyroscope, insta360, rolling-shutter-undistortion, rust, sony-alpha-cameras, stabilization, video, video-processing
- **Open Issues**: 92

## README (excerpt)
<p align="center">
  <h1 align="center">
    <a href="https://github.com/gyroflow/gyroflow#gh-light-mode-only">
      <img src="./resources/logo_black.svg" alt="Gyroflow logo" height="100">
    </a>
    <a href="https://github.com/gyroflow/gyroflow#gh-dark-mode-only">
      <img src="./resources/logo_white.svg" alt="Gyroflow logo" height="100">
    </a>
  </h1>

  <p align="center">
    Video stabilization using gyroscope data
    <br/>
    <br/>
    <a href="https://gyroflow.xyz">Homepage</a> •
    <a href="https://github.com/gyroflow/gyroflow/releases">Download</a> •
    <a href="https://docs.gyroflow.xyz">Documentation</a> •
    <a href="https://discord.gg/YaUtNpWTUh">Discord</a> •
    <a href="https://github.com/gyroflow/gyroflow/issues">Report bug</a> •
    <a href="https://github.com/gyroflow/gyroflow/issues">Request feature</a>
  </p>
  <p align="center">
    <a href="https://github.com/gyroflow/gyroflow/releases">
      <img src="https://img.shields.io/github/downloads/gyroflow/gyroflow/total" alt="Downloads">
    </a>
    <a href="https://github.com/gyroflow/gyroflow/graphs/contributors">
      <img src="https://img.shields.io/github/contributors/gyroflow/gyroflow?color=dark-green" alt="Contributors">
    </a>
    <a title="Crowdin" target="_blank" href="https://crowdin.com/project/gyroflow"><img src="https://badges.crowdin.net/gyroflow/localized.svg">
    </a>
    <a href="https://github.com/gyroflow/gyroflow/issues/">
      <img src="https://img.shields.io/github/issues/gyroflow/gyroflow" alt="Issues">
    </a>
    <a href="https://github.com/gyroflow/gyroflow/blob/master/LICENSE">
      <img src="https://img.shields.io/github/license/gyroflow/gyroflow" alt="License">
    </a>
  </p>
</p>

## About the project
Gyroflow is an application that can stabilize your video by using motion data from a gyroscope and optionally an accelerometer. Modern cameras record that data internally (GoPro, Sony, Insta360 etc), and this application stabilizes the captured footage precisely by using them. It can also use gyro data from an external source (eg. from Betaflight blackbox).

[Trailer / results video](https://www.youtube.com/watch?v=QR-SINyvNyI)

![Screenshot](resources/screenshot.jpg)

<p align="center">
  <a href="resources/comparison1.mp4"><img src="resources/comparison1.gif" height="200"></a>
  <a href="resources/comparison2.mp4"><img src="resources/comparison2.gif" height="200"></a>
</p>

## Features
- Real-time preview, parameter adjustments and all calculations
- GPU processing and rendering, all algorithms fully multi-threaded
- Rolling shutter correction
- [Video editor plugins](https://github.com/gyroflow/gyroflow-plugins) (Adobe Premiere/Ae, DaVinci Resolve, Final Cut Pro and more), allowing you to apply stabilization directly in a video editor without transcoding
- Supports full Sony metadata (recording params, automatic lens, support for IBIS, OIS, EIS - you can have IBIS enabled in camera and still apply Gyroflow on top)
- Supports already stabilized GoPro videos (captured with Hypersmooth enabled) (Hero 8 and up)
- Supports and renders 10-bit videos (up to 16-bit 4:4:4:4 for regular codecs and 32-bit float for OpenEXR - working directly on YUV data to maintain maximum quality)
- Customizable lens correction strength
- Render queue
- Keyframes
- Ability to create custom settings presets
- Visual chart with gyro data (displays gyro, accelerometer, magnetometer, and quaternions, including smoothed quaternions)
- Supports underwater footage (corrects underwater distortions)
- Modern responsive user interface with Dark and Light theme
- Adaptive zoom (dynamic cropping)
- Zoom limit
- Supports image sequences (PNG, OpenEXR, CinemaDNG)
- Based on [telemetry-parser](https://github.com/AdrianEddy/telemetry-parser) - supports all gyro sources out of the box
- Gyro low pass filter, arbitrary rotation (pitch, roll, yaw angles) and orientation
- Multiple gyro integration methods for orientation determination
- Multiple video 