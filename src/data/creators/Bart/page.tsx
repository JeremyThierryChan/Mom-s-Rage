"use client";

/**
 * Candy Store · Portrait / 糖果屋·真人版
 * Acid-yellow accent, polaroid-style photo grid, bold headline.
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
import work05 from "./images/work_05.png";
import work06 from "./images/work_06.jpg";
import work07 from "./images/work_07.jpg";
import work08 from "./images/work_08.jpg";
import work09 from "./images/work_09.jpg";

import outfit01 from "./images/outfit_01.jpg";
import outfit02 from "./images/outfit_02.png";
import outfit03 from "./images/outfit_03.jpg";
import outfit04 from "./images/outfit_04.jpg";
import outfit05 from "./images/outfit_05.jpg";
import outfit06 from "./images/outfit_06.jpg";
import outfit07 from "./images/outfit_07.jpg";
import outfit08 from "./images/outfit_08.jpg";
import outfit09 from "./images/outfit_09.jpg";

const workImages = [work01, work02, work03, work04, work05, work06, work07, work08, work09];
const outfitImages = [outfit01, outfit02, outfit03, outfit04, outfit05, outfit06, outfit07, outfit08, outfit09];

// Slight tilts for polaroid feel
const TILTS = [-1.5, 1.2, -0.8, 2, -1.8, 0.9, -2.2, 1.5, -0.6];

export default function BartPage({ id: _id }: { id: string }) {
  const { t, lang } = useLang();
  const c = t.creators;
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [outfitLightbox, setOutfitLightbox] = useState<number | null>(null);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => i !== null ? Math.min(i + 1, workImages.length - 1) : null);
      if (e.key === "ArrowLeft")  setLightbox((i) => i !== null ? Math.max(i - 1, 0) : null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  useEffect(() => {
    if (outfitLightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOutfitLightbox(null);
      if (e.key === "ArrowRight") setOutfitLightbox((i) => i !== null ? Math.min(i + 1, outfitImages.length - 1) : null);
      if (e.key === "ArrowLeft")  setOutfitLightbox((i) => i !== null ? Math.max(i - 1, 0) : null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [outfitLightbox]);

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
            onClick={(e) => e.stopPropagation()}
          />
          {lightbox > 0 && (
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-3xl text-white/40 hover:text-white"
              onClick={(e) => { e.stopPropagation(); setLightbox((i) => i! - 1); }}
            >‹</button>
          )}
          {lightbox < workImages.length - 1 && (
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 font-mono text-3xl text-white/40 hover:text-white"
              onClick={(e) => { e.stopPropagation(); setLightbox((i) => i! + 1); }}
            >›</button>
          )}
          <button
            className="absolute right-4 top-4 font-mono text-sm text-white/40 hover:text-white"
            onClick={() => setLightbox(null)}
          >✕</button>
          <p className="absolute bottom-4 font-mono text-xs text-white/30">
            {lightbox + 1} / {workImages.length}
          </p>
        </div>
      )}

      {/* Outfit lightbox */}
      {outfitLightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 p-4"
          onClick={() => setOutfitLightbox(null)}
        >
          <Image
            src={outfitImages[outfitLightbox]!}
            alt={`穿搭 ${outfitLightbox + 1}`}
            width={outfitImages[outfitLightbox]!.width}
            height={outfitImages[outfitLightbox]!.height}
            style={{ maxHeight: "90vh", maxWidth: "90vw", width: "auto", height: "auto" }}
            onClick={(e) => e.stopPropagation()}
          />
          {outfitLightbox > 0 && (
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-3xl text-white/40 hover:text-white"
              onClick={(e) => { e.stopPropagation(); setOutfitLightbox((i) => i! - 1); }}
            >‹</button>
          )}
          {outfitLightbox < outfitImages.length - 1 && (
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 font-mono text-3xl text-white/40 hover:text-white"
              onClick={(e) => { e.stopPropagation(); setOutfitLightbox((i) => i! + 1); }}
            >›</button>
          )}
          <button
            className="absolute right-4 top-4 font-mono text-sm text-white/40 hover:text-white"
            onClick={() => setOutfitLightbox(null)}
          >✕</button>
          <p className="absolute bottom-4 font-mono text-xs text-white/30">
            {outfitLightbox + 1} / {outfitImages.length}
          </p>
        </div>
      )}

      <Nav subpage />
      <main>

        {/* ── Hero ─────────────────────────────────────────────── */}
        <section
          className="relative min-h-screen overflow-hidden"
          style={{ background: creator.accent }}
        >
          {/* Back link */}
          <div className="relative z-20 flex justify-between px-6 pt-24 pb-6 font-mono text-xs uppercase tracking-widest text-ink/50 sm:px-10">
            <Link href="/partners" className="transition-colors hover:text-ink">
              ← {c.backHome}
            </Link>
            <span>{creator.handle}</span>
          </div>

          {/* Portrait photo — fills right half on desktop */}
          <div className="relative z-10 flex min-h-[70vh] flex-col items-center justify-end lg:flex-row lg:items-stretch">
            {/* Text block */}
            <div className="flex flex-1 flex-col justify-end px-6 pb-12 sm:px-10 lg:pb-20">
              <Reveal>
                <p className="font-mono text-xs uppercase tracking-[0.35em] text-ink/60">
                  {creator.role[lang]}
                </p>
                <h1
                  className="display-tight mt-2 leading-none text-ink"
                  style={{ fontSize: "clamp(5rem, 18vw, 14rem)", textTransform: "none" }}
                >
                  {creator.name[lang]}
                </h1>
                <p className="mt-6 max-w-sm text-base text-ink/70 sm:text-lg">
                  {creator.bio[lang]}
                </p>
                <p className="mt-4 font-mono text-xs text-ink/40">
                  {workImages.length} {c.worksCount}
                </p>
              </Reveal>
            </div>

            {/* Avatar */}
            {creator.avatar && (
              <div className="relative w-full lg:w-[45%] lg:shrink-0" style={{ minHeight: 400 }}>
                <Image
                  src={creator.avatar}
                  alt={creator.name[lang]}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-top"
                  priority
                />
                {/* Fade into acid at the bottom */}
                <div
                  className="pointer-events-none absolute bottom-0 left-0 right-0 h-1/3"
                  style={{ background: `linear-gradient(to top, ${creator.accent}, transparent)` }}
                />
              </div>
            )}
          </div>

          {/* Stripe decoration bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-3 bg-ink" />
        </section>

        {/* ── Photo Grid — polaroid style ───────────────────────── */}
        <section className="bg-paper py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Reveal>
              <div className="mb-12 flex items-baseline justify-between border-b-4 border-ink pb-4">
                <h2 className="font-display text-4xl uppercase sm:text-5xl">{c.worksTitle}</h2>
                <span className="font-mono text-xs text-ink/40">{workImages.length} photos</span>
              </div>
            </Reveal>

            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-3 lg:gap-8">
              {workImages.map((img, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <button
                    className="group w-full cursor-zoom-in"
                    onClick={() => setLightbox(i)}
                    aria-label={`查看大图 ${i + 1}`}
                    style={{ transform: `rotate(${TILTS[i]}deg)` }}
                  >
                    {/* Polaroid card */}
                    <div
                      className="bg-white p-2 pb-8 shadow-md transition-all duration-300 group-hover:scale-105 group-hover:rotate-0 group-hover:shadow-xl"
                      style={{ boxShadow: `2px 2px 0 var(--color-ink)` }}
                    >
                      <div className="relative aspect-square overflow-hidden bg-ink/5">
                        <Image
                          src={img}
                          alt={`作品 ${i + 1}`}
                          fill
                          sizes="(max-width: 640px) 45vw, 30vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      {/* Polaroid label */}
                      <p
                        className="mt-2 text-center font-mono text-[0.6rem] font-bold uppercase tracking-widest text-ink/30 group-hover:text-ink"
                        style={{ transition: "color 0.2s" }}
                      >
                        {creator.handle} — {String(i + 1).padStart(2, "0")}
                      </p>
                    </div>
                  </button>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Outfit showcase — masonry style ───────────────────── */}
        <section className="bg-ink py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Reveal>
              <div className="mb-12 flex items-baseline justify-between border-b-4 border-paper/20 pb-4">
                <h2 className="font-display text-4xl uppercase text-paper sm:text-5xl">
                  {c.outfitTitle}
                </h2>
                <span className="font-mono text-xs text-paper/40">{outfitImages.length} photos</span>
              </div>
            </Reveal>

            <div className="columns-2 gap-6 sm:columns-3 sm:gap-8">
              {outfitImages.map((img, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <button
                    className="group mb-6 block w-full cursor-zoom-in break-inside-avoid sm:mb-8"
                    onClick={() => setOutfitLightbox(i)}
                    aria-label={`查看穿搭大图 ${i + 1}`}
                  >
                    <div className="relative overflow-hidden">
                      <Image
                        src={img}
                        alt={`穿搭 ${i + 1}`}
                        width={img.width}
                        height={img.height}
                        sizes="(max-width: 640px) 45vw, 30vw"
                        style={{ width: "100%", height: "auto", display: "block" }}
                        className="transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                  </button>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Footer strip ─────────────────────────────────────── */}
        <div className="bg-ink py-10 text-center">
          <span
            className="font-display text-6xl font-black"
            style={{ color: creator.accent }}
          >
            {creator.name[lang]}
          </span>
          <p className="mt-2 font-mono text-xs tracking-widest text-paper/30">{creator.handle}</p>
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
