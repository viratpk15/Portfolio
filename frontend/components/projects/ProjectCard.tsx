import Image from "next/image";
import { ArrowUpRight, Code, ExternalLink } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import { Project } from "@/types/project";
import { cn } from "@/lib/utils";

interface Props {
  project: Project;
  index?: number;
  featured?: boolean;
}

export default function ProjectCard({ project, index = 0, featured = false }: Props) {
  const hasDemo = project.demo && project.demo !== "#";

  return (
    <FadeIn delay={index * 0.08}>
      <article 
        className={cn(
          "surface-sheen group relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--glass-stroke)] bg-[var(--glass-bg)] backdrop-blur-xl transition-all duration-500",
          featured 
            ? "hover:-translate-y-2 hover:border-[var(--glass-stroke-strong)] hover:shadow-[var(--shadow-glow-lg)]" 
            : "hover:-translate-y-1 hover:border-[var(--glass-stroke-strong)]"
        )}
      >
        {/* Ambient lighting for featured projects */}
        {featured && (
          <>
            <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[var(--color-primary)]/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="pointer-events-none absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-[var(--color-secondary)]/10 blur-3xl" />
          </>
        )}

        <div className={cn(
          "relative overflow-hidden",
          featured ? "h-80 sm:h-96" : "h-64 sm:h-72"
        )}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes={featured 
              ? "(max-width: 768px) 100vw, 50vw" 
              : "(max-width: 768px) 100vw, 1100px"
            }
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          {/* Premium gradient overlay */}
          <div className={cn(
            "absolute inset-0 bg-gradient-to-t",
            featured 
              ? "from-[var(--color-bg)] via-[var(--color-bg)]/30 to-transparent" 
              : "from-[var(--color-bg)] via-[var(--color-bg)]/40 to-transparent"
          )} />

          {/* Badges with premium treatment */}
          <div className="absolute left-6 top-6 flex flex-wrap items-center gap-2">
            {project.flag && (
              <span className="rounded-full border border-[var(--glass-stroke-accent)] bg-[var(--glass-bg-intense)] px-4 py-1.5 text-xs font-semibold tracking-wide text-[var(--color-text-secondary)] backdrop-blur-md">
                {project.flag}
              </span>
            )}
            {project.tag && (
              <span className="rounded-full border border-[var(--glass-stroke)] bg-[var(--glass-bg-strong)] px-4 py-1.5 text-xs font-medium text-[var(--color-text-tertiary)] backdrop-blur-md">
                {project.tag}
              </span>
            )}
          </div>

          {/* Active development indicator */}
          {project.status && (
            <span className="status-badge status-badge-warning absolute bottom-6 right-6 px-4 py-1.5 text-xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-warning)]/70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-warning)]" />
              </span>
              {project.status}
            </span>
          )}
        </div>

        {/* Content with premium spacing */}
        <div className={cn(
          "space-y-6",
          featured ? "p-10" : "p-8"
        )}>
          <div className="flex items-start justify-between gap-4">
            <h3 className={cn(
              "font-semibold tracking-tight text-[var(--color-text-primary)]",
              featured 
                ? "text-3xl sm:text-4xl" 
                : "text-2xl sm:text-3xl"
            )}>
              {project.title}
            </h3>
            <ArrowUpRight
              size={featured ? 28 : 22}
              className="mt-1 shrink-0 text-[var(--color-text-muted)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--color-primary)]"
            />
          </div>

          <p className={cn(
            "leading-7 text-[var(--color-text-tertiary)]",
            featured ? "text-lg sm:text-xl" : "max-w-2xl text-base"
          )}>
            {project.description}
          </p>

          {/* Technology badges with premium styling */}
          <div className="flex flex-wrap gap-2.5">
            {project.tech.slice(0, featured ? 10 : 6).map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[var(--glass-stroke)] bg-[var(--glass-bg-strong)] px-4 py-1.5 text-sm font-medium text-[var(--color-text-tertiary)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--glass-stroke-accent)] hover:bg-[var(--glass-bg-intense)] hover:text-[var(--color-text-primary)]"
              >
                {tech}
              </span>
            ))}
            {!featured && project.tech.length > 6 && (
              <span className="rounded-full border border-[var(--glass-stroke-accent)] bg-[var(--glass-bg-intense)] px-4 py-1.5 text-sm font-medium text-[var(--color-primary)]">
                +{project.tech.length - 6} more
              </span>
            )}
          </div>

          {/* Premium CTA buttons */}
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full border border-[var(--glass-stroke)] bg-[var(--glass-bg)] px-6 py-3 text-sm font-medium text-[var(--color-text-secondary)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--glass-stroke-strong)] hover:bg-[var(--glass-bg-strong)] hover:text-[var(--color-text-primary)]"
            >
              <Code size={18} />
              GitHub
            </a>

            <a
              href={hasDemo ? project.demo : undefined}
              aria-disabled={!hasDemo}
              className={cn(
                "inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300",
                hasDemo
                  ? "border border-[var(--glass-stroke-accent)] bg-[var(--gradient-subtle)] text-[var(--color-text-primary)] hover:-translate-y-0.5 hover:border-[var(--glass-stroke-strong)] hover:shadow-[var(--shadow-glow-md)]"
                  : "cursor-not-allowed border border-[var(--glass-stroke)] bg-[var(--glass-bg)] text-[var(--color-text-muted)]"
              )}
            >
              <ExternalLink size={18} />
              {hasDemo ? "Live Demo" : "Demo Soon"}
            </a>
          </div>
        </div>
      </article>
    </FadeIn>
  );
}