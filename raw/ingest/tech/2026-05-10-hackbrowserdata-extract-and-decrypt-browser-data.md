<!-- GitHub Trending: Go | 13,952 stars | +144 today -->

# moonD4rk/HackBrowserData

> Extract and decrypt browser data, supporting multiple data types, runnable on various operating systems (macOS, Windows, Linux).

## Repository Info
- **URL**: https://github.com/moonD4rk/HackBrowserData
- **Stars**: 13,952
- **Forks**: 1,761
- **Language**: Go
- **License**: MIT License
- **Created**: 2020-06-18
- **Updated**: 2026-05-10
- **Topics**: browser, browser-extension, chrome, edge, firefox, golang, hacking, macos, pentest-tool, windows
- **Open Issues**: 38

## README (excerpt)
<div align="center">
<img src="LOGO.png" alt="hack-browser-data logo" width="440px" />
</div> 

# HackBrowserData

[![Lint](https://github.com/moonD4rk/HackBrowserData/actions/workflows/lint.yml/badge.svg)](https://github.com/moonD4rk/HackBrowserData/actions/workflows/lint.yml) [![Build](https://github.com/moonD4rk/HackBrowserData/actions/workflows/build.yml/badge.svg)](https://github.com/moonD4rk/HackBrowserData/actions/workflows/build.yml) [![Release](https://github.com/moonD4rk/HackBrowserData/actions/workflows/release.yml/badge.svg)](https://github.com/moonD4rk/HackBrowserData/actions/workflows/release.yml) [![Tests](https://github.com/moonD4rk/HackBrowserData/actions/workflows/test.yml/badge.svg?branch=main)](https://github.com/moonD4rk/HackBrowserData/actions/workflows/test.yml) [![codecov](https://codecov.io/gh/moonD4rk/HackBrowserData/branch/main/graph/badge.svg?token=KWJCN38657)](https://codecov.io/gh/moonD4rk/HackBrowserData)

`HackBrowserData` is a command-line tool for decrypting and exporting browser data (passwords, history, cookies, bookmarks, credit cards, download history, localStorage, sessionStorage and extensions) from the browser. It supports the most popular Chromium-based browsers and Firefox on Windows, macOS and Linux, plus Safari on macOS.

> Disclaimer: This tool is only intended for security research. Users are responsible for all legal and related liabilities resulting from the use of this tool. The original author does not assume any legal responsibility.

## Supported Data Categories

| Category       | Chromium-based | Firefox | Safari |
|:---------------|:--------------:|:-------:|:------:|
| Password       |       ✅        |    ✅    |   ✅    |
| Cookie         |       ✅        |    ✅    |   ✅    |
| Bookmark       |       ✅        |    ✅    |   ✅    |
| History        |       ✅        |    ✅    |   ✅    |
| Download       |       ✅        |    ✅    |   ✅    |
| Credit Card    |       ✅        |    -    |   -    |
| Extension      |       ✅        |    ✅    |   ✅    |
| LocalStorage   |       ✅        |    ✅    |   ✅    |
| SessionStorage |       ✅        |    -    |   -    |

## Supported Browsers

> On macOS, some Chromium-based browsers **require a current user password** to decrypt.
>
> Password decryption may fail on macOS 26.4 or later.

| Browser        | Windows | macOS | Linux |
|:---------------|:-------:|:-----:|:-----:|
| Chrome         |   ✅²   |   ✅   |   ✅   |
| Chrome Beta    |   ✅²   |   ✅   |   ✅   |
| Chromium       |    ✅    |   ✅   |   ✅   |
| Edge           |   ✅²   |   ✅   |   ✅   |
| Brave          |   ✅²   |   ✅   |   ✅   |
| Opera          |    ✅    |   ✅   |   ✅   |
| OperaGX        |    ✅    |   ✅   |   -   |
| Vivaldi        |    ✅    |   ✅   |   ✅   |
| Yandex         |    ✅    |   ✅   |   -   |
| CocCoc         |   ✅²   |   ✅   |   -   |
| Arc            |    -    |   ✅   |   -   |
| DuckDuckGo     |    ✅    |   -   |   -   |
| QQ             |    ✅    |   -   |   -   |
| 360 ChromeX    |    ✅    |   -   |   -   |
| 360 Chrome     |    ✅    |   -   |   -   |
| DC Browser     |    ✅    |   -   |   -   |
| Sogou Explorer |    ✅    |   -   |   -   |
| Firefox        |    ✅    |   ✅   |   ✅   |
| Safari¹        |    -    |   ✅   |   -   |

> ¹ Safari requires Full Disk Access; enable it in System Settings → Privacy & Security → Full Disk Access if extraction returns empty results.
>
> ² On Windows, decrypting Chromium 127+ cookies (Chrome / Chrome Beta / Edge / Brave / CocCoc) requires the App-Bound Encryption payload built via `make build-windows` — see [Building from source](#building-from-source) below.

## Getting Started

### Install

Installation of `HackBrowserData` is dead-simple, just download [the release for your system](https://github.com/moonD4rk/HackBrowserData/releases) and run the binary.

> In some situations, this security tool will be treated as a virus by Windows Defender or other antivirus software and can not be executed. The code is all open sou