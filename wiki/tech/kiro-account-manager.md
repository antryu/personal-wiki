# Kiro Account Manager

> Kiro Account Manager 是一个用于集中管理 Kiro IDE 账号与本地配置的桌面应用程序，支持一键切换账号、配额监控和自动化操作。它基于 Tauri 2.x 框架开发，并且是跨平台的，适用于 Windows、macOS 和 Linux。  
> Last updated: 2026-05-11

## Overview
Kiro Account Manager 是一款专注于 Kiro IDE 用户的管理工具，其主要功能包括账号管理、登录认证、Kiro 配置同步、自动化能力、桌面功能以及网关能力。该工具使用 Rust 编写后端逻辑，并使用 React 18 和 Tauri 构建前端界面。

### Repository Information
- **URL**: https://github.com/hj01857655/kiro-account-manager
- **Stars**: 1,532
- **Forks**: 269
- **Language**: Rust
- **License**: CC BY-NC-SA 4.0
- **Created**: 2025-12-09
- **Updated**: 2026-05-11
- **Open Issues**: 7

### Core Features
- **账号管理**：支持导入、导出、刷新、验证、分组、标签、远程删除等功能。
- **登录认证**：支持 Google / GitHub OAuth，AWS IAM Identity Center（BuilderId / Enterprise）登录。
- **Kiro 集成**：包括切换账号、同步模型、代理、MCP、Steering、Skills、Hooks、Custom Agents、Powers 等配置。
- **自动化能力**：Token 自动刷新、余额不足自动换号、机器 ID 绑定与重置。
- **桌面能力**：Deep Link OAuth 回调、单实例运行、系统托盘集成、自动更新。
- **网关能力**：内置 Kiro API Gateway，支持多种格式的流式转发。

### Download
- 最新版本是 v1.8.7（发布于 2026-05-10）
- 支持 Windows、macOS 和 Linux 平台，下载方式包括 MSI、DMG、AppImage 和 DEB 格式。

### System Requirements
- **Windows**: Windows 10/11 (64-bit)，需要 WebView2
- **macOS**: macOS 10.15+
- **Linux**: x86_64 架构，需要 WebKitGTK 4.0+

---

## Key Points
- 支持多平台（Windows、macOS、Linux）
- 提供自动化账号管理和切换功能
- 集成 Kiro IDE 配置管理
- 提供详细的配额监控和状态提示
- 支持多种登录方式（Google、GitHub、AWS IAM 等）

## Sources
- [GitHub](https://github.com/hj01857655/kiro-account-manager)
- [원본](raw/ingest/tech/2026-05-11-kiro-account-manager.md)