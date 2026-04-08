/**
 * publish.ts — Cross-platform article publisher
 *
 * Reads a story from newsDesk.ts and publishes it to:
 *   DEV Community (dev.to), Medium, Hashnode
 *
 * Usage:
 *   npm run publish -- --desk ai --story openai-promptfoo-evals-infrastructure
 *   npm run publish -- --desk markets --story pjm-capacity-auction --platforms dev,hashnode
 *
 * Required env vars (copy .env.publish.example → .env.publish and fill in):
 *   DEV_API_KEY          — dev.to/settings/account → DEV API Key
 *   MEDIUM_TOKEN         — medium.com/me/settings → Integration tokens
 *   HASHNODE_TOKEN       — hashnode.com/settings/developer
 *   HASHNODE_PUB_ID      — your Hashnode publication ID (from dashboard URL)
 */

import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { desks, type NewsStory, type NewsDesk } from "../src/data/newsDesk.js";

// ── Env loader (no dotenv dependency — reads .env.publish manually) ────────────

const __dir = dirname(fileURLToPath(import.meta.url));

function loadEnv() {
  const envPath = resolve(__dir, "../.env.publish");
  try {
    const raw = readFileSync(envPath, "utf-8");
    for (const line of raw.split("\n")) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const eq = trimmed.indexOf("=");
      if (eq === -1) continue;
      const key = trimmed.slice(0, eq).trim();
      const val = trimmed.slice(eq + 1).trim().replace(/^["']|["']$/g, "");
      if (key && !(key in process.env)) process.env[key] = val;
    }
  } catch {
    // .env.publish not found — rely on actual env vars
  }
}

// ── CLI args ──────────────────────────────────────────────────────────────────

function parseArgs() {
  const args = process.argv.slice(2);
  const get = (flag: string) => {
    const i = args.indexOf(flag);
    return i !== -1 ? args[i + 1] : undefined;
  };
  const desk = get("--desk");
  const story = get("--story");
  const platforms = (get("--platforms") ?? "dev,medium,hashnode").split(",").map((s) => s.trim());
  const dryRun = args.includes("--dry-run");

  if (!desk || !story) {
    console.error("Usage: npm run publish -- --desk <id> --story <slug> [--platforms dev,medium,hashnode] [--dry-run]");
    process.exit(1);
  }
  return { desk, story, platforms, dryRun };
}

// ── Markdown formatter ────────────────────────────────────────────────────────

function toMarkdown(story: NewsStory, desk: NewsDesk): string {
  const url = `https://yujiazhang.co.uk/news?desk=${desk.id}&story=${story.slug}`;
  const tags = [desk.id, "finance", "AI", "markets"]
    .filter(Boolean)
    .slice(0, 4)
    .join(", ");

  const body = [
    `# ${story.headline}`,
    "",
    `*${story.dek}*`,
    "",
    `![${story.imageAlt}](${story.image})`,
    "",
    story.paragraphs.join("\n\n"),
    "",
    "---",
    "",
    "## Model View",
    "",
    story.modelView,
    "",
    "## Bottom Line",
    "",
    `**${story.bottomLine}**`,
    "",
    "---",
    "",
    `*Originally published on [yujiazhang.co.uk](${url}) — the market intelligence board for energy modelling and quantitative finance.*`,
  ].join("\n");

  return body;
}

// ── DEV Community ─────────────────────────────────────────────────────────────

async function publishToDev(story: NewsStory, desk: NewsDesk, markdown: string, dryRun: boolean) {
  const apiKey = process.env.DEV_API_KEY;
  if (!apiKey) { console.warn("⚠ DEV_API_KEY not set — skipping DEV Community"); return; }

  const canonicalUrl = `https://yujiazhang.co.uk/news?desk=${desk.id}&story=${story.slug}`;
  const tags = [desk.id === "ai" ? "ai" : desk.id, "finance", "analytics", "markets"].slice(0, 4);

  const payload = {
    article: {
      title: story.headline,
      body_markdown: markdown,
      published: true,
      tags,
      canonical_url: canonicalUrl,
    },
  };

  if (dryRun) {
    console.log("[DEV dry-run] POST https://dev.to/api/articles");
    console.log(JSON.stringify(payload, null, 2));
    return;
  }

  const res = await fetch("https://dev.to/api/articles", {
    method: "POST",
    headers: { "Content-Type": "application/json", "api-key": apiKey },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`DEV API error ${res.status}: ${err}`);
  }
  const data = (await res.json()) as { url: string };
  console.log(`✓ DEV Community: ${data.url}`);
}

// ── Medium ────────────────────────────────────────────────────────────────────

async function publishToMedium(story: NewsStory, desk: NewsDesk, markdown: string, dryRun: boolean) {
  const token = process.env.MEDIUM_TOKEN;
  if (!token) { console.warn("⚠ MEDIUM_TOKEN not set — skipping Medium"); return; }

  // Step 1: get user ID
  const meRes = await fetch("https://api.medium.com/v1/me", {
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
  });
  if (!meRes.ok) throw new Error(`Medium /me error ${meRes.status}`);
  const me = (await meRes.json()) as { data: { id: string } };
  const userId = me.data.id;

  const canonicalUrl = `https://yujiazhang.co.uk/news?desk=${desk.id}&story=${story.slug}`;
  const payload = {
    title: story.headline,
    contentFormat: "markdown",
    content: markdown,
    tags: [desk.id, "finance", "ai", "markets"].slice(0, 5),
    canonicalUrl,
    publishStatus: "public",
  };

  if (dryRun) {
    console.log(`[Medium dry-run] POST https://api.medium.com/v1/users/${userId}/posts`);
    console.log(JSON.stringify(payload, null, 2));
    return;
  }

  const res = await fetch(`https://api.medium.com/v1/users/${userId}/posts`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Medium API error ${res.status}: ${err}`);
  }
  const data = (await res.json()) as { data: { url: string } };
  console.log(`✓ Medium: ${data.data.url}`);
}

// ── Hashnode ──────────────────────────────────────────────────────────────────

async function publishToHashnode(story: NewsStory, desk: NewsDesk, markdown: string, dryRun: boolean) {
  const token = process.env.HASHNODE_TOKEN;
  const pubId = process.env.HASHNODE_PUB_ID;
  if (!token || !pubId) { console.warn("⚠ HASHNODE_TOKEN or HASHNODE_PUB_ID not set — skipping Hashnode"); return; }

  const canonicalUrl = `https://yujiazhang.co.uk/news?desk=${desk.id}&story=${story.slug}`;

  const mutation = `
    mutation PublishPost($input: PublishPostInput!) {
      publishPost(input: $input) {
        post { url }
      }
    }
  `;

  const variables = {
    input: {
      title: story.headline,
      contentMarkdown: markdown,
      publicationId: pubId,
      tags: [],
      originalArticleURL: canonicalUrl,
      coverImageOptions: { coverImageURL: story.image },
    },
  };

  if (dryRun) {
    console.log("[Hashnode dry-run] POST https://gql.hashnode.com");
    console.log(JSON.stringify(variables, null, 2));
    return;
  }

  const res = await fetch("https://gql.hashnode.com", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: token },
    body: JSON.stringify({ query: mutation, variables }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Hashnode API error ${res.status}: ${err}`);
  }
  const json = (await res.json()) as { data?: { publishPost?: { post?: { url: string } } }; errors?: unknown[] };
  if (json.errors) throw new Error(`Hashnode GraphQL errors: ${JSON.stringify(json.errors)}`);
  console.log(`✓ Hashnode: ${json.data?.publishPost?.post?.url}`);
}

// ── Main ──────────────────────────────────────────────────────────────────────

async function main() {
  loadEnv();
  const { desk: deskId, story: slug, platforms, dryRun } = parseArgs();

  const desk = desks.find((d) => d.id === deskId);
  if (!desk) {
    console.error(`Desk "${deskId}" not found. Available: ${desks.map((d) => d.id).join(", ")}`);
    process.exit(1);
  }

  const story = desk.stories.find((s) => s.slug === slug);
  if (!story) {
    console.error(`Story "${slug}" not found in desk "${deskId}".`);
    console.error(`Available slugs: ${desk.stories.map((s) => s.slug).join(", ")}`);
    process.exit(1);
  }

  console.log(`\nPublishing: "${story.headline}"`);
  console.log(`Desk: ${desk.label} | Platforms: ${platforms.join(", ")}${dryRun ? " | DRY RUN" : ""}\n`);

  const markdown = toMarkdown(story, desk);

  const tasks: Promise<void>[] = [];
  if (platforms.includes("dev")) tasks.push(publishToDev(story, desk, markdown, dryRun));
  if (platforms.includes("medium")) tasks.push(publishToMedium(story, desk, markdown, dryRun));
  if (platforms.includes("hashnode")) tasks.push(publishToHashnode(story, desk, markdown, dryRun));

  const results = await Promise.allSettled(tasks);
  for (const r of results) {
    if (r.status === "rejected") console.error(`✗ Error: ${r.reason}`);
  }

  console.log("\nDone.");
}

main();
