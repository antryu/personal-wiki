<!-- GitHub Trending: TypeScript | 5,528 stars | +6 today -->

# Helicone/helicone

> 🧊 Open source LLM observability platform. One line of code to monitor, evaluate, and experiment. YC W23 🍓

## Repository Info
- **URL**: https://github.com/Helicone/helicone
- **Stars**: 5,528
- **Forks**: 543
- **Language**: TypeScript
- **License**: Apache License 2.0
- **Created**: 2023-01-31
- **Updated**: 2026-04-21
- **Topics**: agent-monitoring, analytics, evaluation, gpt, langchain, large-language-models, llama-index, llm, llm-cost, llm-evaluation, llm-observability, llmops, monitoring, open-source, openai, playground, prompt-engineering, prompt-management, ycombinator
- **Open Issues**: 81

## README (excerpt)
<div align="center">

| 🔍 Observability | 🕸️ Agent Tracing | 🚂 LLM Routing |
| :--------------: | :--------------: | :------------------: |
|  💰 Cost & Latency Tracking  |   📚 Datasets & Fine-tuning    |    🎛️ Automatic Fallbacks   |

</div>

<p align="center" style="margin: 0; padding: 0;">
  <img alt="helicone logo" src="https://marketing-assets-helicone.s3.us-west-2.amazonaws.com/Twitter_Cover_A1.png" style="display: block; margin: 0; padding: 0;">
</p>
</br>

<p align="center">
  <a href='https://github.com/helicone/helicone/graphs/contributors'><img src='https://img.shields.io/github/contributors/helicone/helicone?style=flat-square' alt='Contributors' /></a>
  <a href='https://github.com/helicone/helicone/stargazers'><img alt="GitHub stars" src="https://img.shields.io/github/stars/helicone/helicone?style=flat-square"/></a>
  <a href='https://github.com/helicone/helicone/pulse'><img alt="GitHub commit activity" src="https://img.shields.io/github/commit-activity/m/helicone/helicone?style=flat-square"/></a>
  <a href='https://github.com/helicone/helicone/issues?q=is%3Aissue+is%3Aclosed'><img alt="GitHub closed issues" src="https://img.shields.io/github/issues-closed/helicone/helicone?style=flat-square"/></a>
  <a href='https://www.ycombinator.com/companies/helicone'><img alt="Y Combinator" src="https://img.shields.io/badge/Y%20Combinator-Helicone-orange?style=flat-square"/></a>
</p>
<p align="center">
  <a href="https://docs.helicone.ai/">Docs</a> • <a href="https://www.helicone.ai/changelog">Changelog</a> • <a href="https://github.com/helicone/helicone/issues">Bug reports</a> • <a href="https://helicone.ai/demo">See Helicone in Action! (Free)</a>
</p>

## Helicone is an AI Gateway & LLM Observability Platform for AI Engineers

- 🌐 **AI Gateway**: Access 100+ AI models with 1 API key through the OpenAI API with intelligent routing and automatic fallbacks. [Get started in 2 minutes.](https://docs.helicone.ai/gateway/overview)
- 🔌 **Quick integration**: One-line of code to log all your requests from [OpenAI](https://www.helicone.ai/models?providers=openai), [Anthropic](https://www.helicone.ai/models?providers=anthropic), [LangChain](https://docs.helicone.ai/gateway/integrations/langchain), [Gemini](https://www.helicone.ai/models?providers=gemini%2Cgoogle-ai-studio), [Vercel AI SDK](https://docs.helicone.ai/gateway/integrations/vercel-ai-sdk), and [more](https://docs.helicone.ai/gateway/overview).
- 📊 **Observe**: Inspect and debug traces & [sessions](https://docs.helicone.ai/features/sessions) for agents, chatbots, document processing pipelines, and more
- 📈 **Analyze**: Track metrics like [cost](https://docs.helicone.ai/faq/how-we-calculate-cost#developer), latency, quality, and more. Export to [PostHog](https://docs.helicone.ai/getting-started/integration-method/posthog) in one-line for custom dashboards
- 🎮 **Playground**: Rapidly test and iterate on prompts, sessions and traces in our UI.
- 🧠 **Prompt Management**: [Version prompts](https://docs.helicone.ai/features/prompts) using production data. Deploy prompts through the AI Gateway without code changes. Your prompts remain under your control, always accessible.
- 🎛️ **Fine-tune**: Fine-tune with one of our fine-tuning partners: [OpenPipe](https://openpipe.ai/) or [Autonomi](https://www.autonomi.ai/) (more coming soon)
- 🛡️ **Enterprise Ready**: SOC 2 and GDPR compliant

> 🎁 Generous monthly [free tier](https://www.helicone.ai/pricing) (10k requests/month) - No credit card required!
>
<img src="https://github.com/user-attachments/assets/e16332e9-d642-427e-b3ce-1a74a17f7b2c" alt="Open Sourced LLM Observability & AI Gateway Platform" width="600">

## Quick Start ⚡️

1. Get your API key by signing up [here](https://helicone.ai/signup) and add credits at [helicone.ai/credits](https://us.helicone.ai/credits)

2. Update the `baseURL` in your code and add your API key.

   ```typescript
   import OpenAI from "openai";

   const client = new OpenAI({
     baseURL: