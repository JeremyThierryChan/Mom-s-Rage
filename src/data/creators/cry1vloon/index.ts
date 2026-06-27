import type { Creator, Work } from "../_types";
import avatarImg from "./images/avatar.jpg";

export const creator: Creator = {
  id: "cry1vloon",
  name: { zh: "Cry1vloOn", en: "Cry1vloOn" },
  handle: "@cry1vloon",
  role: { zh: "视觉创作者", en: "Visual Creator" },
  bio: {
    zh: "情绪是素材，画面是出口。在失控与克制之间找到属于自己的频率。",
    en: "Emotion is material, image is the exit. Finding a personal frequency between chaos and control.",
  },
  accent: "var(--color-electric)",
  glyph: "哭",
  avatar: avatarImg,
};

export const works: Work[] = [
  { id: "c1-01", creatorId: "cry1vloon", category: "mix", name: { zh: "作品 01", en: "Work 01" }, tagline: { zh: "—", en: "—" }, price: 0, forSale: false, colors: ["var(--color-electric)", "var(--color-ink)", "var(--color-paper)"], pattern: "blob", glyph: "一" },
  { id: "c1-02", creatorId: "cry1vloon", category: "mix", name: { zh: "作品 02", en: "Work 02" }, tagline: { zh: "—", en: "—" }, price: 0, forSale: false, colors: ["var(--color-ink)", "var(--color-electric)", "var(--color-paper)"], pattern: "scribble", glyph: "二" },
  { id: "c1-03", creatorId: "cry1vloon", category: "mix", name: { zh: "作品 03", en: "Work 03" }, tagline: { zh: "—", en: "—" }, price: 0, forSale: false, colors: ["var(--color-paper)", "var(--color-ink)", "var(--color-electric)"], pattern: "burst", glyph: "三" },
  { id: "c1-04", creatorId: "cry1vloon", category: "mix", name: { zh: "作品 04", en: "Work 04" }, tagline: { zh: "—", en: "—" }, price: 0, forSale: false, colors: ["var(--color-electric)", "var(--color-paper)", "var(--color-ink)"], pattern: "grid", glyph: "四" },
  { id: "c1-05", creatorId: "cry1vloon", category: "mix", name: { zh: "作品 05", en: "Work 05" }, tagline: { zh: "—", en: "—" }, price: 0, forSale: false, colors: ["var(--color-ink)", "var(--color-paper)", "var(--color-electric)"], pattern: "stripes", glyph: "五" },
  { id: "c1-06", creatorId: "cry1vloon", category: "mix", name: { zh: "作品 06", en: "Work 06" }, tagline: { zh: "—", en: "—" }, price: 0, forSale: false, colors: ["var(--color-paper)", "var(--color-electric)", "var(--color-ink)"], pattern: "dots", glyph: "六" },
  { id: "c1-07", creatorId: "cry1vloon", category: "mix", name: { zh: "作品 07", en: "Work 07" }, tagline: { zh: "—", en: "—" }, price: 0, forSale: false, colors: ["var(--color-electric)", "var(--color-ink)", "var(--color-paper)"], pattern: "blob", glyph: "七" },
  { id: "c1-08", creatorId: "cry1vloon", category: "mix", name: { zh: "作品 08", en: "Work 08" }, tagline: { zh: "—", en: "—" }, price: 0, forSale: false, colors: ["var(--color-ink)", "var(--color-electric)", "var(--color-paper)"], pattern: "scribble", glyph: "八" },
  { id: "c1-09", creatorId: "cry1vloon", category: "mix", name: { zh: "作品 09", en: "Work 09" }, tagline: { zh: "—", en: "—" }, price: 0, forSale: false, colors: ["var(--color-paper)", "var(--color-ink)", "var(--color-electric)"], pattern: "burst", glyph: "九" },
  { id: "c1-10", creatorId: "cry1vloon", category: "mix", name: { zh: "作品 10", en: "Work 10" }, tagline: { zh: "—", en: "—" }, price: 0, forSale: false, colors: ["var(--color-electric)", "var(--color-paper)", "var(--color-ink)"], pattern: "grid", glyph: "十" },
  { id: "c1-11", creatorId: "cry1vloon", category: "mix", name: { zh: "作品 11", en: "Work 11" }, tagline: { zh: "—", en: "—" }, price: 0, forSale: false, colors: ["var(--color-ink)", "var(--color-paper)", "var(--color-electric)"], pattern: "stripes", glyph: "拾壹" },
  { id: "c1-12", creatorId: "cry1vloon", category: "mix", name: { zh: "作品 12", en: "Work 12" }, tagline: { zh: "—", en: "—" }, price: 0, forSale: false, colors: ["var(--color-paper)", "var(--color-electric)", "var(--color-ink)"], pattern: "dots", glyph: "拾贰" },
];
