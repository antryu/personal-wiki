---
name: wiki-query
description: Search and query the personal wiki knowledge base
trigger: /wiki-query
---

# /wiki-query

Search the personal wiki and answer questions based on compiled knowledge.

## Instructions

1. Read `wiki/index.md` to understand the wiki structure
2. Based on the user's query, identify relevant categories
3. Read the relevant wiki articles (drill down via backlinks)
4. If wiki articles reference raw data and more detail is needed, read `raw/` files
5. Synthesize an answer from the wiki content
6. If the answer leads to new insights, suggest updating the relevant wiki article

## Search Strategy

1. Start at `wiki/index.md`
2. Check `wiki/_meta/categories.md` for category matching
3. Read relevant category articles
4. Follow `[[backlinks]]` for related context
5. If needed, grep across wiki/ for specific keywords

## Response Format

Answer the query directly, then:
- List sources used: `📎 wiki/path/article.md`
- Suggest related articles: `🔗 [[related]]`
- If new insight found: `💡 Suggest: update wiki/path/article.md with...`

## Example

User: JEPA 연구 결과 어때?

1. Read wiki/index.md → research/world-model/
2. Read wiki/research/world-model/world-model.md
3. Answer with key findings
4. Reference: 📎 wiki/research/world-model/world-model.md
5. Related: 🔗 [[finance/trading/snp500-trading]]
