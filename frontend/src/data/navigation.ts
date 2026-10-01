export type NavItem = {
  id: string;
  label: string;
  href: string;
};

export const navigation: NavItem[] = [
  { id: "top", label: "Home", href: "#top" },
  { id: "about", label: "About", href: "#about" },
  { id: "capabilities", label: "Skills", href: "#capabilities" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "contact", label: "Contact", href: "#contact" },
];
