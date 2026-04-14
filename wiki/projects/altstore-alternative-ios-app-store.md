# AltStore: Alternative iOS App Store

> AltStore is an open-source alternative app store for iOS that enables sideloading apps without jailbreaking. It uses a companion macOS app (AltServer) to install and refresh apps over WiFi, leveraging Apple IDs for certificate-based resigning. Notable for its user-friendly approach to sideloading and active development since 2019.  
> Last updated: 2026-04-14

## Overview
**Repository Info**  
- **Stars**: 13,762  
- **Forks**: 1,266  
- **Language**: Swift  
- **License**: GNU Affero General Public License v3.0  
- **Created**: 2019-05-10  
- **Open Issues**: 654  

**Core Functionality**  
AltStore allows users to sideload `.ipa` apps onto non-jailbroken iOS devices by resigning them with the user’s Apple ID. It pairs with **AltServer** (a macOS app) to install apps via WiFi and automatically refreshes them to prevent expiration. Initially developed to distribute the creator’s apps (e.g., Delta emulator), it now aims to support third-party app distribution.

**Key Components**  
- **AltStore (iOS)**: Handles app downloads, updates, and background refreshes using frameworks like Core Data and Network.framework.  
- **AltServer (macOS)**: Simplifies app installation and device communication.  
- **AltKit/AltSign/Roxas**: Shared/internal frameworks for cross-platform logic, Apple server communication, and iOS development utilities.  

**Requirements**  
- **iOS**: 14.0+  
- **macOS**: 11.0+  
- **Development**: Xcode 15, Swift 5.9  

**Compilation**  
1. Clone the repo and initialize submodules.  
2. Configure `Signing & Capabilities` in Xcode with your Apple ID.  
3. Set `ALTDeviceID` (device UDID) and `ALTServerID` in `Info.plist` for AltStore.  

## Key Points
- Installs apps over WiFi without jailbreaking.  
- Resigns apps using user Apple IDs to avoid expiration.  
- Modular architecture with shared frameworks (AltKit, AltSign).  
- Open-source and community-contributed, under AGPLv3.  

## Sources
- [GitHub](https://github.com/altstoreio/AltStore)  
- [원본](raw/ingest/projects/2026-04-14-altstore-alternative-ios-app-store.md)