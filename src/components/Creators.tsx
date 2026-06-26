"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { creators, creatorWorks } from "@/data/creators";
import { CreatorAvatar } from "./CreatorAvatar";
import { Reveal } from "./Reveal";

export function Creators() {
  const { t, lang } = useLang();
  const c = t.creators;

  return (
    <section id="creators" className="relative overflow-hidden bg-ink py-24 text-paper sm:py-32">
      <div className="halftone pointer-events-none absolute inset-0 text-magenta opacity-10" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <p className="kicker text-acid">{c.kicker}</p>
          <h2 className="display-tight mt-4 max-w-4xl text-5xl sm:text-7xl">{c.title}</h2>
          <p className="mt-8 max-w-2xl text-lg text-paper/75">{c.lead}</p>
          <p className="kicker mt-3 text-paper/40">✦ {c.hint}</p>
        </Reveal>

        {/* Floating avatar cluster */}
        <div className="mt-16 flex flex-wrap items-start justify-center gap-x-6 gap-y-10 sm:gap-x-12">
          {creators.map((creator, i) => {
            const count = creatorWorks(creator.id).length;
            const rotate = i % 2 === 0 ? -5 : 5;
            return (
              <Reveal key={creator.id} delay={i * 0.08}>
                <Link
                  href={`/creators/${creator.id}`}
                  className="group flex w-32 flex-col items-center text-center sm:w-40"
                >
                  <div
                    className="float-y"
                    style={{ animationDelay: `${i * 0.6}s` }}
                  >
                    <div
                      className="transition-transform duration-300 group-hover:!rotate-0 group-hover:scale-110"
                      style={{ transform: `rotate(${rotate}deg)` }}
                    >
                      <CreatorAvatar
                        creator={creator}
                        className="h-28 w-28 shadow-hard transition-shadow group-hover:shadow-[8px_8px_0_var(--color-acid)] sm:h-36 sm:w-36"
                      />
                    </div>
                  </div>
                  <h3 className="font-display mt-5 text-2xl uppercase leading-none transition-colors group-hover:text-acid">
                    {creator.name[lang]}
                  </h3>
                  <p className="mt-1 font-mono text-[0.7rem] tracking-wide text-paper/55">
                    {creator.role[lang]}
                  </p>
                  <p className="mt-1 font-mono text-[0.7rem] text-paper/35">
                    {count} {c.worksCount}
                  </p>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
