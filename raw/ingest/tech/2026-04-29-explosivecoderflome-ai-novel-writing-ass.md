<!-- GitHub Trending: TypeScript | 987 stars | +62 today -->

# ExplosiveCoderflome/AI-Novel-Writing-Assistant

> 面向长篇小说创作的 AI Native 开源系统，用 Agent、世界观、写法引擎、RAG 和整本生产工作流，帮助新手从一句灵感走到完整小说。AI-native engine for end-to-end novel creation — from idea to full chapters, with structured planning, worldbuilding, and agent-driven workflows.

## Repository Info
- **URL**: https://github.com/ExplosiveCoderflome/AI-Novel-Writing-Assistant
- **Stars**: 987
- **Forks**: 224
- **Language**: TypeScript
- **License**: Other
- **Created**: 2025-02-18
- **Updated**: 2026-04-29
- **Topics**: agent-workflow, ai, creative-writing, long-form-fiction, narrative-engine, novel-writing, rag, story-generation, worldbuilding, writing-assistant
- **Open Issues**: 19

## README (excerpt)
﻿# AI 小说创作工作台 / AI Novel Production Engine
一个面向长篇小说创作的 AI Native 开源项目。

当前开发主线：
`Creative Hub + 自动导演开书 + 整本生产主链 + 写法引擎`

