"use client";

/**
 * Brutalist / 粗野宣言 template.
 * Pure black & white. Dense newspaper-column layout.
 * Works as raw tabular text rows — zero decoration.
 * Maximum information, minimum aesthetics.
 */

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { creator, works } from ".";
import { WorkArt } from "@/components/WorkArt";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

export default function BrutalistPage({ id: _id }: { id: string }) {
  const { t, lang } = useLang();
  const c = t.creators;
  const forSale = works.filter((w) => w.forSale);

  return (
    <>
      <Nav subpage />
      <main className="bg-paper text-ink">

        {/* ── Masthead: dense newspaper header ───────────────── */}
        <section className="border-b-4 border-ink pt-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">

            {/* Vol / issue strip */}
            <div className="flex items-center justify-between border-b border-ink py-2 font-mono text-[0.6rem] uppercase tracking-widest text-ink/40">
              <span>MOM&apos;S RAGE PRESS</span>
              <span>VOL.1 — {creator.handle}</span>
              <Link href="/#creators" className="hover:text-ink">{c.backHome} ←</Link>
            </div>

            {/* Giant name across full width */}
            <h1
              className="display-tight border-b-4 border-ink py-2 leading-none text-ink"
              style={{ fontSize: "clamp(3.5rem, 17vw, 15rem)" }}
            >
              {creator.name[lang]}
            </h1>

            {/* Three-column deck */}
            <div className="grid grid-cols-1 gap-0 border-b border-ink sm:grid-cols-3">
              <div className="border-ink py-4 pr-4 sm:border-r">
                <p className="font-mono text-[0.6rem] uppercase tracking-widest text-ink/40">角色 / Role</p>
                <p className="mt-1 text-sm font-bold uppercase">{creator.role[lang]}</p>
              </div>
              <div className="border-ink py-4 px-4 sm:border-r">
                <p className="font-mono text-[0.6rem] uppercase tracking-widest text-ink/40">简介 / Bio</p>
                <p className="mt-1 text-xs leading-relaxed text-ink/70">{creator.bio[lang]}</p>
              </div>
              <div className="border-ink py-4 pl-4">
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
            {/* Column headers */}
            <div className="grid grid-cols-[2rem_1fr_6rem_5rem] items-center gap-4 border-b-2 border-ink pb-2 font-mono text-[0.6rem] uppercase tracking-widest text-ink/40 sm:grid-cols-[3rem_1fr_8rem_6rem]">
              <span>#</span>
              <span>{c.worksTitle}</span>
              <span>类型</span>
              <span>价格</span>
            </div>

            {works.map((work, i) => (
              <Reveal key={work.id} delay={i * 0.04}>
                <div className="grid grid-cols-[2rem_1fr_6rem_5rem] items-center gap-4 border-b border-ink py-4 transition-colors hover:bg-ink hover:text-paper sm:grid-cols-[3rem_1fr_8rem_6rem]">
                  <span className="font-mono text-xs font-bold text-ink/30 group-hover:text-paper/30">
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

                  <div>
                    {work.forSale ? (
                      <div className="flex flex-col gap-0.5">
                        <span className="font-display text-lg">¥{work.price}</span>
                        <Link
                          href="/#contact"
                          className="font-mono text-[0.55rem] uppercase tracking-wider text-ink/50 underline hover:text-ink"
                        >
                          {c.buy}
                        </Link>
                      </div>
                    ) : (
                      <span className="font-mono text-[0.6rem] uppercase text-ink/30">—</span>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Visual grid ─────────────────────────────────────── */}
        <section className="border-t-4 border-ink py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <p className="kicker mb-6 text-ink/40">图像档案 / Visual Archive</p>
            <div className="grid grid-cols-2 gap-px border-2 border-ink bg-ink sm:grid-cols-3">
              {works.map((work) => (
                <div key={work.id} className="bg-paper">
                  <WorkArt work={work} />
                  <div className="border-t border-ink p-2">
                    <p className="font-mono text-[0.6rem] uppercase tracking-widest text-ink/50">
                      {work.id}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Footer ─────────────────────────────────────────── */}
        <div className="border-t-4 border-ink py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-between">
            <span className="font-mono text-xs uppercase text-ink/30">
              {creator.id.toUpperCase()} — MOM&apos;S RAGE
            </span>
            <Link href="/#creators" className="font-mono text-xs uppercase tracking-wider underline">
              {c.allCreators}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
