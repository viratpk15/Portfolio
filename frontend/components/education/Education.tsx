import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import EducationCard from "./EducationCard";
import { education } from "@/data/education";

export default function Education() {
  return (
    <section
      id="education"
      className="py-32"
    >
      <Container>
        <div className="mb-20">
          <SectionTitle
            title="Education"
            subtitle="Academic Journey"
          />
        </div>

        {/* Timeline container */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 hidden w-px bg-gradient-to-b from-[var(--color-primary)]/30 via-[var(--glass-stroke)] to-transparent md:block" />
          
          <div className="space-y-10">
            {education.map((item, index) => (
              <EducationCard
                key={item.degree}
                {...item}
                index={index}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}