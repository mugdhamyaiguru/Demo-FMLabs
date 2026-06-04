import { BadgeCheck, Flame, GraduationCap, Search, ShieldCheck, Sparkles, Trophy, Users } from "lucide-react";
import Link from "next/link";
import { AppShell, RightRail } from "@/components/page-shell";
import { GlassCard, MetricCard, Pill, ProgressBar } from "@/components/platform";
import { dashboardModules, studentBadges } from "@/lib/mock-data";
import { AnimatedCount } from "@/components/animated-count";

export default function StudentDashboardPage() {
  return (
    <AppShell active="Dashboard" title="Student Dashboard" rightPanel={<RightRail />}>
      <div className="space-y-6 max-w-4xl">
        {/* Metric Console */}
        <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
          <MetricCard title="Current Level" value="12" detail="85 XP to next level" icon={<Sparkles className="h-5 w-5" />} />
          <MetricCard title="Streak" value="7 days" detail="Complete 1 quiz today" icon={<Flame className="h-5 w-5" />} />
          <MetricCard title="XP Earned" value={<AnimatedCount end={1240} />} detail="This week" icon={<Trophy className="h-5 w-5" />} />
          <MetricCard title="Quizzes" value="18" detail="87% accuracy" icon={<BadgeCheck className="h-5 w-5" />} />
        </div>

        {/* Priority Action Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Resume Learning */}
          <GlassCard className="p-6 flex flex-col justify-between dark:bg-[#1e1b2e]/85 dark:border-white/8">
            <div>
              <Pill tone="teal">Continue Learning</Pill>
              <h3 className="mt-4 text-2xl font-black text-ink">Fractions Lab</h3>
              <p className="mt-3 text-sm text-slate-500 leading-relaxed">Resume your last lesson and keep momentum with short, focused practice blocks.</p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200/40 dark:border-white/5">
              <div className="flex items-center justify-between text-xs font-semibold mb-2">
                <span className="text-slate-500">72% complete</span>
                <Link href="/lesson?module=Fractions%20Lab" className="text-teal hover:underline font-bold">
                  Resume last lesson
                </Link>
              </div>
              <ProgressBar value={72} accent="teal" />
            </div>
          </GlassCard>

          {/* Daily Challenge */}
          <GlassCard className="p-6 flex flex-col justify-between dark:bg-[#1e1b2e]/85 dark:border-white/8">
            <div>
              <Pill tone="marigold">Daily Challenge</Pill>
              <h3 className="mt-4 text-2xl font-black text-ink">Complete 1 quiz today</h3>
              <p className="mt-3 text-sm text-slate-500 leading-relaxed">Finish a quick quiz to keep your streak active and unlock bonus XP.</p>
            </div>
            <div className="mt-6">
              <Link 
                href="/quiz" 
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#fc9438] hover:bg-[#e67e22] px-6 py-3 text-xs font-bold text-white shadow-sm transition-all hover:-translate-y-0.5"
              >
                Start Daily Challenge
              </Link>
            </div>
          </GlassCard>
        </div>

        {/* Recommended Modules (Truncated & Linked) */}
        <div className="space-y-3">
          <div>
            <Pill tone="gold">Recommended Modules</Pill>
            <h3 className="mt-1.5 text-xl font-bold text-ink">Next up in your learning path</h3>
          </div>
          <div className="mt-3 grid gap-5 sm:grid-cols-2">
            {dashboardModules.slice(0, 2).map((module) => (
              <Link 
                key={module.title} 
                href={`/lesson?module=${encodeURIComponent(module.title)}`}
                className="group block rounded-3xl border border-slate-200/20 dark:border-white/5 bg-white/50 dark:bg-white/5 p-5 shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <Pill tone={module.subject === "Mathematics" ? "teal" : module.subject === "Science" ? "marigold" : "gold"}>
                      {module.subject}
                    </Pill>
                    <h4 className="mt-3 text-base font-bold text-ink group-hover:text-teal transition-colors">
                      {module.title}
                    </h4>
                  </div>
                  <div className="rounded-xl bg-royal/10 p-2.5 text-royal dark:bg-white/10 dark:text-teal flex-shrink-0">
                    <Users className="h-4.5 w-4.5" />
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-4 text-[10px] text-slate-500 font-semibold uppercase tracking-wider">
                  <span>{module.difficulty}</span>
                  <span>{module.xp} XP</span>
                  <span>{module.time}</span>
                </div>
                <div className="mt-4">
                  <ProgressBar value={module.progress} accent={module.subject === "Mathematics" ? "teal" : module.subject === "Science" ? "marigold" : "gold"} />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Achievement Badges (Truncated to 4) */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-ink">Recent Achievements</h3>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {studentBadges.slice(0, 4).map((badge) => (
              <div key={badge.name} className="group rounded-3xl bg-white/40 dark:bg-white/5 p-5 border border-slate-200/20 dark:border-white/5 text-center transition-all duration-300 hover:bg-white/60 dark:hover:bg-white/10 hover:shadow-md hover:scale-[1.02]">
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-gold/15 text-gold group-hover:scale-110 transition-transform duration-300">
                  <BadgeCheck className="h-5.5 w-5.5" />
                </div>
                <p className="mt-3 text-xs font-bold text-ink">{badge.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
}