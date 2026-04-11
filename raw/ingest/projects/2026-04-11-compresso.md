<!-- GitHub Trending: TypeScript | 3,073 stars | +127 today -->

# codeforreal1/compressO

> Convert any video/image into a tiny size. 100% free & open-source. Available for Mac, Windows & Linux.

## Repository Info
- **URL**: https://github.com/codeforreal1/compressO
- **Stars**: 3,073
- **Forks**: 245
- **Language**: TypeScript
- **License**: GNU Affero General Public License v3.0
- **Created**: 2023-11-11
- **Updated**: 2026-04-11
- **Topics**: ffmpeg, image-processing, rust, tauri, typescript, v, video, vite
- **Open Issues**: 16

## README (excerpt)
<div align="center">
  <div align="center">
   <img width="100" height="100" src="public/logo.png" alt="Logo" />
  </div>
	<h1 align="center">CompressO</h1>
	<p align="center">
		Compress any video/image into a tiny size.
    </p>
    <i align="center">
		CompressO (🔉 pronounced like "Espresso" ) is a free and open-source video/image compression app.
    </i>
    <br />
    <p align="center">
		Available for <strong>Linux</strong>, <strong>Windows</strong> & <strong>MacOS</strong>.
    </p>
    <br />
	<div>
  <a href="https://github.com/codeforreal1/compressO/releases">
    <img alt="Linux" src="https://img.shields.io/badge/-Linux-yellow?style=flat-square&logo=linux&logoColor=black&color=orange" />
  </a>
  <a href="https://github.com/codeforreal1/compressO/releases">
    <img alt="Windows" src="https://img.shields.io/badge/-Windows-blue?style=flat-square&logo=windows&logoColor=white" />
  </a>
  <a href="https://github.com/codeforreal1/compressO/releases">
    <img alt="macOS" src="https://img.shields.io/badge/-macOS-black?style=flat-square&logo=apple&logoColor=white" />
  </a>
</div>
	    <br />

</div>
<div align="center">
    <img src="public/screenshot.png" alt="Screenshot" height="500" style="border-radius: 16px;" />
</div>

### Install
Download installers📦 for the specific platform can be accessed from the [releases](https://github.com/codeforreal1/compressO/releases) page.

<strong>Installer Info:</strong>

- `CompressO_amd64.deb`: Debian derivative of Linux like Ubuntu
- `CompressO_amd64.AppImage`: Universal package for all Linux distros
- `CompressO_aarch64.dmg` : For Macbooks with Apple Silicon Chips
- `CompressO_x64.dmg` : For Macbooks with Intel Chip
- `CompressO_x64.msi`: Windows 64 bit

<strong>Homebrew: MacOS only!</strong>
```
brew install --cask codeforreal1/tap/compresso
```

> [!NOTE]
> By using CompressO, you acknowledge that it's not [notarized](https://developer.apple.com/documentation/security/notarizing_macos_software_before_distribution).
>
> Notarization is a "security" feature by Apple.
> You send binaries to Apple, and they either approve them or not.
> In reality, notarization is about paying $100 annual fee to Apple and building the app/binaries the way they want it.
>
> This is a free & open-source app. Paying the annual fee and notarizing the app to appease Apple is not feasible.
>
> The [Homebrew installation script](https://github.com/codeforreal1/homebrew-tap/blob/main/Casks/compresso.rb) is configured to
> automatically delete `com.apple.quarantine` attribute, that's why the app should work out of the box, without any warnings like 
> "CompressO is damaged and can't be opened. You should move it to trash." that Apple show as a gatekeeper.


### Tech

This app is created using [Tauri](https://tauri.app/), a Rust🦀 framework for building a cross-platform desktop app. It uses [React](https://react.dev) powered by [Vite](https://vite.dev/) as a frontend layer. The compression is done entirely by 3rd part tools like [FFmpeg](https://ffmpeg.org/), [pngquant](https://pngquant.org/), [jpegoptim](https://github.com/tjko/jpegoptim), [gifski](https://gif.ski/), etc. using platform specific standalone binaries.
The app works completely offline and no any network requests is made to/from the app(except for built-in app updates).

### Building
Make sure [Rust](https://rust-lang.org/) & [Node.js](https://nodejs.org/) toolchains are installed.

Local Development:
- Start Tauri server
```
pnpm tauri:dev 
```
- Start Vite server:
```
pnpm vite:dev
```

Production Build:
```
pnpm tauri:build
```

### Screenshots
<details>
<summary>
  <strong> 
 	View app screenshots
  </strong>
</summary>
	<img src="https://github.com/user-attachments/assets/f89d3c18-20fd-4359-937b-d4f0c2a4a3f8" width="100%" alt="Compression Output" loading="lazy" />
	<img src="https://github.com/user-attachments/assets/49f95db6-5e9e-4abf-bc7f-54dd3f0ae534" width="100%" alt="Trim/Split feature" loading="lazy" />
	<img src="https://github.c