# CompressO

> CompressO is a free and open-source tool for compressing videos and images into smaller file sizes. It supports macOS, Windows, and Linux, leveraging third-party tools like FFmpeg for compression. The project has gained significant traction, with over 3,000 stars on GitHub, and emphasizes offline functionality and cross-platform accessibility.
> Last updated: 2026-04-11

## Overview
CompressO is a desktop application designed to reduce the file size of images and videos without requiring an internet connection. Developed using **Tauri** (a Rust-based framework) and **React/Vite** for the frontend, it integrates tools like **FFmpeg**, **pngquant**, and **jpegoptim** to handle compression tasks. The app is distributed as open-source software under the **GNU Affero General Public License v3.0**.

### Repository Highlights
- **Stars**: 3,073  
- **Forks**: 245  
- **Language**: TypeScript  
- **License**: [GNU AGPLv3](https://www.gnu.org/licenses/agpl-3.0.html)  
- **Created**: 2023-11-11  
- **Updated**: 2026-04-11  
- **Topics**: `ffmpeg`, `image-processing`, `rust`, `tauri`, `typescript`, `video`  
- **Open Issues**: 16  

### Installation
CompressO provides platform-specific installers via its [releases page](https://github.com/codeforreal1/compressO/releases):  
- **Linux**: `.deb`, `.AppImage`  
- **macOS**: `.dmg` (Apple Silicon and Intel)  
- **Windows**: `.msi`  

For macOS users, **Homebrew** is also supported:  
```bash
brew install --cask codeforreal1/tap/compresso
```

> **Note**: Apple's notarization process is avoided due to cost and complexity. The app uses a Homebrew script to bypass quarantine restrictions, ensuring it runs without warnings.

### Technology Stack
- **Backend**: [Tauri](https://tauri.app/) (Rust)  
- **Frontend**: [React](https://react.dev/) with [Vite](https://vite.dev/)  
- **Compression Tools**: FFmpeg, pngquant, jpegoptim, gifski  
- **Offline Functionality**: No network requests required (except built-in updates)

### Development
To build CompressO locally:  
1. Install [Rust](https://rust-lang.org/) and [Node.js](https://nodejs.org/).  
2. Run the Tauri and Vite development servers:  
   ```bash
   pnpm tauri:dev
   pnpm vite:dev
   ```  
3. For a production build:  
   ```bash
   pnpm tauri:build
   ```

## Key Points
- Cross-platform support for Linux, macOS, and Windows.  
- Uses open-source compression tools like FFmpeg.  
- Fully offline operation with no mandatory internet access.  
- Avoids Apple's notarization process via a Homebrew workaround.  
- Actively maintained (last updated: 2026-04-11).

## Sources
- [GitHub](https://github.com/codeforreal1/compressO)
- [원본](raw/ingest/projects/2026-04-11-compresso.md)