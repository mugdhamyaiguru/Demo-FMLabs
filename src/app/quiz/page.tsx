import { CheckCircle2, Circle, Clock3, Medal, RotateCcw, SkipForward } from "lucide-react";
import { AppShell } from "@/components/page-shell";
import { EmptyState, GlassCard, Pill, ProgressBar } from "@/components/platform";
import { quizQuestions } from "@/lib/mock-data";

export default function QuizPage() {
  const score = 2;
  const accuracy = quizQuestions.length > 0 ? Math.round((score / quizQuestions.length) * 100) : 0;

  return (
    <AppShell active="Dashboard" title="Quiz System">
      <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_320px]">
        <GlassCard className="p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Pill tone="teal">Multiple Choice Quiz</Pill>
            <div className="inline-flex items-center gap-2 rounded-full bg-surface px-4 py-2 text-sm font-semibold text-ink"><Clock3 className="h-4 w-4 text-teal" />02:14 left</div>
          </div>
          <div className="mt-5"><ProgressBar value={66} /></div>

          {quizQuestions.length > 0 ? (
            <div className="mt-6 space-y-5">
              {quizQuestions.map((question, index) => (
                <div key={question.prompt} className="rounded-[2rem] border border-royal/10 bg-white p-5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-ink">{index + 1}. {question.prompt}</h3>
                    <span className="text-sm text-slate-500">Question {index + 1}</span>
                  </div>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {question.options.map((option, optionIndex) => {
                      const selected = optionIndex === question.answer;
                      const correct = selected;
                      return (
                        <button key={option} className={selected ? "flex items-center gap-3 rounded-2xl border border-teal bg-teal/10 px-4 py-3 text-left font-semibold text-ink" : "flex items-center gap-3 rounded-2xl border border-royal/10 bg-surface px-4 py-3 text-left font-semibold text-ink"}>
                          {correct ? <CheckCircle2 className="h-5 w-5 text-teal" /> : <Circle className="h-5 w-5 text-slate-400" />}
                          {option}
                        </button>
                      );
                    })}
                  </div>
                  <div className="mt-4 rounded-2xl bg-marigold/10 px-4 py-3 text-sm text-[#8b4f00]">Instant feedback: Great choice. Keep going.</div>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-6">
              <EmptyState
                icon={<Medal className="h-6 w-6" />}
                title="No quiz questions yet"
                description="This fallback keeps the quiz screen polished until new questions are loaded into the demo data."
              />
            </div>
          )}
        </GlassCard>

        <div className="space-y-5">
          <GlassCard className="p-6">
            <h3 className="text-xl font-black text-ink">Final Scorecard</h3>
            <div className="mt-5 space-y-4">
              <div className="rounded-3xl bg-royal px-5 py-4 text-white">
                <p className="text-sm text-white/70">XP earned</p>
                <p className="mt-1 text-3xl font-black">160 XP</p>
              </div>
              <div className="rounded-3xl bg-surface px-5 py-4">
                <p className="text-sm text-slate-500">Accuracy</p>
                <p className="mt-1 text-3xl font-black text-ink">{accuracy}%</p>
              </div>
              <div className="rounded-3xl bg-gold/15 px-5 py-4">
                <p className="text-sm text-[#8a6213]">Earned badge</p>
                <p className="mt-1 text-2xl font-black text-ink">Medal of Momentum</p>
              </div>
            </div>
            <div className="mt-5 grid gap-3">
              <button className="inline-flex items-center justify-center gap-2 rounded-full bg-teal px-5 py-3 font-semibold text-white shadow-glow"><RotateCcw className="h-4 w-4" />Retry Quiz</button>
              <button className="inline-flex items-center justify-center gap-2 rounded-full border border-royal/15 bg-white px-5 py-3 font-semibold text-ink"><SkipForward className="h-4 w-4" />Continue Learning</button>
            </div>
          </GlassCard>
        </div>
      </div>
    </AppShell>
  );
}