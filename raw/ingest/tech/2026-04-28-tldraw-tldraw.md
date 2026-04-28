<!-- GitHub Trending: TypeScript | 46,661 stars | +49 today -->

# tldraw/tldraw

> very good whiteboard infinite canvas SDK

## Repository Info
- **URL**: https://github.com/tldraw/tldraw
- **Stars**: 46,661
- **Forks**: 3,177
- **Language**: TypeScript
- **License**: Other
- **Created**: 2021-05-09
- **Updated**: 2026-04-28
- **Topics**: canvas, collaboration, design, diagram, drawing, infinite, multiplayer, react, sdk, sketch, sync, whiteboard
- **Open Issues**: 332

## README (excerpt)
<div alt style="text-align: center; transform: scale(.25);">
	<picture>
		<source media="(prefers-color-scheme: dark)" srcset="https://github.com/tldraw/tldraw/raw/main/assets/github-hero-dark.png" />
		<img alt="tldraw" src="https://github.com/tldraw/tldraw/raw/main/assets/github-hero-light.png" />
	</picture>
</div>

<p align="center">
  <a href="https://www.npmjs.com/package/tldraw"><img src="https://img.shields.io/npm/v/tldraw" alt="npm" /></a>
  <a href="https://www.npmjs.com/package/tldraw"><img src="https://img.shields.io/npm/dm/tldraw" alt="npm downloads" /></a>
  <a href="https://discord.tldraw.com/?utm_source=github&utm_medium=readme&utm_campaign=sociallink"><img src="https://img.shields.io/badge/discord-join-5865F2?logo=discord&logoColor=white" alt="Discord" /></a>
  <a href="https://deepwiki.com/tldraw/tldraw"><img src="https://deepwiki.com/badge.svg" alt="Ask DeepWiki" /></a>
</p>

<h3 align="center">
  Build infinite canvas apps in React with the tldraw SDK.
</h3>

<p align="center">
  <a href="https://tldraw.dev/quick-start">Docs</a> · <a href="https://tldraw.dev/examples">Examples</a> · <a href="https://tldraw.dev/starter-kits/overview">Starter kits</a>
</p>

## Feature highlights

tldraw provides a feature-complete infinite canvas engine designed to be the foundation for any canvas app. Create custom shapes, tools, bindings and UI components for a custom experience. Use the default whiteboarding tool set or use the library's primitives to build entirely new shapes and interactions.

- **Multiplayer** — self-hostable real-time collaboration with [`@tldraw/sync`](https://tldraw.dev/docs/sync)
- **Drawing and diagramming** — pressure-sensitive drawing, geometric shapes, rich text, arrows, snapping to shapes, edge scrolling, image and video support, image export
- **Runtime API** - drive the canvas at runtime with the Editor API
- **Fully extensible** — custom [shapes](https://tldraw.dev/docs/shapes), [tools](https://tldraw.dev/docs/tools), [bindings](https://tldraw.dev/sdk-features/bindings), [UI components](https://tldraw.dev/sdk-features/ui-components), side effects, and event hooks
- **AI integrations** — canvas primitives for [building with LLMs](https://tldraw.dev/docs/ai)
- **DOM canvas** — web rendering supports anything the browser supports, including embedded websites from YouTube, Figma, GitHub, [and more](https://tldraw.dev/sdk-features/embed-shape)
- **Broad support** — works in any browser across desktop, touch screens, tablets, and mobile devices

## Quick start

Install the tldraw package:

```bash
npm i tldraw
```

Then, use the `<Tldraw />` component in your React app:

```tsx
import { Tldraw } from 'tldraw'
import 'tldraw/tldraw.css'

export default function App() {
	return (
		<div style={{ position: 'fixed', inset: 0 }}>
			<Tldraw />
		</div>
	)
}
```

## Starter kits

Starter kits provide the custom shapes, tools, and user interface needed for common applications. Each kit is MIT-licensed. Hack together a prototype, build out an app on top, or reference the code in a larger project.

Start building with:

```bash
npx create-tldraw@latest
```

- **Multiplayer** — self-hosted real-time collaboration powered by `@tldraw/sync` and Cloudflare Durable Objects, the same stack behind [tldraw.com](https://tldraw.com)
- **Agent** — AI agents that read, interpret, and modify canvas content
- **Workflow** — drag-and-drop node builder for automation pipelines, visual programming, and no-code platforms
- **Chat** — canvas-powered AI chat where users sketch, annotate, and mark up images alongside conversations
- **Branching chat** — AI chat with visual branching, letting users explore and compare different conversation paths
- **Shader** — WebGL shaders that respond to canvas interactions

## Local development

The development server runs the examples app at `localhost:5420`. Clone the repo, then enable [corepack](https://nodejs.org/api/corepack.html) for the correct yarn version:

```bash
npm i -g corepac