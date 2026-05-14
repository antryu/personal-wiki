<!-- GitHub Trending: Go | 8,380 stars | +10 today -->

# higress-group/higress

> 🤖 AI Gateway | AI Native API Gateway

## Repository Info
- **URL**: https://github.com/higress-group/higress
- **Stars**: 8,380
- **Forks**: 1,109
- **Language**: Go
- **License**: Apache License 2.0
- **Created**: 2022-10-27
- **Updated**: 2026-05-14
- **Topics**: ai-gateway, ai-native, api-gateway, cloud-native, envoy
- **Open Issues**: 756

## README (excerpt)
<a name="readme-top"></a>
<h1 align="center">
    <img src="https://img.alicdn.com/imgextra/i2/O1CN01NwxLDd20nxfGBjxmZ_!!6000000006895-2-tps-960-290.png" alt="Higress" width="240" height="72.5">
  <br>
  AI Gateway
</h1>
<h4 align="center"> AI Native API Gateway </h4>

<div align="center">

[![Build Status](https://github.com/alibaba/higress/actions/workflows/build-and-test.yaml/badge.svg?branch=main)](https://github.com/alibaba/higress/actions)
[![license](https://img.shields.io/github/license/alibaba/higress.svg)](https://www.apache.org/licenses/LICENSE-2.0.html)
[![discord](https://img.shields.io/discord/1364956090566971515?color=5865F2&label=discord&labelColor=black&logo=discord&logoColor=white&style=flat-square)](https://discord.gg/tSbww9VDaM)
[![CNCF Sandbox](https://img.shields.io/badge/CNCF-Sandbox-30638E?logo=linuxfoundation&logoColor=white)](https://www.cncf.io/projects/)

<a href="https://trendshift.io/repositories/10918" target="_blank"><img src="https://trendshift.io/api/badge/repositories/10918" alt="alibaba%2Fhigress | Trendshift" style="width: 250px; height: 55px;" width="250" height="55"/></a> <a href="https://www.producthunt.com/posts/higress?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-higress" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=951287&theme=light&t=1745492822283" alt="Higress - Global&#0032;APIs&#0032;as&#0032;MCP&#0032;powered&#0032;by&#0032;AI&#0032;Gateway | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>

</div>

[**Official Site**](https://higress.ai/en/) &nbsp; |
&nbsp; [**Docs**](https://higress.cn/en/docs/latest/overview/what-is-higress/) &nbsp; |
&nbsp; [**Blog**](https://higress.cn/en/blog/) &nbsp; |
&nbsp; [**MCP Server QuickStart**](https://higress.cn/en/ai/mcp-quick-start/) &nbsp; |
&nbsp; [**Developer Guide**](https://higress.cn/en/docs/latest/dev/architecture/) &nbsp; |
&nbsp; [**Wasm Plugin Hub**](https://higress.cn/en/plugin/) &nbsp; |

<p>
   English | <a href="README_ZH.md">中文</a> | <a href="README_JP.md">日本語</a>
</p>

## What is Higress?

Higress is a cloud-native API gateway based on Istio and Envoy, which can be extended with Wasm plugins written in Go/Rust/JS. It provides dozens of ready-to-use general-purpose plugins and an out-of-the-box console (try the [demo here](http://demo.higress.io/)).

### Core Use Cases

Higress's AI gateway capabilities support all [mainstream model providers](https://github.com/alibaba/higress/tree/main/plugins/wasm-go/extensions/ai-proxy/provider) both domestic and international. It also supports hosting MCP (Model Context Protocol) Servers through its plugin mechanism, enabling AI Agents to easily call various tools and services. With the [openapi-to-mcp tool](https://github.com/higress-group/openapi-to-mcpserver), you can quickly convert OpenAPI specifications into remote MCP servers for hosting. Higress provides unified management for both LLM API and MCP API.

**🌟 Try it now at [https://mcp.higress.ai/](https://mcp.higress.ai/)** to experience Higress-hosted Remote MCP Servers firsthand:

![Higress MCP Server Platform](https://img.alicdn.com/imgextra/i2/O1CN01nmVa0a1aChgpyyWOX_!!6000000003294-0-tps-3430-1742.jpg)

### Enterprise Adoption

Higress was born within Alibaba to solve the issues of Tengine reload affecting long-connection services and insufficient load balancing capabilities for gRPC/Dubbo. Within Alibaba Cloud, Higress's AI gateway capabilities support core AI applications such as Tongyi Bailian model studio, machine learning PAI platform, and other critical AI services. Alibaba Cloud has built its cloud-native API gateway product based on Higress, providing 99.99% gateway high availability guarantee service capabilities for a large number of enterprise customers.

You can click the button below to install the enterprise version of Higress:

[![Deploy on AlibabaCloud](https://img.alicdn.com/imgextra/i1/O1CN01e6vwe71EWT