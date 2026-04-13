# Lucky Network Utility

> A cross-platform network utility for port forwarding, DDNS, reverse proxy, and more, designed for both soft/hard routing scenarios. Notable for its MIT-licensed Go/Vue3.2 architecture and 7.6k+ GitHub stars.  
> Last updated: 2026-04-13

## Overview

### Core Functionality
Lucky is a Golang-based network management tool with a Vue3.2 frontend, offering:
- **Port Forwarding**: IPv6/IPv4 TCP/UDP forwarding with web-based rule management, whitelisting/blacklisting, and scheduled activation.
- **DDNS Support**: 30+ DNS provider integrations (Cloudflare, Aliyun, etc.) with customizable callbacks and templates.
- **Web Services**: Reverse proxy, HTTP authentication, and IP/UA-based access control.
- **Stun穿透**: NAT traversal for IPv4-less networks.
- **Network Wake-Up**: Remote power control via third-party IoT platforms.
- **ACME Certificates**: Automated SSL/TLS certificate management across major providers.
- **Storage Integration**: WebDAV, FTP, and Aliyun Pan file access via unified storage mounts.

### Technical Specifications
- **Language**: Go (backend), Vue3.2 (frontend)
- **License**: MIT
- **Platforms**: Linux (OpenWrt IPK), Docker, Windows
- **Dependencies**: No system cron required for scheduling

### Installation Methods
1. **One-click Install**:  
   ```bash
   lucky -cd luckyconf
   ```
2. **Docker**:  
   ```bash
   # Host mode (Linux)
   docker run -d --name lucky --net=host --restart=always gdy666/lucky
   # Bridge mode (Mac/Windows)
   docker run -d -p 16601:16601 --restart=always gdy666/lucky
   ```
3. **OpenWrt**:  
   [luci-app-lucky IPK](https://github.com/gdy666/luci-app-lucky)

### Management Interface
- Default access: `http://<IP>:16601` (creds: 666/666)
- REST API available via OpenToken for third-party integrations

## Key Points
- Offers 30+ DNS provider templates for DDNS
- MIT-licensed but source code frozen after v1.4.10
- Supports both IPv4/IPv6 networks and OpenWrt integration
- Includes built-in ACME certificate automation
- Closed-source post-v1.4.10 due to developer's "no free labor" policy

## Sources
- [GitHub](https://github.com/gdy666/lucky)
- [원본](raw/ingest/infra/2026-04-13-lucky-network-utility.md)