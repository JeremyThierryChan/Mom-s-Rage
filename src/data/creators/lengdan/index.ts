import type { Creator, Work } from "../_types";

export const creator: Creator = {
  id: "lengdan",
  name: { zh: "冷蛋", en: "Lěngdàn" },
  handle: "@lengdan_cold",
  role: { zh: "文字 · 冷幽默", en: "Text · Dry Humor" },
  bio: {
    zh: "只说废话，但每一句都是真的。冷静下来，你也觉得好笑。",
    en: "Only says nonsense — and every word is true. Calm down. You'll find it funny.",
  },
  accent: "var(--color-acid)",
  glyph: "冷",
};

export const works: Work[] = [
  {
    id: "lengdan-slogan-tee",
    creatorId: "lengdan",
    category: "apparel",
    name: { zh: "废话Tee", en: "Nonsense Tee" },
    tagline: { zh: "上面写的话没有意义，但你懂", en: "The words on it mean nothing — but you get it" },
    price: 149,
    forSale: true,
    colors: ["var(--color-ink)", "var(--color-acid)", "var(--color-paper)"],
    pattern: "grid",
    glyph: "废",
  },
  {
    id: "lengdan-cold-mug",
    creatorId: "lengdan",
    category: "goods",
    name: { zh: "冷场马克杯", en: "Awkward Silence Mug" },
    tagline: { zh: "每天第一句话之前用", en: "For before your first words each day" },
    price: 69,
    forSale: true,
    colors: ["var(--color-acid)", "var(--color-ink)", "var(--color-paper)"],
    pattern: "dots",
    glyph: "默",
  },
  {
    id: "lengdan-sticker-logic",
    creatorId: "lengdan",
    category: "goods",
    name: { zh: "冷逻辑贴纸", en: "Cold Logic Stickers" },
    tagline: { zh: "贴在任何让你烦的地方", en: "Stick it on anything that annoys you" },
    price: 25,
    forSale: true,
    colors: ["var(--color-acid)", "var(--color-ink)", "var(--color-electric)"],
    pattern: "scribble",
    glyph: "贴",
  },
];
