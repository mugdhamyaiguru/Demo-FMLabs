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
      <div className="space-y-6 w-full max-w-none">
        {/* Header */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between border-b border-slate-200/40 dark:border-white/5 pb-6 mb-2">
          <SectionHeading eyebrow="Analytics" title="Learning progress at a glance" />
          <button className="inline-flex items-center gap-2 rounded-full bg-royal px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#3d3252] hover:-translate-y-0.5">
            <Download className="h-4 w-4" /> Download report
          </button>
        </div>

        {/* Top Console: Streak Heatmap, Skill Distribution, Badges */}
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-[minmax(0,_1.2fr)_auto_minmax(0,_0.8fr)_auto_minmax(0,_1.1fr)] rounded-[2.5rem] bg-white/40 dark:bg-[#1a1727]/30 border border-slate-200/20 dark:border-white/5 p-8 backdrop-blur-md">
          
          {/* Enhanced Streak Heatmap */}
          <div className="space-y-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-bold text-ink">Streak Heatmap</h3>
                <Flame className="h-5 w-5 text-marigold" />
              </div>
              
              <div className="space-y-2">
                {/* Day Labels */}
                <div className="grid grid-cols-7 gap-2 text-center text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>
                </div>

                {/* Heatmap Blocks */}
                <div className="grid grid-cols-7 gap-2">
                  {Array.from({ length: 35 }).map((_, index) => {
                    const dayNum = index + 1;
                    let xp = 0;
                    let bg = "bg-royal/5 dark:bg-white/5";
                    let status = "No activity";

                    if (index % 5 === 0) {
                      xp = 250 + (index * 5);
                      bg = "bg-teal";
                      status = "Goal Completed";
                    } else if (index % 3 === 0) {
                      xp = 80 + (index * 3);
                      bg = "bg-marigold/80";
                      status = "Practice Session";
                    }

                    return (
                      <div
                        key={index}
                        title={`Day ${dayNum}: ${xp} XP (${status})`}
                        className={`h-5 rounded-md ${bg} cursor-pointer transition-all duration-200 hover:scale-110`}
                      />
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Heatmap Legend */}
            <div className="flex items-center gap-4 text-[9px] text-slate-400 font-bold justify-end mt-2 pt-2 border-t border-slate-200/20 dark:border-white/5">
              <div className="flex items-center gap-1.5">
                <div className="h-3 w-3 rounded bg-royal/5 dark:bg-white/5" />
                <span>0 XP</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="h-3 w-3 rounded bg-marigold/80" />
                <span>1 - 249 XP</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="h-3 w-3 rounded bg-teal" />
                <span>250+ XP</span>
              </div>
            </div>
          </div>

          <div className="hidden lg:block w-px bg-slate-200/30 dark:bg-white/5 h-full self-stretch" />

          {/* Skill Distribution */}
          <div className="space-y-4 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-ink">Skill Distribution</h3>
              <PieChart className="h-5 w-5 text-teal" />
            </div>
            <div className="flex items-center justify-center py-2">
              <div className="flex h-36 w-36 items-center justify-center rounded-full bg-[conic-gradient(from_120deg,_#189B9B_0_42%,_#FC9438_42%_70%,_#D8A444_70%_100%)]">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white dark:bg-[#1e1b2e] text-center shadow-sm">
                  <div>
                    <p className="text-2xl font-black text-ink">78%</p>
                    <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400">mastery</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block w-px bg-slate-200/30 dark:bg-white/5 h-full self-stretch" />

          {/* Badges Earned */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-ink">Badges Earned</h3>
              <BadgeCheck className="h-5 w-5 text-gold" />
            </div>
            <div className="space-y-1 pt-1">
              {[
                "7-Day Streak",
                "Quick Thinker",
                "Quiz Master",
                "Project Builder",
              ].map((badge) => (
                <div key={badge} className="flex items-center gap-2.5 py-2 border-b border-slate-200/20 dark:border-white/5 text-xs font-semibold text-ink">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Expanded Weekly Learning Graph (Subject Performance Removed) ── */}
        <div className="rounded-[2.5rem] bg-white/40 dark:bg-[#1a1727]/30 border border-slate-200/20 dark:border-white/5 p-8 backdrop-blur-md">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-ink">Weekly Learning Graph</h3>
              <TrendingUp className="h-5 w-5 text-teal" />
            </div>
            <p className="text-xs text-slate-400">Daily study hours logged this week</p>
            <div className="grid grid-cols-7 items-end gap-4 md:gap-6 pt-10 w-full h-40">
              {[
                { day: "Day 01", hours: "1.9", height: 38 },
                { day: "Day 02", hours: "2.7", height: 54 },
                { day: "Day 03", hours: "3.2", height: 64 },
                { day: "Day 04", hours: "3.6", height: 72 },
                { day: "Day 05", hours: "2.8", height: 56 },
                { day: "Day 06", hours: "4.0", height: 80 },
                { day: "Day 07", hours: "4.5", height: 90 },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center gap-2 h-full justify-end">
                  {/* Bar Wrapper Container */}
                  <div
                    className="w-full relative group cursor-pointer"
                    style={{ height: `${item.height}%` }}
                  >
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-20">
                      <div className="bg-slate-900/95 dark:bg-slate-800/95 text-white text-[10px] font-bold px-2.5 py-1.5 rounded-lg shadow-xl border border-white/10 backdrop-blur-sm whitespace-nowrap text-center">
                        {item.hours} hrs
                      </div>
                      <div className="w-1.5 h-1.5 bg-slate-900/95 dark:bg-slate-800/95 border-r border-b border-white/10 rotate-45 absolute -bottom-0.5 left-1/2 -translate-x-1/2" />
                    </div>

                    {/* Bar */}
                    <div
                      className="w-full h-full rounded-t-xl bg-[#14B8A6] hover:bg-[#20d4bf] hover:shadow-[0_0_15px_#14B8A6] hover:scale-[1.02] transition-all duration-300 animate-bar-grow"
                      style={{ animationDelay: `${index * 80}ms` }}
                    />
                  </div>
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{item.day}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom Console: Weak Topics & Leaderboard ── */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] rounded-[2.5rem] bg-white/40 dark:bg-[#1a1727]/30 border border-slate-200/20 dark:border-white/5 p-8 backdrop-blur-md">
          {/* Weak Topics */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-ink">Weak Topics</h3>
              <AlertTriangle className="h-5 w-5 text-crimson" />
            </div>
            {weakTopics.length > 0 ? (
              <div className="flex flex-col gap-3 pt-2">
                {weakTopics.map((topic) => (
                  <div key={topic} className="flex items-center gap-2.5 text-sm font-semibold text-ink">
                    <span className="h-2 w-2 rounded-full bg-crimson" />
                    <span>{topic}</span>
                  </div>
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
          </div>

          <div className="hidden md:block w-px bg-slate-200/30 dark:bg-white/5 h-full self-stretch" />

          {/* Leaderboard Ranking */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-ink">Leaderboard Ranking</h3>
              <Trophy className="h-5 w-5 text-gold" />
            </div>
            {leaderboardRows.length > 0 ? (
              <div className="space-y-1">
                {leaderboardRows.map(([rank, name, xp]) => (
                  <div key={name} className="flex items-center justify-between py-2.5 border-b border-slate-200/20 dark:border-white/5 text-xs font-semibold">
                    <span className="text-ink font-bold">{rank}</span>
                    <span className="text-ink font-medium">{name}</span>
                    <span className="text-slate-500 font-semibold">{xp}</span>
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
          </div>
        </div>
      </div>
    </AppShell>
  );
}