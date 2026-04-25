<!-- GitHub Trending: Python | 1,428 stars | +174 today -->

# ComposioHQ/awesome-codex-skills

> A curated list of practical Codex skills for automating workflows across the Codex CLI and API.

## Repository Info
- **URL**: https://github.com/ComposioHQ/awesome-codex-skills
- **Stars**: 1,428
- **Forks**: 129
- **Language**: Python
- **License**: N/A
- **Created**: 2026-01-12
- **Updated**: 2026-04-25
- **Topics**: awesome, awesome-lists, awesome-resources, codex, codex-cli, codex-skills, coding-agent-skills, coding-agents, gpt-5-1-codex, gpt-5-codex, llm, skills
- **Open Issues**: 19

## README (excerpt)
<h1 align="center">Awesome Codex Skills</h1>

<p align="center">
<a href="https://dashboard.composio.dev/login?utm_source=Github&utm_medium=Youtube&utm_campaign=2025-11&utm_content=AwesomeCodexSkills">

  <img width="1280" height="640" alt="Composio banner" src="codex_cover_image.png">
</a>
</p>

<p align="center">
  <a href="https://awesome.re">
    <img src="https://awesome.re/badge.svg" alt="Awesome" />
  </a>
  <a href="https://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome" />
  </a>
</p>
<div>
<p align="center">
  <a href="https://twitter.com/composio">
    <img src="https://img.shields.io/badge/Follow on X-000000?style=for-the-badge&logo=x&logoColor=white" alt="Follow on X" />
  </a>
  <a href="https://www.linkedin.com/company/composiohq/">
    <img src="https://img.shields.io/badge/Follow on LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="Follow on LinkedIn" />
  </a>
  <a href="https://discord.com/invite/composio">
    <img src="https://img.shields.io/badge/Join our Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="Join our Discord" />
  </a>
  </p>
</div>

A curated list of practical Codex skills for automating workflows across the Codex CLI and API.


> **Want skills that do more than generate text?** Codex can send emails, create issues, post to Slack, and take actions across 1000+ apps. [See how →](./connect/)

---

## Quickstart: Add Skills to Codex

### Install with the Skill Installer (recommended)

```bash
git clone https://github.com/ComposioHQ/awesome-codex-skills.git
cd awesome-codex-skills/awesome-codex-skills
# Install one or more skills into $CODEX_HOME/skills (defaults to ~/.codex/skills)
python skill-installer/scripts/install-skill-from-github.py --repo ComposioHQ/awesome-codex-skills --path meeting-notes-and-actions
```

The installer fetches the skill and places it in `$CODEX_HOME/skills/<skill-name>`. Restart Codex to pick up new skills.

### Manual install

1. Copy the desired skill folder (e.g., `./spreadsheet-formula-helper`) into `$CODEX_HOME/skills/` (defaults to `~/.codex/skills/`).
2. Restart Codex so it loads the new metadata.
3. In your next session, describe the task or mention the skill name; Codex will trigger matching skills based on their `description` frontmatter.

---

## Contents

- [Bernstein](https://github.com/chernistry/bernstein) - Multi-agent orchestrator with Codex CLI adapter. Runs parallel Codex agents in isolated git worktrees with quality gates.
- [What Are Codex Skills?](#what-are-codex-skills)
- [Skills](#skills)
  - [Development & Code Tools](#development--code-tools)
  - [Productivity & Collaboration](#productivity--collaboration)
  - [Communication & Writing](#communication--writing)
  - [Data & Analysis](#data--analysis)
  - [Meta & Utilities](#meta--utilities)
- [Using Skills in Codex](#using-skills-in-codex)
- [Creating Skills](#creating-skills)
- [Contributing](#contributing)
- [Join the Community](#join-the-community)

## What Are Codex Skills?

Codex skills are modular instruction bundles that tell Codex how to execute a task the way you want it done. Each skill lives in its own folder with a `SKILL.md` that includes metadata (name + description) and step-by-step guidance. Codex reads the metadata to decide when to trigger a skill and loads the body only after it fires, keeping context lean.

## Skills

### Development & Code Tools

- [brooks-lint](https://github.com/hyhmrright/brooks-lint) - AI code reviews grounded in six classic engineering books — decay risk diagnostics with book citations, severity labels, and four analysis modes (PR review, architecture audit, tech debt, test quality). Install: `python3 ~/.codex/skills/.system/skill-installer/scripts/install-skill-from-github.py --repo hyhmrright/brooks-lint --path skills/brooks-lint --name brooks-lint`
- [codebase-migrate/](./codebase-migrate/) - Run large codebase migrations and