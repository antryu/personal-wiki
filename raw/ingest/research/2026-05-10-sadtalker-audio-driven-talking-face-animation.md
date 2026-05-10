<!-- GitHub Trending: Python | 13,791 stars | +3 today -->

# OpenTalker/SadTalker

> [CVPR 2023] SadTalker：Learning Realistic 3D Motion Coefficients for Stylized Audio-Driven Single Image Talking Face Animation

## Repository Info
- **URL**: https://github.com/OpenTalker/SadTalker
- **Stars**: 13,791
- **Forks**: 2,627
- **Language**: Python
- **License**: Other
- **Created**: 2022-11-23
- **Updated**: 2026-05-10
- **Topics**: audio-driven-talking-face, cvpr2023, deep-fake, deep-fakes, image-animation, talking-face, talking-face-generation, talking-head, talking-heads
- **Open Issues**: 655

## README (excerpt)
<div align="center">

<img src='https://user-images.githubusercontent.com/4397546/229094115-862c747e-7397-4b54-ba4a-bd368bfe2e0f.png' width='500px'/>


<!--<h2> 😭 SadTalker： <span style="font-size:12px">Learning Realistic 3D Motion Coefficients for Stylized Audio-Driven Single Image Talking Face Animation </span> </h2> -->

  <a href='https://arxiv.org/abs/2211.12194'><img src='https://img.shields.io/badge/ArXiv-PDF-red'></a> &nbsp; <a href='https://sadtalker.github.io'><img src='https://img.shields.io/badge/Project-Page-Green'></a> &nbsp; [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/Winfredy/SadTalker/blob/main/quick_demo.ipynb) &nbsp; [![Hugging Face Spaces](https://img.shields.io/badge/%F0%9F%A4%97%20Hugging%20Face-Spaces-blue)](https://huggingface.co/spaces/vinthony/SadTalker) &nbsp; [![sd webui-colab](https://img.shields.io/badge/Automatic1111-Colab-green)](https://colab.research.google.com/github/camenduru/stable-diffusion-webui-colab/blob/main/video/stable/stable_diffusion_1_5_video_webui_colab.ipynb) &nbsp; <br> [![Replicate](https://replicate.com/cjwbw/sadtalker/badge)](https://replicate.com/cjwbw/sadtalker) [![Discord](https://dcbadge.vercel.app/api/server/rrayYqZ4tf?style=flat)](https://discord.gg/rrayYqZ4tf)

<div>
    <a target='_blank'>Wenxuan Zhang <sup>*,1,2</sup> </a>&emsp;
    <a href='https://vinthony.github.io/' target='_blank'>Xiaodong Cun <sup>*,2</a>&emsp;
    <a href='https://xuanwangvc.github.io/' target='_blank'>Xuan Wang <sup>3</sup></a>&emsp;
    <a href='https://yzhang2016.github.io/' target='_blank'>Yong Zhang <sup>2</sup></a>&emsp;
    <a href='https://xishen0220.github.io/' target='_blank'>Xi Shen <sup>2</sup></a>&emsp; </br>
    <a href='https://yuguo-xjtu.github.io/' target='_blank'>Yu Guo<sup>1</sup> </a>&emsp;
    <a href='https://scholar.google.com/citations?hl=zh-CN&user=4oXBp9UAAAAJ' target='_blank'>Ying Shan <sup>2</sup> </a>&emsp;
    <a target='_blank'>Fei Wang <sup>1</sup> </a>&emsp;
</div>
<br>
<div>
    <sup>1</sup> Xi'an Jiaotong University &emsp; <sup>2</sup> Tencent AI Lab &emsp; <sup>3</sup> Ant Group &emsp; 
</div>
<br>
<i><strong><a href='https://arxiv.org/abs/2211.12194' target='_blank'>CVPR 2023</a></strong></i>
<br>
<br>


![sadtalker](https://user-images.githubusercontent.com/4397546/222490039-b1f6156b-bf00-405b-9fda-0c9a9156f991.gif)

<b>TL;DR: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; single portrait image 🙎‍♂️  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; audio 🎤  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; =  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; talking head video 🎞.</b>

<br>

</div>



## Highlights

- The license has been updated to Apache 2.0, and we've removed the non-commercial restriction
- **SadTalker has now officially been integrated into Discord, where you can use it for free by sending files. You can also generate high-quailty videos from text prompts. Join: [![Discord](https://dcbadge.vercel.app/api/server/rrayYqZ4tf?style=flat)](https://discord.gg/rrayYqZ4tf)**

- We've published a [stable-diffusion-webui](https://github.com/AUTOMATIC1111/stable-diffusion-webui) extension. Check out more details [here](docs/webui_extension.md). [Demo Video](https://user-images.githubusercontent.com/4397546/231495639-5d4bb925-ea64-4a36-a519-6389917dac29.mp4)

- Full image mode is now available! [More details...](https://github.com/OpenTalker/SadTalker#full-bodyimage-generation)

| still+enhancer in v0.0.1                 | still + enhancer   in v0.0.2       |   [input image @bagbag1815](https://twitter.com/bagbag1815/status/1642754319094108161) |
|:--------------------: |:--------------------: | :----: |
| <video  src="https://user-images.githubusercontent.com/48216707/229484996-5d7be64f-2553-4c9e-a452-c5cf0b8ebafe.mp4" type="video/mp4"> </video> | <video  src="https://user-images.githubusercontent.com/4397546/230717873-355b7bf3-d3de-49f9-a439-9220e623fce7.mp4" type="video/mp4"> </video>  | <img src='./examp