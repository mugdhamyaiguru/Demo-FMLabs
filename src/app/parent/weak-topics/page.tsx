"use client";
import { Flame, ArrowRight } from "lucide-react";
import { AppShell } from "@/components/page-shell";
import { GlassCard, Pill, ProgressBar } from "@/components/platform";

const weakTopics = [
  { topic: "Fractions — adding & subtracting", subject: "Math",    score: 48, sev: "high",   tip: "Practice 10 mins daily using the Fractions module in the app." },
  { topic: "Essay writing structure",          subject: "English", score: 52, sev: "high",   tip: "Review the 'Essay Writing' workshop and try 2 exercises per week." },
  { topic: "Vocabulary expansion",             subject: "English", score: 58, sev: "medium", tip: "Use the Word of the Day feature and flashcards in the English module." },
  { topic: "Geometry — angles & constructions",subject: "Math",    score: 61, sev: "medium", tip: "Redo the Geometry practical with compass exercises." },
  { topic: "Reading comprehension",            subject: "English", score: 63, sev: "medium", tip: "Read one passage per day and answer the embedded questions." },
  { topic: "Gravity & motion concepts",        subject: "Science", score: 66, sev: "low",    tip: "Revisit Newton's Laws lesson and watch the lab video." },
];

const sevMeta = {
  high:   { label: "Urgent",     border: "border-crimson/20 bg-crimson/5",   text: "text-crimson",  barAccent: "crimson"  as const },
  medium: { label: "Needs Work", border: "border-gold/20 bg-gold/5",         text: "text-[#b3690d]", barAccent: "gold"    as const },
  low:    { label: "Minor Gap",  border: "border-teal/20 bg-teal/5",         text: "text-teal",     barAccent: "teal"    as const },
};

export default function WeakTopicsPage() {
  return (
    <AppShell active="Weak Topics" title="Weak Topics Panel" role="parent">
      <div className="space-y-5">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { label: "Urgent Topics",  value: "2", sub: "Needs immediate focus", color: "text-crimson" },
            { label: "Need Work",      value: "3", sub: "Improvement recommended", color: "text-gold" },
            { label: "Minor Gaps",     value: "1", sub: "Slight attention needed", color: "text-teal" },
          ].map(({ label, value, sub, color }) => (
            <GlassCard key={label} className="p-5">
              <p className="text-xs text-slate-400">{label}</p>
              <p className={`mt-1 text-2xl font-bold ${color}`}>{value}</p>
              <p className="text-[11px] text-slate-400">{sub}</p>
            </GlassCard>
          ))}
        </div>

        <div className="grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
          <GlassCard className="p-6">
            <div className="flex items-center gap-2 mb-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-gold to-marigold shadow-sm">
                <Flame className="h-4 w-4 text-white" />
              </div>
              <h3 className="text-lg font-bold text-ink">Identified Weak Topics</h3>
            </div>
            <div className="space-y-3">
              {weakTopics.map((w) => {
                const meta = sevMeta[w.sev as keyof typeof sevMeta];
                return (
                  <div key={w.topic} className={`rounded-2xl border p-4 ${meta.border}`}>
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Pill tone={w.subject === "Math" ? "teal" : w.subject === "English" ? "crimson" : "marigold"}>{w.subject}</Pill>
                          <span className={`text-[11px] font-bold ${meta.text}`}>{meta.label}</span>
                        </div>
                        <p className="text-sm font-semibold text-ink">{w.topic}</p>
                      </div>
                      <span className={`text-xl font-bold ${meta.text}`}>{w.score}%</span>
                    </div>
                    <ProgressBar value={w.score} accent={meta.barAccent} />
                    <div className="mt-2.5 flex items-start gap-2 rounded-xl bg-white/60 dark:bg-white/5 px-3 py-2">
                      <ArrowRight className="h-3.5 w-3.5 text-slate-400 flex-shrink-0 mt-0.5" />
                      <p className="text-[11px] text-slate-500">{w.tip}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </GlassCard>

          <GlassCard className="p-6 h-fit">
            <h3 className="text-base font-bold text-ink mb-4">How to Help</h3>
            <div className="space-y-3">
              {[
                { title: "Set Daily Practice Time", desc: "Even 15 mins of focused practice daily can close gaps within 2 weeks." },
                { title: "Use In-App Resources", desc: "Each module has targeted exercises. Ask Aanya to revisit weak modules." },
                { title: "Request Teacher Support", desc: "Use the Alerts tab to send a message to Ms. Priya for extra guidance." },
                { title: "Track Weekly Progress", desc: "Check this panel every Friday to see if topics are improving." },
              ].map((t) => (
                <div key={t.title} className="rounded-2xl border border-royal/8 dark:border-white/8 bg-surface p-4">
                  <p className="text-sm font-semibold text-ink">{t.title}</p>
                  <p className="mt-1 text-[11px] text-slate-400 leading-snug">{t.desc}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </AppShell>
  );
}
