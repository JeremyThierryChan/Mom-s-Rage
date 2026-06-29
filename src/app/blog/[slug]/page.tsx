import { notFound } from "next/navigation";
import { allSlugs, getPost } from "@/data/blog";
import { BlogPostContent } from "./BlogPostContent";

export function generateStaticParams() {
  return allSlugs().map((slug) => ({ slug }));
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
