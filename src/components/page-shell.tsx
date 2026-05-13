"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, type ReactNode } from "react";
import {
  ArrowLeft, ArrowRight, Bell, Brain, Building2, CalendarCheck, ChevronRight,
  ClipboardList, FileBarChart2, FlaskConical, Home, LayoutDashboard, LogOut,
  Menu, Settings, Shield, Sparkles, Star, Trophy, Users2, Video,
} from "lucide-react";
import { DashboardContainer, DashboardSidebar, DashboardTopbar, GlassCard, ProgressBar, BrandMark, BrandMarkWhite, Pill, cn } from "@/components/platform";
import { leaderboard, parentHighlights, savedTutorSessions, studentBadges, teacherRoster } from "@/lib/mock-data";

const adminNav = [
  { label: "Dashboard", href: "/admin",          icon: <LayoutDashboard className="h-4 w-4" /> },
  { label: "Schools",   href: "/admin/schools",  icon: <Building2 className="h-4 w-4" /> },
  { label: "Users",     href: "/admin/users",    icon: <Users2 className="h-4 w-4" /> },
  { label: "Settings",  href: "/admin/settings", icon: <Settings className="h-4 w-4" /> },
];

const studentNav = [
  { label: "Dashboard", href: "/student",   icon: <Home className="h-4 w-4" /> },
  { label: "Modules",   href: "/modules",   icon: <Menu className="h-4 w-4" /> },
  { label: "AI Tutor",  href: "/tutor",     icon: <Star className="h-4 w-4" /> },
  { label: "Progress",  href: "/progress",  icon: <Trophy className="h-4 w-4" /> },
  { label: "Projects",  href: "/lesson",    icon: <ArrowRight className="h-4 w-4" /> },
  { label: "Rewards",   href: "/rewards",   icon: <Bell className="h-4 w-4" /> },
  { label: "Settings",  href: "/settings",  icon: <Settings className="h-4 w-4" /> },
];

const teacherNav = [
  { label: "Dashboard",     href: "/teacher",                icon: <Home className="h-4 w-4" /> },
  { label: "Roster",        href: "/teacher/roster",         icon: <Users2 className="h-4 w-4" /> },
  { label: "Assignments",   href: "/teacher/assignments",    icon: <ClipboardList className="h-4 w-4" /> },
  { label: "Attendance",    href: "/teacher/attendance",     icon: <CalendarCheck className="h-4 w-4" /> },
  { label: "Practicals",    href: "/teacher/practicals",     icon: <FlaskConical className="h-4 w-4" /> },
  { label: "Live Session",  href: "/teacher/live",           icon: <Video className="h-4 w-4" /> },
  { label: "Reports",       href: "/teacher/reports",        icon: <FileBarChart2 className="h-4 w-4" /> },
  { label: "Notifications", href: "/teacher/notifications",  icon: <Bell className="h-4 w-4" /> },
  { label: "Settings",      href: "/teacher/settings",       icon: <Settings className="h-4 w-4" /> },
];

const parentNav = [
  { label: "Dashboard",    href: "/parent",               icon: <Home className="h-4 w-4" /> },
  { label: "Progress",     href: "/parent/progress",      icon: <Trophy className="h-4 w-4" /> },
  { label: "Attendance",   href: "/parent/attendance",    icon: <CalendarCheck className="h-4 w-4" /> },
  { label: "Skills",       href: "/parent/skills",        icon: <FlaskConical className="h-4 w-4" /> },
  { label: "Weak Topics",  href: "/parent/weak-topics",   icon: <Brain className="h-4 w-4" /> },
  { label: "Alerts",       href: "/parent/alerts",        icon: <Bell className="h-4 w-4" /> },
  { label: "Reports",      href: "/parent/reports",       icon: <FileBarChart2 className="h-4 w-4" /> },
  { label: "Settings",     href: "/parent/settings",      icon: <Settings className="h-4 w-4" /> },
];

export function AuthShell({ title, subtitle, children, illustration }: { title: string; subtitle: string; children: ReactNode; illustration: ReactNode }) {
  return (
    <DashboardContainer>
      <main className="mx-auto grid min-h-screen max-w-7xl gap-8 px-4 py-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:py-8">
        <section className="flex flex-col justify-between overflow-hidden rounded-[2rem] bg-royal p-6 text-white shadow-glass lg:p-8">
          <BrandMarkWhite />
          <div className="mt-12 space-y-6">
            <Pill tone="gold">FutureMinds AI Guru</Pill>
            <h1 className="max-w-xl text-4xl font-black leading-tight sm:text-5xl">{title}</h1>
            <p className="max-w-xl text-base leading-7 text-white/75 sm:text-lg">{subtitle}</p>
          </div>
          <div className="mt-10 rounded-[2rem] bg-white/10 p-4 backdrop-blur">
            {illustration}
          </div>
        </section>
        <section className="flex items-center justify-center">
          <div className="w-full max-w-lg">{children}</div>
        </section>
      </main>
    </DashboardContainer>
  );
}

