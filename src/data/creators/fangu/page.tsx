"use client";

/**
 * Blackout Poster / 夜店海报 template.
 * Full-bleed ink black. Works stacked as large gig-poster releases.
 * Electric neon accents cut through the dark like stage lights.
 */

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { creator, works } from ".";
import { WorkArt } from "@/components/WorkArt";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

export default function BlackoutPage({ id: _id }: { id: string }) {
  const { t, lang } = useLang();
  const c = t.creators;
  const forSale = works.filter((w) => w.forSale);

  return (
    <>
      <Nav subpage />
      <main className="bg-ink text-paper">

        {/* ── Hero: full-height stage ─────────────────────────── */}
        <section className="relative flex min-h-screen flex-col overflow-hidden pt-24">
          {/* Scan-line overlay */}
          <div
            className="pointer-events-none absolute inset-0 z-10 opacity-[0.04]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, var(--color-paper) 0px, var(--color-paper) 1px, transparent 1px, transparent 4px)",
            }}
          />

          {/* Giant diagonal glyph behind */}
          <span
            className="pointer-events-none absolute -right-12 bottom-0 select-none font-brush leading-none text-paper/[0.03]"
            style={{ fontSize: "clamp(200px, 60vw, 700px)" }}
          >
            {creator.glyph}
          </span>

          <div className="relative z-20 flex flex-1 flex-col justify-between px-4 pb-16 sm:px-10">
            {/* Top nav strip */}
            <div className="flex items-center justify-between border-b border-paper/10 pb-4 font-mono text-[0.65rem] uppercase tracking-widest text-paper/30">
              <span>Mom&apos;s Rage × Creator</span>
              <Link
                href="/#creators"
                className="transition-colors hover:text-paper"
              >
                {c.backHome} ←
              </Link>
            </div>

            {/* Name stack */}
            <div className="mt-auto">
              <p
                className="font-mono text-xs uppercase tracking-[0.4em]"
                style={{ color: creator.accent }}
              >
                {creator.handle}
              </p>
              <h1
                className="display-tight leading-none text-paper"
                style={{ fontSize: "clamp(4rem, 18vw, 15rem)" }}
              >
                {creator.name[lang]}
              </h1>
              <div className="mt-4 grid grid-cols-[1fr_auto] items-end gap-4">
                <p className="max-w-md text-sm leading-relaxed text-paper/50 sm:text-base">
                  {creator.bio[lang]}
                </p>
                <div
                  className="hidden text-right font-mono text-xs text-paper/25 sm:block"
                >
                  <p className="uppercase tracking-wider">{creator.role[lang]}</p>
                  <p>{works.length} {c.worksCount}</p>
                </div>
              </div>
            </div>

            {/* Bottom stats bar */}
            <div
              className="mt-12 flex items-center gap-6 border-t pt-5 font-mono text-xs text-paper/30"
              style={{ borderColor: creator.accent + "40" }}
            >
              <span
                className="font-bold uppercase tracking-widest"
                style={{ color: creator.accent }}
              >
                {creator.role[lang]}
              </span>
              <span className="h-3 w-px bg-paper/20" />
              <span>{works.length} {c.worksCount}</span>
              <span className="h-3 w-px bg-paper/20" />
              <span>{forSale.length} {c.shopTitle}</span>
            </div>
          </div>
        </section>

        {/* ── Works: gig-poster stacked releases ─────────────── */}
        <section className="border-t border-paper/10 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Reveal>
              <p className="kicker mb-12 text-paper/30">{c.worksTitle}</p>
            </Reveal>

            <div className="space-y-2">
              {works.map((work, i) => (
                <Reveal key={work.id} delay={i * 0.07}>
                  <div className="group grid grid-cols-[auto_1fr_auto] items-center gap-6 border border-paper/10 p-6 transition-all duration-200 hover:border-[var(--accent)] hover:bg-paper/[0.04] sm:gap-10 sm:p-8"
                    style={{ "--accent": creator.accent } as React.CSSProperties}
                  >
                    {/* Number */}
                    <span
                      className="w-10 text-right font-mono text-3xl font-bold sm:text-5xl"
                      style={{ color: creator.accent + "30" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* Info */}
                    <div>
                      <p
                        className="kicker"
                        style={{ color: creator.accent }}
                      >
                        {t.works.categories[work.category]}
                      </p>
                      <h3 className="font-display mt-1 text-2xl uppercase text-paper sm:text-3xl">
                        {work.name[lang]}
                      </h3>
                      <p className="mt-1 text-sm text-paper/40">{work.tagline[lang]}</p>
                      <div className="mt-4">
                        {work.forSale ? (
                          <div className="flex items-center gap-4">
                            <span
                              className="font-display text-2xl"
                              style={{ color: creator.accent }}
                            >
                              ¥{work.price}
                            </span>
                            <Link
                              href="/#contact"
                              className="border px-4 py-1.5 font-mono text-[0.65rem] uppercase tracking-wider text-paper/60 transition-colors hover:text-paper"
                              style={{ borderColor: creator.accent + "60" }}
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

                    {/* Thumbnail */}
                    <div className="w-20 overflow-hidden border border-paper/10 group-hover:border-paper/20 sm:w-28">
                      <WorkArt work={work} />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Shop: neon drop ────────────────────────────────── */}
        {forSale.length > 0 && (
          <section className="border-t border-paper/10 py-20 sm:py-28">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
              <Reveal>
                <h2
                  className="display-tight text-5xl sm:text-7xl"
                  style={{ color: creator.accent }}
                >
                  {c.shopTitle}
                </h2>
              </Reveal>
              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {forSale.map((work, i) => (
                  <Reveal key={work.id} delay={i * 0.08}>
                    <div
                      className="border bg-paper/5 transition-colors hover:bg-paper/10"
                      style={{ borderColor: creator.accent + "40" }}
                    >
                      <WorkArt work={work} />
                      <div className="p-5">
                        <h3 className="font-display text-xl uppercase text-paper">
                          {work.name[lang]}
                        </h3>
                        <p className="mt-1 text-xs text-paper/40">{work.tagline[lang]}</p>
                        <div className="mt-4 flex items-center justify-between">
                          <span
                            className="font-display text-2xl"
                            style={{ color: creator.accent }}
                          >
                            ¥{work.price}
                          </span>
                          <Link
                            href="/#contact"
                            className="px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider text-ink transition-colors"
                            style={{ background: creator.accent }}
                          >
                            {c.buy}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Exit ────────────────────────────────────────────── */}
        <div className="border-t border-paper/10 py-12 text-center">
          <Link
            href="/#creators"
            className="font-mono text-xs uppercase tracking-[0.3em] text-paper/30 transition-colors hover:text-paper"
          >
            ← {c.allCreators}
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
