"use client";

/**
 * Cabinet of Curiosities / 奇物柜
 * Dark museum-style grid — ceramics and prints displayed as specimens,
 * amber accent, porthole avatar, per-work lightbox.
 */

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import type { StaticImageData } from "next/image";
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
import work14 from "./images/work_14.png";
import work15 from "./images/work_15.png";
import work16 from "./images/work_16.png";
import work17 from "./images/work_17.png";
import work18 from "./images/work_18.png";
import work19 from "./images/work_19.jpg";
import work20 from "./images/work_20.jpg";
import work21 from "./images/work_21.jpg";

// Each entry maps to works[i] — same order as index.ts
const workImagesMap: StaticImageData[][] = [
  [work01, work02, work03],
  [work04],
  [work05],
  [work06],
  [work07],
  [work08],
  [work09],
  [work10],
  [work11],
  [work12],
  [work13],
  [work14],
  [work15],
  [work16],
  [work17],
  [work18],
  [work19],
  [work20, work21],
];

const BG = "#0c0907";
const AMBER = "var(--color-orange)";
const FG = "rgba(245,235,215,0.88)";
const FG_DIM = "rgba(245,235,215,0.3)";
const FG_GHOST = "rgba(245,235,215,0.08)";

type LightboxState = { workIdx: number; imgIdx: number };

