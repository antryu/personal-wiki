# MATLAB MCP Server

> The MATLAB MCP Server by MathWorks® enables AI applications to interact with MATLAB, supporting code execution, style assessment, and integration with tools like Claude Code® and Visual Studio® Code. It serves as a critical infrastructure for developers leveraging AI in MATLAB workflows.  
> Last updated: 2026-04-17

## Overview

### Repository Info
- **URL**: [https://github.com/matlab/matlab-mcp-core-server](https://github.com/matlab/matlab-mcp-core-server)
- **Stars**: 381
- **Forks**: 44
- **Language**: Go
- **License**: Other
- **Created**: 2025-10-22
- **Updated**: 2026-04-17
- **Topics**: `engineering-tools`, `matlab`, `matlab-mcp-server`, `mcp-server`, `mcp-tools`
- **Open Issues**: 24

### README (excerpt)
The MATLAB MCP Core Server allows AI applications to:
- Start/quit MATLAB sessions.
- Execute MATLAB code dynamically.
- Analyze code for style and correctness.

#### Setup
**Prerequisites**:
1. Install MATLAB 2020b+ and add it to the system `PATH`.
2. Download the server binary from [releases](https://github.com/matlab/matlab-mcp-core-server/releases/latest) or build from source using Go.

**Platform-Specific Installation**:
- **Windows/Linux**: Download the binary or build with `go install`.
- **macOS**: Use `curl` to download architecture-specific binaries and grant execute permissions:
  ```sh
  chmod +x ~/Downloads/matlab-mcp-core-server
  ```

#### Integration with AI Tools
- **Claude Code**:
  ```sh
  claude mcp add --transport stdio matlab -- /fullpath/to/matlab-mcp-core-server-binary
  ```
  *Example with custom arguments*:
  ```sh
  claude mcp add --transport stdio matlab -- /fullpath/to/matlab-mcp-core-server-binary --initial-working-folder=/home/username/myproject
  ```

- **Claude Desktop**:
  1. Install the "Filesystem" extension.
  2. Download the `.mcpb` bundle from [releases](https://github.com/matlab/matlab-mcp-core-server/releases/latest).
  3. Follow in-app instructions to enable the server.

- **GitHub Copilot in VS Code**: Follow application-specific documentation for MCP server configuration.

#### Customization
- Use optional [arguments](https://github.com/matlab/matlab-mcp-core-server#arguments) to configure server behavior (e.g., working directories, MATLAB startup options).

---

## Key Points
- Facilitates AI-assisted MATLAB development via MCP protocol.
- Supports Claude Code, Claude Desktop, and GitHub Copilot in VS Code.
- Enables dynamic code execution and quality checks in MATLAB.
- Cross-platform (Windows, Linux, macOS) with Go-based implementation.

## Sources
- [GitHub](https://github.com/matlab/matlab-mcp-core-server)
- [원본](raw/ingest/infra/2026-04-17-matlab-mcp-server.md)