"use client";

/**
 * Blackout Poster · Portrait / 夜店海报 · 真人版
 * Based on fangu's Blackout Poster template — real portrait in the hero,
 * real work photos as thumbnails in the stacked release list.
 */

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { creator, works } from ".";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

import work01 from "./images/work_01.jpg";
import work02 from "./images/work_02.jpg";
import work03 from "./images/work_03.jpg";
import work04 from "./images/work_04.jpg";
import work05 from "./images/work_05.jpg";
import work06 from "./images/work_06.jpg";
import work07 from "./images/work_07.jpg";
import work08 from "./images/work_08.jpg";
import work09 from "./images/work_09.jpg";
import work10 from "./images/work_10.jpg";
import work11 from "./images/work_11.jpg";
import work12 from "./images/work_12.jpg";
import work13 from "./images/work_13.jpg";

const workImages = [
  work01, work02, work03, work04, work05, work06, work07,
  work08, work09, work10, work11, work12, work13,
];

export default function Co1dvvvPage({ id: _id }: { id: string }) {
  const { t, lang } = useLang();
  const c = t.creators;

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

          {/* Portrait — pinned right */}
          {creator.avatar && (
            <div
              className="pointer-events-none absolute bottom-0 right-0 z-0 hidden lg:block"
              style={{ width: "38vw", maxWidth: 560 }}
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src={creator.avatar}
                  alt={creator.name[lang]}
                  fill
                  sizes="38vw"
                  className="object-cover object-top"
                  priority
                />
                {/* Dark fade — blends into bg at the edges */}
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to right, var(--color-ink) 0%, transparent 30%, transparent 70%, var(--color-ink) 100%), linear-gradient(to top, var(--color-ink) 0%, transparent 20%)",
                  }}
                />
                {/* Electric color grade */}
                <div
                  className="pointer-events-none absolute inset-0 mix-blend-color"
                  style={{ background: creator.accent, opacity: 0.12 }}
                />
              </div>
            </div>
          )}

          <div className="relative z-20 flex flex-1 flex-col justify-between px-4 pb-16 sm:px-10">
            {/* Top nav strip */}
            <div className="flex items-center justify-between border-b border-paper/10 pb-4 font-mono text-[0.65rem] uppercase tracking-widest text-paper/30">
              <span>Mom&apos;s Rage × Creator</span>
              <Link href="/partners" className="transition-colors hover:text-paper">
                {c.backHome} ←
              </Link>
            </div>

            {/* Name stack */}
            <div className="mt-auto max-w-3xl">
              <p
                className="font-mono text-xs uppercase tracking-[0.4em]"
                style={{ color: creator.accent }}
              >
                {creator.handle}
              </p>
              <h1
                className="display-tight leading-none text-paper"
                style={{ fontSize: "clamp(4rem, 18vw, 15rem)", textTransform: "none" }}
              >
                {creator.name[lang]}
              </h1>
              <div className="mt-4 grid grid-cols-[1fr_auto] items-end gap-4">
                <p className="max-w-md text-sm leading-relaxed text-paper/50 sm:text-base">
                  {creator.bio[lang]}
                </p>
                <div className="hidden text-right font-mono text-xs text-paper/25 sm:block">
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
            </div>
          </div>
        </section>

        {/* ── Works: gig-poster stacked list with real photos ─── */}
        <section className="border-t border-paper/10 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Reveal>
              <p className="kicker mb-12 text-paper/30">{c.worksTitle}</p>
            </Reveal>

            <div className="space-y-2">
              {workImages.map((img, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <div
                    className="group grid grid-cols-[auto_1fr_auto] items-center gap-6 border border-paper/10 p-6 transition-all duration-200 hover:border-[var(--accent)] hover:bg-paper/[0.04] sm:gap-10 sm:p-8"
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
                      <p className="kicker" style={{ color: creator.accent }}>
                        {t.works.categories[works[i]?.category ?? "mix"]}
                      </p>
                      <h3 className="font-display mt-1 text-2xl uppercase text-paper sm:text-3xl">
                        {works[i]?.name[lang] ?? `作品 ${String(i + 1).padStart(2, "0")}`}
                      </h3>
                      <span className="mt-3 inline-block font-mono text-[0.65rem] uppercase tracking-wider text-paper/25">
                        {t.works.notForSale}
                      </span>
                    </div>

                    {/* Real photo thumbnail */}
                    <div className="relative h-20 w-20 overflow-hidden border border-paper/10 group-hover:border-paper/20 sm:h-28 sm:w-28">
                      <Image
                        src={img}
                        alt={works[i]?.name[lang] ?? `作品 ${i + 1}`}
                        fill
                        sizes="112px"
                        className="object-cover"
                      />
                      <div
                        className="pointer-events-none absolute inset-0 mix-blend-color opacity-0 transition-opacity group-hover:opacity-20"
                        style={{ background: creator.accent }}
                      />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Exit ────────────────────────────────────────────── */}
        <div className="border-t border-paper/10 py-12 text-center">
          <Link
            href="/partners"
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
