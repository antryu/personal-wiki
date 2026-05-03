#!/usr/bin/env npx tsx
/**
 * Wiki Ingest Bot
 * Telegram + Discord bot that receives images/text and saves to personal-wiki.
 * Runs standalone on M4 Max (no OpenClaw dependency).
 *
 * Usage:
 *   npx tsx scripts/ingest-bot.ts
 *
 * Env:
 *   TELEGRAM_TOKEN   — Telegram bot token
 *   DISCORD_TOKEN    — Discord bot token
 *   LLM_URL          — llama-server API (default: http://127.0.0.1:8080)
 *   VISION_LLM_URL   — vision-capable llama-server for OCR (default: http://127.0.0.1:8082)
 *   WIKI_DIR         — personal-wiki root (default: ~/PRJs/personal-wiki)
 */

import { writeFileSync, readFileSync, readdirSync, mkdirSync, existsSync, appendFileSync, copyFileSync } from "fs";
import { join, extname } from "path";
import { execSync } from "child_process";

// Config
const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN || "REDACTED_TELEGRAM";
const DISCORD_TOKEN = process.env.DISCORD_TOKEN || "REDACTED_DISCORD_TOKEN";
const DISCORD_GUILD_ID = "1308306893105664050";
const DISCORD_INGEST_CHANNEL = "1492060544172163102"; // #wiki-ingest — auto-process all messages
const LLM_URL = process.env.LLM_URL || "http://127.0.0.1:8080";
const VISION_LLM_URL = process.env.VISION_LLM_URL || "http://127.0.0.1:8082"; // gemma3:27b with --mmproj-auto
const WIKI_ROOT = process.env.WIKI_DIR || join(process.env.HOME || "", "PRJs/personal-wiki");
const RAW_DIR = join(WIKI_ROOT, "raw");
const WIKI_DIR = join(WIKI_ROOT, "wiki");
const LOG_FILE = join(WIKI_DIR, "log.md");

const CATEGORIES = ["business", "insights", "research", "finance", "tech", "projects", "infra", "daily", "people", "reference"];

// Processing queue — serialize all LLM calls to avoid model-swapping contention
const taskQueue: Array<() => Promise<void>> = [];
let processing = false;

function enqueue(task: () => Promise<void>) {
  taskQueue.push(task);
  processQueue();
}

async function processQueue() {
  if (processing) return;
  processing = true;
  while (taskQueue.length > 0) {
    const task = taskQueue.shift()!;
    try { await task(); } catch (e) { console.error("[Queue] Task error:", e); }
  }
  processing = false;
}

function today(): string {
  return new Date().toISOString().split("T")[0];
}

function slugify(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9가-힣]+/g, "-").replace(/^-|-$/g, "").slice(0, 50);
}

// ==================== GitHub ====================

const GITHUB_URL_RE = /https?:\/\/github\.com\/([a-zA-Z0-9_.-]+)\/([a-zA-Z0-9_.-]+)\/?/;

