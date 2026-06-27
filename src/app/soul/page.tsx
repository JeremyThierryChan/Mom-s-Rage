import { Nav } from "@/components/Nav";
import { Soul } from "@/components/Soul";
import { Footer } from "@/components/Footer";

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
