<!-- GitHub Trending: Go | 13,146 stars | +10 today -->

# kopia/kopia

> Cross-platform backup tool for Windows, macOS & Linux with fast, incremental backups, client-side end-to-end encryption, compression and data deduplication. CLI and GUI included.

## Repository Info
- **URL**: https://github.com/kopia/kopia
- **Stars**: 13,146
- **Forks**: 642
- **Language**: Go
- **License**: Apache License 2.0
- **Created**: 2015-12-19
- **Updated**: 2026-05-04
- **Topics**: backup, cloud, deduplication, encryption, google-cloud-storage
- **Open Issues**: 788

## README (excerpt)
Kopia
=====

![Kopia](icons/kopia.svg)
[![Build Status](https://github.com/kopia/kopia/workflows/Build/badge.svg)](https://github.com/kopia/kopia/actions?query=workflow%3ABuild)
[![GoDoc](https://godoc.org/github.com/kopia/kopia/repo?status.svg)](https://godoc.org/github.com/kopia/kopia/repo)
[![Coverage Status](https://codecov.io/gh/kopia/kopia/branch/master/graph/badge.svg?token=CRK4RMRFSH)](https://codecov.io/gh/kopia/kopia)[![Go Report Card](https://goreportcard.com/badge/github.com/kopia/kopia)](https://goreportcard.com/report/github.com/kopia/kopia)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](CODE_OF_CONDUCT.md)
[![Docker Pulls](https://img.shields.io/docker/pulls/kopia/kopia)](https://hub.docker.com/r/kopia/kopia/tags?page=1&ordering=name)
[![Downloads](https://img.shields.io/github/downloads/kopia/kopia/total.svg)](https://github.com/kopia/kopia/releases)
[![Gurubase](https://img.shields.io/badge/Gurubase-Ask%20Kopia%20Guru-006BFF)](https://gurubase.io/g/kopia)

> _n._
>
> 1. _[copy, replica](https://en.wikipedia.org/wiki/Replica) (Polish)_
> 2. _[lance, spear](https://en.wikipedia.org/wiki/Kopia)_
> 3. _[fast and secure backup tool](https://kopia.io)_


Kopia is a fast and secure open-source backup/restore tool that allows you to create [encrypted](https://kopia.io/docs/features/#user-controlled-end-to-end-encryption) snapshots of your data and save the snapshots to [remote or cloud storage](https://kopia.io/docs/features/#save-snapshots-to-cloud-network-or-local-storage) of your choice, [to network-attached storage or server](https://kopia.io/docs/features/#save-snapshots-to-cloud-network-or-local-storage), or [locally on your machine](https://kopia.io/docs/features/#save-snapshots-to-cloud-network-or-local-storage). Kopia does not 'image' your whole machine. Rather, Kopia allows you to backup/restore any and all files/directories that you deem are important or critical.

Kopia has both [CLI (command-line interface)](https://kopia.io/docs/features/#both-command-line-and-graphical-user-interfaces) and [GUI (graphical user interface)](https://kopia.io/docs/features/#both-command-line-and-graphical-user-interfaces) versions, making it the perfect tool for both advanced and regular users. You can read more about Kopia's unique [features](https://kopia.io/docs/features/) -- which include [compression](https://kopia.io/docs/features/#compression), [deduplication](https://kopia.io/docs/features/#backup-files-and-directories-using-snapshots), [user-controlled end-to-end encryption](https://kopia.io/docs/features/#user-controlled-end-to-end-encryption), and [error correction](https://kopia.io/docs/features/#error-correction) -- to get a better understanding of how Kopia works.

When ready, head to the [installation](https://kopia.io/docs/installation/) page to download and install Kopia, and make sure to read the [Getting Started Guide](https://kopia.io/docs/getting-started/) for a step-by-step walkthrough of how to use Kopia.

Pick the Cloud Storage Provider You Want
---

Kopia supports saving your [encrypted](https://kopia.io/docs/features/#user-controlled-end-to-end-encryption) and [compressed](https://kopia.io/docs/features/#compression) snapshots to all of the following [storage locations](https://kopia.io/docs/features/#save-snapshots-to-cloud-network-or-local-storage):

* **Amazon S3** and any **cloud storage that is compatible with S3**
* **Azure Blob Storage**
* **Backblaze B2**
* **Google Cloud Storage**
* Any remote server or cloud storage that supports **WebDAV**
* Any remote server or cloud storage that supports **SFTP**
* Some of the cloud storage options supported by **Rclone**
  * Requires you to download and setup Rclone in addition to Kopia, but after that Kopia manages/runs Rclone for you
  * Rclone support is experimental: not all the cloud storage products supported by Rclone have been tested to work with Kopia, and some may not work with Kopia;