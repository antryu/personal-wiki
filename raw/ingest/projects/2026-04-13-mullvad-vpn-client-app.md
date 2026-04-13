<!-- GitHub Trending: Rust | 6,962 stars | +8 today -->

# mullvad/mullvadvpn-app

> The Mullvad VPN client app for desktop and mobile

## Repository Info
- **URL**: https://github.com/mullvad/mullvadvpn-app
- **Stars**: 6,962
- **Forks**: 463
- **Language**: Rust
- **License**: GNU General Public License v3.0
- **Created**: 2017-12-19
- **Updated**: 2026-04-13
- **Topics**: electron, nodejs, openvpn, rust, vpn, wireguard
- **Open Issues**: 132

## README (excerpt)
# Mullvad VPN desktop and mobile app

Welcome to the Mullvad VPN client app source code repository.
This is the VPN client software for the Mullvad VPN service.
For more information about the service, please visit our website,
[mullvad.net](https://mullvad.net) (Also accessible via Tor on our
[onion service](http://o54hon2e2vj6c7m3aqqu6uyece65by3vgoxxhlqlsvkmacw6a7m7kiad.onion/)).

This repository contains all the source code for the
desktop and mobile versions of the app. For desktop this includes the system service/daemon
([`mullvad-daemon`](mullvad-daemon/)), a graphical user interface ([GUI](desktop/)) and a command
line interface ([CLI](mullvad-cli/)). The Android app uses the same backing system service for the
tunnel and security but has a dedicated frontend in [android/](android/). iOS consists of a
completely standalone implementation that resides in [ios/](ios/).

## Releases

There are built and signed releases for macOS, Windows, Linux and Android available on
[our website](https://mullvad.net/download/) and on
[GitHub](https://github.com/mullvad/mullvadvpn-app/releases/). The Android app is also available
on [Google Play] and [F-Droid] and the iOS version on [App Store].

[Google Play]: https://play.google.com/store/apps/details?id=net.mullvad.mullvadvpn
[F-Droid]: https://f-droid.org/packages/net.mullvad.mullvadvpn/
[App Store]: https://apps.apple.com/us/app/mullvad-vpn/id1488466513

You can find our code signing keys as well as instructions for how to cryptographically verify
your download on [Mullvad's Open Source page].

### Platform/OS support

These are the operating systems and their versions that the app officially supports. It might
work on many more versions, but we don't test for those and can't guarantee the quality or
security.

| OS/Platform | Supported versions |
|-------------|--------------------|
| Windows     | 10 and 11          |
| macOS       | The three latest major releases |
| Linux (Ubuntu)| The two latest LTS releases and the latest non-LTS releases |
| Linux (Fedora) | The versions that are not yet [EOL](https://fedoraproject.org/wiki/End_of_life) |
| Linux (Debian) | 12 and newer    |
| Android     | 8 and newer        |
| iOS         | 17.0 and newer     |

On Linux we test using the Gnome desktop environment. The app should, and probably does work
in other DEs, but we don't regularly test those.

## Features

Here is a table containing the features of the app across platforms. This is intended to reflect
the current state of the latest code in git, not necessarily any existing release.

|                                         | Windows | Linux | macOS | Android | iOS |
|-----------------------------------------|:-------:|:-----:|:-----:|:-------:|:---:|
| WireGuard                               |    ✓    |   ✓   |   ✓   |    ✓    |  ✓  |
| Quantum-resistant tunnels               |    ✓    |   ✓   |   ✓   |    ✓    |  ✓  |
| [DAITA]                                 |    ✓    |   ✓   |   ✓   |    ✓    |  ✓  |
| WireGuard multihop                      |    ✓    |   ✓   |   ✓   |    ✓    |  ✓  |
| WireGuard over TCP                      |    ✓    |   ✓   |   ✓   |    ✓    |  ✓  |
| WireGuard over Shadowsocks              |    ✓    |   ✓   |   ✓   |    ✓    |  ✓  |
| WireGuard over QUIC                     |    ✓    |   ✓   |   ✓   |    ✓    |  ✓  |
| Lightweight WireGuard Obfuscation (LWO) |    ✓    |   ✓   |   ✓   |    ✓    |     |
| Split tunneling                         |    ✓    |   ✓   |   ✓   |    ✓    |     |
| Custom DNS server                       |    ✓    |   ✓   |   ✓   |    ✓    |  ✓  |
| Content blockers (Ads etc)              |    ✓    |   ✓   |   ✓   |    ✓    |  ✓  |
| Optional local network access           |    ✓    |   ✓   |   ✓   |    ✓    |  ✓\* |
| [Externally audited](./audits)          |    ✓    |   ✓   |   ✓   |    ✓    |  ✓ |

\* The local network is always accessible on iOS with the current implementation

[DAITA]: https://mullvad.net/en/blog/introducing-de