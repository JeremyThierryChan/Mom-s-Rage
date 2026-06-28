import type { Creator, Work } from "../_types";
import avatarImg from "./images/avatar.jpg";
import licensed01 from "./images/licensed_01.jpg";
import licensed02 from "./images/licensed_02.jpg";
import licensed03 from "./images/licensed_03.jpg";
import licensed04 from "./images/licensed_04.jpg";
import licensed05 from "./images/licensed_05.jpg";
import licensed06 from "./images/licensed_06.jpg";
import pending01 from "./images/pending_01.jpg";
import pending02 from "./images/pending_02.jpg";
import pending03 from "./images/pending_03.jpg";
import pending04 from "./images/pending_04.jpg";
import pending05 from "./images/pending_05.jpg";
import pending06 from "./images/pending_06.jpg";
import pending07 from "./images/pending_07.jpg";
import pending08 from "./images/pending_08.jpg";
import pending09 from "./images/pending_09.jpg";
import pending10 from "./images/pending_10.jpg";
import pending11 from "./images/pending_11.jpg";

export const creator: Creator = {
  id: "soul",
  name: { zh: "SOUL大魂", en: "SOUL大魂" },
  handle: "@SOUL大魂",
  role: { zh: "视觉艺术家", en: "Visual Artist" },
  bio: {
    zh: "黑白两色，喂养世间的奇异造物。",
    en: "Black and white, feeding the strange creatures of this world.",
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
    images: [licensed01, licensed02, licensed03, licensed04, licensed05, licensed06],
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
    images: [pending01, pending02, pending03, pending04, pending05, pending06, pending07, pending08, pending09, pending10, pending11],
  },
];
