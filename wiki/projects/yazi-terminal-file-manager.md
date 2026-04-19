# Yazi Terminal File Manager

> Yazi is a blazing fast terminal file manager written in Rust, leveraging async I/O for high performance. It offers a modern, customizable interface with features like image previews, plugin systems, and cross-platform compatibility. Notable for its speed and extensive feature set.
> Last updated: 2026-04-19

## Overview

### Repository Info
- **URL**: [GitHub](https://github.com/sxyazi/yazi)
- **Stars**: 36,749
- **Forks**: 820
- **Language**: Rust
- **License**: MIT License
- **Created**: 2023-07-08
- **Updated**: 2026-04-19
- **Topics**: android, asyncio, cli, command-line, concurrency, cross-platform, developer-tools, file-explorer, file-manager, filesystem, linux, macos, neovim, productivity, rust, terminal, tui, vim, windows
- **Open Issues**: 66

### README Highlights
- Sponsored by [Warp](https://go.warp.dev/yazi) (terminal emulator with AI agent support).
- **Core Concept**: "Duck" (Yazi's name) as a terminal file manager prioritizing speed and usability.
- **Internal Workings**: Explained in [Why is Yazi Fast?](https://yazi-rs.github.io/blog/why-is-yazi-fast) blog post.

### Core Features
- **Asynchronous Architecture**:
  - Full async I/O operations with multi-threaded CPU task distribution.
  - Real-time progress updates and task cancellation.
- **Media Support**:
  - Built-in image protocols (Kitty, iTerm2, WezTerm).
  - Integration with Überzug++ and Chafa for terminal image rendering.
- **Code & File Handling**:
  - Pre-loading mechanism for accelerated file/image loading.
  - Code highlighting and decoding capabilities.

### Advanced Capabilities
- **Plugin System**:
  - Concurrent UI and functional plugins (Lua-based).
  - Custom previewers, preloaders, and task managers.
- **Virtual Filesystem**:
  - Remote file management and custom search engines.
- **Data Distribution**:
  - Client-server architecture with Lua-based publish-subscribe model.
  - Cross-instance communication and state persistence.

### Integration & UX
- **Toolchain Compatibility**:
  - ripgrep, fd, fzf, zoxide, Git, Mount Manager.
- **User Interface**:
  - Vim-like input components, multi-tab support.
  - Scrollable previews for videos, PDFs, archives, and directories.
- **Customization**:
  - Theme system, mouse support, trash bin, and custom layouts.

### Project Status
- **Current Phase**: Public beta (daily use recommended despite active development).
- **Documentation**:
  - [Installation Guide](https://yazi-rs.github.io/docs/installation)
  - [Feature Overview](https://yazi-rs.github.io/features)
- **Community**:
  - [Discord (English)](https://discord.gg/qfADduSdJu)
  - [Telegram (Chinese)](https://t.me/yazi_rs)

## Key Points
- Full asynchronous I/O for maximum performance.
- Lua-based plugin system for UI and functional extensions.
- Cross-platform support (Linux, macOS, Windows, Android).
- Built-in virtual filesystem and remote management capabilities.
- Extensive media/image preview support across terminals.

## Sources
- [GitHub](https://github.com/sxyazi/yazi)
- [원본](raw/ingest/projects/2026-04-19-yazi-terminal-file-manager.md)