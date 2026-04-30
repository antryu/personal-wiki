---
title: Attack Categories — Guardy taxonomy
date: 2026-04-27
tags: [security, guardy, taxonomy, owasp]
source: Z4nzu/hackingtool (65k★) + OWASP Top 10 2021
---

# Attack Categories — Guardy taxonomy

Ten categories ported from `Z4nzu/hackingtool`, each mapped to:
- **Definition** — what this attack class actually does
- **Example tools** — what attackers use
- **Recommended dedicated tool** — what Guardy uses to *defend* against it (replaces hackingtool's bundled wrapper to avoid maintenance + lock-in per `no_vendor_lockin.md`)
- **Defense pattern** — code-level + ops-level mitigation

> Guardy is **read-only**. Tools listed under "recommended" below are detection
> + observation tools, not exploitation tools. We do not run offensive scanners
> against any asset Andrew does not own.

---

## 1. Anonymity / OPSEC

**Definition:** techniques attackers use to hide origin (Tor, proxychains, anon-surf, MAC spoofing).

**Example tools:** Anonsurf, Multitor, Tor.

**Recommended dedicated tool (defensive):** `falco` (runtime behavior anomaly), `osquery` (host telemetry).

**Defense pattern:**
- Log + alert on Tor exit-node IPs hitting auth endpoints (use ProjectHoneypot or maxmind GeoIP categorization)
- Rate-limit per identity, not per IP
- For MyBidWise: log every login source, flag impossible-travel patterns

---

## 2. Information Gathering / Recon

**Definition:** passive + active enumeration before exploitation (subdomains, open ports, tech fingerprinting, leaked-credential search).

**Example tools:** Nmap, Amass, Sublist3r, theHarvester, Shodan API.

**Recommended dedicated tool:** **`nuclei`** (Guardy uses it via `sec_web.sh` for CVE/tech detect against own assets).

**Defense pattern:**
- Minimize subdomain sprawl (audit DNS quarterly)
- Disable unused ports at firewall (DigitalOcean firewall on `159.223.77.203`)
- Strip Server / X-Powered-By headers
- HSTS preload eligibility for `mybidwise.com`

---

## 3. SQL Injection

**Definition:** untrusted input concatenated into SQL queries → arbitrary read/write of database.

**Example tools:** sqlmap, SQLi Dumper, NoSQLMap.

**Recommended dedicated tool:** **`semgrep`** with sql-injection rules + parameterized-query lints, plus `nuclei` SQLi templates for endpoint testing on own assets.

**Defense pattern:**
- Parameterized queries always (Supabase RPC, Prisma, raw `$1` placeholders for `pg`)
- ORM-only patterns; if raw SQL is unavoidable, lint with `semgrep` SQLi rules in CI
- Never concatenate user input into SQL strings — `${userId}` in template literal = critical finding
- Apply principle of least privilege at DB user level

OWASP A03 (Injection).

---

## 4. XSS / Cross-Site Scripting

**Definition:** untrusted input rendered as HTML/JS in another user's browser → session hijack, credential theft.

**Example tools:** XSStrike, BeEF, XSpear.

**Recommended dedicated tool:** **`semgrep`** + `nuclei` XSS templates + browser CSP-evaluator.

**Defense pattern:**
- Output encoding: React/Vue auto-escape JSX/template; never `dangerouslySetInnerHTML` with user input
- Set strict CSP: `default-src 'self'; script-src 'self' 'nonce-...'`
- HttpOnly + Secure + SameSite=Lax on cookies
- Sanitize at storage AND render time (defense in depth)

OWASP A03.

---

## 5. Password / Credential Attacks

**Definition:** brute force, credential stuffing, hash cracking.

**Example tools:** Hydra, John the Ripper, hashcat, CredSniper, Hydra-CredCrack.

**Recommended dedicated tool:** **HaveIBeenPwned API** (passive check), **`gitleaks`** (Guardy's `sec_secrets.sh`), `argon2-cffi` for hashing in own code.

**Defense pattern:**
- Argon2id or bcrypt(cost≥12) — never SHA-only, never plain text
- Rate-limit auth endpoints per identity
- HIBP password check on signup ("if pwned, reject")
- 2FA for admin accounts (TOTP, not SMS)
- Detect hardcoded creds via `sec_secrets.sh` weekly

OWASP A07 (Auth Failures).

---

## 6. DDoS / Stress

**Definition:** overwhelming a target with traffic to deny service to legitimate users.

**Example tools:** SlowHTTPTest, GoldenEye, Slowloris, hping3.

**Recommended dedicated tool:** **Cloudflare** (or BunnyCDN) at edge + `fail2ban` at host.

**Defense pattern:**
- CDN/WAF at edge (Cloudflare for `mybidwise.com`)
- Rate-limit at API gateway (Vercel rate-limit, FastAPI middleware for kolaw)
- Tune kernel net.core somaxconn / tcp_syncookies on `159.223.77.203`
- Monitor: Grafana on Capital y-tower for anomaly spikes
- Note: solo-founder budget — accept fragility on non-revenue paths

---

## 7. Payload Generation / Backdoors

**Definition:** building executable payloads that establish persistent access (reverse shells, backdoor binaries, malicious browser extensions).

**Example tools:** msfvenom, TheFatRat, Veil, MSFPC.

**Recommended dedicated tool:** **`syft` + `grype`** (SBOM + CVE) for supply-chain visibility, **`trivy`** for container scans.

**Defense pattern:**
- SBOM for every build (track what's actually in the artifact)
- Pin dependency versions; review every transitive update
- Reproducible builds (Docker SHA-pinned base images)
- Integrity checks (subresource integrity for CDN scripts, signed releases)

OWASP A06 (Vulnerable Components), A08 (Software & Data Integrity Failures).

---

## 8. Steganography / Forensics

**Definition:** hiding data inside other data (images, audio, network packets); also: post-incident analysis.

**Example tools:** Steghide, StegCracker, Autopsy, Volatility, FTK.

**Recommended dedicated tool:** **CISA-style log retention + Velociraptor** (incident response) — Guardy maintains audit-log.md as bottom-tier forensic artifact.

**Defense pattern:**
- Retain logs ≥90 days (auth, db query, edge access)
- Restrict cloud-storage uploads to known MIME types (no arbitrary blobs in user-content buckets)
- File-integrity monitoring on Capital y-tower (`tripwire` or AIDE) for trade-script directories
- DO NOT confuse this category with cryptography — different threat model

OWASP A09 (Logging & Monitoring Failures).

---

## 9. Web Attacks (general)

**Definition:** umbrella for SSRF, IDOR, file-inclusion, broken access control, insecure deserialization, exposed admin panels.

**Example tools:** Burp, OWASP ZAP, wfuzz.

**Recommended dedicated tool:** **OWASP ZAP** (used in `sec_web.sh --deep` baseline mode), **`semgrep`** + manual review for IDOR/SSRF.

**Defense pattern:**
- IDOR: every protected resource MUST check `req.user.id == resource.owner_id` (not just "is logged in")
- SSRF: validate outbound URLs against allowlist; disallow `localhost` / `169.254.*` / private IPs from user-supplied URLs
- File upload: MIME sniff + magic-byte check + extension check + size limit, store outside web-root
- Insecure deserialization: prefer JSON over pickle/eval/yaml-load-all-the-things

OWASP A01 (Broken Access Control), A05 (Security Misconfiguration), A10 (SSRF).

---

## 10. Mobile / Reverse Engineering

**Definition:** extracting secrets from APKs/IPAs, runtime tampering of mobile apps (Frida hooks, Objection, MobSF).

**Example tools:** apktool, Frida, MobSF, Objection.

**Recommended dedicated tool:** **`MobSF`** (static + dynamic analysis on Andrew's own builds only).

**Defense pattern:**
- No secrets in client bundles (use proxy + per-user JWT)
- Code obfuscation for IP-protection-grade apps (Bid mobile launching this week)
- Certificate pinning for sensitive endpoints
- Detect rooted/jailbroken devices for high-trust flows
- Out of Phase 1 scope — revisit when Bid mobile is in app store

---

## Cross-cutting: OWASP Top 10 ↔ category map

| OWASP 2021 | Category(s) above |
|---|---|
| A01 Broken Access Control | 9 |
| A02 Cryptographic Failures | 5 |
| A03 Injection | 3, 4 |
| A04 Insecure Design | 9 |
| A05 Security Misconfiguration | 2, 9 |
| A06 Vulnerable Components | 7 |
| A07 Auth Failures | 5 |
| A08 Software/Data Integrity | 7 |
| A09 Logging Failures | 8 |
| A10 SSRF | 9 |

## Update protocol

When Guardy encounters a new technique not covered above:
1. Add a new section (or extend an existing one)
2. Cite source CVE / writeup
3. Map to OWASP category in the table
4. Note recommended dedicated tool (must be self-hosted-able per `no_vendor_lockin.md`)

When recommending a new tool to Andrew:
- Self-hosted-able (or own API key)
- Active maintenance (last release ≤ 12mo)
- Clear exit path (data export, no proprietary format lock-in)
