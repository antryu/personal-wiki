<!-- GitHub Trending: Go | 28,164 stars | +17 today -->

# projectdiscovery/nuclei

> Nuclei is a fast, customizable vulnerability scanner powered by the global security community and built on a simple YAML-based DSL, enabling collaboration to tackle trending vulnerabilities on the internet. It helps you find vulnerabilities in your applications, APIs, networks, DNS, and cloud configurations.

## Repository Info
- **URL**: https://github.com/projectdiscovery/nuclei
- **Stars**: 28,164
- **Forks**: 3,377
- **Language**: Go
- **License**: MIT License
- **Created**: 2020-04-03
- **Updated**: 2026-04-30
- **Topics**: attack-surface, cve-scanner, dast, hacktoberfest, nuclei-engine, security, security-scanner, subdomain-takeover, vulnerability-assessment, vulnerability-detection, vulnerability-scanner
- **Open Issues**: 129

## README (excerpt)
![nuclei](/static/nuclei-cover-image.png)

<div align="center">
  
  <a href="https://github.com/projectdiscovery/nuclei/blob/main/README.md">`English`</a> •
  <a href="https://github.com/projectdiscovery/nuclei/blob/main/README_CN.md">`中文`</a> •
  <a href="https://github.com/projectdiscovery/nuclei/blob/main/README_KR.md">`Korean`</a> •
  <a href="https://github.com/projectdiscovery/nuclei/blob/main/README_ID.md">`Indonesia`</a> •
  <a href="https://github.com/projectdiscovery/nuclei/blob/main/README_ES.md">`Spanish`</a> •
  <a href="https://github.com/projectdiscovery/nuclei/blob/main/README_JP.md">`日本語`</a> •
  <a href="https://github.com/projectdiscovery/nuclei/blob/main/README_PT-BR.md">`Portuguese`</a> •
  <a href="https://github.com/projectdiscovery/nuclei/blob/main/README_TR.md">`Türkçe`</a>
  
</div>

<p align="center">

<a href="https://docs.projectdiscovery.io/tools/nuclei/overview?utm_source=github&utm_medium=web&utm_campaign=nuclei_readme"><img src="https://img.shields.io/badge/Documentation-%23000000.svg?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1ib29rLW9wZW4iPjxwYXRoIGQ9Ik0xMiA3djE0Ii8+PHBhdGggZD0iTTMgMThhMSAxIDAgMCAxLTEtMVY0YTEgMSAwIDAgMSAxLTFoNWE0IDQgMCAwIDEgNCA0IDQgNCAwIDAgMSA0LTRoNWExIDEgMCAwIDEgMSAxdjEzYTEgMSAwIDAgMS0xIDFoLTZhMyAzIDAgMCAwLTMgMyAzIDMgMCAwIDAtMy0zeiIvPjwvc3ZnPg==&logoColor=white"></a>
&nbsp;&nbsp;
<a href="https://github.com/projectdiscovery/nuclei-templates"><img src="https://img.shields.io/badge/Templates Library-%23000000.svg?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXNoaWVsZCI+PHBhdGggZD0iTTIwIDEzYzAgNS0zLjUgNy41LTcuNjYgOC45NWExIDEgMCAwIDEtLjY3LS4wMUM3LjUgMjAuNSA0IDE4IDQgMTNWNmExIDEgMCAwIDEgMS0xYzIgMCA0LjUtMS4yIDYuMjQtMi43MmExLjE3IDEuMTcgMCAwIDEgMS41MiAwQzE0LjUxIDMuODEgMTcgNSAxOSA1YTEgMSAwIDAgMSAxIDF6Ii8+PC9zdmc+&logoColor=white"></a>
&nbsp;&nbsp;
<a href="https://discord.gg/projectdiscovery?utm_source=github&utm_medium=web&utm_campaign=nuclei_readme"><img src="https://img.shields.io/badge/Discord-%235865F2.svg?style=for-the-badge&logo=discord&logoColor=white"></a>

<hr>

</p>

<br>

**Nuclei is a modern, high-performance vulnerability scanner that leverages simple YAML-based templates. It empowers you to design custom vulnerability detection scenarios that mimic real-world conditions, leading to zero false positives.**

- Simple YAML format for creating and customizing vulnerability templates.
- Contributed by thousands of security professionals to tackle trending vulnerabilities.
- Reduce false positives by simulating real-world steps to verify a vulnerability.
- Ultra-fast parallel scan processing and request clustering.
- Integrate into CI/CD pipelines for vulnerability detection and regression testing.
- Supports multiple protocols like TCP, DNS, HTTP, SSL, WHOIS, JavaScript, Code and more.
- Integrate with Jira, Splunk, GitHub, Elastic, GitLab.

<br>
<br>

## Table of Contents

- [**`Get Started`**](#get-started)
  - [_`1. Nuclei CLI`_](#1-nuclei-cli)
  - [_`2. Pro and Enterprise Editions`_](#2-pro-and-enterprise-editions)
- [**`Documentation`**](#documentation)
  - [_`Command Line Flags`_](#command-line-flags)
  - [_`Single target scan`_](#single-target-scan)
  - [_`Scanning multiple targets`_](#scanning-multiple-targets)
  - [_`Network scan`_](#network-scan)
  - [_`Scanning with your custom template`_](#scanning-with-your-custom-template)
  - [_`Connect Nuclei to ProjectDiscovery_`_](#connect-nuclei-to-projectdiscovery)
- [**`Nuclei Templates, Co