<!-- GitHub Trending: JavaScript | 64,004 stars | +315 today -->

# gorhill/uBlock

> uBlock Origin - An efficient blocker for Chromium and Firefox. Fast and lean.

## Repository Info
- **URL**: https://github.com/gorhill/uBlock
- **Stars**: 64,004
- **Forks**: 4,071
- **Language**: JavaScript
- **License**: GNU General Public License v3.0
- **Created**: 2015-04-01
- **Updated**: 2026-04-29
- **Topics**: blocker, browser-extension, chromium, firefox, javascript, ublock, ublock-origin
- **Open Issues**: 17

## README (excerpt)
[![Badge Commits]][Commit Rate]
[![Badge Issues]][Issues]
[![Badge Localization]][Crowdin]
[![Badge License]][License]
[![Badge NPM]][NPM]
[![Badge Mozilla]][Mozilla]
[![Badge Chrome]][Chrome]
[![Badge Edge]][Edge]

***

<h1 align="center">
<sub>
<img src="https://github.com/gorhill/uBlock/blob/master/src/img/ublock.svg" height="38" width="38">
</sub>
uBlock Origin (uBO)
</h1>

| Browser   | Install from ... | Status |
| :-------: | ---------------- | ------ |
| <img src="https://github.com/user-attachments/assets/b0136512-56a5-4856-8c50-4971c957a24f" alt="Get uBlock Origin for Firefox"> | <a href="https://addons.mozilla.org/addon/ublock-origin/">Firefox Add-ons</a> | [uBO works best on Firefox](https://github.com/gorhill/uBlock/wiki/uBlock-Origin-works-best-on-Firefox) |
| <img src="https://github.com/user-attachments/assets/3a7569f8-688b-4eb1-a643-8d0fe173aefe" alt="Get uBlock Origin for Microsoft Edge"> | <a href="https://microsoftedge.microsoft.com/addons/detail/ublock-origin/odfafepnkmbhccpbejgmiehpchacaeak">Edge Add-ons</a> |
| <img src="https://github.com/user-attachments/assets/938f080c-fe64-4e48-8b89-4bfceabb56e6" alt="Get uBlock Origin for Opera"> | <a href="https://addons.opera.com/extensions/details/ublock/">Opera Add-ons</a> |
| <img src="https://github.com/user-attachments/assets/5463ef88-873b-4516-8514-5277664cfde7" alt="Get uBlock Origin for Chromium"> | <a href="https://chromewebstore.google.com/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm">Chrome Web Store</a> | <a href="https://github.com/uBlockOrigin/uBlock-issues/wiki/About-Google-Chrome's-%22This-extension-may-soon-no-longer-be-supported%22">About Google Chrome's "This extension may soon no longer be supported"</a><br>End of support on Chrome 139 |
| <img src="https://github.com/user-attachments/assets/2e9037c4-836d-44c1-a716-ba96e89daaff" alt="Get uBlock Origin for Thunderbird"> | <a href="https://addons.thunderbird.net/thunderbird/addon/ublock-origin/">Thunderbird Add-ons</a> | [No longer updated and stuck at 1.49.2.](https://github.com/uBlockOrigin/uBlock-issues/issues/2928) Later versions require "GitHub - Releases". |
| <img src="https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg" height="50" alt="Get uBlock Origin through GitHub"> | <a href="https://github.com/gorhill/uBlock/releases">GitHub - Releases</a> | Stable and development versions on Firefox, Chromium MV2, and Thunderbird. Must be placed manually into web browsers; the Chromium and Thunderbird versions usually won't auto-update.

***

uBlock Origin (uBO) is a CPU and memory-efficient [wide-spectrum content blocker][Blocking] for Chromium and Firefox. It blocks ads, trackers, coin miners, popups, annoying anti-blockers, malware sites, etc., by default using [EasyList][EasyList], [EasyPrivacy][EasyPrivacy], [Peter Lowe's Blocklist][Peter Lowe's Blocklist], [Online Malicious URL Blocklist][Malicious Blocklist], and uBO [filter lists][uBO Filters]. There are many other lists available to block even more. Hosts files are also supported. uBO uses the EasyList filter syntax and [extends][Extended Syntax] the syntax to work with custom rules and filters.

You may easily unselect any preselected filter lists if you think uBO blocks too much. For reference, Adblock Plus installs with only EasyList, ABP filters, and Acceptable Ads enabled by default.

It is important to note that using a blocker is **NOT** [theft]. Do not fall for this creepy idea. The _ultimate_ logical consequence of `blocking = theft` is the criminalization of the inalienable right to privacy.

Ads, "unintrusive" or not, are just the visible portion of the privacy-invading means entering your browser when you visit most sites. **uBO's primary goal is to help users neutralize these privacy-invading methods** in a way that welcomes those users who do not wish to use more technical means.

***

* [Documentation](#documentation)
* [Installation](#installation)
  * [Firefox](#firefox)
  * [Thunderbir