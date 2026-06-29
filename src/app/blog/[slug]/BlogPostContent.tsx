"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import type { Post } from "@/data/blog";

function formatDate(iso: string, lang: "zh" | "en"): string {
  const d = new Date(iso);
  if (lang === "zh") {
    return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
  }
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export function BlogPostContent({ post }: { post: Post }) {
  const { t, lang } = useLang();
  const b = t.blog;

  return (
    <>
      <Nav subpage />
      <main className="bg-paper text-ink">

        {/* ── Post header ────────────────────────────────────────── */}
        <section className="border-b-2 border-ink px-6 pb-12 pt-32 sm:px-10 md:px-16">
          <Link
            href="/blog"
            className="font-mono text-xs uppercase tracking-widest text-ink/35 transition-colors hover:text-ink"
          >
            ← {b.backToBlog}
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="border border-ink/20 px-2 py-0.5 font-mono text-[0.6rem] uppercase tracking-wider text-ink/40">
              {post.category[lang]}
            </span>
            <span className="font-mono text-xs text-ink/30">
              {formatDate(post.date, lang)}
            </span>
            {post.author && (
              <span className="font-mono text-xs text-ink/30">· {post.author}</span>
            )}
          </div>

          <h1
            className="mt-5 font-display text-4xl leading-tight sm:text-5xl md:text-6xl"
            style={{ textTransform: "none" }}
          >
            {post.title[lang]}
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/50 sm:text-lg">
            {post.excerpt[lang]}
          </p>
        </section>

        {/* ── Post body ──────────────────────────────────────────── */}
        <article className="mx-auto max-w-2xl px-6 py-14 sm:px-10">
          {post.body.map((block, i) => {
            if (block.type === "h2") {
              return (
                <h2
                  key={i}
                  className="mb-4 mt-10 font-display text-2xl first:mt-0 sm:text-3xl"
                  style={{ textTransform: "none" }}
                >
                  {block.text[lang]}
                </h2>
              );
            }
            if (block.type === "quote") {
              return (
                <blockquote key={i} className="my-8 border-l-4 border-magenta pl-5">
                  <p
                    className="font-display text-xl italic leading-snug sm:text-2xl"
                    style={{ textTransform: "none" }}
                  >
                    {block.text[lang]}
                  </p>
                  {block.attr && (
                    <p className="mt-2 font-mono text-xs text-ink/40">— {block.attr[lang]}</p>
                  )}
                </blockquote>
              );
            }
            return (
              <p key={i} className="mb-5 text-base leading-relaxed text-ink/75 sm:text-lg">
                {block.text[lang]}
              </p>
            );
          })}
        </article>

        {/* ── Footer nav ─────────────────────────────────────────── */}
        <div className="border-t-2 border-ink/10 px-6 py-10 sm:px-10">
          <Link
            href="/blog"
            className="font-mono text-xs uppercase tracking-wider text-ink/35 transition-colors hover:text-ink"
          >
            ← {b.backToBlog}
          </Link>
        </div>

      </main>
      <Footer />
    </>
  );
}
