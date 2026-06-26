"use client";

/**
 * Blueprint Lab / 产品说明书 template.
 * Off-white paper background, technical-drawing aesthetic.
 * Works displayed as annotated "product spec" cards with dotted borders.
 * Orange accents read like measurement callouts.
 */

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { creator, works } from ".";
import { WorkArt } from "@/components/WorkArt";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

export default function BlueprintPage({ id: _id }: { id: string }) {
  const { t, lang } = useLang();
  const c = t.creators;
  const forSale = works.filter((w) => w.forSale);

  return (
    <>
      <Nav subpage />
      <main
        className="min-h-screen text-ink"
        style={{
          background: "var(--color-paper)",
          backgroundImage:
            "radial-gradient(circle, var(--color-ink) 0.5px, transparent 0.5px)",
          backgroundSize: "24px 24px",
        }}
      >
        {/* ── Lab header ─────────────────────────────────────── */}
        <section className="relative overflow-hidden pt-24 pb-0">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            {/* Top ruler strip */}
            <div className="mb-8 flex items-center gap-3 border-b border-ink/20 pb-4 font-mono text-[0.6rem] text-ink/30">
              <Link href="/#creators" className="hover:text-ink">
                ← {c.backHome}
              </Link>
              <span className="flex-1 border-t border-dashed border-ink/20" />
              <span>DOC-{creator.id.toUpperCase()}-001</span>
              <span className="flex-1 border-t border-dashed border-ink/20" />
              <span>{creator.handle}</span>
            </div>

            <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
              {/* Name + spec block */}
              <div>
                {/* Corner annotation */}
                <div className="mb-4 inline-flex items-center gap-2">
                  <div
                    className="h-px w-8"
                    style={{ background: creator.accent }}
                  />
                  <span
                    className="font-mono text-[0.65rem] uppercase tracking-widest"
                    style={{ color: creator.accent }}
                  >
                    {creator.role[lang]}
                  </span>
                </div>

                <h1
                  className="display-tight leading-none text-ink"
                  style={{ fontSize: "clamp(4rem, 14vw, 11rem)" }}
                >
                  {creator.name[lang]}
                </h1>

                {/* Bio as "description" field */}
                <div className="mt-6 max-w-xl border-l-2 pl-4 font-mono text-sm leading-relaxed text-ink/60"
                  style={{ borderColor: creator.accent }}>
                  {creator.bio[lang]}
                </div>
              </div>

              {/* Tech spec box */}
              <div className="border-2 border-ink/20 bg-paper p-6 font-mono text-xs">
                <p
                  className="mb-3 text-[0.6rem] uppercase tracking-widest"
                  style={{ color: creator.accent }}
                >
                  规格 / Spec
                </p>
                <table className="w-full border-collapse text-ink/60">
                  <tbody>
                    {[
                      ["ID", creator.id],
                      ["HANDLE", creator.handle],
                      ["ROLE", creator.role["en"]],
                      ["WORKS", String(works.length)],
                      ["FOR SALE", String(forSale.length)],
                    ].map(([label, val]) => (
                      <tr key={label} className="border-b border-ink/10">
                        <td className="py-1.5 pr-6 text-ink/35">{label}</td>
                        <td className="py-1.5 text-ink">{val}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Bottom divider with callout marks */}
            <div className="mt-10 flex items-center gap-2 font-mono text-[0.6rem] text-ink/20">
              <span
                className="inline-block h-3 w-3 rotate-45 border"
                style={{ borderColor: creator.accent }}
              />
              <span className="flex-1 border-t border-dashed border-ink/20" />
              <span
                className="font-bold uppercase"
                style={{ color: creator.accent }}
              >
                {creator.glyph}
              </span>
              <span className="flex-1 border-t border-dashed border-ink/20" />
              <span
                className="inline-block h-3 w-3 rotate-45 border"
                style={{ borderColor: creator.accent }}
              />
            </div>
          </div>
        </section>

        {/* ── Works: annotated product cards ─────────────────── */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Reveal>
              <p className="kicker mb-10 text-ink/40">{c.worksTitle}</p>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {works.map((work, i) => (
                <Reveal key={work.id} delay={i * 0.07}>
                  <div className="relative border-2 border-ink/20 bg-paper">
                    {/* Dot-corner markers */}
                    {[
                      "absolute -top-1.5 -left-1.5",
                      "absolute -top-1.5 -right-1.5",
                      "absolute -bottom-1.5 -left-1.5",
                      "absolute -bottom-1.5 -right-1.5",
                    ].map((pos, j) => (
                      <span
                        key={j}
                        className={`${pos} h-3 w-3 rounded-full border-2 border-ink/40 bg-paper`}
                      />
                    ))}

                    {/* Top label strip */}
                    <div className="flex items-center justify-between border-b border-ink/15 bg-ink/5 px-4 py-2 font-mono text-[0.6rem] text-ink/40">
                      <span className="uppercase tracking-wider">
                        {t.works.categories[work.category]}
                      </span>
                      <span>REF-{String(i + 1).padStart(3, "0")}</span>
                    </div>

                    <WorkArt work={work} />

                    {/* Spec label */}
                    <div className="border-t border-dashed border-ink/20 p-5">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="font-display text-xl uppercase">
                            {work.name[lang]}
                          </h3>
                          <p className="mt-1 font-mono text-xs leading-relaxed text-ink/50">
                            {work.tagline[lang]}
                          </p>
                        </div>
                        {/* Callout glyph */}
                        <span
                          className="shrink-0 font-brush text-3xl"
                          style={{ color: creator.accent + "60" }}
                        >
                          {work.glyph}
                        </span>
                      </div>

                      {/* Price / status bar */}
                      <div
                        className="mt-4 flex items-center justify-between border-t pt-3"
                        style={{ borderColor: creator.accent + "30" }}
                      >
                        {work.forSale ? (
                          <>
                            <div>
                              <p className="font-mono text-[0.55rem] uppercase tracking-wider text-ink/30">
                                参考价 / Price
                              </p>
                              <span
                                className="font-display text-2xl"
                                style={{ color: creator.accent }}
                              >
                                ¥{work.price}
                              </span>
                            </div>
                            <Link
                              href="/#contact"
                              className="border-2 px-4 py-2 font-mono text-[0.65rem] font-bold uppercase tracking-wider text-ink transition-colors hover:text-paper"
                              style={{
                                borderColor: creator.accent,
                                background: "transparent",
                              }}
                              onMouseEnter={(e) =>
                                (e.currentTarget.style.background = creator.accent)
                              }
                              onMouseLeave={(e) =>
                                (e.currentTarget.style.background = "transparent")
                              }
                            >
                              {c.buy}
                            </Link>
                          </>
                        ) : (
                          <span className="font-mono text-[0.65rem] uppercase tracking-wider text-ink/30">
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

        {/* ── Footer stamp ────────────────────────────────────── */}
        <section className="border-t border-ink/10 py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
              <div className="flex items-center gap-4">
                {/* Circle stamp */}
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-full border-2"
                  style={{ borderColor: creator.accent, borderStyle: "dashed" }}
                >
                  <span
                    className="font-brush text-3xl"
                    style={{ color: creator.accent }}
                  >
                    {creator.glyph}
                  </span>
                </div>
                <div className="font-mono text-xs text-ink/50">
                  <p className="text-base font-bold text-ink">{creator.name[lang]}</p>
                  <p>{creator.handle}</p>
                </div>
              </div>

              <Link
                href="/#creators"
                className="border border-ink/20 px-6 py-3 font-mono text-xs uppercase tracking-widest text-ink/40 transition-colors hover:border-ink hover:text-ink"
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
