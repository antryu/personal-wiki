<!-- GitHub Trending: Python | 9,015 stars | +540 today -->

# anthropics/financial-services

> No description

## Repository Info
- **URL**: https://github.com/anthropics/financial-services
- **Stars**: 9,015
- **Forks**: 1,221
- **Language**: Python
- **License**: Apache License 2.0
- **Created**: 2026-02-23
- **Updated**: 2026-05-06
- **Topics**: N/A
- **Open Issues**: 59

## README (excerpt)
# Claude for Financial Services

Reference agents, skills, and data connectors for the financial-services workflows we see most — investment banking, equity research, private equity, and wealth management.

Everything here is available **two ways from one source**: install it as a [Claude Cowork](https://claude.com/product/cowork) plugin, or deploy it through the [Claude Managed Agents API](https://docs.claude.com/en/api/managed-agents) behind your own workflow engine. Same system prompt, same skills — you choose where it runs.

> [!IMPORTANT]
> Nothing in this repository constitutes investment, legal, tax, or accounting advice. These agents draft analyst work product — models, memos, research notes, reconciliations — for review by a qualified professional. They do not make investment recommendations, execute transactions, bind risk, post to a ledger, or approve onboarding; every output is staged for human sign-off. You are responsible for verifying outputs and for compliance with the laws and regulations that apply to your firm.

What's in the repo:

- **[Agents](#agents)** — named, end-to-end workflow agents (Pitch Agent, Market Researcher, GL Reconciler, …). Each ships as a Cowork plugin **and** as a [Claude Managed Agent template](./managed-agent-cookbooks) you deploy via `/v1/agents`.
- **[Vertical plugins](#vertical-plugins)** — the underlying skills, slash commands, and data connectors, bundled by FSI vertical. Install these on their own if you just want `/comps`, `/dcf`, `/earnings` and the connectors without a full agent.

## Agents

Each agent is named for the workflow it runs. They're starting points: install the ones that match your work, then tune the prompts, skills, and connectors to how your firm does it.

Each agent plugin is **self-contained** — it bundles the skills it uses, so installing the agent is all you need.

| Function | Agent | What it does |
|---|---|---|
| **Coverage & advisory** | **[Pitch Agent](./plugins/agent-plugins/pitch-agent)** | Comps, precedents, LBO → branded pitch deck, end to end |
| | **[Meeting Prep Agent](./plugins/agent-plugins/meeting-prep-agent)** | Briefing pack before every client meeting |
| **Research & modeling** | **[Market Researcher](./plugins/agent-plugins/market-researcher)** | Sector or theme → industry overview, competitive landscape, peer comps, ideas shortlist |
| | **[Earnings Reviewer](./plugins/agent-plugins/earnings-reviewer)** | Earnings call + filings → model update → note draft |
| | **[Model Builder](./plugins/agent-plugins/model-builder)** | DCF, LBO, 3-statement, comps — live in Excel |
| **Fund admin & finance ops** | **[Valuation Reviewer](./plugins/agent-plugins/valuation-reviewer)** | Ingests GP packages, runs valuation template, stages LP reporting |
| | **[GL Reconciler](./plugins/agent-plugins/gl-reconciler)** | Finds breaks, traces root cause, routes for sign-off |
| | **[Month-End Closer](./plugins/agent-plugins/month-end-closer)** | Accruals, roll-forwards, variance commentary |
| | **[Statement Auditor](./plugins/agent-plugins/statement-auditor)** | Audits LP statements before distribution |
| **Operations & onboarding** | **[KYC Screener](./plugins/agent-plugins/kyc-screener)** | Parses onboarding docs, runs the rules engine, flags gaps |

For Managed Agent deployment — `agent.yaml`, leaf-worker subagents, steering-event examples, and per-agent security notes — see **[managed-agent-cookbooks/](./managed-agent-cookbooks)**.

## Repository Layout

```
plugins/
  agent-plugins/               # Named agents — one self-contained plugin each
  vertical-plugins/            # Skill + command bundles by FSI vertical, plus MCP connectors
  partner-built/               # Partner-authored plugins (LSEG, S&P Global)
managed-agent-cookbooks/       # Claude Managed Agent cookbooks — one dir per agent
claude-for-msft-365-install/   # Admin tooling to provision the Claude Microsoft 365 add-in
scripts/                       # deploy-managed-agent.sh · check.py 