import type { Creator, Work } from "../_types";
import avatarImg from "./images/avatar.jpg";

export const creator: Creator = {
  id: "kalare",
  name: { zh: "屿桑", en: "Kalare" },
  handle: "@Kyusung_07 / @k_alaree",
  role: { zh: "手作 · 设计", en: "Handcraft · Design" },
  bio: {
    zh: "我喜欢将我的情绪宣泄出来，我喜欢幻想，愿意待在稳定的环境，讨厌市侩说教命令刻板。",
    en: "I like pouring my emotions out. I like fantasy. I prefer stable environments, and I hate being preached at or put in a box.",
  },
  accent: "var(--color-acid)",
  glyph: "屿",
  avatar: avatarImg,
};

export const works: Work[] = [
  {
    id: "kalare-knight",
    creatorId: "kalare",
    category: "goods",
    name: { zh: "骑士（无脸女孩）", en: "Knight (Faceless Girl)" },
    tagline: {
      zh: "最近听Allie X的gwnf这张专辑比较多，灵感来自bon voyage的MV截图，采用黑银配色突出盔甲的冷峻感，同时也展示了征服之力",
      en: "Inspired by Allie X's GWNF album and bon voyage MV stills — black and silver palette to evoke armour's cold authority.",
    },
    price: 0,
    forSale: false,
    colors: ["var(--color-ink)", "var(--color-paper)", "var(--color-acid)"],
    pattern: "burst",
    glyph: "骑",
  },
  {
    id: "kalare-hollywood",
    creatorId: "kalare",
    category: "goods",
    name: { zh: "好莱坞", en: "Hollywood" },
    tagline: {
      zh: "因为很喜欢super sunset这专辑，又喜欢歌词里的复古感，凭此为灵感制作了四个卡砖",
      en: "Drawn from the retro feel of the super sunset album — four card bricks born from the lyrics.",
    },
    price: 0,
    forSale: false,
    colors: ["var(--color-acid)", "var(--color-blood)", "var(--color-ink)"],
    pattern: "grid",
    glyph: "莱",
  },
];
