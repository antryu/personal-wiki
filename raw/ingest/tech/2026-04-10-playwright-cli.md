<!-- GitHub Trending: TypeScript | 7,248 stars | +62 today -->

# microsoft/playwright-cli

> CLI for common Playwright actions. Record and generate Playwright code, inspect selectors and take screenshots.

## Repository Info
- **URL**: https://github.com/microsoft/playwright-cli
- **Stars**: 7,251
- **Forks**: 334
- **Language**: TypeScript
- **License**: Apache License 2.0
- **Created**: 2020-06-19
- **Updated**: 2026-04-10
- **Topics**: playwright
- **Open Issues**: 17

## README (excerpt)
# playwright-cli

Playwright CLI with SKILLS

### Playwright CLI vs Playwright MCP

This package provides CLI interface into Playwright. If you are using **coding agents**, that is the best fit.

- **CLI**: Modern **coding agents** increasingly favor CLI–based workflows exposed as SKILLs over MCP because CLI invocations are more token-efficient: they avoid loading large tool schemas and verbose accessibility trees into the model context, allowing agents to act through concise, purpose-built commands. This makes CLI + SKILLs better suited for high-throughput coding agents that must balance browser automation with large codebases, tests, and reasoning within limited context windows.

- **MCP**: MCP remains relevant for specialized agentic loops that benefit from persistent state, rich introspection, and iterative reasoning over page structure, such as exploratory automation, self-healing tests, or long-running autonomous workflows where maintaining continuous browser context outweighs token cost concerns. Learn more about [Playwright MCP](https://github.com/microsoft/playwright-mcp).

### Key Features

- **Token-efficient**. Does not force page data into LLM.

### Requirements
- Node.js 18 or newer
- Claude Code, GitHub Copilot, or any other coding agent.

## Getting Started

## Installation

```bash
npm install -g @playwright/cli@latest
playwright-cli --help
```

### Installing skills

Claude Code, GitHub Copilot and others will use the locally installed skills.

```bash
playwright-cli install --skills
```

### Skills-less operation

Point your agent at the CLI and let it cook. It'll read the skill off `playwright-cli --help` on its own:

```
Test the "add todo" flow on https://demo.playwright.dev/todomvc using playwright-cli.
Check playwright-cli --help for available commands.
```

## Demo

```
> Use playwright skills to test https://demo.playwright.dev/todomvc/.
  Take screenshots for all successful and failing scenarios.
```

Your agent will be running commands, but it does not mean you can't play with it manually:

```
playwright-cli open https://demo.playwright.dev/todomvc/ --headed
playwright-cli type "Buy groceries"
playwright-cli press Enter
playwright-cli type "Water flowers"
playwright-cli press Enter
playwright-cli check e21
playwright-cli check e35
playwright-cli screenshot
```

## Headed operation

Playwright CLI is headless by default. If you'd like to see the browser, pass `--headed` to `open`:

```bash
playwright-cli open https://playwright.dev --headed
```

## Sessions

Playwright CLI keeps the browser profile in memory by default. Your cookies and storage state
are preserved between CLI calls within the session, but lost when the browser closes. Use
`--persistent` to save the profile to disk for persistence across browser restarts.

You can use different instances of the browser for different projects with sessions. Pass `-s=` to
the invocation to talk to a specific browser.

```bash
playwright-cli open https://playwright.dev
playwright-cli -s=example open https://example.com --persistent
playwright-cli list
```

You can run your coding agent with the `PLAYWRIGHT_CLI_SESSION` environment variable:

```bash
PLAYWRIGHT_CLI_SESSION=todo-app claude .
```

Or instruct it to prepend `-s=` to the calls.

Manage your sessions as follows:

```bash
playwright-cli list                     # list all sessions
playwright-cli close-all                # close all browsers
playwright-cli kill-all                 # forcefully kill all browser processes
```

## Monitoring

Use `playwright-cli show` to open a visual dashboard that lets you see and control all running
browser sessions. This is useful when your coding agents are running browser automation in the
background and you want to observe their progress or step in to help.

```bash
playwright-cli show
```

<img width="1107" height="729" alt="Image" src="https://github.com/user-attachments/assets/99df739d-106a-4520-b004-bb315db41da7" />

The dashboard opens a window with tw