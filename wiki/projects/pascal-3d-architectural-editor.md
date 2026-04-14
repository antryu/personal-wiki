# Pascal 3D Architectural Editor

> A modular 3D architectural design tool built with React Three Fiber and WebGPU, featuring real-time collaboration, scene persistence, and a monorepo architecture for scalable development.  
> Last updated: 2026-04-14

## Overview

### Repository Info
- **URL**: [https://github.com/pascalorg/editor](https://github.com/pascalorg/editor)
- **Stars**: 11,497
- **Forks**: 1,466
- **Language**: TypeScript
- **License**: MIT License
- **Created**: 2025-10-16
- **Updated**: 2026-04-14
- **Open Issues**: 25

### Architecture
This project uses a **Turborepo monorepo** structure with three core packages:
```
editor-v2/
├── apps/
│   └── editor/          # Next.js application for UI/UX
├── packages/
│   ├── core/            # Schema definitions, state management
│   └── viewer/          # 3D rendering components
```

### Separation of Concerns
| Package | Responsibility |
|---------|----------------|
| **@pascal-app/core** | Scene state (Zustand), node schemas, spatial queries, event bus |
| **@pascal-app/viewer** | React Three Fiber rendering, camera/controls, post-processing |
| **apps/editor** | Interactive tools, selection management, UI components |

### State Management
Each package uses **Zustand stores** for scoped state:
- `useScene` (core): Manages nodes, root IDs, and scene persistence via IndexedDB with Zundo for undo/redo.
- `useViewer` (viewer): Tracks selection, level display mode, and camera state.
- `useEditor` (apps/editor): Controls active tools, panel visibility, and editor preferences.

### Core Concepts
#### Node System
All scene elements inherit from `BaseNode`:
```typescript
BaseNode {
  id: string,           // Auto-generated with type prefix (e.g., "wall_abc123")
  type: string,         // Discriminant for type-safe handling
  parentId: string | null,
  visible: boolean,
  camera?: Camera,      // Optional saved camera position
  metadata?: JSON       // Custom metadata
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
        └── Guide (22D reference)
```

Nodes are stored in a flat dictionary with `parentId` defining relationships. This enables efficient lookups and scalable scene management.

#### Scene Persistence
The `useScene` store provides:
```typescript
{
  nodes: Record<id, AnyNode>,
  rootNodeIds: string[],       // Top-level site nodes
  dirtyNodes: Set<string>,     // Nodes requiring system updates

  createNode(node, parentId),
  updateNode(id, updates),
  deleteNode(id)
}
```

**Middleware Features:**
- **Persistence**: Saves to IndexedDB with automatic versioning
- **Undo/Redo**: Integrated Zundo middleware for full scene history

## Key Points
- **Modular Monorepo**: Separates core logic, rendering, and UI for maintainability
- **Real-time Collaboration**: Zustand stores with IndexedDB persistence enable shared editing
- **Node-based Hierarchy**: Flat dictionary storage with parent/child relationships for scalable scene management
- **WebGPU Integration**: High-performance rendering via React Three Fiber and WebGPU

## Sources
- [GitHub](https://github.com/pascalorg/editor)
- [원본](raw/ingest/projects/2026-04-14-pascal-3d-architectural-editor.md)