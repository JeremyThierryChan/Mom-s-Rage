import { Nav } from "@/components/Nav";
import { Partners } from "@/components/Partners";
import { Promises } from "@/components/Promises";
import { Creators } from "@/components/Creators";
import { Footer } from "@/components/Footer";

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
