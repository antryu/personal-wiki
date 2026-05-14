<!-- GitHub Trending: TypeScript | 9,346 stars | +52 today -->

# OpenCTI-Platform/opencti

> Open Cyber Threat Intelligence Platform

## Repository Info
- **URL**: https://github.com/OpenCTI-Platform/opencti
- **Stars**: 9,346
- **Forks**: 1,340
- **Language**: TypeScript
- **License**: Other
- **Created**: 2018-12-17
- **Updated**: 2026-05-14
- **Topics**: cti, cyber, cybersecurity, intelligence, osint, security, threat-intelligence
- **Open Issues**: 1888

## README (excerpt)
<h1 align="center">
  <a href="https://opencti.io"><img src="./.github/img/logo_opencti.png" alt="OpenCTI"></a>
</h1>
<p align="center">
  <a href="https://opencti.io" alt="Website"><img src="https://img.shields.io/badge/website-opencti.io-blue.svg" /></a>
  <a href="https://docs.opencti.io" alt="Documentation"><img src="https://img.shields.io/badge/documentation-latest-orange.svg" /></a>
  <a href="https://community.filigran.io" alt="Slack"><img src="https://img.shields.io/badge/slack-3K%2B%20members-4A154B" /></a>
  <a href="https://drone.filigran.io/OpenCTI-Platform/opencti"><img src="https://drone.filigran.io/api/badges/OpenCTI-Platform/opencti/status.svg" /></a>
  <a href="https://codecov.io/gh/OpenCTI-Platform/opencti"><img src="https://codecov.io/gh/OpenCTI-Platform/opencti/graph/badge.svg" /></a>
  <a href="https://deepscan.io/dashboard#view=project&tid=4926&pid=6716&bid=57311"><img src="https://deepscan.io/api/teams/4926/projects/6716/branches/57311/badge/grade.svg" alt="DeepScan grade"></a>
  <a href="https://renovatebot.com"><img src="https://img.shields.io/badge/renovate-enabled-brightgreen.svg" alt="DeepScan grade"></a>
  <a href="https://hub.docker.com/u/opencti" alt="Docker pulls"><img src="https://img.shields.io/docker/pulls/opencti/platform" /></a>
</p>

## Introduction

OpenCTI is an open source platform allowing organizations to manage their cyber threat intelligence knowledge and observables. It has been created in order to structure, store, organize and visualize technical and non-technical information about cyber threats.

The structuration of the data is performed using a knowledge schema based on the [STIX2 standards](https://oasis-open.github.io/cti-documentation/). It has been designed as a modern web application including a [GraphQL API](https://graphql.org) and an UX oriented frontend. Also, OpenCTI can be integrated with other tools and applications such as [MISP](https://github.com/MISP/MISP), [TheHive](https://github.com/TheHive-Project/TheHive), [MITRE ATT&CK](https://github.com/mitre/cti), etc.

![Screenshot](./.github/img/screenshot.png "Screenshot")

## Objective

The goal is to create a comprehensive tool allowing users to capitalize technical (such as TTPs and observables) and non-technical information (such as suggested attribution, victimology etc.) while linking each piece of information to its primary source (a report, a MISP event, etc.), with features such as links between each information, first and last seen dates, levels of confidence, etc. The tool is able to use the [MITRE ATT&CK framework](https://attack.mitre.org) (through a [dedicated connector](https://github.com/OpenCTI-Platform/connectors)) to help structure the data. The user can also choose to implement their own datasets.

Once data has been capitalized and processed by the analysts within OpenCTI, new relations may be inferred from existing ones to facilitate the understanding and the representation of this information. This allows the user to extract and leverage meaningful knowledge from the raw data.

OpenCTI not only allows [imports](https://docs.opencti.io/latest/usage/import-automated/) but also [exports of data](https://docs.opencti.io/latest/usage/feeds/) under different formats (CSV, STIX2 bundles, etc.). [Connectors](https://hub.filigran.io/cybersecurity-solutions/open-cti-integrations) are currently developed to accelerate interactions between the tool and other platforms.

## Editions of the platform

OpenCTI platform has 2 different editions: Community (CE) and Enterprise (EE). The purpose of the Enterprise Edition is to provide [additional and powerful features](https://filigran.io/offering/subscribe) which require specific investments in research and development. You can enable the Enterprise Edition directly in the settings of the platform.

* OpenCTI Community Edition, licensed under the [Apache 2, Version 2.0 license](LICENSE).
* OpenCTI Enterprise Edition, licensed under the [Enterprise Edition licens