"use client";

/**
 * Blackout Poster · Portrait / 夜店海报 · 真人版
 * Dark stage for a tattoo artist — portrait hero + work grid with lightbox.
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
import work04 from "./images/work_04.png";

const workImages = [work01, work02, work03, work04];

export default function ZhenweiPage({ id: _id }: { id: string }) {
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
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightbox(null)}
        >
          <Image
            src={workImages[lightbox]!}
            alt={works[lightbox]?.name[lang] ?? `作品 ${lightbox + 1}`}
            width={workImages[lightbox]!.width}
            height={workImages[lightbox]!.height}
            style={{ maxHeight: "90vh", maxWidth: "90vw", width: "auto", height: "auto" }}
          />
          <button className="absolute right-4 top-4 font-mono text-sm text-white/50 hover:text-white" onClick={() => setLightbox(null)}>✕ ESC</button>
        </div>
      )}

      <Nav subpage />
      <main className="bg-ink text-paper">

        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="relative flex min-h-screen flex-col overflow-hidden pt-24">
          {/* Portrait background */}
          {creator.avatar && (
            <div className="pointer-events-none absolute inset-0 opacity-20">
              <Image src={creator.avatar} alt={creator.name[lang]} fill sizes="100vw" className="object-cover object-top" priority />
            </div>
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/30 to-ink" />

          <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-4 pb-20 sm:px-6">
            <Reveal>
              <p className="font-mono text-[0.6rem] uppercase tracking-[0.3em]" style={{ color: creator.accent }}>
                {creator.role[lang]}
              </p>
              <h1
                className="font-display mt-3 leading-none text-paper"
                style={{ fontSize: "clamp(4rem, 14vw, 11rem)", textTransform: "none" }}
              >
                {creator.name[lang]}
              </h1>
              <p className="mt-6 max-w-lg text-sm leading-relaxed text-paper/50 sm:text-base">
                {creator.bio[lang]}
              </p>
              <p className="mt-4 font-mono text-xs text-paper/30">{creator.handle} · 抖音 · 小红书</p>
            </Reveal>
          </div>
        </section>

        {/* ── Work grid ────────────────────────────────────────── */}
        <section className="border-t border-paper/10 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <p className="kicker mb-8 text-paper/30">{lang === "zh" ? "作品" : "Works"}</p>
            <div className="grid gap-px bg-paper/10 sm:grid-cols-2">
              {works.map((work, i) => (
                <Reveal key={work.id} delay={i * 0.06}>
                  <button
                    className="group relative block w-full cursor-zoom-in overflow-hidden bg-ink text-left"
                    onClick={() => setLightbox(i)}
                  >
                    <Image
                      src={workImages[i]!}
                      alt={work.name[lang]}
                      width={workImages[i]!.width}
                      height={workImages[i]!.height}
                      style={{ width: "100%", height: "auto", display: "block" }}
                      className="transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute bottom-0 left-0 right-0 translate-y-2 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="font-mono text-[0.6rem] uppercase tracking-widest text-paper/50">{t.works.categories[work.category]}</p>
                      <p className="font-display mt-1 text-xl uppercase text-paper">{work.name[lang]}</p>
                    </div>
                  </button>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Work info list ───────────────────────────────────── */}
        <section className="border-t border-paper/10 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            {works.map((work, i) => (
              <Reveal key={work.id} delay={i * 0.04}>
                <div className="border-b border-paper/10 py-6 sm:flex sm:items-start sm:gap-8">
                  <span className="shrink-0 font-mono text-[0.6rem] uppercase tracking-widest text-paper/20 sm:w-10">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-xl uppercase leading-none text-paper sm:text-2xl">{work.name[lang]}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-paper/50">{work.tagline[lang]}</p>
                  </div>
                  <span className="mt-2 shrink-0 font-mono text-xs text-paper/20 sm:ml-auto sm:mt-0">
                    {work.forSale ? t.works.priceFrom : t.works.notForSale}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <div className="border-t border-paper/10 py-8 text-center">
          <Link href="/partners" className="font-mono text-xs uppercase tracking-wider text-paper/30 hover:text-paper">
            ← {c.allCreators}
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
