"use client";

import { useEffect, useState } from "react";
import { 
  Download, Flame, PieChart, TrendingUp, Trophy, AlertTriangle, 
  BadgeCheck, CheckCircle2, ChevronRight, Search, Bell, Sun, Moon, 
  Home, Menu, Star, Settings
} from "lucide-react";
import Link from "next/link";
import { useTheme } from "@/components/theme-provider";
import { EmptyState, Pill, ProgressBar, SectionHeading } from "@/components/platform";

export default function ProgressPage() {
  const { resolvedTheme, setMode } = useTheme();
  const isDark = resolvedTheme === "dark";
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    document.documentElement.classList.add("s3k-student-progress");
    return () => {
      document.documentElement.classList.remove("s3k-student-progress");
    };
  }, []);

  const weakTopicsDetail = [
    {
      title: "Introduction to AI",
      tag: "Needs Practice",
      progress: 52,
      tagBg: "bg-red-500/10 text-red-500 border border-red-500/20 dark:bg-red-950/40 dark:text-red-400 dark:border-red-900/30",
      barColor: "bg-red-500",
      textColor: "text-red-500 dark:text-red-400",
    },
    {
      title: "AI vs Machine Learning",
      tag: "Needs Revision",
      progress: 45,
      tagBg: "bg-orange-500/10 text-orange-500 border border-orange-500/20 dark:bg-orange-950/40 dark:text-orange-400 dark:border-orange-900/30",
      barColor: "bg-orange-500",
      textColor: "text-orange-500 dark:text-orange-400",
    },
    {
      title: "Responsible AI",
      tag: "Needs Improvement",
      progress: 38,
      tagBg: "bg-amber-500/10 text-amber-500 border border-amber-500/20 dark:bg-amber-950/40 dark:text-amber-400 dark:border-amber-900/30",
      barColor: "bg-amber-500",
      textColor: "text-amber-500 dark:text-amber-400",
    },
  ];

  const leaderboardDetail = [
    { rank: 12, name: "Aanya", xp: "1,240 XP" },
    { rank: 13, name: "Mira", xp: "1,110 XP" },
    { rank: 14, name: "Ravi", xp: "980 XP" },
  ];

  const currentUserRank = { rank: 15, name: "You (Madhura)", xp: "920 XP" };
  
  const lineChartData = [
    { day: "Mon", value: 3, x: "5%", y: "60.4%" },
    { day: "Tue", value: 5, x: "20%", y: "39.6%" },
    { day: "Wed", value: 4, x: "35%", y: "50%" },
    { day: "Thu", value: 6, x: "50%", y: "29.2%" },
    { day: "Fri", value: 2, x: "65%", y: "70.8%" },
    { day: "Sat", value: 7, x: "80%", y: "18.75%" },
    { day: "Sun", value: 5, x: "95%", y: "39.6%" },
  ];

  return (
    <div className="flex min-h-screen flex-col" style={{ background: "var(--bg)" }}>
      {/* Sora & Inter Premium fonts */}
      <link 
        href="https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap" 
        rel="stylesheet" 
      />

      {/* Scoped CSS Inject for Progress Page UI styling */}
      <style dangerouslySetInnerHTML={{ __html: `
        .s3k-student-progress {
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

        .s3k-student-progress.dark {
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

        .s3k-student-progress body {
          background: var(--bg) !important;
          color: var(--text) !important;
          font-family: var(--font-sans) !important;
        }

        .s3k-student-progress h1,
        .s3k-student-progress h2,
        .s3k-student-progress h3,
        .s3k-student-progress h4,
        .s3k-student-progress h5,
        .s3k-student-progress h6,
        .s3k-student-progress .font-display {
          font-family: var(--font-display) !important;
          letter-spacing: -0.01em !important;
        }

        /* Hide global layouts */
        .s3k-student-progress .sticky.top-0.z-50.w-full {
          display: none !important;
        }

        .s3k-student-progress .absolute.inset-0.dark\\:hidden,
        .s3k-student-progress .absolute.inset-0.hidden.dark\\:block {
          background: var(--bg) !important;
          background-image: none !important;
        }

        /* Header top shell styling */
        .s3k-student-progress header.s3k-header {
          background: var(--surface) !important;
          border-bottom: 1px solid var(--border) !important;
          color: var(--text) !important;
        }

        /* ctl classes */
        .s3k-student-progress .ctl {
          background: var(--surface-2) !important;
          border: 1px solid var(--border) !important;
          border-radius: 10px !important;
          color: var(--text) !important;
        }
        .s3k-student-progress.dark .ctl {
          background: #252537 !important;
          border-color: #3e3e58 !important;
        }

        /* S3K Card container rules */
        .s3k-student-progress .s3k-card {
          background: var(--surface) !important;
          border: 1px solid var(--border) !important;
          border-radius: 20px !important;
          padding: 24px !important;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02) !important;
          backdrop-filter: none !important;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
        .s3k-student-progress .s3k-card:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 16px 30px -16px rgba(109, 40, 217, 0.12) !important;
        }
        .s3k-student-progress.dark .s3k-card:hover {
          box-shadow: 0 16px 30px -16px rgba(167, 139, 250, 0.16) !important;
        }

        .s3k-student-progress .txt { color: var(--text) !important; }
        .s3k-student-progress .txt-muted { color: var(--muted) !important; }
        .s3k-student-progress .txt-faint { color: var(--faint) !important; }
        .s3k-student-progress .accent { color: var(--accent) !important; }

        /* Custom track details */
        .s3k-student-progress .h-3.rounded-full {
          background: var(--surface-2) !important;
          border: 1px solid var(--border) !important;
          height: 8px !important;
          overflow: hidden !important;
        }
        .s3k-student-progress .h-3.rounded-full > div {
          background: linear-gradient(90deg, var(--accent) 0%, var(--accent-2) 100%) !important;
          height: 100% !important;
          border-radius: 9999px !important;
        }

        /* Animations for SVG graphics */
        @keyframes line-draw {
          from { stroke-dashoffset: 500; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes radial-draw {
          from { stroke-dashoffset: 314.2; }
          to { stroke-dashoffset: 56.6; }
        }
        @keyframes fade-in-circle {
          from { opacity: 0; transform: scale(0.6); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-line-draw {
          stroke-dasharray: 500;
          stroke-dashoffset: 500;
          animation: line-draw 1.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-radial-draw {
          stroke-dasharray: 314.2;
          animation: radial-draw 1.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fade-in-circle {
          animation: fade-in-circle 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes barGrow {
          from { transform: scaleY(0); }
          to { transform: scaleY(1); }
        }
        .animate-bar-grow {
          transform: scaleY(0);
          transform-origin: bottom;
          animation: barGrow 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
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
              { label: "Modules", href: "/modules", icon: Menu },
              { label: "AI Tutor", href: "/tutor", icon: Star },
              { label: "Progress", href: "/progress", icon: Trophy, on: true },
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
          
          {/* Header title */}
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between border-b border-[var(--border)] pb-6">
            <SectionHeading eyebrow="Analytics" title="Learning progress at a glance" />
            <button
              className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-xs font-bold text-white shadow-md hover:opacity-90 transition-all"
              style={{ background: "var(--accent)" }}
            >
              <Download className="h-4 w-4" /> 
              <span>Download report</span>
            </button>
          </div>

          {/* At a Glance row (Practice list & Leaderboard list) */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 w-full items-stretch">
            
            {/* Needs More Practice Card */}
            <div className="s3k-card flex flex-col justify-between h-full gap-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="txt font-display text-[15px] font-bold">Needs More Practice</h3>
                    <p className="text-xs text-slate-400 mt-1">3 Topics Need Attention</p>
                  </div>
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                </div>

                <div className="flex flex-col gap-3 pt-2">
                  {weakTopicsDetail.map((topic) => (
                    <div key={topic.title} className="rounded-xl border border-[var(--border)] p-4 bg-white/40 dark:bg-white/5 flex flex-col justify-between">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-sm font-bold text-ink">{topic.title}</h4>
                        <span className={`inline-flex items-center rounded-md px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider ${topic.tagBg}`}>
                          {topic.tag}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-3 mt-4">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider w-8 shrink-0">Weak</span>
                        <div className="flex-grow h-2 bg-slate-200/50 dark:bg-white/5 rounded-full overflow-hidden">
                          <div className={`h-full ${topic.barColor} rounded-full`} style={{ width: `${topic.progress}%` }} />
                        </div>
                        <span className={`text-xs font-bold w-8 text-right shrink-0 ${topic.textColor}`}>{topic.progress}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button className="ctl relative py-3 border-[var(--border)] text-xs font-bold rounded-xl transition-all flex items-center justify-center">
                <span>Review Weak Topics</span>
                <ChevronRight className="h-4 w-4 absolute right-4 text-slate-400" />
              </button>
            </div>

            {/* Weekly Leaderboard Card */}
            <div className="s3k-card flex flex-col justify-between h-full gap-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="txt font-display text-[15px] font-bold">Weekly Leaderboard</h3>
                    <p className="text-xs text-slate-400 mt-1">Rank #15 of 42 learners</p>
                  </div>
                  <button className="px-3 py-1.5 border border-teal/20 hover:bg-teal/5 text-teal text-xs font-bold rounded-lg transition-all">
                    View All
                  </button>
                </div>

                <div className="flex flex-col pt-2">
                  {leaderboardDetail.map((player, index) => (
                    <div key={player.name} className={`flex items-center justify-between py-3 border-b border-[var(--border)] ${index === leaderboardDetail.length - 1 ? 'border-b-0 pb-4' : ''}`}>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center text-xs font-bold text-slate-500">
                          {player.rank}
                        </div>
                        <span className="text-sm font-semibold text-ink">{player.name}</span>
                      </div>
                      <span className="text-sm font-bold text-[#9B7EF3] dark:text-[#A389F4]">{player.xp}</span>
                    </div>
                  ))}

                  {/* Highlight current user in S3K accent theme */}
                  <div className="mt-2 flex items-center justify-between p-4 rounded-xl border border-transparent transition-all duration-300" style={{ background: "var(--accent-soft)" }}>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/50 dark:bg-white/10 flex items-center justify-center text-xs font-extrabold" style={{ color: "var(--accent)" }}>
                        {currentUserRank.rank}
                      </div>
                      <span className="text-sm font-extrabold" style={{ color: "var(--accent)" }}>{currentUserRank.name}</span>
                    </div>
                    <span className="text-sm font-extrabold" style={{ color: "var(--accent)" }}>{currentUserRank.xp}</span>
                  </div>

                  <div className="mt-3 flex items-center justify-between py-3 border-t border-[var(--border)] pt-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center text-xs font-bold text-slate-500">
                        16
                      </div>
                      <span className="text-sm font-semibold text-ink">Yash</span>
                    </div>
                    <span className="text-sm font-bold text-[#9B7EF3] dark:text-[#A389F4]">850 XP</span>
                  </div>
                </div>
              </div>

              <button className="ctl relative py-3 border-[var(--border)] text-xs font-bold rounded-xl transition-all flex items-center justify-center">
                <span>View Full Leaderboard</span>
                <ChevronRight className="h-4 w-4 absolute right-4 text-slate-400" />
              </button>
            </div>

          </div>

          {/* Heatmap, Skill pie and Badges row */}
          <div className="grid gap-6 grid-cols-1 lg:grid-cols-[minmax(0,_1.2fr)_auto_minmax(0,_0.8fr)_auto_minmax(0,_1.1fr)] s3k-card p-6">
            
            {/* Heatmap */}
            <div className="space-y-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="txt font-display text-[15px] font-bold">Streak Heatmap</h3>
                  <Flame className="h-5 w-5 text-marigold" />
                </div>
                
                <div className="space-y-2">
                  <div className="grid grid-cols-7 gap-1.5 text-center text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                    <span>Sat</span>
                    <span>Sun</span>
                  </div>

                  <div className="grid grid-cols-7 gap-1.5">
                    {Array.from({ length: 35 }).map((_, index) => {
                      const dayNum = index + 1;
                      let xp = 0;
                      let bg = "bg-royal/5 dark:bg-white/5";
                      let status = "No activity";

                      if (index % 5 === 0) {
                        xp = 250 + (index * 5);
                        bg = "bg-teal";
                        status = "Goal Completed";
                      } else if (index % 3 === 0) {
                        xp = 80 + (index * 3);
                        bg = "bg-marigold/80";
                        status = "Practice Session";
                      }

                      return (
                        <div
                          key={index}
                          title={`Day ${dayNum}: ${xp} XP (${status})`}
                          className={`h-4.5 rounded ${bg} cursor-pointer transition-all duration-200 hover:scale-110`}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3.5 text-[9px] text-slate-400 font-bold justify-end mt-2 pt-2 border-t border-[var(--border)]">
                <div className="flex items-center gap-1.5">
                  <div className="h-3 w-3 rounded bg-slate-200/40 dark:bg-white/5" />
                  <span>0 XP</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="h-3 w-3 rounded bg-marigold/80" />
                  <span>1 - 249 XP</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="h-3 w-3 rounded bg-teal" />
                  <span>250+ XP</span>
                </div>
              </div>
            </div>

            <div className="hidden lg:block w-px bg-[var(--border)] h-full self-stretch" />

            {/* Skill conic pie */}
            <div className="space-y-4 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <h3 className="txt font-display text-[15px] font-bold">Skill Distribution</h3>
                <PieChart className="h-5 w-5 text-teal" />
              </div>
              <div className="flex items-center justify-center py-2">
                <div className="flex h-32 w-32 items-center justify-center rounded-full bg-[conic-gradient(from_120deg,_#189B9B_0_42%,_#FC9438_42%_70%,_#D8A444_70%_100%)]">
                  <div className="flex h-22 w-22 items-center justify-center rounded-full bg-white dark:bg-[#15151e] text-center shadow-sm">
                    <div>
                      <p className="text-xl font-extrabold text-ink">78%</p>
                      <p className="text-[9px] uppercase font-bold tracking-wider text-slate-400">mastery</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block w-px bg-[var(--border)] h-full self-stretch" />

            {/* Badges Earned */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="txt font-display text-[15px] font-bold">Badges Earned</h3>
                <BadgeCheck className="h-5 w-5 text-amber-500" />
              </div>
              <div className="space-y-1 pt-1">
                {[
                  "7-Day Streak",
                  "Quick Thinker",
                  "Quiz Master",
                  "Project Builder",
                ].map((badge) => (
                  <div key={badge} className="flex items-center gap-2.5 py-1.5 border-b border-[var(--border)] last:border-0 text-xs font-semibold text-ink">
                    <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--accent)" }} />
                    <span>{badge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Learning Hours Bar chart & Task radial trend */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 w-full items-stretch">
            
            {/* Learning Hours Graph Card */}
            <div className="s3k-card flex flex-col justify-between h-full">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="txt font-display text-[15px] font-bold">Weekly Learning Graph</h3>
                  <TrendingUp className="h-5 w-5 text-teal" />
                </div>
                <p className="text-xs text-slate-400">Daily study hours logged this week</p>
              </div>
              
              <div className="flex-grow pt-10 flex flex-row items-stretch">
                <div className="flex items-stretch select-none">
                  {/* Hours vertical label */}
                  <div className="flex items-center justify-center pr-1 w-8">
                    <span 
                      className="text-[10px] font-bold text-slate-400 uppercase tracking-wider whitespace-nowrap"
                      style={{
                        writingMode: "vertical-lr",
                        transform: "rotate(180deg)",
                      }}
                    >
                      Study Hours (hrs)
                    </span>
                  </div>

                  {/* ticks */}
                  <div className="flex flex-col justify-between text-right pr-3 text-[10px] font-semibold text-slate-400 w-5 py-[2px]">
                    <span>7</span>
                    <span>6</span>
                    <span>5</span>
                    <span>4</span>
                    <span>3</span>
                    <span>2</span>
                    <span>1</span>
                    <span>0</span>
                  </div>
                </div>

                <div className="flex-grow flex flex-col">
                  {/* Grid layout containing bars */}
                  <div className="flex-grow h-56 relative border-l border-b border-[var(--border)] pb-0">
                    <div className="absolute inset-0 flex flex-col justify-between pointer-events-none py-[2px]">
                      {Array.from({ length: 8 }).map((_, i) => (
                        <div
                          key={i}
                          className="w-full border-t border-dotted border-[var(--border)]"
                        />
                      ))}
                    </div>

                    <div className="absolute inset-x-4 bottom-0 top-[2px] grid grid-cols-7 gap-3 sm:gap-4 items-end">
                      {[
                        { day: "DAY 01", hours: 2.5 },
                        { day: "DAY 02", hours: 3.5 },
                        { day: "DAY 03", hours: 4.2 },
                        { day: "DAY 04", hours: 4.8 },
                        { day: "DAY 05", hours: 3.2 },
                        { day: "DAY 06", hours: 5.6 },
                        { day: "DAY 07", hours: 6.2 },
                      ].map((item, index) => {
                        const heightPercent = (item.hours / 7) * 100;
                        return (
                          <div key={index} className="flex flex-col items-center justify-end h-full relative group">
                            <div
                              className="w-full relative cursor-pointer"
                              style={{ height: `${heightPercent}%` }}
                            >
                              {/* custom tooltip hover */}
                              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-20">
                                <div className="bg-slate-900/95 dark:bg-slate-800/95 text-white text-[9px] font-bold px-2.5 py-1.5 rounded-lg shadow-xl border border-white/10 backdrop-blur-sm whitespace-nowrap text-center">
                                  {item.hours} hrs
                                </div>
                                <div className="w-1.5 h-1.5 bg-slate-900/95 dark:bg-slate-800/95 border-r border-b border-white/10 rotate-45 absolute -bottom-0.5 left-1/2 -translate-x-1/2" />
                              </div>

                              {/* styled S3K columns */}
                              <div
                                className="w-full h-full rounded-t-md hover:shadow-[0_0_15px_rgba(24,155,155,0.4)] hover:scale-[1.02] transition-all duration-300 animate-bar-grow"
                                style={{ 
                                  animationDelay: `${index * 80}ms`,
                                  background: "linear-gradient(180deg, var(--accent) 0%, var(--accent-2) 100%)"
                                }}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="pt-3 px-4 grid grid-cols-7 gap-3 sm:gap-4 text-center">
                    {["DAY 01", "DAY 02", "DAY 03", "DAY 04", "DAY 05", "DAY 06", "DAY 07"].map((day) => (
                      <span key={day} className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">
                        {day}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Weekly Task Completion Card */}
            <div className="s3k-card flex flex-col justify-between h-full space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="txt font-display text-[15px] font-bold">Weekly Task Completion</h3>
                  <CheckCircle2 className="h-5 w-5 text-teal" />
                </div>
                <p className="text-xs text-slate-400">Weekly task status and completions</p>
              </div>

              {/* Radial center display */}
              <div className="flex justify-center py-2">
                <div className="relative flex items-center justify-center">
                  <svg width="120" height="120" className="transform -rotate-90">
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      className="stroke-slate-200/30 dark:stroke-white/5"
                      strokeWidth="8"
                      fill="transparent"
                    />
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      className="animate-radial-draw"
                      strokeWidth="8"
                      fill="transparent"
                      strokeLinecap="round"
                      style={{ stroke: "var(--accent)" }}
                    />
                  </svg>
                  <div className="absolute flex flex-col items-center justify-center text-center">
                    <span className="text-3xl font-black text-ink">82%</span>
                    <span className="text-[8.5px] font-bold uppercase tracking-wider text-slate-400">Weekly Tasks</span>
                  </div>
                </div>
              </div>

              {/* Grid lists */}
              <div className="grid grid-cols-3 gap-3">
                <div className="flex flex-col items-center justify-center bg-teal/5 rounded-xl p-2.5 border border-teal/10">
                  <span className="text-[9px] font-bold text-teal uppercase tracking-wider flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-teal" /> Completed
                  </span>
                  <span className="text-lg font-extrabold text-ink mt-0.5">23</span>
                </div>
                
                <div className="flex flex-col items-center justify-center bg-marigold/5 rounded-xl p-2.5 border border-marigold/10">
                  <span className="text-[9px] font-bold text-marigold uppercase tracking-wider flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-marigold" /> Pending
                  </span>
                  <span className="text-lg font-extrabold text-ink mt-0.5">5</span>
                </div>

                <div className="flex flex-col items-center justify-center bg-red-500/5 rounded-xl p-2.5 border border-red-500/10">
                  <span className="text-[9px] font-bold text-red-500 uppercase tracking-wider flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" /> Missed
                  </span>
                  <span className="text-lg font-extrabold text-ink mt-0.5">2</span>
                </div>
              </div>

              {/* Trend Chart curved path */}
              <div className="space-y-2 pt-2 border-t border-[var(--border)]">
                <p className="text-[10px] font-bold text-slate-400 text-center uppercase tracking-wide">Completed Tasks Trend</p>
                
                <div className="relative w-full h-24 mt-2">
                  <svg viewBox="0 0 400 120" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="taskAreaGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
                      </linearGradient>
                    </defs>

                    <line x1="20" y1="10" x2="380" y2="10" className="stroke-slate-200/20 dark:stroke-white/5" strokeDasharray="3 3" />
                    <line x1="20" y1="60" x2="380" y2="60" className="stroke-slate-200/20 dark:stroke-white/5" strokeDasharray="3 3" />
                    <line x1="20" y1="110" x2="380" y2="110" className="stroke-slate-200/20 dark:stroke-white/5" strokeDasharray="3 3" />

                    <path
                      d="M 20 110 L 20 72.5 C 50 72.5, 50 47.5, 80 47.5 C 110 47.5, 110 60, 140 60 C 170 60, 170 35, 200 35 C 230 35, 230 85, 260 85 C 290 85, 290 22.5, 320 22.5 C 350 22.5, 350 47.5, 380 47.5 L 380 110 Z"
                      fill="url(#taskAreaGrad)"
                      className="opacity-0 animate-fade-in-simple"
                      style={{ animationDelay: "600ms", animationFillMode: "forwards" }}
                    />

                    <path
                      d="M 20 72.5 C 50 72.5, 50 47.5, 80 47.5 C 110 47.5, 110 60, 140 60 C 170 60, 170 35, 200 35 C 230 35, 230 85, 260 85 C 290 85, 290 22.5, 320 22.5 C 350 22.5, 350 47.5, 380 47.5"
                      fill="none"
                      stroke="var(--accent)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      className="animate-line-draw"
                    />
                  </svg>

                  {lineChartData.map((item, index) => (
                    <div
                      key={item.day}
                      className="absolute group cursor-pointer"
                      style={{
                        left: item.x,
                        top: item.y,
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-30">
                        <div className="bg-slate-900/95 dark:bg-slate-800/95 text-white text-[9px] font-bold px-2 py-1 rounded-md shadow-xl border border-white/10 backdrop-blur-sm whitespace-nowrap text-center">
                          {item.value} tasks
                        </div>
                        <div className="w-1.5 h-1.5 bg-slate-900/95 dark:bg-slate-800/95 border-r border-b border-white/10 rotate-45 absolute -bottom-0.5 left-1/2 -translate-x-1/2" />
                      </div>

                      <div
                        className="h-3 w-3 rounded-full border-2 border-white dark:border-[#1e1b2e] shadow-sm transition-all duration-300 group-hover:scale-125 opacity-0 animate-fade-in-circle"
                        style={{
                          animationDelay: `${index * 120 + 200}ms`,
                          animationFillMode: "forwards",
                          background: "var(--accent)"
                        }}
                      />
                    </div>
                  ))}
                </div>

                <div className="relative h-4 mt-2 w-full text-[9px] text-slate-400 font-bold uppercase tracking-wider">
                  {lineChartData.map((item) => (
                    <span
                      key={item.day}
                      className="absolute -translate-x-1/2 text-center"
                      style={{ left: item.x }}
                    >
                      {item.day}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
}