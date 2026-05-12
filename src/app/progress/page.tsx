import { Download, Flame, PieChart, TrendingUp, Trophy, AlertTriangle, BadgeCheck } from "lucide-react";
import { AppShell } from "@/components/page-shell";
import { EmptyState, GlassCard, Pill, ProgressBar, SectionHeading } from "@/components/platform";

export default function ProgressPage() {
  const weakTopics = ["Fractions", "Data types", "Ecosystems"];
  const leaderboardRows = [
    ["#12", "Aanya", "1,240 XP"],
    ["#13", "Mira", "1,110 XP"],
    ["#14", "Ravi", "980 XP"],
  ];

  return (
    <AppShell active="Progress" title="Progress Dashboard">
      <div className="space-y-5">
        <div className="flex flex-col gap-4 rounded-3xl bg-white/80 p-5 shadow-glass backdrop-blur-xl lg:flex-row lg:items-center lg:justify-between">
          <SectionHeading eyebrow="Analytics" title="Learning progress at a glance" />
          <button className="inline-flex items-center gap-2 rounded-full bg-royal px-5 py-3 font-semibold text-white shadow-lg"><Download className="h-4 w-4" />Download report</button>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          <GlassCard className="p-6 lg:col-span-1">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-black text-ink">Streak Heatmap</h3>
              <Flame className="h-5 w-5 text-marigold" />
            </div>
            <div className="mt-5 grid grid-cols-7 gap-2">
              {Array.from({ length: 35 }).map((_, index) => (
                <div key={index} className={index % 5 === 0 ? "h-5 rounded-md bg-teal" : index % 3 === 0 ? "h-5 rounded-md bg-marigold/80" : "h-5 rounded-md bg-surface"} />
              ))}
            </div>
          </GlassCard>
          <GlassCard className="p-6 lg:col-span-1">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-black text-ink">Skill Distribution</h3>
              <PieChart className="h-5 w-5 text-teal" />
            </div>
            <div className="mt-6 flex items-center justify-center">
              <div className="flex h-44 w-44 items-center justify-center rounded-full bg-[conic-gradient(from_120deg,_#189B9B_0_42%,_#FC9438_42%_70%,_#D8A444_70%_100%)]">
                <div className="flex h-28 w-28 items-center justify-center rounded-full bg-white text-center">
                  <div>
                    <p className="text-3xl font-black text-ink">78%</p>
                    <p className="text-xs text-slate-500">mastery</p>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
          <GlassCard className="p-6 lg:col-span-1">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-black text-ink">Badges Earned</h3>
              <BadgeCheck className="h-5 w-5 text-gold" />
            </div>
            <div className="mt-5 space-y-3">
              {[
                "7-Day Streak",
                "Quick Thinker",
                "Quiz Master",
                "Project Builder",
              ].map((badge) => (
                <div key={badge} className="rounded-2xl bg-surface px-4 py-3 font-semibold text-ink">{badge}</div>
              ))}
            </div>
          </GlassCard>
        </div>

        <div className="grid gap-5 xl:grid-cols-2">
          <GlassCard className="p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-black text-ink">Weekly Learning Graph</h3>
              <TrendingUp className="h-5 w-5 text-teal" />
            </div>
            <div className="mt-6 grid grid-cols-7 items-end gap-3">
              {[38, 54, 64, 72, 56, 80, 90].map((height, index) => (
                <div key={index} className="flex flex-col items-center gap-2">
                  <div className="w-full rounded-t-3xl bg-gradient-to-t from-teal to-marigold" style={{ height: `${height}px` }} />
                  <span className="text-xs text-slate-500">D{index + 1}</span>
                </div>
              ))}
            </div>
          </GlassCard>
          <GlassCard className="p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-black text-ink">Subject Performance</h3>
              <Trophy className="h-5 w-5 text-gold" />
            </div>
            <div className="mt-5 space-y-4">
              {[
                ["Mathematics", 82, "teal"],
                ["Science", 76, "marigold"],
                ["Computer Basics", 69, "gold"],
              ].map(([subject, value, tone]) => (
                <div key={subject as string}>
                  <div className="mb-2 flex justify-between text-sm"><span className="text-slate-500">{subject as string}</span><span className="font-semibold text-ink">{value as number}%</span></div>
                  <ProgressBar value={value as number} accent={tone as "teal" | "gold" | "marigold"} />
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        <div className="grid gap-5 xl:grid-cols-2">
          <GlassCard className="p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-black text-ink">Weak Topics</h3>
              <AlertTriangle className="h-5 w-5 text-crimson" />
            </div>
            {weakTopics.length > 0 ? (
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {weakTopics.map((topic) => (
                  <div key={topic} className="rounded-2xl border border-crimson/10 bg-crimson/5 px-4 py-4 text-sm font-semibold text-crimson">{topic}</div>
                ))}
              </div>
            ) : (
              <div className="mt-4">
                <EmptyState
                  icon={<BadgeCheck className="h-6 w-6" />}
                  title="No weak topics right now"
                  description="As more activity comes in, this section can surface the topics that need the most attention."
                />
              </div>
            )}
          </GlassCard>
          <GlassCard className="p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-black text-ink">Leaderboard Ranking</h3>
              <Trophy className="h-5 w-5 text-gold" />
            </div>
            {leaderboardRows.length > 0 ? (
              <div className="mt-5 space-y-3">
                {leaderboardRows.map(([rank, name, xp]) => (
                  <div key={name} className="flex items-center justify-between rounded-2xl bg-surface px-4 py-3">
                    <span className="font-semibold text-ink">{rank}</span>
                    <span className="font-semibold text-ink">{name}</span>
                    <span className="text-slate-500">{xp}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-4">
                <EmptyState
                  icon={<Trophy className="h-6 w-6" />}
                  title="Leaderboard data coming soon"
                  description="This fallback keeps the ranking panel polished even when no score data is loaded yet."
                />
              </div>
            )}
          </GlassCard>
        </div>
      </div>
    </AppShell>
  );
}