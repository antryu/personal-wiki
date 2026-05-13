<!-- GitHub Trending: TypeScript | 5,076 stars | +178 today -->

# CodebuffAI/codebuff

> Generate code from the terminal!

## Repository Info
- **URL**: https://github.com/CodebuffAI/codebuff
- **Stars**: 5,077
- **Forks**: 581
- **Language**: TypeScript
- **License**: Apache License 2.0
- **Created**: 2024-07-09
- **Updated**: 2026-05-13
- **Topics**: N/A
- **Open Issues**: 63

## README (excerpt)
# Codebuff & Freebuff

**[Codebuff](https://codebuff.com)** is an open-source AI coding assistant that edits your codebase through natural language instructions. **[Freebuff](https://www.npmjs.com/package/freebuff)** is the free, ad-supported version — no subscription, no credits, no configuration.

Instead of using one model for everything, Codebuff coordinates specialized agents that work together to understand your project and make precise changes.

<div align="center">
  <img src="./assets/codebuff-vs-claude-code.png" alt="Codebuff vs Claude Code" width="400">
</div>

Codebuff beats Claude Code at 61% vs 53% on [our evals](evals/README.md) across 175+ coding tasks over multiple open-source repos that simulate real-world tasks.


## How it works

When you ask Codebuff to "add authentication to my API," it might invoke:

1. A **File Picker Agent** to scan your codebase to understand the architecture and find relevant files
2. A **Planner Agent** to plan which files need changes and in what order
3. An **Editor Agent** to make precise edits
4. A **Reviewer Agent** to validate changes

<div align="center">
  <img src="./assets/multi-agents.png" alt="Codebuff Multi-Agents" width="250">
</div>

This multi-agent approach gives you better context understanding, more accurate edits, and fewer errors compared to single-model tools.

## CLI: Install and start coding

Install:

```bash
npm install -g codebuff
```

Run:

```bash
cd your-project
codebuff
```

Then just tell Codebuff what you want and it handles the rest:

- "Fix the SQL injection vulnerability in user registration"
- "Add rate limiting to all API endpoints"
- "Refactor the database connection code for better performance"

Codebuff will find the right files, makes changes across your codebase, and runs tests to make sure nothing breaks.

## Create custom agents

To get started building your own agents, start Codebuff and run the `/init` command:

```bash
codebuff
```

Then inside the CLI:

```
/init
```

This creates:
```
knowledge.md               # Project context for Codebuff
.agents/
└── types/                 # TypeScript type definitions
    ├── agent-definition.ts
    ├── tools.ts
    └── util-types.ts
```

You can write agent definition files that give you maximum control over agent behavior.

Implement your workflows by specifying tools, which agents can be spawned, and prompts. We even have TypeScript generators for more programmatic control.

For example, here's a `git-committer` agent that creates git commits based on the current git state. Notice that it runs `git diff` and `git log` to analyze changes, but then hands control over to the LLM to craft a meaningful commit message and perform the actual commit.

```typescript
export default {
  id: 'git-committer',
  displayName: 'Git Committer',
  model: 'openai/gpt-5-nano',
  toolNames: ['read_files', 'run_terminal_command', 'end_turn'],

  instructionsPrompt:
    'You create meaningful git commits by analyzing changes, reading relevant files for context, and crafting clear commit messages that explain the "why" behind changes.',

  async *handleSteps() {
    // Analyze what changed
    yield { tool: 'run_terminal_command', command: 'git diff' }
    yield { tool: 'run_terminal_command', command: 'git log --oneline -5' }

    // Stage files and create commit with good message
    yield 'STEP_ALL'
  },
}
```

## SDK: Run agents in production

Install the [SDK package](https://www.npmjs.com/package/@codebuff/sdk) -- note this is different than the CLI codebuff package.

```bash
npm install @codebuff/sdk
```

Import the client and run agents!

```typescript
import { CodebuffClient } from '@codebuff/sdk'

// 1. Initialize the client
const client = new CodebuffClient({
  apiKey: 'your-api-key',
  cwd: '/path/to/your/project',
  onError: (error) => console.error('Codebuff error:', error.message),
})

// 2. Do a coding task...
const result = await client.run({
  agent: 'base', // Codebuff's base coding agent
  prompt