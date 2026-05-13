<!-- GitHub Trending: Python | 36,791 stars | +5 today -->

# huggingface/pytorch-image-models

> The largest collection of PyTorch image encoders / backbones. Including train, eval, inference, export scripts, and pretrained weights -- ResNet, ResNeXT, EfficientNet, NFNet, Vision Transformer (ViT), MobileNetV4, MobileNet-V3 & V2, RegNet, DPN, CSPNet, Swin Transformer, MaxViT, CoAtNet, ConvNeXt, and more

## Repository Info
- **URL**: https://github.com/huggingface/pytorch-image-models
- **Stars**: 36,791
- **Forks**: 5,156
- **Language**: Python
- **License**: Apache License 2.0
- **Created**: 2019-02-02
- **Updated**: 2026-05-13
- **Topics**: augmix, convnext, distributed-training, efficientnet, image-classification, imagenet, maxvit, mixnet, mobile-deep-learning, mobilenet-v2, mobilenetv3, nfnets, normalization-free-training, optimizer, pretrained-models, pretrained-weights, pytorch, randaugment, resnet, vision-transformer-models
- **Open Issues**: 66

## README (excerpt)
# PyTorch Image Models
- [What's New](#whats-new)
- [Introduction](#introduction)
- [Models](#models)
- [Features](#features)
- [Results](#results)
- [Getting Started (Documentation)](#getting-started-documentation)
- [Train, Validation, Inference Scripts](#train-validation-inference-scripts)
- [Awesome PyTorch Resources](#awesome-pytorch-resources)
- [Licenses](#licenses)
- [Citing](#citing)

## What's New
## May 8, 2026
* Release 1.0.27

## April 23, 2026
* Add Gemma4 ViT encoders w/ NaFlex pipeline support (variable aspect/size per image). Thanks [Yonghye Kwon](https://github.com/developer0hye)
* Support DINOv3 weights in NaFlexVit. Thanks [Yonghye Kwon](https://github.com/developer0hye)
* Some improvements to Muon fallback (AdamW/NadamW) lr behavior

## March 23, 2026
* Improve pickle checkpoint handling security. Default all loading to `weights_only=True`, add safe_global for ArgParse.
* Improve attention mask handling for core ViT/EVA models & layers. Resolve bool masks, pass `is_causal` through for SSL tasks.
* Fix class & register token uses with ViT and no pos embed enabled.
* Add Patch Representation Refinement (PRR) as a pooling option in ViT. Thanks Sina (https://github.com/sinahmr).
* Improve consistency of output projection / MLP dimensions for attention pooling layers.
* Hiera model F.SDPA optimization to allow Flash Attention kernel use.
* Caution added to SGDP optimizer.
* Release 1.0.26. First maintenance release since my departure from Hugging Face.

## Feb 23, 2026
* Add token distillation training support to distillation task wrappers
* Remove some torch.jit usage in prep for official deprecation
* Caution added to AdamP optimizer
* Call reset_parameters() even if meta-device init so that buffers get init w/ hacks like init_empty_weights
* Tweak Muon optimizer to work with DTensor/FSDP2 (clamp_ instead of clamp_min_, alternate NS branch for DTensor)
* Release 1.0.25

## Jan 21, 2026
* **Compat Break**: Fix oversight w/ QKV vs MLP bias in `ParallelScalingBlock` (& `DiffParallelScalingBlock`)
  * Does not impact any trained `timm` models but could impact downstream use.

## Jan 5 & 6, 2026
* Release 1.0.24
* Add new benchmark result csv files for inference timing on all models w/ RTX Pro 6000, 5090, and 4090 cards w/ PyTorch 2.9.1
* Fix moved module error in deprecated timm.models.layers import path that impacts legacy imports
* Release 1.0.23

## Dec 30, 2025
* Add better NAdaMuon trained `dpwee`, `dwee`, `dlittle` (differential) ViTs with a small boost over previous runs
  * https://huggingface.co/timm/vit_dlittle_patch16_reg1_gap_256.sbb_nadamuon_in1k (83.24% top-1)
  * https://huggingface.co/timm/vit_dwee_patch16_reg1_gap_256.sbb_nadamuon_in1k  (81.80% top-1)
  * https://huggingface.co/timm/vit_dpwee_patch16_reg1_gap_256.sbb_nadamuon_in1k (81.67% top-1)
* Add a ~21M param `timm` variant of the CSATv2 model at 512x512 & 640x640
  * https://huggingface.co/timm/csatv2_21m.sw_r640_in1k (83.13% top-1)
  * https://huggingface.co/timm/csatv2_21m.sw_r512_in1k (82.58% top-1)
* Factor non-persistent param init out of `__init__` into a common method that can be externally called via `init_non_persistent_buffers()` after meta-device init. 
  
## Dec 12, 2025
* Add CSATV2 model (thanks https://github.com/gusdlf93) -- a lightweight but high res model with DCT stem & spatial attention. https://huggingface.co/Hyunil/CSATv2
* Add AdaMuon and NAdaMuon optimizer support to existing `timm` Muon impl. Appears more competitive vs AdamW with familiar hparams for image tasks.
* End of year PR cleanup, merge aspects of several long open PR
  * Merge differential attention (`DiffAttention`), add corresponding `DiffParallelScalingBlock` (for ViT), train some wee vits
    * https://huggingface.co/timm/vit_dwee_patch16_reg1_gap_256.sbb_in1k
    * https://huggingface.co/timm/vit_dpwee_patch16_reg1_gap_256.sbb_in1k
  * Add a few pooling modules, `LsePlus` and `SimPool`
  * Cleanup, optimize `DropBlock2d` (also add support to ByobNet b