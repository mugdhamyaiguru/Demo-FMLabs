"use client";
import { Bell, AlertCircle, CheckCircle2, Clock, Send, Trash2 } from "lucide-react";
import { AppShell } from "@/components/page-shell";
import { GlassCard, Pill } from "@/components/platform";

const notifications = [
  { type: "alert",   title: "Low Attendance Warning",          message: "Sneha Verma has attendance below 75%. Parent notification recommended.",    time: "10 min ago",   class: "8A" },
  { type: "alert",   title: "Missing Submission",              message: "4 students haven't submitted Fractions Quiz due tomorrow.",                  time: "1 hr ago",     class: "8A" },
  { type: "info",    title: "Live Session Reminder",           message: "Your scheduled session 'Algebra Revision' starts at 3:00 PM today.",        time: "2 hrs ago",    class: "8A" },
  { type: "success", title: "Weekly Report Sent",              message: "Weekly progress report successfully sent to all 32 parents.",               time: "Yesterday",    class: "All" },
  { type: "info",    title: "Practical Submissions Due",       message: "Circuit Lab practical evaluations are due by end of this week.",            time: "Yesterday",    class: "8B" },
  { type: "success", title: "Assignment Graded",               message: "Python Basics Checkpoint has been graded. 30/30 students reviewed.",       time: "2 days ago",   class: "8B" },
];

const notifStyle = {
  alert:   { border: "border-crimson/20 bg-crimson/5",     Icon: AlertCircle,  iconCls: "text-crimson" },
  info:    { border: "border-teal/20 bg-teal/5",           Icon: Clock,        iconCls: "text-teal"    },
  success: { border: "border-[#22c55e]/20 bg-[#22c55e]/5", Icon: CheckCircle2, iconCls: "text-[#22c55e]" },
};

const templates = [
  "Reminder: Assignment due tomorrow — please submit on time.",
  "Great work this week! Keep up the momentum.",
  "Attendance reminder: Regular attendance is important for your progress.",
  "Parent-teacher meeting scheduled for next Friday at 5:00 PM.",
];

export default function NotificationsPage() {
  return (
    <AppShell active="Notifications" title="Notification Centre" role="teacher">
      <div className="space-y-5">
        <div className="grid gap-4 sm:grid-cols-4">
          {[
            { label: "Total Alerts", value: "6",  sub: "Last 7 days" },
            { label: "Urgent",       value: "2",  sub: "Needs action" },
            { label: "Sent by You",  value: "5",  sub: "This month" },
            { label: "Parents Notified", value: "32", sub: "This week" },
          ].map(({ label, value, sub }) => (
            <GlassCard key={label} className="p-5">
              <p className="text-xs text-slate-400">{label}</p>
              <p className="mt-1 text-2xl font-bold text-ink">{value}</p>
              <p className="text-[11px] text-slate-400">{sub}</p>
            </GlassCard>
          ))}
        </div>

        <div className="grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
          {/* Notification feed */}
          <GlassCard className="p-6">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-crimson to-[#e05555] shadow-sm">
                  <Bell className="h-4 w-4 text-white" />
                </div>
                <h3 className="text-lg font-bold text-ink">Recent Alerts</h3>
              </div>
              <button className="text-xs font-semibold text-teal hover:underline">Mark all read</button>
            </div>
            <div className="space-y-3">
              {notifications.map((n, i) => {
                const meta = notifStyle[n.type as keyof typeof notifStyle];
                return (
                  <div key={i} className={`flex items-start gap-3 rounded-2xl border px-4 py-3.5 ${meta.border}`}>
                    <meta.Icon className={`h-4 w-4 flex-shrink-0 mt-0.5 ${meta.iconCls}`} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="text-sm font-semibold text-ink">{n.title}</p>
                        <Pill tone={n.class === "All" ? "royal" : "teal"}>{n.class === "All" ? "All Classes" : `Class ${n.class}`}</Pill>
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">{n.message}</p>
                      <p className="text-[11px] text-slate-400 mt-1">{n.time}</p>
                    </div>
                    <button className="flex-shrink-0 text-slate-300 hover:text-crimson transition-colors">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                );
              })}
            </div>
          </GlassCard>

          {/* Compose panel */}
          <div className="space-y-5">
            <GlassCard className="p-6">
              <h3 className="text-base font-bold text-ink mb-4">Send Announcement</h3>
              <div className="space-y-3">
                <label className="block">
                  <span className="mb-1 block text-xs font-semibold text-slate-500">Send To</span>
                  <select className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 px-3 py-2.5 text-sm text-ink outline-none focus:border-teal">
                    <option>All Students (8A, 8B, 9A)</option>
                    <option>Class 8A only</option>
                    <option>Class 8B only</option>
                    <option>Class 9A only</option>
                    <option>Parents</option>
                  </select>
                </label>
                <label className="block">
                  <span className="mb-1 block text-xs font-semibold text-slate-500">Subject</span>
                  <input type="text" placeholder="e.g. Assignment Reminder" className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 px-3 py-2.5 text-sm text-ink outline-none focus:border-teal placeholder:text-slate-400" />
                </label>
                <label className="block">
                  <span className="mb-1 block text-xs font-semibold text-slate-500">Message</span>
                  <textarea rows={4} placeholder="Type your message here..." className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 px-3 py-2.5 text-sm text-ink outline-none focus:border-teal resize-none placeholder:text-slate-400" />
                </label>
                <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-crimson to-[#e05555] py-3 text-sm font-bold text-white shadow-sm hover:-translate-y-0.5 transition-all">
                  <Send className="h-4 w-4" /> Send Announcement
                </button>
              </div>
            </GlassCard>

            <GlassCard className="p-6">
              <h3 className="text-sm font-bold text-ink mb-3">Quick Templates</h3>
              <div className="space-y-2">
                {templates.map((t) => (
                  <button key={t} className="w-full rounded-xl border border-royal/8 dark:border-white/8 bg-surface px-3 py-2.5 text-left text-xs text-slate-500 hover:bg-royal/5 hover:text-ink transition-colors leading-snug">
                    {t}
                  </button>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
