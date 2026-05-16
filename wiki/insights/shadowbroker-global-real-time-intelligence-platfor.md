# ShadowBroker: Global Real-Time Intelligence Platform

> ShadowBroker is an open-source intelligence platform that aggregates real-time multi-domain OSINT data from over 60 live feeds into a unified interface. It provides a decentralized, self-hosted, and privacy-respecting way to track global events, from aircraft and satellites to seismic activity and CCTV networks.  
> Last updated: 2026-05-16

## Overview

ShadowBroker is a real-time geospatial intelligence platform built using **Next.js**, **MapLibre GL**, **FastAPI**, and **Python**. It aggregates 60+ live data streams into a single, dark-ops map interface, displaying aircraft, ships, satellites, conflict zones, CCTV networks, GPS jamming, and more. The project is fully open-source and runs entirely in the browser against a self-hosted backend, ensuring no user data is collected or transmitted.

The platform includes 35+ toggleable data layers, including SAR ground-change detection. Users can switch between visual modes such as DEFAULT, SATELLITE, FLIR, NVG, and CRT. Right-clicking any location on Earth provides a country dossier with details like head of state, population, and languages, along with the latest Sentinel-2 satellite photo.

Designed for analysts, researchers, and radio operators, ShadowBroker aims to visualize the world when every public signal is on the same map.

## Key Points

- Aggregates 60+ live intelligence feeds into one real-time geospatial interface.
- Fully open-source with no user data collection or transmission.
- Optional Shodan integration for additional investigative overlay (uses your own API key).
- Supports AI agents as co-analysts via HMAC-signed command channels.
- Includes an experimental decentralized intelligence mesh network (InfoNet) for obfuscated messaging and peer-to-peer data exchange.

## Sources

- [GitHub](https://github.com/BigBodyCobain/Shadowbroker)
- [원본](raw/ingest/insights/2026-05-16-shadowbroker-global-real-time-intelligence-platfor.md)