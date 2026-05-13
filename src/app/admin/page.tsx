"use client";

import { Building2, Users2, GraduationCap, UserRound, TrendingUp, Clock, Activity, Shield } from "lucide-react";
import { AdminShell } from "@/components/page-shell";
import { GlassCard, Pill, ProgressBar } from "@/components/platform";

/* ── Mock data ───────────────────────────────────────────── */
const stats = [
  { label: "Total Schools",  value: "12",    sub: "+2 this month",  icon: Building2,    from: "from-indigo-500", to: "to-violet-600" },
  { label: "Total Teachers", value: "340",   sub: "Across 12 schools", icon: UserRound, from: "from-violet-500", to: "to-purple-700" },
  { label: "Total Students", value: "1,820", sub: "Active learners",  icon: GraduationCap, from: "from-indigo-400", to: "to-cyan-500" },
  { label: "Total Parents",  value: "587",   sub: "Registered",       icon: Users2,     from: "from-purple-500", to: "to-indigo-600" },
];

/* DAU over last 7 days */
const dauData = [
  { day: "Mon", val: 1840 },
  { day: "Tue", val: 1920 },
  { day: "Wed", val: 2050 },
  { day: "Thu", val: 1980 },
  { day: "Fri", val: 2104 },
  { day: "Sat", val: 1650 },
  { day: "Sun", val: 1420 },
];

/* Schools by enrollment */
const schoolsEnrollment = [
  { name: "Delhi Public School, Noida",  students: 340, teachers: 42 },
  { name: "Ryan International, Gurugram", students: 280, teachers: 35 },
  { name: "Kendriya Vidyalaya Sector 5",  students: 220, teachers: 28 },
  { name: "DAV Public School, Noida",     students: 195, teachers: 24 },
  { name: "Amity International, Saket",   students: 175, teachers: 22 },
  { name: "St. Mary's High School",       students: 120, teachers: 18 },
];

const activityFeed = [
  { action: "New school onboarded", detail: "Lotus Valley International, Noida", time: "4 min ago",  dot: "bg-indigo-500" },
  { action: "Teacher registered",   detail: "Mr. Rahul Verma · DPS Noida",       time: "12 min ago", dot: "bg-violet-500" },
  { action: "Student batch import", detail: "120 students · Ryan International",  time: "28 min ago", dot: "bg-cyan-500" },
  { action: "Parent onboarded",     detail: "Mrs. Anita Joshi · KV Sector 5",    time: "41 min ago", dot: "bg-purple-500" },
  { action: "School status updated","detail": "Amity International → Active",    time: "1 hr ago",   dot: "bg-indigo-400" },
];

/* ── SVG Line Chart helpers ──────────────────────────────── */
const W = 560, H = 130, MIN = 1200, MAX = 2200;
function toY(val: number) { return H - ((val - MIN) / (MAX - MIN)) * H; }
const points = dauData.map((d, i) => ({ x: (i / (dauData.length - 1)) * W, y: toY(d.val) }));
const linePath = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");
const fillPath = `${linePath} L ${W},${H} L 0,${H} Z`;

