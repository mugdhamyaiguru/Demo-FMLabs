"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import {
  ArrowLeft, ArrowRight, Bell, Brain, CalendarCheck, ClipboardList,
  FileBarChart2, FlaskConical, Home, Menu, Settings, Sparkles, Star,
  Trophy, Users2, Video,
} from "lucide-react";
import { DashboardContainer, DashboardSidebar, DashboardTopbar, GlassCard, ProgressBar, BrandMark, BrandMarkWhite, Pill, cn } from "@/components/platform";
import { leaderboard, parentHighlights, savedTutorSessions, studentBadges, teacherRoster } from "@/lib/mock-data";

/* ── Sidebar nav definitions per role ─────────────────────── */
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