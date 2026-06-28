import type { Creator, Work } from "../_types";
import avatarImg from "./images/avatar.jpg";

export const creator: Creator = {
  id: "soul",
  name: { zh: "SOUL大魂", en: "SOUL大魂" },
  handle: "@SOUL大魂",
  role: { zh: "视觉艺术家", en: "Visual Artist" },
  bio: {
    zh: "在版权与创作之间找到自己的位置。",
    en: "Finding a place between copyright and creation.",
  },
  accent: "var(--color-electric)",
  glyph: "魂",
  avatar: avatarImg,
};

export const works: Work[] = [
  {
    id: "soul-licensed",
    creatorId: "soul",
    category: "mix",
    name: { zh: "已获得版权", en: "Licensed Works" },
    tagline: {
      zh: "这些作品已完成版权授权，可用于商业合作。",
      en: "These works have completed copyright licensing and are available for commercial collaboration.",
    },
    price: 0,
    forSale: false,
    colors: ["var(--color-electric)", "var(--color-ink)", "var(--color-paper)"],
    pattern: "burst",
    glyph: "权",
  },
  {
    id: "soul-pending",
    creatorId: "soul",
    category: "mix",
    name: { zh: "正在申请版权", en: "Pending Copyright" },
    tagline: {
      zh: "这些作品版权申请正在进行中，暂不开放商业授权。",
      en: "Copyright applications for these works are in progress. Commercial licensing not yet available.",
    },
    price: 0,
    forSale: false,
    colors: ["var(--color-paper)", "var(--color-ink)", "var(--color-electric)"],
    pattern: "grid",
    glyph: "申",
  },
];
