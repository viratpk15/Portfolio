import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import SkillCard from "./SkillCard";
import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-32">
      <Container>
        <SectionTitle
          title="Skills"
          subtitle="Technology Stack"
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {skillGroups.map((group, index) => (
            <SkillCard
              key={group.title}
              title={group.title}
              skills={group.skills}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}