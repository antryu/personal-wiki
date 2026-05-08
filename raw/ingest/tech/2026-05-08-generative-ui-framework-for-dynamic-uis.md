<!-- GitHub Trending: TypeScript | 14,672 stars | +42 today -->

# vercel-labs/json-render

> The Generative UI framework

## Repository Info
- **URL**: https://github.com/vercel-labs/json-render
- **Stars**: 14,672
- **Forks**: 786
- **Language**: TypeScript
- **License**: Apache License 2.0
- **Created**: 2026-01-14
- **Updated**: 2026-05-08
- **Topics**: N/A
- **Open Issues**: 83

## README (excerpt)
# json-render

**The Generative UI framework.**

Generate dynamic, personalized UIs from prompts without sacrificing reliability. Predefined components and actions for safe, predictable output.

```bash
# for React
npm install @json-render/core @json-render/react
# for React with pre-built shadcn/ui components
npm install @json-render/shadcn
# or for React Native
npm install @json-render/core @json-render/react-native
# or for video
npm install @json-render/core @json-render/remotion
# or for PDF documents
npm install @json-render/core @json-render/react-pdf
# or for HTML email
npm install @json-render/core @json-render/react-email @react-email/components @react-email/render
# or for Vue
npm install @json-render/core @json-render/vue
# or for Svelte
npm install @json-render/core @json-render/svelte
# or for SolidJS
npm install @json-render/core @json-render/solid
# or for terminal UIs
npm install @json-render/core @json-render/ink ink react
# or for full Next.js apps (routes, layouts, SSR, metadata)
npm install @json-render/core @json-render/react @json-render/next
# or for 3D scenes (and gaussian splatting via the GaussianSplat component)
npm install @json-render/core @json-render/react-three-fiber @react-three/fiber @react-three/drei three
```

## Why json-render?

json-render is a **Generative UI** framework: AI generates interfaces from natural language prompts, constrained to components you define. You set the guardrails, AI generates within them:

- **Guardrailed** - AI can only use components in your catalog
- **Predictable** - JSON output matches your schema, every time
- **Fast** - Stream and render progressively as the model responds
- **Cross-Platform** - React, Vue, Svelte, Solid (web), React Native (mobile) from the same catalog
- **Batteries Included** - 36 pre-built shadcn/ui components ready to use

## Quick Start

### 1. Define Your Catalog

```typescript
import { defineCatalog } from "@json-render/core";
import { schema } from "@json-render/react/schema";
import { z } from "zod";

const catalog = defineCatalog(schema, {
  components: {
    Card: {
      props: z.object({ title: z.string() }),
      description: "A card container",
    },
    Metric: {
      props: z.object({
        label: z.string(),
        value: z.string(),
        format: z.enum(["currency", "percent", "number"]).nullable(),
      }),
      description: "Display a metric value",
    },
    Button: {
      props: z.object({
        label: z.string(),
        action: z.string(),
      }),
      description: "Clickable button",
    },
  },
  actions: {
    export_report: { description: "Export dashboard to PDF" },
    refresh_data: { description: "Refresh all metrics" },
  },
});
```

### 2. Define Your Components

```tsx
import { defineRegistry, Renderer } from "@json-render/react";

const { registry } = defineRegistry(catalog, {
  components: {
    Card: ({ props, children }) => (
      <div className="card">
        <h3>{props.title}</h3>
        {children}
      </div>
    ),
    Metric: ({ props }) => (
      <div className="metric">
        <span>{props.label}</span>
        <span>{format(props.value, props.format)}</span>
      </div>
    ),
    Button: ({ props, emit }) => (
      <button onClick={() => emit("press")}>{props.label}</button>
    ),
  },
});
```

### 3. Render AI-Generated Specs

```tsx
function Dashboard({ spec }) {
  return <Renderer spec={spec} registry={registry} />;
}
```

**That's it.** AI generates JSON, you render it safely.

---

## Packages

| Package                     | Description                                                            |
| --------------------------- | ---------------------------------------------------------------------- |
| `@json-render/core`         | Schemas, catalogs, AI prompts, dynamic props, SpecStream utilities     |
| `@json-render/react`        | React renderer, contexts, hooks                                        |
| `@json-render/vue`          | Vue 3 renderer, composa