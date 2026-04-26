<!-- GitHub Trending: Rust | 1,818 stars | +72 today -->

# zhom/donutbrowser

> Simple Yet Powerful Anti-Detect Browser 🍩

## Repository Info
- **URL**: https://github.com/zhom/donutbrowser
- **Stars**: 1,818
- **Forks**: 150
- **Language**: Rust
- **License**: GNU Affero General Public License v3.0
- **Created**: 2025-05-29
- **Updated**: 2026-04-26
- **Topics**: anti-detect, anti-detect-browser, anti-detection, browser, browser-management, chromium, firefox, management, manager, orchestration, orchestrator, privacy
- **Open Issues**: 8

## README (excerpt)
<div align="center">
  <img src="assets/logo.png" alt="Donut Browser Logo" width="150">
  <h1>Donut Browser</h1>
  <strong>Open Source Anti-Detect Browser</strong>
  <br>
  <a href="https://donutbrowser.com">donutbrowser.com</a>
</div>
<br>

<p align="center">
  <a style="text-decoration: none;" href="https://github.com/zhom/donutbrowser/releases/latest" target="_blank"><img alt="GitHub release" src="https://img.shields.io/github/v/release/zhom/donutbrowser">
  </a>
  <a style="text-decoration: none;" href="https://github.com/zhom/donutbrowser/issues" target="_blank">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat" alt="PRs Welcome">
  </a>
  <a style="text-decoration: none;" href="https://github.com/zhom/donutbrowser/blob/main/LICENSE" target="_blank">
    <img src="https://img.shields.io/badge/license-AGPL--3.0-blue.svg" alt="License">
  </a>
  <a href="https://app.fossa.com/projects/git%2Bgithub.com%2Fzhom%2Fdonutbrowser?ref=badge_shield&issueType=security" alt="FOSSA Status">
    <img src="https://app.fossa.com/api/projects/git%2Bgithub.com%2Fzhom%2Fdonutbrowser.svg?type=shield&issueType=security" alt="FOSSA Security Status"/>
  </a>
  <a style="text-decoration: none;" href="https://github.com/zhom/donutbrowser/network/members" target="_blank">
    <img src="https://img.shields.io/github/forks/zhom/donutbrowser?style=social" alt="GitHub forks">
  </a>
  <a style="text-decoration: none;" href="https://github.com/zhom/donutbrowser/releases" target="_blank">
    <img src="https://img.shields.io/github/downloads/zhom/donutbrowser/total" alt="Downloads">
  </a>
</p>

<img alt="Donut Browser Preview" src="assets/donut-preview.png" />

## Features

- **Unlimited browser profiles** — each fully isolated with its own fingerprint, cookies, extensions, and data
- **Chromium & Firefox engines** — Chromium powered by [Wayfern](https://wayfern.com), Firefox powered by [Camoufox](https://camoufox.com), both with advanced fingerprint spoofing
- **Proxy support** — HTTP, HTTPS, SOCKS4, SOCKS5 per profile, with dynamic proxy URLs
- **VPN support** — WireGuard configs per profile
- **Local API & MCP** — REST API and [Model Context Protocol](https://modelcontextprotocol.io) server for integration with Claude, automation tools, and custom workflows
- **Profile groups** — organize profiles and apply bulk settings
- **Import profiles** — migrate from Chrome, Firefox, Edge, Brave, or other Chromium browsers
- **Cookie & extension management** — import/export cookies, manage extensions per profile
- **Default browser** — set Donut as your default browser and choose which profile opens each link
- **Cloud sync** — sync profiles, proxies, and groups across devices (self-hostable)
- **E2E encryption** — optional end-to-end encrypted sync with a password only you know
- **Zero telemetry** — no tracking or device fingerprinting

## Install

<!-- install-links-start -->
### macOS

| | Apple Silicon | Intel |
|---|---|---|
| **DMG** | [Download](https://github.com/zhom/donutbrowser/releases/download/v0.22.0/Donut_0.22.0_aarch64.dmg) | [Download](https://github.com/zhom/donutbrowser/releases/download/v0.22.0/Donut_0.22.0_x64.dmg) |

Or install via Homebrew:

```bash
brew install --cask donut
```

### Windows

[Download Windows Installer (x64)](https://github.com/zhom/donutbrowser/releases/download/v0.22.0/Donut_0.22.0_x64-setup.exe) · [Portable (x64)](https://github.com/zhom/donutbrowser/releases/download/v0.22.0/Donut_0.22.0_x64-portable.zip)

### Linux

| Format | x86_64 | ARM64 |
|---|---|---|
| **deb** | [Download](https://github.com/zhom/donutbrowser/releases/download/v0.22.0/Donut_0.22.0_amd64.deb) | [Download](https://github.com/zhom/donutbrowser/releases/download/v0.22.0/Donut_0.22.0_arm64.deb) |
| **rpm** | [Download](https://github.com/zhom/donutbrowser/releases/download/v0.22.0/Donut-0.22.0-1.x86_64.rpm) | [Download](https://github.com/zhom/donutbrowser/releases/download/v0.22.0/Donut-0.22.0-1.aarch64.rpm) |
|