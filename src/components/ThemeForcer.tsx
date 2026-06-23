"use client";

import { useEffect } from "react";

export default function ThemeForcer() {
  useEffect(() => {
    const html = document.documentElement;
    const hadDark = html.classList.contains("dark");
    
    // Force light theme
    html.classList.remove("dark");
    html.style.colorScheme = "light";

    return () => {
      // Re-apply dark theme if it was present when leaving the page
      if (hadDark) {
        html.classList.add("dark");
        html.style.colorScheme = "dark";
      }
    };
  }, []);

  return null;
}
