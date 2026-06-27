import { Nav } from "@/components/Nav";
import { Works } from "@/components/Works";
import { Footer } from "@/components/Footer";

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
