<!-- GitHub Trending: TypeScript | 1,365 stars | +5 today -->

# zereight/gitlab-mcp

> First gitlab mcp for you

## Repository Info
- **URL**: https://github.com/zereight/gitlab-mcp
- **Stars**: 1,365
- **Forks**: 263
- **Language**: TypeScript
- **License**: MIT License
- **Created**: 2025-02-11
- **Updated**: 2026-04-15
- **Topics**: N/A
- **Open Issues**: 31

## README (excerpt)
# GitLab MCP Server

> **New Feature**: Dynamic GitLab API URL support with connection pooling! See [Dynamic API URL Documentation](docs/dynamic-api-url.md) for details.

[![Star History Chart](https://api.star-history.com/svg?repos=zereight/gitlab-mcp&type=Date)](https://www.star-history.com/#zereight/gitlab-mcp&Date)

## @zereight/mcp-gitlab

A comprehensive GitLab MCP server for AI clients. Manage projects, merge requests, issues, pipelines, wiki, releases, milestones, and more through stdio, SSE, and Streamable HTTP.

Supports PAT, OAuth, read-only mode, dynamic API URLs, and remote authorization for VS Code, Claude, Cursor, Copilot, and other MCP clients.

### Why use this GitLab MCP?

- Broad GitLab coverage — projects, repository browsing, merge requests, issues, pipelines, wiki, releases, labels, milestones, and more
- Flexible auth — Personal Access Token, local OAuth2 browser flow, MCP OAuth proxy, and per-request remote authorization
- Multiple transports — stdio for local clients, SSE for legacy clients, and Streamable HTTP for modern remote deployments
- Client-friendly setup — examples for Claude Code, Codex, Antigravity, OpenCode, Copilot, Cline, Roo Code, Cursor, Kilo Code, and Amp Code
- Self-hosted ready — works with custom GitLab instances, proxy settings, and dynamic API URL routing

Quick start: choose either Personal Access Token or OAuth2 setup below and use `@zereight/mcp-gitlab` in your MCP client configuration.

### Client Setup Guides

- [Claude Code Setup Guide](./docs/claude-code-setup.md)
- [VS Code Setup Guide](./docs/vscode-setup.md)
- [GitHub Copilot Setup Guide](./docs/copilot-setup.md)
- [Codex Setup Guide](./docs/codex-setup.md)
- [Cursor Setup Guide](./docs/cursor-setup.md)
- [JSON-Based MCP Clients Setup Guide](./docs/json-mcp-clients-setup.md) - for Factory AI Droid, OpenClaw, and OpenCode style clients
- [OAuth2 Authentication Setup Guide](./docs/oauth-setup.md)
- [Environment Variables Reference](./docs/environment-variables.md)

## Usage

### Setup Overview

#### Authentication Methods

The server supports four authentication methods:

**For local/desktop use** (most common):

1. **Personal Access Token** (`GITLAB_PERSONAL_ACCESS_TOKEN`) — simplest setup
2. **OAuth2 — Local Browser** (`GITLAB_USE_OAUTH`) — recommended for better security

**For server/remote deployments**:

3. **OAuth2 — MCP Proxy** (`GITLAB_MCP_OAUTH`) — for remote MCP clients such as Claude.ai
4. **Remote Authorization** (`REMOTE_AUTHORIZATION`) — multi-user deployments where each caller provides their own token

#### Quick setup paths

- **Claude Code**: see [Claude Code Setup Guide](./docs/claude-code-setup.md)
- **VS Code**: see [VS Code Setup Guide](./docs/vscode-setup.md)
- **GitHub Copilot**: see [GitHub Copilot Setup Guide](./docs/copilot-setup.md)
- **Codex**: see [Codex Setup Guide](./docs/codex-setup.md)
- **Cursor**: see [Cursor Setup Guide](./docs/cursor-setup.md)
- **Factory AI Droid / OpenClaw / OpenCode style clients**: see [JSON-Based MCP Clients Setup Guide](./docs/json-mcp-clients-setup.md)
- **OAuth browser flow details**: see [OAuth2 Authentication Setup Guide](./docs/oauth-setup.md)

For the simplest local setup, start with a Personal Access Token. For browser-based local auth, use OAuth2. For remote or multi-user deployments, continue to the MCP OAuth and Remote Authorization sections later in this README.

#### Using CLI Arguments (for clients with env var issues)

Some MCP clients (like GitHub Copilot CLI) have issues with environment variables. Use CLI arguments instead:

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

**Available CLI arguments:**

- `--token` - GitLab Personal Access Token (replaces `GITLAB_PERSONAL_ACCESS_TOKEN`)
- `--api-url` - GitLab API URL (replaces `GITLAB_API_