async function fetchGitHubRepo(owner: string, repo: string): Promise<string | null> {
  console.log(`[GitHub] Fetching ${owner}/${repo}...`);
  try {
    const [repoRes, readmeRes] = await Promise.all([
      fetch(`https://api.github.com/repos/${owner}/${repo}`, {
        headers: { "User-Agent": "wiki-ingest-bot", Accept: "application/vnd.github.v3+json" },
      }),
      fetch(`https://api.github.com/repos/${owner}/${repo}/readme`, {
        headers: { "User-Agent": "wiki-ingest-bot", Accept: "application/vnd.github.v3+json" },
      }),
    ]);

    if (!repoRes.ok) {
      console.error(`[GitHub] API ${repoRes.status} for ${owner}/${repo}`);
      return null;
    }

    const info = await repoRes.json();
    let readme = "";
    if (readmeRes.ok) {
      const readmeData = await readmeRes.json();
      if (readmeData.content) {
        readme = Buffer.from(readmeData.content, "base64").toString("utf-8").slice(0, 5000);
      }
    }

    const content = `# ${info.full_name}

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

    console.log(`[GitHub] Fetched: ${info.stargazers_count} stars, ${info.language}`);
    return content;
  } catch (e) {
    console.error("[GitHub] Fetch error:", e);
    return null;
  }
}

// ==================== OCR ====================

const OCR_VISION_MODEL = "gemma3:27b"; // vision model with embedded mmproj

async function ocrImage(imageBuffer: Buffer): Promise<string> {
  const base64 = imageBuffer.toString("base64");
  console.log(`[OCR] Starting ${OCR_VISION_MODEL} (vision), image size: ${imageBuffer.length} bytes`);

  try {
    const res = await fetch(`${VISION_LLM_URL}/v1/chat/completions`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: OCR_VISION_MODEL,
        messages: [{
          role: "user",
          content: [
            { type: "text", text: "Extract ALL text from this image. Output extracted text only, no descriptions. Keep Korean as Korean." },
            { type: "image_url", image_url: { url: `data:image/jpeg;base64,${base64}` } },
          ],
        }],
        stream: false,
      }),
    });

    if (res.ok) {
      const data = await res.json();
      let text = data.choices?.[0]?.message?.content || "";
      text = text.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
      console.log(`[OCR] Done, extracted ${text.length} chars`);
      return text;
    }
    console.warn(`[OCR] ${OCR_VISION_MODEL} failed (${res.status}), falling back to text-only mode`);
  } catch (e) {
    console.warn(`[OCR] ${OCR_VISION_MODEL} error: ${e}, falling back to text-only mode`);
  }

  // Fallback: Tesseract OCR (Korean + English)
  console.warn("[OCR] 비전 모델 사용 불가 — Tesseract 폴백 시도");
  try {
    const tmpImg = `/tmp/ingest-ocr-${Date.now()}.jpg`;
    writeFileSync(tmpImg, imageBuffer);
    const result = execSync(
      `/opt/homebrew/bin/tesseract ${tmpImg} stdout -l kor+eng --psm 3 2>/dev/null`,
      { timeout: 30000 }
    ).toString().trim();
    try { require("fs").unlinkSync(tmpImg); } catch {}
    console.log(`[OCR] Tesseract fallback: ${result.length} chars`);
    return result;
  } catch (e) {
    console.error(`[OCR] Tesseract fallback also failed: ${e}`);
    return "";
  }
}

// ==================== Classify ====================

function extractJSON(raw: string): { category: string; title: string } | null {
  // Try to find JSON in the response, even inside think tags or code blocks
  const jsonMatch = raw.match(/\{[^{}]*"category"\s*:\s*"[^"]*"[^{}]*"title"\s*:\s*"[^"]*"[^{}]*\}/);
  if (jsonMatch) {
    try { return JSON.parse(jsonMatch[0]); } catch {}
  }
  return null;
}

async function classify(content: string): Promise<{ category: string; title: string }> {
  console.log("[Classify] Starting qwen3:32b...");
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const res = await fetch(`${LLM_URL}/v1/chat/completions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "qwen3:32b",
          messages: [{
            role: "user",
            content: `/no_think\nClassify into one category and give short title.\nCategories: ${CATEGORIES.join(", ")}\nContent: ${content.slice(0, 1500)}\nReply ONLY JSON: {"category":"...","title":"short title"}`,
          }],
          stream: false,
        }),
      });

      if (!res.ok) {
        console.error(`[Classify] HTTP ${res.status}, attempt ${attempt + 1}`);
        continue;
      }
      const data = await res.json();
      const raw = data.choices?.[0]?.message?.content || "";
      console.log(`[Classify] Raw (${raw.length} chars): ${raw.slice(0, 300)}`);

      // Try clean parse first
      let text = raw.replace(/<think>[\s\S]*?<\/think>/g, "").replace(/```json?\n?/g, "").replace(/```/g, "").trim();
      if (text) {
        try {
          const result = JSON.parse(text);
          console.log(`[Classify] Result: ${result.category}/${result.title}`);
          return result;
        } catch {}
      }

      // Fallback: extract JSON from anywhere in the raw response
      const extracted = extractJSON(raw);
      if (extracted) {
        console.log(`[Classify] Extracted: ${extracted.category}/${extracted.title}`);
        return extracted;
      }

      console.error(`[Classify] No JSON found, attempt ${attempt + 1}`);
    } catch (e) {
      console.error(`[Classify] Error attempt ${attempt + 1}:`, e);
    }
  }

  // Final fallback: generate title from first line of content
  const firstLine = content.split("\n").find(l => l.trim().length > 5)?.trim().slice(0, 40) || "untitled";
  console.log(`[Classify] Fallback title: ${firstLine}`);
  return { category: "reference", title: firstLine };
}

