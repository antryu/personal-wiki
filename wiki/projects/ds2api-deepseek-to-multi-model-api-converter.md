# DS2API - DeepSeek to Multi-Model API Converter

> DS2API 是一个开源工具，将 DeepSeek Web 的对话能力转换为 OpenAI、Claude 与 Gemini 兼容的 API。该项目支持多账号轮询、纯 Vercel 和 Docker 部署，具有高性能和全栈架构，适合开发者进行本地运行、云部署和研究。
> Last updated: 2026-04-18

## Overview
DS2API 是一个将 DeepSeek Web 对话能力转换为多种 API 格式（如 OpenAI、Claude 和 Gemini）的全栈开源工具。该项目使用 Go 作为后端语言，React 作为前端管理台，提供统一的 API 入口和协议适配层。DS2API 支持多种部署方式，包括本地运行、Docker、Vercel Serverless 和 Linux systemd。

### 架构概览

DS2API 的架构基于模块化设计，分为以下几个核心部分：

1. **协议适配层**：处理 OpenAI、Claude 和 Gemini 的请求，统一入口为 `internal/server/router.go`。
2. **运行时核心能力**：
   - **CLIProxy 转换桥**：将不同协议转换为 OpenAI 格式。
   - **OpenAI ChatCompletions**：处理工具调用与流式语义。
   - **账号池与队列管理**：支持多账号轮询和并发控制。
   - **DeepSeek 客户端**：与 DeepSeek API 通信。
   - **PoW 实现**：Go 实现的毫秒级计算。
   - **工具调用解析器**：确保 Go 和 Node 端语义一致。

3. **部署支持**：支持本地运行、Docker、Vercel Serverless 和 Linux systemd。

### 3.X 版本改进

- **统一路由内核**：所有协议入口统一注册到 `internal/server/router.go`。
- **统一执行链路**：Claude / Gemini 入口通过协议转换后进入 OpenAI 内核处理。
- **适配器分层清晰**：Claude 和 Gemini 的适配器负责协议封装，OpenAI 负责核心执行。
- **Tool Calling 双运行时对齐**：Go 和 Node 端保持一致的解析和防泄漏语义。
- **配置与运行时解耦**：静态配置与运行时策略分离，支持热更新。
- **流式能力升级**：共享一致的工具调用增量输出策略。
- **可观测与可运维增强**：提供健康检查、版本信息和调试接口。

## Key Points
- 支持 OpenAI、Claude 和 Gemini 多种 API 格式。
- 使用 Go 和 React 构建全栈应用，无需依赖 Python。
- 提供 Docker、Vercel 和本地部署支持。
- 多账号轮询和并发控制。
- 支持工具调用、流式语义和协议转换。
- 提供 Admin API 和 WebUI 管理台。
- 包含详细的架构说明和接口文档。

## Sources
- [GitHub](https://github.com/CJackHwang/ds2api)
- [원본](raw/ingest/projects/2026-04-18-ds2api-deepseek-to-multi-model-api-converter.md)