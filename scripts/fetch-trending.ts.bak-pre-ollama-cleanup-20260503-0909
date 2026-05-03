#!/usr/bin/env npx tsx
/**
 * GitHub Trending Crawler
 * Fetches trending repos from GitHub, saves to personal-wiki.
 * Runs daily via launchd or manually.
 *
 * Usage:
 *   npx tsx scripts/fetch-trending.ts
 *   npx tsx scripts/fetch-trending.ts --lang python --since weekly
 *
 * Options:
 *   --lang <language>   Filter by language (default: all)
 *   --since <period>    daily | weekly | monthly (default: daily)
 *   --top <n>           Number of repos to save (default: 10)
 *   --dry-run           Print repos without saving
 */

import { writeFileSync, readFileSync, readdirSync, mkdirSync, existsSync, appendFileSync } from "fs";
import { join } from "path";
import { execSync } from "child_process";

// Config
const OLLAMA_URL = process.env.OLLAMA_URL || "http://127.0.0.1:11434";
const WIKI_ROOT = process.env.WIKI_DIR || join(process.env.HOME || "", "PRJs/personal-wiki");
const RAW_DIR = join(WIKI_ROOT, "raw");
const WIKI_DIR = join(WIKI_ROOT, "wiki");
const LOG_FILE = join(WIKI_DIR, "log.md");
const STATE_FILE = join(RAW_DIR, "ingest", ".trending-seen.json");

// Telegram notification
const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN || "REDACTED_TELEGRAM";
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || "5392600349";

// Languages to crawl (empty = all)
const LANGUAGES = ["", "python", "typescript", "rust", "go", "swift"];
const SINCE = "daily";
const TOP_N = 10;

interface TrendingRepo {
  owner: string;
  name: string;
  description: string;
  language: string;
  stars: string;
  todayStars: string;
  url: string;
}

function today(): string {
  return new Date().toISOString().split("T")[0];
}

function slugify(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 50);
}

// Load previously seen repos to avoid duplicates
function loadSeen(): Set<string> {
  try {
    if (existsSync(STATE_FILE)) {
      const data = JSON.parse(readFileSync(STATE_FILE, "utf-8"));
      // Keep only last 30 days of entries
      const cutoff = Date.now() - 30 * 24 * 60 * 60 * 1000;
      const filtered = data.filter((e: { ts: number }) => e.ts > cutoff);
      return new Set(filtered.map((e: { repo: string }) => e.repo));
    }
  } catch {}
  return new Set();
}

function saveSeen(seen: Set<string>) {
  const entries = [...seen].map(repo => ({ repo, ts: Date.now() }));
  mkdirSync(join(RAW_DIR, "ingest"), { recursive: true });
  writeFileSync(STATE_FILE, JSON.stringify(entries, null, 2));
}

// Parse GitHub Trending HTML
function parseTrending(html: string): TrendingRepo[] {
  const repos: TrendingRepo[] = [];
  // Each trending repo is in an <article class="Box-row">
  const articleRegex = /<article[^>]*class="[^"]*Box-row[^"]*"[^>]*>([\s\S]*?)<\/article>/g;
  let match;

  while ((match = articleRegex.exec(html)) !== null) {
    const block = match[1];

    // Extract owner/repo from h2 > a link (skip login/sponsor links)
    const linkMatch = block.match(/<h2[^>]*>[\s\S]*?href="\/([^/]+)\/([^/"]+)"[\s\S]*?<\/h2>/);
    if (!linkMatch) continue;
    const [, owner, name] = linkMatch;
    // Skip sponsor entries
    if (block.includes("/sponsors/")) continue;

    // Description
    const descMatch = block.match(/<p[^>]*class="[^"]*color-fg-muted[^"]*"[^>]*>([\s\S]*?)<\/p>/);
    const description = descMatch
      ? descMatch[1].replace(/<[^>]+>/g, "").trim()
      : "";

    // Language
    const langMatch = block.match(/itemprop="programmingLanguage"[^>]*>([^<]+)/);
    const language = langMatch ? langMatch[1].trim() : "";

    // Total stars (in the stargazers link text)
    const starsMatch = block.match(/\/stargazers"[\s\S]*?>([\s\S]*?)<\/a>/);
    const starsText = starsMatch ? starsMatch[1].replace(/<[^>]+>/g, "").trim() : "0";
    const stars = starsText.replace(/[^\d,]/g, "") || "0";

    // Today's stars
    const todayMatch = block.match(/([\d,]+)\s*stars?\s*today/i);
    const todayStars = todayMatch ? todayMatch[1].trim() : "0";

    repos.push({
      owner,
      name,
      description,
      language,
      stars,
      todayStars,
      url: `https://github.com/${owner}/${name}`,
    });
  }

  return repos;
}

