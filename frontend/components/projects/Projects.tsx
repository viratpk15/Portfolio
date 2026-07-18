"use client";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";

export default function Projects() {
  // Check which project is the flagship
  const flagshipIndex = projects.findIndex(p => p.flag === "Flagship");
  
  // Create visual rhythm: Large → Small → Medium
  const getProjectSize = (index: number): "large" | "small" | "medium" => {
    if (flagshipIndex === 0) {
      // First project is flagship (large)
      if (index === 0) return "large";
      if (index === 1) return "small";
      return "medium";
    }
    // Otherwise, use first as large
    if (index === 0) return "large";
    if (index === 1) return "small";
    return "medium";
  };

  return (
    <section id="projects" className="py-32">
      <Container>
        <div className="mb-20">
          <SectionTitle
            title="Featured Projects"
            subtitle="Recent Work"
          />
        </div>

        <div>
          {projects.map((project, index) => {
            const size = getProjectSize(index);
            
            return (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProjectCard
                  project={project}
                  index={index}
                  featured={size === "large"}
                />
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}