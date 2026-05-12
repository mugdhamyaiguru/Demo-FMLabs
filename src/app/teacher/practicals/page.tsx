"use client";
import { FlaskConical, PlusCircle } from "lucide-react";
import { AppShell } from "@/components/page-shell";
import { GlassCard, Pill, ProgressBar } from "@/components/platform";

const evals = [
  { student: "Aanya Sharma",  task: "Circuit Lab Practical",      subject: "Science", score: 92, max: 100, feedback: "Excellent precision and safety protocol adherence.", date: "10 May 2026" },
  { student: "Rohan Mehta",   task: "Physics Pendulum Experiment", subject: "Science", score: 68, max: 100, feedback: "Review safety steps and improve observation notes.", date: "10 May 2026" },
  { student: "Priya Rao",     task: "Circuit Lab Practical",      subject: "Science", score: 81, max: 100, feedback: "Good observations, minor calculation errors.", date: "10 May 2026" },
  { student: "Ishaan Gupta",  task: "Python Mini Project",        subject: "Coding",  score: 97, max: 100, feedback: "Outstanding code quality and documentation.", date: "11 May 2026" },
  { student: "Sneha Verma",   task: "Physics Pendulum Experiment", subject: "Science", score: 54, max: 100, feedback: "Incomplete report, needs to redo experiment.", date: "10 May 2026" },
  { student: "Arjun Singh",   task: "Python Mini Project",        subject: "Coding",  score: 78, max: 100, feedback: "Good logic, needs better variable naming.", date: "11 May 2026" },
];

export default function PracticalsPage() {
  return (
    <AppShell active="Practicals" title="Practical Evaluation" role="teacher">
      <div className="space-y-5">
        <div className="grid gap-4 sm:grid-cols-4">
          {[
            { label: "Total Evaluations", value: "24", sub: "This semester" },
            { label: "Average Score", value: "78%", sub: "Across all practicals" },
            { label: "Outstanding (≥90)", value: "6", sub: "Students" },
            { label: "Need Re-attempt", value: "3", sub: "Below 60" },
          ].map(({ label, value, sub }) => (
            <GlassCard key={label} className="p-5">
              <p className="text-xs text-slate-400">{label}</p>
              <p className="mt-1 text-2xl font-bold text-ink">{value}</p>
              <p className="text-[11px] text-slate-400">{sub}</p>
            </GlassCard>
          ))}
        </div>

        <div className="grid gap-5 xl:grid-cols-[1fr_340px]">
          <GlassCard className="p-6">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-royal to-[#6f5a88] shadow-sm">
                  <FlaskConical className="h-4 w-4 text-white" />
                </div>
                <h3 className="text-lg font-bold text-ink">Evaluation Records</h3>
              </div>
              <button className="flex items-center gap-2 rounded-xl bg-royal px-4 py-2 text-sm font-semibold text-white hover:bg-[#3a2a5a] transition-colors">
                <PlusCircle className="h-4 w-4" /> New Evaluation
              </button>
            </div>
            <div className="space-y-3">
              {evals.map((e) => (
                <div key={`${e.student}-${e.task}`} className="rounded-2xl border border-royal/8 dark:border-white/8 bg-surface p-4">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-royal/20 to-teal/20 text-xs font-bold text-royal dark:text-teal">
                          {e.student.charAt(0)}
                        </div>
                        <span className="text-sm font-semibold text-ink">{e.student}</span>
                        <Pill tone={e.subject === "Science" ? "teal" : "gold"}>{e.subject}</Pill>
                      </div>
                      <p className="mt-1 text-xs text-slate-400">{e.task} · {e.date}</p>
                    </div>
                    <span className={`text-xl font-bold ${e.score >= 90 ? "text-teal" : e.score >= 70 ? "text-gold" : "text-crimson"}`}>
                      {e.score}/{e.max}
                    </span>
                  </div>
                  <ProgressBar value={e.score} accent={e.score >= 90 ? "teal" : e.score >= 70 ? "gold" : "crimson"} />
                  <p className="mt-2 text-[11px] text-slate-400 italic">"{e.feedback}"</p>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-6 h-fit">
            <h3 className="text-lg font-bold text-ink mb-5">Add Evaluation</h3>
            <div className="space-y-3">
              {[{ label: "Student Name", placeholder: "e.g. Aanya Sharma" }, { label: "Task / Lab Name", placeholder: "e.g. Circuit Lab" }].map(({ label, placeholder }) => (
                <label key={label} className="block">
                  <span className="mb-1 block text-xs font-semibold text-slate-500">{label}</span>
                  <input type="text" placeholder={placeholder} className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 px-3 py-2.5 text-sm text-ink outline-none focus:border-teal placeholder:text-slate-400" />
                </label>
              ))}
              <label className="block">
                <span className="mb-1 block text-xs font-semibold text-slate-500">Subject</span>
                <select className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 px-3 py-2.5 text-sm text-ink outline-none focus:border-teal">
                  <option>Science</option><option>Coding</option><option>Mathematics</option>
                </select>
              </label>
              <div className="grid grid-cols-2 gap-3">
                <label className="block">
                  <span className="mb-1 block text-xs font-semibold text-slate-500">Score</span>
                  <input type="number" placeholder="e.g. 85" className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 px-3 py-2.5 text-sm text-ink outline-none focus:border-teal placeholder:text-slate-400" />
                </label>
                <label className="block">
                  <span className="mb-1 block text-xs font-semibold text-slate-500">Max Score</span>
                  <input type="number" placeholder="100" className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 px-3 py-2.5 text-sm text-ink outline-none focus:border-teal placeholder:text-slate-400" />
                </label>
              </div>
              <label className="block">
                <span className="mb-1 block text-xs font-semibold text-slate-500">Feedback</span>
                <textarea rows={3} placeholder="Write feedback..." className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 px-3 py-2.5 text-sm text-ink outline-none focus:border-teal resize-none placeholder:text-slate-400" />
              </label>
              <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-royal to-[#6f5a88] py-3 text-sm font-bold text-white shadow-sm hover:-translate-y-0.5 transition-all">
                <PlusCircle className="h-4 w-4" /> Submit Evaluation
              </button>
            </div>
          </GlassCard>
        </div>
      </div>
    </AppShell>
  );
}
