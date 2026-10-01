export type Social = {
  id: string;
  label: string;
  href: string;
  icon: "github" | "mail" | "linkedin";
};

export const socials: Social[] = [
  { id: "email", label: "Email Me", href: "mailto:viratpkgupta1506@gmail.com", icon: "mail" },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/virat-p-k-gupta-436063310",
    icon: "linkedin",
  },
  { id: "github", label: "GitHub", href: "https://github.com/viratpk15", icon: "github" },
];
