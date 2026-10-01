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
    id: "ai-engineering",
    label: "AI Engineering",
    items: [
      "LLMs",
      "Agentic AI",
      "Multi-Agent Systems",
      "LangGraph",
      "LangChain",
      "RAG",
      "Model Context Protocol (MCP)",
      "LlamaIndex",
      "Prompt Engineering",
      "LLM Routing",
    ],
  },
  {
    id: "machine-learning",
    label: "Machine Learning & CV",
    items: [
      "Machine Learning",
      "Deep Learning",
      "Neural Networks",
      "XGBoost",
      "PyTorch",
      "Computer Vision (OpenCV)",
      "scikit-learn",
      "NumPy",
      "pandas",
      "Anomaly Detection",
    ],
  },
  {
    id: "core-cs",
    label: "Core CS",
    items: [
      "Data Structures",
      "Algorithms",
      "OOPS (Java)",
      "Operating Systems",
      "Computer Networks",
      "DBMS",
      "Python",
      "Java",
      "C",
      "SQL",
    ],
  },
  {
    id: "data-infrastructure",
    label: "Data & Infrastructure",
    items: [
      "PostgreSQL",
      "Supabase",
      "ChromaDB",
      "MySQL",
      "Redis",
      "SQLAlchemy",
      "Drizzle ORM",
      "Docker",
      "AWS Cloud Foundations",
      "CI/CD Fundamentals",
    ],
  },
  {
    id: "automation",
    label: "Automation",
    items: [
      "Workflow Orchestration",
      "BullMQ",
      "Job Queues",
      "Google Gmail API",
      "Microsoft Outlook API",
      "REST APIs",
      "Git",
      "GitHub",
    ],
  },
];
