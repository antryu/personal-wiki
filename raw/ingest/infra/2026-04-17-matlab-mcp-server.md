<!-- GitHub Trending: Go | 381 stars | +8 today -->

# matlab/matlab-mcp-core-server

> Run MATLAB® using AI applications with the official MATLAB MCP Server from MathWorks®. This MCP server for MATLAB supports a wide range of coding agents like Claude Code® and Visual Studio® Code.

## Repository Info
- **URL**: https://github.com/matlab/matlab-mcp-core-server
- **Stars**: 381
- **Forks**: 44
- **Language**: Go
- **License**: Other
- **Created**: 2025-10-22
- **Updated**: 2026-04-17
- **Topics**: engineering-tools, matlab, matlab-mcp-server, mcp-server, mcp-tools
- **Open Issues**: 24

## README (excerpt)
# MATLAB MCP Core Server

Run MATLAB® using AI applications with the official MATLAB MCP Server from MathWorks®. The MATLAB MCP Core Server allows your AI applications to:

- Start and quit MATLAB.
- Write and run MATLAB code.
- Assess your MATLAB code for style and correctness.

## Table of Contents

- [Setup](#setup)
  - [Claude Code](#claude-code)
  - [Claude Desktop](#claude-desktop)
  - [GitHub Copilot in Visual Studio Code](#github-copilot-in-visual-studio-code)
- [Arguments](#arguments)
- [Tools](#tools)
- [Resources](#resources)
- [Data Collection](#data-collection)
- [Contact Support](#contact-support)

## Setup

1. Install [MATLAB (MathWorks)](https://www.mathworks.com/help/install/ug/install-products-with-internet-connection.html) 2020b or later and add it to the system PATH.
1. To set up the MATLAB MCP Core Server for Claude Desktop, skip to the instructions for [Claude Desktop](#claude-desktop). To set up the server for other applications, follow these instructions:
   
   - For Windows or Linux, [**Download the Latest Release**](https://github.com/matlab/matlab-mcp-core-server/releases/latest). (Alternatively, you can **build from source**: install [Go](https://go.dev/doc/install) and build the binary using `go install github.com/matlab/matlab-mcp-core-server/cmd/matlab-mcp-core-server@latest`).
    
   - For macOS, first download the latest release by running the following command in your terminal:
     - For Apple silicon processors, run:
          ```sh
          curl -L -o ~/Downloads/matlab-mcp-core-server https://github.com/matlab/matlab-mcp-core-server/releases/latest/download/matlab-mcp-core-server-maca64
          ```
      - For Intel processors, run:
          ```sh
          curl -L -o ~/Downloads/matlab-mcp-core-server https://github.com/matlab/matlab-mcp-core-server/releases/latest/download/matlab-mcp-core-server-maci64
          ```
      Then grant executable permissions to the downloaded binary so you can run the MATLAB MCP Core Server:

      ```sh
      chmod +x ~/Downloads/matlab-mcp-core-server
      ```

1. Add the MATLAB MCP Core Server to your AI application. You can find instructions for adding MCP servers in the documentation of your AI application. For example instructions on using Claude Code®, Claude Desktop®, and GitHub Copilot in Visual Studio® Code, see below. Note that you can customize the server by specifying optional [Arguments](#arguments).

### Claude Code

In your terminal, run the following, remembering to insert the full path to the server binary you acquired in the setup:

```sh
claude mcp add --transport stdio matlab -- /fullpath/to/matlab-mcp-core-server-binary
```

You can customize the server by specifying optional [Arguments](#arguments). Note the `--` separator between Claude Code's options and the server arguments:

```sh
claude mcp add --transport stdio matlab -- /fullpath/to/matlab-mcp-core-server-binary --initial-working-folder=/home/username/myproject
```

For details on adding MCP servers in Claude Code, see [Add a local stdio server (Claude Code)](https://docs.claude.com/en/docs/claude-code/mcp#option-3%3A-add-a-local-stdio-server). To remove the server later, run:

```sh
claude mcp remove matlab
```

### Claude Desktop

You install the MATLAB MCP Core Server in Claude Desktop using the MATLAB MCP Core Server bundle.

1. Install the Filesystem extension in Claude Desktop to allow Claude to read and write files on your system. In Claude Desktop, click **Settings > Extensions > Browse extensions**. Search for the Filesystem extension developed by Anthropic and click **Install**. Specify the folders you want to allow the MCP server to access, then toggle the **Disabled** button to **Enable** the Filesystem extension.
   
2. Download the MATLAB MCP Core Server bundle `matlab-mcp-core-server.mcpb` from the [Latest Release](https://github.com/matlab/matlab-mcp-core-server/releases/latest) page. 

3. To install the MATLAB MCP Core Server bundle as a desktop extensio