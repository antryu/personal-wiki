<!-- GitHub Trending: Go | 33,525 stars | +24 today -->

# AdguardTeam/AdGuardHome

> Network-wide ads & trackers blocking DNS server

## Repository Info
- **URL**: https://github.com/AdguardTeam/AdGuardHome
- **Stars**: 33,525
- **Forks**: 2,299
- **Language**: Go
- **License**: GNU General Public License v3.0
- **Created**: 2016-07-06
- **Updated**: 2026-04-13
- **Topics**: adblock, adguard, dns, dns-over-https, dns-over-quic, dns-over-tls, dnscrypt, golang, open-source, privacy
- **Open Issues**: 1314

## README (excerpt)
&nbsp;
<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="doc/adguard_home_darkmode.svg">
    <img alt="AdGuard Home" src="doc/adguard_home_lightmode.svg" width="300px">
  </picture>
</p>
<h3 align="center">Privacy protection center for you and your devices</h3>
<p align="center">
  Free and open source, powerful network-wide ads & trackers blocking DNS server.
</p>
<p align="center">
  <a href="https://adguard.com/">AdGuard.com</a> |
  <a href="https://github.com/AdguardTeam/AdGuardHome/wiki">Wiki</a> |
  <a href="https://reddit.com/r/Adguard">Reddit</a> |
  <a href="https://twitter.com/AdGuard">Twitter</a> |
  <a href="https://t.me/adguard_en">Telegram</a>
  <br/><br/>
  <a href="https://codecov.io/github/AdguardTeam/AdGuardHome?branch=master">
    <img src="https://img.shields.io/codecov/c/github/AdguardTeam/AdGuardHome/master.svg" alt="Code Coverage"/>
  </a>
  <a href="https://goreportcard.com/report/AdguardTeam/AdGuardHome">
    <img src="https://goreportcard.com/badge/github.com/AdguardTeam/AdGuardHome" alt="Go Report Card"/>
  </a>
  <a href="https://hub.docker.com/r/adguard/adguardhome">
    <img alt="Docker Pulls" src="https://img.shields.io/docker/pulls/adguard/adguardhome.svg?maxAge=604800"/>
  </a>
  <br/>
  <a href="https://github.com/AdguardTeam/AdGuardHome/releases">
    <img src="https://img.shields.io/github/release/AdguardTeam/AdGuardHome/all.svg" alt="Latest release"/>
  </a>
  <a href="https://snapcraft.io/adguard-home">
    <img alt="adguard-home" src="https://snapcraft.io/adguard-home/badge.svg"/>
  </a>
</p>
<br/>
<p align="center">
  <img src="https://cdn.adtidy.org/public/Adguard/Common/adguard_home.gif" width="800"/>
</p>
<hr/>

AdGuard Home is a network-wide software for blocking ads and tracking. After you set it up, it'll cover ALL your home devices, and you don't need any client-side software for that.

It operates as a DNS server that re-routes tracking domains to a “black hole”, thus preventing your devices from connecting to those servers. It's based on software we use for our public [AdGuard DNS] servers, and both share a lot of code.

[AdGuard DNS]: https://adguard-dns.io/

- [Getting Started](#getting-started)
    - [Automated install (Linux/Unix/MacOS/FreeBSD/OpenBSD)](#automated-install-linux-and-mac)
    - [Alternative methods](#alternative-methods)
    - [Guides](#guides)
    - [API](#api)
- [Comparing AdGuard Home to other solutions](#comparison)
    - [How is this different from public AdGuard DNS servers?](#comparison-adguard-dns)
    - [How does AdGuard Home compare to Pi-Hole](#comparison-pi-hole)
    - [How does AdGuard Home compare to traditional ad blockers](#comparison-adblock)
    - [Known limitations](#comparison-limitations)
- [How to build from source](#how-to-build)
    - [Prerequisites](#prerequisites)
    - [Building](#building)
- [Contributing](#contributing)
    - [Test unstable versions](#test-unstable-versions)
    - [Reporting issues](#reporting-issues)
    - [Help with translations](#translate)
    - [Other](#help-other)
- [Projects that use AdGuard Home](#uses)
- [Acknowledgments](#acknowledgments)
- [Privacy](#privacy)

## <a href="#getting-started" id="getting-started" name="getting-started">Getting Started</a>

### <a href="#automated-install-linux-and-mac" id="automated-install-linux-and-mac" name="automated-install-linux-and-mac">Automated install (Linux/Unix/MacOS/FreeBSD/OpenBSD)</a>

To install with `curl` run the following command:

```sh
curl -s -S -L https://raw.githubusercontent.com/AdguardTeam/AdGuardHome/master/scripts/install.sh | sh -s -- -v
```

To install with `wget` run the following command:

```sh
wget --no-verbose -O - https://raw.githubusercontent.com/AdguardTeam/AdGuardHome/master/scripts/install.sh | sh -s -- -v
```

To install with `fetch` run the following command:

```sh
fetch -o - https://raw.githubusercontent.com/AdguardTeam/AdGuardHome/master/scripts/install.sh | sh -s -- -v
```

The script also a