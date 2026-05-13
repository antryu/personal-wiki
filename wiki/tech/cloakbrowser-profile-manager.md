# CloakBrowser Profile Manager

> CloakBrowser Profile Manager is a self-hosted web-based tool for managing multiple browser profiles, each with a unique device fingerprint. It provides an alternative to commercial services like Multilogin, GoLogin, and AdsPower by using a modified version of Chromium called CloakBrowser to isolate browser sessions.
> Last updated: 2026-05-13

## Overview
CloakBrowser Profile Manager is a free, open-source tool that allows users to create, manage, and launch multiple isolated browser profiles with unique fingerprints. These profiles include custom settings such as proxy, timezone, locale, and screen size, ensuring each instance appears as a completely different browser to the website. Each profile runs in an isolated CloakBrowser instance and can be accessed directly in the browser using noVNC. The tool is designed to be self-hosted and uses Docker for easy deployment.

The software is built with a FastAPI backend, React frontend, and SQLite database, and integrates with CloakBrowser, a stealth version of Chromium with C++ modifications that help bypass browser detection systems like Cloudflare Turnstile.

The application is still in early development and users are encouraged to report issues and contribute to the project.

## Key Points
- **Self-hosted**: The tool is open-source and self-hosted, offering full control over the browser profiles and their data.
- **Multi-profile support**: Create and manage multiple browser profiles with different fingerprints and configurations.
- **Anti-detect**: Uses CloakBrowser, a stealth Chromium binary that modifies hardware fingerprints and bypasses browser detection systems.

## Sources
- [GitHub](https://github.com/CloakHQ/CloakBrowser-Manager)
- [원본](raw/ingest/tech/2026-05-13-cloakbrowser-profile-manager.md)