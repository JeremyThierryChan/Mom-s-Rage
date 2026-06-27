import { Nav } from "@/components/Nav";
import { Process } from "@/components/Process";
import { Footer } from "@/components/Footer";

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
