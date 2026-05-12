"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type ThemeMode = "light" | "dark" | "system";

interface ThemeContextValue {
  mode: ThemeMode;
  resolvedTheme: "light" | "dark";
  setMode: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  mode: "system",
  resolvedTheme: "light",
  setMode: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

function getSystemPreference(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(mode: ThemeMode) {
  const resolved = mode === "system" ? getSystemPreference() : mode;
  document.documentElement.classList.toggle("dark", resolved === "dark");
  return resolved;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<ThemeMode>("system");
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");

  // On mount: read stored preference
  useEffect(() => {
    const stored = (localStorage.getItem("fm-theme") as ThemeMode | null) ?? "system";
    setModeState(stored);
    const resolved = applyTheme(stored);
    setResolvedTheme(resolved);

    // Listen for system preference changes (only matters when mode=system)
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => {
      const currentMode = (localStorage.getItem("fm-theme") as ThemeMode | null) ?? "system";
      if (currentMode === "system") {
        const r = applyTheme("system");
        setResolvedTheme(r);
      }
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const setMode = (next: ThemeMode) => {
    localStorage.setItem("fm-theme", next);
    setModeState(next);
    const resolved = applyTheme(next);
    setResolvedTheme(resolved);
  };

  return (
    <ThemeContext.Provider value={{ mode, resolvedTheme, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
