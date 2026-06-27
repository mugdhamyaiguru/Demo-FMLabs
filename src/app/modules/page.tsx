import { Search, BookMarked, Clock3, Flame, Play, Layers3 } from "lucide-react";
import Link from "next/link";
import { AppShell } from "@/components/page-shell";
import { EmptyState, ProgressBar, SectionHeading, cn } from "@/components/platform";
import { dashboardModules } from "@/lib/mock-data";


// Custom dark gradient mapping for the card headers matching the screenshots
const cardGradients: Record<string, string> = {
  "Introduction to AI in Everyday life": "from-[#1e3a8a] via-[#172554] to-[#0f172a]/95", // Deep Blue
  "Basic Data Concepts": "from-[#064e3b] via-[#022c22] to-[#0f172a]/95", // Deep Forest Green
  "Ethics and Digital Responsibilty": "from-[#312e81] via-[#1e1b4b] to-[#0f172a]/95", // Deep Indigo
  "Binary Basics": "from-[#78350f] via-[#451a03] to-[#0f172a]/95", // Dark Gold / Brown
  "Decimals Demystified": "from-[#581c87] via-[#3b0764] to-[#0f172a]/95", // Deep Purple
  "Linear Patterns": "from-[#701a75] via-[#4a044e] to-[#0f172a]/95", // Deep Violet/Magenta
  "Cell Explorer": "from-[#0f766e] via-[#115e59] to-[#0f172a]/95", // Deep Teal
  "Internet Safety": "from-[#991b1b] via-[#7f1d1d] to-[#0f172a]/95", // Deep Crimson
};

// Custom button styles for active outlines at the bottom
const moduleButtonClasses: Record<string, string> = {
  "Introduction to AI in Everyday life": "text-blue-400 border-blue-500/15 bg-blue-500/5 hover:bg-blue-500/20 hover:text-white hover:border-blue-500",
  "Basic Data Concepts": "text-emerald-400 border-emerald-500/15 bg-emerald-500/5 hover:bg-emerald-500/20 hover:text-white hover:border-emerald-500",
  "Ethics and Digital Responsibilty": "text-indigo-400 border-indigo-500/15 bg-indigo-500/5 hover:bg-indigo-500/20 hover:text-white hover:border-indigo-500",
  "Binary Basics": "text-amber-400 border-amber-500/15 bg-amber-500/5 hover:bg-amber-500/20 hover:text-white hover:border-amber-500",
  "Decimals Demystified": "text-fuchsia-400 border-fuchsia-500/15 bg-fuchsia-500/5 hover:bg-fuchsia-500/20 hover:text-white hover:border-fuchsia-500",
  "Linear Patterns": "text-fuchsia-400 border-fuchsia-500/15 bg-fuchsia-500/5 hover:bg-fuchsia-500/20 hover:text-white hover:border-fuchsia-500",
  "Cell Explorer": "text-teal border-teal/15 bg-teal/5 hover:bg-teal/20 hover:text-white hover:border-teal",
  "Internet Safety": "text-crimson border-crimson/15 bg-crimson/5 hover:bg-crimson/20 hover:text-white hover:border-crimson",
};

// Custom progress bar accents matching the module box color
const progressAccents: Record<string, "blue" | "green" | "indigo" | "amber" | "purple" | "fuchsia" | "teal" | "crimson"> = {
  "Introduction to AI in Everyday life": "blue",
  "Basic Data Concepts": "green",
  "Ethics and Digital Responsibilty": "indigo",
  "Binary Basics": "amber",
  "Decimals Demystified": "purple",
  "Linear Patterns": "fuchsia",
  "Cell Explorer": "teal",
  "Internet Safety": "crimson",
};

export default function ModulesPage() {
  const visibleModules = dashboardModules;

  return (
    <AppShell active="Modules" title="Micro Learning Modules">
      <div className="space-y-6">

        {/* ── Header card ── */}
        <div className="pb-6 border-b border-slate-200/40 dark:border-white/5">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <SectionHeading 
              eyebrow="Explore AI Learning Modules" 
              title="From Beginner to AI Expert" 
            />
            {/* Search */}
            <div className="w-full lg:max-w-md">
              <div className="flex items-center gap-2 rounded-full border border-slate-200/35 dark:border-white/5 bg-white/40 dark:bg-white/5 px-4 py-2.5 transition-all focus-within:border-teal focus-within:bg-white/80 dark:focus-within:bg-white/10">
                <Search className="h-4 w-4 flex-shrink-0 text-royal/40 dark:text-white/40" />
                <input
                  className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400 text-ink"
                  placeholder="Search modules, subjects, topics…"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ── Module grid ── */}
        {visibleModules.length > 0 ? (
          <div className="grid gap-6 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {visibleModules.map((module) => {
              const gradient = cardGradients[module.title] ?? "from-[#4e4260] via-[#2d3a7c] to-[#0f172a]";
              const buttonClass = moduleButtonClasses[module.title] ?? "text-slate-400 border-slate-500/15 bg-slate-500/5 hover:bg-slate-500/20 hover:text-white hover:border-slate-500";
              const progressAccent = progressAccents[module.title] ?? "teal";

              return (
                <div
                  key={module.title}
                  className="group flex flex-col h-full overflow-hidden rounded-3xl bg-white/50 dark:bg-[#1e1b2e]/50 border border-slate-200/20 dark:border-white/5 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.01]"
                >
                  {/* Card header */}
                  <div className={`relative h-44 bg-gradient-to-br ${gradient} p-5 flex-shrink-0`}>
                    {/* Decorative background shape */}
                    <Layers3 className="absolute right-4 top-1/2 h-18 w-18 -translate-y-1/2 text-white/10 animate-pulse" />

                    <div className="flex justify-end">
                      <button className="rounded-xl bg-white/15 p-2 text-white/70 transition-colors hover:bg-white/25 hover:text-white">
                        <BookMarked className="h-4 w-4" />
                      </button>
                    </div>

                    <div className="absolute bottom-5 left-5 right-5">
                      <h3 className="text-xl font-bold tracking-tight text-white leading-snug">{module.title}</h3>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-white/60">Difficulty: {module.difficulty}</p>
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="flex flex-1 flex-col justify-between p-5">
                    <div>
                      {/* Stats row */}
                      <div className="flex items-center justify-between text-xs text-slate-400 dark:text-slate-500 font-semibold">
                        <div className="flex items-center gap-1.5">
                          <Clock3 className="h-3.5 w-3.5" />
                          <span>{module.time}</span>
                        </div>
                        <div className="flex items-center gap-1.5 font-bold text-amber-500">
                          <Flame className="h-3.5 w-3.5 text-amber-500" />
                          <span>{module.xp} XP</span>
                        </div>
                      </div>

                      {/* Progress */}
                      <div className="mt-3.5">
                        <div className="mb-2 flex justify-between text-xs font-semibold">
                          <span className="text-slate-400 dark:text-slate-500">Progress</span>
                          <span className="text-ink">{module.progress}%</span>
                        </div>
                        <ProgressBar value={module.progress} accent={progressAccent} />
                      </div>
                    </div>

                    {/* Action Link */}
                    <Link
                      href={`/lesson?module=${encodeURIComponent(module.title)}`}
                      className={cn(
                        "mt-3.5 flex w-full items-center justify-center gap-2 rounded-2xl border py-2.5 text-sm font-semibold transition-all",
                        buttonClass
                      )}
                    >
                      <Play className="h-4 w-4" />
                      {module.progress > 0 ? "Resume Lesson" : "Start Lesson"}
                    </Link>
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