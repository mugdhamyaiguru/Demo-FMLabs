"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { LogOut, Moon, Sun } from "lucide-react";
import { BrandMarkWhite, cn } from "@/components/platform";
import { useTheme } from "@/components/theme-provider";

export function DashboardNavbar({
  active,
  items,
  role = "student",
}: {
  active: string;
  items: Array<{ label: string; href: string; icon: ReactNode }>;
  role?: "student" | "teacher" | "parent" | "admin";
}) {
  const { resolvedTheme, setMode } = useTheme();
  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    setMode(isDark ? "light" : "dark");
  };

  const gradientClass =
    role === "admin"
      ? "bg-gradient-to-r from-[#1e1b4b] via-[#312e81] to-[#1e1935]"
      : "bg-gradient-to-r from-[#3a2f55] via-[#4E4260] to-[#2d2445]";


  const headerClass = cn(
    "flex flex-col lg:flex-row items-center justify-between gap-4 rounded-xl px-6 py-4 text-white border",
    isDark
      ? "bg-[#0b0c1e] border-white/5"
      : cn("border-white/10", gradientClass)
  );

  const headerStyle = isDark
    ? {
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
      }
    : {
        background: "#4E4260",
        boxShadow: "0 10px 30px rgba(78, 66, 96, 0.25)",
      };

  return (
    <header
      className={headerClass}
      style={headerStyle}
    >
      {/* Brand / Logo */}
      <div className="flex items-center gap-2">
        <BrandMarkWhite />
        {role === "admin" && (
          <span className="hidden sm:inline-block rounded-xl border border-indigo-400/25 bg-indigo-500/10 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-indigo-300">
            Admin
          </span>
        )}
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-wrap items-center justify-center gap-1.5 md:gap-2">
        {items.map((item) => {
          const isActive = item.label === active;
          return (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "group relative flex items-center rounded-lg py-2 px-3 text-xs md:text-sm font-semibold transition-all duration-200 ease-out overflow-hidden gap-1.5",
                isDark
                  ? isActive
                    ? "bg-[#13132b] text-white"
                    : "text-white/60 hover:bg-white/5 hover:text-white"
                  : isActive
                    ? "bg-white text-royal shadow-md"
                    : "text-white/65 hover:bg-white/10 hover:text-white"
              )}
            >
              {/* Icon */}
              <span
                className={cn(
                  "flex h-5 w-5 items-center justify-center rounded-lg transition-all duration-200",
                  isDark
                    ? isActive
                      ? "text-white"
                      : "text-white/60 group-hover:text-white"
                    : isActive
                      ? "bg-royal/8 text-royal"
                      : "text-white/65 group-hover:text-white group-hover:bg-white/10"
                )}
              >
                {item.icon}
              </span>
              <span>{item.label}</span>
              {!isActive && !isDark && (
                <span className="pointer-events-none absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-white/6 via-transparent to-transparent" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Streak widget or controls */}
      <div className="flex items-center gap-3">
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className={cn(
            "flex h-8 w-8 items-center justify-center rounded-xl transition-all duration-200 border",
            isDark
              ? "bg-[#13132b] border-white/5 text-white/80 hover:text-white"
              : "bg-white/10 border-white/15 text-white/80 hover:bg-white/20 hover:text-white"
          )}
        >
          {isDark ? (
            <Moon className="h-4 w-4" />
          ) : (
            <Sun className="h-4 w-4" />
          )}
        </button>

        {role === "admin" ? (
          <Link
            href="/"
            className="flex items-center gap-1.5 rounded-xl bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/70 transition-all hover:bg-red-500/20 hover:text-red-300"
          >
            <LogOut className="h-3.5 w-3.5" />
            Sign Out
          </Link>
        ) : (
          <div className="flex items-center gap-2">
            {/* Avatar */}
            <div className="h-8 w-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-xs shadow-md border border-white/20 select-none">
              N
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
