"use client";

/**
 * Design Studio / 设计工作室
 * Clean, precision-focused layout for brand identity work.
 * Light background, electric accent, full-bleed slide display.
 */

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useLang } from "@/lib/i18n";
import { creator, works } from ".";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

import avatarImg from "./images/avatar.jpg";
import work01 from "./images/work_01.jpg";
import work02 from "./images/work_02.jpg";
import work03 from "./images/work_03.jpg";
import work04 from "./images/work_04.jpg";
import work05 from "./images/work_05.jpg";
import work06 from "./images/work_06.jpg";

const workImages = [work01, work02, work03, work04, work05, work06];

const ELECTRIC = "var(--color-electric)";

export default function ZhiyuPage({ id: _id }: { id: string }) {
  const { t, lang } = useLang();
  const c = t.creators;
  const [lb, setLb] = useState<number | null>(null);

  useEffect(() => {
    if (lb === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLb(null);
      if (e.key === "ArrowRight") setLb((i) => (i === null ? null : Math.min(i + 1, works.length - 1)));
      if (e.key === "ArrowLeft")  setLb((i) => (i === null ? null : Math.max(i - 1, 0)));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lb]);

  return (
    <>
      {/* ── Lightbox ─────────────────────────────────────────── */}
      {lb !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-paper/95 p-4"
          onClick={() => setLb(null)}
        >
          <Image
            src={workImages[lb]!}
            alt={works[lb]!.name[lang]}
            width={workImages[lb]!.width}
            height={workImages[lb]!.height}
            style={{ maxHeight: "88vh", maxWidth: "88vw", width: "auto", height: "auto" }}
            onClick={(e) => e.stopPropagation()}
          />
          {lb > 0 && (
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-3xl text-ink/30"
              onClick={(e) => { e.stopPropagation(); setLb(lb - 1); }}
            >‹</button>
          )}
          {lb < works.length - 1 && (
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 font-mono text-3xl text-ink/30"
              onClick={(e) => { e.stopPropagation(); setLb(lb + 1); }}
            >›</button>
          )}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-center">
            <p className="font-display text-base text-ink" style={{ textTransform: "none" }}>
              {works[lb]!.name[lang]}
            </p>
            <p className="mt-1 font-mono text-[0.6rem] uppercase tracking-widest text-ink/30">
              {lb + 1} / {works.length}
            </p>
          </div>
          <button
            className="absolute right-4 top-4 font-mono text-xs text-ink/25"
            onClick={() => setLb(null)}
          >✕ ESC</button>
        </div>
      )}

      <Nav subpage />
      <main className="bg-paper text-ink">

        {/* ── Hero ──────────────────────────────────────────── */}
        <section className="relative border-b-2 border-ink px-6 pb-16 pt-32 sm:px-12 md:px-20">
          <Link
            href="/partners"
            className="absolute left-6 top-28 font-mono text-xs uppercase tracking-widest text-ink/25 transition-opacity hover:opacity-60 sm:left-12"
          >← {c.backHome}</Link>

          <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              {/* Avatar */}
              <div
                className="relative mb-6 h-24 w-24 overflow-hidden rounded-full border-2"
                style={{ borderColor: ELECTRIC }}
              >
                <Image src={avatarImg} alt={creator.name["zh"]} fill className="object-cover" priority />
              </div>

              <h1
                className="font-display leading-none"
                style={{ fontSize: "clamp(3.5rem, 12vw, 8rem)", textTransform: "none" }}
              >
                {creator.name[lang]}
              </h1>
              <p className="mt-3 font-mono text-xs uppercase tracking-[0.3em] text-ink/35">
                {creator.role[lang]}
              </p>
            </div>

            <p className="max-w-xs text-sm leading-relaxed text-ink/50 sm:text-right">
              {creator.bio[lang]}
            </p>
          </div>
        </section>

        {/* ── Project label ─────────────────────────────────── */}
        <div className="border-b border-ink/10 px-6 py-4 sm:px-12 md:px-20">
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.35em] text-ink/35">
            {lang === "zh" ? "代表案例 — YUEBOX 品牌视觉系统" : "Case Study — YUEBOX Brand Visual System"}
          </p>
        </div>

        {/* ── Works grid ────────────────────────────────────── */}
        <section className="px-4 py-8 sm:px-6 sm:py-10">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {works.map((work, i) => (
              <Reveal key={work.id} delay={i * 0.04}>
                <button
                  className="group w-full cursor-zoom-in text-left"
                  onClick={() => setLb(i)}
                >
                  <div className="overflow-hidden border border-ink/8">
                    <Image
                      src={workImages[i]!}
                      alt={work.name[lang]}
                      width={workImages[i]!.width}
                      height={workImages[i]!.height}
                      style={{ width: "100%", height: "auto", display: "block" }}
                      className="transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="flex items-start justify-between gap-2 px-1 pt-2">
                    <div>
                      <p className="font-mono text-[0.55rem] uppercase tracking-[0.2em]" style={{ color: ELECTRIC }}>
                        {String(i + 1).padStart(2, "0")}
                      </p>
                      <p className="mt-0.5 font-display text-sm leading-tight" style={{ textTransform: "none" }}>
                        {work.name[lang]}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-ink/40">
                        {work.tagline[lang]}
                      </p>
                    </div>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Closing ───────────────────────────────────────── */}
        <div className="border-t-2 border-ink py-14 text-center">
          <span
            className="font-display text-7xl opacity-[0.06]"
            style={{ textTransform: "none" }}
            aria-hidden
          >
            {creator.name[lang]}
          </span>
          <div className="mt-4">
            <Link
              href="/partners"
              className="border border-ink/15 px-6 py-2.5 font-mono text-xs uppercase tracking-wider text-ink/30 transition-opacity hover:opacity-60"
            >
              {c.allCreators}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
