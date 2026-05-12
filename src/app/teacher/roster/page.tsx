"use client";
import { Users2, Search, Filter, Mail, Phone } from "lucide-react";
import { AppShell } from "@/components/page-shell";
import { GlassCard, Pill, ProgressBar } from "@/components/platform";

const students = [
  { name: "Aanya Sharma",  roll: "8A-01", email: "aanya@school.edu",  phone: "+91 98765 43210", attendance: "96%", progress: 88, grade: "A",  subject: "Math",    joined: "June 2024" },
  { name: "Rohan Mehta",   roll: "8A-02", email: "rohan@school.edu",  phone: "+91 87654 32109", attendance: "82%", progress: 64, grade: "B",  subject: "Science", joined: "June 2024" },
  { name: "Priya Rao",     roll: "8A-03", email: "priya@school.edu",  phone: "+91 76543 21098", attendance: "91%", progress: 79, grade: "B+", subject: "Math",    joined: "June 2024" },
  { name: "Ishaan Gupta",  roll: "8A-04", email: "ishaan@school.edu", phone: "+91 65432 10987", attendance: "98%", progress: 95, grade: "A+", subject: "Coding",  joined: "June 2024" },
  { name: "Sneha Verma",   roll: "8A-05", email: "sneha@school.edu",  phone: "+91 54321 09876", attendance: "75%", progress: 58, grade: "C+", subject: "Science", joined: "June 2024" },
  { name: "Arjun Singh",   roll: "8A-06", email: "arjun@school.edu",  phone: "+91 43210 98765", attendance: "89%", progress: 73, grade: "B",  subject: "Math",    joined: "June 2024" },
  { name: "Meera Nair",    roll: "8A-07", email: "meera@school.edu",  phone: "+91 32109 87654", attendance: "93%", progress: 85, grade: "A",  subject: "Coding",  joined: "June 2024" },
  { name: "Dev Patel",     roll: "8A-08", email: "dev@school.edu",    phone: "+91 21098 76543", attendance: "88%", progress: 71, grade: "B",  subject: "Math",    joined: "June 2024" },
];

const gradeColor: Record<string, string> = {
  "A+": "bg-teal/15 text-teal", "A": "bg-teal/10 text-teal",
  "B+": "bg-gold/15 text-[#8a6213]", "B": "bg-gold/10 text-[#8a6213]",
  "C+": "bg-crimson/10 text-crimson", "C": "bg-crimson/10 text-crimson",
};

export default function RosterPage() {
  return (
    <AppShell active="Roster" title="Student Roster" role="teacher">
      <div className="space-y-5">
        {/* Stats */}
        <div className="grid gap-4 sm:grid-cols-4">
          {[
            { label: "Total Students", value: "32", sub: "Class 8A" },
            { label: "Above 90% Attendance", value: "18", sub: "56% of class" },
            { label: "Average Progress", value: "76%", sub: "This semester" },
            { label: "Need Support", value: "4", sub: "Below 65% progress" },
          ].map(({ label, value, sub }) => (
            <GlassCard key={label} className="p-5">
              <p className="text-xs text-slate-400">{label}</p>
              <p className="mt-1 text-2xl font-bold text-ink">{value}</p>
              <p className="text-[11px] text-slate-400">{sub}</p>
            </GlassCard>
          ))}
        </div>

        {/* Search + Filter bar */}
        <GlassCard className="p-4">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex flex-1 min-w-[200px] items-center gap-2 rounded-xl border border-royal/10 bg-surface px-3 py-2.5">
              <Search className="h-4 w-4 text-slate-400 flex-shrink-0" />
              <input className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-slate-400" placeholder="Search students..." />
            </div>
            <button className="flex items-center gap-2 rounded-xl border border-royal/10 bg-surface px-4 py-2.5 text-sm font-semibold text-ink hover:bg-royal/5 transition-colors">
              <Filter className="h-4 w-4" /> Filter by subject
            </button>
            <button className="rounded-xl bg-teal px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#0d7272] transition-colors">
              + Add Student
            </button>
          </div>
        </GlassCard>

        {/* Roster table */}
        <GlassCard className="p-6">
          <div className="flex items-center gap-2 mb-5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-teal to-[#0d7272] shadow-sm">
              <Users2 className="h-4 w-4 text-white" />
            </div>
            <h3 className="text-lg font-bold text-ink">Class 8A · Full Roster</h3>
          </div>
          <div className="overflow-hidden rounded-2xl border border-royal/8 dark:border-white/8">
            <table className="w-full text-left text-sm">
              <thead className="bg-surface dark:bg-slate-800/60">
                <tr>
                  {["Roll No.", "Student", "Contact", "Attendance", "Progress", "Grade", "Action"].map((h) => (
                    <th key={h} className="px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-[0.1em]">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {students.map((s, i) => (
                  <tr key={s.name} className={`border-t border-royal/8 dark:border-white/6 transition-colors hover:bg-surface dark:hover:bg-slate-800/30 ${i % 2 === 0 ? "" : "bg-white/20"}`}>
                    <td className="px-4 py-3 text-xs text-slate-400 font-mono">{s.roll}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-royal/20 to-teal/20 text-xs font-bold text-royal dark:text-teal">
                          {s.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-semibold text-ink">{s.name}</p>
                          <p className="text-[11px] text-slate-400">{s.subject}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-1 text-[11px] text-slate-400"><Mail className="h-3 w-3" /> {s.email}</div>
                        <div className="flex items-center gap-1 text-[11px] text-slate-400"><Phone className="h-3 w-3" /> {s.phone}</div>
                      </div>
                    </td>
                    <td className="px-4 py-3 font-semibold text-ink">{s.attendance}</td>
                    <td className="px-4 py-3 w-28">
                      <div className="flex items-center gap-2">
                        <div className="flex-1"><ProgressBar value={s.progress} accent={s.progress >= 80 ? "teal" : s.progress >= 65 ? "gold" : "crimson"} /></div>
                        <span className="text-xs text-slate-400">{s.progress}%</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex items-center justify-center rounded-full px-2.5 py-0.5 text-xs font-bold ${gradeColor[s.grade] ?? "bg-slate-100 text-slate-500"}`}>{s.grade}</span>
                    </td>
                    <td className="px-4 py-3">
                      <button className="rounded-lg bg-royal/8 px-3 py-1.5 text-xs font-semibold text-royal hover:bg-royal/15 transition-colors dark:text-teal dark:bg-teal/10">View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassCard>
      </div>
    </AppShell>
  );
}
