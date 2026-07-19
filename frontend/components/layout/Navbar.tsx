"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { navigation } from "@/data/navigation";
import { profile } from "@/data/profile";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeSection, setActiveSection] = useState("");
  const lastScrollY = useRef(0);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }

      rafId.current = requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const scrollDelta = currentScrollY - lastScrollY.current;
        const isNearTop = currentScrollY < 100;

        // Only collapse when scrolling down past threshold, but stay visible
        if (isNearTop) {
          setIsExpanded(true);
        } else if (scrollDelta > 24) {
          setIsExpanded(false);
        } else if (scrollDelta < -12) {
          setIsExpanded(true);
        }

        lastScrollY.current = currentScrollY;
        rafId.current = null;
      });
    };

    const handleScrollSpy = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollMiddle = currentScrollY + windowHeight * 0.3;

      const sections = navigation.map((item) => ({
        id: item.href.substring(1),
        element: document.getElementById(item.href.substring(1)),
      })).filter((section) => section.element !== null);

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

    const handleNavClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href^="#"]');
      if (link) {
        const href = link.getAttribute('href');
        if (href) {
          const sectionId = href.substring(1);
          setTimeout(() => {
            setActiveSection(sectionId);
            setTimeout(handleScrollSpy, 600);
          }, 300);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("scroll", handleScrollSpy, { passive: true });
    window.addEventListener("click", handleNavClick, { passive: true });
    
    handleScrollSpy();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScrollSpy);
      window.removeEventListener("click", handleNavClick);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-[var(--z-modal)] pt-4"
      initial={{ y: "-100%", opacity: 0 }}
      animate={{ 
        y: 0,
        opacity: 1
      }}
      transition={{ 
        duration: 0.5, 
        ease: [0.22, 1, 0.36, 1] 
      }}
    >
      <motion.div
        className="mx-auto max-w-[var(--container-max)] px-4"
        animate={{
          scale: isExpanded ? 1 : 0.98,
          y: isExpanded ? 0 : -4,
        }}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <nav
          className="liquid-glass flex items-center justify-between px-3 py-2.5 transition-all duration-500 will-change-transform"
          style={{
            backdropFilter: `blur(var(--blur-lg)) saturate(180%)`,
            WebkitBackdropFilter: `blur(var(--blur-lg)) saturate(180%)`,
            backgroundColor: isExpanded ? "var(--glass-bg)" : "var(--glass-bg-strong)",
          }}
        >
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight text-[var(--color-text-primary)] transition-opacity duration-300 hover:opacity-80"
          >
            Virat<span className="text-[var(--color-primary)]">.</span>
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {navigation.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="group relative rounded-full px-4 py-2 text-sm text-[var(--color-text-tertiary)] transition-all duration-300 hover:text-[var(--color-text-primary)]"
                >
                  {item.name}
                  {activeSection === item.href.substring(1) && (
                    <motion.span
                      className="absolute inset-0 -z-10 rounded-full"
                      style={{
                        backgroundColor: "rgba(138, 113, 86, 0.08)"
                      }}
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 40,
                      }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

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
      </motion.div>
    </motion.header>
  );
}