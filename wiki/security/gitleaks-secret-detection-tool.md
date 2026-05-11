# Gitleaks: Secret Detection Tool

> Gitleaks is a tool for detecting secrets like passwords, API keys, and tokens in git repositories, files, and other sources via `stdin`. It is notable for its ease of integration into CI/CD pipelines and pre-commit hooks, making it a popular open-source tool for secret detection.
> Last updated: 2026-05-11

## Overview
Gitleaks is a powerful open-source tool written in Go, designed to detect sensitive information in git repositories, files, and more. It helps developers and organizations prevent accidental exposure of secrets by scanning for patterns like API keys, passwords, and tokens. Gitleaks supports multiple integration methods, including as a CLI tool, Docker image, GitHub Action, and pre-commit hook. The tool uses regex-based detection logic to identify secrets and can be customized for specific use cases.

## Key Points
- Gitleaks supports detection of various types of secrets, including API keys, passwords, and tokens.
- It integrates seamlessly with CI/CD pipelines and is easy to install via Homebrew, Docker, or Go.
- Gitleaks offers a GitHub Action for automated secret scanning in pull requests and pushes.
- The tool is highly customizable and can be run as a pre-commit hook to catch secrets before they are committed.

## Sources
- [GitHub](https://github.com/gitleaks/gitleaks)
- [원본](raw/ingest/security/2026-05-11-gitleaks-secret-detection-tool.md)