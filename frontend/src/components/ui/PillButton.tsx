"use client";

import React from "react";
import { ArrowRight, ArrowUpRight, ArrowDown } from "lucide-react";

export interface PillButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "icon";
  href?: string;
  target?: string;
  rel?: string;
  external?: boolean;
  arrow?: "right" | "up-right" | "down" | "none";
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

export function PillButton({
  variant = "primary",
  href,
  target,
  rel,
  external,
  arrow = "none",
  icon,
  children,
  className = "",
  ...props
}: PillButtonProps) {
  const baseClasses =
    "group inline-flex items-center justify-center gap-2.5 rounded-full text-[15px] tracking-[0.02em] font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-(--accent-primary)";

  const variantClasses = {
    primary:
      "text-btn-ink px-6 py-3.5 shadow-md hover:brightness-105 active:scale-[0.98]",
    secondary:
      "border border-line bg-glass backdrop-blur-xl text-ink px-6 py-3.5 hover:border-(--accent-primary)/60 hover:text-(--accent-primary) hover:bg-glass-light active:scale-[0.98]",
    icon:
      "h-12 w-12 rounded-full border border-line bg-glass backdrop-blur-xl text-(--accent-primary) hover:border-(--accent-primary) hover:bg-(--accent-primary) hover:text-bg active:scale-[0.95]",
  };

  const dynamicPrimaryStyle =
    variant === "primary"
      ? {
          background: "var(--gradient-cta)",
          boxShadow: "var(--glow-primary)",
        }
      : undefined;

  const renderArrow = () => {
    switch (arrow) {
      case "right":
        return (
          <ArrowRight
            size={14}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        );
      case "up-right":
        return (
          <ArrowUpRight
            size={14}
            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        );
      case "down":
        return (
          <ArrowDown
            size={14}
            className="transition-transform duration-200 group-hover:translate-y-1"
          />
        );
      case "none":
      default:
        return null;
    }
  };

  const content = (
    <>
      {children && <span>{children}</span>}
      {icon && <span className="shrink-0">{icon}</span>}
      {renderArrow()}
    </>
  );

  if (href) {
    const finalTarget = external ? "_blank" : target;
    const finalRel = external ? "noopener noreferrer" : rel;

    return (
      <a
        href={href}
        target={finalTarget}
        rel={finalRel}
        style={dynamicPrimaryStyle}
        className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      style={dynamicPrimaryStyle}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {content}
    </button>
  );
}
