"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLang } from "@/lib/i18n";

const SECTIONS = ["story", "why", "soul", "works", "process", "partners", "blog"] as const;

export function Nav({ subpage = false }: { subpage?: boolean }) {
  const { t, lang, toggle } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => setOpen(false);
  const links = SECTIONS.map((id) => ({ id, label: t.nav[id] }));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 text-paper transition-colors duration-300 ${
        scrolled || subpage ? "bg-ink" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="font-display text-2xl uppercase leading-none tracking-tight lg:text-3xl"
          onClick={close}
        >
          MOM&apos;S RAGE
          <span className="font-brush ml-2 align-middle text-xl lg:text-2xl">妈见打</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <li key={l.id}>
              <Link
                href={`/${l.id}`}
                className="font-mono text-sm uppercase tracking-widest transition-opacity hover:opacity-60"
                onClick={close}
              >
                {l.label}
              </Link>
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

          <Link
            href="/contact"
            className="hidden bg-magenta px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider text-ink shadow-hard-sm transition-transform hover:-translate-y-0.5 sm:inline-block"
            onClick={close}
          >
            {t.nav.submitIdea}
          </Link>

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
                <Link
                  href={`/${l.id}`}
                  className="font-display block py-2 text-4xl uppercase"
                  onClick={close}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="mt-4">
              <Link
                href="/contact"
                onClick={close}
                className="inline-block bg-magenta px-5 py-3 font-mono text-sm font-bold uppercase tracking-wider text-ink"
              >
                {t.nav.submitIdea}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
