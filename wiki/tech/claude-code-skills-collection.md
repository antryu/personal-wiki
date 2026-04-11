# Claude Code Skills Collection

> A high-impact collection of 14,147-starred skills for Claude Code that enhances daily work efficiency through modular tools for content generation, AI backends, and utility functions. Notable for its multi-format publishing capabilities and seamless integration with ClawHub/OpenClaw.
> Last updated: 2026-04-11

## Overview

**JimLiu/baoyu-skills** is a TypeScript-based skill repository for Claude Code offering 3 categories of productivity tools:

### Installation Methods
1. **Quick Install** via `npx skills add`
2. **ClawHub Publishing** with individual skill distribution:
   ```bash
   ./scripts/sync-clawhub.sh --dry-run
   ./scripts/sync-clawhub.sh --all
   ```
3. **Plugin Marketplace** integration:
   ```bash
   /plugin marketplace add JimLiu/baoyu-skills
   ```

### Marketplace Integration
- **Single Plugin Bundle**: Installs all skills as unified package
- **Individual Skill Installation**:
  ```bash
  clawhub install baoyu-imagine
  clawhub install baoyu-markdown-to-html
  ```
- **Auto-Update Feature**: Enable automatic updates through marketplace settings

### Skill Categories
1. **Content Skills**  
   - **baoyu-xhs-images**: Xiaohongshu-style image card generator with 11+ customizable styles (cute, notion, chalkboard, etc.)  
   - Supports palette overrides (macaron, neon) and layout options (dense, list)  
   - Example usage:
     ```bash
     /baoyu-xhs-images posts/ai-future/article.md --style notion --palette macaron
     ```

2. **AI Generation Skills**  
   *(Details pending in provided content)*

3. **Utility Skills**  
   *(Details pending in provided content)*

### Update Management
- Manual updates via `/plugin` interface
- Auto-update toggle for continuous synchronization
- Visual confirmation with screenshot-based workflow

## Key Points
- **Industry Adoption**: 14,147 stars and 1,630 forks indicate strong developer community adoption
- **Modular Architecture**: Supports both monolithic plugin installation and individual skill publishing
- **Style Flexibility**: 11+ visual styles with 3 color palette options for content customization
- **Cross-Platform Integration**: Works with ClawHub, OpenClaw, and Claude Code's native plugin system

## Sources
- [GitHub](https://github.com/JimLiu/baoyu-skills)
- [원본](raw/ingest/tech/2026-04-11-claude-code-skills-collection.md)