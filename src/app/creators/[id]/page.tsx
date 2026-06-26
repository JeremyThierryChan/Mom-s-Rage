import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { creators, getCreator, getCreatorPage } from "@/data/creators";
import { content } from "@/data/content";
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
  return {
    title: `${name} — ${content.zh.meta.title}`,
    description: creator.bio.zh,
  };
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
