# Pingora: Rust Network Framework

> Pingora is a Rust framework for building fast, reliable, and programmable networked systems. It powers over 40 million Internet requests per second and offers features like HTTP/2 proxying, TLS support, and customizable load balancing.  
> Last updated: 2026-04-17

## Overview
**Pingora** is a high-performance Rust-based framework developed by Cloudflare for building scalable and secure network services. The project, hosted on GitHub with 26,440 stars and 1,625 forks, is licensed under Apache 2.0 and focuses on asynchronous networking, HTTP/1 and HTTP/2 proxying, and TLS integration. It serves as the backbone for Cloudflare's infrastructure, handling billions of requests annually.

### Key Features
- **Async Rust Architecture**: Combines Rust's memory safety with asynchronous performance.
- **HTTP/2 Proxying**: End-to-end proxying for HTTP/1 and HTTP/2 protocols.
- **TLS Flexibility**: Supports OpenSSL, BoringSSL, s2n-tls, and experimental rustls.
- **Customizable Load Balancing**: Includes advanced strategies like consistent hashing (Ketama).
- **Observability Tools**: Integrates with monitoring and logging systems for production-grade services.
- **Experimental Caching**: Async in-memory caching with anti-stampede mechanisms (highly volatile API).

### System Requirements
- **Operating Systems**: Linux (primary), Unix-like systems (macOS with limitations), and experimental Windows.
- **Architectures**: x86_64 and aarch64.
- **Rust Version**: Minimum Supported Rust Version (MSRV) is 1.84, with a rolling 6-month policy.
- **Build Tools**: Clang (for BoringSSL) and Perl 5 (for OpenSSL).

### Notable Crates
- **Pingora**: Core framework for building networked systems.
- **Pingora-proxy**: HTTP proxy logic and APIs.
- **Pingora-core**: Fundamental protocols and traits.
- **Pingora-openssl/boringssl/s2n**: TLS-specific extensions.
- **Pingora-ketama**: Consistent hashing algorithm.
- **Pingora-memory-cache**: Async in-memory caching (experimental).

## Key Points
- **Security Focus**: Rust's memory safety reduces vulnerabilities compared to C/C++ alternatives.
- **Performance**: Optimized for low-latency, high-throughput scenarios like Cloudflare's edge infrastructure.
- **Extensibility**: Modular design allows customization of load balancing, failover, and proxy logic.
- **Production-Ready**: Battle-tested in real-world deployments with 40M+ requests per second.
- **Developer-Friendly**: Comprehensive documentation and a quick start guide for building load balancers.

## Sources
- [GitHub](https://github.com/cloudflare/pingora)
- [원본](raw/ingest/tech/2026-04-17-pingora-rust-network-framework.md)