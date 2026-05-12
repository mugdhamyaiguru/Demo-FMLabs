"use client";

import { useState } from "react";
import {
  Mail, Lock, UserRound, BookOpen, Users, ShieldCheck, LayoutDashboard,
  ArrowRight, ArrowLeft, GraduationCap, School, Phone, BadgeCheck
} from "lucide-react";
import Link from "next/link";
import { BrandMarkWhite } from "@/components/platform";

type RoleId = "student" | "teacher" | "parent" | "admin";

const roles: {
  id: RoleId;
  label: string;
  tagline: string;
  description: string;
  icon: React.ReactNode;
  accentClass: string;
  gradientFrom: string;
  gradientTo: string;
  iconBg: string;
  iconText: string;
}[] = [
  {
    id: "student",
    label: "Student",
    tagline: "Learn. Earn XP. Level up.",
    description: "Access modules, quizzes, AI tutoring, and climb the leaderboard.",
    icon: <GraduationCap className="h-5 w-5" />,
    accentClass: "border-teal",
    gradientFrom: "from-teal",
    gradientTo: "to-[#0d7a7a]",
    iconBg: "bg-teal/15",
    iconText: "text-teal",
  },
  {
    id: "teacher",
    label: "Teacher",
    tagline: "Manage. Assign. Monitor.",
    description: "Track students, assign lessons, and review class performance.",
    icon: <School className="h-5 w-5" />,
    accentClass: "border-marigold",
    gradientFrom: "from-marigold",
    gradientTo: "to-[#d4750a]",
    iconBg: "bg-marigold/15",
    iconText: "text-marigold",
  },
  {
    id: "parent",
    label: "Parent",
    tagline: "Track. Support. Celebrate.",
    description: "Monitor your child's progress, subjects, and achievements.",
    icon: <ShieldCheck className="h-5 w-5" />,
    accentClass: "border-crimson",
    gradientFrom: "from-crimson",
    gradientTo: "to-[#8b1010]",
    iconBg: "bg-crimson/10",
    iconText: "text-crimson",
  },
  {
    id: "admin",
    label: "Admin",
    tagline: "Oversee. Configure. Control.",
    description: "Full platform access — users, stats, settings, and compliance.",
    icon: <LayoutDashboard className="h-5 w-5" />,
    accentClass: "border-gold",
    gradientFrom: "from-gold",
    gradientTo: "to-[#a87820]",
    iconBg: "bg-gold/15",
    iconText: "text-gold",
  },
];

/* ── Compact field components ─────────────────────────────── */

function Field({ icon, label, placeholder, type = "text" }: { icon: React.ReactNode; label: string; placeholder: string; type?: string }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-semibold text-slate-600">{label}</span>
      <div className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 transition-colors focus-within:border-teal focus-within:bg-white">
        <span className="flex-shrink-0 text-slate-400">{icon}</span>
        <input
          suppressHydrationWarning
          className="w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
          placeholder={placeholder}
          type={type}
        />
      </div>
    </label>
  );
}

function SelectField({ label, options }: { label: string; options: string[] }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-semibold text-slate-600">{label}</span>
      <select
        suppressHydrationWarning
        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-700 outline-none transition-colors focus:border-teal focus:bg-white"
      >
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </label>
  );
}

/* ── Role-specific forms ──────────────────────────────────── */

function StudentForm() {
  return (
    <div className="space-y-3">
      <Field icon={<UserRound className="h-4 w-4" />} label="Full name" placeholder="Aanya Sharma" />
      <Field icon={<Mail className="h-4 w-4" />} label="Email" placeholder="student@futureminds.ai" type="email" />
      <Field icon={<Lock className="h-4 w-4" />} label="Password" placeholder="Create a password" type="password" />
      <SelectField label="Grade / Class" options={["Grade 6", "Grade 7", "Grade 8", "Grade 9", "Grade 10", "Grade 11", "Grade 12"]} />
    </div>
  );
}

function TeacherForm() {
  return (
    <div className="space-y-3">
      <Field icon={<UserRound className="h-4 w-4" />} label="Full name" placeholder="Ms. Priya Kapoor" />
      <Field icon={<Mail className="h-4 w-4" />} label="School email" placeholder="teacher@school.edu" type="email" />
      <Field icon={<Lock className="h-4 w-4" />} label="Password" placeholder="Create a password" type="password" />
      <Field icon={<BookOpen className="h-4 w-4" />} label="Subject(s) taught" placeholder="e.g. Mathematics, Science" />
      <Field icon={<BadgeCheck className="h-4 w-4" />} label="School / Institution" placeholder="Delhi Public School" />
    </div>
  );
}

