<!-- GitHub Trending: Python | 29,501 stars | +182 today -->

# ZhuLinsen/daily_stock_analysis

> LLM驱动的 A/H/美股智能分析器：多数据源行情 + 实时新闻 + LLM决策仪表盘 + 多渠道推送，零成本定时运行，纯白嫖. LLM-powered stock analysis system for A/H/US markets.

## Repository Info
- **URL**: https://github.com/ZhuLinsen/daily_stock_analysis
- **Stars**: 29,501
- **Forks**: 30,220
- **Language**: Python
- **License**: MIT License
- **Created**: 2026-01-10
- **Updated**: 2026-04-12
- **Topics**: agent, ai, aigc, gemini, llm, quant, quantitative-trading, rag, stock
- **Open Issues**: 57

## README (excerpt)
<div align="center">

# 📈 股票智能分析系统

[![GitHub stars](https://img.shields.io/github/stars/ZhuLinsen/daily_stock_analysis?style=social)](https://github.com/ZhuLinsen/daily_stock_analysis/stargazers)
[![CI](https://github.com/ZhuLinsen/daily_stock_analysis/actions/workflows/ci.yml/badge.svg)](https://github.com/ZhuLinsen/daily_stock_analysis/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python 3.10+](https://img.shields.io/badge/python-3.10+-blue.svg)](https://www.python.org/downloads/)
[![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-Ready-2088FF?logo=github-actions&logoColor=white)](https://github.com/features/actions)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?logo=docker&logoColor=white)](https://hub.docker.com/)

<p>
  <a href="https://trendshift.io/repositories/18527" target="_blank"><img src="https://trendshift.io/api/badge/repositories/18527" alt="ZhuLinsen%2Fdaily_stock_analysis | Trendshift" style="width: 250px; height: 55px;" width="250" height="55"/></a>
  <a href="https://hellogithub.com/repository/ZhuLinsen/daily_stock_analysis" target="_blank"><img src="https://api.hellogithub.com/v1/widgets/recommend.svg?rid=6daa16e405ce46ed97b4a57706aeb29f&claim_uid=pfiJMqhR9uvDGlT&theme=neutral" alt="Featured｜HelloGitHub" style="width: 250px; height: 54px;" width="250" height="54" /></a>
</p>

> 🤖 基于 AI 大模型的 A股/港股/美股自选股智能分析系统，每日自动分析并推送「决策仪表盘」到企业微信/飞书/Telegram/Discord/Slack/邮箱

[**功能特性**](#-功能特性) · [**快速开始**](#-快速开始) · [**推送效果**](#-推送效果) · [**完整指南**](docs/full-guide.md) · [**常见问题**](docs/FAQ.md) · [**更新日志**](docs/CHANGELOG.md)

简体中文 | [English](docs/README_EN.md) | [繁體中文](docs/README_CHT.md)

</div>

## 💖 赞助商 (Sponsors)
<div align="center">
  <a href="https://serpapi.com/baidu-search-api?utm_source=github_daily_stock_analysis" target="_blank">
    <img src="./sources/serpapi_banner_zh.png" alt="轻松抓取搜索引擎上的实时金融新闻数据 - SerpApi" height="160">
  </a>
</div>
<br>


## ✨ 功能特性

| 模块 | 功能 | 说明 |
|------|------|------|
| AI | 决策仪表盘 | 一句话核心结论 + 精确买卖点位 + 操作检查清单 |
| 分析 | 多维度分析 | 技术面（盘中实时 MA/多头排列）+ 筹码分布 + 舆情情报 + 实时行情 |
| 市场 | 全球市场 | 支持 A股、港股、美股及美股指数（SPX、DJI、IXIC 等） |
| 基本面 | 结构化聚合 | 新增 `fundamental_context`（valuation/growth/earnings/institution/capital_flow/dragon_tiger/boards，其中 `earnings.data` 新增 `financial_report` 与 `dividend`，`boards` 表示板块涨跌榜），主链路 fail-open 降级 |
| 策略 | 市场策略系统 | 内置 A股「三段式复盘策略」与美股「Regime Strategy」，输出进攻/均衡/防守或 risk-on/neutral/risk-off 计划，并附“仅供参考，不构成投资建议”提示 |
| 复盘 | 大盘复盘 | 每日市场概览、板块涨跌；支持 cn(A股)/us(美股)/both(两者) 切换 |
| 界面 | 双主题工作台 | Web 工作台现支持全新浅色主题与深色主题切换，首页 / 问股 / 回测 / 持仓 / 设置统一升级为同一套视觉与交互体系 |
| 补全 | 智能补全 (MVP) | **[测试阶段]** 首页搜索框支持代码/名称/拼音/别名联想；索引已覆盖 A股、港股、美股三个市场，支持通过 Tushare 或 AkShare 数据源更新 |
| 智能导入 | 多源导入 | 支持图片、CSV/Excel 文件、剪贴板粘贴；Vision LLM 提取代码+名称；置信度分层确认；名称→代码解析（本地+拼音+AkShare） |
| 历史记录 | 批量管理 | 支持多选、全选及批量删除历史分析记录，优化管理效率与 UI/UX 体验 |
| 回测 | AI 回测验证 | 自动评估历史分析准确率，支持按股票与分析日期查看“AI 预测 vs 次日实际（1 日窗口）”和准确率 |
| 资讯 | 公司公告 + 资金流 | IntelAgent 新增公告抓取与主力资金流维度（上交所/深交所/cninfo + A 股主力资金流）用于补强舆情链路 |
| **Agent 问股** | **策略对话** | **多轮策略问答，支持均线金叉/缠论/波浪等 11 种内置策略，Web/Bot/API 全链路** |
| 推送 | 多渠道通知 | 企业微信、飞书、Telegram、Discord、Slack、钉钉、邮件、Pushover |
| 自动化 | 定时运行 | GitHub Actions 定时执行，无需服务器 |

> 历史报告详情会优先展示 AI 返回的原始「狙击点位」文本，避免区间价、条件说明等复杂内容在历史回看时被压缩成单个数字。

> 回测页现支持“次日验证 / 1 日窗口”视图，可按股票代码和分析日期范围查看当时 AI 预测、次日实际涨跌以及区间准确率；该视图基于历史分析记录与 1 日回测结果，不代表真实成交流水。

> Web 工作台已完成一轮 UI 升级：新增完整浅色主题，并支持浅色 / 深色主题一键切换；首页、问股、回测、持仓、设置页改为共享同一套设计 token、输入表面、状态反馈和抽屉/滚动语义，日常使用与移动端浏览更连贯。

> 问股页进一步补强了消息复制、会话导出、通知发送、历史删除和追问上下文保护；首页与报告抽屉的复制反馈、空态和错误态也已按面板独立收口，减少误触和状态串扰。

> Web 管理认证支持运行时开关；如果系统中已保留管理员密码，重新开启认证时必须提供当前密码，避免在认证关闭窗口内直接获取新的管理员会话。
> 多进程/多 worker 部署时，认证开关仅在当前进程即时生效；需重启或滚动重启全部 worker 以统一状态。

> 持仓管理补充说明：卖出录入现在会在写入前校验可用持仓，超售会直接拒绝；如果历史里误录了交易 / 资金流水 / 公司行为，可在 Web `/portfolio` 页的事件列表中直接删除后恢复快照。高并发写入场景下，直接持仓写接口可能返回 `409 portfolio_busy`，提示账本正在处理另一笔变更；CSV 导入仍保持逐条提交与部分成功语义。

### 技术栈与数据来源

| 类型 | 支持 |
|------|------|
| AI 模型 | [AIHubMix](https://aihubmix.com/?af