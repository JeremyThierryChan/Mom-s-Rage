"use client";

/**
 * Zine · Portrait / 地下拼贴 · 真人版
 * Based on niijiang's Zine template — adapted with real portrait photo in
 * the masthead and real work photos in the rotating collage cards.
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
import work14 from "./images/work_14.jpg";
import work15 from "./images/work_15.jpg";
import work16 from "./images/work_16.jpg";
import work17 from "./images/work_17.jpg";
import work18 from "./images/work_18.jpg";
import work19 from "./images/work_19.jpg";
import work20 from "./images/work_20.jpg";
import work21 from "./images/work_21.jpg";
import work22 from "./images/work_22.jpg";
import work23 from "./images/work_23.jpg";

const workImages = [
  work01, work02, work03, work04, work05, work06, work07, work08,
  work09, work10, work11, work12, work13, work14, work15, work16,
  work17, work18, work19, work20, work21, work22, work23,
];

const ROTATIONS = [-3, 2, -1.5, 3, -2, 1, -3.5, 2.5, -2.5, 1.5, -1, 3.5, 2, -3, 1, -2, 3, -1.5, 2.5, -3.5, 1, -2, 3];

export default function SixteenSevenPage({ id: _id }: { id: string }) {
  const { t, lang } = useLang();
  const c = t.creators;

  return (
    <>
      <Nav subpage />
      <main className="bg-acid">

        {/* ── Masthead ────────────────────────────────────────── */}
        <section className="relative overflow-hidden border-b-4 border-ink pt-24 pb-0">
          {/* Repeating background glyph strip */}
          <div className="pointer-events-none absolute inset-0 flex items-center overflow-hidden opacity-5">
            {Array.from({ length: 6 }).map((_, i) => (
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

            {/* Avatar + headline row */}
            <div className="mt-4 flex flex-col items-start gap-6 sm:flex-row sm:items-end">
              {creator.avatar && (
                <div
                  className="relative shrink-0 overflow-hidden border-4 border-ink shadow-hard"
                  style={{ width: 140, height: 140 }}
                >
                  <Image
                    src={creator.avatar}
                    alt={creator.name[lang]}
                    fill
                    sizes="140px"
                    className="object-cover object-top"
                    priority
                  />
                  {/* Acid tint overlay — ties avatar to the bg */}
                  <div
                    className="pointer-events-none absolute inset-0 mix-blend-multiply"
                    style={{ background: "var(--color-acid)", opacity: 0.18 }}
                  />
                </div>
              )}

              {/* Big headline name */}
              <h1
                className="display-tight leading-none text-ink"
                style={{ fontSize: "clamp(3.5rem, 16vw, 14rem)", textTransform: "none" }}
              >
                {creator.name[lang]}
              </h1>
            </div>

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

        {/* ── Works: collage grid with real photos ─────────────── */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <p className="kicker mb-10 text-ink/50">{c.worksTitle} ✦</p>

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {workImages.map((img, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <div
                    className="group relative bg-paper shadow-hard transition-transform duration-300 hover:rotate-0 hover:scale-105"
                    style={{ transform: `rotate(${ROTATIONS[i % ROTATIONS.length]}deg)` }}
                  >
                    {/* Tape strip at top */}
                    <div className="absolute -top-3 left-1/2 z-10 h-6 w-20 -translate-x-1/2 bg-acid/70 shadow-sm" />

                    {/* Real photo */}
                    <div className="relative aspect-square w-full overflow-hidden">
                      <Image
                        src={img}
                        alt={works[i]?.name[lang] ?? `作品 ${i + 1}`}
                        fill
                        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                        className="object-cover"
                      />
                    </div>

                    <div className="border-t-2 border-ink p-4">
                      <p className="kicker text-magenta">{t.works.categories[works[i]?.category ?? "mix"]}</p>
                      <h3 className="font-display mt-1 text-xl uppercase">{works[i]?.name[lang] ?? `作品 ${String(i + 1).padStart(2, "0")}`}</h3>
                      <span className="mt-2 inline-block border-2 border-ink/40 px-2 py-0.5 font-mono text-[0.65rem] uppercase tracking-wide text-ink/50">
                        {t.works.notForSale}
                      </span>
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
                  <p className="font-display text-2xl" style={{ textTransform: "none" }}>{creator.name[lang]}</p>
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