export default function HcuSPage({ id: _id }: { id: string }) {
  const { t, lang } = useLang();
  const c = t.creators;
  const [lb, setLb] = useState<LightboxState | null>(null);

  const openLb = (workIdx: number, imgIdx = 0) => setLb({ workIdx, imgIdx });
  const closeLb = () => setLb(null);

  const lbImages = lb ? workImagesMap[lb.workIdx]! : [];
  const lbWork   = lb ? works[lb.workIdx] : null;

  useEffect(() => {
    if (!lb) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLb();
      if (e.key === "ArrowRight" && lb.imgIdx < lbImages.length - 1)
        setLb({ ...lb, imgIdx: lb.imgIdx + 1 });
      if (e.key === "ArrowLeft" && lb.imgIdx > 0)
        setLb({ ...lb, imgIdx: lb.imgIdx - 1 });
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lb, lbImages.length]);

  // Section split: clay/mix (indices 0-8) vs. ip (indices 9-17)
  const ceramicWorks = works.slice(0, 9);
  const printWorks   = works.slice(9);

  return (
    <>
      {/* ── Lightbox ─────────────────────────────────────────── */}
      {lb && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(8,6,4,0.97)" }}
          onClick={closeLb}
        >
          <Image
            src={lbImages[lb.imgIdx]!}
            alt={lbWork?.name[lang] ?? ""}
            width={lbImages[lb.imgIdx]!.width}
            height={lbImages[lb.imgIdx]!.height}
            style={{ maxHeight: "90vh", maxWidth: "90vw", width: "auto", height: "auto" }}
            onClick={(e) => e.stopPropagation()}
          />
          {lb.imgIdx > 0 && (
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-3xl"
              style={{ color: FG_DIM }}
              onClick={(e) => { e.stopPropagation(); setLb({ ...lb, imgIdx: lb.imgIdx - 1 }); }}
            >‹</button>
          )}
          {lb.imgIdx < lbImages.length - 1 && (
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 font-mono text-3xl"
              style={{ color: FG_DIM }}
              onClick={(e) => { e.stopPropagation(); setLb({ ...lb, imgIdx: lb.imgIdx + 1 }); }}
            >›</button>
          )}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-center">
            <p className="font-display text-lg" style={{ color: FG, textTransform: "none" }}>
              {lbWork?.name[lang]}
            </p>
            {lbImages.length > 1 && (
              <p className="mt-1 font-mono text-xs" style={{ color: FG_DIM }}>
                {lb.imgIdx + 1} / {lbImages.length}
              </p>
            )}
          </div>
          <button
            className="absolute right-4 top-4 font-mono text-xs"
            style={{ color: FG_DIM }}
            onClick={closeLb}
          >✕ ESC</button>
        </div>
      )}

      <Nav subpage />
      <main style={{ background: BG, color: FG }}>

        {/* ── Hero ──────────────────────────────────────────── */}
        <section className="relative flex min-h-[70vh] flex-col items-center justify-center px-6 pb-16 pt-32 text-center">
          <Link
            href="/partners"
            className="absolute left-6 top-28 font-mono text-xs uppercase tracking-widest transition-opacity hover:opacity-60"
            style={{ color: FG_DIM }}
          >← {c.backHome}</Link>

          {/* Porthole avatar */}
          {creator.avatar && (
            <Reveal>
              <div
                className="relative mb-8 h-36 w-36 overflow-hidden rounded-full"
                style={{
                  border: `3px solid ${AMBER}`,
                  boxShadow: `0 0 0 6px rgba(217,119,6,0.12), 0 0 40px rgba(217,119,6,0.1)`,
                }}
              >
                <Image src={creator.avatar} alt={creator.name[lang]} fill className="object-cover" priority />
              </div>
            </Reveal>
          )}

          <div className="mb-5 h-px w-10" style={{ background: AMBER }} />

          <Reveal delay={0.05}>
            <h1
              className="font-display leading-none"
              style={{ fontSize: "clamp(4rem, 14vw, 9rem)", color: AMBER, textTransform: "none" }}
            >
              {creator.name[lang]}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.3em]" style={{ color: FG_DIM }}>
              {creator.role[lang]}
            </p>
            <p className="mx-auto mt-5 max-w-sm text-sm leading-relaxed sm:text-base" style={{ color: "rgba(245,235,215,0.45)" }}>
              {creator.bio[lang]}
            </p>
          </Reveal>
        </section>

        {/* ── Section: 陶艺 ─────────────────────────────────── */}
        <section className="border-t px-4 pb-16 pt-10 sm:px-8" style={{ borderColor: FG_GHOST }}>
          <div className="mb-8 flex items-center gap-4">
            <span className="h-px flex-1" style={{ background: FG_GHOST }} />
            <p className="font-mono text-[0.6rem] uppercase tracking-[0.35em]" style={{ color: AMBER }}>
              {lang === "zh" ? "陶艺 · 器物" : "Ceramics · Objects"}
            </p>
            <span className="h-px flex-1" style={{ background: FG_GHOST }} />
          </div>

          <div className="grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ceramicWorks.map((work, i) => {
              const imgs = workImagesMap[i]!;
              const thumb = imgs[0]!;
              return (
                <Reveal key={work.id} delay={i * 0.03}>
                  <button
                    className="group w-full cursor-zoom-in text-left"
                    onClick={() => openLb(i)}
                  >
                    <div className="overflow-hidden" style={{ border: `1px solid ${FG_GHOST}` }}>
                      <Image
                        src={thumb}
                        alt={work.name[lang]}
                        width={thumb.width}
                        height={thumb.height}
                        style={{ width: "100%", height: "auto", display: "block" }}
                        className="transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                    {/* Specimen tag */}
                    <div className="flex items-start justify-between gap-2 px-1 pt-2">
                      <div>
                        <p className="font-mono text-[0.55rem] uppercase tracking-[0.25em]" style={{ color: AMBER }}>
                          {String(i + 1).padStart(2, "0")} · {t.works.categories[work.category]}
                        </p>
                        <p className="mt-0.5 font-display text-base leading-tight" style={{ color: FG, textTransform: "none" }}>
                          {work.name[lang]}
                        </p>
                        {imgs.length > 1 && (
                          <p className="mt-0.5 font-mono text-[0.55rem]" style={{ color: FG_DIM }}>
                            {imgs.length} {lang === "zh" ? "张" : "views"}
                          </p>
                        )}
                      </div>
                      {work.forSale && (
                        <Link
                          href="/contact"
                          className="mt-1 shrink-0 border px-2 py-0.5 font-mono text-[0.55rem] uppercase tracking-wider transition-opacity hover:opacity-70"
                          style={{ borderColor: AMBER, color: AMBER }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          {c.buy}
                        </Link>
                      )}
                    </div>
                  </button>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* ── Section: 纸上 ─────────────────────────────────── */}
        <section className="border-t px-4 pb-20 pt-10 sm:px-8" style={{ borderColor: FG_GHOST }}>
          <div className="mb-8 flex items-center gap-4">
            <span className="h-px flex-1" style={{ background: FG_GHOST }} />
            <p className="font-mono text-[0.6rem] uppercase tracking-[0.35em]" style={{ color: AMBER }}>
              {lang === "zh" ? "纸上 · 版画 · 插画" : "Paper · Print · Illustration"}
            </p>
            <span className="h-px flex-1" style={{ background: FG_GHOST }} />
          </div>

          <div className="grid items-start gap-4 sm:grid-cols-2">
            {printWorks.map((work, j) => {
              const i = j + 9;
              const imgs = workImagesMap[i]!;
              const thumb = imgs[0]!;
              return (
                <Reveal key={work.id} delay={j * 0.03}>
                  <button
                    className="group w-full cursor-zoom-in text-left"
                    onClick={() => openLb(i)}
                  >
                    <div className="overflow-hidden" style={{ border: `1px solid ${FG_GHOST}` }}>
                      <Image
                        src={thumb}
                        alt={work.name[lang]}
                        width={thumb.width}
                        height={thumb.height}
                        style={{ width: "100%", height: "auto", display: "block" }}
                        className="transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    </div>
                    <div className="flex items-start justify-between gap-2 px-1 pt-2">
                      <div>
                        <p className="font-mono text-[0.55rem] uppercase tracking-[0.25em]" style={{ color: AMBER }}>
                          {String(i + 1).padStart(2, "0")} · {t.works.categories[work.category]}
                        </p>
                        <p className="mt-0.5 font-display text-base leading-tight" style={{ color: FG, textTransform: "none" }}>
                          {work.name[lang]}
                        </p>
                        <p className="mt-1 text-xs leading-relaxed" style={{ color: FG_DIM }}>
                          {work.tagline[lang]}
                        </p>
                        {imgs.length > 1 && (
                          <p className="mt-1 font-mono text-[0.55rem]" style={{ color: FG_DIM }}>
                            {imgs.length} {lang === "zh" ? "张" : "views"}
                          </p>
                        )}
                      </div>
                    </div>
                  </button>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* ── Closing ───────────────────────────────────────── */}
        <div className="border-t py-14 text-center" style={{ borderColor: FG_GHOST }}>
          <span className="font-brush text-7xl" style={{ color: AMBER, opacity: 0.25 }} aria-hidden>
            {creator.glyph}
          </span>
          <p className="mt-3 font-mono text-xs uppercase tracking-[0.3em]" style={{ color: FG_DIM }}>
            {creator.name[lang]} · {creator.role[lang]}
          </p>
          <Link
            href="/partners"
            className="mt-6 inline-block border px-6 py-2.5 font-mono text-xs uppercase tracking-wider transition-opacity hover:opacity-60"
            style={{ borderColor: FG_GHOST, color: FG_DIM }}
          >
            {c.allCreators}
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
