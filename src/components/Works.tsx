"use client";

import { useMemo, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { works, categoryOrder, type WorkCategory, type Work } from "@/data/works";
import { getCreator } from "@/data/creators";
import { WorkCard } from "./WorkCard";
import { WorkArt } from "./WorkArt";
import { Reveal } from "./Reveal";

type Filter = "all" | WorkCategory;

export function Works() {
  const { t, lang } = useLang();
  const w = t.works;
  const [filter, setFilter] = useState<Filter>("all");
  const [detailWork, setDetailWork] = useState<Work | null>(null);

  const filtered = useMemo(
    () => (filter === "all" ? works : works.filter((x) => x.category === filter)),
    [filter]
  );

  const filters: { id: Filter; label: string }[] = [
    { id: "all", label: w.filterAll },
    ...categoryOrder.map((c) => ({ id: c, label: w.categories[c] })),
  ];

  // Close modal on Escape
  useEffect(() => {
    if (!detailWork) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setDetailWork(null); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [detailWork]);

  const handleSelect = (work: Work) => setDetailWork(work);

  const detailCreator = detailWork ? getCreator(detailWork.creatorId) : undefined;

  return (
    <>
      <section id="works" className="relative bg-acid py-20 text-ink sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <p className="kicker">{w.kicker}</p>
            <h2 className="display-tight mt-4 max-w-4xl text-5xl sm:text-7xl">{w.title}</h2>
            <p className="mt-8 max-w-2xl text-lg font-medium text-ink/80">{w.lead}</p>
          </Reveal>

          {/* Filter bar */}
          <div className="mt-10 flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`border-2 border-ink px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider transition-colors ${
                  filter === f.id ? "bg-ink text-acid" : "bg-acid hover:bg-ink hover:text-acid"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="mt-10 grid items-start gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence>
              {filtered.map((work) => (
                <motion.div
                  key={work.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <WorkCard
                    work={work}
                    showCreator
                    onSelect={handleSelect}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <p className="mt-8 font-mono text-xs text-ink/50">※ {w.placeholderNote}</p>
        </div>
      </section>

      {/* ── Detail modal ────────────────────────────────────────────── */}
      <AnimatePresence>
        {detailWork && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/85 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setDetailWork(null)}
          >
            <motion.div
              className="relative flex w-full max-w-6xl flex-col overflow-hidden border-2 border-ink bg-paper shadow-[8px_8px_0_#0c0a09] md:flex-row"
              style={{ height: "92vh" }}
              initial={{ scale: 0.96, y: 16 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 16 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={e => e.stopPropagation()}
            >
              {/* Close */}
              <button
                className="absolute right-4 top-4 z-10 border border-ink/20 bg-paper/80 px-3 py-1 font-mono text-xs text-ink/50 backdrop-blur-sm transition-colors hover:bg-ink hover:text-paper"
                onClick={() => setDetailWork(null)}
              >
                ✕ ESC
              </button>

              {/* Image / Art panel — takes up the majority of the modal */}
              {detailWork.images && detailWork.images.length > 1 ? (
                /* Collection: scrollable gallery, full natural width */
                <div className="h-[55vh] overflow-y-auto border-b-2 border-ink bg-ink/5 md:h-auto md:flex-1 md:border-b-0 md:border-r-2">
                  {detailWork.images.map((img, i) => (
                    <Image
                      key={i}
                      src={img}
                      alt={`${detailWork.name[lang]} ${i + 1}`}
                      width={img.width}
                      height={img.height}
                      style={{ width: "100%", height: "auto", display: "block" }}
                      className={i > 0 ? "border-t-2 border-ink" : ""}
                    />
                  ))}
                </div>
              ) : (
                /* Single image: fills available space with contain */
                <div className="relative h-[55vh] shrink-0 border-b-2 border-ink bg-ink/5 md:h-auto md:flex-1 md:border-b-0 md:border-r-2">
                  {(detailWork.images?.[0] ?? detailWork.image) ? (
                    <Image
                      src={detailWork.images?.[0] ?? detailWork.image!}
                      alt={detailWork.name[lang]}
                      fill
                      sizes="(max-width: 768px) 100vw, 75vw"
                      className="object-contain"
                    />
                  ) : (
                    <WorkArt work={detailWork} />
                  )}
                </div>
              )}

              {/* Details panel — compact sidebar */}
              <div className="flex shrink-0 flex-col justify-between overflow-auto p-7 md:w-72">
                <div>
                  <p className="kicker text-magenta">{w.categories[detailWork.category]}</p>
                  <h2 className="font-display mt-3 text-2xl uppercase leading-tight sm:text-3xl">
                    {detailWork.name[lang]}
                  </h2>

                  {detailCreator && (
                    <Link
                      href={`/creators/${detailCreator.id}`}
                      className="mt-3 inline-flex items-center gap-1 font-mono text-xs text-ink/50 underline-offset-2 transition-colors hover:text-magenta hover:underline"
                      onClick={() => setDetailWork(null)}
                    >
                      — {detailCreator.name[lang]}
                    </Link>
                  )}

                  {detailWork.tagline[lang] !== "—" && (
                    <p className="mt-4 text-sm leading-relaxed text-ink/70">
                      {detailWork.tagline[lang]}
                    </p>
                  )}
                </div>

                <div className="mt-6 border-t-2 border-ink/10 pt-5">
                  {detailWork.forSale ? (
                    <div>
                      <p className="kicker text-ink/50">{w.priceFrom}</p>
                      <p className="font-display mt-1 text-4xl">¥{detailWork.price}</p>
                      <Link href="/contact" className="mt-4 inline-block bg-ink px-5 py-2.5 font-mono text-sm font-bold uppercase tracking-wider text-paper transition-colors hover:bg-magenta">
                        购买 / BUY
                      </Link>
                    </div>
                  ) : (
                    <span className="border-2 border-ink px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-wide">
                      {w.notForSale}
                    </span>
                  )}

                  {detailCreator && (
                    <Link
                      href={`/creators/${detailCreator.id}`}
                      className="mt-5 flex items-center gap-3 border-t border-ink/10 pt-4 font-mono text-xs text-ink/40 transition-colors hover:text-ink"
                      onClick={() => setDetailWork(null)}
                    >
                      <span className="flex h-8 w-8 items-center justify-center border border-ink/20 font-display text-lg">
                        {detailCreator.glyph}
                      </span>
                      <span>{w.by} {detailCreator.name[lang]} →</span>
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
