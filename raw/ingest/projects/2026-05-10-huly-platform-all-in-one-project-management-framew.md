<!-- GitHub Trending: TypeScript | 25,845 stars | +243 today -->

# hcengineering/platform

> Huly — All-in-One Project Management Platform (alternative to Linear, Jira, Slack, Notion, Motion)

## Repository Info
- **URL**: https://github.com/hcengineering/platform
- **Stars**: 25,845
- **Forks**: 1,898
- **Language**: TypeScript
- **License**: Eclipse Public License 2.0
- **Created**: 2021-08-02
- **Updated**: 2026-05-10
- **Topics**: applicant-tracking-system, chat-application, crm, crm-platform, hrms, human-resources, issue-management, issue-tracker, jira-alternative, project-management, qms, support, team-management, team-platform, wiki
- **Open Issues**: 801

## README (excerpt)
# Huly Platform

[![X (formerly Twitter) Follow](https://img.shields.io/twitter/follow/huly_io?style=for-the-badge)](https://x.com/huly_io)
![GitHub License](https://img.shields.io/github/license/hcengineering/platform?style=for-the-badge)

⭐️ Your star shines on us. Star us on GitHub!

## About

The Huly Platform is a robust framework designed to accelerate the development of business applications, such as CRM systems.
This repository includes several applications, such as Chat, Project Management, CRM, HRM, and ATS.
Various teams are building products on top of the Platform, including [Huly](https://huly.io) and [TraceX](https://tracex.co).

![Huly](https://repository-images.githubusercontent.com/392073243/6d27d5cc-38cd-4d88-affe-bb88b393180c)

## Self-Hosting

If you're primarily interested in self-hosting Huly without the intention to modify or contribute to its development, please use [huly-selfhost](https://github.com/hcengineering/huly-selfhost).
This project offers a convenient method to host Huly using `docker`, designed for ease of use and quick setup. Explore this option to effortlessly enjoy Huly on your own server.

## Activity

![Alt](https://repobeats.axiom.co/api/embed/c42c99e21691fa60ea61b5cdf11c2e0647621534.svg 'Repobeats analytics image')

## API Client

If you want to interact with Huly programmatically, check out our [API Client](https://github.com/hcengineering/huly.core/tree/main/packages/api-client) documentation. The API client provides a typed interface for all Huly operations and can be used to build integrations and custom applications.

You can find API usage examples in the [Huly examples](https://github.com/hcengineering/huly-examples) repository.

## Changelog

For detailed information about changes, improvements, and bug fixes in each version, see our [Changelog](./changelog.md).

## Versions

The Huly Platform uses two types of version tags to distinguish between production-ready and development releases:

- **Production Versions (`v*`)** - Stable releases for end users
  - Example: `v0.7.310`, `v0.7.307`, `v0.6.501`
  - These versions are recommended for production deployments
  - Suitable for self-hosted installations
  - Published with release notes on [GitHub Releases](https://github.com/hcengineering/platform/releases)

- **Development Versions (`s*`)** - Pre-release builds for developers
  - Example: `s0.7.313`, `s0.7.292`, `s0.7.288`
  - Used for development and testing purposes
  - May contain experimental features or bug fixes
  - Not recommended for production use

## Architecture

For detailed information about the platform architecture, services, and their interactions, see our [Architecture Overview](./ARCHITECTURE_OVERVIEW.md).

## Table of Contents

- [Huly Platform](#huly-platform)
  - [About](#about)
  - [Self-Hosting](#self-hosting)
  - [Activity](#activity)
  - [API Client](#api-client)
  - [Changelog](#changelog)
  - [Versions](#versions)
  - [Architecture](#architecture)
  - [Table of Contents](#table-of-contents)
  - [Pre-requisites](#pre-requisites)
  - [Verification](#verification)
  - [Branches \& Contributing](#branches--contributing)
  - [Setup dev environment](#setup-dev-environment)
  - [Fast start](#fast-start)
  - [Installation](#installation)
  - [Build and run](#build-and-run)
  - [Run in development mode](#run-in-development-mode)
  - [Update project structure and database](#update-project-structure-and-database)
  - [Troubleshooting](#troubleshooting)
  - [Build \& Watch](#build--watch)
  - [Tests](#tests)
    - [Unit tests](#unit-tests)
    - [UI tests](#ui-tests)
  - [Package publishing](#package-publishing)
  - [Additional testing](#additional-testing)
  - [WSL build guide](#wsl-build-guide)

## Pre-requisites

- Before proceeding, ensure that your system meets the following requirements:
  - [Node.js](https://nodejs.org/en/download/) (v20.11.0 is required)
  - [Docker](https://docs.docker.com/get-docker/)
  - [Docker Compose](https://docs.docker.com/compo