/**
 * Project content model.
 * Note: there is deliberately no `tagline` field — positioning one-liners were
 * removed from the design. Titles, categories, and descriptions carry the weight.
 */
export type ProjectVisual =
  | "lisa-ai"
  | "neuronet-ai"
  | "f1-predictor"
  | "aml-investigator"
  | "neurosim-lab"
  | "reachinbox"
  | "ancient-scripts-ai"
  | "neuralworkspace";

export type ProjectFilterCategory =
  | "all"
  | "agentic"
  | "machine-learning"
  | "automation";

export type Project = {
  id: string;
  title: string;
  category: string;
  positioning?: string;
  capabilities?: string[];
  filterCategory: ProjectFilterCategory;
  /** Body paragraphs, rendered in order. */
  description: string[];
  stack: string[];
  /** The single engineering idea the project demonstrates. */
  highlight: string;
  /** GitHub repository URL. Empty/undefined if pending release or private. */
  github?: string;
  /** Real screenshot if present at this path; DemoPlaceholder renders otherwise. */
  demoImage?: string;
  image?: string;
  variant: string;
  visual: ProjectVisual;
  /** Optional architecture flow, rendered as an animated pipeline on scroll. */
  flow?: string[];
};

export const filterTabs = [
  { id: "all", label: "All Systems" },
  { id: "agentic", label: "Agentic AI & Orchestration" },
  { id: "machine-learning", label: "Machine Learning & Telemetry" },
  { id: "automation", label: "Automation & Backend" },

] as const;

