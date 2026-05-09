# React Doctor

> React Doctor is a tool that analyzes your React code for bad practices and outputs a health score (0–100) along with actionable diagnostics. It works with popular frameworks like Next.js, Vite, and React Native.  
> Last updated: 2026-05-09

## Overview

React Doctor is designed to catch poor React practices written by AI or human developers. It provides a comprehensive scan of your codebase and highlights issues in areas such as state and effects, performance, architecture, security, accessibility, and dead code. It is notable for its ability to integrate directly with coding agents, GitHub Actions, and linting tools like ESLint and OXLint, making it a versatile solution for both development and CI/CD environments.

The tool runs a single command at the project root to analyze the code and output a health score. It also supports configuration files for fine-tuned control over which rules to apply and which files to ignore.

React Doctor supports a wide range of development workflows and integrates well with tools like GitHub Actions and coding agents, making it a valuable addition for teams aiming to maintain high code quality in React projects.

## Key Points

- Scans your React codebase and outputs a **0 to 100 health score**.
- Highlights actionable diagnostics across multiple categories: state/effects, performance, architecture, security, accessibility, and dead code.
- Integrates with coding agents to teach them best practices.
- Works with Next.js, Vite, and React Native.
- Can be used in GitHub Actions to post findings as PR comments.
- Supports configuration files for rule and file exclusions.
- Includes lint plugins for ESLint and OXLint for integration into existing linting setups.

## Sources

- [GitHub](https://github.com/millionco/react-doctor)
- [원본](raw/ingest/tech/2026-05-09-react-doctor.md)