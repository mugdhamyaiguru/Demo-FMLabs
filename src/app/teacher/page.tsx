"use client";

import {
  Users2, ClipboardList, CalendarCheck, FileBarChart2, Bell, PlusCircle, Video, Send, Play, 
  AlertCircle, CheckCircle2, Clock,
} from "lucide-react";
import { AppShell } from "@/components/page-shell";
import { GlassCard, Pill, ProgressBar } from "@/components/platform";

const roster = [
  { name: "Aanya Sharma",  attendance: "96%", progress: 88, grade: "A",  subject: "Math" },
  { name: "Rohan Mehta",   attendance: "82%", progress: 64, grade: "B",  subject: "Science" },
  { name: "Priya Kapoor",  attendance: "91%", progress: 79, grade: "B+", subject: "Math" },
  { name: "Ishaan Gupta",  attendance: "98%", progress: 95, grade: "A+", subject: "Coding" },
  { name: "Sneha Verma",   attendance: "75%", progress: 58, grade: "C+", subject: "Science" },
  { name: "Arjun Singh",   attendance: "89%", progress: 73, grade: "B",  subject: "Math" },
];

const notifications = [
  { type: "alert",    message: "2 students have not submitted the Fractions Quiz",   time: "10 min ago" },
  { type: "info",     message: "Live session scheduled for 3:00 PM today",           time: "1 hr ago" },
  { type: "success",  message: "Weekly report sent to all parents",                  time: "2 hrs ago" },
  { type: "alert",    message: "Sneha Verma attendance below 80% threshold",         time: "Yesterday" },
  { type: "info",     message: "Practical evaluations due by end of week",           time: "Yesterday" },
];

const gradeColor: Record<string, string> = {
  "A+": "bg-teal/15 text-teal",
  "A":  "bg-teal/10 text-teal",
  "B+": "bg-gold/15 text-[#8a6213]",
  "B":  "bg-gold/10 text-[#8a6213]",
  "C+": "bg-crimson/10 text-crimson",
  "C":  "bg-crimson/10 text-crimson",
};

const notifIcon = {
  alert:   <AlertCircle className="h-4 w-4 text-crimson flex-shrink-0" />,
  info:    <Clock className="h-4 w-4 text-teal flex-shrink-0" />,
  success: <CheckCircle2 className="h-4 w-4 text-[#22c55e] flex-shrink-0" />,
};

function SectionHeader({ icon: Icon, label, title, grad }: { icon: React.ElementType; label: string; title: string; grad: string }) {
  return (
    <div className="flex items-center justify-between mb-4">
      <div>
        <Pill tone="teal">{label}</Pill>
        <h3 className="mt-1.5 text-base font-bold text-ink">{title}</h3>
      </div>
      <div className={`flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br ${grad} shadow-sm text-white`}>
        <Icon className="h-4 w-4" />
      </div>
    </div>
  );
}

