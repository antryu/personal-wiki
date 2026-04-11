<!-- GitHub Trending: TypeScript | 14,146 stars | +111 today -->

# JimLiu/baoyu-skills

> No description

## Repository Info
- **URL**: https://github.com/JimLiu/baoyu-skills
- **Stars**: 14,147
- **Forks**: 1,630
- **Language**: TypeScript
- **License**: N/A
- **Created**: 2026-01-13
- **Updated**: 2026-04-11
- **Topics**: agent-skills, claude-skills, codex-skills, openclaw-skills
- **Open Issues**: 6

## README (excerpt)
# baoyu-skills

English | [中文](./README.zh.md)

Skills shared by Baoyu for improving daily work efficiency with Claude Code.

## Prerequisites

- Node.js environment installed
- Ability to run `npx bun` commands

## Installation

### Quick Install (Recommended)

```bash
npx skills add jimliu/baoyu-skills
```

### Publish to ClawHub / OpenClaw

This repository now supports publishing each `skills/baoyu-*` directory as an individual ClawHub skill.

```bash
# Preview what would be published
./scripts/sync-clawhub.sh --dry-run

# Publish all changed skills from ./skills
./scripts/sync-clawhub.sh --all
```

ClawHub installs skills individually, not as one marketplace bundle. After publishing, users can install specific skills such as:

```bash
clawhub install baoyu-imagine
clawhub install baoyu-markdown-to-html
```

Publishing to ClawHub releases the published skill under `MIT-0`, per ClawHub's registry rules.

### Register as Plugin Marketplace

Run the following command in Claude Code:

```bash
/plugin marketplace add JimLiu/baoyu-skills
```

### Install Skills

**Option 1: Via Browse UI**

1. Select **Browse and install plugins**
2. Select **baoyu-skills**
3. Select the **baoyu-skills** plugin
4. Select **Install now**

**Option 2: Direct Install**

```bash
# Install the marketplace's single plugin
/plugin install baoyu-skills@baoyu-skills
```

**Option 3: Ask the Agent**

Simply tell Claude Code:

> Please install Skills from github.com/JimLiu/baoyu-skills

### Available Plugin

The marketplace now exposes a single plugin so each skill is registered exactly once.

| Plugin | Description | Includes |
|--------|-------------|----------|
| **baoyu-skills** | Content generation, AI backends, and utility tools for daily work efficiency | All skills in this repository, organized below as Content Skills, AI Generation Skills, and Utility Skills |

## Update Skills

To update skills to the latest version:

1. Run `/plugin` in Claude Code
2. Switch to **Marketplaces** tab (use arrow keys or Tab)
3. Select **baoyu-skills**
4. Choose **Update marketplace**

You can also **Enable auto-update** to get the latest versions automatically.

![Update Skills](./screenshots/update-plugins.png)

## Available Skills

Skills are organized into three categories:

### Content Skills

Content generation and publishing skills.

#### baoyu-xhs-images

Xiaohongshu image card series generator. Breaks down content into 1-10 cartoon-style image cards with **Style × Layout** system and optional palette override.

```bash
# Auto-select style and layout
/baoyu-xhs-images posts/ai-future/article.md

# Specify style
/baoyu-xhs-images posts/ai-future/article.md --style notion

# Specify layout
/baoyu-xhs-images posts/ai-future/article.md --layout dense

# Combine style and layout
/baoyu-xhs-images posts/ai-future/article.md --style notion --layout list

# Override palette
/baoyu-xhs-images posts/ai-future/article.md --style notion --palette macaron

# Direct content input
/baoyu-xhs-images 今日星座运势

# Non-interactive (skip all confirmations, for scheduled tasks)
/baoyu-xhs-images posts/ai-future/article.md --yes
/baoyu-xhs-images posts/ai-future/article.md --yes --preset knowledge-card
```

**Styles** (visual aesthetics): `cute` (default), `fresh`, `warm`, `bold`, `minimal`, `retro`, `pop`, `notion`, `chalkboard`, `study-notes`, `screen-print`, `sketch-notes`

**Palettes** (optional color override): `macaron`, `warm`, `neon`

**Style Previews**:

| | | |
|:---:|:---:|:---:|
| ![cute](./screenshots/xhs-images-styles/cute.webp) | ![fresh](./screenshots/xhs-images-styles/fresh.webp) | ![warm](./screenshots/xhs-images-styles/warm.webp) |
| cute | fresh | warm |
| ![bold](./screenshots/xhs-images-styles/bold.webp) | ![minimal](./screenshots/xhs-images-styles/minimal.webp) | ![retro](./screenshots/xhs-images-styles/retro.webp) |
| bold | minimal | retro |
| ![pop](./screenshots/xhs-images-styles/pop.webp) | ![notion](./screenshots/xhs-images-styles/notion.webp) | ![chalkbo