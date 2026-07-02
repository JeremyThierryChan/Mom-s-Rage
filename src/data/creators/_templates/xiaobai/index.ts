import type { Creator, Work } from "../../_types";

export const creator: Creator = {
  id: "xiaobai",
  name: { zh: "小白", en: "Xiǎobái" },
  handle: "@xiaobai_minimal",
  role: { zh: "器物 · 设计", en: "Objects · Design" },
  bio: {
    zh: "一个杯子只是一个杯子，除非它让你在用的时候觉得自己是对的。",
    en: "A cup is just a cup — unless it makes you feel right when you use it.",
  },
  accent: "var(--color-cyan)",
  glyph: "白",
};

export const works: Work[] = [
  {
    id: "xiaobai-ritual-cup",
    creatorId: "xiaobai",
    category: "goods",
    name: { zh: "仪式感杯", en: "Ritual Cup" },
    tagline: { zh: "喝水这件事可以很认真", en: "Drinking water can be a serious matter" },
    price: 128,
    forSale: true,
    colors: ["var(--color-paper)", "var(--color-cyan)", "var(--color-ink)"],
    pattern: "dots",
    glyph: "饮",
  },
  {
    id: "xiaobai-weight-card",
    creatorId: "xiaobai",
    category: "goods",
    name: { zh: "手感卡片", en: "Weight Card" },
    tagline: { zh: "拿着它，你就知道什么是刚好", en: "Hold it and you know what just right feels like" },
    price: 39,
    forSale: true,
    colors: ["var(--color-ink)", "var(--color-cyan)", "var(--color-paper)"],
    pattern: "grid",
    glyph: "感",
  },
  {
    id: "xiaobai-light-object",
    creatorId: "xiaobai",
    category: "goods",
    name: { zh: "灯物·展品", en: "Light Object · Exhibition" },
    tagline: { zh: "照亮的不是房间，是心情", en: "It doesn't light the room — it lights the mood" },
    price: 0,
    forSale: false,
    colors: ["var(--color-cyan)", "var(--color-paper)", "var(--color-ink)"],
    pattern: "blob",
    glyph: "光",
  },
];
