<!-- GitHub Trending: Go | 1,349 stars | +2 today -->

# hashicorp/terraform-mcp-server

> The Terraform MCP Server provides seamless integration with Terraform ecosystem, enabling advanced automation and interaction capabilities for Infrastructure as Code (IaC) development.

## Repository Info
- **URL**: https://github.com/hashicorp/terraform-mcp-server
- **Stars**: 1,349
- **Forks**: 153
- **Language**: Go
- **License**: Mozilla Public License 2.0
- **Created**: 2025-04-19
- **Updated**: 2026-04-29
- **Topics**: N/A
- **Open Issues**: 39

## README (excerpt)
# <img src="public/images/Terraform-LogoMark_onDark.svg" width="30" align="left" style="margin-right: 12px;"/> Terraform MCP Server

The Terraform MCP Server is a [Model Context Protocol (MCP)](https://modelcontextprotocol.io/introduction)
server that provides seamless integration with Terraform Registry APIs, enabling advanced
automation and interaction capabilities for Infrastructure as Code (IaC) development.

## Features

- **Dual Transport Support**: Both Stdio and StreamableHTTP transports with configurable endpoints
- **Terraform Registry Integration**: Direct integration with public Terraform Registry APIs for providers, modules, and policies
- **HCP Terraform & Terraform Enterprise Support**: Full workspace management, organization/project listing, and private registry access
- **Workspace Operations**: Create, update, delete workspaces with support for variables, tags, and run management
- **OTel metrics for monitoring tool usage**: Integration with open telemetry meters to track tool-call volume, latency and failures in Streamable HTTP mode. Also exposes default http server metrics when this feature is enabled

> **Security Note:** At this stage, the MCP server is intended for local use only. If using the StreamableHTTP transport, always configure the MCP_ALLOWED_ORIGINS environment variable to restrict access to trusted origins only. This helps prevent DNS rebinding attacks and other cross-origin vulnerabilities.

> **Security Note:** Depending on the query, the MCP server may expose certain Terraform data to the MCP client and LLM. Do not use the MCP server with untrusted MCP clients or LLMs.

> **Legal Note:** Your use of a third party MCP Client/LLM is subject solely to the terms of use for such MCP/LLM, and IBM is not responsible for the performance of such third party tools. IBM expressly disclaims any and all warranties and liability for third party MCP Clients/LLMs, and may not be able to provide support to resolve issues which are caused by the third party tools.

> **Caution:**  The outputs and recommendations provided by the MCP server are generated dynamically and may vary based on the query, model, and the connected MCP client. Users should thoroughly review all outputs/recommendations to ensure they align with their organization’s security best practices, cost-efficiency goals, and compliance requirements before implementation.

## Prerequisites

1. Ensure [Docker](https://www.docker.com/) is installed and running to use the server in a containerized environment.
1. Install an AI assistant that supports the Model Context Protocol (MCP).

## Command Line Options

**Environment Variables:**

| Variable | Description | Default |
|----------|-------------|---------|
| `TFE_ADDRESS` | HCP Terraform or TFE address | `"https://app.terraform.io"` |
| `TFE_TOKEN` | Terraform Enterprise API token | `""` (empty) |
| `TFE_SKIP_TLS_VERIFY` | Skip HCP Terraform or Terraform Enterprise TLS verification | `false` |
| `LOG_LEVEL` | Logging level: `trace`, `debug`, `info`, `warn`, `error`, `fatal`, `panic` (overrides `--log-level` flag) | `info` |
| `LOG_FORMAT` | Logging format: `text` or `json` (overrides `--log-format` flag)| `text` |
| `TRANSPORT_MODE` | Set to `streamable-http` to enable HTTP transport (legacy `http` value still supported) | `stdio` |
| `TRANSPORT_HOST` | Host to bind the HTTP server | `127.0.0.1` |
| `TRANSPORT_PORT` | HTTP server port | `8080` |
| `MCP_ENDPOINT` | HTTP server endpoint path | `/mcp` |
| `MCP_KEEP_ALIVE` | Keep-alive interval for SSE connections (e.g., 30s, 1m). 0 to disable | `0` |
| `MCP_SESSION_MODE` | Session mode: `stateful` or `stateless` | `stateful` |
| `MCP_ALLOWED_ORIGINS` | Comma-separated list of allowed origins for CORS | `""` (empty) |
| `MCP_CORS_MODE` | CORS mode: `strict`, `development`, or `disabled` | `strict` |
| `MCP_TLS_CERT_FILE` | Path to TLS cert file, required for non-localhost deployment (e.g. `/path/to/cert.pem`) | `""` (empty) |
| `MCP_TLS_KEY_FILE` |  