<!-- GitHub Trending: Swift | 282 stars | +7 today -->

# apple/swift-temporal-sdk

> Swift SDK for Temporal

## Repository Info
- **URL**: https://github.com/apple/swift-temporal-sdk
- **Stars**: 282
- **Forks**: 21
- **Language**: Swift
- **License**: MIT License
- **Created**: 2025-09-26
- **Updated**: 2026-05-01
- **Topics**: N/A
- **Open Issues**: 16

## README (excerpt)
# Temporal Swift SDK

[![](https://img.shields.io/badge/docc-read_documentation-blue)](https://swiftpackageindex.com/apple/swift-temporal-sdk/documentation)
[![](https://img.shields.io/github/v/release/apple/swift-temporal-sdk)](https://github.com/apple/swift-temporal-sdk/releases)
[![](https://img.shields.io/endpoint?url=https%3A%2F%2Fswiftpackageindex.com%2Fapi%2Fpackages%2Fapple%2Fswift-temporal-sdk%2Fbadge%3Ftype%3Dswift-versions)](https://swiftpackageindex.com/apple/swift-temporal-sdk)

[Temporal](https://temporal.io/) is a distributed, scalable, durable, and highly
available orchestration engine used to execute asynchronous, long-running
business logic in a scalable and resilient way.

- 🚀 Swift package for authoring Temporal workflows and activities
- 📦 Compatible with Swift Package Manager
- 📱 Supports Linux (including the static SDK), macOS, iOS 
- 🔧 Built with Swift 6.2+ and Xcode 26+

🔗 Jump to:
- 📖 [Overview](#-overview)
- ⚙️ [Use Cases](#%EF%B8%8F-use-cases)
- 🏁 [Getting Started](#-getting-started)
- 📘 [Documentation](#-documentation)
- 🧰 [Release Info](#-release-info)
- 🛠️ [Support](#%EF%B8%8F-support)

## 📖 Overview

The Temporal Swift SDK provides a package for building distributed, durable
workflows and activities using Swift's modern concurrency features. Temporal
enables you to build reliable applications that recover from failures, scale
dynamically, and maintain long-running business processes with confidence.

**Key Features:**
- 🔄 **Durable Workflows**: Build fault-tolerant workflows that survive
  infrastructure failures
- 🏗️ **Scalable Architecture**: Distribute workflow execution across multiple
  workers
- ⚡ **Swift Concurrency**: Native integration with Swift Structured Concurrency
- 🎯 **Type Safety**: Compile-time type checking for workflow and activity
  definitions, with struct-based workflows providing additional safety guarantees
  (queries can't mutate state, validators can't mutate state)
- 📊 **Observability**: Built-in support for logging, metrics and tracing
- 🔧 **Macro-based APIs**: Simple `@Workflow` and `@Activity` macros to avoid
  boilerplate
- 🧪 **Testing Support**: Easily test your workflows and activities

## ⚙️ Use Cases

The Temporal Swift SDK excels in scenarios requiring reliable, long-running
business processes such as:

**🛒 E-commerce & Payment Processing**
- Order fulfillment workflows with inventory, payment, and shipping coordination
- Multi-step payment processing with automatic retry and rollback capabilities
- Subscription billing and recurring payment management

**🔄 Data Processing & ETL**
- Large-scale data transformation pipelines with fault tolerance
- Event-driven data processing with guaranteed delivery
- Batch processing jobs with progress tracking and resumption

**🏢 Business Process Automation**
- Approval workflows with human-in-the-loop interactions
- Multi-system integration and orchestration
- Document processing and compliance workflows

**📊 Monitoring & Operations**
- Health check orchestration across distributed systems
- Automated incident response and remediation
- Scheduled maintenance and cleanup tasks

## 🏁 Getting Started

### Prerequisites

- Swift version: Swift 6.2+

To install/upgrade Swift, see https://www.swift.org/install/

### Adding as a dependency

To use the Swift Temporal SDK in your Swift project, add it as a dependency in
your `Package.swift` file:

```swift
dependencies: [
    .package(url: "https://github.com/apple/swift-temporal-sdk.git", .upToNextMinor(from: "0.6.0"))
]
```

### Running the project

1. **Clone the repository**
   ```bash
   git clone git@github.com:apple/swift-temporal-sdk.git
   ```

2. **Build the package**
   ```bash
   swift build
   ```

3. **Run tests**
   ```bash
   swift test
   ```

4. **Run an example**
   ```bash
   # Install Temporal CLI from https://temporal.io/setup/install-temporal-cli
   temporal server start-dev
   cd Examples/Greeting
   swift run GreetingExample
   ```

###