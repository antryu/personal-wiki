<!-- GitHub Trending: TypeScript | 23,195 stars | +52 today -->

# apify/crawlee

> Crawlee—A web scraping and browser automation library for Node.js to build reliable crawlers. In JavaScript and TypeScript. Extract data for AI, LLMs, RAG, or GPTs. Download HTML, PDF, JPG, PNG, and other files from websites. Works with Puppeteer, Playwright, Cheerio, JSDOM, and raw HTTP. Both headful and headless mode. With proxy rotation.

## Repository Info
- **URL**: https://github.com/apify/crawlee
- **Stars**: 23,195
- **Forks**: 1,356
- **Language**: TypeScript
- **License**: Apache License 2.0
- **Created**: 2016-08-26
- **Updated**: 2026-05-10
- **Topics**: apify, automation, crawler, crawling, headless, headless-chrome, javascript, nodejs, npm, playwright, puppeteer, scraper, scraping, typescript, web-crawler, web-crawling, web-scraping
- **Open Issues**: 179

## README (excerpt)
<h1 align="center">
    <a href="https://crawlee.dev">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/apify/crawlee/master/website/static/img/crawlee-dark.svg?sanitize=true">
          <img alt="Crawlee" src="https://raw.githubusercontent.com/apify/crawlee/master/website/static/img/crawlee-light.svg?sanitize=true" width="500">
        </picture>
    </a>
    <br>
    <small>A web scraping and browser automation library</small>
</h1>

<p align=center>
    <a href="https://trendshift.io/repositories/5179" target="_blank"><img src="https://trendshift.io/api/badge/repositories/5179" alt="apify%2Fcrawlee | Trendshift" style="width: 250px; height: 55px;" width="250" height="55"/></a>
</p>

<p align=center>
    <a href="https://www.npmjs.com/package/@crawlee/core" rel="nofollow"><img src="https://img.shields.io/npm/v/@crawlee/core.svg" alt="NPM latest version" data-canonical-src="https://img.shields.io/npm/v/@crawlee/core/next.svg" style="max-width: 100%;"></a>
    <a href="https://www.npmjs.com/package/@crawlee/core" rel="nofollow"><img src="https://img.shields.io/npm/dm/@crawlee/core.svg" alt="Downloads" data-canonical-src="https://img.shields.io/npm/dm/@crawlee/core.svg" style="max-width: 100%;"></a>
    <a href="https://discord.gg/jyEM2PRvMU" rel="nofollow"><img src="https://img.shields.io/discord/801163717915574323?label=discord" alt="Chat on discord" data-canonical-src="https://img.shields.io/discord/801163717915574323?label=discord" style="max-width: 100%;"></a>
    <a href="https://github.com/apify/crawlee/actions/workflows/test-ci.yml"><img src="https://github.com/apify/crawlee/actions/workflows/test-ci.yml/badge.svg?branch=master" alt="Build Status" style="max-width: 100%;"></a>
</p>

Crawlee covers your crawling and scraping end-to-end and **helps you build reliable scrapers. Fast.**

Your crawlers will appear human-like and fly under the radar of modern bot protections even with the default configuration. Crawlee gives you the tools to crawl the web for links, scrape data, and store it to disk or cloud while staying configurable to suit your project's needs.

Crawlee is available as the [`crawlee`](https://www.npmjs.com/package/crawlee) NPM package.

> 👉 **View full documentation, guides and examples on the [Crawlee project website](https://crawlee.dev)** 👈

> Do you prefer 🐍 Python instead of JavaScript? [👉 Checkout Crawlee for Python 👈](https://github.com/apify/crawlee-python).

## Installation

We recommend visiting the [Introduction tutorial](https://crawlee.dev/js/docs/introduction) in Crawlee documentation for more information.

> Crawlee requires **Node.js 16 or higher**.

### With Crawlee CLI

The fastest way to try Crawlee out is to use the **Crawlee CLI** and choose the **Getting started example**. The CLI will install all the necessary dependencies and add boilerplate code for you to play with.

```bash
npx crawlee create my-crawler
```

```bash
cd my-crawler
npm start
```

### Manual installation
If you prefer adding Crawlee **into your own project**, try the example below. Because it uses `PlaywrightCrawler` we also need to install [Playwright](https://playwright.dev). It's not bundled with Crawlee to reduce install size.

```bash
npm install crawlee playwright
```

```js
import { PlaywrightCrawler, Dataset } from 'crawlee';

// PlaywrightCrawler crawls the web using a headless
// browser controlled by the Playwright library.
const crawler = new PlaywrightCrawler({
    // Use the requestHandler to process each of the crawled pages.
    async requestHandler({ request, page, enqueueLinks, log }) {
        const title = await page.title();
        log.info(`Title of ${request.loadedUrl} is '${title}'`);

        // Save results as JSON to ./storage/datasets/default
        await Dataset.pushData({ title, url: request.loadedUrl });

        // Extract links from the current page
        // and add them to the crawling queue.
        await en