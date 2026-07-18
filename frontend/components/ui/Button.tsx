import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "ghost";
  className?: string;
  external?: boolean;
}

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  external = true,
}: Props) {
  const base =
    "btn-premium relative inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium leading-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]";

  const variants: Record<string, string> = {
    primary:
      "btn-primary text-[var(--color-text-primary)] hover:shadow-[var(--shadow-glow-md)] hover:-translate-y-0.5",
    ghost:
      "btn-ghost text-[var(--color-text-secondary)] hover:border-[var(--glass-stroke-strong)]",
  };

  const content = (
    <span className="relative flex items-center gap-2">
      {children}
      <ArrowUpRight
        size={16}
        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </span>
  );

  const classes = cn(base, variants[variant], className);

  if (href) {
    const isExternal = external && !href.startsWith("#");
    return (
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className={classes}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={classes}>
      {content}
    </button>
  );
}