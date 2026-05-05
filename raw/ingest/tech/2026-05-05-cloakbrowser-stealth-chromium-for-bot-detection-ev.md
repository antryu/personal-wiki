<!-- GitHub Trending: Python | 1,605 stars | +37 today -->

# CloakHQ/CloakBrowser

> Stealth Chromium that passes every bot detection test. Drop-in Playwright replacement with source-level fingerprint patches. 30/30 tests passed.

## Repository Info
- **URL**: https://github.com/CloakHQ/CloakBrowser
- **Stars**: 1,605
- **Forks**: 143
- **Language**: Python
- **License**: MIT License
- **Created**: 2026-02-22
- **Updated**: 2026-05-05
- **Topics**: ai-agents, anti-detect, antidetect-browser, bot-detection, browser-automation, captcha-bypass, chromium, cloudflare, cloudflare-bypass, fingerprint, headless-browser, playwright, puppeteer, python, recaptcha, selenium, stealth-browser, undetected, web-scraping, webscraping
- **Open Issues**: 46

## README (excerpt)
<p align="center">
<img src="https://i.imgur.com/cqkp6fG.png" width="500" alt="CloakBrowser">
</p>

<p align="center">
<a href="https://pypi.org/project/cloakbrowser/"><img src="https://img.shields.io/pypi/v/cloakbrowser" alt="PyPI"></a>
<a href="https://www.npmjs.com/package/cloakbrowser"><img src="https://img.shields.io/npm/v/cloakbrowser" alt="npm"></a>
<a href="LICENSE"><img src="https://img.shields.io/github/license/cloakhq/cloakbrowser?v=1" alt="License"></a>
<a href="https://github.com/CloakHQ/CloakBrowser"><img src="https://img.shields.io/github/last-commit/cloakhq/cloakbrowser" alt="Last Commit"></a>
<br>
<a href="https://github.com/CloakHQ/CloakBrowser"><img src="https://img.shields.io/github/stars/cloakhq/cloakbrowser" alt="Stars"></a>
<a href="https://pypi.org/project/cloakbrowser/"><img src="https://img.shields.io/pepy/dt/cloakbrowser?label=pypi&logo=pypi&logoColor=white" alt="PyPI Downloads"></a>
<a href="https://www.npmjs.com/package/cloakbrowser"><img src="https://img.shields.io/npm/dt/cloakbrowser?label=npm&logo=npm&logoColor=white" alt="npm Downloads"></a>
<a href="https://hub.docker.com/r/cloakhq/cloakbrowser"><img src="https://img.shields.io/docker/pulls/cloakhq/cloakbrowser?label=docker&logo=docker&logoColor=white" alt="Docker Pulls"></a>
</p>

<p align="center">
<a href="https://ko-fi.com/cloakhq"><img src="https://ko-fi.com/img/githubbutton_sm.svg" alt="Support on Ko-fi"></a>
</p>

<br>

<h3 align="center">Stealth Chromium that passes every bot detection test.</h3>

<table><tr><td>
Not a patched config. Not a JS injection. A real Chromium binary with fingerprints modified at the C++ source level. Antibot systems score it as a normal browser — because it <em>is</em> a normal browser.
</td></tr></table>

<br>

<p align="center">
<img src="https://i.imgur.com/IvB0It7.gif" width="600" alt="Cloudflare Turnstile — 3 Tests Passing">
<br><em>Cloudflare Turnstile — 3 live tests passing (headed mode, macOS)</em>
</p>

<br>

<p align="center">
Drop-in Playwright/Puppeteer replacement for Python and JavaScript.<br>
Same API, same code — just swap the import. <strong>3 lines of code, 30 seconds to unblock.</strong>
</p>

- **49 source-level C++ patches** — canvas, WebGL, audio, fonts, GPU, screen, WebRTC, network timing, automation signals, CDP input behavior
- **`humanize=True`** — human-like mouse curves, keyboard timing, and scroll patterns. One flag, behavioral detection passes
- **0.9 reCAPTCHA v3 score** — human-level, server-verified
- **Passes Cloudflare Turnstile**, FingerprintJS, BrowserScan — tested against 30+ detection sites
- **Auto-updating binary** — background update checks, always on the latest stealth build
- **`pip install cloakbrowser`** or **`npm install cloakbrowser`** — binary auto-downloads, zero config
- **Free and open source** — no subscriptions, no usage limits

**Try it now** — no install needed:
```bash
docker run --rm cloakhq/cloakbrowser cloaktest
```

**Python:**
```python
from cloakbrowser import launch

browser = launch()
page = browser.new_page()
page.goto("https://protected-site.com")  # no more blocks
browser.close()
```

**JavaScript (Playwright):**
```javascript
import { launch } from 'cloakbrowser';

const browser = await launch();
const page = await browser.newPage();
await page.goto('https://protected-site.com');
await browser.close();
```

Also works with Puppeteer: `import { launch } from 'cloakbrowser/puppeteer'` ([details](#puppeteer))

## Install

**Python:**
```bash
pip install cloakbrowser
```

**JavaScript / Node.js:**
```bash
# With Playwright
npm install cloakbrowser playwright-core

# With Puppeteer
npm install cloakbrowser puppeteer-core
```

On first run, the stealth Chromium binary is automatically downloaded (~200MB, cached locally).

**Optional:** Auto-detect timezone/locale from proxy IP:
```bash
pip install cloakbrowser[geoip]
```

**Migrating from Playwright?** One-line change:

```diff
- from playwright.sync_api import sync_playwright
- pw = sync_playwri