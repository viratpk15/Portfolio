"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Mail, MapPin, ExternalLink, Download } from "lucide-react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeIn from "@/components/animations/FadeIn";
import ContactForm from "./ContactForm";

import { contact } from "@/data/contact";
import { socials } from "@/data/socials";

// Email service abstraction - Replace with your preferred service (Resend, Formspree, etc.)
// Set NEXT_PUBLIC_EMAIL_SERVICE_URL in your environment variables
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

  // Auto-clear success state after 5 seconds
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [success]);

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
              <div className="relative">
                {/* Main image frame */}
                <div className="surface-sheen overflow-hidden rounded-[var(--radius-xl)] border border-[var(--glass-stroke)] bg-[var(--glass-bg)]">
                  <div className="relative aspect-[4/5] sm:aspect-[3/4]">
                    <Image
                      src="/images/profile/contact.PNG"
                      alt="Contact Virat"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                    />
                    {/* Subtle overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/30 via-transparent to-transparent" />
                  </div>
                </div>
              </div>

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
                {/* Email */}
                <a
                  href={`mailto:${contact.email}`}
                  className="group flex items-center gap-4"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--glass-stroke)] bg-[var(--glass-bg)] transition-all duration-300 group-hover:border-[var(--glass-stroke-accent)] group-hover:bg-[var(--glass-bg-intense)]">
                    <Mail size={18} className="text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <p className="text-xs text-[var(--color-text-secondary)]">Email</p>
                    <p className="text-sm text-[var(--color-text-tertiary)] transition-colors group-hover:text-[var(--color-text-primary)]">
                      {contact.email}
                    </p>
                  </div>
                  <ExternalLink
                    size={16}
                    className="ml-auto text-[var(--color-text-muted)] opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>

                {/* Location */}
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--glass-stroke)] bg-[var(--glass-bg)]">
                    <MapPin size={18} className="text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <p className="text-xs text-[var(--color-text-secondary)]">Location</p>
                    <p className="text-sm text-[var(--color-text-tertiary)]">{contact.location}</p>
                  </div>
                </div>

                {/* Availability */}
                <div className="flex items-center gap-4">
                  <div className="flex h-2.5 w-2.5">
                    <div className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--color-primary)] shadow-[0_0_15px_var(--color-primary)]" />
                  </div>
                  <div>
                    <p className="text-xs text-[var(--color-text-secondary)]">Status</p>
                    <p className="text-sm text-[var(--color-text-tertiary)]">{contact.availability}</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex flex-wrap gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="group flex items-center gap-2 rounded-full border border-[var(--glass-stroke)] bg-[var(--glass-bg)] px-4 py-2.5 text-sm text-[var(--color-text-tertiary)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--glass-stroke-accent)] hover:bg-[var(--glass-bg-intense)] hover:text-[var(--color-text-primary)]"
                  >
                    <span className="text-[var(--color-primary)] transition-transform group-hover:scale-110">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        {s.label === "GitHub" && (
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.44 21.8 8.21 23.29C8.81 23.43 9.22 22.97 9.22 22.43C9.22 21.97 9.21 21.03 9.21 20.03C6 20.53 5.5 18.53 5.5 18.53C5 17.23 4.23 17 4.23 17C3.03 16.23 4.23 16.23 4.23 16.23C5.43 16.33 6 17.31 6 17.31C6.92 19.11 8.5 18.71 9.22 18.29C9.33 17.31 9.66 16.73 10.12 16.31C8.03 16 5.5 15.13 5.5 11.13C5.5 10.11 5.82 9.33 6.43 8.71C6.33 8.29 5.71 6.71 6.29 5.11C6.29 5.11 7.33 4.67 9.22 6.11C10.33 5.71 11.67 5.5 12 5.5C12.33 5.5 13.67 5.71 14.78 6.11C16.67 4.67 17.71 5.11 17.71 5.11C18.29 6.71 17.67 8.29 17.57 8.71C18.18 9.33 18.5 10.11 18.5 11.13C18.5 15.13 15.97 16 13.88 16.31C14.34 16.73 14.67 17.31 14.67 18.29C15.38 18.71 17 19.11 17.92 17.31C18.53 17.31 19 16.73 19 16.23C19 16.23 18.97 17.23 18.05 18.03C18.05 18.03 17.29 18.53 14.29 20.03C14.29 20.03 14.29 21.03 14.29 21.49C14.29 22.1 13.72 22.56 13.11 22.43C12 22.31 8.81 21.43 8.81 17.31C8.81 16.31 9 15.5 9.5 14.73C7.5 14.23 6.5 12.5 6.5 11.13C6.5 8.87 8.5 7.5 12 7.5C15.5 7.5 17.5 8.87 17.5 11.13C17.5 12.5 16.5 14.23 14.5 14.73C15 15.5 15.19 16.31 15.19 17.31C15.19 21.43 12 22.31 12 22.31Z" />
                        )}
                        {s.label === "LinkedIn" && (
                          <path fillRule="evenodd" clipRule="evenodd" d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.27c-.96 0-1.73-.78-1.73-1.73s.78-1.73 1.73-1.73 1.73.78 1.73 1.73-.78 1.73-1.73 1.73zm13.5 10.27h-3v-4.54c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.27-1.73 2.38v4.59h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.6v5.32z" />
                        )}
                        {s.label === "Twitter" && (
                          // Modern X (Twitter) logo
                          <path fillRule="evenodd" clipRule="evenodd" d="M17.53 3.5h2.63l-6.61 7.67L24 22.5h-6.94l-4.32-5.54-4.96 5.54H2.5l7.28-8.44L2.5 3.5h7l3.9 5.09L17.53 3.5ZM16.59 20.5h2.12L9.25 7.11H7.12l9.47 13.39Z" />
                        )}
                      </svg>
                    </span>
                    {s.label}
                    <ExternalLink size={14} className="text-[var(--color-text-muted)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ))}
              </div>

              {/* Resume Button */}
              <Link
                href={contact.resume}
                download
                className="group inline-flex items-center gap-2 rounded-full border border-[var(--glass-stroke)] bg-[var(--glass-bg)] px-5 py-3 text-sm font-medium text-[var(--color-text-primary)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--glass-stroke-accent)] hover:bg-[var(--glass-bg-intense)]"
              >
                <Download size={16} className="text-[var(--color-primary)] transition-transform group-hover:scale-110" />
                Download Resume
                <ExternalLink size={14} className="text-[var(--color-text-muted)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </FadeIn>

          {/* RIGHT: Contact Form */}
          <FadeIn delay={0.1}>
            <div className="surface-sheen rounded-[var(--radius-2xl)] border border-[var(--glass-stroke)] bg-[var(--glass-bg)] p-8 backdrop-blur-xl">
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