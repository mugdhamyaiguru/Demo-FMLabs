"use client";
import { FlaskConical, TrendingUp } from "lucide-react";
import { AppShell } from "@/components/page-shell";
import { GlassCard, Pill, ProgressBar } from "@/components/platform";

const subjects = [
  { label: "Mathematics",  theory: 78, practical: 72, overall: 75 },
  { label: "Science",      theory: 86, practical: 88, overall: 87 },
  { label: "Coding",       theory: 91, practical: 95, overall: 93 },
  { label: "English",      theory: 62, practical: 58, overall: 60 },
];

const practicals = [
  { title: "Circuit Lab Practical",      subject: "Science", score: 88, max: 100, date: "10 May", feedback: "Good observation, neat lab report." },
  { title: "Python Mini Project",        subject: "Coding",  score: 95, max: 100, date: "9 May",  feedback: "Excellent code quality and logic." },
  { title: "Physics Pendulum Exp.",      subject: "Science", score: 74, max: 100, date: "3 May",  feedback: "Improve measurement accuracy." },
  { title: "Math Geometry Constructions",subject: "Math",    score: 68, max: 100, date: "28 Apr", feedback: "Needs to practice compass work." },
];

export default function ParentSkillsPage() {
  return (
    <AppShell active="Skills" title="Skill Performance" role="parent">
      <div className="space-y-5">
        <div className="grid gap-4 sm:grid-cols-4">
          {[
            { label: "Strongest Subject", value: "Coding",    sub: "93% overall" },
            { label: "Avg. Practical",    value: "81%",       sub: "Across assessments" },
            { label: "Avg. Theory",       value: "79%",       sub: "Across subjects" },
            { label: "Needs Focus",       value: "English",   sub: "60% overall" },
          ].map(({ label, value, sub }) => (
            <GlassCard key={label} className="p-5">
              <p className="text-xs text-slate-400">{label}</p>
              <p className="mt-1 text-2xl font-bold text-ink">{value}</p>
              <p className="text-[11px] text-slate-400">{sub}</p>
            </GlassCard>
          ))}
        </div>

        <div className="grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
          <GlassCard className="p-6">
            <div className="flex items-center gap-2 mb-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-teal to-[#0d7272] shadow-sm">
                <TrendingUp className="h-4 w-4 text-white" />
              </div>
              <h3 className="text-lg font-bold text-ink">Subject-wise Performance</h3>
            </div>
            <div className="space-y-5">
              {subjects.map((s) => (
                <div key={s.label} className="rounded-2xl border border-royal/8 dark:border-white/8 bg-surface p-4">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-sm font-bold text-ink">{s.label}</p>
                    <span className={`text-lg font-bold ${s.overall >= 80 ? "text-teal" : s.overall >= 65 ? "text-gold" : "text-crimson"}`}>{s.overall}%</span>
                  </div>
                  <div className="space-y-2">
                    {[
                      { label: "Theory", value: s.theory, accent: "royal" as const },
                      { label: "Practical", value: s.practical, accent: "teal" as const },
                    ].map(({ label, value, accent }) => (
                      <div key={label}>
                        <div className="mb-1 flex justify-between text-[11px]">
                          <span className="text-slate-400">{label}</span>
                          <span className="font-semibold text-ink">{value}%</span>
                        </div>
                        <ProgressBar value={value} accent={value >= 80 ? "teal" : value >= 65 ? "gold" : "crimson"} />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="flex items-center gap-2 mb-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-royal to-[#6f5a88] shadow-sm">
                <FlaskConical className="h-4 w-4 text-white" />
              </div>
              <h3 className="text-lg font-bold text-ink">Practical Assessments</h3>
            </div>
            <div className="space-y-3">
              {practicals.map((p) => (
                <div key={p.title} className="rounded-2xl border border-royal/8 dark:border-white/8 bg-surface p-4">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <Pill tone={p.subject === "Science" ? "teal" : p.subject === "Coding" ? "gold" : p.subject === "Math" ? "marigold" : "crimson"}>{p.subject}</Pill>
                      <p className="mt-1.5 text-sm font-semibold text-ink">{p.title}</p>
                      <p className="text-[11px] text-slate-400">{p.date}</p>
                    </div>
                    <span className={`text-xl font-bold ${p.score >= 85 ? "text-teal" : p.score >= 70 ? "text-gold" : "text-crimson"}`}>{p.score}/{p.max}</span>
                  </div>
                  <ProgressBar value={p.score} accent={p.score >= 85 ? "teal" : p.score >= 70 ? "gold" : "crimson"} />
                  <p className="mt-2 text-[11px] italic text-slate-400">"{p.feedback}"</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </AppShell>
  );
}
