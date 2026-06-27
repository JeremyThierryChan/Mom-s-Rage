"use client";

/**
 * Lookbook / 系列画册 template — Kalare
 * Dark editorial base. Each image series gets its own full-width chapter:
 * a bold chapter header (name + tagline + category) then a mosaic photo grid.
 */

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { creator, works } from ".";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

import knight01 from "./images/knight/01.jpg";
import knight02 from "./images/knight/02.jpg";
import knight03 from "./images/knight/03.jpg";
import knight04 from "./images/knight/04.jpg";
import knight05 from "./images/knight/05.jpg";
import knight06 from "./images/knight/06.jpg";

import hollywood01 from "./images/hollywood/01.jpg";
import hollywood02 from "./images/hollywood/02.jpg";
import hollywood03 from "./images/hollywood/03.jpg";
import hollywood04 from "./images/hollywood/04.jpg";
import hollywood05 from "./images/hollywood/05.jpg";
import hollywood06 from "./images/hollywood/06.jpg";
import hollywood07 from "./images/hollywood/07.jpg";
import hollywood08 from "./images/hollywood/08.jpg";

const knightImages = [knight01, knight02, knight03, knight04, knight05, knight06];
const hollywoodImages = [hollywood01, hollywood02, hollywood03, hollywood04, hollywood05, hollywood06, hollywood07, hollywood08];

const knightWork = works[0]!;
const hollywoodWork = works[1]!;

export default function KalarePage({ id: _id }: { id: string }) {
  const { t, lang } = useLang();
  const c = t.creators;

  return (
    <>
      <Nav subpage />
      <main className="bg-ink text-paper">

        {/* ── Hero ────────────────────────────────────────────── */}
        <section className="relative min-h-[70vh] overflow-hidden px-4 pt-28 pb-16 sm:px-6">
          {/* Subtle halftone bg */}
          <div
            className="halftone pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{ color: creator.accent }}
          />

          {/* Ghost glyph */}
          <span
            className="pointer-events-none absolute right-0 bottom-0 select-none font-brush leading-none text-paper/[0.04]"
            style={{ fontSize: "clamp(14rem, 40vw, 32rem)" }}
            aria-hidden
          >
            {creator.glyph}
          </span>

          <div className="relative mx-auto max-w-7xl">
            <Link
              href="/partners"
              className="kicker mb-10 inline-block text-paper/30 transition-colors hover:text-paper"
            >
              ← {c.backHome}
            </Link>

            <div className="grid gap-10 lg:grid-cols-[auto_1fr] lg:items-end lg:gap-16">
              {/* Avatar */}
              {creator.avatar && (
                <Reveal>
                  <div
                    className="relative overflow-hidden border-2 shadow-hard"
                    style={{ width: 200, height: 200, borderColor: creator.accent + "60" }}
                  >
                    <Image
                      src={creator.avatar}
                      alt={creator.name[lang]}
                      fill
                      sizes="200px"
                      className="object-cover object-top"
                      priority
                    />
                    <div
                      className="pointer-events-none absolute inset-0 mix-blend-color opacity-10"
                      style={{ background: creator.accent }}
                    />
                  </div>
                </Reveal>
              )}

              {/* Info */}
              <Reveal delay={0.08}>
                <h1
                  className="display-tight leading-none text-paper"
                  style={{ fontSize: "clamp(3rem, 12vw, 10rem)", textTransform: "none" }}
                >
                  {creator.name[lang]}
                </h1>
                <p
                  className="mt-3 font-mono text-xs tracking-[0.2em]"
                  style={{ color: creator.accent }}
                >
                  小红书：@Kyusung_07 &nbsp;/&nbsp; IG：@k_alaree
                </p>
                <div
                  className="my-6 h-px w-12"
                  style={{ background: creator.accent }}
                />
                <p className="font-mono text-sm uppercase tracking-wider text-paper/40">
                  {creator.role[lang]}
                </p>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-paper/60 sm:text-base">
                  {creator.bio[lang]}
                </p>

                <div className="mt-8 flex items-center gap-6 font-mono text-xs text-paper/25">
                  <div>
                    <p className="text-2xl font-bold text-paper">{works.length}</p>
                    <p className="mt-0.5 uppercase tracking-wider">{c.worksCount}</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── Series 01: 骑士 ─────────────────────────────────── */}
        <section className="border-t border-paper/10">
          {/* Chapter header */}
          <Reveal>
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="kicker" style={{ color: creator.accent }}>
                    01 — {t.works.categories[knightWork.category]}
                  </p>
                  <h2
                    className="display-tight mt-2 leading-none text-paper"
                    style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)", textTransform: "none" }}
                  >
                    {knightWork.name[lang]}
                  </h2>
                </div>
                <p className="max-w-sm text-sm leading-relaxed text-paper/50">
                  {knightWork.tagline[lang]}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Photo grid — 3 cols */}
          <div className="grid grid-cols-2 gap-px bg-paper/10 sm:grid-cols-3">
            {knightImages.map((img, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="group relative aspect-square overflow-hidden bg-ink">
                  <Image
                    src={img}
                    alt={`${knightWork.name[lang]} ${i + 1}`}
                    fill
                    sizes="(max-width: 640px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-20"
                    style={{ background: creator.accent }}
                  />
                  <span
                    className="absolute bottom-3 right-3 font-mono text-[0.6rem] font-bold tracking-widest opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ color: creator.accent }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Series 02: 好莱坞 ───────────────────────────────── */}
        <section className="border-t border-paper/10">
          {/* Chapter header */}
          <Reveal>
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="kicker" style={{ color: creator.accent }}>
                    02 — {t.works.categories[hollywoodWork.category]}
                  </p>
                  <h2
                    className="display-tight mt-2 leading-none text-paper"
                    style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)", textTransform: "none" }}
                  >
                    {hollywoodWork.name[lang]}
                  </h2>
                </div>
                <p className="max-w-sm text-sm leading-relaxed text-paper/50">
                  {hollywoodWork.tagline[lang]}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Photo grid — 4 cols on desktop, 2 on mobile */}
          <div className="grid grid-cols-2 gap-px bg-paper/10 sm:grid-cols-4">
            {hollywoodImages.map((img, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="group relative aspect-square overflow-hidden bg-ink">
                  <Image
                    src={img}
                    alt={`${hollywoodWork.name[lang]} ${i + 1}`}
                    fill
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-20"
                    style={{ background: creator.accent }}
                  />
                  <span
                    className="absolute bottom-3 right-3 font-mono text-[0.6rem] font-bold tracking-widest opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ color: creator.accent }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Closing ─────────────────────────────────────────── */}
        <section className="border-t border-paper/10 py-14 text-center">
          <span
            className="font-brush text-6xl"
            style={{ color: creator.accent }}
          >
            {creator.glyph}
          </span>
          <p className="mt-2 font-mono text-xs text-paper/30">{creator.handle}</p>
          <Link
            href="/partners"
            className="mt-6 inline-block border border-paper/20 px-8 py-3 font-mono text-xs uppercase tracking-widest text-paper/50 transition-colors hover:border-paper/50 hover:text-paper"
          >
            {c.allCreators}
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