export default function TeacherPage() {
  return (
    <AppShell active="Dashboard" title="Teacher Dashboard" role="teacher">
      <div className="space-y-6 max-w-5xl">

        {/* ── KPI Strip ── */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Class Attendance",    value: "94%", sub: "32 students · 8A",     Icon: CalendarCheck,  grad: "from-teal to-[#0d7272]" },
            { label: "Active Assignments",  value: "12",  sub: "3 pending grading",    Icon: ClipboardList,  grad: "from-gold to-marigold" },
            { label: "Reports Generated",   value: "8",   sub: "This month",           Icon: FileBarChart2,  grad: "from-royal to-[#6f5a88]" },
            { label: "Notifications",       value: "5",   sub: "2 require attention",  Icon: Bell,           grad: "from-crimson to-[#e05555]" },
          ].map(({ label, value, sub, Icon, grad }) => (
            <GlassCard key={label} className="p-5 dark:bg-[#1e1b2e]/85 dark:border-white/8">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs text-slate-400 font-semibold">{label}</p>
                  <p className="mt-1.5 text-2xl font-black text-ink">{value}</p>
                  <p className="mt-0.5 text-[11px] text-slate-400 font-medium">{sub}</p>
                </div>
                <div className={`flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br ${grad} shadow-sm text-white`}>
                  <Icon className="h-4 w-4" />
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* ── Quick Actions ── */}
        <GlassCard className="p-5 dark:bg-[#1e1b2e]/85 dark:border-white/8">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-marigold to-[#e07e20] shadow-sm text-white">
              <PlusCircle className="h-4 w-4" />
            </div>
            <h3 className="text-base font-bold text-ink">Quick Actions</h3>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Create Assignment", Icon: ClipboardList, grad: "from-teal to-[#0d7272]" },
              { label: "Start Live Session", Icon: Video, grad: "from-royal to-[#6f5a88]" },
              { label: "Take Attendance", Icon: CalendarCheck, grad: "from-gold to-marigold" },
              { label: "Send Announcement", Icon: Send, grad: "from-crimson to-[#e05555]" },
            ].map(({ label, Icon, grad }) => (
              <button key={label} className="group flex items-center gap-3 rounded-2xl border border-royal/8 dark:border-white/8 bg-surface dark:bg-slate-800/40 px-4 py-3 text-left transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:border-teal/30">
                <div className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${grad} shadow-sm text-white`}>
                  <Icon className="h-4 w-4" />
                </div>
                <span className="text-xs font-bold text-ink">{label}</span>
              </button>
            ))}
          </div>
        </GlassCard>

        {/* ── Student Roster + Notification Centre (Side by Side) ── */}
        <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
          {/* Student Roster Card */}
          <GlassCard className="p-6 dark:bg-[#1e1b2e]/85 dark:border-white/8">
            <SectionHeader icon={Users2} label="Roster Summary" title="Class 8A · 32 Students" grad="from-teal to-[#0d7272]" />
            <div className="overflow-hidden rounded-2xl border border-royal/8 dark:border-white/8">
              <table className="w-full text-left text-xs">
                <thead className="bg-surface dark:bg-slate-800/60">
                  <tr>
                    {["Student", "Attendance", "Progress", "Grade"].map((h) => (
                      <th key={h} className="px-4 py-3 text-[10px] font-semibold text-slate-400 uppercase tracking-[0.12em]">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {roster.map((s, i) => (
                    <tr key={s.name} className={`border-t border-royal/8 dark:border-white/6 transition-colors hover:bg-surface dark:hover:bg-slate-800/30 ${i % 2 === 0 ? "" : "bg-white/30 dark:bg-white/2"}`}>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <div className="flex h-6.5 w-6.5 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-royal/20 to-teal/20 text-[10px] font-bold text-royal dark:text-teal">
                            {s.name.charAt(0)}
                          </div>
                          <span className="font-semibold text-ink">{s.name}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 font-semibold text-ink">{s.attendance}</td>
                      <td className="px-4 py-3 w-28">
                        <div className="flex items-center gap-2">
                          <div className="flex-1">
                            <ProgressBar value={s.progress} accent={s.progress >= 80 ? "teal" : s.progress >= 65 ? "gold" : "crimson"} />
                          </div>
                          <span className="text-[10px] text-slate-400 font-bold">{s.progress}%</span>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`inline-flex items-center justify-center rounded-full px-2 py-0.5 text-[10px] font-black ${gradeColor[s.grade] ?? "bg-slate-100 text-slate-500"}`}>
                          {s.grade}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlassCard>

          {/* Notification Centre Card */}
          <GlassCard className="p-6 dark:bg-[#1e1b2e]/85 dark:border-white/8">
            <SectionHeader icon={Bell} label="Alerts Center" title="Live Actions Required" grad="from-crimson to-[#e05555]" />
            <div className="space-y-3">
              {notifications.slice(0, 3).map((n, i) => (
                <div key={i} className={`flex items-start gap-3 rounded-2xl border px-3.5 py-3 ${
                  n.type === "alert"   ? "border-crimson/20 bg-crimson/5"  :
                  n.type === "success" ? "border-[#22c55e]/20 bg-[#22c55e]/5" :
                                         "border-teal/20 bg-teal/5"
                }`}>
                  {notifIcon[n.type as keyof typeof notifIcon]}
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-ink leading-snug font-semibold">{n.message}</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">{n.time}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Announcement panel */}
            <div className="mt-4 pt-4 border-t border-slate-200/40 dark:border-white/5">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-2">Announcement Broadcast</p>
              <textarea
                className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-800/40 px-3 py-2 text-xs text-ink placeholder:text-slate-400 outline-none resize-none focus:border-teal"
                rows={2}
                placeholder="Message details to broadcast to class..."
              />
              <button className="mt-2 w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-crimson to-[#e05555] py-2.5 text-xs font-bold text-white hover:-translate-y-0.5 transition-all shadow-sm">
                <Send className="h-3.5 w-3.5" /> Send Announcement
              </button>
            </div>
          </GlassCard>
        </div>

      </div>
    </AppShell>
  );
}