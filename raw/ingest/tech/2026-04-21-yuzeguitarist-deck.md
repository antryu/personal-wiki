<!-- GitHub Trending: Swift | 1,067 stars | +11 today -->

# yuzeguitarist/Deck

> Deck is a modern, native, privacy-first clipboard manager for macOS.

## Repository Info
- **URL**: https://github.com/yuzeguitarist/Deck
- **Stars**: 1,067
- **Forks**: 29
- **Language**: Swift
- **License**: Other
- **Created**: 2025-12-06
- **Updated**: 2026-04-21
- **Topics**: automation, clipboard, clipboard-manager, deck, deckclipboard, developer-tools, encryption, local-first, mac, macos, macos-app, macos-application, privacy-first, productivity, swift, swiftui
- **Open Issues**: 12

## README (excerpt)
<a href="https://deckclip.app">
    <img width="1024" alt="The modern, native, privacy-first clipboard manager for macOS." src="photos/Deck.webp">
</a>

<p align="center">
  <a href="#features">Features</a> ·
  <a href="#install">Install</a> ·
  <a href="#quick-start">Quick Start</a> ·
  <a href="#integrations">Integrations</a> ·
  <a href="#screenshots">Screenshots</a> ·
  <a href="https://deckclip.app/docs">Docs</a> ·
  <a href="#support-deck">Support</a> ·
  <a href="#license">License</a> ·
  <a href="https://deckclip.app">Website</a> ·
  <a href="README_CN.md">中文</a>
</p>

<p align="center">
  <a href="https://deckclip.app">
    <img src="https://img.shields.io/badge/platform-macOS_14+-blue?style=flat-square" alt="macOS 14+ clipboard manager">
    <img src="https://img.shields.io/badge/swift-5.9+-F05138?style=flat-square&logo=swift&logoColor=white" alt="Built with Swift 5.9+">
    <img src="https://img.shields.io/badge/license-All_Rights_Reserved-red?style=flat-square" alt="All Rights Reserved">
  </a>
</p>

---

## Features

### Clipboard History & Search

- Records text, images, files, colors, links, and rich text.
- Search by keyword, regex, or type — with on-device **semantic search** powered by NLEmbedding.
- Slash-triggered search rules: filter by app, date, or type (include/exclude, multi-value).
- Per-item custom titles — searchable, and synced across devices.
- Tags and smart categories.
- Context-aware ordering: items sorted by relevance to the current app.

### Smart Features

- **Smart Rules** — automated workflows with condition matching and actions, including JavaScript script plugins.
- **OCR** — automatically extracts text from images in the background (Vision framework, multi-language).
- **Cursor Assistant** — triple-tap Shift to get context-aware clipboard suggestions at your cursor, with trigger-word matching and template integration.
- **Template Library** — save reusable clipboard templates with color coding and cursor-position paste.
- **Text Transformations** — JSON format/minify, Base64, URL encode/decode, case conversion, timestamp parsing, MD5 hash, line sort/dedup, and more.
- **IDE Source Anchor** — copies from VS Code, Xcode, JetBrains, Cursor, or Windsurf automatically capture file path + line number; click to jump back.
- **Figma Detection** — recognizes Figma clipboard content with a dedicated preview.
- **Link Preview** with one-tap QR code generation.
- **Link Cleaner** — strips tracking parameters from URLs.
- **Instant Calculation** — copy a math expression, see the result immediately.
- **Smart Text Detection** — identifies emails, URLs, phone numbers, code language, JWT tokens, and more.

### Privacy & Security

- **Local-first** — your data stays on your Mac by default.
- **Touch ID / Face ID** unlock before opening the panel.
- **Sensitive data filtering** — auto-detects bank card numbers and identity/passport numbers via Luhn algorithm; skips capture.
- **Window-aware protection** — detects sensitive window titles (password fields, login pages) and pauses capture automatically.
- **Clipboard steganography** — embed hidden messages in images or zero-width text.
- **Screen share detection** — optionally hides the panel during screen sharing or recording.
- **Pause mode** — temporarily stop capturing with one click.

### Sync & Sharing

- **LAN Sharing** with AES-GCM encryption and TOTP verification.
- **Direct IP Connection** — connect to peers by IP address, bypassing VPN or Bonjour issues.

### Workflow

- **Queue mode** — paste multiple items in sequence.
- **Keyboard-first** design with optional Vim mode.
- **Typing paste** — type clipboard content character-by-character instead of pasting.
- **Siri Shortcuts** — query recent clipboard items via App Intents.
- **CLI Bridge** — local automation and external integrations from the terminal.
- **Data export** — export your clipboard history.
- **Usage statistics** — all computed locally, never uploaded.
- Migration from Paste, Maccy,