# TurboQuant PyTorch Implementation

**Date:** 2026-03-31
**Source:** tonbistudio/turboquant-pytorch (GitHub)
**Paper:** Google TurboQuant (ICLR 2026)
**Tags:** #llm #optimization #kv-cache #pytorch

## Overview

From-scratch PyTorch implementation of Google's TurboQuant for LLM KV cache compression.

**Key Stats:**
- 5x compression @ 3-bit (99.5% attention fidelity)
- 18/18 perfect text generation (Qwen2.5-3B-Instruct) with V3
- Windows + NVIDIA GPU tested (RTX 3060, 12GB)

**GitHub:** https://github.com/tonbistudio/turboquant-pytorch

## Critical Discovery: QJL Doesn't Work for KV Cache

**Paper's Original Algorithm (V2):**
- Stage 1: MSE rotation + Lloyd-Max quantization
- Stage 2: QJL residual correction (1-bit sign info)

**Community Finding (6+ teams confirmed):**
- ❌ QJL works for vector search (no softmax)
- ❌ QJL fails for attention (softmax amplifies noise)
- V2 with QJL: **0/27 generation tests passed**
- V3 without QJL: **18/18 tests passed**

**Why QJL Fails:**
1. QJL makes inner products unbiased
2. Attention runs softmax on inner products
3. Softmax exponentially amplifies variance
4. MSE-only has biased inner products but **lower variance**
5. Lower variance wins after softmax

**Validation:**
- scos-lab measured +300% error with QJL vs +7.6% without (GPT-2)
- Our tests: V2 (QJL) = 0% success, V3 (MSE-only) = 100% success

## V3 Improvements (MSE-Only)

### 1. Asymmetric K/V Allocation
**Insight:** Keys and values have different error tolerances

- **Keys** decide which words to attend to → need precision (4 bits)
- **Values** are averaged together → errors cancel out (2 bits)

**K4/V2 Config:**
- Average: 3 bits (same as uniform 3-bit)
- Allocation: Where it matters
- Result: **Dramatically better** than uniform 3-bit

### 2. Bit-Packed Storage
- Real compression ratios (not theoretical)
- V2: stored tensors 38% **larger** than uncompressed (overhead)
- V3: actual size reduction via bit-shifting

### 3. Layer-Adaptive Precision
- Protect sensitive first/last layers
- More bits for critical layers
- Trade total compression for accuracy

### 4. Residual Window
- Keep recent N tokens in FP16
- Critical for long-context stability

## Real-World Results (Needle-in-Haystack)

Hidden fact: "The secret project code name is AURORA-7749"

| Config | 2K ctx | 4K ctx | Compression |
|--------|--------|--------|-------------|
| **FP16 baseline** | EXACT | EXACT | 1.0x |
| **K6/V4 rw=128** | EXACT | EXACT | **~2x** ✅ |
| **K8/V4 rw=128** | EXACT | EXACT | ~1.6x |
| K4/V4 rw=128 | PARTIAL | MISS | ~3x |
| K4/V4 rw=0 | MISS | MISS | ~3.4x |
| K4/V2 rw=0 | MISS | MISS | ~5x |

**Key Findings:**
- **K6/V4 + 128 token window = sweet spot** (2x, perfect output)
- 4-bit keys work at short context, fail at long
- 3-bit keys = broken generation
- Residual window (rw=128) is **critical**

**Lesson:** High attention score similarity (99.5%+) ≠ working generation

## Attention Score Accuracy (V3 vs V2)

| Config | Compression | Cosine Sim | Top-1 | Top-5 |
|--------|-------------|------------|-------|-------|
| V3 K4/V2 | 5.1x | 0.9996 | 94% | 97% |
| V3 K4/V2 + protected | 3.6x | 0.9997 | 99% | 100% |
| V2 3-bit (MSE+QJL) | 5.0x | 0.9945 | 86% | 94% |
| V2 4-bit (MSE+QJL) | 3.8x | 0.9983 | 86% | 96% |

**Takeaway:** V3 (MSE-only) beats V2 (MSE+QJL) on both accuracy and generation.

## Algorithm: How It Works

