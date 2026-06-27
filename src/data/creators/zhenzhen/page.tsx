"use client";

/**
 * Monolith / 黑色纪念碑 template.
 * Pure black throughout, centered composition, monumental typography.
 * Works displayed in a sparse dark grid — gallery / museum feel.
 */

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { creator, works } from ".";
import { WorkArt } from "@/components/WorkArt";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

export default function MonolithPage({ id: _id }: { id: string }) {
  const { t, lang } = useLang();
  const c = t.creators;
  const forSale = works.filter((w) => w.forSale);

  return (
    <>
      <Nav subpage />
      <main className="bg-ink text-paper">

        {/* ── Monolith hero ───────────────────────────────────── */}
        <section className="relative flex min-h-screen flex-col items-center justify-center px-4 text-center">
          {/* Subtle halftone */}
          <div
            className="halftone pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{ color: creator.accent }}
          />

          <Reveal>
            <Link
              href="/partners"
              className="kicker mb-16 block text-paper/30 transition-colors hover:text-paper"
            >
              ← {c.backHome}
            </Link>

            {/* Glyph */}
            <div
              className="mx-auto mb-8 flex h-32 w-32 items-center justify-center rounded-full border-2 sm:h-44 sm:w-44"
              style={{ borderColor: creator.accent }}
            >
              <span
                className="font-brush text-6xl sm:text-8xl"
                style={{ color: creator.accent }}
              >
                {creator.glyph}
              </span>
            </div>

            {/* Name */}
            <h1
              className="display-tight text-paper"
              style={{ fontSize: "clamp(3rem, 12vw, 10rem)" }}
            >
              {creator.name[lang]}
            </h1>

            {/* Handle */}
            <p className="mt-4 font-mono text-xs tracking-[0.4em] uppercase" style={{ color: creator.accent }}>
              {creator.handle}
            </p>

            {/* Role */}
            <p className="mt-6 font-mono text-sm text-paper/40">{creator.role[lang]}</p>

            {/* Bio */}
            <p className="mx-auto mt-8 max-w-lg text-base leading-relaxed text-paper/60 sm:text-lg">
              {creator.bio[lang]}
            </p>

            {/* Stats */}
            <div className="mt-10 flex items-center justify-center gap-8 font-mono text-xs text-paper/30">
              <span>{works.length} {c.worksCount}</span>
              <span className="h-px w-8 bg-paper/20" />
              <span>{forSale.length} {c.shopTitle}</span>
            </div>
          </Reveal>

          {/* Scroll hint */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <div className="h-12 w-px" style={{ background: `linear-gradient(to bottom, transparent, ${creator.accent})` }} />
          </div>
        </section>

        {/* ── Works: sparse dark grid ─────────────────────────── */}
        <section className="border-t border-paper/10 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Reveal>
              <p className="kicker mb-12 text-paper/30">{c.worksTitle}</p>
            </Reveal>

            <div className="grid gap-px bg-paper/10 sm:grid-cols-2 lg:grid-cols-3">
              {works.map((work, i) => (
                <Reveal key={work.id} delay={i * 0.06}>
                  <div className="group relative bg-ink p-1 transition-colors hover:bg-paper/5">
                    <WorkArt work={work} />
                    <div className="p-5">
                      <p className="kicker" style={{ color: creator.accent }}>
                        {t.works.categories[work.category]}
                      </p>
                      <h3 className="font-display mt-2 text-xl uppercase text-paper">{work.name[lang]}</h3>
                      <p className="mt-1 text-xs text-paper/45">{work.tagline[lang]}</p>
                      <div className="mt-4">
                        {work.forSale ? (
                          <div className="flex items-center justify-between">
                            <span className="font-display text-xl text-paper">¥{work.price}</span>
                            <Link
                              href="/partners"
                              className="border border-paper/20 px-4 py-2 font-mono text-[0.65rem] uppercase tracking-wider text-paper/60 transition-colors hover:border-paper hover:text-paper"
                            >
                              {c.buy}
                            </Link>
                          </div>
                        ) : (
                          <span className="font-mono text-[0.65rem] uppercase tracking-wider text-paper/25">
                            {t.works.notForSale}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Closing line ────────────────────────────────────── */}
        <section className="border-t border-paper/10 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex flex-col items-center gap-2 text-center">
              <span className="font-brush text-6xl" style={{ color: creator.accent }}>
                {creator.glyph}
              </span>
              <p className="font-mono text-xs text-paper/30">{creator.handle}</p>
              <Link
                href="/partners"
                className="mt-6 border border-paper/20 px-8 py-3 font-mono text-xs uppercase tracking-widest text-paper/50 transition-colors hover:border-paper/50 hover:text-paper"
              >
                {c.allCreators}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
