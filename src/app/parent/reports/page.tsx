"use client";
import { Download, FileBarChart2, Award, TrendingUp } from "lucide-react";
import { AppShell } from "@/components/page-shell";
import { GlassCard, Pill, ProgressBar } from "@/components/platform";

const reports = [
  { title: "Weekly Progress Report",    desc: "All subjects · Week of 12 May",  ready: true,  date: "13 May 2026", type: "Progress" },
  { title: "Monthly Attendance Report", desc: "May 2026 · Class 8A",            ready: true,  date: "12 May 2026", type: "Attendance" },
  { title: "Skill Performance Report",  desc: "Practical & theory breakdown",   ready: true,  date: "11 May 2026", type: "Skills" },
  { title: "Semester Progress Report",  desc: "Jan–May 2026 · Full summary",    ready: true,  date: "1 May 2026",  type: "Progress" },
  { title: "Certification Summary",     desc: "All earned certifications",       ready: true,  date: "10 Apr 2026", type: "Certificate" },
  { title: "End-of-Term Report",        desc: "Generated end of semester",       ready: false, date: "—",           type: "Progress" },
];

const certsList = [
  { title: "Python Beginner Certificate", issued: "10 May 2026", icon: "🐍", grade: "Distinction" },
  { title: "Math Mastery — Fractions",   issued: "2 Apr 2026",  icon: "📐", grade: "Merit" },
  { title: "Science Explorer Badge",     issued: "15 Mar 2026", icon: "🔬", grade: "Pass" },
];

const topSubjects = [
  { label: "Coding",      pct: 93 },
  { label: "Science",     pct: 87 },
  { label: "Mathematics", pct: 75 },
  { label: "English",     pct: 60 },
];

export default function ParentReportsPage() {
  return (
    <AppShell active="Reports" title="Downloadable Reports" role="parent">
      <div className="space-y-5">
        <div className="grid gap-4 sm:grid-cols-4">
          {[
            { label: "Reports Available", value: "5",   sub: "Ready to download" },
            { label: "Certifications",    value: "3",   sub: "Earned this year" },
            { label: "Overall Progress",  value: "79%", sub: "Semester average" },
            { label: "Last Updated",      value: "Today", sub: "13 May 2026" },
          ].map(({ label, value, sub }) => (
            <GlassCard key={label} className="p-5">
              <p className="text-xs text-slate-400">{label}</p>
              <p className="mt-1 text-2xl font-bold text-ink">{value}</p>
              <p className="text-[11px] text-slate-400">{sub}</p>
            </GlassCard>
          ))}
        </div>

        <div className="grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
          <GlassCard className="p-6">
            <div className="flex items-center gap-2 mb-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-teal to-[#0d7272] shadow-sm">
                <FileBarChart2 className="h-4 w-4 text-white" />
              </div>
              <h3 className="text-lg font-bold text-ink">All Reports · Aanya Sharma</h3>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {reports.map((r) => (
                <div key={r.title} className="rounded-2xl border border-royal/8 dark:border-white/8 bg-surface p-4">
                  <div className="flex items-start gap-2 mb-2">
                    <TrendingUp className="h-4 w-4 text-teal flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-ink">{r.title}</p>
                      <p className="text-[11px] text-slate-400 mt-0.5">{r.desc}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] text-slate-400">{r.ready ? `Generated ${r.date}` : "Not ready"}</span>
                    <Pill tone={r.type === "Progress" ? "teal" : r.type === "Attendance" ? "gold" : r.type === "Certificate" ? "marigold" : "royal"}>{r.type}</Pill>
                  </div>
                  <button className={`flex w-full items-center justify-center gap-1.5 rounded-xl py-2 text-xs font-semibold transition-colors ${r.ready ? "bg-teal/10 text-teal hover:bg-teal/20" : "bg-slate-100 dark:bg-slate-700 text-slate-400 cursor-not-allowed"}`}>
                    <Download className="h-3.5 w-3.5" />
                    {r.ready ? "Download PDF" : "Not Available"}
                  </button>
                </div>
              ))}
            </div>
          </GlassCard>

          <div className="space-y-5">
            <GlassCard className="p-6">
              <div className="flex items-center gap-2 mb-5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-gold to-marigold shadow-sm">
                  <Award className="h-4 w-4 text-white" />
                </div>
                <h3 className="text-base font-bold text-ink">Certificates</h3>
              </div>
              <div className="space-y-3">
                {certsList.map((c) => (
                  <div key={c.title} className="rounded-2xl border border-royal/8 dark:border-white/8 bg-surface p-4">
                    <div className="flex items-start gap-3 mb-3">
                      <span className="text-2xl">{c.icon}</span>
                      <div>
                        <p className="text-sm font-semibold text-ink">{c.title}</p>
                        <p className="text-[11px] text-slate-400 mt-0.5">{c.issued}</p>
                        <span className={`inline-block mt-1 text-[10px] font-bold px-2 py-0.5 rounded-full ${c.grade === "Distinction" ? "bg-teal/10 text-teal" : c.grade === "Merit" ? "bg-gold/10 text-[#b3690d]" : "bg-slate-100 dark:bg-slate-700 text-slate-500"}`}>{c.grade}</span>
                      </div>
                    </div>
                    <button className="flex w-full items-center justify-center gap-1.5 rounded-xl bg-teal/10 py-2 text-xs font-semibold text-teal hover:bg-teal/20 transition-colors">
                      <Download className="h-3 w-3" /> Download
                    </button>
                  </div>
                ))}
              </div>
            </GlassCard>

            <GlassCard className="p-6">
              <h3 className="text-sm font-bold text-ink mb-3">Performance Snapshot</h3>
              <div className="space-y-2.5">
                {topSubjects.map((s) => (
                  <div key={s.label}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="font-medium text-ink">{s.label}</span>
                      <span className={`font-bold ${s.pct >= 80 ? "text-teal" : s.pct >= 65 ? "text-gold" : "text-crimson"}`}>{s.pct}%</span>
                    </div>
                    <ProgressBar value={s.pct} accent={s.pct >= 80 ? "teal" : s.pct >= 65 ? "gold" : "crimson"} />
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
