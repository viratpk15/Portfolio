"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, ArrowUpRight, Send, Check, Copy } from "lucide-react";
import { GithubMark } from "@/components/ui/GithubMark";
import { LinkedInMark } from "@/components/ui/LinkedInMark";
import { profile } from "@/data/profile";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

export function Contact() {
  const shouldReduceMotion = useReducedMotion();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;
    const subject = `AI Engineering Inquiry — ${form.name}`;
    const body = `${form.message}\n\nFrom: ${form.name} (${form.email})`;
    const href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setSent(true);
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden"
      style={{ borderTop: "1px solid var(--border-hairline)" }}
    >
      {/* Ghost Editorial Watermark */}
      <div
        className="ghost-typography"
        style={{ bottom: "10%", left: "-3%", fontSize: "clamp(10rem, 18vw, 22rem)" }}
        aria-hidden="true"
      >
        GUPTA
      </div>

      {/* ── FULL-BLEED BACKGROUND IMAGE (hero-mountain, unshifted as before) ── */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/hero-mountain.jpg"
          alt="Contact background — mountain vista"
          fill
          sizes="100vw"
          className="object-cover object-bottom theme-image-graded"
          priority
        />
        {/* Calibrated atmospheric gradient preserving face visibility at center bottom */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, color-mix(in srgb, var(--bg-base) 88%, transparent) 0%, color-mix(in srgb, var(--bg-base) 65%, transparent) 40%, color-mix(in srgb, var(--bg-base) 75%, transparent) 78%, var(--bg-base) 96%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--hero-bleed)", opacity: 0.18 }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-20 py-24 sm:py-36 relative z-1">
        {/* Section header */}
        <div
          className="flex items-center justify-between pb-5 mb-16"
          style={{ borderBottom: "1px solid var(--border-hairline)" }}
        >
          <span
            className="font-mono text-xs sm:text-sm uppercase tracking-[0.28em] font-semibold"
            style={{ color: "var(--accent-primary)" }}
          >
            05 / Contact
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--text-muted)" }}>
            Direct Initiation · 2026
          </span>
        </div>

        {/* 12-col Grid: Left 5 cols (Headline), Center 2 cols OPEN (Face unobstructed), Far Right 5 cols (Form) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">

          {/* LEFT — Giant Headline & Quick Channels */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col"
          >
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(3.2rem, 6vw, 5.5rem)",
                fontWeight: 500,
                lineHeight: 0.92,
                letterSpacing: "-0.03em",
                color: "var(--text-primary)",
              }}
            >
              LET&apos;S<br />
              <span style={{ color: "var(--accent-primary)" }}>BUILD</span><br />
              WHAT<br />
              COMES<br />
              NEXT.
            </h2>

            <p
              className="mt-8 font-light"
              style={{
                fontSize: "clamp(1rem, 1.1vw, 1.12rem)",
                lineHeight: 1.75,
                color: "var(--text-secondary)",
              }}
            >
              Have an interesting AI problem, engineering initiative, or system architecture challenge?
              Let&apos;s build something exceptional together.
            </p>

            {/* Social channels */}
            <div className="mt-10 flex flex-col gap-4">
              {[
                { label: "Email", href: `mailto:${profile.email}`, icon: <Mail size={17} /> },
                { label: "GitHub", href: profile.github, icon: <GithubMark size={17} />, external: true },
                { label: "LinkedIn", href: profile.linkedin, icon: <LinkedInMark size={17} />, external: true },
              ].map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="group inline-flex items-center gap-3.5 font-mono text-xs uppercase tracking-[0.22em] transition-all duration-200 py-1"
                  style={{ color: "var(--text-secondary)" }}
                  onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--accent-primary)")}
                  onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-secondary)")}
                >
                  <span style={{ color: "var(--accent-primary)" }}>{link.icon}</span>
                  <span className="font-medium">{link.label}</span>
                  <ArrowUpRight size={13} className="opacity-50 transition-all group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* CENTER 2 COLS — Open viewing corridor for center background portrait */}
          <div className="hidden lg:block lg:col-span-2 pointer-events-none" aria-hidden="true" />

          {/* FAR RIGHT — Sleek Floating Glass Form (Docked Aside) */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 rounded-3xl p-7 sm:p-9 relative"
            style={{
              background: "color-mix(in srgb, var(--bg-card) 90%, transparent)",
              backdropFilter: "blur(28px) saturate(180%)",
              WebkitBackdropFilter: "blur(28px) saturate(180%)",
              border: "1px solid var(--border-strong)",
              boxShadow: "0 0 0 1px color-mix(in srgb, var(--border-hairline) 60%, transparent) inset, var(--shadow-elevated)",
            }}
          >
            {/* Top Bar Header */}
            <div
              className="flex items-center justify-between pb-5 mb-6"
              style={{ borderBottom: "1px solid var(--border-hairline)" }}
            >
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span
                  className="font-mono text-[11px] uppercase tracking-[0.22em] font-semibold"
                  style={{ color: "var(--accent-primary)" }}
                >
                  Direct Message
                </span>
              </div>
              <span
                className="font-mono text-[10px] uppercase tracking-[0.2em]"
                style={{ color: "var(--text-muted)" }}
              >
                Inquiry
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-4">
                {[
                  { id: "name", label: "Name", type: "text", placeholder: "Your name", key: "name" as const },
                  { id: "email", label: "Email", type: "email", placeholder: "name@company.com", key: "email" as const },
                ].map(field => (
                  <div key={field.id} className="flex flex-col">
                    <label
                      htmlFor={field.id}
                      className="block font-mono text-[10px] uppercase tracking-[0.22em] mb-1.5 font-medium"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      type={field.type}
                      required
                      value={form[field.key]}
                      onChange={e => setForm({ ...form, [field.key]: e.target.value })}
                      placeholder={field.placeholder}
                      className="w-full rounded-xl px-4 py-3 text-sm transition-all focus:outline-none"
                      style={{
                        background: "var(--bg-elevated)",
                        border: "1px solid var(--border-hairline)",
                        color: "var(--text-primary)",
                      }}
                      onFocus={e => {
                        e.currentTarget.style.borderColor = "var(--accent-primary)";
                        e.currentTarget.style.boxShadow = "0 0 0 3px color-mix(in srgb, var(--accent-primary) 15%, transparent)";
                      }}
                      onBlur={e => {
                        e.currentTarget.style.borderColor = "var(--border-hairline)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="message"
                  className="block font-mono text-[10px] uppercase tracking-[0.22em] mb-1.5 font-medium"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project, idea, or challenge..."
                  className="w-full rounded-xl px-4 py-3 text-sm transition-all focus:outline-none resize-none leading-relaxed"
                  style={{
                    background: "var(--bg-elevated)",
                    border: "1px solid var(--border-hairline)",
                    color: "var(--text-primary)",
                    minHeight: "120px",
                  }}
                  onFocus={e => {
                    e.currentTarget.style.borderColor = "var(--accent-primary)";
                    e.currentTarget.style.boxShadow = "0 0 0 3px color-mix(in srgb, var(--accent-primary) 15%, transparent)";
                  }}
                  onBlur={e => {
                    e.currentTarget.style.borderColor = "var(--border-hairline)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 font-mono text-[11px] uppercase tracking-wider transition-all duration-200 border"
                  style={{
                    color: "var(--text-secondary)",
                    borderColor: "var(--border-hairline)",
                    background: "var(--bg-elevated)",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--accent-primary)";
                    (e.currentTarget as HTMLButtonElement).style.color = "var(--accent-primary)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border-hairline)";
                    (e.currentTarget as HTMLButtonElement).style.color = "var(--text-secondary)";
                  }}
                >
                  {copied ? <Check size={13} style={{ color: "var(--accent-primary)" }} /> : <Copy size={13} />}
                  <span className="font-semibold">{copied ? "COPIED" : "COPY EMAIL"}</span>
                </button>

                <button
                  type="submit"
                  className="group inline-flex items-center gap-2.5 rounded-full px-7 py-3 font-mono text-xs uppercase tracking-[0.18em] font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  style={{
                    background: "var(--gradient-cta)",
                    color: "#fff",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                  }}
                >
                  <span>{sent ? "Dispatched ✓" : "Send"}</span>
                  <Send size={13} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Footer strip */}
        <div
          className="mt-20 pt-6 flex items-center justify-center font-mono text-xs uppercase tracking-[0.2em]"
          style={{ borderTop: "1px solid var(--border-hairline)", color: "var(--text-muted)" }}
        >
          <div>&copy; 2026 Virat P K Gupta · All rights reserved.</div>
        </div>
      </div>
    </section>
  );
}
