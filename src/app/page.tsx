import type { Metadata } from "next";
import { Award, BadgeCheck, Brain, ClipboardList, GraduationCap, LayoutDashboard, ShieldCheck, Sparkles, Users } from "lucide-react";
import { BrandMark, FeatureBadge, FloatingOrbs, GlassCard, PrimaryButton, SecondaryButton, SectionHeading, SimpleList, Pill } from "@/components/platform";
import { featureCards, testimonials } from "@/lib/mock-data";

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
    <main className="relative overflow-hidden">
      <FloatingOrbs />

      {/* ── Header ─────────────────────────────────────────── */}
      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <BrandMark />
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-500 md:flex">
          <a href="#features" className="transition-colors hover:text-teal">Features</a>
          <a href="#about" className="transition-colors hover:text-teal">About</a>
          <a href="/login" className="transition-colors hover:text-teal">Login</a>
          <a href="/signup" className="rounded-full bg-royal px-5 py-2 text-sm text-white transition-all hover:-translate-y-0.5 hover:bg-[#3d3252]">
            Signup
          </a>
        </nav>
      </header>

      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-16 pt-8 lg:px-10 lg:pb-24 lg:pt-12">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-9">
            <div className="flex flex-wrap gap-2.5">
              <Pill tone="teal">AI-powered learning</Pill>
              <Pill tone="marigold">Gamified progress</Pill>
              <Pill tone="gold">Premium MVP demo</Pill>
            </div>

            <div className="space-y-5">
              <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-[3.25rem] lg:leading-[1.18]">
                FutureMinds AI Guru
              </h1>
              <p className="max-w-xl text-base leading-7 text-slate-500 sm:text-lg">
                Personalized AI-powered learning for the next generation.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <PrimaryButton href="/signup">Get Started</PrimaryButton>
              <SecondaryButton href="/modules">Explore Modules</SecondaryButton>
            </div>

            {/* Stats row */}
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { value: "92%", label: "module completion" },
                { value: "1.2k", label: "XP earned daily" },
                { value: "3 roles", label: "student, teacher, parent" },
              ].map((stat) => (
                <GlassCard key={stat.label} className="p-5">
                  <p className="text-2xl font-bold text-ink">{stat.value}</p>
                  <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Feature card */}
          <div className="relative">
            <div className="absolute -left-6 top-8 h-24 w-24 rounded-full bg-teal/20 blur-3xl" />
            <div className="absolute right-8 top-0 h-24 w-24 rounded-full bg-marigold/20 blur-3xl" />
            <GlassCard className="grid-glass relative overflow-hidden p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal">AI learning ecosystem</p>
                  <h2 className="mt-2 text-xl font-bold text-ink">Everything connected in one place</h2>
                </div>
                <div className="flex-shrink-0 rounded-2xl bg-royal px-3.5 py-2 text-xs font-semibold text-white shadow-md">
                  Live demo
                </div>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-gradient-to-br from-royal to-[#6f5a88] p-5 text-white shadow-glass">
                  <Brain className="h-8 w-8 text-marigold" />
                  <p className="mt-4 text-base font-semibold">Smart tutor</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">
                    Guided hints, adaptive recommendations, and confidence-building practice.
                  </p>
                </div>
                <div className="rounded-3xl bg-white dark:bg-[#1e1b2e] p-5 shadow-lg dark:shadow-none dark:border dark:border-white/8">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-400">Today's streak</span>
                    <Sparkles className="h-4 w-4 text-teal" />
                  </div>
                  <p className="mt-5 text-3xl font-bold text-ink">7</p>
                  <p className="mt-1 text-sm text-slate-400">days and counting</p>
                  <div className="mt-4 h-2 rounded-full bg-royal/8 dark:bg-white/10">
                    <div className="h-2 w-[78%] rounded-full bg-gradient-to-r from-teal to-marigold" />
                  </div>
                </div>
                <div className="rounded-3xl bg-white dark:bg-[#1e1b2e] p-5 shadow-lg dark:shadow-none dark:border dark:border-white/8 sm:col-span-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <Pill tone="teal">Student</Pill>
                    <Pill tone="gold">Teacher</Pill>
                    <Pill tone="crimson">Parent</Pill>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-slate-500 dark:text-slate-400">
                    Role-aware experiences keep each learner, educator, and parent focused on what matters most.
                  </p>
                </div>
              </div>
            </GlassCard>
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
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {[
            { title: "Students", description: "Continue learning, earn XP, and jump into quests and AI tutoring.", icon: <GraduationCap className="h-6 w-6" /> },
            { title: "Teachers", description: "Track attendance, assignment completion, and class-level performance.", icon: <BadgeCheck className="h-6 w-6" /> },
            { title: "Parents", description: "Understand progress, weak topics, and recent achievements with ease.", icon: <ShieldCheck className="h-6 w-6" /> },
          ].map((item) => (
            <GlassCard key={item.title} className="p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-royal/8 text-royal">{item.icon}</div>
              <h3 className="mt-5 text-lg font-bold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">{item.description}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* ── Testimonials ───────────────────────────────────── */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <SectionHeading eyebrow="Testimonials" title="Feels polished enough for a demo, useful enough for a product review" />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {testimonials.map((item) => (
            <GlassCard key={item.name} className="p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal">{item.role}</p>
              <p className="mt-4 text-base leading-7 text-ink">"{item.quote}"</p>
              <p className="mt-5 text-sm font-semibold text-royal">{item.name}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* ── Partners ───────────────────────────────────────── */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <SectionHeading
          eyebrow="Strategic partners"
          title="Trusted by leading educational institutions globally"
          description="FutureMinds AI Guru partners with schools, universities, and education platforms to transform learning."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-4">
          {[
            { name: "Global EdTech Alliance", logo: "GEA" },
            { name: "International School Network", logo: "ISN" },
            { name: "AI Learning Consortium", logo: "ALC" },
            { name: "Future Educators Foundation", logo: "FEF" },
          ].map((partner) => (
            <GlassCard key={partner.name} className="flex items-center justify-center p-7">
              <div className="flex flex-col items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal/10 text-teal text-sm font-bold">
                  {partner.logo}
                </div>
                <p className="text-center text-sm font-medium text-ink">{partner.name}</p>
              </div>
            </GlassCard>
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
        <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-4">
          {[
            { region: "North America", users: "240k+", countries: "USA, Canada, Mexico" },
            { region: "Europe", users: "180k+", countries: "UK, Germany, France, Spain" },
            { region: "Asia-Pacific", users: "320k+", countries: "India, Singapore, Australia, Japan" },
            { region: "Middle East & Africa", users: "95k+", countries: "UAE, Saudi Arabia, South Africa" },
          ].map((region) => (
            <GlassCard key={region.region} className="p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-teal">{region.region}</p>
              <p className="mt-3 text-xl font-bold text-ink">{region.users}</p>
              <p className="mt-1.5 text-xs leading-5 text-slate-400">{region.countries}</p>
            </GlassCard>
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
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            { title: "Data Privacy", items: ["GDPR Compliant", "FERPA Certified", "COPPA Compliant", "End-to-end Encryption"] },
            { title: "Security Standards", items: ["SOC 2 Type II", "ISO 27001", "Regular Penetration Testing", "99.9% Uptime SLA"] },
            { title: "Accessibility", items: ["WCAG 2.1 AA", "Multi-language Support", "Screen Reader Compatible", "Keyboard Navigation"] },
          ].map((section) => (
            <GlassCard key={section.title} className="p-7">
              <h3 className="text-base font-semibold text-ink">{section.title}</h3>
              <ul className="mt-5 space-y-2.5">
                {section.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-500 dark:text-slate-400">
                    <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal" />
                    {item}
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────── */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-8 lg:px-10">
        <div className="flex flex-col gap-8 overflow-hidden rounded-3xl bg-gradient-to-br from-[#3a2f55] via-royal to-[#2d2445] px-8 py-12 shadow-glass lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/50">Start the demo</p>
            <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
              Launch FutureMinds AI Guru for students, teachers, and parents.
            </h2>
            <p className="mt-3 text-sm leading-7 text-white/65">
              Jump into the experience, explore the modules, and move through the role-based flows exactly as a product demo should.
            </p>
          </div>
          <div className="flex flex-shrink-0 flex-wrap gap-3">
            <PrimaryButton href="/signup" className="bg-white !text-royal hover:bg-surface">Get Started</PrimaryButton>
            <SecondaryButton href="/modules" className="border-white/20 bg-white/10 !text-white hover:border-white hover:text-white">
              Explore Modules
            </SecondaryButton>
          </div>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────── */}
      <footer className="relative z-10 border-t border-slate-200/80 dark:border-white/8 bg-white/60 dark:bg-[#12101e]/90 backdrop-blur">
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
                      <a href={href} className="text-sm text-slate-500 dark:text-slate-400 hover:text-teal transition-colors">{label}</a>
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
                <a href="#" className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors">SOC 2 Certified</a>
                <a href="#" className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors">GDPR Compliant</a>
                <a href="#" className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors">FERPA Compliant</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}