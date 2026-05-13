<!-- GitHub Trending: TypeScript | 811 stars | +30 today -->

# ErlichLiu/Proma

> 把最丝滑的通用 Agent 体验带进你的工作流，为 100x 专业用户而生的未来产品，正在实现 proactive Agent 阶段。基于 Claude Agent SDK 的完整开源实践，原生支持飞书群聊调用、灵活接入任意大模型供应商 —— 让顶级 Agent 能力真正跑在你每天用的地方。

## Repository Info
- **URL**: https://github.com/ErlichLiu/Proma
- **Stars**: 811
- **Forks**: 126
- **Language**: TypeScript
- **License**: N/A
- **Created**: 2026-01-31
- **Updated**: 2026-05-13
- **Topics**: agent, agent-sdk, agents, chatbot, chatgpt, claude, gemini, llm
- **Open Issues**: 39

## README (excerpt)
# Proma

Proma 是一个本地优先的 AI 桌面应用，把多模型 Chat、通用 Agent、工作区、Skills、MCP、远程机器人和记忆能力放在同一个开源客户端里。

它不是只面向闲聊的聊天框，而是一个可以长期沉淀个人工作流的 Agent 工作台：简单问题用 Chat，复杂任务交给 Agent，数据和配置尽量留在本地。

![Proma 海报](https://img.erlich.fun/personal-blog/uPic/pb.png)

<video width="560" controls>
  <source src="https://img.erlich.fun/personal-blog/uPic/%E7%AE%80%E5%8D%95%E4%BB%8B%E7%BB%8D%20Proma.mp4" type="video/mp4">
</video>

[English README](./README.en.md) | [新手教程](./tutorial/tutorial.md) | [下载开源版](https://github.com/ErlichLiu/Proma/releases) | [下载商业版](https://proma.cool/download)

## 现在能做什么

- **Chat 模式**：多模型对话、附件解析、图片输入、Markdown / Mermaid / KaTeX / 代码高亮、并排对话、系统提示词、上下文管理。
- **Agent 模式**：基于 `@anthropic-ai/claude-agent-sdk` 的通用 Agent，支持工作区隔离、权限模式、文件操作、长任务流式输出、计划确认和用户追问。
- **SubAgent / Tasks**：复杂任务可以通过 Claude Agent SDK 的 Agent 工具拆分为子 Agent / Task，并在消息流中展示调用过程和结果。
- **Skills & MCP**：每个工作区可以独立配置 Skills、MCP Server 和工作区文件，适合沉淀可复用能力。
- **远程机器人**：支持飞书 / Lark 机器人桥接，并已提供钉钉、微信桥接入口，用手机或群聊触发本机 Agent 工作流。
- **记忆与工具**：Chat 和 Agent 可共享记忆能力，并支持联网搜索、内置 Chat 工具、Agent 推荐等辅助能力。
- **本地优先**：会话、工作区、附件、配置、Skills 等默认存储在 `~/.proma/`，使用 JSON / JSONL 文件组织，不依赖本地数据库。
- **桌面体验**：自动更新、代理设置、文件预览、全局快捷键、快速任务窗口、语音输入、亮色 / 暗色 / 跟随系统主题。

## 快速开始

### 下载安装

从 [GitHub Releases](https://github.com/ErlichLiu/Proma/releases) 下载开源版本。当前 release notes 以 `v0.9.12` 为准，提供 macOS Apple Silicon、macOS Intel 和 Windows 安装包。

如果你希望开箱即用、减少 API 配置成本，也可以使用 [Proma 商业版](https://proma.cool/download)。商业版和开源版并行运行，主要区别是商业版提供内置渠道和订阅方案。

### 首次配置

1. 打开 Proma，先完成环境检查。Agent 模式依赖本机基础环境，尤其是 Git、Node.js / Bun 以及可用的 Shell。
2. 进入 **设置 > 渠道**，添加至少一个 AI 供应商渠道，填写 Base URL、API Key 和模型列表。
3. Chat 模式可以使用 OpenAI、Anthropic、Google 或 OpenAI 兼容协议的渠道。
4. Agent 模式需要 Anthropic 协议或 Anthropic 兼容协议渠道，例如 Anthropic、DeepSeek、Kimi API、Kimi Coding Plan。
5. 进入 **设置 > Agent**，选择默认 Agent 渠道、模型和工作区。
6. 如需记忆、联网搜索、飞书 / 钉钉 / 微信桥接，在设置页对应 Tab 中继续配置。

## 模式选择

### Chat 适合

- 日常问答、解释、翻译、润色、轻量代码讨论。
- 读取附件内容后做总结、改写、比较。
- 使用联网搜索或记忆工具增强一次性对话。
- 同时对比多个模型输出，或用不同系统提示词做探索。

### Agent 适合

- 修改、创建、整理本地文件。
- 调研、编写报告、处理多步骤任务。
- 使用 MCP、Skills、Shell、Git、项目文件等外部上下文。
- 需要权限确认、计划模式、后台任务或远程机器人持续跟进的工作。

简单说：**只需要回答时用 Chat，需要行动和交付结果时用 Agent。**

## 截图

### Chat 快速分析

用 Chat 处理轻量但真实的分析任务：整理读者关注点、生成对比表，并把首屏文案快速定稿。

![Proma Chat 快速分析](./docs/assets/screenshots/proma-chat-demo.png)

### Agent 工作台

Agent 在工作区里读取文件、推进任务、输出表格化结论，并把可复用文件保留在右侧工作区面板中。

![Proma Agent 工作台](./docs/assets/screenshots/proma-agent-demo.png)

### Skills

每个工作区都可以沉淀专属 Skills。截图中的 `feedback-synthesis` 用于把用户反馈、访谈记录和 issue 聚合成主题、证据与优先级建议。

![Proma 工作区 Skills](./docs/assets/screenshots/proma-skills-demo.png)

### Skills & MCP

同一个工作区可以管理 stdio / HTTP MCP Server，按需启用或关闭，让 Agent 在不同项目里获得不同的外部上下文。

![Proma MCP 配置](./docs/assets/screenshots/proma-mcp-demo.png)

### 流式语音输入(支持全局输入)
Proma 支持豆包的流式语音输入功能，并且支持在 Proma 内使用和 Proma 外部使用：
- Proma 内部使用：Ctrl + ` 触发识别，再次按下结束自动输入到 Proma 内对应的输入框
- Proma 外部使用：Ctrl + ` 触发识别，再次按下结束自动输入到当前的光标所在处，如无光标则默认写入到剪贴板
- 
![Proma 语音输入](./docs/assets/screenshots/proma-typeless-input.png)

## 支持的模型渠道

| 供应商 | Chat | Agent | 协议说明 |
| --- | --- | --- | --- |
| Anthropic | 支持 | 支持 | Anthropic Messages API |
| DeepSeek | 支持 | 支持 | Anthropic 兼容协议 |
| Kimi API | 支持 | 支持 | Anthropic 兼容协议 |
| Kimi Coding Plan | 支持 | 支持 | Anthropic 兼容协议，使用专用认证头 |
| OpenAI | 支持 | 暂不支持 | Chat Completions |
| Google | 支持 | 暂不支持 | Gemini Generative Language API |
| 智谱 AI | 支持 | 支持 | Anthropic 兼容协议 |
| MiniMax | 支持 | 支持 | Anthropic 兼容协议 |
| 豆包 | 支持 | 支持 | Anthropic 兼容协议 |
| 通义千问 | 支持 | 支持 | Anthropic 兼容协议 |
| 自定义端点 | 支持 | 暂不支持 | OpenAI 兼容协议 |

Agent 模式底层使用 Claude Agent SDK，因此目前要求渠道提供 Anthropic 或 Anthropic 兼容协议。Chat 模式则通过 `@proma/core` 的 Provider Adapter 统一接入不同协议。

## 本地数据

Proma 采用本地文件存储，方便备份、迁移和排查问题。

```text
~/.proma/
├── channels.json
├── conversations.json
├── conversations/
│   └── {conversation-id}.jsonl
├── agent-sessions.json
├── agent-sessions/
│   └── {session-id}.jsonl
├── agent-workspaces/
│   └── {workspace-slug}/
│       ├── workspace-files/
│       ├── mcp.json
│       └── skills/
├── attachments/
├── user-profile.json
├── s