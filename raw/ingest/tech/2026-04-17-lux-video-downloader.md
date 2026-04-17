<!-- GitHub Trending: Go | 31,241 stars | +123 today -->

# iawia002/lux

> 👾 Fast and simple video download library and CLI tool written in Go

## Repository Info
- **URL**: https://github.com/iawia002/lux
- **Stars**: 31,241
- **Forks**: 3,279
- **Language**: Go
- **License**: MIT License
- **Created**: 2018-02-24
- **Updated**: 2026-04-17
- **Topics**: bilibili, crawler, download, downloader, go, golang, iqiyi, qq, scraper, tumblr, video, youku, youtube
- **Open Issues**: 535

## README (excerpt)
<h1 align="center">Lux</h1>

<p align="center"><i>Let there be Lux!</i></p>

<div align="center">
  <a href="https://codecov.io/gh/iawia002/lux">
    <img src="https://img.shields.io/codecov/c/github/iawia002/lux.svg?style=flat-square" alt="Codecov">
  </a>
  <a href="https://github.com/iawia002/lux/actions">
    <img src="https://img.shields.io/github/actions/workflow/status/iawia002/lux/ci.yml?style=flat-square" alt="GitHub Workflow Status">
  </a>
  <a href="https://goreportcard.com/report/github.com/iawia002/lux">
    <img src="https://goreportcard.com/badge/github.com/iawia002/lux?style=flat-square" alt="Go Report Card">
  </a>
  <a href="https://github.com/iawia002/lux/releases">
    <img src="https://img.shields.io/github/release/iawia002/lux.svg?style=flat-square" alt="GitHub release">
  </a>
  <a href="https://formulae.brew.sh/formula/lux">
    <img src="https://img.shields.io/homebrew/v/lux.svg?style=flat-square" alt="Homebrew">
  </a>
</div>

👾 Lux is a fast and simple video downloader built with Go.

- [Installation](#installation)
  - [Prerequisites](#prerequisites)
  - [Install via `go install`](#install-via-go-install)
  - [Homebrew (macOS only)](#homebrew-macos-only)
  - [Arch Linux](#arch-linux)
  - [Void Linux](#void-linux)
  - [Scoop on Windows](#scoop-on-windows)
  - [Chocolatey on Windows](#chocolatey-on-windows)
  - [Cask on Windows/macOS/Linux](#cask-on-windowsmacoslinux)
- [Getting Started](#getting-started)
  - [Download a video](#download-a-video)
  - [Download anything else](#download-anything-else)
  - [Download playlist](#download-playlist)
  - [Multiple inputs](#multiple-inputs)
  - [Resume a download](#resume-a-download)
  - [Auto retry](#auto-retry)
  - [Cookies](#cookies)
  - [Proxy](#proxy)
  - [Multi-Thread](#multi-thread)
  - [Short link](#short-link)
    - [bilibili](#bilibili)
  - [Use specified Referrer](#use-specified-referrer)
  - [Specify the output path and name](#specify-the-output-path-and-name)
  - [Debug Mode](#debug-mode)
  - [Reuse extracted data](#reuse-extracted-data)
  - [Options](#options)
    - [Download:](#download)
    - [Network:](#network)
    - [Playlist:](#playlist)
    - [Filesystem:](#filesystem)
    - [Subtitle:](#subtitle)
    - [Youku:](#youku)
    - [aria2:](#aria2)
- [Supported Sites](#supported-sites)
- [Known issues](#known-issues)
  - [优酷](#优酷)
  - [西瓜/头条视频](#西瓜头条视频)
- [Contributing](#contributing)
- [Authors](#authors)
- [Similar projects](#similar-projects)
- [License](#license)

## Installation

### Prerequisites

The following dependencies are required and must be installed separately.

- **[FFmpeg](https://www.ffmpeg.org)**

> **Note**: FFmpeg does not affect the download, only affects the final file merge.

### Install via `go install`

To install Lux, use `go install`, or download the binary file from [Releases](https://github.com/iawia002/lux/releases) page.

```bash
$ go install github.com/iawia002/lux@latest
```

### Homebrew (macOS only)

For macOS users, you can install `lux` via:

```bash
$ brew install lux
```

### Arch Linux

For Arch Users [AUR](https://aur.archlinux.org/packages/lux-dl/) package is available.

### Void Linux

For Void linux users, you can install `lux` via:

```
$ xbps-install -S lux
```

### [Scoop](https://scoop.sh/) on Windows

```sh
$ scoop install lux
```

### [Chocolatey](https://chocolatey.org/) on Windows

```
$ choco install lux
```

### [Cask](https://github.com/axetroy/cask.rs) on Windows/macOS/Linux

```sh
$ cask install github.com/iawia002/lux
```

## Getting Started

Usage:

```
lux [OPTIONS] URL [URL...]
```

### Download a video

```console
$ lux "https://www.youtube.com/watch?v=dQw4w9WgXcQ"

 Site:      YouTube youtube.com
 Title:     Rick Astley - Never Gonna Give You Up (Video)
 Type:      video
 Stream:
     [248]  -------------------
     Quality:         1080p video/webm; codecs="vp9"
     Size:            63.93 MiB (67038963 Bytes)
     # download with: lux -f 248 ...

 41.88 MiB / 63.93 MiB [========