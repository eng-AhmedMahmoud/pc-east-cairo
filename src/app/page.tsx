import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { Coverage } from "@/components/Coverage";
import { Why } from "@/components/Why";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:right-4 focus:z-[60] focus:rounded-sm focus:bg-red focus:px-4 focus:py-2 focus:font-bold focus:text-white"
      >
        تخطَّ إلى المحتوى
      </a>
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Coverage />
        <Why />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
