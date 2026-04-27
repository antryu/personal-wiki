<!-- GitHub Trending: Go | 2,250 stars | +16 today -->

# bjdgyc/anylink

> AnyLink是一个企业级远程办公 ssl vpn 软件，可以支持多人同时在线使用。基于 openconnect 协议开发，并且借鉴了 ocserv 的开发思路，可以完全兼容 AnyConnect 客户端。

## Repository Info
- **URL**: https://github.com/bjdgyc/anylink
- **Stars**: 2,250
- **Forks**: 509
- **Language**: Go
- **License**: GNU Affero General Public License v3.0
- **Created**: 2020-08-18
- **Updated**: 2026-04-27
- **Topics**: anyconnect, enterprise, ocserv, openconnect, openvpn, sslvpn, vpn
- **Open Issues**: 99

## README (excerpt)
# AnyLink

[![Go](https://github.com/bjdgyc/anylink/workflows/Go/badge.svg?branch=main)](https://github.com/bjdgyc/anylink/actions)
[![PkgGoDev](https://pkg.go.dev/badge/github.com/bjdgyc/anylink)](https://pkg.go.dev/github.com/bjdgyc/anylink)
[![Go Report Card](https://goreportcard.com/badge/github.com/bjdgyc/anylink)](https://goreportcard.com/report/github.com/bjdgyc/anylink)
[![codecov](https://codecov.io/gh/bjdgyc/anylink/graph/badge.svg?token=JTFLIIIBQ0)](https://codecov.io/gh/bjdgyc/anylink)
![GitHub release](https://img.shields.io/github/v/release/bjdgyc/anylink)
![GitHub downloads total)](https://img.shields.io/github/downloads/bjdgyc/anylink/total)
![GitHub Downloads (all assets, latest release)](https://img.shields.io/github/downloads/bjdgyc/anylink/latest/total)
[![Docker pulls)](https://img.shields.io/docker/pulls/bjdgyc/anylink.svg)](https://hub.docker.com/r/bjdgyc/anylink)
![LICENSE](https://img.shields.io/github/license/bjdgyc/anylink)

AnyLink 是一个企业级远程办公 sslvpn 的软件，可以支持多人同时在线使用。

使用 AnyLink，你可以随时随地安全的访问你的内部网络。

With AnyLink, you can securely access your internal network anytime and anywhere.

## Sponsors

<div align="center"><h2><img src="https://readme-typing-svg.demolab.com?font=Noto+Sans+SC&weight=900&size=28&duration=1&pause=999999&color=D32F2F&center=true&vCenter=true&repeat=false&width=660&lines=%E9%87%8D%E7%A3%85%E6%8E%A8%E8%8D%90%20%E9%A3%9E%E5%B0%86%E4%BC%81%E4%B8%9A%E7%BA%A7%20VPN" alt="重磅推荐 飞将企业级 VPN" /></h2></div>

<div align="center"> 
  <a href="https://www.feijiangkeji.com">
    <img src="https://www.feijiangkeji.com/assets/img/highlights/terminal.png" alt="飞将VPN 终端展示" width="900" />
  </a>

  <br />

  <a href="https://www.feijiangkeji.com">
    <img src="https://img.shields.io/badge/%E9%A3%9E%E5%B0%86%E5%AE%98%E7%BD%91-%E7%82%B9%E5%87%BB%E7%9B%B4%E8%BE%BE-28a745?style=for-the-badge" alt="飞将官网 点击直达">
  </a>

  <br />

  <a href="https://www.feijiangkeji.com">
    <img src="https://img.shields.io/badge/%E9%A3%9E%E5%B0%86VPN-%E4%BC%81%E4%B8%9A%E7%BA%A7%E8%BF%9C%E7%A8%8B%E5%8A%9E%E5%85%AC-red?style=for-the-badge" alt="飞将VPN｜企业级远程办公">
  </a>
  <a href="https://www.feijiangkeji.com">
    <img src="https://img.shields.io/badge/%E8%AE%A2%E9%98%85-299%E5%85%83%2F%E5%B9%B4-orange?style=for-the-badge" alt="订阅 299元/年">
  </a>
  <a href="https://www.feijiangkeji.com">
    <img src="https://img.shields.io/badge/%E4%B9%B0%E6%96%AD-1299%E5%85%83%2F%E6%B0%B8%E4%B9%85-red?style=for-the-badge" alt="买断 1299元/永久">
  </a>
  <a href="https://www.feijiangkeji.com">
    <img src="https://img.shields.io/badge/%E9%99%90%E5%89%8D-50%E5%90%8D-critical?style=for-the-badge" alt="限前 50 名">
  </a>
</div>

- ✅ 全端支持｜自研 Windows、macOS、Android、iOS 客户端；兼容 AnyConnect、OpenConnect，老员工免切换
- 🧷 桌面增强｜自带本地密码箱，快捷登录，支持协议： SSH / RDP / VNC / Web / SFTP
- 🚀 极简接入｜企业识别码直连，输入名称即连，用户无需记忆复杂IP端口
- 🧩 组织对接｜OpenLDAP / Windows AD / 钉钉 / 飞书 / 企业微信 / 本地用户
- 🛡️ 安全防护｜短信/邮件 2FA + 可信设备（内测中：堡垒机、DLP、办公管控）
- 🧰 部署协助｜一键部署 + 专业网络指导 + 售后运维服务

> 🔴 限前 50 名内部价：10 人订阅 299 元/年｜10 人买断 1299 元/永久

> <img src="https://readme-typing-svg.demolab.com?font=Noto+Sans+SC&weight=900&size=20&duration=1&pause=999999&color=D32F2F&center=false&vCenter=true&repeat=false&width=760&lines=%F0%9F%93%B2+%E6%89%AB%E7%A0%81%E6%B7%BB%E5%8A%A0%E6%88%91%E4%BB%AC%EF%BD%9C%E5%A4%87%E6%B3%A8%E3%80%8AAnyLink%E3%80%8B%E9%A2%86%E5%8F%96%E5%86%85%E9%83%A8%E4%BB%B7%E4%BC%98%E6%83%A0%E7%A0%81%EF%BC%8C%E8%8E%B7%E5%8F%96%E4%B8%80%E5%AF%B9%E4%B8%80%E9%83%A8%E7%BD%B2%E5%8D%8F%E5%8A%A9" alt="📲 扫码添加我们｜备注「AnyLink」领取内部价优惠码，获取一对一部署协助" />

<p align="center">
  <img src="https://blog.yydy.link/upload/2026/02/yydy_2026-02-05_15-02-40.webp" alt="二维码1" width="240" />
  <img src="https://blog.yydy.link/upload/2026/02/yydy_2026-02-05_15-06-24.webp" alt="二维码2" width="240" />
</p>


## Repo

> github: https://github.com/bjdgyc/anylink

> gitee: https://gitee.com/bjdgyc/anylink

## Introduction

AnyLink 基于 [ietf-openconnect](https://tools.ietf.org/html/draft-mavrogiannopoulos-openconnect-02)
协议开发，并且借鉴了 [ocserv](http://