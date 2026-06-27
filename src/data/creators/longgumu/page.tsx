"use client";

/**
 * Terminal · Portrait / 终端输出 · 真人版
 * Based on 冷蛋's Terminal template — header extended with real avatar photo.
 * Visual grid shows actual work photos instead of procedural art.
 */

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
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

const workImages = [work01, work02, work03, work04, work05, work06, work07, work08];

function Cursor() {
  const [on, setOn] = useState(true);
  useEffect(() => {
    const id = setInterval(() => setOn((v) => !v), 530);
    return () => clearInterval(id);
  }, []);
  return (
    <span
      className="inline-block h-[1em] w-[0.55em] align-middle"
      style={{ background: on ? "var(--color-blood)" : "transparent" }}
    />
  );
}

export default function LonggumuTerminalPage({ id: _id }: { id: string }) {
  const { t, lang } = useLang();
  const c = t.creators;

  const blood = "var(--color-blood)";

  return (
    <>
      <Nav subpage />
      <main className="bg-ink text-paper" style={{ fontFamily: "var(--font-mono, monospace)" }}>

        {/* ── Boot sequence header ─────────────────────────────── */}
        <section className="px-4 pt-28 pb-10 sm:px-8">
          <div className="mx-auto max-w-4xl">

            <p className="text-xs text-paper/20 sm:text-sm">
              MOMSRAGE OS v2.0 — creator profile loaded
            </p>
            <p className="mt-1 text-xs text-paper/20 sm:text-sm">
              $ momsrage --creator {creator.id} --lang {lang}
            </p>

            <div className="mt-6 border-t border-paper/10 pt-6">
              {/* Avatar + name side by side */}
              <div className="flex flex-col gap-6 sm:flex-row sm:items-end">
                {/* Avatar photo */}
                {creator.avatar && (
                  <div className="relative h-32 w-32 shrink-0 overflow-hidden border border-paper/20 sm:h-40 sm:w-40">
                    <Image
                      src={creator.avatar}
                      alt={creator.name[lang]}
                      fill
                      sizes="160px"
                      className="object-cover object-top"
                      priority
                    />
                    {/* Blood tint overlay */}
                    <div
                      className="pointer-events-none absolute inset-0 mix-blend-multiply"
                      style={{ background: blood + "33" }}
                    />
                  </div>
                )}

                {/* Name block */}
                <div>
                  <p className="text-[clamp(2.5rem,10vw,5rem)] font-bold leading-none" style={{ color: blood }}>
                    {creator.name[lang]} <Cursor />
                  </p>
                  <p className="mt-2 text-xs text-paper/30 sm:text-sm">
                    {creator.handle}
                  </p>
                </div>
              </div>
            </div>

            {/* Output block */}
            <div className="mt-6 space-y-1 text-xs sm:text-sm">
              {[
                ["ROLE  ", creator.role[lang]],
                ["BIO   ", creator.bio[lang]],
                ["WORKS ", `${works.length} total, 0 for sale (portfolio only)`],
              ].map(([key, val]) => (
                <p key={key} className="flex gap-3">
                  <span className="shrink-0 text-paper/30">{key}</span>
                  <span className="text-paper/70">{val}</span>
                </p>
              ))}
            </div>

            <p className="mt-6 text-xs text-paper/20">
              $ {c.backHome} →{" "}
              <Link href="/partners" className="underline hover:text-paper transition-colors">
                {c.allCreators}
              </Link>
            </p>
          </div>
        </section>

        {/* ── Works photo grid ────────────────────────────────── */}
        <section className="border-t border-paper/10 py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-8">
            <p className="mb-6 text-xs text-paper/20 sm:text-sm">
              $ momsrage preview --all
            </p>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {workImages.map((img, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <div className="border border-paper/10 bg-paper/5">
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={img}
                        alt={works[i]?.name[lang] ?? `作品 ${i + 1}`}
                        fill
                        sizes="(max-width: 640px) 50vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                    <p
                      className="border-t border-paper/10 p-2 text-[0.6rem]"
                      style={{ color: blood + "99" }}
                    >
                      ./work_{String(i + 1).padStart(2, "0")}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Works: CLI output ───────────────────────────────── */}
        <section className="border-t border-paper/10 py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-8">
            <p className="mb-6 text-xs text-paper/20 sm:text-sm">
              $ momsrage list-works --creator {creator.id}
            </p>
            <p className="mb-4 text-xs sm:text-sm" style={{ color: blood }}>
              {c.worksTitle} ({works.length} items found)
            </p>

            <div className="space-y-0">
              {works.map((work, i) => (
                <Reveal key={work.id} delay={i * 0.06}>
                  <div className="border-b border-paper/5 py-4">
                    <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-xs sm:text-sm">
                      <span className="text-paper/25">[{String(i + 1).padStart(2, "0")}]</span>
                      <span style={{ color: blood }}>{work.id}</span>
                      <span className="text-paper/40">{t.works.categories[work.category]}</span>
                    </p>
                    <p className="mt-0.5 text-xs text-paper/50 sm:text-sm">
                      <span className="text-paper/25">  name: </span>{work.name[lang]}
                    </p>
                    <p className="mt-0.5 text-xs sm:text-sm">
                      <span className="text-paper/25">  price: </span>
                      <span className="text-paper/25">null (not for sale)</span>
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <p className="mt-4 text-xs text-paper/20 sm:text-sm">
              {works.length} items. Done. <Cursor />
            </p>
          </div>
        </section>

        {/* ── Exit ────────────────────────────────────────────── */}
        <div className="border-t border-paper/10 px-4 py-10 sm:px-8">
          <div className="mx-auto max-w-4xl">
            <p className="text-xs text-paper/20 sm:text-sm">
              $ exit — goodbye, {creator.handle} <Cursor />
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
