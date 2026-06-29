"use client";

/**
 * Editorial · Portrait / 杂志双栏 · 真人版
 * Based on akuang's Editorial template — left panel replaced with real photo.
 */

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useLang } from "@/lib/i18n";
import { creator, works } from ".";
import { WorkArt } from "@/components/WorkArt";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

// ── 图库：3D打印 (1) ──────────────────────────────────────────────────────────
import print01 from "./images/3d打印/01.jpg";
const printImages = [print01];

// ── 图库：BDSM (31) ──────────────────────────────────────────────────────────
import bdsm01 from "./images/bdsm/01.jpg";
import bdsm02 from "./images/bdsm/02.jpg";
import bdsm03 from "./images/bdsm/03.jpg";
import bdsm04 from "./images/bdsm/04.jpg";
import bdsm05 from "./images/bdsm/05.jpg";
import bdsm06 from "./images/bdsm/06.jpg";
import bdsm07 from "./images/bdsm/07.jpg";
import bdsm08 from "./images/bdsm/08.jpg";
import bdsm09 from "./images/bdsm/09.jpg";
import bdsm10 from "./images/bdsm/10.jpg";
import bdsm11 from "./images/bdsm/11.jpg";
import bdsm12 from "./images/bdsm/12.jpg";
import bdsm13 from "./images/bdsm/13.jpg";
import bdsm14 from "./images/bdsm/14.jpg";
import bdsm15 from "./images/bdsm/15.jpg";
import bdsm16 from "./images/bdsm/16.jpg";
import bdsm17 from "./images/bdsm/17.jpg";
import bdsm18 from "./images/bdsm/18.jpg";
import bdsm19 from "./images/bdsm/19.jpg";
import bdsm20 from "./images/bdsm/20.jpg";
import bdsm21 from "./images/bdsm/21.jpg";
import bdsm22 from "./images/bdsm/22.jpg";
import bdsm23 from "./images/bdsm/23.jpg";
import bdsm24 from "./images/bdsm/24.jpg";
import bdsm25 from "./images/bdsm/25.jpg";
import bdsm26 from "./images/bdsm/26.jpg";
import bdsm27 from "./images/bdsm/27.jpg";
import bdsm28 from "./images/bdsm/28.jpg";
import bdsm29 from "./images/bdsm/29.jpg";
import bdsm30 from "./images/bdsm/30.jpg";
import bdsm31 from "./images/bdsm/31.jpg";
import bdsm32 from "./images/bdsm/32.jpg";
import bdsm33 from "./images/bdsm/33.jpg";
import bdsm34 from "./images/bdsm/34.jpg";
import bdsm35 from "./images/bdsm/35.jpg";
import bdsm36 from "./images/bdsm/36.jpg";
import bdsm37 from "./images/bdsm/37.jpg";
import bdsm38 from "./images/bdsm/38.jpg";
import bdsm39 from "./images/bdsm/39.jpg";
import bdsm40 from "./images/bdsm/40.jpg";
import bdsm41 from "./images/bdsm/41.jpg";
import bdsm42 from "./images/bdsm/42.jpg";
import bdsm43 from "./images/bdsm/43.jpg";
import bdsm44 from "./images/bdsm/44.jpg";
import bdsm45 from "./images/bdsm/45.jpg";
import bdsm46 from "./images/bdsm/46.jpg";
import bdsm47 from "./images/bdsm/47.jpg";
import bdsm48 from "./images/bdsm/48.jpg";
import bdsm49 from "./images/bdsm/49.jpg";
import bdsm50 from "./images/bdsm/50.jpg";
import bdsm51 from "./images/bdsm/51.jpg";
const bdsmImages = [
  bdsm01, bdsm02, bdsm03, bdsm04, bdsm05, bdsm06, bdsm07, bdsm08,
  bdsm09, bdsm10, bdsm11, bdsm12, bdsm13, bdsm14, bdsm15, bdsm16,
  bdsm17, bdsm18, bdsm19, bdsm20, bdsm21, bdsm22, bdsm23, bdsm24,
  bdsm25, bdsm26, bdsm27, bdsm28, bdsm29, bdsm30, bdsm31,
  bdsm32, bdsm33, bdsm34, bdsm35, bdsm36, bdsm37, bdsm38, bdsm39,
  bdsm40, bdsm41, bdsm42, bdsm43, bdsm44, bdsm45, bdsm46, bdsm47,
  bdsm48, bdsm49, bdsm50, bdsm51,
];

