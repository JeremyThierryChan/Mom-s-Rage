import type { Creator, Work } from "../_types";
import avatarImg from "./images/avatar.jpg";

export const creator: Creator = {
  id: "zach",
  name: { zh: "Zach", en: "Zach" },
  handle: "@zach",
  role: { zh: "插画师", en: "Illustrator" },
  bio: {
    zh: "用线条和色彩说话。每一笔都是态度，每一张都是一个世界。",
    en: "Speaks through lines and color. Every stroke is a stance, every piece a world.",
  },
  accent: "var(--color-acid)",
  glyph: "Z",
  avatar: avatarImg,
};

export const works: Work[] = [];
