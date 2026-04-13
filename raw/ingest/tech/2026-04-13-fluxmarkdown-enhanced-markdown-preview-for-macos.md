<!-- GitHub Trending: Swift | 463 stars | +68 today -->

# xykong/flux-markdown

> Markdown Preview Enhanced for macOS QuickLook

## Repository Info
- **URL**: https://github.com/xykong/flux-markdown
- **Stars**: 464
- **Forks**: 14
- **Language**: Swift
- **License**: GNU General Public License v3.0
- **Created**: 2025-12-26
- **Updated**: 2026-04-13
- **Topics**: N/A
- **Open Issues**: 14

## README (excerpt)
# FluxMarkdown

<p align="center">
  <em>Beautiful Markdown previews in macOS Finder QuickLook</em><br>
  Mermaid • KaTeX • GFM • TOC • Charts • Export
</p>

<p align="center">
  <a href="https://github.com/xykong/flux-markdown/stargazers">
    <img src="https://img.shields.io/github/stars/xykong/flux-markdown?style=social" alt="GitHub stars">
  </a>
  <a href="https://github.com/xykong/flux-markdown/releases">
    <img src="https://img.shields.io/github/v/release/xykong/flux-markdown?style=flat-square" alt="Latest release">
  </a>
  <a href="https://github.com/xykong/flux-markdown/releases">
    <img src="https://img.shields.io/github/downloads/xykong/flux-markdown/total?style=flat-square" alt="Downloads">
  </a>
  <a href="LICENSE">
    <img src="https://img.shields.io/github/license/xykong/flux-markdown?style=flat-square" alt="License">
  </a>
</p>

<p align="center">
  <a href="README_ZH.md">中文文档</a> •
  <a href="#-quick-install-30-seconds">Install</a> •
  <a href="#-troubleshooting">Troubleshooting</a>
</p>

---

## ✨ Demo

![FluxMarkdown Demo](docs/assets/demo.gif)

<p align="center">
  <strong>Press <code>Space</code> in Finder → Instant preview with diagrams, math, and more.</strong>
</p>

<p align="center">
  <em>👋 If FluxMarkdown helps you, consider giving it a</em>
  <a href="https://github.com/xykong/flux-markdown/stargazers">⭐ star on GitHub</a>!
</p>

---

## 🚀 Quick Install (30 seconds)

### Homebrew (Recommended)

```bash
brew install --cask xykong/tap/flux-markdown
```

### Manual (DMG)

1. Download the latest `FluxMarkdown.dmg` from [Releases](https://github.com/xykong/flux-markdown/releases)
2. Open the DMG
3. Drag **FluxMarkdown.app** to **Applications**

---

## 💡 Why FluxMarkdown?

| Feature | Description |
|---------|-------------|
| 📊 **Mermaid Diagrams** | Architecture diagrams, flowcharts, sequence diagrams |
| 🧮 **KaTeX Math** | Inline and block mathematical expressions |
| 📝 **GFM Support** | Tables, task lists, strikethrough, and GitHub Alerts |
| 🎨 **Code Highlighting** | Syntax highlighting for 40+ languages |
| 📊 **Charts & Graphs** | Vega, Vega-Lite, and Graphviz (DOT) support |
| 📑 **TOC Panel** | Interactive table of contents with section tracking |
| 📄 **YAML Metadata** | Auto-parses frontmatter into a clean table |
| 📤 **Export** | PDF (Cmd+Shift+P) / HTML (Cmd+Shift+E) — V2EX 用户求的功能！ |
| 🔍 **Zoom & Pan** | Cmd +/-/0, Cmd+scroll, pinch gestures |
| 💾 **Position Memory** | Remembers scroll position and last-viewed file |
| 🌓 **Themes** | Light, Dark, and System-synchronized modes |
| 📂 **File Formats** | Supports .md, .mdx, .rmd, .qmd, .mdoc, .mmd, .livemd, .mkd, .mkdn, .mkdown, .mdwn, .mdown, .markdown |

---

## ⚙️ Settings (Cmd+,)

FluxMarkdown includes a dedicated Settings window to customize your experience:

- **Appearance**: Switch between Light, Dark, or System themes.
- **Rendering**: Toggle Mermaid, KaTeX, or Emoji support.
- **Editor**: Adjust base font size and choose code highlighting themes (GitHub, Monokai, Atom One Dark, etc.).

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Space` | Open QuickLook preview (Finder) |
| `Cmd` + `+` / `-` / `0` | Zoom in / out / reset |
| `Cmd` + `Shift` + `E` | Export as HTML |
| `Cmd` + `Shift` + `P` | Export as PDF |
| `Cmd` + `,` | Open Settings |

---

## 🛠️ Troubleshooting

<details>
<summary><strong>"App is damaged" / "Unidentified developer"</strong></summary>

Run this in Terminal:
```bash
xattr -cr "/Applications/FluxMarkdown.app"
```
</details>

<details>
<summary><strong>QuickLook not showing updates</strong></summary>

Reset QuickLook cache:
```bash
qlmanage -r
```
</details>

<details>
<summary><strong>Preview not working at all</strong></summary>

1. Check if the app is in `/Applications/`
2. Try restarting Finder: `killall Finder`
3. Check `pluginkit -m -v` for active QuickLook extensions
</details>

**📚 More help:** See [`docs/user/TROUBLESHOOTING.md`](docs/user/TROUBLESHOOTING.md