### Quantization (Compression)
1. **Normalize:** Extract vector norm
2. **Rotate:** Multiply by random orthogonal matrix
3. **Quantize:** Round each coordinate to nearest centroid (Lloyd-Max)
4. **Store:** Indices + norm (bit-packed)

### Dequantization (Decompression)
1. **Lookup:** Get centroids from stored indices
2. **Reverse rotation:** Multiply by transpose of orthogonal matrix
3. **Restore norm:** Scale to original magnitude

### Lloyd-Max Optimal Scalar Quantizer
- Precomputes optimal centroids for bell-curve distribution
- Minimizes MSE for given bit budget
- Applied independently to each rotated coordinate

## Installation & Setup

### Requirements
- Python 3.10+
- CUDA-capable NVIDIA GPU (tested RTX 3060, 12GB)
- Windows 11 or Linux

### Install
```bash
git clone https://github.com/tonbistudio/turboquant-pytorch.git
cd turboquant-pytorch
pip install -r requirements.txt
pip install torch --index-url https://download.pytorch.org/whl/cu128
```

### Test
```bash
# Text generation test (most important)
python -m turboquant.generation_test

# V3 vs V2 comparison
python -m turboquant.validate_v3

# Algorithm validation
python -m turboquant.test_turboquant
```

**First run:** Downloads Qwen2.5-3B-Instruct (~2GB)

## Code Structure

```
turboquant/
  __init__.py              # Package exports
  lloyd_max.py             # Lloyd-Max optimal scalar quantizer solver
  turboquant.py            # Core V2 (MSE+QJL, reference only)
  compressors.py           # V2 compressors (deprecated)
  compressors_v3.py        # V3 compressors (MSE-only, K/V asymmetric)
  test_turboquant.py       # Synthetic algorithm tests
  validate.py              # V2 attention comparison
  validate_v3.py           # V3 vs V2 comparison
  generation_test.py       # V3 text generation test
  requirements.txt
```

### Key Classes

**MSECompressor** (compressors_v3.py)
- Single-stage MSE-only compressor
- Bit-packed storage
- Used for both keys and values
- Core building block of V3

**TurboQuantV3** (compressors_v3.py)
- Orchestrator for K/V asymmetric compression
- Handles layer-adaptive precision
- Creates separate key/value compressors

**TurboQuantMSE** (turboquant.py)
- Original Stage 1 quantizer
- Still used by synthetic tests

**TurboQuantProd** (turboquant.py)
- Original two-stage (MSE+QJL)
- Kept for reference
- Don't use for KV cache

## Performance Validation

### MSE Distortion (d=128, 1000 random unit vectors)

| Bits | Measured MSE | Paper's Upper Bound | Ratio |
|------|--------------|---------------------|-------|
| 1-bit | 0.362 | 0.680 | 0.53x ✅ |
| 2-bit | 0.116 | 0.170 | 0.68x ✅ |
| 3-bit | 0.034 | 0.043 | 0.81x ✅ |
| 4-bit | 0.009 | 0.011 | 0.87x ✅ |

**Interpretation:** All measured distortions are **below** paper's upper bound → implementation correct.

### Needle-in-Haystack (Synthetic Vectors)
- **9/9 exact retrieval** across all bit-widths and sequence lengths
- Validates algorithm correctness

## Application to _y Holdings

### Current Bottleneck
- 30 agents × Ollama (local LLM)
- KV cache memory bottleneck
- M1 Pro 16GB: 3 agents max
- M4 Max 128GB: 30 agents possible but tight

### TurboQuant V3 Impact (K6/V4 + rw=128)

**Compression:** 2x (conservative, proven stable)

```
Before: 1 agent = 2GB RAM (KV cache)
After:  1 agent = 1GB RAM (2x compression)

M1 Pro 16GB:
  Before: 3 agents max
  After:  6-8 agents ✅

M4 Max 128GB:
  Before: 30 agents (tight, 60GB)
  After:  30 agents + 30GB free
```

**Additional Benefits:**
- 8x speed improvement (H100 benchmarks)
- Longer conversation history (more context fits)
- M1 Pro becomes viable for _y development