function ParentForm() {
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-3">
        <Field icon={<UserRound className="h-4 w-4" />} label="Your name" placeholder="Rajesh Sharma" />
        <Field icon={<Phone className="h-4 w-4" />} label="Phone" placeholder="+91 98765 43210" type="tel" />
      </div>
      <Field icon={<Mail className="h-4 w-4" />} label="Email" placeholder="parent@email.com" type="email" />
      <Field icon={<Lock className="h-4 w-4" />} label="Password" placeholder="Create a password" type="password" />
      <div className="grid grid-cols-2 gap-3">
        <Field icon={<Users className="h-4 w-4" />} label="Child's name" placeholder="Aanya Sharma" />
        <SelectField label="Child's grade" options={["Grade 6", "Grade 7", "Grade 8", "Grade 9", "Grade 10", "Grade 11", "Grade 12"]} />
      </div>
    </div>
  );
}

function AdminForm() {
  return (
    <div className="space-y-3">
      <Field icon={<UserRound className="h-4 w-4" />} label="Admin full name" placeholder="Sanjay Mehta" />
      <Field icon={<Mail className="h-4 w-4" />} label="Official email" placeholder="admin@futureminds.ai" type="email" />
      <Field icon={<Lock className="h-4 w-4" />} label="Password" placeholder="Create a secure password" type="password" />
      <div className="grid grid-cols-2 gap-3">
        <Field icon={<BadgeCheck className="h-4 w-4" />} label="Institution" placeholder="FutureMinds AI Labs" />
        <Field icon={<Phone className="h-4 w-4" />} label="Contact number" placeholder="+91 98765 43210" type="tel" />
      </div>
      <SelectField label="Admin level" options={["School Admin", "District Admin", "Platform Super Admin"]} />
    </div>
  );
}

/* ── Left decorative panel ────────────────────────────────── */

