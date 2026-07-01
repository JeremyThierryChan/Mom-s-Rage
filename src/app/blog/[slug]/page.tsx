import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allSlugs, getPost } from "@/data/blog";
import { absoluteAssetUrl } from "@/lib/config";
import { pageMetadata } from "@/lib/seo";
import { BlogPostContent } from "./BlogPostContent";

export function generateStaticParams() {
  return allSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMetadata({
    title: post.title.zh,
    description: post.excerpt.zh,
    path: `/blog/${post.slug}/`,
    image: post.cover ? absoluteAssetUrl(post.cover.src) : undefined,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  return <BlogPostContent post={post} />;
}
