"use client";

import { motion } from "framer-motion";
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
          {/* Animated timeline line */}
          <div className="absolute left-4 top-0 bottom-0 hidden w-px md:block">
            <div className="h-full w-full bg-[var(--glass-stroke)]" />
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-secondary)]"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
          
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