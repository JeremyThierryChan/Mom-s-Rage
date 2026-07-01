import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { creators, getCreator, getCreatorPage } from "@/data/creators";
import { absoluteAssetUrl } from "@/lib/config";
import { pageMetadata } from "@/lib/seo";
import { CreatorDetail } from "@/components/CreatorDetail";

// Pre-render one static page per creator (required for `output: export`).
export function generateStaticParams() {
  return creators.map((c) => ({ id: c.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const creator = getCreator(id);
  if (!creator) return {};
  const name = `${creator.name.zh} ${creator.name.en}`;
  return pageMetadata({
    title: name,
    description: creator.bio.zh,
    path: `/creators/${creator.id}/`,
    image: creator.avatar ? absoluteAssetUrl(creator.avatar.src) : undefined,
  });
}

export default async function CreatorPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  if (!getCreator(id)) notFound();
  // Use the creator's custom page layout if one is registered,
  // otherwise fall back to the shared default layout.
  const CustomPage = getCreatorPage(id);
  if (CustomPage) return <CustomPage id={id} />;
  return <CreatorDetail id={id} />;
}
