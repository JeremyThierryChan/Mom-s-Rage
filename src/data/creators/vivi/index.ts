import type { Creator, Work } from "../_types";
import avatarImg from "./images/avatar.jpg";

export const creator: Creator = {
  id: "vivi",
  name: { zh: "Vivi", en: "Vivi" },
  handle: "@vi_vi_art_lab",
  role: { zh: "艺术实验室", en: "Art Lab" },
  bio: {
    zh: "实验是唯一的方法论。不停试错，不停生长，不停输出让自己满意的东西。",
    en: "Experimentation is the only methodology. Keep testing, keep growing, keep outputting what satisfies the self.",
  },
  accent: "var(--color-cyan)",
  glyph: "薇",
  avatar: avatarImg,
};

export const works: Work[] = [];
