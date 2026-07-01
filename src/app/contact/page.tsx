import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { content } from "@/data/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: content.zh.contact.title,
  description: content.zh.contact.lead,
  path: "/contact/",
});

export default function ContactPage() {
  return (
    <>
      <Nav subpage />
      <main>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
