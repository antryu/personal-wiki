# mieru - Anti-Censorship Network Proxy

> mieru is a socks5 / HTTP / HTTPS proxy to bypass censorship. It is designed to be secure, hard to classify and detect, and uses strong encryption and obfuscation techniques to avoid detection by internet filters. Last updated: 2026-05-09

## Overview

mieru is a network proxy software suite that allows users to bypass online censorship by providing encrypted proxy services. It is composed of two main components: the client software called **mieru** and the server software called **mita**. The software is built in Go and released under the GNU General Public License v3.0.

mieru does not rely on the TLS protocol, eliminating the need for domain registration or fake websites. It uses the strong XChaCha20-Poly1305 encryption algorithm, which generates keys using username, password, and system time. In addition, it employs random padding and replay attack detection to prevent detection by the GFW (Great Firewall). It supports both IPv4 and IPv6 and enables multiple users to share a single proxy server.

mieru supports third-party server and client software, including forks and extensions for desktop, Android, and iOS platforms. The project includes detailed documentation for server and client installation, traffic patterns, security guides, and protocol specifics.

## Key Points
- Provides socks5, HTTP, and HTTPS proxy interfaces without using TLS.
- Utilizes XChaCha20-Poly1305 encryption with key generation based on username, password, and time.
- Resists detection by GFW via random padding and replay attack detection.
- Supports multiple users on a single proxy server.
- Works with third-party clients and servers like Clash Verge Rev, Mihomo, and NekoBox.

## Sources
- [GitHub](https://github.com/enfein/mieru)
- [원본](raw/ingest/tech/2026-05-09-mieru-anti-censorship-network-proxy.md)