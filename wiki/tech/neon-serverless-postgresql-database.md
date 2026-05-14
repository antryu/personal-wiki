# Neon: Serverless PostgreSQL Database

> Neon is an open-source serverless PostgreSQL database platform. It separates storage and compute, enabling autoscaling, code-like branching of databases, and the ability to scale to zero. Neon's unique architecture makes it a compelling option for modern, cloud-native applications.
> Last updated: 2026-05-14

## Overview

Neon is designed to provide a serverless version of PostgreSQL, eliminating the need for manual scaling and management of infrastructure. It replaces the traditional PostgreSQL storage layer with a distributed system that allows for flexible compute and storage separation.

The architecture of Neon includes compute nodes running stateless PostgreSQL instances and a storage engine composed of two main components: the **Pageserver**, which serves as the scalable storage backend, and **Safekeepers**, which provide a durable WAL (Write-Ahead Log) service for redundancy and data safety.

Users can access Neon via a free tier, connecting through standard PostgreSQL clients or using an online SQL editor. For developers, the project also provides instructions for setting up a local development environment across major operating systems, including Linux, macOS, and Arch-based systems.

Neon is developed in Rust and released under the Apache License 2.0. The project has seen substantial community interest, reflected by its 21,923 stars and 963 forks on GitHub as of its last update on 2026-05-14. The project also maintains extensive documentation and is part of a larger ecosystem covering PostgreSQL, serverless computing, and cloud-native development.

## Key Points
- Neon is a serverless PostgreSQL database platform that separates compute and storage.
- It allows for autoscaling, branching of databases like code, and zero scaling when not in use.
- The system is built in Rust and is open-source under the Apache License 2.0.
- Neon has a large community, with over 21,923 GitHub stars.
- The platform is designed to be used with familiar PostgreSQL tools and supports local development environments for testing and development.

## Sources
- [GitHub](https://github.com/neondatabase/neon)
- [원본](raw/ingest/tech/2026-05-14-neon-serverless-postgresql-database.md)