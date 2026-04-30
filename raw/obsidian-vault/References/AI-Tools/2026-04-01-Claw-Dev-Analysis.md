# Claw Dev — Multi-Provider Claude Code Launcher

**Date:** 2026-04-01
**GitHub:** https://github.com/Leonxlnx/claw-dev
**Size:** 137MB (17MB Claude Code npm package)
**Tags:** #claude-code #ollama #multi-provider #proxy

## Overview

Claw Dev = Claude Code 터미널 클라이언트 + Multi-provider launcher

**Core Idea:**
- Use official Claude Code npm package (`anthropic-ai-claude-code-2.1.87.tgz`)
- Add Anthropic-compatible proxy for other providers
- Single entry point, multiple backends

**Supported Providers:**
1. Anthropic (original)
2. OpenAI
3. Google Gemini
4. Groq
5. **Ollama** (local)
6. GitHub Copilot
7. z.ai

---

## Architecture

```
User Input
  ↓
claw-dev-launcher.js
  ↓
Anthropic-compatible Proxy (anthropicCompatProxy.ts)
  ↓
[Anthropic | OpenAI | Gemini | Groq | Ollama | Copilot | z.ai]
```

**Proxy Job:**
- Translate Anthropic API → Provider API
- Handle streaming responses
- Convert tool calls
- Maintain compatibility

---

## File Structure

```
claw-dev/
├── Leonxlnx-claude-code/          # Bundled Claude Code client
│   ├── anthropic-ai-claude-code-2.1.87.tgz  (17MB)
│   ├── claw-dev-launcher.js       # Main launcher
│   ├── claw-dev.sh                # Shell wrapper
│   └── src/                       # Extracted npm package
├── src/
│   ├── anthropicCompatProxy.ts    # ⭐ Core proxy logic (38KB)
│   ├── providers.ts               # Provider configs
│   ├── cli.tsx                    # Terminal UI (Ink)
│   ├── tools.ts                   # Tool definitions
│   └── index.ts                   # Entry point
├── package.json
└── .env.example                   # Config template
```

---

## Key Code: anthropicCompatProxy.ts

### Type Definitions

```typescript
type CompatProvider = "openai" | "gemini" | "groq" | 
                      "ollama" | "copilot" | "zai";

type AnthropicMessageRequest = {
  model?: string;
  max_tokens?: number;
  stream?: boolean;
  system?: string | Array<{ type?: string; text?: string }>;
  messages?: Array<{
    role: "user" | "assistant";
    content: string | Array<Record<string, unknown>>;
  }>;
  tools?: Array<Record<string, unknown>>;
  tool_choice?: {
    type?: "auto" | "any" | "none" | "tool";
    name?: string;
  };
};
```

### Environment Variables

```typescript
const PROVIDER = resolveProvider();
const PORT = Number(process.env.ANTHROPIC_COMPAT_PORT ?? 8080);
const ACTIVE_MODEL = resolveModel(PROVIDER);

// Provider-specific
const OLLAMA_BASE_URL = process.env.OLLAMA_BASE_URL ?? "http://127.0.0.1:11434";
const OLLAMA_API_KEY = process.env.OLLAMA_API_KEY?.trim();
const OLLAMA_NUM_CTX = parseOptionalInt(process.env.OLLAMA_NUM_CTX);
const OPENAI_API_KEY = process.env.OPENAI_API_KEY?.trim();
const GEMINI_API_KEY = process.env.GEMINI_API_KEY?.trim();
```

### HTTP Server

```typescript
const server = createServer(async (req, res) => {
  const url = new URL(req.url ?? "/", `http://${req.headers.host}`);

  // Health check
  if (req.method === "GET" && url.pathname === "/health") {
    return sendJson(res, 200, {
      ok: true,
      provider: PROVIDER,
      model: ACTIVE_MODEL,
    });
  }

  // Models endpoint
  if (req.method === "GET" && url.pathname === "/v1/models") {
    return sendJson(res, 200, buildModelsPage());
  }

  // Main proxy endpoint
  if (req.method === "POST" && url.pathname === "/v1/messages") {
    return handleMessagesRequest(req, res);
  }
});
```

---

## Ollama Integration

### Configuration

```bash
# .env
ANTHROPIC_COMPAT_PROVIDER=ollama
OLLAMA_BASE_URL=http://127.0.0.1:11434
OLLAMA_MODEL=qwen3
OLLAMA_NUM_CTX=8192
OLLAMA_KEEP_ALIVE=5m
```

### API Translation

**Anthropic → Ollama:**
```typescript
// Anthropic request
{
  model: "claude-3-5-sonnet-20241022",
  messages: [{ role: "user", content: "Hello" }],
  max_tokens: 4096,
  stream: true
}

