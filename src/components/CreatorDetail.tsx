"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { getCreator, creatorWorks, creators } from "@/data/creators";
import { CreatorAvatar } from "./CreatorAvatar";
import { WorkCard } from "./WorkCard";
import { WorkArt } from "./WorkArt";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { Reveal } from "./Reveal";

export function CreatorDetail({ id }: { id: string }) {
  const { t, lang } = useLang();
  const c = t.creators;
  const creator = getCreator(id);

  if (!creator) {
    return (
      <>
        <Nav subpage />
        <main className="flex min-h-screen items-center justify-center bg-ink text-paper">
          <Link href="/" className="font-mono underline">
            {c.backHome}
          </Link>
        </main>
      </>
    );
  }

  const allWorks = creatorWorks(creator.id);
  const forSale = allWorks.filter((w) => w.forSale);
  const others = creators.filter((x) => x.id !== creator.id);

  return (
    <>
      <Nav subpage />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-ink pb-12 pt-24 text-paper sm:pb-16 sm:pt-28">
          <div
            className="halftone pointer-events-none absolute inset-0 opacity-15"
            style={{ color: creator.accent }}
          />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
            <Link
              href="/partners"
              className="kicker inline-block text-paper/60 transition-colors hover:text-acid"
            >
              {c.backHome}
            </Link>

            <div className="mt-8 flex flex-col items-start gap-8 sm:flex-row sm:items-center">
              <CreatorAvatar
                creator={creator}
                className="float-y h-36 w-36 shrink-0 shadow-hard sm:h-52 sm:w-52"
              />
              <div>
                <h1 className="display-tight text-6xl sm:text-8xl">{creator.name[lang]}</h1>
                <p className="mt-3 font-mono text-sm" style={{ color: creator.accent }}>
                  {creator.handle}
                </p>
                <p className="kicker mt-2 text-paper/60">{creator.role[lang]}</p>
              </div>
            </div>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-paper/80">
              {creator.bio[lang]}
            </p>
          </div>
        </section>

        {/* Portfolio / 作品集 */}
        <section className="bg-paper py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Reveal>
              <div className="flex items-baseline gap-4">
                <h2 className="display-tight text-4xl sm:text-6xl">{c.worksTitle}</h2>
                <span className="font-mono text-sm text-ink/50">
                  {allWorks.length} {c.worksCount}
                </span>
              </div>
            </Reveal>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {allWorks.map((work, i) => (
                <Reveal key={work.id} delay={(i % 3) * 0.08}>
                  <WorkCard work={work} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Shop / 在售商品 */}
        <section className="bg-acid py-20 text-ink sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Reveal>
              <div className="flex items-baseline gap-4">
                <h2 className="display-tight text-4xl sm:text-6xl">{c.shopTitle}</h2>
                <span className="font-mono text-sm text-ink/60">
                  {forSale.length} {c.worksCount}
                </span>
              </div>
            </Reveal>

            {forSale.length === 0 ? (
              <p className="mt-8 font-mono text-ink/70">{c.emptyShop}</p>
            ) : (
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {forSale.map((work, i) => (
                  <Reveal key={work.id} delay={(i % 2) * 0.08}>
                    <div className="flex items-stretch gap-4 border-2 border-ink bg-paper shadow-hard">
                      <div className="w-28 shrink-0 border-r-2 border-ink sm:w-36">
                        <WorkArt work={work} />
                      </div>
                      <div className="flex flex-1 flex-col p-4">
                        <span className="kicker text-magenta">
                          {t.works.categories[work.category]}
                        </span>
                        <h3 className="font-display mt-1 text-xl uppercase leading-tight">
                          {work.name[lang]}
                        </h3>
                        <p className="mt-1 flex-1 text-sm text-ink/65">{work.tagline[lang]}</p>
                        <div className="mt-3 flex items-center justify-between">
                          <span className="font-display text-2xl">¥{work.price}</span>
                          <Link
                            href="/partners#contact"
                            className="bg-ink px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider text-acid transition-transform hover:-translate-y-0.5"
                          >
                            {c.buy}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Other creators */}
        <section className="bg-ink py-20 text-paper sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="kicker text-paper/60">{c.moreTitle}</h2>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-8">
              {others.map((o) => (
                <Link
                  key={o.id}
                  href={`/creators/${o.id}`}
                  className="group flex w-24 flex-col items-center text-center sm:w-28"
                >
                  <CreatorAvatar
                    creator={o}
                    className="h-20 w-20 transition-transform group-hover:scale-110 sm:h-24 sm:w-24"
                  />
                  <span className="font-display mt-3 text-lg uppercase leading-none transition-colors group-hover:text-acid">
                    {o.name[lang]}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
