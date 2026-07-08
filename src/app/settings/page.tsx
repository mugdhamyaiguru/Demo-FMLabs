"use client";

import { useEffect, useState } from "react";
import {
  Accessibility, Bell, BookOpen, Building2, GraduationCap,
  KeyRound, LogOut, Mail, Moon, Phone, Search, ShieldCheck, Sun, User, UserCircle2,
  Home, Menu, Star, Trophy, Settings
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useTheme } from "@/components/theme-provider";
import { Pill } from "@/components/platform";
import Link from "next/link";

function FieldRow({ label, value, Icon }: { label: string; value: string; Icon: React.ElementType }) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-[var(--border)] bg-white/60 dark:bg-white/5 px-4 py-3 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_16px_rgba(0,0,0,0.02)]">
      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--surface-2)] border border-[var(--border)] text-slate-500">
        <Icon className="h-4 w-4" style={{ color: "var(--accent)" }} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">{label}</p>
        <p className="mt-0.5 text-xs font-bold text-ink truncate">{value}</p>
      </div>
    </div>
  );
}

function ToggleRow({ label, detail, enabled }: { label: string; detail: string; enabled: boolean }) {
  const [active, setActive] = useState(enabled);

  return (
    <div className="flex items-center justify-between rounded-xl border border-[var(--border)] bg-white/60 dark:bg-white/5 px-4 py-3 shadow-sm">
      <div>
        <p className="text-xs font-bold text-ink">{label}</p>
        <p className="mt-0.5 text-[11px] text-slate-400 font-semibold">{detail}</p>
      </div>
      {/* S3K Custom toggle switch */}
      <button 
        onClick={() => setActive(!active)}
        className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 outline-none"
        style={{ background: active ? "var(--accent)" : "var(--border)" }}
      >
        <span className={`inline-block h-4.5 w-4.5 transform rounded-full bg-white transition-transform duration-200 ${active ? "translate-x-5.5" : "translate-x-1"}`} />
      </button>
    </div>
  );
}

