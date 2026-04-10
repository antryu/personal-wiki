> error when I run the application. Can you help me figure out what's going on?

Forge will analyze the error message, review the relevant code, and suggest possible causes and solutions. It can also help you set up breakpoints and debug the issue step by step.

</details>

<details>
<summary><strong>Code Optimization</strong></summary>

```
> This function is taking too long to execute. How can I optimize it?
```

Forge will analyze the function's performance, identify potential bottlenecks, and suggest optimizations such as algorithm improvements, caching strategies, or parallel processing.

</details>

## Why Forge?

Forge is designed to be a comprehensive AI-powered development environment that integrates with your existing workflow. Here are some key reasons to choose Forge:

- **Seamless Integration**: Works directly in your terminal, eliminating the need for separate AI tools.
- **Multi-Model Support**: Supports over 300 AI models including Claude, GPT, Gemini, and more.
- **Intelligent Code Understanding**: Analyzes your codebase and provides context-aware assistance.
- **Interactive Development**: Offers a rich text user interface (TUI) for interactive coding sessions.
- **Customizable Workflows**: Configure AI behavior and workflows to match your specific needs.
- **ZSH Plugin Mode**: Use the `:` prefix system to interact with AI agents directly from your shell.

## How Forge Works: Three Modes

### Interactive Mode (TUI)

Forge's interactive mode provides a full-featured terminal UI for managing AI-assisted development sessions. You can:

- Chat with AI agents about your code
- Review and execute code suggestions
- Manage multiple AI models
- View and analyze code changes
- Debug and optimize code

### One-Shot CLI Mode

For quick tasks, Forge can be used in one-shot mode from the command line:

```bash
forge --model gpt-4 "How do I fix this error?"
```

This mode is ideal for simple queries that don't require an interactive session.

### ZSH Plugin Mode (`:` Prefix)

Forge also offers a ZSH plugin that allows you to interact with AI agents directly from your shell using the `:` prefix system:

```
: explain this code
: implement a new feature
: optimize this function
```

This mode provides a seamless integration with your existing shell workflow.

## ZSH Plugin: The `:` Prefix System

The `:` prefix system allows you to interact with AI agents directly from your shell. Here are some of the key features:

### Agents

Forge supports multiple AI agents that can work together to solve complex problems. You can switch between agents using the `:agent` command.

### Sending Prompts

Use the `:` prefix to send prompts to AI agents. For example:

```
: Can you explain how this code works?
```

### Attaching Files

You can attach files to your prompts using the `:attach` command:

```
:attach README.md
```

### Conversation Management

Forge allows you to manage conversations with AI agents, including:

- Starting new conversations
- Switching between conversations
- Saving and loading conversations

### Git Integration

Forge integrates with Git to provide context-aware assistance for version control operations.

### Shell Command Tools

Forge provides a set of shell command tools that can be used to interact with AI agents.

### Session & Configuration

Forge allows you to manage sessions and configure AI behavior to match your workflow.

### Skills

Forge supports the concept of "skills," which are pre-defined prompts that can be used to solve common development tasks.

### Customizing Agent Behavior

You can customize the behavior of AI agents to match your specific needs and preferences.

### Semantic Search (Workspace)

Forge provides semantic search capabilities that allow you to search your codebase for relevant information.

### Quick Reference: All `:` Commands

Here are some of the most commonly used `:` commands:

- `:agent <name>`: Switch to a different AI agent
- `:attach <file>`: Attach a file to the current conversation
- `:clear`: Clear the conversation history
- `:config`: Open the configuration file
- `:debug`: Start a debugging session
- `:explain <code>`: Explain the given code
- `:help`: Show help for the `:` prefix system
- `:implement <feature>`: Implement a new feature
- `:optimize <code>`: Optimize the given code
- `:provider <name>`: Switch to a different AI provider
- `:search <query>`: Search for information in the codebase
- `:version`: Show the current version of Forge

## Command-Line Options

Forge provides a variety of command-line options that allow you to customize its behavior. Some of the most commonly used options include:

- `--model <name>`: Specify the AI model to use
- `--provider <name>`: Specify the AI provider to use
- `--config <file>`: Specify a custom configuration file
- `--debug`: Enable debug mode
- `--help`: Show help for Forge

## Advanced Configuration

### Provider Configuration

Forge allows you to configure AI providers to match your workflow. You can manage provider credentials using the `forge provider` command.

