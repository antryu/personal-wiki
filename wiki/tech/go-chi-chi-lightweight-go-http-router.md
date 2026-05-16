# go-chi/chi - Lightweight Go HTTP Router

> `go-chi/chi` is a lightweight, idiomatic, and composable HTTP router for Go, ideal for building scalable and maintainable REST APIs. It uses the Go `context` package for request-scoping and is widely used in production systems across various industries.
> Last updated: 2026-05-16

## Overview

The `go-chi/chi` router is designed to help developers build scalable, modular, and RESTful HTTP services in Go. Built with a focus on simplicity, performance, and maintainability, chi is used by companies like Cloudflare, Heroku, and 99Designs. It leverages Go's standard library, particularly the `net/http` and `context` packages, while providing a clean and composable API that allows for easy integration of middleware and route grouping.

Key features include:

- Compatibility with `net/http` and Go's ecosystem
- Built-in middleware support and modular routing
- Context handling for request-scoped values and cancellations
- Doc generation tools for API documentation
- No external dependencies—100% Go standard library
- Small codebase (~1000 LOC for the core router)

## Key Points
- **Lightweight**: Minimal codebase for high efficiency and easy understanding.
- **Composable**: Built for modular REST APIs with support for route groups and middleware.

## Sources
- [GitHub](https://github.com/go-chi/chi)
- [원본](raw/ingest/tech/2026-05-16-go-chi-chi-lightweight-go-http-router.md)