"use client";

import {
  Users2, ClipboardList, CalendarCheck, FlaskConical, Video,
  FileBarChart2, Bell, PlusCircle, CheckCircle2, Clock, AlertCircle,
  TrendingUp, BookOpen, Mic, Send, Download, Play,
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

const assignments = [
  { title: "Fractions Quiz",         subject: "Math",    due: "Tomorrow",  submissions: 24, total: 32, status: "active" },
  { title: "Science Reflection",     subject: "Science", due: "Friday",    submissions: 18, total: 32, status: "active" },
  { title: "Python Basics Checkpoint", subject: "Coding", due: "Monday",   submissions: 30, total: 32, status: "grading" },
  { title: "Algebra Problem Set",    subject: "Math",    due: "Completed", submissions: 32, total: 32, status: "done" },
];

const attendance = [
  { day: "Monday",    present: 30, total: 32 },
  { day: "Tuesday",   present: 28, total: 32 },
  { day: "Wednesday", present: 31, total: 32 },
  { day: "Thursday",  present: 29, total: 32 },
  { day: "Friday",    present: 27, total: 32 },
];

const practicals = [
  { student: "Aanya Sharma",  task: "Circuit Lab",       score: 92, feedback: "Excellent precision" },
  { student: "Rohan Mehta",   task: "Physics Experiment", score: 68, feedback: "Review safety protocol" },
  { student: "Priya Kapoor",  task: "Circuit Lab",       score: 81, feedback: "Good observations" },
  { student: "Ishaan Gupta",  task: "Python Project",    score: 97, feedback: "Outstanding work" },
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
    <div className="flex items-center justify-between mb-5">
      <div>
        <Pill tone="teal">{label}</Pill>
        <h3 className="mt-2 text-lg font-bold text-ink">{title}</h3>
      </div>
      <div className={`flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br ${grad} shadow-sm`}>
        <Icon className="h-4 w-4 text-white" />
      </div>
    </div>
  );
}

