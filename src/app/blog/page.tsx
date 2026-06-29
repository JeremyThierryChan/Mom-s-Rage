"use client";

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

export default function BlogPage() {
  const { t, lang } = useLang();
  const b = t.blog;

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
        </section>

        {/* ── Post list ──────────────────────────────────────────── */}
        <section className="divide-y-2 divide-ink/10">
          {posts.map((post, i) => (
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
                  <span className="mt-1.5 inline-block border border-ink/20 px-2 py-0.5 font-mono text-[0.6rem] uppercase tracking-wider text-ink/40">
                    {post.category[lang]}
                  </span>
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

          {posts.length === 0 && (
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
