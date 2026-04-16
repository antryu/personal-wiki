<!-- GitHub Trending: Go | 14,207 stars | +4 today -->

# oauth2-proxy/oauth2-proxy

> A reverse proxy that provides authentication with Google, Azure, OpenID Connect and many more identity providers.

## Repository Info
- **URL**: https://github.com/oauth2-proxy/oauth2-proxy
- **Stars**: 14,207
- **Forks**: 2,091
- **Language**: Go
- **License**: MIT License
- **Created**: 2017-09-29
- **Updated**: 2026-04-16
- **Topics**: cloud-infrastructure, hacktoberfest, oauth2-proxy, ssl, sso
- **Open Issues**: 225

## README (excerpt)
[![Continuous Integration](https://github.com/oauth2-proxy/oauth2-proxy/actions/workflows/ci.yml/badge.svg)](https://github.com/oauth2-proxy/oauth2-proxy/actions/workflows/ci.yml)
[![Go Report Card](https://goreportcard.com/badge/github.com/oauth2-proxy/oauth2-proxy)](https://goreportcard.com/report/github.com/oauth2-proxy/oauth2-proxy/v7)
[![GoDoc](https://godoc.org/github.com/oauth2-proxy/oauth2-proxy?status.svg)](https://godoc.org/github.com/oauth2-proxy/oauth2-proxy/v7)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
[![Maintainability](https://qlty.sh/gh/oauth2-proxy/projects/oauth2-proxy/maintainability.svg)](https://qlty.sh/gh/oauth2-proxy/projects/oauth2-proxy)
[![Code Coverage](https://qlty.sh/gh/oauth2-proxy/projects/oauth2-proxy/coverage.svg)](https://qlty.sh/gh/oauth2-proxy/projects/oauth2-proxy)
[![OpenSSF Scorecard](https://api.scorecard.dev/projects/github.com/oauth2-proxy/oauth2-proxy/badge)](https://scorecard.dev/viewer/?uri=github.com/oauth2-proxy/oauth2-proxy)
[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/11223/badge)](https://www.bestpractices.dev/projects/11223)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Foauth2-proxy%2Foauth2-proxy.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Foauth2-proxy%2Foauth2-proxy?ref=badge_shield)

![OAuth2 Proxy](docs/static/img/logos/OAuth2_Proxy_horizontal.svg)

OAuth2 Proxy is a flexible, open-source tool that can act as either a standalone reverse proxy or a middleware component integrated into existing reverse proxy or load balancer setups. It provides a simple and secure way to protect your web applications with OAuth2 / OIDC authentication. As a reverse proxy, it intercepts requests to your application and redirects users to an OAuth2 provider for authentication. As a middleware, it can be seamlessly integrated into your existing infrastructure to handle authentication for multiple applications.

OAuth2 Proxy supports a lot of OAuth2 as well as OIDC providers. Either through a generic OIDC client or a specific implementation for Google, Microsoft Entra ID, GitHub, login.gov and others. Through specialised provider implementations oauth2-proxy can extract more details about the user like preferred usernames and groups. Those details can then be forwarded as HTTP headers to your upstream applications.

![Simplified Architecture](docs/static/img/simplified-architecture.svg)

## Get Started

OAuth2 Proxy's [Installation Docs](https://oauth2-proxy.github.io/oauth2-proxy/installation) cover how to install and configure your setup. Additionally you can take a further look at the [example setup files](https://github.com/oauth2-proxy/oauth2-proxy/tree/master/contrib/local-environment).

## Releases

### Binaries
We publish oauth2-proxy as compiled binaries on GitHub for all major architectures as well as more exotic ones like `ppc64le` as well as `s390x`.

Check out the [latest release](https://github.com/oauth2-proxy/oauth2-proxy/releases/latest).

### Images

From `v7.6.0` and up the base image has been changed from Alpine to [GoogleContainerTools/distroless](https://github.com/GoogleContainerTools/distroless).
This image comes with even fewer installed dependencies and thus should improve security. The image therefore is also slightly smaller than Alpine.
For debugging purposes (and those who really need it. e.g. `armv6`) we still provide images based on Alpine. The tags of these images are suffixed with `-alpine`.

Since 2023-11-18 we build nightly images directly from the `master` branch and provide them at `quay.io/oauth2-proxy/oauth2-proxy-nightly`.
These images are considered unstable and therefore should **NOT** be used for production purposes unless you know what you're doing.

## Sponsors
Would you like to sponsor the project then please contact us at [sponsors@oauth2-proxy.dev](mailto:sponsors@oauth2-proxy.dev)

![SAP](https://avatars.githubusercontent.com/u/2531208?s=30