import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://viratpkgupta.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Virat P K Gupta — Production AI Engineer",
    template: "%s — Virat P K Gupta",
  },
  description:
    "Virat P K Gupta is a Production AI Engineer building intelligent software with LLMs, Agentic AI, RAG and Multi-Agent Systems. Explore production-grade AI projects, skills and certifications.",
  applicationName: "Virat P K Gupta — Portfolio",
  authors: [{ name: "Virat P K Gupta", url: siteUrl }],
  creator: "Virat P K Gupta",
  keywords: [
    "AI Engineer",
    "Production AI",
    "LLM Agents",
    "Agentic AI",
    "RAG",
    "Multi-Agent Systems",
    "Machine Learning",
    "Next.js",
    "Virat P K Gupta",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Virat P K Gupta",
    title: "Virat P K Gupta — Production AI Engineer",
    description:
      "Production AI Engineer building intelligent software with LLMs, Agentic AI, RAG and Multi-Agent Systems.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Virat P K Gupta — Production AI Engineer",
    description:
      "Production AI Engineer building intelligent software with LLMs, Agentic AI, RAG and Multi-Agent Systems.",
    creator: "@viratpkgupta",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#050507",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <div className="film-grain" aria-hidden="true" />
      </body>
    </html>
  );
}