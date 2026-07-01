#!/usr/bin/env node
/**
 * Generates public/sitemap.xml, public/robots.txt, public/manifest.json.
 *
 * These are plain static files instead of Next's app/sitemap.ts /
 * app/robots.ts / app/manifest.ts conventions because Next's
 * next-metadata-route-loader builds an error string by interpolating the
 * absolute file path into a single-quoted JS string without escaping —
 * if that path contains an apostrophe (e.g. a folder named "Mom's Rage...")
 * the generated module fails to parse. Plain file generation sidesteps it.
 *
 * Run before `next build` / `next dev` (see package.json scripts). Keep
 * SITE_URL / BASE_PATH in sync with src/lib/config.ts, and the name/
 * description below in sync with src/data/content.ts `meta`.
 */
import { readdirSync, readFileSync, writeFileSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SITE_URL = "https://jeremythierrychan.github.io/Mom-s-Rage";
const BASE_PATH = "/Mom-s-Rage";

const STATIC_ROUTES = ["story", "why", "soul", "works", "process", "partners", "contact", "blog"];

function creatorIds() {
  const dir = path.join(ROOT, "src/data/creators");
  return readdirSync(dir)
    .filter((name) => statSync(path.join(dir, name)).isDirectory())
    .map((name) => {
      const src = readFileSync(path.join(dir, name, "index.ts"), "utf8");
      return src.match(/id:\s*"([^"]+)"/)?.[1];
    })
    .filter(Boolean);
}

function blogSlugs() {
  const dir = path.join(ROOT, "src/data/blog/posts");
  return readdirSync(dir)
    .filter((f) => f.endsWith(".ts"))
    .map((f) => f.replace(/\.ts$/, ""));
}

function writeSitemap() {
  const lastmod = new Date().toISOString();
  const urls = [
    `${SITE_URL}/`,
    ...STATIC_ROUTES.map((r) => `${SITE_URL}/${r}/`),
    ...creatorIds().map((id) => `${SITE_URL}/creators/${id}/`),
    ...blogSlugs().map((slug) => `${SITE_URL}/blog/${slug}/`),
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((url) => `  <url>\n    <loc>${url}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`)
    .join("\n")}\n</urlset>\n`;
  writeFileSync(path.join(ROOT, "public/sitemap.xml"), xml);
}

function writeRobots() {
  writeFileSync(
    path.join(ROOT, "public/robots.txt"),
    `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`
  );
}

function writeManifest() {
  const manifest = {
    name: "妈见打 Mom's Rage — 多元艺术融合品牌",
    short_name: "妈见打 Mom's Rage",
    description:
      "妈见打 Mom's Rage 是一个多元艺术融合品牌。让不敢表达的人敢表达，让敢表达的人有地方表达。灵魂只有一个字：真。",
    start_url: `${BASE_PATH}/`,
    display: "standalone",
    background_color: "#0c0a09",
    theme_color: "#0c0a09",
    icons: [{ src: `${BASE_PATH}/og-image.jpeg`, sizes: "886x886", type: "image/jpeg" }],
  };
  writeFileSync(path.join(ROOT, "public/manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`);
}

writeSitemap();
writeRobots();
writeManifest();
console.log(
  `[generate-seo] sitemap.xml (${creatorIds().length} creators, ${blogSlugs().length} posts), robots.txt, manifest.json`
);
