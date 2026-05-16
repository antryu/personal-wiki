<!-- GitHub Trending: Rust | 837 stars | +36 today -->

# ilysenko/codex-desktop-linux

> Run OpenAI Codex Desktop on Linux - automated installer

## Repository Info
- **URL**: https://github.com/ilysenko/codex-desktop-linux
- **Stars**: 837
- **Forks**: 138
- **Language**: Rust
- **License**: MIT License
- **Created**: 2026-02-05
- **Updated**: 2026-05-16
- **Topics**: N/A
- **Open Issues**: 6

## README (excerpt)
# Codex Desktop for Linux

Unofficial Linux build of [OpenAI Codex Desktop](https://openai.com/codex/). The official Codex Desktop app is macOS-only — this project converts the upstream macOS `Codex.dmg` into a runnable Linux Electron app, ships native `.deb` / `.rpm` / `.pkg.tar.zst` packages plus local AppImage self-builds and a Nix flake, and includes a local auto-updater that rebuilds future native Linux packages from newer upstream DMGs.

Before opening a pull request, please read [CONTRIBUTING.md](CONTRIBUTING.md).

## Linux features

Optional Linux-only additions live in `linux-features/`. Use them for integrations that are useful for some users but should not become mandatory core patches. Copy `linux-features/features.example.json` to the git-ignored `linux-features/features.json` before building; enabled features are applied during the install/build pipeline. See [`linux-features/README.md`](linux-features/README.md) for the feature contract.

## Supported platforms

| Distro / family | Package manager | Format produced | Notes |
|---|---|---|---|
| Debian, Ubuntu, Pop!_OS, Mint, Elementary | `apt` | `.deb` | Managed Node.js runtime is bundled; no distro Node.js package is required |
| Fedora 41+ | `dnf5` | `.rpm` | |
| Fedora < 41 | `dnf` | `.rpm` | |
| openSUSE Tumbleweed / Leap | `zypper` | `.rpm` | Uses `zypper --no-gpg-checks install` for the local rebuild |
| Arch, Manjaro, EndeavourOS | `pacman` | `.pkg.tar.zst` | |
| Atomic desktops / other Linux distros | none | `.AppImage` | Local self-build only; no bundled auto-updater |
| NixOS / Nix | flake | runnable directly | `nix run github:ilysenko/codex-desktop-linux` |

Anything systemd-based should work for the optional auto-updater service (`systemd --user`). The launcher targets Wayland with `XWayland` first (better Electron popup positioning); pure Wayland sessions fall through to `--ozone-platform-hint=auto`. X11 is fully supported.

## What you get

| Feature | Status | Notes |
|---|---|---|
| Standard Codex Desktop UI | ✅ always | Chats, browser, files, MCP plugins |
| Auto-updater (`codex-update-manager`) | ✅ native packages | Detects newer upstream DMGs, rebuilds + installs native packages locally |
| Native packaging (`.deb` / `.rpm` / `.pkg.tar.zst`) | ✅ always | One-shot `make package` picks your distro |
| AppImage self-build | ✅ manual | `make appimage` writes a local `dist/*.AppImage`; rebuild manually after upstream updates |
| Linux tray + warm-start handoff | ✅ always | Single-instance lock, second-instance window focus |
| GUI install prompts (`kdialog` / `zenity`) | ✅ if installed | Falls back to interactive terminal prompt |
| Linux browser annotations | ✅ always | Stored-anchor screenshots, isolated marker rendering |
| Chrome plugin native host | ✅ always | Auto-installs the upstream Chrome plugin plus Linux native-messaging support for Chrome, Brave, and Chromium |
| Linux Computer Use | ⚠️ opt-in | MCP backend registers by default; the in-app UI is opt-in. Supports screenshots, accessibility, window targeting, and input synthesis |
| Mobile remote control host | 🧪 opt-in experiment | SSH remote projects work normally. Phone/Android host access is upstream macOS-only by default; `linux-features/remote-mobile-control` adds experimental Linux device-key, visibility, and host-enablement patches |
| Server-gated features (e.g. `gpt-5.5`) | 🟡 server-side | OpenAI rolls per-account, not project-controlled. Building a fresh package does not unlock these. |

## Before you install

The generated app and native packages bundle a managed Linux Node.js runtime. You do **not** need a distro `nodejs` / `npm` package for normal installs, Browser Use, Codex CLI install/update, or local auto-update rebuilds.

The Codex CLI is still required at runtime. The first launch can install or update `@openai/codex` with the bundled `npm`, or you can manage the CLI yourself.

On some systems (e.g. hardened Linux setups), `/tmp` may be mounted with `noexec`, preven