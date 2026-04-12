# Obsidian Web Clipper

> Obsidian Web Clipper is an official browser extension for the Obsidian note-taking app that allows users to highlight and save web content as durable Markdown files. It supports multiple browsers and enables offline access to saved content, making it a notable tool for knowledge management and long-term digital archiving.  
> Last updated: 2026-04-12

## Overview

### Repository Info
- **URL**: https://github.com/obsidianmd/obsidian-clipper  
- **Stars**: 3,725  
- **Forks**: 400  
- **Language**: TypeScript  
- **License**: MIT License  
- **Created**: 2024-08-29  
- **Updated**: 2026-04-12  
- **Topics**: brave, browser-extension, chrome, chrome-extension, chromium, edge, firefox, firefox-addon, obsidian, obsidianmd, safari, safari-extension  
- **Open Issues**: 209  

---

### README (excerpt)  
Obsidian Web Clipper helps users highlight and capture web content in their preferred browser. Saved content is stored as Markdown files for offline access and long-term preservation.  

- **[Download Web Clipper](https://obsidian.md/clipper)**  
- **[Documentation](https://help.obsidian.md/web-clipper)**  
- **[Troubleshooting](https://help.obsidian.md/web-clipper/troubleshoot)**  

---

### Get Started  
Install the extension via browser-specific directories:  
- **[Chrome Web Store](https://chromewebstore.google.com/detail/obsidian-web-clipper/cnjifjpddelmedmihgijeibhnjfabmlf)** (Chromium-based browsers)  
- **[Firefox Add-Ons](https://addons.mozilla.org/en-US/firefox/addon/web-clipper-obsidian/)** (Firefox and mobile)  
- **[Safari Extensions](https://apps.apple.com/us/app/obsidian-web-clipper/id6720708363)** (macOS, iOS, iPadOS)  
- **[Edge Add-Ons](https://microsoftedge.microsoft.com/addons/detail/obsidian-web-clipper/eigdjhmgnaaeaonimdklocfekkaanfme)** (Microsoft Edge)  

---

### Use the Extension  
Documentation covers features like [highlighting](https://help.obsidian.md/web-clipper/highlight), [templates](https://help.obsidian.md/web-clipper/templates), [variables](https://help.obsidian.md/web-clipper/variables), and [filters](https://help.obsidian.md/web-clipper/filters).  

---

### Contribute  
- **Translations**: Submit pull requests using the format in [src/_locales](/src/_locales).  
- **Features/Bug Fixes**: Check [help wanted issues](https://github.com/obsidianmd/obsidian-clipper/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22).  

---

### Roadmap  
- [ ] Separate Web Clipper icon  
- [ ] Highlight annotations  
- [ ] Template directory  
- [x] Template validation and logic (if/for)  
- [x] Local image saving (added in Obsidian 1.8.0)  
- [x] Multilingual UI translations  

---

### Developers  
**Build the extension**:  
```bash
npm run build
```  
Output directories:  
- `dist/` (Chromium)  
- `dist_firefox/` (Firefox)  
- `dist_safari/` (Safari)  

**Install locally**:  
- **Chromium**: Load unpacked `dist/` via `chrome://extensions`.  
- **Firefox**: Load temporary add-on via `about:debugging`.  
- **Safari/iOS**: Use Xcode with the `dist_safari/` directory.  

**Run tests**:  
```bash
npm test
# Or in watch mode
npm run test:watch
```  

---

### Third-Party Libraries  
- [webextension-polyfill](https://github.com/mozilla/webextension-polyfill) (cross-browser compatibility)  
- [defuddle](https://github.com/ke) (incomplete reference; likely a typo or placeholder)  

## Key Points  
- Cross-browser support for Chrome, Firefox, Safari, and Edge.  
- Stores web clippings as Markdown for offline access.  
- Active translation community and contributor-friendly roadmap.  
- Advanced features like template logic and local image saving.  

## Sources  
- [GitHub](https://github.com/obsidianmd/obsidian-clipper)  
- [원본](raw/ingest/tech/2026-04-12-obsidian-web-clipper.md)