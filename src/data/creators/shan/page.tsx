"use client";

/**
 * Art Gallery · Portrait / 展厅·真人版
 * Museum-style exhibition layout — large works on white walls with
 * minimal caption plaques. Magenta accent.
 */

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
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

const workImages = [work01, work02, work03, work04, work05, work06];

export default function ShanPage({ id: _id }: { id: string }) {
  const { t, lang } = useLang();
  const c = t.creators;
  const [lightbox, setLightbox] = useState<number | null>(null);

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

  return (
    <>
      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          onClick={() => setLightbox(null)}
        >
          <Image
            src={workImages[lightbox]!}
            alt={works[lightbox]?.name[lang] ?? ""}
            width={workImages[lightbox]!.width}
            height={workImages[lightbox]!.height}
            style={{ maxHeight: "90vh", maxWidth: "90vw", width: "auto", height: "auto" }}
            onClick={(e) => e.stopPropagation()}
          />
          {lightbox > 0 && (
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-3xl text-white/30 hover:text-white"
              onClick={(e) => { e.stopPropagation(); setLightbox((i) => i! - 1); }}
            >‹</button>
          )}
          {lightbox < workImages.length - 1 && (
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 font-mono text-3xl text-white/30 hover:text-white"
              onClick={(e) => { e.stopPropagation(); setLightbox((i) => i! + 1); }}
            >›</button>
          )}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
            <p className="font-display text-lg text-white/80">{works[lightbox]?.name[lang]}</p>
            <p className="mt-1 font-mono text-xs text-white/30">{lightbox + 1} / {workImages.length}</p>
          </div>
          <button
            className="absolute right-4 top-4 font-mono text-xs text-white/30 hover:text-white"
            onClick={() => setLightbox(null)}
          >✕ ESC</button>
        </div>
      )}

      <Nav subpage />
      <main className="bg-paper">

        {/* ── Hero — split: info left / portrait right ─────────── */}
        <section className="relative grid min-h-screen grid-cols-1 md:grid-cols-[1fr_40%]">

          {/* Info panel */}
          <div className="flex flex-col justify-between px-8 py-24 sm:px-14 md:py-32">
            <Link
              href="/partners"
              className="font-mono text-xs uppercase tracking-widest text-ink/30 transition-colors hover:text-ink"
            >
              ← {c.backHome}
            </Link>

            <div>
              {/* Accent rule */}
              <div className="mb-8 h-1 w-16" style={{ background: creator.accent }} />

              <h1
                className="font-display leading-none text-ink"
                style={{ fontSize: "clamp(4.5rem, 14vw, 11rem)", textTransform: "none" }}
              >
                {creator.name[lang]}
              </h1>

              <p
                className="mt-4 font-mono text-sm uppercase tracking-[0.25em]"
                style={{ color: creator.accent }}
              >
                {creator.role[lang]}
              </p>

              <p className="mt-6 max-w-xs text-sm leading-relaxed text-ink/55 sm:text-base">
                {creator.bio[lang]}
              </p>

              {/* Social handles */}
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-1 font-mono text-xs text-ink/30">
                <span>抖音 {creator.handle}</span>
                <span>小红书 {creator.handle}</span>
              </div>
            </div>

            <div className="font-mono text-xs text-ink/25">
              {works.length} {c.worksCount} · {works.filter(w => w.forSale).length} {c.shopTitle}
            </div>
          </div>

          {/* Portrait */}
          <div className="relative min-h-[60vw] overflow-hidden md:min-h-full">
            {creator.avatar ? (
              <Image
                src={creator.avatar}
                alt={creator.name[lang]}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-top"
                priority
              />
            ) : (
              <div
                className="flex h-full w-full items-center justify-center"
                style={{ background: creator.accent + "20" }}
              >
                <span className="font-brush text-[20vw] text-ink/10">{creator.glyph}</span>
              </div>
            )}
            {/* Fade left on desktop */}
            <div
              className="pointer-events-none absolute inset-y-0 left-0 w-1/4 hidden md:block"
              style={{ background: "linear-gradient(to right, var(--color-paper), transparent)" }}
            />
          </div>
        </section>

        {/* ── Exhibition divider ────────────────────────────────── */}
        <div className="flex items-center gap-6 px-8 py-10 sm:px-14">
          <div className="h-px flex-1 bg-ink/10" />
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.35em] text-ink/25">
            {lang === "zh" ? "作品展" : "Exhibition"}
          </p>
          <div className="h-px flex-1 bg-ink/10" />
        </div>

        {/* ── Gallery — museum wall layout ─────────────────────── */}
        <section className="pb-24">
          <div className="mx-auto max-w-5xl px-8 sm:px-14">
            <div className="space-y-28">
              {works.map((work, i) => {
                const img = workImages[i]!;
                const isLandscape = img.width >= img.height;
                return (
                  <Reveal key={work.id} delay={i * 0.04}>
                    <article
                      className={`flex gap-10 ${isLandscape ? "flex-col" : "flex-col sm:flex-row sm:items-start"}`}
                    >
                      {/* Work image */}
                      <button
                        className={`group relative block cursor-zoom-in overflow-hidden ${
                          isLandscape ? "w-full" : "w-full sm:w-3/5 shrink-0"
                        }`}
                        onClick={() => setLightbox(i)}
                        aria-label={`查看大图：${work.name[lang]}`}
                      >
                        <Image
                          src={img}
                          alt={work.name[lang]}
                          width={img.width}
                          height={img.height}
                          style={{
                            width: "100%",
                            height: "auto",
                            display: "block",
                          }}
                          className="transition-transform duration-700 group-hover:scale-[1.02]"
                        />
                        {/* Hover overlay */}
                        <div
                          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-10"
                          style={{ background: creator.accent }}
                        />
                        <span
                          className="absolute bottom-3 right-3 font-mono text-[0.6rem] uppercase tracking-widest text-white/0 transition-all duration-300 group-hover:text-white/60"
                        >
                          查看大图 ↗
                        </span>
                      </button>

                      {/* Caption plaque */}
                      <div className={isLandscape ? "pl-0" : "sm:pt-2"}>
                        {/* Work number */}
                        <p
                          className="font-mono text-[0.6rem] uppercase tracking-[0.3em]"
                          style={{ color: creator.accent }}
                        >
                          {String(i + 1).padStart(2, "0")} / {String(works.length).padStart(2, "0")}
                        </p>

                        {/* Title */}
                        <h2
                          className="mt-2 font-display leading-tight text-ink"
                          style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", textTransform: "none" }}
                        >
                          {work.name[lang]}
                        </h2>

                        {/* Tagline */}
                        <p className="mt-3 text-sm leading-relaxed text-ink/50 sm:text-base">
                          {work.tagline[lang]}
                        </p>

                        {/* Price / status */}
                        <div className="mt-5 flex items-center gap-4">
                          {work.forSale ? (
                            <>
                              <span
                                className="font-display text-2xl"
                                style={{ color: creator.accent }}
                              >
                                ¥{work.price}
                              </span>
                              <Link
                                href="/partners"
                                className="border px-4 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors hover:bg-ink hover:text-paper"
                                style={{ borderColor: creator.accent, color: creator.accent }}
                              >
                                {c.buy}
                              </Link>
                            </>
                          ) : (
                            <span className="font-mono text-xs uppercase tracking-widest text-ink/25">
                              {t.works.notForSale}
                            </span>
                          )}
                        </div>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Footer strip ─────────────────────────────────────── */}
        <div
          className="border-t py-14 text-center"
          style={{ borderColor: creator.accent + "30" }}
        >
          <span
            className="font-brush text-7xl"
            style={{ color: creator.accent + "40" }}
            aria-hidden
          >
            {creator.glyph}
          </span>
          <p className="mt-3 font-mono text-xs uppercase tracking-[0.35em] text-ink/30">
            {creator.name[lang]} · {creator.role[lang].split("·")[0].trim()}
          </p>
          <Link
            href="/partners"
            className="mt-6 inline-block border border-ink/15 px-6 py-2.5 font-mono text-xs uppercase tracking-wider text-ink/30 transition-colors hover:border-ink/40 hover:text-ink"
          >
            {c.allCreators}
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
