# Advanced DNS Tunneling VPN

> An advanced DNS tunneling VPN designed for censorship bypass, offering optimized performance with low-overhead ARQ, resolver load balancing, high packet-loss stability, and speed improvements over DNSTT and SlipStream.  
> Last updated: 2026-04-19

## Overview

**MasterDnsVPN** is a research-oriented project for tunneling TCP traffic via DNS queries and responses. It aims to surpass existing solutions like DNSTT and SlipStream by integrating a custom protocol with adaptive routing, low-overhead Automatic Repeat reQuest (ARQ), and advanced resolver management. The project prioritizes stability in harsh network conditions, resilience against censorship, and high-speed data transfer.

### Repository Info
- **URL**: [GitHub](https://github.com/masterking32/MasterDnsVPN)
- **Stars**: 758
- **Forks**: 67
- **Language**: Go (with a legacy Python version)
- **License**: MIT License
- **Created**: 2026-01-18
- **Updated**: 2026-04-19
- **Topics**: `dns-client`, `dns-proxy`, `dns-server`, `dnstt`, `masterdns`, `slipstream`, `tunnel`, `vpn`
- **Open Issues**: 11

### Key Features
- **Custom Protocol**: Combines a lightweight transport protocol with ARQ for minimal overhead (~5–7B per packet, 88% lower than DNSTT).
- **Resolver Load Balancing**: Supports 8 built-in balancing modes, multi-resolver duplication, and adaptive routing based on latency/packet loss.
- **High Stability**: Multipath architecture and ARQ ensure reliability even under 10% packet loss.
- **Speed Optimization**: Up to 9× faster than DNSTT and 3.6× faster than SlipStream in local tests (e.g., 10MB download in 0.270s).
- **Censorship Resistance**: Designed to evade detection with features like DNS caching, resolver health checks, and failover systems.
- **Simplified Setup**: No external helper software required, with optimized SOCKS5/Shadowsocks compatibility and fine-grained configuration options.

### Performance Comparison
| Feature | **SlipStream** | **DNSTT** | **MasterDnsVPN** |
| :--- | :--- | :--- | :--- |
| **Transport Overhead** | 🟠 ~24B | 🔴 ~59B | 🟢 ~5–7B |
| **Speed (Download 10MB)** | 🟡 0.978s | 🔴 2.492s | 🟢 0.270s |
| **Stability (Packet Loss)** | 🟡 Good | 🟠 Medium | 🟢 Very High |
| **Multi-Resolver Support** | Yes (QUIC) | ❌ | ✅ Advanced (duplication + balancing) |
| **Encryption** | TLS 1.3 | Noise | AES/ChaCha20/XOR (configurable) |
| **Implementation Language** | Rust | Go | 🟢 Go (optimized for DNS) |

### Disclaimer
MasterDnsVPN is an educational/research tool provided "AS-IS" without warranties or liability for misuse.

---

## Key Points
- Implements a **custom DNS tunneling protocol** with ARQ for minimal overhead and high stability.
- Supports **advanced resolver management**, including health checks, adaptive routing, and duplication to combat packet loss.
- Offers **superior speed** (up to 9× faster than DNSTT) and resilience in censored networks.
- Requires **no external software**, with built-in SOCKS5 and Shadowsocks compatibility.

## Sources
- [GitHub](https://github.com/masterking32/MasterDnsVPN)
- [원본](raw/ingest/projects/2026-04-19-advanced-dns-tunneling-vpn.md)