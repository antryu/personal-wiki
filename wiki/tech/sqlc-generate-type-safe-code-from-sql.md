# sqlc: Generate Type-Safe Code from SQL

> sqlc is a tool that generates type-safe code from SQL queries, simplifying database interactions in various programming languages. It's notable for reducing boilerplate and enabling safer database access through strong typing and compiler checks.
> Last updated: 2026-05-15

## Overview

sqlc is a SQL compiler that generates type-safe code from SQL queries. It allows developers to write database queries in pure SQL and then automatically generate type-safe interfaces in supported programming languages. This approach ensures compile-time safety and reduces runtime errors that often arise from incorrect database interactions.

Here's how it works:

1. Write SQL queries in a `.sql` file.
1. Run sqlc to generate code in the target language (e.g., Go, Kotlin, Python, TypeScript).
1. Use the generated code in your application.

sqlc supports multiple database systems, including PostgreSQL, MySQL, and SQLite. It is written in Go and is extensible through a plugin system, enabling community-driven language support.

## Key Features

- **Type-safe code generation**: Eliminates common SQL errors by ensuring types match between SQL and application code.
- **Language support**: Supports Go, Kotlin, Python, and TypeScript with community plugins for additional languages.
- **Database support**: Works with PostgreSQL, MySQL, and SQLite.
- **Interactive Playground**: The [sqlc Playground](https://play.sqlc.dev/) allows developers to test queries and see generated code in real time.
- **Open Source**: Licensed under the MIT License, making it freely available and modifiable.

## Key Points

- Generates type-safe database access code from SQL queries.
- Supports multiple programming languages and databases.
- Reduces boilerplate code and runtime errors.
- Community-driven and plugin extensible.
- Actively maintained with 17,624 stars and 1,043 forks on GitHub.

## Supported Languages

- [sqlc-gen-go](https://github.com/sqlc-dev/sqlc-gen-go)
- [sqlc-gen-kotlin](https://github.com/sqlc-dev/sqlc-gen-kotlin)
- [sqlc-gen-python](https://github.com/sqlc-dev/sqlc-gen-python)
- [sqlc-gen-typescript](https://github.com/sqlc-dev/sqlc-gen-typescript)

## Sponsors and Community

sqlc is supported by its community of users and sponsors, including companies like Riza.io, Coder.com, Mint.fun, and Mux.com. You can find a list of contributors and sponsors in the [GitHub repository](https://github.com/sqlc-dev/sqlc).

## Sources

- [GitHub](https://github.com/sqlc-dev/sqlc)
- [원본](raw/ingest/tech/2026-05-15-sqlc-generate-type-safe-code-from-sql.md)