"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from "react";
import { ThemeId, ThemeConfig, THEMES, THEME_STORAGE_KEY } from "@/lib/themes";

export interface ThemeContextType {
  theme: ThemeId;
  currentTheme: ThemeConfig;
  setTheme: (theme: ThemeId) => void;
  mounted: boolean;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

function normalizeTheme(val: string | null | undefined): ThemeId {
  if (!val) return "midnight";
  if (val === "midnight" || val === "blue") return "midnight";
  if (val === "obsidian" || val === "gold") return "obsidian";
  if (val === "matte-silver" || val === "silver") return "matte-silver";
  if (val === "champagne" || val === "peach") return "champagne";
  // Legacy: map old crimson/red to matte-silver
  if (val === "crimson" || val === "red") return "matte-silver";
  if (val in THEMES) return val as ThemeId;
  return "midnight";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeId>("midnight");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const docTheme = document.documentElement.dataset.theme;
    if (docTheme && docTheme in THEMES) {
      const normalized = normalizeTheme(docTheme);
      setThemeState(normalized);
      document.documentElement.dataset.theme = normalized;
      document.documentElement.setAttribute("data-theme", normalized);
      return;
    }

    try {
      const saved =
        localStorage.getItem(THEME_STORAGE_KEY) ||
        localStorage.getItem("virat-portfolio-theme");
      if (saved) {
        const normalized = normalizeTheme(saved);
        setThemeState(normalized);
        document.documentElement.dataset.theme = normalized;
        document.documentElement.setAttribute("data-theme", normalized);
      } else {
        const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
        const defaultTheme: ThemeId = prefersLight ? "champagne" : "midnight";
        setThemeState(defaultTheme);
        document.documentElement.dataset.theme = defaultTheme;
        document.documentElement.setAttribute("data-theme", defaultTheme);
      }
    } catch {
      setThemeState("midnight");
      document.documentElement.dataset.theme = "midnight";
      document.documentElement.setAttribute("data-theme", "midnight");
    }
  }, []);

  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key === THEME_STORAGE_KEY && e.newValue) {
        const normalized = normalizeTheme(e.newValue);
        setThemeState(normalized);
        document.documentElement.dataset.theme = normalized;
        document.documentElement.setAttribute("data-theme", normalized);
      }
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const setTheme = useCallback((newTheme: ThemeId) => {
    if (!THEMES[newTheme]) return;
    setThemeState(newTheme);
    document.documentElement.dataset.theme = newTheme;
    document.documentElement.setAttribute("data-theme", newTheme);

    try {
      localStorage.setItem(THEME_STORAGE_KEY, newTheme);
      localStorage.removeItem("virat-portfolio-theme");
    } catch {
      // Storage unavailable
    }
  }, []);

  const value = useMemo(
    () => ({
      theme,
      currentTheme: THEMES[theme] || THEMES.midnight,
      setTheme,
      mounted,
    }),
    [theme, setTheme, mounted]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (!context) {
    return {
      theme: "midnight",
      currentTheme: THEMES.midnight,
      setTheme: () => {},
      mounted: false,
    };
  }
  return context;
}
