# Lottie iOS Animation Library

> Lottie is an open-source iOS library for natively rendering vector-based animations created in Adobe After Effects. It enables designers and developers to integrate complex animations into apps with minimal code, supporting real-time playback, resizing, looping, and runtime modifications.  
> Last updated: 2026-04-10

## Overview
**Lottie** is a cross-platform animation library developed by Airbnb, supporting iOS, macOS, tvOS, visionOS, Android, and Web. It renders animations exported in the **bodymovin JSON format**, which can be generated from tools like Adobe After Effects, Sketch, or Haiku. Key features include:

- **Real-time rendering**: Animations are displayed natively with high performance.
- **Runtime customization**: Adjust colors, positions, or keyframe values dynamically.
- **Compact file size**: JSON-based animations are lightweight despite their complexity.
- **Flexible playback**: Support for looping, scrubbing, speed adjustments, and partial animation playback.

### Repository Info
- **URL**: [GitHub](https://github.com/airbnb/lottie-ios)
- **Stars**: 26,727
- **Forks**: 3,830
- **Language**: Swift
- **License**: [Apache License 2.0](https://github.com/airbnb/lottie-ios/blob/master/LICENSE)
- **Created**: 2016-10-06
- **Updated**: 2026-04-10
- **Topics**: `animation`, `ios`, `swift`, `bodymovin`, `keyframes`, `custom-transitions`
- **Open Issues**: 47

### Installation
Lottie supports multiple dependency managers:
- **Swift Package Manager**: Use the optimized [lottie-spm](https://github.com/airbnb/lottie-spm) repo for faster downloads.
  ```swift
  .package(url: "https://github.com/airbnb/lottie-spm.git", from: "4.5.2")
  ```
- **CocoaPods**:  
  `pod 'lottie-ios'`
- **Carthage**:  
  `github "airbnb/lottie-ios"`

> Note: For SPM, the `lottie-spm` repo is recommended over the main `lottie-ios` repo to avoid downloading a large repository (300+ MB).

## Key Points
- Enables seamless integration of After Effects animations into iOS apps without manual recreation.
- Supports runtime modifications (e.g., color changes, speed adjustments).
- Cross-platform compatibility with Android and Web via sister projects.
- Reduces animation file sizes while maintaining visual complexity.

## Sources
- [GitHub](https://github.com/airbnb/lottie-ios)
- [원본](raw/ingest/tech/2026-04-10-lottie-ios-animation-library.md)