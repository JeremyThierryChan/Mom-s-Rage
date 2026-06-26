"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { works, categoryOrder, type WorkCategory } from "@/data/works";
import { WorkArt } from "./WorkArt";
import { Reveal } from "./Reveal";

type Filter = "all" | WorkCategory;

export function Works() {
  const { t, lang } = useLang();
  const w = t.works;
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = useMemo(
    () => (filter === "all" ? works : works.filter((x) => x.category === filter)),
    [filter]
  );

  const filters: { id: Filter; label: string }[] = [
    { id: "all", label: w.filterAll },
    ...categoryOrder.map((c) => ({ id: c, label: w.categories[c] })),
  ];

  return (
    <section id="works" className="relative bg-acid py-24 text-ink sm:py-32">
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
        <motion.div layout className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((work) => (
              <motion.article
                key={work.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.3 }}
                className="group flex flex-col border-2 border-ink bg-paper shadow-hard transition-transform hover:-translate-y-1"
              >
                <div className="overflow-hidden border-b-2 border-ink">
                  <div className="transition-transform duration-500 group-hover:scale-105">
                    <WorkArt work={work} />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="kicker text-magenta">{w.categories[work.category]}</span>
                  <h3 className="font-display mt-2 text-2xl uppercase leading-tight">
                    {work.name[lang]}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-ink/70">{work.tagline[lang]}</p>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="kicker text-ink/50">{w.priceFrom}</span>
                    <span className="font-display text-2xl">¥{work.price}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        <p className="mt-8 font-mono text-xs text-ink/50">※ {w.placeholderNote}</p>
      </div>
    </section>
  );
}
