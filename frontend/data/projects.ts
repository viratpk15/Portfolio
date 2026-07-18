import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "Jarvis AI OS",
    flag: "Flagship",
    status: "In Active Development",
    description:
      "A production-grade multi-agent AI operating system. LangGraph orchestrates specialized agents that combine RAG, MCP tool calling, long-term memory and voice interaction to execute context-aware tasks autonomously. Designed with a scalable production architecture built for real workloads.",
    tech: [
      "Python",
      "FastAPI",
      "LangGraph",
      "LLMs",
      "RAG",
      "MCP",
      "Supabase",
    ],
    github: "https://github.com/viratpk15",
    demo: "#",
    image: "/images/projects/jarvis.svg",
  },

  {
    title: "Neural Workspace",
    tag: "AI Development Environment",
    description:
      "An AI-powered development environment for coding, project planning, documentation and software design. Multiple AI agents, terminal automation and long-term memory drive context-aware workflows engineered to multiply developer productivity.",
    tech: [
      "Next.js",
      "TypeScript",
      "AI Agents",
      "LangChain",
      "Supabase",
    ],
    github: "https://github.com/viratpk15",
    demo: "#",
    image: "/images/projects/neural-workspace.svg",
  },

  {
    title: "NeuroNet AI",
    tag: "Multi-Agent Intelligence",
    description:
      "A multi-agent communication intelligence platform that analyzes communication patterns, sentiment and workflow efficiency with NLP. Agents collaborate to surface actionable insights, built privacy-first for secure organizational analysis.",
    tech: [
      "Python",
      "NLP",
      "Sentiment Analysis",
      "Multi-Agent",
      "FastAPI",
    ],
    github: "https://github.com/viratpk15",
    demo: "#",
    image: "/images/projects/neuronet.svg",
  },
];