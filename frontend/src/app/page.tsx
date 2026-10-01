import { FloatingNavbar } from "@/components/layout/FloatingNavbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { ScrollProgress } from "@/components/effects/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <FloatingNavbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
