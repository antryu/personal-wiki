<!-- GitHub Trending: Rust | 1,303 stars | +386 today -->

# 1jehuang/jcode

> Coding Agent Harness

## Repository Info
- **URL**: https://github.com/1jehuang/jcode
- **Stars**: 1,303
- **Forks**: 125
- **Language**: Rust
- **License**: MIT License
- **Created**: 2026-01-05
- **Updated**: 2026-04-29
- **Topics**: ai, claude, cli, coding-agent, llm, mcp, openai, rust, terminal, tui
- **Open Issues**: 44

## README (excerpt)
<div align="center">

# jcode

[![Latest Release](https://img.shields.io/github/v/release/1jehuang/jcode?style=flat-square)](https://github.com/1jehuang/jcode/releases)
[![License](https://img.shields.io/github/license/1jehuang/jcode?style=flat-square)](LICENSE)
[![Platforms](https://img.shields.io/badge/platforms-Linux%20%7C%20macOS%20%7C%20Windows-blue?style=flat-square)](https://github.com/1jehuang/jcode/releases)
[![Commit Activity](https://img.shields.io/github/commit-activity/m/1jehuang/jcode?style=flat-square)](https://github.com/1jehuang/jcode/commits/master)
[![GitHub Stars](https://img.shields.io/github/stars/1jehuang/jcode?style=flat-square)](https://github.com/1jehuang/jcode/stargazers)

The next generation coding agent harness to raise the skill ceiling. <br>
Built for multi-session workflows, infinite customizability, and performance. 

<br>

<a href="https://github.com/1jehuang/jcode/releases/download/readme-assets/jcode-memory-demo.mp4">
  <img src="https://github.com/1jehuang/jcode/releases/download/readme-assets/jcode-memory-demo.webp" alt="jcode memory demonstration" width="800">
</a>

<br>

[Features](#features) · [Install](#installation) · [Quick Start](#quick-start) · [Further Reading](#further-reading) · [Contributing](CONTRIBUTING.md)

</div>

---

<div align="center">

## Installation

</div>

```bash
# macOS & Linux
curl -fsSL https://raw.githubusercontent.com/1jehuang/jcode/master/scripts/install.sh | bash
```

Need Windows, Homebrew, source builds, provider setup, or tell your agent to set it up for you?
[Jump to detailed installation](#detailed-installation).

---


<div align="center">

## Performance & Resource Efficiency

</div>

jcode is built to be as performant and resource efficient as possible. Every metric is optimized to the bone, which is important for scaling multi-session workflows. Here we sample a few metrics to show the difference: RAM usage and boot up.

### RAM comparison

<div align="center">

<table>
  <tr>
    <td valign="top" align="center" width="50%">
      <strong>1 active session</strong>
      <table>
        <thead>
          <tr>
            <th>Tool</th>
            <th>PSS</th>
            <th>Comparison</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>jcode (local embedding off)</strong></td>
            <td align="right"><strong>27.8 MB</strong></td>
            <td align="right">baseline</td>
          </tr>
          <tr>
            <td><strong>jcode</strong></td>
            <td align="right"><strong>167.1 MB</strong></td>
            <td align="right"><strong>6.0× more RAM</strong></td>
          </tr>
          <tr>
            <td><strong>pi</strong></td>
            <td align="right"><strong>144.4 MB</strong></td>
            <td align="right"><strong>5.2× more RAM</strong></td>
          </tr>
          <tr>
            <td><strong>Codex CLI</strong></td>
            <td align="right"><strong>140.0 MB</strong></td>
            <td align="right"><strong>5.0× more RAM</strong></td>
          </tr>
          <tr>
            <td><strong>OpenCode</strong></td>
            <td align="right"><strong>371.5 MB</strong></td>
            <td align="right"><strong>13.4× more RAM</strong></td>
          </tr>
          <tr>
            <td><strong>GitHub Copilot CLI</strong></td>
            <td align="right"><strong>333.3 MB</strong></td>
            <td align="right"><strong>12.0× more RAM</strong></td>
          </tr>
          <tr>
            <td><strong>Cursor Agent</strong></td>
            <td align="right"><strong>214.9 MB</strong></td>
            <td align="right"><strong>7.7× more RAM</strong></td>
          </tr>
          <tr>
            <td><strong>Claude Code</strong></td>
            <td align="right"><strong>386.6 MB</strong></td>
            <td align="right"><strong>13.9× more RAM</strong></td>
          </tr>
        </tbody>
      </table>
    </td>
    <td width="24"></td>
    <td valign="top" align="c