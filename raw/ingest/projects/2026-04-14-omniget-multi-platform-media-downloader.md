<!-- GitHub Trending: Rust | 1,641 stars | +133 today -->

# tonhowtf/omniget

>  Desktop app to download videos, courses. YouTube, Instagram, TikTok, Bilibili (哔哩哔哩), Douyin (抖音), 小红书, 快手, 优酷, Hotmart, Udemy, Kiwify, Telegram, and 1000+ more via yt-dlp. Download torrents and send files between devices over P2P.

## Repository Info
- **URL**: https://github.com/tonhowtf/omniget
- **Stars**: 1,642
- **Forks**: 96
- **Language**: Rust
- **License**: GNU General Public License v3.0
- **Created**: 2026-02-11
- **Updated**: 2026-04-14
- **Topics**: bilibili-downloader, course-downloader, desktop-app, download-manager, downloader, hotmart-downloader, instagram-downloader, media-downloader, open-source, reddit-downloader, rust, svelte, tauri, tiktok-downloader, twitter-downloader, udemy, udemy-downloader, video-downloader, youtube-downloader, yt-dlp
- **Open Issues**: 5

## README (excerpt)
<p align="center">
  <img src="static/loop.png" alt="Loop, the OmniGet mascot" width="120" />
</p>

<p align="center">
  <a href="https://github.com/tonhowtf/omniget/releases/latest"><img src="https://img.shields.io/github/v/release/tonhowtf/omniget?style=for-the-badge&label=release" alt="Latest Release" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-GPL--3.0-green?style=for-the-badge" alt="License GPL-3.0" /></a>
  <a href="https://github.com/tonhowtf/omniget/stargazers"><img src="https://img.shields.io/github/stars/tonhowtf/omniget?style=for-the-badge" alt="Stars" /></a>
  <a href="https://github.com/tonhowtf/omniget/releases"><img src="https://img.shields.io/github/downloads/tonhowtf/omniget/total?style=for-the-badge&label=downloads" alt="Downloads" /></a>
</p>

<h1 align="center">OmniGet</h1>

<h3 align="center">Paste a link. Get your file.</h3>

OmniGet downloads videos, courses, and files from the internet. Paste a link from YouTube, Instagram, TikTok, or any of [1000+ supported sites](https://github.com/yt-dlp/yt-dlp/blob/master/supportedsites.md). It figures out what you want and downloads it. Free and open source.

<p align="center">
  <img src="assets/screenshot.png" alt="OmniGet downloading a YouTube video" width="800" />
  <br>
  <sub>Paste a link. Pick a quality. Download.</sub>
</p>

## Download

<p align="center">
  <a href="https://github.com/tonhowtf/omniget/releases/latest"><img src="https://img.shields.io/badge/-Windows-blue.svg?style=for-the-badge&logo=windows" alt="Download for Windows" /></a>
  <a href="https://github.com/tonhowtf/omniget/releases/latest"><img src="https://img.shields.io/badge/-macOS-black.svg?style=for-the-badge&logo=apple" alt="Download for macOS" /></a>
  <a href="https://github.com/tonhowtf/omniget/releases/latest"><img src="https://img.shields.io/badge/-Linux-orange.svg?style=for-the-badge&logo=linux&logoColor=white" alt="Download for Linux" /></a>
</p>

Also available as a Flatpak on Linux and a portable `.exe` on Windows.

## What can it download?

**Videos** from YouTube, Instagram, TikTok, Twitter/X, Reddit, Twitch, Pinterest, Vimeo, Bluesky, and Bilibili.

**Courses** from Hotmart, Udemy, Kiwify, Teachable, and [6 more platforms](#course-platforms). Log in once, download all lessons, attachments, and descriptions.

**Torrents.** Drag a `.torrent` file or paste a magnet link. Built-in client, no extra software needed.

**Files between devices.** Send a file to another computer using a 4-word share code. Works across different networks.

**Anything else.** If a site is [supported by yt-dlp](https://github.com/yt-dlp/yt-dlp/blob/master/supportedsites.md), OmniGet can download from it. That covers over 1000 sites.

No setup required beyond the app itself. OmniGet handles [yt-dlp](https://github.com/yt-dlp/yt-dlp) (the engine that supports 1000+ sites) and FFmpeg (used to merge video and audio) automatically, stays up to date on its own, and comes with 11 color themes and 8 languages.

The app also includes Loop, a mascot that reacts to your downloads in real time. The themes include Catppuccin, Dracula, and NyxVamp variants.

### Media Platforms

| Platform | Content |
|----------|---------|
| YouTube | Videos, Shorts, Playlists, Search |
| Instagram | Posts, Reels, Stories |
| TikTok | Videos, Photos |
| Twitter / X | Videos, GIFs |
| Reddit | Videos, Images |
| Twitch | Clips |
| Pinterest | Images, Videos |
| Vimeo | Videos |
| Bluesky | Images, Videos |
| Bilibili (哔哩哔哩) | Videos, Series |
| Telegram | Photos, Videos, Files (via plugin) |
| Torrent / Magnet | Any `.torrent` file or magnet link |

<details>
<summary><strong>Chinese platforms</strong> (supported via yt-dlp)</summary>

| Platform | Content |
|----------|---------|
| Douyin (抖音) | Videos |
| Xiaohongshu (小红书) | Videos, Images |
| Kuaishou (快手) | Videos |
| Youku (优酷) | Videos |
| Tencent Video (腾讯视频) | Videos |
| iQiyi (爱奇艺) | Videos |
| Mango TV (芒果TV) | Videos |

These platforms may requ