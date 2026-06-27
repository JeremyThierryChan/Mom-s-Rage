"use client";

/**
 * Monolith · Portrait / 黑色纪念碑 · 真人版
 * Like the zhenzhen Monolith but with a real portrait photo as the
 * centerpiece — large, slightly tilted, framed in the accent color.
 * Works in the same sparse dark grid below.
 */

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { creator, works } from ".";
import { WorkArt } from "@/components/WorkArt";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

export default function MonolithPortraitPage({ id: _id }: { id: string }) {
  const { t, lang } = useLang();
  const c = t.creators;
  const forSale = works.filter((w) => w.forSale);

  return (
    <>
      <Nav subpage />
      <main className="bg-ink text-paper">

        {/* ── Hero ────────────────────────────────────────────── */}
        <section className="relative min-h-screen overflow-hidden px-4 pt-28 pb-20 sm:px-6">
          {/* Halftone bg tint */}
          <div
            className="halftone pointer-events-none absolute inset-0 opacity-[0.05]"
            style={{ color: creator.accent }}
          />

          {/* Large ghost name behind everything */}
          <span
            className="display-tight pointer-events-none absolute -bottom-10 left-0 right-0 text-center leading-none text-paper opacity-[0.03]"
            style={{ fontSize: "clamp(8rem, 30vw, 28rem)" }}
            aria-hidden
          >
            {creator.name[lang]}
          </span>

          <div className="relative mx-auto max-w-6xl">
            {/* Back link */}
            <Link
              href="/partners"
              className="kicker mb-12 inline-block text-paper/30 transition-colors hover:text-paper"
            >
              ← {c.backHome}
            </Link>

            <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">

              {/* ── Left: portrait ──────────────────────────────── */}
              <Reveal>
                <div className="relative mx-auto max-w-sm lg:max-w-none">
                  {/* Accent border frame (offset) */}
                  <div
                    className="absolute -bottom-4 -right-4 h-full w-full"
                    style={{ border: `3px solid ${creator.accent}`, opacity: 0.4 }}
                  />
                  {/* Secondary frame */}
                  <div
                    className="absolute -top-4 -left-4 h-full w-full"
                    style={{ border: `1px solid ${creator.accent}`, opacity: 0.15 }}
                  />

                  {/* Photo */}
                  <div className="relative aspect-square overflow-hidden border-2 border-paper/10">
                    {creator.avatar ? (
                      <Image
                        src={creator.avatar}
                        alt={creator.name[lang]}
                        fill
                        sizes="(max-width: 1024px) 80vw, 45vw"
                        className="object-cover object-top"
                        priority
                      />
                    ) : (
                      /* Fallback glyph when photo not yet placed */
                      <div
                        className="flex h-full w-full items-center justify-center"
                        style={{ background: creator.accent + "20" }}
                      >
                        <span
                          className="font-brush text-[12rem] leading-none"
                          style={{ color: creator.accent }}
                        >
                          {creator.glyph}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Caption strip */}
                  <div
                    className="flex items-center justify-between border-t px-1 pt-2 font-mono text-[0.65rem] uppercase tracking-widest"
                    style={{ borderColor: creator.accent + "40", color: creator.accent }}
                  >
                    <span>{creator.handle}</span>
                    <span>{creator.role[lang]}</span>
                  </div>
                </div>
              </Reveal>

              {/* ── Right: text ─────────────────────────────────── */}
              <Reveal delay={0.1}>
                <div>
                  {/* Name */}
                  <h1
                    className="display-tight leading-none text-paper"
                    style={{ fontSize: "clamp(4rem, 12vw, 9rem)" }}
                  >
                    {creator.name[lang]}
                  </h1>

                  {/* Handle */}
                  <p
                    className="mt-4 font-mono text-xs tracking-[0.35em] uppercase"
                    style={{ color: creator.accent }}
                  >
                    {creator.handle}
                  </p>

                  {/* Accent rule */}
                  <div
                    className="my-8 h-px w-16"
                    style={{ background: creator.accent }}
                  />

                  {/* Role */}
                  <p className="font-mono text-sm text-paper/40 uppercase tracking-wider">
                    {creator.role[lang]}
                  </p>

                  {/* Bio */}
                  <p className="mt-5 text-base leading-relaxed text-paper/65 sm:text-lg">
                    {creator.bio[lang]}
                  </p>

                  {/* Stats */}
                  <div className="mt-10 flex items-center gap-8 font-mono text-xs text-paper/30">
                    <div>
                      <p className="text-2xl font-bold text-paper">{works.length}</p>
                      <p className="mt-0.5 uppercase tracking-wider">{c.worksCount}</p>
                    </div>
                    <div
                      className="h-10 w-px"
                      style={{ background: creator.accent + "30" }}
                    />
                    <div>
                      <p
                        className="text-2xl font-bold"
                        style={{ color: creator.accent }}
                      >
                        {forSale.length}
                      </p>
                      <p className="mt-0.5 uppercase tracking-wider">{c.shopTitle}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <div
              className="h-10 w-px"
              style={{ background: `linear-gradient(to bottom, transparent, ${creator.accent})` }}
            />
          </div>
        </section>

        {/* ── Works grid ──────────────────────────────────────── */}
        <section className="border-t border-paper/10 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Reveal>
              <p className="kicker mb-12 text-paper/30">{c.worksTitle}</p>
            </Reveal>

            <div className="grid gap-px bg-paper/10 sm:grid-cols-2 lg:grid-cols-3">
              {works.map((work, i) => (
                <Reveal key={work.id} delay={i * 0.07}>
                  <div className="group bg-ink p-1 transition-colors hover:bg-paper/5">
                    <WorkArt work={work} />
                    <div className="p-5">
                      <p className="kicker" style={{ color: creator.accent }}>
                        {t.works.categories[work.category]}
                      </p>
                      <h3 className="font-display mt-2 text-xl uppercase text-paper">
                        {work.name[lang]}
                      </h3>
                      <p className="mt-1 text-xs text-paper/45">{work.tagline[lang]}</p>
                      <div className="mt-4">
                        {work.forSale ? (
                          <div className="flex items-center justify-between">
                            <span className="font-display text-xl text-paper">
                              ¥{work.price}
                            </span>
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

        {/* ── Closing ─────────────────────────────────────────── */}
        <section className="border-t border-paper/10 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex flex-col items-center gap-3 text-center">
              <span
                className="font-brush text-6xl"
                style={{ color: creator.accent }}
              >
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
