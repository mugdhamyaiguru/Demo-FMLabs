"use client";

import Link from "next/link";
import Image from "next/image";
import { type ReactNode } from "react";
import {
  ArrowLeft, ArrowRight, Bell, Brain, Building2, CalendarCheck, ChevronRight,
  ClipboardList, FileBarChart2, FlaskConical, Home, LayoutDashboard, LogOut,
  Menu, Settings, Shield, Sparkles, Star, Trophy, Users2, Video,
} from "lucide-react";
import { DashboardContainer, DashboardNavbar, DashboardTopbar, GlassCard, ProgressBar, BrandMark, BrandMarkWhite, Pill, cn } from "@/components/platform";
import { parentHighlights, savedTutorSessions, studentBadges, teacherRoster } from "@/lib/mock-data";

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
  const navItems = role === "teacher" ? teacherNav : role === "parent" ? parentNav : studentNav;

  return (
    <DashboardContainer>
      <div className="mx-auto flex min-h-screen w-full max-w-none flex-col gap-6 px-8 py-5 lg:px-12 lg:py-7">
        {/* Top Navbar */}
        <DashboardNavbar active={active} items={navItems} role={role} />

        {/* Content Area */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main content */}
          <div className="min-w-0 flex-1 space-y-6">
            {active !== "Modules" && (
              <DashboardTopbar
                title={title}
                greeting={role === "teacher" ? "teacher" : role === "parent" ? "parent" : "learner"}
                showGreeting={active === "Dashboard"}
              />
            )}
            {children}
          </div>

          {/* Right panel */}
          {rightPanel && (
            <div className="w-full lg:w-[340px] flex-shrink-0 space-y-5">{rightPanel}</div>
          )}
        </div>
      </div>

      {/* Floating help button */}
      <button className="fixed bottom-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 hover:bg-slate-700 text-white shadow-lg border border-white/10 text-sm font-bold z-50 transition-colors">
        ?
      </button>
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

  const weekDays = [
    { day: "Mon", checked: true },
    { day: "Tue", checked: true },
    { day: "Wed", checked: true },
    { day: "Thu", checked: true },
    { day: "Fri", checked: false },
    { day: "Sat", checked: false },
    { day: "Sun", checked: false },
  ];

  return (
    <GlassCard className="p-5 space-y-6 dark:bg-[#11131e]/50 dark:border-white/5">
      {/* What's Next */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-teal to-[#5bcac8] text-white shadow-sm">
            <Sparkles className="h-4 w-4" />
          </div>
          <h3 className="text-base font-bold text-ink">What&apos;s Next For You?</h3>
        </div>
        <div className="space-y-2.5">
          {nextItems.map((item) => (
            <div
              key={item.title}
              className="group flex cursor-pointer items-center gap-3 rounded-2xl border border-slate-200/20 dark:border-white/5 bg-white/40 dark:bg-white/5 px-4 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-teal/20 hover:shadow-sm"
            >
              <span className={`mt-0.5 h-2 w-2 flex-shrink-0 rounded-full ${item.dot}`} />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-ink">{item.title}</p>
              </div>
              <span className={`flex-shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold ${item.accentBg} ${item.accentText}`}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="h-px bg-slate-200/40 dark:bg-white/5" />

      {/* This Week */}
      <div>
        <h3 className="text-base font-bold text-ink mb-4">This Week</h3>
        <div className="space-y-3">
          {weekDays.map((item) => (
            <div key={item.day} className="flex items-center gap-3">
              {item.checked ? (
                <div className="flex h-4.5 w-4.5 items-center justify-center rounded-full bg-teal/20 text-teal border border-teal/30">
                  <span className="text-[9px]">✓</span>
                </div>
              ) : (
                <div className="h-4.5 w-4.5 rounded-full border border-slate-700 dark:border-white/10 bg-transparent" />
              )}
              <span className="text-xs font-semibold text-slate-500 w-8">{item.day}</span>
              <div className={`h-1 flex-1 rounded-full ${item.checked ? 'bg-teal' : 'bg-slate-700/50 dark:bg-white/5'}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="h-px bg-slate-200/40 dark:bg-white/5" />

      {/* Daily Goal */}
      <div>
        <h3 className="text-base font-bold text-ink">Daily Goal</h3>
        <p className="text-xs text-slate-400 mt-1">3 of 5 lessons done</p>
        <div className="mt-3">
          <ProgressBar value={60} accent="teal" />
        </div>
        <div className="flex justify-between items-center mt-2 text-[10px] text-slate-500 font-bold uppercase tracking-wider">
          <span>60%</span>
          <span>5 lessons</span>
        </div>
      </div>

      <div className="h-px bg-slate-200/40 dark:bg-white/5" />

      {/* Next Session */}
      <div>
        <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-wider mb-3">
          <CalendarCheck className="h-4 w-4 text-slate-500" />
          <span>Next session</span>
        </div>
        <h4 className="text-sm font-bold text-ink">Algebra Review</h4>
        <p className="text-xs text-[#818cf8] font-bold mt-1">Today, 4:00 PM</p>
      </div>
    </GlassCard>
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
  return (
    <DashboardContainer>
      <div className="mx-auto flex min-h-screen w-full max-w-none flex-col gap-6 px-8 py-5 lg:px-12 lg:py-7">
        {/* Top Navbar */}
        <DashboardNavbar active={active} items={adminNav} role="admin" />

        {/* Main content */}
        <div className="min-w-0 flex-1 space-y-6">
          {/* Admin topbar */}
          <div className="flex flex-col gap-4 rounded-3xl border border-white/70 bg-white/80 dark:bg-[#1e1b2e]/90 dark:border-white/8 p-4 shadow-glass backdrop-blur-xl lg:flex-row lg:items-center lg:justify-between">
            <div>
              {active === "Dashboard" ? (
                <>
                  <p className="text-xs uppercase tracking-[0.3em] text-indigo-500 dark:text-indigo-400">{title}</p>
                  <h1 className="text-xl font-bold text-ink">Welcome back, Admin</h1>
                </>
              ) : (
                <h1 className="text-xl font-bold text-ink">{title}</h1>
              )}
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