<!-- GitHub Trending: Python | 24,994 stars | +175 today -->

# hsliuping/TradingAgents-CN

> 基于多智能体LLM的中文金融交易框架 - TradingAgents中文增强版

## Repository Info
- **URL**: https://github.com/hsliuping/TradingAgents-CN
- **Stars**: 24,994
- **Forks**: 5,260
- **Language**: Python
- **License**: Other
- **Created**: 2025-06-26
- **Updated**: 2026-04-28
- **Topics**: N/A
- **Open Issues**: 240

## README (excerpt)
# TradingAgents 中文增强版

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![Python](https://img.shields.io/badge/Python-3.10%2B-blue.svg)](https://www.python.org/)
[![Version](https://img.shields.io/badge/Version-v1.0.1-green.svg)](./VERSION)
[![Documentation](https://img.shields.io/badge/docs-中文文档-green.svg)](./docs/)
[![Original](https://img.shields.io/badge/基于-TauricResearch/TradingAgents-orange.svg)](https://github.com/TauricResearch/TradingAgents)

---

## ⚠️ 重要版权声明与授权说明

### 🚨 版权侵权警告

**我们注意到 `tradingagents-ai.com` 网站未经授权使用了我们的专有代码，并声称是他们公司的产品。**

**⚠️ 重要提醒**：
- ❌ **我们项目组目前没有给任何组织或个人进行过商业授权**
- ❌ **该网站未经授权使用我们的代码，属于侵权行为**
- ⚠️ **请大家注意识别，避免上当受骗**

**✅ 官方唯一渠道**：
- 📦 GitHub 仓库：https://github.com/hsliuping/TradingAgents-CN
- 📧 官方邮箱：hsliup@163.com
- 📱 微信公众号：TradingAgents-CN

如发现任何未经授权的商业使用，请通过上述渠道联系我们。

### 📋 版本授权说明

#### v1.0.1（当前稳定版本）
- ✅ **个人使用**：完全开源，可自由使用
- ❌ **商业使用**：**必须获得商业授权**，未经授权禁止商业使用
- 📧 **授权联系**：[hsliup@163.com](mailto:hsliup@163.com)

#### v2.0.0（开发中）
- 🔄 **开发状态**：已完成两轮内测，接近完工上线阶段
- ⚠️ **开源计划**：**因存在盗版问题，v2.0 版本暂时不进行开源**
- 📢 **发布方式**：将通过官方渠道发布，敬请关注

### 📄 许可证详情

本项目采用**混合许可证**模式：
- 🔓 **开源部分**（Apache 2.0）：除 `app/` 和 `frontend/` 外的所有文件
- 🔒 **专有部分**（需商业授权）：`app/`（FastAPI后端）和 `frontend/`（Vue前端）目录

详细说明请查看：[版权声明](./COPYRIGHT.md) | [许可证文件](./LICENSE)

---

>
> 🎓 **学习中心**: AI基础 | 提示词工程 | 模型选择 | 多智能体分析原理 | 风险与局限 | 源项目与论文 | 实战教程（部分为外链） | 常见问题
> 🎯 **核心功能**: 原生OpenAI支持 | Google AI全面集成 | 自定义端点配置 | 智能模型选择 | 多LLM提供商支持 | 模型选择持久化 | Docker容器化部署 | 专业报告导出 | 完整A股支持 | 中文本地化

面向中文用户的**多智能体与大模型股票分析学习平台**。帮助你系统化学习如何使用多智能体交易框架与 AI 大模型进行合规的股票研究与策略实验，不提供实盘交易指令，平台定位为学习与研究用途。

## 🙏 致敬源项目

感谢 [Tauric Research](https://github.com/TauricResearch) 团队创造的革命性多智能体交易框架 [TradingAgents](https://github.com/TauricResearch/TradingAgents)！

**🎯 我们的定位与使命**: 专注学习与研究，提供中文化学习中心与工具，合规友好，支持 A股/港股/美股 的分析与教学，推动 AI 金融技术在中文社区的普及与正确使用。

## 🎉 v1.0.1 版本说明 - 配置体验与同步稳定性增强

> 🚀 **当前推荐版本**: `v1.0.1` 已正式可用，在 `v1.0.0-preview` 架构基础上，重点增强配置管理、聚合厂家、页面切换、单股同步和上游能力吸收。

### ✨ 核心特性

#### 🏗️ **全新技术架构**
- **后端升级**: 从 Streamlit 迁移到 FastAPI，提供更强大的 RESTful API
- **前端重构**: 采用 Vue 3 + Element Plus，打造现代化的单页应用
- **数据库优化**: MongoDB + Redis 双数据库架构，性能提升 10 倍
- **容器化部署**: 完整的 Docker 多架构支持（amd64 + arm64）

#### 🚀 **v1.0.1 重点增强**
- **配置管理优化**: 新增厂家、模型目录和大模型配置支持按最新添加顺序置顶显示
- **聚合厂家增强**: 新增 `AiHubMix` 聚合 LLM 厂家，并支持聚合渠道初始化能力
- **模型选择统一排序**: 配置页、对话框和分析页中的模型列表顺序保持一致
- **页面切换修复**: 股票详情页和报告详情页切换后会自动刷新正确内容
- **单股同步增强**: 同步结果支持展示主链路、回退链路、失败原因和 `market_quotes` 落库状态
- **AKShare 兜底增强**: 单股实时行情支持 `stock_bid_ask_em -> stock_zh_a_spot -> stock_zh_a_spot_em -> stock_zh_a_hist` 多级降级链
- **上游能力同步**: 同步 `llm_clients`、共享模型目录、provider 规范键、图层初始化路径和数据库迁移增强等能力

#### 🎯 **企业级功能**
- **用户权限管理**: 完整的用户认证、角色管理、操作日志系统
- **配置管理中心**: 可视化的大模型配置、数据源管理、系统设置
- **缓存管理系统**: 智能缓存策略，支持 MongoDB/Redis/文件多级缓存
- **实时通知系统**: SSE+WebSocket 双通道推送，实时跟踪分析进度和系统状态
- **批量分析功能**: 支持多只股票同时分析，提升工作效率
- **智能股票筛选**: 基于多维度指标的股票筛选和排序系统
- **自选股管理**: 个人自选股收藏、分组管理和跟踪功能
- **个股详情页**: 完整的个股信息展示和历史分析记录
- **模拟交易系统**: 虚拟交易环境，验证投资策略效果

#### 🤖 **智能分析增强**
- **动态供应商管理**: 支持动态添加和配置 LLM 供应商
- **模型能力管理**: 智能模型选择，根据任务自动匹配最佳模型
- **多数据源同步**: 统一的数据源管理，支持 Tushare、AkShare、BaoStock
- **报告导出功能**: 支持 Markdown/Word/PDF 多格式专业报告导出

#### 🔧 **重大Bug修复**
- **技术指标计算修复**: 彻底解决市场分析师技术指标计算不准确问题
- **基本面数据修复**: 修复基本面分析师PE、PB等关键财务数据计算错误
- **死循环问题修复**: 解决部分用户在分析过程中触发的无限循环问题
- **数据一致性优化**: 确保所有分析师使用统一、准确的数据源

#### 🐳 **Docker 多架构支持**
- **跨平台部署**: 支持 x86_64 和 ARM64 架构（Apple Silicon、树莓派、AWS Graviton）
- **GitHub Actions**: 自动化构建和发布 Docker 镜像
- **一键部署**: 完整的 Docker Compose 配置，5 分钟快速启动

### 📊 技术栈升级

| 组件 | v0.1.x | v1.0.1 |
|------|--------|----------------|
| **后端框架** | Streamlit | FastAPI + Uvicorn |
| **前端框架** | Streamlit | Vue 3 + Vite + Element Plus |
| **数据库** | 可选 MongoDB | MongoDB + Redis |
| **API 架构** | 单体应用 | RESTful API + WebSocket |
| **部署方式** | 本地/Docker | Docker 多架构 + GitHub Actions |



#### 📥 安装部署

**两种部署方式，任选其一**：

| 部署方式 | 适用场景 | 难度 | 文档链接 |
|---------|---------|------|---------|
| 🐳 **Docker