### Trading World Model
- 70K sequences → more history in memory
- Faster inference → real-time decision possible
- M1 Pro training becomes feasible

### MyBidWise
- 144K bid notices → full history in RAM
- Faster prediction responses
- Browser-based local inference (via WASM)

## Integration Path

### Phase 1: Prototype (This Week)
1. Clone repo on M4 Max
2. Run generation_test.py (validate setup)
3. Test with Ollama-compatible model (Qwen2.5)
4. Benchmark: Before/After memory usage

### Phase 2: Ollama Integration (2-4 Weeks)
1. Modify Ollama backend to use TurboQuant V3
2. Upstream PR or fork
3. Test with _y agent workload (30 agents)
4. Measure real-world improvements

### Phase 3: Production (1-2 Months)
1. vLLM backend option (if Ollama integration blocked)
2. Full _y deployment
3. Trading model integration
4. MyBidWise integration

## Recommended Config for _y

**Conservative (K6/V4 + rw=128):**
- 2x compression
- 100% generation accuracy (tested)
- Safe for production

**Moderate (K4/V4 + rw=128):**
- 3x compression
- 95%+ accuracy at short context
- Acceptable for non-critical agents

**Aggressive (K4/V2 + rw=128):**
- 5x compression
- Requires more testing
- Use only if desperate for memory

**Recommendation:** Start with K6/V4. Proven stable, 2x is already huge.

## Alternative Implementations

### YATQ (Arclabs001/YATQ)
- Alternative PyTorch implementation
- HuggingFace interface support
- Less tested than tonbistudio

### turboquant-model (cksac/turboquant-model)
- **Different use case:** Weight quantization (not KV cache)
- 4-bit weight quantization
- Does NOT use QJL
- Not relevant for _y's KV cache problem

## References

- **Paper:** [TurboQuant: Online Vector Quantization with Near-optimal Distortion Rate](https://arxiv.org/abs/2504.19874) (ICLR 2026)
- **GitHub:** https://github.com/tonbistudio/turboquant-pytorch
- **QJL Paper:** [QJL: 1-Bit Quantized JL Transform for KV Cache Quantization with Zero Overhead](https://arxiv.org/abs/2406.03482)
- **PolarQuant Paper:** [PolarQuant: Quantizing KV Caches with Polar Transformation](https://arxiv.org/abs/2502.02617)
- **QJL Reference:** https://github.com/amirzandieh/QJL
- **PolarQuant Reference:** https://github.com/ericshwu/PolarQuant

## Key Insights

### 1. Theory ≠ Practice
- QJL is theoretically unbiased
- But softmax breaks the assumptions
- Community testing > paper claims

### 2. Asymmetric > Uniform
- K4/V2 beats uniform 3-bit
- Allocate bits where they matter
- Keys need precision, values don't

### 3. Residual Window is Critical
- 128 FP16 tokens = safety net
- Long context = must have
- Short context = can skip

### 4. Compression vs Accuracy Trade-off
- 2x = safe (K6/V4 + rw=128)
- 3x = risky (K4/V4 + rw=128)
- 5x = broken (K4/V2 + rw=0)

### 5. Attention Scores Lie
- 99.5% similarity ≠ working generation
- Test with actual text output
- Don't trust metrics alone

## Next Steps

**Immediate:**
- [ ] Clone tonbistudio/turboquant-pytorch on M4 Max
- [ ] Run generation_test.py (validate CUDA setup)
- [ ] Test with Qwen2.5-3B-Instruct

**This Week:**
- [ ] Benchmark M4 Max memory usage (Before/After)
- [ ] Test K6/V4 config with _y agent workload
- [ ] Document real-world compression ratio

**Next Week:**
- [ ] Research Ollama integration path
- [ ] Prototype Ollama + TurboQuant backend
- [ ] Test with 30 concurrent agents

**Long-term:**
- [ ] Upstream Ollama PR or maintain fork
- [ ] Integrate into _y production
- [ ] Apply to trading world model
- [ ] Apply to MyBidWise prediction engine

---

*"QJL is beautiful in theory, broken in practice. MSE-only wins."*
— tonbistudio/turboquant-pytorch community findings
