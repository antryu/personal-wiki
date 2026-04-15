<!-- GitHub Trending: Rust | 18,463 stars | +90 today -->

# fathyb/carbonyl

> Chromium running inside your terminal

## Repository Info
- **URL**: https://github.com/fathyb/carbonyl
- **Stars**: 18,464
- **Forks**: 495
- **Language**: Rust
- **License**: BSD 3-Clause "New" or "Revised" License
- **Created**: 2023-01-20
- **Updated**: 2026-04-15
- **Topics**: browser, chromium, terminal
- **Open Issues**: 83

## README (excerpt)
<table align="center">
  <tbody>
    <tr>
      <td>
        <p></p>
        <pre>
   O    O
    \  /
O —— Cr —— O
    /  \
   O    O</pre>
      </td>
      <td><h1>Carbonyl</h1></td>
    </tr>
  </tbody>
</table>

Carbonyl is a Chromium based browser built to run in a terminal. [Read the blog post](https://fathy.fr/carbonyl).

It supports pretty much all Web APIs including WebGL, WebGPU, audio and video playback, animations, etc..

It's snappy, starts in less than a second, runs at 60 FPS, and idles at 0% CPU usage. It does not require a window server (i.e. works in a safe-mode console), and even runs through SSH.

Carbonyl originally started as [`html2svg`](https://github.com/fathyb/html2svg) and is now the runtime behind it.

## Usage

> Carbonyl on Linux without Docker requires the same dependencies as Chromium.

### Docker

```shell
$ docker run --rm -ti fathyb/carbonyl https://youtube.com
```

### npm

```console
$ npm install --global carbonyl
$ carbonyl https://github.com
```

### Binaries

- [macOS amd64](https://github.com/fathyb/carbonyl/releases/download/v0.0.3/carbonyl.macos-amd64.zip)
- [macOS arm64](https://github.com/fathyb/carbonyl/releases/download/v0.0.3/carbonyl.macos-arm64.zip)
- [Linux amd64](https://github.com/fathyb/carbonyl/releases/download/v0.0.3/carbonyl.linux-amd64.zip)
- [Linux arm64](https://github.com/fathyb/carbonyl/releases/download/v0.0.3/carbonyl.linux-arm64.zip)

## Demo

<table>
  <tbody>
    <tr>
      <td>
        <video src="https://user-images.githubusercontent.com/5746414/213682926-f1cc2de7-a38c-4125-9257-92faecfc7e24.mp4">
      </td>
      <td>
        <video src="https://user-images.githubusercontent.com/5746414/213682913-398d3d11-1af8-4ae6-a0cd-a7f878efd88b.mp4">
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <video src="https://user-images.githubusercontent.com/5746414/213682918-d6396a4f-ee23-431d-828e-4ad6a00e690e.mp4">
      </td>
    </tr>
  </tbody>
</table>

## Known issues

- Fullscreen mode not supported yet

## Comparisons

### Lynx

Lynx is the original terminal web browser, and the oldest one still maintained.

#### Pros

- When it understands a page, Lynx has the best layout, fully optimized for the terminal

#### Cons

> Some might sound like pluses, but Browsh and Carbonyl let you disable most of those if you'd like

- Does not support a lot of modern web standards
- Cannot run JavaScript/WebAssembly
- Cannot view or play media (audio, video, DOOM)

### Browsh

Browsh is the original "normal browser into a terminal" project. It starts Firefox in headless mode and connects to it through an automation protocol.

#### Pro

- It's easier to update the underlying browser: just update Firefox
- This makes development easier: just install Firefox and compile the Go code in a few seconds
- As of today, Browsh supports extensions while Carbonyl doesn't, although it's on our roadmap

#### Cons

- It runs slower and requires more resources than Carbonyl. 50x more CPU power is needed for the same content in average, that's because Carbonyl does not downscale or copy the window framebuffer, it natively renders to the terminal resolution.
- It uses custom stylesheets to fix the layout, which is less reliable than Carbonyl's changes to its HTML engine (Blink).

## Operating System Support

As far as tested, the operating systems under are supported:

- Linux (Debian, Ubuntu and Arch tested)
- MacOS
- Windows 11 and WSL

## Contributing

Carbonyl is split in two parts: the "core" which is built into a shared library (`libcarbonyl`), and the "runtime" which dynamically loads the core (`carbonyl` executable).

The core is written in Rust and takes a few seconds to build from scratch. The runtime is a modified version of the Chromium headless shell and takes more than an hour to build from scratch.

If you're just making changes to the Rust code, build `libcarbonyl` and replace it in a release version of Carbonyl.

### Core

```console
$ cargo build
```

### Runtime

Fe