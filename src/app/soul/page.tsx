import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Soul } from "@/components/Soul";
import { Footer } from "@/components/Footer";
import { content } from "@/data/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: content.zh.soul.title,
  description: content.zh.soul.mission,
  path: "/soul/",
});

export default function SoulPage() {
  return (
    <>
      <Nav subpage />
      <main>
        <Soul />
      </main>
      <Footer />
    </>
  );
}
