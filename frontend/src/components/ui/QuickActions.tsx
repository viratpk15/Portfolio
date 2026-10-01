"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, Mail, Check } from "lucide-react";
import { GithubMark } from "@/components/ui/GithubMark";
import { profile } from "@/data/profile";

export function QuickActions() {
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 350);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.95 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full border border-line bg-(--bg-glass-nav) p-1.5 shadow-(--shadow-elevated) backdrop-blur-2xl"
        >
          {/* Copy Email Button */}
          <button
            type="button"
            onClick={copyEmail}
            className="flex items-center gap-1.5 rounded-full border border-line bg-elevated px-3.5 py-1.5 font-mono text-[11px] text-ink transition-all hover:border-(--accent-primary)/50 hover:text-(--accent-primary) focus-visible:outline-none"
            title="Copy email address"
          >
            {copied ? (
              <>
                <Check size={12} className="text-(--accent-primary)" />
                <span className="text-(--accent-primary) font-medium">Copied</span>
              </>
            ) : (
              <>
                <Mail size={12} className="text-(--accent-primary)" />
                <span className="hidden sm:inline">Copy Email</span>
              </>
            )}
          </button>

          {/* GitHub link */}
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-line bg-elevated text-(--text-secondary) transition-all hover:border-(--accent-primary)/50 hover:text-(--accent-primary) focus-visible:outline-none"
            title="GitHub Profile"
          >
            <GithubMark size={14} />
          </a>

          {/* Back to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-(--accent-primary) text-btn-ink font-bold transition-all hover:scale-105 hover:bg-(--accent-bright) focus-visible:outline-none shadow-sm"
            aria-label="Scroll back to top"
            title="Back to top"
          >
            <ArrowUp size={14} className="stroke-[2.5]" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
