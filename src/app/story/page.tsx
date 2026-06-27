import { Nav } from "@/components/Nav";
import { Story } from "@/components/Story";
import { Footer } from "@/components/Footer";

export default function StoryPage() {
  return (
    <>
      <Nav subpage />
      <main>
        <Story />
      </main>
      <Footer />
    </>
  );
}
