# Cloudflare Tunnel Client

> Cloudflare Tunnel client enables secure traffic proxying from the Cloudflare network to private origins without requiring firewall modifications, supporting zero-trust network access and Layer 4 TCP protocols like SSH and RDP.  
> Last updated: 2026-04-19

## Overview

### Repository Info
- **URL**: [GitHub Repository](https://github.com/cloudflare/cloudflared)
- **Stars**: 13,894
- **Forks**: 1,263
- **Language**: Go
- **License**: Apache License 2.0
- **Created**: 2017-10-13
- **Updated**: 2026-04-19
- **Topics**: cloudflare, cloudflare-tunnel, reverse-proxy, zero-trust-network-access
- **Open Issues**: 495

### Key Features
- Acts as a reverse proxy to securely route traffic from Cloudflare to private origins (e.g., web servers) without exposing internal networks.
- Supports Layer 4 TCP traffic (SSH, RDP) via `cloudflared access`, bypassing HTTP/websocket limitations.
- Integrates with Cloudflare Dashboard for DNS-based routing, load balancers, and WARP client for private network access.

### Installation
Available for macOS, Linux, Windows, Docker, and via package managers (Debian, RPM, Homebrew).  
- [macOS](https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/downloads/#macos)  
- [Linux](https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/downloads/#linux)  
- [Windows](https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/downloads/#windows)  
- [DockerHub](https://hub.docker.com/r/cloudflare/cloudflared)  
- [Source Build](https://github.com/cloudflare/cloudflared): Requires Go; run `make cloudflared`.

### Usage Workflow
1. **Prerequisites**: Add a website to Cloudflare and update nameservers ([instructions](https://developers.cloudflare.com/fundamentals/manage-domains/add-site/)).
2. **Create Tunnel**: Authenticate `cloudflared` and follow [setup guides](https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/get-started/create-remote-tunnel/).
3. **Route Traffic**:
   - DNS records in Cloudflare.
   - Public hostnames via [Cloudflare Load Balancer](https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/routing-to-tunnel/public-load-balancers/).
   - Private traffic via [WARP client](https://developers.cloudflare.com/warp-client/).

### Testing
Use [TryCloudflare](https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/) to test the Tunnel without adding a website to Cloudflare.

---

## Key Points
- Securely connects private origins to the internet without firewall adjustments.
- Supports non-HTTP protocols (SSH, RDP) and integrates with Cloudflare’s zero-trust security model.
- Flexible deployment options (binaries, Docker, package managers) and detailed documentation.

## Sources
- [GitHub](https://github.com/cloudflare/cloudflared)
- [원본](raw/ingest/infra/2026-04-19-cloudflare-tunnel-client.md)