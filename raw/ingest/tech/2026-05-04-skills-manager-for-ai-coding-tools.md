<!-- GitHub Trending: Rust | 1,074 stars | +33 today -->

# xingkongliang/skills-manager

> A lightweight desktop app to manage, sync, and organize AI agent skills across 15+ coding tools — Cursor, Claude Code, Codex, Copilot, and more.

## Repository Info
- **URL**: https://github.com/xingkongliang/skills-manager
- **Stars**: 1,075
- **Forks**: 96
- **Language**: Rust
- **License**: MIT License
- **Created**: 2026-03-02
- **Updated**: 2026-05-04
- **Topics**: N/A
- **Open Issues**: 19

## README (excerpt)
<p align="center">
  <img src="assets/icon.png" width="80" />
</p>

<h1 align="center">Skills Manager</h1>

<p align="center">
  One app to manage AI agent skills across all your coding tools.
</p>

<p align="center">
  <a href="./README.zh-CN.md">中文说明</a>
  &nbsp;·&nbsp;
  <a href="https://x.com/JayTL00">@JayTL00 on X</a>
  &nbsp;·&nbsp;
  <a href="https://buymeacoffee.com/jaytl">Buy me a coffee</a>
</p>

<p align="center">
  <img src="assets/demo.gif" width="800" alt="Skills Manager Demo" />
</p>

<p align="center"><strong>My Skills</strong></p>
<p align="center"><img src="assets/CleanShot_20260419_003504@2x.png" width="800" alt="My Skills" /></p>

<p align="center"><strong>Install Skills — Marketplace</strong></p>
<p align="center"><img src="assets/CleanShot_20260316_231142@2x.png" width="800" alt="Install Skills Marketplace" /></p>

<p align="center"><strong>Projects</strong></p>
<p align="center"><img src="assets/CleanShot_20260419_003526@2x.png" width="800" alt="Projects" /></p>

<p align="center"><strong>Settings</strong></p>
<p align="center"><img src="assets/CleanShot_20260419_003825@2x.png" width="800" alt="Settings" /></p>

<p align="center"><strong>Code Diff</strong></p>
<p align="center"><img src="assets/CleanShot_20260419_003613@2x.png" width="800" alt="Code Diff" /></p>

## Features

- **Unified skill library** — Install skills from Git repos, local folders, `.zip` / `.skill` archives, or the [skills.sh](https://skills.sh) marketplace. Everything goes into one central repo, which defaults to `~/.skills-manager` and can be customized in **Settings**.
- **Marketplace + AI search** — Browse popular skills from the marketplace, run keyword search, or enable SkillsMP AI search with your API key.
- **Multi-tool sync** — Sync skills to any supported tool via symlink or copy with a single click.
- **Project Workspaces** — View and manage project-local skill folders for supported agents, compare them with your central library, and sync changes in either direction. Supports nested skill directories and per-agent assignment when exporting.
- **Linked Workspaces** — Point to any directory as a skills root — useful for skills that live outside the default agent paths. Managed as a standalone workspace without participating in global scenario sync.
- **Scenarios** — Group skills into scenarios, configure per-scenario agent toggles, drag to reorder enabled skills, and switch between setups instantly from the left sidebar.
- **Batch operations** — Multi-select skills for bulk enable/disable, export, or delete. Project Workspaces also support bulk enable/disable for project-local skills.
- **Skill tagging and filters** — Tag skills, use tags to group similar skills, and filter by source or tag to narrow large libraries quickly.
- **Update tracking** — Check for upstream updates on Git-based skills; re-import local ones.
- **Skill preview and source inspection** — Read `SKILL.md` / `README.md`, inspect source metadata, and compare local content with the upstream version inside the app.
- **Custom tools** — Add your own agents/tools with custom skills directories, or override the default path for any built-in tool.
- **Git backup and restore** — Version-control your skill library with Git for backup and multi-machine sync, then restore snapshot versions from Version History when needed.
- **Flexible app settings** — Configure repo path, sync mode, default scenario, theme, text size, language, tray behavior, proxy, Git remote, and update checks in one place.

## Core Concepts

- **Scenarios are global skill sets** — A scenario is your global set of enabled skills for a tool. For Claude Code, these skills are synced to `~/.claude/skills/`.
- **Project Workspaces are project-local skill sets** — A project workspace manages the skills that live inside a specific project. For Claude Code, these skills are synced to `<project>/.claude/skills/`.
- **Switch scenarios from the sidebar** — Click a scenario in the left sidebar to change the 