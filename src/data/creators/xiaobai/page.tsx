"use client";

/**
 * Risograph / 孔版印刷 template.
 * Off-white (paper) background, two-color offset shadows suggesting
 * a two-plate screen print. Registration-mark corners. Grain overlay.
 */

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { creator, works } from ".";
import { WorkArt } from "@/components/WorkArt";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

/** Tiny registration cross mark */
function RegMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    >
      <circle cx="10" cy="10" r="6" />
      <line x1="10" y1="0" x2="10" y2="20" />
      <line x1="0" y1="10" x2="20" y2="10" />
    </svg>
  );
}

export default function RisographPage({ id: _id }: { id: string }) {
  const { t, lang } = useLang();
  const c = t.creators;
  const forSale = works.filter((w) => w.forSale);

  return (
    <>
      <Nav subpage />
      <main className="relative bg-paper text-ink">
        {/* Grain overlay */}
        <div
          className="pointer-events-none fixed inset-0 z-50 opacity-[0.06] mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />

        {/* ── Print header ────────────────────────────────────── */}
        <section className="relative px-4 pt-28 pb-16 sm:px-6 sm:pt-36">
          {/* Registration marks */}
          <RegMark className="absolute top-6 left-6 text-ink/20" />
          <RegMark className="absolute top-6 right-6 text-ink/20" />
          <RegMark className="absolute bottom-6 left-6 text-ink/20" />
          <RegMark className="absolute bottom-6 right-6 text-ink/20" />

          <div className="mx-auto max-w-7xl">
            <div className="mb-6 flex items-center justify-between font-mono text-[0.6rem] uppercase tracking-widest text-ink/30">
              <span>孔版印刷 / RISOGRAPH</span>
              <Link href="/partners" className="hover:text-ink">{c.backHome} ←</Link>
            </div>

            {/* Name with double-layer riso offset */}
            <div className="relative inline-block">
              {/* Cyan under-layer (slightly offset) */}
              <h1
                className="display-tight absolute top-2 left-2 leading-none opacity-40"
                style={{
                  fontSize: "clamp(4rem, 16vw, 13rem)",
                  color: "var(--color-cyan)",
                }}
              >
                {creator.name[lang]}
              </h1>
              {/* Magenta over-layer */}
              <h1
                className="display-tight absolute -top-1 -left-1 leading-none opacity-30"
                style={{
                  fontSize: "clamp(4rem, 16vw, 13rem)",
                  color: "var(--color-magenta)",
                }}
              >
                {creator.name[lang]}
              </h1>
              {/* Main black layer */}
              <h1
                className="display-tight relative leading-none text-ink"
                style={{ fontSize: "clamp(4rem, 16vw, 13rem)" }}
              >
                {creator.name[lang]}
              </h1>
            </div>

            {/* Info row below */}
            <div className="mt-8 flex flex-col gap-4 border-t border-ink/20 pt-6 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p
                  className="font-mono text-xs uppercase tracking-widest"
                  style={{ color: "var(--color-cyan)" }}
                >
                  {creator.role[lang]}
                </p>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink/65">
                  {creator.bio[lang]}
                </p>
              </div>
              <div className="shrink-0 font-mono text-xs text-ink/40">
                <p>{creator.handle}</p>
                <p className="mt-1">{works.length} {c.worksCount}</p>
                <p>{forSale.length} {c.shopTitle}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Works: riso print cards ─────────────────────────── */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Reveal>
              <p className="kicker mb-10 text-ink/40">{c.worksTitle}</p>
            </Reveal>

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {works.map((work, i) => (
                <Reveal key={work.id} delay={i * 0.08}>
                  <div className="relative">
                    {/* Cyan shadow plate */}
                    <div
                      className="absolute top-2 left-2 h-full w-full border-2 opacity-30"
                      style={{ borderColor: "var(--color-cyan)", background: "var(--color-cyan)" }}
                    />
                    {/* Magenta shadow plate */}
                    <div
                      className="absolute -top-1 -left-1 h-full w-full border-2 opacity-20"
                      style={{ borderColor: "var(--color-magenta)", background: "var(--color-magenta)" }}
                    />

                    {/* Main card */}
                    <div className="relative border-2 border-ink bg-paper">
                      <WorkArt work={work} />
                      <div className="p-5">
                        <p
                          className="kicker"
                          style={{ color: "var(--color-cyan)" }}
                        >
                          {t.works.categories[work.category]}
                        </p>
                        <h3 className="font-display mt-2 text-xl uppercase">{work.name[lang]}</h3>
                        <p className="mt-1 text-xs text-ink/55">{work.tagline[lang]}</p>
                        <div className="mt-4 flex items-center justify-between">
                          {work.forSale ? (
                            <>
                              <span className="font-display text-2xl">¥{work.price}</span>
                              <Link
                                href="/contact"
                                className="border-2 border-ink bg-ink px-4 py-2 font-mono text-[0.65rem] font-bold uppercase tracking-wider text-paper transition-colors hover:bg-paper hover:text-ink"
                              >
                                {c.buy}
                              </Link>
                            </>
                          ) : (
                            <span className="font-mono text-[0.65rem] uppercase tracking-wide text-ink/35">
                              {t.works.notForSale}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Print footer ────────────────────────────────────── */}
        <div className="relative border-t border-ink/20 py-10">
          <RegMark className="absolute bottom-4 left-4 text-ink/15" />
          <RegMark className="absolute bottom-4 right-4 text-ink/15" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-between">
            <div className="font-mono text-xs text-ink/40">
              <p className="uppercase tracking-wider">{creator.name[lang]}</p>
              <p>{creator.handle}</p>
            </div>
            <Link
              href="/partners"
              className="border border-ink/30 px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-ink/50 transition-colors hover:border-ink hover:text-ink"
            >
              {c.allCreators}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
