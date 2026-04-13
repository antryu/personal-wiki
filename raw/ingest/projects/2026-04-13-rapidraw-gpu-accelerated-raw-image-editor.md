<!-- GitHub Trending: TypeScript | 6,382 stars | +20 today -->

# CyberTimon/RapidRAW

> A beautiful, non-destructive, and GPU-accelerated RAW image editor built with performance in mind.

## Repository Info
- **URL**: https://github.com/CyberTimon/RapidRAW
- **Stars**: 6,382
- **Forks**: 235
- **Language**: TypeScript
- **License**: GNU Affero General Public License v3.0
- **Created**: 2025-06-13
- **Updated**: 2026-04-13
- **Topics**: color-grading, editing, image-processing, masks, raw, react, rust, tauri
- **Open Issues**: 201

## README (excerpt)
<p align="center">
  <img src="https://raw.githubusercontent.com/CyberTimon/RapidRAW/assets/.github/assets/editor.png" alt="RapidRAW Editor">
</p>

<div align="center">

[![Rust](https://img.shields.io/badge/rust-%23000000.svg?style=for-the-badge&logo=rust&logoColor=white)](https://www.rust-lang.org/)
[![wgpu](https://img.shields.io/badge/wgpu-%23282C34.svg?style=for-the-badge&logo=webgpu&logoColor=white)](https://wgpu.rs/)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://react.dev/)
[![Tauri](https://img.shields.io/badge/Tauri-24C8DB?style=for-the-badge&logo=tauri&logoColor=white)](https://tauri.app/)
[![AGPL-3.0](https://img.shields.io/badge/License-AGPL_v3-blue.svg?style=for-the-badge)](https://opensource.org/licenses/AGPL-3.0)
[![GitHub stars](https://img.shields.io/github/stars/CyberTimon/RapidRAW?style=for-the-badge&logo=github&label=Stars)](https://github.com/CyberTimon/RapidRAW/stargazers)
<br>
[![www.getrapidraw.com](https://img.shields.io/badge/getrapidraw.com-%232ea44f?style=for-the-badge&logo=safari&logoColor=white)](https://www.getrapidraw.com)
[![Instagram](https://img.shields.io/badge/Instagram-%23E4405F.svg?style=for-the-badge&logo=Instagram&logoColor=white)](https://www.instagram.com/getrapidraw/)
[![Discord](https://img.shields.io/badge/Discord-%235865F2.svg?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/cvFugZ2Hw8)

</div>

# RapidRAW

> A beautiful, non-destructive, and GPU-accelerated RAW image editor built with performance in mind.

RapidRAW is a modern, high-performance alternative to Adobe Lightroom®. It delivers a simple, beautiful editing experience in a lightweight package (under 20MB) for Windows, macOS, and Linux.

I started developing this project as a personal challenge when I was 18. My goal was to create a high-performance tool for my own photography workflow while deepening my understanding of React, WGSL and Rust, with the support from Google Gemini.

<table width="100%">
  <tr>
    <td width="50%" valign="top" align="center">
      <br>
      <a href="https://github.com/CyberTimon/RapidRAW/releases/latest">
        <img src="https://raw.githubusercontent.com/CyberTimon/RapidRAW/main/src-tauri/icons/full_res_original.png" alt="Download RapidRAW" height="96">
      </a>
      <h3>Download RapidRAW</h3>
      <p>Get the latest release for Windows, macOS, and Linux. Packaged and ready to run.</p>
      <strong><a href="https://github.com/CyberTimon/RapidRAW/releases/latest">Download Latest Version →</a></strong>
      <br><br>
    </td>
    <td width="50%" valign="top" align="center">
      <br>
      <a href="https://github.com/CyberTimon/RapidRAW-Docs">
        <img src="https://raw.githubusercontent.com/CyberTimon/RapidRAW/main/src-tauri/icons/docs.png" alt="Read the Docs" height="96">
      </a>
      <h3>Read the Docs</h3>
      <p>Learn how to use RapidRAW with step-by-step tutorials, from adjustments to masking.</p>
      <strong><a href="https://github.com/CyberTimon/RapidRAW-Docs">View Tutorials & Examples →</a></strong>
      <br><br>
    </td>
  </tr>
</table>

<details>
<summary><strong>For Who Is This?</strong></summary>
RapidRAW is for photographers who love to edit their photos in a <strong>clean, fast, and simple workflow</strong>. It prioritizes speed, a beautiful user interface, and powerful tools that let you achieve your creative color vision quickly.
<br><br>
RapidRAW is still in active development and isn't yet as polished as mature tools like Darktable, RawTherapee, or Adobe Lightroom®. Right now, the focus is on building a fast, enjoyable core editing experience. You may encounter bugs - if you do, please report them so I can fix them :) Your feedback really helps!
<br><br>
</details>
<details>
<summary><strong>Recent Changes</strong></summary>

- **2026-04-01:** Added depth masking with depth anything v2 & improved ROI rendering performance
- **2026-03-30:** LaMa inpainting for 