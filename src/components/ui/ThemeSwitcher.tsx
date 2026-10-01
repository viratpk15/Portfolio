"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";
import { useTheme } from "@/lib/hooks/useTheme";
import { THEME_LIST } from "@/lib/themes";
import { ThemeSwatch } from "@/components/ui/ThemeSwatch";

interface ThemeSwitcherProps {
  variant?: "dropdown" | "segmented";
  className?: string;
}

export function ThemeSwitcher({ variant = "dropdown", className = "" }: ThemeSwitcherProps) {
  const { theme, currentTheme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Close on outside click
  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setFocusedIndex((prev) => (prev + 1) % THEME_LIST.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setFocusedIndex((prev) => (prev - 1 + THEME_LIST.length) % THEME_LIST.length);
      } else if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const selected = THEME_LIST[focusedIndex];
        if (selected) {
          setTheme(selected.id);
          setIsOpen(false);
          triggerRef.current?.focus();
        }
      }
    };

    window.addEventListener("mousedown", handlePointerDown);
    window.addEventListener("touchstart", handlePointerDown);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("mousedown", handlePointerDown);
      window.removeEventListener("touchstart", handlePointerDown);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, focusedIndex, setTheme]);

  // Mobile segmented control (2x2 grid)
  if (variant === "segmented") {
    return (
      <div className={`w-full ${className}`}>
        <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-muted mb-2.5">
          PALETTE IDENTITY
        </span>
        <div className="grid grid-cols-2 gap-2" role="radiogroup" aria-label="Theme selector">
          {THEME_LIST.map((t) => {
            const isActive = theme === t.id;
            return (
              <button
                key={t.id}
                type="button"
                role="radio"
                aria-checked={isActive}
                onClick={() => setTheme(t.id)}
                className={`flex items-center gap-2 px-3 py-2.5 rounded-full border transition-all text-[11px] font-mono tracking-wider uppercase cursor-pointer ${
                  isActive
                    ? "border-(--accent-primary) bg-(--accent-primary)/15 text-(--accent-primary) shadow-sm font-semibold"
                    : "border-line bg-glass text-(--text-secondary) hover:border-line-strong hover:text-ink"
                }`}
              >
                <ThemeSwatch theme={t} size={11} />
                <span className="truncate">{t.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Desktop dropdown pill
  return (
    <div className={`relative ${className}`}>
      <button
        ref={triggerRef}
        type="button"
        aria-label="Change theme"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => {
          setIsOpen(!isOpen);
          const currentIndex = THEME_LIST.findIndex((t) => t.id === theme);
          if (currentIndex !== -1) setFocusedIndex(currentIndex);
        }}
        className="group flex h-9 items-center gap-2 rounded-full border border-line bg-glass px-3 text-xs font-mono text-(--text-secondary) shadow-sm backdrop-blur-xl transition-all duration-200 hover:border-(--accent-primary)/50 hover:text-ink focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-(--accent-primary) cursor-pointer"
      >
        <ThemeSwatch theme={currentTheme} size={10} />
        <span className="font-mono text-[11px] uppercase tracking-wider text-ink group-hover:text-(--accent-primary) transition-colors">
          {currentTheme.label}
        </span>
        <ChevronDown
          size={12}
          className={`text-muted transition-transform duration-200 group-hover:text-(--accent-primary) ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Floating Glass Dropdown Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={dropdownRef}
            role="listbox"
            aria-label="Themes"
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-0 top-full mt-2 z-50 w-56 rounded-2xl border border-line bg-(--bg-elevated)/95 p-2 shadow-2xl backdrop-blur-2xl"
          >
            <div className="px-2 py-1.5 border-b border-line mb-1">
              <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-muted">
                SELECT PALETTE
              </span>
            </div>

            <div className="space-y-1">
              {THEME_LIST.map((t, idx) => {
                const isActive = theme === t.id;
                const isFocused = focusedIndex === idx;

                return (
                  <button
                    key={t.id}
                    type="button"
                    role="option"
                    aria-selected={isActive}
                    onClick={(e) => {
                      e.stopPropagation();
                      setTheme(t.id);
                      setIsOpen(false);
                      triggerRef.current?.focus();
                    }}
                    onMouseEnter={() => setFocusedIndex(idx)}
                    className={`flex h-10 w-full items-center justify-between rounded-xl px-2.5 transition-all text-xs font-mono tracking-wider uppercase cursor-pointer ${
                      isActive
                        ? "bg-(--accent-primary)/15 text-(--accent-primary) font-semibold border border-(--accent-primary)/30"
                        : isFocused
                        ? "bg-glass-light text-ink"
                        : "text-(--text-secondary) hover:bg-glass-light hover:text-ink"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <ThemeSwatch theme={t} size={12} />
                      <span className="font-mono text-[11px]">{t.label}</span>
                    </div>

                    {isActive && <Check size={14} className="text-(--accent-primary)" />}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
