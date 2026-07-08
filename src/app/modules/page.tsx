"use client";

import { useEffect, useState } from "react";
import { 
  Search, BookMarked, Clock3, Flame, Play, Layers3, ArrowRight,
  Bell, Sun, Moon, Home, Menu, Star, Trophy, Settings
} from "lucide-react";
import Link from "next/link";
import { useTheme } from "@/components/theme-provider";
import { EmptyState, ProgressBar, SectionHeading, cn } from "@/components/platform";
import { dashboardModules } from "@/lib/mock-data";

// Custom dark gradient mapping for the card headers
const cardGradients: Record<string, string> = {
  "Introduction to AI in Everyday life": "from-[#1e3a8a] via-[#172554] to-[#0f172a]/95", // Deep Blue
  "Basic Data Concepts": "from-[#064e3b] via-[#022c22] to-[#0f172a]/95", // Deep Forest Green
  "Ethics and Digital Responsibilty": "from-[#312e81] via-[#1e1b4b] to-[#0f172a]/95", // Deep Indigo
  "Binary Basics": "from-[#78350f] via-[#451a03] to-[#0f172a]/95", // Dark Gold / Brown
  "Decimals Demystified": "from-[#581c87] via-[#3b0764] to-[#0f172a]/95", // Deep Purple
  "Linear Patterns": "from-[#701a75] via-[#4a044e] to-[#0f172a]/95", // Deep Violet/Magenta
  "Cell Explorer": "from-[#0f766e] via-[#115e59] to-[#0f172a]/95", // Deep Teal
  "Internet Safety": "from-[#991b1b] via-[#7f1d1d] to-[#0f172a]/95", // Deep Crimson
};

// Custom button styles for active outlines at the bottom
const moduleButtonClasses: Record<string, string> = {
  "Introduction to AI in Everyday life": "text-blue-400 border-blue-500/15 bg-blue-500/5 hover:bg-blue-500/20 hover:text-white hover:border-blue-500",
  "Basic Data Concepts": "text-emerald-400 border-emerald-500/15 bg-emerald-500/5 hover:bg-emerald-500/20 hover:text-white hover:border-emerald-500",
  "Ethics and Digital Responsibilty": "text-indigo-400 border-indigo-500/15 bg-indigo-500/5 hover:bg-indigo-500/20 hover:text-white hover:border-indigo-500",
  "Binary Basics": "text-amber-400 border-amber-500/15 bg-amber-500/5 hover:bg-amber-500/20 hover:text-white hover:border-amber-500",
  "Decimals Demystified": "text-fuchsia-400 border-fuchsia-500/15 bg-fuchsia-500/5 hover:bg-fuchsia-500/20 hover:text-white hover:border-fuchsia-500",
  "Linear Patterns": "text-fuchsia-400 border-fuchsia-500/15 bg-fuchsia-500/5 hover:bg-fuchsia-500/20 hover:text-white hover:border-fuchsia-500",
  "Cell Explorer": "text-teal border-teal/15 bg-teal/5 hover:bg-teal/20 hover:text-white hover:border-teal",
  "Internet Safety": "text-crimson border-crimson/15 bg-crimson/5 hover:bg-crimson/20 hover:text-white hover:border-crimson",
};

// Custom progress bar accents matching the module box color
const progressAccents: Record<string, "blue" | "green" | "indigo" | "amber" | "purple" | "fuchsia" | "teal" | "crimson"> = {
  "Introduction to AI in Everyday life": "blue",
  "Basic Data Concepts": "green",
  "Ethics and Digital Responsibilty": "indigo",
  "Binary Basics": "amber",
  "Decimals Demystified": "purple",
  "Linear Patterns": "fuchsia",
  "Cell Explorer": "teal",
  "Internet Safety": "crimson",
};

