<!-- GitHub Trending: Swift | 8,442 stars | +1 today -->

# apple/swift-nio

> Event-driven network application framework for high performance protocol servers & clients, non-blocking.

## Repository Info
- **URL**: https://github.com/apple/swift-nio
- **Stars**: 8,442
- **Forks**: 743
- **Language**: Swift
- **License**: Apache License 2.0
- **Created**: 2018-02-06
- **Updated**: 2026-04-18
- **Topics**: asynchronous-io, event-driven, high-performance, networking, non-blocking, non-blocking-io, swift, swift-server, swift5, swiftnio
- **Open Issues**: 254

## README (excerpt)
[![sswg:graduated|104x20](https://img.shields.io/badge/sswg-graduated-green.svg)](https://github.com/swift-server/sswg/blob/main/process/incubation.md#graduated-level)

# SwiftNIO

SwiftNIO is a cross-platform asynchronous event-driven network application framework
for rapid development of maintainable high performance protocol servers & clients.

It's like [Netty](https://netty.io), but written for Swift.

### Repository organization

The SwiftNIO project is split across multiple repositories:

Repository | NIO 2
--- | ---
[https://github.com/apple/swift-nio][repo-nio] <br> SwiftNIO core | `from: "2.0.0"`
[https://github.com/apple/swift-nio-ssl][repo-nio-ssl] <br> TLS (SSL) support | `from: "2.0.0"`
[https://github.com/apple/swift-nio-http2][repo-nio-http2]<br> HTTP/2 support | `from: "1.0.0"`
[https://github.com/apple/swift-nio-extras][repo-nio-extras] <br>useful additions around SwiftNIO | `from: "1.0.0"`
[https://github.com/apple/swift-nio-transport-services][repo-nio-transport-services] <br> first-class support for macOS, iOS, tvOS, and watchOS | `from: "1.0.0"`
[https://github.com/apple/swift-nio-ssh][repo-nio-ssh] <br> SSH support | `.upToNextMinor(from: "0.2.0")`

Within this repository we have a number of products that provide different functionality. This package contains the following products:

- `NIO`. This is an umbrella module exporting `NIOCore`, `NIOEmbedded` and `NIOPosix`.
- `NIOCore`. This provides the core abstractions and types for using SwiftNIO (see ["Conceptual Overview"](#conceptual-overview) for more details). Most NIO extension projects that provide things like new [`EventLoop`s][el] and [`Channel`s][c] or new protocol implementations should only need to depend on `NIOCore`.
- `NIOPosix`. This provides the primary [`EventLoopGroup`], [`EventLoop`][el], and [`Channel`s][c] for use on POSIX-based systems. This is our high performance core I/O layer. In general, this should only be imported by projects that plan to do some actual I/O, such as high-level protocol implementations or applications.
- `NIOEmbedded`. This provides [`EmbeddedChannel`][ec] and [`EmbeddedEventLoop`][eel], implementations of the `NIOCore` abstractions that provide fine-grained control over their execution. These are most often used for testing, but can also be used to drive protocol implementations in a way that is decoupled from networking altogether.
- `NIOConcurrencyHelpers`. This provides a few low-level concurrency primitives that are used by NIO implementations, such as locks and atomics.
- `NIOFoundationCompat`. This extends a number of NIO types for better interoperation with Foundation data types. If you are working with Foundation data types such as `Data`, you should import this.
- `NIOTLS`. This provides a few common abstraction types for working with multiple TLS implementations. Note that this doesn't provide TLS itself: please investigate [swift-nio-ssl][repo-nio-ssl] and [swift-nio-transport-services][repo-nio-transport-services] for concrete implementations.
- `NIOHTTP1`. This provides a low-level HTTP/1.1 protocol implementation.
- `NIOWebSocket`. This provides a low-level WebSocket protocol implementation.
- `NIOTestUtils`. This provides a number of helpers for testing projects that use SwiftNIO.
- `_NIOFileSystem`. This provides `async` APIs for interacting with the file system.

### Protocol Implementations

Below you can find a list of a few protocol implementations that are done with SwiftNIO. This is a non-exhaustive list of protocols that are either part of the SwiftNIO project or are accepted into the [SSWG](https://swift.org/server)'s incubation process. All of the libraries listed below do all of their I/O in a non-blocking fashion using SwiftNIO.

#### Low-level protocol implementations

Low-level protocol implementations are often a collection of [`ChannelHandler`][ch]s that implement a protocol but still require the user to have a good understanding of SwiftNIO. Often, low-level protocol implementa