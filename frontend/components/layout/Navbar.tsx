"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { navigation } from "@/data/navigation";
import { profile } from "@/data/profile";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const lastScrollY = useRef(0);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      // Cancel any pending frame
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }

      rafId.current = requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;

        setScrolled(currentScrollY > 24);
        lastScrollY.current = currentScrollY;
        rafId.current = null;
      });
    };

    // Track active section on scroll
    const handleScrollSpy = () => {
      const sections = navigation.map((item) => ({
        id: item.href.substring(1),
        element: document.getElementById(item.href.substring(1)),
      })).filter((section) => section.element !== null);

      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollMiddle = currentScrollY + windowHeight * 0.3;

      let currentSection = sections[0]?.id || "";

      for (const section of sections) {
        if (section.element) {
          const sectionTop = section.element.offsetTop;
          const sectionBottom = sectionTop + section.element.offsetHeight;

          if (scrollMiddle >= sectionTop && scrollMiddle < sectionBottom) {
            currentSection = section.id;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    // Handle navigation clicks
    const handleNavClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href^="#"]');
      if (link) {
        const href = link.getAttribute('href');
        if (href) {
          const sectionId = href.substring(1);
          // Update active section after smooth scroll completes
          setTimeout(() => {
            setActiveSection(sectionId);
            // Re-check after scroll settles
            setTimeout(() => {
              handleScrollSpy();
            }, 600);
          }, 300);
        }
      }
    };

    onScroll();
    window.addEventListener("scroll", handleScrollSpy, { passive: true });
    window.addEventListener("click", handleNavClick, { passive: true });
    
    // Initial check
    handleScrollSpy();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", handleScrollSpy);
      window.removeEventListener("click", handleNavClick);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  // Smooth scale based on scroll position
  const scale = scrolled ? 0.98 : 1;

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-[var(--z-modal)] pt-4"
      initial={{ y: "-100%", opacity: 0 }}
      animate={{ 
        y: 0,
        opacity: 1
      }}
      transition={{ 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1] 
      }}
    >
      <div className="mx-auto max-w-[var(--container-max)] px-4">
        <nav
          className="liquid-glass flex items-center justify-between px-3 py-2.5 transition-all duration-500"
          style={{
            transform: `scale(${scale})`,
            backdropFilter: `blur(${scrolled ? 24 : 40}px) saturate(180%)`,
            WebkitBackdropFilter: `blur(${scrolled ? 24 : 40}px) saturate(180%)`,
            backgroundColor: scrolled ? "var(--glass-bg-intense)" : "var(--glass-bg)",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight text-[var(--color-text-primary)] transition-opacity hover:opacity-80"
          >
            Virat<span className="text-[var(--color-primary)]">.</span>
          </Link>

          {/* Navigation Dock */}
          <ul className="hidden items-center gap-1 md:flex">
            {navigation.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="group relative rounded-full px-4 py-2 text-sm text-[var(--color-text-tertiary)] transition-all duration-300 hover:text-[var(--color-text-primary)]"
                >
                  {item.name}
                  {/* Active section indicator - soft glass indicator */}
                  {activeSection === item.href.substring(1) && (
                    <span
                      className="absolute inset-0 -z-10 rounded-full bg-[var(--color-primary)]/10"
                    />
                  )}
                  {/* Premium underline animation */}
                  <span className="absolute inset-x-4 -bottom-0.5 h-px scale-x-0 bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>

          {/* Premium Resume CTA */}
          <div className="relative">
            <Button 
              href={profile.resume} 
              variant="ghost" 
              className="px-5 py-2 text-xs font-medium" 
              external
            >
              Resume
            </Button>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}