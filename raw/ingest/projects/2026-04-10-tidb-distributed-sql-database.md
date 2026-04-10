<!-- GitHub Trending: Go | 39,947 stars | +15 today -->

# pingcap/tidb

> TiDB - the open-source, cloud-native, distributed SQL database designed for modern applications.

## Repository Info
- **URL**: https://github.com/pingcap/tidb
- **Stars**: 39,947
- **Forks**: 6,167
- **Language**: Go
- **License**: Apache License 2.0
- **Created**: 2015-09-06
- **Updated**: 2026-04-10
- **Topics**: cloud-native, database, distributed-database, distributed-transactions, go, hacktoberfest, htap, mysql, mysql-compatibility, scale, serverless, sql, tidb
- **Open Issues**: 5982

## README (excerpt)
<div align="center">
<a href='https://www.pingcap.com/?utm_source=github&utm_medium=tidb'>
<img src="docs/tidb-logo.png" alt="TiDB, a distributed SQL database" height=100></img>
</a>

---

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://github.com/pingcap/tidb/blob/master/LICENSE)
[![Language](https://img.shields.io/badge/Language-Go-blue.svg)](https://golang.org/)

[![Build Status](https://prow.tidb.net/badge.svg?jobs=merged-tidb-build)](https://prow.tidb.net/?repo=pingcap%2Ftidb&type=postsubmit&job=merged-tidb-build)
[![Go Report Card](https://goreportcard.com/badge/github.com/pingcap/tidb)](https://goreportcard.com/report/github.com/pingcap/tidb)
[![GitHub release](https://img.shields.io/github/tag/pingcap/tidb.svg?label=release)](https://github.com/pingcap/tidb/releases)
</div>

# TiDB

TiDB (/’taɪdiːbi:/, "Ti" stands for Titanium) is an open-source, cloud-native, distributed SQL database designed for high availability, horizontal and vertical scalability, strong consistency, and high performance.

- [Key Features](#key-features)
- [Quick Start](#quick-start)
- [Need Help?](#need-help)
- [Architecture](#architecture)
- [Contributing](#contributing)
- [License](#license)
- [See Also](#see-also)
- [Acknowledgments](#acknowledgments)

## Key Features

- **[Distributed Transactions](https://www.pingcap.com/blog/distributed-transactions-tidb?utm_source=github&utm_medium=tidb)**: TiDB uses a two-phase commit protocol to ensure ACID compliance, providing strong consistency. Transactions span multiple nodes, and TiDB's distributed nature ensures data correctness even in the presence of network partitions or node failures.

- **[Horizontal and Vertical Scalability](https://docs.pingcap.com/tidb/stable/scale-tidb-using-tiup?utm_source=github&utm_medium=tidb)**: TiDB can be scaled horizontally by adding more nodes or vertically by increasing resources of existing nodes, all without downtime. TiDB's architecture separates computing from storage, enabling you to adjust both independently as needed for flexibility and growth.

- **[High Availability](https://docs.pingcap.com/tidbcloud/high-availability-with-multi-az?utm_source=github&utm_medium=tidb)**: Built-in Raft consensus protocol ensures reliability and automated failover. Data is stored in multiple replicas, and transactions are committed only after writing to the majority of replicas, guaranteeing strong consistency and availability, even if some replicas fail. Geographic placement of replicas can be configured for different disaster tolerance levels.

- **[Hybrid Transactional/Analytical Processing (HTAP)](https://www.pingcap.com/blog/htap-demystified-defining-modern-data-architecture-tidb?utm_source=github&utm_medium=tidb)**: TiDB provides two storage engines: TiKV, a row-based storage engine, and TiFlash, a columnar storage engine. TiFlash uses the Multi-Raft Learner protocol to replicate data from TiKV in real time, ensuring consistent data between the TiKV row-based storage engine and the TiFlash columnar storage engine. The TiDB Server coordinates query execution across both TiKV and TiFlash to optimize performance.

- **[Cloud-Native](https://www.pingcap.com/cloud-native?utm_source=github&utm_medium=tidb)**: TiDB can be deployed in public clouds, on-premises, or natively in Kubernetes. [TiDB Operator](https://docs.pingcap.com/tidb-in-kubernetes/stable/tidb-operator-overview/?utm_source=github&utm_medium=tidb) helps manage TiDB on Kubernetes, automating cluster operations, while [TiDB Cloud](https://tidbcloud.com/?utm_source=github&utm_medium=tidb) provides a fully-managed service for easy and economical deployment, allowing users to set up clusters with just a few clicks.

- **[MySQL Compatibility](https://docs.pingcap.com/tidb/stable/mysql-compatibility?utm_source=github&utm_medium=tidb)**: TiDB is compatible with MySQL 8.0, allowing you to use familiar protocols, frameworks and tools. You can migrate applications to TiDB without changing a