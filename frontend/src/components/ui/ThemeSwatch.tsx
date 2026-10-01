"use client";

import { ThemeConfig } from "@/lib/themes";

interface ThemeSwatchProps {
  theme: ThemeConfig;
  size?: number;
  className?: string;
}

export function ThemeSwatch({ theme, size = 12, className = "" }: ThemeSwatchProps) {
  const [c1, c2, c3] = theme?.swatches || ["#8993AD", "#A9B2C5", "#0F101E"];

  return (
    <div className={`flex items-center -space-x-1 shrink-0 ${className}`} aria-hidden="true">
      <span
        className="rounded-full border border-black/20 shadow-sm"
        style={{
          backgroundColor: c1,
          width: `${size}px`,
          height: `${size}px`,
          zIndex: 3,
        }}
      />
      <span
        className="rounded-full border border-black/20 shadow-sm"
        style={{
          backgroundColor: c2,
          width: `${size}px`,
          height: `${size}px`,
          zIndex: 2,
        }}
      />
      <span
        className="rounded-full border border-black/20 shadow-sm"
        style={{
          backgroundColor: c3,
          width: `${size}px`,
          height: `${size}px`,
          zIndex: 1,
        }}
      />
    </div>
  );
}
