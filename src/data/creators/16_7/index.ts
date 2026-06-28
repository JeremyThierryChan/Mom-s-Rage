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
import work14 from "./images/work_14.jpg";
import work15 from "./images/work_15.jpg";
import work16 from "./images/work_16.jpg";
import work17 from "./images/work_17.jpg";
import work18 from "./images/work_18.jpg";
import work19 from "./images/work_19.jpg";
import work20 from "./images/work_20.jpg";
import work21 from "./images/work_21.jpg";
import work22 from "./images/work_22.jpg";
import work23 from "./images/work_23.jpg";

export const creator: Creator = {
  id: "16_7",
  name: { zh: "十六点七", en: "16.7" },
  handle: "@16_7",
  role: { zh: "视觉创作者", en: "Visual Creator" },
  bio: {
    zh: "在精准与失控之间，找到只属于自己的小数点。",
    en: "Between precision and chaos — finding the decimal point that belongs only to you.",
  },
  accent: "var(--color-magenta)",
  glyph: "七",
  avatar: avatarImg,
};

const images: StaticImageData[] = [work01, work02, work03, work04, work05, work06, work07, work08, work09, work10, work11, work12, work13, work14, work15, work16, work17, work18, work19, work20, work21, work22, work23];

const w = (n: number): Work => ({
  id: `167-${String(n).padStart(2, "0")}`,
  creatorId: "16_7",
  category: "mix",
  name: { zh: `作品 ${String(n).padStart(2, "0")}`, en: `Work ${String(n).padStart(2, "0")}` },
  tagline: { zh: "—", en: "—" },
  price: 0,
  forSale: false,
  colors: [
    ["var(--color-ink)", "var(--color-magenta)", "var(--color-acid)"],
    ["var(--color-acid)", "var(--color-ink)", "var(--color-paper)"],
    ["var(--color-magenta)", "var(--color-paper)", "var(--color-ink)"],
  ][n % 3] as [string, string, string],
  pattern: (["blob", "scribble", "burst", "grid", "stripes", "dots"] as const)[n % 6],
  glyph: "七",
  image: images[n - 1],
});

export const works: Work[] = Array.from({ length: 23 }, (_, i) => w(i + 1));
