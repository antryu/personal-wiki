# Loki Log Aggregation System

> Loki is a horizontally-scalable, highly-available, multi-tenant log aggregation system inspired by Prometheus. It uses labels for log streams instead of full-text indexing, making it cost-effective and easy to operate. Notably, it integrates seamlessly with Kubernetes and Grafana.  
> Last updated: 2026-04-13

## Overview
Loki is designed for efficient log aggregation, leveraging a label-based indexing approach similar to Prometheus. It avoids full-text indexing by storing compressed logs and using metadata for queries, reducing operational complexity and costs. Key components include:

- **Alloy**: A log collection agent replacing Promtail for future development.
- **Loki**: The core service for log storage and query processing.
- **Grafana**: For visualization and querying logs with label-based filters.

Loki excels in Kubernetes environments, automatically scraping Pod metadata. It supports push-based log delivery and integrates natively with Grafana (v6.0+). Recent updates include a Helm chart migration to [grafana-community/helm-charts](https://github.com/grafana-community/helm-charts) for broader community support.

## Key Points
- Uses label-based indexing instead of full-text search, reducing storage and computational overhead.
- Native integration with Grafana and Kubernetes for streamlined observability workflows.

## Sources
- [GitHub](https://github.com/grafana/loki)
- [원본](raw/ingest/infra/2026-04-13-loki-log-aggregation-system.md)