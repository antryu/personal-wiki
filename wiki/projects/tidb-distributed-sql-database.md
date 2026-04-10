# TiDB: Distributed SQL Database

> TiDB is an open-source, cloud-native, distributed SQL database designed for high availability, horizontal and vertical scalability, strong consistency, and high performance. It is notable for its compatibility with MySQL 8.0 and support for hybrid transactional/analytical processing (HTAP).  
> Last updated: 2026-04-10

## Overview

### Repository Info
- **URL**: [https://github.com/pingcap/tidb](https://github.com/pingcap/tidb)
- **Stars**: 39,947
- **Forks**: 6,167
- **Language**: Go
- **License**: Apache License 2.0
- **Created**: 2015-09-06
- **Updated**: 2026-04-10
- **Topics**: cloud-native, database, distributed-database, distributed-transactions, go, hacktoberfest, htap, mysql, mysql-compatibility, scale, serverless, sql, tidb
- **Open Issues**: 5,982

### Key Features
TiDB offers a suite of capabilities tailored for modern, scalable applications:
- **Distributed Transactions**: Ensures ACID compliance using a two-phase commit protocol, maintaining strong consistency across nodes despite network partitions or failures.
- **Horizontal and Vertical Scalability**: Supports scaling by adding nodes (horizontal) or upgrading resources (vertical), with a decoupled compute-storage architecture for flexible growth.
- **High Availability**: Utilizes the Raft consensus protocol for automated failover and reliability, with data replicated across multiple nodes for disaster tolerance.
- **Hybrid Transactional/Analytical Processing (HTAP)**: Combines row-based (TiKV) and columnar (TiFlash) storage engines, enabling real-time analytics alongside transactional workloads.
- **Cloud-Native**: Deployable on public clouds, on-premises, or Kubernetes. Managed via TiDB Operator or TiDB Cloud for automated operations.
- **MySQL Compatibility**: Fully compatible with MySQL 8.0, allowing seamless migration without application changes.

## Key Points
- Open-source distributed SQL database with Apache 2.0 licensing.
- Combines HTAP capabilities via TiKV (row-based) and TiFlash (columnar) storage engines.
- Supports MySQL 8.0 compatibility for easy migration and tool integration.
- Cloud-native design with Kubernetes-native deployment via TiDB Operator.
- Achieves high availability through Raft consensus and multi-node replication.

## Sources
- [GitHub](https://github.com/pingcap/tidb)
- [원본](raw/ingest/projects/2026-04-10-tidb-distributed-sql-database.md)