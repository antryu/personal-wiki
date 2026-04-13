# PanSou Cloud Search API

> PanSou is a high-performance cloud storage resource search API service that supports Telegram channel and plugin-based searching. It is notable for its performance, scalability, and ease of deployment with features like concurrent search, intelligent result sorting, and cloud storage type classification.  
> Last updated: 2026-04-13

## Overview

PanSou is a powerful API service designed to search cloud storage resources such as Baidu, Aliyun, and other major cloud platforms. It supports concurrent searches across multiple Telegram channels and plugins, with results automatically categorized by storage type and intelligently sorted. The system is built with performance and scalability in mind, making it suitable for high-traffic use cases.

The project is written in Go and offers Docker integration for both front-end and back-end components, enabling one-click deployment and out-of-the-box usability. It includes an optional authentication system, a plugin architecture, and a secondary caching mechanism to improve performance.

## Key Points

- **High-performance search**: Concurrently searches multiple Telegram channels and plugins to significantly improve speed.
- **Cloud storage classification**: Automatically identifies and categorizes results by cloud storage type.
- **Intelligent sorting**: Uses a multi-dimensional sorting algorithm based on plugin level, freshness, and priority keywords.
- **Asynchronous plugin system**: Supports custom plugins and asynchronous search modes to handle slow response sources.
- **Docker integration**: Offers both front-end and back-end Docker deployments, enabling easy and fast setup.
- **MCP service support**: Integrates with MCP-compatible applications like Claude Desktop.

## Sources

- [GitHub](https://github.com/fish2018/pansou)
- [원본](raw/ingest/projects/2026-04-13-pansou-cloud-search-api.md)