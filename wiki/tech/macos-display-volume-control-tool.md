# macOS Display & Volume Control Tool

> A native macOS app to control external display brightness, volume, and contrast using keyboard shortcuts or menu bar sliders, with support for DDC, Apple protocols, and software dimming. Notable for its seamless integration with native macOS features like ambient light sensor synchronization and custom shortcut support.  
> Last updated: 2026-04-15

## Overview  
**MonitorControl** is a macOS utility designed to manage display settings (brightness, contrast, volume) and system volume for external and Apple displays. It leverages protocols like DDC, gamma tables, and shade control to enable precise adjustments, while replicating macOS’s native on-screen displays (OSDs) for brightness and volume changes. Key features include:  

- **Repository Info**:  
  - **Stars**: 32,954 | **Forks**: 950 | **Language**: Swift | **License**: MIT  
  - **Created**: 2017-09-16 | **Last Update**: 2026-04-15 | **Open Issues**: 19  
  - **Topics**: `ddc`, `macos`, `brightness`, `volume`, `external-monitor`, `swift`  

- **Functionality**:  
  - Supports hardware/software dimming, ambient light sensor synchronization, and AirPlay/Sidecar display control.  
  - Uses native Apple keyboard shortcuts (e.g., brightness keys) and allows custom shortcuts.  
  - Advanced settings enable XDR/HDR brightness scaling (via [BetterDisplay](https://github.com/waydabber/BetterDisplay)).  

- **Installation**:  
  - Download `.dmg` from [Releases](https://github.com/MonitorControl/MonitorControl/releases) or install via Homebrew:  
    ```shell  
    brew install --cask monitorcontrol  
    ```  
  - Requires accessibility permissions in macOS System Settings for full functionality.  

- **Notable Notes**:  
  - **Warning**: v4.2.0 may crash on macOS 15 Sequoia/Tahoe. Manual upgrade to the latest version is recommended.  

## Key Points  
- Native macOS OSD integration for brightness/volume adjustments.  
- Multi-protocol support (DDC, gamma, shade control) for compatibility with Apple and third-party displays.  
- Customizable shortcuts and advanced settings for hardware-specific tuning.  

## Sources  
- [GitHub](https://github.com/MonitorControl/MonitorControl)  
- [원본](raw/ingest/tech/2026-04-15-macos-display-volume-control-tool.md)