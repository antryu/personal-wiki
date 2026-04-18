<!-- GitHub Trending: TypeScript | 2,781 stars | +105 today -->

# DaKheera47/job-ops

> job-ops: DevOps principles applied to job hunting. A self-hosted pipeline to track, analyze, and assist your application process

## Repository Info
- **URL**: https://github.com/DaKheera47/job-ops
- **Stars**: 2,781
- **Forks**: 311
- **Language**: TypeScript
- **License**: Other
- **Created**: 2025-12-11
- **Updated**: 2026-04-18
- **Topics**: automation, career, dashboard, docker, job-search, jobhunt, jobtracker, nextjs, productivity, self-hosted, sponsorship
- **Open Issues**: 34

## README (excerpt)
<div align="center">

# Job<span>Ops</span>

**One search across every board. One click to tailor your CV. One place to track it all.**

Your ironman suit for job hunting. You still apply to every job yourself. JobOps just makes you ten times faster.

<br>

<a href="https://trendshift.io/repositories/22756" target="_blank"><img src="https://trendshift.io/api/badge/repositories/22756" alt="DaKheera47%2Fjob-ops | Trendshift" style="width: 250px; height: 55px;" width="250" height="55"/></a>

[![Stars](https://img.shields.io/github/stars/DaKheera47/job-ops?style=social)](https://github.com/DaKheera47/job-ops)
[![GHCR](https://img.shields.io/badge/docker-ghcr.io-blue?logo=docker&logoColor=white)](https://github.com/DaKheera47/job-ops/pkgs/container/job-ops)
[![Release](https://github.com/DaKheera47/job-ops/actions/workflows/ghcr.yml/badge.svg)](https://github.com/DaKheera47/job-ops/actions/workflows/ghcr.yml)
[![Contributors](https://img.shields.io/github/contributors-anon/dakheera47/job-ops)](https://github.com/DaKheera47/job-ops/graphs/contributors)

<br>

800+ users · 4,000+ job searches run · #3 on GitHub Trending for TypeScript

<br>

<img width="1200" height="600" alt="JobOps Dashboard" src="https://github.com/user-attachments/assets/14fdc392-0e96-43be-bc1f-cf819ab2afc4" />

</div>

---

## What is JobOps?

JobOps searches LinkedIn, Indeed, Glassdoor and 10+ job boards from one screen, rewrites your CV for each role, scores your fit, checks visa sponsorship status, and tracks every application in one place.

It does not auto-apply. Recruiters can tell when applications are automated and it gets you blacklisted. JobOps gives you the speed without sacrificing quality.

<div align="center">

https://github.com/user-attachments/assets/ec5bc249-aad5-41f2-b1ff-f7b3b6e6f7b8

</div>

---

## Quick Start

Prefer a guided walkthrough? Follow the [Self-Hosting Guide](https://jobops.dakheera47.com/docs/getting-started/self-hosting).

```bash
git clone https://github.com/DaKheera47/job-ops.git
cd job-ops
docker compose up -d
```

Open `http://localhost:3005` and follow the onboarding wizard. You'll be searching in under 10 minutes.

---

## How It Works

| Step | What happens |
|------|-------------|
| **Search** | Scrapes 10+ job boards for roles matching your criteria |
| **Score** | AI ranks each job 0-100 against your profile |
| **Tailor** | Generates a rewritten CV matched to each job description |
| **Export** | Creates a polished PDF locally, or via [Reactive Resume](https://rxresu.me) |
| **Track** | Connects to Gmail and auto-detects interviews, offers, and rejections |

---

## Supported Job Boards

| Platform | Focus |
|----------|-------|
| LinkedIn | Global |
| Indeed | Global |
| Glassdoor | Global |
| Adzuna | Multi-country API |
| Hiring Cafe | Global |
| startup.jobs | Startup/remote roles |
| Working Nomads | Remote-only |
| Gradcracker | STEM/Grads (UK) |
| UK Visa Jobs | Sponsorship (UK) |
| Golang Jobs | Go developers |

Custom extractors can be added via TypeScript. See the [extractor docs](https://jobops.dakheera47.com/docs/extractors/overview).

---

## Post-Application Tracking

Connect your Gmail and JobOps watches for recruiter replies automatically.

- *"We'd like to invite you to interview..."* → Status updates to **Interviewing**
- *"Unfortunately we won't be progressing..."* → Status updates to **Rejected**

No manual updates. No spreadsheets. See the [tracking docs](https://jobops.dakheera47.com/docs/features/post-application-tracking) for setup.

---

## AI Providers

JobOps works with the model provider you already use:

- Codex (local app-server in Docker, authenticated with `codex login`)
- OpenAI
- Google Gemini
- OpenRouter
- Any OpenAI-compatible endpoint (Ollama, LM Studio, etc.)

---

## Cloud

Don't want to self-host? JobOps Cloud gives you your own hosted instance with nothing to install.

<div align="center">

| | BYOK | Zero Setup |
|---|:---:|:---:|
| **Price** | £20/month | £30/month |
| **A