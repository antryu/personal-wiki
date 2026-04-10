# Sentry Cocoa SDK

> The official Sentry SDK for Apple platforms, enabling crash reporting and error monitoring across iOS, tvOS, macOS, watchOS, iPadOS, and visionOS. Notable for its cross-platform support and active development since 2016.  
> Last updated: 2026-04-10

## Overview
The **Sentry Cocoa SDK** is an open-source crash reporting library for Apple ecosystems, providing real-time error tracking and performance monitoring. Key details include:

- **Repository**: [GitHub](https://github.com/getsentry/sentry-cocoa) (1,046 ⭐, 387 forks)
- **Languages**: Swift (primary), Objective-C
- **License**: MIT
- **Supported Platforms**: iOS, tvOS, macOS, watchOS, iPadOS, visionOS
- **Current Development**:  
  - `main` branch: Upcoming **v9** (breaking changes)  
  - Stable release: **v8** (via [`v8.x` branch](https://github.com/getsentry/sentry-cocoa/tree/v8.x))

### Installation
- **Recommended**: Swift Package Manager (SPM) or pre-built XCFrameworks from [GitHub Releases](https://github.com/getsentry/sentry-cocoa/releases)
- **Deprecated**: CocoaPods (no updates post-June 2026)

### Initialization Example
**Swift**:
```swift
import Sentry
SentrySDK.start { options in
    options.dsn = "__PUBLIC_DSN__"
    options.debug = true
}
```

**Objective-C**:
```objc
@import Sentry;
[SentrySDK startWithConfigureOptions:^(SentryOptions *options) {
    options.dsn = @"___PUBLIC_DSN___";
    options.debug = @YES;
}];
```

## Key Points
- Supports **six Apple platforms** with limited symbolication for watchOS/visionOS
- Actively maintained since **2016** with 353 open issues
- Migration required from CocoaPods to SPM/XCFrameworks
- Dual release branches: unstable `main` (v9) and stable `v8.x`

## Sources
- [GitHub](https://github.com/getsentry/sentry-cocoa)
- [원본](raw/ingest/tech/2026-04-10-sentry-cocoa-sdk.md)