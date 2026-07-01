import type { Metadata } from "next";
import { content } from "@/data/content";
import { absoluteUrl, absoluteAssetUrl, asset } from "./config";

const SITE_NAME = content.zh.meta.title;
export const DEFAULT_OG_IMAGE = absoluteAssetUrl(asset("/og-image.jpeg"));

/** Build a page's <title>/description/OG tags from one bilingual-aware call site. */
export function pageMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const fullTitle = path === "/" ? title : `${title} — ${SITE_NAME}`;
  const url = absoluteUrl(path);
  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      type: "website",
      images: [{ url: image, width: 886, height: 886 }],
    },
  };
}
