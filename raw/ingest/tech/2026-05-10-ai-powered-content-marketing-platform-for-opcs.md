<!-- GitHub Trending: TypeScript | 9,961 stars | +404 today -->

# yikart/AiToEarn

> Let's use AI to Earn!

## Repository Info
- **URL**: https://github.com/yikart/AiToEarn
- **Stars**: 9,961
- **Forks**: 1,923
- **Language**: TypeScript
- **License**: MIT License
- **Created**: 2025-02-24
- **Updated**: 2026-05-10
- **Topics**: auto-publish, douyin, douyin-api, electron-app, electron-react, kuaishou, kwai, published, shipinhao, tool, xiaohongshu
- **Open Issues**: 10

## README (excerpt)
# [Aitoearn：OPC（一人公司）的AI内容营销智能体](https://aitoearn.ai)

<a href="https://trendshift.io/repositories/20785" target="_blank"><img src="https://trendshift.io/api/badge/repositories/20785" alt="yikart%2FAiToEarn | Trendshift" style="width: 250px; height: 55px;" width="250" height="55"/></a>

[![GitHub stars](https://img.shields.io/github/stars/yikart/AiToEarn?color=fa6470)](https://github.com/yikart/AiToEarn/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Required Node.JS 20.18.x](https://img.shields.io/static/v1?label=node&message=20.18.x&logo=node.js&color=3f893e)](https://nodejs.org/about/releases)

简体中文 | [English](README_EN.md) | [日本語](README_JA.md)

**Monetize · Publish · Engage · Create —— 一站式平台。**

AiToEarn 通过 **AI 自动化**，帮助 OPC（一人公司）、创作者、品牌与企业在全球主流平台上构建、分发并变现内容。

支持渠道：
抖音、小红书（Rednote）、快手、哔哩哔哩、TikTok、YouTube、Facebook、Instagram、Threads、Twitter（X）、Pinterest、LinkedIn

## 🚀 快速使用 AiToEarn（5 种方式）

| 方式 | 适合谁 | 需要部署吗 |
|------|--------|-----------|
| [① 打开网站直接用](#use-web) | 所有用户 | ❌ 不需要 |
| [② 在龙虾 OpenClaw 中用](#use-in-openclaw) | 龙虾用户 | ❌ 不需要 |
| [③ 在 Claude / Cursor 等 AI 助手中用](#use-in-claude) | AI 工具用户 | ❌ 不需要 |
| [④ Docker 一键部署](#use-docker) | 想私有化部署的团队 | ✅ 需要服务器 |
| [⑤ 源码开发](#use-source) | 开发者 | ✅ 需要开发环境 |

> 💡 **方式 ②③④ 都需要先获取 API Key**，请先看 [如何获取 API Key](#get-api-key)。

## 最新动态

- **2026-04-20**: OpenClaw（龙虾）新增 AiToEarn 赚钱支持，可在龙虾中直接接收并执行内容变现任务。
- **2026-03-26**: [2.1 version](https://www.aitoearn.ai/) — 内容交易市场上线；新增 OpenClaw（龙虾）支持，可在龙虾中直接使用 AiToEarn；新增 MCP 协议支持，可在 Claude、Cursor 等任何支持 MCP 的 Agent 或大模型中使用 AiToEarn。
- **2026-02-07**: [1.8.0 version](https://www.aitoearn.ai/)，新增线下商户推广解决方案，支持餐厅、零售店、民宿、美容美发、健身房等多种线下业态，将线下推广活动转化为可执行的线上传播任务，通过内容发布与用户参与机制，帮助门店获取更多线上曝光和到店流量。
- **2025-12-15**: "All In Agent" 的开始！我们加入了能够自动内容生成和发布以及一些帮助你操作 Aitoearn 的超级 AI 智能 Agent。[v1.4.3](https://github.com/yikart/AiToEarn/releases/tag/v1.4.3)
- **2025-11-28**: 支持应用内自动更新。在创作界面新增大量 AI 功能，例如：缩写、扩写、图片生成、视频生成、标签生成等，并支持 Nano Banana Pro。[v1.4.0](https://github.com/yikart/AiToEarn/releases/tag/v1.4.0)
- **2025-11-12**: 首个开源且可完全使用的版本。[v1.3.2](https://github.com/yikart/AiToEarn/releases/tag/v1.3.2)
- **2025-09-16**: 首个出海版本，新增支持 Facebook、Instagram、Threads、Twitter、YouTube、TikTok、Pinterest。[v1.0.18](https://github.com/yikart/AiToEarn/releases/tag/v1.0.18)
- **2025-02-26**: 首个开源版本，初步实现小红书、抖音、快手、视频号视频一键发布。[v0.1.1](https://github.com/yikart/AiToEarn/releases/tag/v0.1.1)

<details>
  <summary><h2 style="display:inline;margin:0">目录</h2></summary>

  <br/>

  1. [快速使用 AiToEarn（5 种方式）](#-快速使用-aitoearn5-种方式)
  2. [最新动态](#最新动态)
  3. [核心功能](#核心功能)
  4. [如何获取 API Key](#get-api-key)
  5. [贡献指南](#贡献指南)
  6. [联系](#联系)
  7. [推荐](#推荐)
</details>

## 核心功能

AiToEarn 围绕内容创作者的完整变现链路，提供四大 Agent 能力：

> **Monetize · Publish · Engage · Create**

---

### 💰 Monetize —— 内容赚钱

AiToEarn 最核心的目标：**帮助每一位创作者赚钱**。

创作者可以在平台出售内容以完成商家的推广任务。所有结算以结果为导向，我们提供三种结算模式：

| 结算模式 | 全称 | 含义 |
|---------|------|------|
| **CPS** | Cost Per Sale | 按成交额结算 |
| **CPE** | Cost Per Engagement | 按互动量结算 |
| **CPM** | Cost Per Mille | 按播放量结算 |

<img src="presentation/monetize-cn.png" width="30%">

---

### 📢 Publish —— 内容发布 Agent

一键将内容分发到全球 10+ 主流平台，告别逐个平台手动发布。

- **全网分发**：覆盖抖音、快手、B站、小红书、TikTok、YouTube、Facebook、Instagram、Threads、X（Twitter）、Pinterest、LinkedIn
- **日历排期**：像排日程一样统一规划所有平台的内容发布时间

<img src="presentation/publish-cn.png" width="30%"> <img src="presentation/channel-cn.png" width="30%">

> ▶ 观看演示视频

<a href="https://www.youtube.com/watch?v=5041jEKaiU8">
  <img src="https://img.youtube.com/vi/5041jEKaiU8/0.jpg" alt="Publish 演示视频" width="480">
</a>

---

### 💬 Engage —— 内容互动 Agent

通过 AiToEarn 浏览器插件，在上述所有平台上实现自动化互动运营。

- **自动化操作**：自动点赞、收藏、关注，批量高效运营
- **AI 智能回复**：调用大模型为每条评论生成针对性回复，精准互动
- **评论挖掘**：识别"求链接""怎么购买"等高转化信号，快速响应
- **品牌监测**：实时追踪关于你品牌的讨论，主动参与热点话题

> ▶ 观看演示视频

<a href="https://youtu.be/-QoHNrZBmp0">
  <img src="./presentation/engage-thumbnail-cn.png" alt="Engage 演示视频" width="480">
</a>

---

### 🎨 Create —— 内容创作 Agent

我们用 Agent 的方式重构了内容制作流程。只需告诉 Agent 你的内容需求，它