// ── 图库：外文书法 (21) ───────────────────────────────────────────────────────
import calli01 from "./images/外文书法/01.jpg";
import calli02 from "./images/外文书法/02.jpg";
import calli03 from "./images/外文书法/03.jpg";
import calli04 from "./images/外文书法/04.jpg";
import calli05 from "./images/外文书法/05.jpg";
import calli06 from "./images/外文书法/06.jpg";
import calli07 from "./images/外文书法/07.jpg";
import calli08 from "./images/外文书法/08.jpg";
import calli09 from "./images/外文书法/09.jpg";
import calli10 from "./images/外文书法/10.jpg";
import calli11 from "./images/外文书法/11.jpg";
import calli12 from "./images/外文书法/12.jpg";
import calli13 from "./images/外文书法/13.jpg";
import calli14 from "./images/外文书法/14.jpg";
import calli15 from "./images/外文书法/15.jpg";
import calli16 from "./images/外文书法/16.jpg";
import calli17 from "./images/外文书法/17.jpg";
import calli18 from "./images/外文书法/18.jpg";
import calli19 from "./images/外文书法/19.jpg";
import calli20 from "./images/外文书法/20.jpg";
import calli21 from "./images/外文书法/21.jpg";
const calliImages = [
  calli01, calli02, calli03, calli04, calli05, calli06, calli07,
  calli08, calli09, calli10, calli11, calli12, calli13, calli14,
  calli15, calli16, calli17, calli18, calli19, calli20, calli21,
];

// ── 图库：手工皮具 (10) ───────────────────────────────────────────────────────
import leather01 from "./images/手工皮具/01.jpg";
import leather02 from "./images/手工皮具/02.jpg";
import leather03 from "./images/手工皮具/03.jpg";
import leather04 from "./images/手工皮具/04.jpg";
import leather05 from "./images/手工皮具/05.jpg";
import leather06 from "./images/手工皮具/06.jpg";
import leather07 from "./images/手工皮具/07.jpg";
import leather08 from "./images/手工皮具/08.jpg";
import leather09 from "./images/手工皮具/09.jpg";
import leather10 from "./images/手工皮具/10.jpg";
const leatherImages = [
  leather01, leather02, leather03, leather04, leather05,
  leather06, leather07, leather08, leather09, leather10,
];

// ── 图库：珠宝首饰 (13) ───────────────────────────────────────────────────────
import jewelry01 from "./images/珠宝首饰/01.jpg";
import jewelry02 from "./images/珠宝首饰/02.jpg";
import jewelry03 from "./images/珠宝首饰/03.jpg";
import jewelry04 from "./images/珠宝首饰/04.jpg";
import jewelry05 from "./images/珠宝首饰/05.jpg";
import jewelry06 from "./images/珠宝首饰/06.jpg";
import jewelry07 from "./images/珠宝首饰/07.jpg";
import jewelry08 from "./images/珠宝首饰/08.jpg";
import jewelry09 from "./images/珠宝首饰/09.jpg";
import jewelry10 from "./images/珠宝首饰/10.jpg";
import jewelry11 from "./images/珠宝首饰/11.jpg";
import jewelry12 from "./images/珠宝首饰/12.jpg";
import jewelry13 from "./images/珠宝首饰/13.jpg";
const jewelryImages = [
  jewelry01, jewelry02, jewelry03, jewelry04, jewelry05, jewelry06, jewelry07,
  jewelry08, jewelry09, jewelry10, jewelry11, jewelry12, jewelry13,
];

// ── 图库：西装 (3) ────────────────────────────────────────────────────────────
import suit01 from "./images/西装/01.png";
import suit02 from "./images/西装/02.png";
import suit03 from "./images/西装/03.png";
const suitImages = [suit01, suit02, suit03];

// ── 所有分区 ──────────────────────────────────────────────────────────────────
const GALLERY = [
  { key: "3d打印",  label: { zh: "3D 打印", en: "3D Print" },    images: printImages  },
  { key: "bdsm",   label: { zh: "BDSM",     en: "BDSM" },        images: bdsmImages   }, // 51
  { key: "calli",  label: { zh: "外文书法", en: "Calligraphy" },  images: calliImages  },
  { key: "leather",label: { zh: "手工皮具", en: "Leather Goods" },images: leatherImages},
  { key: "jewelry",label: { zh: "珠宝首饰", en: "Jewelry" },      images: jewelryImages},
  { key: "suit",   label: { zh: "西装",     en: "Tailoring" },    images: suitImages   },
];

