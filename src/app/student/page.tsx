import { BadgeCheck, Bell, BookOpen, Flame, GraduationCap, Search, ShieldCheck, Sparkles, Trophy, Users } from "lucide-react";
import { AppShell, RightRail } from "@/components/page-shell";
import { GlassCard, MetricCard, Pill, ProgressBar } from "@/components/platform";
import { dashboardModules, leaderboard, studentBadges } from "@/lib/mock-data";
import { AnimatedCount } from "@/components/animated-count";

export default function StudentDashboardPage() {
  return (
    <AppShell active="Dashboard" title="Student Dashboard" rightPanel={<RightRail />}>
      <div className="space-y-10 max-w-4xl">
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard title="Current Level" value="12" detail="85 XP to next level" icon={<Sparkles className="h-5 w-5" />} />
          <MetricCard title="Streak" value="7 days" detail="Complete 1 quiz today" icon={<Flame className="h-5 w-5" />} />
          <MetricCard title="XP Earned" value={<AnimatedCount end={1240} />} detail="This week" icon={<Trophy className="h-5 w-5" />} />
          <MetricCard title="Quizzes" value="18" detail="87% accuracy" icon={<BadgeCheck className="h-5 w-5" />} />
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <GlassCard className="p-8">
            <Pill tone="teal">Continue Learning</Pill>
            <h3 className="mt-6 text-3xl font-black text-ink">Fractions Lab</h3>
            <p className="mt-4 text-base leading-7 text-slate-600">Resume your last lesson and keep momentum with short, focused practice blocks.</p>
            <div className="mt-8 flex items-center justify-between text-sm">
              <span className="text-slate-600">72% complete</span>
              <span className="font-bold text-teal">Resume last lesson</span>
            </div>
            <div className="mt-5"><ProgressBar value={72} /></div>
          </GlassCard>
          <GlassCard className="p-8">
            <Pill tone="marigold">Daily Challenge</Pill>
            <h3 className="mt-6 text-3xl font-black text-ink">Complete 1 quiz today</h3>
            <p className="mt-4 text-base leading-7 text-slate-600">Finish a quick quiz to keep your streak active and unlock bonus XP.</p>
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div className="rounded-2xl bg-surface p-5"><Search className="mx-auto mb-3 h-6 w-6 text-teal" /><span className="text-xs font-semibold text-slate-600">Search</span></div>
              <div className="rounded-2xl bg-surface p-5"><BookOpen className="mx-auto mb-3 h-6 w-6 text-marigold" /><span className="text-xs font-semibold text-slate-600">Learn</span></div>
              <div className="rounded-2xl bg-surface p-5"><ShieldCheck className="mx-auto mb-3 h-6 w-6 text-crimson" /><span className="text-xs font-semibold text-slate-600">Earn</span></div>
            </div>
          </GlassCard>
        </div>

        <GlassCard className="p-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <Pill tone="gold">Recommended Modules</Pill>
              <h3 className="mt-4 text-3xl font-black text-ink">Next up in your learning path</h3>
            </div>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {dashboardModules.slice(0, 4).map((module) => (
              <div key={module.title} className="rounded-3xl border border-royal/10 bg-white p-6 shadow-sm transition-transform hover:-translate-y-1">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <Pill tone={module.subject === "Mathematics" ? "teal" : module.subject === "Science" ? "marigold" : "gold"}>{module.subject}</Pill>
                    <h4 className="mt-4 text-lg font-bold text-ink">{module.title}</h4>
                  </div>
                  <div className="rounded-2xl bg-royal/10 p-3 text-royal flex-shrink-0"><Users className="h-5 w-5" /></div>
                </div>
                <div className="mt-5 flex items-center justify-between text-xs text-slate-600 font-medium">
                  <span>{module.difficulty}</span>
                  <span>{module.xp} XP</span>
                  <span>{module.time}</span>
                </div>
                <div className="mt-5"><ProgressBar value={module.progress} /></div>
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard className="p-8">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-black text-ink">Achievement Badges</h3>
            <Trophy className="h-5 w-5 text-gold" />
          </div>
          <div className="mt-7 grid grid-cols-2 gap-5 sm:grid-cols-4">
            {studentBadges.slice(0, 8).map((badge) => (
              <div key={badge.name} className="rounded-3xl border border-royal/10 bg-gradient-to-br from-white to-surface p-6 text-center shadow-sm">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <BadgeCheck className="h-6 w-6" />
                </div>
                <p className="mt-4 text-xs font-semibold text-ink">{badge.name}</p>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </AppShell>
  );
}