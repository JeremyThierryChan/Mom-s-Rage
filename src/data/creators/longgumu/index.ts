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
  id: "longgumu",
  name: { zh: "龙骨木", en: "Longgumu" },
  handle: "@longgumu",
  role: { zh: "视觉 · 创作", en: "Visual · Creation" },
  bio: {
    zh: "用图像说话。每一张都是一个态度，不需要解释。",
    en: "Speaks through images. Every piece is a stance — no explanation needed.",
  },
  accent: "var(--color-blood)",
  glyph: "龙",
  avatar: avatarImg,
};

export const works: Work[] = [
  { id: "longgumu-01", creatorId: "longgumu", category: "mix", name: { zh: "作品 01", en: "Work 01" }, tagline: { zh: "—", en: "—" }, price: 0, forSale: false, colors: ["var(--color-blood)", "var(--color-ink)", "var(--color-paper)"], pattern: "blob", glyph: "一", image: work01 },
  { id: "longgumu-02", creatorId: "longgumu", category: "mix", name: { zh: "作品 02", en: "Work 02" }, tagline: { zh: "—", en: "—" }, price: 0, forSale: false, colors: ["var(--color-ink)", "var(--color-blood)", "var(--color-magenta)"], pattern: "scribble", glyph: "二", image: work02 },
  { id: "longgumu-03", creatorId: "longgumu", category: "mix", name: { zh: "作品 03", en: "Work 03" }, tagline: { zh: "—", en: "—" }, price: 0, forSale: false, colors: ["var(--color-blood)", "var(--color-paper)", "var(--color-ink)"], pattern: "burst", glyph: "三", image: work03 },
  { id: "longgumu-04", creatorId: "longgumu", category: "mix", name: { zh: "作品 04", en: "Work 04" }, tagline: { zh: "—", en: "—" }, price: 0, forSale: false, colors: ["var(--color-ink)", "var(--color-paper)", "var(--color-blood)"], pattern: "grid", glyph: "四", image: work04 },
  { id: "longgumu-05", creatorId: "longgumu", category: "mix", name: { zh: "作品 05", en: "Work 05" }, tagline: { zh: "—", en: "—" }, price: 0, forSale: false, colors: ["var(--color-blood)", "var(--color-magenta)", "var(--color-ink)"], pattern: "stripes", glyph: "五", image: work05 },
  { id: "longgumu-06", creatorId: "longgumu", category: "mix", name: { zh: "作品 06", en: "Work 06" }, tagline: { zh: "—", en: "—" }, price: 0, forSale: false, colors: ["var(--color-ink)", "var(--color-blood)", "var(--color-paper)"], pattern: "dots", glyph: "六", image: work06 },
  { id: "longgumu-07", creatorId: "longgumu", category: "mix", name: { zh: "作品 07", en: "Work 07" }, tagline: { zh: "—", en: "—" }, price: 0, forSale: false, colors: ["var(--color-blood)", "var(--color-ink)", "var(--color-electric)"], pattern: "blob", glyph: "七", image: work07 },
  { id: "longgumu-08", creatorId: "longgumu", category: "mix", name: { zh: "作品 08", en: "Work 08" }, tagline: { zh: "—", en: "—" }, price: 0, forSale: false, colors: ["var(--color-ink)", "var(--color-paper)", "var(--color-blood)"], pattern: "scribble", glyph: "八", image: work08 },
  { id: "longgumu-09", creatorId: "longgumu", category: "mix", name: { zh: "作品 09", en: "Work 09" }, tagline: { zh: "—", en: "—" }, price: 0, forSale: false, colors: ["var(--color-blood)", "var(--color-ink)", "var(--color-paper)"], pattern: "burst", glyph: "龙", image: work09 },
  { id: "longgumu-10", creatorId: "longgumu", category: "mix", name: { zh: "作品 10", en: "Work 10" }, tagline: { zh: "—", en: "—" }, price: 0, forSale: false, colors: ["var(--color-ink)", "var(--color-blood)", "var(--color-magenta)"], pattern: "grid", glyph: "龙", image: work10 },
  { id: "longgumu-11", creatorId: "longgumu", category: "mix", name: { zh: "作品 11", en: "Work 11" }, tagline: { zh: "—", en: "—" }, price: 0, forSale: false, colors: ["var(--color-blood)", "var(--color-paper)", "var(--color-ink)"], pattern: "stripes", glyph: "龙", image: work11 },
  { id: "longgumu-12", creatorId: "longgumu", category: "mix", name: { zh: "作品 12", en: "Work 12" }, tagline: { zh: "—", en: "—" }, price: 0, forSale: false, colors: ["var(--color-ink)", "var(--color-paper)", "var(--color-blood)"], pattern: "dots", glyph: "龙", image: work12 },
];
