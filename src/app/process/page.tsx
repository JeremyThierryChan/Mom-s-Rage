import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Process } from "@/components/Process";
import { Footer } from "@/components/Footer";
import { content } from "@/data/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: content.zh.process.title,
  description: content.zh.process.cta,
  path: "/process/",
});

export default function ProcessPage() {
  return (
    <>
      <Nav subpage />
      <main>
        <Process />
      </main>
      <Footer />
    </>
  );
}
