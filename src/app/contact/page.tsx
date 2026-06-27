import { Nav } from "@/components/Nav";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

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
