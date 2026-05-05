<!-- GitHub Trending: Rust | 6,929 stars | +40 today -->

# warp-tech/warpgate

> Fully transparent SSH, HTTPS, Kubernetes, MySQL and Postgres bastion/PAM that doesn't need additional client-side software

## Repository Info
- **URL**: https://github.com/warp-tech/warpgate
- **Stars**: 6,929
- **Forks**: 270
- **Language**: Rust
- **License**: Apache License 2.0
- **Created**: 2022-02-05
- **Updated**: 2026-05-05
- **Topics**: bastion, bastion-host, https, https-proxy, infrastructure, kubectl, kubernetes, mysql, mysql-proxy, pam, postgresql-proxy, privileged-access-management, proxy, rust, ssh, ssh-server
- **Open Issues**: 200

## README (excerpt)
<p align="center">
<img src="https://github.com/user-attachments/assets/89be835b-ff96-46df-94c7-ae2d176615e3" />
</p>

<br/>

<p align="center">
<picture>
  <source media="(prefers-color-scheme: dark)" srcset=".github/readme/brand-dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="warpgate-web/public/assets/brand.svg">
  <img alt="Shows a black logo in light color mode and a white one in dark color mode." src=".github/readme/brand-dark.svg">
</picture>
</p>

<br/>
<p align="center">
<a href="https://github.com/warp-tech/warpgate/releases/latest"><img alt="GitHub All Releases" src="https://img.shields.io/github/downloads/warp-tech/warpgate/total.svg?label=DOWNLOADS&logo=github&style=for-the-badge&color=8f8"></a> &nbsp; <a href="https://nightly.link/warp-tech/warpgate/workflows/build/main"><img src="https://shields.io/badge/-Nightly%20Builds-fa5?logo=hackthebox&logoColor=444&style=for-the-badge"/></a> &nbsp; <a href="https://discord.gg/Vn7BjmzhtF"><img alt="Discord" src="https://img.shields.io/discord/1280890060195233934?style=for-the-badge&color=acc&logo=discord&logoColor=white&label=Discord"></a>
</p>


<p align="center">
  <a href="https://ko-fi.com/J3J8KWTF">
    <img src="https://cdn.ko-fi.com/cdn/kofi3.png?v=2" width="150">
  </a>
</p>

---

Warpgate is a smart & fully transparent SSH, HTTPS, Kubernetes, MySQL, PostgreSQL bastion host that doesn't require a client app or an SSH wrapper.

* Set it up in your DMZ, add user accounts and easily assign them to specific hosts and URLs within the network.
* Warpgate will record every session for you to view (live) and replay later through a built-in admin web UI.
* Not a jump host - forwards connection straight to the target in a way that's fully transparent to the client.
* Native 2FA and SSO support (TOTP & OpenID Connect)
* Single binary with no dependencies.
* Written in 100% safe Rust.

<p align="center" style="margin: 30px 0 10px">Supported by: </p>
<p align="center" style="margin: 0 0 30px">
<a href="https://floss.fund"><img src="https://floss.fund/static/badge.svg" alt="FLOSS/fund badge" /></a>
</p>


## Getting started & downloads

* See the [Getting started](https://warpgate.null.page/getting-started/) docs page (or [Getting started on Docker](https://warpgate.null.page/getting-started-on-docker/)).
* [Release / beta binaries](https://github.com/warp-tech/warpgate/releases)
* [Nightly builds](https://nightly.link/warp-tech/warpgate/workflows/build/main)

## How is Warpgate different from a jump host / VPN / Teleport?

| Warpgate | SSH jump host | VPN | Teleport |
|-|-|-|-|
| ✅ **Precise 1:1 assignment between users and services** | (Usually) full access to the network behind the jump host | (Usually) full access to the network | ✅ **Precise 1:1 assignment between users and services** |
| ✅ **No custom client needed** | Jump host config needed | ✅ **No custom client needed** | Custom client required |
| ✅ **2FA out of the box** | 🟡 2FA possible with additional PAM plugins | 🟡 Depends on the provider | ✅ **2FA out of the box** |
| ✅ **SSO out of the box** | 🟡 SSO possible with additional PAM plugins | 🟡 Depends on the provider | Paid |
| ✅ **Command-level audit** | 🟡 Connection-level audit on the jump host, no secure audit on the target if root access is given | No secure audit on the target if root access is given | ✅ **Command-level audit** |
| ✅ **Full session recording** | No secure recording possible on the target if root access is given | No secure recording possible on the target if root access is given | ✅ **Full session recording** |
| ✅ **Non-interactive connections** | 🟡 Non-interactive connections are possible if the clients supports jump hosts natively | ✅ **Non-interactive connections** | Non-interactive connections require using an SSH client wrapper or running a tunnel |
| ✅ **Self-hosted, you own the data** | ✅ **Self-hosted, you own the data** | 🟡 Depends on the provider | SaaS |

<center>
      <img width="783" alt="image" src="ht