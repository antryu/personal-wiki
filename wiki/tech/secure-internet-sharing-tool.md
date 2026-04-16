# Secure Internet Sharing Tool

> zrok enables secure, zero-configuration internet sharing of web services, files, and network resources. Built on zero-trust networking, it bypasses firewalls and NAT without requiring port forwarding or network changes. Notable for its enterprise-grade security and ease of use.  
> Last updated: 2026-04-16

## Overview

### Repository Info
- **URL**: [https://github.com/openziti/zrok](https://github.com/openziti/zrok)
- **Stars**: 4,272
- **Forks**: 190
- **Language**: Go
- **License**: Apache License 2.0
- **Created**: 2022-07-18
- **Updated**: 2026-04-16
- **Topics**: file-sharing, golang, network, peer-to-peer, reverse-proxy, security, zero-trust
- **Open Issues**: 117

### Key Features
- **Zero Configuration**: Works through firewalls, NAT, and corporate networks.
- **Secure by Default**: End-to-end encryption with zero-trust architecture.
- **Public & Private Sharing**: Share with anyone or restrict to specific users.
- **Multiple Protocols**: Supports HTTP/HTTPS, TCP, UDP, and file sharing.
- **Cross-Platform**: Compatible with Windows, macOS, Linux, and Raspberry Pi.
- **Self-Hostable**: Run your own zrok service instance at scale.

### How It Works
zrok leverages [OpenZiti](https://docs.openziti.io/docs/learn/introduction/), a zero-trust network overlay, to enable secure connections without requiring inbound access. Key mechanisms include:
- End-to-end encryption, even from zrok servers.
- Peer-to-peer connections when possible.
- Identity-based access control (user-specific sharing).
- No need to expose resources to the public internet for private sharing.

### Use Cases
- **Web Services**: Instantly share local apps (e.g., `zrok share public localhost:8080`).
- **Files & Directories**: Turn folders into shareable drives (e.g., `zrok share public --backend-mode drive ~/Documents`).
- **Private Resources**: Securely share TCP/UDP services with other zrok users.

### Developer SDK
Integrate zrok into applications using its Go SDK:
```go
shr, err := sdk.CreateShare(root, &sdk.ShareRequest{
    BackendMode: sdk.TcpTunnelBackendMode,
    ShareMode:   sdk.PrivateShareMode,
})
listener, err := sdk.NewListener(shr.Token, root)
```
[SDK Guide](https://blog.openziti.io/the-zrok-sdk)

### Self-Hosting
Run a zrok service instance from a Raspberry Pi to enterprise scale:
- Single binary includes all necessary components.
- Same codebase as the public [zrok.io](https://zrok.io) service.
- [Self-Hosting Guide](https://docs.zrok.io/docs/guides/self-hosting/self_hosting_guide/)

---

## Key Points
- Simplifies secure sharing of web services, files, and network resources.
- Eliminates need for port forwarding, firewall changes, or public IP addresses.
- Combines zero-trust security with cross-platform compatibility and self-hosting flexibility.

## Sources
- [GitHub](https://github.com/openziti/zrok)
- [원본](raw/ingest/tech/2026-04-16-secure-internet-sharing-tool.md)