import Link from "next/link";
import { Nav } from "@/components/Nav";

export default function NotFound() {
  return (
    <>
      <Nav subpage />
      <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-ink px-6 text-paper">

        {/* Grain overlay */}
        <div className="grain pointer-events-none absolute inset-0 opacity-40" />

        {/* Giant ghost 404 */}
        <span
          className="pointer-events-none absolute inset-0 flex select-none items-center justify-center font-display leading-none text-paper/[0.04]"
          style={{ fontSize: "clamp(12rem, 40vw, 36rem)" }}
          aria-hidden
        >
          404
        </span>

        {/* Rotated accent block top-left */}
        <div
          className="pointer-events-none absolute -left-16 top-24 h-48 w-48 rotate-12 opacity-70"
          style={{ background: "var(--color-magenta)" }}
        />

        {/* Rotated acid block bottom-right */}
        <div
          className="pointer-events-none absolute -bottom-8 -right-12 h-64 w-40 -rotate-6 opacity-60"
          style={{ background: "var(--color-acid)" }}
        />

        {/* Electric dot bottom-left */}
        <div
          className="pointer-events-none absolute bottom-24 left-16 h-28 w-28 rounded-full opacity-50"
          style={{ background: "var(--color-electric)" }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-magenta">
            ERROR 404
          </p>

          <h1
            className="font-brush mt-4 leading-tight text-paper"
            style={{ fontSize: "clamp(2.2rem, 7vw, 5rem)" }}
          >
            没有的界面<br />你翻个蛋啊？？？
          </h1>

          <p className="mt-6 text-base leading-relaxed text-paper/50 sm:text-lg">
            这页面不存在。但你的倔劲儿，<br className="hidden sm:block" />
            我们欣赏。
          </p>

          {/* Divider */}
          <div className="mx-auto my-8 h-px w-16 bg-magenta" />

          <Link
            href="/"
            className="inline-block border-2 border-paper px-8 py-3 font-mono text-sm font-bold uppercase tracking-widest text-paper transition-all hover:bg-paper hover:text-ink"
          >
            ← 回到主页
          </Link>

          {/* Sub note */}
          <p className="mt-8 font-mono text-[0.65rem] uppercase tracking-widest text-paper/20">
            妈见打 · MOM&apos;S RAGE · 我们真的没有这个页面
          </p>
        </div>
      </main>
    </>
  );
}
