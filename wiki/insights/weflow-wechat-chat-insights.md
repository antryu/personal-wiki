# WeFlow WeChat Chat Insights

> WeFlow 是一个完全本地的微信聊天记录实时导出与分析工具，支持生成年度报告和群聊画像。其隐私保护设计和实时数据处理能力使其成为用户分析社交数据的重要工具。  
> Last updated: 2026-04-10

## Overview
WeFlow 提供微信聊天记录的本地实时访问、解密和深度分析功能。通过该工具，用户可查看聊天记录、朋友圈内容，并生成年度报告与可视化图表。核心特性包括：
- **实时数据处理**：无需中间数据库，实时刷新最新消息。
- **隐私保护**：所有操作在本地完成，不上传云端。
- **多格式导出**：支持 HTML、JSON、Excel 等格式。
- **开发者支持**：提供 HTTP API 供二次开发集成。

**主要功能模块**：
- 聊天记录解密（图片/视频/实况）
- 消息防撤回与弹窗通知
- 朋友圈内容管理（解密/导出/防删除）
- 联系人信息导出与好友找回
- HTTP API 接口（5031 端口默认）

**平台支持**：
| 操作系统 | 架构要求 | 安装包类型 |
|----------|----------|------------|
| Windows 10+ | x64 (AMD64) | `.exe` |
| macOS | Apple Silicon (ARM64) | `.dmg` |
| Linux | x64 (AMD64) | `.AppImage` / `.tar.gz` |

**开发者使用指南**：
```bash
git clone https://github.com/hicccc77/WeFlow.git
cd WeFlow
npm install
npm run dev
```

## Key Points
- 支持微信 4.0+ 版本的实时聊天记录分析
- 提供跨平台安装包（Windows/macOS/Linux）
- 生成个性化年度报告与群聊画像
- HTTP API 允许开发者集成本地消息能力
- 实时弹窗通知与消息防撤回功能
- 朋友圈内容解密与防删除保护

## Sources
- [GitHub](https://github.com/hicccc77/WeFlow)
- [원본](raw/ingest/insights/2026-04-10-weflow-wechat-chat-insights.md)