// ==================== Save ====================

function saveIngest(content: string, category: string, title: string, imageBuffer?: Buffer, imgExt?: string): string {
  console.log(`[Save] ${category}/${title} (${content.length} chars)`);
  const slug = slugify(title);
  const rawDir = join(RAW_DIR, "ingest", category);
  mkdirSync(rawDir, { recursive: true });

  // Save image original
  if (imageBuffer && imgExt) {
    const imgDir = join(rawDir, "images");
    mkdirSync(imgDir, { recursive: true });
    const imgPath = join(imgDir, `${today()}-${slug}${imgExt}`);
    writeFileSync(imgPath, imageBuffer);
  }

  // Save text
  const mdFilename = `${today()}-${slug}.md`;
  const mdPath = join(rawDir, mdFilename);
  const header = imageBuffer ? `<!-- OCR from screenshot -->\n\n` : "";
  writeFileSync(mdPath, header + content);

  // Log
  const logEntry = `\n## [${today()}] ingest | ${title}\n- Source: bot, Category: ${category}, Raw: raw/ingest/${category}/${mdFilename}\n`;
  appendFileSync(LOG_FILE, logEntry);

  return mdPath;
}

async function compileToWiki(content: string, category: string, title: string, rawPath: string): Promise<string | null> {
  console.log(`[Compile] Compiling to wiki: ${category}/${title}`);
  try {
    const wikiDir = join(WIKI_DIR, category);
    mkdirSync(wikiDir, { recursive: true });

    const existingArticles = existsSync(wikiDir)
      ? readdirSync(wikiDir).filter((f: string) => f.endsWith(".md"))
      : [];

    // Check if we should update an existing article
    let targetArticle = "";
    if (existingArticles.length > 0) {
      const checkRes = await fetch(`${LLM_URL}/v1/chat/completions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "qwen3:32b",
          messages: [{
            role: "user",
            content: `/no_think\nGiven these existing wiki articles in the "${category}" category:\n${existingArticles.map((a: string) => `- ${a}`).join("\n")}\n\nAnd this new content title: "${title}"\n\nShould we UPDATE an existing article or CREATE a new one?\nReply with ONLY JSON: {"action":"update","file":"filename.md"} or {"action":"create"}`,
          }],
          stream: false,
        }),
      });
      if (checkRes.ok) {
        const checkData = await checkRes.json();
        let checkText = checkData.checks?.[0]?.message?.content ?? checkData.choices?.[0]?.message?.content ?? "";
        checkText = checkText.replace(/<think>[\s\S]*?<\/think>/g, "").replace(/```json?\n?/g, "").replace(/```/g, "").trim();
        try {
          const decision = JSON.parse(checkText);
          if (decision.action === "update" && decision.file) targetArticle = decision.file;
        } catch {}
      }
    }

    if (targetArticle && existsSync(join(wikiDir, targetArticle))) {
      const existing = readFileSync(join(wikiDir, targetArticle), "utf-8");
      const appendSection = `\n\n## ${title} (${today()})\n\n${content.slice(0, 3000)}\n\n- Source: [원본](${rawPath})`;
      writeFileSync(join(wikiDir, targetArticle), existing + appendSection);
      console.log(`[Compile] Updated: wiki/${category}/${targetArticle}`);
      return join(wikiDir, targetArticle);
    } else {
      const compileRes = await fetch(`${LLM_URL}/v1/chat/completions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "qwen3:32b",
          messages: [{
            role: "user",
            content: `/no_think\nYou are a wiki compiler. Create a structured wiki article from this content.\nOutput ONLY the markdown article, nothing else.\n\nTitle: ${title}\nCategory: ${category}\nSource: ${rawPath}\n\nTemplate:\n# ${title}\n\n> {2-3 sentence summary}\n> Last updated: ${today()}\n\n## Overview\n{organized content}\n\n## Key Points\n- point 1\n- point 2\n\n## Sources\n- [원본](${rawPath})\n\n---\n\nContent:\n\n${content.slice(0, 8000)}`,
          }],
          stream: false,
        }),
      });
      if (!compileRes.ok) {
        console.error(`[Compile] LLM error: ${compileRes.status}`);
        return null;
      }
      const compileData = await compileRes.json();
      let article = compileData.choices?.[0]?.message?.content || "";
      article = article.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
      const filename = slugify(title) + ".md";
      writeFileSync(join(wikiDir, filename), article);
      console.log(`[Compile] Created: wiki/${category}/${filename}`);
      return join(wikiDir, filename);
    }
  } catch (e) {
    console.error("[Compile] Error:", e);
    return null;
  }
}

