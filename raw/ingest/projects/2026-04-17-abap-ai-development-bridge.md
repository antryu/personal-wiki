<!-- GitHub Trending: Go | 284 stars | +6 today -->

# oisee/vibing-steampunk

> vs-punk: ADT to MCP bridge - Vibe code in ABAP / AMDP

## Repository Info
- **URL**: https://github.com/oisee/vibing-steampunk
- **Stars**: 284
- **Forks**: 64
- **Language**: Go
- **License**: MIT License
- **Created**: 2025-12-01
- **Updated**: 2026-04-17
- **Topics**: abap, adt, mcp, vibe-coding
- **Open Issues**: 16

## README (excerpt)
# Vibing Steampunk (vsp)

**AI-Agentic Development Unlocked for ABAP** — ECC, S/4HANA, everywhere ADT is available.

> **ADT ↔ MCP Bridge**: Gives Claude (and other AI assistants) full access to SAP ADT APIs.
> Read code, write code, debug, deploy, run tests — all through natural language (or DSL for automation).
>
> See also: [OData ↔ MCP Bridge](https://github.com/oisee/odata_mcp_go) for SAP data access.
>
> **Want to review or test?** Start here: **[Reviewer Guide](docs/reviewer-guide.md)** — 8 hands-on tasks, no SAP needed.

![Vibing ABAP Developer](./media/vibing-steampunk.png)

## Hot Right Now

### Package Analysis Suite

Five analysis commands that answer real questions about your ABAP packages:

```bash
vsp health --package '$ZDEV'                    # tests + ATC + boundaries + staleness
vsp health --package '$ZDEV' --report html      # full HTML report with details
vsp slim '$ZDEV' --level methods                # dead code detection (method-level)
vsp api-surface '$ZDEV' --include-subpackages   # Clean Core: which standard APIs do you use?
vsp boundaries '$ZDEV'                          # directional boundary crossing analysis
vsp boundaries '$ZDEV' --format mermaid         # visual graph with package subgraphs
```

### Transport & Change History

```bash
vsp changelog '$ZDEV' --since 20260101          # what changed in this package?
vsp changes '$ZDEV' --attribute SAPTEST         # group transports by CR attribute (E070A)
```

### Directional Boundary Crossings

Not just "crossed" or "not crossed" — **which direction** the dependency flows:

| Direction | Meaning | Verdict |
|-----------|---------|---------|
| UPWARD | child → parent | OK |
| COMMON | anything → _00 package | OK |
| SIBLING | module → module | BAD — extract to common |
| DOWNWARD | parent → child | BAD — inverts hierarchy |
| EXTERNAL | cross-hierarchy | WARN — isolation violation |
| CIRCULAR | A→B + B→A siblings | BAD — coupled modules |

Export to 7 formats: `text`, `json`, `md`, `mermaid`, `html`, `dot` (Graphviz), `plantuml`, `graphml` (Gephi/yEd).

### Side Effect & LUW Analysis

The parser detects transactional patterns in ABAP source:

| What | Detected |
|------|----------|
| DB read/write | SELECT, INSERT, UPDATE, DELETE, MODIFY |
| LUW ownership | COMMIT WORK, ROLLBACK WORK |
| Deferred execution | IN UPDATE TASK, IN BACKGROUND TASK |
| Async | STARTING NEW TASK (aRFC), SUBMIT VIA JOB |
| External calls | RFC DESTINATION, HTTP client, APC/WebSocket |
| Transactions | CALL TRANSACTION, LEAVE TO TRANSACTION |
| Transformations | CALL TRANSFORMATION |

LUW classification: **safe** / **participant** / **owner** / **unsafe**.

### Health Reports

Full health reports with test details, ATC findings, and boundary crossings:

```bash
vsp health --package '$ZDEV' --details          # text with all details
vsp health --package '$ZDEV' --report md        # → _ZDEV.md
vsp health --package '$ZDEV' --report html      # → _ZDEV.html
vsp health --package '$ZDEV' --report my.html   # → my.html
```

Tests discover embedded local test classes across the full package hierarchy — the same as Eclipse Ctrl+Shift+F10.

### More

- `vsp graph co-change CLAS ZCL_FOO` for transport-based co-change analysis
- `vsp graph where-used-config ZKEKEKE` for heuristic TVARVC usage discovery
- `.vsp.json` `transport_attribute` for per-system CR correlation config
- **[Analysis & Refactoring Guide](docs/analysis-refactoring-guide.md)** for what these commands do
- **[Graph Guide](docs/graph-guide.md)** for examples, data sources, and current limits

## 0x101 Stars!

Read the latest article: **[VSP IS ONLY 5% EXPLORED](articles/2026-04-07-vsp-only-5-percent-explored.md)** — 257 stars, 147 tools, compilers, graph analysis, and why 95% of the surface is still unexplored.

Previous: **[Agentic ABAP at 100 Stars](articles/2026-02-18-100-stars-celebration.md)**

## What's New — Analysis & Intelligence Sprint

> **Sprint goal:** move from CRUD tool to ABAP intelligence platform. P