"use client";
import { FileBarChart2, Download, TrendingUp } from "lucide-react";
import { AppShell } from "@/components/page-shell";
import { GlassCard, Pill, ProgressBar } from "@/components/platform";

const reports = [
  { title: "Weekly Progress Report",     desc: "All students · Week of 12 May 2026",   ready: true,  type: "Progress",   date: "13 May 2026" },
  { title: "Class Attendance Summary",   desc: "Month of May 2026 · Class 8A",          ready: true,  type: "Attendance", date: "12 May 2026" },
  { title: "Practical Performance",      desc: "Workshop scores & teacher feedback",    ready: true,  type: "Practical",  date: "11 May 2026" },
  { title: "Assignment Completion Rate", desc: "All assignments · This semester",       ready: true,  type: "Assignment", date: "10 May 2026" },
  { title: "Individual Student Report",  desc: "Select a student to generate",          ready: false, type: "Individual", date: "—" },
  { title: "Parent Communication Log",   desc: "Scheduled for end of term",             ready: false, type: "Parent",     date: "—" },
];

const topStudents = [
  { name: "Ishaan Gupta", score: 95, class: "8A" },
  { name: "Aanya Sharma", score: 88, class: "8A" },
  { name: "Meera Nair",   score: 85, class: "8B" },
  { name: "Arjun Singh",  score: 73, class: "8A" },
  { name: "Priya Rao",    score: 79, class: "9A" },
];

export default function ReportsPage() {
  return (
    <AppShell active="Reports" title="Report Generator" role="teacher">
      <div className="space-y-5">
        <div className="grid gap-4 sm:grid-cols-4">
          {[
            { label: "Reports Generated", value: "8",   sub: "This month" },
            { label: "Ready to Download", value: "4",   sub: "Available now" },
            { label: "Class Average",     value: "76%", sub: "Progress score" },
            { label: "Sent to Parents",   value: "3",   sub: "This month" },
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
            <div className="flex items-center gap-2 mb-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-teal to-[#0d7272] shadow-sm">
                <FileBarChart2 className="h-4 w-4 text-white" />
              </div>
              <h3 className="text-lg font-bold text-ink">Available Reports</h3>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {reports.map((r) => (
                <div key={r.title} className="rounded-2xl border border-royal/8 dark:border-white/8 bg-surface p-4">
                  <div className="flex items-start gap-2 mb-1">
                    <TrendingUp className="h-4 w-4 text-teal flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-ink">{r.title}</p>
                      <p className="text-[11px] text-slate-400 mt-0.5">{r.desc}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-[10px] text-slate-400">{r.ready ? `Generated ${r.date}` : "Not ready"}</span>
                    <Pill tone={r.type === "Progress" ? "teal" : r.type === "Attendance" ? "gold" : r.type === "Practical" ? "royal" : "marigold"}>{r.type}</Pill>
                  </div>
                  <button className={`mt-3 flex w-full items-center justify-center gap-1.5 rounded-xl py-2 text-xs font-semibold transition-colors ${
                    r.ready
                      ? "bg-teal/10 text-teal hover:bg-teal/20"
                      : "bg-slate-100 dark:bg-slate-700 text-slate-400 cursor-not-allowed"
                  }`}>
                    <Download className="h-3.5 w-3.5" />
                    {r.ready ? "Download PDF" : "Not Available"}
                  </button>
                </div>
              ))}
            </div>

            {/* Generate custom */}
            <div className="mt-5 rounded-2xl border border-dashed border-royal/20 p-5">
              <h4 className="text-sm font-semibold text-ink mb-3">Generate Custom Report</h4>
              <div className="grid gap-3 sm:grid-cols-3">
                <label className="block">
                  <span className="mb-1 block text-xs font-semibold text-slate-500">Report Type</span>
                  <select className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 px-3 py-2 text-sm text-ink outline-none focus:border-teal">
                    <option>Progress</option><option>Attendance</option><option>Practical</option><option>Individual</option>
                  </select>
                </label>
                <label className="block">
                  <span className="mb-1 block text-xs font-semibold text-slate-500">Class</span>
                  <select className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 px-3 py-2 text-sm text-ink outline-none focus:border-teal">
                    <option>8A</option><option>8B</option><option>9A</option><option>All</option>
                  </select>
                </label>
                <label className="block">
                  <span className="mb-1 block text-xs font-semibold text-slate-500">Period</span>
                  <select className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 px-3 py-2 text-sm text-ink outline-none focus:border-teal">
                    <option>This Week</option><option>This Month</option><option>This Semester</option>
                  </select>
                </label>
              </div>
              <button className="mt-3 flex items-center gap-2 rounded-xl bg-gradient-to-r from-teal to-[#0d7272] px-5 py-2.5 text-sm font-semibold text-white hover:-translate-y-0.5 transition-all shadow-sm">
                <FileBarChart2 className="h-4 w-4" /> Generate Report
              </button>
            </div>
          </GlassCard>

          <GlassCard className="p-6 h-fit">
            <h3 className="text-base font-bold text-ink mb-4">Top Performers</h3>
            <div className="space-y-3">
              {topStudents.map((s, i) => (
                <div key={s.name} className="flex items-center gap-3 rounded-2xl border border-royal/8 dark:border-white/8 bg-surface p-3">
                  <span className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-white ${i === 0 ? "bg-gold" : i === 1 ? "bg-slate-400" : i === 2 ? "bg-[#cd7f32]" : "bg-royal/30 text-royal"}`}>
                    {i + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center">
                      <p className="text-sm font-semibold text-ink">{s.name}</p>
                      <span className="text-sm font-bold text-teal">{s.score}%</span>
                    </div>
                    <ProgressBar value={s.score} accent="teal" />
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </AppShell>
  );
}
