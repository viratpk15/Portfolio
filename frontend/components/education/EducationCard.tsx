import FadeIn from "@/components/animations/FadeIn";

interface Props {
  degree: string;
  institute: string;
  period: string;
  description: string;
  score?: string;
  scoreLabel?: string;
  index?: number;
}

export default function EducationCard({
  degree,
  institute,
  period,
  description,
  score,
  scoreLabel,
  index = 0,
}: Props) {
  return (
    <FadeIn delay={index * 0.08}>
      <div className="group relative">
        {/* Timeline dot */}
        <div className="absolute left-0 top-0 -ml-[42px] hidden h-5 w-5 rounded-full border-2 border-[var(--glass-stroke-strong)] bg-[var(--glass-bg-strong)] shadow-[0_0_0_4px_var(--color-bg)] group-hover:border-[var(--color-primary)] md:block">
          <div className="absolute inset-1 rounded-full bg-[var(--color-primary)]/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>

        <div className="surface-sheen relative ml-0 rounded-[var(--radius-xl)] border border-[var(--glass-stroke)] bg-[var(--glass-bg)] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-[var(--glass-stroke-strong)] md:ml-[24px]">
          {/* Period badge */}
          <div className="mb-4 inline-flex">
            <span className="rounded-full border border-[var(--glass-stroke-accent)] bg-[var(--glass-bg-intense)] px-4 py-1.5 text-xs font-medium text-[var(--color-primary)]">
              {period}
            </span>
          </div>

          {/* Content */}
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold tracking-tight text-[var(--color-text-primary)]">
              {degree}
            </h3>
            <p className="text-lg text-[var(--color-text-secondary)]">{institute}</p>
            
            <p className="max-w-2xl leading-7 text-[var(--color-text-tertiary)]">
              {description}
            </p>
          </div>

          {/* Score badge if exists */}
          {score && (
            <div className="mt-6 inline-flex rounded-[var(--radius-lg)] border border-[var(--glass-stroke)] bg-[var(--glass-bg-intense)] px-5 py-3">
              <span className="text-2xl font-bold tracking-tight text-[var(--color-text-primary)]">
                {score}
              </span>
              <span className="ml-2 text-xs text-[var(--color-text-muted)] uppercase tracking-wider">
                {scoreLabel}
              </span>
            </div>
          )}
        </div>
      </div>
    </FadeIn>
  );
}