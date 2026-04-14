# AI Native API Gateway

> AI Native API Gateway is a cloud-native API gateway built on Istio and Envoy, designed for AI-driven API management with extensible Wasm plugins. Notable for its enterprise adoption within Alibaba and support for mainstream AI model providers.  
> Last updated: 2026-04-14

## Overview

**Repository Info**  
- **URL**: [https://github.com/alibaba/higress](https://github.com/alibaba/higress)  
- **Stars**: 8,139  
- **Forks**: 1,072  
- **Language**: Go  
- **License**: Apache License 2.0  
- **Created**: 2022-10-27  
- **Updated**: 2026-04-14  
- **Topics**: ai-gateway, ai-native, api-gateway, cloud-native, envoy  
- **Open Issues**: 735  

**Core Features**  
- Cloud-native API gateway based on Istio and Envoy  
- Extensible via Wasm plugins (Go/Rust/JS) with 40+ built-in plugins  
- AI gateway capabilities supporting domestic and international model providers  
- MCP (Model Context Protocol) Server hosting for AI agents  
- Unified management of LLM API and MCP API  
- Enterprise-grade high availability (99.99% SLA)  

**Enterprise Adoption**  
- Developed by Alibaba to address Tengine/gRPC/Dubbo limitations  
- Powers core AI services like Tongyi Bailian and machine learning PAI  
- Forms the basis of Alibaba Cloud's API Gateway product  

**Key Tools**  
- [openapi-to-mcp](https://github.com/higress-group/openapi-to-mcpserver): Converts OpenAPI specs to MCP servers  
- [Wasm Plugin Hub](https://higress.cn/en/plugin/): Extensible plugin ecosystem  

## Key Points
- Cloud-native architecture with Istio/Envoy integration  
- AI-first design supporting mainstream LLM providers  
- Plugin system enables custom Wasm extensions in Go/Rust/JS  
- Enterprise-grade reliability with 99.99% SLA  
- MCP protocol support for AI agent orchestration  

## Sources
- [GitHub](https://github.com/alibaba/higress)
- [원본](raw/ingest/infra/2026-04-14-ai-native-api-gateway.md)