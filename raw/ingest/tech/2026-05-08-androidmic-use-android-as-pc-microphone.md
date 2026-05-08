<!-- GitHub Trending: Rust | 1,192 stars | +7 today -->

# teamclouday/AndroidMic

> Use your Android phone as a microphone for your PC

## Repository Info
- **URL**: https://github.com/teamclouday/AndroidMic
- **Stars**: 1,192
- **Forks**: 73
- **Language**: Rust
- **License**: GNU General Public License v3.0
- **Created**: 2021-05-24
- **Updated**: 2026-05-08
- **Topics**: android-application, audio-streaming, microphone, rnnoise, tcp-socket, udp-socket, usb-serial
- **Open Issues**: 53

## README (excerpt)
<p align="center">
  <img align="center" src="./Assets/app_icon.svg" alt="app icon" width="80px" />
  <h1 align="center" style="display: inline-block; margin-left: 12px; vertical-align: middle;">AndroidMic</h1>
</p>

<h3 align="center">Use your Android phone as a microphone for your PC</h3>

<!-- <a href="https://flathub.org/apps/io.github.teamclouday.AndroidMic"><img align=center height="40" src="https://flathub.org/assets/badges/flathub-badge-en.svg"  alt="Download on Flathub"/></a> -->
[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/teamclouday/AndroidMic.svg?logo=github&label=GitHub&cacheSeconds=3600)](https://github.com/teamclouday/AndroidMic/releases/latest)
[![F-Droid](https://img.shields.io/f-droid/v/io.github.teamclouday.AndroidMic?logo=f-droid&label=F-Droid&cacheSeconds=3600)](https://f-droid.org/packages/io.github.teamclouday.AndroidMic)

---

<p  style="text-align: center;">
  <img src="./Assets/pc_screenshot_main_dark.png" width="65%"  alt="main window pc"/>
  <img src="./Assets/android_screenshot_main_dark.png" width="25%"  alt="main window android"/>
</p>

## Features

- **Cross-platform**: Works on Linux, Windows, and macOS
- **Multiple connection options**: WiFi (TCP/UDP), USB Serial, and USB ADB
- **Audio processing**: Noise cancellation and audio wave visualization
- **Customizable audio settings**: Sample rate, channels, and bit depth

---

## ⚠️ Important Requirements

**This app requires a virtual audio cable device to work!**

AndroidMic streams audio from your phone to your PC, but your PC needs a way to recognize this audio stream as a microphone input. This is where virtual audio cables come in.

### Virtual Audio Cable Setup

**On Windows:**
- Install [Virtual Audio Cable (VAC)](https://vac.muzychenko.net/en/download.htm) or [VB Cable](https://vb-audio.com/Cable/) (both free options available)
- These tools create virtual audio devices on your system
- Once installed, you'll have a virtual output device (speaker/playback) and a virtual input device (microphone)
- AndroidMic plays audio to the virtual output, which is internally wired to the virtual input that your apps can use as a microphone

**On Linux:**
- Use PulseAudio or PipeWire to create virtual audio devices
- Example with PulseAudio:
  ```bash
  pactl load-module module-null-sink sink_name=virtual_mic
  pactl load-module module-remap-source master=virtual_mic.monitor source_name=virtual_mic_source
  ```

**On macOS:**
- Use [BlackHole](https://existential.audio/blackhole/) or similar virtual audio driver

---

## Setup Guide

### Step 1: Install Virtual Audio Cable

Follow the instructions above for your operating system to install a virtual audio cable solution. This step is **required** before proceeding.

### Step 2: PC Application Setup

1. **Download and install**
   - Get the latest release from the [releases page](https://github.com/teamclouday/AndroidMic/releases/latest)
   - Install and launch the app

   > **macOS users**: You may need to run this command to allow the app to run:
   > ```sh
   > xattr -c /Applications/AndroidMic.app
   > ```
   > See [this discussion](https://discussions.apple.com/thread/253714860?sortBy=best) for more details.

2. **Select output audio device**
   - Choose the **virtual output device** (e.g., "VB Cable Input" or "Virtual Audio Cable") from the dropdown
   - This is the playback device that's wired to your virtual microphone
   - Do NOT select your regular speakers or headphones

3. **Choose connection method**

   - **TCP/UDP (WiFi)**:
     - Connect your phone and PC to the same network
     - No additional setup required

   - **USB ADB**:
     - Install [Android Debug Bridge (ADB)](https://developer.android.com/tools/adb)
     - Enable USB debugging on your phone (Developer Options)
     - Connect phone via USB cable

   - **USB Serial**:
     - Connect phone via USB cable
     - Set phone's USB mode to "Charging only"
     - **Windows**:
       - Close Android Studi