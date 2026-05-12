import { Mic, MessageCircle, Send, Sparkles, Volume2, Wand2 } from "lucide-react";
import { AppShell } from "@/components/page-shell";
import { GlassCard, Pill } from "@/components/platform";

export default function TutorPage() {
  return (
    <AppShell active="AI Tutor" title="AI Tutor">
      <div className="grid gap-5 xl:grid-cols-[280px_minmax(0,1fr)]">
        <GlassCard className="space-y-4 p-5">
          <Pill tone="gold">Saved Sessions</Pill>
          {[
            "Fractions help",
            "Python basics",
            "Science quiz hints",
            "Project brainstorming",
          ].map((session) => (
            <div key={session} className="rounded-2xl bg-surface px-4 py-3 font-semibold text-ink">{session}</div>
          ))}
        </GlassCard>

        <GlassCard className="flex min-h-[760px] flex-col p-0">
          <div className="flex items-center justify-between border-b border-royal/10 px-6 py-5">
            <div>
              <Pill tone="teal">Chat Interface</Pill>
              <h1 className="mt-2 text-3xl font-black text-ink">FutureMinds AI Tutor</h1>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-surface px-4 py-2 text-sm font-semibold text-ink">
              <span className="h-2 w-2 rounded-full bg-teal" />Hint mode on
            </div>
          </div>

          <div className="flex-1 space-y-4 px-6 py-6">
            <div className="max-w-2xl rounded-[2rem] bg-royal px-5 py-4 text-white shadow-lg">
              <p className="text-sm text-white/70">AI Tutor</p>
              <p className="mt-2 leading-7">Let’s break this into small steps. Show me the question and I’ll guide you with hints instead of giving the full answer immediately.</p>
            </div>
            <div className="ml-auto max-w-2xl rounded-[2rem] bg-teal px-5 py-4 text-white shadow-lg">
              <p className="text-sm text-white/70">Student</p>
              <p className="mt-2 leading-7">I’m stuck on fractions. Can you help me compare 1/2 and 3/4?</p>
            </div>
            <div className="max-w-2xl rounded-[2rem] bg-white px-5 py-4 text-ink shadow-sm">
              <p className="text-sm text-slate-500">AI Tutor</p>
              <p className="mt-2 leading-7">Try converting both to the same number of parts. Use a common denominator and then compare the numerators.</p>
            </div>
            <div className="max-w-2xl rounded-[2rem] border border-dashed border-teal/20 bg-teal/5 px-5 py-4 text-ink">
              <div className="flex items-center gap-3 text-teal">
                <Sparkles className="h-5 w-5" />
                <span className="font-semibold">Typing indicator</span>
              </div>
              <div className="mt-3 flex gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-teal" />
                <span className="h-2 w-2 animate-pulse rounded-full bg-teal/70" />
                <span className="h-2 w-2 animate-pulse rounded-full bg-teal/40" />
              </div>
            </div>
          </div>

          <div className="border-t border-royal/10 px-6 py-5">
            <div className="flex flex-wrap gap-3">
              <button className="rounded-full bg-surface px-4 py-2 text-sm font-semibold text-ink">Mathematics</button>
              <button className="rounded-full bg-surface px-4 py-2 text-sm font-semibold text-ink">Science</button>
              <button className="rounded-full bg-surface px-4 py-2 text-sm font-semibold text-ink">Coding</button>
              <button className="rounded-full bg-surface px-4 py-2 text-sm font-semibold text-ink">Hint mode</button>
            </div>
            <div className="mt-4 flex items-center gap-3 rounded-full border border-royal/10 bg-surface px-4 py-3">
              <Wand2 className="h-4 w-4 text-royal/50" />
              <input className="w-full bg-transparent outline-none" placeholder="Ask something, or say 'give me a hint'" />
              <button className="rounded-full bg-teal px-4 py-2 text-white"><Send className="h-4 w-4" /></button>
            </div>
            <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
              <div className="flex items-center gap-2"><Mic className="h-4 w-4" />Voice button UI</div>
              <div className="flex items-center gap-2"><Volume2 className="h-4 w-4" />Read aloud</div>
              <div className="flex items-center gap-2"><MessageCircle className="h-4 w-4" />Saved session</div>
            </div>
          </div>
        </GlassCard>
      </div>
    </AppShell>
  );
}