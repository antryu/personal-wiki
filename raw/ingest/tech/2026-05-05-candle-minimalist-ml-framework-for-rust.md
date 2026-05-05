<!-- GitHub Trending: Rust | 20,179 stars | +6 today -->

# huggingface/candle

> Minimalist ML framework for Rust

## Repository Info
- **URL**: https://github.com/huggingface/candle
- **Stars**: 20,179
- **Forks**: 1,553
- **Language**: Rust
- **License**: Apache License 2.0
- **Created**: 2023-06-19
- **Updated**: 2026-05-05
- **Topics**: N/A
- **Open Issues**: 657

## README (excerpt)
# candle
[![discord server](https://dcbadge.limes.pink/api/server/hugging-face-879548962464493619)](https://discord.gg/hugging-face-879548962464493619)
[![Latest version](https://img.shields.io/crates/v/candle-core.svg)](https://crates.io/crates/candle-core)
[![Documentation](https://docs.rs/candle-core/badge.svg)](https://docs.rs/candle-core)
[![License](https://img.shields.io/github/license/base-org/node?color=blue)](https://github.com/huggingface/candle/blob/main/LICENSE-MIT)
[![License](https://img.shields.io/badge/license-Apache%202.0-blue?style=flat-square)](https://github.com/huggingface/candle/blob/main/LICENSE-APACHE)

Candle is a minimalist ML framework for Rust with a focus on performance (including GPU support) 
and ease of use. Try our online demos: 
[whisper](https://huggingface.co/spaces/lmz/candle-whisper),
[LLaMA2](https://huggingface.co/spaces/lmz/candle-llama2),
[T5](https://huggingface.co/spaces/radames/Candle-T5-Generation-Wasm),
[yolo](https://huggingface.co/spaces/lmz/candle-yolo),
[Segment
Anything](https://huggingface.co/spaces/radames/candle-segment-anything-wasm).

## Get started

Make sure that you have [`candle-core`](https://github.com/huggingface/candle/tree/main/candle-core) correctly installed as described in [**Installation**](https://huggingface.github.io/candle/guide/installation.html).

Let's see how to run a simple matrix multiplication.
Write the following to your `myapp/src/main.rs` file:
```rust
use candle_core::{Device, Tensor};

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let device = Device::Cpu;

    let a = Tensor::randn(0f32, 1., (2, 3), &device)?;
    let b = Tensor::randn(0f32, 1., (3, 4), &device)?;

    let c = a.matmul(&b)?;
    println!("{c}");
    Ok(())
}
```

`cargo run` should display a tensor of shape `Tensor[[2, 4], f32]`.


Having installed `candle` with Cuda support, simply define the `device` to be on GPU:

```diff
- let device = Device::Cpu;
+ let device = Device::new_cuda(0)?;
```

For more advanced examples, please have a look at the following section.

## Check out our examples

These online demos run entirely in your browser:
- [yolo](https://huggingface.co/spaces/lmz/candle-yolo): pose estimation and
  object recognition.
- [whisper](https://huggingface.co/spaces/lmz/candle-whisper): speech recognition.
- [LLaMA2](https://huggingface.co/spaces/lmz/candle-llama2): text generation.
- [T5](https://huggingface.co/spaces/radames/Candle-T5-Generation-Wasm): text generation.
- [Phi-1.5, and Phi-2](https://huggingface.co/spaces/radames/Candle-Phi-1.5-Wasm): text generation.
- [Segment Anything Model](https://huggingface.co/spaces/radames/candle-segment-anything-wasm): Image segmentation.
- [BLIP](https://huggingface.co/spaces/radames/Candle-BLIP-Image-Captioning): image captioning.

We also provide some command line based examples using state of the art models:

- [LLaMA v1, v2, and v3](./candle-examples/examples/llama/): general LLM, includes
  the SOLAR-10.7B variant.
- [Falcon](./candle-examples/examples/falcon/): general LLM.
- [Codegeex4](./candle-examples/examples/codegeex4-9b/): Code completion, code interpreter, web search, function calling, repository-level
- [GLM4](./candle-examples/examples/glm4/): Open Multilingual Multimodal Chat LMs by THUDM
- [Gemma v1 and v2](./candle-examples/examples/gemma/): 2b and 7b+/9b general LLMs from Google Deepmind.
- [RecurrentGemma](./candle-examples/examples/recurrent-gemma/): 2b and 7b
  Griffin based models from Google that mix attention with a RNN like state.
- [Phi-1, Phi-1.5, Phi-2, and Phi-3](./candle-examples/examples/phi/): 1.3b,
  2.7b, and 3.8b general LLMs with performance on par with 7b models.
- [StableLM-3B-4E1T](./candle-examples/examples/stable-lm/): a 3b general LLM
  pre-trained on 1T tokens of English and code datasets. Also supports
  StableLM-2, a 1.6b LLM trained on 2T tokens, as well as the code variants.
- [Mamba](./candle-examples/examples/mamba/): an inference only
  implementation o