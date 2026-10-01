"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowDown } from "lucide-react";
import { navigation } from "@/data/navigation";
import { profile } from "@/data/profile";
import { useActiveSection } from "@/lib/hooks/useActiveSection";
import { GithubMark } from "@/components/ui/GithubMark";
import { LinkedInMark } from "@/components/ui/LinkedInMark";
import { ThemeSwitcher } from "@/components/ui/ThemeSwitcher";

export function FloatingNavbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const navIds = useMemo(() => navigation.map((item) => item.id), []);
  const activeSection = useActiveSection(navIds);

  const overlayRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (!href.startsWith("#")) return;
      e.preventDefault();
      const targetId = href.slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        const offset = href === "#top" ? 0 : 100;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
      }
      setOpen(false);
    },
    []
  );

  // Focus trap + ESC handling for mobile overlay
  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key !== "Tab") return;

      const focusable = overlayRef.current?.querySelectorAll<HTMLElement>(
        "a[href], button:not([disabled])"
      );
      if (!focusable || focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <header
        className="fixed top-4 sm:top-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-28px)] sm:w-[calc(100%-48px)] max-w-6xl h-16 rounded-full transition-all duration-500 ease-out border"
        style={{
          backgroundColor: "var(--bg-glass-nav)",
          borderColor: scrolled ? "var(--border-strong)" : "var(--border-strong)",
          backdropFilter: "blur(32px) saturate(190%)",
          WebkitBackdropFilter: "blur(32px) saturate(190%)",
          boxShadow: scrolled
            ? "0 20px 50px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.16)"
            : "0 12px 36px rgba(0, 0, 0, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.12)",
        }}
      >
        {/* Subtle diagonal light sweep every 8 seconds */}
        <div
          className="pointer-events-none absolute inset-0 overflow-hidden rounded-full"
          aria-hidden="true"
        >
          <div className="pill-light-sweep absolute inset-y-0 -left-full w-1/2 opacity-25" />
        </div>

        <div className="relative flex h-full items-center justify-between px-4 sm:px-6">
          {/* Brand mark Left: "VIRAT PK GUPTA" in display serif */}
          <a
            href="#top"
            onClick={(e) => handleNavClick(e, "#top")}
            className="group flex items-baseline gap-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-(--accent-primary) rounded-sm"
          >
            <span className="font-display text-base sm:text-[17px] font-semibold tracking-tight text-ink transition-colors duration-200 group-hover:text-(--accent-primary)">
              VIRAT PK GUPTA
            </span>
          </a>

          {/* Desktop Navigation Items with Liquid Glass Sliding Indicator */}
          <nav
            className="hidden md:flex items-center gap-1 p-1 rounded-full border border-(--border-hairline) bg-black/10 backdrop-blur-md"
            aria-label="Main navigation"
            onMouseLeave={() => setHoveredNav(null)}
          >
            {navigation.map((item) => {
              const isActive = activeSection === item.id;
              const isHovered = hoveredNav === item.id;
              const showPill = isHovered || (!hoveredNav && isActive);

              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  onMouseEnter={() => setHoveredNav(item.id)}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative px-4 py-1.5 text-[15px] lg:text-[15.5px] font-medium transition-colors duration-200 focus-visible:outline-none rounded-full select-none cursor-pointer ${
                    isActive
                      ? "text-(--text-primary) font-semibold"
                      : "text-(--text-secondary) hover:text-(--text-primary)"
                  }`}
                >
                  {showPill && (
                    <motion.span
                      layoutId="navLiquidSlidingPill"
                      className="liquid-nav-sliding-pill pointer-events-none"
                      transition={{ type: "spring", stiffness: 420, damping: 32 }}
                    />
                  )}
                  <span className="relative z-1">{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Cluster: GitHub, LinkedIn, Theme Switcher, RESUME pill button */}
          <div className="hidden md:flex items-center gap-2.5 lg:gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 rounded-full border border-(--border-strong) bg-surface/75 text-(--text-primary) hover:text-(--accent-bright) hover:border-(--accent-primary) hover:bg-(--accent-primary)/20 transition-all duration-200 shadow-xs cursor-pointer"
              aria-label="GitHub Profile"
            >
              <GithubMark size={19} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 rounded-full border border-(--border-strong) bg-surface/75 text-(--text-primary) hover:text-(--accent-bright) hover:border-(--accent-primary) hover:bg-(--accent-primary)/20 transition-all duration-200 shadow-xs cursor-pointer"
              aria-label="LinkedIn Profile"
            >
              <LinkedInMark size={19} />
            </a>

            {/* Theme Switcher Pill in Navbar */}
            <ThemeSwitcher />

            {/* Resume CTA Pill */}
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2 rounded-full border border-(--accent-primary)/50 bg-(--accent-primary)/15 text-ink text-xs sm:text-[13px] font-mono font-semibold uppercase tracking-wider transition-all duration-200 hover:bg-(--accent-primary)/30 hover:border-(--accent-bright) shadow-xs cursor-pointer"
            >
              <span className="text-(--text-primary)">RESUME</span>
              <ArrowDown
                size={13}
                className="text-(--accent-bright) transition-transform duration-200 group-hover:translate-y-0.5"
              />
            </a>
          </div>

          {/* Mobile hamburger button */}
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden relative z-10 p-2 text-ink hover:text-(--accent-primary) focus-visible:outline-none"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Full-screen liquid glass mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            ref={overlayRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-60 flex flex-col justify-between p-6 sm:p-8 bg-(--bg-base)/96 backdrop-blur-2xl md:hidden border border-line"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-2xl tracking-tight text-(--accent-primary)">
                VIRAT
              </span>
              <button
                ref={closeButtonRef}
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="rounded-full border border-(--accent-primary)/40 p-2.5 text-(--accent-primary) hover:bg-(--accent-primary)/10 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <nav
              className="flex flex-col gap-2 py-4"
              aria-label="Mobile navigation"
            >
              {navigation.map((item, idx) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: idx * 0.05,
                      duration: 0.35,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={`flex items-baseline gap-4 py-2.5 font-display text-2xl sm:text-3xl tracking-tight border-b border-line transition-colors ${
                      isActive
                        ? "text-(--accent-primary)"
                        : "text-ink hover:text-(--accent-primary)"
                    }`}
                  >
                    <span className="font-mono text-xs text-muted tracking-widest">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span>{item.label}</span>
                  </motion.a>
                );
              })}
            </nav>

            {/* Mobile Theme Switcher: Segmented Control */}
            <div className="pt-2 pb-4">
              <ThemeSwitcher variant="segmented" />
            </div>

            {/* Mobile Footer Links */}
            <div className="flex items-center justify-between pt-5 border-t border-(--border-strong)">
              <div className="flex items-center gap-3">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-(--border-strong) bg-surface text-(--text-primary) hover:text-(--accent-bright) hover:border-(--accent-primary) transition-all"
                  aria-label="GitHub Profile"
                >
                  <GithubMark size={20} />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-(--border-strong) bg-surface text-(--text-primary) hover:text-(--accent-bright) hover:border-(--accent-primary) transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedInMark size={20} />
                </a>
              </div>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-(--accent-primary) bg-(--accent-primary)/20 text-(--text-primary) font-mono text-xs uppercase font-semibold tracking-wider hover:bg-(--accent-primary)/30 transition-all shadow-sm"
              >
                <span>RESUME</span>
                <ArrowDown size={13} className="text-(--accent-bright)" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
