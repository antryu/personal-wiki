<!-- GitHub Trending: Python | 13,850 stars | +115 today -->

# MemoriLabs/Memori

> Memori is agent-native memory infrastructure. A LLM-agnostic layer that turns agent execution and conversation into structured, persistent state for production systems.

## Repository Info
- **URL**: https://github.com/MemoriLabs/Memori
- **Stars**: 13,850
- **Forks**: 1,798
- **Language**: Python
- **License**: Other
- **Created**: 2025-07-24
- **Updated**: 2026-04-25
- **Topics**: agent, agent-memory, ai, ai-memory, aiagent, awesome, chatgpt, llm, long-short-term-memory, memori-ai, memory, memory-management, memory-mcp, openclaw-memory, python, rag, state-management, stateful, typescript
- **Open Issues**: 12

## README (excerpt)
[![Memori Labs](https://images.memorilabs.ai/banner-dark-large.jpg)](https://memorilabs.ai/)

<p align="center">
  <strong>Memory from what agents do, not just what they say.</strong>
</p>

<p align="center">
  <i>Memori plugs into the software and infrastructure you already use. It is LLM, datastore and framework agnostic and seamlessly integrates into the architecture you've already designed.</i>
</p>

<p align="center">
  <strong>→ <a href="https://memorilabs.ai/docs/memori-cloud/">Memori Cloud</a></strong> — Zero config. Get an API key and start building in minutes.
</p>
<p align="center">
  <a href="https://trendshift.io/repositories/15418">
    <img src="https://trendshift.io/_next/image?url=https%3A%2F%2Ftrendshift.io%2Fapi%2Fbadge%2Frepositories%2F15418&w=640&q=75" alt="Memori%2fLabs%2FMemori | Trendshif">
  </a>
</p>

<p align="center">
  <a href="https://badge.fury.io/py/memori">
    <img src="https://badge.fury.io/py/memori.svg" alt="PyPI version">
  </a>
  <a href="https://www.npmjs.com/package/@memorilabs/memori">
    <img src="https://img.shields.io/npm/v/@memorilabs/memori.svg" alt="NPM version">
  </a>
  <a href="https://pepy.tech/projects/memori">
    <img src="https://static.pepy.tech/badge/memori" alt="Downloads">
  </a>
  <a href="https://opensource.org/license/apache-2-0">
    <img src="https://img.shields.io/badge/license-Apache%202.0-blue" alt="License">
  </a>
  <a href="https://discord.gg/abD4eGym6v">
    <img src="https://img.shields.io/discord/1042405378304004156?logo=discord" alt="Discord">
  </a>
</p>

<p align="center">
  <a href="https://github.com/MemoriLabs/Memori/stargazers">
    <img src="https://img.shields.io/badge/⭐%20Give%20a%20Star-Support%20the%20project-orange?style=for-the-badge" alt="Give a Star">
  </a>
</p>

<p align="center">
  <strong>Choose memory that performs</strong>
</p>



[![Memori Labs](https://images.memorilabs.ai/stats.jpg)](https://memorilabs.ai/benchmark)

---

## Getting Started

### Installation

<details open>
<summary><b>TypeScript SDK</b></summary>

```bash
npm install @memorilabs/memori
```
</details>

<details>
<summary><b>Python SDK</b></summary>

```bash
pip install memori
```
</details>

### Quickstart

Sign up at [app.memorilabs.ai](https://app.memorilabs.ai), get a Memori API key, and start building. Full docs: [memorilabs.ai/docs/memori-cloud/](https://memorilabs.ai/docs/memori-cloud/).

Set `MEMORI_API_KEY` and your LLM API key (e.g. `OPENAI_API_KEY`), then:

<details open>
<summary><b>TypeScript SDK</b></summary>

```typescript
import { OpenAI } from 'openai';
import { Memori } from '@memorilabs/memori';

// Requires MEMORI_API_KEY and OPENAI_API_KEY in your environment
const client = new OpenAI();
const mem = new Memori().llm
  .register(client)
  .attribution('user_123', 'support_agent');

async function main() {
  await client.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [{ role: 'user', content: 'My favorite color is blue.' }],
  });
  // Conversations are persisted and recalled automatically in the background.

  const response = await client.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [{ role: 'user', content: "What's my favorite color?" }],
  });
  // Memori recalls that your favorite color is blue.
}
```
</details>

<details>
<summary><b>Python SDK</b></summary>

```python
from memori import Memori
from openai import OpenAI

# Requires MEMORI_API_KEY and OPENAI_API_KEY in your environment
client = OpenAI()
mem = Memori().llm.register(client)

mem.attribution(entity_id="user_123", process_id="support_agent")

response = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[{"role": "user", "content": "My favorite color is blue."}]
)
# Conversations are persisted and recalled automatically.

response = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[{"role": "user", "content": "What's my favorite color?"}]
)
# Memori recalls that your favorite color is blue.
```
</d