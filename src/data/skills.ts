export type SkillGroup = {
  id: string;
  label: string;
  items: string[];
};

/**
 * Skill categories only — no taglines or descriptive captions.
 * Category name + the technologies themselves carry the meaning.
 */
export const skillGroups: SkillGroup[] = [
  {
    id: "ml-genai",
    label: "ML & Generative AI",
    items: [
      "Machine Learning",
      "Deep Learning Fundamentals",
      "LLMs",
      "RAG",
      "Prompt Engineering",
      "Scikit-learn",
      "PyTorch",
      "Pandas",
      "NumPy",
    ],
  },
  {
    id: "ai-agents",
    label: "AI Agents & Orchestration",
    items: [
      "AI Agents",
      "Multi-Agent Systems",
      "LangGraph",
      "LangChain",
      "MCP",
      "Tool Calling",
      "Agentic Workflows",
      "LLM Routing",
    ],
  },
  {
    id: "full-stack",
    label: "Full-Stack AI Engineering",
    items: [
      "Python",
      "FastAPI",
      "Flask",
      "React",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "REST APIs",
      "Supabase",
    ],
  },
  {
    id: "engineering-infra",
    label: "Engineering & Infrastructure",
    items: [
      "SQL",
      "MySQL",
      "ChromaDB",
      "Vector Databases",
      "Git",
      "GitHub",
      "Docker",
      "CI/CD",
      "Pytest",
      "Vitest",
      "OpenCV",
      "API Security",
      "Java",
      "C",
      "OOP",
      "Data Structures & Algorithms",
    ],
  },
];