export default function AdminDashboardPage() {
  return (
    <AdminShell active="Dashboard" title="Admin Console">
      <div className="space-y-5">

        {/* Stat cards */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {stats.map(({ label, value, sub, icon: Icon, from, to }) => (
            <GlassCard key={label} className="relative overflow-hidden p-5">
              <div className={`absolute -right-4 -top-4 h-20 w-20 rounded-full bg-gradient-to-br ${from} ${to} opacity-10 blur-2xl`} />
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">{label}</p>
                  <p className="mt-2 text-3xl font-black text-ink">{value}</p>
                  <p className="mt-1 text-xs text-slate-400">{sub}</p>
                </div>
                <div className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${from} ${to} shadow-lg`}>
                  <Icon className="h-5 w-5 text-white" />
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Charts row */}
        <div className="grid gap-5 xl:grid-cols-[1.4fr_0.6fr]">

          {/* SVG Line Chart — DAU */}
          <GlassCard className="p-6">
            <div className="flex items-center justify-between mb-5">
              <div>
                <Pill tone="indigo">Daily Active Users</Pill>
                <h3 className="mt-2 text-xl font-bold text-ink">Platform Engagement — Last 7 Days</h3>
              </div>
              <div className="text-right">
                <p className="text-2xl font-black text-ink">2,104</p>
                <p className="text-xs text-slate-400">peak this week</p>
              </div>
            </div>

            {/* Chart */}
            <div className="relative">
              <svg viewBox={`0 0 ${W} ${H + 20}`} className="w-full" preserveAspectRatio="none" style={{ height: 160 }}>
                <defs>
                  <linearGradient id="dauLine" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#7c3aed" />
                  </linearGradient>
                  <linearGradient id="dauFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6366f1" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.02" />
                  </linearGradient>
                </defs>
                {/* Grid lines */}
                {[0, 0.33, 0.66, 1].map((t) => (
                  <line key={t} x1="0" y1={H * t} x2={W} y2={H * t} stroke="currentColor" strokeWidth="0.5" className="text-royal/8 dark:text-white/8" />
                ))}
                {/* Fill */}
                <path d={fillPath} fill="url(#dauFill)" />
                {/* Line */}
                <path d={linePath} fill="none" stroke="url(#dauLine)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                {/* Dots */}
                {points.map((p, i) => (
                  <circle key={i} cx={p.x} cy={p.y} r="4" fill="#6366f1" stroke="white" strokeWidth="2" />
                ))}
              </svg>
              {/* X-axis labels */}
              <div className="flex justify-between px-0 mt-1">
                {dauData.map((d) => (
                  <span key={d.day} className="text-[10px] font-semibold text-slate-400">{d.day}</span>
                ))}
              </div>
            </div>
          </GlassCard>

          {/* User distribution */}
          <GlassCard className="p-6">
            <div className="flex items-center gap-2 mb-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 shadow-sm">
                <Users2 className="h-4 w-4 text-white" />
              </div>
              <h3 className="text-base font-bold text-ink">User Distribution</h3>
            </div>
            <div className="space-y-4">
              {[
                { role: "Students", count: 1820, pct: 66, accent: "teal" as const },
                { role: "Teachers", count: 340,  pct: 12, accent: "marigold" as const },
                { role: "Parents",  count: 587,  pct: 21, accent: "crimson" as const },
              ].map((item) => (
                <div key={item.role}>
                  <div className="mb-1.5 flex justify-between text-xs">
                    <span className="font-semibold text-ink">{item.role}</span>
                    <span className="text-slate-400">{item.count} · {item.pct}%</span>
                  </div>
                  <ProgressBar value={item.pct} accent={item.accent} />
                </div>
              ))}
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {[
                { label: "Avg Session", value: "24 min" },
                { label: "Retention",   value: "82%" },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl bg-surface dark:bg-slate-800/50 p-3 text-center">
                  <p className="text-lg font-black text-ink">{s.value}</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* School enrollment bar chart + Activity feed */}
        <div className="grid gap-5 xl:grid-cols-[1.3fr_0.7fr]">

          {/* Horizontal bar chart */}
          <GlassCard className="p-6">
            <div className="flex items-center justify-between mb-5">
              <div>
                <Pill tone="indigo">Schools</Pill>
                <h3 className="mt-2 text-xl font-bold text-ink">Enrollment by School</h3>
              </div>
              <TrendingUp className="h-5 w-5 text-indigo-500" />
            </div>
            <div className="space-y-4">
              {schoolsEnrollment.map((school, i) => {
                const pct = Math.round((school.students / 340) * 100);
                const colors = [
                  "from-indigo-500 to-violet-500",
                  "from-violet-500 to-purple-600",
                  "from-indigo-400 to-cyan-500",
                  "from-purple-500 to-indigo-600",
                  "from-indigo-300 to-violet-400",
                  "from-violet-400 to-purple-500",
                ];
                return (
                  <div key={school.name}>
                    <div className="mb-1.5 flex items-center justify-between gap-3">
                      <span className="text-xs font-semibold text-ink truncate flex-1">{school.name}</span>
                      <span className="text-xs text-slate-400 flex-shrink-0">{school.students} students · {school.teachers} teachers</span>
                    </div>
                    <div className="h-2.5 w-full rounded-full bg-royal/8 dark:bg-white/10 overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${colors[i]} transition-all duration-700`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </GlassCard>

          {/* Activity feed */}
          <GlassCard className="p-6">
            <div className="flex items-center gap-2 mb-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-700 shadow-sm">
                <Clock className="h-4 w-4 text-white" />
              </div>
              <h3 className="text-base font-bold text-ink">Recent Activity</h3>
            </div>
            <div className="space-y-3">
              {activityFeed.map((log, i) => (
                <div key={i} className="flex items-start gap-3 rounded-2xl bg-surface dark:bg-slate-800/50 px-4 py-3">
                  <span className={`mt-1.5 h-2 w-2 flex-shrink-0 rounded-full ${log.dot}`} />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-ink">{log.action}</p>
                    <p className="text-xs text-slate-400 truncate">{log.detail}</p>
                  </div>
                  <span className="text-[10px] text-slate-400 flex-shrink-0 mt-0.5">{log.time}</span>
                </div>
              ))}
            </div>

            {/* Quick system health */}
            <div className="mt-4 rounded-2xl border border-indigo-500/15 bg-indigo-500/5 px-4 py-3">
              <div className="flex items-center gap-2 mb-2">
                <Activity className="h-3.5 w-3.5 text-indigo-500" />
                <p className="text-xs font-bold text-indigo-600 dark:text-indigo-400">System Health</p>
              </div>
              {["API Servers", "Database", "Cache Layer", "AI Engine"].map((s) => (
                <div key={s} className="flex items-center gap-2 mt-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <span className="text-xs text-slate-500">{s}</span>
                  <span className="ml-auto text-[10px] font-semibold text-emerald-500">Online</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

      </div>
    </AdminShell>
  );
}
