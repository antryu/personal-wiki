# MCP Reference Servers

> This repository contains reference implementations of the Model Context Protocol (MCP), serving as educational examples for developers. It showcases the protocol’s flexibility and extensibility in securely connecting Large Language Models (LLMs) to tools and data sources.
> Last updated: 2026-05-06

## Overview

The **MCP Reference Servers** GitHub repository is a collection of *reference implementations* of the [Model Context Protocol (MCP)](https://modelcontextprotocol.io/). It includes servers built and maintained by the MCP steering group, as well as references to community-built servers and additional resources.

The primary goal of this repository is to demonstrate MCP features and SDK usage, with each reference server designed to highlight specific aspects of the protocol. These servers are not intended for production use but instead serve as educational tools for developers interested in building their own MCP servers. Developers are encouraged to adapt and extend these implementations while ensuring they meet the required security and compliance standards for their specific use cases.

The repository includes implementations using the official MCP SDKs for multiple programming languages, such as C#, Go, Java, Kotlin, PHP, Python, Ruby, Rust, Swift, and TypeScript.

Currently, the repository features the following reference servers:

- **[Everything](src/everything)**: A test/reference server with prompts, resources, and tools.
- **[Fetch](src/fetch)**: Web content fetching and conversion for LLM usage.
- **[Filesystem](src/filesystem)**: Secure file operations with access control.
- **[Git](src/git)**: Tools for reading, searching, and manipulating Git repositories.
- **[Memory](src/memory)**: Knowledge graph-based persistent memory system.
- **[Sequential Thinking](src/sequentialthinking)**: Reflective problem-solving with thought sequences.
- **[Time](src/time)**: Time and timezone conversion capabilities.

Some previously active servers have been archived and are now available in a separate repository, [servers-archived](https://github.com/modelcontextprotocol/servers-archived), including tools for AWS Knowledge Base retrieval, Brave Search, EverArt, GitHub, GitLab, Google Drive, and Google Maps.

## Key Points

- Provides reference implementations of the Model Context Protocol (MCP) in various programming languages.
- Designed for educational purposes, not for production deployment.
- Includes SDKs for C#, Go, Java, Kotlin, PHP, Python, Ruby, Rust, Swift, and TypeScript.
- Features servers for LLM integration, secure file access, time management, and more.
- Maintains an archive of older reference servers for historical and development reference.

## Sources

- [GitHub](https://github.com/modelcontextprotocol/servers)
- [원본](raw/ingest/tech/2026-05-06-mcp-reference-servers.md)