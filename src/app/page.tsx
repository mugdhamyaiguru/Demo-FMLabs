import type { Metadata } from "next";
import { 
  Award, 
  BadgeCheck, 
  Brain, 
  ClipboardList, 
  Flame, 
  GraduationCap, 
  LayoutDashboard, 
  ShieldCheck, 
  Sparkles, 
  Trophy, 
  Users, 
  Play, 
  Video, 
  BookOpen, 
  MessageSquare, 
  LineChart 
} from "lucide-react";
import { BrandMark, FeatureBadge, GlassCard, SectionHeading, SimpleList, Pill, cn } from "@/components/platform";
import { featureCards, testimonials } from "@/lib/mock-data";
import FluidBackground from "@/components/FluidBackground";
import AITutorLive from "@/components/AITutorLive";

export const metadata: Metadata = {
  title: "FutureMinds AI Labs",
  description: "A futuristic, gamified AI learning platform for students, teachers, and parents.",
  openGraph: {
    title: "FutureMinds AI Labs",
    description: "A futuristic, gamified AI learning platform for students, teachers, and parents.",
    url: "/",
    siteName: "FutureMinds AI Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FutureMinds AI Labs",
    description: "A futuristic, gamified AI learning platform for students, teachers, and parents.",
  },
};

export default function HomePage() {
  const featureIcons = {
    "AI Tutor": <Brain className="h-5 w-5" />,
    "Personalized Learning": <Sparkles className="h-5 w-5" />,
    "Progress Tracking": <ClipboardList className="h-5 w-5" />,
    Gamification: <Award className="h-5 w-5" />,
    "Teacher Dashboard": <GraduationCap className="h-5 w-5" />,
    "Parent Dashboard": <ShieldCheck className="h-5 w-5" />,
    "Real-world Projects": <LayoutDashboard className="h-5 w-5" />,
  } as const;

  return (
    <main className="relative overflow-hidden min-h-screen">
      {/* ── Header ─────────────────────────────────────────── */}
      <header className="relative z-30 mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10 bg-transparent">
        <BrandMark />
        <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex">
          <a href="#features" className="transition-colors hover:text-[#189b9b]">Features</a>
          <a href="#about" className="transition-colors hover:text-[#189b9b]">About</a>
          <a href="/login" className="transition-colors hover:text-[#189b9b]">Login</a>
          <a href="/signup" className="rounded-full bg-[#fc9438] px-6 py-2.5 text-sm font-bold text-white transition-all shadow-md hover:-translate-y-0.5 hover:bg-[#e67e22] hover:shadow-lg">
            Signup
          </a>
        </nav>
      </header>

      {/* ── Hero Section ───────────────────────────────────── */}
      <section className="relative z-10 mx-auto max-w-7xl px-4 pb-16 pt-4 sm:px-6 lg:px-8 lg:pb-24 lg:pt-6">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#2e2542] via-[#201b33] to-[#171424] text-white px-8 py-16 sm:px-12 lg:px-16 shadow-2xl">
          {/* Interactive Liquid / Fluid Canvas Background */}
          <FluidBackground />

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
                <span className="inline-flex items-center rounded-full bg-[#d8a444]/20 text-[#ffce6d] px-3.5 py-1 text-xs font-semibold border border-[#d8a444]/35">Premium MVP demo</span>
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl leading-[1.1]">
                  FutureMinds <br />
                  <span className="bg-gradient-to-r from-[#189b9b] via-[#d8a444] to-[#fc9438] bg-clip-text text-transparent animate-gradient-text bg-[length:200%_auto] font-black">
                    AI Labs
                  </span>
                </h1>
                <p className="text-base text-slate-300 sm:text-lg leading-relaxed pt-2">
                  Personalized AI-powered learning for the next generation.
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
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#189b9b]">AI LEARNING ECOSYSTEM</p>
                    <h3 className="text-xl font-bold text-white mt-1">Everything connected in one place</h3>
                  </div>
                  <div className="flex-shrink-0 rounded-2xl bg-white/10 border border-white/10 px-3.5 py-1.5 text-xs font-semibold text-white shadow-md">
                    Live demo
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

                  {/* Today's Streak Card */}
                  <div className="rounded-[2rem] bg-[#1e1b2e]/45 border border-white/10 p-5 text-white shadow-sm transition-transform duration-300 hover:scale-[1.03] flex flex-col justify-between">
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

              {/* Floating overlap card 1: Mind Map Generated (floating slow) */}
              <div className="absolute -top-10 -right-4 z-20 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#25213b]/90 p-4.5 shadow-2xl backdrop-blur-md animate-float-1 w-56 transform hover:scale-105 transition-transform duration-300">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#fc9438] to-[#e67e22] text-white shadow-md">
                  <Brain className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-black text-white">Mind Map Generated</p>
                  <p className="text-[10px] font-medium text-white/50">Just now</p>
                </div>
              </div>

              {/* Floating overlap card 2: AI Tutor Active with typewriter (floating medium) */}
              <div className="absolute top-1/2 -right-8 z-20 flex items-center gap-3.5 rounded-2xl border border-white/10 bg-[#25213b]/95 p-4 shadow-2xl backdrop-blur-md animate-float-2 w-64 transform hover:scale-105 transition-transform duration-300">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#189b9b] text-white shadow-md">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-black text-white">AI Tutor Active</p>
                  <AITutorLive />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ───────────────────────────────────────── */}
      <section id="features" className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <SectionHeading
          eyebrow="Platform features"
          title="Built to feel futuristic, vibrant, and easy to use"
          description="The interface mixes SaaS clarity, playful gamification, and student-friendly visuals to make every workflow feel engaging."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
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
      <section id="about" className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <SectionHeading
          eyebrow="How it works"
          title="A polished flow from signup to measurable progress"
          description="Students join, choose a role, explore modules, learn with quizzes and AI support, and keep momentum with streaks and badges."
        />
        <div className="mt-10">
          <SimpleList
            items={[
              { icon: <Users className="h-5 w-5" />, title: "Choose a role", description: "Student, teacher, or parent dashboards adapt to the same branded system." },
              { icon: <LayoutDashboard className="h-5 w-5" />, title: "Learn in modules", description: "Micro-lessons and interactive quizzes keep sessions short and motivating." },
              { icon: <Award className="h-5 w-5" />, title: "Earn rewards", description: "XP, badges, streaks, and leaderboard spots make growth visible." },
            ]}
          />
        </div>
      </section>

      {/* ── Role-based ─────────────────────────────────────── */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <SectionHeading
          eyebrow="Role-based learning"
          title="Every role gets a focused experience"
          description="The demo keeps the student journey immersive while still giving teachers and parents the insights they need."
        />
        <div className="mt-10 rounded-[2.5rem] bg-white/30 dark:bg-[#1a1727]/30 border border-slate-200/20 dark:border-white/5 p-8 md:p-10 backdrop-blur-md grid gap-8 lg:grid-cols-3">
          {[
            { title: "Students", description: "Continue learning, earn XP, and jump into quests and AI tutoring.", icon: <GraduationCap className="h-6 w-6" />, color: "teal" },
            { title: "Teachers", description: "Track attendance, assignment completion, and class-level performance.", icon: <BadgeCheck className="h-6 w-6" />, color: "gold" },
            { title: "Parents", description: "Understand progress, weak topics, and recent achievements with ease.", icon: <ShieldCheck className="h-6 w-6" />, color: "crimson" },
          ].map((item, idx) => (
            <div key={item.title} className={cn(
              "flex flex-col items-start gap-4 p-4 rounded-3xl transition-all duration-300 hover:bg-white/40 dark:hover:bg-white/5",
              idx > 0 ? "lg:border-l lg:border-slate-200/30 lg:dark:border-white/5 lg:pl-8" : ""
            )}>
              <div className={cn(
                "flex h-12 w-12 items-center justify-center rounded-2xl shadow-sm",
                item.color === "teal" ? "bg-[#189b9b]/10 text-[#189b9b]" :
                item.color === "gold" ? "bg-[#d8a444]/10 text-[#d8a444]" : "bg-red-500/10 text-red-500"
              )}>{item.icon}</div>
              <h3 className="text-xl font-bold text-ink">{item.title}</h3>
              <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Testimonials ───────────────────────────────────── */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <SectionHeading eyebrow="Testimonials" title="Feels polished enough for a demo, useful enough for a product review" />
        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.name} className="relative p-7 rounded-3xl border border-transparent transition-all duration-300 hover:border-slate-200/25 dark:hover:border-white/5 hover:bg-white/30 dark:hover:bg-white/5">
              <span className="absolute -top-4 -left-2 text-8xl font-serif text-[#189b9b]/10 pointer-events-none select-none">“</span>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#189b9b]">{item.role}</p>
              <p className="mt-4 text-base italic leading-relaxed text-slate-800 relative z-10">&ldquo;{item.quote}&rdquo;</p>
              <p className="mt-5 text-sm font-semibold text-[#4e4260] dark:text-purple-300">— {item.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Partners ───────────────────────────────────────── */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <SectionHeading
          eyebrow="Strategic partners"
          title="Trusted by leading educational institutions globally"
          description="FutureMinds AI Labs partners with schools, universities, and education platforms to transform learning."
        />
        <div className="mt-10 flex flex-wrap items-center justify-center gap-12 md:gap-16">
          {[
            { name: "Global EdTech Alliance", logo: "GEA" },
            { name: "International School Network", logo: "ISN" },
            { name: "AI Learning Consortium", logo: "ALC" },
            { name: "Future Educators Foundation", logo: "FEF" },
          ].map((partner) => (
            <div key={partner.name} className="flex flex-col items-center gap-3 group transition-all duration-300 hover:scale-105">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#189b9b]/5 text-[#189b9b] text-lg font-bold group-hover:bg-[#189b9b] group-hover:text-white transition-all shadow-sm">
                {partner.logo}
              </div>
              <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider text-center">{partner.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Global reach ───────────────────────────────────── */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <SectionHeading
          eyebrow="Global reach"
          title="Serving students and educators worldwide"
          description="Available in 50+ countries across 12 languages, with localized curricula and compliance standards."
        />
        <div className="mt-10 rounded-[2.5rem] bg-white/30 dark:bg-[#1a1727]/30 border border-slate-200/20 dark:border-white/5 p-8 backdrop-blur-md grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { region: "North America", users: "240k+", countries: "USA, Canada, Mexico" },
            { region: "Europe", users: "180k+", countries: "UK, Germany, France, Spain" },
            { region: "Asia-Pacific", users: "320k+", countries: "India, Singapore, Australia, Japan" },
            { region: "Middle East & Africa", users: "95k+", countries: "UAE, Saudi Arabia, South Africa" },
          ].map((region, idx) => (
            <div key={region.region} className={cn(
              "p-4 rounded-2xl transition-all duration-300 hover:bg-white/40 dark:hover:bg-white/5",
              idx > 0 ? "lg:border-l lg:border-slate-200/30 lg:dark:border-white/5 lg:pl-6" : ""
            )}>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#189b9b]">{region.region}</p>
              <p className="mt-3 text-3xl font-black bg-gradient-to-r from-[#189b9b] to-[#4e4260] bg-clip-text text-transparent">{region.users}</p>
              <p className="mt-1.5 text-xs font-semibold text-slate-400 dark:text-slate-500">{region.countries}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Compliance ─────────────────────────────────────── */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <SectionHeading
          eyebrow="Compliance & security"
          title="Enterprise-grade protection and transparency"
          description="FERPA, GDPR, and COPPA compliant with SOC 2 Type II certification and annual security audits."
        />
        <div className="mt-10 rounded-[2.5rem] bg-white/30 dark:bg-[#1a1727]/30 border border-slate-200/20 dark:border-white/5 p-8 backdrop-blur-md grid gap-8 md:grid-cols-3">
          {[
            { title: "Data Privacy", items: ["GDPR Compliant", "FERPA Certified", "COPPA Compliant", "End-to-end Encryption"] },
            { title: "Security Standards", items: ["SOC 2 Type II", "ISO 27001", "Regular Penetration Testing", "99.9% Uptime SLA"] },
            { title: "Accessibility", items: ["WCAG 2.1 AA", "Multi-language Support", "Screen Reader Compatible", "Keyboard Navigation"] },
          ].map((section, idx) => (
            <div key={section.title} className={cn(
              "p-4",
              idx > 0 ? "md:border-l md:border-slate-200/30 md:dark:border-white/5 md:pl-8" : ""
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

      {/* ── CTA ────────────────────────────────────────────── */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-8 lg:px-10">
        <div className="flex flex-col gap-8 overflow-hidden rounded-3xl bg-gradient-to-br from-[#3a2f55] via-[#201b33] to-[#171424] px-8 py-12 shadow-2xl lg:flex-row lg:items-center lg:justify-between lg:px-12 relative">
          <div className="absolute -inset-10 rounded-full bg-royal/10 blur-3xl opacity-40 -z-10" />
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#fc9438]">Start the demo</p>
            <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
              Launch FutureMinds AI Labs for students, teachers, and parents.
            </h2>
            <p className="mt-3 text-sm leading-7 text-white/65">
              Jump into the experience, explore the modules, and move through the role-based flows exactly as a product demo should.
            </p>
          </div>
          <div className="flex flex-shrink-0 flex-wrap gap-3 z-10">
            <a 
              href="/signup" 
              className="inline-flex items-center justify-center rounded-2xl bg-[#fc9438] px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e67e22]"
            >
              Get Started
            </a>
            <a 
              href="/modules" 
              className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/20"
            >
              Explore Modules
            </a>
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
              <p className="text-xs text-slate-400">© 2024–2026 FutureMinds AI Labs, Inc. All rights reserved.</p>
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