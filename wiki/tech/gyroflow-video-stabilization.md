# Gyroflow Video Stabilization

> Gyroflow is a powerful video stabilization tool that uses gyroscope and accelerometer data from modern cameras like GoPro, Sony, and Insta360 to precisely stabilize video footage. It supports GPU-accelerated processing, rolling shutter correction, and offers a variety of features including real-time preview, render queue, and video editor plugins. Its notable use in FPV (First-Person View) drone footage and advanced stabilization techniques has made it widely adopted by professionals and hobbyists alike.
> Last updated: 2026-05-16

## Overview
Gyroflow is an open-source software application designed to stabilize video footage by leveraging gyroscope and optionally accelerometer data from modern cameras. It supports a wide array of camera brands and models, including GoPro, Sony, Insta360, and more. The application is written in Rust and features GPU-accelerated processing, real-time previews, and a modern user interface. It also includes video editor plugins for Adobe Premiere, DaVinci Resolve, and Final Cut Pro.

### Repository Info
- **URL**: https://github.com/gyroflow/gyroflow
- **Stars**: 8,740
- **Forks**: 422
- **Language**: Rust
- **License**: GNU General Public License v3.0
- **Created**: 2021-11-11
- **Updated**: 2026-05-16
- **Topics**: fpv, gopro, gpu, gpu-computing, gyroscope, insta360, rolling-shutter-undistortion, rust, sony-alpha-cameras, stabilization, video, video-processing
- **Open Issues**: 92

### README (Excerpt)
Gyroflow uses motion data from a gyroscope and optionally an accelerometer to stabilize captured footage. Modern cameras such as GoPro, Sony, and Insta360 record this internal data, which Gyroflow uses for precise stabilization. Additionally, it can integrate data from external sources like Betaflight blackbox telemetry. It features GPU processing, real-time previews, rolling shutter correction, and advanced video editor integrations.

### Features
- Real-time preview and parameter adjustments
- GPU-accelerated processing with multi-threaded algorithms
- Rolling shutter correction for improved stabilization
- Video editor plugins for Adobe Premiere, DaVinci Resolve, Final Cut Pro, and more
- Full Sony metadata support including lens correction and in-camera stabilization integration
- Supports already stabilized GoPro videos (Hero 8 and above)
- 10-bit, 16-bit, and 32-bit float video output for high quality rendering
- Customizable lens correction strength and user presets
- Keyframe support and render queue
- Visual gyro data chart with quaternions and sensor data
- Underwater footage correction and adaptive zoom
- Image sequence support (PNG, OpenEXR, CinemaDNG)
- Gyro low pass filtering and orientation controls
- Multiple gyro integration methods for orientation calculation

## Key Points
- Uses gyroscope and accelerometer data for precise video stabilization
- GPU-accelerated processing with rolling shutter correction
- Supports a wide range of camera brands and formats including Sony, GoPro, and Insta360
- Offers video editor plugins for major editing software
- Open-source under the GPL v3.0 license with active community development

## Sources
- [GitHub](https://github.com/gyroflow/gyroflow)
- [원본](raw/ingest/tech/2026-05-16-gyroflow-video-stabilization.md)