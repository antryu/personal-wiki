<!-- GitHub Trending: Swift | 5,970 stars | +5 today -->

# github/CopilotForXcode

> AI coding assistant for Xcode

## Repository Info
- **URL**: https://github.com/github/CopilotForXcode
- **Stars**: 5,970
- **Forks**: 1,820
- **Language**: Swift
- **License**: MIT License
- **Created**: 2024-09-19
- **Updated**: 2026-04-10
- **Topics**: ai-assistant, github-copilot, intelligence, ios, macos, objective-c, swift, swiftui, xcode
- **Open Issues**: 218

## README (excerpt)
# <img align="center" height="70" src="./Docs/Images/AppIcon.png"/> GitHub Copilot for Xcode

[GitHub Copilot](https://github.com/features/copilot) for Xcode is the leading AI coding assistant for Swift, Objective-C and iOS/macOS development. It delivers intelligent Completions, Chat, and Code Review—plus advanced features like Agent Mode, Next Edit Suggestions, MCP Registry, and Copilot Vision to make Xcode development faster and smarter.

## Chat

GitHub Copilot Chat provides suggestions to your specific coding tasks via chat.
<img alt="Chat of GitHub Copilot for Xcode" src="./Docs/Images/chat_agent.gif" width="800" />

## Agent Mode

GitHub Copilot Agent Mode provides AI-powered assistance that can understand and modify your codebase directly. With Agent Mode, you can:
- Get intelligent code edits applied directly to your files
- Run terminal commands and view their output without leaving the interface
- Search through your codebase to find relevant files and code snippets
- Create new files and directories as needed for your project
- Get assistance with enhanced context awareness across multiple files and folders
- Run Model Context Protocol (MCP) tools you configured to extend the capabilities

Agent Mode integrates with Xcode's environment, creating a seamless development experience where Copilot can help implement features, fix bugs, and refactor code with comprehensive understanding of your project.

## Code Completion

You can receive auto-complete type suggestions from GitHub Copilot either by starting to write the code you want to use, or by writing a natural language comment describing what you want the code to do.
<img alt="Code Completion of GitHub Copilot for Xcode" src="./Docs/Images/demo.gif" width="800" />

## Requirements

- macOS 12+
- Xcode 8+
- A GitHub account

## Getting Started

1. Install via [Homebrew](https://brew.sh/):

   ```sh
   brew install --cask github-copilot-for-xcode
   ```

   Or download the `dmg` from
   [the latest release](https://github.com/github/CopilotForXcode/releases/latest/download/GitHubCopilotForXcode.dmg).
   Drag `GitHub Copilot for Xcode` into the `Applications` folder:

   <p align="center">
     <img alt="Screenshot of opened dmg" src="./Docs/Images/dmg-open.png" width="512" />
   </p>

   Updates can be downloaded and installed by the app.

1. Open the `GitHub Copilot for Xcode` application (from the `Applications` folder). Accept the security warning.
   <p align="center">
     <img alt="Screenshot of MacOS download permission request" src="./Docs/Images/macos-download-open-confirm.png" width="350" />
   </p>


1. A background item will be added to enable the GitHub Copilot for Xcode extension app to connect to the host app. This permission is usually automatically added when first launching the app.
   <p align="center">
     <img alt="Screenshot of background item" src="./Docs/Images/background-item.png" width="370" />
   </p>

1. Three permissions are required for GitHub Copilot for Xcode to function properly: `Background`, `Accessibility`, and `Xcode Source Editor Extension`. For more details on why these permissions are required see [TROUBLESHOOTING.md](./TROUBLESHOOTING.md).

   The first time the application is run the `Accessibility` permission should be requested:

   <p align="center">
     <img alt="Screenshot of accessibility permission request" src="./Docs/Images/accessibility-permission-request.png" width="529" />
   </p>

   The `Xcode Source Editor Extension` permission needs to be enabled manually. Click
   `Extension Permission` from the `GitHub Copilot for Xcode` application settings to open the
   System Preferences to the `Extensions` panel. Select `Xcode Source Editor`
   and enable `GitHub Copilot`:

   <p align="center">
     <img alt="Screenshot of extension permission" src="./Docs/Images/extension-permission.png" width="582" />
   </p>

1. After granting the extension permission, open Xcode. Verify that the
   `Github Copilot` menu is availab