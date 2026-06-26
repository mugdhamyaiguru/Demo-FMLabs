import { ArrowRight, Flame } from "lucide-react";
import Link from "next/link";
import { AppShell } from "@/components/page-shell";
import { GlassCard, ProgressBar } from "@/components/platform";
import { dashboardModules } from "@/lib/mock-data";

export default function StudentDashboardPage() {
  return (
    <AppShell active="Dashboard" title="Student Dashboard" hideSearch={true} hideTitleLabel={true} greeting="Madhura">
      <div className="w-full space-y-8">
        
        {/* Priority Action Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Resume Learning */}
          <GlassCard className="p-6 flex flex-col justify-between dark:bg-[#151c2e]/50 dark:border-white/5">
            <div>
              <h3 className="text-2xl font-black text-ink">Introduction to AI in Everyday life</h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">Resume your last lesson and keep momentum with short, focused practice blocks.</p>
            </div>
            <div className="mt-6">
              <div className="flex items-center justify-between text-xs font-semibold mb-2 text-slate-400">
                <span>Progress</span>
                <span>72%</span>
              </div>
              <ProgressBar value={72} accent="teal" />
              <Link 
                href="/lesson?module=Introduction%20to%20AI%20in%20Everyday%20life" 
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-teal/10 hover:bg-teal/20 border border-teal/20 px-6 py-3.5 text-xs font-bold text-teal transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>UpNext</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </GlassCard>

          {/* Daily Challenge */}
          <GlassCard className="p-6 flex flex-col justify-between dark:bg-[#151c2e]/50 dark:border-white/5">
            <div>
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-2xl font-bold text-ink">Complete 1 quiz today</h3>
                <div className="flex items-center gap-2 text-orange-500 font-black text-xl flex-shrink-0 mr-10 mt-3">
                  <Flame className="h-6 w-6 fill-orange-500 text-orange-500" />
                  <span>+25 XP</span>
                </div>
              </div>
              
              {/* Metadata */}
              <div className="mt-3.5 flex items-center gap-4 text-base text-slate-400 font-bold">
                <span>Easy</span>
                <span>5 min</span>
              </div>

              <p className="mt-4 text-[15px] text-slate-400 leading-relaxed">
                Keep your streak active and unlock bonus XP with a quick quiz.
              </p>
            </div>
            <div className="mt-6">
              <Link 
                href="/quiz" 
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-orange-500 hover:bg-orange-600 px-6 py-3.5 text-xs font-bold text-white transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Start Challenge</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </GlassCard>
        </div>

        {/* Recommended Modules (Show 3) */}
        <div className="mt-4 lg:mt-6">
          <div className="grid gap-6 lg:grid-cols-[7.2fr_2.8fr]">
            <div className="space-y-6">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">RECOMMENDED MODULES</p>
                  <h3 className="mt-1.5 text-xl font-bold text-ink">Next up in your learning path</h3>
                </div>
                <Link 
                  href="/modules" 
                  className="px-4 py-2 text-xs font-bold text-teal bg-teal/10 hover:bg-teal/20 border border-teal/20 rounded-2xl flex items-center gap-1.5 transition-all hover:scale-[1.02]"
                >
                  <span>View all</span> 
                  <span className="text-[10px]">&gt;</span>
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
                      className="group flex flex-col justify-between h-full min-h-[180px] rounded-3xl border border-slate-200/20 dark:border-white/5 bg-white/50 dark:bg-white/5 p-6 shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-300"
                    >
                      <div>
                        {/* Module Title */}
                        <h4 className="text-lg font-extrabold leading-snug text-ink group-hover:text-teal transition-colors">
                          {module.title}
                        </h4>
                        
                        {/* Difficulty, XP, Time */}
                        <div className="mt-2.5 flex items-center gap-1.5 text-xs text-slate-400 font-semibold">
                          <span>{module.difficulty}</span>
                          <span>·</span>
                          <span className="text-amber-500 font-bold">{module.xp} XP</span>
                          <span>·</span>
                          <span>{module.time.replace(" min", "m")}</span>
                        </div>
                      </div>

                      {/* Progress Bar & Value */}
                      <div className="flex items-center gap-3 pt-3">
                        <div className="flex-1">
                          <ProgressBar 
                            value={module.progress} 
                            accent={accentColor} 
                          />
                        </div>
                        <span className="text-sm font-bold text-slate-400 text-right min-w-[32px]">
                          {module.progress}%
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="hidden lg:block" />
          </div>
        </div>

      </div>
    </AppShell>
  );
}