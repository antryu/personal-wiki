<!-- GitHub Trending: TypeScript | 4,781 stars | +11 today -->

# cloudflare/agents

> Build and deploy AI Agents on Cloudflare 

## Repository Info
- **URL**: https://github.com/cloudflare/agents
- **Stars**: 4,781
- **Forks**: 512
- **Language**: TypeScript
- **License**: MIT License
- **Created**: 2025-01-29
- **Updated**: 2026-04-17
- **Topics**: agents, ai, cloudflare, durable-objects, workflows
- **Open Issues**: 68

## README (excerpt)
# Cloudflare Agents

[![npm version](https://img.shields.io/npm/v/agents)](https://www.npmjs.com/package/agents)
[![npm downloads](https://img.shields.io/npm/dw/agents)](https://www.npmjs.com/package/agents)

![npm install agents](assets/npm-install-agents.svg)

Agents are persistent, stateful execution environments for agentic workloads, powered by Cloudflare [Durable Objects](https://developers.cloudflare.com/durable-objects/). Each agent has its own state, storage, and lifecycle — with built-in support for real-time communication, scheduling, AI model calls, MCP, workflows, and more.

Agents hibernate when idle and wake on demand. You can run millions of them — one per user, per session, per game room — each costs nothing when inactive.

```sh
npm create cloudflare@latest -- --template cloudflare/agents-starter
```

Or add to an existing project:

```sh
npm install agents
```

**[Read the docs](https://developers.cloudflare.com/agents/)** — getting started, API reference, guides, and more.

## Quick Example

A counter agent with persistent state, callable methods, and real-time sync to a React frontend:

```typescript
// server.ts
import { Agent, routeAgentRequest, callable } from "agents";

export type CounterState = { count: number };

export class CounterAgent extends Agent<Env, CounterState> {
  initialState = { count: 0 };

  @callable()
  increment() {
    this.setState({ count: this.state.count + 1 });
    return this.state.count;
  }

  @callable()
  decrement() {
    this.setState({ count: this.state.count - 1 });
    return this.state.count;
  }
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext) {
    return (
      (await routeAgentRequest(request, env)) ??
      new Response("Not found", { status: 404 })
    );
  }
};
```

```tsx
// client.tsx
import { useAgent } from "agents/react";
import { useState } from "react";
import type { CounterAgent, CounterState } from "./server";

function Counter() {
  const [count, setCount] = useState(0);

  const agent = useAgent<CounterAgent, CounterState>({
    agent: "CounterAgent",
    onStateUpdate: (state) => setCount(state.count)
  });

  return (
    <div>
      <span>{count}</span>
      <button onClick={() => agent.stub.increment()}>+</button>
      <button onClick={() => agent.stub.decrement()}>-</button>
    </div>
  );
}
```

State changes sync to all connected clients automatically. Call methods like they're local functions.

## Features

| Feature               | Description                                                            |
| --------------------- | ---------------------------------------------------------------------- |
| **Persistent State**  | Syncs to all connected clients, survives restarts                      |
| **Callable Methods**  | Type-safe RPC via the `@callable()` decorator                          |
| **Scheduling**        | One-time, recurring, and cron-based tasks                              |
| **WebSockets**        | Real-time bidirectional communication with lifecycle hooks             |
| **AI Chat**           | Message persistence, resumable streaming, server/client tool execution |
| **MCP**               | Act as MCP servers or connect as MCP clients                           |
| **Workflows**         | Durable multi-step tasks with human-in-the-loop approval               |
| **Email**             | Send, receive, and reply via Cloudflare Email Service                  |
| **Code Mode**         | LLMs generate executable TypeScript instead of individual tool calls   |
| **SQL**               | Direct SQLite queries via Durable Objects                              |
| **React Hooks**       | `useAgent` and `useAgentChat` for frontend integration                 |
| **Vanilla JS Client** | `AgentClient` for non-React environments                               |

**Coming soon:** Realtime voice agents, web browsing (headless browser), sandboxed code execution, and multi-channel communication (SMS