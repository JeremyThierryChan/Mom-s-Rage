/**
 * Blog data layer.
 *
 * ── Adding a new post ────────────────────────────────────────────────────────
 *  1. Create src/data/blog/posts/<slug>.ts  (copy an existing one)
 *  2. Import it and add to the `posts` array below (newest first)
 *
 * Supported block types:
 *  { type: "p",      text }                        — paragraph
 *  { type: "h2",     text }                        — subheading
 *  { type: "quote",  text, attr? }                 — pull-quote with optional attribution
 *  { type: "p-link", before, linkText, after, href } — paragraph with an inline download/link
 *                                                      (href resolves from /public via asset())
 */

import type { StaticImageData } from "next/image";

import { post as welcome }     from "./posts/001-welcome";
import { post as website }     from "./posts/002-website";
import { post as whitepaper }  from "./posts/003-whitepaper";
import { post as creatorInfoTemplate } from "./posts/004-creator-info-template";
import { post as sevenSinsTshirts } from "./posts/005-seven-sins-tshirts";

export type Bilingual = { zh: string; en: string };

export type ContentBlock =
  | { type: "p";      text: Bilingual }
  | { type: "h2";     text: Bilingual }
  | { type: "quote";  text: Bilingual; attr?: Bilingual }
  | { type: "p-link"; before: Bilingual; linkText: Bilingual; after: Bilingual; href: string };

export type Post = {
  slug: string;
  date: string;            // "YYYY-MM-DD"
  category: Bilingual;
  /** Optional status badge shown next to the category, e.g. "In Progress". */
  status?: Bilingual;
  title: Bilingual;
  excerpt: Bilingual;
  body: ContentBlock[];
  cover?: StaticImageData;
  author?: string;
  /** Creator id — when set, the author name links to /creators/<authorId>. */
  authorId?: string;
  /** Optional download CTA shown next to the title (href resolves from /public via asset()). */
  download?: { label: Bilingual; href: string };
};

// ── Post registry (newest first) ─────────────────────────────────────────────
export const posts: Post[] = [
  sevenSinsTshirts,
  creatorInfoTemplate,
  welcome,
  website,
  whitepaper,
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function allSlugs(): string[] {
  return posts.map((p) => p.slug);
}
