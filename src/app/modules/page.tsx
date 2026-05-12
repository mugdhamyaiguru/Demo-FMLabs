import { Search, SlidersHorizontal, BookMarked, Clock3, Flame, Play, Layers3 } from "lucide-react";
import { AppShell } from "@/components/page-shell";
import { EmptyState, GlassCard, Pill, ProgressBar, SectionHeading } from "@/components/platform";
import { dashboardModules } from "@/lib/mock-data";

const categories = ["All", "Mathematics", "Science", "Computer Basics"];

const subjectGradient: Record<string, string> = {
  Mathematics: "from-[#3b2f6e] via-[#4e4260] to-[#189b9b]",
  Science:     "from-[#0a4f3a] via-[#0d7a5e] to-[#189b9b]",
  "Computer Basics": "from-[#2a1060] via-[#4e4260] to-[#fc9438]",
};

const subjectAccent: Record<string, "teal" | "marigold" | "gold"> = {
  Mathematics: "teal",
  Science:     "teal",
  "Computer Basics": "marigold",
};

export default function ModulesPage() {
  const visibleModules = dashboardModules;

  return (
    <AppShell active="Modules" title="Micro Learning Modules">
      <div className="space-y-6">

        {/* ── Header card ── */}
        <GlassCard className="p-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <SectionHeading eyebrow="Module library" title="Explore bite-sized lessons by subject" />
            {/* Search + filter */}
            <div className="flex flex-1 flex-col gap-3 lg:max-w-xl lg:flex-row">
              <div className="flex flex-1 items-center gap-2 rounded-2xl border border-royal/10 bg-surface px-4 py-3 transition-colors focus-within:border-teal focus-within:bg-white">
                <Search className="h-4 w-4 flex-shrink-0 text-royal/40" />
                <input
                  className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
                  placeholder="Search modules, subjects, topics…"
                />
              </div>
              <button className="flex items-center justify-center gap-2 rounded-2xl border border-royal/10 bg-surface px-4 py-3 text-sm font-semibold text-slate-600 transition-colors hover:border-teal hover:text-teal">
                <SlidersHorizontal className="h-4 w-4" /> Filters
              </button>
            </div>
          </div>

          {/* Category pills */}
          <div className="mt-5 flex flex-wrap gap-2">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                  i === 0
                    ? "bg-royal text-white shadow-sm"
                    : "border border-royal/10 bg-white text-slate-600 hover:border-royal/25 hover:text-ink"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </GlassCard>

        {/* ── Module grid ── */}
        {visibleModules.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2">
            {visibleModules.map((module, index) => {
              const gradient = subjectGradient[module.subject] ?? "from-[#4e4260] via-[#2d3a7c] to-[#189b9b]";
              const accent = subjectAccent[module.subject] ?? (index % 2 === 0 ? "teal" : "marigold");

              return (
                <div
                  key={module.title}
                  className="group overflow-hidden rounded-[1.5rem] bg-white shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  {/* Card header */}
                  <div className={`relative h-48 bg-gradient-to-br ${gradient} p-5`}>
                    {/* Decorative background shape */}
                    <Layers3 className="absolute right-4 top-1/2 h-20 w-20 -translate-y-1/2 text-white/10" />

                    <div className="flex items-start justify-between">
                      <Pill tone="gold">{module.subject}</Pill>
                      <button className="rounded-xl bg-white/15 p-2 text-white/70 transition-colors hover:bg-white/25 hover:text-white">
                        <BookMarked className="h-4 w-4" />
                      </button>
                    </div>

                    <div className="absolute bottom-5 left-5 right-5">
                      <h3 className="text-2xl font-black leading-tight text-white">{module.title}</h3>
                      <p className="mt-1 text-sm text-white/65">Difficulty: {module.difficulty}</p>
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="p-5">
                    {/* Stats row */}
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1.5 text-slate-500">
                        <Clock3 className="h-4 w-4" />
                        <span>{module.time}</span>
                      </div>
                      <div className="flex items-center gap-1.5 font-semibold text-marigold">
                        <Flame className="h-4 w-4" />
                        <span>{module.xp} XP</span>
                      </div>
                    </div>

                    {/* Progress */}
                    <div className="mt-4">
                      <div className="mb-2 flex justify-between text-xs font-semibold">
                        <span className="text-slate-500">Progress</span>
                        <span className="text-ink">{module.progress}%</span>
                      </div>
                      <ProgressBar value={module.progress} accent={accent} />
                    </div>

                    {/* Action button */}
                    <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl border border-royal/10 bg-surface py-2.5 text-sm font-semibold text-royal transition-all hover:bg-royal hover:text-white">
                      <Play className="h-4 w-4" />
                      {module.progress > 0 ? "Resume Lesson" : "Start Lesson"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <EmptyState
            icon={<Search className="h-6 w-6" />}
            title="No modules match your selection"
            description="Try adjusting your filters or search term to find what you're looking for."
            action={<div className="rounded-full bg-royal px-5 py-3 text-sm font-semibold text-white">Reset filters</div>}
          />
        )}
      </div>
    </AppShell>
  );
}