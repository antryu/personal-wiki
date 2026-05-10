# RustNet: Terminal Network Monitoring Tool

> RustNet is a terminal-based network monitoring tool that provides per-process network monitoring with deep packet inspection (DPI), offering real-time visibility into network connections and protocols across Linux, macOS, Windows, and FreeBSD. Its notable features include live connection tracking, process attribution, and security sandboxing, all accessible without requiring root or complex setup.  
> Last updated: 2026-05-10

## Overview

RustNet is a cross-platform, terminal-based network monitoring tool designed for developers and system administrators who need real-time insights into network activity on their machines. It combines the capabilities of traditional tools like `netstat` and `tcpdump`, but with enhanced features such as per-process attribution, deep packet inspection (DPI), and sandboxing for security. Built using Rust, it leverages eBPF on Linux, PKTAP on macOS, and native APIs on other platforms to provide detailed connection metadata. It is also compatible with SSH sessions, allowing remote monitoring without complex setups.

RustNet offers an intuitive TUI interface with features such as live TCP/UDP/QUIC connection tracking, protocol identification (HTTP, HTTPS, DNS, SSH, etc.), connection analytics (retransmissions, out-of-order packets), and filtering capabilities using regex or search terms like `port:`, `sni:`, and `process:`. It supports optional GeoIP lookups to enrich connection metadata with country information.

## Key Points
- Real-time per-process network monitoring with deep packet inspection.
- Built-in security sandboxing using Landlock on Linux, Seatbelt on macOS, and privilege drops on Windows.
- Cross-platform support: Linux, macOS, Windows, and FreeBSD.
- SSH-compatible TUI for remote server monitoring.
- Protocol-aware connection lifecycle tracking and analytics.
- Optional GeoIP enrichment with MaxMind GeoLite2.
- Integrates with packet capture tools for forensic analysis.

## Sources
- [GitHub](https://github.com/domcyrus/rustnet)
- [원본](raw/ingest/tech/2026-05-10-rustnet-terminal-network-monitoring-tool.md)