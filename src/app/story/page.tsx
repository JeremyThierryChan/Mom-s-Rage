import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Story } from "@/components/Story";
import { Footer } from "@/components/Footer";
import { content } from "@/data/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: content.zh.story.title,
  description: content.zh.story.lead,
  path: "/story/",
});

export default function StoryPage() {
  return (
    <>
      <Nav subpage />
      <main>
        <Story />
      </main>
      <Footer />
    </>
  );
}
