<!-- GitHub Trending: Swift | 13,762 stars | +3 today -->

# altstoreio/AltStore

> AltStore is an alternative app store for non-jailbroken iOS devices.

## Repository Info
- **URL**: https://github.com/altstoreio/AltStore
- **Stars**: 13,762
- **Forks**: 1,266
- **Language**: Swift
- **License**: GNU Affero General Public License v3.0
- **Created**: 2019-05-10
- **Updated**: 2026-04-14
- **Topics**: N/A
- **Open Issues**: 654

## README (excerpt)
# AltStore

> AltStore is an alternative app store for non-jailbroken iOS devices. 

[![Swift Version](https://img.shields.io/badge/swift-5.0-orange.svg)](https://swift.org/)
[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

AltStore is an iOS application that allows you to sideload other apps (.ipa files) onto your iOS device with just your Apple ID. AltStore resigns apps with your personal development certificate and sends them to a desktop app, AltServer, which installs the resigned apps back to your device using iTunes WiFi sync. To prevent apps from expiring, AltStore will also periodically refresh your apps in the background when on the same WiFi as AltServer.

For the initial release, I focused on building a solid foundation for distributing my own apps — primarily Delta, [my all-in-one emulator for iOS](https://github.com/rileytestut/Delta). Now that Delta has been released, however, I'm beginning work on adding support for *anyone* to list and distribute their apps through AltStore (contributions welcome! 🙂).

## Features
- Installs apps over WiFi using AltServer
- Resigns and installs any app with your Apple ID
- Refreshes apps periodically in the background to prevent them from expiring (when on same WiFi as AltServer)
- Handles app updates directly through AltStore 

## Minimum Project Requirements
- Xcode 15
- Swift 5.9
- iOS 14.0 (AltStore)
- macOS 11.0 (AltServer)

## Project Overview

### AltStore
AltStore is a just regular, sandboxed iOS application. The AltStore app target contains the vast majority of AltStore's functionality, including all the logic for downloading and updating apps through AltStore. AltStore makes heavy use of standard iOS frameworks and technologies most iOS developers are familiar with, such as:
* Core Data
* Storyboards/Nibs
* Auto Layout
* Background App Refresh
* Network.framework (new in iOS 12)

### AltServer
AltServer is also just a regular, sandboxed macOS application. AltServer is significantly less complex than AltStore though, and for that reason consists of only a handful of files.

### AltKit
AltKit is a shared framework that includes common code between AltStore and AltServer.

### AltSign
AltSign is my internal framework used by both AltStore and AltServer to communicate with Apple's servers and resign apps. For more info, check the [AltSign repo](https://github.com/rileytestut/altsign).

### Roxas
Roxas is my internal framework used across all my iOS projects, developed to simplify a variety of common tasks used in iOS development. For more info, check the [Roxas repo](https://github.com/rileytestut/roxas).

## Compilation Instructions
AltStore and AltServer are both fairly straightforward to compile and run if you're already an iOS or macOS developer. To compile AltStore and/or AltServer:

1. Clone the repository 
	``` 
	git clone https://github.com/rileytestut/AltStore.git
	```
2. Update submodules: 
	```
	cd AltStore 
	git submodule update --init --recursive
	```
3. Open `AltStore.xcworkspace` and select the AltStore project in the project navigator. On the `Signing & Capabilities` tab, change the team from `Yvette Testut` to your own account.
4. **(AltStore only)** Change the value for `ALTDeviceID` in the Info.plist to your device's UDID. Normally, AltServer embeds the device's UDID in AltStore's Info.plist during installation. When running through Xcode you'll need to set the value yourself or else AltStore won't resign (or even install) apps for the proper device.
5. **(AltStore only)** Change the value for `ALTServerID` in the Info.plist to your AltServer's serverID. This is embedded by AltServer during installation to help AltStore distinguish between multiple AltServers on the same network, and you can find this by using a Bonjour browsing application and noting the serverID