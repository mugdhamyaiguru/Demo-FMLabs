"use client";

import { useRouter } from "next/navigation";
import { LogOut, Shield, Moon, Sun, Bell, User2, Mail, Phone, Key } from "lucide-react";
import { AdminShell } from "@/components/page-shell";
import { GlassCard, Pill } from "@/components/platform";
import { ThemeToggle } from "@/components/theme-toggle";
import { useTheme } from "@/components/theme-provider";

const notifications = [
  { label: "New school onboarded",    desc: "Alert when a new school joins the platform", on: true  },
  { label: "User registration spikes",desc: "Alert on unusual registration volume",         on: true  },
  { label: "System health alerts",    desc: "Downtime, latency, or error rate warnings",   on: true  },
  { label: "Weekly admin digest",     desc: "Platform summary every Monday 9 AM",          on: false },
  { label: "Content moderation flags",desc: "When content is flagged for review",           on: true  },
];

export default function AdminSettingsPage() {
  const router = useRouter();
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <AdminShell active="Settings" title="Admin Settings">
      <div className="space-y-5 w-full max-w-none px-8 xl:px-12 2xl:px-16">

        {/* Profile */}
        <GlassCard className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 shadow-sm">
              <User2 className="h-4 w-4 text-white" />
            </div>
            <h3 className="text-lg font-bold text-ink">Admin Profile</h3>
            <Pill tone="indigo">Super Admin</Pill>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 shadow-lg text-white text-2xl font-black">A</div>
            <div>
              <p className="text-lg font-bold text-ink">Super Administrator</p>
              <p className="text-sm text-slate-400 mt-0.5">FutureMinds AI Guru · Platform Admin</p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { label: "Full Name", value: "Admin User",           Icon: User2, type: "text"     },
              { label: "Email",     value: "admin@futureminds.ai", Icon: Mail,  type: "email"    },
              { label: "Phone",     value: "+91 99999 00000",      Icon: Phone, type: "tel"      },
              { label: "Password",  value: "••••••••••",           Icon: Key,   type: "password" },
            ].map(({ label, value, Icon, type }) => (
              <label key={label} className="block">
                <span className="mb-1.5 block text-xs font-semibold text-slate-500">{label}</span>
                <div className="flex items-center gap-3 rounded-2xl border border-indigo-500/15 bg-white dark:bg-white/5 px-4 py-3 focus-within:border-indigo-500 transition-colors">
                  <Icon className="h-4 w-4 text-indigo-400 flex-shrink-0" />
                  <input suppressHydrationWarning defaultValue={value} type={type} className="w-full bg-transparent text-sm text-ink outline-none" />
                </div>
              </label>
            ))}
          </div>

          <button className="mt-5 flex items-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-600 px-6 py-2.5 text-sm font-bold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg">
            Save Changes
          </button>
        </GlassCard>

        <div className="grid gap-5 xl:grid-cols-2">
          {/* Notifications */}
          <GlassCard className="p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-700 shadow-sm">
                <Bell className="h-4 w-4 text-white" />
              </div>
              <h3 className="text-base font-bold text-ink">Admin Notifications</h3>
            </div>
            <div className="space-y-3">
              {notifications.map((n) => (
                <div key={n.label} className="flex items-start gap-3 rounded-2xl border border-indigo-500/10 bg-indigo-500/5 px-4 py-3">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-ink">{n.label}</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">{n.desc}</p>
                  </div>
                  <div className={`relative h-5 w-9 flex-shrink-0 rounded-full transition-colors cursor-pointer ${n.on ? "bg-indigo-500" : "bg-slate-200 dark:bg-slate-600"}`}>
                    <span className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition-transform ${n.on ? "translate-x-4" : "translate-x-0.5"}`} />
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Appearance + Security */}
          <div className="space-y-5">
            <GlassCard className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-slate-400 to-slate-600 shadow-sm">
                  {isDark ? <Moon className="h-4 w-4 text-white" /> : <Sun className="h-4 w-4 text-white" />}
                </div>
                <h3 className="text-base font-bold text-ink">Appearance</h3>
              </div>
              <p className="text-xs text-slate-400 mb-3">Choose how FutureMinds Admin looks. "System" follows your OS.</p>
              <ThemeToggle className="w-full justify-between" />
            </GlassCard>

            <GlassCard className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-400 to-violet-500 shadow-sm">
                  <Shield className="h-4 w-4 text-white" />
                </div>
                <h3 className="text-base font-bold text-ink">Security</h3>
              </div>
              <div className="space-y-2">
                {[
                  { label: "Two-Factor Auth",   value: "Enabled",   good: true  },
                  { label: "Session Timeout",   value: "30 min",    good: true  },
                  { label: "Last login",        value: "Today, 9:12 AM", good: true },
                  { label: "Failed attempts",   value: "0",         good: true  },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between rounded-2xl bg-surface dark:bg-slate-800/50 px-4 py-3">
                    <p className="text-sm font-semibold text-ink">{item.label}</p>
                    <span className={`text-xs font-bold ${item.good ? "text-emerald-500" : "text-crimson"}`}>{item.value}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>

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
    </AdminShell>
  );
}
