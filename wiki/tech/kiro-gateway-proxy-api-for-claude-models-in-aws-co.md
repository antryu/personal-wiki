# Kiro Gateway: Proxy API for Claude Models in AWS CodeWhisperer

> Kiro Gateway is a proxy API that allows developers to use Claude models (such as Claude Sonnet and Haiku) within the Kiro IDE or CLI, including Amazon Q Developer and AWS CodeWhisperer, with any compatible OpenAI or Anthropic tool. It supports multi-account failover, proxies, and offers access to a broad list of models, many of which are available for free.  
> Last updated: 2026-05-11

## Overview
The Kiro Gateway functions as a proxy API that connects the Kiro IDE and CLI (including Amazon Q Developer and AWS CodeWhisperer) to external tools like OpenAI-compatible SDKs, LangChain, and other developers' tools. It provides access to several Claude models and other large language models (LLMs) based on the user's subscription tier, enabling developers to leverage powerful AI models in a flexible way.

The project is open-source and licensed under the GNU Affero General Public License v3.0. It is built with Python and uses [FastAPI](https://fastapi.tiangolo.com/) for rapid development and deployment. The gateway supports features such as streaming, multi-account support, and proxy integration, making it a robust solution for developers working in restricted or cloud-based environments.

## Key Points
- **Model Access**: Offers access to multiple Claude models and third-party LLMs, including Claude Sonnet 4.5, Haiku 4.5, and others such as GLM-5, DeepSeek-V3.2, and Qwen3-Coder-Next.
- **Free Tier Support**: Provides a list of commonly available models for free-tier users of Kiro and AWS CodeWhisperer.
- **OpenAI/Anthropic Compatibility**: Offers both OpenAI and Anthropic API endpoints, allowing integration with a wide range of tools and SDKs.
- **Multi-account Failover**: Intelligent failover between multiple accounts ensures continuous access and reliability.
- **Proxy Support**: Works with HTTP/SOCKS5 proxies to function in restricted or corporate networks.
- **Advanced Features**: Includes streaming, full message history, tool calling, and extended model resolution capabilities.

## Sources
- [GitHub](https://github.com/jwadow/kiro-gateway)
- [원본](raw/ingest/tech/2026-05-11-kiro-gateway-proxy-api-for-claude-models-in-aws-co.md)