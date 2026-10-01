import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/jetbrains-mono/500.css";
import "./globals.css";
import { profile } from "@/data/profile";

const siteUrl = "https://viratpkgupta.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${profile.name} — ${profile.title}`,
  description: profile.tagline,
  keywords: [
    "AI Engineer",
    "Agentic AI",
    "RAG",
    "LLM",
    "Machine Learning",
    "Virat Gupta",
    "Portfolio",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} — ${profile.title}`,
    description: profile.tagline,
    url: siteUrl,
    siteName: profile.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.title}`,
    description: profile.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { InteractiveAura } from "@/components/effects/InteractiveAura";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="midnight" className={GeistSans.variable} suppressHydrationWarning>
      <head>
        {/* FOUC Prevention Script: Set data-theme before first paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('portfolio-theme') || localStorage.getItem('virat-portfolio-theme');
                  var theme = 'midnight';
                  if (saved === 'midnight' || saved === 'blue') theme = 'midnight';
                  else if (saved === 'obsidian' || saved === 'gold') theme = 'obsidian';
                  else if (saved === 'matte-silver' || saved === 'silver' || saved === 'crimson' || saved === 'red') theme = 'matte-silver';
                  else if (saved === 'champagne' || saved === 'peach') theme = 'champagne';
                  else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) theme = 'champagne';
                  document.documentElement.dataset.theme = theme;
                  document.documentElement.setAttribute('data-theme', theme);
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased bg-bg text-ink selection:bg-(--accent-primary)/30 transition-colors duration-750" suppressHydrationWarning>
        <ThemeProvider>
          <InteractiveAura />
          <div className="editorial-grid-bg" aria-hidden="true" />
          <div className="theme-ambient-glow" aria-hidden="true" />
          <div className="cinematic-grain" aria-hidden="true" />
          <div className="relative z-1">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
