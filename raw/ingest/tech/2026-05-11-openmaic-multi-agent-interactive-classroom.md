<!-- GitHub Trending: TypeScript | 17,363 stars | +109 today -->

# THU-MAIC/OpenMAIC

> Open Multi-Agent Interactive Classroom — Get an immersive, multi-agent learning experience in just one click

## Repository Info
- **URL**: https://github.com/THU-MAIC/OpenMAIC
- **Stars**: 17,363
- **Forks**: 3,310
- **Language**: TypeScript
- **License**: GNU Affero General Public License v3.0
- **Created**: 2026-03-11
- **Updated**: 2026-05-11
- **Topics**: N/A
- **Open Issues**: 163

## README (excerpt)
<!-- <p align="center">
  <img src="assets/logo-horizontal.png" alt="OpenMAIC" width="420"/>
</p> -->

<p align="center">
  <img src="assets/banner.png" alt="OpenMAIC Banner" width="680"/>
</p>

<p align="center">
  Get an immersive, multi-agent learning experience in just one click
</p>

<p align="center">
  <a href="https://jcst.ict.ac.cn/en/article/doi/10.1007/s11390-025-6000-0"><img src="https://img.shields.io/badge/Paper-JCST'26-blue?style=flat-square" alt="Paper"/></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-AGPL--3.0-blue.svg?style=flat-square" alt="License: AGPL-3.0"/></a>
  <a href="https://open.maic.chat/"><img src="https://img.shields.io/badge/Demo-Live-brightgreen?style=flat-square" alt="Live Demo"/></a>
  <a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FTHU-MAIC%2FOpenMAIC&envDescription=Configure%20at%20least%20one%20LLM%20provider%20API%20key%20(e.g.%20OPENAI_API_KEY%2C%20ANTHROPIC_API_KEY).%20All%20providers%20are%20optional.&envLink=https%3A%2F%2Fgithub.com%2FTHU-MAIC%2FOpenMAIC%2Fblob%2Fmain%2F.env.example&project-name=openmaic&framework=nextjs"><img src="https://vercel.com/button" alt="Deploy with Vercel" height="20"/></a>
  <a href="#-openclaw-integration"><img src="https://img.shields.io/badge/OpenClaw-Integration-F4511E?style=flat-square" alt="OpenClaw Integration"/></a>
  <a href="#lemonade-local-ai"><img src="https://img.shields.io/badge/Lemonade-Local_AI-FFD43B?style=flat-square" alt="Lemonade Local AI"/></a>
  <a href="https://github.com/THU-MAIC/OpenMAIC/stargazers"><img src="https://img.shields.io/github/stars/THU-MAIC/OpenMAIC?style=flat-square" alt="Stars"/></a>
  <br/>
  <a href="https://discord.gg/p8Pf2r3SaG"><img src="https://img.shields.io/badge/Discord-Join_Community-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="Discord"/></a>
  &nbsp;
  <a href="community/feishu.md"><img src="https://img.shields.io/badge/Feishu-飞书交流群-00D6B9?style=for-the-badge&logo=bytedance&logoColor=white" alt="Feishu"/></a>
  <br/>
  <img src="https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js" alt="Next.js"/>
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white" alt="React"/>
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/LangGraph-1.1-purple?style=flat-square" alt="LangGraph"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS"/>
</p>

<p align="center">
  <a href="./README.md">English</a> | <a href="./README-zh.md">简体中文</a>
  <br/>
  <a href="https://open.maic.chat/">Live Demo</a> · <a href="#-quick-start">Quick Start</a> · <a href="#lemonade-local-ai">Lemonade</a> · <a href="#-features">Features</a> · <a href="#-use-cases">Use Cases</a> · <a href="#-openclaw-integration">OpenClaw</a>
</p>


## 🗞️ News

- **2026-04-26** — [v0.2.1 released!](https://github.com/THU-MAIC/OpenMAIC/releases/tag/v0.2.1) Integrated [VoxCPM2](https://github.com/OpenBMB/VoxCPM) TTS with voice cloning and on-the-fly auto-generated voices; added per-model thinking config; added end-of-course completion page with persistent quiz state; added latest released models including DeepSeek-V4 / GPT-5.5 / GPT-Image-2 / Xiaomi MiMo / Hy3. See [changelog](CHANGELOG.md).
- **2026-04-20** — **v0.2.0 released!** Deep Interactive Mode — 3D visualization, simulations, games, mind maps, and online programming for hands-on learning. See [features](#-features) for details.
- **2026-04-14** — [v0.1.1 released!](https://github.com/THU-MAIC/OpenMAIC/releases/tag/v0.1.1) Automatic language inference, ACCESS_CODE authentication, classroom ZIP export/import, custom TTS/ASR providers, Ollama support, and more. See [changelog](CHANGELOG.md).
- **2026-03-26** — [v0.1.0 released!](https://github.com/THU-MAIC/OpenMAIC/releas