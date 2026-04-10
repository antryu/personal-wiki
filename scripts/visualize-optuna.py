#!/usr/bin/env python3
"""
Optuna Results Visualization
Creates charts for X thread and LinkedIn article
"""

import csv
import matplotlib.pyplot as plt
import matplotlib
matplotlib.use('Agg')
import numpy as np
from pathlib import Path

RESULTS_CSV = Path.home() / "thairon/SnP500-trading/world-model/optuna_results.csv"
OUTPUT_DIR = Path.home() / "PRJs/personal-wiki/content/images"

def load_results():
    results = []
    with open(RESULTS_CSV) as f:
        reader = csv.DictReader(f)
        for row in reader:
            results.append({
                'trial': int(row['number']),
                'val_loss': float(row['value']),
                'alpha': float(row['params_alpha']),
                'beta': float(row['params_beta']),
                'dim': int(row['params_decoder_hidden_dim']),
                'lr': float(row['params_learning_rate']),
            })
    return results

def plot_trial_results(results):
    """Bar chart of all trial val_loss values"""
    fig, ax = plt.subplots(figsize=(14, 6))

    trials = [r['trial'] for r in results]
    losses = [r['val_loss'] for r in results]
    colors = ['#2ecc71' if l == min(losses) else
              '#3498db' if l < 0.78 else
              '#e74c3c' if l > 0.9 else '#95a5a6' for l in losses]

    bars = ax.bar(trials, losses, color=colors, edgecolor='white', linewidth=0.5)

    # Reference lines
    ax.axhline(y=0.781, color='#e67e22', linestyle='--', linewidth=2, label='JEPA baseline (0.781)')
    ax.axhline(y=0.844, color='#e74c3c', linestyle=':', linewidth=2, label='GLP default (0.844)')

    ax.set_xlabel('Trial', fontsize=12)
    ax.set_ylabel('Validation Loss', fontsize=12)
    ax.set_title('Optuna 20 Trials: GLP Hyperparameter Search', fontsize=14, fontweight='bold')
    ax.legend(fontsize=10)
    ax.set_xticks(trials)

    # Annotate best trial
    best = min(results, key=lambda r: r['val_loss'])
    ax.annotate(f'Best: {best["val_loss"]:.4f}\n(Trial {best["trial"]})',
                xy=(best['trial'], best['val_loss']),
                xytext=(best['trial'] + 3, best['val_loss'] - 0.05),
                arrowprops=dict(arrowstyle='->', color='#2ecc71'),
                fontsize=11, fontweight='bold', color='#2ecc71')

    plt.tight_layout()
    plt.savefig(OUTPUT_DIR / 'optuna-trials.png', dpi=150, bbox_inches='tight')
    print(f"✅ optuna-trials.png")

def plot_comparison(results):
    """JEPA vs GLP comparison bar chart"""
    fig, ax = plt.subplots(figsize=(8, 6))

    best = min(results, key=lambda r: r['val_loss'])

    labels = ['GLP\n(default)', 'JEPA\n(baseline)', 'GLP\n(optimized)']
    values = [0.844, 0.781, best['val_loss']]
    colors = ['#e74c3c', '#e67e22', '#2ecc71']

    bars = ax.bar(labels, values, color=colors, width=0.5, edgecolor='white')

    for bar, val in zip(bars, values):
        ax.text(bar.get_x() + bar.get_width()/2., bar.get_height() + 0.01,
                f'{val:.4f}', ha='center', va='bottom', fontweight='bold', fontsize=13)

    ax.set_ylabel('Validation Loss (lower = better)', fontsize=12)
    ax.set_title('JEPA vs GLP: Final Comparison', fontsize=14, fontweight='bold')
    ax.set_ylim(0, 1.0)

    # Improvement annotation
    improvement = (0.781 - best['val_loss']) / 0.781 * 100
    ax.annotate(f'+{improvement:.1f}% better\nthan JEPA',
                xy=(2, best['val_loss']),
                xytext=(2, best['val_loss'] + 0.12),
                ha='center', fontsize=11, color='#2ecc71', fontweight='bold')

    plt.tight_layout()
    plt.savefig(OUTPUT_DIR / 'jepa-vs-glp.png', dpi=150, bbox_inches='tight')
    print(f"✅ jepa-vs-glp.png")

def plot_alpha_impact(results):
    """Scatter plot showing alpha vs val_loss"""
    fig, ax = plt.subplots(figsize=(10, 6))

    alphas = [r['alpha'] for r in results]
    losses = [r['val_loss'] for r in results]
    dims = [r['dim'] for r in results]

    # Size by decoder dim
    sizes = [d/10 for d in dims]

    scatter = ax.scatter(alphas, losses, s=sizes, c=losses, cmap='RdYlGn_r',
                         edgecolors='black', linewidth=0.5, alpha=0.8)

    ax.axhline(y=0.781, color='#e67e22', linestyle='--', linewidth=1.5, label='JEPA (0.781)')

    ax.set_xlabel('Alpha (latent weight)', fontsize=12)
    ax.set_ylabel('Validation Loss', fontsize=12)
    ax.set_title('Alpha vs Performance: Low α Dominates', fontsize=14, fontweight='bold')
    ax.legend(fontsize=10)

    # Add region annotation
    ax.axvspan(0.25, 0.45, alpha=0.1, color='green', label='Sweet spot')
    ax.text(0.35, 0.68, 'Sweet\nSpot', ha='center', fontsize=12, color='green', fontweight='bold')

    plt.colorbar(scatter, label='val_loss')
    plt.tight_layout()
    plt.savefig(OUTPUT_DIR / 'alpha-impact.png', dpi=150, bbox_inches='tight')
    print(f"✅ alpha-impact.png")

def main():
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    if not RESULTS_CSV.exists():
        print(f"❌ {RESULTS_CSV} not found")
        return

    results = load_results()
    print(f"Loaded {len(results)} trials\n")

    plot_trial_results(results)
    plot_comparison(results)
    plot_alpha_impact(results)

    print(f"\n📊 All charts saved to {OUTPUT_DIR}")

if __name__ == '__main__':
    main()
