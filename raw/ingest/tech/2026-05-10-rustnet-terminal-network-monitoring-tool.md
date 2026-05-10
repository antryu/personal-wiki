<!-- GitHub Trending: Rust | 2,715 stars | +206 today -->

# domcyrus/rustnet

> Per-process network monitoring for your terminal with deep packet inspection. Cross-platform, sandboxed.

## Repository Info
- **URL**: https://github.com/domcyrus/rustnet
- **Stars**: 2,715
- **Forks**: 103
- **Language**: Rust
- **License**: Apache License 2.0
- **Created**: 2025-04-27
- **Updated**: 2026-05-10
- **Topics**: cli, dpi, ebpf, freebsd, geoip, landlock, linux, macos, netstat-alternative, network-monitoring, packet-capture, process-monitoring, ratatui, rust, seatbelt, tui, windows
- **Open Issues**: 6

## README (excerpt)
<p align="center">
  <h1 align="center">RustNet</h1>
  <p align="center">
    <strong>Per-process network monitoring for your terminal: live TCP, UDP, and QUIC connections with deep packet inspection, sandboxed by default.</strong>
  </p>
  <p align="center">
    <a href="https://ratatui.rs/"><img src="https://ratatui.rs/built-with-ratatui/badge.svg" alt="Built With Ratatui"></a>
    <a href="https://github.com/domcyrus/rustnet/actions"><img src="https://github.com/domcyrus/rustnet/workflows/Rust/badge.svg" alt="Build Status"></a>
    <a href="https://crates.io/crates/rustnet-monitor"><img src="https://img.shields.io/crates/v/rustnet-monitor.svg" alt="Crates.io"></a>
    <a href="https://github.com/domcyrus/rustnet/stargazers"><img src="https://img.shields.io/github/stars/domcyrus/rustnet?style=flat&logo=github" alt="GitHub Stars"></a>
    <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache--2.0-blue.svg" alt="License"></a>
    <a href="https://github.com/domcyrus/rustnet/releases"><img src="https://img.shields.io/github/v/release/domcyrus/rustnet.svg" alt="GitHub release"></a>
    <a href="https://github.com/domcyrus/rustnet/pkgs/container/rustnet"><img src="https://img.shields.io/badge/docker-ghcr.io-blue?logo=docker" alt="Docker Image"></a>
  </p>
</p>

<p align="center">
  <img src="./assets/rustnet.gif" alt="RustNet demo" width="800">
</p>

<p align="center">
  <em>Real-time visibility into every connection your machine makes, who owns it, and what protocol it's speaking. No tcpdump, X11 forwarding, or root piping.</em>
</p>

## Features

- **Per-process attribution**: Every TCP, UDP, and QUIC connection mapped to its owning process, via eBPF on Linux, PKTAP on macOS, native APIs on Windows and FreeBSD. Wireshark and tcpdump can't do this; `netstat` / `ss` can't show live state.
- **Deep packet inspection**: Identify HTTP, HTTPS/TLS with SNI, DNS, SSH, QUIC, NTP, mDNS, LLMNR, DHCP, SNMP, SSDP, and NetBIOS, without external dissectors.
- **Security sandboxing**: Landlock (Linux 5.13+), Seatbelt (macOS), token privilege drop + job-object child-process block (Windows). Drops privileges immediately after libpcap initializes. See [SECURITY.md](SECURITY.md).
- **TCP network analytics**: Real-time retransmissions, out-of-order packets, and fast-retransmit detection, per-connection and aggregate.
- **Smart connection lifecycle**: Protocol-aware timeouts with white → yellow → red staleness indicators. Toggle `t` to keep historic (closed) connections visible for forensics.
- **Vim/fzf-style filtering**: `port:`, `src:`, `dst:`, `sni:`, `process:`, `state:`, `proto:`, plus regex via `/(?i)pattern/`.
- **GeoIP enrichment**: Country lookups via local MaxMind GeoLite2. No network calls.
- **Cross-platform**: Linux, macOS, Windows, FreeBSD.

## Why RustNet?

RustNet fills the gap between simple connection tools (`netstat`, `ss`) and packet analyzers (`Wireshark`, `tcpdump`):

- **Process attribution**: See which application owns each connection. Wireshark cannot provide this because it only sees packets, not sockets.
- **Connection-centric view**: Track states, bandwidth, and protocols per connection in real-time
- **SSH-friendly**: TUI works over SSH so you can quickly see what's happening on a remote server without forwarding X11 or capturing traffic

RustNet complements packet capture tools. Use RustNet to see *what's making connections*. For deep forensic analysis, use `--pcap-export` to capture packets with process attribution, then enrich with `scripts/pcap_enrich.py` and analyze in Wireshark with full PID/process context. See [PCAP Export](USAGE.md#pcap-export) and [Comparison with Similar Tools](ARCHITECTURE.md#comparison-with-similar-tools) for details.

Built on ratatui, libpcap, eBPF (libbpf-rs), DashMap, crossbeam, ring, MaxMind GeoLite2, and Landlock. See [ARCHITECTURE.md](ARCHITECTURE.md#dependencies) for the full dependency breakdown.

<details>
<summary><b>eBPF Enhanced Process Identification (Linux D