---
title: Security Knowledge Base — Guardy
date: 2026-04-27
tags: [security, guardy, knowledge-base]
owner: Guardy (M1 9F infosec)
---

# Security Knowledge Base — Guardy

Guardy's persistent reference library, mirroring the structure of `legal/`
(Legaly) and `Trading/` (Cap). Updated as Guardy completes audits, learns
new attack patterns, or onboards new assets.

## Contents

- [[attack-categories]] — taxonomy of offensive techniques (10 categories from `Z4nzu/hackingtool`), each mapped to a recommended dedicated tool + Guardy's defense pattern
- [[andrew-asset-inventory]] — formal inventory of Andrew's assets in scope (mirror of `~/.claude/agents/guardy.md` Asset Map; updated as Vita / new domains come online)
- [[audit-log]] — running log of every `sec_audit.sh` run + targeted audits (Buildy/Guardy append after each run)

## Wrapper scripts (Guardy's interface)

| Script | Purpose | Output |
|---|---|---|
| `~/.claude/scripts/sec_secrets.sh <dir>` | gitleaks scan w/ redaction | `~/.claude/logs/guardy/secrets-*.json` |
| `~/.claude/scripts/sec_web.sh <url> [--deep]` | nuclei + testssl.sh + optional ZAP | `~/.claude/logs/guardy/web-*.json` |
| `~/.claude/scripts/sec_audit.sh --quick\|--full` | dispatcher composing both | `~/.claude/logs/guardy/audit-*.{md,json}` |

## Phase status

- **Phase 1 (MVP)** — 2026-04-27 — Bash wrappers + persona + KB seed (this state)
- **Phase 2** — TBD — own FastAPI server `~/PRJs/guardy/` parallel to kolaw

## Hard rules

- **Read-only.** No active exploitation, no Metasploit/Burp Pro, no `--batch --crawl` aggressive scanners.
- **Allowlist-enforced.** `sec_web.sh` refuses any URL not in `ALLOWLIST_HOSTS`/`ALLOWLIST_WILDCARDS`.
- **Andrew-owned only.** Never scan third-party assets even on user request.
- **Redact in output.** `sec_secrets.sh` redacts secret values to first 4 + last 4 + length.
- **Findings → Buildy for fixes.** Guardy reports; Buildy implements.

## Cross-references

- Persona definition: `~/.claude/agents/guardy.md`
- Past audit log: `~/y-tower/tasks/guardy.md`
- Discord channel: `#y-secops` (id `1498106074803208363`)
- Source tool inspiration: `~/Thairon/obsidian-vault/References/AI-Tools/2026-04-27-hackingtool.md`
