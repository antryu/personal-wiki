<!-- GitHub Trending: Go | 34,526 stars | +32 today -->

# aquasecurity/trivy

> Find vulnerabilities, misconfigurations, secrets, SBOM in containers, Kubernetes, code repositories, clouds and more

## Repository Info
- **URL**: https://github.com/aquasecurity/trivy
- **Stars**: 34,527
- **Forks**: 263
- **Language**: Go
- **License**: Apache License 2.0
- **Created**: 2019-04-11
- **Updated**: 2026-04-15
- **Topics**: containers, devsecops, docker, go, golang, hacktoberfest, iac, infrastructure-as-code, kubernetes, misconfiguration, security, security-tools, vulnerability, vulnerability-detection, vulnerability-scanners
- **Open Issues**: 252

## README (excerpt)
<div align="center">
<img src="docs/imgs/logo.png" width="200">

[![GitHub Release][release-img]][release]
[![Test][test-img]][test]
[![Go Report Card][go-report-img]][go-report]
[![License: Apache-2.0][license-img]][license]
[![GitHub Downloads][github-downloads-img]][release]
![Docker Pulls][docker-pulls]

[📖 Documentation][docs]
</div>

Trivy ([pronunciation][pronunciation]) is a comprehensive and versatile security scanner.
Trivy has *scanners* that look for security issues, and *targets* where it can find those issues.

Targets (what Trivy can scan):

- Container Image
- Filesystem
- Git Repository (remote)
- Virtual Machine Image
- Kubernetes

Scanners (what Trivy can find there):

- OS packages and software dependencies in use (SBOM)
- Known vulnerabilities (CVEs)
- IaC issues and misconfigurations
- Sensitive information and secrets
- Software licenses

Trivy supports most popular programming languages, operating systems, and platforms. For a complete list, see the [Scanning Coverage] page.

To learn more, go to the [Trivy homepage][homepage] for feature highlights, or to the [Documentation site][docs] for detailed information.

## Quick Start

### Get Trivy

Trivy is available in most common distribution channels. The full list of installation options is available in the [Installation] page. Here are a few popular examples:

- `brew install trivy`
- `docker run aquasec/trivy`
- Download binary from <https://github.com/aquasecurity/trivy/releases/latest/>
- See [Installation] for more

Trivy is integrated with many popular platforms and applications. The complete list of integrations is available in the [Ecosystem] page. Here are a few popular examples:

- [GitHub Actions](https://github.com/aquasecurity/trivy-action)
- [Kubernetes operator](https://github.com/aquasecurity/trivy-operator)
- [VS Code plugin](https://github.com/aquasecurity/trivy-vscode-extension)
- See [Ecosystem] for more

### Canary builds
There are canary builds ([Docker Hub](https://hub.docker.com/r/aquasec/trivy/tags?page=1&name=canary), [GitHub](https://github.com/aquasecurity/trivy/pkgs/container/trivy/75776514?tag=canary), [ECR](https://gallery.ecr.aws/aquasecurity/trivy#canary) images and [binaries](https://github.com/aquasecurity/trivy/actions/workflows/canary.yaml)) generated with every push to the main branch.

Please be aware: canary builds might have critical bugs, so they are not recommended for use in production.

### General usage

```bash
trivy <target> [--scanners <scanner1,scanner2>] <subject>
```

Examples:

```bash
trivy image python:3.4-alpine
```

<details>
<summary>Result</summary>

https://user-images.githubusercontent.com/1161307/171013513-95f18734-233d-45d3-aaf5-d6aec687db0e.mov

</details>

```bash
trivy fs --scanners vuln,secret,misconfig myproject/
```

<details>
<summary>Result</summary>

https://user-images.githubusercontent.com/1161307/171013917-b1f37810-f434-465c-b01a-22de036bd9b3.mov

</details>

```bash
trivy k8s --report summary cluster
```

<details>
<summary>Result</summary>

![k8s summary](docs/imgs/trivy-k8s.png)

</details>

## FAQ

### How to pronounce the name "Trivy"?

`tri` is pronounced like **tri**gger, `vy` is pronounced like en**vy**.

## Want more? Check out Aqua

If you liked Trivy, you will love Aqua which builds on top of Trivy to provide even more enhanced capabilities for a complete security management offering.  
You can find a high level comparison table specific to Trivy users [here](https://trivy.dev/docs/latest/commercial/compare/).
In addition check out the <https://aquasec.com> website for more information about our products and services.
If you'd like to contact Aqua or request a demo, please use this form: <https://www.aquasec.com/demo>

## Community

Trivy is an [Aqua Security][aquasec] open source project.  
Learn about our open source work and portfolio [here][oss].  
Contact us about any matter by opening a GitHub Discussion [here][discussions]

Please ensure to abide by our [Code of