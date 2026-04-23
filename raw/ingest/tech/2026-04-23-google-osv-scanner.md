<!-- GitHub Trending: Go | 9,136 stars | +340 today -->

# google/osv-scanner

> Vulnerability scanner written in Go which uses the data provided by https://osv.dev

## Repository Info
- **URL**: https://github.com/google/osv-scanner
- **Stars**: 9,136
- **Forks**: 600
- **Language**: Go
- **License**: Apache License 2.0
- **Created**: 2022-11-14
- **Updated**: 2026-04-23
- **Topics**: scanner, security-audit, security-tools, vulnerability-scanner
- **Open Issues**: 108

## README (excerpt)
<picture>
    <source srcset="/docs/images/osv-scanner-full-logo-darkmode.svg"  media="(prefers-color-scheme: dark)">
    <!-- markdown-link-check-disable-next-line -->
    <img src="/docs/images/osv-scanner-full-logo-lightmode.svg">
</picture>

---

[![OpenSSF Scorecard](https://api.securityscorecards.dev/projects/github.com/google/osv-scanner/badge)](https://scorecard.dev/viewer/?uri=github.com/google/osv-scanner)
[![Go Report Card](https://goreportcard.com/badge/github.com/google/osv-scanner)](https://goreportcard.com/report/github.com/google/osv-scanner)
[![codecov](https://codecov.io/gh/google/osv-scanner/graph/badge.svg?token=C8IDVX9LP5)](https://codecov.io/gh/google/osv-scanner)
[![SLSA 3](https://slsa.dev/images/gh-badge-level3.svg)](https://slsa.dev)
[![GitHub Release](https://img.shields.io/github/v/release/google/osv-scanner)](https://github.com/google/osv-scanner/releases)

Use OSV-Scanner to find existing vulnerabilities affecting your project's dependencies.
OSV-Scanner provides an officially supported frontend to the [OSV database](https://osv.dev/) and CLI interface to [OSV-Scalibr](https://github.com/google/osv-scalibr) that connects a project’s list of dependencies with the vulnerabilities that affect them.

OSV-Scanner supports a wide range of project types, package managers and features, including but not limited to:

- **Languages:** C/C++, Dart, Elixir, Go, Java, Javascript, PHP, Python, R, Ruby, Rust.
- **Package Managers:** npm, pip, yarn, maven, go modules, cargo, gem, composer, nuget and others.
- **Operating Systems:** Detects vulnerabilities in OS packages on Linux systems.
- **Containers:** Scans container images for vulnerabilities in their base images and included packages.
- **Guided Remediation:** Provides recommendations for package version upgrades based on criteria such as dependency depth, minimum severity, fix strategy, and return on investment.

OSV-Scanner uses the extensible [OSV-Scalibr](https://github.com/google/osv-scalibr) library under the hood to provide this functionality. If a language or package manager is not supported currently, please file a [feature request.](https://github.com/google/osv-scanner/issues)

#### Underlying database

The underlying database, [OSV.dev](https://osv.dev/) has several benefits in comparison with closed source advisory databases and scanners:

- Covering most open source language and OS ecosystems (including [Git](https://osv.dev/list?q=&ecosystem=GIT)), it’s comprehensive.
- Each advisory comes from an open and authoritative source (e.g. [GitHub Security Advisories](https://github.com/github/advisory-database), [RustSec Advisory Database](https://github.com/rustsec/advisory-db), [Ubuntu security notices](https://github.com/canonical/ubuntu-security-notices/tree/main/osv))
- Anyone can suggest improvements to advisories, resulting in a very high quality database.
- The OSV format unambiguously stores information about affected versions in a machine-readable format that precisely maps onto a developer’s list of packages

The above all results in accurate and actionable vulnerability notifications, which reduces the time needed to resolve them. Check out [OSV.dev](https://osv.dev/) for more details!

## Basic installation

To install OSV-Scanner, please refer to the [installation section](https://google.github.io/osv-scanner/installation) of our documentation. OSV-Scanner releases can be found on the [releases page](https://github.com/google/osv-scanner/releases) of the GitHub repository. The recommended method is to download a prebuilt binary for your platform. Alternatively, you can use
`go install github.com/google/osv-scanner/v2/cmd/osv-scanner@latest` to build it from source.

## Key Features

For more information, please read our [detailed documentation](https://google.github.io/osv-scanner) to learn how to use OSV-Scanner. For detailed information about each feature, click their titles in this README.

Please note: These are the instructions f