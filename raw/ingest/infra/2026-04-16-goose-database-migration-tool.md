<!-- GitHub Trending: Go | 10,514 stars | +15 today -->

# pressly/goose

> A database migration tool. Supports SQL migrations and Go functions. 

## Repository Info
- **URL**: https://github.com/pressly/goose
- **Stars**: 10,515
- **Forks**: 638
- **Language**: Go
- **License**: Other
- **Created**: 2016-02-25
- **Updated**: 2026-04-16
- **Topics**: database, database-migrations, go, golang, migration, migrations, mysql, postgres, postgresql, schema, sql, sqlite
- **Open Issues**: 122

## README (excerpt)
# goose

<img align="right" width="125" src="assets/goose_logo.png">

[![Goose
CI](https://github.com/pressly/goose/actions/workflows/ci.yaml/badge.svg)](https://github.com/pressly/goose/actions/workflows/ci.yaml)
[![Go
Reference](https://pkg.go.dev/badge/github.com/pressly/goose/v3.svg)](https://pkg.go.dev/github.com/pressly/goose/v3)
[![Go Report
Card](https://goreportcard.com/badge/github.com/pressly/goose/v3)](https://goreportcard.com/report/github.com/pressly/goose/v3)

Goose is a database migration tool. Both a CLI and a library.

Manage your **database schema** by creating incremental SQL changes or Go functions.

#### Features

- Works against multiple databases:
  - Postgres, MySQL, Spanner, SQLite, YDB, ClickHouse, MSSQL, Vertica, and
    more.
- Supports Go migrations written as plain functions.
- Supports [embedded](https://pkg.go.dev/embed/) migrations.
- Out-of-order migrations.
- Seeding data.
- Environment variable substitution in SQL migrations.
- ... and more.

# Install

```shell
go install github.com/pressly/goose/v3/cmd/goose@latest
```

This will install the `goose` binary to your `$GOPATH/bin` directory.

Binary too big? Build a lite version by excluding the drivers you don't need:

```shell
go build -tags='no_postgres no_mysql no_sqlite3 no_ydb' -o goose ./cmd/goose

# Available build tags:
#   no_clickhouse  no_libsql   no_mssql    no_mysql
#   no_postgres    no_sqlite3  no_vertica  no_ydb
```

For macOS users `goose` is available as a [Homebrew
Formulae](https://formulae.brew.sh/formula/goose#default):

```shell
brew install goose
```

See [installation documentation](https://pressly.github.io/goose/installation/) for more details.

# Usage

<details>
<summary>Click to show <code>goose help</code> output</summary>

```
Usage: goose DRIVER DBSTRING [OPTIONS] COMMAND

or

Set environment key
GOOSE_DRIVER=DRIVER
GOOSE_DBSTRING=DBSTRING
GOOSE_MIGRATION_DIR=MIGRATION_DIR

Usage: goose [OPTIONS] COMMAND

Drivers:
    postgres
    mysql
    sqlite3
    spanner
    mssql
    redshift
    tidb
    clickhouse
    ydb
    starrocks
    turso

Examples:
    goose sqlite3 ./foo.db status
    goose sqlite3 ./foo.db create init sql
    goose sqlite3 ./foo.db create add_some_column sql
    goose sqlite3 ./foo.db create fetch_user_data go
    goose sqlite3 ./foo.db up

    goose postgres "user=postgres dbname=postgres sslmode=disable" status
    goose mysql "user:password@/dbname?parseTime=true" status
    goose spanner "projects/project/instances/instance/databases/database" status
    goose redshift "postgres://user:password@qwerty.us-east-1.redshift.amazonaws.com:5439/db" status
    goose tidb "user:password@/dbname?parseTime=true" status
    goose mssql "sqlserver://user:password@hostname:1433?database=master" status
    goose clickhouse "tcp://127.0.0.1:9000" status
    goose ydb "grpcs://localhost:2135/local?go_query_mode=scripting&go_fake_tx=scripting&go_query_bind=declare,numeric" status
    goose starrocks "user:password@/dbname?parseTime=true&interpolateParams=true" status

    GOOSE_DRIVER=sqlite3 GOOSE_DBSTRING=./foo.db goose status
    GOOSE_DRIVER=sqlite3 GOOSE_DBSTRING=./foo.db goose create init sql
    GOOSE_DRIVER=postgres GOOSE_DBSTRING="user=postgres dbname=postgres sslmode=disable" goose status
    GOOSE_DRIVER=mysql GOOSE_DBSTRING="user:password@/dbname" goose status
    GOOSE_DRIVER=redshift GOOSE_DBSTRING="postgres://user:password@qwerty.us-east-1.redshift.amazonaws.com:5439/db" goose status
    GOOSE_DRIVER=clickhouse GOOSE_DBSTRING="clickhouse://user:password@qwerty.clickhouse.cloud:9440/dbname?secure=true&skip_verify=false" goose status

Options:

  -allow-missing
        applies missing (out-of-order) migrations
  -certfile string
        file path to root CA's certificates in pem format (only support on mysql)
  -dir string
        directory with migration files (default ".", can be set via the GOOSE_MIGRATION_DIR env variable).
  -h    print help
  -no-color
        disable color output (N