function gitSync(): boolean {
  console.log("[Git] Syncing...");
  try {
    execSync("git add raw/ingest/ wiki/ && git commit -m 'ingest: bot auto-save' && git push", {
      cwd: WIKI_ROOT,
      timeout: 30000,
      stdio: "pipe",
    });
    return true;
  } catch {
    return false;
  }
}

// ==================== Telegram ====================

let telegramOffset = 0;

async function telegramApi(method: string, body?: any): Promise<any> {
  const res = await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/${method}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : undefined,
  });
  return res.json();
}

async function telegramGetFile(fileId: string): Promise<Buffer> {
  const fileInfo = await telegramApi("getFile", { file_id: fileId });
  const filePath = fileInfo.result.file_path;
  const res = await fetch(`https://api.telegram.org/file/bot${TELEGRAM_TOKEN}/${filePath}`);
  return Buffer.from(await res.arrayBuffer());
}

async function handleTelegramUpdate(update: any) {
  const msg = update.message;
  if (!msg) {
    console.log("[TG] Update has no message, skipping");
    return;
  }

  const chatId = msg.chat.id;
  const text = msg.text || msg.caption || "";
  console.log(`[TG] Message from chat ${chatId}: photo=${!!msg.photo} doc=${!!msg.document} text="${text.slice(0, 50)}"`);

  // Handle photo
  if (msg.photo && msg.photo.length > 0) {
    const photo = msg.photo[msg.photo.length - 1]; // largest
    await telegramApi("sendMessage", { chat_id: chatId, text: "🔍 OCR 처리 중..." });

    try {
      const imageBuffer = await telegramGetFile(photo.file_id);
      const ocrText = await ocrImage(imageBuffer);

      if (!ocrText) {
        await telegramApi("sendMessage", { chat_id: chatId, text: "❌ 텍스트를 추출할 수 없었습니다." });
        return;
      }

      const { category, title } = await classify(text || ocrText);
      const mdFilename = `${today()}-${slugify(title)}.md`;
      const rawRelPath = `raw/ingest/${category}/${mdFilename}`;
      saveIngest(ocrText, category, title, imageBuffer, ".jpg");

      await telegramApi("sendMessage", { chat_id: chatId, text: `📝 저장 완료. 위키 컴파일 중...` });
      const wikiPath = await compileToWiki(ocrText, category, title, rawRelPath);
      const synced = gitSync();

      await telegramApi("sendMessage", {
        chat_id: chatId,
        text: `✅ Wiki Ingest 완료\n\n📂 ${category}/${title}\n📝 ${ocrText.length}자 추출\n📖 ${wikiPath ? "위키 컴파일 완료" : "컴파일 실패 (raw만 저장)"}\n💾 ${synced ? "Git push 완료" : "로컬 저장"}\n\n${ocrText.slice(0, 200)}${ocrText.length > 200 ? "..." : ""}`,
      });
    } catch (e) {
      await telegramApi("sendMessage", { chat_id: chatId, text: `❌ 처리 실패: ${e}` });
    }
    return;
  }

  // Handle document (files)
  if (msg.document) {
    const doc = msg.document;
    const ext = extname(doc.file_name || "").toLowerCase();
    if ([".png", ".jpg", ".jpeg", ".webp"].includes(ext)) {
      await telegramApi("sendMessage", { chat_id: chatId, text: "🔍 이미지 파일 OCR 처리 중..." });
      try {
        const imageBuffer = await telegramGetFile(doc.file_id);
        const ocrText = await ocrImage(imageBuffer);
        const { category, title } = await classify(text || ocrText);
        const mdFilename = `${today()}-${slugify(title)}.md`;
        const rawRelPath = `raw/ingest/${category}/${mdFilename}`;
        saveIngest(ocrText, category, title, imageBuffer, ext);
        await compileToWiki(ocrText, category, title, rawRelPath);
        gitSync();
        await telegramApi("sendMessage", { chat_id: chatId, text: `✅ ${category}/${title} — ${ocrText.length}자 저장 + 위키 컴파일` });
      } catch (e) {
        await telegramApi("sendMessage", { chat_id: chatId, text: `❌ ${e}` });
      }
      return;
    }
  }

  // Handle /start command
  if (text === "/start") {
    await telegramApi("sendMessage", {
      chat_id: chatId,
      text: "📚 Wiki Ingest Bot\n\n사용법:\n- 스크린샷/이미지 → OCR → 위키 저장\n- 텍스트 메모 (10자+) → 분류 → 위키 저장\n- GitHub URL → 레포 정보 수집 → 위키 저장",
    });
    return;
  }

  // Handle GitHub URL
  const ghMatch = text.match(GITHUB_URL_RE);
  if (ghMatch) {
    const [, owner, repo] = ghMatch;
    await telegramApi("sendMessage", { chat_id: chatId, text: `📦 GitHub 레포 수집 중: ${owner}/${repo}` });
    try {
      const repoContent = await fetchGitHubRepo(owner, repo);
      if (!repoContent) {
        await telegramApi("sendMessage", { chat_id: chatId, text: "❌ 레포 정보를 가져올 수 없습니다" });
        return;
      }
      // Combine user's comment (if any) with repo content
      const comment = text.replace(GITHUB_URL_RE, "").trim();
      const fullContent = comment ? `## Note\n${comment}\n\n${repoContent}` : repoContent;
      const { category, title } = await classify(fullContent);
      const mdFilename = `${today()}-${slugify(title)}.md`;
      const rawRelPath = `raw/ingest/${category}/${mdFilename}`;
      saveIngest(fullContent, category, title);
      await compileToWiki(fullContent, category, title, rawRelPath);
      gitSync();
      await telegramApi("sendMessage", {
        chat_id: chatId,
        text: `✅ GitHub 레포 저장\n\n📂 ${category}/${title}\n⭐ ${owner}/${repo}\n📖 위키 컴파일 완료`,
      });
    } catch (e) {
      await telegramApi("sendMessage", { chat_id: chatId, text: `❌ GitHub 처리 실패: ${e}` });
    }
    return;
  }

  // Handle text only
  if (text && text.length > 10) {
    const { category, title } = await classify(text);
    const mdFilename = `${today()}-${slugify(title)}.md`;
    const rawRelPath = `raw/ingest/${category}/${mdFilename}`;
    saveIngest(text, category, title);
    await compileToWiki(text, category, title, rawRelPath);
    gitSync();
    await telegramApi("sendMessage", { chat_id: chatId, text: `✅ ${category}/${title} 저장 + 위키 컴파일` });
  } else if (text && text.length > 0) {
    await telegramApi("sendMessage", { chat_id: chatId, text: "⚠️ 텍스트가 너무 짧습니다 (10자 이상 필요)" });
  }
}

