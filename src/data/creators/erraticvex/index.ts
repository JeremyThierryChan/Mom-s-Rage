import type { Creator, Work } from "../_types";
import avatarImg from "./images/avatar.jpg";
import work01 from "./images/work_01.jpg";
import work02 from "./images/work_02.jpg";
import work03 from "./images/work_03.jpg";
import work04 from "./images/work_04.jpg";
import work05 from "./images/work_05.jpg";
import work06 from "./images/work_06.jpg";
import work07 from "./images/work_07.jpg";
import work08 from "./images/work_08.jpg";
import work09 from "./images/work_09.jpg";
import work10 from "./images/work_10.jpg";
import work11 from "./images/work_11.jpg";
import work12 from "./images/work_12.jpg";

export const creator: Creator = {
  id: "erraticvex",
  name: { zh: "Erratic Vex", en: "Erratic Vex" },
  handle: "@erraticvex",
  role: { zh: "视觉艺术家", en: "Visual Artist" },
  bio: {
    zh: "混乱是方法，不安是材料。每一件作品都是一次无法预测的爆发。",
    en: "Chaos is the method, unease is the material. Every piece is an unpredictable detonation.",
  },
  accent: "var(--color-magenta)",
  glyph: "乱",
  avatar: avatarImg,
};

export const works: Work[] = [
  { id: "ev-01", creatorId: "erraticvex", category: "mix", name: { zh: "作品 01", en: "Work 01" }, tagline: { zh: "—", en: "—" }, price: 0, forSale: false, colors: ["var(--color-ink)", "var(--color-paper)", "var(--color-magenta)"], pattern: "blob", glyph: "一", image: work01 },
  { id: "ev-02", creatorId: "erraticvex", category: "mix", name: { zh: "作品 02", en: "Work 02" }, tagline: { zh: "—", en: "—" }, price: 0, forSale: false, colors: ["var(--color-magenta)", "var(--color-ink)", "var(--color-paper)"], pattern: "scribble", glyph: "二", image: work02 },
  { id: "ev-03", creatorId: "erraticvex", category: "mix", name: { zh: "作品 03", en: "Work 03" }, tagline: { zh: "—", en: "—" }, price: 0, forSale: false, colors: ["var(--color-paper)", "var(--color-magenta)", "var(--color-ink)"], pattern: "burst", glyph: "三", image: work03 },
  { id: "ev-04", creatorId: "erraticvex", category: "mix", name: { zh: "作品 04", en: "Work 04" }, tagline: { zh: "—", en: "—" }, price: 0, forSale: false, colors: ["var(--color-ink)", "var(--color-magenta)", "var(--color-paper)"], pattern: "grid", glyph: "四", image: work04 },
  { id: "ev-05", creatorId: "erraticvex", category: "mix", name: { zh: "作品 05", en: "Work 05" }, tagline: { zh: "—", en: "—" }, price: 0, forSale: false, colors: ["var(--color-magenta)", "var(--color-paper)", "var(--color-ink)"], pattern: "stripes", glyph: "五", image: work05 },
  { id: "ev-06", creatorId: "erraticvex", category: "mix", name: { zh: "作品 06", en: "Work 06" }, tagline: { zh: "—", en: "—" }, price: 0, forSale: false, colors: ["var(--color-paper)", "var(--color-ink)", "var(--color-magenta)"], pattern: "dots", glyph: "六", image: work06 },
  { id: "ev-07", creatorId: "erraticvex", category: "mix", name: { zh: "作品 07", en: "Work 07" }, tagline: { zh: "—", en: "—" }, price: 0, forSale: false, colors: ["var(--color-ink)", "var(--color-paper)", "var(--color-magenta)"], pattern: "blob", glyph: "七", image: work07 },
  { id: "ev-08", creatorId: "erraticvex", category: "mix", name: { zh: "作品 08", en: "Work 08" }, tagline: { zh: "—", en: "—" }, price: 0, forSale: false, colors: ["var(--color-magenta)", "var(--color-ink)", "var(--color-paper)"], pattern: "scribble", glyph: "八", image: work08 },
  { id: "ev-09", creatorId: "erraticvex", category: "mix", name: { zh: "作品 09", en: "Work 09" }, tagline: { zh: "—", en: "—" }, price: 0, forSale: false, colors: ["var(--color-paper)", "var(--color-magenta)", "var(--color-ink)"], pattern: "burst", glyph: "九", image: work09 },
  { id: "ev-10", creatorId: "erraticvex", category: "mix", name: { zh: "作品 10", en: "Work 10" }, tagline: { zh: "—", en: "—" }, price: 0, forSale: false, colors: ["var(--color-ink)", "var(--color-paper)", "var(--color-magenta)"], pattern: "grid", glyph: "十", image: work10 },
  { id: "ev-11", creatorId: "erraticvex", category: "mix", name: { zh: "作品 11", en: "Work 11" }, tagline: { zh: "—", en: "—" }, price: 0, forSale: false, colors: ["var(--color-magenta)", "var(--color-paper)", "var(--color-ink)"], pattern: "stripes", glyph: "拾壹", image: work11 },
  { id: "ev-12", creatorId: "erraticvex", category: "mix", name: { zh: "作品 12", en: "Work 12" }, tagline: { zh: "—", en: "—" }, price: 0, forSale: false, colors: ["var(--color-paper)", "var(--color-ink)", "var(--color-magenta)"], pattern: "dots", glyph: "拾贰", image: work12 },
];
