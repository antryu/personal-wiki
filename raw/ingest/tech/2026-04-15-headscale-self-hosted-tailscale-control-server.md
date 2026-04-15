<!-- GitHub Trending: Go | 37,446 stars | +51 today -->

# juanfont/headscale

> An open source, self-hosted implementation of the Tailscale control server

## Repository Info
- **URL**: https://github.com/juanfont/headscale
- **Stars**: 37,447
- **Forks**: 2,026
- **Language**: Go
- **License**: BSD 3-Clause "New" or "Revised" License
- **Created**: 2020-06-21
- **Updated**: 2026-04-15
- **Topics**: tailscale, tailscale-control-server, tailscale-server, wireguard
- **Open Issues**: 133

## README (excerpt)
![headscale logo](./docs/assets/logo/headscale3_header_stacked_left.png)

![ci](https://github.com/juanfont/headscale/actions/workflows/test.yml/badge.svg)

An open source, self-hosted implementation of the Tailscale control server.

Join our [Discord server](https://discord.gg/c84AZQhmpx) for a chat.

**Note:** Always select the same GitHub tag as the released version you use
to ensure you have the correct example configuration. The `main` branch might
contain unreleased changes. The documentation is available for stable and
development versions:

- [Documentation for the stable version](https://headscale.net/stable/)
- [Documentation for the development version](https://headscale.net/development/)

## What is Tailscale

Tailscale is [a modern VPN](https://tailscale.com/) built on top of
[Wireguard](https://www.wireguard.com/).
It [works like an overlay network](https://tailscale.com/blog/how-tailscale-works/)
between the computers of your networks - using
[NAT traversal](https://tailscale.com/blog/how-nat-traversal-works/).

Everything in Tailscale is Open Source, except the GUI clients for proprietary OS
(Windows and macOS/iOS), and the control server.

The control server works as an exchange point of Wireguard public keys for the
nodes in the Tailscale network. It assigns the IP addresses of the clients,
creates the boundaries between each user, enables sharing machines between users,
and exposes the advertised routes of your nodes.

A [Tailscale network (tailnet)](https://tailscale.com/kb/1136/tailnet/) is private
network which Tailscale assigns to a user in terms of private users or an
organisation.

## Design goal

Headscale aims to implement a self-hosted, open source alternative to the
[Tailscale](https://tailscale.com/) control server. Headscale's goal is to
provide self-hosters and hobbyists with an open-source server they can use for
their projects and labs. It implements a narrow scope, a _single_ Tailscale
network (tailnet), suitable for a personal use, or a small open-source
organisation.

## Supporting Headscale

If you like `headscale` and find it useful, there is a sponsorship and donation
buttons available in the repo.

## Features

Please see ["Features" in the documentation](https://headscale.net/stable/about/features/).

## Client OS support

Please see ["Client and operating system support" in the documentation](https://headscale.net/stable/about/clients/).

## Running headscale

**Please note that we do not support nor encourage the use of reverse proxies
and container to run Headscale.**

Please have a look at the [`documentation`](https://headscale.net/stable/).

For NixOS users, a module is available in [`nix/`](./nix/).

## Builds from `main`

Development builds from the `main` branch are available as container images and
binaries. See the [development builds](https://headscale.net/stable/setup/install/main/)
documentation for details.

## Talks

- Fosdem 2026 (video): [Headscale & Tailscale: The complementary open source clone](https://fosdem.org/2026/schedule/event/KYQ3LL-headscale-the-complementary-open-source-clone/)
  - presented by Kristoffer Dalby
- Fosdem 2023 (video): [Headscale: How we are using integration testing to reimplement Tailscale](https://fosdem.org/2023/schedule/event/goheadscale/)
  - presented by Juan Font Alonso and Kristoffer Dalby

## Disclaimer

This project is not associated with Tailscale Inc.

However, one of the active maintainers for Headscale [is employed by Tailscale](https://tailscale.com/blog/opensource) and he is allowed to spend work hours contributing to the project. Contributions from this maintainer are reviewed by other maintainers.

The maintainers work together on setting the direction for the project. The underlying principle is to serve the community of self-hosters, enthusiasts and hobbyists - while having a sustainable project.

## Contributing

Please read the [CONTRIBUTING.md](./CONTRIBUTING.md) file.

### Requirements

To contribute to headscale you