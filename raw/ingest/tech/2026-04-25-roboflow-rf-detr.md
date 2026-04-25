<!-- GitHub Trending: Python | 6,570 stars | +70 today -->

# roboflow/rf-detr

> [ICLR 2026] RF-DETR is a real-time object detection and segmentation model architecture developed by Roboflow, SOTA on COCO, designed for fine-tuning.

## Repository Info
- **URL**: https://github.com/roboflow/rf-detr
- **Stars**: 6,570
- **Forks**: 810
- **Language**: Python
- **License**: Apache License 2.0
- **Created**: 2025-03-19
- **Updated**: 2026-04-25
- **Topics**: computer-vision, detr, instance-segmentation, machine-learning, object-detection, rf-detr, sota
- **Open Issues**: 78

## README (excerpt)
# RF-DETR: Real-Time SOTA Detection and Segmentation

[![version](https://badge.fury.io/py/rfdetr.svg)](https://badge.fury.io/py/rfdetr)
[![downloads](https://img.shields.io/pypi/dm/rfdetr)](https://pypistats.org/packages/rfdetr)
[![codecov](https://codecov.io/gh/roboflow/rf-detr/graph/badge.svg?token=K8V4ARR3XV)](https://codecov.io/gh/roboflow/rf-detr)
[![python-version](https://img.shields.io/pypi/pyversions/rfdetr)](https://badge.fury.io/py/rfdetr)
[![license](https://img.shields.io/badge/license-Apache%202.0-blue)](https://github.com/roboflow/rfdetr/blob/main/LICENSE)

[![arXiv](https://img.shields.io/badge/arXiv-2511.09554-b31b1b.svg)](https://arxiv.org/abs/2511.09554)
[![hf space](https://img.shields.io/badge/%F0%9F%A4%97%20Hugging%20Face-Spaces-blue)](https://huggingface.co/spaces/SkalskiP/RF-DETR)
[![colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/roboflow-ai/notebooks/blob/main/notebooks/how-to-finetune-rf-detr-on-detection-dataset.ipynb)
[![roboflow](https://raw.githubusercontent.com/roboflow-ai/notebooks/main/assets/badges/roboflow-blogpost.svg)](https://blog.roboflow.com/rf-detr)
[![discord](https://img.shields.io/discord/1159501506232451173?logo=discord&label=discord&labelColor=fff&color=5865f2&link=https%3A%2F%2Fdiscord.gg%2FGbfgXGJ8Bk)](https://discord.gg/GbfgXGJ8Bk)

RF-DETR is a real-time transformer architecture for object detection and instance segmentation developed by Roboflow. Built on a DINOv2 vision transformer backbone, RF-DETR delivers state-of-the-art accuracy and latency trade-offs on [Microsoft COCO](https://cocodataset.org/#home) and [RF100-VL](https://github.com/roboflow/rf100-vl).

RF-DETR uses a DINOv2 vision transformer backbone and supports both detection and instance segmentation in a single, consistent API. The open-source `rfdetr` package and Apache-designated models are released under Apache 2.0, while Plus components (`rfdetr_plus`, including RF-DETR-XL/2XL detection models) are licensed under PML 1.0.

https://github.com/user-attachments/assets/add23fd1-266f-4538-8809-d7dd5767e8e6

## Install

To install RF-DETR, install the `rfdetr` package in a [**Python>=3.10**](https://www.python.org/) environment with `pip`.

```bash
pip install rfdetr
```

<details>
<summary>Install from source</summary>

<br>

By installing RF-DETR from source, you can explore the most recent features and enhancements that have not yet been officially released. **Please note that these updates are still in development and may not be as stable as the latest published release.**

```bash
pip install https://github.com/roboflow/rf-detr/archive/refs/heads/develop.zip
```

</details>

## Benchmarks

RF-DETR achieves state-of-the-art results in both object detection and instance segmentation, with benchmarks reported on Microsoft COCO and RF100-VL. The charts and tables below compare RF-DETR against other top real-time models across accuracy and latency for detection and segmentation. All latency numbers were measured on an NVIDIA T4 using TensorRT, FP16, and batch size 1. For full benchmarking methodology and reproducibility details, see [roboflow/sab](https://github.com/roboflow/single_artifact_benchmarking).

### Detection

<img alt="rf_detr_1-4_latency_accuracy_object_detection" src="https://storage.googleapis.com/com-roboflow-marketing/rf-detr/rf_detr_1-4_latency_accuracy_object_detection.png" />

<details>
<summary>See object detection benchmark numbers</summary>

<br>

| Architecture  | COCO AP<sub>50</sub> | COCO AP<sub>50:95</sub> | RF100VL AP<sub>50</sub> | RF100VL AP<sub>50:95</sub> | Latency (ms) | Params (M) | Resolution |  License   |
| :-----------: | :------------------: | :---------------------: | :---------------------: | :------------------------: | :----------: | :--------: | :--------: | :--------: |
|   RF-DETR-N   |         67.6         |          48.4           |          85.0           |            57.7            |     2.3      |    30