export function AppShell({ title, active, children, rightPanel, role = "student" }: { title: string; active: string; children: ReactNode; rightPanel?: ReactNode; role?: "student" | "teacher" | "parent" }) {
  const [collapsed, setCollapsed] = useState(false);
  const navItems = role === "teacher" ? teacherNav : role === "parent" ? parentNav : studentNav;

  return (
    <DashboardContainer>
      <div className="mx-auto flex min-h-screen max-w-[1600px] gap-5 px-4 py-5 sm:px-6 lg:px-8 lg:py-7">
        {/* Sidebar */}
        <div className={`flex-shrink-0 transition-all duration-300 ${collapsed ? "w-[72px]" : "w-[260px]"}`}>
          <DashboardSidebar
            active={active}
            items={navItems}
            collapsed={collapsed}
            onToggle={() => setCollapsed((c) => !c)}
          />
        </div>

        {/* Main content */}
        <div className="min-w-0 flex-1 space-y-6">
          <DashboardTopbar title={title} greeting={role === "teacher" ? "teacher" : role === "parent" ? "parent" : "learner"} />
          {children}
        </div>

        {/* Right panel */}
        {rightPanel && (
          <div className="w-[340px] flex-shrink-0 space-y-5">{rightPanel}</div>
        )}
      </div>
    </DashboardContainer>
  );
}

export function PanelCard({ title, children, action }: { title: string; children: ReactNode; action?: ReactNode }) {
  return (
    <GlassCard className="p-5">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-lg font-bold text-ink">{title}</h3>
        {action}
      </div>
      <div className="mt-4">{children}</div>
    </GlassCard>
  );
}

export function BackLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="inline-flex items-center gap-2 text-sm font-semibold text-teal transition-colors hover:text-[#127171]">
      <ArrowLeft className="h-4 w-4" />
      {label}
    </Link>
  );
}

export function ProfileStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">{label}</p>
      <p className="mt-2 text-2xl font-black text-ink">{value}</p>
    </div>
  );
}

