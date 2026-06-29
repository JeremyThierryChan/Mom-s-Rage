"use client";

/**
 * Zine / 地下拼贴 template.
 * Acid yellow base, newspaper-masthead header, works shown as
 * rotated collage cards. Chaotic, handmade, underground feel.
 */

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { creator, works } from ".";
import { WorkArt } from "@/components/WorkArt";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

const ROTATIONS = [-3, 2, -1.5, 3, -2, 1, -3.5, 2.5];

export default function ZinePage({ id: _id }: { id: string }) {
  const { t, lang } = useLang();
  const c = t.creators;
  const forSale = works.filter((w) => w.forSale);

  return (
    <>
      <Nav subpage />
      <main className="bg-acid">

        {/* ── Masthead ────────────────────────────────────────── */}
        <section className="relative overflow-hidden border-b-4 border-ink pt-24 pb-0">
          {/* Repeating background glyph strip */}
          <div className="pointer-events-none absolute inset-0 flex items-center overflow-hidden opacity-5">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className="shrink-0 font-brush text-[20rem] leading-none text-ink">
                {creator.glyph}
              </span>
            ))}
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
            {/* Newspaper-style top bar */}
            <div className="flex items-center justify-between border-b-2 border-ink pb-3 font-mono text-[0.65rem] uppercase tracking-widest text-ink/50">
              <span>MOM&apos;S RAGE × 创作者档案</span>
              <span>{creator.handle}</span>
              <Link href="/partners" className="hover:text-ink">
                {c.backHome} ←
              </Link>
            </div>

            {/* Big headline name */}
            <h1
              className="display-tight mt-4 leading-none text-ink"
              style={{ fontSize: "clamp(3.5rem, 16vw, 14rem)" }}
            >
              {creator.name[lang]}
            </h1>

            {/* Sub-header row */}
            <div className="mt-3 grid grid-cols-1 gap-3 border-t-2 border-ink pt-3 sm:grid-cols-[1fr_auto]">
              <p className="max-w-2xl text-sm leading-relaxed text-ink/75 sm:text-base">
                {creator.bio[lang]}
              </p>
              <div className="flex flex-col items-end gap-1 font-mono text-xs text-ink/50">
                <span className="uppercase tracking-wider">{creator.role[lang]}</span>
                <span>{works.length} {c.worksCount}</span>
              </div>
            </div>

            {/* Divider rule */}
            <div className="mt-6 h-2 bg-ink" />
          </div>
        </section>

        {/* ── Works: collage grid ─────────────────────────────── */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <p className="kicker mb-10 text-ink/50">{c.worksTitle} ✦</p>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {works.map((work, i) => (
                <Reveal key={work.id} delay={i * 0.07}>
                  <div
                    className="group relative bg-paper shadow-hard transition-transform duration-300 hover:rotate-0 hover:scale-105"
                    style={{ transform: `rotate(${ROTATIONS[i % ROTATIONS.length]}deg)` }}
                  >
                    {/* Tape strip at top */}
                    <div className="absolute -top-3 left-1/2 z-10 h-6 w-20 -translate-x-1/2 bg-acid/70 shadow-sm" />

                    <WorkArt work={work} />

                    <div className="border-t-2 border-ink p-4">
                      <p className="kicker text-magenta">{t.works.categories[work.category]}</p>
                      <h3 className="font-display mt-1 text-xl uppercase">{work.name[lang]}</h3>
                      <p className="mt-1 text-xs text-ink/60">{work.tagline[lang]}</p>
                      <div className="mt-3 flex items-center justify-between">
                        {work.forSale ? (
                          <>
                            <span className="font-display text-xl">¥{work.price}</span>
                            <Link
                              href="/contact"
                              className="border-2 border-ink bg-ink px-3 py-1 font-mono text-[0.65rem] font-bold uppercase tracking-wider text-acid"
                            >
                              {c.buy}
                            </Link>
                          </>
                        ) : (
                          <span className="border-2 border-ink/40 px-2 py-0.5 font-mono text-[0.65rem] uppercase tracking-wide text-ink/50">
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

        {/* ── Closing stamp ───────────────────────────────────── */}
        <section className="border-t-4 border-ink py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
              <div className="flex items-center gap-4">
                <div
                  className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-ink"
                  style={{ background: creator.accent }}
                >
                  <span className="font-brush text-4xl text-ink">{creator.glyph}</span>
                </div>
                <div>
                  <p className="font-display text-2xl uppercase">{creator.name[lang]}</p>
                  <p className="font-mono text-xs text-ink/50">{creator.handle}</p>
                </div>
              </div>
              <Link
                href="/partners"
                className="border-2 border-ink px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider transition-colors hover:bg-ink hover:text-acid"
              >
                {c.allCreators} →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
