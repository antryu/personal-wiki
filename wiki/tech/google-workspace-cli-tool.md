# Google Workspace CLI Tool

> The Google Workspace CLI is a command-line tool that provides access to all Google Workspace APIs, including Drive, Gmail, Calendar, Sheets, Docs, Chat, Admin, and more. It dynamically builds its command set from Google's Discovery Service, offering structured JSON output and 40+ built-in AI agent skills. Notable for its flexibility and ease of use for both human and AI users.
> Last updated: 2026-05-06

## Overview
The `gws` (Google Workspace CLI) is a unified command-line interface for interacting with multiple Google Workspace APIs, including Drive, Gmail, Calendar, Sheets, Docs, Chat, Admin, and more. It dynamically loads command definitions from Google's Discovery API at runtime, ensuring compatibility with new APIs and methods as they are added. Designed for both humans and AI agents, the CLI provides structured JSON outputs and includes AI agent skills for automation tasks.

The CLI is written in Rust and distributed under the Apache License 2.0. It is actively developed with frequent updates and breaking changes expected as the project moves toward v1.0. The tool supports multiple installation methods, including pre-built binaries, NPM, Cargo, and Homebrew.

Authentication is handled via OAuth2, and users need to create a Google Cloud project and configure the necessary credentials. The tool is not officially supported by Google but is open-source and maintained by the community.

## Key Points
- One CLI for all Google Workspace APIs, dynamically built from the Discovery Service.
- Structured JSON outputs make it ideal for AI agents and automation scripts.
- Supports 40+ AI agent skills for managing Workspace without custom tooling.
- Actively developed and under active migration toward a v1.0 release.

## Sources
- [GitHub](https://github.com/googleworkspace/cli)
- [원본](raw/ingest/tech/2026-05-06-google-workspace-cli-tool.md)