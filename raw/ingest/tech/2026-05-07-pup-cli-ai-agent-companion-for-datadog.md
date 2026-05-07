<!-- GitHub Trending: Rust | 748 stars | +3 today -->

# DataDog/pup

> Give your AI agent a Pup — a CLI companion with 200+ commands across 33+ Datadog products.

## Repository Info
- **URL**: https://github.com/DataDog/pup
- **Stars**: 748
- **Forks**: 69
- **Language**: Rust
- **License**: Apache License 2.0
- **Created**: 2026-02-03
- **Updated**: 2026-05-07
- **Topics**: cli, client, datadog, observability
- **Open Issues**: 9

## README (excerpt)
# :dog2: Give Your Agent a Puppy: Introducing Pup CLI

**NOTICE: This is in Preview mode, we are fine tuning the interactions and bugs that arise. Please file issues or submit PRs. Thank you for your early interest!**

[![CI](https://github.com/DataDog/pup/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/DataDog/pup/actions/workflows/ci.yml)
[![Rust](https://img.shields.io/badge/rust-stable-orange?logo=rust)](https://www.rust-lang.org/)
[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](LICENSE)

Every AI agent needs a loyal companion. Meet Pup — the CLI that gives your agents full access to Datadog's observability platform (because even autonomous agents need good tooling, not just tricks).

## What is Pup?

A comprehensive, AI-agent-ready CLI covering a wide range of Datadog product domains. We've unleashed the full power of Datadog's APIs so your agents can fetch metrics, sniff out errors, and track down issues without barking up the wrong API tree.

AI agents are the fastest-growing interface for infrastructure management. Companies like Vercel and AWS are racing to make their platforms agent-accessible, but we're leading the pack. Pup makes Datadog a great choice for AI-native workflows by exposing the API surface in a way agents can navigate without barking up the wrong tree.

## Why Your Agent Will Love It

- :paw_prints: **Well-trained**: Self-discoverable commands (no need to chase documentation)
- :guide_dog: **Obedient**: Structured JSON/YAML output for easy parsing
- :service_dog: **On a leash**: OAuth2 + PKCE for scoped access (no more long-lived keys running wild)
- :dog: **Knows all the tricks**: Monitors, logs, metrics, RUM, security and more!

## Try It (Humans Welcome Too!)

```bash
# Give your agent credentials (house-training, basically)
pup auth login

# Now they can fetch data like a good pup
pup monitors list --tags="team:api-platform"         # Fetch monitors
pup logs search --query="status:error" --from="1h"   # Sniff out errors
pup metrics query --query="avg:system.cpu.user{*}"   # Track the metrics tail
```

:dog: **TL;DR**: We built a comprehensive CLI so AI agents can use Datadog like a pro. Give your agent a pup. They're housetrained, loyal, and know way more tricks than you'd expect.

*P.S. No actual puppies were harmed in the making of this CLI. Just a lot of Rust code and API endpoints.*

## API Coverage

Pup covers most major Datadog product surfaces. See
[docs/COMMANDS.md](docs/COMMANDS.md) for the canonical command reference, or run
`pup --help` (or `pup agent schema` for machine-readable output) for the live
list of commands as built.

💡 **Tip:** Use Ctrl/Cmd+F to search for specific APIs. [Request features via GitHub Issues](https://github.com/DataDog/pup/issues).

---

<details>
<summary><b>📊 Core Observability</b></summary>

| API Domain | Status | Pup Commands | Notes |
|------------|--------|--------------|-------|
| Metrics | ✅ | `metrics search`, `metrics query`, `metrics list`, `metrics get` | V1 and V2 APIs supported |
| Logs | ✅ | `logs search`, `logs list`, `logs aggregate` | V1 and V2 APIs supported |
| Events | ✅ | `events list`, `events search`, `events get` | Infrastructure event management |
| RUM | ✅ | `rum apps`, `rum sessions`, `rum metrics`, `rum retention-filters`, `rum playlists`, `rum heatmaps` | Apps, sessions, metrics, retention filters, replay playlists, heatmaps |
| APM Services | ✅ | `apm services`, `apm entities`, `apm dependencies`, `apm flow-map` | Services stats, operations, resources; entity queries; dependencies; flow visualization |
| Traces | ✅ | `traces search`, `traces aggregate`, `traces metrics` | Span search/aggregation and span-based metric definitions |
| Profiling | ✅ | `profiling aggregate`, `profiling analytics`, `profiling timeline`, … | Continuous Profiler queries (requires API + App keys) |
| Database Monitoring | ✅ | `dbm samples search` | DBM query sample search |
| Session Replay | ❌ | - | Not yet