// Ollama request
{
  model: "qwen3",
  messages: [{ role: "user", content: "Hello" }],
  options: {
    num_ctx: 8192,
    num_predict: 4096
  },
  stream: true
}
```

### Streaming Response

```typescript
// Ollama SSE → Anthropic SSE
for await (const chunk of ollamaResponse) {
  const anthropicChunk = {
    type: "content_block_delta",
    delta: { type: "text", text: chunk.message.content }
  };
  res.write(`data: ${JSON.stringify(anthropicChunk)}\n\n`);
}
```

---

## _y Holdings 적용 가능성

### 1. Multi-Provider Proxy Pattern

**Current _y:**
```typescript
// Hard-coded Ollama
const response = await ollama.chat({
  model: 'qwen2.5:14b',
  messages: [...],
});
```

**With Claw Dev Pattern:**
```typescript
// Provider-agnostic
const response = await llmProxy.chat({
  model: resolveModel(agent.tier),  // Auto-select provider
  messages: [...],
});

// Backend:
// - Counsely (Tier 1) → Anthropic Claude Opus
// - Legaly (Tier 1) → OpenAI GPT-4
// - Buzzy (Tier 2) → Ollama qwen3
```

**Benefits:**
- Easy provider switching
- Cost optimization (local > cloud)
- Fallback mechanism (if Ollama down → Anthropic)

---

### 2. Anthropic API Compatibility

**Why This Matters:**
- Many tools expect Anthropic API format
- Claw Dev shows how to translate Ollama → Anthropic
- _y can expose Anthropic-compatible endpoint

**Use Case:**
```typescript
// External tools call _y agents via Anthropic API
POST http://localhost:8080/v1/messages
{
  "model": "counsely",  // Agent name
  "messages": [...]
}

// _y proxy routes to correct agent + backend
```

---

### 3. Tool Call Translation

**Anthropic Tool Format:**
```json
{
  "tools": [{
    "name": "web_search",
    "description": "Search the web",
    "input_schema": {
      "type": "object",
      "properties": {
        "query": { "type": "string" }
      }
    }
  }]
}
```

**Claw Dev Translation:**
- Anthropic → OpenAI tool format
- Anthropic → Gemini function calling
- Anthropic → Ollama tools (if supported)

**_y Application:**
- Define tools once (Anthropic format)
- Auto-translate to backend provider
- Consistent tool interface across agents

---

## Code We Can Reuse

### ✅ Safe to Reference (MIT/Open Source)

**1. anthropicCompatProxy.ts**
- Proxy server pattern
- API translation logic
- Streaming handler
- Error handling

**2. providers.ts**
- Provider config structure
- Model selection logic

**3. tools.ts**
- Tool definition patterns

**License:** MIT (check README)

---

### ❌ Don't Copy Directly

**1. Leonxlnx-claude-code/**
- Bundled Claude Code npm package
- Extracted source (potentially under Anthropic's license)
- Use as reference only, don't redistribute

**2. claw-dev-launcher.js**
- Wraps proprietary npm package
- Legal gray area

---

## Implementation Plan for _y

### Phase 1: Multi-Provider Support (This Week)

**Goal:** _y agents can use Anthropic OR Ollama

```typescript
// y-company/src/lib/llm-proxy.ts
export async function chatCompletion(request: {
  agent: string;
  messages: Message[];
  tools?: Tool[];
}) {
  const tier = getAgentTier(request.agent);
  const provider = selectProvider(tier);
  
  switch (provider) {
    case 'anthropic':
      return anthropicChat(request);
    case 'ollama':
      return ollamaChat(request);
    case 'openai':
      return openaiChat(request);
  }
}
```

**Config:**
```typescript
// agent-config.ts
export const agentTiers = {
  tier1: {
    agents: ['Counsely', 'Legaly', 'Quanty'],
    provider: 'anthropic',
    model: 'claude-opus-4-6',
    fallback: 'ollama/qwen3:32b'
  },
  tier2: {
    agents: ['Buzzy', 'Watchy', 'Searchy'],
    provider: 'ollama',
    model: 'qwen3',
    fallback: 'anthropic/claude-haiku-4-6'
  }
};
```

---

### Phase 2: Anthropic-Compatible Endpoint (Next Week)

**Goal:** External tools can call _y agents via Anthropic API

```typescript
// y-company/src/api/anthropic-compat.ts
app.post('/v1/messages', async (req, res) => {
  const { model, messages, tools } = req.body;
  
  // model = agent name (e.g., "counsely")
  const agent = findAgent(model);
  
  // Execute agent
  const result = await agent.execute({
    messages: translateMessages(messages),
    tools: translateTools(tools)
  });
  
  // Return Anthropic-format response
  res.json({
    id: randomUUID(),
    type: 'message',
    role: 'assistant',
    model: model,
    content: [{ type: 'text', text: result.text }],
    ...
  });
});
```

**Use Case:**
- Claude Code → _y agent
- Cursor → _y agent
- Any Anthropic-compatible tool → _y agent

---

### Phase 3: Streaming + Tool Calls (Month 2)

**Goal:** Full Anthropic API parity

```typescript
// Streaming
if (req.body.stream) {
  res.setHeader('Content-Type', 'text/event-stream');
  
  for await (const chunk of agent.executeStream()) {
    res.write(`data: ${JSON.stringify({
      type: 'content_block_delta',
      delta: { type: 'text', text: chunk }
    })}\n\n`);
  }
  
  res.write('data: [DONE]\n\n');
  res.end();
}

