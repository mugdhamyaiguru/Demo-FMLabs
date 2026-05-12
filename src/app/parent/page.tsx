"use client";
import {
  ShieldCheck, BookOpenCheck, Clock3, Flame, MessageSquare, AlertCircle,
  CheckCircle2, Download, TrendingUp, CalendarCheck, FlaskConical, Bell,
} from "lucide-react";
import { AppShell } from "@/components/page-shell";
import { GlassCard, Pill, ProgressBar } from "@/components/platform";

const subjects = [
  { label: "Mathematics",  value: 78, accent: "teal"     as const },
  { label: "Science",      value: 86, accent: "marigold" as const },
  { label: "Coding",       value: 91, accent: "gold"     as const },
  { label: "English",      value: 62, accent: "crimson"  as const },
];

const recentModules = [
  { title: "Fractions & Decimals",  subject: "Math",    date: "12 May", done: true  },
  { title: "Newton's Laws",         subject: "Science", date: "11 May", done: true  },
  { title: "Python Functions",      subject: "Coding",  date: "10 May", done: true  },
  { title: "Essay Structure",       subject: "English", date: "9 May",  done: false },
];

const alerts = [
  { type: "alert",   msg: "English progress dropped below 65% this week.",         time: "Today" },
  { type: "info",    msg: "Science practical evaluation is due Friday.",            time: "Today" },
  { type: "success", msg: "Aanya completed the Python Functions module.",           time: "Yesterday" },
  { type: "alert",   msg: "No activity logged in the last 3 days.",               time: "Yesterday" },
];

const notifIcon = {
  alert:   <AlertCircle className="h-4 w-4 text-crimson flex-shrink-0" />,
  info:    <Clock3 className="h-4 w-4 text-teal flex-shrink-0" />,
  success: <CheckCircle2 className="h-4 w-4 text-[#22c55e] flex-shrink-0" />,
};

