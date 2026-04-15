<!-- GitHub Trending: TypeScript | 4,234 stars | +33 today -->

# backnotprop/plannotator

> Annotate and review coding agent plans and code diffs visually, share with your team, send feedback to agents with one click.

## Repository Info
- **URL**: https://github.com/backnotprop/plannotator
- **Stars**: 4,237
- **Forks**: 291
- **Language**: TypeScript
- **License**: Apache License 2.0
- **Created**: 2025-12-28
- **Updated**: 2026-04-15
- **Topics**: claude-code, codex, obsidian, opencode, pi-mono, plan-mode
- **Open Issues**: 88

## README (excerpt)
<p align="center">
  <img src="apps/marketing/public/og-image.webp" alt="Plannotator" width="80%" />
</p>

# Plannotator

Interactive Plan & Code Review for AI Coding Agents. Mark up and refine your plans or code diffs using a visual UI, share for team collaboration, and seamlessly integrate with **Claude Code**, **Copilot CLI**, **Gemini CLI**, **OpenCode**, **Pi**, and **Codex**.

**Plan Mode Demos:**
<table>
<tr>
<td align="center" width="50%">
<h3>Claude Code</h3>
<a href="https://www.youtube.com/watch?v=a_AT7cEN_9I">
<img src="apps/marketing/public/youtube.png" alt="Claude Code Demo" width="100%" />
</a>
<p><a href="https://www.youtube.com/watch?v=a_AT7cEN_9I">Watch Demo</a></p>
</td>
<td align="center" width="50%">
<h3>OpenCode</h3>
<a href="https://youtu.be/_N7uo0EFI-U">
<img src="apps/marketing/public/youtube-opencode.png" alt="OpenCode Demo" width="100%" />
</a>
<p><a href="https://youtu.be/_N7uo0EFI-U">Watch Demo</a></p>
</td>
</tr>
</table>

**New:** [Code Review](https://x.com/backnotprop/status/2031145299738263567?s=20)


### Features

<table>
<tr><td><strong>Visual Plan Review</strong></td><td>Built-in hook</td><td>Approve or deny agent plans with inline annotations</td></tr>
<tr><td><strong>Plan Diff</strong></td><td>Automatic</td><td>See what changed when the agent revises a plan</td></tr>
<tr><td><strong>Code Review</strong></td><td><code>/plannotator-review</code></td><td>View git diffs or remote PRs. Package annotations and ask AI about the code as you review.</td></tr>
<tr><td><strong>Annotate Any File</strong></td><td><code>/plannotator-annotate</code></td><td>Annotate any markdown file and send feedback to your agent</td></tr>
<tr><td><strong>Annotate Last Message</strong></td><td><code>/plannotator-last</code></td><td>Annotate the agent's last response and send structured feedback</td></tr>
</table>

#### Sharing Plans

Plannotator lets you privately share plans, annotations, and feedback with colleagues. For example, a colleague can annotate a shared plan, and you can import their feedback to send directly back to the coding agent.

**Small plans** are encoded entirely in the URL hash. No server involved, nothing stored anywhere.

**Large plans** use a short link service with **end-to-end encryption**. Your plan is encrypted with AES-256-GCM in your browser before upload. The server stores only ciphertext it cannot read. The decryption key lives only in the URL you share. Pastes auto-delete after 7 days.

- Zero-knowledge storage, similar to [PrivateBin](https://privatebin.info/)
- Fully open source and **self-hostable** ([see docs](https://plannotator.ai/docs/guides/sharing-and-collaboration/))

## Install

- [Claude Code](#install-for-claude-code)
- [Copilot CLI](#install-for-copilot-cli)
- [Gemini CLI](#install-for-gemini-cli)
- [OpenCode](#install-for-opencode)
- [Pi](#install-for-pi)
- [Codex](#install-for-codex)

## Install for Claude Code

**Install the `plannotator` command:**

**macOS / Linux / WSL:**

```bash
curl -fsSL https://plannotator.ai/install.sh | bash
```

**Windows PowerShell:**

```powershell
irm https://plannotator.ai/install.ps1 | iex
```

**Then in Claude Code:**

```
/plugin marketplace add backnotprop/plannotator
```

Restart Claude Code after plugin install.

<details>
<summary>Pin a specific version or verify provenance</summary>

```bash
curl -fsSL https://plannotator.ai/install.sh | bash -s -- --version vX.Y.Z
```

```powershell
& ([scriptblock]::Create((irm https://plannotator.ai/install.ps1))) -Version vX.Y.Z
```

Every released binary ships with a SHA256 sidecar (verified automatically). [SLSA provenance](https://slsa.dev/) verification is supported from v0.17.2 onwards — see the [installation docs](https://plannotator.ai/docs/getting-started/installation/#verifying-your-install) for details.

</details>

See [apps/hook/README.md](apps/hook/README.md) for detailed installation instructions including a `manual hook` approach.

---

## Install for Copilot CLI

**Install th