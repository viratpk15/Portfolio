import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function Container({
  children,
  className = "",
}: Props) {
  return (
    <div
      className={`
        mx-auto
        max-w-[var(--container-max)]
        px-6
        lg:px-[var(--space-lg)]
        ${className}
      `}
    >
      {children}
    </div>
  );
}