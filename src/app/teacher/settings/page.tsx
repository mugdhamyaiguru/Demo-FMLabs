"use client";

import {
  Accessibility, Bell, BookOpen, Building2, GraduationCap,
  KeyRound, LogOut, Mail, Moon, Phone, School, Search, ShieldCheck, Sun, User, UserCircle2, Users2,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { AppShell } from "@/components/page-shell";
import { GlassCard, Pill } from "@/components/platform";
import { useTheme } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";

function FieldRow({ label, value, Icon }: { label: string; value: string; Icon: React.ElementType }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-royal/8 bg-white/60 dark:bg-white/5 dark:border-white/8 px-4 py-3.5 shadow-sm">
      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-royal/8 dark:bg-royal/20 text-royal dark:text-teal">
        <Icon className="h-4 w-4" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400">{label}</p>
        <p className="mt-0.5 text-sm font-semibold text-ink truncate">{value}</p>
      </div>
    </div>
  );
}

function ToggleRow({ label, detail, enabled }: { label: string; detail: string; enabled: boolean }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-royal/8 dark:border-white/8 bg-white/60 dark:bg-white/5 px-4 py-3.5 shadow-sm">
      <div>
        <p className="text-sm font-semibold text-ink">{label}</p>
        <p className="mt-0.5 text-xs text-slate-400">{detail}</p>
      </div>
      <div className={`relative h-6 w-11 rounded-full transition-colors duration-300 ${enabled ? "bg-teal" : "bg-slate-200 dark:bg-slate-600"}`}>
        <div className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-transform duration-300 ${enabled ? "translate-x-5" : "translate-x-0.5"}`} />
      </div>
    </div>
  );
}

export default function TeacherSettingsPage() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const router = useRouter();

  return (
    <AppShell active="Settings" title="Teacher Settings" role="teacher">
      <div className="grid grid-cols-1 lg:grid-cols-[repeat(12,_minmax(0,_1fr))] gap-5 w-full max-w-none px-8 xl:px-12 2xl:px-16">

        {/* Header */}
        <div className="col-span-1 lg:col-span-12 flex flex-col gap-4 rounded-3xl bg-white/80 dark:bg-[#1e1b2e]/80 p-5 shadow-glass backdrop-blur-xl lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-teal">Account</p>
            <h1 className="mt-1 text-xl font-bold text-ink">Settings & Preferences</h1>
            <p className="mt-1 text-sm text-slate-500">Manage your profile, appearance, and notifications.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto lg:justify-end">
            <div className="flex min-w-0 flex-1 lg:w-72 xl:w-80 items-center gap-2 rounded-full border border-slate-200/35 dark:border-white/5 bg-white/40 dark:bg-white/5 px-4 py-2">
              <Search className="h-4 w-4 text-slate-400 flex-shrink-0" />
              <input className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400 text-ink" placeholder="Search preferences..." />
            </div>
            <Pill tone="marigold">Teacher</Pill>
          </div>
        </div>

        {/* Profile Card */}
        <div className="col-span-1 lg:col-span-12">
          <GlassCard className="p-6 dark:bg-[#1e1b2e]/85 dark:border-white/8">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-marigold to-[#d4750a] shadow-lg text-white flex-shrink-0">
                <School className="h-8 w-8" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-ink">Ms. Priya Kapoor</h2>
                <p className="text-sm text-slate-500">Teacher · FutureMinds AI Labs</p>
                <Pill tone="teal">Active</Pill>
              </div>
            </div>

            <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(3,_minmax(0,_1fr))]">
              <FieldRow label="Full Name" value="Ms. Priya Kapoor" Icon={User} />
              <FieldRow label="Email" value="priya.kapoor@school.edu" Icon={Mail} />
              <FieldRow label="Phone" value="+91 99887 76543" Icon={Phone} />
              <FieldRow label="School" value="Delhi Public School, Noida" Icon={Building2} />
              <FieldRow label="Subject(s) Taught" value="Mathematics, Science" Icon={BookOpen} />
              <FieldRow label="Classes Assigned" value="8A, 8B, 9A" Icon={GraduationCap} />
              <FieldRow label="Total Students" value="96 students" Icon={Users2} />
              <FieldRow label="Password" value="••••••••••" Icon={KeyRound} />
              <FieldRow label="Role" value="Teacher" Icon={UserCircle2} />
            </div>

            <div className="mt-5 flex gap-3">
              <button className="rounded-full bg-marigold px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
                Edit Profile
              </button>
              <button className="rounded-full border border-royal/15 bg-white dark:bg-white/5 dark:border-white/10 px-5 py-2.5 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5">
                Change Password
              </button>
            </div>
          </GlassCard>
        </div>

        {/* Appearance & Accessibility */}
        <div className="col-span-1 lg:col-span-6 flex">
          <GlassCard className="p-6 dark:bg-[#1e1b2e]/85 dark:border-white/8 flex flex-col justify-between w-full">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-royal to-[#6f5a88] shadow-sm text-white">
                  {isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4 text-white" />}
                </div>
                <h3 className="text-lg font-bold text-ink">Appearance & Accessibility</h3>
              </div>

              {/* Theme toggle — 3-way */}
              <div className="rounded-2xl border border-royal/8 dark:border-white/8 bg-white/60 dark:bg-white/5 p-4 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all ${isDark ? "bg-[#12101e] text-teal" : "bg-amber-50 text-amber-500"}`}>
                    {isDark ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink">{isDark ? "Dark Mode" : "Light Mode"} (active)</p>
                    <p className="text-xs text-slate-400">Choose Light, Dark, or follow your OS</p>
                  </div>
                </div>
                <ThemeToggle className="w-full justify-between" />
              </div>
            </div>

            {/* Combined Display Settings Grid */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-[repeat(2,_minmax(0,_1fr))] gap-3">
              {[
                { label: "Reduced motion", value: "Off", icon: Moon },
                { label: "Large text", value: "On", icon: BookOpen },
                { label: "High contrast", value: "Recommended", icon: ShieldCheck },
                { label: "Keyboard shortcuts", value: "Available", icon: KeyRound },
                { label: "Screen reader", value: "Compatible", icon: Accessibility },
              ].map(({ label, value, icon: Icon }) => (
                <div key={label} className="flex items-center gap-3 rounded-2xl bg-surface dark:bg-slate-800/40 p-3.5 border border-royal/5 dark:border-white/5 shadow-sm">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl bg-white dark:bg-slate-700 text-teal shadow-sm">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-bold text-slate-400 truncate uppercase tracking-wider leading-none">{label}</p>
                    <p className="mt-1 text-xs font-bold text-ink leading-none">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Notifications */}
        <div className="col-span-1 lg:col-span-6 flex">
          <GlassCard className="p-6 dark:bg-[#1e1b2e]/85 dark:border-white/8 w-full">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-teal to-[#0d7272] shadow-sm text-white">
                <Bell className="h-4 w-4" />
              </div>
              <h3 className="text-lg font-bold text-ink">Notifications</h3>
            </div>
            <div className="space-y-3">
              <ToggleRow label="Email digest" detail="Weekly class summary report" enabled={true} />
              <ToggleRow label="Assignment alerts" detail="When students submit assignments" enabled={true} />
              <ToggleRow label="Attendance reminders" detail="Daily at 9:00 AM before class" enabled={true} />
              <ToggleRow label="Parent messages" detail="When a parent sends a query" enabled={false} />
            </div>
          </GlassCard>
        </div>

        {/* Sign Out */}
        <div className="col-span-1 lg:col-span-12">
          <GlassCard className="p-6 dark:bg-[#1e1b2e]/85 dark:border-white/8 border border-red-500/20">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-rose-600 shadow-lg text-white">
                  <LogOut className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-base font-bold text-ink">Sign Out</p>
                </div>
              </div>
              <button
                onClick={() => router.push("/")}
                className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-red-500 to-rose-600 px-6 py-2.5 text-sm font-bold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95"
              >
                <LogOut className="h-4 w-4" />
                Sign Out
              </button>
            </div>
          </GlassCard>
        </div>

      </div>
    </AppShell>
  );
}
