# Swift Logging API

> A unified, performant, and ergonomic logging API for Swift, developed by Apple and widely adopted across the Swift ecosystem.  
> Last updated: 2026-04-14

## Overview

### Repository Info
- **URL**: [https://github.com/apple/swift-log](https://github.com/apple/swift-log)
- **Stars**: 3,993
- **Forks**: 335
- **Language**: Swift
- **License**: [Apache License 2.0](https://github.com/apple/swift-log/blob/main/LICENSE.txt)
- **Created**: 2019-02-11
- **Updated**: 2026-04-14
- **Topics**: `logging`, `swift-server`
- **Open Issues**: 35

### README Highlights
- **Documentation and tutorials**: [Swift Package Index](https://swiftpackageindex.com/apple/swift-log)
- **Contributions**: Guidelines in [CONTRIBUTING.md](https://github.com/apple/swift-log/blob/main/CONTRIBUTING.md)
- **License**: Apache 2.0 (see [LICENSE.txt](https://github.com/apple/swift-log/blob/main/LICENSE.txt))
- **Security**: Report issues via [SECURITY.md](https://github.com/apple/swift-log/blob/main/SECURITY.md)
- **Logging Backends**: SwiftLog is an API package; community-maintained backends are available (search [Swift Package Index](https://swiftpackageindex.com/search?query=swift-log) for implementations).

### Quick Start
Add SwiftLog to your Swift Package:
```swift
// swift-tools-version: 6.1
import PackageDescription

let package = Package(
    name: "YourApp",
    dependencies: [
        .package(url: "https://github.com/apple/swift-log", from: "1.6.0")
    ],
    targets: [
        .target(
            name: "YourApp",
            dependencies: [
                .product(name: "Logging", package: "swift-log")
            ]
        )
    ]
)
```

Basic usage example:
```swift
import Logging

// Create a logger
let logger = Logger(label: "com.example.YourApp")

// Log at different levels
logger.info("Application started")
logger.warning("This is a warning")
logger.error("Something went wrong", metadata: ["error": "\(error)"])

// Add metadata for context
var requestLogger = logger
requestLogger[metadataKey: "request-id"] = "\(UUID())"
requestLogger.info("Processing request")
```

## Key Points
- Provides a **unified logging API** for Swift libraries and applications.
- Supports **customizable logging backends** via community implementations.
- Designed for **performance** and **ergonomics** in production environments.

## Sources
- [GitHub](https://github.com/apple/swift-log)
- [원본](raw/ingest/tech/2026-04-14-swift-logging-api.md)