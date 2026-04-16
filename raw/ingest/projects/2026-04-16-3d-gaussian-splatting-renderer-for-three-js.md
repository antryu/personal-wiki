<!-- GitHub Trending: TypeScript | 2,487 stars | +218 today -->

# sparkjsdev/spark

> :sparkles:  An advanced 3D Gaussian Splatting renderer for THREE.js

## Repository Info
- **URL**: https://github.com/sparkjsdev/spark
- **Stars**: 2,488
- **Forks**: 233
- **Language**: TypeScript
- **License**: MIT License
- **Created**: 2025-05-23
- **Updated**: 2026-04-16
- **Topics**: N/A
- **Open Issues**: 92

## README (excerpt)
<p align="center">

  ![Spark logo](https://github.com/user-attachments/assets/5287631a-083c-4c86-80f6-4dca24aa263f#gh-light-mode-only)
  ![Spark logo](https://github.com/user-attachments/assets/91e8d74b-84a5-4073-bd72-d7228f948dc6#gh-dark-mode-only)

  <h3 align="center">An advanced 3D Gaussian Splatting renderer for THREE.js</h3>
  <div align="center">

  [Features](#features) -
  [Getting Started](#getting-started) -
  <a href="https://sparkjs.dev/">Documentation</a> -
  <a href="https://sparkjs.dev/">FAQ</a>
  </div>
  </p>

   <div align="center">

  [![License](https://img.shields.io/badge/license-MIT-%23d43e4c)](https://github.com/sparkjsdev/spark/blob/main/LICENSE)
  [![npm version](https://img.shields.io/npm/v/@sparkjsdev/spark?color=d43e4c)](https://www.npmjs.com/package/@sparkjsdev/spark)

  </div>

<p>
  <a href="https://sparkjs.dev" target="_blank">
    <picture>
    </picture>
  </a>

Built by [World Labs](https://www.worldlabs.ai).

## Features

- Integrates with THREE.js rendering pipeline to fuse splat and mesh-based objects
- Portable: Works across almost all devices, targeting 98%+ WebGL2 support
- Renders fast even on low-powered mobile devices
- Render multiple splat objects together with correct sorting
- Most major splat file formats supported including: [.PLY](https://github.com/graphdeco-inria/gaussian-splatting) (also [compressed](https://blog.playcanvas.com/compressing-gaussian-splats/#compressed-ply-format)), [.SPZ](https://github.com/nianticlabs/spz), [.SPLAT](https://github.com/antimatter15/splat), [.KSPLAT](https://github.com/mkkellogg/GaussianSplats3D), [.SOG](https://developer.playcanvas.com/user-manual/gaussian-splatting/formats/sog/)
- Render multiple viewpoints simultaneously
- Fully dynamic: each splat can be transformed and edited for animation
- Real-time splat color editing, displacement, and skeletal animation
- Shader graph system to dynamically create/edit splats on the GPU

Check out all the [examples](https://sparkjs.dev/examples/)

## Getting Started

### Copy Code

Copy the following code into an `index.html` file.


```html
<style> body {margin: 0;} </style>
<script type="importmap">
  {
    "imports": {
      "three": "https://cdnjs.cloudflare.com/ajax/libs/three.js/0.180.0/three.module.js",
      "@sparkjsdev/spark": "https://sparkjs.dev/releases/spark/2.0.0/spark.module.js"
    }
  }
</script>
<script type="module">
  import * as THREE from "three";
  import { SplatMesh } from "@sparkjsdev/spark";

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement)

  const splatURL = "https://sparkjs.dev/assets/splats/butterfly.spz";
  const butterfly = new SplatMesh({ url: splatURL });
  butterfly.quaternion.set(1, 0, 0, 0);
  butterfly.position.set(0, 0, -3);
  scene.add(butterfly);

  renderer.setAnimationLoop(function animate(time) {
    renderer.render(scene, camera);
    butterfly.rotation.y += 0.01;
  });
</script>
```

### Web Editor

Remix the [glitch starter template](https://glitch.com/edit/#!/sparkjs-dev)

### CDN

```html
<script type="importmap">
  {
    "imports": {
      "three": "https://cdnjs.cloudflare.com/ajax/libs/three.js/0.180.0/three.module.js",
      "@sparkjsdev/spark": "https://sparkjs.dev/releases/spark/2.0.0/spark.module.js"
     }
  }
</script>
```

### NPM

```shell
npm install @sparkjsdev/spark
```

## Run Examples locally

Install [Rust](https://www.rust-lang.org/tools/install) if it's not already installed in your machine.

Next, build Spark by running:
```
npm install
npm run build
```
This will first build the Rust Wasm component (can be invoked via `npm run build:wasm`), then Spark itself (`npm run build`).

The examples fetch assets from a remote URL. This step is optional, but offline development and faster loading time