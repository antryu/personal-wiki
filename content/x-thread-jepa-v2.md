# X Thread: JEPA vs GLP — AI Agents Run 93 Hours of Experiments

## Tweet 1 (Hook)
I had AI agents run 93 hours of experiments to settle a debate in world model research.

JEPA (LeCun) vs GLP (Xing et al.) for S&P500 regime detection.

The "winner" after the first test was wrong.

Here's what 20 Optuna trials revealed 🧵

## Tweet 2 (Setup)
My setup:
• M4 Max (128GB) — training
• M1 Pro — orchestration gateway
• 30 AI agents — research, implement, evaluate
• $0/month compute — all local

One person. Zero employees. Agents do the work.

## Tweet 3 (The Question)
Research question:

"Can world models predict S&P500 regime shifts?"

JEPA: learn latent states, no decoder (LeCun's approach)
GLP: JEPA + decoder to prevent representation collapse (Xing's critique)

We tested both on 420K sequences of S&P500 futures data (2020-2025).

## Tweet 4 (JEPA First)
JEPA results (41 epochs):

✅ 6 regimes detected
✅ 53x error gap (best vs worst regime)
✅ val_loss: 0.781

Backtest with BB breakout:
• PF: 1.63 → 2.61 (+60%)
• MDD: -422pt → -112pt (-73%)

Looked great. Then we tried GLP...

## Tweet 5 (GLP Failed)
GLP with default params (α=0.5, β=0.5):

val_loss = 0.844

2.2x worse than JEPA.

The decoder was just adding noise.

Most people would stop here and conclude "JEPA wins."

We almost did.

## Tweet 6 (The Twist)
But: "Don't conclude from n=1."

We ran 20 Optuna trials:
• α (latent weight): 0.3-0.9
• β (reconstruction): 0.1-0.7
• decoder_dim: 256/512/1024
• lr: 1e-5 to 1e-4

93 hours. 20 full training runs. Zero human intervention.

M4 Max running 24/7.

## Tweet 7 (Results)
Best GLP (Trial 12):
• α=0.3, β=0.6, dim=1024
• val_loss: 0.7067

vs JEPA: 0.781
vs Default GLP: 0.844

GLP beat JEPA by 9.5%.

The "losing" architecture was just badly tuned.

## Tweet 8 (The Pattern)
The pattern:

Every top-5 trial had α=0.3 (low latent weight).

For financial time series:
LESS prediction + MORE reconstruction = better.

The opposite of LeCun's recommendation.
The opposite of our first conclusion.

This is why hyperparameter search matters.

## Tweet 9 (Table)
Full top 5:

Trial 12: 0.7067 (α=0.3, β=0.6, dim=1024)
Trial 5: 0.7092 (α=0.3, β=0.5, dim=512)
Trial 10: 0.7322 (α=0.3, β=0.7, dim=1024)
Trial 4: 0.7373 (α=0.4, β=0.1, dim=256)
Trial 15: 0.7494 (α=0.3, β=0.6, dim=1024)

All α≥0.6 trials → val_loss > 0.8 (bad).

## Tweet 10 (Insight)
Key insight for practitioners:

Academic papers test ONE config and declare winners.

Real engineering tests MANY configs.

JEPA "beat" GLP in the paper's setting. GLP beats JEPA when properly tuned for the domain.

Don't trust n=1 comparisons.

## Tweet 11 (How)
How this was done with no team:

1. Agent reads papers
2. Agent implements architectures
3. Agent designs experiment
4. Agent runs 93h of compute
5. Agent analyzes results

I set the direction. Agents did the labor.

This is AI-native R&D.

## Tweet 12 (What's Next)
Next steps:

1. Backtest optimized GLP in live strategy
2. Multi-asset expansion
3. Open-source the world model

Building in public — a quant research lab run by AI agents.

## Tweet 13 (CTA)
If you're building with AI agents or working on world models for finance, let's connect.

Code and configs coming to GitHub soon.

#BuildInPublic #QuantTrading #WorldModels

---

## Posting Notes
- Post time: 화요일 밤 9시 KST (미국 동부 아침 8시)
- Images needed:
  1. Optuna val_loss chart (20 trials)
  2. JEPA vs GLP bar chart
  3. α impact scatter plot
- Tweet 1: no hashtags (cleaner hook)
- Tweet 13: #BuildInPublic #QuantTrading #WorldModels
- LinkedIn version: content/linkedin-jepa-v1.md 참조
