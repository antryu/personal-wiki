# Headscale: Self-Hosted Tailscale Control Server

> Headscale is an open source, self-hosted implementation of the Tailscale control server, allowing users to manage their own Tailscale network without relying on the proprietary Tailscale service. It is notable for providing a community-driven, open alternative to the Tailscale control infrastructure.
> Last updated: 2026-04-15

## Overview

Headscale is an open source implementation of the Tailscale control server, written in Go and licensed under the BSD 3-Clause license. It is designed to replace the proprietary Tailscale control server with a self-hosted alternative, making it suitable for hobbyists, labs, and small organizations. The project was created in 2020 and has since grown to over 37,000 stars on GitHub, with a vibrant community and active development.

The Tailscale control server is responsible for managing the Wireguard keys and network assignments for all nodes in a Tailscale network (tailnet). Headscale replicates this functionality, allowing users to create and manage their own private Tailscale networks without relying on Tailscale Inc.'s hosted service.

Headscale supports a single tailnet, making it ideal for personal use or small teams. It is designed to be easy to deploy and manage, with detailed documentation and support for various deployment methods, including direct installation and containerized builds.

The project has been featured at major open source events such as FOSDEM, and it benefits from contributions by both community members and an active maintainer who is employed by Tailscale Inc. The maintainers work collaboratively to ensure the project remains community-driven and sustainable.

## Key Points

- Headscale is an open source, self-hosted alternative to Tailscale's proprietary control server.
- It allows users to create and manage private Tailscale networks (tailnets) without relying on Tailscale Inc.'s hosted infrastructure.
- Headscale supports a single tailnet, making it ideal for personal use or small organizations.
- The project has a large community and is actively maintained, with over 37,000 stars and 2,000 forks on GitHub.
- It is written in Go and licensed under the BSD 3-Clause license.

## Sources

- [GitHub](https://github.com/juanfont/headscale)
- [원본](raw/ingest/tech/2026-04-15-headscale-self-hosted-tailscale-control-server.md)