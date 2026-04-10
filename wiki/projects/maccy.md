# Maccy

> A lightweight, open-source clipboard manager for macOS with a native UI, keyboard-first design, and strong privacy focus. Notable for its popularity (19.3k stars) and active development since 2018.  
> Last updated: 2026-04-10

## Overview

### Repository Info
- **URL**: [GitHub](https://github.com/p0deje/Maccy)
- **Stars**: 19,315
- **Forks**: 899
- **Language**: Swift
- **License**: MIT License
- **Created**: 2018-01-31
- **Updated**: 2026-04-10
- **Topics**: clipboard-manager, maccy, macos
- **Open Issues**: 162

### Features
- Lightweight and fast performance
- Keyboard-driven interface
- Secure, privacy-focused design
- Native macOS UI
- Open source and free

### Installation
Download from [releases](https://github.com/p0deje/Maccy/releases/latest) or use Homebrew:
```sh
brew install maccy
```

### Usage
- **Trigger**: `SHIFT + COMMAND + C` or click menu bar icon
- **Search**: Type to filter clipboard history
- **Copy/Paste**:
  - `ENTER`: Copy selected item
  - `OPTION + ENTER`: Paste
  - `OPTION + SHIFT + ENTER`: Paste without formatting
- **Advanced Actions**:
  - Pin/unpin items with `OPTION + P`
  - Clear history with `OPTION + COMMAND + DELETE`
  - Customize via `COMMAND + ,` (Preferences)

### Advanced Options
- **Ignore Copied Items**:
  ```sh
  defaults write org.p0deje.Maccy ignoreEvents true
  ```
- **Adjust Clipboard Check Interval**: Modify settings in Preferences
- **Universal Clipboard Exclusion**: Configure in Preferences to ignore cross-device copies

### FAQ Highlights
- **Pasting Issues**: Ensure Maccy has accessibility permissions in System Settings.
- **Hotkey Conflicts**: Use a unique shortcut not reserved by macOS.
- **Password Field Shortcuts**: Enable "Allow in secure fields" in Maccy's security settings.

## Key Points
- Built with Swift for macOS 14+ (Sonoma) compatibility
- High user engagement (19k+ stars, 900+ forks)
- Prioritizes privacy with local storage only
- Extensive keyboard shortcut support
- Active development with recent 2026 update

## Sources
- [GitHub](https://github.com/p0deje/Maccy)
- [원본](raw/ingest/projects/2026-04-10-maccy.md)