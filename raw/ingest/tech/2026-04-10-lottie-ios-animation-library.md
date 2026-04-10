<!-- GitHub Trending: Swift | 26,728 stars | +3 today -->

# airbnb/lottie-ios

> An iOS library to natively render After Effects vector animations

## Repository Info
- **URL**: https://github.com/airbnb/lottie-ios
- **Stars**: 26,727
- **Forks**: 3,830
- **Language**: Swift
- **License**: Apache License 2.0
- **Created**: 2016-10-06
- **Updated**: 2026-04-10
- **Topics**: animation, bodymovin, custom-transitions, ios, ios-animation, ios-transition, keyframes, swift, transition-animation
- **Open Issues**: 47

## README (excerpt)
# Lottie for iOS
 [![Version](https://img.shields.io/cocoapods/v/lottie-ios.svg?style=flat)](https://cocoapods.org/pods/lottie-ios) [![Carthage Compatible](https://img.shields.io/badge/Carthage-compatible-4BC51D.svg?style=flat)](https://github.com/Carthage/Carthage) [![SwiftPM](https://img.shields.io/badge/SPM-supported-DE5C43.svg?style=flat)](https://swift.org/package-manager/) [![License](https://img.shields.io/cocoapods/l/lottie-ios.svg?style=flat)](https://cocoapods.org/pods/lottie-ios) [![Platform](https://img.shields.io/endpoint?url=https%3A%2F%2Fswiftpackageindex.com%2Fapi%2Fpackages%2Fairbnb%2Flottie-ios%2Fbadge%3Ftype%3Dplatforms)](https://swiftpackageindex.com/airbnb/lottie-ios) [![Swift Versions](https://img.shields.io/endpoint?url=https%3A%2F%2Fswiftpackageindex.com%2Fapi%2Fpackages%2Fairbnb%2Flottie-ios%2Fbadge%3Ftype%3Dswift-versions)](https://swiftpackageindex.com/airbnb/lottie-ios)

**View documentation, FAQ, help, examples, and more at [airbnb.io/lottie](https://airbnb.io/lottie/)**

Lottie is a cross-platform library for iOS, macOS, tvOS, visionOS, [Android](https://github.com/airbnb/lottie-android), and [Web](https://github.com/airbnb/lottie-web) that natively renders vector-based animations and art in realtime with minimal code.

Lottie loads and renders animations and vectors exported in the bodymovin JSON format. Bodymovin JSON can be created and exported from After Effects with [bodymovin](https://github.com/bodymovin/bodymovin), Sketch with [Lottie Sketch Export](https://github.com/buba447/Lottie-Sketch-Export), and from [Haiku](https://www.haikuanimator.com).

Designers can create **and ship** beautiful animations without an engineer painstakingly recreating them by hand.
Since the animations are backed by JSON, they are extremely small in size but can be large in complexity!
Animations can be played, resized, looped, sped up, slowed down, reversed, and even interactively scrubbed.
Lottie can play or loop just a portion of the animation as well, the possibilities are endless!
Animations can even be ***changed at runtime*** in various ways! Change the color, position, or any keyframable value!

Here is just a small sampling of the power of Lottie

![Example1](_Gifs/Examples1.gif)
![Example2](_Gifs/Examples2.gif)

<img src="_Gifs/Community 2_3.gif" />

![Example3](_Gifs/Examples3.gif)

![Abcs](_Gifs/Examples4.gif)

## Installing Lottie
Lottie supports [Swift Package Manager](https://www.swift.org/package-manager/), [CocoaPods](https://cocoapods.org/), and [Carthage](https://github.com/Carthage/Carthage) (Both dynamic and static).

### Github Repo

You can pull the [Lottie Github Repo](https://github.com/airbnb/lottie-ios/) and include the `Lottie.xcodeproj` to build a dynamic or static library.

### Swift Package Manager

To install Lottie using [Swift Package Manager](https://github.com/swiftlang/swift-package-manager) you can follow the [tutorial published by Apple](https://developer.apple.com/documentation/xcode/adding_package_dependencies_to_your_app) using the URL for the Lottie repo with the current version:

1. In Xcode, select “File” → “Add Packages...”
1. Enter https://github.com/airbnb/lottie-spm.git

or you can add the following dependency to your `Package.swift`:

```swift
.package(url: "https://github.com/airbnb/lottie-spm.git", from: "4.5.2")
```

When using Swift Package Manager we recommend using the [lottie-spm](https://github.com/airbnb/lottie-spm) repo instead of the main lottie-ios repo.  The main git repository for [lottie-ios](https://github.com/airbnb/lottie-ios) is somewhat large (300+ MB), and Swift Package Manager always downloads the full repository with all git history. The [lottie-spm](https://github.com/airbnb/lottie-spm) repo is much smaller (less than 500kb), so can be downloaded much more quickly. 

Instead of downloading the full git history of Lottie and building it from source, the lottie-spm repo just contains a pointer to the precompiled XCFramework included in the [