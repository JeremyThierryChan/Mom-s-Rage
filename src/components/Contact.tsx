"use client";

import { useLang } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function Contact() {
  const { t } = useLang();
  const c = t.contact;

  return (
    <section id="contact" className="relative bg-magenta py-20 text-ink sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left: heading */}
          <Reveal>
            <p className="kicker">{c.kicker}</p>
            <h2 className="display-tight mt-4 text-5xl sm:text-7xl">{c.title}</h2>
            <p className="mt-6 max-w-md text-base font-medium sm:text-lg">{c.lead}</p>
          </Reveal>

          {/* Right: group info cards */}
          <div className="flex flex-col gap-8">
            <Reveal delay={0.12}>
              <div className="border-2 border-ink bg-ink text-paper shadow-hard">
                {/* Group header */}
                <div className="border-b-2 border-paper/20 p-6 sm:p-8">
                  <p className="kicker text-acid">{c.groupPlatform}</p>
                  <p className="font-display mt-3 text-3xl uppercase leading-tight sm:text-4xl">
                    {c.groupName}
                  </p>
                  <p className="mt-2 font-mono text-sm text-paper/50">{c.groupId}</p>
                </div>

                {/* Members */}
                <div className="p-6 sm:p-8">
                  <p className="kicker mb-4 text-paper/50">{c.membersTitle}</p>
                  <ul className="space-y-3">
                    {c.members.map((m) => (
                      <li
                        key={m.id}
                        className="flex items-center justify-between border-b border-paper/10 pb-3 last:border-0 last:pb-0"
                      >
                        <div className="flex items-center gap-3">
                          <span className="inline-block border border-paper/30 px-2 py-0.5 font-mono text-[0.65rem] uppercase tracking-wider text-paper/50">
                            {m.role}
                          </span>
                          <span className="font-display text-lg uppercase">{m.name}</span>
                        </div>
                        <span className="font-mono text-sm text-acid">{m.id}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            {/* WeChat group card */}
            <Reveal delay={0.18}>
              <div className="border-2 border-ink bg-ink text-paper shadow-hard">
                <div className="border-b-2 border-paper/20 p-6 sm:p-8">
                  <p className="kicker text-acid">{c.wechat.groupPlatform}</p>
                  <ul className="mt-3 space-y-1">
                    {c.wechat.groups.map((name) => (
                      <li
                        key={name}
                        className="font-display text-2xl uppercase leading-tight sm:text-3xl"
                      >
                        {name}
                      </li>
                    ))}
                  </ul>
                  {c.wechat.joinNote && (
                    <p className="mt-2 font-mono text-sm text-paper/50">{c.wechat.joinNote}</p>
                  )}
                </div>

                {c.wechat.members.length > 0 && (
                  <div className="p-6 sm:p-8">
                    <p className="kicker mb-4 text-paper/50">{c.wechat.membersTitle}</p>
                    <ul className="space-y-3">
                      {c.wechat.members.map((m) => (
                        <li
                          key={m.id}
                          className="flex items-center justify-between border-b border-paper/10 pb-3 last:border-0 last:pb-0"
                        >
                          <div className="flex items-center gap-3">
                            <span className="inline-block border border-paper/30 px-2 py-0.5 font-mono text-[0.65rem] uppercase tracking-wider text-paper/50">
                              {m.role}
                            </span>
                            <span className="font-display text-lg uppercase">{m.name}</span>
                          </div>
                          <span className="font-mono text-sm text-acid">{m.id}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
