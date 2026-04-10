#!/usr/bin/env npx tsx
/**
 * Discord Channel History Fetcher
 * Fetches all messages from specified Discord channels and saves as daily .md files
 * Usage: npx tsx scripts/fetch-discord.ts [--channel <name>] [--all] [--since <date>]
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
// @ts-ignore
import fetch from "node-fetch";

import { join } from "path";

const OPENCLAW_CONFIG = join(
  process.env.HOME || "",
  ".openclaw/openclaw.json"
);
const RAW_DIR = join(process.env.HOME || "", "PRJs/personal-wiki/raw/discord");
const DISCORD_API = "https://discord.com/api/v10";

// Channel name → ID mapping (will be auto-populated)
const CHANNELS: Record<string, string> = {};

function getToken(): string {
  const config = JSON.parse(readFileSync(OPENCLAW_CONFIG, "utf-8"));
  const token = config?.channels?.discord?.token;
  if (!token) throw new Error("Discord bot token not found in openclaw.json");
  return token;
}

async function fetchApi(path: string, token: string): Promise<any> {
  const res = await fetch(`${DISCORD_API}${path}`, {
    headers: { Authorization: `Bot ${token}` },
  });
  if (res.status === 429) {
    const retry = Number(res.headers.get("retry-after") || 5);
    console.log(`  Rate limited, waiting ${retry}s...`);
    await new Promise((r) => setTimeout(r, retry * 1000));
    return fetchApi(path, token);
  }
  if (!res.ok) throw new Error(`Discord API ${res.status}: ${await res.text()}`);
  return res.json();
}

async function getGuilds(token: string): Promise<any[]> {
  return fetchApi("/users/@me/guilds", token);
}

async function getChannels(guildId: string, token: string): Promise<any[]> {
  return fetchApi(`/guilds/${guildId}/channels`, token);
}

async function getMessages(
  channelId: string,
  token: string,
  before?: string,
  limit = 100
): Promise<any[]> {
  const params = new URLSearchParams({ limit: String(limit) });
  if (before) params.set("before", before);
  return fetchApi(`/channels/${channelId}/messages?${params}`, token);
}

function formatMessage(msg: any): string {
  const time = new Date(msg.timestamp).toLocaleTimeString("ko-KR", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const author = msg.author?.global_name || msg.author?.username || "Unknown";
  let content = msg.content || "";

  // Handle attachments
  if (msg.attachments?.length) {
    for (const att of msg.attachments) {
      content += `\n![${att.filename}](${att.url})`;
    }
  }

  // Handle embeds
  if (msg.embeds?.length) {
    for (const embed of msg.embeds) {
      if (embed.title) content += `\n> **${embed.title}**`;
      if (embed.description) content += `\n> ${embed.description}`;
      if (embed.url) content += `\n> ${embed.url}`;
    }
  }

  return `**${author}** (${time})\n${content}\n`;
}

async function fetchChannelHistory(
  channelName: string,
  channelId: string,
  token: string,
  sinceDate?: Date
): Promise<number> {
  const outDir = join(RAW_DIR, channelName);
  mkdirSync(outDir, { recursive: true });

  let allMessages: any[] = [];
  let before: string | undefined;
  let fetched = 0;

  console.log(`  Fetching #${channelName}...`);

  while (true) {
    const messages = await getMessages(channelId, token, before);
    if (!messages.length) break;

    // Check if we've gone past sinceDate
    if (sinceDate) {
      const oldest = new Date(messages[messages.length - 1].timestamp);
      if (oldest < sinceDate) {
        const filtered = messages.filter(
          (m: any) => new Date(m.timestamp) >= sinceDate!
        );
        allMessages.push(...filtered);
        fetched += filtered.length;
        break;
      }
    }

    allMessages.push(...messages);
    fetched += messages.length;
    before = messages[messages.length - 1].id;

    // Progress indicator
    if (fetched % 500 === 0) console.log(`    ${fetched} messages...`);

    // Small delay to avoid rate limits
    await new Promise((r) => setTimeout(r, 500));
  }

  // Group by date
  const byDate: Record<string, any[]> = {};
  for (const msg of allMessages) {
    const date = new Date(msg.timestamp).toISOString().split("T")[0];
    if (!byDate[date]) byDate[date] = [];
    byDate[date].push(msg);
  }

  // Write daily .md files
  let fileCount = 0;
  for (const [date, msgs] of Object.entries(byDate)) {
    // Sort chronologically (oldest first)
    msgs.sort(
      (a: any, b: any) =>
        new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
    );

    const content = [
      `# #${channelName} — ${date}`,
      "",
      `> ${msgs.length} messages`,
      "",
      "---",
      "",
      ...msgs.map(formatMessage),
    ].join("\n");

    writeFileSync(join(outDir, `${date}.md`), content);
    fileCount++;
  }

  console.log(`  ✅ #${channelName}: ${fetched} messages → ${fileCount} files`);
  return fetched;
}

async function main() {
  const args = process.argv.slice(2);
  const channelFilter = args.includes("--channel")
    ? args[args.indexOf("--channel") + 1]
    : null;
  const fetchAll = args.includes("--all");
  const sinceArg = args.includes("--since")
    ? args[args.indexOf("--since") + 1]
    : null;
  const sinceDate = sinceArg ? new Date(sinceArg) : undefined;

  const token = getToken();
  console.log("Discord History Fetcher");
  console.log("========================");

  // Get guilds
  const guilds = await getGuilds(token);
  if (!guilds.length) {
    console.error("No guilds found");
    process.exit(1);
  }

  console.log(`Found ${guilds.length} guild(s)`);

  for (const guild of guilds) {
    console.log(`\nGuild: ${guild.name} (${guild.id})`);

    const channels = await getChannels(guild.id, token);
    const textChannels = channels.filter((c: any) => c.type === 0); // Text channels only

    console.log(`Text channels: ${textChannels.length}`);

    for (const ch of textChannels) {
      CHANNELS[ch.name] = ch.id;
    }

    // Determine which channels to fetch
    let toFetch = textChannels;
    if (channelFilter) {
      toFetch = textChannels.filter((c: any) => c.name === channelFilter);
      if (!toFetch.length) {
        console.error(`Channel #${channelFilter} not found`);
        console.log(
          "Available:",
          textChannels.map((c: any) => `#${c.name}`).join(", ")
        );
        process.exit(1);
      }
    } else if (!fetchAll) {
      console.log("\nAvailable channels:");
      for (const ch of textChannels) {
        console.log(`  #${ch.name} (${ch.id})`);
      }
      console.log(
        "\nUse --all to fetch all, or --channel <name> for specific channel"
      );
      return;
    }

    // Fetch each channel
    let totalMessages = 0;
    for (const ch of toFetch) {
      try {
        const count = await fetchChannelHistory(
          ch.name,
          ch.id,
          token,
          sinceDate
        );
        totalMessages += count;
      } catch (err: any) {
        console.error(`  ❌ #${ch.name}: ${err.message}`);
      }
    }

    console.log(`\n========================`);
    console.log(`Total: ${totalMessages} messages fetched`);
    if (sinceDate) console.log(`Since: ${sinceDate.toISOString().split("T")[0]}`);
  }
}

main().catch(console.error);
