# CNCF Jaeger: Distributed Tracing Platform

> CNCF Jaeger is a distributed tracing platform designed for monitoring and troubleshooting microservices-based systems. It helps developers analyze transactions as they propagate through complex systems, making it a critical tool for cloud-native environments. It's notable for its support in the CNCF and its widespread adoption for observability.
> Last updated: 2026-05-04

## Overview
Jaeger, a CNCF graduated project, provides a powerful distributed tracing system for observability in microservices and cloud-native architectures. Initially developed by Uber Technologies, Jaeger has become a key tool for diagnosing performance issues and understanding application behavior in complex environments.

The system is built with a modular architecture, supporting integration with various storage backends such as Cassandra, Elasticsearch, and more via pluggable components. Jaeger collects tracing data using the OpenTelemetry SDK, and processes it through the Jaeger Collector, which also manages sampling and data routing. The Jaeger Query Service and UI then allow for trace querying and visualization.

Key components include:
- **Jaeger Collector**: Receives and processes trace data.
- **Jaeger Storage**: Stores traces in a backend such as Cassandra or Elasticsearch.
- **Jaeger Query Service**: Handles trace data retrieval.
- **Jaeger UI**: Provides a web interface for viewing traces.
- **OpenTelemetry SDK**: Used by applications to collect and export traces.

Jaeger is widely adopted for its robust support for cloud-native environments, its extensibility, and its integration with the OpenTelemetry ecosystem. Jaeger v2 is the latest major release, offering improvements and enhanced compatibility.

## Key Points
- CNCF graduated project, originally developed by Uber.
- Modular and extensible architecture with support for multiple storage backends.
- Integrates with OpenTelemetry SDKs for trace collection.
- Provides a rich UI for trace visualization and analysis.
- Maintains backward compatibility with a deprecation policy to ensure smooth upgrades.

## Sources
- [GitHub](https://github.com/jaegertracing/jaeger)
- [원본](raw/ingest/tech/2026-05-04-cncf-jaeger-distributed-tracing-platform.md)