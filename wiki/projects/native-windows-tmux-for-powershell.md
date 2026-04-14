# Native Windows Tmux for PowerShell

> A native Windows terminal multiplexer built in Rust that brings tmux-like functionality to PowerShell, Windows Terminal, and cmd.exe. This project offers full mouse support, tmux themes, and compatibility with `.tmux.conf` files, all without requiring WSL or Cygwin.  
> Last updated: 2026-04-14

## Overview

**psmux** is a terminal multiplexer for Windows, designed to emulate the functionality of tmux in a native Windows environment. Built in Rust and compatible with PowerShell 7+, Windows Terminal, and cmd.exe, it offers features such as window splitting, session management, mouse support, and full compatibility with tmux commands and configurations. Unlike traditional tmux ports, psmux directly uses Windows ConPTY and doesn't rely on Unix-like subsystems like WSL or Cygwin.

The project is actively maintained and offers multiple installation methods, including WinGet, Scoop, Cargo, and Chocolatey. It also includes extensive documentation and supports a wide range of features such as tmux themes, scripting, and SSH with mouse integration.

## Key Points

- **Native Windows Implementation**: Built in Rust for Windows without needing WSL or Cygwin.
- **Full Tmux Compatibility**: Supports tmux commands, `.tmux.conf` files, and themes.
- **Mouse Support**: Full mouse interaction for panes and windows.
- **PowerShell Integration**: Works with PowerShell 7+ and Windows Terminal.
- **Multiple Installation Methods**: Available via WinGet, Scoop, Cargo, Chocolatey, and GitHub releases.

## Sources

- [GitHub](https://github.com/psmux/psmux)
- [원본](raw/ingest/projects/2026-04-14-native-windows-tmux-for-powershell.md)