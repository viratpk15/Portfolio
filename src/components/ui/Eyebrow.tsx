/**
 * Section label. Format is locked: "01 / ABOUT".
 * The rule is a gold gradient; the number is gold, the label is muted.
 */
export function Eyebrow({
  index,
  children,
}: {
  index?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="h-px w-8 bg-gradient-to-r from-gold to-brown" />
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
        {index && <span className="text-gold mr-2">{index} /</span>}
        {children}
      </span>
    </div>
  );
}
