"use client";

import { useState } from "react";
import {
  Mail, Lock, GraduationCap, School, ShieldCheck, LayoutDashboard,
  Sparkles, Eye, EyeOff, ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { BrandMarkWhite } from "@/components/platform";

type RoleId = "student" | "teacher" | "parent" | "admin";

const roles: {
  id: RoleId;
  label: string;
  tagline: string;
  icon: React.ReactNode;
  iconBg: string;
  iconText: string;
  accent: string;
  href: string;
}[] = [
  {
    id: "student",
    label: "Student",
    tagline: "Learn. Earn XP. Level up.",
    icon: <GraduationCap className="h-4 w-4" />,
    iconBg: "bg-teal/15",
    iconText: "text-teal",
    accent: "border-teal ring-teal/30",
    href: "/student",
  },
  {
    id: "teacher",
    label: "Teacher",
    tagline: "Manage. Assign. Monitor.",
    icon: <School className="h-4 w-4" />,
    iconBg: "bg-marigold/15",
    iconText: "text-marigold",
    accent: "border-marigold ring-marigold/30",
    href: "/teacher",
  },
  {
    id: "parent",
    label: "Parent",
    tagline: "Track. Support. Celebrate.",
    icon: <ShieldCheck className="h-4 w-4" />,
    iconBg: "bg-crimson/10",
    iconText: "text-crimson",
    accent: "border-crimson ring-crimson/30",
    href: "/parent",
  },
  {
    id: "admin",
    label: "Admin",
    tagline: "Configure. Control. Manage.",
    icon: <LayoutDashboard className="h-4 w-4" />,
    iconBg: "bg-royal/10",
    iconText: "text-royal dark:text-white/70",
    accent: "border-royal ring-royal/30",
    href: "/admin",
  },
];

const highlights = [
  { label: "AI-powered tutoring",     sub: "Adaptive hints & guidance" },
  { label: "Role-based access",       sub: "Student, Teacher, Parent, Admin" },
  { label: "Live sessions & labs",    sub: "Theory & practical combined" },
  { label: "Real-time progress",      sub: "Streak, XP & leaderboards" },
];

export default function LoginPage() {
  const [selected, setSelected] = useState<RoleId>("student");
  const [showPass, setShowPass] = useState(false);

  const currentRole = roles.find((r) => r.id === selected)!;

  return (
    <div className="h-screen overflow-hidden bg-surface">
      <div className="grid h-full lg:grid-cols-[0.9fr_1.1fr]">

        {/* ── Left branded panel ── */}
        <div className="relative hidden flex-col justify-between overflow-hidden bg-royal p-8 lg:flex">
          {/* Gradient blobs */}
          <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-teal/20 blur-3xl" />
          <div className="pointer-events-none absolute bottom-10 right-0 h-56 w-56 rounded-full bg-marigold/15 blur-2xl" />

          <BrandMarkWhite />

          <div className="relative z-10">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-teal/80 mb-4">
              Welcome back
            </p>
            <h1 className="text-3xl font-bold leading-snug text-white">
              Everything you need,<br />all in one place.
            </h1>
            <p className="mt-3 text-sm text-white/60 leading-relaxed">
              Sign in to continue your learning journey, manage your class, or monitor your child's progress.
            </p>

            {/* Feature highlights */}
            <div className="mt-8 grid gap-2.5 sm:grid-cols-2">
              {highlights.map((h) => (
                <div key={h.label} className="flex items-start gap-3 rounded-2xl bg-white/8 p-3.5 backdrop-blur-sm">
                  <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-lg bg-teal/25">
                    <Sparkles className="h-3.5 w-3.5 text-teal" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">{h.label}</p>
                    <p className="text-[11px] text-white/50 mt-0.5">{h.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="relative z-10 text-[11px] text-white/30">
            © 2026 FutureMinds AI Guru · All rights reserved
          </p>
        </div>

        {/* ── Right form panel ── */}
        <div className="flex items-center justify-center overflow-y-auto px-5 py-6 lg:px-12">
          <div className="w-full max-w-md">

            {/* Mobile brand */}
            <div className="mb-6 flex items-center gap-2 lg:hidden">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-teal to-marigold shadow-sm">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <span className="text-base font-bold text-ink">FutureMinds AI Guru</span>
            </div>

            {/* Header */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-ink">Sign in</h2>
              <p className="mt-1 text-sm text-slate-500">Choose your role and enter your credentials.</p>
            </div>

            {/* Role selector */}
            <div className="mb-5">
              <p className="mb-2.5 text-xs font-bold uppercase tracking-[0.15em] text-slate-400">Login as</p>
              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                {roles.map((role) => (
                  <button
                    key={role.id}
                    type="button"
                    onClick={() => setSelected(role.id)}
                    className={`flex flex-col items-center gap-2 rounded-2xl border-2 px-3 py-3.5 text-center transition-all duration-200 ${
                      selected === role.id
                        ? `${role.accent} ring-2 bg-white shadow-sm dark:bg-white/5`
                        : "border-royal/10 bg-white/60 dark:bg-white/3 hover:border-royal/20 dark:border-white/8"
                    }`}
                  >
                    <div className={`flex h-8 w-8 items-center justify-center rounded-xl ${role.iconBg} ${role.iconText}`}>
                      {role.icon}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-ink">{role.label}</p>
                      <p className="mt-0.5 text-[10px] text-slate-400 leading-tight hidden sm:block">{role.tagline.split(".")[0]}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="space-y-3">
              <label className="block">
                <span className="mb-1.5 block text-xs font-semibold text-slate-500">Email address</span>
                <div className="flex items-center gap-2.5 rounded-2xl border border-royal/12 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-3 focus-within:border-teal transition-colors">
                  <Mail className="h-4 w-4 flex-shrink-0 text-slate-400" />
                  <input
                    suppressHydrationWarning
                    type="email"
                    placeholder="name@futureminds.ai"
                    className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-slate-400"
                  />
                </div>
              </label>

              <label className="block">
                <div className="mb-1.5 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">Password</span>
                  <Link href="#" className="text-[11px] font-semibold text-teal hover:underline">Forgot password?</Link>
                </div>
                <div className="flex items-center gap-2.5 rounded-2xl border border-royal/12 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-3 focus-within:border-teal transition-colors">
                  <Lock className="h-4 w-4 flex-shrink-0 text-slate-400" />
                  <input
                    suppressHydrationWarning
                    type={showPass ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-slate-400"
                  />
                  <button type="button" onClick={() => setShowPass((v) => !v)} className="flex-shrink-0 text-slate-400 hover:text-ink transition-colors">
                    {showPass ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </label>

              {/* Login button */}
              <Link
                href={currentRole.href}
                className="mt-1 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-royal to-[#5a3f7a] py-3.5 text-sm font-bold text-white shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
              >
                Sign in as {currentRole.label}
                <ArrowRight className="h-4 w-4" />
              </Link>

              {/* Divider */}
              <div className="flex items-center gap-3">
                <div className="flex-1 h-px bg-royal/10 dark:bg-white/10" />
                <span className="text-[11px] text-slate-400">or</span>
                <div className="flex-1 h-px bg-royal/10 dark:bg-white/10" />
              </div>

              {/* Google */}
              <button className="flex w-full items-center justify-center gap-2.5 rounded-2xl border border-royal/12 dark:border-white/10 bg-white dark:bg-white/5 py-3 text-sm font-semibold text-ink hover:-translate-y-0.5 hover:shadow-sm transition-all">
                <svg className="h-4 w-4" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continue with Google
              </button>
            </div>

            <p className="mt-5 text-center text-xs text-slate-500">
              New here?{" "}
              <Link className="font-semibold text-teal hover:underline" href="/signup">
                Create a free account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}