"use client";
import { ClipboardList, PlusCircle, Eye } from "lucide-react";
import { AppShell } from "@/components/page-shell";
import { GlassCard, Pill, ProgressBar } from "@/components/platform";

const assignments = [
  { id: "A001", title: "Fractions & Decimals Quiz", subject: "Math", class: "8A", dueDate: "14 May 2026", submissions: 24, total: 32, status: "active", points: 20 },
  { id: "A002", title: "Science Reflection Essay", subject: "Science", class: "8A", dueDate: "16 May 2026", submissions: 18, total: 32, status: "active", points: 15 },
  { id: "A003", title: "Python Basics Checkpoint", subject: "Coding", class: "8B", dueDate: "12 May 2026", submissions: 30, total: 30, status: "grading", points: 25 },
  { id: "A004", title: "Algebra Problem Set #3", subject: "Math", class: "8A", dueDate: "10 May 2026", submissions: 32, total: 32, status: "done", points: 30 },
  { id: "A005", title: "Newton's Laws Lab Report", subject: "Science", class: "9A", dueDate: "18 May 2026", submissions: 5, total: 38, status: "active", points: 20 },
];

export default function AssignmentsPage() {
  return (
    <AppShell active="Assignments" title="Assignment Panel" role="teacher">
      <div className="space-y-5">
        <div className="grid gap-4 sm:grid-cols-4">
          {[
            { label: "Total", value: "12", sub: "All classes" },
            { label: "Active", value: "3", sub: "Open" },
            { label: "Grading", value: "1", sub: "Received" },
            { label: "Done", value: "8", sub: "Closed" },
          ].map(({ label, value, sub }) => (
            <GlassCard key={label} className="p-5">
              <p className="text-xs text-slate-400">{label}</p>
              <p className="mt-1 text-2xl font-bold text-ink">{value}</p>
              <p className="text-[11px] text-slate-400">{sub}</p>
            </GlassCard>
          ))}
        </div>
        <div className="grid gap-5 xl:grid-cols-[1fr_320px]">
          <GlassCard className="p-6">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-lg font-bold text-ink">All Assignments</h3>
              <button className="flex items-center gap-2 rounded-xl bg-teal px-4 py-2 text-sm font-semibold text-white hover:bg-[#0d7272] transition-colors">
                <PlusCircle className="h-4 w-4" /> New
              </button>
            </div>
            <div className="space-y-3">
              {assignments.map((a) => (
                <div key={a.id} className="rounded-2xl border border-royal/8 dark:border-white/8 bg-surface p-4">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <Pill tone={a.subject === "Math" ? "teal" : a.subject === "Science" ? "crimson" : "gold"}>{a.subject}</Pill>
                        <span className="text-[11px] text-slate-400">Class {a.class} · Due {a.dueDate} · {a.points}pts</span>
                      </div>
                      <p className="mt-1 text-sm font-semibold text-ink">{a.title}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Pill tone={a.status === "done" ? "teal" : a.status === "grading" ? "gold" : "marigold"}>
                        {a.status === "done" ? "Done" : a.status === "grading" ? "Grading" : "Active"}
                      </Pill>
                      <button className="rounded-lg border border-royal/10 bg-white dark:bg-white/5 px-3 py-1.5 text-xs font-semibold text-ink hover:shadow-sm transition-all">
                        {a.status === "grading" ? "Grade" : "View"}
                      </button>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="mb-1 flex justify-between text-[11px] text-slate-400">
                      <span>Submissions</span><span>{a.submissions}/{a.total}</span>
                    </div>
                    <ProgressBar value={(a.submissions / a.total) * 100} accent={a.status === "done" ? "teal" : a.status === "grading" ? "gold" : "marigold"} />
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
          <GlassCard className="p-6 h-fit">
            <h3 className="text-lg font-bold text-ink mb-5">Create Assignment</h3>
            <div className="space-y-3">
              {[{ label: "Title", placeholder: "e.g. Fractions Quiz", type: "text" }, { label: "Due Date", placeholder: "", type: "date" }, { label: "Max Points", placeholder: "20", type: "number" }].map(({ label, placeholder, type }) => (
                <label key={label} className="block">
                  <span className="mb-1 block text-xs font-semibold text-slate-500">{label}</span>
                  <input type={type} placeholder={placeholder} className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 px-3 py-2.5 text-sm text-ink outline-none focus:border-teal placeholder:text-slate-400" />
                </label>
              ))}
              {[{ label: "Subject", opts: ["Mathematics", "Science", "Coding"] }, { label: "Class", opts: ["8A", "8B", "9A"] }].map(({ label, opts }) => (
                <label key={label} className="block">
                  <span className="mb-1 block text-xs font-semibold text-slate-500">{label}</span>
                  <select className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 px-3 py-2.5 text-sm text-ink outline-none focus:border-teal">
                    {opts.map((o) => <option key={o}>{o}</option>)}
                  </select>
                </label>
              ))}
              <label className="block">
                <span className="mb-1 block text-xs font-semibold text-slate-500">Instructions</span>
                <textarea rows={3} placeholder="Task description..." className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 px-3 py-2.5 text-sm text-ink outline-none focus:border-teal resize-none placeholder:text-slate-400" />
              </label>
              <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold to-marigold py-3 text-sm font-bold text-white shadow-sm hover:-translate-y-0.5 transition-all">
                <PlusCircle className="h-4 w-4" /> Create & Publish
              </button>
            </div>
          </GlassCard>
        </div>
      </div>
    </AppShell>
  );
}
