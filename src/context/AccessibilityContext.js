"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";

const STORAGE_KEY = "aurux-a11y-settings";

const defaults = {
  fontScale: 1,       // 1 = 100%, up to 1.5
  contrast: "normal",  // "normal" | "high"
  motion: "normal",    // "normal" | "reduced"
  font: "normal",      // "normal" | "dyslexia"
  underline: false,    // underline all links
};

const AccessibilityContext = createContext({
  settings: defaults,
  setFontScale: () => {},
  toggleContrast: () => {},
  toggleMotion: () => {},
  toggleFont: () => {},
  toggleUnderline: () => {},
  reset: () => {},
});

export function AccessibilityProvider({ children }) {
  const [settings, setSettings] = useState(defaults);
  const [loaded, setLoaded] = useState(false);

  // Load saved settings once on mount.
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setSettings({ ...defaults, ...JSON.parse(raw) });
    } catch {
      // ignore corrupt/blocked storage, fall back to defaults
    }
    setLoaded(true);
  }, []);

  // Apply settings to <html> as data attributes / CSS vars, and persist.
  useEffect(() => {
    if (!loaded) return;
    const root = document.documentElement;
    root.style.setProperty("--a11y-scale", settings.fontScale);
    root.setAttribute("data-a11y-contrast", settings.contrast);
    root.setAttribute("data-a11y-motion", settings.motion);
    root.setAttribute("data-a11y-font", settings.font);
    root.setAttribute("data-a11y-underline", settings.underline ? "on" : "off");
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch {
      // ignore
    }
  }, [settings, loaded]);

  const setFontScale = useCallback((scale) => {
    setSettings((s) => ({ ...s, fontScale: Math.min(1.5, Math.max(0.85, scale)) }));
  }, []);

  const toggleContrast = useCallback(() => {
    setSettings((s) => ({ ...s, contrast: s.contrast === "high" ? "normal" : "high" }));
  }, []);

  const toggleMotion = useCallback(() => {
    setSettings((s) => ({ ...s, motion: s.motion === "reduced" ? "normal" : "reduced" }));
  }, []);

  const toggleFont = useCallback(() => {
    setSettings((s) => ({ ...s, font: s.font === "dyslexia" ? "normal" : "dyslexia" }));
  }, []);

  const toggleUnderline = useCallback(() => {
    setSettings((s) => ({ ...s, underline: !s.underline }));
  }, []);

  const reset = useCallback(() => setSettings(defaults), []);

  return (
    <AccessibilityContext.Provider
      value={{ settings, setFontScale, toggleContrast, toggleMotion, toggleFont, toggleUnderline, reset }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  return useContext(AccessibilityContext);
}