export default function SettingsPage() {
  const { resolvedTheme, setMode, mode } = useTheme();
  const isDark = resolvedTheme === "dark";
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    document.documentElement.classList.add("s3k-student-settings");
    return () => {
      document.documentElement.classList.remove("s3k-student-settings");
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col" style={{ background: "var(--bg)" }}>
      {/* Sora & Inter fonts */}
      <link 
        href="https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap" 
        rel="stylesheet" 
      />

      {/* Scoped CSS Inject for Settings page styling */}
      <style dangerouslySetInnerHTML={{ __html: `
        .s3k-student-settings {
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

        .s3k-student-settings.dark {
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

        .s3k-student-settings body {
          background: var(--bg) !important;
          color: var(--text) !important;
          font-family: var(--font-sans) !important;
        }

        .s3k-student-settings h1,
        .s3k-student-settings h2,
        .s3k-student-settings h3,
        .s3k-student-settings h4,
        .s3k-student-settings h5,
        .s3k-student-settings h6,
        .s3k-student-settings .font-display {
          font-family: var(--font-display) !important;
          letter-spacing: -0.01em !important;
        }

        /* Hide global navbar */
        .s3k-student-settings .sticky.top-0.z-50.w-full {
          display: none !important;
        }

        .s3k-student-settings .absolute.inset-0.dark\\:hidden,
        .s3k-student-settings .absolute.inset-0.hidden.dark\\:block {
          background: var(--bg) !important;
          background-image: none !important;
        }

        /* S3K Header style */
        .s3k-student-settings header.s3k-header {
          background: var(--surface) !important;
          border-bottom: 1px solid var(--border) !important;
          color: var(--text) !important;
        }

        /* S3K ctl inputs */
        .s3k-student-settings .ctl {
          background: var(--surface-2) !important;
          border: 1px solid var(--border) !important;
          border-radius: 10px !important;
          color: var(--text) !important;
        }
        .s3k-student-settings.dark .ctl {
          background: #252537 !important;
          border-color: #3e3e58 !important;
        }

        /* S3K Card panel rules */
        .s3k-student-settings .s3k-card {
          background: var(--surface) !important;
          border: 1px solid var(--border) !important;
          border-radius: 20px !important;
          padding: 24px !important;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02) !important;
          backdrop-filter: none !important;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
        .s3k-student-settings .s3k-card:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 16px 30px -16px rgba(109, 40, 217, 0.12) !important;
        }
        .s3k-student-settings.dark .s3k-card:hover {
          box-shadow: 0 16px 30px -16px rgba(167, 139, 250, 0.16) !important;
        }

        .s3k-student-settings .txt { color: var(--text) !important; }
        .s3k-student-settings .txt-muted { color: var(--muted) !important; }
        .s3k-student-settings .txt-faint { color: var(--faint) !important; }
        .s3k-student-settings .accent { color: var(--accent) !important; }

        /* Selectable segment card toggle button states */
        .s3k-student-settings .seg {
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 10px;
          text-align: center;
          font-weight: 600;
          font-size: 13px;
          transition: all 0.2s ease;
        }
        .s3k-student-settings .seg-on {
          border-color: var(--accent) !important;
          background: var(--accent-soft) !important;
          color: var(--accent) !important;
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
              { label: "Progress", href: "/progress", icon: Trophy },
              { label: "Rewards", href: "/rewards", icon: Bell },
              { label: "Settings", href: "/settings", icon: Settings, on: true },
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
        <div className="mx-auto max-w-7xl space-y-6">
          
          {/* Header dashboard Section info */}
          <div className="flex flex-col gap-4 rounded-3xl border border-[var(--border)] bg-white/80 dark:bg-[#1e1b2e]/80 p-5 shadow-sm backdrop-blur-xl lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-teal">Account</p>
              <h1 className="mt-1 text-2xl font-bold text-ink">Settings & Preferences</h1>
              <p className="mt-1 text-xs font-semibold text-slate-400">Manage your profile, appearance, and notifications.</p>
            </div>
            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto lg:justify-end">
              <div className="flex min-w-0 flex-1 lg:w-72 xl:w-80 items-center gap-2 rounded-xl border border-[var(--border)] bg-white/40 dark:bg-white/5 px-4 py-2">
                <Search className="h-4 w-4 text-slate-400 flex-shrink-0" />
                <input className="w-full bg-transparent text-xs font-semibold outline-none placeholder:text-slate-400 text-ink" placeholder="Search preferences..." />
              </div>
              <Pill tone="royal">Student</Pill>
            </div>
          </div>

          {/* Profile Details Card */}
          <div className="s3k-card">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 shadow-md text-white flex-shrink-0">
                <UserCircle2 className="h-8 w-8" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-ink">Aanya Sharma</h2>
                <p className="text-xs font-semibold text-slate-400">Student · FutureMinds AI Labs</p>
                <div className="mt-1.5">
                  <Pill tone="teal">Active</Pill>
                </div>
              </div>
            </div>

            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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

            <div className="mt-6 flex gap-3">
              <button 
                className="rounded-xl px-5 py-3 text-xs font-bold text-white shadow-sm hover:opacity-90 transition-all"
                style={{ background: "var(--accent)" }}
              >
                Edit Profile
              </button>
              <button className="ctl rounded-xl px-5 py-3 text-xs font-bold transition-all hover:opacity-80">
                Change Password
              </button>
            </div>
          </div>

          <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
            
            {/* Appearance & Accessibility */}
            <div className="s3k-card flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 text-white shadow-sm">
                    {isDark ? <Moon className="h-4.5 w-4.5" /> : <Sun className="h-4.5 w-4.5" />}
                  </div>
                  <h3 className="txt font-display text-[15px] font-bold">Appearance & Accessibility</h3>
                </div>

                {/* S3K 3-Way Selector Segment for Theme */}
                <div className="rounded-xl border border-[var(--border)] p-4 bg-white/40 dark:bg-white/5 space-y-3">
                  <div>
                    <p className="text-xs font-bold text-ink">{isDark ? "Dark Theme" : "Light Theme"} (active)</p>
                    <p className="text-[10px] text-slate-400 font-semibold mt-0.5">Toggle preference between Light, Dark, or System mode</p>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { val: "light", label: "Light", icon: Sun },
                      { val: "dark", label: "Dark", icon: Moon },
                      { val: "system", label: "System", icon: Accessibility },
                    ].map((opt) => {
                      const on = mode === opt.val;
                      return (
                        <button
                          key={opt.val}
                          onClick={() => setMode(opt.val as any)}
                          className={`seg flex items-center justify-center gap-1.5 px-3 py-2 ${on ? "seg-on" : "txt hover:bg-[var(--surface-2)]"}`}
                        >
                          <opt.icon className="h-3.5 w-3.5 shrink-0" />
                          <span>{opt.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Combined display grid */}
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[var(--border)]">
                {[
                  { label: "Reduced motion", value: "Off", icon: Moon },
                  { label: "Large text", value: "On", icon: BookOpen },
                  { label: "High contrast", value: "Recommended", icon: ShieldCheck },
                  { label: "Keyboard shortcuts", value: "Available", icon: KeyRound },
                  { label: "Screen reader", value: "Compatible", icon: Accessibility },
                ].map(({ label, value, icon: Icon }) => (
                  <div key={label} className="flex items-center gap-3 rounded-xl bg-[var(--surface-2)] p-3 border border-[var(--border)]">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-white dark:bg-slate-700 text-teal shadow-sm border border-[var(--border)]">
                      <Icon className="h-4 w-4" style={{ color: "var(--accent)" }} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider leading-none">{label}</p>
                      <p className="mt-1.5 text-xs font-bold text-ink leading-none">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Notifications toggle Card */}
            <div className="s3k-card flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-teal to-[#0d7272] text-white shadow-sm">
                    <Bell className="h-4.5 w-4.5" />
                  </div>
                  <h3 className="txt font-display text-[15px] font-bold">Notifications</h3>
                </div>

                <div className="space-y-3">
                  <ToggleRow label="Email digest" detail="Weekly learning summary" enabled={true} />
                  <ToggleRow label="Streak reminders" detail="Daily at 6:00 PM" enabled={true} />
                  <ToggleRow label="Teacher updates" detail="Assignment & progress alerts" enabled={true} />
                  <ToggleRow label="Achievement alerts" detail="Badge and level-up alerts" enabled={false} />
                </div>
              </div>

              <div className="text-[10px] text-slate-400 font-semibold leading-relaxed border-t border-[var(--border)] pt-4 mt-6">
                Streaks are computed based on active daily quiz metrics. Reminder timings are configured in your local timezone.
              </div>
            </div>

          </div>

          {/* Sign Out Card */}
          <div className="s3k-card border border-red-500/20 bg-red-500/5 hover:border-red-500 hover:shadow-[0_8px_20px_rgba(239,68,68,0.06)]">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-rose-600 shadow-md text-white">
                  <LogOut className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-ink">Sign Out</p>
                  <p className="text-[11px] text-slate-400 font-semibold mt-0.5">Log out of your FutureMinds student portal securely</p>
                </div>
              </div>
              <button
                onClick={() => router.push("/")}
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-500 to-rose-600 px-6 py-3 text-xs font-bold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md active:scale-95"
              >
                <LogOut className="h-4 w-4" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}