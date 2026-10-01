"use client";

import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    if (typeof window === "undefined" || sectionIds.length === 0) return;

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "-20% 0px -40% 0px",
      threshold: [0, 0.25, 0.5, 0.75, 1],
    };

    const sectionElements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sectionElements.length === 0) return;

    const visibilityMap = new Map<string, number>();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target.id) {
          visibilityMap.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        }
      });

      // Find the section with maximum visibility ratio
      let maxRatio = 0;
      let currentActive = "";

      sectionIds.forEach((id) => {
        const ratio = visibilityMap.get(id) || 0;
        if (ratio > maxRatio) {
          maxRatio = ratio;
          currentActive = id;
        }
      });

      if (currentActive) {
        setActiveSection(currentActive);
      }
    }, observerOptions);

    sectionElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [sectionIds]);

  return activeSection;
}
