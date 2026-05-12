import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        royal: "#4E4260",
        teal: "#189B9B",
        crimson: "#B22222",
        marigold: "#FC9438",
        gold: "#D8A444",
        // CSS-variable-driven: auto-flips between light/dark values
        surface: "var(--surface)",
        ink: "var(--ink)",
      },
      boxShadow: {
        glass: "0 20px 60px rgba(38, 26, 67, 0.16)",
        glow: "0 0 0 1px rgba(24, 155, 155, 0.18), 0 20px 40px rgba(24, 155, 155, 0.16)",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at top, rgba(24,155,155,0.24), transparent 30%), radial-gradient(circle at right, rgba(252,148,56,0.22), transparent 24%), linear-gradient(180deg, rgba(78,66,96,0.14), rgba(247,245,242,1))",
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
    },
  },
  plugins: [],
};

export default config;