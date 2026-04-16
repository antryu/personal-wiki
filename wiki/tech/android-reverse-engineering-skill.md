# Android Reverse Engineering Skill

> A Claude Code skill for decompiling Android apps and extracting HTTP APIs, including Retrofit endpoints, OkHttp calls, and hardcoded URLs. Notable for its ability to trace call flows and analyze obfuscated code via ProGuard/R8 outputs.  
> Last updated: 2026-04-16

## Overview
A specialized tool for Android app reverse engineering, this skill decompiles APK/XAPK/JAR/AAR files using `jadx`, `Fernflower`, or `Vineflower` to extract HTTP API definitions, authentication patterns, and architectural structures. Key capabilities include:
- **Multi-engine decompilation**: Supports side-by-side comparison of jadx, Fernflower, and Vineflower outputs.
- **API documentation**: Identifies Retrofit/OkHttp endpoints, hardcoded URLs, and auth tokens.
- **Call flow tracing**: Maps interactions from UI components (e.g., `LoginActivity`) through ViewModels to HTTP calls.
- **Obfuscation handling**: Analyzes ProGuard/R8-processed code via deobfuscation strategies.
- **Modular scripts**: Standalone tools for dependency checks, decompilation, and API extraction.

**Requirements**:
- Java JDK 17+
- `jadx` CLI (mandatory)
- Optional: `Vineflower`/`Fernflower` for complex Java code, `dex2jar` for APK/DEX analysis.

**Installation**:
- **GitHub**: Use Claude Code commands to add and install the plugin.
- **Local**: Clone the repo and register via CLI.

**Usage**:
- Slash command: `/decompile path/to/app.apk`
- Natural language prompts: "Extract API endpoints from this app" or "Analyze this AAR library."
- Standalone scripts for dependency management, decompilation, and API discovery.

## Key Points
- Decompiles Android apps to extract HTTP APIs and architectural patterns.
- Supports multiple decompilation engines for comparison and accuracy.
- Handles obfuscated code from ProGuard/R8.
- Provides both automated workflows and manual script execution.

## Sources
- [GitHub](https://github.com/SimoneAvogadro/android-reverse-engineering-skill)
- [원본](raw/ingest/tech/2026-04-16-android-reverse-engineering-skill.md)