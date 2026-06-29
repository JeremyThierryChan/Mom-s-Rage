"use client";

/**
 * Terminal / 终端输出 template.
 * Pure black, 100% monospace. Works rendered as CLI output lines.
 * Acid green text, blinking cursor, command-line aesthetic.
 */

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { creator, works } from ".";
import { WorkArt } from "@/components/WorkArt";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

function Cursor() {
  const [on, setOn] = useState(true);
  useEffect(() => {
    const id = setInterval(() => setOn((v) => !v), 530);
    return () => clearInterval(id);
  }, []);
  return (
    <span
      className="inline-block h-[1em] w-[0.55em] align-middle"
      style={{ background: on ? "var(--color-acid)" : "transparent" }}
    />
  );
}

export default function TerminalPage({ id: _id }: { id: string }) {
  const { t, lang } = useLang();
  const c = t.creators;
  const forSale = works.filter((w) => w.forSale);

  const acid = "var(--color-acid)";

  return (
    <>
      <Nav subpage />
      <main className="bg-ink text-paper" style={{ fontFamily: "var(--font-mono, monospace)" }}>

        {/* ── Boot sequence header ─────────────────────────────── */}
        <section className="px-4 pt-28 pb-10 sm:px-8">
          <div className="mx-auto max-w-4xl">

            {/* System line */}
            <p className="text-xs text-paper/20 sm:text-sm">
              MOMSRAGE OS v2.0 — creator profile loaded
            </p>
            <p className="mt-1 text-xs text-paper/20 sm:text-sm">
              $ momsrage --creator {creator.id} --lang {lang}
            </p>

            <div className="mt-6 border-t border-paper/10 pt-6">
              {/* ASCII name block */}
              <pre
                className="overflow-x-auto text-[clamp(1rem,5vw,3rem)] font-bold leading-none"
                style={{ color: acid }}
              >
{`  ██████╗ ██████╗ ██╗      ██████╗
  ██╔══██╗██╔═══╝ ██║     ██╔═══╝
  ██████╔╝█████╗  ██║      ████╗
  ██╔═══╝ ██╔══╝  ██║         ██║
  ██║     ██║     ███████╗██████╔╝
  ╚═╝     ╚═╝     ╚══════╝╚═════╝`}
              </pre>

              {/* Actual name below ASCII art */}
              <p className="mt-3 text-2xl font-bold sm:text-4xl" style={{ color: acid }}>
                {creator.name[lang]} <Cursor />
              </p>
            </div>

            {/* Output block */}
            <div className="mt-6 space-y-1 text-xs sm:text-sm">
              {[
                ["HANDLE", creator.handle],
                ["ROLE  ", creator.role[lang]],
                ["BIO   ", creator.bio[lang]],
                ["WORKS ", `${works.length} total, ${forSale.length} for sale`],
              ].map(([key, val]) => (
                <p key={key} className="flex gap-3">
                  <span className="shrink-0 text-paper/30">{key}</span>
                  <span className="text-paper/70">{val}</span>
                </p>
              ))}
            </div>

            <p className="mt-6 text-xs text-paper/20">
              $ {c.backHome} → <Link href="/partners" className="underline hover:text-paper transition-colors">{c.allCreators}</Link>
            </p>
          </div>
        </section>

        {/* ── Works: CLI output ───────────────────────────────── */}
        <section className="border-t border-paper/10 py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-8">
            <p className="mb-6 text-xs text-paper/20 sm:text-sm">
              $ momsrage list-works --creator {creator.id}
            </p>
            <p className="mb-4 text-xs sm:text-sm" style={{ color: acid }}>
              {c.worksTitle} ({works.length} items found)
            </p>

            <div className="space-y-0">
              {works.map((work, i) => (
                <Reveal key={work.id} delay={i * 0.08}>
                  <div className="border-b border-paper/5 py-4">
                    {/* Drectory-style item */}
                    <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-xs sm:text-sm">
                      <span className="text-paper/25">[{String(i).padStart(2, "0")}]</span>
                      <span style={{ color: acid }}>{work.id}</span>
                      <span className="text-paper/40">{t.works.categories[work.category]}</span>
                    </p>
                    <p className="mt-0.5 text-xs text-paper/50 sm:text-sm">
                      <span className="text-paper/25">  name: </span>{work.name[lang]}
                    </p>
                    <p className="mt-0.5 text-xs text-paper/40 sm:text-sm">
                      <span className="text-paper/25">  desc: </span>{work.tagline[lang]}
                    </p>
                    <p className="mt-0.5 text-xs sm:text-sm">
                      <span className="text-paper/25">  price: </span>
                      {work.forSale ? (
                        <span style={{ color: acid }}>
                          ¥{work.price}
                          <Link href="/contact" className="ml-4 border border-paper/20 px-2 py-0.5 text-paper/50 hover:text-paper transition-colors">
                            {c.buy}
                          </Link>
                        </span>
                      ) : (
                        <span className="text-paper/25">null (not for sale)</span>
                      )}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <p className="mt-4 text-xs text-paper/20 sm:text-sm">
              {works.length} items. Done. <Cursor />
            </p>
          </div>
        </section>

        {/* ── Works visual grid ───────────────────────────────── */}
        <section className="border-t border-paper/10 py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-8">
            <p className="mb-6 text-xs text-paper/20 sm:text-sm">
              $ momsrage preview --all
            </p>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {works.map((work) => (
                <div
                  key={work.id}
                  className="border border-paper/10 bg-paper/5"
                >
                  <WorkArt work={work} />
                  <p
                    className="border-t border-paper/10 p-2 text-[0.6rem]"
                    style={{ color: acid + "99" }}
                  >
                    ./{work.id}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Exit ────────────────────────────────────────────── */}
        <div className="border-t border-paper/10 px-4 py-10 sm:px-8">
          <div className="mx-auto max-w-4xl">
            <p className="text-xs text-paper/20 sm:text-sm">
              $ exit — goodbye, {creator.handle} <Cursor />
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
