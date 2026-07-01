import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Works } from "@/components/Works";
import { Footer } from "@/components/Footer";
import { content } from "@/data/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: content.zh.works.title,
  description: content.zh.works.lead,
  path: "/works/",
});

export default function WorksPage() {
  return (
    <>
      <Nav subpage />
      <main>
        <Works />
      </main>
      <Footer />
    </>
  );
}
