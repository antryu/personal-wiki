<!-- GitHub Trending: Rust | 18,378 stars | +34 today -->

# screenpipe/screenpipe

> Run agents that work for you based on what you do. AI finally knows what you are doing

## Repository Info
- **URL**: https://github.com/screenpipe/screenpipe
- **Stars**: 18,378
- **Forks**: 1,647
- **Language**: Rust
- **License**: Other
- **Created**: 2024-06-19
- **Updated**: 2026-04-24
- **Topics**: agents, agi, ai, computer-vision, llm, machine-learning, ml, multimodal, vision
- **Open Issues**: 42

## README (excerpt)

<p align="center">
   <a href ="https://screenpi.pe">
      <img src="https://github.com/user-attachments/assets/d3b1de26-c3c0-4c84-b9c4-b03213b97a30" alt="logo" width="200">
   </a>
</p>

<h1 align="center">[ screenpipe ]</h1>


<p align="center">AI memory for your screen</p>
<p align="center">run agents that work for you in the background based on what you do</p>


<p align="center">
  <a href="https://screenpi.pe/onboarding" target="_blank">
    <img src="https://img.shields.io/badge/download-desktop%20app-black?style=for-the-badge" alt="download">
  </a>
</p>

<p align="center">
  <a href="https://discord.gg/screenpipe">
    <img src="https://img.shields.io/discord/823813159592001537?style=for-the-badge&logo=discord&logoColor=white" alt="discord">
  </a>
  <a href="https://twitter.com/screenpipe">
    <img src="https://img.shields.io/twitter/follow/screenpipe?style=for-the-badge&logo=x&logoColor=white&label=follow" alt="twitter">
  </a>
  <a href="https://www.youtube.com/@screenpipe">
    <img src="https://img.shields.io/youtube/channel/subscribers/UCwjkpAsb70_mENKvy7hT5bw?style=for-the-badge&logo=youtube&logoColor=white&label=subscribers" alt="youtube">
  </a>
</p>

![image](https://github.com/user-attachments/assets/5b977f48-0355-498f-a3ba-37e5de3b6c62)
![image](https://github.com/user-attachments/assets/dec2e07c-b3d5-46dd-9f36-c0c26a82c9fb)


---

## what is this?

screenpipe turns your computer into a personal AI that knows everything you've done. record. search. automate. all local, all private, all yours

```
┌─────────────────────────────────────────┐
│  screen + audio → local storage → ai   │
└─────────────────────────────────────────┘
```

- **remember everything** - never forget what you saw, heard, or did
- **run agents that work based on what you do** - pipes are agents triggered by your work activity

<img width="360" height="311" alt="image" src="https://github.com/user-attachments/assets/cfbf0fd3-84ef-4feb-8c6d-2779d67058a7" />

- **search with ai** - find anything using natural language
- **100% local** - your data never leaves your machine
- **open source** - inspect, modify, own

<p align="center">
   <a href ="https://screenpi.pe">
      <img src="https://github.com/user-attachments/assets/1f0c04f6-300a-417d-8bd3-5b73435ee2e9">
   </a>
</p>


## install

[download the desktop app](https://screenpi.pe/onboarding) — one-time purchase, all features, auto-updates

or run the CLI:

```bash
npx screenpipe@latest record
```

then 

```bash
claude mcp add screenpipe -- npx -y screenpipe-mcp
```

then ask claude `what did i see in the last 5 mins?` or `summarize today conversations` or `create a pipe that updates linear every time i work on task X`


## specs

- captures full accessibility tree, OCR as fallback, transcription, speakers, keyboard inputs, app switches
- 5-10% cpu usage
- 0.5-3gb ram
- ~20gb storage/month
- filters (window, app, chrome extensions, passwords, PII)
- optional encryption at rest
- works offline

---

<p align="center">
    <a href="https://docs.screenpi.pe">docs</a> ·
    <a href="https://discord.gg/screenpipe">discord</a> ·
    <a href="https://twitter.com/screenpipe">x</a> ·
    <a href="https://www.youtube.com/@screenpipe">youtube</a> ·
    <a href="https://www.reddit.com/r/screen_pipe">reddit</a>
</p>

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines, maintainers, and how to submit PRs. AI/vibe-coded PRs welcome!

Thanks to all contributors:

<a href="https://github.com/screenpipe/screenpipe/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=screenpipe/screenpipe" />
</a>

<details>
<summary>📖 LLM reference</summary>

## About screenpipe

screenpipe is an open source application (MIT license) that continuously captures your screen and audio, creating a searchable, AI-powered memory of everything you do on your computer. All data is stored locally on your device. It is the leading open source alternative to Rewind.ai (now Limitless), Microsoft