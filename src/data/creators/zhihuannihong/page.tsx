"use client";

/**
 * Neon Archive / 致幻档案
 * Dark full-bleed editorial layout for a conceptual fashion designer.
 * Each work displayed as a runway spread with electric accent typography.
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
import work07 from "./images/work_07.jpg";

const workImages = [work01, work02, work03, work04, work05, work06, work07];

const BG = "#080808";
const FG = "rgba(245,240,232,0.9)";
const FG_DIM = "rgba(245,240,232,0.3)";
const FG_GHOST = "rgba(245,240,232,0.1)";

export default function ZhihuannihongPage({ id: _id }: { id: string }) {
  const { t, lang } = useLang();
  const c = t.creators;
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight")
        setLightbox((i) => (i !== null ? Math.min(i + 1, workImages.length - 1) : null));
      if (e.key === "ArrowLeft")
        setLightbox((i) => (i !== null ? Math.max(i - 1, 0) : null));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  return (
    <>
      {/* ── Lightbox ───────────────────────────────────────────── */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.97)" }}
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
              className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-3xl transition-colors"
              style={{ color: FG_DIM }}
              onMouseEnter={(e) => (e.currentTarget.style.color = FG)}
              onMouseLeave={(e) => (e.currentTarget.style.color = FG_DIM)}
              onClick={(e) => { e.stopPropagation(); setLightbox((i) => i! - 1); }}
            >‹</button>
          )}
          {lightbox < workImages.length - 1 && (
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 font-mono text-3xl transition-colors"
              style={{ color: FG_DIM }}
              onMouseEnter={(e) => (e.currentTarget.style.color = FG)}
              onMouseLeave={(e) => (e.currentTarget.style.color = FG_DIM)}
              onClick={(e) => { e.stopPropagation(); setLightbox((i) => i! + 1); }}
            >›</button>
          )}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
            <p className="font-display text-lg" style={{ color: FG, textTransform: "none" }}>
              {works[lightbox]?.name[lang]}
            </p>
            <p className="mt-1 font-mono text-xs" style={{ color: FG_DIM }}>
              {lightbox + 1} / {workImages.length}
            </p>
          </div>
          <button
            className="absolute right-4 top-4 font-mono text-xs transition-colors"
            style={{ color: FG_DIM }}
            onMouseEnter={(e) => (e.currentTarget.style.color = FG)}
            onMouseLeave={(e) => (e.currentTarget.style.color = FG_DIM)}
            onClick={() => setLightbox(null)}
          >✕ ESC</button>
        </div>
      )}

      <Nav subpage />
      <main style={{ background: BG, color: FG }}>

        {/* ── Hero ───────────────────────────────────────────────── */}
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pb-24 pt-32 text-center">

          {/* Back link */}
          <Link
            href="/partners"
            className="absolute left-6 top-28 font-mono text-xs uppercase tracking-widest transition-colors"
            style={{ color: FG_DIM }}
            onMouseEnter={(e) => (e.currentTarget.style.color = FG)}
            onMouseLeave={(e) => (e.currentTarget.style.color = FG_DIM)}
          >
            ← {c.backHome}
          </Link>

          {/* Avatar */}
          {creator.avatar && (
            <Reveal>
              <div
                className="relative mb-10 h-44 w-44 overflow-hidden rounded-full"
                style={{ border: `1.5px solid var(--color-electric)`, boxShadow: "0 0 32px rgba(0,255,240,0.12)" }}
              >
                <Image
                  src={creator.avatar}
                  alt={creator.name[lang]}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </Reveal>
          )}

          {/* Accent rule */}
          <div className="mb-6 h-px w-12" style={{ background: "var(--color-electric)" }} />

          {/* Name */}
          <Reveal delay={0.05}>
            <h1
              className="font-display leading-none"
              style={{
                fontSize: "clamp(3.5rem, 13vw, 9rem)",
                color: "var(--color-electric)",
                textTransform: "none",
                textShadow: "0 0 40px rgba(0,255,240,0.25)",
              }}
            >
              {creator.name[lang]}
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-5 font-mono text-xs uppercase tracking-[0.3em]" style={{ color: FG_DIM }}>
              {creator.role[lang]}
            </p>
            <p className="mx-auto mt-6 max-w-sm text-sm leading-relaxed sm:text-base" style={{ color: "rgba(245,240,232,0.45)" }}>
              {creator.bio[lang]}
            </p>
            <p className="mt-5 font-mono text-xs" style={{ color: FG_GHOST }}>{creator.handle}</p>
          </Reveal>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2">
            <div
              className="h-12 w-px"
              style={{ background: "linear-gradient(to bottom, var(--color-electric), transparent)" }}
            />
            <span className="font-mono text-[0.5rem] uppercase tracking-widest" style={{ color: FG_GHOST }}>
              scroll
            </span>
          </div>
        </section>

        {/* ── Works — editorial archive ───────────────────────────── */}
        <section>
          {works.map((work, i) => {
            const img = workImages[i]!;
            const isPortrait = img.height > img.width * 1.1;
            return (
              <Reveal key={work.id} delay={0}>
                <article
                  className="group cursor-zoom-in border-t"
                  style={{ borderColor: FG_GHOST }}
                  onClick={() => setLightbox(i)}
                >
                  {/* Work header */}
                  <div className="flex items-center justify-between px-6 py-5 sm:px-10">
                    <div className="flex items-center gap-4">
                      <span
                        className="font-mono text-[0.6rem] uppercase tracking-[0.3em]"
                        style={{ color: "var(--color-electric)" }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="h-px w-6" style={{ background: "var(--color-electric)" }} />
                      <h2
                        className="font-display text-xl leading-none"
                        style={{ color: FG, textTransform: "none" }}
                      >
                        {work.name[lang]}
                      </h2>
                    </div>
                    <span
                      className="hidden font-mono text-[0.6rem] uppercase tracking-widest sm:block"
                      style={{ color: FG_GHOST }}
                    >
                      {t.works.categories[work.category]}
                    </span>
                  </div>

                  {/* Image */}
                  <div className={`overflow-hidden ${isPortrait ? "mx-auto max-w-md" : "w-full"}`}>
                    <Image
                      src={img}
                      alt={work.name[lang]}
                      width={img.width}
                      height={img.height}
                      style={{ width: "100%", height: "auto", display: "block" }}
                      className="transition-transform duration-700 group-hover:scale-[1.012]"
                    />
                  </div>

                  {/* Work footer */}
                  <div className="px-6 py-6 sm:px-10">
                    <p
                      className="max-w-2xl text-sm leading-relaxed"
                      style={{ color: "rgba(245,240,232,0.35)" }}
                    >
                      {work.tagline[lang]}
                    </p>
                    {work.forSale && (
                      <Link
                        href="/contact"
                        className="mt-4 inline-block border px-5 py-2 font-mono text-xs uppercase tracking-wider transition-colors"
                        style={{ borderColor: "var(--color-electric)", color: "var(--color-electric)" }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        {c.buy}
                      </Link>
                    )}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </section>

        {/* ── Closing strip ───────────────────────────────────────── */}
        <div
          className="border-t py-16 text-center"
          style={{ borderColor: FG_GHOST }}
        >
          <span
            className="font-brush text-8xl"
            style={{ color: "var(--color-electric)", opacity: 0.2 }}
            aria-hidden
          >
            {creator.glyph}
          </span>
          <p className="mt-3 font-mono text-xs uppercase tracking-[0.35em]" style={{ color: FG_GHOST }}>
            {creator.name[lang]} · {creator.role[lang]}
          </p>
          <Link
            href="/partners"
            className="mt-6 inline-block border px-6 py-2.5 font-mono text-xs uppercase tracking-wider transition-colors"
            style={{ borderColor: FG_GHOST, color: FG_DIM }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = FG_DIM;
              (e.currentTarget as HTMLElement).style.color = FG;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = FG_GHOST;
              (e.currentTarget as HTMLElement).style.color = FG_DIM;
            }}
          >
            {c.allCreators}
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
