<!-- GitHub Trending: Rust | 682 stars | +23 today -->

# qufei1993/skills-hub

> A cross-platform desktop app to manage Agent Skills in one place and sync them to multiple AI coding tools’ global skills directories — “Install once, sync everywhere”.

## Repository Info
- **URL**: https://github.com/qufei1993/skills-hub
- **Stars**: 683
- **Forks**: 88
- **Language**: Rust
- **License**: MIT License
- **Created**: 2026-01-25
- **Updated**: 2026-04-10
- **Topics**: N/A
- **Open Issues**: 6

## README (excerpt)
# Skills Hub (Tauri Desktop)

A cross-platform desktop app (Tauri + React) to manage Agent Skills in one place and sync them to multiple AI coding tools’ global skills directories (prefer symlink/junction, fallback to copy) — “Install once, sync everywhere”.

## Documentation

- English (default): `README.md` (this file)
- 中文：[`docs/README.zh.md`](docs/README.zh.md)

## Key Features

- **Explore page**: Browse featured skills (ClawHub, updated daily) and search online (skills.sh) — one-click install & sync to all detected tools
- **Skill detail view**: Click a skill name to browse its files with Markdown rendering and syntax highlighting (40+ languages)
- **Unified view**: Managed skills and per-tool activation status
- **Onboarding migration**: Scan existing skills in installed tools, import into the Central Repo, and sync
- **Import sources**: Local folder / Git URL (including multi-skill repo selection, `.claude/skills/` directory support)
- **Update**: Refresh from source; propagate updates to copy-mode targets
- **New tool detection**: Detect newly installed tools and prompt to sync managed skills

### My Skills
![My Skills](docs/assets/my-skills.png)

### Explore & Search
![Explore](docs/assets/explore-search.png)

### Manual Add
![Manual Add](docs/assets/manual-add.png)

### Skill Detail
![Skill Detail](docs/assets/skill-detail.png)

## Supported AI Coding Tools

| tool key | Display name | skills dir (relative to `~`) | detect dir (relative to `~`) |
| --- | --- | --- | --- |
| `cursor` | Cursor | `.cursor/skills` | `.cursor` |
| `claude_code` | Claude Code | `.claude/skills` | `.claude` |
| `codex` | Codex | `.codex/skills` | `.codex` |
| `opencode` | OpenCode | `.config/opencode/skills` | `.config/opencode` |
| `antigravity` | Antigravity | `.gemini/antigravity/global_skills` | `.gemini/antigravity` |
| `amp` | Amp | `.config/agents/skills` | `.config/agents` |
| `kimi_cli` | Kimi Code CLI | `.config/agents/skills` | `.config/agents` |
| `augment` | Augment | `.augment/rules` | `.augment` |
| `openclaw` | OpenClaw | `.openclaw/skills` | `.openclaw` |
| `copaw` | Copaw | `.copaw/skill_pool` | `.copaw` |
| `cline` | Cline | `.cline/skills` | `.cline` |
| `codebuddy` | CodeBuddy | `.codebuddy/skills` | `.codebuddy` |
| `command_code` | Command Code | `.commandcode/skills` | `.commandcode` |
| `continue` | Continue | `.continue/skills` | `.continue` |
| `crush` | Crush | `.config/crush/skills` | `.config/crush` |
| `junie` | Junie | `.junie/skills` | `.junie` |
| `iflow_cli` | iFlow CLI | `.iflow/skills` | `.iflow` |
| `kiro_cli` | Kiro CLI | `.kiro/skills` | `.kiro` |
| `kode` | Kode | `.kode/skills` | `.kode` |
| `mcpjam` | MCPJam | `.mcpjam/skills` | `.mcpjam` |
| `mistral_vibe` | Mistral Vibe | `.vibe/skills` | `.vibe` |
| `mux` | Mux | `.mux/skills` | `.mux` |
| `openclaude` | OpenClaude IDE | `.openclaude/skills` | `.openclaude` |
| `openhands` | OpenHands | `.openhands/skills` | `.openhands` |
| `pi` | Pi | `.pi/agent/skills` | `.pi` |
| `qoder` | Qoder | `.qoder/skills` | `.qoder` |
| `qwen_code` | Qwen Code | `.qwen/skills` | `.qwen` |
| `trae` | Trae | `.trae/skills` | `.trae` |
| `trae_cn` | Trae CN | `.trae-cn/skills` | `.trae-cn` |
| `zencoder` | Zencoder | `.zencoder/skills` | `.zencoder` |
| `neovate` | Neovate | `.neovate/skills` | `.neovate` |
| `pochi` | Pochi | `.pochi/skills` | `.pochi` |
| `adal` | AdaL | `.adal/skills` | `.adal` |
| `kilo_code` | Kilo Code | `.kilocode/skills` | `.kilocode` |
| `roo_code` | Roo Code | `.roo/skills` | `.roo` |
| `goose` | Goose | `.config/goose/skills` | `.config/goose` |
| `gemini_cli` | Gemini CLI | `.gemini/skills` | `.gemini` |
| `github_copilot` | GitHub Copilot | `.copilot/skills` | `.copilot` |
| `clawdbot` | Clawdbot | `.clawdbot/skills` | `.clawdbot` |
| `droid` | Droid | `.factory/skills` | `.factory` |
| `windsurf` | Windsurf | `.codeium/windsurf/skills` | `.codeium/windsurf` |
| `moltbot` | MoltBot | `.moltbot/skills` | `.moltbot` |

## Development

### P