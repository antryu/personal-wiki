# GitHub Checkout Action

> The GitHub Checkout Action is a widely-used action for checking out a repository within a GitHub Actions workflow. It simplifies the process of accessing repository code and supports secure credential handling, making it essential for CI/CD workflows.  
> Last updated: 2026-04-18

## Overview

The `actions/checkout` action is designed to fetch and check out a repository during a GitHub Actions workflow. It is commonly used as the first step in workflows to access the source code. The action supports various configurations, such as checking out specific branches, tags, or commits, and it handles authentication securely.

Key features include:

- **Secure credential handling**: Credentials are stored in a temporary file and removed after the job to ensure security.
- **Flexibility in fetching**: Users can control how much history is fetched using the `fetch-depth` parameter.
- **Compatibility with Docker container actions**: For actions running in Docker containers, it requires a specific Actions Runner version for proper authentication.

The action is written in TypeScript and released under the MIT License. It has been actively maintained since its creation in 2019 and continues to receive updates and improvements.

## Key Points

- The action checks out the repository under `$GITHUB_WORKSPACE`.
- It defaults to fetching only a single commit, but can be configured to fetch full history.
- Authentication tokens are persisted in the local git config and removed after the job.
- It supports secure credential handling and has been updated to improve security in recent versions.
- Contributions are currently not accepted, but bugs and issues can still be reported.

## Sources

- [GitHub](https://github.com/actions/checkout)
- [원본](raw/ingest/infra/2026-04-18-github-checkout-action.md)