<!-- GitHub Trending: Rust | 21,923 stars | +67 today -->

# neondatabase/neon

> Neon: Serverless Postgres. We separated storage and compute to offer autoscaling, code-like database branching, and scale to zero.

## Repository Info
- **URL**: https://github.com/neondatabase/neon
- **Stars**: 21,923
- **Forks**: 963
- **Language**: Rust
- **License**: Apache License 2.0
- **Created**: 2021-03-26
- **Updated**: 2026-05-14
- **Topics**: database, postgres, postgresql, rust, serverless
- **Open Issues**: 532

## README (excerpt)
[![Neon](https://github.com/user-attachments/assets/fd91da5f-44a9-41c7-9075-36a5b5608083)](https://neon.com)



# Neon

Neon is an open-source serverless Postgres database platform. It separates storage and compute and substitutes the PostgreSQL storage layer by redistributing data across a cluster of nodes.

## Quick start
Try the [Neon Free Tier](https://neon.com/signup) to create a serverless Postgres instance. Then connect to it with your preferred Postgres client (psql, dbeaver, etc) or use the online [SQL Editor](https://neon.com/docs/get-started-with-neon/query-with-neon-sql-editor/). See [Connect from any application](https://neon.com/docs/connect/connect-from-any-app/) for connection instructions.

Alternatively, compile and run the project [locally](#running-local-installation).

## Architecture overview

A Neon installation consists of compute nodes and the Neon storage engine. Compute nodes are stateless PostgreSQL nodes backed by the Neon storage engine.

The Neon storage engine consists of two major components:
- Pageserver: Scalable storage backend for the compute nodes.
- Safekeepers: The safekeepers form a redundant WAL service that received WAL from the compute node, and stores it durably until it has been processed by the pageserver and uploaded to cloud storage.

See developer documentation in [SUMMARY.md](/docs/SUMMARY.md) for more information.

## Running a local development environment

Neon can be run on a workstation for small experiments and to test code changes, by
following these instructions.

#### Installing dependencies on Linux
1. Install build dependencies and other applicable packages

* On Ubuntu or Debian, this set of packages should be sufficient to build the code:
```bash
apt install build-essential libtool libreadline-dev zlib1g-dev flex bison libseccomp-dev \
libssl-dev clang pkg-config libpq-dev cmake postgresql-client protobuf-compiler \
libprotobuf-dev libcurl4-openssl-dev openssl python3-poetry lsof libicu-dev
```
* On Fedora, these packages are needed:
```bash
dnf install flex bison readline-devel zlib-devel openssl-devel \
  libseccomp-devel perl clang cmake postgresql postgresql-contrib protobuf-compiler \
  protobuf-devel libcurl-devel openssl poetry lsof libicu-devel libpq-devel python3-devel \
  libffi-devel
```
* On Arch based systems, these packages are needed:
```bash
pacman -S base-devel readline zlib libseccomp openssl clang \
postgresql-libs cmake postgresql protobuf curl lsof
```

Building Neon requires 3.15+ version of `protoc` (protobuf-compiler). If your distribution provides an older version, you can install a newer version from [here](https://github.com/protocolbuffers/protobuf/releases).

2. [Install Rust](https://www.rust-lang.org/tools/install)
```
# recommended approach from https://www.rust-lang.org/tools/install
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

#### Installing dependencies on macOS (12.3.1)
1. Install XCode and dependencies
```
xcode-select --install
brew install protobuf openssl flex bison icu4c pkg-config m4

# add openssl to PATH, required for ed25519 keys generation in neon_local
echo 'export PATH="$(brew --prefix openssl)/bin:$PATH"' >> ~/.zshrc
```

If you get errors about missing `m4` you may have to install it manually:
```
brew install m4
brew link --force m4
```

2. [Install Rust](https://www.rust-lang.org/tools/install)
```
# recommended approach from https://www.rust-lang.org/tools/install
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

3. Install PostgreSQL Client
```
# from https://stackoverflow.com/questions/44654216/correct-way-to-install-psql-without-full-postgres-on-macos
brew install libpq
brew link --force libpq
```

#### Rustc version

The project uses [rust toolchain file](./rust-toolchain.toml) to define the version it's built with in CI for testing and local builds.

This file is automatically picked up by [`rustup`](https://rust-lang.github.io/rustup/overrides.html#the-toolchain-fi