![Monorepo](https://img.shields.io/badge/Monorepo-pnpm%20workspace-3C873A)
![Frontend](https://img.shields.io/badge/Frontend-React%20%2B%20Vite-61DAFB)
![Backend](https://img.shields.io/badge/Backend-Express%20%2B%20Prisma-111827)
![AI](https://img.shields.io/badge/AI-LangChain%20%2F%20LangGraph-0EA5E9)
![Editor](https://img.shields.io/badge/Editor-Plate-7C3AED)
![Vector DB](https://img.shields.io/badge/RAG-Qdrant-E63946)


## ✨ 项目简介

这是一个**面向长篇小说的 AI 生产系统**。

它不再是“你写一句，AI补一句”的聊天模式，而是：

- 👉 从一个想法出发
- 👉 自动构建世界观、人物、剧情结构
- 👉 管理知识与设定（RAG）
- 👉 控制写作风格与叙事一致性
- 👉 最终生成完整章节甚至整本小说

## Windows 桌面版

如果你只是想直接下载安装并开始使用，优先从桌面版入口进入：

- 下载入口：[GitHub Releases](https://github.com/ExplosiveCoderflome/AI-Novel-Writing-Assistant/releases)
- 最新版本页：[Latest Release](https://github.com/ExplosiveCoderflome/AI-Novel-Writing-Assistant/releases/latest)
- 建议优先下载 `Setup.exe` 安装版；如果你不想安装，或者想放在 U 盘 / 临时目录里直接运行，再选择 `portable` 版本



## 项目定位

很多 AI 写作工具的使用方式其实差不多：
- 你输入一句 Prompt
- 它回你一段正文
- 不满意就重试
- 写短篇还行，写长篇容易越写越散

这个仓库是“AI 导演式长篇小说生产系统”，而不是传统的写作聊天壳子。

它最核心的产品判断是：

- 目标用户优先是完全不懂写作的新手，而不是熟悉结构设计的资深作者。
- 优先解决“如何把整本书写完”，再逐步优化“写得多精巧”。
- AI 不只是一个补全文本的模型，而是参与规划、判断、调度、执行和追踪的系统角色。

如果你正在找的是下面这种项目，这个仓库会更值得关注：

- 想验证 AI 是否真的能参与整本小说生产，而不是只写单段文案。
- 想研究 AI Native Product、Agent Workflow、LangGraph 编排怎样落到真实创作业务。
- 想把世界观、角色、拆书、知识库、写法控制和章节生成串成一套稳定工作流。



## 现在已经能做什么

### 1. AI 自动导演开书

- 可以从一句模糊灵感直接进入自动导演，不必先自己把世界观、主线、角色和卷纲全想完；系统会先整理项目设定、对齐书级 framing，再生成多套整本方向和对应标题组。
- 方案选择不再只是“满意就确认、不满意就整批重来”。如果第一轮方向不够准，可以继续生成下一轮；如果已经偏向某一套，也可以只让 AI 修这套方案，或者只重做这套的标题组。
- 自动导演创建时已经支持三种推进方式：`按重要阶段审核`、`自动推进到可开写`、`继续自动执行前 10 章`。对应链路会把书级方向、故事宏观规划、角色准备、卷战略、节奏拆章和章节执行接成一条连续流程。
- 这条链路已经支持检查点恢复、现有项目接管、页内继续推进和换模型重试。到 `front10_ready` 之后，不仅能直接进入章节执行，也可以继续让 AI 自动执行前 10 章的写作、审校和修复。
- 自动导演里的角色阶段也不再无条件把第一套阵容直接落库。现在会优先生成可直接进入正文的人物资产；如果角色名仍像功能位、缺少身份锚点或质量不够稳定，系统会停在角色审核点，而不是继续把坏阵容带进后续卷规划和拆章。

### 2. Creative Hub 与 Agent Runtime

- `Creative Hub` 现在已经不只是一个聊天页，而是在往统一创作中枢收：对话、追问、规划、工具调用、执行状态和回合总结都在往这里并。
- 系统里已经有了比较明确的 Planner、Tool Registry、Runtime、审批节点、状态卡片和中断恢复链路，说明这个项目现在关注的已经不是“AI 会不会写字”，而是“AI 能不能组织一条真实的创作工作流”。
- 如果你关心的是 AI Native Product 怎么落地，这一块已经不是零散按钮拼盘了，而是开始长出一套值得继续往下做的骨架。

### 3. 整本生产主链

- 单章运行时、章节执行和整本批量 pipeline 现在都在往同一条主链上收，不再是“这里一个试写入口，那里一个批量按钮”的割裂状态。
- 已经可以从结构化规划、章节目录和资产准备状态出发，启动整本写作任务，并持续查看当前阶段、失败原因和下一步建议。
- 它当然还不是那种完全不用管的一键出书机，但也已经不是“只能演示几张截图”的阶段了，至少主链是真的能往前推。

### 4. 写法引擎

- 写法现在不再只是提示词里的一段长说明，而是可以保存、编辑、绑定、试写和复用的长期资产。
- 可以从现有文本里提取写法特征，并把原文样本一起保存下来，后面不是只能靠记忆去猜“当时那个味道到底怎么来的”。
- 提取出来的特征会沉淀成可见特征池，进入编辑页以后可以逐项启用、停用和组合，写法规则也会跟着同步重编译，便于后续试写、修正和整本绑定。
- 这意味着写法引擎现在已经开始真的参与生成、检测和修正链路，而不是一个摆在侧边栏里的概念功能。

### 5. 世界观、角色、拆书、知识库联动

- 世界观已经不只是大段设定文本，而是支持创建、分层设定、快照、深化问答、一致性检查和小说绑定的结构化资产。
- 角色体系也不再只是静态角色卡，已经开始往动态角色资产走，会把关系阶段、卷级职责、缺席风险和候选新角色一起带进后续规划与生成。
- 拆书结果可以继续发布到知识库，再回灌到续写、规划和正文生成；知识库本身也已经支持文档管理、向量检索、关键词检索和重建任务追踪。
- 换句话说，这一块现在已经开始像“长期记忆系统”，而不是做完一次设定就丢在那里的资料堆。

### 6. 模型路由与本地运行

- 已经支持 OpenAI、DeepSeek、SiliconFlow、xAI 等多提供商配置，规划、正文、审阅这些链路可以按路由拆开配。
- 前后端已经完成 Monorepo 拆分，适合本地持续开发，也比较适合继续往 Prompt Registry、Workflow Registry 和 Runtime 这条路上扩。
- 默认使用 SQLite 就能把主链先跑起来；如果你要完整体验知识库 / RAG，再按需接 Qdrant 就行，不需要一上来就把所有基础设施堆满。


## 典型使用路径

1. 在小说创建页输入一句灵感，先让 AI 自动导演给出整本方向候选。
2. 进入 `项目设定`，先把题材、卖点、目标读者感受和前 30 章承诺定下来。
3. 用 `故事宏观规划`、`角色准备` 和世界观资产，把整本主线、角色网和世界边界补到能写。
4. 进入 `卷战略 / 卷骨架` 决定怎么分卷，再到 `节奏 / 拆章` 把当前卷落到章节列表和单章细化。
5. 按需绑定拆书结果、知识库文档和写法资产，让后续正文不只是靠一次性提示词。
6. 进入 `章节执行` 逐章写作、审计、修复，必要时回到卷工作台做再平衡和重规划。
7. 想加速推进时，再启动整本生产任务，持续查看状态、失败原因和回灌结果。

## 当前长篇生成能力支撑图

![当前长篇生成能力支撑图](./images/流程图.svg?v=1)

- 开书定盘负责先把这本书“要写成什么样”说清楚，避免后面越写越散。
- 整本控制层和卷级规划层负责把长篇拆成可推进、可回看、可调整的结构，而不是一次性写死。
- 角色、世界观、写法、知识库和质量控制一起托住单章生成，让每一章都尽量还在同一本书里。
- 每写完一章，系统都会把新状态回灌回去，继续影响后续章节、卷级节奏和必要时的重规划。

## 最新更新

完整历史更新见 [docs/releases/release-notes.md](./docs/releases/release-notes.md)。

### 2026-04-29

已有项目重新接管更顺了。选择“重新生成当前步”时，卷战略 / 卷骨架阶段可以先清空当前产出，再交给自动导演重新生成，不会因为卷规划暂时为空而提示参数校验失败。

- 自动导演接管旧项目时，重跑卷规划步骤会把“已清空、待重新生成”识别为有效状态。
- 继续执行前仍会保留生成结果和章节同步所需的有效性校验，避免把空卷骨架误当成可执行规划。
