import type { Creator, Work } from "../../_types";

export const creator: Creator = {
  id: "dianying",
  name: { zh: "电影", en: "Diànyǐng" },
  handle: "@dianying_frames",
  role: { zh: "影像 · 收藏", en: "Film · Collectibles" },
  bio: {
    zh: "把看过的电影装进口袋。有些东西值得带走。",
    en: "Carry the films you've seen in your pocket. Some things are worth taking home.",
  },
  accent: "var(--color-orange)",
  glyph: "影",
};

export const works: Work[] = [
  {
    id: "dianying-frame-pin",
    creatorId: "dianying",
    category: "goods",
    name: { zh: "帧截图徽章", en: "Still Frame Pin" },
    tagline: { zh: "你永远记得那一秒", en: "You'll always remember that one second" },
    price: 49,
    forSale: true,
    colors: ["var(--color-ink)", "var(--color-orange)", "var(--color-paper)"],
    pattern: "stripes",
    glyph: "帧",
  },
  {
    id: "dianying-reel-tote",
    creatorId: "dianying",
    category: "goods",
    name: { zh: "胶卷帆布袋", en: "Film Reel Tote" },
    tagline: { zh: "带着你的收藏去任何地方", en: "Take your collection anywhere" },
    price: 79,
    forSale: true,
    colors: ["var(--color-orange)", "var(--color-ink)", "var(--color-acid)"],
    pattern: "grid",
    glyph: "卷",
  },
  {
    id: "dianying-poster-print",
    creatorId: "dianying",
    category: "ip",
    name: { zh: "再造海报·样稿", en: "Remade Poster · Sample" },
    tagline: { zh: "不是复制，是重新爱一遍", en: "Not a copy — loving it all over again" },
    price: 0,
    forSale: false,
    colors: ["var(--color-blood)", "var(--color-orange)", "var(--color-ink)"],
    pattern: "burst",
    glyph: "映",
  },
];
