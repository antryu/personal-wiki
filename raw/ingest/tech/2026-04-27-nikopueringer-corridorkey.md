<!-- GitHub Trending: Python | 11,773 stars | +205 today -->

# nikopueringer/CorridorKey

> Perfect Green Screen Keys

## Repository Info
- **URL**: https://github.com/nikopueringer/CorridorKey
- **Stars**: 11,773
- **Forks**: 710
- **Language**: Python
- **License**: Other
- **Created**: 2026-02-25
- **Updated**: 2026-04-27
- **Topics**: N/A
- **Open Issues**: 73

## README (excerpt)
# CorridorKey


https://github.com/user-attachments/assets/1fb27ea8-bc91-4ebc-818f-5a3b5585af08


When you film something against a green screen, the edges of your subject inevitably blend with the green background. This creates pixels that are a mix of your subject's color and the green screen's color. Traditional keyers struggle to untangle these colors, forcing you to spend hours building complex edge mattes or manually rotoscoping. Even modern "AI Roto" solutions typically output a harsh binary mask, completely destroying the delicate, semi-transparent pixels needed for a realistic composite.

I built CorridorKey to solve this *unmixing* problem. 

You input a raw green screen frame, and the neural network completely separates the foreground object from the green screen. For every single pixel, even the highly transparent ones like motion blur or out-of-focus edges, the model predicts the true, un-multiplied straight color of the foreground element, alongside a clean, linear alpha channel. It doesn't just guess what is opaque and what is transparent; it actively reconstructs the color of the foreground object as if the green screen was never there.

No more fighting with garbage mattes or agonizing over "core" vs "edge" keys. Give CorridorKey a hint of what you want, and it separates the light for you.

## Alert!

This is a brand new release, I'm sure you will discover many ways it can be improved! I invite everyone to help. Join us on the "Corridor Creates" Discord to share ideas, work, forks, etc! https://discord.gg/zvwUrdWXJm

If you want an easy-install, artist-friendly user interface version of CorridorKey, check out [EZ-CorridorKey](https://github.com/edenaion/EZ-CorridorKey)

This project uses [uv](https://docs.astral.sh/uv/) to manage dependencies — it handles Python installation, virtual environments, and packages all in one step, so you don't need to worry about any of that. Just run the appropriate install script for your OS.

Naturally, I have not tested everything. If you encounter errors, please consider patching the code as needed and submitting a pull request.

## Features

*   **Physically Accurate Unmixing:** Clean extraction of straight color foreground and linear alpha channels, preserving hair, motion blur, and translucency.
*   **Resolution Independent:** The engine dynamically scales inference to handle 4K plates while predicting using its native 2048x2048 high-fidelity backbone.
*   **VFX Standard Outputs:** Natively reads and writes 16-bit and 32-bit Linear float EXR files, preserving true color math for integration in Nuke, Fusion, or Resolve.
*   **Auto-Cleanup:** Includes a morphological cleanup system to automatically prune any tracking markers or tiny background features that slip through CorridorKey's detection.

## Hardware Requirements

This project was designed and built on a Linux workstation (Puget Systems PC) equipped with an NVIDIA RTX Pro 6000 with 96GB of VRAM. The community is ACTIVELY optimizing it for consumer GPUS.

The most recent build should work on computers with 6-8 gig of VRAM, and it can run on most M1+ Mac systems with unified memory. Yes, it might even work on your old Macbook pro. Let us know on the Discord!

*   **Windows Users (NVIDIA):** To run GPU acceleration natively on Windows, your system MUST have NVIDIA drivers that support **CUDA 12.8 or higher** installed. If your drivers only support older CUDA versions, the installer will likely fallback to the CPU.
*   **AMD GPU Users (ROCm):** AMD Radeon RX 7000 series (RDNA3) and RX 9000 series (RDNA4) are supported via ROCm on **Linux**. Windows ROCm support is experimental (torch.compile is not yet functional). See the [AMD ROCm Setup](#amd-rocm-setup) section below.
*   **GVM (Optional):** Requires approximately **80 GB of VRAM** and utilizes massive Stable Video Diffusion models.
*   **VideoMaMa (Optional):** Natively requires a massive chunk of VRAM as well (originally 80GB+). While the community has tweaked the ar