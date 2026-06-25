import type { Metadata } from "next";
import {
  Award,
  BadgeCheck,
  Brain,
  Check,
  ClipboardList,
  Flame,
  GraduationCap,
  LayoutDashboard,
  ShieldCheck,
  Sparkles,
  Star,
  Trophy,
  Users,
  Play,
  Video,
  BookOpen,
  MessageSquare,
  LineChart,
  AlertTriangle,
  X,
  Zap
} from "lucide-react";
import { BrandMark, FeatureBadge, GlassCard, SectionHeading, SimpleList, Pill, cn } from "@/components/platform";
import { featureCards, testimonials } from "@/lib/mock-data";
import FluidBackground from "@/components/FluidBackground";
import AITutorLive from "@/components/AITutorLive";
import ThemeForcer from "@/components/ThemeForcer";
import RoleSelector from "@/components/RoleSelector";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import ContactForm from "@/components/ContactForm";
import LandingHeader from "@/components/LandingHeader";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "FutureMinds AI Guru",
  description: "A futuristic, gamified AI learning platform for students, teachers, and parents.",
  openGraph: {
    title: "FutureMinds AI Guru",
    description: "A futuristic, gamified AI learning platform for students, teachers, and parents.",
    url: "/",
    siteName: "FutureMinds AI Guru",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FutureMinds AI Guru",
    description: "A futuristic, gamified AI learning platform for students, teachers, and parents.",
  },
};