export default function TeacherPage() {
  return (
    <AppShell active="Dashboard" title="Teacher Dashboard" role="teacher">
      <div className="space-y-5">

        {/* ── KPI Strip ── */}
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {[
            { label: "Class Attendance",    value: "94%", sub: "32 students · 8A",     Icon: CalendarCheck,  grad: "from-teal to-[#0d7272]" },
            { label: "Active Assignments",  value: "12",  sub: "3 pending grading",    Icon: ClipboardList,  grad: "from-gold to-marigold" },
            { label: "Reports Generated",   value: "8",   sub: "This month",           Icon: FileBarChart2,  grad: "from-royal to-[#6f5a88]" },
            { label: "Notifications",       value: "5",   sub: "2 require attention",  Icon: Bell,           grad: "from-crimson to-[#e05555]" },
          ].map(({ label, value, sub, Icon, grad }) => (
            <GlassCard key={label} className="p-5">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs text-slate-400">{label}</p>
                  <p className="mt-1.5 text-2xl font-bold text-ink">{value}</p>
                  <p className="mt-0.5 text-[11px] text-slate-400">{sub}</p>
                </div>
                <div className={`flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br ${grad} shadow-sm`}>
                  <Icon className="h-4 w-4 text-white" />
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* ── Quick Actions ── */}
        <GlassCard className="p-5">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-marigold to-[#e07e20] shadow-sm">
              <PlusCircle className="h-4 w-4 text-white" />
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
              <button key={label} className="group flex items-center gap-3 rounded-2xl border border-royal/8 dark:border-white/8 bg-surface px-4 py-3.5 text-left transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:border-teal/30">
                <div className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${grad} shadow-sm`}>
                  <Icon className="h-4 w-4 text-white" />
                </div>
                <span className="text-sm font-semibold text-ink">{label}</span>
              </button>
            ))}
          </div>
        </GlassCard>

        {/* ── Student Roster + Practical Evaluation ── */}
        <div className="grid gap-5 xl:grid-cols-[1.4fr_0.6fr]">
          {/* Student Roster */}
          <GlassCard className="p-6">
            <SectionHeader icon={Users2} label="Student Roster" title="Class 8A · 32 Students" grad="from-teal to-[#0d7272]" />
            <div className="overflow-hidden rounded-2xl border border-royal/8 dark:border-white/8">
              <table className="w-full text-left text-sm">
                <thead className="bg-surface dark:bg-slate-800/60">
                  <tr>
                    {["Student", "Subject", "Attendance", "Progress", "Grade"].map((h) => (
                      <th key={h} className="px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-[0.12em]">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {roster.map((s, i) => (
                    <tr key={s.name} className={`border-t border-royal/8 dark:border-white/6 transition-colors hover:bg-surface dark:hover:bg-slate-800/30 ${i % 2 === 0 ? "" : "bg-white/30 dark:bg-white/2"}`}>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2.5">
                          <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-royal/20 to-teal/20 text-xs font-bold text-royal dark:text-teal">
                            {s.name.charAt(0)}
                          </div>
                          <span className="font-medium text-ink">{s.name}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-slate-500 text-xs">{s.subject}</td>
                      <td className="px-4 py-3 font-semibold text-ink">{s.attendance}</td>
                      <td className="px-4 py-3 w-28">
                        <div className="flex items-center gap-2">
                          <div className="flex-1">
                            <ProgressBar value={s.progress} accent={s.progress >= 80 ? "teal" : s.progress >= 65 ? "gold" : "crimson"} />
                          </div>
                          <span className="text-xs text-slate-400">{s.progress}%</span>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`inline-flex items-center justify-center rounded-full px-2.5 py-0.5 text-xs font-bold ${gradeColor[s.grade] ?? "bg-slate-100 text-slate-500"}`}>
                          {s.grade}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlassCard>

          {/* Practical Evaluation */}
          <GlassCard className="p-6">
            <SectionHeader icon={FlaskConical} label="Practical Evaluation" title="Workshop Scores" grad="from-royal to-[#6f5a88]" />
            <div className="space-y-3">
              {practicals.map((p) => (
                <div key={p.student} className="rounded-2xl border border-royal/8 dark:border-white/8 bg-surface p-4">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-sm font-semibold text-ink">{p.student}</p>
                      <p className="text-xs text-slate-400 mt-0.5">{p.task}</p>
                    </div>
                    <span className={`text-lg font-bold ${p.score >= 90 ? "text-teal" : p.score >= 75 ? "text-gold" : "text-crimson"}`}>
                      {p.score}
                    </span>
                  </div>
                  <p className="mt-2 text-[11px] text-slate-400 italic">{p.feedback}</p>
                  <ProgressBar value={p.score} accent={p.score >= 90 ? "teal" : p.score >= 75 ? "gold" : "crimson"} />
                </div>
              ))}
              <button className="flex w-full items-center justify-center gap-2 rounded-2xl border border-dashed border-royal/20 py-3 text-xs font-semibold text-slate-400 hover:border-teal/40 hover:text-teal transition-colors">
                <PlusCircle className="h-4 w-4" /> Evaluate more submissions
              </button>
            </div>
          </GlassCard>
        </div>

        {/* ── Assignments + Attendance + Live Session ── */}
        <div className="grid gap-5 lg:grid-cols-3">

          {/* Assignment Panel */}
          <GlassCard className="p-6">
            <SectionHeader icon={ClipboardList} label="Assignments" title="Active Tasks" grad="from-gold to-marigold" />
            <div className="space-y-3">
              {assignments.map((a) => (
                <div key={a.title} className="rounded-2xl border border-royal/8 dark:border-white/8 bg-surface p-4">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-sm font-semibold text-ink">{a.title}</p>
                      <p className="text-xs text-slate-400 mt-0.5">{a.subject} · Due {a.due}</p>
                    </div>
                    <Pill tone={a.status === "done" ? "teal" : a.status === "grading" ? "gold" : "marigold"}>
                      {a.status === "done" ? "Done" : a.status === "grading" ? "Grading" : "Active"}
                    </Pill>
                  </div>
                  <div className="mt-3">
                    <div className="mb-1.5 flex justify-between text-[11px] text-slate-400">
                      <span>Submissions</span>
                      <span>{a.submissions}/{a.total}</span>
                    </div>
                    <ProgressBar value={(a.submissions / a.total) * 100} accent={a.status === "done" ? "teal" : "gold"} />
                  </div>
                </div>
              ))}
              <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-gold/15 to-marigold/15 border border-gold/25 py-3 text-xs font-semibold text-[#8a6213] hover:from-gold/25 hover:to-marigold/25 transition-colors">
                <PlusCircle className="h-4 w-4" /> Create New Assignment
              </button>
            </div>
          </GlassCard>

          {/* Attendance Management */}
          <GlassCard className="p-6">
            <SectionHeader icon={CalendarCheck} label="Attendance" title="This Week · 8A" grad="from-teal to-[#0d7272]" />
            <div className="space-y-3">
              {attendance.map((d) => (
                <div key={d.day}>
                  <div className="mb-1.5 flex justify-between text-sm">
                    <span className="font-medium text-ink">{d.day}</span>
                    <span className="text-slate-400">{d.present}/{d.total} present</span>
                  </div>
                  <ProgressBar value={(d.present / d.total) * 100} accent={d.present / d.total >= 0.9 ? "teal" : "gold"} />
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-2xl bg-teal/8 border border-teal/20 p-4">
              <p className="text-xs font-semibold text-teal">Today's Class · Not marked yet</p>
              <div className="mt-3 flex gap-2">
                <button className="flex-1 rounded-xl bg-teal py-2 text-xs font-bold text-white hover:bg-[#0d7272] transition-colors">Mark Attendance</button>
                <button className="flex-1 rounded-xl border border-teal/30 py-2 text-xs font-semibold text-teal hover:bg-teal/10 transition-colors">View History</button>
              </div>
            </div>
          </GlassCard>

          {/* Live Session Launcher */}
          <GlassCard className="p-6">
            <SectionHeader icon={Video} label="Live Session" title="Session Launcher" grad="from-royal to-[#6f5a88]" />
            <div className="space-y-3">
              <div className="rounded-2xl bg-gradient-to-br from-royal/10 to-[#6f5a88]/10 border border-royal/15 p-5 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-royal to-[#6f5a88] shadow-lg">
                  <Video className="h-7 w-7 text-white" />
                </div>
                <p className="mt-3 text-base font-bold text-ink">Start Live Class</p>
                <p className="mt-1 text-xs text-slate-400">Theory or Practical · Class 8A</p>
                <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-royal to-[#6f5a88] py-3 text-sm font-bold text-white shadow-md hover:-translate-y-0.5 transition-all">
                  <Play className="h-4 w-4" /> Launch Session
                </button>
              </div>
              {[
                { label: "Record & Save", Icon: Mic, desc: "Auto-record for absent students" },
                { label: "Screen Share", Icon: BookOpen, desc: "Share slides or whiteboard" },
                { label: "Practical Demo", Icon: FlaskConical, desc: "Live lab demonstration" },
              ].map(({ label, Icon, desc }) => (
                <button key={label} className="flex w-full items-center gap-3 rounded-2xl border border-royal/8 dark:border-white/8 bg-surface px-4 py-3 text-left hover:bg-royal/5 transition-colors">
                  <Icon className="h-4 w-4 text-royal dark:text-teal flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-ink">{label}</p>
                    <p className="text-[11px] text-slate-400">{desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* ── Report Generator + Notification Centre ── */}
        <div className="grid gap-5 lg:grid-cols-2">

          {/* Report Generator */}
          <GlassCard className="p-6">
            <SectionHeader icon={FileBarChart2} label="Report Generator" title="Class & Student Reports" grad="from-teal to-[#0d7272]" />
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { title: "Weekly Progress Report",   desc: "All students · This week",          ready: true },
                { title: "Individual Student Report", desc: "Select a student to generate",     ready: false },
                { title: "Attendance Summary",        desc: "Month of May · Class 8A",          ready: true },
                { title: "Practical Performance",     desc: "Workshop scores & feedback",       ready: true },
              ].map((r) => (
                <div key={r.title} className="rounded-2xl border border-royal/8 dark:border-white/8 bg-surface p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <TrendingUp className="h-4 w-4 text-teal flex-shrink-0" />
                    <p className="text-sm font-semibold text-ink">{r.title}</p>
                  </div>
                  <p className="text-[11px] text-slate-400 mb-3">{r.desc}</p>
                  <button className={`flex w-full items-center justify-center gap-1.5 rounded-xl py-2 text-xs font-semibold transition-colors ${
                    r.ready
                      ? "bg-teal/10 text-teal hover:bg-teal/20"
                      : "bg-slate-100 dark:bg-slate-700 text-slate-400 cursor-not-allowed"
                  }`}>
                    <Download className="h-3.5 w-3.5" />
                    {r.ready ? "Download Report" : "Not Ready"}
                  </button>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Notification Centre */}
          <GlassCard className="p-6">
            <SectionHeader icon={Bell} label="Notification Centre" title="Alerts & Announcements" grad="from-crimson to-[#e05555]" />
            <div className="space-y-2.5 mb-4">
              {notifications.map((n, i) => (
                <div key={i} className={`flex items-start gap-3 rounded-2xl border px-4 py-3 ${
                  n.type === "alert"   ? "border-crimson/20 bg-crimson/5"  :
                  n.type === "success" ? "border-[#22c55e]/20 bg-[#22c55e]/5" :
                                         "border-teal/20 bg-teal/5"
                }`}>
                  {notifIcon[n.type as keyof typeof notifIcon]}
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-ink leading-snug">{n.message}</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">{n.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-2xl border border-royal/8 dark:border-white/8 bg-surface p-4">
              <p className="text-xs font-semibold text-slate-500 mb-2">Send Announcement to Class 8A</p>
              <textarea
                className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 px-3 py-2 text-sm text-ink placeholder:text-slate-400 outline-none resize-none focus:border-teal"
                rows={2}
                placeholder="Type your message here..."
              />
              <button className="mt-2 flex items-center gap-2 rounded-xl bg-gradient-to-r from-crimson to-[#e05555] px-4 py-2 text-xs font-bold text-white hover:-translate-y-0.5 transition-all shadow-sm">
                <Send className="h-3.5 w-3.5" /> Send to All Students
              </button>
            </div>
          </GlassCard>
        </div>

      </div>
    </AppShell>
  );
}