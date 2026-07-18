import Background from "@/components/effects/Background";
import Navbar from "@/components/layout/Navbar";

import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";
import Education from "@/components/education/Education";
import Certifications from "@/components/certifications/Certifications";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Background />

      <Navbar />

      <main className="relative z-[1]">
        <Hero />

        <About />

        <Skills />

        <Projects />

        <Education />

        <Certifications />

        <Contact />
      </main>

      <Footer />
    </>
  );
}