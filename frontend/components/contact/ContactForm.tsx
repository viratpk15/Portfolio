"use client";

import { useState } from "react";
import { Loader2, CheckCircle, AlertCircle, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

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

  const isFieldValid = (field: keyof typeof touched) => {
    if (field === "email" && touched.email && formData.email && !validateEmail(formData.email)) return false;
    if (touched[field] && !formData[field]) return false;
    return true;
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Name Field */}
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-medium text-[var(--color-text-secondary)]">
          Name
        </label>
        <div className="relative">
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            onBlur={() => handleBlur("name")}
            placeholder="Your name"
            disabled={loading}
            className={cn(
              "peer w-full rounded-[var(--radius-lg)] border bg-[var(--glass-bg)] px-4 py-3 text-sm text-[var(--color-text-primary)]",
              "placeholder:text-transparent",
              "transition-all duration-300",
              "focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/50 focus:shadow-[0_0_20px_rgba(212,165,116,0.3)]",
              isFieldValid("name") ? "border-[var(--glass-stroke)]" : "border-[var(--color-error)]/50"
            )}
          />
          <span 
            className={cn(
              "absolute left-4 top-3.5 text-sm text-[var(--color-text-muted)] pointer-events-none transition-all duration-300",
              "peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm",
              "peer-focus:top-1 peer-focus:text-xs peer-focus:text-[var(--color-primary)]",
              formData.name ? "top-1 text-xs" : ""
            )}
          >
            Your name
          </span>
        </div>
        {touched.name && !formData.name && (
          <motion.span 
            className="text-xs text-[var(--color-error)]" 
            role="alert"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Name is required
          </motion.span>
        )}
      </div>

      {/* Email Field */}
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium text-[var(--color-text-secondary)]">
          Email
        </label>
        <div className="relative">
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            onBlur={() => handleBlur("email")}
            placeholder="your@email.com"
            disabled={loading}
            className={cn(
              "peer w-full rounded-[var(--radius-lg)] border bg-[var(--glass-bg)] px-4 py-3 text-sm text-[var(--color-text-primary)]",
              "placeholder:text-transparent",
              "transition-all duration-300",
              "focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/50 focus:shadow-[0_0_20px_rgba(212,165,116,0.3)]",
              isFieldValid("email") ? "border-[var(--glass-stroke)]" : "border-[var(--color-error)]/50"
            )}
          />
          <span 
            className={cn(
              "absolute left-4 top-3.5 text-sm text-[var(--color-text-muted)] pointer-events-none transition-all duration-300",
              "peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm",
              "peer-focus:top-1 peer-focus:text-xs peer-focus:text-[var(--color-primary)]",
              formData.email ? "top-1 text-xs" : ""
            )}
          >
            your@email.com
          </span>
        </div>
        {touched.email && formData.email && !validateEmail(formData.email) && (
          <motion.span 
            className="text-xs text-[var(--color-error)]" 
            role="alert"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Please enter a valid email
          </motion.span>
        )}
      </div>

      {/* Message Field */}
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-[var(--color-text-secondary)]">
          Message
        </label>
        <div className="relative">
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            onBlur={() => handleBlur("message")}
            placeholder="What would you like to discuss?"
            rows={4}
            disabled={loading}
            className={cn(
              "peer w-full rounded-[var(--radius-lg)] border bg-[var(--glass-bg)] px-4 py-3 text-sm text-[var(--color-text-primary)]",
              "placeholder:text-transparent",
              "resize-none",
              "transition-all duration-300",
              "focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/50 focus:shadow-[0_0_20px_rgba(212,165,116,0.3)]",
              isFieldValid("message") ? "border-[var(--glass-stroke)]" : "border-[var(--color-error)]/50"
            )}
          />
          <span 
            className={cn(
              "absolute left-4 top-3.5 text-sm text-[var(--color-text-muted)] pointer-events-none transition-all duration-300",
              "peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm",
              "peer-focus:top-1 peer-focus:text-xs peer-focus:text-[var(--color-primary)]",
              formData.message ? "top-1 text-xs" : ""
            )}
          >
            What would you like to discuss?
          </span>
        </div>
        {touched.message && !formData.message && (
          <motion.span 
            className="text-xs text-[var(--color-error)]" 
            role="alert"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Message is required
          </motion.span>
        )}
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={loading || !formData.name || !formData.email || !validateEmail(formData.email) || !formData.message}
        className={cn(
          "btn-premium btn-primary relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5",
          "text-sm font-semibold text-[var(--color-text-primary)] backdrop-blur-xl",
          "transition-all duration-300",
          "disabled:cursor-not-allowed disabled:opacity-40",
          "will-change-transform"
        )}
        whileHover={!loading && formData.name && formData.email && validateEmail(formData.email) && formData.message ? { 
          y: -2, 
          scale: 1.01,
          boxShadow: "var(--shadow-glow-md)"
        } : undefined}
        whileTap={!loading && formData.name && formData.email && validateEmail(formData.email) && formData.message ? { scale: 0.97 } : undefined}
        animate={success ? { scale: [1, 1.05, 1] } : undefined}
        transition={{ duration: 0.4 }}
      >
        <motion.div
          animate={loading ? { rotate: 360 } : {}}
          transition={loading ? { duration: 1, ease: "linear", repeat: Infinity } : {}}
        >
          {loading ? (
            <Loader2 size={16} />
          ) : success ? (
            <CheckCircle size={16} />
          ) : (
            <Send size={16} />
          )}
        </motion.div>
        {loading ? "Sending..." : success ? "Sent!" : "Send Message"}
      </motion.button>

      {/* Error Message */}
      {error && (
        <motion.div
          className="flex items-center gap-2 text-[var(--color-error)]"
          role="alert"
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <AlertCircle size={16} />
          <span className="text-sm">{error}</span>
        </motion.div>
      )}
    </form>
  );
}