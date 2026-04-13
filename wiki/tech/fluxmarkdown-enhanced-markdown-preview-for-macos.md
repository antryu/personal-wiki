# FluxMarkdown: Enhanced Markdown Preview for macOS

> FluxMarkdown enhances macOS Finder QuickLook with advanced Markdown rendering, supporting Mermaid diagrams, KaTeX math, GFM features, and export capabilities. It offers a seamless, feature-rich preview experience for developers and writers.  
> Last updated: 2026-04-13

## Overview
**FluxMarkdown** is a macOS QuickLook extension that transforms Markdown files into richly formatted previews directly in Finder. Built in Swift under the GNU GPL v3.0 license, it addresses limitations of standard Markdown viewers by integrating advanced features like diagram rendering, mathematical expressions, and interactive tables of contents.  

Key components include:
- **Repository Details**:  
  - **Stars**: 464 | **Forks**: 14  
  - **Language**: Swift | **License**: GNU GPL v3.0  
  - **Created**: 2025-12-26 | **Updated**: 2026-04-13  

- **Core Functionality**:  
  Press `Space` in Finder to instantly preview Markdown files with:  
  - **Mermaid diagrams** (flowcharts, sequence diagrams)  
  - **KaTeX math** (inline/block equations)  
  - **GitHub Flavored Markdown** (tables, task lists, strikethrough)  
  - **Code syntax highlighting** for 40+ languages  
  - **Export options**: PDF (`Cmd+Shift+P`) and HTML (`Cmd+Shift+E`)  

- **Installation**:  
  - **Homebrew**: `brew install --cask xykong/tap/flux-markdown`  
  - **Manual**: Download `FluxMarkdown.dmg` from [Releases](https://github.com/xykong/flux-markdown/releases)  

- **Customization**:  
  - **Themes**: Light, Dark, or System mode  
  - **Settings**: Toggle Mermaid/KaTeX support, adjust font size, and select code themes  
  - **Position Memory**: Retains scroll position and last-viewed file  

- **Troubleshooting**:  
  - Resolve "damaged" errors: `xattr -cr "/Applications/FluxMarkdown.app"`  
  - Refresh QuickLook cache: `qlmanage -r`  

## Key Points
- Supports **12+ file formats** (`.md`, `.mdx`, `.rmd`, etc.)  
- Includes **charts/graphs** via Vega, Vega-Lite, and Graphviz (DOT)  
- Interactive **TOC panel** with section tracking  
- **YAML metadata parsing** into clean tables  
- **Gesture-based zoom/pan** (`Cmd +/-/0`, pinch gestures)  

## Sources
- [GitHub](https://github.com/xykong/flux-markdown)
- [원본](raw/ingest/tech/2026-04-13-fluxmarkdown-enhanced-markdown-preview-for-macos.md)