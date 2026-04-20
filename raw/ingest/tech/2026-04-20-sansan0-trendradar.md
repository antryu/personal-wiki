<!-- GitHub Trending: Python | 52,918 stars | +586 today -->

# sansan0/TrendRadar

> ⭐AI-driven public opinion & trend monitor with multi-platform aggregation, RSS, and smart alerts.🎯 告别信息过载，你的 AI 舆情监控助手与热点筛选工具！聚合多平台热点 +  RSS 订阅，支持关键词精准筛选。AI 智能筛选新闻 + AI 翻译 +  AI 分析简报直推手机，也支持接入 MCP 架构，赋能 AI 自然语言对话分析、情感洞察与趋势预测等。支持 Docker ，数据本地/云端自持。集成微信/飞书/钉钉/Telegram/邮件/ntfy/bark/slack 等渠道智能推送。

## Repository Info
- **URL**: https://github.com/sansan0/TrendRadar
- **Stars**: 52,918
- **Forks**: 23,438
- **Language**: Python
- **License**: GNU General Public License v3.0
- **Created**: 2025-04-28
- **Updated**: 2026-04-20
- **Topics**: ai, bark, data-analysis, docker, hot-news, llm, mail, mcp, mcp-server, news, ntfy, python, rss, trending-topics, wechat, wework
- **Open Issues**: 40

## README (excerpt)
<div align="center" id="trendradar">

<a href="https://github.com/sansan0/TrendRadar" title="TrendRadar">
  <img src="/_image/banner.webp" alt="TrendRadar Banner" width="80%">
</a>

最快<strong>30秒</strong>部署的热点助手 —— 告别无效刷屏，只看真正关心的新闻资讯

<a href="https://trendshift.io/repositories/14726" target="_blank"><img src="https://trendshift.io/api/badge/repositories/14726" alt="sansan0%2FTrendRadar | Trendshift" style="width: 250px; height: 55px;" width="250" height="55"/></a>


[![GitHub Stars](https://img.shields.io/github/stars/sansan0/TrendRadar?style=flat-square&logo=github&color=yellow)](https://github.com/sansan0/TrendRadar/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/sansan0/TrendRadar?style=flat-square&logo=github&color=blue)](https://github.com/sansan0/TrendRadar/network/members)
[![License](https://img.shields.io/badge/license-GPL--3.0-blue.svg?style=flat-square)](LICENSE)
[![Version](https://img.shields.io/badge/version-v6.6.1-blue.svg)](https://github.com/sansan0/TrendRadar)
[![MCP](https://img.shields.io/badge/MCP-v4.0.2-green.svg)](https://github.com/sansan0/TrendRadar)
[![RSS](https://img.shields.io/badge/RSS-订阅源支持-orange.svg?style=flat-square&logo=rss&logoColor=white)](https://github.com/sansan0/TrendRadar)
[![AI翻译](https://img.shields.io/badge/AI-多语言推送-purple.svg?style=flat-square)](https://github.com/sansan0/TrendRadar)

[![企业微信通知](https://img.shields.io/badge/企业微信-通知-00D4AA?style=flat-square)](https://work.weixin.qq.com/)
[![个人微信通知](https://img.shields.io/badge/个人微信-通知-00D4AA?style=flat-square)](https://weixin.qq.com/)
[![Telegram通知](https://img.shields.io/badge/Telegram-通知-00D4AA?style=flat-square)](https://telegram.org/)
[![dingtalk通知](https://img.shields.io/badge/钉钉-通知-00D4AA?style=flat-square)](#)
[![飞书通知](https://img.shields.io/badge/飞书-通知-00D4AA?style=flat-square)](https://www.feishu.cn/)
[![邮件通知](https://img.shields.io/badge/Email-通知-00D4AA?style=flat-square)](#)
[![ntfy通知](https://img.shields.io/badge/ntfy-通知-00D4AA?style=flat-square)](https://github.com/binwiederhier/ntfy)
[![Bark通知](https://img.shields.io/badge/Bark-通知-00D4AA?style=flat-square)](https://github.com/Finb/Bark)
[![Slack通知](https://img.shields.io/badge/Slack-通知-00D4AA?style=flat-square)](https://slack.com/)
[![通用Webhook](https://img.shields.io/badge/通用-Webhook-607D8B?style=flat-square&logo=webhook&logoColor=white)](#)


[![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-自动化-2088FF?style=flat-square&logo=github-actions&logoColor=white)](https://github.com/sansan0/TrendRadar)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-部署-4285F4?style=flat-square&logo=github&logoColor=white)](https://sansan0.github.io/TrendRadar)
[![Docker](https://img.shields.io/badge/Docker-部署-2496ED?style=flat-square&logo=docker&logoColor=white)](https://hub.docker.com/r/wantcat/trendradar)
[![MCP Support](https://img.shields.io/badge/MCP-AI分析支持-FF6B6B?style=flat-square&logo=ai&logoColor=white)](https://modelcontextprotocol.io/)
[![AI分析推送](https://img.shields.io/badge/AI-分析推送-FF6B6B?style=flat-square&logo=openai&logoColor=white)](#)
[![AI智能筛选](https://img.shields.io/badge/AI-智能筛选新闻-9B59B6?style=flat-square&logo=openai&logoColor=white)](#)

</div>

<div align="center">

**中文** | **[English](README-EN.md)**

</div>

> 本项目以轻量，易部署为目标

<br>

## 📑 快速导航

> 💡 **点击下方链接**可快速跳转到对应章节。部署推荐从「**快速开始**」入手，需要详细自定义请看「**配置详解**」

<div align="center">

|   |   |   |
|:---:|:---:|:---:|
| [🚀 **快速开始**](#-快速开始) | [AI 智能分析](#-ai-智能分析) | [⚙️ **配置详解**](#配置详解) |
| [Docker部署](#6-docker-部署) | [MCP客户端](#-mcp-客户端) | [📝 **更新日志**](#-更新日志) |
| [🎯 **核心功能**](#-核心功能) | [☕ **支持项目**](#-支持项目) | [📚 **项目相关**](#-项目相关) |

</div>

<br>

- 感谢**为项目点 star** 的观众们，**fork** 你所欲也，**star** 我所欲也，两者得兼😍是对开源精神最好的支持

<details>
<summary>👉 点击展开：<strong>致谢名单</strong> (天使轮荣誉榜 🔥73+🔥 位)</summary>

### 早期支持者致谢

> 💡 **特别说明**：
>
> 1. **关于名单**：下方表格记录了项目起步阶段（天使轮）的支持者。因早期人工统计繁琐，**难免存在疏漏或记录不全的情况，如有遗漏，实非本意，万望海涵**。
> 2. **未来规划**：为了将有限的精力回归代码与功能迭代，**即日起不再人工维护此名单**。
>
> 无论名字是否上榜，你们的每一份支持都是 TrendR