export default function ModulesPage() {
  const { resolvedTheme, setMode } = useTheme();
  const isDark = resolvedTheme === "dark";
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    document.documentElement.classList.add("s3k-student-modules");
    return () => {
      document.documentElement.classList.remove("s3k-student-modules");
    };
  }, []);

  const visibleModules = searchQuery.trim() === "" 
    ? dashboardModules
    : dashboardModules.filter(module => 
        module.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        module.difficulty.toLowerCase().includes(searchQuery.toLowerCase())
      );

  return (
    <div className="flex min-h-screen flex-col" style={{ background: "var(--bg)" }}>
      {/* Sora & Inter Premium Fonts */}
      <link 
        href="https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap" 
        rel="stylesheet" 
      />

      {/* Scoped CSS Inject for S3K Tokens & Style Rules */}
      <style dangerouslySetInnerHTML={{ __html: `
        .s3k-student-modules {
          --bg: #f4f4f7;
          --surface: #ffffff;
          --surface-2: #f8f8fb;
          --border: #e7e7ef;
          --text: #15131f;
          --muted: #6b6880;
          --faint: #9a97ad;
          --accent: #6d28d9;
          --accent-2: #9333ea;
          --accent-soft: #f0ecff;
          --font-sans: 'Inter', sans-serif;
          --font-display: 'Sora', sans-serif;
        }

        .s3k-student-modules.dark {
          --bg: #0c0c12;
          --surface: #15151e;
          --surface-2: #1b1b26;
          --border: #272733;
          --text: #ececf2;
          --muted: #a4a2b5;
          --faint: #6d6b80;
          --accent: #a78bfa;
          --accent-2: #c084fc;
          --accent-soft: #221b3a;
        }

        .s3k-student-modules body {
          background: var(--bg) !important;
          color: var(--text) !important;
          font-family: var(--font-sans) !important;
        }

        .s3k-student-modules h1,
        .s3k-student-modules h2,
        .s3k-student-modules h3,
        .s3k-student-modules h4,
        .s3k-student-modules h5,
        .s3k-student-modules h6,
        .s3k-student-modules .font-display {
          font-family: var(--font-display) !important;
          letter-spacing: -0.01em !important;
        }

        /* Hide the default global PersistentNavbar */
        .s3k-student-modules .sticky.top-0.z-50.w-full {
          display: none !important;
        }

        /* Hide default background gradient panels */
        .s3k-student-modules .absolute.inset-0.dark\\:hidden,
        .s3k-student-modules .absolute.inset-0.hidden.dark\\:block {
          background: var(--bg) !important;
          background-image: none !important;
        }

        /* S3K Header style */
        .s3k-student-modules header.s3k-header {
          background: var(--surface) !important;
          border-bottom: 1px solid var(--border) !important;
          color: var(--text) !important;
        }

        /* S3K ctl inputs */
        .s3k-student-modules .ctl {
          background: var(--surface-2) !important;
          border: 1px solid var(--border) !important;
          border-radius: 10px !important;
          color: var(--text) !important;
        }
        .s3k-student-modules.dark .ctl {
          background: #252537 !important;
          border-color: #3e3e58 !important;
        }

        /* Module card layout styling */
        .s3k-student-modules .s3k-card {
          background: var(--surface) !important;
          border: 1px solid var(--border) !important;
          border-radius: 16px !important;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02) !important;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }

        .s3k-student-modules .s3k-card:hover {
          transform: translateY(-2.5px) !important;
          box-shadow: 0 16px 30px -16px rgba(109, 40, 217, 0.15) !important;
        }

        .s3k-student-modules.dark .s3k-card:hover {
          box-shadow: 0 16px 30px -16px rgba(167, 139, 250, 0.18) !important;
        }

        .s3k-student-modules .txt { color: var(--text) !important; }
        .s3k-student-modules .txt-muted { color: var(--muted) !important; }
        .s3k-student-modules .txt-faint { color: var(--faint) !important; }
        .s3k-student-modules .accent { color: var(--accent) !important; }

        /* Custom progress trackers */
        .s3k-student-modules .h-3.rounded-full {
          background: var(--surface-2) !important;
          border: 1px solid var(--border) !important;
          height: 8px !important;
          overflow: hidden !important;
        }
        .s3k-student-modules .h-3.rounded-full > div {
          background: linear-gradient(90deg, var(--accent) 0%, var(--accent-2) 100%) !important;
          height: 100% !important;
          border-radius: 9999px !important;
        }
      ` }} />

      {/* ── S3K TOP-TAB NAVIGATION HEADER ────────────────────────── */}
      <header className="s3k-header sticky top-0 z-40 w-full shrink-0">
        <div className="mx-auto flex h-[60px] max-w-7xl items-center justify-between gap-4 px-6">
          
          {/* Logo */}
          <Link href="/student" className="flex shrink-0 items-center gap-2.5">
            <div className="font-display flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-indigo-500 text-[11px] font-extrabold tracking-tight text-white shadow-md">
              FM
            </div>
            <div className="leading-none">
              <div className="font-display txt text-[15px] font-extrabold tracking-[-0.02em]">FutureMinds</div>
              <div className="text-[8.5px] font-bold uppercase tracking-[0.16em] accent">
                AI Labs
              </div>
            </div>
          </Link>

          {/* Navigation Tabs */}
          <nav className="hidden md:flex items-center gap-1.5">
            {[
              { label: "Dashboard", href: "/student", icon: Home },
              { label: "Modules", href: "/modules", icon: Menu, on: true },
              { label: "AI Tutor", href: "/tutor", icon: Star },
              { label: "Progress", href: "/progress", icon: Trophy },
              { label: "Rewards", href: "/rewards", icon: Bell },
              { label: "Settings", href: "/settings", icon: Settings },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <Link
                  key={tab.label}
                  href={tab.href}
                  className={`flex items-center gap-2 rounded-lg px-3.5 py-2 text-[13.5px] font-semibold transition-all duration-200 ${
                    tab.on ? "text-white shadow-sm" : "txt-muted hover:opacity-85"
                  }`}
                  style={tab.on ? { background: "var(--accent)" } : undefined}
                >
                  <Icon className="h-4 w-4" />
                  {tab.label}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2.5">
            <div className="ctl txt-faint hidden sm:flex w-[190px] items-center gap-2 px-3.5 py-2 text-[13px] transition hover:opacity-90">
              <Search className="h-3.5 w-3.5 shrink-0" />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent outline-none flex-1 text-xs font-semibold placeholder:opacity-50"
              />
              <span className="bd rounded border px-1.5 py-0.5 text-[9px] font-semibold">⌘K</span>
            </div>

            <button
              onClick={() => setMode(isDark ? "light" : "dark")}
              aria-label="Toggle Theme"
              className="ctl txt-muted grid h-9 w-9 place-items-center rounded-[10px] transition hover:opacity-85"
            >
              {isDark ? (
                <Sun className="h-[16px] w-[16px] text-amber-400" />
              ) : (
                <Moon className="h-[16px] w-[16px]" />
              )}
            </button>

            <button className="ctl txt-muted grid h-9 w-9 place-items-center rounded-[10px] transition hover:opacity-85">
              <Bell className="h-[16px] w-[16px]" />
            </button>

            <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 text-[12px] font-extrabold text-white shadow-sm">
              M
            </div>
          </div>
        </div>
      </header>

      {/* ── MAIN SCROLLING CONTENT AREA ──────────────────────────── */}
      <main className="flex-1 overflow-y-auto px-6 py-8">
        <div className="mx-auto max-w-7xl space-y-8">

          {/* Header & Page Heading row */}
          <div className="pb-6 border-b border-[var(--border)]">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <SectionHeading 
                eyebrow="Explore AI Learning Modules" 
                title="From Beginner to AI Expert" 
              />
              
              {/* Responsive Search bar */}
              <div className="w-full lg:max-w-md block sm:hidden">
                <div className="flex items-center gap-2 rounded-xl border border-[var(--border)] bg-white/40 dark:bg-white/5 px-4 py-2.5">
                  <Search className="h-4 w-4 flex-shrink-0 text-slate-400" />
                  <input
                    className="w-full bg-transparent text-xs font-semibold outline-none text-ink placeholder:text-slate-400"
                    placeholder="Search modules, subjects, topics…"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Module Grid list */}
          {visibleModules.length > 0 ? (
            <div className="grid gap-6 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {visibleModules.map((module) => {
                const gradient = cardGradients[module.title] ?? "from-[#4e4260] via-[#2d3a7c] to-[#0f172a]";
                const buttonClass = moduleButtonClasses[module.title] ?? "text-slate-400 border-slate-500/15 bg-slate-500/5 hover:bg-slate-500/20 hover:text-white hover:border-slate-500";
                const progressAccent = progressAccents[module.title] ?? "teal";

                return (
                  <div
                    key={module.title}
                    className="group s3k-card overflow-hidden flex flex-col h-full"
                  >
                    {/* Thumbnail banner with custom S3K subject-gradient */}
                    <div className={`relative h-40 bg-gradient-to-br ${gradient} p-5 flex-shrink-0 grid place-items-center text-white`}>
                      {/* Decorative backdrop shape */}
                      <Layers3 className="absolute right-4 top-1/2 h-16 w-16 -translate-y-1/2 text-white/5 animate-pulse" />

                      <div className="absolute top-4 right-4">
                        <button className="rounded-xl bg-white/10 p-2 text-white/70 transition-colors hover:bg-white/20 hover:text-white">
                          <BookMarked className="h-4 w-4" />
                        </button>
                      </div>

                      <div className="absolute bottom-4 left-5 right-5 text-left">
                        <h3 className="text-[17px] font-extrabold tracking-tight text-white leading-snug">{module.title}</h3>
                        <p className="mt-1.5 text-[10px] font-bold uppercase tracking-wider text-white/60">Difficulty: {module.difficulty}</p>
                      </div>
                    </div>

                    {/* Card Content body */}
                    <div className="flex flex-1 flex-col justify-between p-5">
                      <div>
                        {/* Stats Row */}
                        <div className="flex items-center justify-between text-[11px] text-slate-400 font-bold uppercase tracking-wider">
                          <div className="flex items-center gap-1.5">
                            <Clock3 className="h-3.5 w-3.5" />
                            <span>{module.time}</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-amber-500">
                            <Flame className="h-3.5 w-3.5 fill-amber-500/10" />
                            <span>{module.xp} XP</span>
                          </div>
                        </div>

                        {/* Progress Bar & Value */}
                        <div className="mt-4">
                          <div className="mb-2 flex justify-between text-[11px] font-bold text-slate-400">
                            <span>Progress</span>
                            <span className="txt">{module.progress}%</span>
                          </div>
                          <ProgressBar value={module.progress} accent={progressAccent} />
                        </div>
                      </div>

                      {/* Action CTA link button */}
                      <Link
                        href={`/lesson?module=${encodeURIComponent(module.title)}`}
                        className={cn(
                          "mt-5 flex w-full items-center justify-center gap-2 rounded-xl py-3 text-xs font-bold border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm",
                          buttonClass
                        )}
                      >
                        <Play className="h-3.5 w-3.5" />
                        <span>{module.progress > 0 ? "Resume Lesson" : "Start Lesson"}</span>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <EmptyState
              icon={<Search className="h-6 w-6" />}
              title="No modules match your selection"
              description="Try adjusting your filters or search term to find what you're looking for."
              action={
                <button 
                  onClick={() => setSearchQuery("")}
                  className="rounded-xl px-5 py-3 text-xs font-bold text-white shadow-sm"
                  style={{ background: "var(--accent)" }}
                >
                  Reset search query
                </button>
              }
            />
          )}

        </div>
      </main>
    </div>
  );
}