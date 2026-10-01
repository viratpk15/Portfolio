export type ThemeId = "midnight" | "obsidian" | "matte-silver" | "champagne";

export interface ThemeConfig {
  id: ThemeId;
  number: string;
  label: string;
  name: string;
  identity: string;
  subtitle: string;
  description: string;
  isDark: boolean;
  swatches: [string, string, string]; // [primary, secondary/accent, bg]
}

export const THEMES: Record<ThemeId, ThemeConfig> = {
  midnight: {
    id: "midnight",
    number: "01",
    label: "01 MIDNIGHT",
    name: "Midnight Machine",
    identity: "MIDNIGHT MACHINE",
    subtitle: "Dark Aerospace Dashboard & Brushed Steel",
    description: "Deep navy, steel-blue glass, brushed metal and futuristic aerospace telemetry.",
    isDark: true,
    swatches: ["#8993AD", "#A9B2C5", "#0F101E"],
  },
  obsidian: {
    id: "obsidian",
    number: "02",
    label: "02 OBSIDIAN",
    name: "Obsidian Intelligence",
    identity: "OBSIDIAN INTELLIGENCE",
    subtitle: "Deep Burgundy & Mysterious Black",
    description: "Cinematic, mysterious AI laboratory with deep wine & burgundy lighting emerging from black.",
    isDark: true,
    swatches: ["#9B1026", "#C5C0C0", "#000000"],
  },
  "matte-silver": {
    id: "matte-silver",
    number: "03",
    label: "03 MATTE SILVER",
    name: "Matte Silver Intelligence",
    identity: "MATTE SILVER INTELLIGENCE",
    subtitle: "Matte Black & Graphite & Silver",
    description: "Matte black, graphite, silver illumination, premium hardware, monochrome editorial luxury.",
    isDark: true,
    swatches: ["#B8B8B8", "#9A9A9A", "#080808"],
  },
  champagne: {
    id: "champagne",
    number: "04",
    label: "04 CHAMPAGNE",
    name: "Champagne Future",
    identity: "CHAMPAGNE FUTURE",
    subtitle: "Architectural Champagne & Silver",
    description: "Minimalist luxury, champagne metal, frosted glass, warm silver and architectural grids.",
    isDark: false,
    swatches: ["#B69B78", "#C8C8C8", "#DDD5CD"],
  },
};

export const THEME_LIST = Object.values(THEMES);

export const THEME_STORAGE_KEY = "portfolio-theme";