export function RightRail() {
  const nextItems = [
    { title: "Practice Fractions", label: "Math", accentBg: "bg-teal/10", accentText: "text-teal", dot: "bg-teal" },
    { title: "Revise Algebra", label: "Algebra", accentBg: "bg-marigold/10", accentText: "text-[#ad5e00]", dot: "bg-marigold" },
    { title: "Continue Python Basics", label: "Coding", accentBg: "bg-gold/10", accentText: "text-[#8a6213]", dot: "bg-gold" },
  ];

  return (
    <div className="space-y-4">
      {/* What's Next */}
      <GlassCard className="p-5">
        <div className="flex items-center gap-2 mb-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-teal to-[#5bcac8] text-white shadow-sm">
            <Sparkles className="h-4 w-4" />
          </div>
          <h3 className="text-base font-bold text-ink">What's Next For You?</h3>
        </div>
        <div className="space-y-2.5">
          {nextItems.map((item) => (
            <div
              key={item.title}
              className="group flex cursor-pointer items-center gap-3 rounded-2xl border border-royal/8 bg-surface px-4 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-teal/20 hover:shadow-sm"
            >
              <span className={`mt-0.5 h-2 w-2 flex-shrink-0 rounded-full ${item.dot}`} />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-ink">{item.title}</p>
                <p className="mt-0.5 text-xs text-slate-400">AI-recommended · Tap to start</p>
              </div>
              <span className={`flex-shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold ${item.accentBg} ${item.accentText}`}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </GlassCard>

      {/* Saved Tutor Sessions */}
      <GlassCard className="p-5">
        <div className="flex items-center gap-2 mb-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-royal to-[#6f5a88] text-white shadow-sm">
            <Brain className="h-4 w-4" />
          </div>
          <h3 className="text-base font-bold text-ink">Saved Tutor Sessions</h3>
        </div>
        <div className="space-y-2.5">
          {savedTutorSessions.map((session, i) => (
            <div
              key={session.title}
              className="group flex cursor-pointer items-center gap-3 rounded-2xl bg-white p-3.5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl text-sm font-black text-white shadow-sm ${i === 0 ? "bg-teal" : i === 1 ? "bg-royal" : "bg-marigold"}`}>
                {session.title.charAt(0)}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-ink">{session.title}</p>
                <p className="text-xs text-slate-400">{session.time}</p>
              </div>
              <ArrowRight className="h-4 w-4 flex-shrink-0 text-slate-300 transition-colors group-hover:text-teal" />
            </div>
          ))}
        </div>
      </GlassCard>

      {/* Leaderboard Preview */}
      <GlassCard className="p-5">
        <div className="flex items-center gap-2 mb-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-gold to-marigold text-white shadow-sm">
            <Trophy className="h-4 w-4" />
          </div>
          <h3 className="text-base font-bold text-ink">Leaderboard</h3>
        </div>
        <div className="space-y-2">
          {leaderboard.slice(0, 4).map((item, index) => (
            <div
              key={item.name}
              className={cn(
                "flex items-center gap-3 rounded-2xl px-3.5 py-3 transition-all duration-200 hover:-translate-y-0.5",
                index === 0
                  ? "bg-gradient-to-r from-gold/15 to-marigold/10 border border-gold/20"
                  : "bg-white shadow-sm hover:shadow-md"
              )}
            >
              <span className={cn(
                "flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-xs font-black",
                index === 0 ? "bg-gold text-white" :
                index === 1 ? "bg-slate-200 text-slate-600" :
                index === 2 ? "bg-[#cd7f32]/20 text-[#cd7f32]" :
                "bg-surface text-slate-500"
              )}>
                {index + 1}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-ink">{item.name}</p>
              </div>
              <span className={cn("flex-shrink-0 text-xs font-bold", index === 0 ? "text-gold" : "text-slate-500")}>
                {item.xp} XP
              </span>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
}

export function TeacherSidebarCard() {
  return (
    <PanelCard title="Class Snapshot">
      <div className="space-y-3 text-sm text-slate-600">
        <p>Math 8A · 32 students</p>
        <ProgressBar value={76} accent="teal" />
        <p>Assignments completed this week</p>
      </div>
    </PanelCard>
  );
}

export function TeacherRosters() {
  return (
    <PanelCard title="Student Roster" action={<Pill tone="teal">Live</Pill>}>
      <div className="overflow-hidden rounded-3xl border border-royal/10 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="bg-surface text-slate-500">
            <tr>
              <th className="px-4 py-3">Student</th>
              <th className="px-4 py-3">Class</th>
              <th className="px-4 py-3">Attendance</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {teacherRoster.map((row) => (
              <tr key={row.name} className="border-t border-royal/10">
                <td className="px-4 py-3 font-medium text-ink">{row.name}</td>
                <td className="px-4 py-3 text-slate-600">{row.className}</td>
                <td className="px-4 py-3 text-slate-600">{row.attendance}</td>
                <td className="px-4 py-3">
                  <Pill tone={row.pace === "Excellent" ? "gold" : row.pace === "Needs support" ? "crimson" : "teal"}>{row.pace}</Pill>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PanelCard>
  );
}

export function ParentSummary() {
  return (
    <PanelCard title="Child Progress">
      <div className="grid gap-3 sm:grid-cols-2">
        {parentHighlights.map((item) => (
          <ProfileStat key={item.label} label={item.label} value={item.value} />
        ))}
      </div>
    </PanelCard>
  );
}

/* ── Admin Shell ──────────────────────────────────────────── */
export function AdminShell({ title, active, children }: { title: string; active: string; children: ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <DashboardContainer>
      <div className="mx-auto flex min-h-screen max-w-[1600px] gap-5 px-4 py-5 sm:px-6 lg:px-8 lg:py-7">
        {/* Admin Sidebar — indigo/violet */}
        <div className={`flex-shrink-0 transition-all duration-300 ${collapsed ? "w-[72px]" : "w-[260px]"}`}>
          <aside
            className={cn(
              "flex h-full flex-col rounded-3xl py-5 text-white shadow-glass",
              "bg-gradient-to-b from-[#1e1b4b] via-[#312e81] to-[#1e1935]",
              "border border-white/10 transition-all duration-300 ease-in-out",
              collapsed ? "items-center px-3" : "px-4"
            )}
            style={{ boxShadow: "0 24px 64px rgba(10,5,50,0.45), inset 0 1px 0 rgba(255,255,255,0.12)" }}
          >
            {/* Brand + toggle */}
            <div className={cn("flex w-full items-center", collapsed ? "justify-center" : "justify-between gap-2")}>
              <div className={cn("transition-all duration-300 overflow-hidden", collapsed ? "w-10" : "flex-1")}>
                {collapsed ? (
                  <Link href="/" className="h-10 w-10 overflow-hidden rounded-2xl shadow-glow transition-opacity hover:opacity-80 block">
                    <Image src="/brain-logo.png" alt="logo" width={40} height={40} className="h-full w-full object-cover" />
                  </Link>
                ) : (
                  <BrandMarkWhite />
                )}
              </div>
              <button
                onClick={() => setCollapsed((c) => !c)}
                aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
                className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl bg-white/10 text-white/50 transition-all duration-200 hover:bg-white/20 hover:text-white hover:scale-105 active:scale-95"
              >
                <ChevronRight className={cn("h-4 w-4 transition-transform duration-300 ease-in-out", collapsed ? "rotate-0" : "rotate-180")} />
              </button>
            </div>

            {/* Admin badge */}
            {!collapsed && (
              <div className="mt-3 rounded-2xl border border-indigo-400/25 bg-indigo-500/10 px-3 py-2 text-center">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-indigo-300">Administrator Console</p>
              </div>
            )}

            <div className="mt-4 h-px w-full rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            {/* Nav links */}
            <nav className="mt-4 flex w-full flex-col gap-0.5">
              {adminNav.map((item) => {
                const isActive = item.label === active;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    title={collapsed ? item.label : undefined}
                    className={cn(
                      "group relative flex items-center rounded-2xl py-2.5 text-sm font-semibold",
                      "transition-all duration-200 ease-out overflow-hidden",
                      collapsed ? "justify-center px-2" : "gap-3 px-3.5",
                      isActive
                        ? "bg-white text-indigo-700 shadow-md"
                        : "text-white/65 hover:bg-white/10 hover:text-white"
                    )}
                  >
                    {isActive && (
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-1 rounded-r-full bg-gradient-to-b from-indigo-400 to-violet-500" />
                    )}
                    <span className={cn(
                      "flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-xl transition-all duration-200",
                      isActive ? "bg-indigo-50 text-indigo-700" : "text-white/65 group-hover:text-white group-hover:bg-white/10"
                    )}>
                      {item.icon}
                    </span>
                    <span className={cn("whitespace-nowrap transition-all duration-300 ease-in-out", collapsed ? "w-0 opacity-0 overflow-hidden" : "w-auto opacity-100")}>
                      {item.label}
                    </span>
                    {!isActive && (
                      <span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-white/6 via-transparent to-transparent" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Admin info at bottom */}
            <div className="mt-auto">
              {collapsed ? (
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-500/20 text-indigo-300" title="Super Admin">
                  <Shield className="h-5 w-5" />
                </div>
              ) : (
                <div className="rounded-3xl border border-white/10 bg-white/8 p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <Shield className="h-4 w-4 text-indigo-300 flex-shrink-0" />
                    <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/40">Admin Access</p>
                  </div>
                  <p className="text-sm font-bold text-white">Super Admin</p>
                  <p className="text-xs text-white/40 mt-0.5">Full platform control</p>
                  <Link
                    href="/"
                    className="mt-3 flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-xs font-semibold text-white/70 transition-all hover:bg-red-500/20 hover:text-red-300"
                  >
                    <LogOut className="h-3.5 w-3.5" />
                    Sign Out
                  </Link>
                </div>
              )}
            </div>
          </aside>
        </div>

        {/* Main content */}
        <div className="min-w-0 flex-1 space-y-6">
          {/* Admin topbar */}
          <div className="flex flex-col gap-4 rounded-3xl border border-white/70 bg-white/80 dark:bg-[#1e1b2e]/90 dark:border-white/8 p-4 shadow-glass backdrop-blur-xl lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-indigo-500 dark:text-indigo-400">{title}</p>
              <h1 className="text-xl font-bold text-ink">Welcome back, Admin</h1>
            </div>
            <div className="flex flex-1 items-center gap-3 lg:max-w-2xl lg:justify-end">
              <div className="flex min-w-0 flex-1 items-center gap-2 rounded-full border border-royal/10 dark:border-white/10 bg-surface px-4 py-3">
                <LayoutDashboard className="h-4 w-4 text-indigo-400/60" />
                <input className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400 text-ink" placeholder="Search schools, users…" />
              </div>
              <div className="rounded-full bg-indigo-500/10 px-4 py-3 text-sm font-semibold text-indigo-600 dark:text-indigo-400">12 Schools</div>
              <div className="rounded-full bg-violet-500/10 px-4 py-3 text-sm font-semibold text-violet-600 dark:text-violet-400">2,747 Users</div>
            </div>
          </div>
          {children}
        </div>
      </div>
    </DashboardContainer>
  );
}