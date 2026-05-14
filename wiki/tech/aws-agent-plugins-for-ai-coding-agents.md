# AWS Agent Plugins for AI Coding Agents

> Agent Plugins for AWS equip AI coding agents with the skills to help you architect, deploy, and operate on AWS. These plugins streamline the integration of AWS best practices into AI-powered development workflows. Last updated: 2026-05-14.

## Overview

The **AWS Agent Plugins** project enhances AI coding agents with structured workflows, external API access, automation hooks, and reference material for AWS best practices. These plugins are designed to reduce the context overhead in prompts by encoding domain-specific knowledge in reusable and versioned capabilities. They support tools like Claude Code, Codex, and Cursor, making AI-assisted development on AWS more deterministic and team-standardized.

Agent plugins encapsulate a variety of artifacts, including:
- **Agent Skills**: Reusable workflows and playbooks for complex tasks like architecture planning or code deployment.
- **MCP Servers**: Runtime access to external resources like AWS documentation and pricing data.
- **Hooks**: Automated checks and workflows triggered by specific developer actions.
- **References**: Documentation and knowledge bases to guide agent decisions without inflating prompts.

The project is part of AWS Labs and continues to evolve, with key features like IAM condition keys and CloudWatch visibility now available in the [Agent Toolkit for AWS](https://aws.amazon.com/about-aws/whats-new/2026/05/agent-toolkit/), a production-ready evolution of these tools.

## Key Points
- Agent plugins reduce context bloat and improve agent determinism by encoding AWS best practices as reusable workflows.
- Supports integration with multiple AI coding agents such as Codex, Claude Code, and Cursor.
- Uses MCP servers to provide live access to AWS documentation, pricing data, and APIs.
- Includes hooks for automatic validation and enforcement of standards.
- Offers structured guidance on security, code review, and deployment planning.
- The project is under active development, with plans to migrate useful components to the Agent Toolkit for AWS.

## Sources
- [GitHub](https://github.com/awslabs/agent-plugins)
- [원본](raw/ingest/tech/2026-05-14-aws-agent-plugins-for-ai-coding-agents.md)