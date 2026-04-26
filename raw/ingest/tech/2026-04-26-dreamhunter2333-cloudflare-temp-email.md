<!-- GitHub Trending: TypeScript | 8,746 stars | +42 today -->

# dreamhunter2333/cloudflare_temp_email

> CloudFlare free temp domain email 免费收发 临时域名邮箱 支持附件 IMAP SMTP TelegramBot

## Repository Info
- **URL**: https://github.com/dreamhunter2333/cloudflare_temp_email
- **Stars**: 8,746
- **Forks**: 5,403
- **Language**: TypeScript
- **License**: MIT License
- **Created**: 2023-08-15
- **Updated**: 2026-04-26
- **Topics**: cloudflare-email, cloudflare-pages, cloudflare-workers, email, free
- **Open Issues**: 37

## README (excerpt)
<!-- markdownlint-disable-file MD033 MD045 -->
# Cloudflare 临时邮箱 - 免费搭建临时邮件服务

<p align="center">
  <a href="https://temp-mail-docs.awsl.uk" target="_blank">
    <img alt="docs" src="https://img.shields.io/badge/docs-grey?logo=vitepress">
  </a>
  <a href="https://github.com/dreamhunter2333/cloudflare_temp_email/releases/latest" target="_blank">
    <img src="https://img.shields.io/github/v/release/dreamhunter2333/cloudflare_temp_email">
  </a>
  <a href="https://github.com/dreamhunter2333/cloudflare_temp_email/blob/main/LICENSE" target="_blank">
    <img alt="MIT License" src="https://img.shields.io/github/license/dreamhunter2333/cloudflare_temp_email">
  </a>
  <a href="https://github.com/dreamhunter2333/cloudflare_temp_email/graphs/contributors" target="_blank">
   <img alt="GitHub contributors" src="https://img.shields.io/github/contributors/dreamhunter2333/cloudflare_temp_email">
  </a>
  <a href="">
    <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/dreamhunter2333/cloudflare_temp_email">
  </a>
  <a href="">
    <img src="https://img.shields.io/github/last-commit/dreamhunter2333/cloudflare_temp_email">
  </a>
</p>

<p align="center">
  <a href="https://hellogithub.com/repository/2ccc64bb1ba346b480625f584aa19eb1" target="_blank">
    <img src="https://abroad.hellogithub.com/v1/widgets/recommend.svg?rid=2ccc64bb1ba346b480625f584aa19eb1&claim_uid=FxNypXK7UQ9OECT" alt="Featured｜HelloGitHub" height="30"/>
  </a>
</p>

<p align="center">
  <a href="README.md">中文文档</a> |
  <a href="README_EN.md">English Document</a>
</p>

> 本项目仅供学习和个人用途，请勿将其用于任何违法行为，否则后果自负。

**一个功能完整的临时邮箱服务！**

- **完全免费** - 基于 Cloudflare 免费服务构建，零成本运行
- **高性能** - Rust WASM 邮件解析，响应速度极快
- **现代化界面** - 响应式设计，支持多语言，操作简便
- **地址密码** - 支持为邮箱地址设置独立密码，增强安全性 (通过 `ENABLE_ADDRESS_PASSWORD` 启用)

## 部署文档 - 快速开始

[部署文档](https://temp-mail-docs.awsl.uk) | [Github Action 部署文档](https://temp-mail-docs.awsl.uk/zh/guide/actions/github-action.html)

<a href="https://temp-mail-docs.awsl.uk/zh/guide/actions/github-action.html">
  <img src="https://deploy.workers.cloudflare.com/button" alt="Deploy to Cloudflare Workers" height="32">
</a>

## 更新日志

查看 [CHANGELOG](CHANGELOG.md) 了解最新更新内容。

## 在线体验

立即体验 → [https://mail.awsl.uk/](https://mail.awsl.uk/)

<details>
<summary>服务状态监控（点击收缩/展开）</summary>

|                                            |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Backend](https://temp-email-api.awsl.uk/) | [![Deploy Backend Production](https://github.com/dreamhunter2333/cloudflare_temp_email/actions/workflows/backend_deploy.yaml/badge.svg)](https://github.com/dreamhunter2333/cloudflare_temp_email/actions/workflows/backend_deploy.yaml) ![](https://uptime.aks.awsl.icu/api/badge/10/status) ![](https://uptime.aks.awsl.icu/api/badge/10/uptime) ![](https://uptime.aks.awsl.icu/api/badge/10/ping) ![](https://uptime.aks.awsl.icu/api/badg