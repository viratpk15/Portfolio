"use client";

import { useState } from "react";
import { Loader2, CheckCircle, AlertCircle, Send } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContactFormProps {
  onSubmit: (data: { name: string; email: string; message: string }) => Promise<void>;
  loading: boolean;
  success: boolean;
  error: string | null;
}

export default function ContactForm({ onSubmit, loading, success, error }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    if (!validateEmail(formData.email)) return;
    
    const data = { ...formData };
    setFormData({ name: "", email: "", message: "" });
    setTouched({ name: false, email: false, message: false });
    
    await onSubmit(data);
  };

  const handleBlur = (field: keyof typeof touched) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Name Field */}
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-medium text-[var(--color-text-secondary)]">
          Name
        </label>
        <input
          id="name"
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          onBlur={() => handleBlur("name")}
          placeholder="Your name"
          disabled={loading}
          className={cn(
            "w-full rounded-[var(--radius-lg)] border bg-[var(--glass-bg)] px-4 py-3 text-sm text-[var(--color-text-primary)]",
            "placeholder:text-[var(--color-text-muted)]",
            "transition-all duration-300",
            "focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/50",
            touched.name && !formData.name && "border-[var(--color-error)]/50",
            touched.name && formData.name && "border-[var(--glass-stroke-strong)]",
            !touched.name && "border-[var(--glass-stroke)]"
          )}
          aria-invalid={touched.name && !formData.name ? "true" : "false"}
          aria-describedby={touched.name && !formData.name ? "name-error" : undefined}
        />
        {touched.name && !formData.name && (
          <span id="name-error" className="text-xs text-[var(--color-error)]" role="alert">
            Name is required
          </span>
        )}
      </div>

      {/* Email Field */}
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium text-[var(--color-text-secondary)]">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          onBlur={() => handleBlur("email")}
          placeholder="your@email.com"
          disabled={loading}
          className={cn(
            "w-full rounded-[var(--radius-lg)] border bg-[var(--glass-bg)] px-4 py-3 text-sm text-[var(--color-text-primary)]",
            "placeholder:text-[var(--color-text-muted)]",
            "transition-all duration-300",
            "focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/50",
            touched.email && !validateEmail(formData.email) && formData.email && "border-[var(--color-error)]/50",
            touched.email && validateEmail(formData.email) && "border-[var(--glass-stroke-strong)]",
            !touched.email && "border-[var(--glass-stroke)]"
          )}
          aria-invalid={touched.email && !validateEmail(formData.email) ? "true" : "false"}
          aria-describedby={touched.email && !validateEmail(formData.email) ? "email-error" : undefined}
        />
        {touched.email && formData.email && !validateEmail(formData.email) && (
          <span id="email-error" className="text-xs text-[var(--color-error)]" role="alert">
            Please enter a valid email
          </span>
        )}
      </div>

      {/* Message Field */}
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-[var(--color-text-secondary)]">
          Message
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          onBlur={() => handleBlur("message")}
          placeholder="What would you like to discuss?"
          rows={4}
          disabled={loading}
          className={cn(
            "w-full rounded-[var(--radius-lg)] border bg-[var(--glass-bg)] px-4 py-3 text-sm text-[var(--color-text-primary)]",
            "placeholder:text-[var(--color-text-muted)]",
            "resize-none",
            "transition-all duration-300",
            "focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/50",
            touched.message && !formData.message && "border-[var(--color-error)]/50",
            touched.message && formData.message && "border-[var(--glass-stroke-strong)]",
            !touched.message && "border-[var(--glass-stroke)]"
          )}
          aria-invalid={touched.message && !formData.message ? "true" : "false"}
          aria-describedby={touched.message && !formData.message ? "message-error" : undefined}
        />
        {touched.message && !formData.message && (
          <span id="message-error" className="text-xs text-[var(--color-error)]" role="alert">
            Message is required
          </span>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading || !formData.name || !formData.email || !validateEmail(formData.email) || !formData.message}
        className={cn(
          "btn-premium btn-primary relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5",
          "text-sm font-semibold text-white backdrop-blur-xl",
          "transition-all duration-300",
          "disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100 disabled:hover:shadow-none",
          "hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow-md)]",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
        )}
      >
        {loading ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending...
          </>
        ) : success ? (
          <>
            <CheckCircle size={16} />
            Sent!
          </>
        ) : (
          <>
            <Send size={16} />
            Send Message
          </>
        )}
      </button>

      {/* Error Message */}
      {error && (
        <div
          className="flex items-center gap-2 text-[var(--color-error)]"
          role="alert"
        >
          <AlertCircle size={16} />
          <span className="text-sm">{error}</span>
        </div>
      )}
    </form>
  );
}