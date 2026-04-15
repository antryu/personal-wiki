# Carbonyl: Terminal-Based Chromium Browser

> A fast, terminal-based Chromium browser that supports modern web standards and runs without a window server. Notable for its ability to render WebGL, WebGPU, and video directly in the terminal while idling at 0% CPU.  
> Last updated: 2026-04-15

## Overview
**Carbonyl** is a terminal-based browser built on Chromium, designed to run in console environments without requiring a graphical interface. It supports modern web technologies like WebGL, WebGPU, audio/video playback, and animations, while maintaining high performance (60 FPS) and low resource usage. The project originated as `html2svg` and now powers that tool as its runtime.

### Repository Info
- **Stars**: 18,464  
- **Forks**: 495  
- **Language**: Rust  
- **License**: BSD 3-Clause "New" or "Revised" License  
- **Created**: 2023-01-20  
- **Updated**: 2026-04-15  
- **Topics**: `browser`, `chromium`, `terminal`  
- **Open Issues**: 83  

### Installation
- **Docker**:  
  ```shell
  docker run --rm -ti fathyb/carbonyl https://youtube.com
  ```
- **npm**:  
  ```shell
  npm install --global carbonyl
  carbonyl https://github.com
  ```
- **Binaries**:  
  - macOS (amd64/arm64)  
  - Linux (amd64/arm64)  
  (Links: [Releases](https://github.com/fathyb/carbonyl/releases))

### Operating System Support
- Linux (Debian, Ubuntu, Arch)  
- macOS  
- Windows 11 (via WSL)  

### Key Comparisons
- **vs. Lynx**: Supports modern web standards, JavaScript, and media playback.  
- **vs. Browsh**: Lower resource usage, native terminal rendering, and faster performance.  

## Key Points
- Runs Chromium in terminal environments without a window server.  
- Supports WebGL, WebGPU, audio/video, and 60 FPS rendering.  
- Idles at 0% CPU and starts in under a second.  
- Works over SSH and in safe-mode consoles.  
- Built in Rust with a modular architecture (core + runtime).  

## Sources
- [GitHub](https://github.com/fathyb/carbonyl)
- [원본](raw/ingest/projects/2026-04-15-carbonyl-terminal-based-chromium-browser.md)