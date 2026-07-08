"use client";

import { useEffect, useState } from "react";
import { 
  ArrowRight, Flame, Search, Bell, Sun, Moon, Home, Menu, Star, Trophy, 
  BookOpen, GraduationCap, Sparkles, Brain, CheckSquare, CalendarDays, BookMarked, Settings
} from "lucide-react";
import Link from "next/link";
import { useTheme } from "@/components/theme-provider";
import { ProgressBar } from "@/components/platform";
import { dashboardModules } from "@/lib/mock-data";

export default function StudentDashboardPage() {
  const { resolvedTheme, setMode } = useTheme();
  const isDark = resolvedTheme === "dark";
  const [searchQuery, setSearchQuery] = useState("");

  // Hook to toggle class on root html node to apply scoped styles
  useEffect(() => {
    document.documentElement.classList.add("s3k-student-dashboard");
    return () => {
      document.documentElement.classList.remove("s3k-student-dashboard");
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col" style={{ background: "var(--bg)" }}>
      {/* Sora & Inter Premium Typography Integration */}
      <link 
        href="https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap" 
        rel="stylesheet" 
      />

      {/* Scoped CSS Inject for S3K Theme & Component Rules */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* ── S3K Design Variables ─────────────────────────────────── */
        .s3k-student-dashboard {
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

        .s3k-student-dashboard.dark {
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

        /* Enforce global resets locally */
        .s3k-student-dashboard body {
          background: var(--bg) !important;
          color: var(--text) !important;
          font-family: var(--font-sans) !important;
        }

        /* Enforce fonts specifically on elements */
        .s3k-student-dashboard h1,
        .s3k-student-dashboard h2,
        .s3k-student-dashboard h3,
        .s3k-student-dashboard h4,
        .s3k-student-dashboard h5,
        .s3k-student-dashboard h6,
        .s3k-student-dashboard .font-display {
          font-family: var(--font-display) !important;
          letter-spacing: -0.01em !important;
        }

        /* Hide the default global PersistentNavbar */
        .s3k-student-dashboard .sticky.top-0.z-50.w-full {
          display: none !important;
        }

        /* Hide the default background gradient elements */
        .s3k-student-dashboard .absolute.inset-0.dark\\:hidden,
        .s3k-student-dashboard .absolute.inset-0.hidden.dark\\:block {
          background: var(--bg) !important;
          background-image: none !important;
        }

        /* S3K Header Override rules */
        .s3k-student-dashboard header.s3k-header {
          background: var(--surface) !important;
          border-bottom: 1px solid var(--border) !important;
          color: var(--text) !important;
        }

        /* S3K Input Controls */
        .s3k-student-dashboard .ctl {
          background: var(--surface-2) !important;
          border: 1px solid var(--border) !important;
          border-radius: 10px !important;
          color: var(--text) !important;
        }
        .s3k-student-dashboard.dark .ctl {
          background: #252537 !important;
          border-color: #3e3e58 !important;
        }

        /* S3K Premium Card Container */
        .s3k-student-dashboard .s3k-card {
          background: var(--surface) !important;
          border: 1px solid var(--border) !important;
          border-radius: 16px !important;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02) !important;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }

        .s3k-student-dashboard .s3k-card:hover {
          transform: translateY(-2.5px) !important;
          box-shadow: 0 16px 30px -16px rgba(109, 40, 217, 0.15) !important;
          border-color: var(--accent) !important;
        }

        .s3k-student-dashboard.dark .s3k-card:hover {
          box-shadow: 0 16px 30px -16px rgba(167, 139, 250, 0.18) !important;
        }

        /* S3K Text Utility overrides */
        .s3k-student-dashboard .txt { color: var(--text) !important; }
        .s3k-student-dashboard .txt-muted { color: var(--muted) !important; }
        .s3k-student-dashboard .txt-faint { color: var(--faint) !important; }
        .s3k-student-dashboard .accent { color: var(--accent) !important; }

        /* Custom indicator tracks */
        .s3k-student-dashboard .h-3.rounded-full {
          background: var(--surface-2) !important;
          border: 1px solid var(--border) !important;
          height: 8px !important;
          overflow: hidden !important;
        }
        .s3k-student-dashboard .h-3.rounded-full > div {
          background: linear-gradient(90deg, var(--accent) 0%, var(--accent-2) 100%) !important;
          height: 100% !important;
          border-radius: 9999px !important;
        }
      ` }} />

      {/* ── S3K TOP-TAB NAVIGATION HEADER ────────────────────────── */}
      <header className="s3k-header sticky top-0 z-40 w-full shrink-0">
        <div className="mx-auto flex h-[60px] max-w-7xl items-center justify-between gap-4 px-6">
          
          {/* Logo Mark & Text */}
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
              { label: "Dashboard", href: "/student", icon: Home, on: true },
              { label: "Modules", href: "/modules", icon: Menu },
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
            {/* Search Mock Button */}
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

            {/* Theme Switcher */}
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

            {/* Notification Bell */}
            <button className="ctl txt-muted grid h-9 w-9 place-items-center rounded-[10px] transition hover:opacity-85">
              <Bell className="h-[16px] w-[16px]" />
            </button>

            {/* User Avatar */}
            <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 text-[12px] font-extrabold text-white shadow-sm">
              M
            </div>
          </div>
        </div>
      </header>

      {/* ── MAIN SCROLLING CONTENT AREA ──────────────────────────── */}
      <main className="flex-1 overflow-y-auto px-6 py-8">
        <div className="mx-auto max-w-7xl space-y-8">
          
          {/* 1. PREMIUM HERO BANNER */}
          <section className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#2a1d4d] via-[#6d28d9] to-[#9333ea] px-8 py-10 text-white shadow-lg">
            {/* Glowing blur orbs */}
            <div aria-hidden className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full bg-pink-500/35 blur-3xl" />
            <div aria-hidden className="pointer-events-none absolute left-[28%] -bottom-28 h-64 w-64 rounded-full bg-sky-400/25 blur-3xl" />
            
            <div className="relative z-10 space-y-2">
              <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-violet-200">Student Dashboard</div>
              <h1 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
                Welcome back, <span className="bg-gradient-to-r from-teal to-[#ffe082] bg-clip-text text-transparent">Madhura</span>
              </h1>
              <p className="max-w-xl text-[14px] leading-relaxed text-violet-100/90 font-medium">
                You&apos;re on a roll — keep that streak alive today.
              </p>
            </div>
          </section>

          {/* 2. SPLIT LAYOUT COLUMNS */}
          <div className="grid gap-6 lg:grid-cols-[1.1fr_1.9fr]">
            
            {/* LEFT COLUMN: AT A GLANCE (Stats Card) */}
            <div className="s3k-card flex flex-col justify-between p-6">
              <div>
                <h3 className="txt font-display text-[16px] font-bold mb-4">At a glance</h3>
                
                <div className="space-y-4">
                  {/* Daily Goal row */}
                  <div className="flex items-center gap-3.5 py-3 border-b border-[var(--border)] last:border-0">
                    <div className="ctl flex h-[36px] w-[36px] items-center justify-center rounded-[10px] shrink-0">
                      <CheckSquare className="h-[16px] w-[16px] accent" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="txt-muted text-[11.5px] font-bold uppercase tracking-wider">Daily Goal</div>
                      <div className="txt text-[13.5px] font-semibold mt-0.5 truncate">3 of 5 lessons done</div>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="txt font-display text-[16px] font-bold">60%</span>
                    </div>
                  </div>

                  {/* Resume Learning progress row */}
                  <div className="flex items-center gap-3.5 py-3 border-b border-[var(--border)] last:border-0">
                    <div className="ctl flex h-[36px] w-[36px] items-center justify-center rounded-[10px] shrink-0">
                      <BookMarked className="h-[16px] w-[16px] accent" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="txt-muted text-[11.5px] font-bold uppercase tracking-wider">Lesson Progress</div>
                      <div className="txt text-[13.5px] font-semibold mt-0.5 truncate">Introduction to AI</div>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="txt font-display text-[16px] font-bold">72%</span>
                    </div>
                  </div>

                  {/* Daily Challenge status row */}
                  <div className="flex items-center gap-3.5 py-3 border-b border-[var(--border)] last:border-0">
                    <div className="ctl flex h-[36px] w-[36px] items-center justify-center rounded-[10px] shrink-0">
                      <Flame className="h-[16px] w-[16px] text-orange-500 fill-orange-500/20" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="txt-muted text-[11.5px] font-bold uppercase tracking-wider">Streak Reward</div>
                      <div className="txt text-[13.5px] font-semibold mt-0.5 truncate">Complete 1 quiz today</div>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-orange-500 font-display text-[15px] font-black">+25 XP</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative mini summary */}
              <div className="mt-6 pt-4 border-t border-[var(--border)] flex items-center justify-between text-xs font-semibold text-slate-400">
                <span>Streak Active</span>
                <span className="flex items-center gap-1 text-orange-500">
                  <Flame className="h-4 w-4 fill-orange-500" />
                  Active
                </span>
              </div>
            </div>

            {/* RIGHT COLUMN: ACTIVE PRIORITY CARDS */}
            <div className="grid gap-6 md:grid-cols-2">
              
              {/* CARD 1: RESUME LEARNING */}
              <div className="s3k-card flex flex-col justify-between p-6">
                <div>
                  {/* Category icon header */}
                  <div className="mb-4 flex h-[46px] w-[46px] items-center justify-center rounded-[14px] bg-gradient-to-br from-violet-600 to-indigo-600 shadow-sm text-white">
                    <BookOpen className="h-[22px] w-[22px]" />
                  </div>
                  
                  <h3 className="txt text-[17px] font-extrabold leading-snug tracking-tight">
                    Introduction to AI in Everyday life
                  </h3>
                  <p className="mt-2 text-[12.5px] txt-muted leading-relaxed">
                    Resume your last lesson and keep momentum with short, focused practice blocks.
                  </p>
                </div>

                <div className="mt-6">
                  {/* Progress info */}
                  <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 mb-2 uppercase tracking-wide">
                    <span>Progress</span>
                    <span>72%</span>
                  </div>
                  <ProgressBar value={72} accent="teal" />

                  {/* Action Link button */}
                  <Link 
                    href="/lesson?module=Introduction%20to%20AI%20in%20Everyday%20life" 
                    className="ctl mt-5 flex w-full items-center justify-center gap-2 px-5 py-3 text-xs font-bold transition hover:opacity-85"
                  >
                    <span>UpNext</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              {/* CARD 2: DAILY CHALLENGE */}
              <div className="s3k-card flex flex-col justify-between p-6">
                <div>
                  {/* Category icon header */}
                  <div className="mb-4 flex h-[46px] w-[46px] items-center justify-center rounded-[14px] bg-gradient-to-br from-amber-500 to-orange-500 shadow-sm text-white">
                    <Trophy className="h-[22px] w-[22px]" />
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <h3 className="txt text-[17px] font-extrabold leading-snug tracking-tight">
                      Complete 1 quiz today
                    </h3>
                    <div className="flex items-center gap-1 text-orange-500 font-extrabold text-[13px] bg-orange-500/10 px-2 py-0.5 rounded-full shrink-0">
                      <span>+25 XP</span>
                      <Flame className="h-3.5 w-3.5 fill-orange-500" />
                    </div>
                  </div>

                  {/* Difficulty, XP, Time tags */}
                  <div className="mt-2.5 flex items-center gap-1.5 text-[11px] txt-muted font-bold uppercase tracking-wider">
                    <span>Easy</span>
                    <span>·</span>
                    <span>5 min</span>
                  </div>

                  <p className="mt-3 text-[12.5px] txt-muted leading-relaxed">
                    Keep your streak active and unlock bonus XP with a quick quiz.
                  </p>
                </div>

                <div className="mt-6">
                  {/* Action CTA gradient button */}
                  <Link 
                    href="/quiz" 
                    className="flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-xs font-bold text-white shadow-md transition-all hover:scale-[1.01] hover:shadow-lg active:scale-100"
                    style={{ background: "linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%)" }}
                  >
                    <span>Start Challenge</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

            </div>
          </div>

          {/* 3. RECOMMENDED MODULES SECTION */}
          <section className="space-y-4">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">RECOMMENDED MODULES</p>
                <h3 className="txt font-display text-[18px] font-bold mt-1">Next up in your learning path</h3>
              </div>
              <Link 
                href="/modules" 
                className="text-[12.5px] font-semibold transition hover:opacity-85 accent"
              >
                View all →
              </Link>
            </div>

            {/* Recommended modules grid */}
            <div className="grid gap-5 sm:grid-cols-3">
              {dashboardModules.slice(0, 3).map((module) => {
                // Determine grad and icon based on subject
                const isMath = module.subject === "Mathematics";
                const isScience = module.subject === "Science";
                
                const grad = isMath 
                  ? "from-violet-600 to-indigo-600" 
                  : isScience 
                    ? "from-sky-500 to-blue-600" 
                    : "from-amber-500 to-orange-500";

                const Icon = isMath 
                  ? Brain 
                  : isScience 
                    ? GraduationCap 
                    : Sparkles;

                return (
                  <Link 
                    key={module.title} 
                    href={`/lesson?module=${encodeURIComponent(module.title)}`}
                    className="group s3k-card overflow-hidden flex flex-col justify-between min-h-[220px]"
                  >
                    {/* Top thumbnail gradient */}
                    <div className={`relative h-20 w-full bg-gradient-to-br ${grad} grid place-items-center shrink-0`}>
                      <Icon className="h-7 w-7 text-white/95" />
                    </div>

                    {/* Content area */}
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="txt text-[14px] font-extrabold leading-snug group-hover:accent transition-colors duration-200">
                          {module.title}
                        </h4>
                        
                        <div className="mt-2.5 flex items-center gap-1.5 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                          <span>{module.difficulty}</span>
                          <span>·</span>
                          <span className="text-amber-500">{module.xp} XP</span>
                          <span>·</span>
                          <span>{module.time.replace(" min", "m")}</span>
                        </div>
                      </div>

                      {/* Progress bar info */}
                      <div className="flex items-center gap-3 pt-3">
                        <div className="flex-1">
                          <ProgressBar 
                            value={module.progress} 
                            accent="teal" 
                          />
                        </div>
                        <span className="text-[11.5px] font-bold text-slate-400 min-w-[28px] text-right">
                          {module.progress}%
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}