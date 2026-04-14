# OpenTelemetry Collector

> OpenTelemetry Collector is a vendor-agnostic implementation that receives, processes, and exports telemetry data, eliminating the need to run multiple agents or collectors for different telemetry formats and back-ends. It is notable for its extensibility, performance, and support for unified observability.
> Last updated: 2026-04-14

## Overview

The OpenTelemetry Collector is a flexible and extensible agent that helps developers and operators collect, process, and export telemetry data such as traces, metrics, and logs. It is designed to work with a wide range of open-source and commercial telemetry formats and back-ends, making it a central hub for observability in modern cloud-native environments.

Key features include:

- **Usable**: Provides reasonable default configurations and supports popular protocols, allowing it to run and collect telemetry data out of the box.
- **Performant**: Built to handle varying loads and configurations with high stability and performance.
- **Observable**: Acts as a model for an observable service with internal telemetry for monitoring itself.
- **Extensible**: Offers a modular architecture that allows for customizations without modifying the core code.
- **Unified**: Maintains a single codebase and can be deployed either as an agent or a central collector, with support for traces, metrics, and logs.

The project is actively maintained and has a strong community presence, with regular meetings and a robust contribution process.

## Key Points

- OpenTelemetry Collector is a vendor-agnostic telemetry data pipeline.
- It supports popular telemetry formats like Jaeger, Prometheus, and OpenTelemetry.
- The Collector is highly extensible and can be customized without modifying the core.
- It is optimized for performance and stability in diverse environments.
- The project has a strong community and regular contributor engagement through meetings and discussions.

## Sources

- [GitHub](https://github.com/open-telemetry/opentelemetry-collector)
- [원본](raw/ingest/infra/2026-04-14-opentelemetry-collector.md)