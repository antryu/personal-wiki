# CloakBrowser: Stealth Chromium for Bot Detection Evasion

> CloakBrowser is a stealth Chromium browser designed to pass every bot detection test. It functions as a drop-in replacement for Playwright, applying source-level fingerprint patches to evade detection. It has passed 30/30 tests and is gaining popularity among developers for its effectiveness in bypassing bot detection systems.
> Last updated: 2026-05-05

## Overview

CloakBrowser is a project that redefines stealth in browser automation. Unlike traditional solutions that rely on JavaScript injections or modified browser configurations, CloakBrowser modifies Chromium at the C++ source level. This makes it a real browser from the perspective of anti-bot systems, allowing it to bypass detection and evade challenges like Cloudflare's Turnstile and reCAPTCHA v3.

It supports both Python and JavaScript (with compatibility for Playwright and Puppeteer), and can be installed via PyPI or npm. On first run, it auto-downloads a stealth Chromium binary (~200MB) for use, and updates the binary in the background to stay current with the latest stealth features.

CloakBrowser has gained a strong following on GitHub, with over 1,600 stars and 143 forks. The project is actively maintained and open-source under the MIT License.

## Key Points

- **Source-level C++ Patches**: 49 patches modify key fingerprint aspects like canvas, WebGL, audio, fonts, GPU, screen, WebRTC, network timing, and more.
- **Human-like Behavior**: The `humanize=True` flag enables realistic mouse movements, keyboard timing, and scroll patterns to pass behavioral detection.
- **High reCAPTCHA Score**: Achieves a 0.9 reCAPTCHA v3 score, which is nearly indistinguishable from a human browser.
- **Cloudflare Turnstile Bypass**: Successfully passes Cloudflare Turnstile, FingerprintJS, and BrowserScan detection systems.
- **Auto-updating Binary**: Ensures the browser is always running the latest stealth build with minimal user intervention.
- **Easy Installation and Usage**: Installable via pip or npm, and compatible with Python and JavaScript codebases. Supports Docker for testing without installation.
- **No Subscriptions or Usage Limits**: Open source and completely free to use.

## Sources

- [GitHub](https://github.com/CloakHQ/CloakBrowser)
- [원본](raw/ingest/tech/2026-05-05-cloakbrowser-stealth-chromium-for-bot-detection-ev.md)