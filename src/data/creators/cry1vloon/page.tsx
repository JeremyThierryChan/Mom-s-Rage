"use client";

/**
 * Film Strip · Portrait / 胶片档案 · 真人版
 * Based on 电影's Film Strip template — real photos in each film frame.
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

const workImages = [work01, work02, work03, work04, work05, work06, work07, work08, work09, work10, work11, work12];

function Sprockets({ count = 4 }: { count?: number }) {
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

export default function Cry1vloOnPage({ id: _id }: { id: string }) {
  const { t, lang } = useLang();
  const c = t.creators;

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

            {/* Avatar + title side by side */}
            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-end">
              {creator.avatar && (
                <div className="relative shrink-0 overflow-hidden border border-paper/20"
                  style={{ width: 120, height: 120 }}>
                  <Image
                    src={creator.avatar}
                    alt={creator.name[lang]}
                    fill
                    sizes="120px"
                    className="object-cover object-top"
                    priority
                  />
                  {/* Electric tint */}
                  <div
                    className="pointer-events-none absolute inset-0 mix-blend-color"
                    style={{ background: "var(--color-electric)", opacity: 0.15 }}
                  />
                </div>
              )}

              {/* Name + glyph */}
              <div className="relative">
                <span
                  className="font-brush leading-none"
                  style={{
                    fontSize: "clamp(60px, 15vw, 180px)",
                    color: creator.accent,
                    opacity: 0.12,
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                  }}
                  aria-hidden
                >
                  {creator.glyph}
                </span>
                <h1
                  className="display-tight relative leading-none text-paper"
                  style={{ fontSize: "clamp(3rem, 12vw, 10rem)", textTransform: "none" }}
                >
                  {creator.name[lang]}
                </h1>
              </div>
            </div>

            {/* Info strip */}
            <div className="mt-8 grid gap-4 border-t border-paper/10 pt-6 sm:grid-cols-[1fr_auto]">
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
                <p className="mt-0.5 text-paper">{works.length} / 0 {c.shopTitle}</p>
                <a
                  href="/downloads/cry1vloon_portfolio.pdf"
                  download
                  className="mt-4 flex items-center gap-2 border border-paper/20 px-3 py-2 text-paper/70 transition-colors hover:border-paper/50 hover:text-paper"
                  style={{ borderColor: creator.accent + "50" }}
                >
                  <span style={{ color: creator.accent }}>↓</span>
                  <span>Portfolio PDF</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Film strip: works with real photos ──────────────── */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Reveal>
              <p className="kicker mb-10" style={{ color: creator.accent }}>
                {c.worksTitle}
              </p>
            </Reveal>

            <div className="border border-paper/10 bg-paper/5">
              {workImages.map((img, i) => (
                <Reveal key={i} delay={i * 0.07}>
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

                    {/* Real photo frame */}
                    <div className="relative border-r border-paper/10" style={{ minHeight: 160 }}>
                      <Image
                        src={img}
                        alt={works[i]?.name[lang] ?? `作品 ${i + 1}`}
                        fill
                        sizes="(max-width: 640px) 40vw, 224px"
                        className="object-cover"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex flex-col justify-center p-5 sm:p-7">
                      <p className="kicker" style={{ color: creator.accent }}>
                        {t.works.categories[works[i]?.category ?? "mix"]}
                      </p>
                      <h3 className="font-display mt-2 text-2xl uppercase text-paper sm:text-3xl">
                        {works[i]?.name[lang] ?? `作品 ${i + 1}`}
                      </h3>
                      <span className="mt-5 font-mono text-[0.65rem] uppercase tracking-wider text-paper/25">
                        {t.works.notForSale}
                      </span>
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
