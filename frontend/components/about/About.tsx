import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeIn from "@/components/animations/FadeIn";
import Image from "next/image";
import { about } from "@/data/about";

export default function About() {
  return (
    <section id="about" className="py-32">
      <Container>
        <div className="mb-20">
          <SectionTitle title={about.title} subtitle="Who I Am" />
        </div>

        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Image with elegant framing */}
          <FadeIn>
            <div className="relative">
              {/* Ambient glow */}
              <div className="pointer-events-none absolute -inset-8 -z-10 rounded-[var(--radius-3xl)] bg-gradient-to-tr from-[var(--color-primary)]/15 to-[var(--color-secondary)]/10 blur-3xl" />
              
              {/* Main image frame */}
              <div className="surface-sheen overflow-hidden rounded-[var(--radius-xl)] border border-[var(--glass-stroke)] bg-[var(--glass-bg)]">
                <div className="relative aspect-[4/5] sm:aspect-[3/4]">
                  <Image
                    src="/images/profile/about.jpg"
                    alt="About Virat"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                  />
                  {/* Subtle overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/30 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Text content with better spacing */}
          <FadeIn delay={0.1}>
            <div className="space-y-8">
              <p className="text-xl leading-8 text-[var(--color-text-primary)] max-w-2xl">
                {about.description1}
              </p>
              <p className="text-lg leading-8 text-[var(--color-text-tertiary)] max-w-2xl">
                {about.description2}
              </p>
              <p className="text-lg leading-8 text-[var(--color-text-tertiary)] max-w-2xl">
                {about.description3}
              </p>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}