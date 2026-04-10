#!/usr/bin/env npx tsx
/**
 * Wiki Compiler
 * Reads raw data (Discord history, Obsidian notes) and compiles wiki articles.
 * Uses Claude API to summarize and create structured articles.
 *
 * Usage:
 *   npx tsx scripts/compile.ts --channel world-model    # Compile one channel
 *   npx tsx scripts/compile.ts --all                    # Compile all raw data
 *   npx tsx scripts/compile.ts --obsidian               # Compile Obsidian vault
 */

import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync } from "fs";
import { join, basename } from "path";
import { execSync } from "child_process";

const PROJECT_ROOT = join(process.env.HOME || "", "PRJs/personal-wiki");
const RAW_DIR = join(PROJECT_ROOT, "raw");
const WIKI_DIR = join(PROJECT_ROOT, "wiki");

// Channel → wiki category mapping
const CHANNEL_MAP: Record<string, string> = {
  "knowledge": "insights",
  "daily-tracker": "daily",
  "snp500-trading": "finance/trading",
  "mybidwise": "projects/mybidwise",
  "mybidwise-marketing": "projects/mybidwise",
  "_y-directive": "business/directive",
  "_y-tower": "business/tower",
  "_y-strategy": "business/strategy",
  "moltbook": "projects/moltbook",
  "world-model": "research/world-model",
  "ai-papers": "research/papers",
  "github-trending": "tech/trending",
  "investing": "finance/investing",
  "ultra-trader": "finance/ultra-trader",
  "hydrogen-law": "projects/hydrogen-law",
  "m116gmac": "infra",
  "m4max128g": "infra",
  "imacsbot": "infra",
  "snptradingbot": "infra",
};

function callClaude(prompt: string): string {
  // Use Claude Code CLI — inherits OAuth auth automatically
  const tmpFile = join(PROJECT_ROOT, ".tmp-prompt.txt");
  writeFileSync(tmpFile, prompt);
  try {
    const env = { ...process.env };
    delete env.CLAUDECODE;
    const result = execSync(
      `ollama run qwen3:latest "$(cat ${tmpFile})"`,
      { encoding: "utf-8", maxBuffer: 50 * 1024 * 1024, timeout: 600000, env }
    );
    return result;
  } finally {
    try { require("fs").unlinkSync(tmpFile); } catch {}
  }
}

function readRawFiles(dir: string): { date: string; content: string }[] {
  if (!existsSync(dir)) return [];

  return readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .sort()
    .map((f) => ({
      date: basename(f, ".md"),
      content: readFileSync(join(dir, f), "utf-8"),
    }));
}

async function compileChannel(
  channelName: string,
): Promise<void> {
  const rawDir = join(RAW_DIR, "discord", channelName);
  const files = readRawFiles(rawDir);

  if (!files.length) {
    console.log(`  ⏭️  #${channelName}: no raw data`);
    return;
  }

  const wikiCategory = CHANNEL_MAP[channelName] || "uncategorized";
  const wikiDir = join(WIKI_DIR, wikiCategory);
  mkdirSync(wikiDir, { recursive: true });

  console.log(`  📝 #${channelName}: ${files.length} files → ${wikiCategory}/`);

  // Combine all raw content (truncate if too large)
  let combined = files.map((f) => `## ${f.date}\n${f.content}`).join("\n\n---\n\n");

  // Limit to ~50K chars for CLI processing speed
  if (combined.length > 50000) {
    combined = combined.slice(0, 50000) + "\n\n[... truncated ...]";
  }

  const prompt = `You are a wiki compiler. Output ONLY the markdown article content. Do NOT ask for permissions, do NOT write files, do NOT explain what you will do. Just output the article directly.

Read the following Discord channel history and create a structured wiki article.

Channel: #${channelName}
Category: ${wikiCategory}

Rules:
1. Create ONE comprehensive article summarizing all conversations
2. Extract key decisions, insights, results, and action items
3. Use Korean for content (matching the original language)
4. Include backlinks using [[wiki/path]] format for related topics
5. Reference original conversations with dates: (raw/discord/${channelName}/{date}.md)
6. DO NOT lose important details - be thorough but organized
7. Output ONLY the markdown content below, nothing else

Template:
# {Descriptive Title}

> {2-3 sentence summary}
> Last updated: ${new Date().toISOString().split("T")[0]}

## Overview
{Main narrative}

## Key Topics
### {Topic 1}
{Details with dates}

### {Topic 2}
{Details with dates}

## Key Decisions
- {date}: {decision}

## Results & Outcomes
- {result}

## Related
- [[related-article]]

## Sources
- [날짜](raw/discord/${channelName}/{date}.md)

---

Raw data:

${combined}`;

  try {
    const article = callClaude(prompt);
    const filename = channelName.replace(/^_/, "").replace(/-/g, "-") + ".md";
    writeFileSync(join(wikiDir, filename), article);
    console.log(`  ✅ → ${wikiCategory}/${filename}`);
  } catch (err: any) {
    console.error(`  ❌ #${channelName}: ${err.message}`);
  }
}

