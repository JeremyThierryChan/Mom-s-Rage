"use client";

/**
 * Lookbook · 版权分区 — SOUL大魂
 * Two sections: licensed works vs pending copyright.
 */

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useLang } from "@/lib/i18n";
import { creator, works } from ".";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

import licensed01 from "./images/licensed_01.jpg";
import licensed02 from "./images/licensed_02.jpg";
import licensed03 from "./images/licensed_03.jpg";
import licensed04 from "./images/licensed_04.jpg";
import licensed05 from "./images/licensed_05.jpg";
import licensed06 from "./images/licensed_06.jpg";

import pending01 from "./images/pending_01.jpg";
import pending02 from "./images/pending_02.jpg";
import pending03 from "./images/pending_03.jpg";
import pending04 from "./images/pending_04.jpg";
import pending05 from "./images/pending_05.jpg";
import pending06 from "./images/pending_06.jpg";
import pending07 from "./images/pending_07.jpg";
import pending08 from "./images/pending_08.jpg";
import pending09 from "./images/pending_09.jpg";
import pending10 from "./images/pending_10.jpg";
import pending11 from "./images/pending_11.jpg";

const licensedImages = [
  licensed01, licensed02, licensed03,
  licensed04, licensed05, licensed06,
];

const pendingImages = [
  pending01, pending02, pending03, pending04, pending05, pending06,
  pending07, pending08, pending09, pending10, pending11,
];

const allImages = [...licensedImages, ...pendingImages];

const licensedWork = works[0]!;
const pendingWork = works[1]!;

export default function SoulPage({ id: _id }: { id: string }) {
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightbox(null)}
        >
          <Image
            src={allImages[lightbox]!}
            alt={`作品 ${lightbox + 1}`}
            width={allImages[lightbox]!.width}
            height={allImages[lightbox]!.height}
            className="object-contain"
            style={{ maxHeight: "90vh", maxWidth: "90vw", width: "auto", height: "auto" }}
          />
          <button
            className="absolute right-4 top-4 font-mono text-sm text-white/50 hover:text-white"
            onClick={() => setLightbox(null)}
          >
            ✕
          </button>
        </div>
      )}

      <Nav subpage />
      <main className="bg-ink text-paper">

        {/* ── Hero ────────────────────────────────────────────── */}
        <section className="relative min-h-[70vh] overflow-hidden px-4 pt-28 pb-16 sm:px-6">
          <div
            className="halftone pointer-events-none absolute inset-0 opacity-[0.05]"
            style={{ color: creator.accent }}
          />
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
              {creator.avatar && (
                <Reveal>
                  <div
                    className="relative overflow-hidden border-2"
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

              <Reveal delay={0.08}>
                <h1
                  className="display-tight leading-none text-paper"
                  style={{ fontSize: "clamp(3rem, 12vw, 9rem)", textTransform: "none" }}
                >
                  {creator.name[lang]}
                </h1>
                <div className="my-6 h-px w-12" style={{ background: creator.accent }} />
                <p className="font-mono text-sm uppercase tracking-wider text-paper/40">
                  {creator.role[lang]}
                </p>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-paper/60 sm:text-base">
                  {creator.bio[lang]}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-6 font-mono text-xs text-paper/25">
                  <div>
                    <p className="text-2xl font-bold text-paper">{licensedImages.length}</p>
                    <p className="mt-0.5 uppercase tracking-wider">
                      {lang === "zh" ? "已获得版权" : "Licensed"}
                    </p>
                  </div>
                  <div className="h-8 w-px bg-paper/10" />
                  <div>
                    <p className="text-2xl font-bold text-paper/40">{pendingImages.length}</p>
                    <p className="mt-0.5 uppercase tracking-wider">
                      {lang === "zh" ? "正在申请版权" : "Pending"}
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── Section 01: 已获得版权 ────────────────────────────── */}
        <section className="border-t border-paper/10">
          <Reveal>
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <div className="mb-3 inline-flex items-center gap-2 rounded-sm px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-widest" style={{ background: creator.accent + "20", color: creator.accent }}>
                    <span className="h-1.5 w-1.5 rounded-full" style={{ background: creator.accent }} />
                    {lang === "zh" ? "已获得版权" : "Licensed"}
                  </div>
                  <h2
                    className="display-tight mt-1 leading-none text-paper"
                    style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)", textTransform: "none" }}
                  >
                    {licensedWork.name[lang]}
                  </h2>
                </div>
                <p className="max-w-sm text-sm leading-relaxed text-paper/50">
                  {licensedWork.tagline[lang]}
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-px bg-paper/10 sm:grid-cols-3">
            {licensedImages.map((img, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <button
                  className="group relative block aspect-square w-full overflow-hidden bg-ink"
                  onClick={() => setLightbox(i)}
                  aria-label={`查看大图 ${i + 1}`}
                >
                  <Image
                    src={img}
                    alt={`${licensedWork.name[lang]} ${i + 1}`}
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
                </button>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Section 02: 正在申请版权 ─────────────────────────── */}
        <section className="border-t border-paper/10">
          <Reveal>
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <div className="mb-3 inline-flex items-center gap-2 rounded-sm border border-paper/20 px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-widest text-paper/40">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-paper/30" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-paper/40" />
                    </span>
                    {lang === "zh" ? "正在申请版权" : "Pending Copyright"}
                  </div>
                  <h2
                    className="display-tight mt-1 leading-none text-paper/60"
                    style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)", textTransform: "none" }}
                  >
                    {pendingWork.name[lang]}
                  </h2>
                </div>
                <p className="max-w-sm text-sm leading-relaxed text-paper/40">
                  {pendingWork.tagline[lang]}
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-px bg-paper/10 sm:grid-cols-3">
            {pendingImages.map((img, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <button
                  className="group relative block aspect-square w-full overflow-hidden bg-ink"
                  onClick={() => setLightbox(licensedImages.length + i)}
                  aria-label={`查看大图 ${i + 1}`}
                >
                  <Image
                    src={img}
                    alt={`${pendingWork.name[lang]} ${i + 1}`}
                    fill
                    sizes="(max-width: 640px) 50vw, 33vw"
                    className="object-cover opacity-50 transition-all duration-500 group-hover:scale-105 group-hover:opacity-70"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-ink/30" />
                  <span
                    className="absolute bottom-3 right-3 font-mono text-[0.6rem] font-bold tracking-widest text-paper/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </button>
              </Reveal>
            ))}
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