export default function ParentPage() {
  return (
    <AppShell active="Dashboard" title="Parent Dashboard" role="parent">
      <div className="space-y-5">

        {/* KPI Strip */}
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {[
            { label: "Overall Progress",  value: "79%", sub: "Aanya Sharma · Class 8A", Icon: TrendingUp,    grad: "from-teal to-[#0d7272]" },
            { label: "Attendance",        value: "94%", sub: "This month",              Icon: CalendarCheck, grad: "from-gold to-marigold" },
            { label: "Modules Completed", value: "24",  sub: "Of 36 total",             Icon: BookOpenCheck, grad: "from-royal to-[#6f5a88]" },
            { label: "Active Alerts",     value: "2",   sub: "Needs attention",         Icon: Bell,          grad: "from-crimson to-[#e05555]" },
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

        {/* Subject Progress + Recent Modules */}
        <div className="grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
          <GlassCard className="p-6">
            <div className="flex items-center gap-2 mb-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-teal to-[#0d7272] shadow-sm">
                <ShieldCheck className="h-4 w-4 text-white" />
              </div>
              <div>
                <Pill tone="teal">Child Progress</Pill>
                <h3 className="mt-1 text-lg font-bold text-ink">Subject Performance · Aanya Sharma</h3>
              </div>
            </div>
            <div className="space-y-4">
              {subjects.map((s) => (
                <div key={s.label}>
                  <div className="mb-1.5 flex justify-between text-sm">
                    <span className="font-medium text-ink">{s.label}</span>
                    <span className={`font-bold ${s.value >= 80 ? "text-teal" : s.value >= 65 ? "text-gold" : "text-crimson"}`}>{s.value}%</span>
                  </div>
                  <ProgressBar value={s.value} accent={s.accent} />
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="flex items-center gap-2 mb-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-royal to-[#6f5a88] shadow-sm">
                <BookOpenCheck className="h-4 w-4 text-white" />
              </div>
              <h3 className="text-lg font-bold text-ink">Recent Modules</h3>
            </div>
            <div className="space-y-2.5">
              {recentModules.map((m) => (
                <div key={m.title} className="flex items-center justify-between rounded-2xl border border-royal/8 dark:border-white/8 bg-surface px-4 py-3">
                  <div>
                    <p className="text-sm font-semibold text-ink">{m.title}</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">{m.subject} · {m.date}</p>
                  </div>
                  {m.done
                    ? <CheckCircle2 className="h-5 w-5 text-teal flex-shrink-0" />
                    : <Clock3 className="h-5 w-5 text-gold flex-shrink-0" />}
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Weak Subjects + Alerts + Quick Reports */}
        <div className="grid gap-5 lg:grid-cols-3">
          <GlassCard className="p-6">
            <div className="flex items-center gap-2 mb-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-gold to-marigold shadow-sm">
                <Flame className="h-4 w-4 text-white" />
              </div>
              <h3 className="text-base font-bold text-ink">Weak Areas</h3>
            </div>
            <div className="space-y-2.5">
              {[
                { topic: "Fractions practice",   subject: "Math",    sev: "high" },
                { topic: "Essay writing skills", subject: "English", sev: "high" },
                { topic: "Vocabulary review",    subject: "English", sev: "medium" },
                { topic: "Coding fundamentals",  subject: "Coding",  sev: "low" },
              ].map((w) => (
                <div key={w.topic} className={`rounded-2xl border px-4 py-3 ${w.sev === "high" ? "border-crimson/20 bg-crimson/5" : w.sev === "medium" ? "border-gold/20 bg-gold/5" : "border-teal/20 bg-teal/5"}`}>
                  <p className="text-sm font-semibold text-ink">{w.topic}</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">{w.subject} · {w.sev === "high" ? "Needs urgent attention" : w.sev === "medium" ? "Needs improvement" : "Minor gap"}</p>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="flex items-center gap-2 mb-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-crimson to-[#e05555] shadow-sm">
                <Bell className="h-4 w-4 text-white" />
              </div>
              <h3 className="text-base font-bold text-ink">Alerts & Notifications</h3>
            </div>
            <div className="space-y-2.5">
              {alerts.map((a, i) => (
                <div key={i} className={`flex items-start gap-3 rounded-2xl border px-3 py-3 ${a.type === "alert" ? "border-crimson/20 bg-crimson/5" : a.type === "success" ? "border-[#22c55e]/20 bg-[#22c55e]/5" : "border-teal/20 bg-teal/5"}`}>
                  {notifIcon[a.type as keyof typeof notifIcon]}
                  <div>
                    <p className="text-xs text-ink leading-snug">{a.msg}</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">{a.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="flex items-center gap-2 mb-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-teal to-[#0d7272] shadow-sm">
                <Download className="h-4 w-4 text-white" />
              </div>
              <h3 className="text-base font-bold text-ink">Quick Downloads</h3>
            </div>
            <div className="space-y-2.5">
              {[
                { title: "Weekly Progress Report",  ready: true  },
                { title: "Attendance Summary",       ready: true  },
                { title: "Skill Performance Report", ready: true  },
                { title: "Certification Summary",    ready: false },
              ].map((r) => (
                <div key={r.title} className="flex items-center justify-between rounded-2xl border border-royal/8 dark:border-white/8 bg-surface px-4 py-3">
                  <p className="text-sm font-semibold text-ink">{r.title}</p>
                  <button className={`flex items-center gap-1 rounded-xl px-3 py-1.5 text-xs font-semibold transition-colors ${r.ready ? "bg-teal/10 text-teal hover:bg-teal/20" : "bg-slate-100 dark:bg-slate-700 text-slate-400 cursor-not-allowed"}`}>
                    <Download className="h-3 w-3" />{r.ready ? "PDF" : "Soon"}
                  </button>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

      </div>
    </AppShell>
  );
}