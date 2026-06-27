"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { Marquee } from "./Marquee";

export function Hero() {
  const { t } = useLang();

  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-ink text-paper pt-24"
    >
      {/* Decorative clashing color blocks */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-16 top-24 h-64 w-64 rotate-12 bg-electric opacity-80 mix-blend-screen" />
        <div className="absolute right-[-4rem] top-1/3 h-80 w-80 rounded-full bg-magenta opacity-70 mix-blend-screen blur-[2px]" />
        <div className="absolute bottom-10 left-1/4 h-40 w-40 -rotate-6 bg-acid opacity-70 mix-blend-screen" />
        <div className="halftone absolute inset-0 text-magenta opacity-[0.12]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="kicker mb-6 text-acid"
        >
          {t.hero.kicker}
        </motion.p>

        <div className="relative">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="display-tight text-[19vw] leading-[0.82] sm:text-[15vw] lg:text-[12rem]"
          >
            <span className="block text-paper">MOM&apos;S</span>
            <span className="block text-magenta">
              RAGE
              <span className="font-brush ml-4 align-top text-[0.42em] text-acid">妈见打</span>
            </span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-8 max-w-2xl text-balance text-xl font-semibold leading-relaxed sm:text-2xl sm:leading-relaxed"
        >
          {t.hero.tagline}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-3 max-w-xl text-sm text-paper/70"
        >
          {t.hero.subline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="/works"
            className="bg-acid px-7 py-3.5 font-mono text-sm font-bold uppercase tracking-wider text-ink shadow-hard transition-transform hover:-translate-y-1"
          >
            {t.hero.ctaWorks}
          </a>
          <a
            href="/partners#contact"
            className="border-2 border-paper px-7 py-3.5 font-mono text-sm font-bold uppercase tracking-wider text-paper transition-colors hover:bg-paper hover:text-ink"
          >
            {t.hero.ctaIdea}
          </a>

          {/* Soul badge */}
          <div className="ml-auto hidden items-center gap-3 sm:flex">
            <span className="kicker max-w-[7rem] text-right text-paper/60">
              {t.hero.soulLabel}
            </span>
            <span className="float-y flex h-20 w-20 items-center justify-center rounded-full border-2 border-acid">
              <span className="font-brush text-5xl text-acid">{t.hero.soulWord}</span>
            </span>
          </div>
        </motion.div>
      </div>

      {/* Bottom marquee band */}
      <div className="absolute bottom-0 left-0 right-0 border-y-2 border-paper/20 bg-ink py-2 font-display text-2xl uppercase text-paper/90">
        <Marquee items={t.marquee} separator="✶" />
      </div>

      <div className="kicker absolute bottom-16 right-4 hidden text-paper/50 sm:block">
        {t.hero.scroll} ↓
      </div>
    </section>
  );
}
