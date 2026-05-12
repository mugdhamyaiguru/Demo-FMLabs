"use client";
import { BookOpenCheck, CheckCircle2, Clock3, Award, TrendingUp } from "lucide-react";
import { AppShell } from "@/components/page-shell";
import { GlassCard, Pill, ProgressBar } from "@/components/platform";

const modules = [
  { title: "Fractions & Decimals",   subject: "Math",    date: "12 May", score: 88, done: true  },
  { title: "Newton's Laws",          subject: "Science", date: "11 May", score: 91, done: true  },
  { title: "Python Functions",       subject: "Coding",  date: "10 May", score: 95, done: true  },
  { title: "Essay Structure",        subject: "English", date: "9 May",  score: 62, done: false },
  { title: "Algebra — Linear Eqs",  subject: "Math",    date: "8 May",  score: 74, done: true  },
  { title: "Circuit Lab Practical",  subject: "Science", date: "7 May",  score: 87, done: true  },
  { title: "Vocabulary Builder",     subject: "English", date: "6 May",  score: 58, done: false },
  { title: "Python Lists & Loops",   subject: "Coding",  date: "5 May",  score: 90, done: true  },
];

const certs = [
  { title: "Python Beginner Certificate",   date: "10 May 2026", icon: "🐍" },
  { title: "Math Mastery — Fractions",      date: "2 Apr 2026",  icon: "📐" },
  { title: "Science Explorer Badge",        date: "15 Mar 2026", icon: "🔬" },
];

const subjects = [
  { label: "Mathematics", completed: 8,  total: 12, pct: 67 },
  { label: "Science",     completed: 7,  total: 10, pct: 70 },
  { label: "Coding",      completed: 6,  total: 8,  pct: 75 },
  { label: "English",     completed: 3,  total: 6,  pct: 50 },
];

export default function ParentProgressPage() {
  return (
    <AppShell active="Progress" title="Child Progress" role="parent">
      <div className="space-y-5">
        <div className="grid gap-4 sm:grid-cols-4">
          {[
            { label: "Modules Done",     value: "24/36", sub: "67% complete" },
            { label: "Certifications",   value: "3",     sub: "Earned this year" },
            { label: "Avg. Score",        value: "79%",  sub: "Across all subjects" },
            { label: "Current Streak",   value: "7 days", sub: "Keep it up!" },
          ].map(({ label, value, sub }) => (
            <GlassCard key={label} className="p-5">
              <p className="text-xs text-slate-400">{label}</p>
              <p className="mt-1 text-2xl font-bold text-ink">{value}</p>
              <p className="text-[11px] text-slate-400">{sub}</p>
            </GlassCard>
          ))}
        </div>

        <div className="grid gap-5 xl:grid-cols-[1.3fr_0.7fr]">
          <GlassCard className="p-6">
            <div className="flex items-center gap-2 mb-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-royal to-[#6f5a88] shadow-sm">
                <BookOpenCheck className="h-4 w-4 text-white" />
              </div>
              <h3 className="text-lg font-bold text-ink">Module History · Aanya Sharma</h3>
            </div>
            <div className="overflow-hidden rounded-2xl border border-royal/8 dark:border-white/8">
              <table className="w-full text-sm text-left">
                <thead className="bg-surface dark:bg-slate-800/60">
                  <tr>
                    {["Module", "Subject", "Date", "Score", "Status"].map((h) => (
                      <th key={h} className="px-4 py-3 text-[10px] font-semibold text-slate-400 uppercase tracking-[0.1em]">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {modules.map((m, i) => (
                    <tr key={m.title} className={`border-t border-royal/8 dark:border-white/6 hover:bg-surface transition-colors ${i % 2 === 0 ? "" : "bg-white/20"}`}>
                      <td className="px-4 py-3 font-semibold text-ink">{m.title}</td>
                      <td className="px-4 py-3"><Pill tone={m.subject === "Math" ? "teal" : m.subject === "Science" ? "marigold" : m.subject === "Coding" ? "gold" : "crimson"}>{m.subject}</Pill></td>
                      <td className="px-4 py-3 text-slate-400 text-xs">{m.date}</td>
                      <td className="px-4 py-3 font-bold text-ink">{m.done ? `${m.score}%` : "—"}</td>
                      <td className="px-4 py-3">
                        {m.done
                          ? <CheckCircle2 className="h-4 w-4 text-teal" />
                          : <Clock3 className="h-4 w-4 text-gold" />}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-5 space-y-3">
              <h4 className="text-sm font-bold text-ink">Completion by Subject</h4>
              {subjects.map((s) => (
                <div key={s.label}>
                  <div className="mb-1 flex justify-between text-xs">
                    <span className="font-medium text-ink">{s.label}</span>
                    <span className="text-slate-400">{s.completed}/{s.total} modules</span>
                  </div>
                  <ProgressBar value={s.pct} accent={s.pct >= 70 ? "teal" : s.pct >= 55 ? "gold" : "crimson"} />
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-6 h-fit">
            <div className="flex items-center gap-2 mb-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-gold to-marigold shadow-sm">
                <Award className="h-4 w-4 text-white" />
              </div>
              <h3 className="text-base font-bold text-ink">Certifications</h3>
            </div>
            <div className="space-y-3">
              {certs.map((c) => (
                <div key={c.title} className="rounded-2xl border border-royal/8 dark:border-white/8 bg-surface p-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{c.icon}</span>
                    <div>
                      <p className="text-sm font-semibold text-ink">{c.title}</p>
                      <p className="text-[11px] text-slate-400 mt-0.5">{c.date}</p>
                    </div>
                  </div>
                  <button className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-xl bg-teal/10 py-2 text-xs font-semibold text-teal hover:bg-teal/20 transition-colors">
                    Download Certificate
                  </button>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </AppShell>
  );
}
