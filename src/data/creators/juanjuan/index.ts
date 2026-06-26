import type { Creator, Work } from "../_types";
import avatarImg from "./images/juanjuan.jpg";

export const creator: Creator = {
  id: "juanjuan",
  name: { zh: "卷卷", en: "Juǎnjuǎn" },
  handle: "@juanjuan_rage",
  role: { zh: "妆造 · 视觉", en: "Makeup · Visual Art" },
  bio: {
    zh: "用脸当画布，把愤怒画成最耀眼的颜色。每一次出门都是一场宣言。",
    en: "Uses her face as a canvas, painting rage into the most blinding colors. Every outing is a manifesto.",
  },
  accent: "var(--color-magenta)",
  glyph: "卷",
  avatar: avatarImg,
};

export const works: Work[] = [
  {
    id: "juanjuan-look-01",
    creatorId: "juanjuan",
    category: "ip",
    name: { zh: "蓝粉暴怒妆·01", en: "Blue Rage Look · 01" },
    tagline: { zh: "闭上眼，世界看见你了", en: "Close your eyes — the world finally sees you" },
    price: 0,
    forSale: false,
    colors: ["var(--color-cyan)", "var(--color-magenta)", "var(--color-paper)"],
    pattern: "blob",
    glyph: "蓝",
  },
  {
    id: "juanjuan-tutorial",
    creatorId: "juanjuan",
    category: "ip",
    name: { zh: "妈见打妆教程", en: "Mom's Rage Tutorial" },
    tagline: { zh: "让妈妈再皱一次眉", en: "Make mom frown one more time" },
    price: 0,
    forSale: false,
    colors: ["var(--color-magenta)", "var(--color-electric)", "var(--color-ink)"],
    pattern: "burst",
    glyph: "妆",
  },
  {
    id: "juanjuan-kit",
    creatorId: "juanjuan",
    category: "goods",
    name: { zh: "暴怒妆容包", en: "Rage Kit" },
    tagline: { zh: "你也可以这样出门", en: "You can walk out like this too" },
    price: 199,
    forSale: true,
    colors: ["var(--color-cyan)", "var(--color-magenta)", "var(--color-acid)"],
    pattern: "dots",
    glyph: "盒",
  },
];
