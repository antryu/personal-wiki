---
name: wiki-compile
description: Compile raw data into wiki articles
trigger: /wiki-compile
---

# /wiki-compile

Compile raw Discord/Obsidian data into structured wiki articles.

## Instructions

1. Run `npx tsx scripts/compile.ts` with appropriate flags
2. Review generated articles for quality
3. Verify index.md was updated
4. Git commit the changes

## Usage

```bash
# Compile specific Discord channel
npx tsx scripts/compile.ts --channel world-model

# Compile all sources
npx tsx scripts/compile.ts --all

# Compile Obsidian vault only
npx tsx scripts/compile.ts --obsidian
```

## Post-compile checklist
- [ ] Articles have proper backlinks
- [ ] index.md updated with new articles
- [ ] No data loss (raw/ untouched)
- [ ] Git commit with descriptive message
