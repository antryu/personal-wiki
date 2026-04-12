<!-- GitHub Trending: Python | 156,419 stars | +215 today -->

# yt-dlp/yt-dlp

> A feature-rich command-line audio/video downloader

## Repository Info
- **URL**: https://github.com/yt-dlp/yt-dlp
- **Stars**: 156,420
- **Forks**: 12,864
- **Language**: Python
- **License**: The Unlicense
- **Created**: 2020-10-26
- **Updated**: 2026-04-12
- **Topics**: cli, downloader, python, sponsorblock, youtube-dl, youtube-downloader, yt-dlp
- **Open Issues**: 2463

## README (excerpt)
<!-- MANPAGE: BEGIN EXCLUDED SECTION -->
<div align="center">

[![YT-DLP](https://raw.githubusercontent.com/yt-dlp/yt-dlp/master/.github/banner.svg)](#readme)

[![Release version](https://img.shields.io/github/v/release/yt-dlp/yt-dlp?color=brightgreen&label=Download&style=for-the-badge)](#installation "Installation")
[![PyPI](https://img.shields.io/badge/-PyPI-blue.svg?logo=pypi&labelColor=555555&style=for-the-badge)](https://pypi.org/project/yt-dlp "PyPI")
[![Donate](https://img.shields.io/badge/_-Donate-red.svg?logo=githubsponsors&labelColor=555555&style=for-the-badge)](Maintainers.md#maintainers "Donate")
[![Discord](https://img.shields.io/discord/807245652072857610?color=blue&labelColor=555555&label=&logo=discord&style=for-the-badge)](https://discord.gg/H5MNcFW63r "Discord")
[![Supported Sites](https://img.shields.io/badge/-Supported_Sites-brightgreen.svg?style=for-the-badge)](supportedsites.md "Supported Sites")
[![License: Unlicense](https://img.shields.io/badge/-Unlicense-blue.svg?style=for-the-badge)](LICENSE "License")
[![CI Status](https://img.shields.io/github/actions/workflow/status/yt-dlp/yt-dlp/core.yml?branch=master&label=Tests&style=for-the-badge)](https://github.com/yt-dlp/yt-dlp/actions "CI Status")
[![Commits](https://img.shields.io/github/commit-activity/m/yt-dlp/yt-dlp?label=commits&style=for-the-badge)](https://github.com/yt-dlp/yt-dlp/commits "Commit History")
[![Last Commit](https://img.shields.io/github/last-commit/yt-dlp/yt-dlp/master?label=&style=for-the-badge&display_timestamp=committer)](https://github.com/yt-dlp/yt-dlp/pulse/monthly "Last activity")

</div>
<!-- MANPAGE: END EXCLUDED SECTION -->

yt-dlp is a feature-rich command-line audio/video downloader with support for [thousands of sites](supportedsites.md). The project is a fork of [youtube-dl](https://github.com/ytdl-org/youtube-dl) based on the now inactive [youtube-dlc](https://github.com/blackjack4494/yt-dlc).

<!-- MANPAGE: MOVE "USAGE AND OPTIONS" SECTION HERE -->

<!-- MANPAGE: BEGIN EXCLUDED SECTION -->
* [INSTALLATION](#installation)
    * [Detailed instructions](https://github.com/yt-dlp/yt-dlp/wiki/Installation)
    * [Release Files](#release-files)
    * [Update](#update)
    * [Dependencies](#dependencies)
    * [Compile](#compile)
* [USAGE AND OPTIONS](#usage-and-options)
    * [General Options](#general-options)
    * [Network Options](#network-options)
    * [Geo-restriction](#geo-restriction)
    * [Video Selection](#video-selection)
    * [Download Options](#download-options)
    * [Filesystem Options](#filesystem-options)
    * [Thumbnail Options](#thumbnail-options)
    * [Internet Shortcut Options](#internet-shortcut-options)
    * [Verbosity and Simulation Options](#verbosity-and-simulation-options)
    * [Workarounds](#workarounds)
    * [Video Format Options](#video-format-options)
    * [Subtitle Options](#subtitle-options)
    * [Authentication Options](#authentication-options)
    * [Post-processing Options](#post-processing-options)
    * [SponsorBlock Options](#sponsorblock-options)
    * [Extractor Options](#extractor-options)
    * [Preset Aliases](#preset-aliases)
* [CONFIGURATION](#configuration)
    * [Configuration file encoding](#configuration-file-encoding)
    * [Authentication with netrc](#authentication-with-netrc)
    * [Notes about environment variables](#notes-about-environment-variables)
* [OUTPUT TEMPLATE](#output-template)
    * [Output template examples](#output-template-examples)
* [FORMAT SELECTION](#format-selection)
    * [Filtering Formats](#filtering-formats)
    * [Sorting Formats](#sorting-formats)
    * [Format Selection examples](#format-selection-examples)
* [MODIFYING METADATA](#modifying-metadata)
    * [Modifying metadata examples](#modifying-metadata-examples)
* [EXTRACTOR ARGUMENTS](#extractor-arguments)
* [PLUGINS](#plugins)
    * [Installing Plugins](#installing-plugins)
    * [Developing Plugins](#developing-plugins)
* [EMBEDDING YT-DLP](#embedding-yt-dlp)
    * [Embedding exa