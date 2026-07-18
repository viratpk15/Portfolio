import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeIn from "@/components/animations/FadeIn";
import { Award } from "lucide-react";

import { certifications } from "@/data/certifications";

export default function Certifications() {
  return (
    <section id="certifications" className="py-32">
      <Container>
        <div className="mb-20">
          <SectionTitle title="Certifications" subtitle="Credentials" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {certifications.map((cert, index) => (
            <FadeIn key={cert.title} delay={index * 0.08}>
              <article className="surface-sheen card-hover group relative flex h-full flex-col rounded-[var(--radius-xl)] border border-[var(--glass-stroke)] bg-[var(--glass-bg)] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1">
                {/* Icon with premium treatment */}
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-[var(--radius-lg)] border border-[var(--glass-stroke-accent)] bg-[var(--glass-bg-intense)] text-[var(--color-primary)]">
                  <Award size={24} />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold tracking-tight text-[var(--color-text-primary)]">
                    {cert.title}
                  </h3>
                  <p className="text-sm font-medium text-[var(--color-primary)]">
                    {cert.issuer}
                  </p>
                  <p className="leading-7 text-[var(--color-text-tertiary)]">
                    {cert.description}
                  </p>
                </div>

                {/* Decorative glow on hover */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[var(--color-primary)]/5 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}