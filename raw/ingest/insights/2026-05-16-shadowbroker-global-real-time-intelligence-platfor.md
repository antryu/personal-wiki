<!-- GitHub Trending: Python | 6,517 stars | +89 today -->

# BigBodyCobain/Shadowbroker

> Open-source intelligence for the global theater. Track everything from the corporate/private jets of the wealthy, and spy satellites, to seismic events in one unified interface. Hook an AI agent up to have it parse through data and find previously unseen correlations. The knowledge is available to all but rarely aggregated in the open, until now.

## Repository Info
- **URL**: https://github.com/BigBodyCobain/Shadowbroker
- **Stars**: 6,518
- **Forks**: 1,043
- **Language**: Python
- **License**: GNU Affero General Public License v3.0
- **Created**: 2026-03-05
- **Updated**: 2026-05-16
- **Topics**: air-force-one, airforce1, asdb, cctv, cctv-cameras, cctv-surveillance, earthquake-visualization, elonjet, osint, osint-resources, osint-tool, sattelite, sattelite-imagery, sdr
- **Open Issues**: 9

## README (excerpt)
<p align="center">
  <h1 align="center">🛰️ S H A D O W B R O K E R</h1>
  <p align="center"><strong>Global Threat Intercept — Real-Time Geospatial Intelligence Platform</strong></p>
  <p align="center">

  </p>
</p>

---




[![ShadowBroker](/uploads/46f99d19fa141a2efba37feee9de8aab/Title.jpg)](https://github.com/user-attachments/assets/248208ec-62f7-49d1-831d-4bd0a1fa6852)





**ShadowBroker** is a decentralized intelligence platform that aggregates real-time, multi-domain OSINT telemetry from 60+ live intelligence feeds into a single dark-ops map interface. Aircraft, ships, satellites, conflict zones, CCTV networks, GPS jamming, internet-connected devices, police scanners, mesh radio nodes, and breaking geopolitical events — all updating in real time on one screen as well as an obfuscated communications protocol and information exchange infrastructure.

Built with **Next.js**, **MapLibre GL**, **FastAPI**, and **Python**. 35+ toggleable data layers, including SAR ground-change detection. Multiple visual modes (DEFAULT / SATELLITE / FLIR / NVG / CRT). Right-click any point on Earth for a country dossier, head-of-state lookup, and the latest Sentinel-2 satellite photo. No user data is collected or transmitted — the dashboard runs entirely in your browser against a self-hosted backend.

Designed for analysts, researchers, radio operators, and anyone who wants to see what the world looks like when every public signal is on the same map.


## Why This Exists

A surprising amount of global telemetry is already public — aircraft ADS-B broadcasts, maritime AIS signals, satellite orbital data, earthquake sensors, mesh radio networks, police scanner feeds, environmental monitoring stations, internet infrastructure telemetry, and more. This data is scattered across dozens of tools and APIs. ShadowBroker combines all of it into a single interface.

The project does not introduce new surveillance capabilities — it aggregates and visualizes existing public datasets. It is fully open-source so anyone can audit exactly what data is accessed and how. No user data is collected or transmitted — everything runs locally against a self-hosted backend. No telemetry, no analytics, no accounts.

### Shodan Connector

ShadowBroker includes an optional Shodan connector for operator-supplied API access. Shodan results are fetched with your own `SHODAN_API_KEY`, rendered as a local investigative overlay (not merged into core feeds), and remain subject to Shodan’s terms of service.

---

## Interesting Use Cases

* **Track Air Force One**, the private jets of billionaires and dictators, and every military tanker, ISR, and fighter broadcasting ADS-B. Air Force One and all of the accompanying Presidential/Vice Presidential planes are highlighted and monitored from the moment they leave the ground. 
* **Connect an AI agent as a co-analyst** through ShadowBroker's HMAC-signed agentic command channel — supports OpenClaw and any other agent that speaks the protocol (Claude, GPT, LangChain, custom). The agent gets full read/write access to all 35+ data layers, pin placement, map control, SAR ground-change, mesh networking, and alert delivery. It sees everything the operator sees and can take actions on the map in real time.
* **Communicate on the InfoNet testnet** — The first decentralized intelligence mesh built into an OSINT tool. Obfuscated messaging with gate personas, Dead Drop peer-to-peer exchange, and a built-in terminal CLI. No accounts, no signup. Privacy is not guaranteed yet — this is an experimental testnet — but the protocol is live and being hardened.
* **Right-click anywhere on Earth** for a country dossier (head of state, population, languages), Wikipedia summary, and the latest Sentinel-2 satellite photo at 10m resolution
* **Click a KiwiSDR node** and tune into live shortwave radio directly in the dashboard. Click a police scanner feed and eavesdrop in one click.
* **Watch 11,000+ CCTV cameras** across 6 countries — London, NYC, California,