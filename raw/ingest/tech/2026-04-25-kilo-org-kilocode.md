<!-- GitHub Trending: TypeScript | 18,571 stars | +48 today -->

# Kilo-Org/kilocode

> Kilo is the all-in-one agentic engineering platform. Build, ship, and iterate faster with the most popular open source coding agent.

## Repository Info
- **URL**: https://github.com/Kilo-Org/kilocode
- **Stars**: 18,571
- **Forks**: 2,442
- **Language**: TypeScript
- **License**: MIT License
- **Created**: 2025-03-10
- **Updated**: 2026-04-25
- **Topics**: ai, ai-age, ai-coding, ai-developer-tools, chatgpt, claude, cli, gemini, jetbrains, sonnet, vscode, vscode-extension
- **Open Issues**: 1075

## README (excerpt)
<p align="center">
  <a href="https://marketplace.visualstudio.com/items?itemName=kilocode.Kilo-Code"><img src="https://raster.shields.io/badge/VS_Code_Marketplace-007ACC?style=flat&logo=visualstudiocode&logoColor=white" alt="VS Code Marketplace" height="20"></a>
  <a href="https://x.com/kilocode"><img src="https://raster.shields.io/badge/kilocode-000000?style=flat&logo=x&logoColor=white" alt="X (Twitter)" height="20"></a>
  <a href="https://blog.kilo.ai"><img src="https://raster.shields.io/badge/Blog-555?style=flat&logo=substack&logoColor=white" alt="Substack Blog" height="20"></a>
  <a href="https://kilo.ai/discord"><img src="https://raster.shields.io/badge/Join%20Discord-5865F2?style=flat&logo=discord&logoColor=white" alt="Discord" height="20"></a>
  <a href="https://www.reddit.com/r/kilocode/"><img src="https://raster.shields.io/badge/Join%20r%2Fkilocode-D84315?style=flat&logo=reddit&logoColor=white" alt="Reddit" height="20"></a>
</p>

<p align="center">
 <img width="250" alt="kilo-code-logo" src="https://github.com/user-attachments/assets/bdb0c174-b9fd-40ad-a47b-f3aab9b54e8d" />
</p>

> Kilo is the all-in-one agentic engineering platform. Build, ship, and iterate faster with the most popular open source coding agent.

- ✨ Generate code from natural language
- ✅ Checks its own work
- 🧪 Run terminal commands
- 🌐 Automate the browser
- ⚡ Inline autocomplete suggestions
- 🤖 Latest AI models
- 🎁 API keys optional

## Quick Links

- [VS Code Marketplace](https://kilo.ai/vscode-marketplace?utm_source=Readme) (download)
- Install CLI: `npm install -g @kilocode/cli`
- [Official Kilo.ai Home page](https://kilo.ai) (learn more)

## Key Features

- **Code Generation:** Kilo can generate code using natural language.
- **Inline Autocomplete:** Get intelligent code completions as you type, powered by AI.
- **Task Automation:** Kilo can automate repetitive coding tasks to save time.
- **Automated Refactoring:** Kilo can refactor and improve existing code efficiently.
- **MCP Server Marketplace**: Kilo can easily find, and use MCP servers to extend the agent capabilities.
- **Multi Mode**: Plan with Architect, Code with Coder, and Debug with Debugger, and make your own custom modes.

## Get Started in Visual Studio Code

1. Install the Kilo Code extension from the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=kilocode.Kilo-Code).
2. Create your account to access 500+ cutting-edge AI models including Gemini 3.1 Pro, Claude 4.6 Sonnet & Opus, and GPT-5.4 – with transparent pricing that matches provider rates exactly.
3. Start coding with AI that adapts to your workflow. Watch our quick-start guide to see Kilo in action:

<a href="https://youtu.be/pqGfYXgrhig"><img src="https://img.youtube.com/vi/pqGfYXgrhig/maxresdefault.jpg" alt="Watch the video" width="640" height="360"></a>

## Get Started with the CLI

```bash
# npm
npm install -g @kilocode/cli

# Or run directly with npx
npx @kilocode/cli
```

Then run `kilo` in any project directory to start.

<!-- kilocode_change start -->

### npm Install Note: Hidden `.kilo` File

On some systems and npm versions, installing `@kilocode/cli` can create a hidden `.kilo` file near the installed `kilo` command (for example in a global npm bin directory). This file is an npm-generated launcher helper, not project data.

- Why it exists: npm may create helper artifacts while wiring CLI executables.
- Size caveat: size can vary by platform, npm version, and install mode (symlink vs copied launcher), so a strict fixed size is not guaranteed.
- Safety: it is safe to leave in place. Do not edit it manually. Use your package manager's uninstall (`npm uninstall -g @kilocode/cli`) to remove install artifacts cleanly.
<!-- kilocode_change end -->

### Install from GitHub Releases (Optional)

Download the latest binary or source code from the [Releases page](https://github.com/Kilo-Org/kilocode/releases), use this quick guide:

- `kilo-<os>-<arch>.zip` is the CLI binary for your OS