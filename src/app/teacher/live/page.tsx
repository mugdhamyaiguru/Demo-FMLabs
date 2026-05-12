"use client";
import { Video, Play, Mic, BookOpen, FlaskConical, Users2, Clock, CalendarDays } from "lucide-react";
import { AppShell } from "@/components/page-shell";
import { GlassCard, Pill } from "@/components/platform";

const pastSessions = [
  { title: "Fractions — Introduction", type: "Theory", class: "8A", date: "12 May 2026", duration: "45 min", students: 30 },
  { title: "Circuit Lab Demo", type: "Practical", class: "8B", date: "11 May 2026", duration: "60 min", students: 28 },
  { title: "Python Functions", type: "Theory", class: "9A", date: "10 May 2026", duration: "50 min", students: 35 },
  { title: "Newton Laws — Live Demo", type: "Practical", class: "8A", date: "9 May 2026", duration: "40 min", students: 31 },
];

const upcoming = [
  { title: "Algebra — Equations Revision", class: "8A", time: "Today, 3:00 PM",    type: "Theory" },
  { title: "Python OOP Workshop",          class: "8B", time: "Tomorrow, 11:00 AM", type: "Practical" },
  { title: "Science Quiz Review",          class: "9A", time: "16 May, 2:00 PM",    type: "Theory" },
];

export default function LiveSessionPage() {
  return (
    <AppShell active="Live Session" title="Live Session Launcher" role="teacher">
      <div className="space-y-5">
        <div className="grid gap-5 xl:grid-cols-[1fr_340px]">
          {/* Left — Launch + upcoming */}
          <div className="space-y-5">
            {/* Launch card */}
            <GlassCard className="p-6">
              <div className="rounded-2xl bg-gradient-to-br from-royal/10 to-[#6f5a88]/10 border border-royal/15 p-6 text-center mb-5">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-royal to-[#6f5a88] shadow-lg">
                  <Video className="h-8 w-8 text-white" />
                </div>
                <p className="mt-4 text-lg font-bold text-ink">Start a Live Class</p>
                <p className="mt-1 text-sm text-slate-400">Broadcast to all students in your assigned class</p>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div>
                    <label className="mb-1 block text-left text-xs font-semibold text-slate-500">Session Type</label>
                    <select className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 px-3 py-2.5 text-sm text-ink outline-none">
                      <option>Theory Lecture</option><option>Practical Demo</option><option>Quiz Review</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-1 block text-left text-xs font-semibold text-slate-500">Class</label>
                    <select className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 px-3 py-2.5 text-sm text-ink outline-none">
                      <option>8A</option><option>8B</option><option>9A</option>
                    </select>
                  </div>
                </div>
                <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-royal to-[#6f5a88] py-3 text-sm font-bold text-white shadow-md hover:-translate-y-0.5 transition-all">
                  <Play className="h-4 w-4" /> Launch Session Now
                </button>
              </div>

              <h3 className="text-base font-bold text-ink mb-3">Session Tools</h3>
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  { label: "Record & Save", desc: "Auto-save for absent students", Icon: Mic, grad: "from-teal to-[#0d7272]" },
                  { label: "Screen Share", desc: "Share slides or whiteboard", Icon: BookOpen, grad: "from-gold to-marigold" },
                  { label: "Practical Demo", desc: "Live lab walkthrough", Icon: FlaskConical, grad: "from-crimson to-[#e05555]" },
                ].map(({ label, desc, Icon, grad }) => (
                  <button key={label} className="flex flex-col items-center gap-2 rounded-2xl border border-royal/8 dark:border-white/8 bg-surface p-4 text-center hover:bg-royal/5 transition-colors">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${grad} shadow-sm`}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <p className="text-sm font-semibold text-ink">{label}</p>
                    <p className="text-[11px] text-slate-400">{desc}</p>
                  </button>
                ))}
              </div>
            </GlassCard>

            {/* Upcoming */}
            <GlassCard className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <CalendarDays className="h-5 w-5 text-teal" />
                <h3 className="text-base font-bold text-ink">Upcoming Sessions</h3>
              </div>
              <div className="space-y-3">
                {upcoming.map((u) => (
                  <div key={u.title} className="flex items-center justify-between rounded-2xl border border-royal/8 dark:border-white/8 bg-surface px-4 py-3">
                    <div>
                      <p className="text-sm font-semibold text-ink">{u.title}</p>
                      <p className="text-[11px] text-slate-400 mt-0.5">{u.time} · Class {u.class}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Pill tone={u.type === "Practical" ? "gold" : "teal"}>{u.type}</Pill>
                      <button className="rounded-lg bg-royal/8 px-3 py-1.5 text-xs font-semibold text-royal dark:text-teal hover:bg-royal/15 transition-colors">Start</button>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>

          {/* Right — Past sessions */}
          <GlassCard className="p-6 h-fit">
            <div className="flex items-center gap-2 mb-5">
              <Clock className="h-5 w-5 text-slate-400" />
              <h3 className="text-base font-bold text-ink">Past Sessions</h3>
            </div>
            <div className="space-y-3">
              {pastSessions.map((s) => (
                <div key={s.title} className="rounded-2xl border border-royal/8 dark:border-white/8 bg-surface p-4">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-sm font-semibold text-ink">{s.title}</p>
                      <p className="text-[11px] text-slate-400 mt-0.5">{s.date} · Class {s.class}</p>
                    </div>
                    <Pill tone={s.type === "Practical" ? "gold" : "teal"}>{s.type}</Pill>
                  </div>
                  <div className="mt-2 flex gap-4 text-[11px] text-slate-400">
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{s.duration}</span>
                    <span className="flex items-center gap-1"><Users2 className="h-3 w-3" />{s.students} attended</span>
                  </div>
                  <button className="mt-2 text-[11px] font-semibold text-teal hover:underline">View recording</button>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </AppShell>
  );
}
