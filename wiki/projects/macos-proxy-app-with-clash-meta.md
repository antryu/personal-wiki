# macOS Proxy App with Clash Meta

> A macOS VPN proxy app powered by Clash Meta, notable for its transparent proxy architecture, per-app proxy configuration, and integration with Mihomo (Clash Meta) for advanced routing and subscription management.  
> Last updated: 2026-04-10

## Overview

### Repository Info
- **URL**: [GitHub](https://github.com/madeye/BaoLianDeng)
- **Stars**: 602
- **Forks**: 112
- **Language**: Swift
- **License**: GNU General Public License v3.0
- **Created**: 2015-08-21
- **Updated**: 2026-04-10
- **Open Issues**: 4

### Features
- **Transparent Proxy**: Uses `NETransparentProxyProvider` for low-latency, socket-level traffic interception.
- **Mihomo Core**: Leverages the [Mihomo](https://github.com/MetaCubeX/mihomo) (Clash Meta) engine via a Go-compiled `xcframework`.
- **Per-App Proxy**: Supports allowlists/blocklists for granular app-level proxy routing.
- **Subscription Management**: Manages Clash YAML and base64 subscription formats with refresh and switching capabilities.
- **Smart Routing**: Node latency indicators, proxy group switching, and rule/global/direct modes.
- **Traffic Analytics**: Visualizes daily, session, and monthly traffic statistics via bar charts.

### Architecture
```
┌─────────────────────────────────────────────┐
│             macOS App (SwiftUI)             │
│  ┌──────────┬────────┬───────┬───────────┐ │
│  │  Home    │ Config │ Data  │ Settings  │ │
│  │ Subs &   │ YAML   │Charts │ Groups /  │ │
│  │  Nodes   │ Editor │& Stats│ Logs      │ │
│  └──────────┴────────┴───────┴───────────┘ │
│  ┌───────────────────────────────────────┐  │
│  │  VPNManager (NETunnelProviderManager) │  │
│  └──────────────────┬────────────────────┘  │
├─────────────────────┼───────────────────────┤
│    System Extension (TransparentProxy)      │
│  ┌──────────────────┴────────────────────┐  │
│  │  NETransparentProxyProvider           │  │
│  │    ┌──────────────────────────────┐   │  │
│  │    │ MihomoCore.xcframework (Go)  │   │  │
│  │    │  - Proxy Engine              │   │  │
│  │    │  - DNS (fake-ip)             │   │  │
│  │    │  - Rules / Routing           │   │  │
│  │    └──────────────────────────────┘   │  │
│  └───────────────────────────────────────┘  │
└─────────────────────────────────────────────┘
```

**IPC** between the app and tunnel extension uses `NETunnelProviderSession.sendMessage` for mode switching, traffic stats, and version queries. Preferences are shared via `UserDefaults`.

### Installation Methods
- **Homebrew**:
  ```bash
  brew tap madeye/BaoLianDeng
  brew install --cask baoliandeng
  ```
- **DMG**: Download from [Releases](https://github.com/madeye/BaoLianDeng/releases/latest) and follow setup instructions.
- **Source Build**: Requires macOS 14+, Xcode 15+, Go 1.23+. Steps include building the Go framework, configuring signing, and running via Xcode.

## Key Points
- Uses `NETransparentProxyProvider` for faster, lower-level traffic interception compared to TUN-based solutions.
- Integrates Mihomo (Clash Meta) as a compiled `xcframework` for native macOS performance.
- Supports per-app proxy rules, subscription management, and detailed traffic analytics.
- Open-source under GPL-3.0 with notarized DMG distributions.

## Sources
- [GitHub](https://github.com/madeye/BaoLianDeng)
- [원본](raw/ingest/projects/2026-04-10-macos-proxy-app-with-clash-meta.md)