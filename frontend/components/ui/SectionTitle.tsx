interface Props {
  title: string;
  subtitle: string;
  className?: string;
}

export default function SectionTitle({ title, subtitle, className = "" }: Props) {
  return (
    <div className={`mb-14 ${className}`}>
      <div className="mb-4 flex items-center gap-3">
        <span className="h-px w-8 bg-gradient-to-r from-[var(--color-primary)] to-transparent" />
        <p className="eyebrow">
          {subtitle}
        </p>
      </div>

      <h2
        className="text-4xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-5xl"
        style={{ fontFamily: "var(--font-family-display)" }}
      >
        {title}
      </h2>
    </div>
  );
}