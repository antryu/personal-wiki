# Syft

> A CLI tool and Go library for generating Software Bill of Materials (SBOMs) from container images and filesystems. Notable for seamless integration with vulnerability scanners like Grype.  
> Last updated: 2026-04-14

## Overview

### Repository Info
- **URL**: [GitHub](https://github.com/anchore/syft)
- **Stars**: 8,706
- **Forks**: 814
- **Language**: Go
- **License**: Apache License 2.0
- **Created**: 2020-05-07
- **Updated**: 2026-04-14
- **Topics**: containers, cyclonedx, docker, go, golang, hacktoberfest, oci, sbom, spdx, static-analysis, tool
- **Open Issues**: 571

### Features
- Generates SBOMs for **container images**, **filesystems**, and **archives**
- Supports **dozens of packaging ecosystems** (Alpine, Debian, RPM, Go, Python, Java, JavaScript, Ruby, Rust, PHP, .NET, etc.)
- Compatible with **OCI, Docker, and Singularity** image formats
- Integrates with [Grype](https://github.com/anchore/grype) for vulnerability scanning
- Outputs SBOMs in **CycloneDX**, **SPDX**, **Syft JSON**, and other formats
- Enables **signed SBOM attestations** using the [in-toto specification](https://github.com/in-toto/attestation)

### Installation
```bash
curl -sSfL https://get.anchore.io/syft | sudo sh -s -- -b /usr/local/bin
```
> Additional installation methods: [Homebrew](https://oss.anchore.com/docs/installation/syft/), Docker, Scoop, Chocolatey, Nix, etc.

### Usage Examples
- Scan a container image:  
  ```bash
  syft alpine:latest
  ```
- Scan a directory:  
  ```bash
  syft ./my-project
  ```
- Generate SBOMs:  
  ```bash
  syft <image> -o cyclonedx-json
  syft <image> -o spdx-json=./spdx.json -o cyclonedx-json=./cdx.json
  ```

> [Getting Started Guide](https://oss.anchore.com/docs/guides/sbom/getting-started/) | [CLI Documentation](https://oss.anchore.com/docs/reference/syft/cli/)

---

## Key Points
- Generates standardized SBOMs for containerized and filesystem-based applications
- Supports **over 20 packaging formats** and **multiple output standards** (CycloneDX, SPDX)
- Designed for integration with vulnerability scanners like [Grype](https://github.com/anchore/grype)
- Actively maintained with 571 open issues and 814 forks

## Sources
- [GitHub](https://github.com/anchore/syft)
- [원본](raw/ingest/tech/2026-04-14-syft.md)