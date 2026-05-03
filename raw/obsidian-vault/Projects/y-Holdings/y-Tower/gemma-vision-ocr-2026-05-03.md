# Gemma Vision OCR Activation Report
Date: 2026-05-03

## Vision Activation: PARTIAL FALLBACK

### gemma3:27b status: BLOCKED — Ollama GGUF incompatible with llama.cpp standalone

Root cause: Ollama's gemma3:27b blob (`sha256-e796792...`) is missing GGUF metadata key
`gemma3.attention.layer_norm_rms_epsilon` required by llama.cpp. Secondary issue: vocab
tensor shape mismatch (got 262144, expected 262145). Both are Ollama-specific GGUF format
deviations that cannot be patched at runtime.

Tested: llama.cpp b8680 + b9000 (upgraded), --override-kv flag. Both fail.

### Fallback activated: Tesseract OCR (kor+eng, v5.5.2)

Active fallback in ingest-bot.ts ocrImage() — triggers when VISION_LLM_URL (:8082) unreachable.
Works for Korean + English images via OS-level OCR. Less accurate than LLM for complex layouts.

### Manual TODO to fully activate Gemma 3 vision

Download a llama.cpp-compatible GGUF from HuggingFace:
```bash
# ~17GB download, requires ~20GB free disk
/opt/homebrew/bin/llama-server -hf unsloth/gemma-3-27b-it-GGUF:Q4_K_M \
  --port 8082 --mmproj-auto -ngl 999 -c 8192 -a gemma3:27b \
  --download-only
# Then update VISION_LLM_URL model path in config + plist
```

HuggingFace repo (public, no auth): `unsloth/gemma-3-27b-it-GGUF`

---

## ingest-bot.ts OCR Re-wire

**File**: `/Users/andrew/PRJs/personal-wiki/scripts/ingest-bot.ts`

Diff summary:
- Added `VISION_LLM_URL` env var (default `http://127.0.0.1:8082`)
- Added `OCR_VISION_MODEL = "gemma3:27b"` constant
- OCR now calls `VISION_LLM_URL` (gemma3) first, Tesseract fallback second
- Empty string returned as last resort (classify still works)

Git commits: `84c5250` + `dfe9b30`

---

## Guide Page Section Added

**File**: `/Users/andrew/PRJs/y-company/src/app/guide/page.tsx`

Added section "사용 중인 LLM 모델 (m4max 로컬)" after AI Engine section (~line 277):
- 7-row model table (qwen3:32b, qwen2.5-coder:32b, deepseek-r1:70b, llama3.3:70b,
  exaone3.5, gemma3:27b vision, backup set)
- Footer note: port 8080 main / 8082 vision, Ollama retired 2026-05-02
- Bilingual (ko/en) using existing t() pattern

NOTE: M1 y-company build pending — m1 not SSH-accessible during this session.

---

## wiki-automation-guide.md Section Added

**File**: `/Users/andrew/PRJs/personal-wiki/wiki/_meta/wiki-automation-guide.md`

Added "사용 중인 LLM 모델" markdown table after "기술 상세" section.
Git pushed: `main` branch, commit `84c5250`.

---

## llama-swap config diff

**File**: `/Users/andrew/.config/llama-swap/config.yaml`

```diff
  "gemma3:27b":
    cmd: |
      ${llama-server}
      -m /Users/andrew/.ollama/models/blobs/sha256-e796792...
+     --override-kv gemma3.attention.layer_norm_rms_epsilon=float:1e-06
      --mmproj-auto
      -c 16384
```

NOTE: Despite --override-kv, the vocab tensor shape mismatch still blocks loading.
The config change is preserved for when the HF-sourced GGUF is downloaded.

---

## Build Pass/Fail

- Personal Wiki git push: PASS (`main` updated)
- y-company M1 build: SKIPPED (M1 unreachable via SSH)
- llama.cpp upgraded: 8680 → 9000 via `brew upgrade llama.cpp`
- gemma3:27b server start: FAIL (GGUF incompatible, see above)

---

## launchd Plist Created

**File**: `/Users/andrew/Library/LaunchAgents/com.gemma3.vision.plist`

KeepAlive=false, RunAtLoad=false (on-demand only).
Activates with: `launchctl load ~/Library/LaunchAgents/com.gemma3.vision.plist`
After HF GGUF download, update the -m path in the plist.

---

## OCR Test Result

Vision test: SKIPPED (server failed to start)
Tesseract fallback: AVAILABLE (tesseract 5.5.2, kor+eng confirmed)

---

## Summary

| Item | Status |
|---|---|
| gemma3:27b vision | BLOCKED — Ollama GGUF incompatible |
| Tesseract fallback | ACTIVE |
| ingest-bot OCR re-wire | DONE |
| llama-swap config | UPDATED (pending HF GGUF) |
| guide page section | DONE (m4max copy) |
| wiki article section | DONE + git pushed |
| personal wiki git push | PASS |
| M1 y-company build | PENDING (M1 unreachable) |
| llama.cpp upgrade | 8680 → 9000 |
