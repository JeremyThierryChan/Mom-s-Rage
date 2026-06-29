/**
 * Blog data layer.
 *
 * ── Adding a new post ────────────────────────────────────────────────────────
 *  1. Create src/data/blog/posts/<slug>.ts  (copy an existing one)
 *  2. Import it and add to the `posts` array below (newest first)
 *
 * Supported block types:
 *  { type: "p",     text }            — paragraph
 *  { type: "h2",    text }            — subheading
 *  { type: "quote", text, attr? }     — pull-quote with optional attribution
 */

import type { StaticImageData } from "next/image";

import { post as welcome } from "./posts/001-welcome";

export type Bilingual = { zh: string; en: string };

export type ContentBlock =
  | { type: "p";     text: Bilingual }
  | { type: "h2";    text: Bilingual }
  | { type: "quote"; text: Bilingual; attr?: Bilingual };

export type Post = {
  slug: string;
  date: string;            // "YYYY-MM-DD"
  category: Bilingual;
  title: Bilingual;
  excerpt: Bilingual;
  body: ContentBlock[];
  cover?: StaticImageData;
  author?: string;
};

// ── Post registry (newest first) ─────────────────────────────────────────────
export const posts: Post[] = [
  welcome,
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function allSlugs(): string[] {
  return posts.map((p) => p.slug);
}
