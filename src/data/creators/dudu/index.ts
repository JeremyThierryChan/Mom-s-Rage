import type { Creator, Work } from "../_types";

export const creator: Creator = {
  id: "dudu",
  name: { zh: "嘟嘟", en: "Dū-Dū" },
  handle: "@dudu_stickers",
  role: { zh: "贴纸 · 插画", en: "Stickers · Illustration" },
  bio: {
    zh: "把所有可爱的愤怒画成贴纸贴满世界。一张脸，一百种表情。",
    en: "Draws every cute angry feeling into stickers and plasters them on the world. One face, a hundred moods.",
  },
  accent: "var(--color-magenta)",
  glyph: "嘟",
};

export const works: Work[] = [
  {
    id: "dudu-rage-pack",
    creatorId: "dudu",
    category: "ip",
    name: { zh: "愤怒包 · 贴纸套装", en: "Rage Pack · Sticker Set" },
    tagline: { zh: "九张脸，九种不高兴", en: "Nine faces, nine kinds of unhappy" },
    price: 29,
    forSale: true,
    colors: ["var(--color-magenta)", "var(--color-acid)", "var(--color-paper)"],
    pattern: "dots",
    glyph: "怒",
  },
  {
    id: "dudu-cry-print",
    creatorId: "dudu",
    category: "ip",
    name: { zh: "哭包·限定版印刷", en: "Crybaby · Limited Print" },
    tagline: { zh: "哭是因为太认真了", en: "Crying because you actually care" },
    price: 49,
    forSale: true,
    colors: ["var(--color-electric)", "var(--color-magenta)", "var(--color-paper)"],
    pattern: "blob",
    glyph: "哭",
  },
  {
    id: "dudu-blank-face",
    creatorId: "dudu",
    category: "ip",
    name: { zh: "空白脸·样稿", en: "Blank Face · Sample" },
    tagline: { zh: "什么都不说，什么都有", en: "Says nothing, holds everything" },
    price: 0,
    forSale: false,
    colors: ["var(--color-paper)", "var(--color-ink)", "var(--color-magenta)"],
    pattern: "scribble",
    glyph: "空",
  },
];
