<!-- GitHub Trending: Rust | 11,419 stars | +5 today -->

# cloudflare/quiche

> 🥧 Savoury implementation of the QUIC transport protocol and HTTP/3

## Repository Info
- **URL**: https://github.com/cloudflare/quiche
- **Stars**: 11,419
- **Forks**: 981
- **Language**: Rust
- **License**: BSD 2-Clause "Simplified" License
- **Created**: 2018-09-29
- **Updated**: 2026-04-24
- **Topics**: http3, network-programming, protocol, quic, rust
- **Open Issues**: 315

## README (excerpt)
![quiche](quiche.svg)

[![crates.io](https://img.shields.io/crates/v/quiche.svg)](https://crates.io/crates/quiche)
[![docs.rs](https://docs.rs/quiche/badge.svg)](https://docs.rs/quiche)
[![license](https://img.shields.io/github/license/cloudflare/quiche.svg)](https://opensource.org/licenses/BSD-2-Clause)
![build](https://img.shields.io/github/actions/workflow/status/cloudflare/quiche/stable.yml?branch=master)

[quiche] is an implementation of the QUIC transport protocol and HTTP/3 as
specified by the [IETF]. It provides a low level API for processing QUIC packets
and handling connection state. The application is responsible for providing I/O
(e.g. sockets handling) as well as an event loop with support for timers.

For more information on how quiche came about and some insights into its design
you can read a [post] on Cloudflare's blog that goes into some more detail.

[quiche]: https://docs.quic.tech/quiche/
[ietf]: https://quicwg.org/
[post]: https://blog.cloudflare.com/enjoy-a-slice-of-quic-and-rust/

Who uses quiche?
----------------

### Cloudflare

quiche powers Cloudflare edge network's [HTTP/3 support][cloudflare-http3]. The
[cloudflare-quic.com](https://cloudflare-quic.com) website can be used for
testing and experimentation.

### Android

Android's DNS resolver uses quiche to [implement DNS over HTTP/3][android-http3].

### curl

quiche can be [integrated into curl][curl-http3] to provide support for HTTP/3.

[cloudflare-http3]: https://blog.cloudflare.com/http3-the-past-present-and-future/
[android-http3]: https://security.googleblog.com/2022/07/dns-over-http3-in-android.html
[curl-http3]: https://github.com/curl/curl/blob/master/docs/HTTP3.md#quiche-version

Getting Started
---------------

### Command-line apps

Before diving into the quiche API, here are a few examples on how to use the
quiche tools provided as part of the [quiche-apps](apps/) crate. These are not
suitable for production environments; see [disclaimers and
notes](#disclaimers-and-notes).

After cloning the project according to the command mentioned in the [building](#building) section, the client can be run as follows:

```bash
 $ cargo run --bin quiche-client -- https://cloudflare-quic.com/
```

while the server can be run as follows:

```bash
 $ cargo run --bin quiche-server -- --cert apps/src/bin/cert.crt --key apps/src/bin/cert.key
```

(note that the certificate provided is self-signed and should not be used in
production)

Use the `--help` command-line flag to get a more detailed description of each
tool's options.

### Configuring connections

The first step in establishing a QUIC connection using quiche is creating a
[`Config`] object:

```rust
let mut config = quiche::Config::new(quiche::PROTOCOL_VERSION)?;
config.set_application_protos(&[b"example-proto"]);

// Additional configuration specific to application and use case...
```

The [`Config`] object controls important aspects of the QUIC connection such
as QUIC version, ALPN IDs, flow control, congestion control, idle timeout
and other properties or features.

QUIC is a general-purpose transport protocol and there are several
configuration properties where there is no reasonable default value. For
example, the permitted number of concurrent streams of any particular type
is dependent on the application running over QUIC, and other use-case
specific concerns.

quiche defaults several properties to zero, applications most likely need
to set these to something else to satisfy their needs using the following:

- [`set_initial_max_streams_bidi()`]
- [`set_initial_max_streams_uni()`]
- [`set_initial_max_data()`]
- [`set_initial_max_stream_data_bidi_local()`]
- [`set_initial_max_stream_data_bidi_remote()`]
- [`set_initial_max_stream_data_uni()`]

[`Config`] also holds TLS configuration. This can be changed by mutators on
the an existing object, or by constructing a TLS context manually and
creating a configuration using [`with_boring_ssl_ctx_builder()`].

A configuration object can be shared 