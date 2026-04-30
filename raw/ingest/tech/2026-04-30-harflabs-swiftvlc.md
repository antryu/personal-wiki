<!-- GitHub Trending: Swift | 401 stars | +89 today -->

# harflabs/SwiftVLC

> A modern Swift wrapper around libVLC for iOS, macOS, tvOS, and Mac Catalyst.

## Repository Info
- **URL**: https://github.com/harflabs/SwiftVLC
- **Stars**: 401
- **Forks**: 17
- **Language**: Swift
- **License**: MIT License
- **Created**: 2026-02-28
- **Updated**: 2026-04-30
- **Topics**: ios, maccatalyst, macos, spm, swift, swift6, tvos, video, vlc
- **Open Issues**: 5

## README (excerpt)
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/harflabs/SwiftVLC/main/Assets/logo-dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/harflabs/SwiftVLC/main/Assets/logo-light.svg">
  <img alt="SwiftVLC" src="https://raw.githubusercontent.com/harflabs/SwiftVLC/main/Assets/logo-light.svg" width="260">
</picture>

[![Tests](https://github.com/harflabs/SwiftVLC/actions/workflows/test.yml/badge.svg)](https://github.com/harflabs/SwiftVLC/actions/workflows/test.yml)
[![Swift versions](https://img.shields.io/endpoint?url=https%3A%2F%2Fswiftpackageindex.com%2Fapi%2Fpackages%2Fharflabs%2FSwiftVLC%2Fbadge%3Ftype%3Dswift-versions)](https://swiftpackageindex.com/harflabs/SwiftVLC)
[![Platforms](https://img.shields.io/endpoint?url=https%3A%2F%2Fswiftpackageindex.com%2Fapi%2Fpackages%2Fharflabs%2FSwiftVLC%2Fbadge%3Ftype%3Dplatforms)](https://swiftpackageindex.com/harflabs/SwiftVLC)

A Swift wrapper around [libVLC](https://www.videolan.org/vlc/libvlc.html) for iOS, macOS, tvOS, and Mac Catalyst.

## Why?

Apple's AVFoundation covers a narrow slice of the media landscape. It cannot play MKV, FLAC, or most subtitle formats, and it does not support network protocols like RTSP, SMB, or UPnP. Codec support is limited to what Apple ships. Any app that needs to reach beyond MP4 and HLS eventually runs out of runway.

[VLC](https://www.videolan.org/) plays virtually everything, and its engine, **libVLC**, is available as a C library you can embed in any app.

The existing iOS wrapper, [VLCKit](https://code.videolan.org/videolan/VLCKit), is written in Objective-C. It uses delegates, KVO, `NSNotificationCenter`, and manual thread management, which is a faithful reflection of the era it was designed in.

**SwiftVLC** wraps libVLC 4.0 directly in Swift, with no Objective-C layer in between. It is built for `@Observable`, `async/await`, and `VideoView(player)`.

## SwiftVLC vs VLCKit

| | SwiftVLC | VLCKit |
|---|---|---|
| **Language** | Swift 6 | Objective-C |
| **Bindings** | Direct C → Swift | C → Objective-C → Swift bridging |
| **State management** | `@Observable`, drives SwiftUI directly | KVO, `NSNotificationCenter`, and delegates |
| **Concurrency** | `@MainActor`, `Sendable`, `async/await` | Manual thread dispatch, no isolation |
| **Video rendering** | `VideoView(player)` | Manual `UIView` setup plus drawable configuration |
| **Errors** | `throws(VLCError)`, typed and exhaustive | `NSError` codes |
| **Events** | `AsyncStream<PlayerEvent>` with multiple consumers | `NSNotificationCenter` |
| **libVLC version** | 4.0 | 3.x |
| **PiP** | Built in via the vmem pipeline | Not included |
| **Swift 6 safe** | Yes, with strict concurrency | No |

## Features

- `@Observable` player: state, current time, duration, tracks, and volume drive SwiftUI directly.
- `VideoView(player)` handles the rendering lifecycle in a single SwiftUI view.
- Typed errors via `throws(VLCError)` instead of error codes.
- Asynchronous media parsing: `try await media.parse()` with cancellation support.
- 10-band equalizer with libVLC's built-in presets.
- A-B looping, playback rate control, and subtitle and audio delay.
- Picture-in-Picture with full playback controls.
- Network discovery for LAN, SMB, UPnP media sources, and Chromecast and AirPlay renderers.
- 360° video with full viewpoint control over yaw, pitch, roll, and field of view.
- Asynchronous thumbnail generation at arbitrary timestamps.
- `MediaListPlayer` for playlist playback with loop and repeat modes.

## Requirements

- Swift 6.3+ / Xcode 26+
- iOS 18+ / macOS 15+ / tvOS 18+ / Mac Catalyst 18+

## Installation

In Xcode, choose **File → Add Package Dependencies**, paste the repo
URL, and Xcode will pick up the latest release automatically:

```
https://github.com/harflabs/SwiftVLC.git
```

From a `Package.swift` manifest, add a dependency and pin to the
current release. The version string lives on the
[releas