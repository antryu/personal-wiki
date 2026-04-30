---
title: Guardy Audit Log — running log of all sec_audit.sh runs
date: 2026-04-27
tags: [security, guardy, audit-log]
---

# Guardy Audit Log

Running log of every `sec_audit.sh` (and ad-hoc Guardy session) result.
Buildy / Guardy appends a row after each run; row format is fixed below
so future tooling can parse this as a structured table.

## Row format

```
## YYYY-MM-DD HH:MM (mode · elapsed)
- **Risk:** CRITICAL | HIGH | MEDIUM | LOW
- **Findings:** total / by-severity counts
- **Top 3:** rule@file:line · severity (one per line)
- **Json:** path
- **Notes:** anything Andrew should know (false positives, follow-up)
```

---

## 2026-04-27 09:25 (quick · 221s)

- **Risk:** CRITICAL
- **Findings:** 14 total · CRITICAL: 3 · HIGH: 8 · MEDIUM: 3
- **Top 3:**
  - `anthropic-api-key`@`/Users/andrew/PRJs/Guda/guda-chatbot/.env.local:2` · CRITICAL
  - `anthropic-api-key`@`/Users/andrew/PRJs/Guda/zhouyi-chatbot/.env.local:1` · CRITICAL
  - `anthropic-api-key`@`/Users/andrew/PRJs/Guda/translate_claude.py:7` · CRITICAL
- **Json:** `~/.claude/logs/guardy/audit-20260427-092214.json`
- **Md:**   `~/.claude/logs/guardy/audit-20260427-092214.md`
- **Detail:** `~/.claude/logs/guardy/audit-20260427-092214/` (per-target JSON)
- **Notes:**
  - First production run of Phase 1. Validates toolchain end-to-end.
  - 3 CRITICAL Anthropic API keys — same family as 2026-04-22 manual finding,
    confirms `translate_claude.py` is still leaking in 2 more `Guda/*-chatbot/.env.local`
    files. **Recommend Andrew rotate the key + remove from all 3 files within 24h.**
  - Web scan (mybidwise.com): nuclei 0 findings, TLS 0 HIGH/CRITICAL — clean.
  - Quick mode focuses on `~/PRJs/{y-company,kolaw,y-bot,Guda}` and `~/y-tower`.
    For broader coverage (full ~/PRJs + y-capital), use `--full` (30+ min).
  - First scan of full ~/PRJs (50GB inc. node_modules) timed out — added
    `sec_secrets.gitleaks.toml` config to exclude vendor/cache dirs.

---

## Historical context (pre-Guardy-skill)

### 2026-04-22 — Anthropic Keychain audit (manual, pre-skill)

- Trigger: routine credential review
- Found: hardcoded Anthropic API key in `~/PRJs/Guda/translate_claude.py`
- Severity: CRITICAL (live key in unencrypted file)
- Action: rotated, removed from file, added to .gitignore
- Reference: `~/y-tower/tasks/guardy.md`

This is the precedent that motivated Guardy MVP — manual audits don't scale.
`sec_audit.sh --quick` weekly should catch this class of issue automatically.