#### Managing Provider Credentials

Forge provides a secure way to manage provider credentials. You can use the `forge provider login` command to set up credentials for different AI providers.

#### Deprecated: Environment Variables

Forge no longer recommends using environment variables for provider credentials. Instead, use the `forge provider` command to manage credentials securely.

### forge.yaml Configuration Options

Forge uses a `forge.yaml` configuration file to store user preferences and settings. You can customize this file to configure AI behavior, set default providers, and more.

### Environment Variables

Forge supports a set of environment variables that can be used to customize its behavior. Some of the most commonly used environment variables include:

- `FORGE_PROVIDER`: The default AI provider to use
- `FORGE_MODEL`: The default AI model to use
- `FORGE_DEBUG`: Enable debug mode

### MCP Configuration

Forge supports the Multi-Agent Collaborative Programming (MCP) framework, which allows multiple AI agents to work together on complex tasks.

### Example Use Cases

Here are some example use cases for Forge:

- **Code Review**: Use Forge to review and provide feedback on code changes.
- **Documentation**: Use Forge to generate documentation for your codebase.
- **Testing**: Use Forge to write and execute tests for your code.
- **Refactoring**: Use Forge to refactor and improve your code.

### Usage in Multi-Agent Workflows

Forge supports multi-agent workflows, where multiple AI agents can work together to solve complex problems. This allows you to combine the strengths of different models to achieve better results.

## Documentation

Forge provides comprehensive documentation to help you get started and make the most of its features. You can find the documentation at [https://forgecode.dev/docs](https://forgecode.dev/docs).

## Community

Forge has an active community of developers and users who contribute to its development and provide support. You can join the community on Discord at [https://discord.gg/kRZBPpkgwq](https://discord.gg/kRZBPpkgwq).

## Support Us

If you find Forge useful, consider supporting the project by starring the repository, contributing code, or sharing it with others. Your support helps us continue developing and improving Forge.

# AI-Enhanced Terminal Development Tool

> AI-Enhanced Terminal Development Tool (Forge) is a comprehensive coding agent that integrates AI capabilities directly into the development environment, supporting over 300 AI models including Claude, GPT, Gemini, and more. It offers a seamless, interactive experience through a terminal UI and ZSH plugin, enabling developers to efficiently manage code understanding, debugging, optimization, and feature implementation.  
> Last updated: 2026-04-10

## Overview
Forge is an AI-powered terminal-based development tool designed to enhance the coding process by integrating AI capabilities directly into the terminal environment. It provides developers with a powerful assistant that can analyze code, suggest improvements, and help with a wide range of development tasks. The tool supports over 300 AI models, including popular models like Claude, GPT, Gemini, and more, making it a versatile solution for developers who work with different AI providers.

Forge offers three main modes of operation: Interactive Mode (TUI), One-Shot CLI Mode, and ZSH Plugin Mode (`:` prefix). In Interactive Mode, developers can use a rich text user interface to chat with AI agents, review and execute code suggestions, manage multiple AI models, and debug code. One-Shot CLI Mode is ideal for quick tasks, allowing developers to run Forge from the command line for simple queries. The ZSH Plugin Mode provides a seamless integration with the shell, allowing developers to interact with AI agents using the `:` prefix system.

Forge also includes a range of features such as code understanding, debugging assistance, code optimization, and Git integration. It supports multi-agent workflows, allowing multiple AI agents to work together on complex tasks. Developers can customize AI behavior and workflows to match their specific needs and preferences. Additionally, Forge provides semantic search capabilities that allow developers to search their codebase for relevant information.

## Key Points
- Forge integrates AI capabilities directly into the terminal environment, eliminating the need for separate AI tools.
- Supports over 300 AI models, including popular models like Claude, GPT, Gemini, and more.
- Offers three modes of operation: Interactive Mode (TUI), One-Shot CLI Mode, and ZSH Plugin Mode (`:` prefix).
- Provides a range of features such as code understanding, debugging assistance, code optimization, and Git integration.
- Supports multi-agent workflows, allowing multiple AI agents to work together on complex tasks.
- Includes semantic search capabilities for searching the codebase for relevant information.

## Sources
- [GitHub](https://github.com/antinomyhq/forgecode)
- [원본](raw/ingest/tech/2026-04-10-ai-enhanced-terminal-development-tool.md)