// Fetch trending page
async function fetchTrending(lang: string, since: string): Promise<TrendingRepo[]> {
  const url = lang
    ? `https://github.com/trending/${encodeURIComponent(lang)}?since=${since}`
    : `https://github.com/trending?since=${since}`;

  console.log(`[Trending] Fetching: ${url}`);
  const res = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) wiki-ingest-bot",
      Accept: "text/html",
    },
  });

  if (!res.ok) {
    console.error(`[Trending] HTTP ${res.status} for ${url}`);
    return [];
  }

  const html = await res.text();
  return parseTrending(html);
}

// Fetch detailed repo info via GitHub API
async function fetchRepoDetails(owner: string, repo: string): Promise<string | null> {
  try {
    const [repoRes, readmeRes] = await Promise.all([
      fetch(`https://api.github.com/repos/${owner}/${repo}`, {
        headers: { "User-Agent": "wiki-ingest-bot", Accept: "application/vnd.github.v3+json" },
      }),
      fetch(`https://api.github.com/repos/${owner}/${repo}/readme`, {
        headers: { "User-Agent": "wiki-ingest-bot", Accept: "application/vnd.github.v3+json" },
      }),
    ]);

    if (!repoRes.ok) return null;
    const info = await repoRes.json();

    let readme = "";
    if (readmeRes.ok) {
      const readmeData = await readmeRes.json();
      if (readmeData.content) {
        readme = Buffer.from(readmeData.content, "base64").toString("utf-8").slice(0, 4000);
      }
    }

    return `# ${info.full_name}

> ${info.description || "No description"}

## Repository Info
- **URL**: ${info.html_url}
- **Stars**: ${info.stargazers_count?.toLocaleString()}
- **Forks**: ${info.forks_count?.toLocaleString()}
- **Language**: ${info.language || "N/A"}
- **License**: ${info.license?.name || "N/A"}
- **Created**: ${info.created_at?.split("T")[0]}
- **Updated**: ${info.updated_at?.split("T")[0]}
- **Topics**: ${info.topics?.join(", ") || "N/A"}
- **Open Issues**: ${info.open_issues_count}

## README (excerpt)
${readme || "(no README)"}`;
  } catch (e) {
    console.error(`[API] Error fetching ${owner}/${repo}:`, e);
    return null;
  }
}

