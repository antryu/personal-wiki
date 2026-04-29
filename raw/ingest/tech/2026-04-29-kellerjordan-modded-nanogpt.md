<!-- GitHub Trending: Python | 5,171 stars | +21 today -->

# KellerJordan/modded-nanogpt

> NanoGPT (124M) in 90 seconds

## Repository Info
- **URL**: https://github.com/KellerJordan/modded-nanogpt
- **Stars**: 5,171
- **Forks**: 726
- **Language**: Python
- **License**: MIT License
- **Created**: 2024-06-01
- **Updated**: 2026-04-29
- **Topics**: N/A
- **Open Issues**: 27

## README (excerpt)
# Modded-NanoGPT

This repository hosts the *NanoGPT speedrun*, in which we (collaboratively|competitively) search for the fastest algorithm to use 8 NVIDIA H100 GPUs to train a language model that attains 3.28 cross-entropy loss on the [FineWeb](https://huggingface.co/datasets/HuggingFaceFW/fineweb) validation set.

The target (3.28 validation loss on FineWeb) follows Andrej Karpathy's [GPT-2 replication in llm.c, which attains that loss after running for 45 minutes](https://github.com/karpathy/llm.c/discussions/481#:~:text=By%20the%20end%20of%20the%20optimization%20we%27ll%20get%20to%20about%203.29).
The speedrun code also descends from llm.c's [PyTorch trainer](https://github.com/karpathy/llm.c/blob/master/train_gpt2.py), which itself descends from NanoGPT, hence the name of the repo.
Thanks to the efforts of many contributors, this repo now contains a training algorithm which attains the target performance in:
* Under 90 seconds on 8xH100 (the llm.c GPT-2 replication needed 45 minutes)
* under 400M tokens (the llm.c GPT-2 replication needed 10B)

This improvement in training speed has been brought about by the following techniques:
* Modernized architecture: Rotary embeddings, QK-Norm, and ReLU²
* The Muon optimizer [[writeup](https://kellerjordan.github.io/posts/muon/)] [[repo](https://github.com/KellerJordan/Muon)]
* Use FP8 matmul for head, and asymmetric rescale and softcap logits
* Initialization of projections to zero (muP-like)
* Skip connections from embedding to every block as well as from block 3 to 6
* Extra embeddings which are mixed into the values in attention layers (inspired by Zhou et al. 2024)
* Flash Attention 3 with long-short sliding window attention pattern (inspired by Gemma 2) and window size warmup with YaRN
* Align training batch starts with EoS and set a max document length
* Accumulate gradients for 2 steps for embedding and lm_head before updating parameters
* Backout, with single activation input for last 3 attention layers
* Polar Express implementation in Muon
* Smear module to enable 1 token look back
* Sparse attention gate
* NorMuon
* Cautious Weight Decay w/ schedule tied to LR
* Exponential decay of residual stream
* Batch size schedule
* Max seq length schedule
* Partial Key Offset
* Multi token prediction
* Untie embed and lm_head at 2/3 of training
* Additional gating on value embeddings and skip connection
* Paired head attention
* Bigram hash embedding

As well as many systems optimizations.

Contributors list (growing with each new record): [@bozavlado](https://x.com/bozavlado); [@brendanh0gan](https://x.com/brendanh0gan);
[@fernbear.bsky.social](https://bsky.app/profile/fernbear.bsky.social); [@Grad62304977](https://x.com/Grad62304977); 
[@jxbz](https://x.com/jxbz); [@kellerjordan0](https://x.com/kellerjordan0);
[@KoszarskyB](https://x.com/KoszarskyB); [@leloykun](https://x.com/@leloykun);
[@YouJiacheng](https://x.com/YouJiacheng); [@jadenj3o](https://x.com/jadenj3o);
[@KonstantinWilleke](https://github.com/KonstantinWilleke), [@alexrgilbert](https://github.com/alexrgilbert), [@adricarda](https://github.com/adricarda),
[@tuttyfrutyee](https://github.com/tuttyfrutyee), [@vdlad](https://github.com/vdlad); 
[@ryanyang0](https://x.com/ryanyang0), [@vagrawal](https://github.com/vagrawal), [@classiclarryd](https://x.com/classiclarryd), 
[@byronxu99](https://github.com/byronxu99), [@varunneal](https://x.com/varunneal), [@EmelyanenkoK](https://github.com/EmelyanenkoK), 
[@bernard24](https://github.com/bernard24)/https://www.hiverge.ai/, [@Gusarich](https://x.com/Gusarich), [@li_zichong](https://x.com/li_zichong),
[@akash5474](https://github.com/akash5474), [@snimu](https://x.com/omouamoua), [@roeeshenberg](https://x.com/roeeshenberg),
[@ChrisJMcCormick](https://x.com/ChrisJMcCormick), [@dominikkallusky](https://github.com/dominikkallusky), [@acutkosky](https://github.com/acutkosky), 
[@manikbhandari](https://github.com/manikbhandari), [@andrewbriand](https://x.com/andrewbriand8), [@jrauv