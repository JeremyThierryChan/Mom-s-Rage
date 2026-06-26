"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/lib/i18n";

const SECTIONS = ["story", "why", "soul", "works", "process", "partners"] as const;

export function Nav() {
  const { t, lang, toggle } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = SECTIONS.map((id) => ({ id, label: t.nav[id] }));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 text-paper transition-colors duration-300 ${
        scrolled ? "bg-ink" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <a
          href="#top"
          className="font-display text-2xl uppercase leading-none tracking-tight"
          onClick={() => setOpen(false)}
        >
          MOM&apos;S RAGE
          <span className="font-brush ml-2 align-middle text-xl">妈见打</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className="kicker transition-opacity hover:opacity-60"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Switch language"
            className="border-2 border-paper px-2.5 py-1 font-mono text-xs font-bold transition-colors hover:bg-paper hover:text-ink"
          >
            {lang === "zh" ? "EN" : "中"}
          </button>

          <a
            href="#contact"
            className="hidden bg-magenta px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider text-ink shadow-hard-sm transition-transform hover:-translate-y-0.5 sm:inline-block"
          >
            {t.nav.submitIdea}
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            className="flex h-9 w-9 items-center justify-center border-2 border-paper lg:hidden"
          >
            <span className="font-mono text-lg leading-none">{open ? "✕" : "≡"}</span>
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 top-[57px] z-40 bg-ink text-paper lg:hidden">
          <ul className="flex flex-col gap-2 px-6 py-8">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="font-display block py-2 text-4xl uppercase"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="mt-4">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-block bg-magenta px-5 py-3 font-mono text-sm font-bold uppercase tracking-wider text-ink"
              >
                {t.nav.submitIdea}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