// Classify using Ollama
async function classify(content: string): Promise<{ category: string; title: string }> {
  const categories = ["business", "insights", "research", "finance", "tech", "projects", "infra", "daily", "people", "reference"];

  try {
    const res = await fetch(`${OLLAMA_URL}/api/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "qwen3:32b",
        messages: [{
          role: "user",
          content: `/no_think\nClassify this GitHub repository into one category and give a short English title.\nCategories: ${categories.join(", ")}\nContent: ${content.slice(0, 1500)}\nReply ONLY JSON: {"category":"...","title":"short title"}`,
        }],
        stream: false,
      }),
    });

    if (res.ok) {
      const data = await res.json();
      let text = (data.message?.content || "")
        .replace(/<think>[\s\S]*?<\/think>/g, "")
        .replace(/```json?\n?/g, "")
        .replace(/```/g, "")
        .trim();
      if (text) {
        try { return JSON.parse(text); } catch {}
      }
      // Fallback: extract JSON from anywhere
      const jsonMatch = text.match(/\{[^{}]*"category"\s*:\s*"[^"]*"[^{}]*"title"\s*:\s*"[^"]*"[^{}]*\}/);
      if (jsonMatch) {
        try { return JSON.parse(jsonMatch[0]); } catch {}
      }
    }
  } catch (e) {
    console.error("[Classify] Error:", e);
  }

  return { category: "tech", title: content.split("\n")[0]?.replace(/^#\s*/, "").slice(0, 40) || "untitled" };
}

// Compile to wiki article
async function compileToWiki(content: string, category: string, title: string, rawPath: string): Promise<string | null> {
  try {
    const wikiDir = join(WIKI_DIR, category);
    mkdirSync(wikiDir, { recursive: true });

    const res = await fetch(`${OLLAMA_URL}/api/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "qwen3:32b",
        messages: [{
          role: "user",
          content: `/no_think\nYou are a wiki compiler. Create a structured wiki article from this GitHub repository info.\nOutput ONLY the markdown article, nothing else.\n\nTitle: ${title}\nCategory: ${category}\nSource: ${rawPath}\n\nTemplate:\n# ${title}\n\n> {2-3 sentence summary of what this repo does and why it's notable}\n> Last updated: ${today()}\n\n## Overview\n{organized content}\n\n## Key Points\n- point 1\n- point 2\n\n## Sources\n- [GitHub](source URL)\n- [원본](${rawPath})\n\n---\n\nContent:\n\n${content.slice(0, 8000)}`,
        }],
        stream: false,
      }),
    });

    if (!res.ok) return null;
    const data = await res.json();
    let article = (data.message?.content || "").replace(/<think>[\s\S]*?<\/think>/g, "").trim();
    const filename = slugify(title) + ".md";
    writeFileSync(join(wikiDir, filename), article);
    console.log(`[Compile] Created: wiki/${category}/${filename}`);
    return join(wikiDir, filename);
  } catch (e) {
    console.error("[Compile] Error:", e);
    return null;
  }
}

// Send Telegram notification with trending summary
async function sendTelegramNotification(repos: Array<{ repo: TrendingRepo; category: string; title: string }>) {
  if (repos.length === 0) return;

  let msg = `🔥 *GitHub Trending Daily*\n📅 ${today()}\n\n`;
  for (const { repo, category, title } of repos) {
    msg += `⭐ *${repo.stars}* | [${repo.owner}/${repo.name}](${repo.url})\n`;
    msg += `   📂 ${category} — ${title}\n`;
    if (repo.description) msg += `   _${repo.description.slice(0, 80)}_\n`;
    msg += `\n`;
  }
  msg += `총 ${repos.length}개 위키 저장 완료`;

  try {
    await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: msg,
        parse_mode: "Markdown",
        disable_web_page_preview: true,
      }),
    });
    console.log("[TG] Notification sent");
  } catch (e) {
    console.error("[TG] Failed to send notification:", e);
  }
}

function gitSync(): boolean {
  try {
    execSync("git add raw/ingest/ wiki/ && git commit -m 'trending: auto-crawl' && git push", {
      cwd: WIKI_ROOT,
      timeout: 30000,
      stdio: "pipe",
    });
    return true;
  } catch {
    return false;
  }
}

// ==================== Main ====================

