<!-- GitHub Trending: Rust | 5,687 stars | +5 today -->

# signalapp/libsignal

> Home to the Signal Protocol as well as other cryptographic primitives which make Signal possible.

## Repository Info
- **URL**: https://github.com/signalapp/libsignal
- **Stars**: 5,687
- **Forks**: 711
- **Language**: Rust
- **License**: GNU Affero General Public License v3.0
- **Created**: 2020-09-12
- **Updated**: 2026-04-20
- **Topics**: N/A
- **Open Issues**: 18

## README (excerpt)
# Overview

libsignal contains platform-agnostic APIs used by the official Signal clients and servers, exposed
as a Java, Swift, or TypeScript library. The underlying implementations are written in Rust:

- libsignal-protocol: Implements the Signal protocol, including the [Double Ratchet algorithm][]. A
  replacement for [libsignal-protocol-java][] and [libsignal-metadata-java][].
- signal-crypto: Cryptographic primitives such as AES-GCM. We use [RustCrypto][]'s where we can
  but sometimes have differing needs.
- device-transfer: Support logic for Signal's device-to-device transfer feature.
- attest: Functionality for remote attestation of [SGX enclaves][] and server-side [HSMs][].
- zkgroup: Functionality for [zero-knowledge groups][] and related features available in Signal.
- zkcredential: An abstraction for the sort of zero-knowledge credentials used by zkgroup, based on the paper "[The Signal Private Group System][]" by Chase, Perrin, and Zaverucha.
- poksho: Utilities for implementing zero-knowledge proofs (such as those used by zkgroup); stands for "proof-of-knowledge, stateful-hash-object".
- account-keys: Functionality for consistently using [PINs][] as passwords in Signal's Secure Value Recovery system, as well as other account-wide key operations.
- usernames: Functionality for username generation, hashing, and proofs.
- media: Utilities for manipulating media.

This repository is used by the Signal client apps ([Android][], [iOS][], and [Desktop][]) as well as
server-side. Use outside of Signal is unsupported. In particular, the products of this repository
are the Java, Swift, and TypeScript libraries that wrap the underlying Rust implementations. All
APIs and implementations are subject to change without notice, as are the JNI, C, and Node add-on
"bridge" layers. However, backwards-incompatible changes to the Java, Swift, TypeScript, and
non-bridge Rust APIs will be reflected in the version number on a best-effort basis, including
increases to the minimum supported tools versions.

[Double Ratchet algorithm]: https://signal.org/docs/
[libsignal-protocol-java]: https://github.com/signalapp/libsignal-protocol-java
[libsignal-metadata-java]: https://github.com/signalapp/libsignal-metadata-java
[RustCrypto]: https://github.com/RustCrypto
[Noise protocol]: http://noiseprotocol.org/
[SGX enclaves]: https://www.intel.com/content/www/us/en/architecture-and-technology/software-guard-extensions.html
[HSMs]: https://en.wikipedia.org/wiki/Hardware_security_module
[zero-knowledge groups]: https://signal.org/blog/signal-private-group-system/
[The Signal Private Group System]: https://eprint.iacr.org/2019/1416.pdf
[PINs]: https://signal.org/blog/signal-pins/
[Android]: https://github.com/signalapp/Signal-Android
[iOS]: https://github.com/signalapp/Signal-iOS
[Desktop]: https://github.com/signalapp/Signal-Desktop


# Building

### Toolchain Installation

To build anything in this repository you must have [Rust](https://rust-lang.org) installed, as well
as recent versions of Clang, libclang, [CMake](https://cmake.org), Make, protoc, Python (3.9+), and git.

#### Linux/Debian

On a Debian-like system, you can get these extra dependencies through `apt`:

```shell
$ apt-get install clang libclang-dev cmake make protobuf-compiler libprotobuf-dev python3 git
```

#### macOS

On macOS, we have a best-effort maintained script to set up the Rust toolchain you can run by:

```shell
$ bin/mac_setup.sh
```

## Rust

### First Build and Test

The build currently uses a specific version of the Rust nightly compiler, which
will be downloaded automatically by cargo. To build and test the basic protocol
libraries:

```shell
$ cargo build
...
$ cargo test
...
```

### Additional Rust Tools

The basic tools above should get you set up for most libsignal Rust development. 

Eventually, you may find that you need some additional Rust tools like `cbindgen` to modify the bridges to the 
client libraries or `taplo` for code formatting. 

You should alw