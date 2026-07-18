"use client";

import Container from "@/components/ui/Container";
import HeroImage from "./HeroImage";
import HeroText from "./HeroText";
import ScrollIndicator from "@/components/ui/ScrollIndicator";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center pt-32">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <HeroText />
          <HeroImage />
        </div>
      </Container>

      <ScrollIndicator />
    </section>
  );
}