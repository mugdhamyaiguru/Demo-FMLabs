import { ArrowRight, BadgeCheck, BookOpen, Flame, Trophy, Sparkles, Star, Zap, LineChart, Menu } from "lucide-react";
import Link from "next/link";
import { AppShell, RightRail } from "@/components/page-shell";
import { GlassCard, ProgressBar, cn } from "@/components/platform";
import { dashboardModules, studentBadges } from "@/lib/mock-data";

export default function StudentDashboardPage() {
  return (
    <AppShell active="Dashboard" title="Student Dashboard">
      <div className="w-full space-y-8">
        
        {/* Metric Console */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-4 py-2">
          <div className="flex flex-wrap items-center gap-6 md:gap-8 lg:gap-10 w-full justify-between animate-fade-in px-6 md:px-12">
            {/* Current Level */}
            <div className="space-y-1">
              <div className="text-3xl font-black text-ink">12</div>
              <div className="text-xs font-semibold text-slate-400">Current Level</div>
              <div className="text-[10px] font-bold text-teal">66 XP to next</div>
            </div>

            <div className="hidden md:block h-8 w-px bg-slate-200/20" />

            {/* Day Streak */}
            <div className="space-y-1">
              <div className="text-3xl font-black text-ink">7</div>
              <div className="text-xs font-semibold text-slate-400">Day Streak</div>
              <div className="text-[10px] font-bold text-amber-500">
                <span className="font-bold text-amber-500">Complete 1</span> quiz today
              </div>
            </div>

            <div className="hidden md:block h-8 w-px bg-slate-200/20" />

            {/* XP Earned */}
            <div className="space-y-1">
              <div className="text-3xl font-black text-ink">1,240</div>
              <div className="text-xs font-semibold text-slate-400">XP Earned</div>
              <div className="text-[10px] font-bold text-[#5bcac8]">This week</div>
            </div>

            <div className="hidden md:block h-8 w-px bg-slate-200/20" />

            {/* Quizzes */}
            <div className="space-y-1">
              <div className="text-3xl font-black text-ink">18</div>
              <div className="text-xs font-semibold text-slate-400">Quizzes</div>
              <div className="text-[10px] font-bold text-slate-500">87% accuracy</div>
            </div>
          </div>
        </div>

        {/* Priority Action Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Resume Learning */}
          <GlassCard className="p-6 flex flex-col justify-between dark:bg-[#151c2e]/50 dark:border-white/5">
            <div>
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-teal">
                <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse" />
                CONTINUE LEARNING
              </div>
              <h3 className="mt-4 text-2xl font-black text-ink">Fractions Lab</h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">Resume your last lesson and keep momentum with short, focused practice blocks.</p>
            </div>
            <div className="mt-6">
              <div className="flex items-center justify-between text-xs font-semibold mb-2 text-slate-400">
                <span>Progress</span>
                <span>72%</span>
              </div>
              <ProgressBar value={72} accent="teal" />
              <Link href="/lesson?module=Fractions%20Lab" className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-teal hover:underline">
                <span className="text-[10px]">▶</span> Resume last lesson
              </Link>
            </div>
          </GlassCard>

          {/* Daily Challenge */}
          <GlassCard className="p-6 flex flex-col justify-between dark:bg-[#151c2e]/50 dark:border-white/5">
            <div>
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-amber-400">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                DAILY CHALLENGE
              </div>
              <h3 className="mt-4 text-2xl font-black text-ink">Complete 1 quiz today</h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">Keep your streak active and unlock bonus XP with a quick quiz.</p>
            </div>
            <div className="mt-6">
              <Link 
                href="/quiz" 
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 px-6 py-3.5 text-xs font-bold text-white shadow-lg shadow-orange-500/10 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Start Daily Challenge</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </GlassCard>
        </div>

        {/* Recommended Modules (Show 3) */}
        <div className="space-y-4">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">RECOMMENDED MODULES</p>
              <h3 className="mt-1.5 text-xl font-bold text-ink">Next up in your learning path</h3>
            </div>
            <Link href="/modules" className="text-xs font-bold text-teal hover:underline flex items-center gap-1">
              View all <span className="text-[10px]">&gt;</span>
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {dashboardModules.slice(0, 3).map((module) => {
              const accentColor = 
                module.subject === "Mathematics" ? "purple" : 
                module.subject === "Science" ? "teal" : 
                "marigold";

              return (
                <Link 
                  key={module.title} 
                  href={`/lesson?module=${encodeURIComponent(module.title)}`}
                  className="group block rounded-3xl border border-slate-200/20 dark:border-white/5 bg-white/50 dark:bg-white/5 p-5 shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-300"
                >
                  <div className="flex flex-col gap-3">
                    {/* Subject icon container */}
                    <div className={cn(
                      "h-9 w-9 flex items-center justify-center rounded-xl flex-shrink-0",
                      module.subject === "Mathematics" ? "bg-indigo-500/15 text-indigo-400" :
                      module.subject === "Science" ? "bg-teal-500/15 text-teal-400" :
                      "bg-amber-500/15 text-amber-400"
                    )}>
                      <Menu className="h-4.5 w-4.5" />
                    </div>

                    <div>
                      {/* Subject Pill */}
                      <span className={cn(
                        "inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-bold border",
                        module.subject === "Mathematics" ? "bg-indigo-500/10 text-indigo-400 border-indigo-500/20" :
                        module.subject === "Science" ? "bg-teal-500/10 text-teal-400 border-teal-500/20" :
                        "bg-amber-500/10 text-amber-400 border-amber-500/20"
                      )}>
                        {module.subject}
                      </span>
                      
                      {/* Module Title */}
                      <h4 className="mt-2 text-base font-bold text-ink group-hover:text-teal transition-colors">
                        {module.title}
                      </h4>
                    </div>
                  </div>

                  {/* Difficulty, XP, Time */}
                  <div className="mt-4 flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                    <span>{module.difficulty}</span>
                    <span>·</span>
                    <span className="flex items-center gap-0.5 text-amber-400 font-bold">⚡ {module.xp} XP</span>
                    <span>·</span>
                    <span className="flex items-center gap-0.5">🕒 {module.time.replace(" min", "m")}</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-4">
                    <ProgressBar 
                      value={module.progress} 
                      accent={accentColor} 
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Achievement Badges (Show 6) */}
        <div className="space-y-4 pt-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-ink">Recent Achievements</h3>
            <Link href="/rewards" className="text-xs font-bold text-teal hover:underline flex items-center gap-1">
              All badges <span className="text-[10px]">&gt;</span>
            </Link>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-4 sm:grid-cols-6">
            {studentBadges.slice(0, 6).map((badge) => {
              const Icon = {
                "7-Day Streak": Flame,
                "Quiz Master": Trophy,
                "Helper": Star,
                "Fast Learner": Zap,
                "Bookworm": BookOpen,
                "Top Scorer": LineChart,
              }[badge.name] || BadgeCheck;

              return (
                <div 
                  key={badge.name} 
                  className={cn(
                    "group rounded-3xl p-5 border text-center transition-all duration-300 hover:scale-[1.02]",
                    badge.earned 
                      ? "bg-white/40 dark:bg-white/5 border-slate-200/20 dark:border-white/5 hover:bg-white/60 dark:hover:bg-white/10 hover:shadow-md"
                      : "bg-white/10 dark:bg-white/2 border-dashed border-slate-200/10 dark:border-white/2 opacity-40"
                  )}
                >
                  <div className={cn(
                    "mx-auto flex h-11 w-11 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110",
                    badge.earned 
                      ? "bg-gradient-to-br from-amber-500/20 to-orange-500/10 border border-amber-500/30 text-amber-400 shadow-sm" 
                      : "bg-slate-800/30 border border-slate-700/20 text-slate-600"
                  )}>
                    <Icon className="h-5.5 w-5.5" />
                  </div>
                  <p className="mt-3 text-[10px] font-black text-ink whitespace-nowrap overflow-hidden text-ellipsis">{badge.name}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </AppShell>
  );
}