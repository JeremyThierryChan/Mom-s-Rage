import type { Creator, Work } from "../_types";
import type { StaticImageData } from "next/image";
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
import work13 from "./images/work_13.jpg";

export const creator: Creator = {
  id: "co1dvvv",
  name: { zh: "Co1dvvv", en: "Co1dvvv" },
  handle: "@co1dvvv",
  role: { zh: "视觉创作者", en: "Visual Creator" },
  bio: {
    zh: "冷静的眼睛，热烈的笔触。",
    en: "A cold eye, a burning line.",
  },
  accent: "var(--color-electric)",
  glyph: "冷",
  avatar: avatarImg,
};

const images: StaticImageData[] = [work01, work02, work03, work04, work05, work06, work07, work08, work09, work10, work11, work12, work13];

const w = (n: number): Work => ({
  id: `co1dvvv-${String(n).padStart(2, "0")}`,
  creatorId: "co1dvvv",
  category: "mix",
  name: { zh: `作品 ${String(n).padStart(2, "0")}`, en: `Work ${String(n).padStart(2, "0")}` },
  tagline: { zh: "—", en: "—" },
  price: 0,
  forSale: false,
  colors: [
    ["var(--color-ink)", "var(--color-electric)", "var(--color-paper)"],
    ["var(--color-electric)", "var(--color-ink)", "var(--color-magenta)"],
    ["var(--color-paper)", "var(--color-ink)", "var(--color-electric)"],
  ][n % 3] as [string, string, string],
  pattern: (["blob", "scribble", "burst", "grid", "stripes", "dots"] as const)[n % 6],
  glyph: "冷",
  image: images[n - 1],
});

export const works: Work[] = Array.from({ length: 13 }, (_, i) => w(i + 1));
