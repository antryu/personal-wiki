<!-- GitHub Trending: Go | 9,903 stars | +22 today -->

# krillinai/KrillinAI

> Video translation and dubbing tool powered by LLMs. The video translator offers 100 language translations and one-click full-process deployment. The video translation output is optimized for platforms like YouTube，TikTok.   AI视频翻译配音工具，100种语言双向翻译，一键部署全流程，可以生抖音，小红书，哔哩哔哩，视频号，TikTok，Youtube等形态的内容成适配

## Repository Info
- **URL**: https://github.com/krillinai/KrillinAI
- **Stars**: 9,903
- **Forks**: 886
- **Language**: Go
- **License**: GNU General Public License v3.0
- **Created**: 2024-12-17
- **Updated**: 2026-04-25
- **Topics**: dubbing, localization, tts, video-transcription, video-translation
- **Open Issues**: 24

## README (excerpt)
<div align="center">
  <img src="/docs/images/logo.jpg" alt="KrillinAI" height="90">

# Minimalist AI Video Translation and Dubbing Tool

<a href="https://trendshift.io/repositories/13360" target="_blank"><img src="https://trendshift.io/api/badge/repositories/13360" alt="KrillinAI%2FKrillinAI | Trendshift" style="width: 250px; height: 55px;" width="250" height="55"/></a>

**[English](/README.md)｜[简体中文](/docs/zh/README.md)｜[日本語](/docs/jp/README.md)｜[한국어](/docs/kr/README.md)｜[Tiếng Việt](/docs/vi/README.md)｜[Français](/docs/fr/README.md)｜[Deutsch](/docs/de/README.md)｜[Español](/docs/es/README.md)｜[Português](/docs/pt/README.md)｜[Русский](/docs/rus/README.md)｜[اللغة العربية](/docs/ar/README.md)**

[![Twitter](https://img.shields.io/badge/Twitter-KrillinAI-orange?logo=twitter)](https://x.com/KrillinAI)
[![QQ 群](https://img.shields.io/badge/QQ%20群-754069680-green?logo=tencent-qq)](https://jq.qq.com/?_wv=1027&k=754069680)
[![Bilibili](https://img.shields.io/badge/dynamic/json?label=Bilibili&query=%24.data.follower&suffix=粉丝&url=https%3A%2F%2Fapi.bilibili.com%2Fx%2Frelation%2Fstat%3Fvmid%3D242124650&logo=bilibili&color=00A1D6&labelColor=FE7398&logoColor=FFFFFF)](https://space.bilibili.com/242124650)
[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/krillinai/KrillinAI)

</div>

## Project Introduction  ([Try the online version now!](https://www.klic.studio/))
[**Quick Start**](#-quick-start)

KrillinAI is a versatile audio and video localization and enhancement solution developed by Krillin AI. This minimalist yet powerful tool integrates video translation, dubbing, and voice cloning, supporting both landscape and portrait formats to ensure perfect presentation on all major platforms (Bilibili, Xiaohongshu, Douyin, WeChat Video, Kuaishou, YouTube, TikTok, etc.). With an end-to-end workflow, you can transform raw materials into beautifully ready-to-use cross-platform content with just a few clicks.

## Key Features and Functions:

🎯 **One-click Start**: No complex environment configuration required, automatic dependency installation, ready to use immediately, with a new desktop version for easier access!

📥 **Video Acquisition**: Supports yt-dlp downloads or local file uploads

📜 **Accurate Recognition**: High-accuracy speech recognition based on Whisper

🧠 **Intelligent Segmentation**: Subtitle segmentation and alignment using LLM

🔄 **Terminology Replacement**: One-click replacement of professional vocabulary

🌍 **Professional Translation**: LLM translation with context to maintain natural semantics

🎙️ **Voice Cloning**: Offers selected voice tones from CosyVoice or custom voice cloning

🎬 **Video Composition**: Automatically processes landscape and portrait videos and subtitle layout

💻 **Cross-Platform**: Supports Windows, Linux, macOS, providing both desktop and server versions

## Effect Demonstration

The image below shows the effect of the subtitle file generated after importing a 46-minute local video and executing it with one click, without any manual adjustments. There are no omissions or overlaps, the segmentation is natural, and the translation quality is very high.
![Alignment Effect](/docs/images/alignment.png)

<table>
<tr>
<td width="33%">

### Subtitle Translation

---

https://github.com/user-attachments/assets/bba1ac0a-fe6b-4947-b58d-ba99306d0339

</td>
<td width="33%">

### Dubbing

---

https://github.com/user-attachments/assets/0b32fad3-c3ad-4b6a-abf0-0865f0dd2385

</td>

<td width="33%">

### Portrait Mode

---

https://github.com/user-attachments/assets/c2c7b528-0ef8-4ba9-b8ac-f9f92f6d4e71

</td>

</tr>
</table>

## 🔍 Supported Speech Recognition Services

_**All local models in the table below support automatic installation of executable files + model files; you just need to choose, and Klic will prepare everything for you.**_

| Service Source          | Supported Platforms | Model Options                             | Local/Cloud | Remarks                     |
|-------------