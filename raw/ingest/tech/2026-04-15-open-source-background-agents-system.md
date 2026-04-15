<!-- GitHub Trending: TypeScript | 1,500 stars | +5 today -->

# ColeMurray/background-agents

> An open-source background agents coding system

## Repository Info
- **URL**: https://github.com/ColeMurray/background-agents
- **Stars**: 1,500
- **Forks**: 226
- **Language**: TypeScript
- **License**: MIT License
- **Created**: 2026-01-25
- **Updated**: 2026-04-15
- **Topics**: N/A
- **Open Issues**: 26

## README (excerpt)
# Background Agents: Open-Inspect

An open-source background agents coding system inspired by
[Ramp's Inspect](https://builders.ramp.com/post/why-we-built-our-background-agent).

## Overview

Open-Inspect provides a hosted background coding agent that can:

- Work on tasks in the background while you focus on other things
- Access full development environments (Node.js, Python, git, browser automation, VS Code)
- Connect from anywhere — web UI, Slack, GitHub PRs, Linear issues, or webhooks
- Enable multiplayer sessions where multiple people can collaborate in real time
- Create PRs with proper commit attribution to the prompting user
- Run on a schedule — cron jobs, Sentry alerts, and webhook-triggered automations
- Spawn parallel sub-tasks that work in separate sandboxes simultaneously
- Use your choice of AI model — Anthropic Claude, OpenAI Codex (via ChatGPT subscription), or
  OpenCode Zen

## Security Model (Single-Tenant Only)

> **Important**: This system is designed for **single-tenant deployment only**, where all users are
> trusted members of the same organization with access to the same repositories.

### How It Works

The system uses a shared GitHub App installation for all git operations (clone, push). This means:

- **All users share the same GitHub App credentials** - The GitHub App must be installed on your
  organization's repositories, and any user of the system can access any repo the App has access to
- **No per-user repository access validation** - The system does not verify that a user has
  permission to access a specific repository before creating a session
- **User OAuth tokens are used for PR creation** - PRs are created using the user's GitHub OAuth
  token, ensuring proper attribution and that users can only create PRs on repos they have write
  access to

### Token Architecture

| Token Type       | Purpose                | Scope                            |
| ---------------- | ---------------------- | -------------------------------- |
| GitHub App Token | Clone repos, push code | All repos where App is installed |
| User OAuth Token | Create PRs, user info  | Repos user has access to         |
| WebSocket Token  | Real-time session auth | Single session                   |

### Why Single-Tenant Only

This architecture follows
[Ramp's Inspect design](https://builders.ramp.com/post/why-we-built-our-background-agent), which was
built for internal use where all employees are trusted and have access to company repositories.

**For multi-tenant deployment**, you would need:

- Per-tenant GitHub App installations
- Access validation at session creation
- Tenant isolation in the data model

### Deployment Recommendations

1. **Deploy behind your organization's SSO/VPN** - Ensure only authorized employees can access the
   web interface
2. **Install GitHub App only on intended repositories** - The App's installation scope defines what
   the system can access
3. **Use GitHub's repository selection** - When installing the App, select specific repositories
   rather than "All repositories"

## Architecture

```
                                    ┌──────────────────┐
                                    │     Clients      │
                                    │ ┌──────────────┐ │
                                    │ │  Web / Slack │ │
                                    │ │ GitHub / Lin.│ │
                                    │ │   Webhooks   │ │
                                    │ └──────────────┘ │
                                    └────────┬─────────┘
                                             │
                                             ▼
┌────────────────────────────────────────────────────────────────────┐
│                     Control Plane (Cloudflare)                     │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │                   Durable Objects (per session)              │  │
│  │  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌───────────────┐    │  │
│  │  