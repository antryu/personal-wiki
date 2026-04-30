---
title: Andrew Asset Inventory — Guardy authoritative scope
date: 2026-04-27
tags: [security, guardy, inventory, scope]
mirror: ~/.claude/agents/guardy.md (Andrew_Asset_Map section)
---

# Andrew Asset Inventory

Authoritative scope for Guardy. Every asset listed here is **in scope**.
Anything not listed is **out of scope** — Guardy refuses to scan it even
on direct user request (per `~/.claude/agents/guardy.md` REFUSAL PROTOCOL).

To extend allowlist: edit `~/.claude/scripts/sec_web.sh` (`ALLOWLIST_HOSTS`,
`ALLOWLIST_WILDCARDS`) **and** add to this file in the same commit.

## Public web assets

| Asset | URL | Server | Owner subsidiary | Priority |
|---|---|---|---|---|
| MyBidWise marketing | `https://mybidwise.com` | DigitalOcean Singapore `159.223.77.203` | _y Bid | HIGHEST |
| MyBidWise app | `https://app.mybidwise.com` | Vercel (antryu@gmail.com) | _y Bid | HIGHEST |

## Internal (Tailscale-only, not public)

| Asset | URL | Host | Owner | Priority |
|---|---|---|---|---|
| Capital y-tower | `http://100.119.97.60:3000` | M1 (Andrew personal) | _y Capital | HIGH |
| kolaw API | `http://127.0.0.1:8100` | m4max | platform / Legaly | MEDIUM |

## GitHub repositories (3 accounts)

### `antryu` (primary)
- `antryu/y-company` — y-tower source, edited on m4max
- `antryu/kolaw` — Korean law API
- `antryu/hydrogen-law` — H-law project
- Other private repos under this account

### `antryu1b`
- Legacy MyBidWise repos (audit periodically — likely contains old credentials)

### `antryu2b`
- `antryu2b/_y` — public-face mirror (~22★)
- `antryu2b/y-company` — stale mirror (~3 weeks old)

## Local environments

### m4max (Mac, primary dev)
- `~/PRJs/` — all code projects
- `~/y-capital/` — Capital trading scripts + V23 baseline
- `~/.claude/` — agent definitions, scripts, logs
- `~/Thairon/obsidian-vault/` — knowledge base (legal, security, AI-tools)
- macOS Keychain: Anthropic, AWS, Stripe, OpenAI, GitHub PAT (3 accounts), DigitalOcean

### M1 (Mac, Andrew daily-use)
- `~/Thairon/y-company/` — **SACRED** Andrew WIP, never edit directly
- `~/Thairon/obsidian-vault/` — read-only mirror (synced via Obsidian Sync? or Tailscale rsync — verify)
- macOS Keychain: same vendors as m4max but separate keys
- **Risk note:** uncommitted WIP (typically 20-70 files) means secrets on M1 may not be in any git history

### iOS / Android (Andrew personal)
- Out of Phase 1 scope. Revisit when Bid mobile app launches this week.

## VITA placeholder

VITA is the 3rd subsidiary (data platform, post-VitalRing). When PoC URL is
assigned:
1. Add to `sec_web.sh` ALLOWLIST_HOSTS
2. Add to "Public web assets" table above
3. Note any 의료기기법/의료법 specific compliance requirements

## Update log

- 2026-04-27 — File created during Guardy MVP Phase 1 (Buildy delegation, brief `~/y-tower/tasks/buildy-guardy-skill-mvp.md`)
- _next: when Vita PoC URL is set, when 4th GitHub account is created, when Bid mobile launches_

## Out of scope (explicit refusal)

The following are NEVER in scope for Guardy regardless of context:

- Any `*.naver.com`, `*.kakao.com`, `*.google.com` (3rd-party even if Andrew uses)
- Any 정부24 / 나라장터 endpoints (they are MyBidWise's *targets*, not Andrew's assets)
- Any URL not in `sec_web.sh` allowlist
- Any GitHub repo not under `antryu*` accounts
- Any local path outside Andrew's $HOME on either Mac

If a user (including Andrew) requests a scan outside this list, Guardy
must refuse and either:
1. Suggest the user add the asset to inventory (if it's actually his)
2. Decline with a citation to this file (if it's not)
