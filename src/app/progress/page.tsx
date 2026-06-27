import { Download, Flame, PieChart, TrendingUp, Trophy, AlertTriangle, BadgeCheck, CheckCircle2 } from "lucide-react";
import { AppShell } from "@/components/page-shell";
import { EmptyState, GlassCard, Pill, ProgressBar, SectionHeading } from "@/components/platform";

export default function ProgressPage() {
  const weakTopics = ["Fractions", "Data types", "Ecosystems"];
  const leaderboardRows = [
    ["#12", "Aanya", "1,240 XP"],
    ["#13", "Mira", "1,110 XP"],
    ["#14", "Ravi", "980 XP"],
  ];
  const lineChartData = [
    { day: "Mon", value: 3, x: "5%", y: "60.4%" },
    { day: "Tue", value: 5, x: "20%", y: "39.6%" },
    { day: "Wed", value: 4, x: "35%", y: "50%" },
    { day: "Thu", value: 6, x: "50%", y: "29.2%" },
    { day: "Fri", value: 2, x: "65%", y: "70.8%" },
    { day: "Sat", value: 7, x: "80%", y: "18.75%" },
    { day: "Sun", value: 5, x: "95%", y: "39.6%" },
  ];

  return (
    <AppShell active="Progress" title="Progress Dashboard" hideSearch={true}>
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

        {/* ── CSS Animations for Charts ── */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes line-draw {
            from { stroke-dashoffset: 500; }
            to { stroke-dashoffset: 0; }
          }
          @keyframes radial-draw {
            from { stroke-dashoffset: 314.2; }
            to { stroke-dashoffset: 56.6; }
          }
          @keyframes fade-in-circle {
            from { opacity: 0; transform: scale(0.6); }
            to { opacity: 1; transform: scale(1); }
          }
          .animate-line-draw {
            stroke-dasharray: 500;
            stroke-dashoffset: 500;
            animation: line-draw 1.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
          .animate-radial-draw {
            stroke-dasharray: 314.2;
            animation: radial-draw 1.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
          .animate-fade-in-circle {
            animation: fade-in-circle 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
        `}} />

        {/* ── Side-by-Side Analytics Grid ── */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-stretch w-full">
          
          {/* Left Card – Weekly Learning Graph */}
          <div className="rounded-[2.5rem] bg-white/40 dark:bg-[#1a1727]/30 border border-slate-200/20 dark:border-white/5 p-8 backdrop-blur-md flex flex-col justify-between h-full">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-ink">Weekly Learning Graph</h3>
                <TrendingUp className="h-5 w-5 text-teal" />
              </div>
              <p className="text-xs text-slate-400">Daily study hours logged this week</p>
            </div>
            
            <div className="flex-grow pt-10 flex flex-row items-stretch">
              {/* Left Side: Y-axis Label & Ticks */}
              <div className="flex items-stretch select-none">
                {/* Y-axis Label (rotated) */}
                <div className="flex items-center justify-center pr-1 w-8">
                  <span 
                    className="text-[10px] sm:text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider whitespace-nowrap"
                    style={{
                      writingMode: "vertical-lr",
                      transform: "rotate(180deg)",
                    }}
                  >
                    Study Hours (hrs)
                  </span>
                </div>

                {/* Y-axis Ticks */}
                <div className="flex flex-col justify-between text-right pr-3 text-[10px] sm:text-xs font-semibold text-slate-400 dark:text-slate-500 w-5 py-[2px]">
                  <span>7</span>
                  <span>6</span>
                  <span>5</span>
                  <span>4</span>
                  <span>3</span>
                  <span>2</span>
                  <span>1</span>
                  <span>0</span>
                </div>
              </div>

              {/* Right Side: Chart Area + X-axis Labels */}
              <div className="flex-grow flex flex-col">
                {/* Chart Grid Area */}
                <div className="flex-grow h-64 relative border-l border-b border-slate-200/20 dark:border-white/10 pb-0">
                  {/* Horizontal Dotted Grid Lines */}
                  <div className="absolute inset-0 flex flex-col justify-between pointer-events-none py-[2px]">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-full border-t border-dotted border-slate-200/10 dark:border-white/5"
                      />
                    ))}
                  </div>

                  {/* Bars Container */}
                  <div className="absolute inset-x-4 bottom-0 top-[2px] grid grid-cols-7 gap-3 sm:gap-5 items-end">
                    {[
                      { day: "DAY 01", hours: 2.5 },
                      { day: "DAY 02", hours: 3.5 },
                      { day: "DAY 03", hours: 4.2 },
                      { day: "DAY 04", hours: 4.8 },
                      { day: "DAY 05", hours: 3.2 },
                      { day: "DAY 06", hours: 5.6 },
                      { day: "DAY 07", hours: 6.2 },
                    ].map((item, index) => {
                      const heightPercent = (item.hours / 7) * 100;
                      return (
                        <div key={index} className="flex flex-col items-center justify-end h-full relative group">
                          {/* Bar Wrapper */}
                          <div
                            className="w-full relative cursor-pointer"
                            style={{ height: `${heightPercent}%` }}
                          >
                            {/* Tooltip */}
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-20">
                              <div className="bg-slate-900/95 dark:bg-slate-800/95 text-white text-[10px] font-bold px-2.5 py-1.5 rounded-lg shadow-xl border border-white/10 backdrop-blur-sm whitespace-nowrap text-center">
                                {item.hours} hrs
                              </div>
                              <div className="w-1.5 h-1.5 bg-slate-900/95 dark:bg-slate-800/95 border-r border-b border-white/10 rotate-45 absolute -bottom-0.5 left-1/2 -translate-x-1/2" />
                            </div>

                            {/* Bar Fill */}
                            <div
                              className="w-full h-full rounded-t-lg bg-[#14B8A6] hover:bg-[#20d4bf] hover:shadow-[0_0_15px_#14B8A6] hover:scale-[1.02] transition-all duration-300 animate-bar-grow"
                              style={{ animationDelay: `${index * 80}ms` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* X-axis Labels (aligned perfectly with bars via identical horizontal grid padding/spacing) */}
                <div className="pt-3 px-4 grid grid-cols-7 gap-3 sm:gap-5 text-center">
                  {["DAY 01", "DAY 02", "DAY 03", "DAY 04", "DAY 05", "DAY 06", "DAY 07"].map((day) => (
                    <span key={day} className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                      {day}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Card – Weekly Task Completion */}
          <div className="rounded-[2.5rem] bg-white/40 dark:bg-[#1a1727]/30 border border-slate-200/20 dark:border-white/5 p-8 backdrop-blur-md flex flex-col justify-between h-full space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-ink">Weekly Task Completion</h3>
                <CheckCircle2 className="h-5 w-5 text-teal" />
              </div>
              <p className="text-xs text-slate-400">Weekly task status and completions</p>
            </div>

            {/* Radial Chart Top */}
            <div className="flex justify-center py-2">
              <div className="relative flex items-center justify-center">
                <svg width="120" height="120" className="transform -rotate-90">
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    className="stroke-slate-200/30 dark:stroke-white/5"
                    strokeWidth="10"
                    fill="transparent"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    className="stroke-teal animate-radial-draw"
                    strokeWidth="10"
                    fill="transparent"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute flex flex-col items-center justify-center text-center">
                  <span className="text-3xl font-black text-ink">82%</span>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Weekly Tasks</span>
                </div>
              </div>
            </div>

            {/* Stats Middle */}
            <div className="grid grid-cols-3 gap-3">
              {/* Completed */}
              <div className="flex flex-col items-center justify-center bg-teal/5 dark:bg-teal/10 rounded-2xl p-3 border border-teal/10">
                <span className="text-[10px] font-bold text-teal uppercase tracking-wider flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal" /> Completed
                </span>
                <span className="text-xl font-extrabold text-ink mt-1">23</span>
              </div>
              {/* Pending */}
              <div className="flex flex-col items-center justify-center bg-marigold/5 dark:bg-marigold/10 rounded-2xl p-3 border border-marigold/10">
                <span className="text-[10px] font-bold text-marigold uppercase tracking-wider flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-marigold" /> Pending
                </span>
                <span className="text-xl font-extrabold text-ink mt-1">5</span>
              </div>
              {/* Missed */}
              <div className="flex flex-col items-center justify-center bg-crimson/5 dark:bg-crimson/10 rounded-2xl p-3 border border-crimson/10">
                <span className="text-[10px] font-bold text-crimson uppercase tracking-wider flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-crimson" /> Missed
                </span>
                <span className="text-xl font-extrabold text-ink mt-1">2</span>
              </div>
            </div>

            {/* Line Chart Bottom */}
            <div className="space-y-2 pt-2 border-t border-slate-200/20 dark:border-white/5">
              <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 text-center">Completed Tasks Trend</p>
              
              <div className="relative w-full h-24 mt-2">
                {/* SVG for line chart */}
                <svg viewBox="0 0 400 120" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="taskAreaGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#189b9b" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#189b9b" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* Horizontal Grid lines */}
                  <line x1="20" y1="10" x2="380" y2="10" className="stroke-slate-200/20 dark:stroke-white/5" strokeDasharray="3 3" />
                  <line x1="20" y1="60" x2="380" y2="60" className="stroke-slate-200/20 dark:stroke-white/5" strokeDasharray="3 3" />
                  <line x1="20" y1="110" x2="380" y2="110" className="stroke-slate-200/20 dark:stroke-white/5" strokeDasharray="3 3" />

                  {/* Area under line path */}
                  <path
                    d="M 20 110 L 20 72.5 C 50 72.5, 50 47.5, 80 47.5 C 110 47.5, 110 60, 140 60 C 170 60, 170 35, 200 35 C 230 35, 230 85, 260 85 C 290 85, 290 22.5, 320 22.5 C 350 22.5, 350 47.5, 380 47.5 L 380 110 Z"
                    fill="url(#taskAreaGrad)"
                    className="opacity-0 animate-fade-in-simple"
                    style={{ animationDelay: "600ms", animationFillMode: "forwards" }}
                  />

                  {/* Curved Path line */}
                  <path
                    d="M 20 72.5 C 50 72.5, 50 47.5, 80 47.5 C 110 47.5, 110 60, 140 60 C 170 60, 170 35, 200 35 C 230 35, 230 85, 260 85 C 290 85, 290 22.5, 320 22.5 C 350 22.5, 350 47.5, 380 47.5"
                    fill="none"
                    stroke="#189b9b"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    className="animate-line-draw"
                  />
                </svg>

                {/* Overlay dots with tooltip */}
                {lineChartData.map((item, index) => (
                  <div
                    key={item.day}
                    className="absolute group cursor-pointer"
                    style={{
                      left: item.x,
                      top: item.y,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-30">
                      <div className="bg-slate-900/95 dark:bg-slate-800/95 text-white text-[10px] font-bold px-2.5 py-1.5 rounded-lg shadow-xl border border-white/10 backdrop-blur-sm whitespace-nowrap text-center">
                        {item.value} tasks
                      </div>
                      <div className="w-1.5 h-1.5 bg-slate-900/95 dark:bg-slate-800/95 border-r border-b border-white/10 rotate-45 absolute -bottom-0.5 left-1/2 -translate-x-1/2" />
                    </div>

                    {/* Circle dot marker */}
                    <div
                      className="h-3.5 w-3.5 rounded-full border-2 border-white dark:border-[#1e1b2e] bg-[#189b9b] shadow-[0_0_8px_#189b9b] transition-all duration-300 group-hover:scale-125 opacity-0 animate-fade-in-circle"
                      style={{
                        animationDelay: `${index * 120 + 200}ms`,
                        animationFillMode: "forwards",
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Labels below line chart */}
              <div className="relative h-4 mt-2 w-full text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                {lineChartData.map((item) => (
                  <span
                    key={item.day}
                    className="absolute -translate-x-1/2 text-center"
                    style={{ left: item.x }}
                  >
                    {item.day}
                  </span>
                ))}
              </div>
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