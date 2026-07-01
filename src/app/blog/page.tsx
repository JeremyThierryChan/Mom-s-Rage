import type { Metadata } from "next";
import { content } from "@/data/content";
import { pageMetadata } from "@/lib/seo";
import { BlogIndexContent } from "./BlogIndexContent";

export const metadata: Metadata = pageMetadata({
  title: content.zh.blog.title,
  description: content.zh.blog.lead,
  path: "/blog/",
});

export default function BlogPage() {
  return <BlogIndexContent />;
}
