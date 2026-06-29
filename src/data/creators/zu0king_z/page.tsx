"use client";

/**
 * Art Gallery · Portrait / 展厅·真人版
 * Museum-style layout for traditional tattoo and painting —
 * works shown at full size with multi-image support.
 */

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useLang } from "@/lib/i18n";
import { creator, works } from ".";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import type { StaticImageData } from "next/image";

import work01 from "./images/work_01.jpg";
import work02 from "./images/work_02.jpg";
import work03 from "./images/work_03.jpg";
import work04 from "./images/work_04.jpg";
import work05 from "./images/work_05.jpg";
import work06 from "./images/work_06.jpg";
import work07 from "./images/work_07.jpg";

// Group images by work
const workMedia: StaticImageData[][] = [
  [work01],
  [work02, work03],
  [work04, work05, work06],
  [work07],
];

// Flat list for lightbox index
const allImages = workMedia.flat();

export default function Zu0kingZPage({ id: _id }: { id: string }) {
  const { t, lang } = useLang();
  const c = t.creators;
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => i !== null ? Math.min(i + 1, allImages.length - 1) : null);
      if (e.key === "ArrowLeft")  setLightbox((i) => i !== null ? Math.max(i - 1, 0) : null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  // Cumulative index offset per work (for lightbox)
  const workOffset = workMedia.reduce<number[]>((acc, imgs, i) => {
    acc.push(i === 0 ? 0 : acc[i - 1]! + workMedia[i - 1]!.length);
    return acc;
  }, []);

  return (
    <>
      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          onClick={() => setLightbox(null)}
        >
          <Image
            src={allImages[lightbox]!}
            alt=""
            width={allImages[lightbox]!.width}
            height={allImages[lightbox]!.height}
            style={{ maxHeight: "90vh", maxWidth: "90vw", width: "auto", height: "auto" }}
            onClick={(e) => e.stopPropagation()}
          />
          {lightbox > 0 && (
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-3xl text-white/30 hover:text-white"
              onClick={(e) => { e.stopPropagation(); setLightbox((i) => i! - 1); }}
            >‹</button>
          )}
          {lightbox < allImages.length - 1 && (
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 font-mono text-3xl text-white/30 hover:text-white"
              onClick={(e) => { e.stopPropagation(); setLightbox((i) => i! + 1); }}
            >›</button>
          )}
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-xs text-white/30">
            {lightbox + 1} / {allImages.length}
          </p>
          <button
            className="absolute right-4 top-4 font-mono text-xs text-white/30 hover:text-white"
            onClick={() => setLightbox(null)}
          >✕ ESC</button>
        </div>
      )}

      <Nav subpage />
      <main className="bg-paper">

        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="relative grid min-h-screen grid-cols-1 md:grid-cols-[1fr_40%]">
          <div className="flex flex-col justify-between px-8 py-24 sm:px-14 md:py-32">
            <Link href="/partners" className="font-mono text-xs uppercase tracking-widest text-ink/30 transition-colors hover:text-ink">
              ← {c.backHome}
            </Link>
            <div>
              <div className="mb-8 h-1 w-16" style={{ background: creator.accent }} />
              <h1
                className="font-display leading-none text-ink"
                style={{ fontSize: "clamp(4.5rem, 14vw, 11rem)", textTransform: "none" }}
              >
                {creator.name[lang]}
              </h1>
              <p className="mt-4 font-mono text-sm uppercase tracking-[0.25em]" style={{ color: creator.accent }}>
                {creator.role[lang]}
              </p>
              <p className="mt-6 max-w-xs text-sm leading-relaxed text-ink/55 sm:text-base">
                {creator.bio[lang]}
              </p>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-1 font-mono text-xs text-ink/30">
                <span>抖音 {creator.handle}</span>
                <span>小红书 {creator.handle}</span>
              </div>
            </div>
            <div className="font-mono text-xs text-ink/25">
              {works.length} {c.worksCount} · {allImages.length} {lang === "zh" ? "张图" : "images"}
            </div>
          </div>

          <div className="relative min-h-[60vw] overflow-hidden md:min-h-full">
            {creator.avatar ? (
              <Image src={creator.avatar} alt={creator.name[lang]} fill sizes="(max-width: 768px) 100vw, 40vw" className="object-cover object-top" priority />
            ) : (
              <div className="flex h-full w-full items-center justify-center" style={{ background: creator.accent + "20" }}>
                <span className="font-brush text-[20vw] text-ink/10">{creator.glyph}</span>
              </div>
            )}
            <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/4 bg-gradient-to-r from-paper to-transparent md:block" />
          </div>
        </section>

        {/* ── Divider ──────────────────────────────────────────── */}
        <div className="flex items-center gap-6 px-8 py-10 sm:px-14">
          <div className="h-px flex-1 bg-ink/10" />
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.35em] text-ink/25">
            {lang === "zh" ? "作品展" : "Exhibition"}
          </p>
          <div className="h-px flex-1 bg-ink/10" />
        </div>

        {/* ── Gallery ──────────────────────────────────────────── */}
        <section className="pb-24">
          <div className="mx-auto max-w-5xl px-8 sm:px-14">
            <div className="space-y-28">
              {works.map((work, wi) => {
                const imgs = workMedia[wi]!;
                const offset = workOffset[wi]!;
                return (
                  <Reveal key={work.id} delay={wi * 0.04}>
                    <article>
                      {/* Caption */}
                      <div className="mb-6">
                        <p className="font-mono text-[0.6rem] uppercase tracking-[0.3em]" style={{ color: creator.accent }}>
                          {String(wi + 1).padStart(2, "0")} / {String(works.length).padStart(2, "0")}
                        </p>
                        <h2
                          className="mt-2 font-display leading-tight text-ink"
                          style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", textTransform: "none" }}
                        >
                          {work.name[lang]}
                        </h2>
                        <p className="mt-2 text-sm leading-relaxed text-ink/50">{work.tagline[lang]}</p>
                        <div className="mt-4">
                          {work.forSale ? (
                            <span className="font-display text-2xl" style={{ color: creator.accent }}>¥{work.price}</span>
                          ) : (
                            <span className="font-mono text-xs uppercase tracking-widest text-ink/25">{t.works.notForSale}</span>
                          )}
                        </div>
                      </div>

                      {/* Images */}
                      <div className={imgs.length === 1 ? "" : "grid gap-3 sm:grid-cols-2"}>
                        {imgs.map((img, ii) => (
                          <button
                            key={ii}
                            className="group relative block w-full cursor-zoom-in overflow-hidden"
                            onClick={() => setLightbox(offset + ii)}
                          >
                            <Image
                              src={img}
                              alt={`${work.name[lang]} ${ii + 1}`}
                              width={img.width}
                              height={img.height}
                              style={{ width: "100%", height: "auto", display: "block" }}
                              className="transition-transform duration-700 group-hover:scale-[1.02]"
                            />
                            <div
                              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-10"
                              style={{ background: creator.accent }}
                            />
                          </button>
                        ))}
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <div className="border-t py-14 text-center" style={{ borderColor: creator.accent + "30" }}>
          <span className="font-brush text-7xl" style={{ color: creator.accent + "40" }} aria-hidden>{creator.glyph}</span>
          <p className="mt-3 font-mono text-xs uppercase tracking-[0.35em] text-ink/30">{creator.name[lang]} · {creator.role[lang]}</p>
          <Link href="/partners" className="mt-6 inline-block border border-ink/15 px-6 py-2.5 font-mono text-xs uppercase tracking-wider text-ink/30 transition-colors hover:border-ink/40 hover:text-ink">
            {c.allCreators}
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
