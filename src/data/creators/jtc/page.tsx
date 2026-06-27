"use client";

/**
 * Editorial · Portrait / 杂志双栏 · 真人版
 * Based on akuang's Editorial template — left panel replaced with real photo.
 */

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { creator, works } from ".";
import { WorkArt } from "@/components/WorkArt";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

export default function EditorialPortraitPage({ id: _id }: { id: string }) {
  const { t, lang } = useLang();
  const c = t.creators;
  const forSale = works.filter((w) => w.forSale);

  return (
    <>
      <Nav subpage />
      <main>
        {/* ── Split hero ─────────────────────────────────────── */}
        <section className="grid min-h-screen grid-cols-1 md:grid-cols-2">
          {/* Photo half */}
          <div
            className="relative min-h-[70vw] overflow-hidden md:min-h-screen"
            style={{ background: creator.accent }}
          >
            {/* Ghost glyph watermark */}
            <span
              className="pointer-events-none absolute inset-0 flex items-center justify-center select-none font-brush leading-none text-ink/10"
              style={{ fontSize: "clamp(180px, 38vw, 520px)" }}
              aria-hidden
            >
              {creator.glyph}
            </span>

            {creator.avatar ? (
              <Image
                src={creator.avatar}
                alt={creator.name[lang]}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top"
                priority
              />
            ) : (
              <span
                className="relative flex h-full items-center justify-center font-brush leading-none text-ink"
                style={{ fontSize: "clamp(90px, 20vw, 280px)" }}
              >
                {creator.glyph}
              </span>
            )}

            {/* Accent tint overlay at bottom */}
            <div
              className="pointer-events-none absolute bottom-0 left-0 right-0 h-1/3"
              style={{ background: `linear-gradient(to top, ${creator.accent}cc, transparent)` }}
            />
          </div>

          {/* Info half */}
          <div className="flex flex-col justify-center bg-paper px-8 py-16 md:px-16 md:pt-24">
            <Link
              href="/partners"
              className="kicker mb-10 inline-block text-ink/40 transition-colors hover:text-ink"
            >
              ← {c.backHome}
            </Link>

            <h1 className="font-display text-6xl uppercase leading-none md:text-[5.5rem]">
              {creator.name[lang]}
            </h1>
            <p className="mt-3 font-mono text-xs tracking-[0.3em] text-ink/50">
              {creator.handle}
            </p>

            <div className="mt-8 border-l-4 pl-5" style={{ borderColor: creator.accent }}>
              <p className="kicker mb-2 text-ink/40">{creator.role[lang]}</p>
              <p className="text-base leading-relaxed text-ink/70 sm:text-lg">
                {creator.bio[lang]}
              </p>
            </div>

            <div className="mt-10 flex gap-5 font-mono text-xs text-ink/35">
              <span>{works.length} {c.worksCount}</span>
              <span>·</span>
              <span>{forSale.length} {c.shopTitle}</span>
            </div>
          </div>
        </section>

        {/* ── Works: editorial numbered rows ─────────────────── */}
        <section className="bg-paper py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Reveal>
              <p className="kicker mb-10 text-ink/40">{c.worksTitle}</p>
            </Reveal>
            <div className="divide-y-2 divide-ink border-y-2 border-ink">
              {works.map((work, i) => (
                <Reveal key={work.id} delay={i * 0.06}>
                  <div className="group grid grid-cols-[3rem_1fr_5rem] items-center gap-6 py-6 transition-colors hover:bg-ink hover:px-4 hover:text-paper sm:grid-cols-[5rem_1fr_7rem] sm:gap-8">
                    <span className="font-display text-4xl text-ink/15 group-hover:text-paper/15 sm:text-6xl">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="kicker text-magenta group-hover:text-acid">
                        {t.works.categories[work.category]}
                      </p>
                      <h3 className="font-display mt-1 text-xl uppercase leading-tight sm:text-2xl">
                        {work.name[lang]}
                      </h3>
                      <p className="mt-1 text-xs text-ink/55 group-hover:text-paper/55 sm:text-sm">
                        {work.tagline[lang]}
                      </p>
                    </div>
                    <div className="overflow-hidden border-2 border-ink group-hover:border-paper/30">
                      <WorkArt work={work} />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Shop ───────────────────────────────────────────── */}
        {forSale.length > 0 && (
          <section className="py-20 sm:py-28" style={{ background: creator.accent }}>
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
              <Reveal>
                <h2 className="display-tight text-5xl text-ink sm:text-7xl">{c.shopTitle}</h2>
              </Reveal>
              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {forSale.map((work, i) => (
                  <Reveal key={work.id} delay={i * 0.08}>
                    <div className="border-2 border-ink bg-paper shadow-hard">
                      <WorkArt work={work} />
                      <div className="p-5">
                        <h3 className="font-display text-xl uppercase">{work.name[lang]}</h3>
                        <p className="mt-1 text-sm text-ink/60">{work.tagline[lang]}</p>
                        <div className="mt-4 flex items-center justify-between">
                          <span className="font-display text-2xl">
                            {work.priceOnInquiry ? (
                              <span className="font-mono text-sm text-ink/50">价格详询</span>
                            ) : (
                              `¥${work.price}`
                            )}
                          </span>
                          <Link
                            href="/partners"
                            className="bg-ink px-4 py-2 font-mono text-xs font-bold uppercase text-acid transition-transform hover:-translate-y-0.5"
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
      </main>
      <Footer />
    </>
  );
}
