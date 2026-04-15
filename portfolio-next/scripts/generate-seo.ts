import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { desks } from "../src/data/newsDesk.ts";
import { getTopicsWithCounts } from "../src/data/newsTopics.ts";

const SITE_URL = (
  process.env.SITE_URL ?? process.env.VITE_SITE_URL ?? "https://yujiazhang.co.uk"
).replace(/\/+$/, "");

function absoluteUrl(path: string) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalizedPath}`;
}

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

const publicDir = resolve(process.cwd(), "public");
mkdirSync(publicDir, { recursive: true });

const routes = new Set<string>(["/", "/research", "/news", "/news/archive"]);
for (const desk of desks) {
  routes.add(`/news/${desk.id}`);
  for (const story of desk.stories) {
    routes.add(`/news/${desk.id}/${story.slug}`);
  }
}

for (const topic of getTopicsWithCounts()) {
  routes.add(`/news/tag/${topic.slug}`);
}

const urls = Array.from(routes).sort((a, b) => a.localeCompare(b));
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (route) => `  <url>
    <loc>${escapeXml(absoluteUrl(route))}</loc>
  </url>`
  )
  .join("\n")}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${absoluteUrl("/sitemap.xml")}
`;

writeFileSync(resolve(publicDir, "sitemap.xml"), sitemap, "utf8");
writeFileSync(resolve(publicDir, "robots.txt"), robots, "utf8");

console.log(`SEO files generated for ${urls.length} URLs.`);
