<!-- GitHub Trending: TypeScript | 11,497 stars | +769 today -->

# pascalorg/editor

> Create and share 3D architectural projects.

## Repository Info
- **URL**: https://github.com/pascalorg/editor
- **Stars**: 11,497
- **Forks**: 1,466
- **Language**: TypeScript
- **License**: MIT License
- **Created**: 2025-10-16
- **Updated**: 2026-04-14
- **Topics**: N/A
- **Open Issues**: 25

## README (excerpt)
# Pascal Editor

A 3D building editor built with React Three Fiber and WebGPU.

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![npm @pascal-app/core](https://img.shields.io/npm/v/@pascal-app/core?label=%40pascal-app%2Fcore)](https://www.npmjs.com/package/@pascal-app/core)
[![npm @pascal-app/viewer](https://img.shields.io/npm/v/@pascal-app/viewer?label=%40pascal-app%2Fviewer)](https://www.npmjs.com/package/@pascal-app/viewer)
[![Discord](https://img.shields.io/badge/Discord-Join%20Server-5865F2?logo=discord&logoColor=white)](https://discord.gg/SaBRA9t2)
[![X (Twitter)](https://img.shields.io/badge/follow-%40pascal__app-black?logo=x&logoColor=white)](https://x.com/pascal_app)

https://github.com/user-attachments/assets/8b50e7cf-cebe-4579-9cf3-8786b35f7b6b



## Repository Architecture

This is a Turborepo monorepo with three main packages:

```
editor-v2/
├── apps/
│   └── editor/          # Next.js application
├── packages/
│   ├── core/            # Schema definitions, state management, systems
│   └── viewer/          # 3D rendering components
```

### Separation of Concerns

| Package | Responsibility |
|---------|---------------|
| **@pascal-app/core** | Node schemas, scene state (Zustand), systems (geometry generation), spatial queries, event bus |
| **@pascal-app/viewer** | 3D rendering via React Three Fiber, default camera/controls, post-processing |
| **apps/editor** | UI components, tools, custom behaviors, editor-specific systems |

The **viewer** renders the scene with sensible defaults. The **editor** extends it with interactive tools, selection management, and editing capabilities.

### Stores

Each package has its own Zustand store for managing state:

| Store | Package | Responsibility |
|-------|---------|----------------|
| `useScene` | `@pascal-app/core` | Scene data: nodes, root IDs, dirty nodes, CRUD operations. Persisted to IndexedDB with undo/redo via Zundo. |
| `useViewer` | `@pascal-app/viewer` | Viewer state: current selection (building/level/zone IDs), level display mode (stacked/exploded/solo), camera mode. |
| `useEditor` | `apps/editor` | Editor state: active tool, structure layer visibility, panel states, editor-specific preferences. |

**Access patterns:**

```typescript
// Subscribe to state changes (React component)
const nodes = useScene((state) => state.nodes)
const levelId = useViewer((state) => state.selection.levelId)
const activeTool = useEditor((state) => state.tool)

// Access state outside React (callbacks, systems)
const node = useScene.getState().nodes[id]
useViewer.getState().setSelection({ levelId: 'level_123' })
```

---

## Core Concepts

### Nodes

Nodes are the data primitives that describe the 3D scene. All nodes extend `BaseNode`:

```typescript
BaseNode {
  id: string              // Auto-generated with type prefix (e.g., "wall_abc123")
  type: string            // Discriminator for type-safe handling
  parentId: string | null // Parent node reference
  visible: boolean
  camera?: Camera         // Optional saved camera position
  metadata?: JSON         // Arbitrary metadata (e.g., { isTransient: true })
}
```

**Node Hierarchy:**

```
Site
└── Building
    └── Level
        ├── Wall → Item (doors, windows)
        ├── Slab
        ├── Ceiling → Item (lights)
        ├── Roof
        ├── Zone
        ├── Scan (3D reference)
        └── Guide (2D reference)
```

Nodes are stored in a **flat dictionary** (`Record<id, Node>`), not a nested tree. Parent-child relationships are defined via `parentId` and `children` arrays.

---

### Scene State (Zustand Store)

The scene is managed by a Zustand store in `@pascal-app/core`:

```typescript
useScene.getState() = {
  nodes: Record<id, AnyNode>,  // All nodes
  rootNodeIds: string[],       // Top-level nodes (sites)
  dirtyNodes: Set<string>,     // Nodes pending system updates

  createNode(node, parentId),
  updateNode(id, updates),
  deleteNode(id),
}
```

**Middleware:**
- **Persist** - Saves to Ind