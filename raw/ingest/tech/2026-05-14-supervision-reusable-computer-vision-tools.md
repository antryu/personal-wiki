<!-- GitHub Trending: Python | 38,852 stars | +59 today -->

# roboflow/supervision

> We write your reusable computer vision tools. 💜

## Repository Info
- **URL**: https://github.com/roboflow/supervision
- **Stars**: 38,852
- **Forks**: 3,478
- **Language**: Python
- **License**: MIT License
- **Created**: 2022-11-28
- **Updated**: 2026-05-14
- **Topics**: classification, coco, computer-vision, deep-learning, hacktoberfest, image-processing, instance-segmentation, low-code, machine-learning, metrics, object-detection, oriented-bounding-box, pascal-voc, python, pytorch, tensorflow, tracking, video-processing, yolo
- **Open Issues**: 104

## README (excerpt)
<div align="center">
  <p>
    <a align="center" href="" target="https://supervision.roboflow.com">
      <img
        width="100%"
        src="https://media.roboflow.com/open-source/supervision/rf-supervision-banner.png?updatedAt=1678995927529"
      >
    </a>
  </p>

<br>

[notebooks](https://github.com/roboflow/notebooks) | [inference](https://github.com/roboflow/inference) | [autodistill](https://github.com/autodistill/autodistill) | [maestro](https://github.com/roboflow/multimodal-maestro)

<br>

[![version](https://badge.fury.io/py/supervision.svg)](https://badge.fury.io/py/supervision)
[![downloads](https://img.shields.io/pypi/dm/supervision)](https://pypistats.org/packages/supervision)
[![license](https://img.shields.io/pypi/l/supervision)](LICENSE.md)
[![python-version](https://img.shields.io/pypi/pyversions/supervision)](https://badge.fury.io/py/supervision)
[![codecov](https://codecov.io/gh/roboflow/supervision/graph/badge.svg?token=HMNJ5FVZ36)](https://codecov.io/gh/roboflow/supervision)

[![snyk](https://snyk.io/advisor/python/supervision/badge.svg)](https://snyk.io/advisor/python/supervision)
[![colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/roboflow/supervision/blob/main/demo.ipynb)
[![gradio](https://img.shields.io/badge/%F0%9F%A4%97%20Hugging%20Face-Spaces-blue)](https://huggingface.co/spaces/Roboflow/Annotators)
[![discord](https://img.shields.io/discord/1159501506232451173?logo=discord&label=discord&labelColor=fff&color=5865f2&link=https%3A%2F%2Fdiscord.gg%2FGbfgXGJ8Bk)](https://discord.gg/GbfgXGJ8Bk)

<div align="center">
    <a href="https://trendshift.io/repositories/124"  target="_blank"><img src="https://trendshift.io/api/badge/repositories/124" alt="roboflow%2Fsupervision | Trendshift" style="width: 250px; height: 55px;" width="250" height="55"/></a>
  </div>

</div>

## 👋 hello

**We are your essential toolkit for computer vision.** From data loading to real-time zone counting, we provide the building blocks so you can focus on building applications around your models. 🤝

## 💻 install

Pip install the supervision package in a
[**Python>=3.9**](https://www.python.org/) environment.

```bash
pip install supervision
```

Read more about conda, mamba, and installing from source in our [guide](https://roboflow.github.io/supervision/).

## 🔥 quickstart

### models

Supervision was designed to be model agnostic. Just plug in any classification, detection, or segmentation model. For your convenience, we have created [connectors](https://supervision.roboflow.com/latest/detection/core/#detections) for the most popular libraries like Ultralytics, Transformers, MMDetection, or Inference. Other integrations, like `rfdetr`, already return `sv.Detections` directly.

Install the optional dependencies for this example with `pip install pillow rfdetr`.

```python
import supervision as sv
from PIL import Image
from rfdetr import RFDETRSmall

image = Image.open(...)
model = RFDETRSmall()
detections = model.predict(image, threshold=0.5)

len(detections)
# 5
```

<details>
<summary>👉 more model connectors</summary>

- inference

    Running with [Inference](https://github.com/roboflow/inference) requires a [Roboflow API KEY](https://docs.roboflow.com/api-reference/authentication#retrieve-an-api-key).

    ```python
    import supervision as sv
    from PIL import Image
    from inference import get_model

    image = Image.open(...)
    model = get_model(model_id="rfdetr-small", api_key="ROBOFLOW_API_KEY")
    result = model.infer(image)[0]
    detections = sv.Detections.from_inference(result)

    len(detections)
    # 5
    ```

</details>

### annotators

Supervision offers a wide range of highly customizable [annotators](https://supervision.roboflow.com/latest/detection/annotators/), allowing you to compose the perfect visualization for your use case.

```python
import cv2
import supervision as sv

image = cv2.imread(...)
detections = sv.Detections(...)