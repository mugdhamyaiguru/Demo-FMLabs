import { BookOpen, Clock3, HelpCircle, PlayCircle, Sparkles, Target } from "lucide-react";
import { AppShell } from "@/components/page-shell";
import { GlassCard, Pill, ProgressBar } from "@/components/platform";
import { lessonBlocks } from "@/lib/mock-data";

export default function LessonPage() {
  return (
    <AppShell active="Projects" title="Lesson View">
      <div className="grid gap-5 xl:grid-cols-[260px_minmax(0,1fr)_300px]">
        <GlassCard className="space-y-4 p-5">
          <Pill tone="teal">Lesson Path</Pill>
          {[
            "Warm-up",
            "Concept video",
            "Guided activity",
            "Mini project",
            "Quick quiz",
          ].map((step, index) => (
            <div key={step} className="flex items-center gap-3 rounded-2xl bg-surface p-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-royal text-sm font-bold text-white">{index + 1}</div>
              <div>
                <p className="font-semibold text-ink">{step}</p>
                <p className="text-xs text-slate-500">Estimated 3-5 min</p>
              </div>
            </div>
          ))}
        </GlassCard>

        <div className="space-y-5">
          <GlassCard className="overflow-hidden p-0">
            <div className="bg-[linear-gradient(135deg,rgba(78,66,96,0.92),rgba(24,155,155,0.82))] p-6 text-white">
              <Pill tone="gold">Mathematics</Pill>
              <h1 className="mt-4 text-3xl font-black">Understanding Fractions</h1>
              <p className="mt-2 max-w-2xl text-white/75">Learn how parts of a whole work using visuals, examples, and hands-on practice.</p>
            </div>
            <div className="space-y-5 p-6">
              <div className="aspect-video rounded-[2rem] border border-royal/10 bg-gradient-to-br from-surface to-white p-5">
                <div className="flex h-full items-center justify-center rounded-[1.75rem] border-2 border-dashed border-teal/20 bg-white/70 text-center">
                  <div>
                    <PlayCircle className="mx-auto h-14 w-14 text-teal" />
                    <p className="mt-3 text-lg font-bold text-ink">Embedded Video Placeholder</p>
                    <p className="mt-1 text-sm text-slate-500">Short animated lesson intro</p>
                  </div>
                </div>
              </div>
              <div className="grid gap-4 lg:grid-cols-3">
                {lessonBlocks.map((block, index) => (
                  <div key={block} className="rounded-3xl bg-surface p-4 shadow-sm">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-royal/10 text-royal"><Sparkles className="h-5 w-5" /></div>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{index + 1}. {block}</p>
                  </div>
                ))}
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <button className="inline-flex items-center justify-center gap-2 rounded-full bg-teal px-6 py-3 font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5">Mark Complete</button>
                <button className="inline-flex items-center justify-center gap-2 rounded-full border border-royal/15 bg-white px-6 py-3 font-semibold text-ink transition-transform hover:-translate-y-0.5">Start Quiz</button>
              </div>
            </div>
          </GlassCard>
        </div>

        <div className="space-y-5">
          <GlassCard className="p-5">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-black text-ink">Progress Tracker</h3>
              <Target className="h-5 w-5 text-marigold" />
            </div>
            <div className="mt-4 space-y-4">
              <div>
                <div className="mb-2 flex justify-between text-sm"><span className="text-slate-500">Lesson progress</span><span className="font-semibold text-ink">68%</span></div>
                <ProgressBar value={68} />
              </div>
              <div>
                <div className="mb-2 flex justify-between text-sm"><span className="text-slate-500">Completion confidence</span><span className="font-semibold text-ink">84%</span></div>
                <ProgressBar value={84} accent="marigold" />
              </div>
            </div>
          </GlassCard>
          <GlassCard className="p-5">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-black text-ink">Quick Access</h3>
              <HelpCircle className="h-5 w-5 text-teal" />
            </div>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <div className="rounded-2xl bg-surface p-4">Mini AI tutor</div>
              <div className="rounded-2xl bg-surface p-4">Help button</div>
              <div className="rounded-2xl bg-surface p-4">Hint mode</div>
            </div>
          </GlassCard>
          <button className="w-full rounded-full bg-royal px-6 py-4 font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5">Need help? Ask AI Tutor</button>
        </div>
      </div>
    </AppShell>
  );
}