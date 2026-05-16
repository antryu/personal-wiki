<!-- GitHub Trending: Python | 6,640 stars | +6 today -->

# NVIDIA/warp

> A Python framework for GPU-accelerated simulation, robotics, and machine learning.

## Repository Info
- **URL**: https://github.com/NVIDIA/warp
- **Stars**: 6,640
- **Forks**: 509
- **Language**: Python
- **License**: Apache License 2.0
- **Created**: 2022-03-18
- **Updated**: 2026-05-16
- **Topics**: cuda, differentiable-programming, gpu, gpu-acceleration, nvidia, nvidia-warp, python
- **Open Issues**: 218

## README (excerpt)
[![PyPI version](https://badge.fury.io/py/warp-lang.svg)](https://badge.fury.io/py/warp-lang)
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/NVIDIA/warp?link=https%3A%2F%2Fgithub.com%2FNVIDIA%2Fwarp%2Fcommits%2Fmain)
[![Downloads](https://static.pepy.tech/badge/warp-lang/month)](https://pepy.tech/project/warp-lang)
[![codecov](https://codecov.io/github/NVIDIA/warp/graph/badge.svg?token=7O1KSM79FG)](https://codecov.io/github/NVIDIA/warp)
![GitHub - CI](https://github.com/NVIDIA/warp/actions/workflows/ci.yml/badge.svg)

# NVIDIA Warp

**[Documentation](https://nvidia.github.io/warp/)** | [Changelog](https://github.com/NVIDIA/warp/blob/main/CHANGELOG.md)

Warp is a Python framework for GPU-accelerated simulation, robotics, and machine learning. Warp takes
regular Python functions and JIT compiles them to efficient kernel code that can run on the CPU or GPU.

Warp comes with a rich set of primitives for physics simulation, robotics, geometry processing,
and more. Warp kernels are differentiable and can be used as part of machine-learning pipelines
with frameworks such as PyTorch, JAX and Paddle.

<div align="center">
    <img src="https://github.com/NVIDIA/warp/raw/main/docs/img/header.jpg">
    <p><i>A selection of physical simulations computed with Warp</i></p>
</div>

## Quick Start

Simulate one million particles under gravitational attraction, in 20 lines:

```python
import warp as wp
import numpy as np

num_particles = 1_000_000
dt = 0.01

@wp.kernel
def gravity_step(pos: wp.array[wp.vec3], vel: wp.array[wp.vec3]):
    i = wp.tid()
    position = pos[i]
    dist_sq = wp.length_sq(position) + 0.01  # softened distance
    acc = -1000.0 / dist_sq * wp.normalize(position)  # gravitational pull toward origin
    vel[i] = vel[i] + acc * dt
    pos[i] = pos[i] + vel[i] * dt

rng = np.random.default_rng(42)
positions = wp.array(rng.normal(size=(num_particles, 3)), dtype=wp.vec3)
velocities = wp.array(rng.normal(size=(num_particles, 3)), dtype=wp.vec3)

for _ in range(100):
    wp.launch(gravity_step, dim=num_particles, inputs=[positions, velocities])

print(positions.numpy())
```

## Installing

Python version 3.10 or newer is required. Warp can run on x86-64 and ARMv8 CPUs on Windows and Linux, and on Apple Silicon (ARMv8) on macOS.
GPU support requires a CUDA-capable NVIDIA GPU and driver (minimum GeForce GTX 9xx).

The easiest way to install Warp is from [PyPI](https://pypi.org/project/warp-lang/):

```text
pip install warp-lang
```

You can also use `pip install warp-lang[examples]` to install additional dependencies for running examples and USD-related features.

For nightly builds, conda, CUDA 13 builds, building from source, and CUDA driver requirements, see the
[Installation Guide](https://nvidia.github.io/warp/user_guide/installation.html).

## Tutorial Notebooks

The [NVIDIA Accelerated Computing Hub](https://github.com/NVIDIA/accelerated-computing-hub) contains the current,
actively maintained set of Warp tutorials:

| Notebook | Colab Link |
|----------|------------|
| [Introduction to NVIDIA Warp](https://github.com/NVIDIA/accelerated-computing-hub/blob/32fe3d5a448446fd52c14a6726e1b867cbfed2d9/Accelerated_Python_User_Guide/notebooks/Chapter_12_Intro_to_NVIDIA_Warp.ipynb) | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/NVIDIA/accelerated-computing-hub/blob/32fe3d5a448446fd52c14a6726e1b867cbfed2d9/Accelerated_Python_User_Guide/notebooks/Chapter_12_Intro_to_NVIDIA_Warp.ipynb) |
| [GPU-Accelerated Ising Model Simulation in NVIDIA Warp](https://github.com/NVIDIA/accelerated-computing-hub/blob/32fe3d5a448446fd52c14a6726e1b867cbfed2d9/Accelerated_Python_User_Guide/notebooks/Chapter_12.1_IsingModel_In_Warp.ipynb) | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.goo