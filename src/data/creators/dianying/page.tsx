"use client";

/**
 * Film Strip / 胶片档案 template.
 * Dark ink background, works displayed in film-frame rows
 * with sprocket-hole dots on the left rail. Orange accents.
 */

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { creator, works } from ".";
import { WorkArt } from "@/components/WorkArt";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

/** Vertical sprocket-hole rail */
function Sprockets({ count = 6 }: { count?: number }) {
  return (
    <div className="flex flex-col items-center gap-3 py-2">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="h-4 w-3 rounded-sm bg-ink"
          style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.1)" }}
        />
      ))}
    </div>
  );
}

export default function FilmPage({ id: _id }: { id: string }) {
  const { t, lang } = useLang();
  const c = t.creators;
  const forSale = works.filter((w) => w.forSale);

  return (
    <>
      <Nav subpage />
      <main className="bg-ink text-paper">

        {/* ── Cinema title card ───────────────────────────────── */}
        <section className="relative min-h-[70vh] overflow-hidden px-4 pt-28 pb-12 sm:px-6">
          {/* Film-rail left edge */}
          <div
            className="pointer-events-none absolute left-0 top-0 h-full w-8 sm:w-10"
            style={{ background: "rgba(255,255,255,0.04)", borderRight: "1px solid rgba(255,255,255,0.05)" }}
          >
            <div className="flex h-full flex-col items-center justify-around py-4">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="h-3 w-2 rounded-sm bg-paper/10" />
              ))}
            </div>
          </div>

          <div className="mx-auto max-w-6xl">
            {/* Meta strip */}
            <div className="mb-8 flex items-center gap-4 font-mono text-[0.6rem] uppercase tracking-widest text-paper/25">
              <Link href="/partners" className="hover:text-paper">{c.backHome} ←</Link>
              <span className="flex-1 border-t border-dashed border-paper/10" />
              <span>FRAME 001</span>
              <span className="flex-1 border-t border-dashed border-paper/10" />
              <span>{creator.handle}</span>
            </div>

            {/* Glyph projector */}
            <div className="relative mb-8 flex justify-center">
              <span
                className="font-brush leading-none"
                style={{
                  fontSize: "clamp(100px, 30vw, 320px)",
                  color: creator.accent,
                  opacity: 0.15,
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                {creator.glyph}
              </span>
              <h1
                className="display-tight relative text-center leading-none text-paper"
                style={{ fontSize: "clamp(3.5rem, 15vw, 12rem)" }}
              >
                {creator.name[lang]}
              </h1>
            </div>

            {/* Info strip */}
            <div className="mt-6 grid gap-4 border-t border-paper/10 pt-6 sm:grid-cols-[1fr_auto]">
              <p className="max-w-lg text-sm leading-relaxed text-paper/55 sm:text-base">
                {creator.bio[lang]}
              </p>
              <div
                className="shrink-0 rounded-sm px-4 py-3 font-mono text-xs"
                style={{ background: creator.accent + "20", borderLeft: `3px solid ${creator.accent}` }}
              >
                <p className="text-paper/40">Role</p>
                <p className="mt-0.5 text-paper">{creator.role[lang]}</p>
                <p className="mt-2 text-paper/40">Works</p>
                <p className="mt-0.5 text-paper">{works.length} / {forSale.length} {c.shopTitle}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Film strip: works ───────────────────────────────── */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Reveal>
              <p className="kicker mb-10 text-paper/30" style={{ color: creator.accent }}>
                {c.worksTitle}
              </p>
            </Reveal>

            {/* Film container */}
            <div className="border border-paper/10 bg-paper/5">
              {works.map((work, i) => (
                <Reveal key={work.id} delay={i * 0.1}>
                  <div className="grid grid-cols-[2rem_auto_1fr] items-stretch border-b border-paper/10 last:border-0 sm:grid-cols-[3rem_14rem_1fr]">
                    {/* Sprocket rail */}
                    <div className="flex flex-col items-center gap-2 border-r border-paper/10 bg-paper/5 py-4 px-2">
                      <span
                        className="font-mono text-[0.55rem] font-bold"
                        style={{ color: creator.accent }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <Sprockets count={4} />
                    </div>

                    {/* Thumbnail frame */}
                    <div className="border-r border-paper/10">
                      <WorkArt work={work} />
                    </div>

                    {/* Info */}
                    <div className="flex flex-col justify-center p-5 sm:p-7">
                      <p className="kicker" style={{ color: creator.accent }}>
                        {t.works.categories[work.category]}
                      </p>
                      <h3 className="font-display mt-2 text-2xl uppercase text-paper sm:text-3xl">
                        {work.name[lang]}
                      </h3>
                      <p className="mt-1 text-sm text-paper/45">{work.tagline[lang]}</p>
                      <div className="mt-5">
                        {work.forSale ? (
                          <div className="flex items-center gap-4">
                            <span
                              className="font-display text-2xl"
                              style={{ color: creator.accent }}
                            >
                              ¥{work.price}
                            </span>
                            <Link
                              href="/contact"
                              className="border px-4 py-1.5 font-mono text-[0.65rem] uppercase tracking-wider text-paper/60 transition-colors hover:text-paper"
                              style={{ borderColor: creator.accent + "50" }}
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

        {/* ── End card ────────────────────────────────────────── */}
        <div className="border-t border-paper/10 py-12 text-center">
          <span className="font-brush text-5xl" style={{ color: creator.accent }}>
            {creator.glyph}
          </span>
          <p className="mt-2 font-mono text-xs text-paper/30">{creator.handle}</p>
          <Link
            href="/partners"
            className="mt-6 inline-block border border-paper/20 px-6 py-2.5 font-mono text-xs uppercase tracking-wider text-paper/40 transition-colors hover:border-paper/50 hover:text-paper"
          >
            {c.allCreators}
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
