"use client";

import { Sun, Moon, Monitor } from "lucide-react";
import { useTheme, type ThemeMode } from "@/components/theme-provider";

const options: { mode: ThemeMode; label: string; Icon: React.FC<{ className?: string }> }[] = [
  { mode: "light",  label: "Light",  Icon: Sun     },
  { mode: "dark",   label: "Dark",   Icon: Moon    },
  { mode: "system", label: "System", Icon: Monitor },
];

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { mode, setMode } = useTheme();

  return (
    <div className={`inline-flex rounded-2xl border border-royal/10 dark:border-white/10 bg-surface p-1 gap-1 ${className}`}>
      {options.map(({ mode: m, label, Icon }) => {
        const active = mode === m;
        return (
          <button
            key={m}
            onClick={() => setMode(m)}
            aria-label={`Switch to ${label} mode`}
            className={`flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-semibold transition-all duration-200 ${
              active
                ? "bg-white dark:bg-white/10 shadow-sm text-ink scale-[1.02]"
                : "text-slate-400 hover:text-ink hover:bg-white/60 dark:hover:bg-white/5"
            }`}
          >
            <Icon className="h-3.5 w-3.5" />
            {label}
          </button>
        );
      })}
    </div>
  );
}

/** Compact icon-only toggle for use in topbars / sidebars */
export function ThemeToggleCompact({ className = "" }: { className?: string }) {
  const { resolvedTheme, setMode, mode } = useTheme();

  const cycle = () => {
    const order: ThemeMode[] = ["light", "dark", "system"];
    const next = order[(order.indexOf(mode) + 1) % order.length];
    setMode(next);
  };

  return (
    <button
      onClick={cycle}
      aria-label="Toggle theme"
      title={`Current: ${mode} (click to cycle)`}
      className={`flex h-9 w-9 items-center justify-center rounded-xl bg-surface border border-royal/10 dark:border-white/10 text-slate-400 hover:text-ink hover:border-teal transition-all duration-200 ${className}`}
    >
      {resolvedTheme === "dark" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
    </button>
  );
}
