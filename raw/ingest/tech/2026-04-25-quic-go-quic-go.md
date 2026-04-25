<!-- GitHub Trending: Go | 11,552 stars | +1 today -->

# quic-go/quic-go

> A production-ready QUIC implementation in pure Go

## Repository Info
- **URL**: https://github.com/quic-go/quic-go
- **Stars**: 11,552
- **Forks**: 1,548
- **Language**: Go
- **License**: MIT License
- **Created**: 2016-04-06
- **Updated**: 2026-04-25
- **Topics**: go, golang, http3, protocol, qlog, quic, quic-client, quic-server
- **Open Issues**: 213

## README (excerpt)
<div align="center" style="margin-bottom: 15px;">
  <img src="./assets/quic-go-logo.png" width="700" height="auto">
</div>

# A QUIC implementation in pure Go


[![Documentation](https://img.shields.io/badge/docs-quic--go.net-red?style=flat)](https://quic-go.net/docs/)
[![PkgGoDev](https://pkg.go.dev/badge/github.com/quic-go/quic-go)](https://pkg.go.dev/github.com/quic-go/quic-go)
[![Code Coverage](https://img.shields.io/codecov/c/github/quic-go/quic-go/master.svg?style=flat-square)](https://codecov.io/gh/quic-go/quic-go/)
[![Fuzzing Status](https://oss-fuzz-build-logs.storage.googleapis.com/badges/quic-go.svg)](https://issues.oss-fuzz.com/issues?q=quic-go)

quic-go is an implementation of the QUIC protocol ([RFC 9000](https://datatracker.ietf.org/doc/html/rfc9000), [RFC 9001](https://datatracker.ietf.org/doc/html/rfc9001), [RFC 9002](https://datatracker.ietf.org/doc/html/rfc9002)) in Go. It has support for HTTP/3 ([RFC 9114](https://datatracker.ietf.org/doc/html/rfc9114)), including QPACK ([RFC 9204](https://datatracker.ietf.org/doc/html/rfc9204)) and HTTP Datagrams ([RFC 9297](https://datatracker.ietf.org/doc/html/rfc9297)).

In addition to these base RFCs, it also implements the following RFCs:

* Unreliable Datagram Extension ([RFC 9221](https://datatracker.ietf.org/doc/html/rfc9221))
* Datagram Packetization Layer Path MTU Discovery (DPLPMTUD, [RFC 8899](https://datatracker.ietf.org/doc/html/rfc8899))
* QUIC Version 2 ([RFC 9369](https://datatracker.ietf.org/doc/html/rfc9369))
* QUIC Event Logging using qlog ([draft-ietf-quic-qlog-main-schema](https://datatracker.ietf.org/doc/draft-ietf-quic-qlog-main-schema/) and [draft-ietf-quic-qlog-quic-events](https://datatracker.ietf.org/doc/draft-ietf-quic-qlog-quic-events/))
* QUIC Stream Resets with Partial Delivery ([draft-ietf-quic-reliable-stream-reset](https://datatracker.ietf.org/doc/html/draft-ietf-quic-reliable-stream-reset-07))

Support for WebTransport over HTTP/3 ([draft-ietf-webtrans-http3](https://datatracker.ietf.org/doc/draft-ietf-webtrans-http3/)) is implemented in [webtransport-go](https://github.com/quic-go/webtransport-go).

Detailed documentation can be found on [quic-go.net](https://quic-go.net/docs/).

## Projects using quic-go

| Project                                                   | Description                                                                                                                                                       | Stars                                                                                               |
| ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| [AdGuardHome](https://github.com/AdguardTeam/AdGuardHome) | Free and open source, powerful network-wide ads & trackers blocking DNS server.                                                                                   | ![GitHub Repo stars](https://img.shields.io/github/stars/AdguardTeam/AdGuardHome?style=flat-square) |
| [algernon](https://github.com/xyproto/algernon)           | Small self-contained pure-Go web server with Lua, Markdown, HTTP/2, QUIC, Redis and PostgreSQL support                                                            | ![GitHub Repo stars](https://img.shields.io/github/stars/xyproto/algernon?style=flat-square)        |
| [caddy](https://github.com/caddyserver/caddy/)            | Fast, multi-platform web server with automatic HTTPS                                                                                                              | ![GitHub Repo stars](https://img.shields.io/github/stars/caddyserver/caddy?style=flat-square)       |
| [cloudflared](https://github.com/cloudflare/cloudflared)  | A tunneling daemon that proxies traffic from the Cloudfla