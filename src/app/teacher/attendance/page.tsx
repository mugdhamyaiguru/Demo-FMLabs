"use client";
import { CalendarCheck, CheckCircle2, XCircle, Clock } from "lucide-react";
import { AppShell } from "@/components/page-shell";
import { GlassCard, Pill, ProgressBar } from "@/components/platform";

const weekDays = [
  { day: "Monday",    date: "12 May", present: 30, total: 32, absentees: ["Sneha Verma", "Rohan Mehta"] },
  { day: "Tuesday",   date: "13 May", present: 28, total: 32, absentees: ["Sneha Verma", "Rohan Mehta", "Dev Patel", "Meera Nair"] },
  { day: "Wednesday", date: "14 May", present: 31, total: 32, absentees: ["Sneha Verma"] },
  { day: "Thursday",  date: "15 May", present: 29, total: 32, absentees: ["Rohan Mehta", "Dev Patel", "Arjun Singh"] },
  { day: "Friday",    date: "16 May", present: 27, total: 32, absentees: ["Sneha Verma", "Rohan Mehta", "Dev Patel", "Meera Nair", "Priya Rao"] },
];

const students = [
  { name: "Aanya Sharma", attendance: 96, mon: true,  tue: true,  wed: true,  thu: true,  fri: true  },
  { name: "Rohan Mehta",  attendance: 72, mon: false, tue: false, wed: true,  thu: false, fri: false },
  { name: "Priya Rao",    attendance: 88, mon: true,  tue: true,  wed: true,  thu: true,  fri: false },
  { name: "Ishaan Gupta", attendance: 98, mon: true,  tue: true,  wed: true,  thu: true,  fri: true  },
  { name: "Sneha Verma",  attendance: 64, mon: false, tue: false, wed: false, thu: true,  fri: false },
  { name: "Arjun Singh",  attendance: 84, mon: true,  tue: true,  wed: true,  thu: false, fri: true  },
];

export default function AttendancePage() {
  return (
    <AppShell active="Attendance" title="Attendance Management" role="teacher">
      <div className="space-y-5">
        <div className="grid gap-4 sm:grid-cols-4">
          {[
            { label: "Week Average", value: "91%", sub: "Class 8A" },
            { label: "Perfect Attendance", value: "18", sub: "All 5 days present" },
            { label: "Below 80%", value: "3", sub: "Needs attention" },
            { label: "Today Present", value: "27/32", sub: "16 May 2026" },
          ].map(({ label, value, sub }) => (
            <GlassCard key={label} className="p-5">
              <p className="text-xs text-slate-400">{label}</p>
              <p className="mt-1 text-2xl font-bold text-ink">{value}</p>
              <p className="text-[11px] text-slate-400">{sub}</p>
            </GlassCard>
          ))}
        </div>

        <div className="grid gap-5 xl:grid-cols-[1.3fr_0.7fr]">
          {/* Weekly summary */}
          <GlassCard className="p-6">
            <div className="flex items-center gap-2 mb-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-teal to-[#0d7272] shadow-sm">
                <CalendarCheck className="h-4 w-4 text-white" />
              </div>
              <h3 className="text-lg font-bold text-ink">This Week · Class 8A</h3>
            </div>
            <div className="space-y-3">
              {weekDays.map((d) => (
                <div key={d.day} className="rounded-2xl border border-royal/8 dark:border-white/8 bg-surface p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span className="text-sm font-semibold text-ink">{d.day}</span>
                      <span className="ml-2 text-[11px] text-slate-400">{d.date}</span>
                    </div>
                    <span className="text-sm font-bold text-ink">{d.present}/{d.total}</span>
                  </div>
                  <ProgressBar value={(d.present / d.total) * 100} accent={d.present / d.total >= 0.9 ? "teal" : "gold"} />
                  {d.absentees.length > 0 && (
                    <p className="mt-2 text-[11px] text-crimson">Absent: {d.absentees.join(", ")}</p>
                  )}
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Student-level */}
          <GlassCard className="p-6">
            <h3 className="text-lg font-bold text-ink mb-5">Student Overview</h3>
            <div className="overflow-hidden rounded-2xl border border-royal/8 dark:border-white/8">
              <table className="w-full text-sm">
                <thead className="bg-surface dark:bg-slate-800/60">
                  <tr>
                    <th className="px-3 py-2 text-left text-[10px] font-semibold text-slate-400 uppercase">Student</th>
                    {["M","T","W","T","F"].map((d, i) => (
                      <th key={i} className="px-2 py-2 text-center text-[10px] font-semibold text-slate-400 uppercase">{d}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {students.map((s) => (
                    <tr key={s.name} className="border-t border-royal/8 dark:border-white/6">
                      <td className="px-3 py-2.5">
                        <p className="text-xs font-semibold text-ink">{s.name.split(" ")[0]}</p>
                        <p className={`text-[10px] font-bold ${s.attendance >= 80 ? "text-teal" : "text-crimson"}`}>{s.attendance}%</p>
                      </td>
                      {[s.mon, s.tue, s.wed, s.thu, s.fri].map((present, i) => (
                        <td key={i} className="px-2 py-2.5 text-center">
                          {present
                            ? <CheckCircle2 className="h-4 w-4 text-teal mx-auto" />
                            : <XCircle className="h-4 w-4 text-crimson mx-auto" />}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 rounded-2xl bg-teal/8 border border-teal/20 p-4">
              <p className="text-xs font-semibold text-teal mb-3">Mark Today's Attendance</p>
              <div className="flex gap-2">
                <button className="flex-1 rounded-xl bg-teal py-2 text-xs font-bold text-white hover:bg-[#0d7272] transition-colors">Mark All Present</button>
                <button className="flex-1 rounded-xl border border-teal/30 py-2 text-xs font-semibold text-teal hover:bg-teal/10 transition-colors">Custom Mark</button>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </AppShell>
  );
}
