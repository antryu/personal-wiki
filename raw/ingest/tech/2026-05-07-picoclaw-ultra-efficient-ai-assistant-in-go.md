<!-- GitHub Trending: Go | 28,842 stars | +47 today -->

# sipeed/picoclaw

> Tiny, Fast, and Deployable anywhere — automate the mundane, unleash your creativity

## Repository Info
- **URL**: https://github.com/sipeed/picoclaw
- **Stars**: 28,842
- **Forks**: 4,134
- **Language**: Go
- **License**: MIT License
- **Created**: 2026-02-04
- **Updated**: 2026-05-07
- **Topics**: N/A
- **Open Issues**: 185

## README (excerpt)
<div align="center">
<img src="assets/logo.webp" alt="PicoClaw" width="512">

<h1>PicoClaw: Ultra-Efficient AI Assistant in Go</h1>

<h3>$10 Hardware · 10MB RAM · ms Boot · Let's Go, PicoClaw!</h3>
  <p>
    <img src="https://img.shields.io/badge/Go-1.25+-00ADD8?style=flat&logo=go&logoColor=white" alt="Go">
    <img src="https://img.shields.io/badge/Arch-x86__64%2C%20ARM64%2C%20MIPS%2C%20RISC--V%2C%20LoongArch-blue" alt="Hardware">
    <img src="https://img.shields.io/badge/license-MIT-green" alt="License">
    <br>
    <a href="https://picoclaw.io"><img src="https://img.shields.io/badge/Website-picoclaw.io-blue?style=flat&logo=google-chrome&logoColor=white" alt="Website"></a>
    <a href="https://docs.picoclaw.io/"><img src="https://img.shields.io/badge/Docs-Official-007acc?style=flat&logo=read-the-docs&logoColor=white" alt="Docs"></a>
    <a href="https://deepwiki.com/sipeed/picoclaw"><img src="https://img.shields.io/badge/Wiki-DeepWiki-FFA500?style=flat&logo=wikipedia&logoColor=white" alt="Wiki"></a>
    <br>
    <a href="https://x.com/SipeedIO"><img src="https://img.shields.io/badge/X_(Twitter)-SipeedIO-black?style=flat&logo=x&logoColor=white" alt="Twitter"></a>
    <a href="./assets/wechat.png"><img src="https://img.shields.io/badge/WeChat-Group-41d56b?style=flat&logo=wechat&logoColor=white"></a>
    <a href="https://discord.gg/V4sAZ9XWpN"><img src="https://img.shields.io/badge/Discord-Community-4c60eb?style=flat&logo=discord&logoColor=white" alt="Discord"></a>
  </p>

[中文](docs/project/README.zh.md) | [日本語](docs/project/README.ja.md) | [한국어](docs/project/README.ko.md) | [Português](docs/project/README.pt-br.md) | [Tiếng Việt](docs/project/README.vi.md) | [Français](docs/project/README.fr.md) | [Italiano](docs/project/README.it.md) | [Bahasa Indonesia](docs/project/README.id.md) | [Malay](docs/project/README.ms.md) | **English**

</div>

---

> **PicoClaw** is an independent open-source project initiated by [Sipeed](https://sipeed.com), written entirely in **Go** from scratch — not a fork of OpenClaw, NanoBot, or any other project.

**PicoClaw** is an ultra-lightweight personal AI assistant inspired by [NanoBot](https://github.com/HKUDS/nanobot). It was rebuilt from the ground up in **Go** through a "self-bootstrapping" process — the AI Agent itself drove the architecture migration and code optimization.

**Runs on $10 hardware with <10MB RAM** — that's 99% less memory than OpenClaw and 98% cheaper than a Mac mini!

<table align="center">
<tr align="center">
<td align="center" valign="top">
<p align="center">
<img src="assets/picoclaw_mem.gif" width="360" height="240">
</p>
</td>
<td align="center" valign="top">
<p align="center">
<img src="assets/licheervnano.png" width="400" height="240">
</p>
</td>
</tr>
</table>

> [!CAUTION]
> **Security Notice**
>
> * **NO CRYPTO:** PicoClaw has **not** issued any official tokens or cryptocurrency. All claims on `pump.fun` or other trading platforms are **scams**.
> * **OFFICIAL DOMAIN:** The **ONLY** official website is **[picoclaw.io](https://picoclaw.io)**, and company website is **[sipeed.com](https://sipeed.com)**
> * **BEWARE:** Many `.ai/.org/.com/.net/...` domains have been registered by third parties. Do not trust them.
> * **NOTE:** PicoClaw is in early rapid development. There may be unresolved security issues. Do not deploy to production before v1.0.
> * **NOTE:** PicoClaw has recently merged many PRs. Recent builds may use 10-20MB RAM. Resource optimization is planned after feature stabilization.

## 📢 News

2026-03-31 📱 **Android Support!** PicoClaw now runs on Android! Download the APK at [picoclaw.io](https://picoclaw.io/download)

2026-03-25 🚀 **v0.2.4 Released!** Agent architecture overhaul (SubTurn, Hooks, Steering, EventBus), WeChat/WeCom integration, security hardening (.security.yml, sensitive data filtering), new providers (AWS Bedrock, Azure, Xiaomi MiMo), and 35 bug fixes. PicoClaw has reached **26K Stars**!

2026-03-17 🚀 **v0.2.3 Released!** System tray