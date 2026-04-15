# Open Agents Project

> An open-source template for building cloud agents with a three-layer architecture separating agent workflows from sandbox execution environments. Notable for enabling durable, multi-step coding agents that integrate with GitHub and Vercel.
> Last updated: 2026-04-15

## Overview
**Repository Info**  
- **Stars**: 2,563 | **Forks**: 285  
- **Language**: TypeScript | **License**: MIT  
- **Topics**: agent, ai, background-agents  
- **Open Issues**: 28  

**Architecture**  
The project implements a three-layer system:  
```text
Web UI → Agent workflow → Sandbox VM
```  
- **Web Layer**: Manages authentication, sessions, chat, and streaming UI.  
- **Agent Layer**: Runs as durable workflows on Vercel, orchestrating tasks across steps.  
- **Sandbox Layer**: Isolated execution environment with file system, shell, Git, and dev server support.  

**Key Design Principle**  
Agents operate **outside** the sandbox VM, interacting through tools (file edits, shell commands, etc.). This separation enables:  
- Independent hibernation/resume of sandbox lifecycle  
- Decoupled evolution of model choices and sandbox implementation  
- Persistent workflows across user sessions  

**Current Capabilities**  
- Chat-driven coding agents with file manipulation, search, shell, and web tools  
- Durable multi-step execution with streaming and cancellation  
- Vercel sandbox isolation using snapshot-based resuming  
- GitHub integration for repo cloning, branching, auto-commit, and PR creation  
- Session sharing via read-only links and optional voice input (ElevenLabs)  

**Runtime Requirements**  
Minimum environment variables for deployment:  
```env
POSTGRES_URL
JWE_SECRET
ENCRYPTION_KEY
NEXT_PUBLIC_VERCEL_APP_CLIENT_ID
VERCEL_APP_CLIENT_SECRET
```

## Key Points
- Three-layer architecture decouples agent logic from sandbox execution  
- Supports durable workflows with streaming and cancellation capabilities  
- Open-source reference implementation for Vercel-based background agents  
- GitHub integration enables full CI/CD pipeline automation  
- Sandbox hibernation reduces resource usage while maintaining state  

## Sources
- [GitHub](https://github.com/vercel-labs/open-agents)
- [원본](raw/ingest/projects/2026-04-15-open-agents-project.md)