async function pollTelegram() {
  console.log("[TG] Poll loop started, offset:", telegramOffset);
  while (true) {
    try {
      const data = await telegramApi("getUpdates", { offset: telegramOffset, timeout: 30 });
      if (!data.ok) {
        console.error("[TG] getUpdates failed:", JSON.stringify(data));
        await new Promise((r) => setTimeout(r, 5000));
        continue;
      }
      if (data.result?.length > 0) {
        console.log(`[TG] Got ${data.result.length} update(s), queuing...`);
        for (const update of data.result) {
          telegramOffset = update.update_id + 1;
          const u = update; // capture for closure
          enqueue(async () => {
            console.log(`[TG] Processing update ${u.update_id}, type: ${u.message ? "message" : "other"}`);
            await handleTelegramUpdate(u);
          });
        }
      }
    } catch (e) {
      console.error("[TG] Poll error:", e);
      await new Promise((r) => setTimeout(r, 5000));
    }
  }
}

// ==================== Discord ====================

let discordGatewayUrl = "";
let discordSessionId = "";
let discordSeq: number | null = null;
let discordHeartbeatInterval: NodeJS.Timeout | null = null;
let discordWs: any = null;

async function discordApi(path: string, options?: RequestInit): Promise<any> {
  const res = await fetch(`https://discord.com/api/v10${path}`, {
    ...options,
    headers: { Authorization: `Bot ${DISCORD_TOKEN}`, "Content-Type": "application/json", ...options?.headers },
  });
  return res.json();
}

