<!-- GitHub Trending: TypeScript | 39,505 stars | +346 today -->

# KeygraphHQ/shannon

> Shannon Lite is an autonomous, white-box AI pentester for web applications and APIs. It analyzes your source code, identifies attack vectors, and executes real exploits to prove vulnerabilities before they reach production.

## Repository Info
- **URL**: https://github.com/KeygraphHQ/shannon
- **Stars**: 39,505
- **Forks**: 4,358
- **Language**: TypeScript
- **License**: GNU Affero General Public License v3.0
- **Created**: 2025-09-27
- **Updated**: 2026-04-22
- **Topics**: penetration-testing, pentesting, security-audit, security-automation, security-tools
- **Open Issues**: 43

## README (excerpt)
>[!NOTE]
> **[📢 Sunsetting Router Mode (claude-code-router)`. →](https://github.com/KeygraphHQ/shannon/discussions/301)**

<div align="center">

<img src="./assets/github-banner.png" alt="Shannon — AI Pentester for Web Applications and APIs" width="100%">

# Shannon — AI Pentester by Keygraph

<a href="https://trendshift.io/repositories/15604" target="_blank"><img src="https://trendshift.io/api/badge/repositories/15604" alt="KeygraphHQ%2Fshannon | Trendshift" style="width: 250px; height: 55px;" width="250" height="55"/></a>

Shannon is an autonomous, white-box AI pentester for web applications and APIs. <br />
It analyzes your source code, identifies attack vectors, and executes real exploits to prove vulnerabilities before they reach production.

---

<a href="https://discord.gg/9ZqQPuhJB7"><img src="./assets/discord.png" height="40" alt="Join Discord"></a>
<a href="https://keygraph.io/"><img src="./assets/Keygraph_Button.png" height="40" alt="Visit Keygraph.io"></a>

---
</div>

## What is Shannon?

Shannon is an AI pentester developed by [Keygraph](https://keygraph.io). It performs white-box security testing of web applications and their underlying APIs by combining source code analysis with live exploitation.

Shannon analyzes your web application's source code to identify potential attack vectors, then uses browser automation and command-line tools to execute real exploits (injection attacks, authentication bypass, SSRF, XSS) against the running application and its APIs. Only vulnerabilities with a working proof-of-concept are included in the final report.

**Why Shannon Exists**

Thanks to tools like Claude Code and Cursor, your team ships code non-stop. But your penetration test? That happens once a year. This creates a *massive* security gap. For the other 364 days, you could be unknowingly shipping vulnerabilities to production.

Shannon closes that gap by providing on-demand, automated penetration testing that can run against every build or release.

## Shannon in Action

Shannon identified 20+ vulnerabilities in OWASP Juice Shop, including authentication bypass and database exfiltration. [Full report →](sample-reports/shannon-report-juice-shop.md)

![Demo](assets/shannon-action.gif)

## Features

- **Fully Autonomous Operation**: A single command launches the full pentest. Shannon handles 2FA/TOTP logins (including SSO), browser navigation, exploitation, and report generation without manual intervention.
- **Reproducible Proof-of-Concept Exploits**: The final report contains only proven, exploitable findings with copy-and-paste PoCs. Vulnerabilities that cannot be exploited are not reported.
- **OWASP Vulnerability Coverage**: Identifies and validates Injection, XSS, SSRF, and Broken Authentication/Authorization, with additional categories in development.
- **Code-Aware Dynamic Testing**: Analyzes source code to guide attack strategy, then validates findings with live browser and CLI-based exploits against the running application.
- **Integrated Security Tooling**: Leverages Nmap, Subfinder, WhatWeb, and Schemathesis during reconnaissance and discovery phases.
- **Parallel Processing**: Vulnerability analysis and exploitation phases run concurrently across all attack categories.

## Product Line

Shannon is developed by [Keygraph](https://keygraph.io) and available in two editions:

| Edition | License | Best For |
|---------|---------|----------|
| **Shannon Lite** | AGPL-3.0 | Local testing of your own applications. |
| **Shannon Pro** | Commercial | Organizations needing a single AppSec platform (SAST, SCA, secrets, business logic testing, autonomous pentesting) with CI/CD integration and self-hosted deployment. |

> **This repository contains Shannon Lite,** the core autonomous AI pentesting framework. **Shannon Pro** is Keygraph's all-in-one AppSec platform, combining SAST, SCA, secrets scanning, business logic security testing, and autonomous AI pentesting in a single correlated workflow. Every finding is val