<!-- GitHub Trending: Swift | 1,661 stars | +6 today -->

# StephenDev0/StikDebug

> An on-device debugger/JIT enabler for iOS versions 17.4+, powered by idevice.

## Repository Info
- **URL**: https://github.com/StephenDev0/StikDebug
- **Stars**: 1,661
- **Forks**: 164
- **Language**: Swift
- **License**: GNU Affero General Public License v3.0
- **Created**: 2025-03-27
- **Updated**: 2026-04-20
- **Topics**: debugger, idevice, internal-apps, ios, jit, just-in-time, stikdebug, stikjit, swiftui
- **Open Issues**: 5

## README (excerpt)
<div align="center">
   <img width="217" height="217" src="/assets/StikJIT.png" alt="Logo">
</div>

<div align="center">
  <h1><b>StikDebug</b></h1>
  <p><i>An on-device debugger/JIT enabler for iOS versions 17.4+ powered by <a href="https://github.com/jkcoxson/idevice">idevice</a>.</i></p>
</div>

<h6 align="center">
  <a href="https://discord.gg/ZnNcrRT3M8">
    <img src="https://img.shields.io/badge/Discord-join%20us-7289DA?logo=discord&logoColor=white&style=for-the-badge&labelColor=23272A" />
  </a>
  <a href="https://github.com/StephenDev0/StikDebug/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/StephenDev0/StikDebug?label=License&color=5865F2&style=for-the-badge&labelColor=23272A" />
  </a>
  <a href="https://github.com/StephenDev0/StikDebug/stargazers">
    <img src="https://img.shields.io/github/stars/StephenDev0/StikDebug?label=Stars&color=FEE75C&style=for-the-badge&labelColor=23272A" />
  </a>
  <a href="https://github.com/StephenDev0/StikDebug/releases">
    <img src="https://img.shields.io/github/v/release/StephenDev0/StikDebug?label=Latest&color=00BFFF&style=for-the-badge&labelColor=23272A" />
  </a>
  <br />
</h6>

## Features
- **JIT:** Enable Just In Time compilation for sideloaded apps that have the `get-task-allow` entitlement.
- **App Launching:** Launch every app installed on your device.
- **Console:** Live app and system logs.
- **Scripts:** Manage automation scripts (mainly used for iOS 26 JIT). 
- **App Expiry:** See when apps will expire and install/remove profiles.
- **Device Info:** View detailed device metadata.
- **Processes:** Inspect running apps/processes and terminate them.
- **Location Simulator:** Simulate the GPS location of your device.

## Download
> [!NOTE]
> **Notice:** StikDebug is no longer available on the App Store. Please use the official download methods below.

<div align="center" style="display: flex; justify-content: center; align-items: center; gap: 16px; flex-wrap: wrap;">
   <a href="https://stikstore.app/altdirect/?url=https://stikdebug.xyz/index.json" target="_blank">
     <img src="https://github.com/stikstore/altdirect/blob/main/assets/png/AltSource_Blue.png" alt="Add AltSource" width="200">
   </a>
   <a href="https://github.com/StephenDev0/StikDebug/releases/download/3.1.2/StikDebug-3.1.2.ipa" target="_blank">
     <img src="https://github.com/stikstore/altdirect/blob/main/assets/png/Download_Blue.png" alt="Download .ipa" width="200">
   </a>
</div>

## Compatibility

| iOS Version              | Status               | Notes                                                                 |
|--------------------------|----------------------|-----------------------------------------------------------------------|
| 1.0 – 17.3.X             | Not supported        | Uses Different Connection Protocols                                   |
| 17.4 – 18.x              | Fully supported      | Stable                                                                |
| 26.0+              | Supported            | Limited App Availability (Developers need to update their apps to work.) |

## How to Enable JIT

StikDebug enables **JIT** for sideloaded apps on iOS 17.4+ without needing a computer after the initial pairing setup.

### Requirements
- StikDebug installed (via AltSource, direct .ipa, or self-built)
- A valid **pairing file** (.plist / .mobiledevicepairing) for your device
- SideStore / AltStore / similar sideload tool (for app refreshing)
- A loopback VPN such as [LocalDevVPN](https://apps.apple.com/us/app/localdevvpn/id6755608044)

### Steps
1. **Obtain a pairing file**  
   - Detailed guide: [Pairing File Instructions](https://github.com/StephenDev0/StikDebug-Guide/blob/main/pairing_file.md) (or ask in Discord).

2. **Set up VPN**  
   - Launch LocalDevVPN and enable the VPN.

4. **Enable JIT for an app**  
   - Launch StikDebug and tapp the `Enable JIT` button.
   - Select your sideloaded app from the list in StikDebug.  

**Troubleshooting**  
-