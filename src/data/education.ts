export type EducationItem = {
  id: string;
  institution: string;
  credential: string;
  metric: string;
  period?: string;
};

export const education: EducationItem[] = [
  {
    id: "vvce",
    institution: "Vidyavardhaka College of Engineering, Mysore",
    credential: "B.E. in Computer Science (Artificial Intelligence & Machine Learning)",
    metric: "CGPA 9.33",
  },
  {
    id: "bgs-pu",
    institution: "BGS PU College, Ramanagar",
    credential: "12th Standard",
    metric: "93.33%",
  },
  {
    id: "airs",
    institution: "Arvind International Residential School, Kunigal",
    credential: "10th Standard (CBSE)",
    metric: "91.8%",
  },
];

export type Certification = {
  id: string;
  name: string;
};

export const certifications: Certification[] = [
  { id: "aws-cf", name: "AWS Academy Cloud Foundations" },
  { id: "agentic-ai", name: "Agentic AI Workshop" },
];