async function compileObsidianFolder(
  folderPath: string,
  wikiCategory: string,
): Promise<void> {
  if (!existsSync(folderPath)) return;

  const files = readdirSync(folderPath, { recursive: true })
    .filter((f) => String(f).endsWith(".md"))
    .slice(0, 50); // Limit to 50 files per category

  if (!files.length) return;

  const wikiDir = join(WIKI_DIR, wikiCategory);
  mkdirSync(wikiDir, { recursive: true });

  console.log(`  📝 Obsidian ${folderPath}: ${files.length} files → ${wikiCategory}/`);

  let combined = "";
  for (const f of files) {
    const content = readFileSync(join(folderPath, String(f)), "utf-8");
    combined += `## ${f}\n${content}\n\n---\n\n`;
    if (combined.length > 150000) break;
  }

  const prompt = `You are a wiki compiler. Read the following Obsidian vault notes and create a structured wiki article.

Source: Obsidian Vault - ${folderPath}
Category: ${wikiCategory}

Rules:
1. Create ONE comprehensive article organizing all notes
2. Use Korean for content
3. Include backlinks using [[wiki/path]] format
4. Reference originals: (raw/obsidian/main/{path})
5. Be thorough - preserve important details
6. Use clear sections and hierarchy

Template:
# {Descriptive Title}

> {2-3 sentence summary}
> Last updated: ${new Date().toISOString().split("T")[0]}

## Overview
{Main content organized by topic}

## Related
- [[related-article]]

## Sources
- [원본](raw/obsidian/main/{path})

---

Raw data:

${combined}`;

  try {
    const article = callClaude(prompt);
    const filename = wikiCategory.split("/").pop() + "-index.md";
    writeFileSync(join(wikiDir, filename), article);
    console.log(`  ✅ → ${wikiCategory}/${filename}`);
  } catch (err: any) {
    console.error(`  ❌ Obsidian ${wikiCategory}: ${err.message}`);
  }
}

async function updateIndex(): Promise<void> {
  // Scan wiki/ for all .md files and update index.md
  const articles: string[] = [];

  function scanDir(dir: string, prefix = ""): void {
    if (!existsSync(dir)) return;
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      if (entry.isDirectory() && !entry.name.startsWith("_")) {
        scanDir(join(dir, entry.name), `${prefix}${entry.name}/`);
      } else if (entry.name.endsWith(".md") && entry.name !== "index.md") {
        articles.push(`${prefix}${entry.name}`);
      }
    }
  }

  scanDir(WIKI_DIR);

  // Read existing index and append article list
  const indexPath = join(WIKI_DIR, "index.md");
  let index = readFileSync(indexPath, "utf-8");

  // Replace or append article list
  const articleList = articles
    .sort()
    .map((a) => `- [[${a.replace(".md", "")}]]`)
    .join("\n");

  if (index.includes("## All Articles")) {
    index = index.replace(
      /## All Articles[\s\S]*$/,
      `## All Articles\n${articleList}\n`
    );
  } else {
    index += `\n## All Articles\n${articleList}\n`;
  }

  // Update date
  index = index.replace(
    /Last updated: .*/,
    `Last updated: ${new Date().toISOString().split("T")[0]}`
  );

  writeFileSync(indexPath, index);
  console.log(`\n📋 index.md updated (${articles.length} articles)`);
}

// Obsidian folder → wiki category mapping
const OBSIDIAN_MAP: Record<string, string> = {
  "Clippings/notion-biz": "business",
  "Clippings/notion-insight-contents": "insights",
  "Clippings/notion-ai-predictions": "research",
  "Clippings/notion-thairon": "finance/trading",
  "Projects/y-Holdings": "projects/y-holdings",
  "Projects/Babylon": "projects/babylon",
  "References/AI-Papers": "research/papers",
  "References/AI-Tools": "tech",
  "References/AI-Trends": "tech",
  "References/Strategy": "business/strategy",
  "References/Oaktree-Insights": "finance/investing",
  "References/UI-Design": "tech",
  "Trading": "finance/trading",
};

async function main() {
  const args = process.argv.slice(2);
  const channelFilter = args.includes("--channel")
    ? args[args.indexOf("--channel") + 1]
    : null;
  const compileAll = args.includes("--all");
  const compileObsidian = args.includes("--obsidian");

  console.log("Wiki Compiler (using Claude Code CLI + OAuth)");
  console.log("========================");

  if (channelFilter) {
    await compileChannel(channelFilter);
  } else if (compileAll) {
    const discordDir = join(RAW_DIR, "discord");
    if (existsSync(discordDir)) {
      const channels = readdirSync(discordDir).filter((d) =>
        existsSync(join(discordDir, d))
      );
      console.log(`\nCompiling ${channels.length} Discord channels...`);
      for (const ch of channels) {
        await compileChannel(ch);
      }
    }

    const obsidianMain = join(RAW_DIR, "obsidian/main");
    for (const [folder, category] of Object.entries(OBSIDIAN_MAP)) {
      await compileObsidianFolder(join(obsidianMain, folder), category);
    }
  } else if (compileObsidian) {
    const obsidianMain = join(RAW_DIR, "obsidian/main");
    for (const [folder, category] of Object.entries(OBSIDIAN_MAP)) {
      await compileObsidianFolder(join(obsidianMain, folder), category);
    }
  } else {
    console.log("Usage:");
    console.log("  --channel <name>  Compile one Discord channel");
    console.log("  --all             Compile everything");
    console.log("  --obsidian        Compile Obsidian vault only");
    return;
  }

  // Update index
  await updateIndex();

  console.log("\n========================");
  console.log("Compilation complete!");
}

main().catch(console.error);
