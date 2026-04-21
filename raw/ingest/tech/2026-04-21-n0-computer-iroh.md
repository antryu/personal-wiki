<!-- GitHub Trending: Rust | 8,310 stars | +19 today -->

# n0-computer/iroh

> IP addresses break, dial keys instead. Modular networking stack in Rust.

## Repository Info
- **URL**: https://github.com/n0-computer/iroh
- **Stars**: 8,310
- **Forks**: 400
- **Language**: Rust
- **License**: Apache License 2.0
- **Created**: 2022-03-14
- **Updated**: 2026-04-21
- **Topics**: does-anyone-read-these, holepunching, memes, multipath, p2p, quic, realtime, rust, tags, tagsoftags
- **Open Issues**: 141

## README (excerpt)
<h1 align="center"><a href="https://iroh.computer"><img alt="iroh" src="./.img/iroh_wordmark.svg" width="100" /></a></h1>

<h3 align="center">
less net work for networks
</h3>

[![Documentation](https://img.shields.io/badge/docs-latest-blue.svg?style=flat-square)](https://docs.rs/iroh/)
[![Crates.io](https://img.shields.io/crates/v/iroh.svg?style=flat-square)](https://crates.io/crates/iroh)
[![downloads](https://img.shields.io/crates/d/iroh.svg?style=flat-square)](https://crates.io/crates/iroh)
[![Chat](https://img.shields.io/discord/1161119546170687619?logo=discord&style=flat-square)](https://discord.com/invite/DpmJgtU7cW)
[![Youtube](https://img.shields.io/badge/YouTube-red?logo=youtube&logoColor=white&style=flat-square)](https://www.youtube.com/@n0computer)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE-MIT)
[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg?style=flat-square)](LICENSE-APACHE)
[![CI](https://img.shields.io/github/actions/workflow/status/n0-computer/iroh/ci.yml?branch=main&style=flat-square&label=CI)](https://github.com/n0-computer/iroh/actions/workflows/ci.yml)

<div align="center">
  <h3>
    <a href="https://iroh.computer/docs">
      Docs Site
    </a>
    <span> | </span>
    <a href="https://docs.rs/iroh">
      Rust Docs
    </a>
  </h3>
</div>
<br/>

## What is iroh?

Iroh gives you an API for dialing by public key.
You say “connect to that phone”, iroh will find & maintain the fastest connection for you, regardless of where it is.

### Hole-punching

The fastest route is a direct connection, so if necessary, iroh tries to hole-punch.
Should this fail, it can fall back to an open ecosystem of public relay servers.
To ensure these connections are as fast as possible, we [continuously measure iroh][iroh-perf].

### Built on [QUIC]

Iroh uses [noq] to establish [QUIC] connections between endpoints.
This way you get authenticated encryption, concurrent streams with stream priorities, a datagram transport and avoid head-of-line-blocking out of the box.

## Compose Protocols

Use pre-existing protocols built on iroh instead of writing your own:
- [iroh-blobs] for [BLAKE3]-based content-addressed blob transfer scaling from kilobytes to terabytes
- [iroh-gossip] for establishing publish-subscribe overlay networks that scale, requiring only resources that your average phone can handle
- [iroh-docs] for an eventually-consistent key-value store of [iroh-blobs] blobs
- [iroh-willow] for an (in-construction) implementation of the [willow protocol]

## Getting Started

### Rust Library

It's easiest to use iroh from rust.
Install it using `cargo add iroh`, then on the connecting side:

```rs
const ALPN: &[u8] = b"iroh-example/echo/0";

let endpoint = Endpoint::bind().await?;

// Open a connection to the accepting endpoint
let conn = endpoint.connect(addr, ALPN).await?;

// Open a bidirectional QUIC stream
let (mut send, mut recv) = conn.open_bi().await?;

// Send some data to be echoed
send.write_all(b"Hello, world!").await?;
send.finish()?;

// Receive the echo
let response = recv.read_to_end(1000).await?;
assert_eq!(&response, b"Hello, world!");

// As the side receiving the last application data - say goodbye
conn.close(0u32.into(), b"bye!");

// Close the endpoint and all its connections
endpoint.close().await;
```

And on the accepting side:
```rs
let endpoint = Endpoint::bind().await?;

let router = Router::builder(endpoint)
    .accept(ALPN.to_vec(), Arc::new(Echo))
    .spawn()
    .await?;

// The protocol definition:
#[derive(Debug, Clone)]
struct Echo;

impl ProtocolHandler for Echo {
    async fn accept(&self, connection: Connection) -> Result<()> {
        let (mut send, mut recv) = connection.accept_bi().await?;

        // Echo any bytes received back directly.
        let bytes_sent = tokio::io::copy(&mut recv, &mut send).await?;

        send.finish()?;
        connection.closed().await;

        Ok(())
    }
}
```

Th