export default function EditorialPortraitPage({ id: _id }: { id: string }) {
  const { t, lang } = useLang();
  const c = t.creators;
  const forSale = works.filter((w) => w.forSale);

  // lightbox: { catKey, index } | null
  const [lightbox, setLightbox] = useState<{ catKey: string; idx: number } | null>(null);

  const lightboxImages = lightbox
    ? GALLERY.find((g) => g.key === lightbox.catKey)?.images ?? []
    : [];
  const lightboxImg = lightbox ? lightboxImages[lightbox.idx] : null;

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight")
        setLightbox((lb) => lb && { ...lb, idx: Math.min(lb.idx + 1, lightboxImages.length - 1) });
      if (e.key === "ArrowLeft")
        setLightbox((lb) => lb && { ...lb, idx: Math.max(lb.idx - 1, 0) });
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, lightboxImages.length]);

  return (
    <>
      {/* ── Lightbox ────────────────────────────────────────── */}
      {lightbox && lightboxImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 p-4"
          onClick={() => setLightbox(null)}
        >
          <Image
            src={lightboxImg}
            alt=""
            width={lightboxImg.width}
            height={lightboxImg.height}
            style={{ maxHeight: "90vh", maxWidth: "90vw", width: "auto", height: "auto" }}
            onClick={(e) => e.stopPropagation()}
          />
          {/* Prev / Next */}
          {lightbox.idx > 0 && (
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-2xl text-white/40 hover:text-white"
              onClick={(e) => { e.stopPropagation(); setLightbox((lb) => lb && { ...lb, idx: lb.idx - 1 }); }}
            >‹</button>
          )}
          {lightbox.idx < lightboxImages.length - 1 && (
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 font-mono text-2xl text-white/40 hover:text-white"
              onClick={(e) => { e.stopPropagation(); setLightbox((lb) => lb && { ...lb, idx: lb.idx + 1 }); }}
            >›</button>
          )}
          <button
            className="absolute right-4 top-4 font-mono text-sm text-white/40 hover:text-white"
            onClick={() => setLightbox(null)}
          >✕</button>
          <p className="absolute bottom-4 font-mono text-xs text-white/30">
            {lightbox.idx + 1} / {lightboxImages.length}
          </p>
        </div>
      )}

      <Nav subpage />
      <main>
        {/* ── Split hero ─────────────────────────────────────── */}
        <section className="grid min-h-screen grid-cols-1 md:grid-cols-2">
          {/* Photo half */}
          <div
            className="relative min-h-[70vw] overflow-hidden md:min-h-screen"
            style={{ background: creator.accent }}
          >
            <span
              className="pointer-events-none absolute inset-0 flex items-center justify-center select-none font-brush leading-none text-ink/10"
              style={{ fontSize: "clamp(180px, 38vw, 520px)" }}
              aria-hidden
            >
              {creator.glyph}
            </span>

            {creator.avatar ? (
              <Image
                src={creator.avatar}
                alt={creator.name[lang]}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top"
                priority
              />
            ) : (
              <span
                className="relative flex h-full items-center justify-center font-brush leading-none text-ink"
                style={{ fontSize: "clamp(90px, 20vw, 280px)" }}
              >
                {creator.glyph}
              </span>
            )}

            <div
              className="pointer-events-none absolute bottom-0 left-0 right-0 h-1/3"
              style={{ background: `linear-gradient(to top, ${creator.accent}cc, transparent)` }}
            />
          </div>

          {/* Info half */}
          <div className="flex flex-col justify-center bg-paper px-8 py-16 md:px-16 md:pt-24">
            <Link
              href="/partners"
              className="kicker mb-10 inline-block text-ink/40 transition-colors hover:text-ink"
            >
              ← {c.backHome}
            </Link>

            <h1 className="font-display text-6xl leading-none md:text-[5.5rem]">
              {creator.name[lang]}
            </h1>
            <p className="mt-3 font-mono text-xs tracking-[0.3em] text-ink/50">
              {creator.handle}
            </p>

            <div className="mt-8 border-l-4 pl-5" style={{ borderColor: creator.accent }}>
              <p className="kicker mb-2 text-ink/40">{creator.role[lang]}</p>
              <p className="text-base leading-relaxed text-ink/70 sm:text-lg">
                {creator.bio[lang]}
              </p>
            </div>

            <div className="mt-10 flex gap-5 font-mono text-xs text-ink/35">
              <span>{works.length} {c.worksCount}</span>
              <span>·</span>
              <span>{forSale.length} {c.shopTitle}</span>
            </div>
          </div>
        </section>

        {/* ── Works: editorial numbered rows ─────────────────── */}
        <section className="bg-paper py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Reveal>
              <p className="kicker mb-10 text-ink/40">{c.worksTitle}</p>
            </Reveal>
            <div className="divide-y-2 divide-ink border-y-2 border-ink">
              {works.map((work, i) => (
                <Reveal key={work.id} delay={i * 0.06}>
                  <div className="group grid grid-cols-[3rem_1fr_5rem] items-center gap-6 py-6 transition-colors hover:bg-ink hover:px-4 hover:text-paper sm:grid-cols-[5rem_1fr_7rem] sm:gap-8">
                    <span className="font-display text-4xl text-ink/15 group-hover:text-paper/15 sm:text-6xl">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="kicker text-magenta group-hover:text-acid">
                        {t.works.categories[work.category]}
                      </p>
                      <h3 className="font-display mt-1 text-xl uppercase leading-tight sm:text-2xl">
                        {work.name[lang]}
                      </h3>
                      <p className="mt-1 text-xs text-ink/55 group-hover:text-paper/55 sm:text-sm">
                        {work.tagline[lang]}
                      </p>
                    </div>
                    <div className="overflow-hidden border-2 border-ink group-hover:border-paper/30">
                      <WorkArt work={work} />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Photo Gallery ───────────────────────────────────── */}
        <section className="bg-ink py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Reveal>
              <p className="kicker mb-4" style={{ color: creator.accent }}>
                {lang === "zh" ? "作品图库" : "Photo Archive"}
              </p>
              <p className="mb-16 font-mono text-xs text-paper/30">
                {GALLERY.reduce((n, g) => n + g.images.length, 0)}{" "}
                {lang === "zh" ? "张 · 6 个分区" : "images · 6 categories"}
              </p>
            </Reveal>

            <div className="flex flex-col gap-20">
              {GALLERY.map((cat) => (
                <div key={cat.key}>
                  <Reveal>
                    <div className="mb-6 flex items-baseline gap-4 border-b border-paper/10 pb-4">
                      <h2
                        className="font-display text-2xl uppercase text-paper sm:text-3xl"
                        style={{ textTransform: "none" }}
                      >
                        {cat.label[lang]}
                      </h2>
                      <span className="font-mono text-xs text-paper/30">{cat.images.length}</span>
                    </div>
                  </Reveal>

                  <div className="grid grid-cols-2 gap-px bg-paper/10 sm:grid-cols-3 lg:grid-cols-4">
                    {cat.images.map((img, i) => (
                      <Reveal key={i} delay={i * 0.03}>
                        <button
                          className="group relative block aspect-square w-full cursor-zoom-in overflow-hidden bg-ink"
                          onClick={() => setLightbox({ catKey: cat.key, idx: i })}
                          aria-label={`${cat.label[lang]} ${i + 1}`}
                        >
                          <Image
                            src={img}
                            alt={`${cat.label[lang]} ${i + 1}`}
                            fill
                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div
                            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-20"
                            style={{ background: creator.accent }}
                          />
                          <span
                            className="absolute bottom-2 right-2 font-mono text-[0.55rem] font-bold tracking-widest opacity-0 transition-opacity group-hover:opacity-100"
                            style={{ color: creator.accent }}
                          >
                            {String(i + 1).padStart(2, "0")}
                          </span>
                        </button>
                      </Reveal>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Shop ───────────────────────────────────────────── */}
        {forSale.length > 0 && (
          <section className="py-20 sm:py-28" style={{ background: creator.accent }}>
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
              <Reveal>
                <h2 className="display-tight text-5xl text-ink sm:text-7xl">{c.shopTitle}</h2>
              </Reveal>
              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {forSale.map((work, i) => (
                  <Reveal key={work.id} delay={i * 0.08}>
                    <div className="border-2 border-ink bg-paper shadow-hard">
                      <WorkArt work={work} />
                      <div className="p-5">
                        <h3 className="font-display text-xl uppercase">{work.name[lang]}</h3>
                        <p className="mt-1 text-sm text-ink/60">{work.tagline[lang]}</p>
                        <div className="mt-4 flex items-center justify-between">
                          <span className="font-display text-2xl">
                            {work.priceOnInquiry ? (
                              <span className="font-mono text-sm text-ink/50">价格详询</span>
                            ) : (
                              `¥${work.price}`
                            )}
                          </span>
                          <Link
                            href="/contact"
                            className="bg-ink px-4 py-2 font-mono text-xs font-bold uppercase text-acid transition-transform hover:-translate-y-0.5"
                          >
                            {c.buy}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
