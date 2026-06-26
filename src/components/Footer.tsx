"use client";

import { useLang } from "@/lib/i18n";
import { Marquee } from "./Marquee";

export function Footer() {
  const { t } = useLang();
  const f = t.footer;
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-ink text-paper">
      {/* Keyword marquee band */}
      <div className="border-y-2 border-paper/20 py-3 font-display text-3xl uppercase text-acid">
        <Marquee items={f.keywords} separator="✶" reverse />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-5xl uppercase leading-none sm:text-7xl">
              MOM&apos;S RAGE
            </p>
            <p className="font-brush mt-2 text-3xl text-magenta">妈见打</p>
            <p className="mt-6 max-w-md text-lg text-paper/75">{f.tagline}</p>
          </div>

          <div className="flex items-center gap-6">
            <div className="text-right">
              <p className="kicker text-paper/50">{f.soulLabel}</p>
              <p className="font-brush text-6xl text-acid">{f.soulWord}</p>
            </div>
            <a
              href="#top"
              className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-paper/40 font-mono text-xs transition-colors hover:bg-paper hover:text-ink"
              aria-label={f.backToTop}
            >
              ↑
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-paper/15 pt-6 font-mono text-xs text-paper/45 sm:flex-row sm:justify-between">
          <span>© {year} Mom&apos;s Rage 妈见打</span>
          <span>{f.rights}</span>
        </div>
      </div>
    </footer>
  );
}
