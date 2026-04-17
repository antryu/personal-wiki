# OpenAI Agents SDK for JavaScript/TypeScript

> A lightweight, powerful framework for multi-agent workflows and voice agents with JavaScript/TypeScript. Notable for its provider-agnostic design, support for OpenAI APIs, and features like real-time voice agents, guardrails, and human-in-the-loop integration.  
> Last updated: 2026-04-17

## Overview
The **OpenAI Agents SDK** is a TypeScript/JavaScript framework for building multi-agent systems and voice agents. Hosted on GitHub with 2,702 stars and 684 forks, it provides tools for orchestration, safety checks, and real-time interaction. Key features include:

### Core Concepts
1. **Agents**: Configurable LLMs with instructions, tools, and handoffs.  
1. **Tools/Handoffs**: Enable delegation to other agents or external systems.  
1. **Guardrails**: Safety checks for input/output validation.  
1. **Human-in-the-Loop**: Mechanisms for human intervention in workflows.  
1. **Sessions**: Automatic conversation history management.  
1. **Tracing**: Debugging and optimization via run tracking.  
1. **Realtime Agents**: Voice agent capabilities with full feature sets.  

### Supported Environments
- **Node.js 22+**, Deno, and Bun.  
- **Experimental**: Cloudflare Workers (with `nodejs_compat`).  

### Installation
```bash
npm install @openai/agents zod
```

### Example Usage
```js
import { Agent, run } from '@openai/agents';

const agent = new Agent({
  name: 'Assistant',
  instructions: 'You are a helpful assistant',
});

const result = await run(
  agent,
  'Write a haiku about recursion in programming.',
);
// Output: "Code within the code, Functions calling themselves, Infinite loop's dance."
```

### Community & Dependencies
- Built with [zod](https://github.com/colinhacks/zod) for schema validation, [Starlight](https://github.com/withastro/starlight) for docs, and [vite](https://github.com/vitejs/vite).  
- Hosted under the MIT License with 37 open issues.  

For advanced use cases, explore the [`examples/`](https://github.com/openai/openai-agents-js/tree/main/examples) directory or refer to the [documentation](https://openai.github.io/openai-agents-js).

## Key Points
- Enables **multi-agent workflows** with tools, handoffs, and guardrails.  
- **Provider-agnostic** with OpenAI API compatibility.  
- Includes **real-time voice agent** capabilities.  
- Lightweight design with automatic session management and tracing.  
- Open-source framework with active community contributions.  

## Sources
- [GitHub](https://github.com/openai/openai-agents-js)
- [원본](raw/ingest/tech/2026-04-17-openai-agents-sdk-for-javascript-typescript.md)