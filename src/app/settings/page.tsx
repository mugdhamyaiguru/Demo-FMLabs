"use client";

import {
  Accessibility, Bell, BookOpen, Building2, GraduationCap,
  KeyRound, LogOut, Mail, Moon, Phone, ShieldCheck, Sun, User, UserCircle2,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { AppShell } from "@/components/page-shell";
import { GlassCard, Pill } from "@/components/platform";
import { useTheme } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";

function FieldRow({ label, value, Icon }: { label: string; value: string; Icon: React.ElementType }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-royal/8 bg-white/60 dark:bg-white/5 dark:border-white/8 px-4 py-3.5">
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
    <div className="flex items-center justify-between rounded-2xl border border-royal/8 dark:border-white/8 bg-white/60 dark:bg-white/5 px-4 py-3.5">
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

export default function SettingsPage() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const router = useRouter();

  return (
    <AppShell active="Settings" title="Settings">
      <div className="space-y-5 max-w-5xl">

        {/* Header */}
        <div className="flex flex-col gap-4 rounded-3xl bg-white/80 dark:bg-[#1e1b2e]/80 p-5 shadow-glass backdrop-blur-xl lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-teal">Account</p>
            <h1 className="mt-1 text-2xl font-black text-ink">Settings & Preferences</h1>
            <p className="mt-1 text-sm text-slate-500">Manage your profile, appearance, and notifications.</p>
          </div>
          <Pill tone="royal">Student</Pill>
        </div>

        {/* Profile Card */}
        <GlassCard className="p-6 dark:bg-[#1e1b2e]/85 dark:border-white/8">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-royal to-[#6f5a88] shadow-lg text-white flex-shrink-0">
              <UserCircle2 className="h-8 w-8" />
            </div>
            <div>
              <h2 className="text-xl font-black text-ink">Aanya Sharma</h2>
              <p className="text-sm text-slate-500">Student · FutureMinds AI Guru</p>
              <Pill tone="teal">Active</Pill>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <FieldRow label="Full Name" value="Aanya Sharma" Icon={User} />
            <FieldRow label="Email" value="aanya@futureminds.demo" Icon={Mail} />
            <FieldRow label="Phone" value="+91 98765 43210" Icon={Phone} />
            <FieldRow label="School" value="Delhi Public School, Noida" Icon={Building2} />
            <FieldRow label="Grade / Class" value="Grade 8 — Section A" Icon={GraduationCap} />
            <FieldRow label="Board" value="CBSE" Icon={BookOpen} />
            <FieldRow label="Learning Goal" value="Master fractions & Python" Icon={ShieldCheck} />
            <FieldRow label="Password" value="••••••••••" Icon={KeyRound} />
            <FieldRow label="Role" value="Student" Icon={UserCircle2} />
          </div>

          <div className="mt-5 flex gap-3">
            <button className="rounded-full bg-royal px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
              Edit Profile
            </button>
            <button className="rounded-full border border-royal/15 bg-white dark:bg-white/5 dark:border-white/10 px-5 py-2.5 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5">
              Change Password
            </button>
          </div>
        </GlassCard>

        <div className="grid gap-5 xl:grid-cols-2">
          {/* Appearance / Dark Mode */}
          <GlassCard className="p-6 dark:bg-[#1e1b2e]/85 dark:border-white/8">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-royal to-[#6f5a88] shadow-sm">
                {isDark ? <Moon className="h-4 w-4 text-white" /> : <Sun className="h-4 w-4 text-white" />}
              </div>
              <h3 className="text-lg font-bold text-ink">Appearance</h3>
            </div>

            {/* Theme toggle — 3-way */}
            <div className="rounded-2xl border border-royal/8 dark:border-white/8 bg-white/60 dark:bg-white/5 p-4">
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

            <div className="mt-3 grid grid-cols-2 gap-3">
              {[
                { label: "Reduced motion", value: "Off" },
                { label: "Large text", value: "On" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl bg-surface dark:bg-slate-800/50 p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold text-slate-500">{item.label}</p>
                    <Pill tone={item.value === "On" ? "teal" : "gold"}>{item.value}</Pill>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Notifications */}
          <GlassCard className="p-6 dark:bg-[#1e1b2e]/85 dark:border-white/8">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-teal to-[#0d7272] shadow-sm">
                <Bell className="h-4 w-4 text-white" />
              </div>
              <h3 className="text-lg font-bold text-ink">Notifications</h3>
            </div>
            <div className="space-y-3">
              <ToggleRow label="Email digest" detail="Weekly learning summary" enabled={true} />
              <ToggleRow label="Streak reminders" detail="Daily at 6:00 PM" enabled={true} />
              <ToggleRow label="Teacher updates" detail="Assignment & progress alerts" enabled={true} />
              <ToggleRow label="Achievement alerts" detail="Badge and level-up alerts" enabled={false} />
            </div>
          </GlassCard>
        </div>

        {/* Accessibility */}
        <GlassCard className="p-6 dark:bg-[#1e1b2e]/85 dark:border-white/8">
          <div className="flex items-center gap-3 mb-5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-gold to-marigold shadow-sm">
              <Accessibility className="h-4 w-4 text-white" />
            </div>
            <h3 className="text-lg font-bold text-ink">Accessibility</h3>
          </div>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {[
              { label: "High contrast", value: "Recommended", icon: ShieldCheck },
              { label: "Large text", value: "On", icon: BookOpen },
              { label: "Keyboard shortcuts", value: "Available", icon: KeyRound },
              { label: "Screen reader", value: "Compatible", icon: Accessibility },
            ].map(({ label, value, icon: Icon }) => (
              <div key={label} className="flex items-center gap-3 rounded-2xl bg-surface dark:bg-slate-800/50 p-4">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-white dark:bg-slate-700 text-teal shadow-sm">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold text-slate-500 truncate">{label}</p>
                  <p className="mt-0.5 text-sm font-bold text-ink">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Sign Out */}
        <GlassCard className="p-6 dark:bg-[#1e1b2e]/85 dark:border-white/8 border border-red-500/20">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-rose-600 shadow-lg">
                <LogOut className="h-5 w-5 text-white" />
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
    </AppShell>
  );
}