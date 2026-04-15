<!-- GitHub Trending: Python | 1,868 stars | +413 today -->

# lsdefine/GenericAgent

> Self-evolving agent: grows skill tree from 3.3K-line seed, achieving full system control with 6x less token consumption

## Repository Info
- **URL**: https://github.com/lsdefine/GenericAgent
- **Stars**: 1,869
- **Forks**: 241
- **Language**: Python
- **License**: MIT License
- **Created**: 2026-01-16
- **Updated**: 2026-04-15
- **Topics**: ai-agent, automation, autonomous-agent, browser-automation, claude, computer-control, desktop-automation, gemini, lightweight, llm-agent, memory-system, python, self-evolving, skill-tree, task-automation
- **Open Issues**: 37

## README (excerpt)
<div align="center">
<img src="assets/images/bar.jpg" width="880"/>
</div>

<p align="center">
  <a href="#english">English</a> | <a href="#chinese">中文</a>
</p>

---
<a name="english"></a>
## 🌟 Overview

**GenericAgent** is a minimal, self-evolving autonomous agent framework. Its core is just **~3K lines of code**. Through **9 atomic tools + a ~100-line Agent Loop**, it grants any LLM system-level control over a local computer — covering browser, terminal, filesystem, keyboard/mouse input, screen vision, and mobile devices (ADB).

Its design philosophy: **don't preload skills — evolve them.**

Every time GenericAgent solves a new task, it automatically crystallizes the execution path into an skill for direct reuse later. The longer you use it, the more skills accumulate — forming a skill tree that belongs entirely to you, grown from 3K lines of seed code.

> **🤖 Self-Bootstrap Proof** — Everything in this repository, from installing Git and running `git init` to every commit message, was completed autonomously by GenericAgent. The author never opened a terminal once.

## 📋 Core Features
- **Self-Evolving**: Automatically crystallizes each task into an skill. Capabilities grow with every use, forming your personal skill tree.
- **Minimal Architecture**: ~3K lines of core code. Agent Loop is ~100 lines. No complex dependencies, zero deployment overhead.
- **Strong Execution**: Injects into a real browser (preserving login sessions). 9 atomic tools take direct control of the system.
- **High Compatibility**: Supports Claude / Gemini / Kimi / MiniMax and other major models. Cross-platform.


## 🧬 Self-Evolution Mechanism

This is what fundamentally distinguishes GenericAgent from every other agent framework.

```
[New Task] --> [Autonomous Exploration] (install deps, write scripts, debug & verify) -->
[Crystallize Execution Path into skill] --> [Write to Memory Layer] --> [Direct Recall on Next Similar Task]
```

| What you say | What the agent does the first time | Every time after |
|---|---|---|
| *"Read my WeChat messages"* | Install deps → reverse DB → write read script → save skill | **one-line invoke** |
| *"Monitor stocks and alert me"* | Install mootdx → build selection flow → configure cron → save skill | **one-line start** |
| *"Send this file via Gmail"* | Configure OAuth → write send script → save skill | **ready to use** |

After a few weeks, your agent instance will have a skill tree no one else in the world has — all grown from 3K lines of seed code.


##### 🎯 Demo Showcase

| 🧋 Food Delivery Order | 📈 Quantitative Stock Screening |
|:---:|:---:|
| <img src="assets/demo/order_tea.gif" width="100%" alt="Order Tea"> | <img src="assets/demo/selectstock.gif" width="100%" alt="Stock Selection"> |
| *"Order me a milk tea"* — Navigates the delivery app, selects items, and completes checkout automatically. | *"Find GEM stocks with EXPMA golden cross, turnover > 5%"* — Screens stocks with quantitative conditions. |
| 🌐 Autonomous Web Exploration | 💰 Expense Tracking | 💬 Batch Messaging |
| <img src="assets/demo/autonomous_explore.png" width="100%" alt="Web Exploration"> | <img src="assets/demo/alipay_expense.png" width="100%" alt="Alipay Expense"> | <img src="assets/demo/wechat_batch.png" width="100%" alt="WeChat Batch"> |
| Autonomously browses and periodically summarizes web content. | *"Find expenses over ¥2K in the last 3 months"* — Drives Alipay via ADB. | Sends bulk WeChat messages, fully driving the WeChat client. |

## 📅 Latest News

- **2026-04-11:** Introduced **L4 session archive memory** and scheduler cron integration
- **2026-03-23:** Support personal WeChat as a bot frontend
- **2026-03-10:** [Released million-scale Skill Library](https://mp.weixin.qq.com/s/q2gQ7YvWoiAcwxzaiwpuiQ?scene=1&click_id=7)
- **2026-03-08:** [Released "Dintal Claw" — a GenericAgent-powered government affairs bot](https://mp.weixin.qq.com/s/eiEhwo-j6S-WpLxgBnNxBg)
- **2026-03-01:** [GenericAgent featured by Jiqizhixin (机器之心)