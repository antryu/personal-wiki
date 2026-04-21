<!-- GitHub Trending: Go | 22,051 stars | +2 today -->

# redis/go-redis

> Redis Go client

## Repository Info
- **URL**: https://github.com/redis/go-redis
- **Stars**: 22,051
- **Forks**: 2,549
- **Language**: Go
- **License**: BSD 2-Clause "Simplified" License
- **Created**: 2012-07-25
- **Updated**: 2026-04-21
- **Topics**: go, golang, redis, redis-client, redis-cluster
- **Open Issues**: 71

## README (excerpt)
# Redis client for Go

[![build workflow](https://github.com/redis/go-redis/actions/workflows/build.yml/badge.svg)](https://github.com/redis/go-redis/actions)
[![PkgGoDev](https://pkg.go.dev/badge/github.com/redis/go-redis/v9)](https://pkg.go.dev/github.com/redis/go-redis/v9?tab=doc)
[![Documentation](https://img.shields.io/badge/redis-documentation-informational)](https://redis.io/docs/latest/develop/clients/go/)
[![Go Report Card](https://goreportcard.com/badge/github.com/redis/go-redis/v9)](https://goreportcard.com/report/github.com/redis/go-redis/v9)
[![codecov](https://codecov.io/github/redis/go-redis/graph/badge.svg?token=tsrCZKuSSw)](https://codecov.io/github/redis/go-redis)

[![Discord](https://img.shields.io/discord/697882427875393627.svg?style=social&logo=discord)](https://discord.gg/W4txy5AeKM)
[![Twitch](https://img.shields.io/twitch/status/redisinc?style=social)](https://www.twitch.tv/redisinc)
[![YouTube](https://img.shields.io/youtube/channel/views/UCD78lHSwYqMlyetR0_P4Vig?style=social)](https://www.youtube.com/redisinc)
[![Twitter](https://img.shields.io/twitter/follow/redisinc?style=social)](https://twitter.com/redisinc)
[![Stack Exchange questions](https://img.shields.io/stackexchange/stackoverflow/t/go-redis?style=social&logo=stackoverflow&label=Stackoverflow)](https://stackoverflow.com/questions/tagged/go-redis)

> go-redis is the official Redis client library for the Go programming language. It offers a straightforward interface for interacting with Redis servers. 

## Supported versions

In `go-redis` we are aiming to support the last three releases of Redis. Currently, this means we do support:
- [Redis 8.0](https://raw.githubusercontent.com/redis/redis/8.0/00-RELEASENOTES) - using Redis CE 8.0
- [Redis 8.2](https://raw.githubusercontent.com/redis/redis/8.2/00-RELEASENOTES) - using Redis CE 8.2 
- [Redis 8.4](https://raw.githubusercontent.com/redis/redis/8.4/00-RELEASENOTES) - using Redis CE 8.4

Although the `go.mod` states it requires at minimum `go 1.24`, our CI is configured to run the tests against all three
versions of Redis and multiple versions of Go ([1.24](https://go.dev/doc/devel/release#go1.24.0), oldstable, and stable). We observe that some modules related test may not pass with
Redis Stack 7.2 and some commands are changed with Redis CE 8.0.
Although it is not officially supported, `go-redis/v9`  should be able to work with any Redis 7.0+.
Please do refer to the documentation and the tests if you experience any issues.

## How do I Redis?

[Learn for free at Redis University](https://university.redis.com/)

[Build faster with the Redis Launchpad](https://launchpad.redis.com/)

[Try the Redis Cloud](https://redis.com/try-free/)

[Dive in developer tutorials](https://developer.redis.com/)

[Join the Redis community](https://redis.com/community/)

[Work at Redis](https://redis.com/company/careers/jobs/)


## Resources

- [Discussions](https://github.com/redis/go-redis/discussions)
- [Chat](https://discord.gg/W4txy5AeKM)
- [Reference](https://pkg.go.dev/github.com/redis/go-redis/v9)
- [Examples](https://pkg.go.dev/github.com/redis/go-redis/v9#pkg-examples)

## old documentation

- [English](https://redis.uptrace.dev)
- [简体中文](https://redis.uptrace.dev/zh/)

## Ecosystem

- [Entra ID (Azure AD)](https://github.com/redis/go-redis-entraid)
- [Distributed Locks](https://github.com/bsm/redislock)
- [Redis Cache](https://github.com/go-redis/cache)
- [Rate limiting](https://github.com/go-redis/redis_rate)

## Features

- Redis commands except QUIT and SYNC.
- Automatic connection pooling.
- [StreamingCredentialsProvider (e.g. entra id, oauth)](#1-streaming-credentials-provider-highest-priority) (experimental)
- [Pub/Sub](https://redis.uptrace.dev/guide/go-redis-pubsub.html).
- [Pipelines and transactions](https://redis.uptrace.dev/guide/go-redis-pipelines.html).
- [Scripting](https://redis.uptrace.dev/guide/lua-scripting.html).
- [Redis Sentinel](https://redis.uptrace.dev/guide/go-redis-sentinel.html)