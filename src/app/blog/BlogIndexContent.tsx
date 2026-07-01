"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { posts } from "@/data/blog";

function formatDate(iso: string, lang: "zh" | "en"): string {
  const d = new Date(iso);
  if (lang === "zh") {
    return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
  }
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export function BlogIndexContent() {
  const { t, lang } = useLang();
  const b = t.blog;
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = useMemo(() => {
    const seen = new Map<string, string>();
    for (const post of posts) seen.set(post.category.zh, post.category[lang]);
    return Array.from(seen, ([key, label]) => ({ key, label }));
  }, [lang]);

  const filteredPosts = activeCategory
    ? posts.filter((post) => post.category.zh === activeCategory)
    : posts;

  return (
    <>
      <Nav subpage />
      <main className="bg-paper text-ink">

        {/* ── Header ─────────────────────────────────────────────── */}
        <section className="border-b-2 border-ink px-6 pb-14 pt-32 sm:px-10 md:px-16">
          <p className="kicker mb-4">{b.kicker}</p>
          <h1 className="font-display text-5xl uppercase leading-none sm:text-7xl md:text-8xl">
            {b.title}
          </h1>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-ink/55 sm:text-base">
            {b.lead}
          </p>

          {/* Category filter buttons */}
          <div className="mt-8 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActiveCategory(null)}
              className={`border px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors ${
                activeCategory === null
                  ? "border-ink bg-ink text-paper"
                  : "border-ink/20 text-ink/50 hover:border-ink/40 hover:text-ink"
              }`}
            >
              {b.filterAll}
            </button>
            {categories.map((cat) => (
              <button
                key={cat.key}
                type="button"
                onClick={() => setActiveCategory(cat.key)}
                className={`border px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors ${
                  activeCategory === cat.key
                    ? "border-ink bg-ink text-paper"
                    : "border-ink/20 text-ink/50 hover:border-ink/40 hover:text-ink"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </section>

        {/* ── Post list ──────────────────────────────────────────── */}
        <section className="divide-y-2 divide-ink/10">
          {filteredPosts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.04}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col gap-3 px-6 py-8 transition-colors hover:bg-ink/[0.03] sm:flex-row sm:items-start sm:gap-10 sm:px-10 md:px-16"
              >
                {/* Date + category column */}
                <div className="shrink-0 sm:w-44">
                  <p className="font-mono text-xs text-ink/35">
                    {formatDate(post.date, lang)}
                  </p>
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    <span className="inline-block border border-ink/20 px-2 py-0.5 font-mono text-[0.6rem] uppercase tracking-wider text-ink/40">
                      {post.category[lang]}
                    </span>
                    {post.status && (
                      <span className="inline-block border border-acid bg-acid/20 px-2 py-0.5 font-mono text-[0.6rem] font-bold uppercase tracking-wider text-ink">
                        {post.status[lang]}
                      </span>
                    )}
                  </div>
                  {post.author && (
                    <p className="mt-1.5 font-mono text-[0.65rem] text-ink/30">{post.author}</p>
                  )}
                </div>

                {/* Title + excerpt */}
                <div className="flex-1">
                  <h2 className="font-display text-2xl leading-tight transition-colors group-hover:text-magenta sm:text-3xl" style={{ textTransform: "none" }}>
                    {post.title[lang]}
                  </h2>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink/50 sm:text-base">
                    {post.excerpt[lang]}
                  </p>
                  <p className="mt-3 font-mono text-xs uppercase tracking-wider text-ink/30 transition-colors group-hover:text-magenta">
                    {b.readMore} →
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}

          {filteredPosts.length === 0 && (
            <p className="px-6 py-16 text-center font-mono text-sm text-ink/30 sm:px-10">
              {b.empty}
            </p>
          )}
        </section>

      </main>
      <Footer />
    </>
  );
}