export const projects: Project[] = [
  {
    id: "lisa-ai",
    title: "Lisa AIOS",
    positioning: "AUTONOMOUS INTELLIGENCE SYSTEM",
    capabilities: ["AIOS", "AGENTS", "LLM ROUTING", "AUTOMATION", "MCP PROTOCOL"],
    category: "Agentic AI / Autonomous OS / Multi-Agent Orchestration",
    filterCategory: "agentic",
    description: [
      "Lisa AIOS is an all-in-one personal AI operating system engineered around a strict layered architecture that decouples user interfaces, workflow orchestration, long-term memory, MCP tool registries, and heterogeneous LLM inference routing.",
      "Built with LangGraph and FastAPI, Lisa coordinates stateful multi-agent workflows across six specialized production modules: Automated Email Operations (parsing, summarization, and draft synthesis), Knowledge Base RAG (semantic search over uploaded PDFs and markdown files with ChromaDB), AI Code & Assistant Agent with AST reasoning, Live Job & Internship Tracker, Travel Itinerary Planner, and Model Context Protocol (MCP) server execution.",
      "The system features a dual inference engine that dynamically routes queries between low-latency local models via Ollama and high-throughput cloud models via Groq, providing real-time telemetry, full execution graph observability, and zero prompt-chain opacity.",
    ],
    stack: [
      "LangGraph",
      "LangChain",
      "Model Context Protocol (MCP)",
      "FastAPI",
      "RAG & ChromaDB",
      "Groq & Llama 3",
      "Ollama",
      "Python 3.12",
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "Docker",
    ],
    highlight:
      "Architecting an observable, tool-augmented personal operating system that turns LLMs into stateful, coordinated agents with persistent memory and MCP interoperability.",
    github: "https://github.com/viratpk15/Lisa-AI.git",
    image: "/demos/lisa-ai.png",
    demoImage: "/demos/lisa-ai.png",
    variant: "lisa-ai",
    visual: "lisa-ai",
    flow: [
      "User / Web UI",
      "FastAPI Gateway",
      "LangGraph Orchestrator",
      "Specialized Agents",
      "MCP Tools & RAG Memory",
      "Ollama / Groq LLMs",
      "Observable Execution",
    ],
  },
  {
    id: "neuronet-ai",
    title: "NeuroNet AI",
    positioning: "ORGANIZATIONAL GRAPH INTELLIGENCE",
    capabilities: ["KNOWLEDGE GRAPH", "MULTI-AGENT", "DIALOGUE EXTRACTION", "TELEMETRY"],
    category: "Multi-Agent AI / Knowledge Graph / Organizational Intelligence",
    filterCategory: "agentic",
    description: [
      "NeuroNet AI is an enterprise collaboration intelligence platform that ingests unstructured team communication data across Slack, GitHub PRs, and Jira tickets, converting fragmented operational chatter into queryable organizational intelligence.",
      "The system deploys specialized AI agents for multi-turn dialogue comprehension, automated milestone and task extraction, cross-team sentiment analysis, and named-entity recognition. An interactive, directed knowledge graph maps semantic relationships between developers, pull requests, issues, and delivery blockers.",
      "Features an executive AI overview dashboard, natural-language graph querying, private cloud compute telemetry, and multi-format dossier export (PDF, Markdown, JSON) engineered with a strict privacy-first local data isolation model.",
    ],
    stack: [
      "Python 3.12",
      "FastAPI",
      "Knowledge Graphs",
      "PostgreSQL",
      "SQLAlchemy",
      "Next.js 15",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Docker",
    ],
    highlight:
      "Transforming noisy human conversation streams into a structured, queryable knowledge graph that maps organizational knowledge and dependencies in real time.",
    github: "https://github.com/viratpk15/NeuroNetAI.git",
    image: "/demos/neuronet-ai.png",
    demoImage: "/demos/neuronet-ai.png",
    variant: "neuronet-ai",
    visual: "neuronet-ai",
    flow: [
      "Communication Ingestion",
      "Multi-Agent Extractor",
      "Knowledge Graph",
      "Analytics Dashboard",
      "Intelligence Reports",
    ],
  },
  {
    id: "neuralworkspace",
    title: "NeuralWorkspace.ai",
    positioning: "INTEGRATED AI DEVELOPMENT ENVIRONMENT",
    capabilities: ["PNPM MONOREPO", "CANVAS STUDIO", "AGENT RUNTIME", "DRIZZLE ORM"],
    category: "Full-Stack AI / Developer Tools / Monorepo Architecture",
    filterCategory: "agentic",
    description: [
      "NeuralWorkspace.ai is an integrated AI development workspace that treats real-time LLM interaction, architectural design, documentation, and task tracking as interconnected modules of a single development environment.",
      "Engineered as a clean pnpm monorepo with 100% TypeScript coverage across frontend and backend services. The system features multi-model support (Google Gemini and local Ollama), a canvas architecture design studio, and a documentation knowledge base.",
      "End-to-end type safety is guaranteed across all boundaries using Drizzle ORM for PostgreSQL queries, Zod for runtime schema validation, and React Query for optimistic client state management.",
    ],
    stack: [
      "TypeScript",
      "React 19",
      "Vite 7",
      "Tailwind CSS 4",
      "Express 5",
      "Node.js",
      "Drizzle ORM",
      "PostgreSQL",
      "Google Generative AI SDK",
      "Ollama",
      "pnpm",
      "Radix UI",
      "Zod",
      "React Query",
    ],
    highlight:
      "Unifying conversations, system architecture diagrams, living documentation, and sprint boards into a type-safe, monorepo AI engineering environment.",
    github: "", // Repo pending release
    image: "/demos/neuralworkspace.png",
    demoImage: "/demos/neuralworkspace.png",
    variant: "neuralworkspace",
    visual: "neuralworkspace",
    flow: [
      "Monorepo Core",
      "Unified Workspace UI",
      "LLM Agent Engine",
      "Canvas Studio",
      "PostgreSQL / Drizzle",
      "Verified Deployment",
    ],
  },
  {
    id: "aml-investigator",
    title: "AML Agentic Investigator",
    positioning: "ADVERSARIAL AGENTIC COMPLIANCE ENGINE",
    capabilities: ["ADVERSARIAL AGENTS", "ISOLATION FOREST", "GRAPH VERIFICATION", "LEGAL DOSSIER"],
    category: "Agentic AI / Machine Learning / Financial Crime Detection",
    filterCategory: "agentic",
    description: [
      "AML Agentic Investigator is an enterprise-grade Anti-Money Laundering investigation copilot that pairs deterministic graph verification and unsupervised anomaly detection with an adversarial LangGraph multi-agent orchestrator.",
      "The ingestion pipeline processes synthetic bank transaction statements (PDFs via PyMuPDF), parses structured ledgers, and applies Isolation Forest algorithms and graph centrality metrics to detect layering, structuring, and suspicious transaction velocity across directed counterparty networks.",
      "A strict evidence-grounding contract ensures the LLM never synthesizes financial data — all entities, dates, sums, and anomaly scores originate from an immutable CanonicalEvidence structure. An adversarial compliance critic agent validates every claim against the ledger, triggering deterministic graph revision cycles if discrepancies arise, and producing legally verifiable 14-section investigation dossiers.",
    ],
    stack: [
      "Python",
      "LangGraph",
      "LangChain",
      "Isolation Forest",
      "scikit-learn",
      "PyMuPDF",
      "NetworkX",
      "RAG & Vector Search",
      "Pydantic v2",
      "FastAPI",
      "Gradio",
    ],
    highlight:
      "Combining deterministic rules, machine-learning anomaly detection, and adversarial agent verification into an investigation pipeline with mathematically grounded legal provenance.",
    github: "https://github.com/viratpk15/AML-Agentic-Investigator.git",
    image: "/demos/aml-investigator.png",
    demoImage: "/demos/aml-investigator.png",
    variant: "aml-investigator",
    visual: "aml-investigator",
    flow: [
      "PDF Bank Statement",
      "PyMuPDF Extraction",
      "Parser & Validator",
      "Rules & Isolation Forest",
      "LangGraph Orchestrator",
      "Investigator / Profiler",
      "Adversarial Critic",
      "14-Section Dossier",
    ],
  },
  {
    id: "neurosim-lab",
    title: "NeuroSim Lab",
    positioning: "OBSERVABLE DEEP LEARNING WORKBENCH",
    capabilities: ["LIVE KATEX MATH", "FORWARD SIMULATION", "BACKPROPAGATION", "AI DIAGNOSIS"],
    category: "Deep Learning / Computational Mathematics / Interactive Visualizer",
    filterCategory: "machine-learning",
    description: [
      "NeuroSim Lab is an interactive deep-learning laboratory and neural network workbench that eliminates black-box abstraction by making every internal computation completely observable.",
      "Users visually design neural architectures (drag-and-drop Conv2D layers, BatchNorm, Pooling, and custom mathematical activations) and train them across 12 educational datasets. Every neuron exposes real floating-point mathematical computations — z = Σwᵢxᵢ + b and a = f(z) — rendered live with KaTeX.",
      "The platform features real-time forward pass step visualizers, animated backpropagation with weight update verification, weight distribution heatmaps, gradient histograms with dead ReLU neuron detection, and an AI diagnostic system that detects training bottlenecks like vanishing gradients, numerical instability, and overfitting.",
    ],
    stack: [
      "React 18",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "React Flow",
      "Recharts",
      "KaTeX",
      "FastAPI",
      "PyTorch",
      "NumPy",
      "pandas",
      "scikit-learn",
    ],
    highlight:
      "Understanding the neural engine before building on top of it — calculating and rendering genuine live floating-point computations and gradients rather than static mock visualizations.",
    github: "https://github.com/viratpk15/ANN-Simulation-neural-network-simulation-.git",
    image: "/demos/neurosim-lab.png",
    demoImage: "/demos/neurosim-lab.png",
    variant: "neurosim-lab",
    visual: "neurosim-lab",
    flow: [
      "Dataset Selection",
      "Visual Layer Architecture",
      "Forward Pass Simulation",
      "Live Math & KaTeX Inspector",
      "Backpropagation & Gradients",
      "AI Diagnosis System",
    ],
  },
  {
    id: "reachinbox",
    title: "ReachInbox Email Scheduler",
    positioning: "RESILIENT DISTRIBUTED WORKFLOW ENGINE",
    capabilities: ["BULLMQ QUEUES", "RATE PACING", "DISTRIBUTED WORKERS", "AI CONTEXT ENGINE"],
    category: "Distributed Systems / AI Automation / Asynchronous Workflows",
    filterCategory: "automation",
    description: [
      "ReachInbox Email Scheduler is an enterprise email workflow automation platform that parses and schedules high-volume outbound campaigns across Google Workspace and Microsoft Outlook accounts with intelligent delivery pacing.",
      "Engineered around production resilience principles, the system decouples email generation from the HTTP request cycle using BullMQ and Redis queues. It implements sliding-window rate limit protection, automatic exponential backoff, worker cluster monitoring, and live delivery state tracking.",
      "An integrated AI context engine evaluates email threads, categorizes lead sentiment, and drafts customized responses while automated scheduling guarantees compliance with provider sending quotas and anti-spam limits.",
    ],
    stack: [
      "TypeScript",
      "Node.js",
      "Express",
      "BullMQ",
      "Redis",
      "OpenAI API",
      "Google Gmail API",
      "Microsoft Outlook API",
      "Docker",
    ],
    highlight:
      "Architecting resilient, asynchronous job queues and rate-limited worker pipelines rather than treating mission-critical automation as brittle synchronous API calls.",
    github: "https://github.com/viratpk15/reachinbox-email-scheduler.git",
    image: "/demos/reachinbox.png",
    demoImage: "/demos/reachinbox.png",
    variant: "reachinbox",
    visual: "reachinbox",
    flow: [
      "Email Ingestion",
      "AI Context Analysis",
      "Response Engine",
      "BullMQ / Redis Queue",
      "Rate-Limited Delivery",
      "Live Telemetry",
    ],
  },
];
