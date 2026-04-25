<!-- GitHub Trending: TypeScript | 3,455 stars | +56 today -->

# alvinunreal/oh-my-opencode-slim

> Slimmed, cleaned and fine-tuned oh-my-opencode fork, consumes much less tokens

## Repository Info
- **URL**: https://github.com/alvinunreal/oh-my-opencode-slim
- **Stars**: 3,455
- **Forks**: 245
- **Language**: TypeScript
- **License**: MIT License
- **Created**: 2026-01-15
- **Updated**: 2026-04-25
- **Topics**: agentic-ai, antigravity, cerebras, oh-my-opencode, opencode, orchestration
- **Open Issues**: 48

## README (excerpt)
<div align="center">
  <img src="img/team.jpeg" alt="Pantheon agents" style="border-radius: 10px;">
  <p><i>Seven divine beings emerged from the dawn of code, each an immortal master of their craft await your command to forge order from chaos and build what was once thought impossible.</i></p>
  <p><b>Open Multi Agent Suite</b> · Mix any models · Auto delegate tasks</p>

  <p><sub>by <b>Boring Dystopia Development</b></sub></p>
  <p>
    <a href="https://boringdystopia.ai/"><img src="https://img.shields.io/badge/boringdystopia.ai-111111?style=for-the-badge&logo=vercel&logoColor=white" alt="boringdystopia.ai"></a>&nbsp;
    <a href="https://x.com/alvinunreal"><img src="https://img.shields.io/badge/X-@alvinunreal-000000?style=for-the-badge&logo=x&logoColor=white" alt="X @alvinunreal"></a>&nbsp;
    <a href="https://t.me/boringdystopiadevelopment"><img src="https://img.shields.io/badge/Telegram-Join%20channel-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white" alt="Telegram Join channel"></a>&nbsp;
  </p>
</div>

---

## What's This Plugin

oh-my-opencode-slim is an agent orchestration plugin for OpenCode. It includes a built-in team of specialized agents that can scout a codebase, look up fresh documentation, review architecture, handle UI work, and execute well-scoped implementation tasks under one orchestrator.

The main idea is simple: instead of forcing one model to do everything, the plugin routes each part of the job to the agent best suited for it, balancing **quality, speed and cost**.

To explore the agents themselves, see **[Meet the Pantheon](#meet-the-pantheon)**. For the full feature set, see **[Features & Workflows](#features-and-workflows)** below.

### Quick Start

Copy and paste this prompt to your LLM agent (Claude Code, AmpCode, Cursor, etc.):


```
Install and configure oh-my-opencode-slim: https://raw.githubusercontent.com/alvinunreal/oh-my-opencode-slim/refs/heads/master/README.md
```


### Manual Installation

```bash
bunx oh-my-opencode-slim@latest install
```

### Getting Started

The installer generates an OpenAI preset by default, using `openai/gpt-5.5` for the higher-judgment agents and `openai/gpt-5.4-mini` for the faster scoped agents.

Then:

1. **Log in to the providers you want to use if you haven't already**:

   ```bash
   opencode auth login
   ```
2. **Refresh and list the models OpenCode can see**:

   ```bash
   opencode models --refresh
   ```
3. **Open your plugin config** at `~/.config/opencode/oh-my-opencode-slim.json`

4. **Update the models you want for each agent**

> [!TIP]
> Want to understand how automatic delegation works in practice? Review the **[Orchestrator prompt](https://github.com/alvinunreal/oh-my-opencode-slim/blob/master/src/agents/orchestrator.ts#L28)** — it contains the delegation rules, specialist routing logic, and the thresholds for when the main agent should hand work off to subagents.

The default generated configuration looks like this:

```jsonc
{
  "$schema": "https://unpkg.com/oh-my-opencode-slim@latest/oh-my-opencode-slim.schema.json",
  "preset": "openai",
  "presets": {
    "openai": {
      "orchestrator": { "model": "openai/gpt-5.5", "skills": ["*"], "mcps": ["*", "!context7"] },
      "oracle": { "model": "openai/gpt-5.5", "variant": "high", "skills": ["simplify"], "mcps": [] },
      "librarian": { "model": "openai/gpt-5.4-mini", "variant": "low", "skills": [], "mcps": ["websearch", "context7", "grep_app"] },
      "explorer": { "model": "openai/gpt-5.4-mini", "variant": "low", "skills": [], "mcps": [] },
      "designer": { "model": "openai/gpt-5.4-mini", "variant": "medium", "skills": ["agent-browser"], "mcps": [] },
      "fixer": { "model": "openai/gpt-5.4-mini", "variant": "low", "skills": [], "mcps": [] }
    }
  }
}
```

Session management is enabled by default even though it is not shown in the
starter config. See **[Session Management](docs/session-management.md)** if you
want to customize how many resumable child-agent sessions are reme