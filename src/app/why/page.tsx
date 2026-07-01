import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Why } from "@/components/Why";
import { Footer } from "@/components/Footer";
import { content } from "@/data/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: content.zh.why.title,
  description: content.zh.why.lead,
  path: "/why/",
});

export default function WhyPage() {
  return (
    <>
      <Nav subpage />
      <main>
        <Why />
      </main>
      <Footer />
    </>
  );
}
