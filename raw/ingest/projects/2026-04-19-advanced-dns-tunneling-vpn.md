<!-- GitHub Trending: Go | 758 stars | +31 today -->

# masterking32/MasterDnsVPN

> Advanced DNS tunneling VPN for censorship bypass, optimized beyond DNSTT and SlipStream with low-overhead ARQ, resolver load balancing, high packet-loss stability and speed.

## Repository Info
- **URL**: https://github.com/masterking32/MasterDnsVPN
- **Stars**: 758
- **Forks**: 67
- **Language**: Go
- **License**: MIT License
- **Created**: 2026-01-18
- **Updated**: 2026-04-19
- **Topics**: dns-client, dns-proxy, dns-server, dnstt, masterdns, masterdnsvpn, slipstream, tunnel, vpn
- **Open Issues**: 11

## README (excerpt)
﻿# MasterDnsVPN Project 🔐

## | [نسخه فارسی](https://github.com/masterking32/MasterDnsVPN/blob/main/README_FA.MD) | [English Version](https://github.com/masterking32/MasterDnsVPN/blob/main/README.MD) |

**MasterDnsVPN** is a scientific and research-oriented project for carrying TCP traffic through DNS queries and responses. In broad goal, it is similar to projects such as DNSTT or SlipStream, but it follows a fundamentally different structure and implementation approach.
This system is designed around compatibility with many resolver behaviors and harsh network conditions, with the goal of preserving the highest possible stability and data delivery even in the worst cases.

### 📊 MasterDnsVPN Compared with Similar Projects

| Feature | SlipStream | DNSTT | MasterDnsVPN |
| :--- | :--- | :--- | :--- |
| Protocol type | Advanced DNS tunnel | Classic DNS tunnel | Advanced DNS tunnel / VPN |
| Transport protocol | QUIC | KCP + Noise | Custom protocol + ARQ |
| Transport header overhead | 🟠 ~24B | 🔴 ~59B | 🟢 ~5–7B<br>≈88% lower than DNSTT<br>≈71% lower than SlipStream |
| Encryption style | TLS 1.3 (inside QUIC) | Noise (Curve25519) | AES / ChaCha20 / XOR (if XOR is used: lightweight with lower security and no extra overhead) |
| Architecture | Unified (QUIC handles everything) | Multi-layered (KCP + SMUX + Noise) | 🟢 Lightweight custom design optimized for DNS |
| Speed | 🟡 High (up to ~5× faster than DNSTT) | 🔴 Medium | 🟢 Faster than others<br>Up to ~9× faster than DNSTT<br>Up to ~3.6× faster than SlipStream |
| Stability under packet loss | 🟡 Good | 🟠 Medium | 🟢 Very high (Multipath + ARQ) |
| Multi-resolver support | Yes (multipath) | ❌ | Yes — advanced (multi-resolver + duplication) |
| Resilience under heavy censorship | Good | Medium | Very strong (a core project goal) |
| Setup complexity | Medium | Simple | Easier installation<br>More complex only if you heavily customize advanced settings |
| SOCKS5 support | Yes | Yes | Optimized for SOCKS5 / SOCKS4 with reduced SOCKS overhead |
| Shadowsocks support | ✅ | ❌ | Indirectly: TCP Forwarding mode can carry TCP-based protocols<br>e.g. Shadowsocks, VLESS/VMess, etc. |
| Real multipath | Yes (QUIC multipath) | ❌ | Yes (multi-resolver + duplication) |
| Adaptive routing | Limited | ❌ | Advanced (latency/loss based) |
| Design goal | High speed and efficiency | Simplicity and stability | Surviving the harshest networks — stability, speed, and efficiency |
| Implementation language | Rust | Go | Main version is Go<br>Legacy Python version also exists |
| Built-in balancer | 🔴 | ❌ | 🟢 (8 built-in balancing modes) |
| Duplication system | ❌ | ❌ | Yes — increases traffic to improve reliability (configurable or can be disabled) |
| MTU tolerance | Better than DNSTT | - | Works even with very small MTU because protocol overhead is very low |
| Failover system | ❌ | ❌ | ✅ |
| Download speed 10MB (Local) | 🟡 0.978s | 🔴 2.492s | 🟢 0.270s |
| Upload speed 10MB (Local) | 🟡 3.249s | 🔴 16.207s | 🟢 1.746s |
| Resolver health checks and auto-disable | ❌ | ❌ | ✅ |
| Background reactivation of healthy resolvers | ❌ | ❌ | ✅ |
| Local DNS service on client (to reduce DNS hijacking) | ❌ | ❌ | ✅ (with strong DNS caching) |
| DNS resolving through SOCKS5 | ❌ | ❌ | ✅ (with DNS caching) |
| Fine-grained professional configuration | 🟠 | 🟠 | 🟢 Almost every subsystem is configurable |
| No external helper software required | ❌ | ❌ | 🟢 No extra software is required; if needed, you can still combine it with SOCKS or tools such as Shadowsocks or OpenVPN |

---

### ❌ Disclaimer

MasterDnsVPN is provided as an educational and research project only.

- **Provided without warranty:** This software is provided “AS-IS”, without any express or implied warranty, including merchantability, fitness for a particular purpose, or non-infringement.
- **Limitation of liability:** The developers and contributors of this project accept no responsibility for any direct, indirect, incidental, consequenti