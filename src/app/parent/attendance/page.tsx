"use client";
import { CalendarCheck, CheckCircle2, XCircle } from "lucide-react";
import { AppShell } from "@/components/page-shell";
import { GlassCard, ProgressBar } from "@/components/platform";

const weekDays = [
  { day: "Monday",    date: "12 May", present: true,  activity: "Math + Science" },
  { day: "Tuesday",   date: "13 May", present: true,  activity: "Coding + English" },
  { day: "Wednesday", date: "14 May", present: false, activity: "Absent" },
  { day: "Thursday",  date: "15 May", present: true,  activity: "Science Lab" },
  { day: "Friday",    date: "16 May", present: true,  activity: "Math Quiz" },
];

const monthData = [
  { week: "Week 1 (Apr 29–May 3)",   present: 5, total: 5, pct: 100 },
  { week: "Week 2 (May 6–10)",       present: 4, total: 5, pct: 80  },
  { week: "Week 3 (May 12–16)",      present: 4, total: 5, pct: 80  },
  { week: "Week 4 (May 19–23)",      present: 5, total: 5, pct: 100 },
];

const workshops = [
  { title: "Circuit Lab",       date: "10 May", attended: true  },
  { title: "Python Workshop",   date: "7 May",  attended: true  },
  { title: "Science Fair Prep", date: "3 May",  attended: false },
  { title: "Math Olympiad",     date: "28 Apr", attended: true  },
];

export default function ParentAttendancePage() {
  return (
    <AppShell active="Attendance" title="Attendance Tracker" role="parent">
      <div className="space-y-5">
        <div className="grid gap-4 sm:grid-cols-4">
          {[
            { label: "Monthly Attendance", value: "94%",   sub: "May 2026" },
            { label: "Days Present",       value: "18/20", sub: "This month" },
            { label: "Workshops Attended", value: "3/4",   sub: "This month" },
            { label: "Absent Days",        value: "2",     sub: "This month" },
          ].map(({ label, value, sub }) => (
            <GlassCard key={label} className="p-5">
              <p className="text-xs text-slate-400">{label}</p>
              <p className="mt-1 text-2xl font-bold text-ink">{value}</p>
              <p className="text-[11px] text-slate-400">{sub}</p>
            </GlassCard>
          ))}
        </div>

        <div className="grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-5">
            <GlassCard className="p-6">
              <div className="flex items-center gap-2 mb-5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-teal to-[#0d7272] shadow-sm">
                  <CalendarCheck className="h-4 w-4 text-white" />
                </div>
                <h3 className="text-lg font-bold text-ink">This Week · Aanya Sharma</h3>
              </div>
              <div className="space-y-2.5">
                {weekDays.map((d) => (
                  <div key={d.day} className={`flex items-center justify-between rounded-2xl border px-4 py-3.5 ${d.present ? "border-teal/20 bg-teal/5" : "border-crimson/20 bg-crimson/5"}`}>
                    <div className="flex items-center gap-3">
                      {d.present
                        ? <CheckCircle2 className="h-5 w-5 text-teal flex-shrink-0" />
                        : <XCircle className="h-5 w-5 text-crimson flex-shrink-0" />}
                      <div>
                        <p className="text-sm font-semibold text-ink">{d.day} · {d.date}</p>
                        <p className="text-[11px] text-slate-400">{d.activity}</p>
                      </div>
                    </div>
                    <span className={`text-xs font-bold ${d.present ? "text-teal" : "text-crimson"}`}>{d.present ? "Present" : "Absent"}</span>
                  </div>
                ))}
              </div>
            </GlassCard>

            <GlassCard className="p-6">
              <h3 className="text-base font-bold text-ink mb-4">Monthly Overview · May 2026</h3>
              <div className="space-y-3">
                {monthData.map((w) => (
                  <div key={w.week}>
                    <div className="mb-1 flex justify-between text-sm">
                      <span className="text-slate-500 text-xs">{w.week}</span>
                      <span className="font-semibold text-ink">{w.present}/{w.total} days</span>
                    </div>
                    <ProgressBar value={w.pct} accent={w.pct === 100 ? "teal" : "gold"} />
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>

          <GlassCard className="p-6 h-fit">
            <h3 className="text-base font-bold text-ink mb-4">Workshop Participation</h3>
            <div className="space-y-3">
              {workshops.map((w) => (
                <div key={w.title} className={`flex items-center justify-between rounded-2xl border px-4 py-3 ${w.attended ? "border-teal/20 bg-teal/5" : "border-crimson/20 bg-crimson/5"}`}>
                  <div>
                    <p className="text-sm font-semibold text-ink">{w.title}</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">{w.date}</p>
                  </div>
                  {w.attended
                    ? <CheckCircle2 className="h-5 w-5 text-teal flex-shrink-0" />
                    : <XCircle className="h-5 w-5 text-crimson flex-shrink-0" />}
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </AppShell>
  );
}