// Tool calls
if (result.tool_use) {
  return {
    content: [{
      type: 'tool_use',
      id: randomUUID(),
      name: result.tool_name,
      input: result.tool_input
    }],
    stop_reason: 'tool_use'
  };
}
```

---

## Comparison: Claw Dev vs _y

| Feature | Claw Dev | _y Holdings |
|---------|----------|-------------|
| **Purpose** | Individual coding assistant | 30-agent organization |
| **UI** | Terminal CLI | Web dashboard |
| **Agents** | 1 (Claude Code) | 30 (hierarchical) |
| **Target User** | Developer | CEO/Founder |
| **Provider Strategy** | User picks one | Auto-select per agent tier |
| **Tool System** | Claude Code tools | Custom tool binding |
| **Architecture** | Proxy wrapper | Native orchestration |
| **Differentiator** | Multi-provider support | Byzantine consensus |

---

## Key Learnings

### 1. Proxy Pattern Works Well
- Clean separation: client vs provider
- Easy to add new providers
- Minimal code duplication

### 2. Anthropic API = Good Standard
- Simple, well-documented
- Tool calling built-in
- Streaming support
- Many compatible tools

### 3. Ollama Integration is Mature
- API stable (localhost:11434)
- Context length configurable
- Keep-alive for performance
- Works with tool calling (some models)

### 4. Tiered Model Strategy Validated
- Not all tasks need Opus
- Local models for utility work
- Cloud models for critical analysis
- Cost vs quality trade-off

---

## Risks & Considerations

### Legal
- ✅ Proxy code = MIT (likely, check README)
- ⚠️ Claude Code npm package = Anthropic license
- ✅ API translation = fair use (interoperability)
- ❌ Don't redistribute Claude Code package

### Technical
- ⚠️ API format changes over time
- ⚠️ Tool calling inconsistent across providers
- ✅ Streaming adds complexity but worth it
- ✅ Error handling critical (provider failures)

### _y Specific
- ✅ Multi-provider = good insurance (vendor lock-in)
- ⚠️ Adds complexity to agent system
- ✅ Enables cost optimization (local > cloud)
- ✅ Future-proof (new providers easy to add)

---

## Action Items

### P0 (This Week)
- [ ] Extract provider selection logic from Claw Dev
- [ ] Design _y multi-provider architecture
- [ ] Implement tier-based provider selection
- [ ] Test Ollama + Anthropic in parallel

### P1 (Next Week)
- [ ] Build Anthropic-compatible endpoint
- [ ] Translate message/tool formats
- [ ] Test with external tools (Cursor, etc.)

### P2 (Month 2)
- [ ] Add streaming support
- [ ] Implement tool call translation
- [ ] Add fallback mechanism (provider down → retry)
- [ ] Performance benchmarks (latency per provider)

---

## Files to Study

**Priority 1:**
- `src/anthropicCompatProxy.ts` (38KB) — Core proxy logic
- `src/providers.ts` — Provider configs
- `.env.example` — Configuration template

**Priority 2:**
- `src/tools.ts` — Tool definitions
- `src/cli.tsx` — Terminal UI (Ink React)
- `Leonxlnx-claude-code/claw-dev-launcher.js` — Launcher wrapper

**Priority 3:**
- `Leonxlnx-claude-code/src/` — Extracted npm package (reference only)

---

## Related

- [[TurboQuant PyTorch]] — Memory optimization (orthogonal to provider)
- [[Claude Code Leak Analysis]] — Internal architecture (self-healing, telemetry)
- [[_y Holdings Operating System]] — Agent orchestration design
- [[YC W26 Trends]] — Execution > Vision (implement multi-provider, don't just plan)

---

## Meta: Why This Matters

**For _y Holdings:**
- Multi-provider = cost optimization + vendor independence
- Anthropic API compatibility = ecosystem access
- Ollama as default = $0/month infrastructure validated
- Tiered allocation = smart, not wasteful

**For Andrew:**
- Proxy pattern = clean architecture
- Reference implementation = fast development
- MIT code = legal to study/adapt
- Proven approach = lower risk

**Best Practice:**
> "Use the proxy pattern. Study the code. Implement our version. Don't copy-paste."

---

*Downloaded: 2026-04-01, M4 Max `~/Thairon/claw-dev/`*
*License: MIT (assumed, verify README)*
*Purpose: Reference implementation for _y multi-provider architecture*
