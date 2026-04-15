# Open-Source Background Agents System

> This repository provides an open-source background agents coding system, enabling users to run tasks in the background using full development environments. It is notable for its real-time collaboration features and integration with tools like GitHub, Slack, and AI models.
> Last updated: 2026-04-15

## Overview

The **ColeMurray/background-agents** repository offers an open-source system for managing background agents that can perform development tasks. Inspired by Ramp's Inspect, the system allows users to execute tasks in environments like Node.js, Python, and with tools such as Git, browser automation, and VS Code. It supports real-time collaboration, scheduled execution, and integration with external tools and AI models.

The system is designed for **single-tenant deployment only**, meaning it assumes all users are trusted members of the same organization. It uses a shared GitHub App for git operations, and user OAuth tokens for PR attribution, ensuring users can only modify repositories they have access to.

### Key Features

- **Background Execution**: Tasks can be run in the background while users focus on other work.
- **Development Environment Access**: Full access to Node.js, Python, Git, browser automation, and VS Code.
- **Real-Time Collaboration**: Multiple users can collaborate in real-time on the same task.
- **Integration Capabilities**: Connect via web UI, Slack, GitHub PRs, Linear issues, or webhooks.
- **Scheduling and Automation**: Tasks can be scheduled or triggered by alerts, cron jobs, or webhooks.
- **AI Model Integration**: Supports Anthropic Claude, OpenAI Codex, and OpenCode Zen.
- **Multiplayer Sessions**: Enable real-time collaborative coding sessions.
- **PR Attribution**: Proper commit attribution to the user initiating the task.

### Security Model

The system uses a shared GitHub App for all git operations, meaning all users share the same credentials. User OAuth tokens are used to create PRs, ensuring proper attribution and access control.

| Token Type       | Purpose                | Scope                            |
| ---------------- | ---------------------- | -------------------------------- |
| GitHub App Token | Clone repos, push code | All repos where App is installed |
| User OAuth Token | Create PRs, user info  | Repos user has access to         |
| WebSocket Token  | Real-time session auth | Single session                   |

### Deployment Recommendations

1. **SSO/VPN Protection**: Deploy the system behind your organization's SSO or VPN to limit access.
2. **Scoped GitHub App Installation**: Install the GitHub App only on intended repositories.
3. **Repository Selection**: When installing the GitHub App, select specific repositories rather than "All repositories."

### Architecture

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
│  │   Session  │  │   Task   │  │   Task   │  │   Task     │    │  │
│  │            │  │          │  │          │  │              │    │  │
│  └────────────┴──┴──────────┴──┴──────────┴──┴──────────────┘  │  │
│  ┌─────────────────────────────────────────────────────────────┘  │
│  │       DB (PostgreSQL)                                         │  │
│  └───────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────┘
```

## Key Points

- The system is designed for internal use in organizations with trusted users and shared repositories.
- It supports real-time collaboration and background execution of tasks using full development environments.
- Security is ensured through a shared GitHub App and user OAuth tokens for PR creation.
- Deployment should be protected via SSO/VPN, and the GitHub App should be installed on specific repositories only.

## Sources

- [GitHub](https://github.com/ColeMurray/background-agents)
- [원본](raw/ingest/tech/2026-04-15-open-source-background-agents-system.md)