function LeftPanel({ step, selectedRole }: { step: number; selectedRole: RoleId | null }) {
  const role = roles.find((r) => r.id === selectedRole);
  return (
    <div className="flex h-full flex-col justify-between overflow-hidden rounded-[1.75rem] bg-gradient-to-b from-[#3a2f55] via-royal to-[#2d2445] p-6 text-white shadow-glass">
      <BrandMarkWhite />

      <div className="mt-6 space-y-3">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
          {step === 1 ? "Step 1 of 2 · Choose role" : `Step 2 of 2 · ${role?.label ?? ""} signup`}
        </div>
        <h1 className="text-2xl font-bold leading-tight">
          {step === 1 ? "Join the FutureMinds ecosystem" : `Welcome, future ${role?.label}.`}
        </h1>
        <p className="text-sm leading-6 text-white/65">
          {step === 1
            ? "Pick the experience that fits you. Each role unlocks a focused dashboard."
            : role?.description}
        </p>
      </div>

      <div className="mt-5 rounded-[1.25rem] bg-white/8 border border-white/10 p-4 backdrop-blur">
        {step === 1 ? (
          <div className="grid grid-cols-2 gap-2.5">
            {roles.map((r) => (
              <div key={r.id} className={`rounded-xl bg-white/10 p-3 ${selectedRole === r.id ? "ring-2 ring-white/30" : ""}`}>
                <div className="text-white/75">{r.icon}</div>
                <p className="mt-1.5 text-sm font-semibold text-white">{r.label}</p>
                <p className="mt-0.5 text-[11px] text-white/50">{r.tagline}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className={`rounded-xl bg-gradient-to-br ${role?.gradientFrom} ${role?.gradientTo} p-4`}>
            <div className="text-white">{role?.icon}</div>
            <p className="mt-3 text-base font-bold text-white">{role?.label} Dashboard</p>
            <p className="mt-0.5 text-xs text-white/70">{role?.tagline}</p>
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Main page ────────────────────────────────────────────── */

export default function SignupPage() {
  const [step, setStep] = useState<1 | 2>(1);
  const [selectedRole, setSelectedRole] = useState<RoleId | null>(null);

  const role = roles.find((r) => r.id === selectedRole);

  const dashboardHref: Record<RoleId, string> = {
    student: "/student",
    teacher: "/teacher",
    parent: "/parent",
    admin: "/admin",
  };

  return (
    <div className="h-screen overflow-hidden bg-[radial-gradient(circle_at_15%_20%,rgba(24,155,155,0.12),transparent_22%),radial-gradient(circle_at_85%_12%,rgba(252,148,56,0.12),transparent_18%),linear-gradient(180deg,#f9f7f4_0%,#f4eff8_100%)]">
      <main className="mx-auto grid h-full max-w-7xl gap-5 px-5 py-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-8 lg:py-6">

        {/* Left decorative panel */}
        <LeftPanel step={step} selectedRole={selectedRole} />

        {/* Right content panel */}
        <section className="flex items-center justify-center overflow-y-auto">
          <div className="w-full max-w-lg py-2">

            {/* ── STEP 1: Role picker ── */}
            {step === 1 && (
              <div>
                <div className="mb-5 text-center">
                  <h2 className="text-2xl font-bold text-slate-900">Choose your role</h2>
                  <p className="mt-1 text-sm text-slate-500">Select the role that matches your experience.</p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {roles.map((r) => (
                    <button
                      key={r.id}
                      type="button"
                      onClick={() => { setSelectedRole(r.id); setStep(2); }}
                      className={`group flex w-full flex-col rounded-2xl border-2 bg-white p-5 text-left shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${r.accentClass} border-transparent`}
                      style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}
                    >
                      <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${r.iconBg} ${r.iconText}`}>
                        {r.icon}
                      </div>
                      <h3 className="mt-3.5 text-base font-bold text-slate-900">{r.label}</h3>
                      <p className="mt-0.5 text-xs font-semibold text-slate-400">{r.tagline}</p>
                      <p className="mt-2 text-xs leading-5 text-slate-500">{r.description}</p>
                      <div className={`mt-3.5 flex items-center gap-1 text-xs font-semibold ${r.iconText}`}>
                        Get started <ArrowRight className="h-3.5 w-3.5" />
                      </div>
                    </button>
                  ))}
                </div>
                <p className="mt-5 text-center text-sm text-slate-500">
                  Already have an account?{" "}
                  <Link className="font-semibold text-teal hover:text-[#127171]" href="/login">Login</Link>
                </p>
              </div>
            )}

            {/* ── STEP 2: Role-specific signup form ── */}
            {step === 2 && role && (
              <div className="rounded-[1.75rem] border border-white/70 bg-white/85 p-6 shadow-glass backdrop-blur-xl">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="mb-4 inline-flex items-center gap-2 text-xs font-semibold text-slate-400 transition-colors hover:text-slate-700"
                >
                  <ArrowLeft className="h-3.5 w-3.5" /> Back to roles
                </button>

                <div className="mb-5 flex items-center gap-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${role.iconBg} ${role.iconText}`}>
                    {role.icon}
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-slate-900">{role.label} Signup</h2>
                    <p className="text-xs text-slate-400">{role.tagline}</p>
                  </div>
                </div>

                <form className="space-y-0">
                  {selectedRole === "student" && <StudentForm />}
                  {selectedRole === "teacher" && <TeacherForm />}
                  {selectedRole === "parent" && <ParentForm />}
                  {selectedRole === "admin" && <AdminForm />}

                  <div className="pt-4">
                    <Link
                      href={dashboardHref[selectedRole!]}
                      className={`flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r ${role.gradientFrom} ${role.gradientTo} px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg`}
                    >
                      Create {role.label} account <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>

                  <div className="relative flex items-center py-3">
                    <div className="flex-1 border-t border-slate-200" />
                    <span className="mx-3 text-xs text-slate-400">or</span>
                    <div className="flex-1 border-t border-slate-200" />
                  </div>

                  <button
                    type="button"
                    className="flex w-full items-center justify-center gap-3 rounded-full border border-slate-200 bg-white px-6 py-2.5 text-sm font-semibold text-slate-700 transition-all duration-200 hover:border-slate-300 hover:shadow-sm"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                    </svg>
                    Continue with Google
                  </button>
                </form>

                <p className="mt-4 text-center text-xs text-slate-400">
                  Already have an account?{" "}
                  <Link className="font-semibold text-teal hover:text-[#127171]" href="/login">Login</Link>
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}