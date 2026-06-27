"use client";

/**
 * Candy Store / 糖果屋 template.
 * Full magenta background, puffy white rounded cards,
 * sticker-tag price labels, bubble-bold glyph hero.
 */

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { creator, works } from ".";
import { WorkArt } from "@/components/WorkArt";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

export default function CandyPage({ id: _id }: { id: string }) {
  const { t, lang } = useLang();
  const c = t.creators;
  const forSale = works.filter((w) => w.forSale);

  return (
    <>
      <Nav subpage />
      <main className="bg-magenta text-ink">

        {/* ── Hero ───────────────────────────────────────────── */}
        <section className="relative overflow-hidden px-4 pt-28 pb-16 text-center sm:pt-36 sm:pb-20">
          {/* Polka-dot bg */}
          <div
            className="pointer-events-none absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(circle, var(--color-ink) 2px, transparent 2px)",
              backgroundSize: "32px 32px",
            }}
          />

          {/* Big glyph bubble */}
          <Reveal>
            <div className="relative mx-auto mb-6 flex h-40 w-40 items-center justify-center rounded-full bg-ink shadow-[8px_8px_0_rgba(0,0,0,0.3)] sm:h-52 sm:w-52">
              <span className="font-brush text-7xl text-magenta sm:text-9xl">
                {creator.glyph}
              </span>
            </div>

            <h1
              className="display-tight text-ink"
              style={{ fontSize: "clamp(3.5rem, 14vw, 11rem)" }}
            >
              {creator.name[lang]}
            </h1>

            <p className="mx-auto mt-3 max-w-md text-base font-medium text-ink/70 sm:text-lg">
              {creator.bio[lang]}
            </p>

            <div className="mt-6 flex items-center justify-center gap-4 font-mono text-xs text-ink/50">
              <span>{creator.handle}</span>
              <span>·</span>
              <span>{creator.role[lang]}</span>
              <span>·</span>
              <span>{works.length} {c.worksCount}</span>
            </div>

            <Link
              href="/partners"
              className="mt-8 inline-block border-2 border-ink bg-ink px-6 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-magenta transition-colors hover:bg-transparent hover:text-ink"
            >
              ← {c.backHome}
            </Link>
          </Reveal>
        </section>

        {/* ── Works: puffy cards ─────────────────────────────── */}
        <section className="bg-paper py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Reveal>
              <p className="kicker mb-10 text-ink/40">{c.worksTitle}</p>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {works.map((work, i) => (
                <Reveal key={work.id} delay={i * 0.07}>
                  <div className="rounded-3xl border-4 border-ink bg-paper shadow-[6px_6px_0_var(--color-ink)] transition-transform hover:-translate-y-1">
                    <div className="overflow-hidden rounded-t-[calc(1.5rem-4px)]">
                      <WorkArt work={work} />
                    </div>

                    <div className="p-5">
                      {/* Category pill */}
                      <span className="inline-block rounded-full bg-magenta px-3 py-1 font-mono text-[0.6rem] font-bold uppercase tracking-wider text-ink">
                        {t.works.categories[work.category]}
                      </span>

                      <h3 className="font-display mt-3 text-xl uppercase">
                        {work.name[lang]}
                      </h3>
                      <p className="mt-1 text-xs text-ink/55">{work.tagline[lang]}</p>

                      {/* Price tag */}
                      <div className="mt-4 flex items-center justify-between">
                        {work.forSale ? (
                          <>
                            <div className="relative inline-flex items-center">
                              <div className="absolute -left-1 h-full w-2 rounded-l-full bg-magenta border-2 border-ink" />
                              <span className="ml-3 rounded-r-full border-2 border-ink bg-magenta px-4 py-1 font-display text-xl">
                                ¥{work.price}
                              </span>
                            </div>
                            <Link
                              href="/partners"
                              className="rounded-full border-2 border-ink bg-ink px-4 py-2 font-mono text-[0.65rem] font-bold uppercase tracking-wider text-magenta transition-colors hover:bg-transparent hover:text-ink"
                            >
                              {c.buy}
                            </Link>
                          </>
                        ) : (
                          <span className="rounded-full border-2 border-ink/30 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-wide text-ink/40">
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

        {/* ── Footer strip ────────────────────────────────────── */}
        <div className="bg-magenta border-t-4 border-ink py-10 text-center">
          <span className="font-brush text-5xl text-ink">{creator.glyph}</span>
          <p className="mt-2 font-mono text-xs text-ink/50">{creator.handle}</p>
          <Link
            href="/partners"
            className="mt-5 inline-block rounded-full border-2 border-ink px-6 py-2 font-mono text-xs uppercase tracking-wider text-ink transition-colors hover:bg-ink hover:text-magenta"
          >
            {c.allCreators}
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
