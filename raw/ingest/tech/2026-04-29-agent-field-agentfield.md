<!-- GitHub Trending: Go | 1,558 stars | +39 today -->

# Agent-Field/agentfield

> Build, run and scale AI agents like API and microservices - observable,auditable and identity-aware from day one.

## Repository Info
- **URL**: https://github.com/Agent-Field/agentfield
- **Stars**: 1,558
- **Forks**: 254
- **Language**: Go
- **License**: Apache License 2.0
- **Created**: 2025-11-05
- **Updated**: 2026-04-29
- **Topics**: agent, agent-auth, agent-authentication, agent-indentity, agent-scaling, agentic-ai, ai, ai-backend, aiagent, anthropic, cloud-native, genai, go, kubernetes, llm, multiagent, multiagent-systems, python, rag, typescript
- **Open Issues**: 76

## README (excerpt)
<div align="center">

<img src="assets/github hero.png" alt="AgentField - The AI Backend" width="100%" />

# The AI Backend

### **Build and scale AI agents like APIs. Deploy, observe, and prove.**

*AI has outgrown chatbots and prompt orchestrators. Backend agents need backend infrastructure.*

[![Stars](https://img.shields.io/github/stars/Agent-Field/agentfield?style=flat&logo=github&logoColor=white&color=d4a24a&labelColor=0c0b09)](https://github.com/Agent-Field/agentfield/stargazers)
[![License](https://img.shields.io/badge/license-Apache%202.0-d4a24a.svg?style=flat&labelColor=0c0b09)](LICENSE)
[![Downloads](https://img.shields.io/endpoint?url=https%3A%2F%2Fgist.githubusercontent.com%2Fsantoshkumarradha%2Fd98e2ad73502b4075f6a5f0ae4f5cae5%2Fraw%2Fbadge.json&style=flat&logo=download&logoColor=white&labelColor=0c0b09&cacheSeconds=3600)](https://github.com/Agent-Field/agentfield)
[![Coverage](https://img.shields.io/endpoint?url=https%3A%2F%2Fgist.githubusercontent.com%2Fsantoshkumarradha%2F433fb09c2d54c3c2589125cfd3eb14a2%2Fraw%2Fbadge.json&style=flat&logo=github&logoColor=white&labelColor=0c0b09&cacheSeconds=3600)](https://github.com/Agent-Field/agentfield/actions/workflows/coverage.yml)
[![Last Commit](https://img.shields.io/github/last-commit/Agent-Field/agentfield?style=flat&logo=git&logoColor=white&color=d4a24a&labelColor=0c0b09)](https://github.com/Agent-Field/agentfield/commits/main)
[![Discord](https://img.shields.io/badge/discord-join%20us-d4a24a.svg?style=flat&labelColor=0c0b09&logo=discord&logoColor=white)](https://discord.gg/aBHaXMkpqh)

<!-- All outbound agentfield.ai links must use UTM parameters, not direct URLs. See assets/utm-links.csv for the full list — target URLs there are for verification and reference only, always use the UTM version in the README. Update both the README and the CSV when adding or changing links. -->
**[Docs](https://agentfield.ai/docs/learn?utm_source=github-readme&utm_campaign=github-readme&utm_id=github-readme-docs)** · **[Quick Start](https://agentfield.ai/docs/learn/quickstart?utm_source=github-readme&utm_campaign=github-readme&utm_id=github-readme-quickstart)** · **[Python SDK](https://agentfield.ai/docs/reference/sdks/python?utm_source=github-readme&utm_campaign=github-readme&utm_id=github-readme-python-sdk)** · **[Go SDK](https://agentfield.ai/docs/reference/sdks/go?utm_source=github-readme&utm_campaign=github-readme&utm_id=github-readme-go-sdk)** · **[TypeScript SDK](https://agentfield.ai/docs/reference/sdks/typescript?utm_source=github-readme&utm_campaign=github-readme&utm_id=github-readme-typescript-sdk)** · **[REST API](https://agentfield.ai/docs/reference/sdks/rest-api?utm_source=github-readme&utm_campaign=github-readme&utm_id=github-readme-rest-api)** · **[Examples](#built-with-agentfield)** · **[Discord](https://discord.gg/aBHaXMkpqh)**

</div>

---

AgentField is an open-source control plane that makes AI agents callable by any service in your stack - frontends, backends, other agents, cron jobs - just like any other API. You write agent logic in Python, Go, or TypeScript. AgentField turns it into production infrastructure: routing, coordination, memory, async execution, and cryptographic audit trails. Every function becomes a REST endpoint. Every agent gets a cryptographic identity. Every decision is traceable.

```python
from agentfield import Agent, AIConfig
from pydantic import BaseModel

app = Agent(
    node_id="claims-processor",
    version="2.1.0",# Canary deploys, A/B testing, blue-green rollouts
    ai_config=AIConfig(model="anthropic/claude-sonnet-4-20250514"),
)

class Decision(BaseModel):
    action: str# "approve", "deny", "escalate"
    confidence: float
    reasoning: str

@app.reasoner(tags=["insurance", "critical"])
async def evaluate_claim(claim: dict) -> dict:

    # Structured AI judgment - returns typed Pydantic output
    decision = await app.ai(
        system="Insurance claims adjuster. Evaluate and decide.",
        user=f"Claim #{claim['id']}: {