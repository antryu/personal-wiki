<!-- GitHub Trending: Python | 246 stars | +24 today -->

# CloakHQ/CloakBrowser-Manager

> Web-based browser profile manager for CloakBrowser — create, launch, and manage isolated browser profiles with unique fingerprints. Free, self-hosted   Multilogin alternative

## Repository Info
- **URL**: https://github.com/CloakHQ/CloakBrowser-Manager
- **Stars**: 246
- **Forks**: 49
- **Language**: Python
- **License**: Other
- **Created**: 2026-03-11
- **Updated**: 2026-05-13
- **Topics**: anti-detect, antidetect-browser, browser-automation, browser-fingerprint, browser-profiles, chromium, docker, fastapi, fingerprint, multilogin-alternative, playwright, profile-manager, react, self-hosted, stealth-browser
- **Open Issues**: 12

## README (excerpt)
<p align="center">
<img src="https://i.imgur.com/cqkp6fG.png" width="500" alt="CloakBrowser">
</p>

<h3 align="center">Browser Profile Manager for CloakBrowser</h3>

<p align="center">
Create, manage, and launch isolated browser profiles with unique fingerprints.<br>
Free, self-hosted alternative to Multilogin, GoLogin, and AdsPower.
</p>

<p align="center">
<a href="https://github.com/CloakHQ/CloakBrowser"><img src="https://img.shields.io/github/stars/cloakhq/cloakbrowser?label=CloakBrowser" alt="Stars"></a>
<a href="https://hub.docker.com/r/cloakhq/cloakbrowser-manager"><img src="https://img.shields.io/docker/pulls/cloakhq/cloakbrowser-manager?label=docker&logo=docker&logoColor=white" alt="Docker Pulls"></a>
<a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue" alt="License"></a>
</p>

---

<p align="center">
<img src="https://i.imgur.com/twdX81Q.png" width="800" alt="CloakBrowser Manager — Browser View">
<br>
<img src="https://i.imgur.com/XFYn1qY.png" width="800" alt="CloakBrowser Manager — Profile Settings">
</p>

Each profile is an isolated CloakBrowser instance with its own fingerprint, proxy, cookies, and session data. Profiles persist across restarts. Everything runs in one Docker container.

```bash
docker run -p 8080:8080 -v cloakprofiles:/data cloakhq/cloakbrowser-manager
```

Or build from source:

```bash
git clone https://github.com/CloakHQ/CloakBrowser-Manager.git
cd CloakBrowser-Manager
docker compose up --build
```

Open [http://localhost:8080](http://localhost:8080) in your browser. Create a profile. Click Launch. Done.

> **Early alpha** — this project is under active development. Expect bugs. If you find one, please [open an issue](https://github.com/CloakHQ/CloakBrowser-Manager/issues).

## Why Not Just Use a VPN?

A VPN only changes your IP. Incognito only clears cookies. Chrome profiles share the same hardware fingerprint underneath. Platforms use 50+ signals to link your accounts — canvas, WebGL, audio, GPU, fonts, screen size, timezone.

Each CloakBrowser profile generates a completely different device identity. To the website, each profile looks like a different computer.

| Solution | What it changes | Accounts linked? |
|----------|----------------|-----------------|
| VPN | IP address only | Yes — same fingerprint |
| Incognito | Clears cookies | Yes — same fingerprint |
| Chrome profiles | Separate bookmarks/cookies | Yes — same hardware fingerprint |
| **CloakBrowser** | **Everything — full device identity per profile** | **No** |

## Features

- **Profile management** — create, edit, delete browser profiles with unique fingerprints
- **Per-profile settings** — fingerprint seed, proxy, timezone, locale, user agent, screen size, platform
- **One-click launch/stop** — each profile runs as an isolated CloakBrowser instance
- **Session persistence** — cookies, localStorage, and cache survive browser restarts
- **In-browser viewing** — interact with launched browsers via noVNC, directly in the web GUI
- **Playwright/Puppeteer API** — connect to any running profile programmatically via CDP, while still watching it live in the browser
- **Optional authentication** — protect the web UI and API with a single token, or run wide open locally
- **Powered by CloakBrowser** — 32 source-level C++ patches, passes Cloudflare Turnstile, 0.9 reCAPTCHA v3 score

## Stack

- **Backend**: FastAPI (Python)
- **Frontend**: React + Tailwind CSS
- **Browser viewer**: noVNC (WebSocket-based VNC client)
- **Database**: SQLite
- **Browser engine**: [CloakBrowser](https://github.com/CloakHQ/CloakBrowser) (stealth Chromium binary)

## Development

### Backend

```bash
cd backend
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload --port 8080
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Docker

```bash
docker compose up --build
```

## Requirements

- Docker (20.10+)
- ~2 GB disk (image + binary)
- ~512 MB RAM per running pro