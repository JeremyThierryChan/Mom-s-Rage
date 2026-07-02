import type { Creator, Work } from "../../_types";

export const creator: Creator = {
  id: "hunhun",
  name: { zh: "混混", en: "Húnhun" },
  handle: "@hunhun_remix",
  role: { zh: "改造 · 混搭", en: "Rework · Remix" },
  bio: {
    zh: "把死掉的品牌翻新，把过时的东西混在一起。旧的就是新的。",
    en: "Resurrects dead brands, mashes up what's been forgotten. Old is new.",
  },
  accent: "var(--color-blood)",
  glyph: "混",
};

export const works: Work[] = [
  {
    id: "hunhun-rework-jacket",
    creatorId: "hunhun",
    category: "apparel",
    name: { zh: "改造外套·原型", en: "Rework Jacket · Prototype" },
    tagline: { zh: "死品牌，新命", en: "Dead brand, new life" },
    price: 399,
    forSale: true,
    colors: ["var(--color-ink)", "var(--color-blood)", "var(--color-paper)"],
    pattern: "grid",
    glyph: "改",
  },
  {
    id: "hunhun-patch-set",
    creatorId: "hunhun",
    category: "goods",
    name: { zh: "混搭刺绣包", en: "Remix Patch Pack" },
    tagline: { zh: "缝什么就是什么", en: "Sew what you are" },
    price: 89,
    forSale: true,
    colors: ["var(--color-blood)", "var(--color-acid)", "var(--color-ink)"],
    pattern: "stripes",
    glyph: "补",
  },
  {
    id: "hunhun-tee-concept",
    creatorId: "hunhun",
    category: "apparel",
    name: { zh: "混字Tee·概念版", en: "Remix Tee · Concept" },
    tagline: { zh: "两件旧的，一件新的", en: "Two old things, one new thing" },
    price: 0,
    forSale: false,
    colors: ["var(--color-paper)", "var(--color-blood)", "var(--color-ink)"],
    pattern: "burst",
    glyph: "混",
  },
];
