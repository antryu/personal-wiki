<!-- GitHub Trending: Swift | 19,525 stars | +0 today -->

# realm/SwiftLint

> A tool to enforce Swift style and conventions.

## Repository Info
- **URL**: https://github.com/realm/SwiftLint
- **Stars**: 19,526
- **Forks**: 2,293
- **Language**: Swift
- **License**: MIT License
- **Created**: 2015-05-16
- **Updated**: 2026-04-15
- **Topics**: code-quality, hacktoberfest, linter, linting, static-analysis, swift
- **Open Issues**: 483

## README (excerpt)
# SwiftLint

A tool to enforce Swift style and conventions, loosely based on the now
archived [GitHub Swift Style Guide](https://github.com/github/swift-style-guide).
SwiftLint enforces the style guide rules that are generally accepted by the
Swift community. These rules are well described in popular style guides like
[Kodeco's Swift Style Guide](https://github.com/kodecocodes/swift-style-guide).

SwiftLint rules are predominantly based on [SwiftSyntax](https://github.com/swiftlang/swift-syntax).
Some rules still hook into [Clang](http://clang.llvm.org) and
[SourceKit](http://www.jpsim.com/uncovering-sourcekit) to access type information.

[![Supported Swift Versions](https://img.shields.io/endpoint?url=https%3A%2F%2Fswiftpackageindex.com%2Fapi%2Fpackages%2Frealm%2FSwiftLint%2Fbadge%3Ftype%3Dswift-versions)](https://swiftpackageindex.com/realm/SwiftLint)
[![Supported Platforms](https://img.shields.io/endpoint?url=https%3A%2F%2Fswiftpackageindex.com%2Fapi%2Fpackages%2Frealm%2FSwiftLint%2Fbadge%3Ftype%3Dplatforms)](https://swiftpackageindex.com/realm/SwiftLint)
[![Buildkite Build Status](https://badge.buildkite.com/e2a5bc32c347e76e2793e4c5764a5f42bcd42bbe32f79c3a53.svg?branch=main)](https://buildkite.com/swiftlint/swiftlint)

![SwiftLint violations highlighted in the Xcode editor](https://raw.githubusercontent.com/realm/SwiftLint/main/assets/screenshot.png)

This project adheres to the
[Contributor Covenant Code of Conduct](https://realm.io/conduct).
By participating, you are expected to uphold this code.

> Switch Language:
> [中文](https://github.com/realm/SwiftLint/blob/main/README_CN.md),
> [한국어](https://github.com/realm/SwiftLint/blob/main/README_KR.md)

## Video Introduction

To get a high-level overview of SwiftLint, we encourage you to watch this
presentation recorded January 9th, 2017 by JP Simard (transcript provided):

[![Presentation](https://raw.githubusercontent.com/realm/SwiftLint/main/assets/presentation.svg)](https://youtu.be/9Z1nTMTejqU)

## Installation

### [Swift Package Manager](https://github.com/apple/swift-package-manager)

SwiftLint can be used as a [command plugin](#swift-package-command-plugin)
or a [build tool plugin](#build-tool-plugins).

Add

```swift
.package(url: "https://github.com/SimplyDanny/SwiftLintPlugins", from: "<version>")
```

to your `Package.swift` file to consume the latest release of SwiftLint
automatically or pin the dependency to a specific version:

```swift
.package(url: "https://github.com/SimplyDanny/SwiftLintPlugins", exact: "<version>")
```

Therein, replace `<version>` with the desired minimum or exact version.

> [!NOTE]
> Consuming the plugins directly from the SwiftLint repository comes
> with several drawbacks. To avoid them and reduce the overhead imposed, it's
> highly recommended to consume the plugins from the dedicated
> [SwiftLintPlugins repository](https://github.com/SimplyDanny/SwiftLintPlugins),
> even though plugins from the SwiftLint repository are also absolutely
> functional. If the plugins from SwiftLint are preferred, just use the URL
> `https://github.com/realm/SwiftLint` in the package declarations above.
>
> However, [SwiftLintPlugins](https://github.com/SimplyDanny/SwiftLintPlugins)
> facilitates plugin adoption massively. It lists some of the reasons that
> drive the plugins as provided by SwiftLint itself very troublesome. Since
> the plugin code and the releases are kept in sync, there is no difference
> in functionality between the two, but you spare yourself a lot of time and
> trouble using the dedicated plugins repository.
>
> This document assumes you're relying on SwiftLintPlugins.

### [Xcode Package Dependency](https://developer.apple.com/documentation/xcode/adding-package-dependencies-to-your-app)

Use the following link to add SwiftLint as a Package Dependency to an Xcode
project:

```bash
https://github.com/SimplyDanny/SwiftLintPlugins
```

### [Homebrew](http://brew.sh)

```bash
brew install swiftlint
```

### [CocoaPods](https://cocoapo