async function discordDownloadAttachment(url: string): Promise<Buffer> {
  const res = await fetch(url);
  return Buffer.from(await res.arrayBuffer());
}

async function handleDiscordMessage(data: any) {
  const msg = data;
  if (msg.author?.bot) return;

  const channelId = msg.channel_id;
  const text = msg.content || "";
  const attachments = msg.attachments || [];

  // Handle image attachments
  const imageAttachment = attachments.find((a: any) =>
    a.content_type?.startsWith("image/") || [".png", ".jpg", ".jpeg", ".webp"].some((ext) => a.filename?.endsWith(ext))
  );

  if (imageAttachment) {
    try {
      await discordApi(`/channels/${channelId}/messages`, {
        method: "POST",
        body: JSON.stringify({ content: "🔍 OCR 처리 중..." }),
      });

      const imageBuffer = await discordDownloadAttachment(imageAttachment.url);
      const ext = extname(imageAttachment.filename || ".jpg");
      const ocrText = await ocrImage(imageBuffer);

      if (!ocrText) {
        await discordApi(`/channels/${channelId}/messages`, {
          method: "POST",
          body: JSON.stringify({ content: "❌ 텍스트 추출 실패" }),
        });
        return;
      }

      const { category, title } = await classify(text || ocrText);
      const mdFilename = `${today()}-${slugify(title)}.md`;
      const rawRelPath = `raw/ingest/${category}/${mdFilename}`;
      saveIngest(ocrText, category, title, imageBuffer, ext);
      const wikiPath = await compileToWiki(ocrText, category, title, rawRelPath);
      const synced = gitSync();

      await discordApi(`/channels/${channelId}/messages`, {
        method: "POST",
        body: JSON.stringify({
          content: `✅ **Wiki Ingest**\n📂 ${category}/${title}\n📝 ${ocrText.length}자\n📖 ${wikiPath ? "위키 컴파일 OK" : "컴파일 실패"}\n💾 ${synced ? "Git push OK" : "Local only"}\n\`\`\`\n${ocrText.slice(0, 300)}\n\`\`\``,
        }),
      });
    } catch (e) {
      console.error("[DC] Image error:", e);
    }
    return;
  }

  // Handle GitHub URL (any channel)
  const ghMatch = text.match(GITHUB_URL_RE);
  if (ghMatch) {
    const [, owner, repo] = ghMatch;
    try {
      await discordApi(`/channels/${channelId}/messages`, {
        method: "POST",
        body: JSON.stringify({ content: `📦 GitHub 레포 수집 중: ${owner}/${repo}` }),
      });
      const repoContent = await fetchGitHubRepo(owner, repo);
      if (repoContent) {
        const comment = text.replace(GITHUB_URL_RE, "").trim();
        const fullContent = comment ? `## Note\n${comment}\n\n${repoContent}` : repoContent;
        const { category, title } = await classify(fullContent);
        const mdFilename = `${today()}-${slugify(title)}.md`;
        const rawRelPath = `raw/ingest/${category}/${mdFilename}`;
        saveIngest(fullContent, category, title);
        await compileToWiki(fullContent, category, title, rawRelPath);
        gitSync();
        await discordApi(`/channels/${channelId}/messages`, {
          method: "POST",
          body: JSON.stringify({ content: `✅ **GitHub Ingest**\n📂 ${category}/${title}\n⭐ ${owner}/${repo}\n📖 위키 컴파일 완료` }),
        });
      }
    } catch (e) {
      console.error("[DC] GitHub error:", e);
    }
    return;
  }

  // Auto-process all messages in #wiki-ingest channel
  const isIngestChannel = channelId === DISCORD_INGEST_CHANNEL;
  const hasPrefix = text.startsWith("/wiki-ingest") || text.startsWith("!ingest");

  if (isIngestChannel || hasPrefix) {
    const content = hasPrefix
      ? text.replace(/^\/wiki-ingest\s*|^!ingest\s*/i, "").trim()
      : text.trim();
    if (content.length > 5) {
      const { category, title } = await classify(content);
      const mdFilename = `${today()}-${slugify(title)}.md`;
      const rawRelPath = `raw/ingest/${category}/${mdFilename}`;
      saveIngest(content, category, title);
      await compileToWiki(content, category, title, rawRelPath);
      gitSync();
      await discordApi(`/channels/${channelId}/messages`, {
        method: "POST",
        body: JSON.stringify({ content: `✅ ${category}/${title} 저장 + 위키 컴파일` }),
      });
    }
  }
}

