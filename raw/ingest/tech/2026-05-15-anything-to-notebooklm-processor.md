<!-- GitHub Trending: Python | 2,642 stars | +465 today -->

# joeseesun/qiaomu-anything-to-notebooklm

> Claude Skill: Multi-source content processor for NotebookLM. Supports WeChat articles, web pages, YouTube, PDF, Markdown, search queries → Podcast/PPT/MindMap/Quiz etc.

## Repository Info
- **URL**: https://github.com/joeseesun/qiaomu-anything-to-notebooklm
- **Stars**: 2,642
- **Forks**: 270
- **Language**: Python
- **License**: MIT License
- **Created**: 2026-01-25
- **Updated**: 2026-05-15
- **Topics**: automation, claude, mcp, notebooklm, skill
- **Open Issues**: 5

## README (excerpt)
<div align="center">

# 🎯 Anything → NotebookLM

**多源内容智能处理器：任何内容 → 播客 / PPT / 思维导图 / Quiz**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python 3.9+](https://img.shields.io/badge/python-3.9+-blue.svg)](https://www.python.org/downloads/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![GitHub stars](https://img.shields.io/github/stars/joeseesun/qiaomu-anything-to-notebooklm?style=social)](https://github.com/joeseesun/qiaomu-anything-to-notebooklm/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/joeseesun/qiaomu-anything-to-notebooklm?style=social)](https://github.com/joeseesun/qiaomu-anything-to-notebooklm/network/members)
[![GitHub issues](https://img.shields.io/github/issues/joeseesun/qiaomu-anything-to-notebooklm)](https://github.com/joeseesun/qiaomu-anything-to-notebooklm/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/joeseesun/qiaomu-anything-to-notebooklm)](https://github.com/joeseesun/qiaomu-anything-to-notebooklm/commits/main)

[快速开始](#-快速开始) • [支持格式](#-支持的内容源-15-种) • [使用示例](#-使用示例) • [付费墙绕过](#-付费墙绕过) • [常见问题](#-常见问题)

</div>

---

## ✨ 这是什么？

一个 **Claude Code Skill**，用自然语言把**任何内容**变成**任何格式**。

```
你说：把这篇微信文章生成播客
AI ：✅ 8 分钟播客已生成 → podcast.mp3

你说：这个付费文章做成思维导图
AI ：✅ 自动绕过付费墙 → 思维导图已生成

你说：这期播客（小宇宙）做成 PPT
AI ：✅ 自动转录音频 → 25 页 PPT 已生成
```

**核心能力**：多源内容获取（含付费墙绕过）→ 上传 [Google NotebookLM](https://notebooklm.google.com/) → AI 生成目标格式

---

## 🚀 支持的内容源（15+ 种）

<table>
<tr>
<td width="50%">

### 📱 社交与媒体
- **微信公众号**（MCP 浏览器模拟）
- **X/Twitter**（推文 + 长线程）
- **YouTube 视频**（自动提取字幕）
- **播客**（小宇宙 / 喜马拉雅 / B站）

### 🌐 网页（含付费墙绕过）
- **300+ 付费网站**（NYT/WSJ/FT/Economist...）
- **任意公开网页**（新闻、博客、文档）
- **搜索关键词**（自动汇总结果）

</td>
<td width="50%">

### 📚 电子书与文档
- **PDF**（支持扫描件 OCR）
- **EPUB** 电子书
- **Markdown** (.md)
- **纯文本** (.txt)

### 📄 Office 文档
- **Word** (.docx)
- **PowerPoint** (.pptx)
- **Excel** (.xlsx)

### 🖼️ 其他
- **图片**（JPEG/PNG，自动 OCR）
- **音频**（WAV/MP3，自动转录）
- **ZIP 压缩包**（批量处理）

</td>
</tr>
</table>

---

## 🛡️ 付费墙绕过

**核心特性**：自动检测并绕过 300+ 付费新闻网站的付费墙。

### 绕过策略（6 层级联）

```
Level 1: 代理服务（r.jina.ai / defuddle.md）
    ↓ 失败
Level 2: 站点专属 Bot UA（Googlebot ~50站 / Bingbot ~4站）
    ↓ 失败
Level 3: 通用绕过（UA伪装 + X-Forwarded-For + Referer伪装 + AMP + EU IP）
    ↓ 失败
Level 4: archive.today 存档（CAPTCHA 自动检测）
    ↓ 失败
Level 5: Google Cache
    ↓ 失败
Level 6: agent-fetch 本地工具
```

### 支持的付费网站（部分）

| 类别 | 站点 |
|------|------|
| 🇺🇸 美国媒体 | NYT, WSJ, Bloomberg, Washington Post, The Information, Forbes, WIRED, The New Yorker, The Atlantic, USA Today, Boston Globe, LA Times, Chicago Tribune, Seattle Times, MIT Tech Review, Foreign Affairs |
| 🇬🇧 英国媒体 | FT, The Times, The Telegraph, The Economist |
| 🇩🇪 德国媒体 | Spiegel, Zeit, Sueddeutsche, FAZ, Handelsblatt |
| 🇫🇷 法国媒体 | Le Monde, Le Figaro, Le Parisien |
| 🇦🇺 澳洲媒体 | The Australian, SMH, The Age, Brisbane Times |
| 🇨🇳 中文媒体 | SCMP, Medium |
| 🌐 其他 | Haaretz, NZ Herald, Statista, Quora |

### 绕过技术（学自 [Bypass Paywalls Clean](https://gitflic.ru/project/magnolia1234/bypass-paywalls-chrome-clean)）

| 技术 | 原理 | 覆盖率 |
|------|------|--------|
| **Googlebot UA + X-Forwarded-For** | 搜索引擎爬虫白名单，直接获取全文 | ~50 站 |
| **Bingbot UA** | 同上，部分站点对 Bing 更友好 | ~4 站 |
| **Cookie 清空 + Referer 伪装** | 清除计量 cookie，伪装来自 Google/Facebook/Twitter | 计量付费墙 |
| **AMP 页面** | AMP 版付费墙实现较弱 | ~10 站 |
| **JSON-LD 提取** | 从 HTML 内嵌的结构化数据提取 articleBody | 通用 |
| **archive.today** | 从网页存档获取已保存的内容 | 兜底方案 |

---

## 🎨 可以生成什么？

| 输出格式 | 用途 | 触发词示例 |
|---------|------|-----------|
| 🎙️ **播客** | 通勤路上听 | "生成播客"、"做成音频" |
| 📊 **PPT** | 团队分享 | "做成PPT"、"生成幻灯片" |
| 🗺️ **思维导图** | 理清结构 | "画个思维导图"、"生成脑图" |
| 📝 **Quiz** | 自测掌握 | "生成Quiz"、"出题" |
| 🎬 **视频** | 可视化 | "做个视频" |
| 📄 **报告** | 深度分析 | "生成报告"、"写个总结" |
| 📈 **信息图** | 数据可视化 | "做个信息图" |
| 📋 **闪卡** | 记忆巩固 | "做成闪卡" |

---

## ⚡ 快速开始

### 前置需求

- ✅ Python 3.9+
- ✅ Git（macOS/Linux 自带）

**就这两样！** 其他依赖一键自动安装。

### 安装（3 步）

```bash
# 1. 克