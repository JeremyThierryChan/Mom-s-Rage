import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Partners } from "@/components/Partners";
import { Promises } from "@/components/Promises";
import { Creators } from "@/components/Creators";
import { Footer } from "@/components/Footer";
import { content } from "@/data/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: content.zh.partners.title,
  description: content.zh.partners.lead,
  path: "/partners/",
});

export default function PartnersPage() {
  return (
    <>
      <Nav subpage />
      <main>
        <Partners />
        <Creators />
        <Promises />
      </main>
      <Footer />
    </>
  );
}
