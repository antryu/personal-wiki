<!-- GitHub Trending: TypeScript | 7,774 stars | +131 today -->

# sirmalloc/ccstatusline

> 🚀 Beautiful highly customizable statusline for Claude Code CLI with powerline support, themes, and more.

## Repository Info
- **URL**: https://github.com/sirmalloc/ccstatusline
- **Stars**: 7,775
- **Forks**: 331
- **Language**: TypeScript
- **License**: MIT License
- **Created**: 2025-08-08
- **Updated**: 2026-04-17
- **Topics**: ai-tools, claude-code, cli, developer-tools, git, powerline, statusbar, statusline, terminal, themeing
- **Open Issues**: 74

## README (excerpt)
<div align="center">

<pre>
              _        _             _ _            
  ___ ___ ___| |_ __ _| |_ _   _ ___| (_)_ __   ___ 
 / __/ __/ __| __/ _` | __| | | / __| | | '_ \ / _ \
| (_| (__\__ \ || (_| | |_| |_| \__ \ | | | | |  __/
 \___\___|___/\__\__,_|\__|\__,_|___/_|_|_| |_|\___|
                                                     
</pre>

# ccstatusline

**🎨 A highly customizable status line formatter for Claude Code CLI**
*Display model info, git branch, token usage, and other metrics in your terminal*

[![npm version](https://img.shields.io/npm/v/ccstatusline.svg)](https://www.npmjs.com/package/ccstatusline)
[![npm downloads](https://img.shields.io/npm/dm/ccstatusline.svg)](https://www.npmjs.com/package/ccstatusline)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/sirmalloc/ccstatusline/blob/main/LICENSE)
[![Node.js Version](https://img.shields.io/node/v/ccstatusline.svg)](https://nodejs.org)
[![install size](https://packagephobia.com/badge?p=ccstatusline)](https://packagephobia.com/result?p=ccstatusline)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/sirmalloc/ccstatusline/graphs/commit-activity)

[![Mentioned in Awesome Claude Code](https://awesome.re/mentioned-badge.svg)](https://github.com/hesreallyhim/awesome-claude-code)
[![ClaudeLog - A comprehensive knowledge base for Claude](https://claudelog.com/img/claude_log_badge.svg)](https://claudelog.com/)


![Demo](https://raw.githubusercontent.com/sirmalloc/ccstatusline/main/screenshots/demo.gif)

</div>
<br />

## 📚 Table of Contents

- [Recent Updates](#-recent-updates)
- [Features](#-features)
- [Localizations](#-localizations)
- [Quick Start](#-quick-start)
- [Windows Support](docs/WINDOWS.md)
- [Usage](docs/USAGE.md)
- [Development](docs/DEVELOPMENT.md)
- [Contributing](#-contributing)
- [License](#-license)
- [Related Projects](#-related-projects)

<br />

## 🆕 Recent Updates

### v2.2.8 - Git widgets, smarter picker search, and minimalist mode

- **🔀 New Git PR widget** - Added a `Git PR` widget with clickable PR links plus optional status and title display for the current branch.
- **🧰 Major Git widget expansion** - Added `Git Status`, `Git Staged`, `Git Unstaged`, `Git Untracked`, `Git Ahead/Behind`, `Git Conflicts`, `Git SHA`, `Git Origin Owner`, `Git Origin Repo`, `Git Origin Owner/Repo`, `Git Upstream Owner`, `Git Upstream Repo`, `Git Upstream Owner/Repo`, `Git Is Fork`, `Git Worktree Mode`, `Git Worktree Name`, `Git Worktree Branch`, `Git Worktree Original Branch`, and `Custom Symbol`.
- **👤 Claude Account Email widget** - Added a session widget that reads the signed-in Claude account email from `~/.claude.json` while respecting `CLAUDE_CONFIG_DIR`.
- **🧼 Global Minimalist Mode** - Added a global toggle in `Global Overrides` that forces widgets into raw-value mode for a cleaner, label-free status line.
- **🔎 Smarter widget picker search** - The add/change widget picker now supports substring, initialism, and fuzzy matching, with ranked results and live match highlighting.
- **📏 Better terminal width detection** - Flex separators and right-alignment now work more reliably when ccstatusline is launched through wrapper processes or nested PTYs.
- **🎨 Powerline theme continuity** - Built-in Powerline themes can now continue colors cleanly across multiple status lines instead of restarting each line.

### v2.2.0 - v2.2.6 - Speed, widgets, links, and reliability updates

- **🚀 New Token Speed widgets** - Added three widgets: **Input Speed**, **Output Speed**, and **Total Speed**.
  - Each speed widget supports a configurable window of `0-120` seconds in the widget editor (`w` key).
  - `0` disables window mode and uses a full-session average speed.
  - `1-120` calculates recent speed over the selected rolling window.
- **🧩 New Skills widget controls (v2.2.1)** - Added configurable Skills modes (last/count/list), optional hide-when-empty behavior, and list-