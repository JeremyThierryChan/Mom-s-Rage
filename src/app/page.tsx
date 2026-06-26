import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Story } from "@/components/Story";
import { Why } from "@/components/Why";
import { Soul } from "@/components/Soul";
import { Works } from "@/components/Works";
import { Process } from "@/components/Process";
import { Partners } from "@/components/Partners";
import { Promises } from "@/components/Promises";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Story />
        <Why />
        <Soul />
        <Works />
        <Process />
        <Partners />
        <Promises />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
