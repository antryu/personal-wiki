# Apple Container Tool

> A tool for creating and running Linux containers using lightweight virtual machines on Macs, written in Swift and optimized for Apple silicon. It leverages OCI-compatible container images, enabling interoperability with standard registries and other OCI-compatible tools.  
> Last updated: 2026-04-13

## Overview
The **Apple Container Tool** (`container`) provides a streamlined way to manage Linux containers as lightweight virtual machines on Apple silicon Macs. Developed by Apple and written in Swift, it integrates with macOS 26's enhanced virtualization and networking features. The tool supports OCI (Open Container Initiative) standards, allowing users to pull, build, and push container images to standard registries.

### Repository Information
- **Stars**: 25,890  
- **Forks**: 726  
- **Language**: Swift  
- **License**: Apache License 2.0  
- **Created**: 2025-05-30  
- **Updated**: 2026-04-13  
- **Open Issues**: 252  

### Key Features
- **OCI Compatibility**: Works with standard container registries and images.  
- **Apple Silicon Optimization**: Leverages macOS 26's virtualization enhancements for performance.  
- **Swift-Based**: Built using Apple's Containerization Swift package for low-level container management.  
- **User-Friendly CLI**: Includes commands for system startup, upgrades, and uninstallation.  

### Installation & Usage
- **Requirements**: Apple silicon Mac, macOS 26+.  
- **Installation**: Download a signed installer from [GitHub releases](https://github.com/apple/container/releases).  
- **Start Service**:  
  ```bash
  container system start
  ```
- **Upgrade/Downgrade**: Use `update-container.sh` script (e.g., `/usr/local/bin/update-container.sh -v 0.3.0`).  
- **Uninstall**: Use `uninstall-container.sh` with `-d` (remove data) or `-k` (keep data).  

### Getting Started
- Follow the [tutorial](./docs/tutorial.md) to build and run a web server image.  
- Explore [command reference](./docs/command-reference.md) and [technical overview](./docs/technical-overview.md).  

## Key Points
- Designed for **Apple silicon Macs** with macOS 26+ support.  
- Uses **Swift** and the **Containerization** package for container lifecycle management.  
- Supports **OCI standards** for cross-platform image compatibility.  
- Active development with potential breaking changes in minor versions (pre-1.0.0).  

## Sources
- [GitHub](https://github.com/apple/container)
- [원본](raw/ingest/tech/2026-04-13-apple-container-tool.md)