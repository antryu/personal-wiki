# GitLab MCP Server

> A comprehensive GitLab MCP server for AI clients that supports dynamic API URLs, multiple authentication methods, and integration with tools like VS Code, Claude, and Copilot. Notable for its broad GitLab feature coverage and client-friendly setup guides.  
> Last updated: 2026-04-15

## Overview

**Repository Info**  
- **Stars**: 1,365  
- **Forks**: 263  
- **Language**: TypeScript  
- **License**: MIT License  
- **Created**: 2025-02-11  
- **Updated**: 2026-04-15  
- **Open Issues**: 31  

This project provides a GitLab MCP (Model Collaboration Protocol) server for AI clients, enabling management of projects, merge requests, issues, pipelines, and more via stdio, SSE, and Streamable HTTP. Key features include dynamic GitLab API URL support, connection pooling, and flexible authentication (PAT, OAuth, remote authorization).  

**Key Features**  
- **GitLab Coverage**: Projects, repository browsing, merge requests, issues, pipelines, wiki, releases, labels, and milestones.  
- **Authentication**: Personal Access Token (PAT), local OAuth2 browser flow, MCP OAuth proxy, and per-request remote authorization.  
- **Transports**: stdio for local clients, SSE for legacy clients, and Streamable HTTP for remote deployments.  
- **Client Support**: VS Code, Claude Code, Copilot, Cursor, Codex, and JSON-based clients (e.g., Factory AI Droid, OpenCode).  
- **Self-Hosted Ready**: Custom GitLab instance compatibility, proxy settings, and dynamic API routing.  

**Authentication Methods**  
1. **Personal Access Token** (`GITLAB_PERSONAL_ACCESS_TOKEN`) – Simplest local setup.  
2. **OAuth2 – Local Browser** (`GITLAB_USE_OAUTH`) – Recommended for enhanced security.  
3. **OAuth2 – MCP Proxy** (`GITLAB_MCP_OAUTH`) – For remote clients like Claude.ai.  
4. **Remote Authorization** (`REMOTE_AUTHORIZATION`) – Multi-user deployments with per-user tokens.  

**Client Setup Guides**  
- [Claude Code](./docs/claude-code-setup.md)  
- [VS Code](./docs/vscode-setup.md)  
- [GitHub Copilot](./docs/copilot-setup.md)  
- [Codex](./docs/codex-setup.md)  
- [Cursor](./docs/cursor-setup.md)  
- [JSON-Based Clients](./docs/json-mcp-clients-setup.md)  
- [OAuth2 Authentication](./docs/oauth-setup.md)  

For CLI-based clients (e.g., GitHub Copilot CLI), configuration via arguments is supported:  
```json
{
  "mcpServers": {
    "gitlab": {
      "command": "npx",
      "args": [
        "-y",
        "@zereight/mcp-gitlab",
        "--token=YOUR_GITLAB_TOKEN",
        "--api-url=https://gitlab.com/api/v4"
      ],
      "tools": ["*"]
    }
  }
}
```

## Key Points
- Supports dynamic GitLab API URLs with connection pooling.  
- Provides setup guides for 8+ major AI/IDE clients.  
- Includes OAuth2 and remote authorization for secure deployments.  

## Sources
- [GitHub](https://github.com/zereight/gitlab-mcp)
- [원본](raw/ingest/tech/2026-04-15-gitlab-mcp-server.md)