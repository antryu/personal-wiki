# AI Native API Gateway

> Higress is an AI-native API gateway designed to simplify the deployment and management of AI-powered services by integrating AI model providers and supporting Model Context Protocol (MCP) Servers. It offers cloud-native capabilities, Wasm plugin extensibility, and is used at scale by Alibaba Cloud.  
> Last updated: 2026-05-14

## Overview

Higress is a cloud-native API gateway built on Istio and Envoy, allowing for extension through WebAssembly (Wasm) plugins written in Go, Rust, or JavaScript. It includes dozens of pre-built plugins and a user-friendly console for managing API traffic and AI workflows.

The platform supports AI-native capabilities by integrating with major global and domestic AI model providers. It also allows users to host and manage Model Context Protocol (MCP) servers, enabling AI agents to call multiple tools and services. Through the `openapi-to-mcp` tool, developers can convert OpenAPI specifications into remote MCP servers, simplifying the integration of traditional APIs into AI workflows.

Higress is used internally by Alibaba and externally by Alibaba Cloud to power critical AI applications like Tongyi Bailian model studio and the machine learning platform PAI. The project is backed by strong enterprise-grade reliability, offering 99.99% high availability for enterprise customers.

## Key Points
- AI-native API gateway with support for both global and domestic AI model providers.
- MCP Server hosting and AI Agent integration via plugin system.
- Built on Istio and Envoy, with Wasm plugin support for Go, Rust, and JS.
- Used by Alibaba Cloud and supports enterprise-grade high availability (99.99%).
- Easy integration via the `openapi-to-mcp` tool for legacy APIs.

## Sources
- [GitHub](https://github.com/higress-group/higress)
- [원본](raw/ingest/tech/2026-05-14-ai-native-api-gateway.md)