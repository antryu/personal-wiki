<!-- GitHub Trending: Rust | 1,532 stars | +36 today -->

# hj01857655/kiro-account-manager

> 🚀 智能管理 Kiro IDE 账号，一键切换，配额监控 | 官网：https://kiro-website-six.vercel.app

## Repository Info
- **URL**: https://github.com/hj01857655/kiro-account-manager
- **Stars**: 1,532
- **Forks**: 269
- **Language**: Rust
- **License**: Other
- **Created**: 2025-12-09
- **Updated**: 2026-05-11
- **Topics**: N/A
- **Open Issues**: 7

## README (excerpt)
# Kiro Account Manager

<p align="center">
  <img src="src-tauri/icons/128x128.png" alt="Logo" width="80">
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Platform-Windows%20%7C%20macOS%20%7C%20Linux-blue" alt="Platform">
  <img src="https://img.shields.io/github/v/release/hj01857655/kiro-account-manager?label=Version&color=green" alt="Version">
  <img src="https://img.shields.io/github/downloads/hj01857655/kiro-account-manager/total?color=brightgreen" alt="Downloads">
  <img src="https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-orange" alt="License">
  <img src="https://img.shields.io/badge/QQ群1-1020204332-12B7F5?logo=tencentqq" alt="QQ群1">
  <img src="https://img.shields.io/badge/QQ群2-1080919449-12B7F5?logo=tencentqq" alt="QQ群2">
  <img src="https://img.shields.io/badge/语言-简体中文-red" alt="语言">
</p>

<p align="center">
  <b>🚀 智能管理 Kiro IDE 账号，一键切换，配额监控</b>
</p>

<p align="center">
  🌐 <b><a href="https://kiro-website-six.vercel.app">官方网站</a></b> | 
  📥 <b><a href="#-下载">立即下载</a></b> | 
  💬 <b><a href="https://qm.qq.com/q/xi0AglEqGs">加入 QQ 2群</a></b>
</p>

> **📢 语言支持**：本项目**仅支持简体中文界面**。

---

## 🏗️ 项目概览

Kiro Account Manager 是一个基于 **Tauri 2.x** 的桌面应用，用于集中管理 **Kiro IDE** 账号与本地配置。

**技术栈**：React 18 + Vite + shadcn/ui + TailwindCSS 4 | Rust + Tauri 2.x | Windows / macOS / Linux

**核心模块**：
- 账号管理：导入、导出、刷新、验证、分组、标签、远程删除
- 登录认证：Google / GitHub Social OAuth，AWS IAM Identity Center（BuilderId / Enterprise）
- Kiro 集成：切换账号、同步模型 / 代理 / MCP / Steering / Skills / Hooks / Custom Agents / Powers
- 自动化能力：Token 自动刷新、余额不足自动换号、机器 ID 绑定与重置
- 桌面端能力：Deep Link OAuth 回调、单实例、系统托盘、自动更新
- 网关能力：内置 Kiro API Gateway，支持 Anthropic Messages、OpenAI Responses、Chat Completions 与流式转发

---

## 📥 下载

**最新版本 v1.8.7**（发布于 2026-05-10）：请前往 [Releases](https://github.com/hj01857655/kiro-account-manager/releases/latest)（自动保持最新）

> 以下下载链接可能滞后，以 Releases 为准。

| 平台 | 架构 | 文件格式 | 下载链接 |
|------|------|---------|---------|
| 🪟 **Windows** | x64 | MSI 安装包 | [KiroAccountManager_1.8.7_x64_zh-CN.msi](https://github.com/hj01857655/kiro-account-manager/releases/download/v1.8.7/KiroAccountManager_1.8.7_x64_zh-CN.msi) |
| 🍎 **macOS** | Intel (x64) | DMG 镜像 | [KiroAccountManager_1.8.7_x64.dmg](https://github.com/hj01857655/kiro-account-manager/releases/download/v1.8.7/KiroAccountManager_1.8.7_x64.dmg) |
| 🍎 **macOS** | Apple Silicon (M1/M2/M3) | DMG 镜像 | [KiroAccountManager_1.8.7_aarch64.dmg](https://github.com/hj01857655/kiro-account-manager/releases/download/v1.8.7/KiroAccountManager_1.8.7_aarch64.dmg) |
| 🐧 **Linux** | x86_64 | AppImage | [KiroAccountManager_1.8.7_amd64.AppImage](https://github.com/hj01857655/kiro-account-manager/releases/download/v1.8.7/KiroAccountManager_1.8.7_amd64.AppImage) |
| 🐧 **Linux** | x86_64 | DEB 包 | [KiroAccountManager_1.8.7_amd64.deb](https://github.com/hj01857655/kiro-account-manager/releases/download/v1.8.7/KiroAccountManager_1.8.7_amd64.deb) |

> **macOS 样式说明**：若出现样式显示异常，请基于当前仓库源码自行调整（我没有 macOS 设备，无法复现与调试）。

**系统要求**：
- **Windows**: Windows 10/11 (64-bit)，需要 [WebView2](https://developer.microsoft.com/microsoft-edge/webview2/) (Win11 已内置)
- **macOS**: macOS 10.15+ (Catalina 及以上)
- **Linux**: x86_64 架构，需要 WebKitGTK 4.0+

**安装说明**：
- **Windows**: 双击 `.msi` 文件安装
- **macOS**: 打开 `.dmg`，拖动到 Applications，首次运行在「安全性与隐私」中允许
- **Linux AppImage**: `chmod +x` 后直接运行
- **Linux DEB**: `sudo dpkg -i` 安装

---

## 📸 截图

![首页](screenshots/首页.webp)
![账号管理](screenshots/账号管理.webp)
![桌面授权](screenshots/桌面授权.webp)
![规则管理](screenshots/规则管理.webp)
![设置](screenshots/设置.png)
![关于](screenshots/关于.png)

---

## ✨ 核心功能

### 🔐 登录认证
- **Social 登录**：Google / GitHub OAuth，自动刷新 Token
- **IdC 登录**：BuilderId / Enterprise，完整 SSO OIDC 流程

### 📊 账号管理
- 卡片 / 列表双视图，配额进度条，订阅类型标识
- 封禁检测、Token 过期倒计时、状态高亮
- 标签与分组、高级筛选（订阅类型 / 状态 / 使用率）

### 🔄 一键切号
- 无感切换 Kiro IDE 账号，自动重置机器 ID
- 封禁账号自动跳过，余额不足自动换号

### 📦 批量操作
- JSON 导入导出、从 Kiro IDE / kiro-cli 导入
- 批量刷新 / 删除 / 打标签 / 远程注销

### 🔌 Kiro 配置同步
一站式管理：MCP 服务器、Steering 规则、Hooks、Skills、Custom Agents、Powers

### ⚙️ 系统设置