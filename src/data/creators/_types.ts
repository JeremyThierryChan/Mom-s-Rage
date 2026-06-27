export type WorkCategory = "ip" | "clay" | "apparel" | "goods" | "mix";

export type WorkPattern = "stripes" | "dots" | "blob" | "grid" | "burst" | "scribble";

export type Work = {
  id: string;
  creatorId: string;
  category: WorkCategory;
  name: { zh: string; en: string };
  tagline: { zh: string; en: string };
  price: number;
  forSale: boolean;
  priceOnInquiry?: boolean;
  colors: [string, string, string];
  pattern: WorkPattern;
  glyph: string;
  image?: string;
};

import type { StaticImageData } from "next/image";

export type Creator = {
  id: string;
  name: { zh: string; en: string };
  handle: string;
  role: { zh: string; en: string };
  bio: { zh: string; en: string };
  accent: string;
  glyph: string;
  avatar?: StaticImageData;
};