async function main() {
  // Parse CLI args
  const args = process.argv.slice(2);
  const langArg = args.includes("--lang") ? args[args.indexOf("--lang") + 1] : "";
  const sinceArg = args.includes("--since") ? args[args.indexOf("--since") + 1] : SINCE;
  const topArg = args.includes("--top") ? parseInt(args[args.indexOf("--top") + 1]) : TOP_N;
  const dryRun = args.includes("--dry-run");

  const languages = langArg ? [langArg] : LANGUAGES;

  console.log(`\n🔥 GitHub Trending Crawler`);
  console.log(`   Date: ${today()}`);
  console.log(`   Languages: ${languages.join(", ") || "all"}`);
  console.log(`   Period: ${sinceArg}`);
  console.log(`   Top: ${topArg} per language`);
  console.log(`   Dry run: ${dryRun}\n`);

  const seen = loadSeen();
  const allRepos: TrendingRepo[] = [];

  // Fetch trending for each language
  for (const lang of languages) {
    const repos = await fetchTrending(lang, sinceArg);
    console.log(`[${lang || "all"}] Found ${repos.length} trending repos`);

    // Filter out already-seen repos
    const newRepos = repos.filter(r => !seen.has(`${r.owner}/${r.name}`));
    console.log(`[${lang || "all"}] ${newRepos.length} new (${repos.length - newRepos.length} already seen)`);

    allRepos.push(...newRepos.slice(0, topArg));

    // Rate limit between pages
    await new Promise(r => setTimeout(r, 1000));
  }

  // Deduplicate across languages
  const unique = new Map<string, TrendingRepo>();
  for (const repo of allRepos) {
    const key = `${repo.owner}/${repo.name}`;
    if (!unique.has(key)) unique.set(key, repo);
  }

  const finalRepos = [...unique.values()];
  console.log(`\n📊 Total unique new repos: ${finalRepos.length}\n`);

  if (dryRun) {
    for (const repo of finalRepos) {
      console.log(`  ⭐ ${repo.stars.padStart(6)} | ${repo.owner}/${repo.name} — ${repo.description.slice(0, 60)}`);
    }
    return;
  }

  // Process each repo
  let saved = 0;
  const savedResults: Array<{ repo: TrendingRepo; category: string; title: string }> = [];

  for (const repo of finalRepos) {
    const key = `${repo.owner}/${repo.name}`;
    console.log(`\n[${saved + 1}/${finalRepos.length}] Processing ${key}...`);

    // Fetch detailed info
    const details = await fetchRepoDetails(repo.owner, repo.name);
    if (!details) {
      console.log(`  ⚠️ Could not fetch details, using basic info`);
    }

    const content = details || `# ${repo.owner}/${repo.name}\n\n> ${repo.description}\n\n- URL: ${repo.url}\n- Stars: ${repo.stars}\n- Language: ${repo.language}\n- Today: +${repo.todayStars} stars`;

    // Classify
    const { category, title } = await classify(content);
    console.log(`  📂 ${category}/${title}`);

    // Save raw
    const slug = slugify(title);
    const rawDir = join(RAW_DIR, "ingest", category);
    mkdirSync(rawDir, { recursive: true });
    const mdFilename = `${today()}-${slug}.md`;
    const rawPath = join(rawDir, mdFilename);
    const rawRelPath = `raw/ingest/${category}/${mdFilename}`;

    // Add trending metadata header
    const fullContent = `<!-- GitHub Trending: ${repo.language || "all"} | ${repo.stars} stars | +${repo.todayStars} today -->\n\n${content}`;
    writeFileSync(rawPath, fullContent);

    // Compile to wiki
    const wikiPath = await compileToWiki(content, category, title, rawRelPath);

    // Log
    const logEntry = `\n## [${today()}] trending | ${title}\n- Source: GitHub Trending (${repo.language || "all"}), ⭐ ${repo.stars}, Category: ${category}\n`;
    appendFileSync(LOG_FILE, logEntry);

    // Track for notification
    savedResults.push({ repo, category, title });

    // Mark as seen
    seen.add(key);
    saved++;

    // Rate limit GitHub API (unauthenticated: 60 req/hour)
    await new Promise(r => setTimeout(r, 3000));
  }

  // Save seen state
  saveSeen(seen);

  // Git sync
  if (saved > 0) {
    console.log(`\n[Git] Syncing ${saved} repos...`);
    const synced = gitSync();
    console.log(synced ? "✅ Git push complete" : "⚠️ Git push failed (local only)");
  }

  // Send Telegram notification
  if (savedResults.length > 0 && !dryRun) {
    await sendTelegramNotification(savedResults);
  }

  console.log(`\n✅ Done. Saved ${saved} trending repos to wiki.`);
}

main().catch(console.error);
