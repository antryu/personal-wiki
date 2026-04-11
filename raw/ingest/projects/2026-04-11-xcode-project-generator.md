<!-- GitHub Trending: Swift | 8,324 stars | +7 today -->

# yonaskolb/XcodeGen

> A Swift command line tool for generating your Xcode project

## Repository Info
- **URL**: https://github.com/yonaskolb/XcodeGen
- **Stars**: 8,324
- **Forks**: 876
- **Language**: Swift
- **License**: MIT License
- **Created**: 2017-07-19
- **Updated**: 2026-04-11
- **Topics**: ci, cli, generator, specification, swift, xcode, xcodeproj, xcodeproject, yaml
- **Open Issues**: 383

## README (excerpt)
<p align="center">
<a href="https://github.com/yonaskolb/XcodeGen">
<img src="Assets/Logo_animated.gif" alt="XcodeGen" />
</a>
</p>
<p align="center">
  <a href="https://github.com/yonaskolb/XcodeGen/releases">
    <img src="https://img.shields.io/github/release/yonaskolb/xcodegen.svg"/>
  </a>
  <a href="https://swiftpackageindex.com/yonaskolb/XcodeGen">
    <img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fswiftpackageindex.com%2Fapi%2Fpackages%2Fyonaskolb%2FXcodeGen%2Fbadge%3Ftype%3Dplatforms" alt="Swift Package Manager Platforms" />
  </a>
  <a href="https://swiftpackageindex.com/yonaskolb/XcodeGen">
    <img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fswiftpackageindex.com%2Fapi%2Fpackages%2Fyonaskolb%2FXcodeGen%2Fbadge%3Ftype%3Dswift-versions" alt="Swift Versions" />
  </a>
  <a href="https://github.com/yonaskolb/XcodeGen/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/yonaskolb/XcodeGen.svg"/>
  </a>
</p>

# XcodeGen

XcodeGen is a command line tool written in Swift that generates your Xcode project using your folder structure and a project spec.

The project spec is a YAML or JSON file that defines your targets, configurations, schemes, custom build settings and many other options. All your source directories are automatically parsed and referenced appropriately while preserving your folder structure. Sensible defaults are used in many places, so you only need to customize what is needed. Very complex projects can also be defined using more advanced features.

- ✅ Generate projects on demand and remove your `.xcodeproj` from git, which means **no more merge conflicts**!
- ✅ Groups and files in Xcode are always **synced** to your directories on disk
- ✅ Easy **configuration** of projects which is human readable and git friendly
- ✅ Easily copy and paste **files and directories** without having to edit anything in Xcode
- ✅ Share build settings across multiple targets with **build setting groups**
- ✅ Automatically generate Schemes for **different environments** like test and production
- ✅ Easily **create new projects** with complicated setups on demand without messing around with Xcode
- ✅ Generate from anywhere including on **CI**
- ✅ Distribute your spec amongst multiple files for easy **sharing** and overriding
- ✅ Easily create **multi-platform** frameworks
- ✅ Integrate **Carthage** frameworks without any work

Given an example project spec:

```yaml
name: MyProject
include:
  - base_spec.yml
options:
  bundleIdPrefix: com.myapp
packages:
  Yams:
    url: https://github.com/jpsim/Yams
    from: 2.0.0
targets:
  MyApp:
    type: application
    platform: iOS
    deploymentTarget: "10.0"
    sources: [MyApp]
    settings:
      configs:
        debug:
          CUSTOM_BUILD_SETTING: my_debug_value
        release:
          CUSTOM_BUILD_SETTING: my_release_value
    dependencies:
      - target: MyFramework
      - carthage: Alamofire
      - framework: Vendor/MyFramework.framework
      - sdk: Contacts.framework
      - sdk: libc++.tbd
      - package: Yams
  MyFramework:
    type: framework
    platform: iOS
    sources: [MyFramework]
```
A project would be created with 2 connected targets, with all the required configurations and build settings. See the [Project Spec](Docs/ProjectSpec.md) documentation for all the options you can specify, and [Usage](Docs/Usage.md) for more general documentation.

## Installing

Make sure the latest stable (non-beta) version of Xcode is installed first.

### [Mint](https://github.com/yonaskolb/mint)
```sh
mint install yonaskolb/xcodegen
```

### Make

```shell
git clone https://github.com/yonaskolb/XcodeGen.git
cd XcodeGen
make install
```

### Homebrew

```shell
brew install xcodegen
```

### Swift Package Manager

**Use as CLI**

```shell
git clone https://github.com/yonaskolb/XcodeGen.git
cd XcodeGen
swift run xcodegen
```

**Use as dependency**

Add the following to your Package.swift file's dependencies:

```swift
.package(url: 