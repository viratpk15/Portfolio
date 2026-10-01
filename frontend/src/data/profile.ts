export const profile = {
  name: "Virat P K Gupta",
  initials: "VG",
  title: "AI Engineer",
  tagline:
    "I build production-grade AI systems — agentic, retrieval-grounded, and engineered to run.",
  summary:
    "B.E. Computer Science (Artificial Intelligence & Machine Learning) student at Vidyavardhaka College of Engineering, Mysore. I work on LLM-powered applications, agentic AI, retrieval-augmented generation, and multi-agent architectures — with a software engineer's instinct for scalable, maintainable systems.",
  location: "Mysore, India",
  email: "viratpkgupta1506@gmail.com",
  github: "https://github.com/viratpk15",
  linkedin: "https://www.linkedin.com/in/virat-p-k-gupta-436063310",
  resumeUrl: "/assets/virat-gupta-resume.pdf",
  interests: ["Building AI Products", "Fitness", "Basketball"],
} as const;

/** Pull quote displayed in the hero, below the supporting statement. */
export const heroQuote = {
  text: "My unmatched perspicacity coupled with sheer indefatigability makes me a feared opponent in any realm of human endeavor.",
  attribution: "— Virat P K Gupta",
} as const;

/** About section body copy — full paragraphs, no captions. */
export const aboutParagraphs: string[] = [
  "I am a Computer Science student specializing in Artificial Intelligence and Machine Learning at Vidyavardhaka College of Engineering, Mysore, with a CGPA of 9.33.",
  "My work operates at the intersection of AI research and software engineering — translating models, agents, retrieval systems, and data into reliable products.",
  "I build primarily with LLM-powered applications, retrieval-augmented generation, multi-agent systems, workflow orchestration, and intelligent automation.",
  "My approach is deliberate: understand the fundamentals, design the architecture, engineer the system, and make it reliable enough to use in production.",
  "I am particularly interested in the next generation of AI systems — where models do not operate in isolation, but function as coordinated systems of agents, tools, memory, and data.",
];

/** Metric cards displayed in the About section. */
export const aboutMetrics = [
  { id: "cgpa", value: "9.33", label: "CGPA", suffix: "" },
  { id: "systems", value: "7", label: "AI Systems Built", suffix: "+" },
  { id: "specialization", value: "AI/ML", label: "Specialization", suffix: "" },
  { id: "curiosity", value: "\u221E", label: "Things to Build", suffix: "" },
] as const;
