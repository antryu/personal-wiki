<!-- GitHub Trending: Go | 31,948 stars | +62 today -->

# seaweedfs/seaweedfs

> SeaweedFS is a distributed storage system for object storage (S3), file systems, and Iceberg tables, designed to handle billions of files with O(1) disk access and effortless horizontal scaling.

## Repository Info
- **URL**: https://github.com/seaweedfs/seaweedfs
- **Stars**: 31,948
- **Forks**: 2,801
- **Language**: Go
- **License**: Apache License 2.0
- **Created**: 2014-07-14
- **Updated**: 2026-04-29
- **Topics**: blob-storage, cloud-drive, distributed-file-system, distributed-storage, distributed-systems, erasure-coding, fuse, hadoop-hdfs, hdfs, kubernetes, object-storage, posix, replication, s3, s3-storage, seaweedfs, tiered-file-system
- **Open Issues**: 723

## README (excerpt)
# SeaweedFS


[![Slack](https://img.shields.io/badge/slack-purple)](https://join.slack.com/t/seaweedfs/shared_invite/enQtMzI4MTMwMjU2MzA3LTEyYzZmZWYzOGQ3MDJlZWMzYmI0OTE4OTJiZjJjODBmMzUxNmYwODg0YjY3MTNlMjBmZDQ1NzQ5NDJhZWI2ZmY)
[![Twitter](https://img.shields.io/twitter/follow/seaweedfs.svg?style=social&label=Follow)](https://twitter.com/intent/follow?screen_name=seaweedfs)
[![Build Status](https://img.shields.io/github/actions/workflow/status/seaweedfs/seaweedfs/go.yml)](https://github.com/seaweedfs/seaweedfs/actions/workflows/go.yml)
[![GoDoc](https://godoc.org/github.com/seaweedfs/seaweedfs/weed?status.svg)](https://godoc.org/github.com/seaweedfs/seaweedfs/weed)
[![Wiki](https://img.shields.io/badge/docs-wiki-blue.svg)](https://github.com/seaweedfs/seaweedfs/wiki)
[![Docker Pulls](https://img.shields.io/docker/pulls/chrislusf/seaweedfs?maxAge=4800)](https://hub.docker.com/r/chrislusf/seaweedfs/)
[![SeaweedFS on Maven Central](https://img.shields.io/maven-central/v/com.github.chrislusf/seaweedfs-client)](https://search.maven.org/search?q=g:com.github.chrislusf)
[![Artifact Hub](https://img.shields.io/endpoint?url=https://artifacthub.io/badge/repository/seaweedfs)](https://artifacthub.io/packages/search?repo=seaweedfs)

![SeaweedFS Logo](https://raw.githubusercontent.com/seaweedfs/seaweedfs/master/note/seaweedfs.png)

<h2 align="center"><a href="https://www.patreon.com/seaweedfs">Sponsor SeaweedFS via Patreon</a></h2>

SeaweedFS is an independent Apache-licensed open source project with its ongoing development made
possible entirely thanks to the support of these awesome [backers](https://github.com/seaweedfs/seaweedfs/blob/master/backers.md).
If you'd like to grow SeaweedFS even stronger, please consider joining our
<a href="https://www.patreon.com/seaweedfs">sponsors on Patreon</a>.

Your support will be really appreciated by me and other supporters!

<!--
<h4 align="center">Platinum</h4>

<p align="center">
  <a href="" target="_blank">
    Add your name or icon here
  </a>
</p>
-->

### Gold Sponsors
[![nodion](https://raw.githubusercontent.com/seaweedfs/seaweedfs/master/note/sponsor_nodion.png)](https://www.nodion.com)
[![piknik](https://raw.githubusercontent.com/seaweedfs/seaweedfs/master/note/piknik.png)](https://www.piknik.com)
[![keepsec](https://raw.githubusercontent.com/seaweedfs/seaweedfs/master/note/keepsec.png)](https://www.keepsec.ca)

---

- [Download Binaries for different platforms](https://github.com/seaweedfs/seaweedfs/releases/latest)
- [SeaweedFS on Slack](https://join.slack.com/t/seaweedfs/shared_invite/enQtMzI4MTMwMjU2MzA3LTEyYzZmZWYzOGQ3MDJlZWMzYmI0OTE4OTJiZjJjODBmMzUxNmYwODg0YjY3MTNlMjBmZDQ1NzQ5NDJhZWI2ZmY)
- [SeaweedFS on Twitter](https://twitter.com/SeaweedFS)
- [SeaweedFS on Telegram](https://t.me/Seaweedfs) 
- [SeaweedFS on Reddit](https://www.reddit.com/r/SeaweedFS/)
- [SeaweedFS Mailing List](https://groups.google.com/d/forum/seaweedfs)
- [Wiki Documentation](https://github.com/seaweedfs/seaweedfs/wiki)
- [SeaweedFS White Paper](https://github.com/seaweedfs/seaweedfs/wiki/SeaweedFS_Architecture.pdf)
- [SeaweedFS Introduction Slides 2025.5](https://docs.google.com/presentation/d/1tdkp45J01oRV68dIm4yoTXKJDof-EhainlA0LMXexQE/edit?usp=sharing)
- [SeaweedFS Introduction Slides 2021.5](https://docs.google.com/presentation/d/1DcxKWlINc-HNCjhYeERkpGXXm6nTCES8mi2W5G0Z4Ts/edit?usp=sharing)
- [SeaweedFS Introduction Slides 2019.3](https://www.slideshare.net/chrislusf/seaweedfs-introduction)

Table of Contents
=================

* [Quick Start](#quick-start)
    * [Quick Start with weed mini](#quick-start-with-weed-mini)
    * [Quick Start for S3 API on Docker](#quick-start-for-s3-api-on-docker)
    * [Quick Start with Single Binary](#quick-start-with-single-binary)
* [Introduction](#introduction)
* [Features](#features)
    * [Additional Features](#additional-features)
    * [Filer Features](#filer-features)
* [Example: Using Seaweed Object Store](#example-using-seaweed-object-store)
* [Architecture](#objec