"use client";

import { useState, type FormEvent } from "react";
import { useLang } from "@/lib/i18n";
import { API_URL } from "@/lib/config";
import { Reveal } from "./Reveal";

type Status = "idle" | "submitting" | "done" | "error";

export function Contact() {
  const { t } = useLang();
  const c = t.contact;
  const f = c.form;

  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value.trim(),
      contact: (form.elements.namedItem("contact") as HTMLInputElement).value.trim(),
      idea: (form.elements.namedItem("idea") as HTMLTextAreaElement).value.trim(),
      at: new Date().toISOString(),
    };

    if (!data.idea) {
      setError(f.errorRequired);
      setStatus("error");
      return;
    }
    setError("");
    setStatus("submitting");

    try {
      if (API_URL) {
        // Future backend: POST to your API (e.g. Vercel route or external service).
        const res = await fetch(`${API_URL}/ideas`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error("request failed");
      } else {
        // Static-only phase: persist locally so nothing is lost before a backend exists.
        const KEY = "momsrage.ideas";
        const existing = JSON.parse(window.localStorage.getItem(KEY) || "[]");
        existing.push(data);
        window.localStorage.setItem(KEY, JSON.stringify(existing));
        await new Promise((r) => setTimeout(r, 500));
      }
      form.reset();
      setStatus("done");
    } catch {
      setStatus("error");
      setError("…");
    }
  }

  return (
    <section id="contact" className="relative bg-magenta py-24 text-ink sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left: pitch + channels */}
          <div>
            <Reveal>
              <p className="kicker">{c.kicker}</p>
              <h2 className="display-tight mt-4 text-5xl sm:text-7xl">{c.title}</h2>
              <p className="mt-8 max-w-md text-lg font-medium">{c.lead}</p>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="kicker mt-12 mb-4">{c.channelsTitle}</p>
              <ul className="space-y-3">
                {c.channels.map((ch) => (
                  <li key={ch.label}>
                    <a
                      href={ch.href}
                      className="group flex items-center justify-between border-b-2 border-ink py-3 transition-colors hover:text-paper"
                    >
                      <span className="font-display text-xl uppercase">{ch.label}</span>
                      <span className="font-mono text-sm">{ch.value} ↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Right: the idea form */}
          <Reveal delay={0.1}>
            <div className="border-2 border-ink bg-paper p-6 shadow-hard sm:p-8">
              {status === "done" ? (
                <div className="flex min-h-[20rem] flex-col items-center justify-center text-center">
                  <span className="font-brush text-7xl text-magenta">✓</span>
                  <h3 className="font-display mt-4 text-3xl uppercase">{f.successTitle}</h3>
                  <p className="mt-3 max-w-xs text-ink/70">{f.success}</p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 border-2 border-ink px-5 py-2 font-mono text-xs font-bold uppercase tracking-wider hover:bg-ink hover:text-paper"
                  >
                    {f.again}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <Field label={f.nameLabel}>
                    <input
                      name="name"
                      type="text"
                      placeholder={f.namePlaceholder}
                      className="w-full border-2 border-ink bg-paper px-4 py-3 outline-none focus:border-magenta"
                    />
                  </Field>
                  <Field label={f.contactLabel}>
                    <input
                      name="contact"
                      type="text"
                      placeholder={f.contactPlaceholder}
                      className="w-full border-2 border-ink bg-paper px-4 py-3 outline-none focus:border-magenta"
                    />
                  </Field>
                  <Field label={f.ideaLabel}>
                    <textarea
                      name="idea"
                      rows={4}
                      placeholder={f.ideaPlaceholder}
                      className="w-full resize-none border-2 border-ink bg-paper px-4 py-3 outline-none focus:border-magenta"
                    />
                  </Field>

                  {status === "error" && error && (
                    <p className="font-mono text-sm text-blood">⚠ {error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full bg-ink py-4 font-mono text-sm font-bold uppercase tracking-wider text-acid transition-transform hover:-translate-y-0.5 disabled:opacity-60"
                  >
                    {status === "submitting" ? f.submitting : f.submit}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="kicker mb-2 block text-ink/70">{label}</span>
      {children}
    </label>
  );
}
