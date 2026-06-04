import { Mic, MessageCircle, Send, Sparkles, Volume2, Wand2 } from "lucide-react";
import { AppShell } from "@/components/page-shell";
import { GlassCard, Pill } from "@/components/platform";

export default function TutorPage() {
  return (
    <AppShell active="AI Tutor" title="AI Tutor">
      <div className="grid gap-5 xl:grid-cols-[280px_minmax(0,1fr)]">
        <GlassCard className="space-y-3 p-5 h-fit">
          <Pill tone="gold">Saved Sessions</Pill>
          <div className="space-y-2 pt-2">
            {[
              "Fractions help",
              "Python basics",
              "Science quiz hints",
              "Project brainstorming",
            ].map((session) => (
              <div
                key={session}
                className="rounded-2xl border border-slate-200/20 dark:border-white/5 bg-white/40 dark:bg-white/5 px-4 py-3 text-sm font-semibold text-ink transition-all hover:bg-teal/10 hover:text-teal hover:border-teal/20 cursor-pointer"
              >
                {session}
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard className="flex min-h-[760px] flex-col p-0 overflow-hidden">
          <div className="flex items-center justify-between border-b border-slate-200/40 dark:border-white/5 px-6 py-5">
            <div>
              <Pill tone="teal">Chat Interface</Pill>
              <h2 className="mt-2 text-2xl font-black text-ink">FutureMinds AI Tutor</h2>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-white/40 dark:bg-white/5 border border-slate-200/20 dark:border-white/5 px-4 py-2 text-xs font-semibold text-ink">
              <span className="h-2 w-2 rounded-full bg-teal" />Hint mode on
            </div>
          </div>

          <div className="flex-1 space-y-5 px-6 py-6 overflow-y-auto">
            <div className="max-w-2xl rounded-[2rem] bg-royal px-5 py-4 text-white shadow-lg">
              <p className="text-xs text-white/70">AI Tutor</p>
              <p className="mt-1 leading-7 text-sm">Let’s break this into small steps. Show me the question and I’ll guide you with hints instead of giving the full answer immediately.</p>
            </div>
            <div className="ml-auto max-w-2xl rounded-[2rem] bg-teal px-5 py-4 text-white shadow-lg">
              <p className="text-xs text-white/70">Student</p>
              <p className="mt-1 leading-7 text-sm">I’m stuck on fractions. Can you help me compare 1/2 and 3/4?</p>
            </div>
            <div className="max-w-2xl rounded-[2rem] bg-white/60 dark:bg-white/5 border border-slate-200/20 dark:border-white/5 px-5 py-4 text-ink shadow-sm">
              <p className="text-xs text-slate-400">AI Tutor</p>
              <p className="mt-1 leading-7 text-sm">Try converting both to the same number of parts. Use a common denominator and then compare the numerators.</p>
            </div>
            <div className="max-w-2xl rounded-[2rem] border border-dashed border-teal/20 bg-teal/5 px-5 py-4 text-ink">
              <div className="flex items-center gap-3 text-teal">
                <Sparkles className="h-4 w-4 animate-spin" />
                <span className="text-xs font-semibold">Typing indicator</span>
              </div>
              <div className="mt-3 flex gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-teal" />
                <span className="h-2 w-2 animate-pulse rounded-full bg-teal/70" />
                <span className="h-2 w-2 animate-pulse rounded-full bg-teal/40" />
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200/40 dark:border-white/5 px-6 py-5">
            <div className="flex flex-wrap gap-2">
              <button className="rounded-full border border-slate-200/20 dark:border-white/5 bg-white/40 dark:bg-white/5 px-4 py-1.5 text-xs font-semibold text-slate-500 hover:border-teal hover:text-teal transition-all">Mathematics</button>
              <button className="rounded-full border border-slate-200/20 dark:border-white/5 bg-white/40 dark:bg-white/5 px-4 py-1.5 text-xs font-semibold text-slate-500 hover:border-teal hover:text-teal transition-all">Science</button>
              <button className="rounded-full border border-slate-200/20 dark:border-white/5 bg-white/40 dark:bg-white/5 px-4 py-1.5 text-xs font-semibold text-slate-500 hover:border-teal hover:text-teal transition-all">Coding</button>
              <button className="rounded-full border border-slate-200/20 dark:border-white/5 bg-white/40 dark:bg-white/5 px-4 py-1.5 text-xs font-semibold text-slate-500 hover:border-teal hover:text-teal transition-all">Hint mode</button>
            </div>
            <div className="mt-4 flex items-center gap-3 rounded-full border border-slate-200/35 dark:border-white/5 bg-white/40 dark:bg-white/5 px-4 py-2.5 transition-all focus-within:border-teal/50 focus-within:bg-white/80 dark:focus-within:bg-white/10">
              <Mic className="h-4 w-4 text-royal/40 dark:text-white/40 cursor-pointer hover:text-teal" />
              <input className="w-full bg-transparent outline-none text-sm text-ink placeholder:text-slate-400" placeholder="Ask something, or say 'give me a hint'" />
              <button className="rounded-full bg-teal px-4 py-2 text-white hover:bg-[#168484] transition-all"><Send className="h-3.5 w-3.5" /></button>
            </div>
          </div>
        </GlassCard>
      </div>
    </AppShell>
  );
}