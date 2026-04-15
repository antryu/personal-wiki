# Trivy: Comprehensive Security Scanner

> Trivy is a versatile security scanner that detects vulnerabilities, misconfigurations, secrets, and generates SBOMs across containers, Kubernetes, code repositories, and more. With over 34k stars and integrations into major platforms, it's a critical tool for DevSecOps.  
> Last updated: 2026-04-15

## Overview
Trivy is a security tool developed by Aqua Security for identifying security issues in software, infrastructure, and cloud environments. It operates by scanning **targets** (e.g., container images, filesystems, Kubernetes clusters) using **scanners** to detect vulnerabilities, misconfigurations, secrets, and license violations.  

### Repository Info
- **URL**: [GitHub](https://github.com/aquasecurity/trivy)
- **Stars**: 34,527
- **Forks**: 263
- **Language**: Go
- **License**: [Apache License 2.0](https://github.com/aquasecurity/trivy/blob/v0.71.0/LICENSE)
- **Created**: 2019-04-11
- **Updated**: 2026-04-15
- **Topics**: containers, devsecops, docker, go, golang, hacktoberfest, iac, infrastructure-as-code, kubernetes, misconfiguration, security, security-tools, vulnerability, vulnerability-detection, vulnerability-scanners
- **Open Issues**: 252

### Key Features
- **Targets**: Container images, filesystems, Git repositories, VMs, Kubernetes.
- **Scanners**: Vulnerability detection (CVEs), IaC/misconfiguration checks, secret scanning, license compliance, and SBOM generation.
- **Supported Platforms**: Integrates with GitHub Actions, Kubernetes operators, VS Code plugins, and more.

### Installation & Usage
Trivy can be installed via:
- `brew install trivy`
- Docker: `docker run aquasec/trivy`
- Binaries from [GitHub Releases](https://github.com/aquasecurity/trivy/releases/latest/)

Example commands:
```bash
trivy image python:3.4-alpine
trivy fs --scanners vuln,secret,misconfig myproject/
trivy k8s --report summary cluster
```

## Key Points
- **Comprehensive Scanning**: Detects vulnerabilities, secrets, misconfigurations, and license issues across diverse environments.
- **Multi-Platform Support**: Scans containers, Kubernetes, filesystems, VMs, and code repositories.
- **Extensive Integrations**: Works with GitHub Actions, Kubernetes operators, and VS Code plugins for DevSecOps workflows.
- **Active Community**: Over 34k stars and 252 open issues on GitHub, with regular updates and canary builds.
- **Open Source**: Licensed under Apache 2.0, with commercial support available through Aqua Security.

## Sources
- [GitHub](https://github.com/aquasecurity/trivy)
- [원본](raw/ingest/tech/2026-04-15-trivy-comprehensive-security-scanner.md)