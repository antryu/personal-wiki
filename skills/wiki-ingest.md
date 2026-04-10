---
name: wiki-ingest
description: Ingest new data into the wiki
trigger: /wiki-ingest
---

# /wiki-ingest

Add new data to the wiki. The new data goes to raw/, then gets compiled into wiki articles.

## Instructions

1. Accept new data (text, file path, URL, Discord message)
2. Save to appropriate raw/ subdirectory
3. Determine which wiki article(s) should be updated
4. Update existing articles OR create new ones
5. Update backlinks in related articles
6. Update index.md if new article created

## Auto-update rule

When new data is added:
- If it fits an existing article → UPDATE that article (append new section with date)
- If it's a new topic → CREATE new article
- Always update 2-3 related articles with new backlinks (FarzaTV approach)

## Example

User: /wiki-ingest GLP Optuna 결과 나왔어. Best trial 12, val_loss 0.7067

1. Save to raw/discord/world-model/2026-04-05.md (append)
2. Update wiki/research/world-model/world-model.md (add Optuna results section)
3. Update wiki/finance/trading/snp500-trading.md (add GLP reference)
4. Update wiki/index.md if needed