async function connectDiscord() {
  // Use REST API polling instead of WebSocket for simplicity
  // Discord doesn't support long-polling, so we'll use message create events via Gateway
  const { WebSocket } = await import("ws");

  const gatewayData = await discordApi("/gateway/bot");
  discordGatewayUrl = gatewayData.url;

  console.log("[DC] Connecting to gateway...");

  function connect() {
    const ws = new WebSocket(`${discordGatewayUrl}?v=10&encoding=json`);
    discordWs = ws;

    ws.on("message", async (raw: Buffer) => {
      const payload = JSON.parse(raw.toString());
      const { op, d, s, t } = payload;

      if (s) discordSeq = s;

      if (op === 10) {
        // Hello — start heartbeat
        const interval = d.heartbeat_interval;
        discordHeartbeatInterval = setInterval(() => {
          ws.send(JSON.stringify({ op: 1, d: discordSeq }));
        }, interval);

        // Identify
        ws.send(JSON.stringify({
          op: 2,
          d: {
            token: DISCORD_TOKEN,
            intents: 1 << 9 | 1 << 15, // GUILD_MESSAGES | MESSAGE_CONTENT
            properties: { os: "linux", browser: "wiki-ingest-bot", device: "wiki-ingest-bot" },
          },
        }));
      }

      if (op === 11) return; // Heartbeat ACK

      if (t === "READY") {
        discordSessionId = d.session_id;
        console.log(`[DC] Connected as ${d.user.username}`);
      }

      if (t === "MESSAGE_CREATE") {
        const msg = d;
        enqueue(async () => {
          await handleDiscordMessage(msg);
        });
      }
    });

    ws.on("close", (code: number) => {
      console.log(`[DC] Disconnected (${code}), reconnecting in 5s...`);
      if (discordHeartbeatInterval) clearInterval(discordHeartbeatInterval);
      setTimeout(connect, 5000);
    });

    ws.on("error", (e: Error) => {
      console.error("[DC] WS error:", e.message);
    });
  }

  connect();
}

// ==================== Main ====================

async function main() {
  console.log("Wiki Ingest Bot");
  console.log("===============");
  console.log(`Wiki: ${WIKI_ROOT}`);
  console.log(`llama-server: ${LLM_URL}`);
  console.log("");

  // Ensure directories
  mkdirSync(join(RAW_DIR, "ingest"), { recursive: true });

  // Start both
  console.log("[TG] Starting Telegram polling...");
  pollTelegram();

  console.log("[DC] Starting Discord gateway...");
  await connectDiscord();

  console.log("\n✅ Bot running. Send images or text to ingest into wiki.");
}

main().catch(console.error);
