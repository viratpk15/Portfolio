"use client";

import { useState, useEffect, useRef } from "react";
import { Mail, MapPin, ExternalLink, Download } from "lucide-react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeIn from "@/components/animations/FadeIn";
import ContactForm from "./ContactForm";
import { motion, useMotionValue, useTransform } from "framer-motion";

import { contact } from "@/data/contact";
import { socials } from "@/data/socials";

const EMAIL_SERVICE_URL = process.env.NEXT_PUBLIC_EMAIL_SERVICE_URL || "/api/contact";

async function sendEmail(data: { name: string; email: string; message: string }) {
  const response = await fetch(EMAIL_SERVICE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to send message");
  }

  return response.json();
}

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isHoveringImg, setIsHoveringImg] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imgRef.current) return;
    const rect = imgRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleSubmit = async (data: { name: string; email: string; message: string }) => {
    setLoading(true);
    setError(null);
    
    try {
      await sendEmail(data);
      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="pb-20">
      <Container>
        <SectionTitle title="Contact" subtitle="Let's Connect" />

        <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-24">
          {/* LEFT: Contact Image + Professional Contact Information */}
          <FadeIn>
            <div className="space-y-8">
              {/* Contact Image with elegant framing */}
              <motion.div
                ref={imgRef}
                className="relative"
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHoveringImg(true)}
                onMouseLeave={() => setIsHoveringImg(false)}
              >
                <motion.div
                  className="surface-sheen overflow-hidden rounded-[var(--radius-xl)] border border-[var(--glass-stroke)] bg-[var(--glass-bg)] will-change-transform"
                  style={{
                    x: useTransform(mouseX, [-200, 200], [-6, 6]),
                    y: useTransform(mouseY, [-200, 200], [-6, 6]),
                    rotateX: useTransform(mouseY, [-200, 200], [2, -2]),
                    rotateY: useTransform(mouseX, [-200, 200], [-2, 2]),
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                >
                  <div className="relative aspect-[4/5] sm:aspect-[3/4]">
                    <Image
                      src="/images/profile/contact.png"
                      alt="Contact Virat"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                    {/* Cinematic vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/40 via-transparent to-transparent pointer-events-none" />
                    {/* Light reflection */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none mix-blend-overlay"
                      style={{
                        opacity: isHoveringImg ? 0.4 : 0.25,
                        x: useTransform(mouseX, [-200, 200], [-25, 25]),
                        y: useTransform(mouseY, [-200, 200], [-25, 25]),
                      }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                </motion.div>
              </motion.div>

              <div>
                <h2
                  className="text-4xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-5xl"
                  style={{ fontFamily: "var(--font-family-display)" }}
                >
                  {contact.title}
                </h2>
                <p className="mt-3 max-w-xl text-lg leading-7 text-[var(--color-text-tertiary)]">
                  {contact.description}
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-5">
                <motion.a
                  href={`mailto:${contact.email}`}
                  className="group flex items-center gap-4"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <motion.div 
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--glass-stroke)] bg-[var(--glass-bg)] transition-all duration-300 will-change-transform"
                    whileHover={{ 
                      borderColor: "var(--glass-stroke-accent)",
                      backgroundColor: "var(--glass-bg-intense)",
                      y: -2
                    }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Mail size={18} className="text-[var(--color-primary)]" />
                  </motion.div>
                  <div>
                    <p className="text-xs text-[var(--color-text-secondary)]">Email</p>
                    <p className="text-sm text-[var(--color-text-tertiary)] transition-colors group-hover:text-[var(--color-text-primary)]">
                      {contact.email}
                    </p>
                  </div>
                  <ExternalLink size={16} className="ml-auto text-[var(--color-text-muted)]" />
                </motion.a>

                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--glass-stroke)] bg-[var(--glass-bg)] transition-all duration-300 group-hover:border-[var(--glass-stroke-accent)] group-hover:bg-[var(--glass-bg-intense)]">
                    <MapPin size={18} className="text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <p className="text-xs text-[var(--color-text-secondary)]">Location</p>
                    <p className="text-sm text-[var(--color-text-tertiary)]">{contact.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="relative inline-flex h-2.5 w-2.5 rounded-full">
                    <motion.div
                      className="h-2.5 w-2.5 rounded-full bg-[var(--color-primary)] shadow-[0_0_15px_var(--color-primary)]"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.8, 1, 0.8]
                      }}
                      transition={{ 
                        duration: 2.5, 
                        ease: "easeInOut", 
                        repeat: Infinity 
                      }}
                    />
                  </div>
                  <div>
                    <p className="text-xs text-[var(--color-text-secondary)]">Status</p>
                    <p className="text-sm text-[var(--color-text-tertiary)]">{contact.availability}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {socials.map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="group flex items-center gap-2 rounded-full border border-[var(--glass-stroke)] bg-[var(--glass-bg)] px-4 py-2.5 text-sm text-[var(--color-text-tertiary)] transition-all duration-300 will-change-transform"
                    whileHover={{ 
                      y: -3,
                      borderColor: "var(--glass-stroke-accent)",
                      backgroundColor: "var(--glass-bg-intense)",
                      color: "var(--color-text-primary)"
                    }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <motion.span
                      className="text-[var(--color-primary)]"
                      whileHover={{ scale: 1.15, rotate: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        {s.label === "GitHub" && (
                          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                        )}
                        {s.label === "LinkedIn" && (
                          <path fillRule="evenodd" clipRule="evenodd" d="M19.35 0H4.65C2.09 0 0 2.09 0 4.65v14.7C0 21.91 2.09 24 4.65 24h14.7C21.91 24 24 21.91 24 19.35v-14.7C24 2.09 21.91 0 19.35 0zM8.5 19.5H5.5V9h3v10.5zm-1.5-12c-.96 0-1.73-.78-1.73-1.73s.78-1.73 1.73-1.73 1.73.78 1.73 1.73-.78 1.73-1.73 1.73zm13 12h-3v-5.35c0-1.27-.03-2.88-1.73-2.88-1.73 0-2 1.35-2 2.79V19.5h-3V9h2.88v1.35h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.6v5.35z" />
                        )}
                        {s.label === "Twitter" && (
                          <path fillRule="evenodd" clipRule="evenodd" d="M17.53 3.5h2.63l-6.61 7.67L24 22.5h-6.94l-4.32-5.54-4.96 5.54H2.5l7.28-8.44L2.5 3.5h7l3.9 5.09L17.53 3.5ZM16.59 20.5h2.12L9.25 7.11H7.12l9.47 13.39Z" />
                        )}
                      </svg>
                    </motion.span>
                    {s.label}
                    <ExternalLink size={14} className="text-[var(--color-text-muted)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </motion.a>
                ))}
              </div>

              <motion.a
                href={contact.resume}
                download
                className="inline-flex items-center gap-2 rounded-full border border-[var(--glass-stroke)] bg-[var(--glass-bg)] px-5 py-3 text-sm font-medium text-[var(--color-text-primary)] transition-all duration-300 will-change-transform"
                whileHover={{ 
                  y: -3, 
                  borderColor: "var(--glass-stroke-accent)",
                  backgroundColor: "var(--glass-bg-intense)"
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <Download size={16} className="text-[var(--color-primary)]" />
                Download Resume
                <ExternalLink size={14} className="text-[var(--color-text-muted)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.a>
            </div>
          </FadeIn>

          {/* RIGHT: Contact Form */}
          <FadeIn delay={0.15}>
            <div className="surface-sheen rounded-[var(--radius-2xl)] border border-[var(--glass-stroke)] bg-[var(--glass-bg)] p-8 backdrop-blur-xl will-change-transform">
              <ContactForm 
                onSubmit={handleSubmit} 
                loading={loading} 
                success={success} 
                error={error} 
              />
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}