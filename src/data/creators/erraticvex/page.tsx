"use client";

/**
 * Brutalist · Portrait / 粗野宣言 · 真人版
 * Based on 浑浑's Brutalist template — real photos in the visual archive.
 */

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
import work09 from "./images/work_09.jpg";
import work10 from "./images/work_10.jpg";
import work11 from "./images/work_11.jpg";
import work12 from "./images/work_12.jpg";

const workImages = [work01, work02, work03, work04, work05, work06, work07, work08, work09, work10, work11, work12];

export default function ErraticVexPage({ id: _id }: { id: string }) {
  const { t, lang } = useLang();
  const c = t.creators;
  const forSale = works.filter((w) => w.forSale);

  return (
    <>
      <Nav subpage />
      <main className="bg-paper text-ink">

        {/* ── Masthead ─────────────────────────────────────────── */}
        <section className="border-b-4 border-ink pt-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">

            {/* Vol strip */}
            <div className="flex items-center justify-between border-b border-ink py-2 font-mono text-[0.6rem] uppercase tracking-widest text-ink/40">
              <span>MOM&apos;S RAGE PRESS</span>
              <span>VOL.1 — {creator.handle}</span>
              <Link href="/partners" className="hover:text-ink">{c.backHome} ←</Link>
            </div>

            {/* Giant name */}
            <h1
              className="display-tight border-b-4 border-ink py-2 leading-none text-ink"
              style={{ fontSize: "clamp(2.5rem, 13vw, 12rem)", textTransform: "none" }}
            >
              {creator.name[lang]}
            </h1>

            {/* Three-column deck with avatar in first col */}
            <div className="grid grid-cols-1 gap-0 border-b border-ink sm:grid-cols-[auto_1fr_1fr]">
              {/* Avatar */}
              <div className="border-ink py-4 pr-6 sm:border-r">
                <p className="font-mono text-[0.6rem] uppercase tracking-widest text-ink/40 mb-2">肖像 / Portrait</p>
                <div className="relative h-32 w-32 overflow-hidden border-2 border-ink">
                  {creator.avatar ? (
                    <Image
                      src={creator.avatar}
                      alt={creator.name[lang]}
                      fill
                      sizes="128px"
                      className="object-cover object-top"
                      priority
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-ink">
                      <span className="font-brush text-5xl text-paper">{creator.glyph}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Role + bio */}
              <div className="border-ink py-4 px-4 sm:border-r">
                <p className="font-mono text-[0.6rem] uppercase tracking-widest text-ink/40">角色 / Role</p>
                <p className="mt-1 text-sm font-bold uppercase">{creator.role[lang]}</p>
                <p className="font-mono text-[0.6rem] uppercase tracking-widest text-ink/40 mt-4">简介 / Bio</p>
                <p className="mt-1 text-xs leading-relaxed text-ink/70">{creator.bio[lang]}</p>
              </div>

              {/* Count */}
              <div className="py-4 pl-4">
                <p className="font-mono text-[0.6rem] uppercase tracking-widest text-ink/40">数量 / Count</p>
                <p className="mt-1 text-sm font-bold">{works.length} {c.worksCount}</p>
                <p className="mt-1 text-sm font-bold">{forSale.length} {c.shopTitle}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Works: dense tabular rows ───────────────────────── */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid grid-cols-[2rem_1fr_6rem_5rem] items-center gap-4 border-b-2 border-ink pb-2 font-mono text-[0.6rem] uppercase tracking-widest text-ink/40 sm:grid-cols-[3rem_1fr_8rem_6rem]">
              <span>#</span>
              <span>{c.worksTitle}</span>
              <span>类型</span>
              <span>价格</span>
            </div>

            {works.map((work, i) => (
              <Reveal key={work.id} delay={i * 0.03}>
                <div className="grid grid-cols-[2rem_1fr_6rem_5rem] items-center gap-4 border-b border-ink py-4 transition-colors hover:bg-ink hover:text-paper sm:grid-cols-[3rem_1fr_8rem_6rem]">
                  <span className="font-mono text-xs font-bold text-ink/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display truncate text-lg uppercase leading-none sm:text-xl">
                      {work.name[lang]}
                    </h3>
                    <p className="mt-0.5 truncate font-mono text-[0.65rem] text-ink/50">
                      {work.tagline[lang]}
                    </p>
                  </div>
                  <span className="font-mono text-[0.65rem] uppercase tracking-wide text-ink/60">
                    {t.works.categories[work.category]}
                  </span>
                  <span className="font-mono text-[0.6rem] uppercase text-ink/30">—</span>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Visual archive: real photos ──────────────────────── */}
        <section className="border-t-4 border-ink py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <p className="kicker mb-6 text-ink/40">图像档案 / Visual Archive</p>
            <div className="grid grid-cols-2 gap-px border-2 border-ink bg-ink sm:grid-cols-3 lg:grid-cols-4">
              {workImages.map((img, i) => (
                <Reveal key={i} delay={i * 0.04}>
                  <div className="bg-paper">
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={img}
                        alt={works[i]?.name[lang] ?? `作品 ${i + 1}`}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="border-t border-ink p-2">
                      <p className="font-mono text-[0.6rem] uppercase tracking-widest text-ink/50">
                        {works[i]?.id ?? `ev-${String(i + 1).padStart(2, "0")}`}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Footer strip ─────────────────────────────────────── */}
        <div className="border-t-4 border-ink py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-between">
            <span className="font-mono text-xs uppercase text-ink/30">
              {creator.id.toUpperCase()} — MOM&apos;S RAGE
            </span>
            <Link href="/partners" className="font-mono text-xs uppercase tracking-wider underline">
              {c.allCreators}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
