"use client";
import { useRouter } from "next/navigation";
import { LogOut, User2, Bell, Moon, Shield, Mail, Phone, School, Users2 } from "lucide-react";
import { AppShell } from "@/components/page-shell";
import { GlassCard, Pill } from "@/components/platform";
import { ThemeToggle } from "@/components/theme-toggle";

const toggles = [
  { label: "Inactivity Alerts", desc: "Notify me if Aanya hasn't logged in for 3+ days", on: true },
  { label: "Score Drop Alerts", desc: "Alert when subject score drops below 65%", on: true },
  { label: "Assignment Reminders", desc: "Remind me of upcoming due dates", on: true },
  { label: "Teacher Messages", desc: "Receive messages from Aanya's teachers", on: true },
  { label: "Weekly Email Summary", desc: "Weekly progress email every Monday morning", on: false },
  { label: "Certification Updates", desc: "Notify when Aanya earns a new certificate", on: true },
];

export default function ParentSettingsPage() {
  const router = useRouter();
  return (
    <AppShell active="Settings" title="Parent Settings" role="parent">
      <div className="space-y-5">
        <div className="grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">

          {/* Profile Card */}
          <GlassCard className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-royal to-[#6f5a88] shadow-sm">
                <User2 className="h-4 w-4 text-white" />
              </div>
              <h3 className="text-lg font-bold text-ink">Parent Profile</h3>
            </div>

            {/* Avatar */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-crimson/20 to-royal/20 text-2xl font-bold text-royal dark:text-white">
                S
              </div>
              <div>
                <p className="text-lg font-bold text-ink">Mr. Sanjay Sharma</p>
                <div className="mt-1 flex items-center gap-2 flex-wrap">
                  <Pill tone="crimson">Parent</Pill>
                  <span className="text-xs text-slate-400">FutureMinds AI Labs</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {[
                { label: "Full Name", value: "Sanjay Sharma", type: "text", Icon: User2 },
                { label: "Email", value: "sanjay@email.com", type: "email", Icon: Mail },
                { label: "Phone", value: "+91 98765 11111", type: "tel", Icon: Phone },
              ].map(({ label, value, type, Icon }) => (
                <label key={label} className="block">
                  <span className="mb-1.5 block text-xs font-semibold text-slate-500">{label}</span>
                  <div className="flex items-center gap-3 rounded-2xl border border-royal/10 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-3 focus-within:border-teal transition-colors">
                    <Icon className="h-4 w-4 text-slate-400 flex-shrink-0" />
                    <input suppressHydrationWarning defaultValue={value} type={type} className="w-full bg-transparent text-sm text-ink outline-none" />
                  </div>
                </label>
              ))}

              {/* Linked Child */}
              <div>
                <span className="mb-1.5 block text-xs font-semibold text-slate-500">Linked Child</span>
                <div className="flex items-center gap-3 rounded-2xl border border-teal/20 bg-teal/5 px-4 py-3">
                  <School className="h-4 w-4 text-teal flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-ink">Aanya Sharma</p>
                    <p className="text-[11px] text-slate-400">Class 8A · Roll No. 8A-01</p>
                  </div>
                  <Pill tone="teal">Active</Pill>
                </div>
              </div>

              {/* Teacher */}
              <div>
                <span className="mb-1.5 block text-xs font-semibold text-slate-500">Class Teacher</span>
                <div className="flex items-center gap-3 rounded-2xl border border-royal/10 dark:border-white/10 bg-surface px-4 py-3">
                  <Users2 className="h-4 w-4 text-slate-400 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-ink">Ms. Priya Kapoor</p>
                    <p className="text-[11px] text-slate-400">Math, Science, Coding</p>
                  </div>
                </div>
              </div>

              {/* Password */}
              <label className="block">
                <span className="mb-1.5 block text-xs font-semibold text-slate-500">Password</span>
                <div className="flex items-center gap-3 rounded-2xl border border-royal/10 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-3 focus-within:border-teal transition-colors">
                  <Shield className="h-4 w-4 text-slate-400 flex-shrink-0" />
                  <input suppressHydrationWarning defaultValue="••••••••" type="password" className="w-full bg-transparent text-sm text-ink outline-none" />
                </div>
              </label>

              <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-royal to-[#6f5a88] py-3 text-sm font-bold text-white shadow-sm hover:-translate-y-0.5 transition-all">
                Save Changes
              </button>
            </div>
          </GlassCard>

          {/* Right panel */}
          <div className="space-y-5">
            {/* Notifications */}
            <GlassCard className="p-6">
              <div className="flex items-center gap-2 mb-5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-gold to-marigold shadow-sm">
                  <Bell className="h-4 w-4 text-white" />
                </div>
                <h3 className="text-base font-bold text-ink">Alert Preferences</h3>
              </div>
              <div className="space-y-3">
                {toggles.map((t) => (
                  <div key={t.label} className="flex items-start gap-3 rounded-2xl border border-royal/8 dark:border-white/8 bg-surface px-4 py-3">
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-ink">{t.label}</p>
                      <p className="text-[11px] text-slate-400 mt-0.5">{t.desc}</p>
                    </div>
                    <div className={`relative h-5 w-9 flex-shrink-0 rounded-full transition-colors cursor-pointer ${t.on ? "bg-teal" : "bg-slate-200 dark:bg-slate-600"}`}>
                      <span className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition-transform ${t.on ? "translate-x-4" : "translate-x-0.5"}`} />
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* Appearance */}
            <GlassCard className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-slate-400 to-slate-600 shadow-sm">
                  <Moon className="h-4 w-4 text-white" />
                </div>
                <h3 className="text-base font-bold text-ink">Appearance</h3>
              </div>
              <p className="text-xs text-slate-400 mb-3">Choose how FutureMinds looks. "System" follows your OS preference automatically.</p>
              <ThemeToggle className="w-full justify-between" />
              <div className="mt-3 rounded-2xl border border-royal/8 dark:border-white/8 bg-surface px-4 py-3">
                <p className="text-xs text-slate-400">The compact <span className="font-semibold text-ink">☀ / 🌙</span> icon in the topbar also cycles through all three modes.</p>
              </div>
            </GlassCard>

            {/* Sign Out */}
            <GlassCard className="p-6 border border-red-500/20">
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
        </div>
      </div>
    </AppShell>
  );
}
