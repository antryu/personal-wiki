<!-- GitHub Trending: Go | 13,530 stars | +14 today -->

# juicedata/juicefs

> JuiceFS is a distributed POSIX file system built on top of Redis and S3.

## Repository Info
- **URL**: https://github.com/juicedata/juicefs
- **Stars**: 13,530
- **Forks**: 1,200
- **Language**: Go
- **License**: Apache License 2.0
- **Created**: 2021-01-08
- **Updated**: 2026-05-01
- **Topics**: bigdata, cloud-native, distributed-systems, filesystem, go, golang, hdfs, object-storage, posix, redis, s3, storage
- **Open Issues**: 161

## README (excerpt)
<p align="center"><a href="https://github.com/juicedata/juicefs"><img alt="JuiceFS Logo" src="docs/en/images/juicefs-logo-new.svg" width="50%" /></a></p>
<p align="center">
    <a href="https://github.com/juicedata/juicefs/releases/latest"><img alt="Latest Stable Release" src="https://img.shields.io/github/v/release/juicedata/juicefs" /></a>
    <a href="https://github.com/juicedata/juicefs/actions/workflows/unittests.yml"><img alt="GitHub Workflow Status" src="https://img.shields.io/github/actions/workflow/status/juicedata/juicefs/unittests.yml?branch=main&label=Unit%20Testing" /></a>
    <a href="https://github.com/juicedata/juicefs/actions/workflows/integrationtests.yml"><img alt="GitHub Workflow Status" src="https://img.shields.io/github/actions/workflow/status/juicedata/juicefs/integrationtests.yml?branch=main&label=Integration%20Testing" /></a>
    <a href="https://goreportcard.com/report/github.com/juicedata/juicefs"><img alt="Go Report" src="https://goreportcard.com/badge/github.com/juicedata/juicefs" /></a>
    <a href="https://juicefs.com/docs/community/introduction"><img alt="English doc" src="https://img.shields.io/badge/docs-Doc%20Center-brightgreen" /></a>
    <a href="https://go.juicefs.com/discord"><img alt="Join Discord" src="https://badgen.net/badge/Discord/Join%20JuiceFS/0abd59?icon=discord" /></a>
</p>

**JuiceFS** is a high-performance [POSIX](https://en.wikipedia.org/wiki/POSIX) file system released under Apache License 2.0, particularly designed for the cloud-native environment. The data, stored via JuiceFS, will be persisted in Object Storage _(e.g. Amazon S3)_, and the corresponding metadata can be persisted in various compatible database engines such as Redis, MySQL, and TiKV based on the scenarios and requirements.

With JuiceFS, massive cloud storage can be directly connected to big data, machine learning, artificial intelligence, and various application platforms in production environments. Without modifying code, the massive cloud storage can be used as efficiently as local storage.

📖 **Document**: [Quick Start Guide](https://juicefs.com/docs/community/quick_start_guide)

## Highlighted Features

1. **Fully POSIX-compatible**: Use as a local file system, seamlessly docking with existing applications without breaking business workflow.
2. **Fully Hadoop-compatible**: JuiceFS' [Hadoop Java SDK](https://juicefs.com/docs/community/hadoop_java_sdk) is compatible with Hadoop 2.x and Hadoop 3.x as well as a variety of components in the Hadoop ecosystems.
3. **S3-compatible**:  JuiceFS' [S3 Gateway](https://juicefs.com/docs/community/s3_gateway) provides an S3-compatible interface.
4. **Cloud Native**: A [Kubernetes CSI Driver](https://juicefs.com/docs/community/how_to_use_on_kubernetes) is provided for easily using JuiceFS in Kubernetes.
5. **Shareable**: JuiceFS is a shared file storage that can be read and written by thousands of clients.
6. **Strong Consistency**: The confirmed modification will be immediately visible on all the servers mounted with the same file system.
7. **Outstanding Performance**: The latency can be as low as a few milliseconds, and the throughput can be expanded nearly unlimitedly _(depending on the size of the Object Storage)_. [Test results](https://juicefs.com/docs/community/benchmark)
8. **Data Encryption**: Supports data encryption in transit and at rest (please refer to [the guide](https://juicefs.com/docs/community/security/encrypt) for more information).
9. **Global File Locks**: JuiceFS supports both BSD locks (flock) and POSIX record locks (fcntl).
10. **Data Compression**: JuiceFS supports [LZ4](https://lz4.github.io/lz4) or [Zstandard](https://facebook.github.io/zstd) to compress all your data.

---

[Architecture](#architecture) | [Getting Started](#getting-started) | [Advanced Topics](#advanced-topics) | [POSIX Compatibility](#posix-compatibility) | [Performance Benchmark](#performance-benchmark) | [Supported Object Storage](#supported-object-storage) | [Who is u