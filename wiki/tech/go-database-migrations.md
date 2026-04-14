# Go Database Migrations

> A Go-based CLI and library for managing database migrations across multiple databases. Notable for its extensive database support, modular driver architecture, and active maintenance.  
> Last updated: 2026-04-14

## Overview

### Repository Info
- **URL**: [https://github.com/golang-migrate/migrate](https://github.com/golang-migrate/migrate)
- **Stars**: 18,359
- **Forks**: 1,567
- **Language**: Go
- **License**: Other
- **Created**: 2018-01-19
- **Updated**: 2026-04-14
- **Topics**: aws-s3, cassandra, database, databases, go, golang, google-cloud-spanner, google-cloud-storage, hacktoberfest, mariadb, migration, migrations, mongodb, mysql, neo4j, postgres, spanner, sql, sqlite
- **Open Issues**: 469

### README Highlights
- **Status**: [GitHub Workflow](https://github.com/golang-migrate/migrate/actions/workflows/ci.yaml), [GoDoc](https://pkg.go.dev/github.com/golang-migrate/migrate/v4), [Coverage](https://coveralls.io/github/golang-migrate/migrate)
- **Packaging**: [Deb via packagecloud.io](https://packagecloud.io/golang-migrate/migrate), [Docker](https://hub.docker.com/r/migrate/migrate/)
- **Go Compatibility**: 1.24, 1.25
- **Latest Release**: [GitHub Releases](https://github.com/golang-migrate/migrate/releases)

### Core Functionality
- **Purpose**: Migrate reads migration files from sources (local or remote) and applies them to databases in order.
- **Architecture**: "Dumb" drivers handle low-level operations, while the core ensures logical consistency and error handling.
- **Forked From**: [mattes/migrate](https://github.com/mattes/migrate)

---

### Databases Supported
Migrate supports migrations for:
- PostgreSQL, PGX v4/v5, Redshift, Ql, Cassandra/ScyllaDB
- SQLite, SQLite3, SQLCipher, MySQL/MariaDB, Neo4j, MongoDB
- CrateDB, Shell, Google Cloud Spanner, CockroachDB, YugabyteDB
- ClickHouse, Firebird, MS SQL Server, rqlite

#### Database URLs
Connection strings use a URL format:  
`dbdriver://username:password@host:port/dbname?param1=true&param2=false`  
**Note**: Reserved characters (`!`, `#`, `$`, `%`, etc.) must be URL-encoded. Example Python snippets for encoding are provided in the README.

---

### Migration Sources
Migration files can be sourced from:
- Local directories
- Remote HTTP(S) endpoints
- AWS S3 buckets
- Google Cloud Storage

Custom sources can be implemented by extending the `source.Driver` interface.

---

## Key Points
- Dual-purpose tool: Use as a **CLI** or integrate as a **Go library**.
- Supports **20+ databases** (PostgreSQL, MySQL, MongoDB, etc.) with modular drivers.
- Enforces strict error handling and URL-encoding requirements for secure connections.
- Actively maintained (last update: 2026-04-14) with 469 open issues for community contribution.

## Sources
- [GitHub](https://github.com/golang-migrate/migrate)
- [원본](raw/ingest/tech/2026-04-14-go-database-migrations.md)