"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { works, categoryOrder, type WorkCategory } from "@/data/works";
import { WorkCard } from "./WorkCard";
import { Reveal } from "./Reveal";

type Filter = "all" | WorkCategory;

export function Works() {
  const { t } = useLang();
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
        <motion.div layout className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((work) => (
              <motion.div
                key={work.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.3 }}
              >
                <WorkCard work={work} showCreator />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <p className="mt-8 font-mono text-xs text-ink/50">※ {w.placeholderNote}</p>
      </div>
    </section>
  );
}
