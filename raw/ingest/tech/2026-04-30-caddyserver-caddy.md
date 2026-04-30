<!-- GitHub Trending: Go | 71,972 stars | +36 today -->

# caddyserver/caddy

> Fast and extensible multi-platform HTTP/1-2-3 web server with automatic HTTPS

## Repository Info
- **URL**: https://github.com/caddyserver/caddy
- **Stars**: 71,972
- **Forks**: 4,709
- **Language**: Go
- **License**: Apache License 2.0
- **Created**: 2015-01-13
- **Updated**: 2026-04-30
- **Topics**: acme, automatic-https, caddy, caddyfile, go, golang, http, http-server, http3, https, privacy, reverse-proxy, security, tls, web-server
- **Open Issues**: 237

## README (excerpt)
<p align="center">
	<a href="https://caddyserver.com">
		<picture>
			<source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/1128849/210187358-e2c39003-9a5e-4dd5-a783-6deb6483ee72.svg">
			<source media="(prefers-color-scheme: light)" srcset="https://user-images.githubusercontent.com/1128849/210187356-dfb7f1c5-ac2e-43aa-bb23-fc014280ae1f.svg">
			<img src="https://user-images.githubusercontent.com/1128849/210187356-dfb7f1c5-ac2e-43aa-bb23-fc014280ae1f.svg" alt="Caddy" width="550">
		</picture>
	</a>
	<br>
	<h3 align="center">a <a href="https://zerossl.com"><img src="https://user-images.githubusercontent.com/55066419/208327323-2770dc16-ec09-43a0-9035-c5b872c2ad7f.svg" height="28" style="vertical-align: -7.7px" valign="middle"></a> project</h3>
</p>
<hr>
<h3 align="center">Every site on HTTPS</h3>
<p align="center">Caddy is an extensible server platform that uses TLS by default.</p>
<p align="center">
	<a href="https://github.com/caddyserver/caddy/releases">Releases</a> ·
	<a href="https://caddyserver.com/docs/">Documentation</a> ·
	<a href="https://caddy.community">Get Help</a>
</p>
<p align="center">
	<a href="https://github.com/caddyserver/caddy/actions/workflows/ci.yml"><img src="https://github.com/caddyserver/caddy/actions/workflows/ci.yml/badge.svg"></a>
	&nbsp;
	<a href="https://www.bestpractices.dev/projects/7141"><img src="https://www.bestpractices.dev/projects/7141/badge"></a>
	&nbsp;
	<a href="https://pkg.go.dev/github.com/caddyserver/caddy/v2"><img src="https://img.shields.io/badge/godoc-reference-%23007d9c.svg"></a>
	&nbsp;
	<a href="https://x.com/caddyserver" title="@caddyserver on Twitter"><img src="https://img.shields.io/twitter/follow/caddyserver" alt="@caddyserver on Twitter"></a>
	&nbsp;
	<a href="https://caddy.community" title="Caddy Forum"><img src="https://img.shields.io/badge/community-forum-ff69b4.svg" alt="Caddy Forum"></a>
	<br>
	<a href="https://sourcegraph.com/github.com/caddyserver/caddy?badge" title="Caddy on Sourcegraph"><img src="https://sourcegraph.com/github.com/caddyserver/caddy/-/badge.svg" alt="Caddy on Sourcegraph"></a>
	&nbsp;
	<a href="https://cloudsmith.io/~caddy/repos/"><img src="https://img.shields.io/badge/OSS%20hosting%20by-cloudsmith-blue?logo=cloudsmith" alt="Cloudsmith"></a>
</p>
<p align="center">
	<b>Powered by</b>
	<br>
	<a href="https://github.com/caddyserver/certmagic">
		<picture>
			<source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/55066419/206946718-740b6371-3df3-4d72-a822-47e4c48af999.png">
			<source media="(prefers-color-scheme: light)" srcset="https://user-images.githubusercontent.com/1128849/49704830-49d37200-fbd5-11e8-8385-767e0cd033c3.png">
			<img src="https://user-images.githubusercontent.com/1128849/49704830-49d37200-fbd5-11e8-8385-767e0cd033c3.png" alt="CertMagic" width="250">
		</picture>
	</a>
</p>

<!-- Warp sponsorship requests this section -->
<div align="center" markdown="1">
	<hr>
	<sup>Special thanks to:</sup>
	<br>
	<a href="https://go.warp.dev/caddy">
		<img alt="Warp sponsorship" width="400" src="https://github.com/user-attachments/assets/c8efffde-18c7-4af4-83ed-b1aba2dda394">
	</a>

### [Warp, built for coding with multiple AI agents](https://go.warp.dev/caddy)
[Available for MacOS, Linux, & Windows](https://go.warp.dev/caddy)<br>
</div>

<hr>

### Menu

- [Features](#features)
- [Install](#install)
- [Build from source](#build-from-source)
	- [For development](#for-development)
	- [With version information and/or plugins](#with-version-information-andor-plugins)
- [Quick start](#quick-start)
- [Overview](#overview)
- [Full documentation](#full-documentation)
- [Getting help](#getting-help)
- [About](#about)


## [Features](https://caddyserver.com/features)

- **Easy configuration** with the [Caddyfile](https://caddyserver.com/docs/caddyfile)
- **Powerful configuration** with its [native JSON config](https://caddyserver.com/docs/json/)
- **Dynamic configuration** with