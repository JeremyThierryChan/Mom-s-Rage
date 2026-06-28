"use client";

/**
 * Zine · Collage / 拼贴画册 — 亿循拓珃
 * Ink background, orange accent, rotated photo cards with lightbox.
 */

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useLang } from "@/lib/i18n";
import { creator } from ".";
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

const workImages = [
  work01, work02, work03, work04, work05,
  work06, work07, work08, work09, work10,
];

const ROTATIONS = [-2.5, 1.8, -1.2, 3, -2, 1.5, -3.2, 2.2, -1.8, 2.8];

export default function YixunPage({ id: _id }: { id: string }) {
  const { t, lang } = useLang();
  const c = t.creators;
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setLightbox(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  return (
    <>
      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 p-4"
          onClick={() => setLightbox(null)}
        >
          <Image
            src={workImages[lightbox]!}
            alt={`作品 ${lightbox + 1}`}
            width={workImages[lightbox]!.width}
            height={workImages[lightbox]!.height}
            style={{ maxHeight: "90vh", maxWidth: "90vw", width: "auto", height: "auto" }}
          />
          <button
            className="absolute right-4 top-4 font-mono text-sm text-white/50 hover:text-white"
            onClick={() => setLightbox(null)}
          >
            ✕
          </button>
          <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
            {workImages.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setLightbox(i); }}
                className="h-1.5 w-1.5 rounded-full transition-all"
                style={{ background: i === lightbox ? creator.accent : "rgba(255,255,255,0.3)" }}
              />
            ))}
          </div>
        </div>
      )}

      <Nav subpage />
      <main className="bg-ink text-paper">

        {/* ── Masthead ────────────────────────────────────────── */}
        <section className="relative overflow-hidden border-b-4 pt-24" style={{ borderColor: creator.accent }}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6">

            {/* Top bar */}
            <div
              className="flex items-center justify-between py-2 font-mono text-[0.6rem] uppercase tracking-widest"
              style={{ borderBottom: `1px solid ${creator.accent}40` }}
            >
              <span style={{ color: creator.accent }}>MOM&apos;S RAGE × CREATOR</span>
              <span className="text-paper/30">{creator.handle}</span>
              <Link href="/partners" className="text-paper/30 transition-colors hover:text-paper">
                {c.backHome} ←
              </Link>
            </div>

            {/* Name + avatar row */}
            <div className="flex flex-col gap-6 py-8 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h1
                  className="display-tight leading-none text-paper"
                  style={{ fontSize: "clamp(3.5rem, 14vw, 11rem)", textTransform: "none" }}
                >
                  {creator.name[lang]}
                </h1>
                <p className="mt-3 font-mono text-sm uppercase tracking-[0.25em]" style={{ color: creator.accent }}>
                  {creator.role[lang]}
                </p>
              </div>

              {creator.avatar && (
                <Reveal delay={0.1}>
                  <div
                    className="relative shrink-0 overflow-hidden"
                    style={{
                      width: 140, height: 140,
                      border: `3px solid ${creator.accent}`,
                      transform: "rotate(-2deg)",
                    }}
                  >
                    <Image
                      src={creator.avatar}
                      alt={creator.name[lang]}
                      fill
                      sizes="140px"
                      className="object-cover object-top"
                      priority
                    />
                  </div>
                </Reveal>
              )}
            </div>

            {/* Bio strip */}
            <div
              className="flex items-center gap-6 py-4 font-mono text-xs"
              style={{ borderTop: `1px solid ${creator.accent}30` }}
            >
              <span className="text-paper/40">{creator.bio[lang]}</span>
              <span className="ml-auto shrink-0 text-paper/20">{workImages.length} WORKS</span>
            </div>
          </div>
        </section>

        {/* ── Collage wall ────────────────────────────────────── */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Reveal>
              <p className="kicker mb-12" style={{ color: creator.accent }}>
                {c.worksTitle}
              </p>
            </Reveal>

            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 lg:gap-8">
              {workImages.map((img, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <button
                    className="group relative block w-full cursor-zoom-in"
                    onClick={() => setLightbox(i)}
                    aria-label={`查看大图 ${i + 1}`}
                    style={{ transform: `rotate(${ROTATIONS[i]}deg)` }}
                  >
                    {/* Card frame */}
                    <div
                      className="relative overflow-hidden bg-paper/5 p-1.5 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-0"
                      style={{
                        boxShadow: `4px 4px 0 ${creator.accent}40`,
                        border: `1px solid ${creator.accent}20`,
                      }}
                    >
                      <div className="relative aspect-square overflow-hidden">
                        <Image
                          src={img}
                          alt={`作品 ${i + 1}`}
                          fill
                          sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 22vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div
                          className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-30"
                          style={{ background: creator.accent }}
                        />
                      </div>
                      {/* Index label */}
                      <p
                        className="pt-1.5 text-right font-mono text-[0.55rem] font-bold tracking-widest"
                        style={{ color: creator.accent }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </p>
                    </div>
                  </button>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── End card ────────────────────────────────────────── */}
        <div className="border-t py-12 text-center" style={{ borderColor: creator.accent + "30" }}>
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