// ─── Custom Onboarding Mockup for Timeline ──────────────────
function MockupRoleSelector() {
  return (
    <div className="w-full max-w-md rounded-[2rem] border-[8px] border-teal dark:border-teal/70 bg-white/70 dark:bg-[#1a1727]/60 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.04)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.2)] select-none transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.09)] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:border-teal/30 flex flex-col justify-between">
      <div className="mb-2.5">
        <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#fc9438]">Onboarding Flow</p>
        <h4 className="text-base font-bold text-ink mt-0">Who are you?</h4>
      </div>

      <div className="space-y-2">
        {/* Student - Selected */}
        <div className="flex items-center justify-between rounded-2xl border-2 border-teal bg-teal/5 dark:bg-teal/10 px-3 py-1.5 transition-all">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-teal/15 text-teal font-extrabold text-xs">
              S
            </div>
            <div>
              <p className="text-[13px] font-extrabold text-ink">Student</p>
              <p className="text-[9px] text-slate-400 dark:text-slate-500 font-semibold mt-0">Access lessons & quizzes</p>
            </div>
          </div>
          <div className="flex h-4 w-4 items-center justify-center rounded-full bg-teal text-white shadow-sm">
            <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} />
          </div>
        </div>

        {/* Teacher */}
        <div className="flex items-center justify-between rounded-2xl border border-slate-200/40 dark:border-white/5 bg-white/30 dark:bg-[#12101e]/30 px-3 py-1.5 transition-all hover:bg-slate-50/50">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-royal/10 text-royal dark:bg-royal/35 dark:text-indigo-300 font-extrabold text-xs">
              T
            </div>
            <div>
              <p className="text-[13px] font-semibold text-ink">Teacher</p>
              <p className="text-[9px] text-slate-400 dark:text-slate-500 mt-0">Manage class & assignments</p>
            </div>
          </div>
        </div>

        {/* Parent */}
        <div className="flex items-center justify-between rounded-2xl border border-slate-200/40 dark:border-white/5 bg-white/30 dark:bg-[#12101e]/30 px-3 py-1.5 transition-all hover:bg-slate-50/50">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#fc9438]/15 text-[#fc9438] font-extrabold text-xs">
              P
            </div>
            <div>
              <p className="text-[13px] font-semibold text-ink">Parent</p>
              <p className="text-[9px] text-slate-400 dark:text-slate-500 mt-0">Monitor progress & attendance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Custom Lesson/Quiz Mockup for Timeline ────────────────
function MockupQuiz() {
  return (
    <div className="w-full max-w-[470px] rounded-[2rem] border-[8px] border-[#7c5cbf] dark:border-[#7c5cbf]/70 bg-white/70 dark:bg-[#1a1727]/60 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.04)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.2)] select-none transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.09)] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:border-[#fc9438]/30 flex flex-col justify-between">
      {/* Top Header Row */}
      <div className="flex items-center justify-between gap-3 mb-2">
        <div className="flex items-center gap-1.5 rounded-full bg-violet-500/10 text-violet-600 dark:text-violet-400 px-2 py-0.5 text-[9px] font-bold">
          <Brain className="h-3 w-3 text-violet-600 dark:text-violet-400" />
          <span>Introduction to AI</span>
        </div>
        <span className="text-[9px] font-semibold text-slate-400 dark:text-slate-500">Q 1 of 5</span>
      </div>

      {/* Question & Options container */}
      <div className="space-y-2">
        <h4 className="text-[13px] font-bold text-ink leading-snug text-left">
          Which of the following is a common application of Discriminative AI?
        </h4>

        {/* Options */}
        <div className="space-y-1.5">
          {/* Option A */}
          <div className="flex items-center gap-2.5 rounded-2xl border border-slate-200/50 dark:border-white/5 bg-white dark:bg-[#12101e]/30 px-3 py-1.5">
            <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-slate-200 dark:border-white/15 text-[9px] font-bold text-slate-500 dark:text-slate-400 bg-white/50">
              A
            </span>
            <span className="text-[10.5px] font-semibold text-slate-600 dark:text-slate-300 text-left">Creating realistic artwork</span>
          </div>

          {/* Option B */}
          <div className="flex items-center gap-2.5 rounded-2xl border border-slate-200/50 dark:border-white/5 bg-white dark:bg-[#12101e]/30 px-3 py-1.5">
            <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-slate-200 dark:border-white/15 text-[9px] font-bold text-slate-500 dark:text-slate-400 bg-white/50">
              B
            </span>
            <span className="text-[10.5px] font-semibold text-slate-600 dark:text-slate-300 text-left">Generating new molecular structures for drug discovery</span>
          </div>

          {/* Option C - Selected & Correct */}
          <div className="flex items-center gap-2.5 rounded-2xl border-2 border-teal bg-teal/5 dark:bg-teal/10 px-3 py-1.5">
            <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-teal text-white shadow-sm">
              <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} />
            </span>
            <span className="text-[10.5px] font-bold text-teal text-left">Spam detection in emails</span>
          </div>

          {/* Option D */}
          <div className="flex items-center gap-2.5 rounded-2xl border border-slate-200/50 dark:border-white/5 bg-white dark:bg-[#12101e]/30 px-3 py-1.5">
            <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-slate-200 dark:border-white/15 text-[9px] font-bold text-slate-500 dark:text-slate-400 bg-white/50">
              D
            </span>
            <span className="text-[10.5px] font-semibold text-slate-600 dark:text-slate-300 text-left">Producing synthetic human-like voices</span>
          </div>
        </div>

        {/* Correct Explanation Box */}
        <div className="rounded-2xl border border-slate-200/40 dark:border-white/5 bg-white/50 dark:bg-[#12101e]/30 p-2.5 flex gap-2 items-start">
          <Sparkles className="h-3.5 w-3.5 text-indigo-500 dark:text-indigo-400 mt-0.5 flex-shrink-0" />
          <div className="text-left">
            <p className="text-[9px] text-slate-600 dark:text-slate-300 leading-relaxed">
              <span className="font-bold text-ink">Correct!</span> Discriminative AI excels at classification tasks such as spam detection, fraud detection, and sentiment analysis.
            </p>
          </div>
        </div>

        {/* Bottom Actions Row */}
        <div className="flex items-center justify-between gap-4 pt-0">
          <div className="flex items-center gap-1.5 rounded-full bg-[#fc9438]/10 text-[#ad5e00] dark:text-[#fc9438] px-2.5 py-1 text-[9px] font-extrabold">
            <Zap className="h-3 w-3 text-[#ad5e00] dark:text-[#fc9438] fill-current" />
            <span>+10 XP</span>
          </div>
          <button className="inline-flex items-center gap-1.5 rounded-full bg-royal text-white px-4 py-1.5 text-[11px] font-bold shadow-md hover:bg-royal/90 transition-all">
            <span>Next</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Custom Rewards Mockup for Timeline ────────────────────
function MockupRewards() {
  return (
    <div className="w-full max-w-md rounded-[2rem] border-[8px] border-[#fc9438] dark:border-[#fc9438]/70 bg-white/70 dark:bg-[#1a1727]/60 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.04)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.2)] select-none transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.09)] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:border-teal/30 flex flex-col justify-between">
      <div className="mb-2.5">
        <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-teal">Achievements</p>
        <h4 className="text-base font-bold text-ink mt-0">Your Progress</h4>
      </div>

      <div className="space-y-2.5">
        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Total XP", val: "1,240", color: "text-teal" },
            { label: "Leaderboard", val: "#4", color: "text-[#7c5cbf]" },
            { label: "Accuracy", val: "92%", color: "text-[#fc9438]" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-slate-200/40 dark:border-white/5 bg-slate-50/50 dark:bg-[#12101e]/30 p-2 text-center flex flex-col justify-center">
              <p className={`text-base font-black ${stat.color}`}>{stat.val}</p>
              <p className="text-[9px] text-slate-500 dark:text-slate-400 font-semibold mt-0 whitespace-nowrap">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* 7-Day Streak */}
        <div className="rounded-2xl border border-slate-200/40 dark:border-white/5 bg-slate-50/50 dark:bg-[#12101e]/30 p-2 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Flame className="h-4 w-4 text-[#fc9438] animate-pulse flex-shrink-0" />
            <div className="text-[9.5px] font-bold text-ink leading-tight text-left">
              <p>7-day</p>
              <p>streak</p>
            </div>
          </div>
          <div className="flex gap-1">
            {["M", "T", "W", "T", "F", "S", "S"].map((day, idx) => (
              <span
                key={idx}
                className={cn(
                  "flex h-5 w-5 items-center justify-center rounded-full text-[9px] font-bold border",
                  idx < 6
                    ? "bg-teal border-teal text-white shadow-sm"
                    : "bg-indigo-50/50 dark:bg-indigo-950/20 border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400"
                )}
              >
                {day}
              </span>
            ))}
          </div>
        </div>

        {/* Badges List */}
        <div className="grid grid-cols-2 gap-2">
          {/* Quick Learner Badge */}
          <div className="flex items-center gap-2 rounded-2xl border border-slate-200/40 dark:border-white/5 bg-slate-50/50 dark:bg-[#12101e]/30 p-2">
            <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal text-sm">
              <Zap className="h-3.5 w-3.5 text-teal" strokeWidth={2.5} />
            </div>
            <div className="text-left">
              <p className="text-[9.5px] font-bold text-ink">Quick learner</p>
              <p className="text-[8px] text-slate-500 dark:text-slate-400 font-semibold mt-0 leading-tight">5 lessons in a day</p>
            </div>
          </div>

          {/* Top Scorer Badge */}
          <div className="flex items-center gap-2 rounded-2xl border border-slate-200/40 dark:border-white/5 bg-slate-50/50 dark:bg-[#12101e]/30 p-2">
            <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 text-sm">
              <Award className="h-3.5 w-3.5 text-indigo-600 dark:text-indigo-400" strokeWidth={2.5} />
            </div>
            <div className="text-left">
              <p className="text-[9.5px] font-bold text-ink">Top scorer</p>
              <p className="text-[8px] text-slate-500 dark:text-slate-400 font-semibold mt-0 leading-tight">100% on a quiz</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  const featureIcons = {
    "AI Tutor": <Brain className="h-5 w-5" />,
    "Personalized Learning": <Sparkles className="h-5 w-5" />,
    "Progress Tracking": <ClipboardList className="h-5 w-5" />,
    Gamification: <Award className="h-5 w-5" />,
    "Parent Dashboard": <ShieldCheck className="h-5 w-5" />,
    "Real-world Projects": <LayoutDashboard className="h-5 w-5" />,
  } as const;

  return (
    <main className="relative overflow-hidden min-h-screen pt-24">
      <ThemeForcer />
      {/* ── Header ─────────────────────────────────────────── */}
      <LandingHeader />

      {/* ── Hero Section ───────────────────────────────────── */}
      <section id="home" className="relative z-10 mx-auto max-w-7xl px-4 pb-16 pt-4 sm:px-6 lg:px-8 lg:pb-24 lg:pt-6">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#2e2542] via-[#201b33] to-[#171424] text-white px-8 py-16 sm:px-12 lg:px-16 shadow-2xl border border-white/10 ring-1 ring-white/5">
          {/* Interactive Liquid / Fluid Canvas Background */}
          <FluidBackground />

          {/* Subtle Grid Overlay for SaaS/AI look */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] -z-10 opacity-70"
          />

          {/* ── Radial Glow Layers — premium AI/SaaS depth ─────── */}
          {/* Teal glow — top-left origin */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 -left-32 h-[30rem] w-[30rem] rounded-full opacity-35 blur-[120px] animate-pulse-glow-1"
            style={{ background: "radial-gradient(circle, #189b9b 0%, transparent 70%)" }}
          />
          {/* Marigold glow — bottom-right origin */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -right-24 h-[26rem] w-[26rem] rounded-full opacity-30 blur-[100px] animate-pulse-glow-2"
            style={{ background: "radial-gradient(circle, #fc9438 0%, transparent 70%)" }}
          />
          {/* Violet center bloom — adds perceived depth behind the grid content */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[42rem] w-[42rem] rounded-full opacity-[0.15] blur-[140px] animate-pulse-glow-center"
            style={{ background: "radial-gradient(circle, #7c5cbf 0%, transparent 65%)" }}
          />

          {/* Floating background decorative icons */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden select-none z-0 opacity-15">
            <Brain className="absolute left-[8%] top-[20%] h-12 w-12 text-[#189b9b] animate-float-slow" />
            <Sparkles className="absolute right-[12%] top-[14%] h-10 w-10 text-[#fc9438] animate-float-medium" />
            <GraduationCap className="absolute left-[38%] top-[42%] h-14 w-14 text-white animate-float-fast" />
            <Trophy className="absolute right-[28%] bottom-[24%] h-12 w-12 text-[#d8a444] animate-float-slow" />
            <Award className="absolute left-[14%] bottom-[35%] h-10 w-10 text-[#189b9b] animate-float-medium" />
            <Flame className="absolute right-[6%] bottom-[45%] h-12 w-12 text-[#fc9438] animate-float-fast" />
          </div>

          <div className="relative z-10 grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            {/* Left Content Column */}
            <div className="space-y-8 max-w-xl">
              <div className="flex flex-wrap gap-2.5">
                <span className="inline-flex items-center rounded-full bg-[#189b9b]/20 text-[#21d0d0] px-3.5 py-1 text-xs font-semibold border border-[#189b9b]/35">AI-powered learning</span>
                <span className="inline-flex items-center rounded-full bg-[#fc9438]/20 text-[#ffa24c] px-3.5 py-1 text-xs font-semibold border border-[#fc9438]/35">Gamified progress</span>
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl leading-[1.1]">
                  FutureMinds <br />
                  <span className="bg-gradient-to-r from-[#00E5FF] via-[#00BFA6] to-[#FFC857] bg-clip-text text-transparent">
                    AI Guru
                  </span>
                </h1>
                <p className="text-base text-slate-300 sm:text-lg leading-relaxed pt-2">
                  Personalized AI-Powered Learning Tailored To Your Goals.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="/signup"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#189b9b] px-6 py-4 text-base font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#148282] hover:shadow-xl"
                >
                  <span>Get Started</span>
                  <Play className="h-4 w-4 fill-white text-white" />
                </a>
                <a
                  href="/modules"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/25 bg-white/5 px-6 py-4 text-base font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/10"
                >
                  <span>Explore Modules</span>
                  <Play className="h-4 w-4 text-white" />
                </a>
              </div>

              {/* Stats Row */}
              <div className="grid gap-6 grid-cols-3 border-t border-white/10 pt-6 mt-4">
                {[
                  { value: "92%", label: "module completion" },
                  { value: "1.2k", label: "XP earned daily" },
                  { value: "3 roles", label: "student, teacher, parent" },
                ].map((stat) => (
                  <div key={stat.label} className="space-y-1 bg-[#1e1b2e]/40 border border-white/5 rounded-2xl p-4 shadow-sm backdrop-blur-md">
                    <p className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-[#189b9b] via-[#d8a444] to-[#fc9438] bg-clip-text text-transparent animate-gradient-text bg-[length:200%_auto]">{stat.value}</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Dashboard Mockup Column */}
            <div className="relative z-10 w-full max-w-lg mx-auto lg:mx-0 lg:ml-auto">
              {/* Blur backdrop backing */}
              <div className="absolute -inset-4 rounded-full bg-royal/20 blur-3xl opacity-60 -z-10" />

              {/* Main Dashboard Box */}
              <div className="relative rounded-[2.5rem] border border-white/10 bg-[#1e1b2e]/60 p-6 sm:p-8 shadow-2xl backdrop-blur-xl overflow-visible select-none transition-all duration-300 hover:border-white/15">
                {/* Header row */}
                <div className="flex items-start justify-between gap-4">
                  <div className="max-w-[70%]">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#189b9b]">AI LEARNING ECOSYSTEM</p>
                    <h3 className="text-xl font-bold text-white mt-1 leading-snug">
                      Everything connected in <br className="hidden sm:inline" /> one place
                    </h3>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="rounded-2xl bg-white/10 border border-white/10 px-3.5 py-1.5 text-xs font-semibold text-white shadow-md">
                      Live demo
                    </div>
                  </div>
                </div>

                {/* Compact Mind Map Notification (absolutely positioned below Live Demo) */}
                <div className="absolute top-[5.25rem] sm:top-[5.5rem] right-6 sm:right-8 z-20 flex items-center gap-2.5 rounded-2xl border border-white/10 bg-[#25213b]/80 p-2.5 shadow-md backdrop-blur-md animate-float-1 w-48 select-none">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#fc9438] to-[#e67e22] text-white shadow-sm">
                    <Brain className="h-4.5 w-4.5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-black text-white leading-tight">Mind Map Generated</p>
                    <p className="text-[9px] text-white/50 mt-0.5 leading-none">Just now</p>
                  </div>
                </div>

                {/* Middle content cards: Smart Tutor (purple) & Today's Streak */}
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {/* Smart Tutor Card */}
                  <div className="rounded-[2rem] bg-gradient-to-br from-[#4e4260] to-[#3a2f55] p-5 text-white shadow-lg border border-white/10 transition-transform duration-300 hover:scale-[1.03]">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fc9438]/20 text-[#fc9438]">
                      <Brain className="h-6 w-6" />
                    </div>
                    <p className="mt-4 text-base font-bold">Smart tutor</p>
                    <p className="mt-2 text-xs leading-relaxed text-slate-300">
                      Guided hints, adaptive recommendations, and confidence-building practice.
                    </p>
                  </div>

                  {/* Today's Streak Card & AI Tutor Active Notification */}
                  <div className="flex flex-col gap-4">
                    <div className="rounded-[2rem] bg-[#1e1b2e]/45 border border-white/10 p-5 text-white shadow-sm transition-transform duration-300 hover:scale-[1.03] flex flex-col justify-between flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-slate-400">Today&apos;s streak</span>
                        <Sparkles className="h-5 w-5 text-[#189b9b]" />
                      </div>
                      <div className="mt-4">
                        <p className="text-4xl font-black text-white">7</p>
                        <p className="text-xs text-slate-400">days and counting</p>
                      </div>
                      <div className="mt-4 h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                        <div className="h-full rounded-full bg-gradient-to-r from-[#189b9b] to-[#fc9438]" style={{ width: "78%" }} />
                      </div>
                    </div>

                    {/* Compact AI Tutor Active Notification */}
                    <div className="relative flex items-center gap-3 rounded-2xl border border-white/10 bg-[#25213b]/70 p-3 shadow-md backdrop-blur-md animate-float-slow hover:scale-[1.02] transition-transform duration-300 select-none">
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl bg-[#189b9b]/20 text-[#189b9b] shadow-sm">
                        <MessageSquare className="h-4.5 w-4.5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[10px] font-bold text-[#189b9b] uppercase tracking-wider">AI Tutor Active</p>
                        <AITutorLive />
                      </div>
                    </div>
                  </div>

                  {/* Role-Aware Experiences Card */}
                  <div className="rounded-[2rem] bg-[#1e1b2e]/45 border border-white/10 p-5 text-white shadow-sm sm:col-span-2 transition-transform duration-300 hover:scale-[1.01]">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center rounded-full bg-[#189b9b]/10 text-[#189b9b] px-3 py-1 text-xs font-semibold">Student</span>
                      <span className="inline-flex items-center rounded-full bg-[#d8a444]/15 text-[#d8a444] px-3 py-1 text-xs font-semibold">Teacher</span>
                      <span className="inline-flex items-center rounded-full bg-red-500/10 text-red-500 px-3 py-1 text-xs font-semibold">Parent</span>
                    </div>
                    <p className="mt-4 text-xs leading-relaxed text-slate-400">
                      Role-aware experiences keep each learner, educator, and parent focused on what matters most.
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating elements removed, positioned inline inside the dashboard box */}
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ───────────────────────────────────────── */}
      <section id="features" className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <SectionHeading
          eyebrow="Platform features"
          title="Built to feel futuristic, vibrant, and easy to use"
          description="The interface mixes SaaS clarity, playful gamification, and student-friendly visuals to make every workflow feel engaging."
          centered
        />
        <div className="mt-16 lg:mt-20 grid gap-8 lg:gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {featureCards.map((feature) => (
            <FeatureBadge
              key={feature.title}
              icon={featureIcons[feature.title as keyof typeof featureIcons]}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </section>

      {/* ── How it works ───────────────────────────────────── */}
      <section id="how-it-works" className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24 animate-fade-up">
        <div className="pb-6">
          <SectionHeading
            eyebrow="How it works"
            title="A polished flow from signup to measurable progress"
            description="Students join, choose a role, explore modules, learn with quizzes and AI support, and keep momentum with streaks and badges."
          />
        </div>

        <div className="relative mt-8 lg:mt-12">
          <div className="space-y-16 lg:space-y-20 max-w-4.5xl mx-auto">
            {/* Step 01 */}
            <ScrollReveal>
              <div className="group relative grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                {/* Left Column: Text Card */}
                <div className="group relative flex flex-col items-start bg-white/70 dark:bg-[#1a1727]/30 border border-slate-200/50 dark:border-white/6 rounded-[2rem] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.04)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.2)] backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.09)] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:border-teal/30 hover:bg-white w-full max-w-md lg:ml-auto mx-auto lg:mx-0">
                  <div className="absolute -inset-px rounded-[2rem] bg-gradient-to-br from-white/30 to-white/0 dark:from-white/5 dark:to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 transition-all duration-500 group-hover:scale-110 group-hover:shadow-md">
                    <div className="absolute inset-1 rounded-xl bg-gradient-to-br from-[#189B9B]/20 to-[#189B9B]/5 blur-[2px]" />
                    <div className="relative z-10">
                      <Users className="h-6 w-6 text-[#189B9B]" />
                    </div>
                  </div>
                  <div className="mt-6 space-y-4">
                    <span className="text-[15px] font-black uppercase tracking-[0.12em] text-[#fc9438]">Step 01</span>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white transition-colors duration-300 group-hover:text-[#189B9B]">
                      Choose a role
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                      Student, teacher, or parent dashboards adapt to the same branded system — each role gets a tailored experience from day one.
                    </p>
                  </div>
                </div>

                {/* Right Column: Onboarding Mockup */}
                <div className="flex justify-center lg:justify-start w-full">
                  <MockupRoleSelector />
                </div>
              </div>
            </ScrollReveal>

            {/* Step 02 */}
            <ScrollReveal>
              <div className="group relative grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                {/* Left Column (Desktop): Quiz Mockup, Right Column (Mobile) */}
                <div className="order-2 lg:order-1 flex justify-center lg:justify-end w-full">
                  <MockupQuiz />
                </div>

                {/* Right Column (Desktop): Text Card, Left Column (Mobile) */}
                <div className="order-1 lg:order-2 group relative flex flex-col items-start bg-white/70 dark:bg-[#1a1727]/30 border border-slate-200/50 dark:border-white/6 rounded-[2rem] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.04)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.2)] backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.09)] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:border-[#fc9438]/30 hover:bg-white w-full max-w-[470px] lg:mr-auto mx-auto lg:mx-0">
                  <div className="absolute -inset-px rounded-[2rem] bg-gradient-to-br from-white/30 to-white/0 dark:from-white/5 dark:to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 transition-all duration-500 group-hover:scale-110 group-hover:shadow-md">
                    <div className="absolute inset-1 rounded-xl bg-gradient-to-br from-[#fc9438]/20 to-[#fc9438]/5 blur-[2px]" />
                    <div className="relative z-10">
                      <LayoutDashboard className="h-6 w-6 text-[#fc9438]" />
                    </div>
                  </div>
                  <div className="mt-6 space-y-4">
                    <span className="text-[15px] font-black uppercase tracking-[0.12em] text-[#fc9438]">Step 02</span>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white transition-colors duration-300 group-hover:text-[#fc9438]">
                      Learn in modules
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                      Micro-lessons and interactive quizzes keep sessions short and motivating — with AI hints available whenever you're stuck.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Step 03 */}
            <ScrollReveal>
              <div className="group relative grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                {/* Left Column: Text Card */}
                <div className="group relative flex flex-col items-start bg-white/70 dark:bg-[#1a1727]/30 border border-slate-200/50 dark:border-white/6 rounded-[2rem] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.04)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.2)] backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.09)] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:border-teal/30 hover:bg-white w-full max-w-md lg:ml-auto mx-auto lg:mx-0">
                  <div className="absolute -inset-px rounded-[2rem] bg-gradient-to-br from-white/30 to-white/0 dark:from-white/5 dark:to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 transition-all duration-500 group-hover:scale-110 group-hover:shadow-md">
                    <div className="absolute inset-1 rounded-xl bg-gradient-to-br from-[#189B9B]/20 to-[#189B9B]/5 blur-[2px]" />
                    <div className="relative z-10">
                      <Award className="h-6 w-6 text-[#189B9B]" />
                    </div>
                  </div>
                  <div className="mt-6 space-y-4">
                    <span className="text-[15px] font-black uppercase tracking-[0.12em] text-[#fc9438]">Step 03</span>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white transition-colors duration-300 group-hover:text-[#189B9B]">
                      Earn rewards
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                      XP, badges, streaks, and leaderboard spots make growth visible — keeping learners motivated and coming back every day.
                    </p>
                  </div>
                </div>

                {/* Right Column: Achievements Mockup */}
                <div className="flex justify-center lg:justify-start w-full">
                  <MockupRewards />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Role-based ─────────────────────────────────────── */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24 animate-fade-up">
        <SectionHeading
          eyebrow="Role-based learning"
          title="Every role gets a focused experience"
          description="The demo keeps the student journey immersive while still giving teachers and parents the insights they need."
        />
        <div className="mt-16 lg:mt-20">
          <RoleSelector />
        </div>
      </section>

      {/* ── Testimonials ───────────────────────────────────── */}
      <section id="testimonials" className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="pb-6">
          <SectionHeading
            eyebrow="Testimonials"
            title="Loved by students, trusted by parents and educators"
            centered
          />
        </div>

        <div className="mt-16 lg:mt-20">
          <TestimonialCarousel items={testimonials} />
        </div>
      </section>

      {/* ── Partners ───────────────────────────────────────── */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        {/* Header: heading + description + verified badge grouped together */}
        <div className="max-w-4xl">
          <SectionHeading
            eyebrow="Strategic partners"
            title="Trusted by leading educational institutions globally"
            description="FutureMinds AI Guru partners with schools, universities, and education platforms to transform learning."
          />
          <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-[#189b9b]/25 bg-[#189b9b]/5 px-3 py-1 text-[11px] font-semibold text-[#189b9b]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#189b9b]" />
            Verified partners
          </div>
        </div>

        {/* Partner cards grid */}
        <div className="mt-16 lg:mt-20 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {[
            { name: "Global EdTech Alliance", logo: "GEA", category: "EdTech" },
            { name: "International School Network", logo: "ISN", category: "Schools" },
            { name: "AI Learning Consortium", logo: "ALC", category: "AI & Research" },
            { name: "Future Educators Foundation", logo: "FEF", category: "Foundation" },
          ].map((partner) => (
            <div
              key={partner.name}
              className="group relative flex flex-col items-center gap-3 overflow-hidden rounded-2xl border border-slate-200/60 dark:border-white/8 bg-white/70 dark:bg-[#1a1727]/40 px-5 py-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#189b9b]/30 dark:hover:border-[#189b9b]/20 hover:shadow-md"
            >
              {/* Top accent line revealed on hover */}
              <div className="absolute top-0 inset-x-0 h-[2px] rounded-b-full bg-gradient-to-r from-[#189b9b] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-70" />

              {/* Logo area — slightly larger, stronger default tint */}
              <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-slate-200/80 dark:border-white/10 bg-slate-100/80 dark:bg-white/8 text-[15px] font-black tracking-tight text-slate-600 dark:text-slate-300 shadow-sm transition-all duration-300 group-hover:border-[#189b9b]/35 group-hover:bg-[#189b9b]/10 group-hover:text-[#189b9b]">
                {partner.logo}
              </div>

              {/* Name + category — tighter spacing */}
              <div className="space-y-1 text-center">
                <p className="text-sm font-semibold leading-snug text-slate-700 dark:text-slate-200">
                  {partner.name}
                </p>
                <span className="inline-block rounded-full bg-slate-100 dark:bg-white/5 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  {partner.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Global reach ───────────────────────────────────── */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24 overflow-hidden">
        {/* Faint ambient radial — global context, not distracting */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[32rem] w-[48rem] rounded-full opacity-[0.07] blur-[80px]" style={{ background: "radial-gradient(ellipse, #189b9b 0%, #7c5cbf 50%, transparent 75%)" }} />
        </div>

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <SectionHeading
              eyebrow="Global reach"
              title="Serving students and educators worldwide"
            />
          </div>
          {/* Aggregate stat pill */}
          <div className="flex-shrink-0 self-start sm:self-auto flex items-center gap-2.5 rounded-2xl border border-slate-200/60 dark:border-white/8 bg-white/70 dark:bg-[#1a1727]/50 px-4 py-3 shadow-sm backdrop-blur-md">
            <div className="text-right">
              <p className="text-xl font-black bg-gradient-to-r from-[#189b9b] to-[#4e4260] bg-clip-text text-transparent leading-none">835k+</p>
              <p className="mt-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">active learners</p>
            </div>
            <div className="h-8 w-px bg-slate-200/80 dark:bg-white/10" />
            <div className="text-right">
              <p className="text-xl font-black bg-gradient-to-r from-[#fc9438] to-[#d8a444] bg-clip-text text-transparent leading-none">50+</p>
              <p className="mt-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">countries</p>
            </div>
          </div>
        </div>

        {/* Region cards */}
        <div className="mt-16 lg:mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { region: "North America", users: "240k+", countries: "USA, Canada, Mexico", flag: "🌎", color: "from-[#189b9b]" },
            { region: "Europe", users: "180k+", countries: "UK, Germany, France, Spain", flag: "🌍", color: "from-[#4e4260]" },
            { region: "Asia-Pacific", users: "320k+", countries: "India, Singapore, Australia, Japan", flag: "🌏", color: "from-[#fc9438]" },
            { region: "Middle East & Africa", users: "95k+", countries: "UAE, Saudi Arabia, South Africa", flag: "🌍", color: "from-[#189b9b]" },
          ].map((region) => (
            <div
              key={region.region}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/60 dark:border-white/8 bg-white/70 dark:bg-[#1a1727]/40 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:border-[#189b9b]/25 dark:hover:border-[#189b9b]/15"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#189b9b]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />

              {/* Top accent */}
              <div className={`absolute top-0 left-6 right-6 h-[2px] rounded-b-full bg-gradient-to-r ${region.color} to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-60`} />

              {/* Region label + flag */}
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#189b9b]">{region.region}</p>
                <span className="text-base leading-none opacity-60 group-hover:opacity-100 transition-opacity duration-300">{region.flag}</span>
              </div>

              {/* Big number */}
              <div className="mt-5">
                <p className={`text-4xl font-black bg-gradient-to-r ${region.color} to-[#4e4260] bg-clip-text text-transparent leading-none`}>
                  {region.users}
                </p>
                <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-slate-400">learners</p>
              </div>

              {/* Countries */}
              <p className="mt-4 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                {region.countries}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Why FutureMinds Wins ─────────────────────────────── */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24 animate-fade-up">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <SectionHeading
            eyebrow="Why FutureMinds wins"
            title="FutureMinds AI Guru stands apart"
            description="Compare the next generation of AI-powered learning with conventional platforms."
          />
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#189b9b]/25 bg-[#189b9b]/8 px-3.5 py-1.5 text-[11px] font-semibold text-[#189b9b]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#189b9b]" />
            Trusted by 835k+ learners worldwide
          </div>
        </div>

        {/* Comparison Table Wrapper */}
        <div className="overflow-x-auto -mx-2 px-2">
          <div className="min-w-[640px] rounded-[2.5rem] border border-slate-200/60 dark:border-white/8 bg-white/70 dark:bg-[#1a1727]/40 shadow-sm backdrop-blur-md overflow-hidden">

            {/* Column Header Row */}
            <div className="grid grid-cols-[1.6fr_1fr_1fr_1fr] border-b border-slate-200/60 dark:border-white/8">
              {/* Capability label */}
              <div className="px-6 py-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">Capability</span>
              </div>

              {/* FutureMinds AI Guru — highlighted column */}
              <div className="relative px-4 py-4 bg-gradient-to-b from-[#189b9b]/14 to-[#189b9b]/7 border-x-2 border-[#189b9b]/30 flex flex-col items-center gap-1.5">
                {/* Top accent bar */}
                <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-[#189b9b] via-[#fc9438] to-[#189b9b]" />
                <span className="inline-flex items-center gap-1 rounded-full bg-[#189b9b] px-2.5 py-0.5 text-[10px] font-bold text-white tracking-wide">
                  ✦ Best choice
                </span>
                <p className="text-[13px] font-extrabold text-slate-800 dark:text-white text-center leading-tight">FutureMinds AI Guru</p>
              </div>

              {/* Other EdTech Platforms */}
              <div className="px-4 py-4 flex flex-col items-center justify-center border-r border-slate-200/60 dark:border-white/8">
                <p className="text-[13px] font-semibold text-slate-400 dark:text-slate-500 text-center leading-tight">Other EdTech Platforms</p>
              </div>

              {/* Traditional Coaching / YouTube */}
              <div className="px-4 py-4 flex flex-col items-center justify-center">
                <p className="text-[13px] font-semibold text-slate-400 dark:text-slate-500 text-center leading-tight">Traditional Coaching / YouTube</p>
              </div>
            </div>

            {/* Data Rows */}
            {[
              {
                capability: "AI Personal Tutor",
                fm: { icon: "check", label: "24/7 adaptive tutor" },
                other: { icon: "warn", label: "Limited chatbots" },
                yt: { icon: "cross", label: "No personalization" },
              },
              {
                capability: "Personalized Learning Path",
                fm: { icon: "check", label: "Adapts to each student" },
                other: { icon: "warn", label: "Basic recommendations" },
                yt: { icon: "cross", label: "One-size-fits-all" },
              },
              {
                capability: "Student + Teacher + Parent Dashboard",
                fm: { icon: "check", label: "Complete ecosystem" },
                other: { icon: "warn", label: "Usually student-focused" },
                yt: { icon: "cross", label: "No connected ecosystem" },
              },
              {
                capability: "Gamification & Rewards",
                fm: { icon: "check", label: "XP, badges, streaks" },
                other: { icon: "warn", label: "Available in some apps" },
                yt: { icon: "cross", label: "No progress motivation" },
              },
              {
                capability: "Progress Analytics",
                fm: { icon: "check", label: "Real-time insights" },
                other: { icon: "warn", label: "Basic reports" },
                yt: { icon: "cross", label: "No structured tracking" },
              },
              {
                capability: "Real-world Projects",
                fm: { icon: "check", label: "Hands-on learning" },
                other: { icon: "warn", label: "Limited availability" },
                yt: { icon: "cross", label: "Mostly passive learning" },
              },
              {
                capability: "Learn Anytime",
                fm: { icon: "check", label: "Available 24/7" },
                other: { icon: "check", label: "Available anytime" },
                yt: { icon: "warn", label: "Depends on schedules" },
              },
              {
                capability: "Instant Doubt Solving",
                fm: { icon: "check", label: "AI-powered assistance" },
                other: { icon: "warn", label: "Limited support" },
                yt: { icon: "cross", label: "Need to wait for classes" },
              },
              {
                capability: "Parent Visibility",
                fm: { icon: "check", label: "Dedicated parent dashboard" },
                other: { icon: "warn", label: "Limited" },
                yt: { icon: "cross", label: "Very limited" },
              },
            ].map((row, rowIdx) => {
              const renderCell = (cell: { icon: string; label: string }, isHighlighted = false) => {
                const iconMap = {
                  check: (
                    <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#189b9b]/15">
                      <Check className="h-3 w-3 text-[#189b9b]" strokeWidth={3} />
                    </span>
                  ),
                  warn: (
                    <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-400/15">
                      <AlertTriangle className="h-3 w-3 text-amber-500" strokeWidth={2.5} />
                    </span>
                  ),
                  cross: (
                    <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-red-100 dark:bg-red-400/15">
                      <X className="h-3 w-3 text-red-500" strokeWidth={2.5} />
                    </span>
                  ),
                };
                return (
                  <div className={cn("flex items-center gap-2 px-4 py-2.5", isHighlighted && "bg-[#189b9b]/6 dark:bg-[#189b9b]/10")}>
                    {iconMap[cell.icon as keyof typeof iconMap]}
                    <span className={cn("text-[12.5px] leading-snug", isHighlighted ? "font-semibold text-slate-700 dark:text-slate-200" : "text-slate-500 dark:text-slate-400")}>
                      {cell.label}
                    </span>
                  </div>
                );
              };

              return (
                <div
                  key={row.capability}
                  className={cn(
                    "grid grid-cols-[1.6fr_1fr_1fr_1fr] transition-colors duration-150 hover:bg-slate-50/60 dark:hover:bg-white/[0.02]",
                    rowIdx < 8 ? "border-b border-slate-200/50 dark:border-white/6" : ""
                  )}
                >
                  {/* Capability name */}
                  <div className="px-6 py-2.5 flex items-center">
                    <span className="text-[12.5px] font-medium text-slate-600 dark:text-slate-300 leading-snug">{row.capability}</span>
                  </div>

                  {/* FutureMinds column — highlighted */}
                  <div className="border-x-2 border-[#189b9b]/25 dark:border-[#189b9b]/30">
                    {renderCell(row.fm, true)}
                  </div>

                  {/* Other EdTech */}
                  <div className="border-r border-slate-200/50 dark:border-white/6">
                    {renderCell(row.other)}
                  </div>

                  {/* YouTube / Coaching */}
                  <div>
                    {renderCell(row.yt)}
                  </div>
                </div>
              );
            })}

            {/* Footer CTA strip */}
            <div className="border-t border-slate-200/60 dark:border-white/8 bg-slate-50/60 dark:bg-white/[0.02] px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-[#d8a444] text-[#d8a444]" />
                  ))}
                </div>
                <span className="text-[12.5px] font-medium text-slate-500 dark:text-slate-400">
                  Rated <span className="font-semibold text-slate-700 dark:text-slate-200">5.0</span> by learners, teachers &amp; parents
                </span>
              </div>
              <a
                href="/signup"
                className="inline-flex items-center gap-1.5 rounded-full border border-[#189b9b] bg-[#189b9b] px-5 py-2 text-[13px] font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#148282] hover:border-[#148282] hover:shadow-md flex-shrink-0"
              >
                Get started free
                <span aria-hidden="true" className="text-white/70 text-sm">→</span>
              </a>
            </div>
          </div>
        </div>{/* end overflow-x-auto */}

        {/* Mobile hint */}
        <p className="mt-4 text-center text-xs text-slate-400 dark:text-slate-500 sm:hidden">
          Scroll horizontally to see the full comparison &harr;
        </p>
      </section>

      {/* ── Compliance ─────────────────────────────────────── */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <SectionHeading
          eyebrow="Compliance & security"
          title="Enterprise-grade protection and transparency"
          description="FERPA, GDPR, and COPPA compliant with SOC 2 Type II certification and annual security audits."
        />
        <div className="mt-16 lg:mt-20 rounded-[2.5rem] bg-white/60 dark:bg-[#1a1727]/30 border border-slate-200/40 dark:border-white/5 p-8 backdrop-blur-md shadow-sm grid gap-10 lg:gap-12 md:grid-cols-3">
          {[
            { title: "Data Privacy", items: ["GDPR Compliant", "FERPA Certified", "COPPA Compliant", "End-to-end Encryption"] },
            { title: "Security Standards", items: ["SOC 2 Type II", "ISO 27001", "Regular Penetration Testing", "99.9% Uptime SLA"] },
            { title: "Accessibility", items: ["WCAG 2.1 AA", "Multi-language Support", "Screen Reader Compatible", "Keyboard Navigation"] },
          ].map((section, idx) => (
            <div key={section.title} className={cn(
              "p-4",
              idx > 0 ? "md:border-l md:border-slate-200/60 md:dark:border-white/5 md:pl-8" : ""
            )}>
              <h3 className="text-lg font-bold text-ink">{section.title}</h3>
              <ul className="mt-5 space-y-2.5">
                {section.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-500 dark:text-slate-400">
                    <span className="mt-2 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#189b9b]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── Contact / Get in Touch ───────────────────────────── */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:py-24 lg:px-10">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#32284a] via-[#1e1930] to-[#131020] shadow-[0_32px_80px_rgba(0,0,0,0.55)]">

          {/* Ambient glow layers */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-0">
            <div className="absolute -top-40 -left-40 h-[32rem] w-[32rem] rounded-full opacity-[0.16] blur-[100px]" style={{ background: "radial-gradient(circle, #189b9b, transparent 70%)" }} />
            <div className="absolute -bottom-24 right-0 h-[26rem] w-[26rem] rounded-full opacity-[0.12] blur-[90px]" style={{ background: "radial-gradient(circle, #fc9438, transparent 70%)" }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[40rem] w-[40rem] rounded-full opacity-[0.06] blur-[130px]" style={{ background: "radial-gradient(circle, #7c5cbf, transparent 65%)" }} />
          </div>

          {/* Smooth inner vignette */}
          <div aria-hidden="true" className="absolute inset-0 -z-0" style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(24,155,155,0.04) 0%, transparent 70%)" }} />

          <div className="relative z-10 grid gap-0 lg:grid-cols-2">

            {/* ─── LEFT: Role-based contact options ─────────────── */}
            <div className="px-8 py-14 lg:px-14 lg:py-20 border-b border-white/[0.06] lg:border-b-0 lg:border-r lg:border-white/[0.06]">
              {/* Section label */}
              <div className="inline-flex items-center rounded-full bg-[#fc9438]/10 border border-[#fc9438]/20 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#fc9438]">
                Get in touch
              </div>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                We&apos;re here for<br className="hidden sm:block" /> every learner
              </h2>
              <p className="mt-4 text-sm leading-[1.85] text-white/65 max-w-md">
                Whether you&apos;re a student exploring AI learning, a parent tracking progress, or a school looking to partner &mdash; we&apos;d love to hear from you.
              </p>

              {/* Role-based contact cards */}
              <div className="mt-10 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                {[
                  {
                    role: "Student",
                    icon: "🎓",
                    desc: "Explore AI-powered courses and personalized learning paths.",
                    color: "#189b9b",
                    bg: "rgba(24,155,155,0.10)",
                    border: "rgba(24,155,155,0.25)",
                  },
                  {
                    role: "Parent",
                    icon: "👨‍👩‍👧",
                    desc: "Track your child's progress and stay connected to their growth.",
                    color: "#fc9438",
                    bg: "rgba(252,148,56,0.10)",
                    border: "rgba(252,148,56,0.25)",
                  },
                  {
                    role: "Teacher / School",
                    icon: "🏫",
                    desc: "Access classroom tools, analytics, and curriculum integrations.",
                    color: "#7c5cbf",
                    bg: "rgba(124,92,191,0.10)",
                    border: "rgba(124,92,191,0.25)",
                  },
                  {
                    role: "Partnership",
                    icon: "🤝",
                    desc: "Explore institutional licensing and strategic EdTech partnerships.",
                    color: "#d8a444",
                    bg: "rgba(216,164,68,0.10)",
                    border: "rgba(216,164,68,0.25)",
                  },
                ].map((item) => (
                  <div
                    key={item.role}
                    className="group flex flex-col gap-2.5 rounded-2xl p-4 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                    style={{ background: item.bg, border: `1px solid ${item.border}` }}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-xl leading-none">{item.icon}</span>
                      <p className="text-sm font-bold text-white">{item.role}</p>
                    </div>
                    <p className="text-[12px] leading-relaxed text-white/55 group-hover:text-white/75 transition-colors duration-200">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Trust badges */}
              <div className="mt-10 flex flex-wrap items-center gap-3">
                {["GDPR Compliant", "SOC 2 Type II", "FERPA Certified"].map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.12] bg-white/[0.06] px-3 py-1 text-[11px] font-medium text-white/60"
                  >
                    <span className="h-1 w-1 rounded-full bg-[#189b9b]" />
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* ─── RIGHT: Contact form ──────────────────────────── */}
            <ContactForm />

          </div>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────── */}
      <footer className="relative z-10 border-t border-slate-200/80 dark:border-white/8 bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-5">
            {[
              { heading: "Company", links: [{ label: "About Us", href: "#" }, { label: "Careers", href: "#" }, { label: "Blog", href: "#" }, { label: "Press", href: "#" }] },
              { heading: "Product", links: [{ label: "Features", href: "#features" }, { label: "Modules", href: "/modules" }, { label: "Pricing", href: "#" }, { label: "API Docs", href: "#" }] },
              { heading: "Resources", links: [{ label: "Help Center", href: "#" }, { label: "Community", href: "#" }, { label: "Webinars", href: "#" }, { label: "Contact", href: "#" }] },
              { heading: "Legal", links: [{ label: "Terms of Service", href: "#" }, { label: "Privacy Policy", href: "#" }, { label: "Cookie Policy", href: "#" }, { label: "Compliance", href: "#" }] },
              { heading: "Connect", links: [{ label: "Twitter", href: "#" }, { label: "LinkedIn", href: "#" }, { label: "GitHub", href: "#" }, { label: "Discord", href: "#" }] },
            ].map(({ heading, links }) => (
              <div key={heading}>
                <p className="text-sm font-semibold text-ink">{heading}</p>
                <ul className="mt-4 space-y-2.5">
                  {links.map(({ label, href }) => (
                    <li key={label}>
                      <a href={href} className="text-sm text-slate-500 hover:text-[#189b9b] transition-colors">{label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-14 border-t border-slate-200/70 dark:border-white/8 pt-8">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <p className="text-xs text-slate-400">© 2026 FutureMinds AI Labs, Inc. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="text-xs text-slate-400 hover:text-slate-600 transition-colors">SOC 2 Certified</a>
                <a href="#" className="text-xs text-slate-400 hover:text-slate-600 transition-colors">GDPR Compliant</a>
                <a href="#" className="text-xs text-slate-400 hover:text-slate-600 transition-colors">FERPA Compliant</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}