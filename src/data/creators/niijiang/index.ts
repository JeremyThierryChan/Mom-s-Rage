import type { Creator, Work } from "../_types";

export const creator: Creator = {
  id: "niijiang",
  name: { zh: "泥酱", en: "Niijiang" },
  handle: "@nii_clay",
  role: { zh: "泥塑 · 手作", en: "Clay · Handmade" },
  bio: {
    zh: "用手把情绪捏出来。每一只都歪歪扭扭，没有两只一样——那才是真的。",
    en: "Squeezes emotion out by hand. Every piece lopsided, no two alike — that's the real part.",
  },
  accent: "var(--color-acid)",
  glyph: "泥",
};

export const works: Work[] = [
  {
    id: "clay-stubborn",
    creatorId: "niijiang",
    category: "clay",
    name: { zh: "倔泥人", en: "Stubborn One" },
    tagline: { zh: "每一只都不一样，手工留下的痕迹", en: "No two alike — the marks of the hand" },
    price: 168,
    forSale: true,
    colors: ["var(--color-acid)", "var(--color-ink)", "var(--color-magenta)"],
    pattern: "dots",
    glyph: "倔",
  },
  {
    id: "clay-soul-jar",
    creatorId: "niijiang",
    category: "clay",
    name: { zh: "灵魂罐 · 孤品", en: "Soul Jar · One-off" },
    tagline: { zh: "把愤怒装进去（孤品展示）", en: "A jar to hold the rage (one-off, not for sale)" },
    price: 0,
    forSale: false,
    colors: ["var(--color-purple)", "var(--color-acid)", "var(--color-paper)"],
    pattern: "stripes",
    glyph: "魂",
  },
  {
    id: "clay-clumsy",
    creatorId: "niijiang",
    category: "clay",
    name: { zh: "笨拙的痕迹", en: "Clumsy Marks" },
    tagline: { zh: "笨拙也是一种真", en: "Clumsy is its own kind of real" },
    price: 138,
    forSale: true,
    colors: ["var(--color-cyan)", "var(--color-blood)", "var(--color-ink)"],
    pattern: "blob",
    glyph: "拙",
  },
];
